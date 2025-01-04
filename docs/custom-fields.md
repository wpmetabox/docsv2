---
title: Custom fields
---

After creating custom post types and custom taxonomies, you'll need to add more details to your posts. For example, you'll need "date" and "location" for the "event" post type. Such details are called custom fields and that's the main thing that Meta Box does for you.

## What are custom fields?

Custom fields, also called metadata, are arbitrary extra data attached to posts to provide more information about the posts.

Custom fields are a very important feature of WordPress and make WordPress a powerful CMS. You'll see custom fields everywhere, for example:

- On a hotel booking website: custom fields are used to add information for address, rating, or price
- On an e-commerce website: they're used to add details for price, quantity, or size. FYI, WooCommerce uses custom fields to store this data.

## How to create custom fields?

There are 2 methods to create custom fields:

1. Creating custom fields and configuring them in an intuitive interface provided by the Meta Box Builder extension.
2. Using code.

### Method 1: Creating with the intuitive interface

To have a UI for creating custom fields, you'll need the **Meta Box Builder** extension.

#### Getting Meta Box Builder

Based on the version you use, there are some ways to get Meta Box Builder:

* Using the Meta Box Plugin and Meta Box Builder: Install the Meta Box Plugin. Then download Meta Box Builder from [metabox.io](https://metabox.io) website and install it to your site.

![Download Meta Box Builder from metabox.io website](https://i.imgur.com/0BAnVW0.png)

* Using Meta Box Lite: Meta Box Builder is included in this version. Simply download Meta Box Lite and start using it.
  


* Using Meta Box AIO: Purchase any plan from [metabox.io](https://metabox.io), you will have the  Meta Box AIO in your [My account](https://metabox.io/my-account/) page. Then, install it on your website and enable the Meta Box Builder plugin to get it.

![Get Meta Box AIO, and enable the Meta Box Builder plugin](https://i.imgur.com/dtwJfVb.png)

#### Creating custom fields

Go to **Meta Box » Custom Fields** and click **Add New**. You'll see a screen to add fields to the group:

![Adding custom fields to the group](https://i.imgur.com/EmJZPs2.png)

Enter the group title and then click the **+ Add Field** button and select a field type to add to the group. Meta Box provides [50+ field types](https://docs.metabox.io/fields/) for all of your data types. 

After that, a new field will appear in the field list. Clicking on the field title bar will open the field settings panel where you can edit settings for the field such as title or default value.

Field settings are self-explained. We also add some tooltips next to the setting title to give you more information if needed. To know more about field settings, please see [this docs](/field-settings/).

When finishing adding fields, click the **Settings** tab and select the post type where the fields are displayed for.

![selecting a post type for the field group](https://i.imgur.com/a39tyzd.png)

After that click the **Publish** button to finish.

Now go to your post type and add a new post, you'll see the field group with custom fields displayed below the editor where you can enter the data you want:

![editing a post with custom fields](https://i.imgur.com/TwDYnBQ.png)

:::info Do you know?

The technical term of field groups in WordPress is "meta box". You'll see them via WordPress functions like `add_meta_box` or `remove_meta_box`. That's why we name our brand **Meta Box**!

:::

### Method 2: Using code

This method is suitable for developers, and when you want to keep everything in your themes or plugins. It doesn't matter which version you're using.

To see how to create custom fields with code in details, please read [here](https://docs.metabox.io/creating-fields-with-code/).

```
add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
    $meta_boxes[] = [
        'title'      => 'Event details',
        'post_types' => 'event',
        'fields'     => [
            [
                'name' => 'Date and time',
                'id'   => 'datetime',
                'type' => 'datetime',
            ],
            [
                'name' => 'Location',
                'id'   => 'location',
                'type' => 'text',
            ],
            [
                'name'          => 'Map',
                'id'            => 'map',
                'type'          => 'osm',
                'address_field' => 'location',
            ],
        ],
    ];

    // Add more field groups if you want
    // $meta_boxes[] = ...

    return $meta_boxes;
} );
```

## Displaying field values

After having all the data for custom fields, it's time to show them on the front end.

We'll display the event details for the event post type that we created in the previous steps for example. This is the single event page on the front end, and we'll display the event details below the event description:

![Event page](https://i.imgur.com/rSPicJm.png)

To do that, you have 3 methods:

1. Using MB Views extension from Meta Box
2. Using a page builder
3. Using code

### Method 1: Using MB Views

[MB Views](https://docs.metabox.io/extensions/mb-views/) offers a powerful and flexible way to select and display fields. It is a premium extension, and only included in Meta Box AIO.

To begin, we need to create a "view". A "view" is a template where we show our fields. To create a view, go to **Meta Box » Views** and click **Add New** button.

On the edit view screen, enter the view title. To insert a field to the template, click the **Insert Field** button, which opens a panel with all the available fields:

![Click to the Insert Field button, which opens a panel with all the available fields](https://i.imgur.com/1IPcVPr.png)

You'll see other WordPress fields as well such as post title or post content. For the custom fields we created, just choose one and click on its name on the list.

![For the custom fields we created, just choose one and click on its name on the list](https://i.imgur.com/wydo9s9.png)

For some kinds of data, Meta Box may offer some options for the output. It will show a popup asking for the output format as follows:

![selecting a date format](https://i.imgur.com/OPXkorx.png)

Choose an output format from the dropdown and click the Insert button to insert the field to the template. After that, you'll see the template now has the following text:

```html
{{ post.datetime | date( 'F j, Y' ) }}
```

![Choose an output format from the dropdown, and the text is displayed in the template](https://i.imgur.com/S0YCRfH.png)

That's the value of the field which will be displayed on the front end. However, displaying only text might be confusing, so we'll a label for it by adding the `<strong>Date and time:</strong>` before the text and wrap it in a paragraph (between `<p>` and `</p>` tags) to add some space. The template now looks like:

```html
<p>
	<strong>Date and time:</strong> {{ post.datetime | date( 'F j, Y' ) }}
</p>
```

:::tip

You can use any HTML tags and/or WordPress shortcodes in the view template.

:::

Now repeat the process for other fields: location and map. For map, as it's displayed as a Open Street Maps, we'll need change the HTML a little bit to put it below the label:

![template for the event post type](https://i.imgur.com/TeWN22i.png)

Now you need to set up the view to display below the post content of the event page in the **Settings** box as follows:

![view settings](https://i.imgur.com/U3kJnLe.png)

Finally, click the **Publish** button to finish.

Now go to the event page on the front end and you'll see the custom fields that we created:

![view event details on the front end](https://i.imgur.com/iOAEwBT.png)

### Method 2: Using page builders

Meta Box integrated with almost all popular page builders (Elementor, Bricks Builder, Breakdance, Kadence, Oxygen, Zion Builder, Beaver Builder, Divi, etc.). The process of displaying field values is similar to getting the post title, content, or featured image. So, follow these steps:

1. Add a new element/widget/component/block which corresponds to the type of data you want to retrieve.

![Add a new element/widget/component/block](https://i.imgur.com/gap2fUz.png)

2. Use the dynamic data feature by clicking on its icon. Each page builder has a different icon, but in most cases, you can find it in the content box.

![Dynamic tag of Elementor](https://i.imgur.com/dWA7vnx.png)
_Dynamic tag of Elementor_

![The dynamic data icon of Bricks](https://i.imgur.com/SOgkA5W.png)
_The dynamic data icon of Bricks_

![The “Insert Data” button of Oxygen to get data from Meta Box field](https://i.imgur.com/VbwoWMM.png)
_The “Insert Data” button of Oxygen to get data from Meta Box field_ 

![The dynamic data icon of Breakdance](https://i.imgur.com/iGBmY9y.png)
_The dynamic data icon of Breakdance_

![The dynamic content feature of Kadence](https://i.imgur.com/wFHIKG0.png)
_The dynamic content feature of Kadence_

3. There will be a field list. Choose the field name you want to get data from. It is usually in the Meta Box section. For example, if you use Bricks Builder, the interface will be like this:

![Choose the field name you want to get data from](https://i.imgur.com/uCgnya8.png)

For the real case of display field values using page builders, you can refer to the [Tutorials](https://docs.metabox.io/tutorials/builders/).

### Method 3: Using code

[Display field values with code](https://docs.metabox.io/displaying-fields-with-code/) is suitable for developers and in the case that you want to keep everything in your themes or plugins.

## Next steps

Now you know all the basics for working with custom fields in Meta Box. Depending on your needs, I'd suggest you take a look at:

- [Advanced topics](/category/advanced/), or
- Explore the [field type gallery](/fields/) to know which fields are suitable for your needs, or
- Explore more features provided by [extensions](/extensions/)

If you have any questions, feel free to ask in the [support forum](https://support.metabox.io/) or discuss in the [Facebook community group](https://www.facebook.com/groups/metaboxusers).

Thanks for using Meta Box and happy building websites!
