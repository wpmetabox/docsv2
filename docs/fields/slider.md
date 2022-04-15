---
title: Slider
---

import Screenshots from '@site/src/components/Screenshots';

The slider field creates a slider where you can select a number by dragging a control. This field uses jQuery UI library to create the UI.

## Screenshots

<Screenshots name="slider" col1={[
    ['https://i.imgur.com/voHxzpJ.png', 'The slider field interface']
]} />

## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings, the keys are for use with code:

Name | Key | Description
--- | --- | ---
Prefix | `prefix` | Text displayed before the field value. Optional.
Suffix | `suffix` | Text displayed after the field value. Optional.
Slider options | `js_options` | jQuery UI slider options. [See here](https://api.jqueryui.com/slider/).

By default, Meta Box applies these default slider options:

Name | Value | Description
--- | ---
`range` | `min` | Create a range from the minimum value to one handle.
`value` | `$field['std']` | Set the default field value.

If you set `range` to `true`, the plugin will save 2 values in the database, separated by pipe (`|`) character, e.g. `15|90`.

This is a sample field settings array when creating this field with code:

```php
[
    'name'       => 'Slider',
    'id'         => 'slider',
    'type'       => 'slider',
    'prefix'     => '$',
    'suffix'     => ' USD',
    'js_options' => [
        'min'   => 10,
        'max'   => 255,
        'step'  => 5,
    ],

    'std' => 150,
],
```

## Data

This field saves a single selected value (without the prefix and suffix) in the database.

If the field is cloneable, the value is stored as a serialized array in a single row in the database.

## Template usage

**Displaying the field value:**

```php
<?php $value = rwmb_meta( 'my_field_id' ) ?>
<p>Selected value: <?= $value ?></p>
```

or simpler:

```php
<p>Selected value: <?php rwmb_the_value( 'my_field_id' ) ?></p>
```