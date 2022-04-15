---
title: Fieldset Text
---

import Screenshots from '@site/src/components/Screenshots';

The fieldset text creates a set of text inputs. It's useful if you want to save related information.

## Screenshots

<Screenshots name="fieldset-text" col1={[
    ['https://i.imgur.com/qh3pfUd.png', 'The fieldset text field interface']
]} />

## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings, the keys are for use with code:

Name | Key | Description
--- | --- | ---
Inputs | `options` | Array of `'key' => 'Input Label'` pairs. `key` is used as keys of the array of values stored in the database.

This is a sample field settings array when creating this field with code:

```php
[
    'id'      => 'field_id',
    'name'    => 'Fieldset Text',
    'type'    => 'fieldset_text',
    'options' => [
        'name'    => 'Name',
        'address' => 'Address',
        'email'   => 'Email',
    ],
],
```

## Data

This field always stores the value as a serialized array in a single row in the database. Each element of that array will have the key as specified in the field's `options`.

## Template usage

**Displaying field inputs' values:**

```php
<?php $value = rwmb_meta( 'my_field_id' ) ?>
<p>Name: <?= $value['name'] ?></p>
<p>Address: <?= $value['address'] ?></p>
<p>Email: <?= $value['email'] ?></p>
```
