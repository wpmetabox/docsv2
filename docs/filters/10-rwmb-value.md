---
title: rwmb_value
---

This filter is used to change a field value before saving it in the database.

```php
apply_filters( 'rwmb_value', $value, $field, $old, $object_id );
```

It accepts 4 parameters:

Name|Description
---|---
`$value`| Field value which will be saved in the database
`$field`| Field settings
`$old`| The old meta value of the field (which was previously in the database)
`$object_id`| The object ID

This filter has variations:

- `rwmb_value`: apply for all fields
- `rwmb_{$field_type}_value`: apply for fields with a specific type
- `rwmb_{$field_id}_value`: apply for a field with a specific id

:::info
If you return an empty string or an empty array (for cloneable fields or fields with multiple values like file, image, checkbox list), the field won't be saved in the database.
:::

## Examples

**Disallowing a value from being saved:**

```php
add_filter( 'rwmb_event_date_value', function( $new, $field, $old, $object_id ) {
	if ( $new === '2022-05-01' ) { // No events on Labor Day
		$new = '';
	}
	return $new;
} );
```
