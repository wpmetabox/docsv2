---
title: Button Group
---

import Screenshots from '@site/src/components/Screenshots';
import ChoiceSingle from '../_parts/_choice-single.md';

The button group allows you to select one or more options by enabling buttons from a button group. This field is helpful when you want to display choices in the style of a toolbar.

## Screenshots

<Screenshots name="select" col1={[
    ['https://i.imgur.com/gVAILxbl.png', 'The button group field interface']
]} />


## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings, the keys are for use with code:

Name | Key | Description
--- | --- | ---
Buttons | `options` | List of buttons, each per line. If you need to set values and labels, use the format "value: Label" for each choice.<br />When using with code, this setting is an array of `'value' => 'Label'`.
Multiple | `multiple` | Whether to allow select multiple values? `true` or `false` (default).
Display buttons horizontally | `inline` | Whether to display buttons horizontally (`true` - default) or vertically (`false`).

This is a sample field settings array when creating this field with code:

```php
[
    'id'       => 'styles',
    'name'     => 'Styles',
    'type'     => 'button_group',
    'options'  => [
        'bold'      => '<i class="dashicons dashicons-editor-bold"></i>',
        'italic'    => '<i class="dashicons dashicons-editor-italic"></i>',
        'underline' => '<i class="dashicons dashicons-editor-underline"></i>',
    ],
    'inline'   => true,
    'multiple' => true,
],
```

<ChoiceSingle />
