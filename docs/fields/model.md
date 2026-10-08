---
title: Custom Model
---

import Screenshots from '@site/src/components/Screenshots';

The custom model field allows you to select one or multiple model items. This field has several settings that can be displayed as a: simple select dropdown, checkbox list, or beautiful select dropdown with the Select2 library.

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

Besides the [common settings](/field-settings/), this field has the following specific settings, the keys are for use with code:

Name | Key | Description
--- | --- | ---
Model | `model` | Model to query. Required.
Query args | `query_args` | Extra query arguments for listing model rows (limit, orderby, order, …). Optional.
Placeholder | `placeholder` | The placeholder for the select box. Default is "Select a `{model label}`". Applied only when the field type is a select field.
Item title | `item_title` | Specify a column or template to define the title displayed for each item. Use column IDs in curly braces to include their values, for example, `{email}` — `{amount}`.
Field type | `field_type` | How the posts are displayed? See below.

This field inherits the look and field (and settings) from other fields, depending on the field type, which accepts the following value:

Field type | Description | Settings inherited from
--- | --- | ---
`select` | Simple select dropdown. | [Select](/fields/select/)
`select_advanced` | Beautiful select dropdown using the select2 library. This is the default value. | [Select advanced](/fields/select-advanced/)
`select_tree` | Hierarchical list of select boxes that allows to select multiple items (select/deselect parent item will show/hide child items). Applied only when the post type is hierarchical (like pages). | [Select](/fields/select/)
`checkbox_list` | Flatten list of checkboxes that allows to select multiple items. | [Checkbox list](/fields/checkbox-list/)
`checkbox_tree` | Hierarchical list of checkboxes that allows to select multiple items (select/deselect parent item will show/hide child items). Applied only when the post type is hierarchical (like pages). | [Checkbox list](/fields/checkbox-list/)
`radio_list` | Flatten list of radio boxes that allows to select only 1 item. | [Radio](/fields/radio/)

This is a sample field settings array when creating this field with code:

```php
[
    'name'        => 'Select a booking',
    'id'          => 'model',
    'type'        => 'model',
    'model'   => 'booking',
    'field_type'  => 'select_advanced',
    'placeholder' => 'Select a booking',
    ],
],
```

## Ajax load

Meta Box uses Ajax to increase the performance of the field query. Instead of fetching all items at once, the plugin now fetches only some items when the page is loaded, and then it fetches more items when users scroll down to the list.


:::info

This feature is available only for fields that set the field type to **select advanced**. There are some extra parameters for you to disable or customize.

:::

### Enable/Disable ajax requests

This feature is enabled by default when you set the field type to "select advanced".

If you're using code to create this field, the settings to enable/disable it is `ajax`, which accepts a boolean value (and it's `true` by default):

```php
[
    'id'        => 'booking',
    'title'     => 'Booking',
    'type'      => 'model',
    'model' => 'booking',
    // highlight-next-line
    'ajax'      => true,
],
```

Setting this parameter to `false` will disable ajax requests.

