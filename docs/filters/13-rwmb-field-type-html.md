---
title: rwmb_{$field_type}_html
---

This filter is used to change the HTML of the field input.

The HTML of a field input is various and depends on the field type. For example, a text field outputs an `input` tag, while a wysiwyg field outputs a complex `div`.

```php
apply_filters( "rwmb_{$field_type}_html", $html, $field, $value );
```

This filter accepts 3 parameters:

Name|Description
---|---
`$html`| HTML output of a field
`$field`| Field settings
`$value`| Field value

This filter has variations:

- `rwmb_{$field_type}_html`: apply for fields with a specific type
- `rwmb_{$field_id}_html`: apply for a field with a specific id
