---
title: rwmb_field_class
---

This filter changes the PHP class that handles a field type. By default, the class name is `RWMB_{Type}_Field`. For example, the `text` field uses `RWMB_Text_Field`.

```php
apply_filters( 'rwmb_field_class', $class, $type );
```

It has 2 parameters:

Name|Description
---|---
`$class`|The class name
`$type`|The field type

If the class does not exist, the plugin uses `RWMB_Input_Field`.

## Example

**Use a custom class for a field type with a namespaced class name:**

```php
add_filter( 'rwmb_field_class', function ( $class, $type ) {
    if ( 'phone' === $type ) {
        $class = \MyPlugin\Fields\Phone::class;
    }
    return $class;
}, 10, 2 );
```

See [Creating new field types](/creating-new-field-types/) for how to write the class.
