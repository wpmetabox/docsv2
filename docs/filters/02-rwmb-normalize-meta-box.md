---
title: rwmb_normalize_meta_box
---

This filter is used to normalize field group settings. It's useful when you want to set default values for a field group.

```php
apply_filters( 'rwmb_normalize_meta_box', $meta_box );
```

It accepts one parameter - the field group settings array.

If you want to normalize settings for a specific field group, use a variation of this filter:

```php
apply_filters( "rwmb_normalize_{$meta_box_id}_meta_box", $meta_box );
```

## Examples

Prefix all field groups for the event post type:

```php
add_filter( 'rwmb_normalize_meta_box', function( $meta_box ) {
	if ( $meta_box['post_type'] === 'event' ) {
		$meta_box['id'] = "event_{$meta_box['id']}";
	}
	return $meta_box;
} );
```