---
title: Textarea
---

import Screenshots from '@site/src/components/Screenshots';

The textarea field creates a simple textarea (multiline) input. You can use this field for entering a paragraph of text.

## Screenshots

<Screenshots name="select" col1={[
    ['https://imgur.elightup.com/Wrg9ISA.png', 'The textarea field interface']
]} />

## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings, the keys are for use with code:

Name | Key | Description
--- | --- | ---
Placeholder | `placeholder` | The placeholder text. Optional.
Columns | `cols` | Number of columns. Optional. Default 60.
Rows | `rows` | Number of rows. Optional. Default 4.

## Data

This field saves the entered value into the database.

If the field is cloneable, then the value is stored as a serialized array in a single row in the database.

:::caution

Meta Box **removes all scripts and iframes** from the value. If you want to enter scripts (like Google Analytics) or embed videos, then you need to [disable sanitization](/sanitization/#bypass-the-sanitization).

:::

## Template usage

**Displaying the value:**

```php
<section>
    <h2>About Us</h2>
    <p><?php rwmb_the_value( 'field_id' ) ?></p>
</section>
```

**Getting the value:**

```php
<section>
    <h3>About Us</h3>
    <?php $value = rwmb_meta( 'field_id' ) ?>
    <p><?= $value ?></p>
</section>
```

**Auto adding paragraphs to the text:**

```php
<?php $value = rwmb_meta( 'field_id' ) ?>
<?= wpautop( $value ) ?>
```

**Parse shortcodes:**

```php
<?php $value = rwmb_meta( 'field_id' ) ?>
<?= do_shortcode( $value ) ?>
```

**Parse blocks:**

```php
<?php $value = rwmb_meta( 'field_id' ) ?>
<?= do_blocks( $value ) ?>
```

**Displaying cloneable values:**

```php
<?php $values = rwmb_meta( 'field_id' ) ?>
<?php foreach ( $values as $value ) : ?>
    <p><?= $value ?></p>
<?php endforeach ?>
```
