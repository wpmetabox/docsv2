---
title: rwmb_before_delete_field
---

These actions run when you delete a field value with [`rwmb_delete_meta()`](/functions/rwmb-delete-meta/).

```php
do_action( 'rwmb_before_delete_field', $object_id, $key, $args );
do_action( 'rwmb_after_delete_field', $object_id, $key, $args, $result );
```

They have these parameters:

Name|Description
---|---
`$object_id`|The object ID
`$key`|The field ID
`$args`|The arguments of `rwmb_delete_meta()`, such as `object_type`
`$result`|Only for `rwmb_after_delete_field`. `true` if the value is deleted, `false` if not.

These actions do not run when users clear a field in the edit screen. For that case, use [`rwmb_after_save_field`](/actions/rwmb-after-save-field/).

## Example

**Log deleted values:**

```php
add_action( 'rwmb_after_delete_field', function ( $object_id, $key, $args, $result ) {
    if ( $result ) {
        error_log( "Deleted field $key of object $object_id" );
    }
}, 10, 4 );
```
