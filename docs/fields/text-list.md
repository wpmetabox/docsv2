---
title: Text List
---

import Screenshots from '@site/src/components/Screenshots';

The text list field creates a list of text inputs.

## Screenshots

<Screenshots name="text-list" col1={[
    ['https://imgur.elightup.com/Y7qo1No.png', 'The text list field interface']
]} />

## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings, the keys are for use with code:

Name | Key | Description
--- | --- | ---
Inputs | `options`|Array of `'placeholder' => 'label'` for the inputs.

This is a sample field settings array when creating this field with code:

```php
[
    'id'      => 'text_list',
    'name'    => 'Text List',
    'type'    => 'text_list',
    'clone' => true,
    'options' => [
        'John Smith'      => 'Name',
        'name@domain.com' => 'Email',
    ],
],
```

## Data

If the field is not cloneable, the data is stored in multiple rows in the database. Each row has the same meta key as the field ID, and the value is the value in the corresponding text input.

If the field is cloneable, then the value is stored as a serialized array of values in a single row in the database.

## Template usage

**Displaying field inputs' values:**

```php
<?php $values = rwmb_meta( 'my_field_id' ) ?>
<p>Name: <?= $value[0] ?></p>
<p>Email: <?= $value[1] ?></p>
```

**Displaying cloneable values:**

```php
<?php $values = rwmb_meta( 'my_field_id' ) ?>
<ul>
    <?php foreach ( $values as $value ) : ?>
        <li>
            <span>Name: <?= $value[0] ?></span>
            <span>Email: <?= $value[1] ?></span>
        </li>
    <?php endforeach ?>
</ul>
```

**Displaying field values in a table:**

```php
<h3>Values</h3>
<?php rwmb_the_value( 'my_field_id' ) ?>
```

which outputs:

![text list output](https://imgur.elightup.com/jpypypW.png)

HTML:

```html
<table>
    <tr>
        <th>Name</th>
        <th>Email</th>
    <tr>
    <tr>
        <td>Name 1</td>
        <td>email1@domain.com</td>
    </tr>
    <tr>
        <td>Name2</td>
        <td>email2@domain.com</td>
    </tr>
</table>
```