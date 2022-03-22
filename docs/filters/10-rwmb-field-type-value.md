---
title: rwmb_{$field_type}_value
---

This filter is used to change a field value before saving it in the database.

```php
apply_filters( "rwmb_{$field['type']}_value", $new, $field, $old, $object_id );
```

It accepts 4 parameters:

Name|Description
---|---
`$new`| Field value which will be saved in the database
`$field`| Field settings
`$old`| The old meta value of the field (which was previously in the database)
`$object_id`| The object ID

This filter has variations:

- `rwmb_{$field_type}_value`: apply for fields with a specific type
- `rwmb_{$field_id}_value`: apply for a field with a specific id

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
