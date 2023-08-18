---
title: rwmb_show
---

This filter is used to decide whether to show a field group.

```php
apply_filters( 'rwmb_show', $show, $meta_box );
```

It accepts 2 parameters:

Name|Description
---|---
`$show`|The current visibility of the field group
`$meta_box`|Field group settings

To run this filter for a specific field group, use a variation of this filter:

```php
apply_filters( "rwmb_show_{$meta_box_id}", $show, $meta_box );
```

## Examples

**Hide a field group if the current user is not admin:**

```php
add_filter( 'rwmb_show_event-details', function( $show, $meta_box ) {
    if ( current_user_can( 'manage_options' ) ) {
        $show = false;
    }
    return $show;
} );
```

**Hide a field group if current post ID is 123:**

```php
add_filter( 'rwmb_show_event-details', function( $show, $meta_box ) {
    $post_id = isset( $_GET['post'] ) ? $_GET['post'] : null;
    if ( $post_id === 123 ) {
        $show = false;
    }
    return $show;
} );
```