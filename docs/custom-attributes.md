---
title: Custom attributes
---

With Meta Box, you can add custom attributes for inputs like text, URL, email field. This feature is very helpful if developers want to add HTML5 attributes or something like `data-*` attribute for their custom JavaScript code.

## How to add custom attributes to fields

To add custom attributes to the fields, click the **Advanced** tab in the field settings, and click the **Add New** button under **Custom HTML5 Attributes**:

![custom input attributes](https://i.imgur.com/IFiPfAr.png)

Then add your attribute name and value.

:::info Not a premium user?

This instruction uses **MB Builder** extension, which is a premium extension and is already bundled in Meta Box AIO and MB Core. If you're not a premium user, please [purchase a license](https://metabox.io/pricing/) to use it. However, you can do this with code. See below for more information.

:::

Currently, this feature is supported in text, URL, email, checkbox, radio, date, time, datetime fields.


:::info Complex values

By default, custom attributes accept strings as keys and values. If you want to enter complex values, like array, please use the [dot notation](/extensions/meta-box-builder/#dot-notation) or [JSON notation](/extensions/meta-box-builder/#json-notation).

:::

## Adding custom attributes with code

Custom attributes are registered as an array `attributes` in the field settings, in format `'key' => 'value'` like this:

```php
'fields' => [
    [
        'name'       => 'Username',
        'id'         => 'text',
        'type'       => 'text',
        // highlight-start
        'attributes' => [
            'required'  => true,
            'minlength' => 10,
        ],
        // highlight-end
    ],
],
```

If you want to add a custom `data-*` attribute, you can add it like this:

```php
'attributes' => [
    // highlight-start
    // Simple value
    'data-option1'  => 'value1',
    // Array of values
    'data-option2'  => json_encode( ['key1' => 'value1', 'key2' => 'value2'] ),
    // highlight-end
],
```

### Common attributes

There are several attributes that you can set under the `attributes` array, or directly in the field settings (e.g. outside the `attributes` array).

So, you can write like this:

```php
'fields' => [
    [
        'name'       => 'Username',
        'id'         => 'text',
        'type'       => 'text',
        // highlight-start
        'attributes' => [
            'required'  => true,
            'minlength' => 10,
        ],
        // highlight-end
    ],
],
```

Or like this:

```php
'fields' => [
    [
        'name'       => 'Username',
        'id'         => 'text',
        'type'       => 'text',
        // highlight-start
        'required'  => true,
        'minlength' => 10,
        // highlight-end
    ],
],
```

Here is the list of common attributes:

- disabled
- required
- autofocus
- readonly
- maxlength
- minlength
- pattern