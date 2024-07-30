---
title: Cloning fields
---

The clone feature of Meta Box allows you to create multiple inputs from a text, textarea, select, ... fields without declaring many fields in the code. Combining the clone feature with [groups](/extensions/meta-box-group/) gives you a flexible way to define repeatable content.

:::info Clone is a feature

The difference between Meta Box and other plugins is that the clone feature can be applied to **all field types**. And **it's a feature, not a field type**. Then, every field or group can be cloneable or repeater. They are called cloneable fields or cloneable groups.

:::

## Making a field cloneable

When editing a field, turn on this **Cloneable** option in the settings of the field:

![enable clone feature](https://i.imgur.com/KbnSFBe.png)

After turning in the Cloneable option, other clone settings will appear.

![other clone settings](https://i.imgur.com/uhhImkb.png)

:::info Not a premium user?

You can see the settings visually as above since this instruction uses [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/) extension, which is a premium extension providing the UI to create fields, and is already bundled in Meta Box AIO and MB Core. If you're not a premium user, please [purchase a license](https://metabox.io/pricing/) to use it. However, you can do this with code.

:::

No matter what you are using the UI or code, this is a brief description of the clone settings. The keys are for reference in code.

Settings|Key|Description
---|---|---
Cloneable|`clone`|Make the field cloneable? `true` or `false` (default). Optional.
Sortable|`sort_clone`|Allow to drag-and-drop sort clones. `true` or `false` (default).
Clone default value|`clone_default`|Clone the default value of the field? `true` or `false` (default).
Clone as multiple|`clone_as_multiple`| Whether to store cloned values in multiple rows in the database
Max number of clones|`max_clone`|Limit the number of clones. Must be greater than 2. Optional.
Min number of clones|`min_clone`|Minimum number of clones. Optional.
Add more text|`add_button`|The text for **Add more** clone button. Optional. Default "+ Add more".
Clone empty start|`clone_empty_start`|Allows no fields except the **Add more** button to show up. `true` or `false` (default). Optional.

After saving the field group, in the post editor, you'll see an **+ Add more** button below the field input. Clicking it allows you to enter more values:

![view clones in action](https://i.imgur.com/PM4Mbqb.png)

If you're a developer and want to use code, then you need to add the clone settings into the [field settings](/creating-fields-with-code/#fields):

```php
add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
	$meta_boxes[] = [
		'title'      => 'Event details',
		'post_types' => 'event',
		'fields'     => [
			[
				'name'  => 'Date and time',
				'id'    => 'datetime',
				'type'  => 'datetime',
				// highlight-start
				'clone' => true,
				// Other clone settings
				// highlight-end
			],
			[
				'name' => 'Location',
				'id'   => 'location',
				'type' => 'text',
			],
			[
				'name'          => 'Map',
				'id'            => 'map',
				'type'          => 'osm',
				'address_field' => 'location',
			],
		],
	];

	return $meta_boxes;
} );
```

## Data of cloneable fields

For cloneable fields, values are stored as a serialized array in a single row in the database, unless you set `'clone_as_multiple' => true`.

Using serialized data has some benefits:

- Works for all field types, including nested groups.
- Works perfectly with the helper function or with WordPress's `get_post_meta` function (WordPress automatically deserializes string and returns an array).
- Reduces the database size (number of rows), especially when you have nested groups of many fields.

## Query posts by cloneable fields

By default, cloned values are stored as a serialized array, which doesn't allow you to query posts by these values. For example, if you have a cloneable field `start_date` for the `event` post type, and you want to query events in May 2019 like this:

```php
$args = [
	'post_type'  => 'event',
	'meta_query' => [
		// highlight-start
		[
			'key'     => 'start_date', // This field is cloneable
			'value'   => ['2019-05-01', '2019-05-31']
			'compare' => 'BETWEEN',
		],
		// highlight-end
	],
];
$query = new WP_Query( $args );
```

Then it doesn't work.

To solve this problem, you need to enable the **Clone as multiple** settings for the field.

![Enable the Clone as multiple settings](https://i.imgur.com/D2gGXup.png)

With that, Meta Box will **save cloneable values in multiple rows in the database**, where each row contains one value. That means if `start_date` has 2 values `['2019-05-01', '2019-04-30']`, it will be saved in 2 rows in the database, one for `2019-05-01` and one for `2019-04-30`. The data is **not serialized** anymore. And thus, your above query will work!

## Default values

When making a field to be cloneable, its data is an array of cloned values. So, the `std` parameter (default value) should represent this structure, e.g. array of cloned values.

```php
add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
	$meta_boxes[] = [
		'title'      => 'Event details',
		'post_types' => 'event',
		'fields'     => [
			[
				'name'  => 'Date and time',
				'id'    => 'datetime',
				'type'  => 'datetime',
				'clone' => true,
				// highlight-start
				'std' => [
					'2022-04-20',
					'2022-04-21',
				],
				// highlight-end
			],
			[
				'name' => 'Location',
				'id'   => 'location',
				'type' => 'text',
			],
			[
				'name'          => 'Map',
				'id'            => 'map',
				'type'          => 'osm',
				'address_field' => 'location',
			],
		],
	];

	return $meta_boxes;
} );
```
