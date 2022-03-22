---
title: rwmb_before
---

This action runs before all fields in a field group is displayed. It's usually used for outputting custom HTML.

```php
do_action( 'rwmb_before', $meta_box );
```

It takes 1 parameter: the instance of `RW_Meta_Box` class for the current field group.

To run this action for a specific field group, you can use a variation of this action:

```php
do_action( "rwmb_before_{$field_group_id}", $meta_box );
```

## Examples

This code wraps a field group with ID `event-details` into a custom div:

```php
add_action( 'rwmb_before_event-details', function( $meta_box ) {
	echo '<div class="my-div">';
} );

add_action( 'rwmb_after_event-details', function( $meta_box ) {
	echo '</div>';
} );
```