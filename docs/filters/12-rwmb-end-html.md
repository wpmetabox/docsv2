---
title: rwmb_end_html
---

import FieldHTML from '../_parts/_field-html.md';

This filter is similar to [rwmb_begin_html](/filters/rwmb-begin-html/) and is used to change the ending HTML output of a field.

<FieldHTML />

The ending HTML for a field looks like this:

```html
	{$add_clone_button}
	<p id="{$field['id']}-description" class="description">{$field['desc']}</p>
</div><!-- .rwmb-input -->
```

Syntax:

```php
apply_filters( 'rwmb_end_html', $end, $field, $value );
```

This filter accepts 3 parameters:

Name|Description
---|---
`$end`| The ending HTML output of the field
`$field`| Field settings
`$value`| Field value

This filter has variations:

- `rwmb_end_html`: apply for all fields
- `rwmb_{$field_type}_end_html`: apply for fields with a specific type
- `rwmb_{$field_id}_end_html`: apply for a field with a specific id
