---
title: rwmb_get_registry
---

`rwmb_get_registry` is a helper function that gets list of registered meta boxes or fields.

Meta boxes and fields are stored in a meta box registry and field registry correspondingly. This function allows you to retrieve them (and filter them) to get the meta box or field you want.

## Usage

To get meta box or field registry use the code below:

```php
$meta_box_registry = rwmb_get_registry( 'meta_box' );
$field_registry = rwmb_get_registry( 'field' );
```

Each registry has some methods as described below:

## Meta box registry

Meta box registry is a storage of all meta box objects (instances of `RW_Meta_Box` class). The registry stores all meta box objects in a private array of the form `'id' => object`.

To get all meta box objects, use this method:

```php
$meta_boxes = $meta_box_registry->all();
```

To get a specific meta box object by id, use this method:

```php
$meta_box = $meta_box_registry->get( 'id' );
```

To get meta boxes by some attributes, use this method:

```php
$args = [
    'object_type' => 'post',
    'post_types'  => ['post'],
];
$meta_boxes = $meta_box_registry->get_by( $args );
```

Here `$args` is an array of the [meta box settings](/creating-fields-with-code/#field-group-settings) that you use to filter the list of meta boxes.

## Field registry

Similar to meta box registry, field registry is a storage of all fields. Each field is an array of its own settings. Note that fields are **not** objects.

Since fields can have the same ID for different object types (posts, terms, users, settings pages), we can't store fields in the registry in a one-dimentional array as meta box registry. Instead of that, we store it in a multi-dimentional array like this:

```php
[
    'post' => [
        'post'             => [$field1, $field2],
        'page'             => [$field3, $field4],
        'custom_post_type' => [$field5, $field6],
    ],
    'term' => [
        'category'        => [$field1, $field2],
        'post_tag'        => [$field3, $field4],
        'custom_taxonomy' => [$field5, $field6],
    ],
    'user' => [
        'user' => [$field1, $field2],
    ],
    'setting' => [
        'setting_page_1' => [$field1, $field2],
        'settings_page_2' => [$field1, $field2],
    ],
]
```

### Getting a field

To get a specific field, use the code below:

```php
$field = $field_registry->get( $field_id, $sub_type, $object_type );
```

Parameter|Description
---|---
`$field_id`|Field ID
`$sub_type`|The sub-type of the field.<br />For posts, sub-type is the post type slug.<br />For terms, it's the taxonomy slug.<br />For users, it's always `user`.<br />For settings, it's the option name.
`$object_type`|The object type of the field, which is either: `post` (default), `term`, `user` or `setting`. Optional.

```php
$field = $field_registry->get( 'my_field_id', 'my_custom_post_type' );
```

### Getting fields by object type:

To get all fields by object type, use this code:

```php
$fields = $field_registry->get_by_object_type( $object_type = 'post' );
```

Examples:

```php
// Get all fields for posts
$fields = $field_registry->get_by_object_type( 'post' );


// Get all fields for terms
$fields = $field_registry->get_by_object_type( 'term' );


// Get all fields for users
$fields = $field_registry->get_by_object_type( 'user' );


// Get all fields for settings pages
$fields = $field_registry->get_by_object_type( 'setting' );
```
