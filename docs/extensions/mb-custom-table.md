---
title: MB Custom Table
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

**MB Custom Table** helps you to save custom fields' values to a custom table instead of the default WordPress meta table. All custom fields for a post are saved in a single row, where each column contains the value of a corresponding field.

This reduces the number of rows in the database which can help improve the performance when the data grows. And let you have all of your data in one place, so you can easily view, edit, import, and export it.

![custom table overview](https://i.imgur.com/BzE1Fvx.png)

## Getting started

The easiest way to work with custom table is using [Meta Box Builder](/extensions/meta-box-builder/). It provides UI to create custom tables and automatically save custom fields to table columns.

When creating a field group with Meta Box Builder, switch to the **Settings** tab and you'll see options to use a custom table as follows:

![Create custom table with Meta Box Builder](https://i.imgur.com/HRZSV9w.png)

Enable the option to **Save data in a custom table**, and enter the **Table name**. By default, the table name doesn't contain the WordPress table prefix. If you want to use the WordPress table prefix, enable the **Include table prefix** option (and don't enter the prefix manually).

If you select the option **Create table automatically**, the plugin will attempt to create the table for you. Once it's done, you'll see the custom table in your database, which have columns that match your custom field IDs, each column per field ID. To make the data compatible with the field data, the plugin uses data type `TEXT` for all columns.

Now you can go to the edit post screen (or the edit user profile if you use the meta box for users) and save the post. You'll see the data is saved in the new custom table instead of the post meta table.

:::info How does it work?

The plugin will map custom table columns with custom field IDs, one column per custom field. If you have a group field, then the column name will be the top-level group ID, and it won't create columns for sub-fields. When you save a post, each custom field is stored in a corresponding column.

:::

## Using custom tables with code

Using custom tables with code is suitable if you want to have more control on the data type or index key which can help improve the performance. It's recommended when you're a developer and you're familiar with MySQL.

### Creating a custom table

Use the plugin API to create a custom table as follows:

```php
add_action( 'init', function () {
	MB_Custom_Table_API::create(
		'my_custom_table',                // Custom table name.
		[                                 // List of columns with data types.
			'address' => 'TEXT NOT NULL',
			'phone'   => 'TEXT NOT NULL',
			'email'   => 'VARCHAR(20) NOT NULL',
		],
		[ 'email' ],                      // List of columns that will be indexed.
	);
} );
```

Here we use `init` hook to make sure the API is ready to use. The code will generate a SQL query for creating a custom table like this:

```php
$sql = 'CREATE TABLE my_custom_table (
  ID int(11) unsigned NOT NULL,
  address TEXT NOT NULL,
  phone TEXT NOT NULL,
  email VARCHAR(20) NOT NULL
  PRIMARY KEY  (ID)
  KEY email
)';
```

Parameter|Description
---|---
`table_name`|The custom table name. Required.
`columns`|Array of table columns, where the key is the column name and the value is the [MySQL data type](https://dev.mysql.com/doc/refman/8.0/en/data-types.html). Required.
`keys`|Array of key column names, which will be indexed. Optional. Note that if you want to index BLOB and TEXT columns, make sure you set a fixed length for them.

### Notes

A. **Do not add ID column**. The ID column is automatically created and set as the primary key in the table. It's used to store the object ID for future reference. Object ID can be the post ID, user ID, or term ID depending on what meta type the table is used for.

B. The **column names must match custom field IDs**, one column per custom field. If you create a column to store a group, then the column name must be the top-level group ID. Don't create columns for sub-fields.

C. The **table name doesn't need to include the WordPress table prefix**. The extension does not put any constraints on you to define the table name. If you want to include the WordPress table prefix, do this:

```php
global $wpdb;
MB_Custom_Table_API::create( "{$wpdb->prefix}my_custom_table", [
	'address' => 'TEXT NOT NULL',
	'phone'   => 'TEXT NOT NULL',
	'email'   => 'VARCHAR(20) NOT NULL',
] );
```

D. The extension uses WordPress recommended method to create a custom table, which means if the table already exists, the code will do nothing. Although, **it's recommended to run the code that creates custom tables [only when activating your plugin](https://codex.wordpress.org/Creating_Tables_with_Plugins#Calling_the_functions)**, like this:

```php
register_activation_hook( __FILE__, function() {
	MB_Custom_Table_API::create( 'my_custom_table', [
		'address' => 'TEXT NOT NULL',
		'phone'   => 'TEXT NOT NULL',
		'email'   => 'VARCHAR(20) NOT NULL',
	], [ 'email' ] );
} )
```

But if you can't run the code when activate your plugin, it's totally fine to run the code with the `init` or `plugins_loaded` hook.

### Using existing tables

You can also use an existing table to store your data. The table can be [manually created](https://codex.wordpress.org/Creating_Tables_with_Plugins) by a plugin, a theme or any tool like phpMyAdmin. To use it with Meta Box:

- **The custom table must have the ID column**. It's required to connect entries in the custom table with WordPress posts, terms, or users table.
- **The columns in the custom table much match the field IDs in your meta box**.

### Connecting custom fields to a custom table

To tell a field group to use a custom table to store custom fields, you need to specify 2 parameters `storage_type` and `table` like this:

```php
add_filter( 'rwmb_meta_boxes', function( $meta_boxes ) {
	$meta_boxes[] = [
		'title'        => 'Meta Box Title',
		// highlight-start
		'storage_type' => 'custom_table',
		'table'        => 'my_custom_table', // Your custom table name
		// highlight-end
		'fields'       => [
			[
				'id'   => 'address',
				'name' => 'Address',
			],
			[
				'id'   => 'phone',
				'name' => 'Phone',
			],
			[
				'id'   => 'email',
				'type' => 'email',
				'name' => 'Email',
			],
		],
	];
	return $meta_boxes;
} );
```

:::caution Column names and field IDs

Again, column names have to match your custom fields' IDs, one column per custom field. If you create a column to store a group, then the column names must be the top-level group ID. No need to create columns for sub-fields.

:::

Now you can go to the edit post screen (or the edit user profile if you use the meta box for users) and save the post. You'll see the data is saved in the new custom table instead of the post meta table.

### Video tutorial

<LiteYouTubeEmbed id='o8ICxe8nbrI' />

## Getting field value

Use the helper [rwmb_meta()](/functions/rwmb-meta/) function to get a field value. The only difference is you need to specify the table name in the 2nd argument:

```php
$args = [
	'storage_type' => 'custom_table',
	'table'        => $table_name,
];
$value = rwmb_meta( $field_id, $args, $post_id );
echo $value;
```

Also, note that the call to the custom table will be cached, e.g. if you call the helper function several times for the same `$post_id`, it will only query once. This technique will improve the database performance.

You can also use the [`[rwmb_meta]`](/shortcode/) shortcode to display a field value. You need to set the shortcode attributes similar to the `rwmb_meta()` helper function:

```
[rwmb_meta id="field_id" storage_type="custom_table" table="table_name"]
```

## Group fields

For group fields, it's worth mentioning that the whole group value, including sub-fields values, is saved as a serialized array in **one column**. So, they're not flat as other fields.

That means:

- When you create a table, please create only one column for the group (even if that group contains many sub-fields or sub-groups). And the column name must be the group ID.
- The group value is serialized, you cannot make SQL queries against the sub-fields values. Thus, you don't benefit from the custom table structure. So, be careful to decide on what fields should be in groups and what fields should not. It's recommended to use groups only for *data storing, not for querying*.

While the data of the group is serialized, it will be unserialized when getting via helper functions. So you don't have to unserialize yourself.

## Query posts with WP_Query

It's important to understand that the plugin doesn't hook to the `WP_Query` to get posts by custom fields stored in the custom table. In other words, using `meta_*` in `WP_Query` for custom fields won't work.

To get posts by custom fields in the custom table, you need to make an extra query to get the post IDs first. Then use these IDs to get full post objects.

Here is an example:

```php
global $wpdb;
$ids = $wpdb->get_col( "SELECT ID FROM your_table WHERE field1 = 'value1' OR field2 = 'value2'" );

if ( empty( $ids ) ) {
	echo 'There is no posts';
} else {
	$query = new WP_Query( [
		'post_type' => 'post',
		'post__in'  => $ids,
	] );
	// Do something
}
```

This technique also works with terms and users.

## Custom models

Besides custom tables for built-in WordPress posts, terms and users, the plugin allows you to create custom models, which mimic the WordPress posts, but store the data completely in custom tables. So you don't need to connect to posts, terms, or users anymore. And the data is stored only in one table, which is more efficient.

Pros:

- Better data structure, because you can define the custom table to match your needs.
- Don't mess with WordPress tables. You manage data on your own.
- Complete CRUD for models so you can create/edit/delete them quickly.
- Compatible with all Meta Box field types.
- Use the similar Meta Box and WordPress API/UI to show a list of models or edit models.
- Compatible with MB Admin Columns extension to show fields in admin columns.

Cons:

- Models don't have front-end templates like posts. You won't have permalinks for each model and their archive. Models should be used for managing data. If you want to have the power of the templates, then you should use the normal custom tables above.
- Limited compatibility with some extensions such as MB Relationships and MB Views.

### Usage

To create and use custom models, you need to follow 3 steps below:

#### Step 1: Register a model

Registering a model is very similar to a custom post type in WordPress, with fewer parameters. The code below registers a custom model `transaction`.

```php
// Step 1: Register a model.
add_action( 'init', function() {
	mb_register_model( 'transaction', [
		'table'  => 'transactions',
		'labels' => [
			'name'          => 'Transactions',
			'singular_name' => 'Transaction',
		],
		'menu_icon' => 'dashicons-money-alt',
	] );
} );
```

Parameter | Description
---|---
`table`|Custom table for the model. Required.
`labels`|An array of labels for this model. Required. See below for the list of labels.
`show_in_menu`|Where to show the menu in the admin menu. Optional. Default `true`.
`menu_position`|The position in the menu where the model should appear. Optional. Default `null` (at the bottom).
`menu_icon`|The URL to the icon to be used for this menu. Pass a base64-encoded SVG using a data URI, which will be colored to match the color scheme -- this should begin with 'data:image/svg+xml;base64,'. Pass the name of a Dashicons helper class to use a font icon, e.g. 'dashicons-chart-pie'. Pass 'none' to leave div.wp-menu-image empty so an icon can be added via CSS. Defaults to use the posts icon.
`parent`|Menu parent, if you want to show the model as a sub-menu. Optional.
`capability`|The capability to access the menu and create/edit/delete models. Default `edit_posts`.

List of labels:

Name|Description
---|---
`name`|General name for the model, usually plural.
`menu_name`|Label for the menu name. The default is the same as the name.
`singular_name`|Name for one item of this model.
`add_new`|Label for 'Add New' models.
`add_new_item`|Label for adding a new singular item.
`edit_item`|Label for editing a singular item.
`search_items`|Label for searching plural items.
`not_found`|Label used when no items are found.
`all_items`|Label to signify all items in the page title.
`item_updated`|Label used when an item is updated.
`item_added`|Label used when an item is added.
`item_deleted`|Label used when an item is deleted.

#### Step 2: Create a custom table for the model

Creating a custom table is similar to the section above, except for one thing: you must specify the 4th parameter as `true` to indicate this is a table for models.

```php
// Step 2: Create a custom table for the model.
add_action( 'init', function() {
	MetaBox\CustomTable\API::create(
		'transactions',                    // Table name.
		[                                  // Table columns (without ID).
			'created_at' => 'DATETIME',
			'amount'     => 'BIGINT',
			'email'      => 'VARCHAR(99)',
			'gateway'    => 'TEXT',
			'status'     => 'VARCHAR(20)',
			'screenshot' => 'TEXT',
		],
		['email', 'status'],               // List of index keys.
		// highlight-next-line
		true                               // Must be true for models.
	);
} );
```

Do **NOT** create an ID column. It's automatically created (primary key, auto-increment).

#### Step 3: Register fields for the model, corresponding to the custom table structure

Registering fields for models is the same as for posts. You just need to specify which model the meta box is for.

If your custom table has many fields, you can split them into multiple meta boxes, to enter the data more conveniently. The order of fields doesn't matter when saving.

```php
// Step 3: Register fields for model, corresponding to the custom table structure.
add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
	$meta_boxes[] = [
		'title'        => 'Transaction Details',
		// highlight-start
		'models'       => ['transaction'], // Model name
		'storage_type' => 'custom_table',  // Must be 'custom_table'
		'table'        => 'transactions',  // Custom table name
		// highlight-end
		'fields'       => [
			[
				'id'          => 'created_at',
				'type'        => 'datetime',
				'name'        => 'Created at',
				'js_options'  => [
					'timeFormat' => 'HH:mm:ss',
				],
				'admin_columns' => true,
			],
			[
				'id'     => 'amount',
				'type'   => 'number',
				'name'   => 'Amount',
				'append' => 'USD',
				'admin_columns' => [
					'position' => 'after id',
					'sort'     => true,
				],
			],
			[
				'id'   => 'gateway',
				'name' => 'Gateway',
				'admin_columns' => true,
			],
			[
				'id'   => 'status',
				'type' => 'select',
				'name' => 'Status',
				'options' => [
					'pending'   => 'Pending',
					'completed' => 'Completed',
					'refunded'  => 'Refunded',
				],
				'admin_columns' => true,
			],
		],
	];

	$meta_boxes[] = [
		'title'        => 'Additional Transaction Details',
		// highlight-start
		'models'       => ['transaction'], // Model name
		'storage_type' => 'custom_table',  // Must be 'custom_table'
		'table'        => 'transactions',  // Custom table name
		// highlight-end
		'fields'       => [
			[
				'id'   => 'email',
				'type' => 'email',
				'name' => 'Email',
				'admin_columns' => [
					'position'   => 'after amount',
					'searchable' => true,
				],
			],
			[
				'id'            => 'screenshot',
				'type'          => 'image_advanced',
				'name'          => 'Screenshots',
				'admin_columns' => true,
			],
		],
	];

	return $meta_boxes;
} );
```

After completing 3 steps, you'll see the Transactions menu on the left and you can add/edit/delete models easily as follows:

<LiteYouTubeEmbed id='FenYCOFdCLI' />

### Getting field values for models

To get a field value for models, you can use 2 methods:

Using custom table API to get the raw value in the custom table.

```php
$value = \MetaBox\CustomTable\API::get_value( $field_id, $model_id, $table_name );

// Example: returns 'completed'
$status = \MetaBox\CustomTable\API::get_value( 'status', 3, 'transactions' );
```

Using the helper function to get the formatted value:

```php
$value = rwmb_meta( $field_id, [
	// highlight-next-line
	'object_type' => 'model', // Must be 'model',
	'type'        => $model,
], $model_id );

// Example: returns 'Completed'
$status = rwmb_meta( 'status', [
	'object_type' => 'model',
	'type'        => 'transaction',
], 3 );
```

### Compatibility

This feature currently works with the following extensions:

- MB Admin Columns
- Meta Box Group
- Meta Box Columns
- Meta Box Tabs
- Meta Box Tooltip
- Meta Box Geolocation
- Meta Box Text Limiter
- Meta Box Conditional Logic
- Meta Box Show Hide

### Hooks

`mbct_{$model}_query_where`

Filters the where statement in the query in the custom model table list. Accepts one parameter - the where statement. It should include the term `WHERE` if not empty.

```php
add_filter( 'mbct_transaction_query_where', function( $where ) {
	return $where ? $where . ' AND status="completed"' : 'WHERE status="completed"';
} );
```

`mbct_{$model}_query_order`

Filters the order statement in the query in the custom model table list. Accepts one parameter - the order statement. It should include the `ORDER BY` term if not empty.

```php
add_filter( 'mbct_transaction_query_order', function( $order ) {
	return $order ? $order : 'ORDER BY created_at DESC';
} );
```

`mbct_{$model}_prepare_items`

Filters the SQL query in the custom model table list to get items. Accepts one parameter - the SQL.

This filter is useful when you want to join the current model table with other tables to filter the results.

```php
add_filter( 'mbct_transaction_prepare_items', function( $sql ) {
	$sql = str_replace(
		'SELECT * FROM wp_transactions',
		'SELECT t.*, c.ID FROM wp_transactions t JOIN wp_customers c ON t.ID = c.transaction_id'
		$sql
	);
	return $sql;
} );
```

`mbct_{$model}_total_items`

Filters the SQL query in the custom model table list to get total items. Accepts 2 parameter:

- `$sql`: the full SQL query,
- `$where`: the `WHERE` statement in the query.

```php
add_filter( 'mbct_transaction_total_items', function( $sql, $where ) {
	$sql = "SELECT COUNT(t.*) FROM wp_transactions t JOIN wp_customers c ON t.ID = c.transaction_id $where";
	return $sql;
}, 10, 2 );
```

`mbct_{$model}_columns`

Filters the list of columns in the custom model table list. Accepts one parameter - the array of columns.

`mbct_{$model}_sortable_columns`

Filters the list of sortable columns in the custom model table list. Accepts one parameter - the array of sortable columns.

`mbct_{$model}_column_output`

Filters the output of a column in the custom model table list. Accepts 4 parameters:

- `$output`: the output
- `$column_name`: the column name
- `$item`: the array of the item data
- `$model`: the model name

`mbct_{$model}_row_actions`

Filters the list of actions for each row item in the custom model table list (default is Edit and Delete). Accepts one parameter - an associate array of actions.

`mbct_{$model}_bulk_actions`

Filters the list of bulk actions for each row item in the custom model table list (default is Delete). Accepts one parameter - an associate array of actions.

`mbct_restrict_manage_posts`

Fires after the bulk action for the custom model table list. It's usually used to output custom filters for the table. Accepts 2 parameters:

- `$model`: the model name
- `$which`: `top` or `bottom` - the position of the filters

`mbct_manage_posts_extra_tablenav`

Fires after the bulk action and after `mbct_restrict_manage_posts`. Accepts one parameter - `$which` which can be `top` or `bottom` - the position in the table.

`mbct_submit_box`

Filters the output of the submit meta box. Accepts 2 parameters:

- `$output`: the HTML output
- `$model`: the model name

`mbct_before_submit_box`

Fires before the output of the submit meta box. Accepts one parameter - the model name.

`mbct_after_submit_box`

Fires after the output of the submit meta box. Accepts one parameter - the model name.

`mbct_before_add`<br />
`mbct_after_add`<br />
`mbct_before_update`<br />
`mbct_after_update`<br />

These are actions that fire before/after adding/updating data in a custom table. Accepts 3 parameters:

- `$object_id`: the object ID
- `$table`: the table name
- `$row`: the associate array of data

`mbct_before_delete`<br />
`mbct_after_delete`<br />

These are actions that fire before/after deleting data in a custom table. Accepts 2 parameters:

- `$object_id`: the object ID
- `$table`: the table name

`mbct_add_data`<br />
`mbct_update_data`<br />

These are filters that let you change the data before inserting/updating into the custom table. Accepts 3 parameters:

- `$row`: the associate array of data
- `$object_id`: the object ID
- `$table`: the table name

These filters should return an array of data (e.g., the `$row`).

### Bulk actions handling

#### Create custom bulk actions

The plugin provides a way to handle bulk actions for custom models. By default, it already supports the `Delete` action. 

To add more custom bulk actions, you can use the `mbct_{$model}_bulk_actions` filter. This filter accepts an array with key is the action name, and value is the action label.

```php
add_filter( 'mbct_transaction_bulk_actions', function ( $actions ) {
	$actions['refund-all'] = 'Refund';

	return $actions;
} );
```

#### Create bulk actions handler

You can add bulk actions handler by creating a function following the naming convention `mbct_{$action}_bulk_action`. Please note that the action name are auto converted to lowercase and use underscores instead of hyphens in order to match with PHP function. In this case, `refund-all` will be `refund_all`.

The function can accepts up to 3 parameters: `$ids`, `$model`, and `$request` **regardless of the number of parameters and order**. 

For example: `( $ids, $model )`, `( $model, $ids )`, `( $request, $ids, $model )`... are valid function signatures.

When:

`$ids`: `int[]` an array of object IDs <br>
`$model`: `MetaBox\CustomTable\Model` the model object. You can use this object to get the model name, table name, and other information. <br>
`$request`: `RWMB_Request` the request object which contains the request data. In every request, we have `action`, `bulk_action`, `ids`, `model`, and `_ajax_nonce` fields. You can get value of a field by calling `$request->post( $field_name )`. <br>

```php
function mbct_refund_all_bulk_action( $ids, $model ) {

	foreach ( $ids as $id ) {
		\MetaBox\CustomTable\API::update( $id, $model->table, [
			'status' => 'refunded',
		] );
	}

	wp_send_json_success();
}
```

#### Redirection and custom message

By default, the page will get reload after the bulk action is completed. You can set the redirect URL by passing an array with `redirect` key in the `wp_send_json_success()` function in your callback function. 
For example:

```php
// in your callback function
wp_send_json_success( [
	'redirect' => add_query_arg( 'model-message', 'updated', admin_url( 'admin.php?page=model-transaction' ) ),
] );
```

The above code will redirect the user to the `admin.php?page=model-transaction&model-message=updated`.

Since the plugin support custom message via `model-message` query string and match it with labels in custom model.
You can set the custom message by adding `item_updated` label in the `labels` parameter of the model registration. 
For example:

```php
// in your model registration
mb_register_model( 'transaction', [
	/// ...
	'labels' => [
		'name'          => 'Transactions',
		'singular_name' => 'Transaction',
		// highlight-next-line
		'item_updated'  => 'Transaction updated.',
	],
	//...
] );
```

As the above example. The *Transaction updated* message will be shown to the user after the bulk action is completed.

#### Custom error message

You can also set custom error message by calling `wp_send_json_error( $message )` in your callback function, which `$message` is an error string. 
For example:

```php
// in your callback function
if ( ! current_user_can( 'manage_options' ) ) {
	wp_send_json_error( 'Sorry, you are not allowed to do this action.' );
}
```

The error message will be shown as a browser alert box to the user.

### Notes

Each model can have only one custom table.

While models work with all Meta Box field types, the data of cloneable/multiple/group fields is always an array, thus it's saved as a serialized array in the model table column.

## API

The plugin has the following APIs for you to work with the data in custom tables. These APIs work well with both custom tables for posts/terms/users and models.

### `exists`

Check if a custom table has a row for an object. In other words, check if an object has data stored in a custom table.

```php
$exists = \MetaBox\CustomTable\API::exists( $object_id, $table );

if ( $exists ) {
	// Do something.
}
```

### `get`

Get all custom fields data for an object from a custom table. The returned data is an array, where keys are custom field IDs, and values are custom field values.

The data is raw, meaning it's not formatted yet. For example: for images, you'll get the attachment IDs instead of an array of URL, width, height, size, etc. as you get via `rwmb_the_value` function.

Parameters:

`$object_id` (int) (required) The object (row) ID.<br />
`$table` (string) (required) The custom table name.<br />
`$force` (bool) (optional) Whether to force to get the data from the database, not from the cache. Default is `true`.<br />

```php
$data = \MetaBox\CustomTable\API::get( $object_id, $table, $force );

// Inspect the data.
print_r( $data );

/*
Result:
[
	'field_1' => 'value 1',
	'field_2' => 'value 2',
	'field 3' => ['one', 'two', 'three'],
]
*/
```

### `add`

Add an array of custom field values for an object. Make sure the data for the object doesn't exist yet in the database.

```php
$data = [
	'field_1' => 'value 1',
	'field_2' => 'value 2',
	'field 3' => ['one', 'two', 'three'],
];
\MetaBox\CustomTable\API::add( $object_id, $table, $data );
```

In case you want to add a row for a custom model, set `$object_id` to `null`.

### `update`

Update the data for an object. Works similarly to `add`. Make sure the data for the object exists in the database.

```php
$data = [
	'field_1' => 'value 1',
	'field_2' => 'value 2',
	'field 3' => ['one', 'two', 'three'],
];
\MetaBox\CustomTable\API::update( $object_id, $table, $data );
```

### `delete`

Delete all data for an object in the custom table.

```php
\MetaBox\CustomTable\API::delete( $object_id, $table );
```

## Further reading

[How to Move Custom Fields' Data to Custom Tables](https://metabox.io/move-custom-fields-data-to-custom-tables/)

<LiteYouTubeEmbed id='JaEvtYa4Hcg' />
