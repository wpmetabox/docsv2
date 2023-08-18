---
title: rwmb_field_meta
---

This filter is used to change a field value before displaying it in the editing form.

```php
apply_filters( 'rwmb_field_meta', $value, $field, $saved );
```

It accepts 3 parameters:

Name|Description
---|---
`$value`| Field value
`$field`| Field settings
`$saved`| Whether the field group is saved in the database. It's useful when you want to set a default value for a field

This filter has variations:

- `rwmb_field_meta`: apply to all fields
- `rwmb_{$field_type}_field_meta`: apply to fields with a specific type
- `rwmb_{$field_id}_field_meta`: apply to a field with a specific id
