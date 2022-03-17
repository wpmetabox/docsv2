---
title: Displaying fields with code
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import TabItem from '@theme/TabItem';
import FAQ from '@site/src/components/FAQ';

If you're a developer and familiar with changing template file with PHP code, you can use Meta Box helper functions to display fields:

- [`rwmb_get_value()`](/rwmb-get-value/): to get a field value as a variable
- [`rwmb_the_field()`](/rwmb-the-value/): to display a field

Open your template file for the single event content. Usually, it's `template-parts/content.php`, `single-event.php` or `single.php` file, depending on your theme structure. Then add the following code below the content area:

```php
<?php
/**
 * Template part for displaying single post content
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <header class="entry-header alignwide">
                <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
        </header>

        <div class="entry-content">
                <?php the_content(); ?>

                <p>
                    <strong>Date and time:</strong> <?php rwmb_the_value( 'datetime' ) ?>
                </p>
                <p>
                    <strong>Location:</strong> <?php rwmb_the_value( 'location' ) ?>
                </p>
                <p>
                    <strong>Map:</strong>
                </p>
                <?php rwmb_the_value( 'map' ) ?>
                ?>
        </div>
</article>
```

:::caution Block themes

For block themes, everything is blocks and there's no PHP template files. In that case, please use the [MB Views](/extensions/mb-views/) extension.

:::

Both functions accept the following parameters:

Name|Description
---|---
`$field_id`|The field ID. Required.
`$args`|Extra arguments for some field types (image, file, etc.). Can be array or a string in format `param1=value1&param2=value2`. See more details in field types. Optional.
`$object_id`|Object ID that custom fields are got from. Optional. If not present, the current post ID is used.
`$echo`|Echo the HTML output (`true` - default) or return it (`false`). Applied only for `rwmb_the_value()` function.

## FAQ

<FAQ question="Why does my site crash when I deactivate Meta Box?">

If you're using our helper functions in your theme, then they become unavailable when Meta Box is deactivated. You can fix that by going to the admin area » Plugins and re-activate Meta Box.

Alternatively, you can add the following code into your theme's `functions.php` file to make the error go away, however, the custom fields won't display, either.

```php
if ( ! function_exists( 'rwmb_the_value' ) ) {
    function rwmb_the_value( $key, $args = [], $post_id = null ) {
        return null;
    }
}
if ( ! function_exists( 'rwmb_get_value' ) ) {
    function rwmb_get_value( $key, $args = [], $post_id = null ) {
        return null;
    }
}
```

</FAQ>

<FAQ question="Can I use WordPress's get_post_meta() function to get custom field value?">

Absolutely. Our helper function is just a wrapper of WordPress's `get_post_meta` function.

</FAQ>

<FAQ question="Why don't I see values of custom fields?">

There are some cases where you register custom fields conditionally or only for the back end like you wrap the code under `is_admin()`. In that case, make sure you remove the condition and register custom fields for both the back end and front end.

</FAQ>

<FAQ question="Can I use a page builder to show Meta Box fields?">

Absolutely. We have official support for [Beaver Builder](/extensions/mb-beaver-themer-integrator/) and [Elementor](/extensions/mb-elementor/). Some page builders already have built-in support for Meta Box like Oxygen Builder, Bricks, and Brizy. See the [list of compatible plugins](/compatibility/) and refer to their docs for how to use them with Meta Box.

</FAQ>
