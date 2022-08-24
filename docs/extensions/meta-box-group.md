---
title: Meta Box Group
---

import Helpers from '../_parts/_helpers.md';

**Meta Box Group** helps you to organize custom fields into repeatable and collapsible groups. You can use this extension to group similar fields into one group to create hierarchy. You can clone the whole group, or sub-group. There's no limitation on the nesting level.

![meta box group example](https://i1.wp.com/metabox.io/wp-content/uploads/2015/02/meta-box-group-example.png)

## Tutorial

If this is the first time you use [Meta Box Group](/extensions/meta-box-group/), please follow the beginner tutorial here:

[How to Create a Group of Custom Fields with Meta Box Group](https://metabox.io/create-group-of-custom-fields-with-meta-box-group/)

The documentation below is like a detailed reference that you can use anytime you want to look for something in Meta Box Group.

## Settings

The Meta Box Group adds a new field type `group`. This field type has following settings:

Name|Description
---|---
`name`|Field name (label), same like other normal fields. Optional.
`id`|Field ID, will be used to store custom field values of all sub-field.
`type`|Must be `group`
`fields`|Array of sub-fields. Each sub-field is declared as a normal field.
`clone`|Is the group clonable?
`sort_clone`|Can clones be sorted? `true` or `false`. If `true`, you can drag and drop group clones to reorder them.
`collapsible`|Make group collapsible? `true` or `false`. Default `false`. Optional.
`save_state`|Whether or not save the collapse/expand state? `true` or `false`. Default `false`. Optional.
`default_state`|Is the group collapsed or expanded by default (when page loads)? `collapsed` or `expanded` (default).
`group_title`|The title of collapsible group. See section collapsible groups for details.

So, to add a group, you need to add a field with type `group` and list of sub-fields in its `fields` attribute, like this:

```php
add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
    $meta_boxes[] = [
        'title'  => 'Album Tracks',
        'fields' => [
            [
                'id'         => 'standard',
                'type'       => 'group',  // Group!
                'clone'      => true,     // Clone whole group?
                'sort_clone' => true,     // Drag and drop clones to reorder them?

                // List of sub-fields.
                'fields'     => [
                    [
                        'name' => 'Track name',
                        'id'   => 'text',
                    ],
                    [
                        'name' => 'Release Date',
                        'id'   => 'date',
                        'type' => 'date',
                    ],
                    [
                        'name'    => 'Genre',
                        'id'      => 'genre',
                        'type'    => 'select_advanced',
                        'options' => [
                            'pop'  => 'Pop',
                            'rock' => 'Rock',
                        ],
                    ],
                ],
            ],
        ],
    ];
    return $meta_boxes;
} );
```

Here is how it appears:

![clone group (repeater)](https://i.imgur.com/KVIJzSa.png)

### Nested groups

You can put a group inside anther group, like normal fields, to create nested groups:

```php
add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
    $meta_boxes[] = [
        'title'  => 'Multi-level nested groups',
        'fields' => [
            [
                'id'     => 'group',
                'type'   => 'group',
                'fields' => [
                    [
                        'name' => 'Text',
                        'id'   => 'text',
                    ],
                    // highlight-start
                    [
                        'name'   => 'Sub group',
                        'id'     => 'sub_group',
                        'type'   => 'group',
                        'fields' => [
                            // Normal field (cloned)
                            [
                                'name'  => 'Sub text',
                                'id'    => 'sub_text',
                            ],
                        ],
                    ],
                    // highlight-end
                ],
            ],
        ],
    ];
    return $meta_boxes;
} );
```

The plugin supports **unlimited nesting levels**.

### Collapsible groups

To make a group collapsible, you need to set the settings `'collapsible' => true`. The collapsible group also has the following settings:

Name|Description
---|---
`save_state`|Whether or not save the collapse/expand state? `true` or `false`. Default `false`. Optional.
`default_state`|Is the group collapsed or expanded by default (when page loads)? `collapsed` or `expanded` (default).
`group_title`|The title of collapsible group.

The `group_title` settings can show static text, the group index (if group is cloneable), sub-field value or *any combination of them*. To do that, set a `group_title` as a text and use the following format:

```
'group_title' => 'Static text {#} {sub_field_1} {sub_field_2}',
```

To specify the group index, use `{#}`. To specify a sub field value, use `{sub_field_id}`. You can add as many sub fields as you want and mix them in any way.

This is an example of a collapsible group:

```php
add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
    $meta_boxes[] = [
        'title'  => 'Company Branches',
        'fields' => [
            [
                'id'          => 'g1',
                'name'        => 'Branches',
                'type'        => 'group',
                'clone'       => true,
                'collapsible' => true,
                'group_title' => '{name}', // ID of the subfield

                'fields' => [
                    [
                        'name' => 'Name',
                        'id'   => 'name',
                    ],
                    [
                        'name' => 'Address',
                        'id'   => 'address',
                    ],
                    [
                        'id'          => 'contacts',
                        'type'        => 'group',
                        'clone'       => true,
                        'collapsible' => true,
                        'group_title' => '{person}',
                        'fields'      => [
                            [
                                'id'   => 'person',
                                'name' => 'Person',
                            ],
                            [
                                'id'   => 'phone',
                                'name' => 'Phone',
                            ],
                        ],
                    ],
                ],
            ],
        ],
    ];

    return $meta_boxes;
} );
```

## Getting sub-field values

To get sub-field value, you need to get meta value of the group. This is done with following code:

```php
$group_value = rwmb_meta( 'group_id' ) ?: [];
```

The returned value is associated array of sub-fields' values with keys are sub-fields IDs, like this:

```php
[
    'sub_field_1_key' => 'sub_field_1_value',
    'sub_field_2_key' => 'sub_field_2_value',
    'sub_field_3_key' => 'sub_field_3_value',
    //...
]
```

So, to get value of a sub-field, use the following code:

```php
$value = $group_value[ $sub_field_key ] ?? '';
echo $value; // Display sub-field value
```

If the group is **cloneable**, then the value returned by `rwmb_meta` is array of group values, each group value is an array of sub-fields' values:

```php
[
    [
        'sub_field_1_key' => 'sub_field_1_value',
        'sub_field_2_key' => 'sub_field_2_value',
        'sub_field_3_key' => 'sub_field_3_value',
        //...
    ],
    [
        'sub_field_1_key' => 'sub_field_1_value',
        'sub_field_2_key' => 'sub_field_2_value',
        'sub_field_3_key' => 'sub_field_3_value',
        //...
    ],
    //...
]
```

To output values of cloneable groups, use the following code:

```php
$group_values = rwmb_meta( 'group_id' ) ?: [];
foreach ( $group_values as $group_value ) {
    $value = $group_value[ $sub_field_key ] ?? '';
    echo $value; // Display sub-field value
}
```

### Examples

This sample code registers a group of fields: contact name, contact email, contact phone number:

```php
add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
    $meta_boxes[] = [
        'title'  => 'Contacts',
        'fields' => [
            [
                'id'     => 'contacts',
                'type'   => 'group',
                'clone'  => true,
                'fields' => [
                    [
                        'id'   => 'name',
                        'name' => 'Name',
                    ],
                    [
                        'id'   => 'email',
                        'name' => 'Email',
                    ],
                    [
                        'id'   => 'phone',
                        'name' => 'Phone',
                    ],
                ],
            ],
        ],
    ];
    return $meta_boxes;
} );
```

In the `single.php`, you can add the following code to display contacts:

```php
$contacts = rwmb_meta( 'contacts' ) ?: [];
foreach ( $contacts as $contact ) {
    echo '<div class="contact">';
    echo '<h4>', 'Contact info', '</h4>';
    echo '<p><label>', 'Name:', '<label> ', $contact['name'], '</p>';
    echo '<p><label>', 'Email:', '<label> ', $contact['email'], '</p>';
    echo '<p><label>', 'Phone number:', '<label> ', $contact['phone'], '</p>';
    echo '</div>';
}
```

### Outputting group with page builders

Currently, **only Elementor and Oxygen** can output sub-field in a group, including cloneable group. If you use these plugins, just follow the UI while connecting group data to show it.

If you use other page builders like Beaver Builder or Divi, the recommended way to show groups is creating [a view](/extensions/mb-views/) or a shortcode to display the group. Then you can insert the view/shortcode anywhere with the page builder.

Here is an example of a custom shortcode for a group with 3 fields: title (`text`), images (`image_advanced`) and description (`wysiwyg`). You can use it as a start:

```php
// Requires PHP 7+.
add_shortcode( 'my_group', function() {
	$group = rwmb_meta( 'group_field_id' );
	if ( empty( $group ) ) {
		return '';
	}

	$output = '';

	// Sub-field title.
	$title = $group['title'] ?? '';
	$output .= $title ? '<h3 class="my-title">' . $title . '</h3>' : '';

	// Sub-field image_advanced.
	$image_ids = $group['images'] ?? [];
	if ( $image_ids ) {
		$output .= '<div class="my-images">';
		foreach ( $image_ids as $image_id ) {
			$image = RWMB_Image_Field::file_info( $image_id, ['size' => 'my-image-size'] );
			$output .= '<img src="' . $image['url'] . '">';
		}
		$output .= '</div>';
	}

	// Sub-field description.
	$desc = $group['desc'] ?? '';
	$output .= $desc ? '<div class="my-description">' . wpautop( $desc ). '</div>' : '';

	return $output;
} );

// Usage: put [my_group] into your post content or page builder modules.
```

### Sub-field values

:::caution

It's important to note that the helper function returns only raw array of sub-field values. It doesn't transform value to meaning full details like [rwmb_meta](/functions/rwmb-meta/) function for specific fields.

:::

These are the raw values of sub-fields:

Sub-field type|Value
---|---
`taxonomy`, `taxonomy_advanced`, `user`, `post`|Object ID(s)
File and image types: `file`, `file_advanced`, `file_upload`, `image`, `image_advanced`, `image_upload`, `single_image`|Attachment ID(s)
`map`, `osm`|Text in format "latitude,longitude,zoom"
`oembed`|URL
`wysiwyg`|Raw content, without `<p></p>`

To get more details for fields, you might need to add some extra code as below.

```php
$group = rwmb_meta( 'group_id' );
$image_ids = $group['image_key'] ?? : [];
foreach ( $image_ids as $image_id ) {
	$image = RWMB_Image_Field::file_info( $image_id, ['size' => 'thumbnail'] );
	echo '<img src="' . $image['url'] . '">';
}
```

<Helpers />

## Setting default group values

There are 2 ways to set default group values: per sub-field or for the whole group.

Setting default values for each sub-fields is very simple. Just set its value via `std` parameter for each sub-field and done.

Example:

```php
add_filter( 'rwmb_meta_boxes', function( $meta_boxes ) {
	$meta_boxes[] = [
		'title' => 'Test Group Default Value',
		'fields' => [
			[
				'type' => 'group',
				'id'   => 'group',
				'fields' => [
					[
						'id'   => 'name',
						'name' => 'Name',
                        // highlight-next-line
						'std'  => 'My Name',
					],
					[
						'type' => 'email',
						'id'   => 'email',
						'name' => 'Email',
                        // highlight-next-line
						'std'  => 'myemail@domain.com',
					],
				],
			]
		],
	];
	return $meta_boxes;
} );
```

Result:

![default sub-field value](https://i.imgur.com/pml8twS.png)

However, doing that way makes you type quite a lot. And you hardly see the data of the whole group. To avoid this problem, Meta Box Group provides a better way to set default value for the whole group.

The idea is very simple, just use the same `std` parameter for *the group* (not for sub-fields). And set its value an array of sub-field default values.

For example: with a group of 2 fields above, we can default the default value like this:

```php
add_filter( 'rwmb_meta_boxes', function( $meta_boxes ) {
	$meta_boxes[] = [
		'title' => 'Test Meta Box',
		'fields' => [
			[
				'type' => 'group',
				'id'   => 'group',
				'fields' => [
					[
						'id'   => 'name',
						'name' => 'Name',
					],
					[
						'type' => 'email',
						'id'   => 'email',
						'name' => 'Email',
					],
				],

				// highlight-start
				'std' => [
					'name'  => 'My name',
					'email' => 'myemail@domain.com',
				],
				// highlight-end
			]
		],
	];
	return $meta_boxes;
} );
```

If the group is *cloneable*, the `std` value should be an array of clone values. Each clone value is an array of sub-field values. Like this:

```php
add_filter( 'rwmb_meta_boxes', function( $meta_boxes ) {
	$meta_boxes[] = [
		'title' => 'Test Meta Box',
		'fields' => [
			[
				'type' => 'group',
				'id'   => 'group',
				'name' => 'Group',
				'clone' => true,
				'collapsible' => true,
				'group_title' => '{name}',
				'fields' => [
					[
						'type' => 'text',
						'id' => 'name',
						'name' => 'Name',
					],
					[
						'type' => 'email',
						'id' => 'email',
						'name' => 'Email',
					],
				],
				'std' => [
					// Value for the 1st clone
					[
						'name' => 'Name 1',
						'email' => 'email1@domain.com',
					],

					// Value for the 2nd clone
					[
						'name' => 'Name 2',
						'email' => 'email2@domain.com',
					]
				],
			]
		],
	];
	return $meta_boxes;
} );
```

And here is the result:

![default group value](https://i.imgur.com/rqxfxA8.png)

See this video for demonstration:

<iframe src="https://www.loom.com/embed/c8f04fb84025428c895f14137b194035" frameborder="0" allowfullscreen width="100%"></iframe>

## Changing clone button text

To change the clone button text, set use the `add_button` parameter like below:

```php
[
	'type'       => 'group',
	'name'       => 'Tracks',
	'id'         => 'tracks',
    // highlight-next-line
	'add_button' => 'Add another track',
	'fields'     => [
		// Sub-fields here.
	],
],
```

## Clone default values

When clone a group, if the group has `clone_default` set to `true`, then all sub-fields will have their default values. The exception is if a sub-field is cloneable, then its `clone_default` will take the higher priority and comes to effect. In this case, the sub-field `clone_default` is used, no matter the settings of the outer group.

Learn more about [`clone_default` parameter](/cloning-fields/).

## Known issues

- When cloning fields or groups, `id` attribute of inputs are adjusted. In multi-level nested groups, they're changed without any rule. So please don't rely on them to perform custom JavaScript actions.
- If you have a `wysiwyg` field in a cloneable group, please set its `ID` not ended with `_{number}` (e.g. `_12`). This format is reserved by the clone script to update the editor ID/name. Please just change the ID to another format.
