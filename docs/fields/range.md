---
title: Range
---

import Screenshots from '@site/src/components/Screenshots';

The range field creates an HTML5 range field where you can select a number by dragging a control.

This field is very similar to the [number](/fields/number/) field. It just uses a different control to select a number instead of entering it.

## Screenshots

<Screenshots name="range" col1={[
    ['https://i.imgur.com/eAHeRJS.png', 'The range field interface']
]} />

## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings, the keys are for use with code:

Name | Key | Description
--- | --- | ---
Step | `step` | The increments for the value. Accepts an integer, a float number, or the string `any` (if you want to enter any value). Default is `1`. Optional.
Min value | `min` | Minimum value. Optional.
Max value | `max` | Maximum value. Optional.

This is a sample field settings array when creating this field with code:

```php
[
    'name' => 'Range',
    'id'   => 'range',
    'type' => 'range',
    'min'  => 0,
    'max'  => 60,
    'step' => 5,
],
```

## Data

This field saves the entered value into the database.

If the field is cloneable, then the value is stored as a serialized array in a single row in the database.

## Template usage

**Displaying the value:**

```php
<p>Entered: <?php rwmb_the_value( 'my_field_id' ) ?></p>
```

**Getting the value:**

```php
<?php $value = rwmb_meta( 'my_field_id' ) ?>
<p>Entered: <?= $value ?></p>
```

**Formatting the value:**

```php
<?php $value = rwmb_meta( 'my_field_id' ) ?>
<p>Entered: <?= number_format( $value ) ?></p>
```

**Displaying cloneable values:**

```php
<?php $values = rwmb_meta( 'my_field_id' ) ?>
<?php foreach ( $values as $value ) : ?>
    <p><?= $value ?></p>
<?php endforeach ?>
```
