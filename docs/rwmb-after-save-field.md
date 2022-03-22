---
title: rwmb_after_save_field
---

This action runs after a field is saved.

```php
do_action( 'rwmb_after_save_field', $null, $field, $new, $old, $object_id );
```

It accepts the following parameters:

Name|Description
---|---
`$null`|Not used
`$field`|Field settings
`$new`|The new (submitted) field value
`$old`|The old field value
`$object_id`|The object ID

This action has variations:

- `rwmb_after_save_field`: apply for all fields
- `rwmb_{$field_type}_after_save_field`: apply for fields with a particular type
- `rwmb_{$field_id}_after_save_field`: apply for a field with a particular id

## Examples

**Logging all values of a field using another custom field:**

```php
add_action( 'rwmb_event_date_after_save_field', function ( $null, $field, $new, $old, $object_id ) {
    $log   = get_post_meta( $object_id, 'log_event_dates', true );
    $log[] = $new;
    update_post_meta( $object_id, 'log_event_dates', $log );
}, 10, 5 );
```

**Update another custom field based on a field value:**

```php
add_action( 'rwmb_event_date_after_save_field', function ( $null, $field, $new, $old, $object_id ) {
    if ( $new < '2022-04-01' ) {
        update_post_meta( $object_id, 'current_year', true );
    }
}, 10, 5 );
```