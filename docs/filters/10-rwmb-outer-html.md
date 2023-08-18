---
title: rwmb_outer_html
---

import FieldHTML from '../_parts/_field-html.md';

This filter is used to change the outer HTML output of a field. Outer HTML is the surrounding div (the most outside) of the field.

<FieldHTML />

This filter is used to change the **field outer HTML**, e.g. the wrapper div of everything for the field.

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

- `rwmb_outer_html`: apply to all fields
- `rwmb_{$field_type}_outer_html`: apply to fields with a specific type
- `rwmb_{$field_id}_outer_html`: apply to a the field with a specific id
