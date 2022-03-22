---
title: Creating new field types
---

If the existing Meta Box field types are not suitable for your needs, you can create a new field type. This documentation will show you how to create a new field type `phone` which accepts only format `xxx-xxx-xxxx`.

## Registering a field class

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

## Adding a method to output the field

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

Here we use the attribute `pattern` to force users to enter the correct phone number format `xxx-xxx-xxxx`.

For this field, we don't need to handle saving or retrieving the meta value or enqueueing scripts and styles. Everything is handled automatically by Meta Box.

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

The phone class inherits all methods from `RWMB_Field` class. The full list of `RWMB_Field` methods and their description are described below.

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

Now when you go to the editing page, you'll see a new field like this:

![new field type](https://i.imgur.com/lK8DRW7.png)

That's all for this simple field type. If you want to create a more complex field, just overwrite methods from `RWMB_Field` class. You might want to enqueue scripts and styles, sanitize field value before saving in the database, etc. The `RWMB_Field` class has all methods for that you just need to overwrite necessary methods.

:::caution Cloneable fields

To make the field works with the [clone feature](/cloning-fields/), make sure to add a CSS class to your inputs that start with `rwmb`. The clone script will automatically detect all the inputs started with `rwmb` and set the correct `id` and `name` attributes.

:::

## `RWMB_Field` class methods

All methods of this class (and its descendants) are **static**. It will make all fields use the same code instead of creating multiple class instances, thus increasing the plugin's performance.

### `add_actions`

This method allows a field to add custom hooks for its needs. For example: callbacks for ajax call ([like `file`](https://github.com/wpmetabox/meta-box/blob/master/inc/fields/file.php#L36)), add hooks to output custom content in admin footer ([like `file_advanced`](https://github.com/wpmetabox/meta-box/blob/master/inc/fields/media.php#L51)), etc. This method is called when the meta box is loaded. You can also add custom code to this method or calls to other functions which need to run when code is loaded. This method doesn't have any arguments.

### `admin_enqueue_scripts`

This method allows you to enqueue scripts and styles for a field. This method doesn't have any arguments.

### `show`

This method outputs the field's HTML markup. Fields should **not** overwrite this method to output custom HTML. Instead of that, overwrite methods `html`, `begin_html`, `end_html` described below. This method has 2 arguments:

- `$field`: array of field arguments
- `$saved`: a param used to detect whether this meta box is saved into database or not
- `$post_id`: the current post ID

### `html`

This method returns (not echoes, only returns) field's HTML markup. This is the input controls of the field and is put inside `.rwmb-input` CSS class. Each field **must** overwrite this method to returns its HTML for inputs. This method has 2 arguments:

- `$meta`: field meta value
- `$field`: array of field arguments

### `begin_html`

This method returns the beginning HTML output of a field. The beginning HTML output contains field name and opening tag for inputs. By default it is:

```php
<div class="rwmb-label">
    <label for="{$field_id}">{$field_name}</label>
</div>
<div class="rwmb-input">
```

This method should **not** be overwritten by field's class, unless it's needed to do so ([like `heading` field](https://github.com/wpmetabox/meta-box/blob/master/inc/fields/heading.php#L27)). This method has 2 arguments:

- `$meta`: field meta value
- `$field`: array of field arguments

### `end_html`

This method returns the ending HTML output of a field. The ending HTML output contains clone button, field description and closing tag for inputs. By default it is:

```php
{$clone_button}
{$field_description}
</div> <!-- .rwmb-input -->
```

This method should **not** be overwritten by field's class, unless it's needed to do so ([like `heading` field](https://github.com/wpmetabox/meta-box/blob/master/inc/fields/heading.php#L40)). This method has 2 arguments:

- `$meta`: field meta value
- `$field`: array of field arguments

### `meta`

This method retrieves meta value for a field. In most cases, this method does all the job of retrieving meta value of a field. But in some cases, a descendant class may overwrite this method to retrieve meta value for more complicated logic. This method has 3 parameters:

- `$post_id`: current post ID, from which we retrieve meta value
- `$saved`: a param used to detect whether this meta box is saved into database or not
- `$field`: array of field arguments

### `value`

This method set field meta value before saving in database. By default it just returns the value from `$_POST`. Field class can overwrite this method to set meta value for more complicated logic ([like `taxonomy_advanced`](https://github.com/wpmetabox/meta-box/blob/master/inc/fields/taxonomy-advanced.php#L22)). This method has 4 parameters:

- `$new`: field meta value which will be saved in the database
- `$old`: old meta value of field
- `$post_id`: current post ID, from which we retrieve meta value
- `$field`: array of field arguments

### `save`

This method saves field meta value in database. In most cases, this method does all the job of saving meta value of a field to database. But in some cases, a descendant class may overwrite this method to handle saving itself ([like `taxonomy` field](https://github.com/wpmetabox/meta-box/blob/master/inc/fields/taxonomy.php#L194)). This method has 4 parameters:

- `$new`: field meta value which will be saved in the database
- `$old`: old meta value of field
- `$post_id`: current post ID, from which we retrieve meta value
- `$field`: array of field arguments

### `normalize_field`

This method normalizes field arguments, add missing arguments, add default value for fields, etc. Depends on field type, each field class can overwrite this method to define its own defaults value. This method has 1 parameter:

- `$field`: array of field arguments
