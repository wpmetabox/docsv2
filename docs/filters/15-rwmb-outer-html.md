---
title: rwmb_outer_html
---

This filter is used to change the outer HTML output of a field. Outer HTML is the surrounding div (the most outside) of the field. By default it has the following markup:

```php
$outer_html = $field['before'] . "<div class='{$field_classes}'>{$wrapper_html}</div>" . $field['after'];
```
Syntax:

```php
apply_filters( 'rwmb_outer_html', $html, $field, $value );
```

This filter accepts 3 parameters:

Name|Description
---|---
`$html`| The outer HTML output of a field
`$field`| Field settings
`$value`| Field value

This filter has variations:

- `rwmb_outer_html`: apply for all fields
- `rwmb_{$field_type}_outer_html`: apply for fields with a specific type
- `rwmb_{$field_id}_outer_html`: apply for a the field with a specific id
