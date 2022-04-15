---
title: Key Value
---

import Screenshots from '@site/src/components/Screenshots';

The key-value field allows you to enter an unlimited group of "key-value" pairs. It's usually used for a list of items, such as a product specification.

## Screenshots

<Screenshots name="key-value" col1={[
    ['https://i.imgur.com/yA7rRDR.png', 'The key value field interface']
]} />

## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings, the keys are for use with code:

Name | Key | Description
--- | --- | ---
Placeholder | `placeholder` | Array of placeholder texts for key and value inputs. Format `['key' => 'Key placeholder', 'value' => 'Value placeholder']`. Optional.

This is a sample field settings array when creating this field with code:

```php
[
    'id'   => 'key_value',
    'name' => 'Key Value',
    'type' => 'key_value',
    'desc' => 'Add more additional info below:',
],
```

## Data

This field saves a serialized array of data of pairs in a single row in the database.

## Template usage

**Displaying list of key-value pairs:**

```php
<?php $pairs = rwmb_meta( 'my_field_id' ) ?>
<h3>Specification</h3>
<ul>
    <?php foreach ( $pairs as $pair ) : ?>
        <li><label><?= $pair[0] ?>:</label> <?= $pair[1] ?></li>
    <?php endforeach ?>
</ul>
```

or simpler:

```php
<h3>Specification</h3>
<?php rwmb_the_value( 'my_field_id' ) ?>
```