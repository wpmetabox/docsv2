---
title: Select
---

import Screenshots from '@site/src/components/Screenshots';
import ChoiceSingle from '../_parts/_choice-single.md';

The select field creates a simple select dropdown. You are able to select one or multiple values from the predefined list.

## Screenshots

<Screenshots name="select" col1={[
    ['/screenshots/select-1.png', 'The select field interface']
]} />

## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings, the keys are for use with code:

Name | Key | Description
--- | --- | ---
Choices | `options` | List of choices, each per line. If you need to set values and labels, use the format "value: Label" for each choice.<br />When using with code, this setting is an array of `'value' => 'Label'`.
Multiple | `multiple` | Whether to allow select multiple values? `true` or `false` (default).
Placeholder | `placeholder` | The placeholder text.
Display "Toggle All" button | `select_all_none` | Display "Toggle All" button to quickly toggle choices. Applied only when "Multiple" is set.
Flatten | `flatten` | Display sub items without indentation. `true` or `false` (default). See below to know how to define sub items.

This is a sample field settings array when creating this field with code:

```php
[
    'name'            => 'Select',
    'id'              => 'select',
    'type'            => 'select',
    'multiple'        => true,
    'placeholder'     => 'Select an item',
    'select_all_none' => true,
    'options'         => [
        'java'       => 'Java',
        'javascript' => 'JavaScript',
        'php'        => 'PHP',
        'kotlin'     => 'Kotlin',
        'swift'      => 'Swift',
    ],
],
```

Besides the normal list of choices, you can define sub choices as follows:

```php
[
    'name'        => 'Select',
    'id'          => 'select',
    'type'        => 'select',
    'placeholder' => 'Select an Item',
    // highlight-next-line
    'flatten'     => false,
    'options' => [
        [
            'value' => 'monkeys',
            'label' => 'Monkeys',
        ],
        [
            'value' => 'king_kong',
            'label' => 'King Kong',
            // highlight-next-line
            'parent' => 'monkeys',
        ],
        [
            'value' => 'curious_george',
            'label' => 'Curious George',
            // highlight-next-line
            'parent' => 'monkeys',
        ],
        [
            'value' => 'donkeys',
            'label' => 'Donkeys',
        ],
        [
            'value' => 'eeyore',
            'label' => 'Eeyore',
            // highlight-next-line
            'parent' => 'donkeys',
        ],
        [
            'value' => 'guss',
            'label' => 'Gus',
            // highlight-next-line
            'parent' => 'donkeys',
        ],
    ],
],
```

Here is how it looks:

![select with sub choices](/screenshots/select-2.png)

<ChoiceSingle />