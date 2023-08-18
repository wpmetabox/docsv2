---
title: rwmb_begin_html
---

import FieldHTML from '../_parts/_field-html.md';

This filter is used to change the beginning HTML output of a field.

<FieldHTML />

The default beginning HTML of a field is:

```html
<div class="rwmb-label" id="{$field['id]}-label">
    <label for="{$field['id']}">
        {$field['name']}
        <span class="rwmb-required">*</span>
    </label>
    <p id="{$field['id']}-label-description" class="description">{$field['label_description']}</p>
</div>
<div class="rwmb-input">
```

Syntax:

```php
apply_filters( 'rwmb_begin_html', $begin, $field, $value );
```

This filter accepts 3 parameters:

Name|Description
---|---
`$begin`| The beginning HTML output of the field
`$field`| Field settings
`$value`| Field value

This filter has variations:

- `rwmb_begin_html`: apply for all fields
- `rwmb_{$field_type}_begin_html`: apply for fields with a specific type
- `rwmb_{$field_id}_begin_html`: apply for a field with a specific id
