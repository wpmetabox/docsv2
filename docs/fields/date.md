---
title: Date
---

import Screenshots from '@site/src/components/Screenshots';

The date field allows you to select a date via a friendly UI. This field uses the jQuery UI datepicker library to select a date.

## Screenshots

<Screenshots name="date" col1={[
    ['https://i.imgur.com/MxcgZJy.png', 'The date field interface']
]} />

## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings, the keys are for use with code:

Name | Key | Description
--- | --- | ---
Size of the input box | `size` | Size of the input box. Optional. Default 10. Without this setting, the input box is full-width.
Inline | `inline` | Whether to display the date picker inline with the input and don't require to click to show the date picker? `true` or `false` (default).
Save value as timestamp | `timestamp` | Whether to save the date in the Unix timestamp format (but still display in human-readable format)? `true` or `false` (default).
Date picker options | `js_options`|Date picker options. [See here](http://api.jqueryui.com/datepicker).
Save format | `save_format`|Custom PHP format for the datetime saved in the custom fields. [See here](https://www.php.net/manual/en/function.date.php).

:::caution Timezone and timestampt

This field gets the current time of your local computer and converts it to the timestamp value. So the Unix timestamp saved is the "timezone (UTC) + offset".

:::

This is a sample field settings array when creating this field with code:

```php
[
    'name'       => 'Date picker',
    'id'         => 'field_id',
    'type'       => 'date',
    'js_options' => [
        'dateFormat'      => 'yy-mm-dd',
        'showButtonPanel' => false,
    ],
    'inline'    => false,
    'timestamp' => false,
],
```

## Data

If the `timestamp` is set to `true`, the field value is converted to Unix timestamp and saved to the database. Otherwise, the user input value is saved.

## Date format

It's important to understand that the date format showing in the date picker, which is set via `js_options['dateFormat']` is the jQueryUI format. It's **not** the same as PHP date format! By default, Meta Box sets the format to `yy-mm-dd`. You might want to change it to `dd-mm-yy` (for European countries) or `mm/dd/yy` (for US).

However, this is the format that users see in the date picker. You might want to save the value in another format, like `2022-10-20`, which allows you to [sort or query posts](https://metabox.io/get-posts-by-custom-fields-in-wordpress/) by date. To do that, set the value of "Save format" to `Y-m-d`. Unlike the above, the saved format **is the PHP date format**, which is similar to PHP's `date()` function.

Why is the difference? Because the plugin depends on jQueryUI to render the date picker, so we must use its format. On the back end, we can use what PHP provides us.

If you use code, then the field settings will look like this:

```php
[
    'js_options' => [
        'dateFormat' => 'dd-mm-yy',
    ],
    'save_format' => 'Y-m-d',
],
```

So when displaying to users, the date will have the format of `30-01-2019`, and when saving to the database, it will have the format of `2019-01-30`.

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

**Converting timestamp to another format:**

If you save the field value as a timestamp, then you can convert the value to different format, like this:

```php
<?php $value = rwmb_meta( 'my_field_id' ) ?>
<p>Event date: <?= date( 'F j, Y', $value ) ?></p>
```

Or simpler:

```php
<p>Event date: <?php rwmb_the_value( 'my_field_id', ['format' => 'F j, Y'] ) ?></p>
```

:::info

The 2nd parameter of [rwmb_the_value()](/functions/rwmb-the-value/) accepts and extra parameter "**format**" which specify the datetime format to output in the frontend.

:::

**Querying posts by date:**

Saving values in timestamp allows you to query posts with a specific order by this field:

```php
$query = new WP_Query( [
    'post_type' => 'event',
    'orderby'   => 'meta_value_num',
    'meta_key'  => 'my_field_id',
    'order'     => 'ASC',
] );
```

However, you still can sort posts by meta value if you set date format to something similar to `yy-mm-dd`. Anyway, querying posts by custom fields is [not recommended](https://metabox.io/custom-fields-vs-custom-taxonomies/).
