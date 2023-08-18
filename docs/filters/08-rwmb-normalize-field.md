---
title: rwmb_normalize_field
---

This filter is used to normalize field settings. It's useful when you want to set default values for a field.

```php
apply_filters( 'rwmb_normalize_field', $field );
```

It accepts one parameter - an array of field settings.

This filter has variations:

- `rwmb_normalize_field`: apply to all fields
- `rwmb_normalize_{$field_type}_field`: apply to fields with a specific type
- `rwmb_normalize_{$field_id}_field`: apply to a field with a specific id

## Examples

**Auto add a prefix to all fields' IDs:**

```php
add_filter( 'rwmb_normalize_field', function( $field ) {
	$field['id'] = "prefix_{$field['id']}";
	return $field;
} );
```

**Auto add a `_` prefix to all fields' IDs to hide them from the "Custom Fields" meta box:**

```php
add_filter( 'rwmb_normalize_field', function( $field ) {
	$field['id'] = "_{$field['id']}";
	return $field;
} );
```
