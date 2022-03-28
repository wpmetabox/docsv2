---
title: Checkbox
---

import Screenshots from '@site/src/components/Screenshots';

The checkbox field creates a single checkbox.

<Screenshots name="checkbox" images='https://i.imgur.com/gMkTEfB.png' />

## Settings

This field doesn't have any specific settings. It only uses [common settings](/field-settings/).

This is a sample field settings array for registering this field with code:

```php
[
    'name' => 'Checkbox',
    'id'   => 'field_id',
    'type' => 'checkbox',
    'std'  => 1, // 0 or 1
],
```

## Data

This field saves the "checked" and "unchecked" values in the database as "1" or "0".

## Template usage

**Conditional check:**

```php
$value = rwmb_meta( 'my_field_id' );
if ( $value ) {
    echo 'Checked';
} else {
    echo 'Unchecked';
}
```

**Displaying "Yes/No":**

```php
rwmb_the_value( 'my_field_id' );
```