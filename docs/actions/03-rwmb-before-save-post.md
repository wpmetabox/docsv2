---
title: rwmb_before_save_post
---

This action runs before a field group is saved.

```php
do_action( 'rwmb_before_save_post', $object_id );
```

It takes 1 parameter: current object ID.

:::info

Although the action name is `rwmb_before_save_post`, it applies to all object types, including term, user, or setting. We keep the name for historical reasons.

:::

To run this action for a specific field group, use a variation of this action:

```php
do_action( "rwmb_{$field_group_id}_before_save_post", $object_id );
```

## Examples

**Changing a field value before saving:**

```php
add_action( 'rwmb_event-details_before_save_post', function() {
    $_POST['location'] = 'United States';
	rwmb_request()->set_post_data( $_POST );
} );
```

**Changing a field value based on another field value:**

```php
add_action( 'rwmb_event-details_before_save_post', function() {
    if ( $_POST['event_type'] === 'festival' ) {
        $_POST['event_start_time'] = '09:00';
        $_POST['event_end_time'] = '17:00';
		rwmb_request()->set_post_data( $_POST );
    }
} );
```
