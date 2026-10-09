---
title: Custom Model
---

import Screenshots from '@site/src/components/Screenshots';

The custom model field lets you select one or more items from a custom model. What you do with the selected items is up to you.

This field is available only when the [MB Custom Table](/extensions/mb-custom-table/) extension is active. For how to create and manage custom models, see [Custom models](/extensions/mb-custom-table/#custom-models).

You can show the field as a select dropdown, a select advanced dropdown (Select2), a checkbox list, or a radio list.

## Screenshots

<Screenshots
    name="model"
    col1={[
        ['/screenshots/model/default.webp', 'The model field default interface'],
        ['/screenshots/model/checkbox-list.webp', 'The model field with checkbox list interface'],
        ['/screenshots/model/radio.webp', 'The model field with radio list interface'],
    ]}
/>

## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings. The keys are for use with code:

Name | Key | Description
--- | --- | ---
Model | `model` | Model slug to query. Required.
Item title | `item_title` | Column or template for the label of each item. Use a column name (`title`) or placeholders with column IDs in curly braces, for example `{email} - {amount}`. Required.
Query args | `query_args` | Extra query arguments for listing model rows. Optional. See below.
Placeholder | `placeholder` | Placeholder for the select box. Default is "Select a `{model label}`". Applied only when the field type is a select field.
Add new | `add_new` | Allow users to create a new model item from the field (`true` or `false`).
Field type | `field_type` | How the items appear in the UI. See below.

### Query args

`query_args` accepts the following keys:

Name | Description
--- | ---
`limit` | Maximum number of rows to return. Default is `10` when Ajax is on, and `100` when Ajax is off. Use `-1` for no limit (Ajax caps positive values at `100`).
`page` | Page number for pagination. Default is `1`. Ajax sets this when the user scrolls for more items.
`orderby` | Column to sort by. Must be a real table column. Default is `ID`.
`order` | Sort direction: `ASC` or `DESC`. Default is `DESC`.
`exclude` | Array of model IDs to exclude from the list.
`s` | Search term. Ajax sets this when the user types in the search box. You rarely set this in field settings.

This field inherits the look and settings from other fields, depending on the field type:

Field type | Description | Settings inherited from
--- | --- | ---
`select` | Simple select dropdown. | [Select](/fields/select/)
`select_advanced` | Select dropdown with the Select2 library. This is the default value. | [Select advanced](/fields/select-advanced/)
`checkbox_list` | Flat list of checkboxes. Allows multiple items. | [Checkbox list](/fields/checkbox-list/)
`radio_list` | Flat list of radio buttons. Allows one item. | [Radio](/fields/radio/)

This is a sample field settings array when you create this field with code:

```php
[
    'name'        => 'Select a booking',
    'id'          => 'booking_id',
    'type'        => 'model',
    'model'       => 'booking',
    'item_title'  => '{title} - {amount}',
    'field_type'  => 'select_advanced',
    'placeholder' => 'Select a booking',
],
```

## Ajax load

Meta Box uses Ajax to load model items in pages. The plugin loads a limited set of items first. It loads more items when the user scrolls down the list.

:::info

This feature is available only when the field type is **select advanced**. You can disable or customize it with the parameters below.

:::

### Enable or disable Ajax requests

Ajax load is enabled by default when the field type is "select advanced".

If you create this field with code, use the `ajax` setting. It accepts a boolean value and defaults to `true`:

```php
[
    'name'       => 'Booking',
    'id'         => 'booking_id',
    'type'       => 'model',
    'model'      => 'booking',
    'item_title' => '{title} - {amount}',
    // highlight-next-line
    'ajax'       => true,
],
```

Set this parameter to `false` to disable Ajax requests.

### Limit the number of items for pagination

Set the number of items per request with the `limit` parameter in `query_args`:

```php
[
    'name'       => 'Booking',
    'id'         => 'booking_id',
    'type'       => 'model',
    'model'      => 'booking',
    'item_title' => '{title} - {amount}',
    'ajax'       => true,
    'query_args' => [
        // highlight-next-line
        'limit' => 10,
    ],
],
```

When Meta Box fetches more items, it appends them to the dropdown list.

:::info Initial load

The `limit` value does not control the initial load of the field. On the first load, Meta Box queries only the saved items. That query stays small.

:::

### Searching parameters

You can delay Ajax requests until the user types in the search box. Set `minimumInputLength` in `js_options`:

```php
[
    'name'       => 'Booking',
    'id'         => 'booking_id',
    'type'       => 'model',
    'model'      => 'booking',
    'item_title' => '{title} - {amount}',
    'ajax'       => true,
    'query_args' => [
        'limit' => 10,
    ],
    'js_options' => [
        // highlight-next-line
        'minimumInputLength' => 1,
    ],
],
```

This parameter sets the minimum number of characters required to start a search.

Meta Box searches in the columns from `item_title`. For example, with `item_title` set to `{title} - {amount}`, the search runs against the `title` and `amount` columns. If the search term is numeric, Meta Box also matches the row `ID`.

## Data

This field saves model item ID(s) in the database.

If "Multiple" is off, Meta Box saves a single model ID in one meta row.

If "Multiple" is on and the field is not cloneable, Meta Box saves multiple model IDs. Each ID is stored in a separate row with the same meta key (similar to `add_post_meta` with the last parameter `false`).

If the field is cloneable, Meta Box stores the value as a serialized array in a single row.

## Template usage

**Getting the selected model ID:**

```php
<?php $booking_id = rwmb_meta( 'booking_id' ); ?>
<p>Selected booking ID: <?= $booking_id ?></p>
```

**Getting the selected model row:**

```php
<?php
$booking_id = rwmb_meta( 'booking_id' );
$booking    = \MetaBox\CustomTable\API::get( $booking_id, 'bookings' );
?>
<pre><?php print_r( $booking ); ?></pre>
```

Replace `bookings` with your model table name.

**Showing a value from the selected model:**

```php
<?php
$booking_id = rwmb_meta( 'booking_id' );
$title      = \MetaBox\CustomTable\API::get_value( 'title', $booking_id, 'bookings' );
?>
<p>Booking: <?= esc_html( $title ) ?></p>
```

**Showing multiple selected models:**

If "Multiple" is on or the field is cloneable, loop through the returned IDs:

```php
<?php $booking_ids = rwmb_meta( 'booking_id' ); ?>
<ul>
    <?php foreach ( (array) $booking_ids as $booking_id ) : ?>
        <?php $title = \MetaBox\CustomTable\API::get_value( 'title', $booking_id, 'bookings' ); ?>
        <li><?= esc_html( $title ) ?></li>
    <?php endforeach ?>
</ul>
```
