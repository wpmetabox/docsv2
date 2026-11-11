---
title: rwmb_autocomplete_field
---

This filter changes the settings of an `autocomplete` field before the field shows the selected values in the admin.

```php
apply_filters( 'rwmb_autocomplete_field', $field, $meta );
```

It has 2 parameters:

Name|Description
---|---
`$field`|Field settings
`$meta`|Array of the selected values

The plugin uses `$field['options']` to get the labels of the selected values. If the field gets its options from a remote URL, `options` is a string (the URL). In that case, use this filter to set `options` to an array of `value => label` for the selected values.

A related filter, `rwmb_autocomplete_result_label`, changes the label of each selected value when `options` is not an array:

```php
apply_filters( 'rwmb_autocomplete_result_label', $value, $field );
```

## Example

**Show the city names for the values that come from a remote URL:**

```php
add_filter( 'rwmb_autocomplete_result_label', function ( $value, $field ) {
    if ( 'city' !== $field['id'] ) {
        return $value;
    }
    $city = my_get_city( $value ); // Your function to get the city by its code.
    return $city ? $city['name'] : $value;
}, 10, 2 );
```
