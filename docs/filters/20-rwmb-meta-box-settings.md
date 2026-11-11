---
title: rwmb_meta_box_settings
---

This filter changes the settings of a meta box (field group) after the plugin normalizes the meta box and its fields. It runs for every meta box, before the meta box shows.

```php
apply_filters( 'rwmb_meta_box_settings', $meta_box );
```

It has 1 parameter: `$meta_box`, the meta box settings. The fields are in `$meta_box['fields']`.

Use [`rwmb_meta_boxes`](/filters/rwmb-meta-boxes/) to register or change meta boxes. Use this filter only when you need the normalized settings, for example, the full field settings with default values.

## Example

**Make all fields in a meta box read-only for non-admin users:**

```php
add_filter( 'rwmb_meta_box_settings', function ( $meta_box ) {
    if ( 'company-info' !== $meta_box['id'] || current_user_can( 'manage_options' ) ) {
        return $meta_box;
    }
    foreach ( $meta_box['fields'] as &$field ) {
        $field['attributes']['readonly'] = true;
    }
    return $meta_box;
} );
```
