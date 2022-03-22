---
title: rwmb_after_save_post
---

This action runs after all fields in a field group are saved.

```php
do_action( 'rwmb_after_save_post', $object_id );
```

It takes 1 parameter: current object ID.

:::info

Although the action name is `rwmb_after_save_post`, it applies to all object types, including term, user, or setting. We keep the name for historical reasons.

:::

To run this action for a specific field group, use a variation of this action:

```php
do_action( "rwmb_{$field_group_id}_after_save_post", $object_id );
```

## Examples

**Combining values of 2 fields into another one:**

```php
add_action( 'rwmb_my-field-group_after_save_post', function( $object_id ) {
    if ( isset( $_POST['field_1'] ) && isset( $_POST['field_2'] ) ) {
        $value = $_POST['field_1'] . $_POST['field_2'];
        update_post_meta( $object_id, 'field_combine', $value );
    }
} );
```

**Saving a sub-field of a group into a separated custom field:**

This is helpful when you have a group of many fields and want to query posts by a sub-field. As the group value is serialized, querying by a sub-field is not possible. With this trick, you can do that.

```php
add_action( 'rwmb_event-details_after_save_post', function( $object_id ) {
    $event = $_POST['event'];
    $date = $event['date'];
    update_post_meta( $object_id, 'event_date', $date );
} );
```

This way, you can query posts by `event_date`.

**Sending an email after saving a field group:**

```php
add_action( 'rwmb_event-details_after_save_post', function( $object_id ) {
    $title = get_the_title( $object_id );
    $event_date = get_post_meta( $object_id, 'event_date', true );

    $subject = 'Event updated';
    $body = "The following event is updated:\n\n
    Title: $title\n\n
    Date: $event_date";
    $to = get_option( 'admin_email' );

    wp_mail( $to, $subject, $body );
} );
```