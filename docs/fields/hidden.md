---
title: Hidden
---

The hidden field creates a simple hidden input. It's usually used to store custom data that cannot be changed.

## Settings

This field doesn't have any specific settings. It only uses [common settings](/field-settings/).

To store the hidden value, put it in the `std` setting.

This is a sample field settings array when creating this field with code:

```php
[
    'id'   => 'field_id',
    'type' => 'hidden',
    // Hidden field must have predefined value
    'std'  => 'Hidden value',
],
```

## Data

Although the value is fixed in the code, this field still saves it in the database.

## Template usage

To get the field value, use this code

```php
<?php $value = rwmb_meta( 'my_field_id' ) ?>
<p>The hidden value: <?= $value ?>
```