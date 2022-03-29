---
title: Select
---

import Screenshots from '@site/src/components/Screenshots';

The select field creates a simple select dropdown. You are able to select one or multiple values from the predefined list.

## Screenshots

<Screenshots name="select" col1={[
    ['/screenshots/select-1.png', 'The select field interface']
]} />

## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings:

Name | Key | Description
--- | --- | ---
Choices | `options` | List of choices, each per line. If you need to set values and labels, use the format "value: Label" for each choice.<br />When using with code, this setting is an array of `'value' => 'Label'`.
Multiple | `multiple` | Whether to allow select multiple values? `true` or `false` (default).
Placeholder | `placeholder` | The placeholder text.
Display "Toggle All" button | `select_all_none` | Display "Toggle All" button to quickly toggle choices. Applied only when "Multiple" is set.
Flatten | `flatten` | Display sub items without indentation. `true` or `false` (default). See below to know how to define sub items.

This is a sample field settings array when creating this field with code:

```php
[
    'name'            => 'Select',
    'id'              => 'select',
    'type'            => 'select',
    'multiple'        => true,
    'placeholder'     => 'Select an item',
    'select_all_none' => true,
    'options'         => [
        'java'       => 'Java',
        'javascript' => 'JavaScript',
        'php'        => 'PHP',
        'kotlin'     => 'Kotlin',
        'swift'      => 'Swift',
    ],
],
```

Besides the normal list of choices, you can define sub choices as follows:

```php
[
    'name'        => 'Select',
    'id'          => 'select',
    'type'        => 'select',
    'placeholder' => 'Select an Item',
    // highlight-next-line
    'flatten'     => false,
    'options' => [
        [
            'value' => 'monkeys',
            'label' => 'Monkeys',
        ],
        [
            'value' => 'king_kong',
            'label' => 'King Kong',
            // highlight-next-line
            'parent' => 'monkeys',
        ],
        [
            'value' => 'curious_george',
            'label' => 'Curious George',
            // highlight-next-line
            'parent' => 'monkeys',
        ],
        [
            'value' => 'donkeys',
            'label' => 'Donkeys',
        ],
        [
            'value' => 'eeyore',
            'label' => 'Eeyore',
            // highlight-next-line
            'parent' => 'donkeys',
        ],
        [
            'value' => 'guss',
            'label' => 'Gus',
            // highlight-next-line
            'parent' => 'donkeys',
        ],
    ],
],
```

Here is how it looks:

![select with sub choices](/screenshots/select-2.png)

## Data

If "Multiple" is not set, this field simply saves the selected value in the database.

If "Multiple" is set, this field saves multiple values in the database. Each value is stored in a single row in the database with the same key (similar to what `add_post_meta` does with the last parameter `false`).

If the field is cloneable, the value is stored as a serialized array in a single row in the database.

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

**Displaying list of multiple choices (values):**

```php
<?php $values = rwmb_meta( 'my_field_id' ); ?>
<ul>
    <?php foreach ( $values as $value ) : ?>
        <li><?= $value ?></li>
    <?php endforeach ?>
</ul>
```

**Displaying list of multiple choices (values and labels):**

```php
<?php
$field   = rwmb_get_field_settings( 'my_field_id' );
$options = $field['options'];
$values  = rwmb_meta( 'my_field_id' );
?>
<ul>
    <?php foreach ( $values as $value ) : ?>
        <li>
            Value: <?= $value ?><br>
            Label: <?= $options[ $value ] ?>
        </li>
    <?php endforeach ?>
</ul>
```

**Displaying cloneable values:**

```php
<?php $values = rwmb_meta( 'my_field_id' ); ?>
<ul>
    <?php foreach ( $values as $value ) : ?>
        <li><?= $value ?></li>
    <?php endforeach ?>
</ul>
```