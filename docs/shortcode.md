---
title: Shortcode
---

Besides [normal ways](/displaying-fields/) to display fields on the website, Meta Box also provides a simple shortcode `[rwmb_meta]` to help you show custom fields in the post content or widgets easily.

```php
[rwmb_meta id="field_id" object_id="15"]
```

## Attributes

Attribute|Description
---|---
`id`|The field ID. Required.
`object_id`|The object ID. Optional. If not defined, then the current object ID is used.
`attribute`|Get a single attribute from the field value (such as URL of the image or term slug). The field value is get with the [rwmb_get_value()](/rwmb-get-value/) helper function. This works only when the value is an array.
`render_shortcode`|Whether to render inner shortcodes inside the value of the field. For example, if you enter a shortcode in a textarea/editor field, this attribute will render that shortcode and return the rendered content. Default true.

This shortcode works exactly like the [rwmb_the_value()](/rwmb-the-value/) function with the same parameters.

:::tip

You can pass **other attributes** to the shortcode if you want. If you do so, those attributes will be passed to the [rwmb_the_value()](/rwmb-the-value/) function as the 2nd parameter.

:::

## Examples

Getting the value of a text field:

```php
[rwmb_meta id="phone"]
```

Getting image URL (single_image):

```php
[rwmb_meta id="company_logo" attribute="url" size="thumbnail"]
```

Getting a term meta:

```php
[rwmb_meta id="color" object_id="15" object_type="term"]
```

Getting a settings:

```php
[rwmb_meta id="phone" object_id="site_option" object_type="setting"]
```

Getting a field value from a custom table:

```php
[rwmb_meta id="area" object_id="15" storage_type="custom_table" table="properties"]
```
