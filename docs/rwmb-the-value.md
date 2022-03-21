---
title: rwmb_the_value
---

import FAQ from '@site/src/components/FAQ';

`rwmb_the_value` is a helper function that outputs the HTML of a field.

It's very helpful in case you want to output a real Google maps or a player for oEmbed field.

Unlike [rwmb_get_value()](/rwmb-get-value/), this function always outputs human-readable content. For example, for a checkbox list or a select field, it outputs the labels of the choices, not the values.

## Arguments

This function accepts 4 arguments as follows:

```php
rwmb_the_value( $field_id, $args, $object_id, $echo );
```

Name|Description
---|---
`$field_id`|The field ID. Required.
`$args`|Extra arguments for some field types (like `size` for `image_advanced`) or for another object type (like getting values for terms or users). Can be an array or a string in format `param1=value1&param2=value2`.
`$object_id`|Object (post, term, user) ID. If you need to get value from an option (using MB Settings Page), object ID is the option name. If not present, the current post ID is used.
`$echo`|Echo the HTML output (`true` - default) or return it (`false`).

## Returned value

By default, the function just outputs the HTML content of the field and doesn't return anything. If you set `$echo` to `false`, then it will return the HTML as a string.

For simple fields like text or select, HTML output is just the field value.

For other fields, HTML can be unordered list (like for a checkbox_list field), Google maps, or list of users.

For **choice fields** (select, select advanced, checkbox list, radio, and button group), this function returns or outputs the choice's **label**, not **value**. For example, if you format the options of your select field as:

```php
'options' => [
    'us' => 'United States',
    'uk' => 'United Kingdom',
    'au' => 'Australia',
],
```

Then when using with this function, it outputs the label "United States" or "Australia" depending on its value. If you want to get the value "us", "uk", or "au", please use the [rwmb_get_value()](/rwmb-get-value/) function.

## Examples

**Displaying the value of a text field:**

```php
<p>
    <strong>Location:</strong> <?php rwmb_the_value( 'location' ) ?>
</p>
```

**Displaying an image (single image field):**

```php
<p>
    <strong>Cover image:</strong>
    <?php rwmb_the_value( 'cover' ) ?>
</p>
```

**Displaying a list of images using an image advanced field:**

```php
<?php rwmb_the_value( 'gallery', ['size' => 'thumbnail'] ) ?>
```

**Displaying a Google maps or Open Street Maps field:**

```php
<?php rwmb_the_value( 'map' ) ?>
```

**Displaying list of related posts from a post field (with "multiple" setting is enabled):**

```php
<div class="related-posts">
    <h3>Related posts</h3>

    <?php rwmb_get_value( 'related' ) ?>
</div>
```

**Displaying a term meta from a term with ID 15:**

```php
<div class="featured-section">
    <h2>Featured section</h2>
    <p>
        <strong>Color:</strong>
        <?php rwmb_get_value( 'color', ['object_type' => 'term'], 15 ) ?>
    </p>
</div>
```

**Displaying a setting:**

```php
<div class="topbar">
    <strong>Hotline:</strong> <?= rwmb_the_value( 'hotline', ['object_type' => 'setting'], 'site_option' ) ?>
</div>
```

**Displaying a field value from a custom table:**

```php
<p>
    <strong>Property price:</strong>
    <?php rwmb_the_value( 'price', ['storage_type' => 'custom_table', 'table' => 'properties'], 15 ) ?> USD
</p>
```

## FAQ

<FAQ question="Why does my site crash when I deactivate Meta Box?">

If you're using this function in your theme, then they become unavailable when Meta Box is deactivated. And your site might crash in that situation.

You can fix that by going to the admin area » Plugins and re-activate Meta Box.

Alternatively, you can add the following code into your theme's `functions.php` file to make the error go away, however, the custom fields won't display, either.

```php
if ( ! function_exists( 'rwmb_the_value' ) ) {
    function rwmb_the_value( $key, $args = [], $object_id = null ) {
        return null;
    }
}
```

</FAQ>