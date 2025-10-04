---
title: Select Advanced
---

import Screenshots from '@site/src/components/Screenshots';
import ChoiceSingle from '../_parts/_choice-single.md';

The select advanced field creates a beautiful select dropdown using the [select2](https://select2.org/) library.

## Screenshots

<Screenshots name="select-advanced" col1={[
    ['https://imgur.elightup.com/65OkGbt.png', 'The select advanced field interface']
]} />

## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings, the keys are for use with code:

Name | Key | Description
--- | --- | ---
Choices | `options` | List of choices, each per line. If you need to set values and labels, use the format "value: Label" for each choice.<br />When using with code, this setting is an array of `'value' => 'Label'`.
Multiple | `multiple` | Whether to allow select multiple values? `true` or `false` (default).
Placeholder | `placeholder` | The placeholder text.
Display "Toggle All" button | `select_all_none` | Display "Toggle All" button to quickly toggle choices. Applied only when "Multiple" is set.
Select2 options | `js_options` | Options for `select2` library. [See here](https://select2.org/configuration).

By default, Meta Box applies these default options for select2:

Name | Value | Description
--- | ---
`allowClear` | `true` | Allow users to clear selection.
`width` | `resolve` | Set width by element's width.
`placeholder` | `$field['placeholder']` | Make `placeholder` works just like `select` field.

This is a sample field settings array when creating this field with code:

```php
[
    'name'            => 'Select Advanced',
    'id'              => 'select_advanced',
    'type'            => 'select_advanced',
    'options'         => [
        'java'       => 'Java',
        'javascript' => 'JavaScript',
        'php'        => 'PHP',
        'kotlin'     => 'Kotlin',
        'swift'      => 'Swift',
    ],
    'placeholder'     => 'Select an Item',
    'js_options'      => [
        'containerCssClass' => 'my-custom-class',
    ],
],
```

<ChoiceSingle />
