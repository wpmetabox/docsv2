---
title: Cloning fields
---

The clone feature of Meta Box allows you to create multiple inputs from a text, textarea, select, ... fields without declaring many fields in the code. Combining clone with [groups](/extensions/meta-box-group/) gives you a flexible way to define repeatable content.

:::info Clone is a feature

The difference between Meta Box and other plugins is that the clone feature can be applied to **all field types**. And **it's a feature, not a field type**.

:::

## Making a field cloneable

When editing a field, check the checkbox **Cloneable**:

![enable clone feature](https://i.imgur.com/1QrOVGT.png)

:::info Not a premium user?

This instruction uses **Meta Box Builder** extension, which is a premium extension and is already bundled in Meta Box AIO and MB Core. If you're not a premium user, please [purchase a license](https://metabox.io/pricing/) to use it. However, you can do this with code. See below for more information.

:::

After checking the checkbox, other clone settings will appear. This is a brief description of them. The keys are for reference in code.

Settings|Key|Description
---|---|---
Cloneable|`clone`|Make the field cloneable? `true` or `false` (default). Optional.
Sortable|`sort_clone`|Allow to drag-and-drop sort clones. `true` or `false` (default).
Clone default value|`clone_default`|Clone the default value of the field? `true` or `false` (default).
Clone as multiple|`clone_as_multiple`| Whether to store cloned values in multiple rows in the database
Max number of clones|`max_clone`|Limit the number of clones. Must be greater than 2. Optional.
Min number of clones|`min_clone`|Minimum number of clones. Optional.
Add more text|`add_button`|The text for **Add more** clone button. Optional. Default "+ Add more".

Then click **Publish** or **Update** button to save the field group. Now go to your post and you'll see a **+ Add more** button below the field input. Clicking it allows you to enter more values:

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

## Clone data

For cloneable fields, values are stored as a serialized array in a single row in the database, unless you set `'clone_as_multiple' => true`.

Using serialized data has some benefits:

- Works for all field types, including nested groups.
- Works perfectly with the helper function or with WordPress's `get_post_meta` function (WordPress automatically unserializes string and returns an array).
- Reduces the database size (number of rows), especially when you have nested groups of many fields.

## Query posts by cloneable fields

By default, clone values are stored as a serialized array, which doesn't allow you to query posts by these values. For example, if you have a cloneable field `start_date` for the `event` post type, and you want to query events in May 2019 like this:

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

With that, Meta Box will **save cloneable values in multiple rows in the database**, where each row contains one value. That means if `start_date` has 2 values `['2019-05-01', '2019-04-30']`, it will be saved in 2 rows in the database, one for `2019-05-01` and one for `2019-04-30`. The data is **not serialized** anymore. And thus, your above query will work!

## Default values

When making a field cloneable, its data is an array of cloned values. So, the `std` parameter (default value) should represent this structure, e.g. array of cloned values.

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