---
title: Custom fields
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FAQ from '@site/src/components/FAQ';

After creating custom post types and custom taxonomies, you'll need to add more details to your posts. For example, you'll need "date" and "location" for the "event" post type. Such details are called custom fields and that's the main thing that Meta Box does for you.

## What are custom fields?

Custom fields, also called metadata, are arbitrary extra data attached to posts to provide more information about the posts.

Custom fields are a very important feature of WordPress and make WordPress a powerful CMS. You'll see custom fields everywhere, for example:

- On a hotel booking website: custom fields are used to add information for address, rating, or price
- On an e-commerce website: they're used to add details for price, quantity, or size. FYI, WooCommerce uses custom fields to store these data.

## How to create custom fields?

To create custom fields, you'll need the **Meta Box Builder** extension. This premium extension is already bundled in Meta Box AIO and MB Core so you can use it right away.

:::info Not a premium user?

Please [purchase a license](https://metabox.io/pricing/) to use this extension. This is a very powerful tool that helps you to work with custom fields in Meta Box via a user-friendly interface.

:::

Custom fields are organized in groups. Each group is displayed as a collapsible panel below the post editor.

To create a field group, go to **Meta Box » Custom Fields** and click **Add New**. You'll see a screen to add fields to the group:

![adding custom fields to the group](https://i.imgur.com/wjtQCmc.png)

Enter the group title and then click the **+ Add Field** button and select a field type to add to the group. After that, a new field will appear in the field list. Clicking on the field title bar will open the field settings panel where you can edit settings for the field such as title or default value.

Field settings are self-explained. We also add some tooltips next to the setting title to give you more information if needed. To know more about field settings, please see [this docs](/field-settings/).

When finishing adding fields, click the **Settings** tab and select the post type where the fields are displayed for.

![selecting a post type for the field group](https://i.imgur.com/a39tyzd.png)

After that click the **Publish** button to finish.

Now go to your post type and add a new post, you'll see the field group with custom fields displayed below the editor where you can enter the data you want:

![editing a post with custom fields](https://i.imgur.com/TwDYnBQ.png)

:::info Do you know?

The technical term of field groups in WordPress is "meta box". You'll see them via WordPress functions like `add_meta_box` or `remove_meta_box`. That's why we name our brand **Meta Box**!

:::

:::tip For developers

You can also [create custom fields with code](/creating-fields-with-code/), which is suitable if you want to keep everything in your themes or plugins.

:::

## Displaying fields

After having all the data for custom fields, it's time to show them on the front end.

We'll display the event details for the event post type that we created in the previous steps. We'll use the default theme Twenty Twenty-Two for our site. This is the single event page on the front end, and we'll display the event details below the event description:

![event page](https://i.imgur.com/rSPicJm.png)

To do that, we'll use the [MB Views](/extensions/mb-views/) extension, which offers a powerful and flexible way to select and display fields.

:::info Don't have a license?

MB Views is a premium extension and is available for [**Ultimate** and **Lifetime** licenses](https://metabox.io/pricing/) only (not the **Basic** license). If you don't own the right license, please purchase one.

:::

To begin, we need to create a "view". A "view" is a template where we show our fields. To create a view, go to **Meta Box » Views** and click **Add New** button.

On the edit view screen, enter the view title. To insert a field to the template, click the **Insert Field** button, which opens a panel with all the available fields:

![insert a field in a view](https://i.imgur.com/tUtIqmp.png)

You'll see other WordPress fields as well such as post title or post content. In our case, we only need to insert our custom fields, so click on **Date and time** field and you'll see a popup asking for the date format:

![selecting a date format](https://i.imgur.com/OPXkorx.png)

Simply choose a date format from the dropdown and click the **Insert** button to insert the field to the template. After that, you'll see the template now has the following text:

```html
{{ post.datetime | date( 'F j, Y' ) }}
```

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

:::tip For developers

You can also [display custom fields with code](/displaying-fields-with-code/), which is suitable if you want to keep everything in your themes or plugins.

:::

## Next steps

Now you know all the basics for working with custom fields in Meta Box. Depending on your needs, I'd suggest you take a look at:

- [Advanced topics](/category/advanced/), or
- Explore the [field type gallery](/fields/) to know which fields are suitable for your needs, or
- Explore more features provided by [extensions](/extensions/)

If you have any questions, feel free to ask in the [support forum](https://support.metabox.io/) or discuss in the [Facebook community group](https://www.facebook.com/groups/metaboxusers).

Thanks for using Meta Box and happy building websites!