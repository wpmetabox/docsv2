---
title: rwmb_ajax_get_posts
---

This filter changes the items that the `post` field gets via Ajax (when `ajax` is `true`). The field shows these items in the dropdown when users search or scroll.

```php
apply_filters( 'rwmb_ajax_get_posts', $items, $field, $request );
```

It has 3 parameters:

Name|Description
---|---
`$items`|Array of items. Each item is an array with `value` (post ID), `label` (post title) and `parent` (parent post ID).
`$field`|Field settings
`$request`|The `RWMB_Request` object. Use `$request->filter_post( 'term' )` to get the search keyword.

Other fields that get items via Ajax have similar filters:

- `rwmb_ajax_get_terms`: for the `taxonomy` and `taxonomy_advanced` fields. Each item has `value` (term ID), `label` and `parent`.
- `rwmb_ajax_get_users`: for the `user` field. Each item has `value` (user ID) and `label`.
- `rwmb_ajax_get_models`: for the `model` field of [MB Custom Table](/extensions/mb-custom-table/).

## Examples

**Add the post date to the labels:**

```php
add_filter( 'rwmb_ajax_get_posts', function ( $items, $field, $request ) {
    if ( 'related_event' !== $field['id'] ) {
        return $items;
    }
    foreach ( $items as &$item ) {
        $item['label'] .= ' (' . get_the_date( 'Y-m-d', $item['value'] ) . ')';
    }
    return $items;
}, 10, 3 );
```

**Remove users with the "subscriber" role from the results:**

```php
add_filter( 'rwmb_ajax_get_users', function ( $items, $field, $request ) {
    return array_values( array_filter( $items, function ( $item ) {
        return ! in_array( 'subscriber', get_userdata( $item['value'] )->roles, true );
    } ) );
}, 10, 3 );
```

To change the query (not the results), use the field's `query_args` setting instead.
