---
title: Checkbox list
---

import Screenshots from '@site/src/components/Screenshots';
import Choice from '../_parts/_choice.md';

The checkbox list field creates a list of tick-able checkboxes with options. You can select multiple choices from the predefined list.

## Screenshots

<Screenshots name="checkbox-list" col1={[
    ['/screenshots/checkbox-list-1.png', 'Checkbox list vertical with "Toggle All" button'],
    ['/screenshots/checkbox-list-2.png', 'Checkbox list inline'],
]} />

## Settings

Besides the [common settings](/field-settings/) such as Label, ID, Default value, Cloneable, etc., this field has the following specific settings:

![common settings of the checkbox list field](https://i.imgur.com/wN8a5B9.png)

Name | Key | Description
--- | --- | ---
Choices | `options` | List of choices, each per line. If you need to set values and labels, use the format "value: Label" for each choice.<br />When using code, this setting is an array of `'value' => 'Label'`.
Inline | `inline` | Display choices in a single line? `true` or `false`.
Display "Toggle All" button | `select_all_none` | Display "Toggle All" button to quickly toggle choices.

:::Remarks

* The keys are for using with code.
* The interface of field settings just comes when you have the Meta Box Builder extension in your pocket. It’s a premium extension providing the UI to create and configure fields visually. It’s already bundled in the Meta Box AIO and MB Core.

:::


This is a sample field settings array when creating this field with code:

```php
[
    'name'            => 'Checkbox list',
    'id'              => 'field_id',
    'type'            => 'checkbox_list',
    'inline'          => true,
    'select_all_none' => true,
    'options' => [
        'java'       => 'Java',
        'javascript' => 'JavaScript',
        'php'        => 'PHP',
        'csharp'     => 'C#',
        'kotlin'     => 'Kotlin',
        'swift'      => 'Swift',
    ],
],
```

On the other hand, in the interface, the field with settings and options should be as follow:

![the field with settings and options](https://i.imgur.com/xCXa6fw.png)

You also can input no value for each option. Just input the label of choices, and the checkbox list on the frontend still displays exactly as you want.

![Input only the label of the options in the Choices box](https://i.imgur.com/YqOJi0y.png)

![The field displays in the post/page editor](https://i.imgur.com/u9Wk4xH.png)

<Choice />
