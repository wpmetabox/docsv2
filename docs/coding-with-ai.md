---
title: Coding with AI
---

AI tools often write Meta Box code that does not work. This page gives AI tools the rules for correct Meta Box code. It also lists the mistakes that AI tools make most often. Each mistake shows the wrong code and the correct code.

To make your AI tool read this page, add this text to the rules file of your project (`AGENTS.md`, `CLAUDE.md`, or `.cursor/rules`):

```md
This project uses Meta Box (https://metabox.io) for custom fields.
Before you write Meta Box code, read https://docs.metabox.io/coding-with-ai/.
```

For Claude Code, Cursor, and other AI agents, you can also install the [Meta Box skill](https://github.com/wpmetabox/skills).

## How to write Meta Box code

### Create fields

Use one of these methods:

- Register the field group with the [`rwmb_meta_boxes`](/creating-fields-with-code/) filter.
- Save the field group as a [JSON file](/local-json/). Use the [JSON schema](/tutorials/json-schema-autocomplete/) to check the settings.
- Create the field group in [MB Builder](/extensions/meta-box-builder/). To get the PHP code, click **Get PHP Code**.

Use a prefix for field IDs, for example `event_date`. Use only the [field types](/fields/) and [field settings](/field-settings/) in the docs.

### Get field values

- Use [`rwmb_meta()`](/functions/rwmb-meta/) to get a value. Use [`rwmb_the_value()`](/functions/rwmb-the-value/) to show a value.
- For a term, user, settings page, or custom model, set `object_type` in `rwmb_meta()`.
- To show fields without PHP, use [MB Views](/extensions/mb-views/), [Block Bindings](/block-bindings/), or a page builder.

### Select the correct extension

Task | Extension
---|---
Repeat a set of fields | [Meta Box Group](/extensions/meta-box-group/) with `'clone' => true`
Connect posts, terms, or users | [MB Relationships](/extensions/mb-relationships/)
Save fields in a custom table | [MB Custom Table](/extensions/mb-custom-table/)
Save data that is not a post (orders, logs) | [Custom models](/extensions/mb-custom-table/#custom-models) in MB Custom Table
Make an options page | [MB Settings Page](/extensions/mb-settings-page/)
Make a registration, login, or profile form | [MB User Profile](/extensions/mb-user-profile/)
Make a form to submit posts | [MB Frontend Submission](/extensions/mb-frontend-submission/)
Make a Gutenberg block with fields | [MB Blocks](/extensions/mb-blocks/)
Show or hide fields with conditions | [Meta Box Conditional Logic](/extensions/meta-box-conditional-logic/)
Make templates without PHP | [MB Views](/extensions/mb-views/)

### Write safe code

- Escape output with `esc_html()`, `esc_url()`, or `esc_attr()`.
- Use `$wpdb->prepare()` for SQL.

### If you are not sure

- Read the docs at https://docs.metabox.io.
- If the project has the plugin, read the source in `wp-content/plugins/meta-box/`.
- Do not use a function, hook, or parameter that is not in the docs or in the source.

## Common mistakes

### Wrong extension names

AI tools invent extension names. The correct names are:

AI says | Correct
---|---
"Meta Box Models", "Models extension" | [Custom models](/extensions/mb-custom-table/#custom-models), a feature of MB Custom Table
"Meta Box Repeater", "Repeater field" | [Meta Box Group](/extensions/meta-box-group/) with `'clone' => true`
"Meta Box Options Page" | [MB Settings Page](/extensions/mb-settings-page/)
"Meta Box Relationship field" | [MB Relationships](/extensions/mb-relationships/). Relationships are not fields.

### ACF functions

Meta Box does not have `get_field()`, `the_field()`, `have_rows()`, or `get_sub_field()`.

```php
// Wrong
$price = get_field( 'price' );

// Correct
$price = rwmb_meta( 'price' ); // Get the value.
rwmb_the_value( 'price' );     // Show the value.
```

### `get_post_meta()` instead of `rwmb_meta()`

`get_post_meta()` gives wrong values for these fields:

- Fields with multiple values save one row for each value. `get_post_meta( $id, $key, true )` gets only the first value.
- Image and file fields save attachment IDs, not URLs.
- Fields in a [custom table](/extensions/mb-custom-table/) are not in post meta.

```php
// Wrong: gets only the first image ID
$gallery = get_post_meta( get_the_ID(), 'gallery', true );

// Correct: gets all images with their URLs
$gallery = rwmb_meta( 'gallery', [ 'size' => 'medium' ] );
foreach ( $gallery as $image ) {
	echo '<img src="' . esc_url( $image['url'] ) . '">';
}
```

### Sub-fields as meta keys

A group saves all sub-fields in one meta key. The meta key is the group ID.

```php
// Wrong
$city = rwmb_meta( 'address_city' );

// Correct
$address = rwmb_meta( 'address' ) ?: [];
$city    = $address['address_city'] ?? '';

// Correct: a cloneable group gives a list of groups
foreach ( rwmb_meta( 'contacts' ) ?: [] as $contact ) {
	echo esc_html( $contact['name'] ?? '' );
}
```

### Image sub-fields as image arrays

`rwmb_meta()` gives raw values for sub-fields. An image or file sub-field in a group gives attachment IDs, not image arrays.

```php
// Wrong: 'photo' is an attachment ID, not an array
echo '<img src="' . esc_url( $speaker['photo']['url'] ) . '">';

// Correct: get the image from the ID
foreach ( rwmb_meta( 'speakers' ) ?: [] as $speaker ) {
	echo wp_get_attachment_image( $speaker['photo'] ?? 0, 'medium' );
}
```

See [Sub-field values](/extensions/meta-box-group/#sub-field-values).

### No `object_type`

`rwmb_meta()` reads post fields by default. For other objects, set `object_type` and the object ID.

```php
// Wrong: reads the field of the current post
$color = rwmb_meta( 'color' );

// Correct
$color   = rwmb_meta( 'color', [ 'object_type' => 'term' ], $term_id );
$phone   = rwmb_meta( 'phone', [ 'object_type' => 'user' ], $user_id );
$hotline = rwmb_meta( 'hotline', [ 'object_type' => 'setting' ], 'site_option' ); // Option name
$status  = rwmb_meta( 'status', [ 'object_type' => 'model', 'type' => 'transaction' ], $model_id );
$price   = rwmb_meta( 'price', [ 'storage_type' => 'custom_table', 'table' => 'products' ], $post_id );
```

### Relationships as fields

[MB Relationships](/extensions/mb-relationships/) saves connections in its own table, not in post meta.

```php
// Wrong
$speakers = rwmb_meta( 'event_speakers' );

// Correct
$speakers = MB_Relationships_API::get_connected( [
	'id'   => 'events_to_speakers', // Relationship ID
	'from' => get_the_ID(),
] );

MB_Relationships_API::add( $event_id, $speaker_id, 'events_to_speakers' );
MB_Relationships_API::delete( $event_id, $speaker_id, 'events_to_speakers' );
```

### Custom models with `WP_Query`

[Custom models](/extensions/mb-custom-table/#custom-models) are rows in a custom table, not posts. `WP_Query` and `get_posts()` do not work with them.

```php
// Wrong
$items = get_posts( [ 'post_type' => 'transaction' ] );

// Correct: get one model
$row = \MetaBox\CustomTable\API::get( $model_id, 'transactions' );

// Correct: query many models
global $wpdb;
$rows = $wpdb->get_results( $wpdb->prepare(
	"SELECT * FROM transactions WHERE status = %s ORDER BY created_at DESC LIMIT %d",
	'completed',
	10
) );
```

Register the model on `init` with a priority lower than 20. If the priority is 20 or higher, the model fields do not work.

```php
// Wrong
add_action( 'init', 'register_my_model', 20 );

// Correct
add_action( 'init', function () {
	mb_register_model( 'transaction', [
		'table'  => 'transactions',
		'labels' => [ 'name' => 'Transactions', 'singular_name' => 'Transaction' ],
	] );
} );
```

### Hook signatures as code

The docs show hooks as `apply_filters()` or `do_action()`. These are the hook signatures. To use a hook, call `add_filter()` or `add_action()`. A filter callback must return the value. If the callback has more than 1 parameter, set the number of parameters.

```php
// Wrong
$data = apply_filters( 'rwmb_profile_insert_user_data', $data, $config );

// Correct
add_filter( 'rwmb_profile_insert_user_data', function ( $data, $config ) {
	$data['display_name'] = $data['first_name'] ?? '';
	return $data;
}, 10, 2 );
```

For more examples, see [MB User Profile hooks](/extensions/mb-user-profile/#hooks) and [MB Relationships hooks](/extensions/mb-relationships/#add).

### Hooks that do not exist

AI tools make up hook names that look correct. Examples:

- `meta_box_blocks`: there is no such filter. Register blocks with `rwmb_meta_boxes` and `'type' => 'block'`. See [MB Blocks](/extensions/mb-blocks/#block-registration-without-blockjson).
- `rwmb_frontend_access`: there is no such filter. MB Frontend Submission lets the post author and users with the `edit_post` capability edit a post. To let other users edit, give them the capability with the WordPress `map_meta_cap` filter.

```php
// Wrong
add_filter( 'meta_box_blocks', function ( $blocks ) { /* ... */ } );

// Correct
add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
	$meta_boxes[] = [
		'title'           => 'Hero',
		'id'              => 'hero',
		'type'            => 'block',
		'render_template' => get_stylesheet_directory() . '/blocks/hero.php',
		'fields'          => [
			[ 'id' => 'heading', 'name' => 'Heading', 'type' => 'text' ],
		],
	];
	return $meta_boxes;
} );
```

All public hooks are in the docs: see [Actions](/category/actions/), [Filters](/category/filters/), [JavaScript API](/javascript-api/) and the "Hooks" section of each extension. If a hook is not in the docs or the source code, do not use it.

### No return in `rwmb_meta_boxes`

If the `rwmb_meta_boxes` callback does not return `$meta_boxes`, all field groups disappear.

```php
// Wrong
add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
	$meta_boxes[] = [ 'title' => 'Event', 'post_types' => 'event', 'fields' => [] ];
} );

// Correct
add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
	$meta_boxes[] = [ 'title' => 'Event', 'post_types' => 'event', 'fields' => [] ];
	return $meta_boxes;
} );
```

### Views in the Query Loop block

AI tools say that MB Views does not work in the Query Loop block. They tell you to use ACF or another plugin. This is not correct. In MB Views 1.15.0 and later, `{{ post }}` is the current post of the loop.

```twig
<a href="{{ post.url }}">{{ post.title }}</a>
<p>{{ post.price }}</p>
```

AI tools also invent the shortcode name. The view shortcode is `[mbv]`.

```
Wrong:   [mb_views id="123"]
Correct: [mbv id="123"] or [mbv name="view-name"]
```

You can also use the View block instead of a shortcode. See [Query Loop block](/extensions/mb-views/#query-loop-block).
