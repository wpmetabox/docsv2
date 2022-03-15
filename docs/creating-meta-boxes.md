---
title: Creating custom fields
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

If you're not a premium user, consider [purchasing a license](https://metabox.io/pricing/) to use this extension. This is a very powerful tool that helps you to work with custom fields in Meta Box via a user-friendly interface. However, you can absolutely do this with code. See the sections below for more information.

:::

Custom fields are organized in groups. Each group is displayed as a collapsible panel below the post editor.

To create a field group, go to **Meta Box » Custom Fields** and click **Add New**:

![create a new field group](https://i.imgur.com/iSmSksO.png")

You'll see a screen to add fields to the group:

![adding custom fields to the group](https://i.imgur.com/CO4j4sa.png)

Enter the group title and then click the **+ Add Field** button and select a field type to add to the group. After that, a new field will appear in the field list. Clicking on the field title bar will open the field settings panel where you can edit settings for the field such as title or default value.

:::info

You can delete or duplicate a field by clicking the icons in the field title bar. To reorder fields, simply drag and drop them to the new positions.

:::

When finishing adding fields, click the **Settings** tab and select the post type where the fields are displayed for.

![selecting a post type for the field group](https://i.imgur.com/a39tyzd.png)

After that click the **Publish** button to finish. Now you have some fields for your post type. In the example (with screenshots) above, I created 3 fields for the "event" post type: date and time, location, and map. Now go to your post type and add a new post, you'll see the field group with custom fields displayed below the editor:

![editing a post with custom fields](https://i.imgur.com/TwDYnBQ.png)

Enter some data to the custom fields and save the post! Now your post has the details you want to add to.

## Creating custom fields with code

If you're a developer and want to create custom fields with code, you'll need to use the filter `rwmb_meta_boxes` to add your fields. This filter accepts one parameter - the array of field groups.

The code below registers a simple field group:

```php
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

<Tabs>

  <TabItem value="fields" label="Fields" default>

Fields are added to a field group via the key `fields`. Each field is an array of settings.

Meta Box supports more than 40 field types. They share some common settings but also offer unique settings per field type. See [this guide](/field-settings/) to understand each field type and its settings.
  </TabItem>

  <TabItem value="settings" label="Settings">

Each field group also has several settings for the location or appearance. Please see the list below:

Name|Description
--|--
`id`|ID, must be unique. Optional. If it's absent, it will be generated from the title.
`title`| The field group title. Required.
`post_types`|Custom post types which the field group is for. It can be a string or an array of slugs. Must be in lowercase (like the slug). Optional. Default: `post`.
`context`|Where the field group is displayed. See below for a list of field group contexts. Optional.
`style`|Whether to keep the default WordPress field group style (`default`) or remove the wrapper box and display the fields seamlessly (`seamless`).
`closed`|Whether to collapse the field group when the page loads? Optional. Default: `false`.
`priority`|Priority within the context where the box is displayed (`high` or `low`). Optional. Default: `high`.
`default_hidden`|Hide the field group by default (`true` or `false`)? The field group can be toggled using the checkbox option in screen Help (on the top right). Optional. Default `false`.
`autosave`|Auto save the custom fields' values (like post content and title)? Optional. Default: `false`.
`media_modal`|Add custom fields to media modal when viewing/editing an attachment. Works only when `post_types` is or contains `attachment`. Optional. Default `false`.
`class`|Custom CSS class for the field group wrapper. Optional.

:::info Media modal limitation

Because of some limitations in the media modal, only simple fields such as text, select, radio, checkbox work. Other fields that require custom JavaScript don't work, unfortunately.

:::

**Contexts**

The plugin supports the following contexts (locations) where a field group can appear:

Name|Description
---|---
`normal`|Below the post editor. This is the default value.
`advanced`|Below the `normal` section.
`side`|On the right sidebar.
`form_top`|Top of the post form, before the post title
`after_title`|After post title
`after_editor`|After the post content editor, but before `normal` section
`before_permalink`|Before permalink

  </TabItem>

</Tabs>

## FAQ

<FAQ question="Why does not my default value work?">

The mechanism of `std` in Meta Box works only if the **field group has not been saved before**. It means all fields in that field group, not just the specific field that you set the `std` for. So if there's any field that already has value, then `std` won't work for other fields, even new fields you've just added.

Examples:

When you create a new post, then no fields have values (of course), then `std` works for all fields.

When you edit an existing post that has a field group, then some fields might have values. Therefore, `std` doesn't work for all fields. In this case, if you edit the field group and add a new field, `std` still doesn't work for that new field (even it has no value before), because the field group has been saved before.

</FAQ>

<FAQ question="Why does not my context work in Gutenberg?">

Gutenberg editor does **not** support extra contexts. Only `normal`, and `side` contexts are supported. If you use Gutenberg for your post types, use these contexts only.

</FAQ>

<FAQ question="Why does not my context work?">

There are some situations that the context doesn't work as expected. That is probably because you have dragged and dropped the field groups to reorder them? If you have, then WordPress will save the position/location of them and use the saved position instead of the value in the `context` parameter. The order of field groups is saved in the user meta `meta-box-order_{screen id}` as follows:

![meta box order](https://i.imgur.com/A7bkxT9.png)

In this case, deleting this user meta from the database will make the context work again.

</FAQ>

## Next steps

After having all the necessary data, we'll need to [show them on the front end](/displaying-fields/).