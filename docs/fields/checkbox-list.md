---
title: Checkbox list
---

import Screenshots from '@site/src/components/Screenshots';
import Choice from '../_parts/_choice.md';

The checkbox list field creates a list of tick-able checkboxes. You are able to select multiple choices from the predefined list.

## Screenshots

<Screenshots name="checkbox-list" col1={[
    ['https://i.imgur.com/XQDaCFO.png', 'Checkbox list vertical with Toggle All button'],
    ['https://i.imgur.com/0WuJEv6.png', 'Checkbox list inline'],
]} />

## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings:

Name | Key | Description
--- | --- | ---
Choices | `options` | List of choices, each per line. If you need to set values and labels, use the format "value: Label" for each choice.<br />When using with code, this setting is an array of `'value' => 'Label'`.
Inline | `inline` | Display choices in a single line? `true` or `false`.
Display "Toggle All" button | `select_all_none` | Display "Toggle All" button to quickly toggle choices.

This is a sample field settings array for registering this field with code:

```php
[
    'name'    => 'Checkbox list',
    'id'      => 'field_id',
    'type'    => 'checkbox_list',
    'options' => [
        'java'       => 'Java',
        'javascript' => 'JavaScript',
        'php'        => 'PHP',
        'csharp'     => 'C#',
        'kotlin'     => 'Kotlin',
        'swift'      => 'Swift',
    ],
    'inline'          => true,
    'select_all_none' => true,
],
```

<Choice />