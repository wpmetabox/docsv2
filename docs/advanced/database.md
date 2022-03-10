---
title: Database
---

Wondering how the Meta Box plugin stores custom field value in the database? Understanding this can help you get the custom field value easily and understand the returned value from `get_post_meta` or [helper functions](/displaying-fields/).

## How fields are saved in the database?

- If you create a field for posts, terms, or users, the field `id` will be saved as the `meta_key` and the value will be saved as the `meta_value` in the meta table (`wp_postmeta`, `wp_termmeta` or `wp_usermeta` accordingly).
- If you use [custom tables](/extensions/mb-custom-table/), the field value will be saved in the column with the name equal to the field `id`.
- If you create a field for a [settings page](/extensions/mb-settings-page/), the whole data for the settings page will be saved as an array in an option in the format of `['field_id' => 'field_value']`.

The sections below describe how field values are formatted.

## Non-cloneable fields

For non-cloneable fields, the plugin stores field value in the database in a WordPress-compatible way as follows:

- If a field has a single value, it will be saved in a single row in the post meta table.
- If a field has multiple values (set by `'multiple' => true` like `select`, `checkbox_list`, `file`, `image`, etc.), each value will be saved in a single row in the post meta table.

This way you can use `add_post_meta` or `update_post_meta` to update meta values and `get_post_meta` to retrieve them.

## Cloneable fields

For cloneable fields, values are stored as a serialized array in a single row in the database, unless you set `'clone_as_multiple' => true` for the field.

Using serialized data has some benefits:

- Works for all field types, including nested groups.
- Works perfectly with the helper function or with WordPress's `get_post_meta` function (WordPress automatically unserializes string and returns an array).
- Reduces the database size (number of rows), especially when you have nested groups of many fields.

However, serialized data has a big disadvantage: **you can't query posts by serialized values**.

For example, if you have a cloneable field `start_date` for the `event` post type, and you want to query events in May 2019 like this:

```php
$args = [
	'post_type'  => 'event',
	'meta_query' => [
		[
			'key'     => 'start_date', // This field is cloneable
			'value'   => ['2019-05-01', '2019-05-31']
			'compare' => 'BETWEEN',
		],
	],
];
$query = new WP_Query( $args );
```

Then it doesn't work.

To solve this problem, you need to set `'clone_as_multiple' => true` in the field's settings array:

```php
'clone'             => true, // Enable clone
'clone_as_multiple' => true, // Save clones as multiple rows
```

With that, Meta Box will **save cloneable values in multiple rows in the database**, where each row contains one value. That means if `start_date` has 2 values `['2019-05-01', '2019-04-30']`, it will be saved in 2 rows in the database, one for `2019-05-01` and one for `2019-04-30`. The data is **not serialized** anymore. And because of that, your above query will work!

## Field value

For normal fields, the saved value in the database is the value entered or selected by users. But for some specific fields, the stored values is not as obvious as that (for example, `checkbox` saves the checked/unchecked status as `1` and `0`). Please see more details in each field in the left menu, section Fields.

## Notes

Although you can use `get_post_meta` to retrieve meta value, it's recommended to [use helper functions](/displaying-fields/) to get the value and display it in the frontend. The helper function takes care of all the logic above and returns to you the needed data in a correct format.

To understand how the value is stored in the database, please use `print_r` function, like this:

```php
$value = get_post_meta( get_the_ID(), 'field_id', true ); // Last param should be 'false' if field is multiple
echo '<pre>';
print_r( $value );
echo '</pre>';
```
