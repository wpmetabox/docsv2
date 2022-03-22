---
title: rwmb_choice_label
---

This filter allows developers to change the label of choice fields (`user`, `post`, `taxonomy`, and `taxonomy_advanced`).

```php
apply_filters( 'rwmb_choice_label', $label, $field, $object );
```

It has 3 parameters:

Name|Description
---|---
`$label`| The output label
`$field`| Field settings
`$object`| The post, user, or term object

This filter has variations:

- `rwmb_choice_label`: apply for all choice fields
- `rwmb_{$field_type}_choice_label`: apply for choice fields with a specific type
- `rwmb_{$field_id}_choice_label`: apply for a field with a specific id

## Examples

**Display a formatted name instead of the default display name:**

```php
add_filter( 'rwmb_some_user_choice_label', function( $label, $field, $object ) {
    return "Mr: {$object->first_name}";
}, 10, 3 );
```

