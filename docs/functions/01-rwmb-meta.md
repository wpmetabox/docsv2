---
title: rwmb_meta
---

import FAQ from '@site/src/components/FAQ';

`rwmb_meta` is a helper function that helps you get a field value.

It's actually a wrapper of [rwmb_get_value()](/rwmb-get-value/) and [rwmb_the_value()](/rwmb-the-value/) functions to make sure the returned value is always helpful to developers.

More precisely:
- If field type is either oEmbed, Google maps, or Open Street Maps, it's exactly the same as [rwmb_the_value()](/rwmb-the-value/), but returns the field HTML output.
- For other field types, it's exactly the same as [rwmb_get_value()](/rwmb-get-value/).

## Arguments

This function accepts 3 arguments as follows:

```php
rwmb_get_value( $field_id, $args, $object_id );
```

Name|Description
---|---
`$field_id`|The field ID. Required.
`$args`|Extra arguments for some field types (like `size` for `image_advanced`) or for another object type (like getting values for terms or users). Can be an array or a string in format `param1=value1&param2=value2`.
`$object_id`|Object (post, term, user) ID. If you need to get value from an option (using MB Settings Page), object ID is the option name. If not present, the current post ID is used.

## Returned value

- If the field has a single value (not `multiple` nor `clone`), then the function returns that value.
- If the field has multiple values (`multiple`, `clone`, or the field type is `group`), then the function returns an array of values.

:::info Embeded fields

For **oEmbed, Google maps, or Open Street Maps**, this function returns the HTML output, e.g. a video player or a embeded map.

:::

:::info Returned value format

Depending on the field types, the returned value can be different. Please refer to each field type in the [Fields](/fields/) section for more details.

:::

## Examples

**Getting the value of a text field:**

```php
<p>
    <strong>Location:</strong> <?= rwmb_meta( 'location' ) ?>
</p>
```

**Getting the value of a radio field from a post with ID 123:**

```php
<?php
$layout = rwmb_meta( 'layout', '', 123 );

if ( $layout === 'content-sidebar' ) {
    get_template_part( 'main-content' );
    get_template_part( 'sidebar' );
} elseif ( $layout === 'full-width' ) {
    get_template_part( 'main-content' );
}
```

**Getting image URL from a single image field:**

```php
<?php $image = rwmb_meta( 'cover', ['size' => 'full'] ) ?>
<p>
    <strong>Cover image:</strong>
</p>
<p>
    <img src="<?= $image['url'] ?>">
</p>
```

**Displaying a gallery with lightbox effect using an image advanced field:**

```php
<?php $images = rwmb_meta( 'gallery', ['size' => 'thumbnail'] ) ?>

<div class="gallery">
    <?php foreach ( $images as $image ) : ?>
        <a href="<?= $image['full_url'] ?>" class="lightbox">
            <img src="<?= $image['url'] ?>">
        </a>
    <?php endforeach ?>
</div>
```

**Displaying a Google maps or Open Street Maps field:**

```php
<p>
    <strong>Map:
</p>
<?= rwmb_meta( 'map' ) ?>
```

**Displaying list of related posts from a post field (with "multiple" setting is enabled):**

```php
<?php $posts = rwmb_meta( 'related' ) ?>

<div class="related-posts">
    <?php foreach ( $posts as $post ) : ?>
        <a href="<?= get_permalink( $post ) ?>">
            <?= get_the_title( $post ) ?>
        </a>
    <?php endforeach ?>
</div>
```

**Displaying a cloneable group:**

```php
<?php $authors = rwmb_meta( 'authors' ) ?>

<?php foreach ( $authors as $author ) : ?>
    <div class="author">
        <p>
            <strong>Name:</strong> <?= $author['name'] ?>
        </p>
        <p>
            <strong>Email:</strong> <?= $author['email'] ?>
        </p>
        <p>
            <strong>Address:</strong> <?= $author['address'] ?>
        </p>
    </div>
<?php endforeach ?>
```

**Getting a term meta from a term with ID 15:**

```php
<?php $color = rwmb_meta( 'color', ['object_type' => 'term'], 15 ) ?>

<div class="featured-section" style="background-color: <?= $color ?>">
    <h2>Featured section</h2>
</div>
```

**Getting a setting:**

```php
<?php $hotline = rwmb_meta( 'hotline', ['object_type' => 'setting'], 'site_option' ) ?>

<div class="topbar">
    <strong>Hotline:</strong> <?= $hotline ?>
</div>
```

**Getting a field value from a custom table:**

```php
<?php $price = rwmb_meta( 'price', ['storage_type' => 'custom_table', 'table' => 'properties'], 15 ) ?>

<p>
    <strong>Property price:</strong> <?= number_format( $price ) ?> USD
</p>
```

## FAQ

<FAQ question="Why does my site crash when I deactivate Meta Box?">

If you're using this function in your theme, then they become unavailable when Meta Box is deactivated. And your site might crash in that situation.

You can fix that by going to the admin area » Plugins and re-activate Meta Box.

Alternatively, you can add the following code into your theme's `functions.php` file to make the error go away, however, the custom fields won't display, either.

```php
if ( ! function_exists( 'rwmb_meta' ) ) {
    function rwmb_meta( $key, $args = [], $object_id = null ) {
        return null;
    }
}
```

</FAQ>

<FAQ question="Why can't I get the label for a select field?">

If you format the options of your select field as:

```php
'options' => [
    'us' => 'United States',
    'uk' => 'United Kingdom',
    'au' => 'Australia',
],
```

Then when using with this function, it returns the value "us", "uk", or "au". To get the label like "United States", please use the [rwmb_the_value()](/rwmb-the-value/) function.

</FAQ>