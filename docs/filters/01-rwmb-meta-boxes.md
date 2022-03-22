---
title: rwmb_meta_boxes
---

This is the most important filter of Meta Box. It is used to add/remove/edit field groups.

```php
apply_filters( 'rwmb_meta_boxes', $meta_boxes );
```

This filter has one parameter - an array of field groups.

## Examples

**Registering a field group:**

```php
add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
    $meta_boxes[] = [
        'title'      => 'Event details',
        'post_types' => 'event',
        'fields'     => [
            [
                'name' => 'Date and time',
                'id'   => 'datetime',
                'type' => 'datetime',
            ],
            'Location',
            [
                'name'          => 'Map',
                'id'            => 'map',
                'type'          => 'osm',
                'address_field' => 'location',
            ],
        ],
    ];

    return $meta_boxes;
} );
```

**Removing a registered field group `event-details`:**

```php
add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
    foreach ( $meta_boxes as $k => $meta_box ) {
        if ( $meta_box['id'] === 'event-details' ) {
            unset( $meta_boxes[ $k ] );
        }
    }

    return $meta_boxes;
} );
```
