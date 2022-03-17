---
title: Displaying fields
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import TabItem from '@theme/TabItem';
import FAQ from '@site/src/components/FAQ';

After having all the data for custom fields, it's time to show them on the front end.

We'll display the event details for the event post type that we created in the previous steps. We'll use the default theme Twenty Twenty-Two for our site. This is the single event page on the front end, and we'll display the event details below the event description:

![event page](https://i.imgur.com/rSPicJm.png)

## Displaying fields with MB Views

[MB Views](/extensions/mb-views/) is an extension that offers a powerful and flexible way to select and display fields. Using MB Views to display fields is our recommended way.

:::info

MB Views is a premium extension and is available for [**Ultimate** and **Lifetime** licenses](https://metabox.io/pricing/) only (not the **Basic** license). It's already bundled in the Meta Box AIO so you can use it right away. If you don't own the right license, consider purchasing one. However, you can display fields code. See the sections below for more information.

:::

To begin, we need to create a "view". A "view" is a template where we show our fields. To create a view, go to **Meta Box » Views** and click **Add New** button:

![create a new view](https://i.imgur.com/xpQtm46.png)

On the edit view screen, enter the view title. It's used for reference only and is not displayed on the front end. There are 2 sections that you need to pay attention to: the template for inserting fields and the settings.

### Inserting fields into the template

In the main area, you'll see an editor with 3 tabs:

- **Template**: for inserting (or entering) HTML and fields. Most of the time we'll work with this.
- **CSS**: for entering custom CSS for the view
- **JavaScript**: for entering custom JavaScript for the view

To insert a field to the template, click the **Insert Field** button, which opens a panel with all the available fields:

![insert a field in a view](https://i.imgur.com/JaL7jSk.png)

You'll see other WordPress fields as well such as post title or post content. In our case, we only need to insert our custom fields, so click on **Date and time** field and you'll see a popup asking for the date format:

![selecting a date format](https://i.imgur.com/OPXkorx.png)

Simply choose a date format from the dropdown and click the **Insert** button to insert the field to the template. After that, you'll see the template now has the following text:

```html
{{ post.datetime | date( 'F j, Y' ) }}
```

That's **the value of the field** which will be displayed on the front end. However, displaying only text might be confusing, so we'll a label for it by adding the `<strong>Date and time:</strong>` before the text and wrap it in a paragraph (between `<p>` and `</p>` tags) to add some space. The template now looks like:

```html
<p>
	<strong>Date and time:</strong> {{ post.datetime | date( 'F j, Y' ) }}
</p>
```

![html in the view template](https://i.imgur.com/CUJaikq.png)

:::tip

You can use any HTML tags and/or WordPress shortcodes in the view template.

:::

Now repeat the process for other fields: location and map. For map, as it's displayed as a Open Street Maps, we'll need change the HTML a little bit to put it below the label:

```html
<p>
	<strong>Date and time:</strong> {{ post.datetime | date( 'F j, Y' ) }}
</p>

<p>
	<strong>Location:</strong> {{ post.location }}
</p>

<p>
	<strong>Map:</strong>
</p>

{{ post.map.rendered }}
```

![template for the event post type](https://i.imgur.com/TeWN22i.png)

### Settings

Now you need to set up the view to display below the post content of the event page.

- In the **Settings** box, select **Singular** for **Type**, which means the view will display on a singular page.
- Then in the **Location**, select the **Event** and select **All** events.
- Choose **Render for only the post content area**
- And choose to render the view **After the post content**

![view settings](https://i.imgur.com/yFB85Qx.png)

Finally, click the **Publish** button to finish.

Now go to the event page on the front end and you'll see the custom fields that we created:

![view event details on the front end](https://i.imgur.com/iOAEwBT.png)

### Video tutorial

This is a video tutorial on using views to design the archive and single event page. It's more advanced and verbose than the text version above:

<LiteYouTubeEmbed id='4udvu8PqfkE' />

## Displaying fields with code

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

For block themes, everything is blocks and there's no PHP template files. In that case, please use MB Views as described above.

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

## Next steps

Now you know all the basics for working with custom fields in Meta Box. Depending on your needs, I'd suggest you take a look at:

- [Advanced topics](/category/advanced/), or
- Explore the [field type gallery](/fields/) to know which fields are suitable for your needs, or
- Explore more features provided by [extensions](/category/extensions/)

If you have any questions, feel free to ask in the [support forum](https://metabox.io/support/) or discuss in the [Facebook community group](https://www.facebook.com/groups/metaboxusers).

Thanks for using Meta Box and happy building websites!