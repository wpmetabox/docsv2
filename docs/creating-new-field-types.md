---
title: Creating new field types
---

If the existing Meta Box field types are not suitable for your needs, you can create a new field type. This documentation will show you how to create a new field type `phone` which accepts only format `xxx-xxx-xxxx`.

## Field class

If we want to create a new field type, we need to create a class `RWMB_{$field_type}_Field` that extends the base `RWMB_Field` class. In this case, our class name is `RWMB_Phone_Field`.

```php
class RWMB_Phone_Field extends RWMB_Field {
    // Code for the field goese here
}
```

Save this class in a PHP file. Then include it in the theme's `functions.php` file or your plugin's file:

```php
add_action( 'init', 'prefix_load_phone_type' );

function prefix_load_phone_type() {
    require 'path/to/field-phone.php';
}
```

:::info Why init hook?

We use `init` action to make sure all Meta Box files are loaded and class `RWMB_Field` is defined.

:::

## Methods

For the phone field, we have to define content of `html` method to output the field HTML:

```php
public static function html( $meta, $field ) {
    return sprintf(
        '<input type="text" name="%s" id="%s" class="rwmb-phone" value="%s" pattern="\d{3}-\d{3}-\d{4}">',
        $field['field_name'],
        $field['id'],
        $meta
    );
}
```

Here we use the attribute `pattern` to force users to enter correct phone number format `xxx-xxx-xxxx`.

For this field, we don't need to handle saving or retrieving meta value or enqueueing scripts and styles. Everything is handled automatically by Meta Box.

The complete code for this class is the following:

```php
class RWMB_Phone_Field extends RWMB_Field {
    public static function html( $meta, $field ) {
        return sprintf(
            '<input type="text" name="%s" id="%s" class="rwmb-phone" value="%s" pattern="\d{3}-\d{3}-\d{4}">',
            $field['field_name'],
            $field['id'],
            $meta
        );
    }
}
```

:::info Methods

The phone class inherits all methods from `RWMB_Field` class. The full list of `RWMB_Field` methods and their description are described in [this documentation](/rwmb-field-class/).

:::

## How to use the new field type?

After register a new field type, you can use it in [your code](/creating-fields-with-code/), like this:

```php
add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
    $meta_boxes[] = [
        'title'      => 'Profile',
        'post_types' => 'speaker',
        'fields'     => [
            'Name',
            // highlight-start
            [
                'name' => 'Hotline',
                'id'   => 'hotline',
                'type' => 'phone',
            ],
            // highlight-end
        ],
    ];

    return $meta_boxes;
} );
```

Now when you go to edit post page, you'll see a new field like this:

![new field type](https://i.imgur.com/lK8DRW7.png)

That's all for this simple field type. If you want to create a more complicated field, just overwrite methods from [`RWMB_Field` class](/rwmb-field-class/). You might want to enqueue scripts and styles, sanitizing field value before saving in the database, etc. The `RWMB_Field` class has all methods for that you just need to overwrite necessary methods.

:::caution Cloneable fields

To make the field works with the [clone feature](/cloning-fields/), make sure to add a CSS class to your inputs that start with `rwmb`. The clone script will automatically detect all the inputs started with `rwmb` and set the correct `id` and `name` attribute.

:::