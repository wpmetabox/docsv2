---
title: rwmb_get_value
---

This filter is used to change the returned value of the [rwmb_get_value()](/functions/rwmb-get-value/) helper function.

```php
apply_filters( 'rwmb_get_value', $value, $field_id, $args, $object_id );
```

It accepts 4 parameters:

Name|Description
---|---
`$value`|The value returned by the `rwmb_get_value` function
`$field_id`|The field ID
`$args`|Arguments passed to the `rwmb_get_value` function
`$object_id`|Object ID

## Examples

Format the value of a date field:

```php
add_filter( 'rwmb_meta', function( $value, $field_id, $args, $object_id ) {
    if ( $field_id === 'event_date' ) {
        $value = date( 'F j, Y', strtotime( $value ) );
    }
    return $value;
}, 10, 4 );
```
