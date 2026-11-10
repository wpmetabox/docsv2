---
title: Coding with AI
---

AI tools like ChatGPT, Claude, Cursor, and Copilot can write Meta Box code for you. But they often write code that looks right and does not work: they mix Meta Box with ACF, invent extension names, or read data from the wrong place.

This page lists the mistakes AI tools make most often, and the correct code for each one. Give this page to your AI tool before you ask it to write Meta Box code.

## Tell your AI tool to read this page

Add the text below to the rules file of your project: `AGENTS.md`, `CLAUDE.md`, `.cursor/rules`, or the custom instructions of ChatGPT.

```md
This project uses Meta Box (https://metabox.io) for custom fields.
Before you write Meta Box code, read https://docs.metabox.io/coding-with-ai/.
Use only functions, hooks, and parameters that are in the Meta Box docs (https://docs.metabox.io).
Do not use ACF functions such as get_field() or the_field().
```

If you use an AI agent that can manage your site through MCP (for example, Claude Code or Cursor), see [Abilities](/abilities/).

## Extension names

AI tools sometimes refer to extensions that do not exist. Use this table to find the correct extension:

AI says | Correct extension
---|---
"Meta Box Models", "Models extension", "Custom Model extension" | [MB Custom Table](/extensions/mb-custom-table/#custom-models). Custom models are a feature of MB Custom Table.
"Meta Box Repeater", "Repeater field" | [Meta Box Group](/extensions/meta-box-group/) with `'clone' => true`, or any field with `'clone' => true`. See [cloning fields](/cloning-fields/).
"Meta Box Options Page" | [MB Settings Page](/extensions/mb-settings-page/)
"Meta Box Relationship field" | [MB Relationships](/extensions/mb-relationships/). Relationships are not fields. See [below](#relationships-are-not-fields).

## Do not use ACF functions

Meta Box does not have `get_field()`, `the_field()`, `have_rows()`, or `get_sub_field()`. Use [`rwmb_meta()`](/functions/rwmb-meta/) to get a value and [`rwmb_the_value()`](/functions/rwmb-the-value/) to output it.

```php
// Wrong
$price = get_field( 'price' );

// Correct
$price = rwmb_meta( 'price' );       // Get the value.
rwmb_the_value( 'price' );           // Output the value.
```

## Use `rwmb_meta()`, not `get_post_meta()`

`get_post_meta()` returns the raw value from the database. It gives wrong results for many fields:

- Fields with multiple values (`'multiple' => true`, for example `checkbox_list`, `image_advanced`, `file`) save **one row per value**. `get_post_meta( $post_id, $key, true )` returns only the first value.
- Image and file fields save attachment IDs. `rwmb_meta()` returns the image URL, title, and sizes.
- Fields saved in a [custom table](/extensions/mb-custom-table/) are not in the post meta table. `get_post_meta()` returns nothing.

```php
// Wrong: returns only the first image ID
$gallery = get_post_meta( get_the_ID(), 'gallery', true );

// Correct: returns all images with their URLs
$gallery = rwmb_meta( 'gallery', [ 'size' => 'medium' ] );
foreach ( $gallery as $image ) {
	echo '<img src="' . esc_url( $image['url'] ) . '">';
}
```

See [Database](/database/) for how Meta Box saves each field type.

## Sub-fields are not meta keys

A group saves all its sub-fields as one array, in one meta key: the ID of the group. There is no meta key for each sub-field.

```php
// Wrong: 'address_city' is a sub-field, not a meta key
$city = rwmb_meta( 'address_city' );

// Correct: get the group, then the sub-field
$address = rwmb_meta( 'address' ) ?: [];
$city    = $address['address_city'] ?? '';

// Cloneable group: rwmb_meta() returns a list of groups
$contacts = rwmb_meta( 'contacts' ) ?: [];
foreach ( $contacts as $contact ) {
	echo esc_html( $contact['name'] ?? '' );
}
```

See [Getting sub-field values](/extensions/meta-box-group/#getting-sub-field-values).

## Set `object_type` for terms, users, settings pages, and models

`rwmb_meta()` reads post fields by default. For other objects, set `object_type` in the 2nd parameter, and the object ID in the 3rd parameter.

```php
// Term
$color = rwmb_meta( 'color', [ 'object_type' => 'term' ], $term_id );

// User
$phone = rwmb_meta( 'phone', [ 'object_type' => 'user' ], $user_id );

// Settings page: the 3rd parameter is the option name of the settings page
$hotline = rwmb_meta( 'hotline', [ 'object_type' => 'setting' ], 'site_option' );

// Custom model
$status = rwmb_meta( 'status', [
	'object_type' => 'model',
	'type'        => 'transaction', // Model name
], $model_id );
```

For posts that save fields in a custom table, set the table:

```php
$value = rwmb_meta( 'price', [
	'storage_type' => 'custom_table',
	'table'        => 'products',
], $post_id );
```

## Relationships are not fields

[MB Relationships](/extensions/mb-relationships/) saves connections in its own table, not in post meta. AI tools often invent a field ID and call `rwmb_meta()` or `get_post_meta()` with it. That returns nothing.

```php
// Wrong
$speakers = rwmb_meta( 'event_speakers' );

// Correct: use the relationship ID
$speakers = MB_Relationships_API::get_connected( [
	'id'   => 'events_to_speakers', // Relationship ID
	'from' => get_the_ID(),
] );
foreach ( $speakers as $speaker ) {
	echo esc_html( $speaker->post_title );
}
```

To add or remove a connection with code:

```php
MB_Relationships_API::add( $event_id, $speaker_id, 'events_to_speakers' );
MB_Relationships_API::delete( $event_id, $speaker_id, 'events_to_speakers' );
```

## Custom models

Custom models are a feature of [MB Custom Table](/extensions/mb-custom-table/#custom-models). Register a model on `init` with priority 10 (the default). If you register it with priority 20 or later, the model fields do not work.

```php
add_action( 'init', function () {
	mb_register_model( 'transaction', [
		'table'  => 'transactions',
		'labels' => [
			'name'          => 'Transactions',
			'singular_name' => 'Transaction',
		],
	] );
} );
```

To get one model:

```php
$row    = \MetaBox\CustomTable\API::get( $model_id, 'transactions' ); // Raw row as an array
$status = rwmb_meta( 'status', [ 'object_type' => 'model', 'type' => 'transaction' ], $model_id );
```

Meta Box does not have a function to query many models (filter, sort, or limit). `WP_Query` and `get_posts()` do not work with models. Query the table with `$wpdb`:

```php
global $wpdb;

// Get the 10 latest completed transactions.
$rows = $wpdb->get_results( $wpdb->prepare(
	"SELECT * FROM transactions WHERE status = %s ORDER BY created_at DESC LIMIT %d",
	'completed',
	10
) );
```

Use the same table name that you set in `mb_register_model()`.

## Hooks: use `add_filter()` and `add_action()`

The [Actions](/category/actions/) and [Filters](/category/filters/) references show where Meta Box calls a hook, for example:

```php
$data = apply_filters( 'rwmb_profile_insert_user_data', $data, $config );
```

This is the hook signature, not code to copy. To use the hook, add a callback with `add_filter()` or `add_action()`, with the same parameters. A filter callback must return the value.

For example, to add a custom ID to each new user who registers with [MB User Profile](/extensions/mb-user-profile/):

```php
add_action( 'rwmb_profile_after_save_user', function ( $user ) {
	// This hook runs for both registration and profile update.
	if ( ! $user->user_id || get_user_meta( $user->user_id, 'member_id', true ) ) {
		return;
	}
	update_user_meta( $user->user_id, 'member_id', 'M-' . $user->user_id );
} );
```

To change the user data before Meta Box creates the user:

```php
add_filter( 'rwmb_profile_insert_user_data', function ( $data, $config ) {
	$data['display_name'] = $data['first_name'] ?? $data['user_login'] ?? '';
	return $data; // A filter callback must return the value.
}, 10, 2 );
```

## Register fields: return `$meta_boxes`

When you [register fields with code](/creating-fields-with-code/), the `rwmb_meta_boxes` callback must return the array. If it does not, all field groups disappear, including field groups from other code.

```php
add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
	$meta_boxes[] = [
		'title'      => 'Event details',
		'post_types' => 'event',
		'fields'     => [
			[
				'name' => 'Date',
				'id'   => 'event_date',
				'type' => 'date',
			],
		],
	];
	return $meta_boxes;
} );
```

To get correct code without writing it, create the field group in the builder and click **Get PHP Code**. For JSON files, use the [JSON schema](/tutorials/json-schema-autocomplete/) (`https://schemas.metabox.io/field-group.json`) so that your editor and AI tool can check the settings.

## Views in the Query Loop block

[MB Views](/extensions/mb-views/) works inside the Query Loop block of the block editor. In a view, `{{ post }}` is the current post of the loop, so you do not need code to get the post ID.

1. Create a view. Set **Type** to **Shortcode**.
2. Write the template with `{{ post.* }}` variables, for example:
	```twig
	<h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
	<p>Price: {{ post.price }}</p>
	```
3. In the block editor, add the **View** block (or a Shortcode block with `[mbv name="view-name"]`) inside the **Post Template** block of the Query Loop.

This requires MB Views 1.15.0 or later. In older versions, `{{ post }}` was always the main post of the page.

## Check the code before you use it

- Make sure that each function, hook, and parameter is in these docs. If you cannot find it, the AI tool probably invented it.
- Test the code on a staging site first.
- If the code does not work, ask in the [support forum](https://support.metabox.io). Include the code and the error message.
