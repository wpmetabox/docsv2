---
title: Radio
---

import Screenshots from '@site/src/components/Screenshots';

The radio field creates a simple list of radio inputs where you are able to select a single choice from the predefined list.

## Screenshots

<Screenshots name="radio" col1={[
    ['/screenshots/radio-1.png', 'Radio choices inline'],
    ['/screenshots/radio-2.png', 'Radio choices on multiple lines'],
]} />

## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings, the key is for use with code:

Name | Key | Description
--- | --- | ---
Choices | `options` | List of choices, each per line. If you need to set values and labels, use the format "value: Label" for each choice.<br />When using with code, this setting is an array of `'value' => 'Label'`.
Inline | `inline` | Display choices on a single line? `true` or `false`.

This is a sample field settings array when creating this field with code:

```php
[
    'name'    => 'Radio',
    'id'      => 'radio',
    'type'    => 'radio',
    'inline'  => false,
    'options' => [
        'value1' => 'Label1',
        'value2' => 'Label2',
    ],
],
```

## Data

This field simply saves a single selected value in the database.

If the field is cloneable, then the value is stored as a serialized array in a single row in the database.

:::caution

Note that this field stores the **values**, not labels.

:::

## Template usage

**Displaying selected choice (value):**

```php
<?php $values = rwmb_meta( 'my_field_id' ); ?>
<p>Selected: <?= $value ?></p>
```

**Displaying selected label:**

```php
<p>My choice: <?php rwmb_the_value( 'my_field_id' ) ?></p>
```

**Displaying both values and labels:**

```php
<?php
$field   = rwmb_get_field_settings( 'my_field_id' );
$options = $field['options'];
$values  = rwmb_meta( 'my_field_id' );
?>

Value: <?= $value ?><br>
Label: <?= $options[ $value ] ?>
```