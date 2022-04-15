---
title: Number
---

import Screenshots from '@site/src/components/Screenshots';

The number field creates a simple HTML5 number input. You can enter a number or use the up/down arrow to change the number. It works with both integers and float numbers.

## Screenshots

<Screenshots name="number" col1={[
    ['https://i.imgur.com/ioHgKyI.png', 'The number field interface']
]} />

## Settings

This field inherits all settings from the [text field](/fields/text/). Besides, it has the following specific settings, the keys are for use with code:

Name | Key | Description
--- | --- | ---
Step | `step` | The increments for the value. Accepts an integer, a float number, or the string `any` (if you want to enter any value). Default is `1`. Optional.
Min value | `min` | Minimum value. Optional.
Max value | `max` | Maximum value. Optional.

This is a sample field settings array when creating this field with code:

```php
[
    'name' => 'Number',
    'id'   => 'number',
    'type' => 'number',
    'min'  => 0,
    'step' => 0.5,
],
```

## Data

This field simply saves the entered value into the database.

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
