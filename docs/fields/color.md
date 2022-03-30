---
title: Color
---

import Screenshots from '@site/src/components/Screenshots';

The color field allows you to select a color. This field uses the built-in WordPress color picker with an extension to select the alpha channel for colors.

## Screenshots

<Screenshots name="color" col1={[
    ['https://i.imgur.com/a8IFYvx.png', 'The color field interface']
]} />

## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings, the keys are for use with code:

Name | Key | Description
--- | --- | ---
Allow to select opacity | `alpha_channel` | Whether to add opacity to the color picker. `true` or `false` (default). Optional.
Color picker options | `js_options` | Extra color picker options. [See here](https://automattic.github.io/Iris/).

This is a sample field settings array when creating this field with code:

```php
[
    'name'          => 'Color picker',
    'id'            => 'field_id',
    'type'          => 'color',
    'alpha_channel' => true,
    'js_options'    => [
        'palettes' => ['#125', '#459', '#78b', '#ab0', '#de3', '#f0f'],
    ],
],
```

## Data

This field saves the hex value of the picked color in the database.

If the field is cloneable, then the value is stored as a serialized array in a single row in the database.

## Template usage

**Getting the value:**

```php
<?php $value = rwmb_meta( 'my_field_id' ) ?>
<div style="background-color: <?= $value ?>">
    <h2>My section title</h2>
    <p>My section content</p>
</div>
```

**Displaying the selected color:**

```php
<p>This is the color: <?php rwmb_the_value( 'my_field_id' ) ?></p>
```

which displays the color as a single dot like this:

![display color](https://i.imgur.com/gLAVBYS.png)
