---
title: Checkbox list
---

import Screenshots from '@site/src/components/Screenshots';
import Choice from '../_parts/_choice.md';

The checkbox list field creates a list of tick-able checkboxes with options. You can select multiple choices from the predefined list.

## Screenshots

<Screenshots name="checkbox-list" col1={[
    ['/screenshots/checkbox-list-1.png', 'Checkbox list vertical with "Toggle All" button'],
    ['/screenshots/checkbox-list-2.png', 'Checkbox list inline'],
]} />

## Settings

Besides the [common settings](/field-settings/) such as Label, ID, Default value, Cloneable, etc., this field has the following specific settings:

![specific settings of the field](https://i.imgur.com/NPeZp8B.png)

Name | Key | Description
--- | --- | ---
Choices | `options` | List of choices, each per line. If you need to set values and labels, use the format "value: Label" for each choice.<br />When using code, this setting is an array of `'value' => 'Label'`.
Inline | `inline` | Display choices in a single line? `true` or `false`.
Display "Toggle All" button | `select_all_none` | Display "Toggle All" button to quickly toggle choices.

:::note

* The keys are for using with code.
* The interface of field settings just comes when you have the [Meta Box Builder extension](https://metabox.io/plugins/meta-box-builder/) in your pocket. It’s a premium extension providing the UI to create and configure fields visually. It’s already bundled in the **Meta Box AIO** and MB Core.

:::

When creating the field with **Meta Box Builder**, just input options into the **Choices** box.

![Input the label of the options in the Choices box](https://i.imgur.com/cAtrHeY.png)

In some special cases, you may want the data stored (value) to be different from the data displayed (label), you can input data with the form `value`:`label`.

![the field with settings and options](https://i.imgur.com/xfykp6k.png)

This is the field settings array when creating this field with code:

```php
[
    'name'            => 'Checkbox list',
    'id'              => 'field_id',
    'type'            => 'checkbox_list',
    'inline'          => true,
    'select_all_none' => true,
    'options' => [
        'java'       => 'Java',
        'javascript' => 'JavaScript',
        'php'        => 'PHP',
        'csharp'     => 'C#',
        'kotlin'     => 'Kotlin',
        'swift'      => 'Swift',
    ],
],
```

In the post/page editor, the checkbox list will display with options.

![The field displays in the post/page editor](https://i.imgur.com/u9Wk4xH.png)

## Data

This field saves multiple values in the database. Each value is stored in a single row in the database with the same key (similar to what `add_post_meta` does with the last parameter `false`).

If the field is cloneable, then the value is stored as a serialized array in a single row in the database. Each value of that array is an array of cloned values.

:::caution

Note that this field stores the **values**, not labels.

:::

## Template usage

### Using MB Views

[MB Views](https://docs.metabox.io/extensions/mb-views/) is an extension for Meta Box, which helps you to get Meta Box fields and build your templates on the front end fast and easily. The extension supports all custom fields built with Meta Box, and also post fields (such as post title and post content), site settings, user fields, and even query fields. MB Views is already bundled in the **Meta Box AIO**. So it's available in the Ultimate and Lifetime plans.

**Displaying selected values or labels:**

In the view, click on the **Insert Field** button.

![Go to Views and click on the Insert Field button](https://i.imgur.com/J74Rkam.png)

Find the name of the created field on the list on the right sidebar.

![Find the name of the created field on the list on the right sidebar](https://i.imgur.com/rEK9Eqm.png)

There will be two options to output the data, they are the value and label of the choices that we input in the field.

Just choose one to output only the values, or only the labels. In the event that you want to display both of them, just insert the field twice.

![choose one option to output only the values, or only the labels](https://i.imgur.com/cI8asuN.png)

Then the code will be like this:

![The code to display selected values](https://i.imgur.com/Oaan9xt.png)

Display only the labels:

![Display only the labels](https://i.imgur.com/QnDwhsM.gif)

Display both values and labels:

![Display both values and labels](https://i.imgur.com/2dPnl1G.gif)

**Displaying cloneable values:**

No matter if the field is cloneable or not, the operation to display data from the field will be the same. The difference is just in the generated code.

![Displaying cloneable values](https://i.imgur.com/mmnSFFj.gif)

### Using PHP

**Displaying selected values:**

```php
<?php $values = rwmb_meta( 'my_field_id' ); ?>
<ul>
    <?php foreach ( $values as $value ) : ?>
        <li><?= $value ?></li>
    <?php endforeach ?>
</ul>
```

**Displaying selected labels:**

```php
<p>Choices:</p>
<?php rwmb_the_value( 'my_field_id' ) ?>
```

:::info

`rwmb_the_value()` automatically formats values as an unordered list.

:::

**Displaying both values and labels:**

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
<?php
$field   = rwmb_get_field_settings( 'my_field_id' );
$options = $field['options'];
$values  = rwmb_meta( 'my_field_id' );
?>
<ul>
    <?php foreach ( $values as $clone ) : ?>
        <li>
            <ul>
                <?php foreach ( $clone as $value ) : ?>
                    <li>
                        Value: <?= $value ?><br>
                        Label: <?= $options[ $value ] ?>
                    </li>
                <?php endforeach ?>
            </ul>
        </li>
    <?php endforeach ?>
</ul>
```