---
title: Link
---
import Screenshots from '@site/src/components/Screenshots';

The link field creates a group of inputs for inserting or editing a link, including a URL, optional link text, an option to open the link in a new tab, or selecting existing content.

## Screenshots

<Screenshots name="link" col1={[
    ['/screenshots/link.png', 'The link field interface']
]} />

## Settings

This field has no additional settings besides the [common settings](https://docs.metabox.io/field-settings/).

This is a sample field settings array when creating this field with code:

```
[
    'name' => 'Social Links',
    'id'   => 'social_links',
    'type' => 'link', // Required.
],
```

## Data

This field saves the value as an associative array into the database with the following keys:

* `url`: The URL of the link.
* `title`: The link text.
* `target`: The link target (e.g. `_blank`).

Example:

```
[
    'url'    => 'https://metabox.io',
    'title'  => 'Meta Box',
    'target' => '_blank',
]
```

If the field is cloneable, then the value is stored as a serialized array in a single row in the database.

## Template usage

**Displaying the value:**

```php
<p>Entered: <?php rwmb_the_value( 'my_field_id' ) ?></p>
```

**Displaying cloneable values:**

```php
<?php $values = rwmb_meta( 'my_field_id' ) ?>
<?php foreach ( $values as $value ) : ?>
    <a href="<?= $value['url'] ?>" target="<?= $value['target'] ?>"><?= $value['title'] ?></a>
<?php endforeach ?>
```
