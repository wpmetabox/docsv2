---
title: Custom fields
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FAQ from '@site/src/components/FAQ';

After creating custom post types and custom taxonomies, you'll need to add more details to your posts. For example, you'll need "date" and "location" for the "event" post type. Such details are called custom fields and that's the main thing that Meta Box does for you.

![custom fields for the event post type in WordPress](https://i.imgur.com/TwDYnBQ.png)

## What are custom fields?

Custom fields, also called metadata, are arbitrary extra data attached to posts to provide more information about the posts.

Custom fields are a very important feature of WordPress and make WordPress a powerful CMS. You'll see custom fields everywhere, for example:

- On a hotel booking website: custom fields are used to add information for address, rating, or price
- On an e-commerce website: they're used to add details for price, quantity, or size. FYI, WooCommerce uses custom fields to store these data.

## How to create custom fields?

To create custom fields, you'll need the **Meta Box Builder** extension. This premium extension is already bundled in Meta Box AIO and MB Core so you can use it right away.

:::info

If you're not a premium user, consider [purchasing a license](https://metabox.io/pricing/) to use this extension. This is a very powerful tool that helps you to work with custom fields in Meta Box via a user-friendly interface.

:::

Custom fields are organized in groups. Each group is displayed as a collapsible panel below the post editor.

To create a field group, go to **Meta Box » Custom Fields** and click **Add New**. You'll see a screen to add fields to the group:

![adding custom fields to the group](https://i.imgur.com/wjtQCmc.png)

Enter the group title and then click the **+ Add Field** button and select a field type to add to the group. After that, a new field will appear in the field list. Clicking on the field title bar will open the field settings panel where you can edit settings for the field such as title or default value.

When finishing adding fields, click the **Settings** tab and select the post type where the fields are displayed for.

![selecting a post type for the field group](https://i.imgur.com/a39tyzd.png)

After that click the **Publish** button to finish.

Now go to your post type and add a new post, you'll see the field group with custom fields displayed below the editor where you can enter the data you want:

![editing a post with custom fields](https://i.imgur.com/TwDYnBQ.png)

:::info Do you know?

The technical name of field groups in WordPress is "meta box". You'll see them via WordPress functions like `add_meta_box` or `remove_meta_box`. That's why we name our brand **Meta Box**!

:::

:::tip

You can also [create custom fields with code](/creating-custom-fields-with-code/), which is suitable if you want to keep everything in your themes or plugins.

:::

## Next steps

After having all the necessary data, we'll need to [show them on the front end](/displaying-fields/).