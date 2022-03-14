---
title: Creating custom fields
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

After creating custom post types and custom taxonomies, you'll need to add more details to your posts. For example, you'll need "date" and "location" for the "event" post type. Such details are called custom fields and that's the main thing that Meta Box does for you.

![custom fields for the event post type in WordPress](https://i.imgur.com/TwDYnBQ.png)

## What are custom fields?

Custom fields, also called metadata, are arbitrary extra data attached to posts to provide more information about the posts.

Custom fields are a very important feature of WordPress. Without custom fields, WordPress can't be used as a CMS. You'll see custom fields everywhere, for example:

- On a hotel booking website: custom fields are used to add information for address, rating, or price
- On an e-commerce website: they're used to add details for price, quantity, or size. FYI, WooCommerce uses custom fields to store these data.

## What can custom fields do for you?

Besides storing data, custom fields help you:

- Creating a convenient form in the editing screen to let you (or your customers) enter data. Think about a form with text inputs, image upload, or editor. Without such forms, entering data is a disaster.
- Showing more details for custom post types on the front end to make your custom post type page looks beautiful and not have the same look and feel as blog posts.
- Searching and filtering posts by custom fields data. For example, you can search for products with a price < $1000.

With Meta Box, working with custom fields is very easy. Let's start creating some custom fields!

## How to create custom fields?

To create custom fields, you'll need the **Meta Box Builder** extension. This premium extension is already bundled in Meta Box AIO and MB Core so you can use it right away.

:::info

If you're not a premium user, consider [purchasing a license](https://metabox.io/pricing/) to use this extension. This is a very powerful tool that helps you to work with custom fields in Meta Box via a user-friendly interface. However, you can absolutely do this with code. See the sections below for more information.

:::

Custom fields are organized in groups. Each group is displayed as a collapsible panel below the post editor.

To create a field group, go to **Meta Box » Custom Fields** and click **Add New**:

<img alt="create a new field group" src="https://i.imgur.com/iSmSksO.png" width="400" height="371" />

You'll see a screen to add fields to the group:

![adding custom fields to the group](https://i.imgur.com/CO4j4sa.png)

Enter the group title and then click the **+ Add Field** button and select a field type to add to the group. After that, a new field will appear in the field list. Clicking on the field will open the field settings panel where you can edit settings for the field such as title or default value. We'll cover them in details in the next section.

:::tip Quickly find a field type

To find a field type quickly, type its name in the input box above the field list. The plugin will filter the fields and show only matched fields.

:::

When finishing adding fields, click the **Settings** tab and select the post type where the fields are displayed for. There are other settings that we'll cover in the next section.

![selecting a post type for the field group](https://i.imgur.com/a39tyzd.png)

After that click the **Publish** button to finish. Now you have some fields for your post type. In the example (with screenshots) above, I created 3 fields for the "event" post type: Date and time, Location, and Map. Now go to your post type and add a new post, you'll see the field group with custom fields displayed below the editor:

![editing a post with custom fields](https://i.imgur.com/TwDYnBQ.png)

Enter some data to the custom fields and save the post! Now your post has the details you want to add to.

### Field actions

While working on fields, you can:

- Delete or duplicate a field by clicking the icons in the field title bar.
- Reveal field settings by clicking anywhere in the field title bar.
- Reorder fields by drag and drop fields to the new positions.

### Field settings

Each field settings are self-explained. We also add some tooltips next to the setting title to give you more information if needed. All field settings are divided into 2 tabs: General, Advanced. These settings are explained in detailed [here](/field-settings/). Some settings are for other extensions which are explained on each extension docs.

To understand field types and settings for each type, please see this video below:

<LiteYouTubeEmbed id='WWeaM5vIAwM' />

### Settings

The field group settings are put in the tab **Settings**:

![field group settings](https://i.imgur.com/K3emckr.png)

Here you'll see location rules, which are used to set where the field group appears, custom CSS class, and custom settings. If you have other extensions activated, their settings are also displayed here such as advanced location rules (from Meta Box Include Exclude), conditional logic (from Meta Box Conditional Logic), block settings (from MB Blocks), etc.

---

To learn more about using Meta Box Builder, please follow [this detailed guide](/extensions/meta-box-builder/).

## Using Online Generator

Online Generator is a tool to help you create custom fields with UI. You can add fields, set options, and generate needed code that's ready to copy and paste.

We have written a detailed guide on using the Online Generator. Please follow [it here](/online-generator/).

## Using code

If you're a developer and want to use all power of Meta Box, then using code is the right choice. Meta Box provides a complete API for you to register, manage and customize custom fields the way you want.

To create a field group, you need to hook to the filter `rwmb_meta_boxes` to add the field group settings. This filter accepts 1 parameter - the array of settings.

The code below registers a simple field group:

```php
add_filter( 'rwmb_meta_boxes', 'prefix_register_meta_boxes' );
function prefix_register_meta_boxes( $meta_boxes ) {
    $meta_boxes[] = [
        'title'      => 'Personal Information',
        'post_types' => 'post',
        'id'         => 'personal-information',
        'fields' => [
            [
                'name'  => 'Full name',
                'desc'  => 'Format: {First Name} {Last Name}',
                'id'    => 'prefix_name',
                'type'  => 'text',
            ],
            // More fields.
        ]
    ];

    // Add more field groups if you want
    // $meta_boxes[] = ...

    return $meta_boxes;
}
```

### Field group settings

Each field group has the following settings:

Name|Description
--|--
`id`|ID, must be unique. Optional. If it's absent, it will be generated from `title` using `sanitize_title` function.
`title`|Title. Required.
`post_types`|Custom post types which the field group is for. There can be an array of multiple custom post types or a string for the single post type. Must be in lowercase (like the slug). Optional. Default: `post`.
`context`|Where the field group is displayed. See below for a list of field group contexts. Optional.
`style`|Whether to keep the default WordPress field group style (`default`) or remove the wrapper box and display the fields seamlessly (`seamless`).
`closed`|Whether to collapse the field group when the page loads? Optional. Default: `false`.
`priority`|Priority within the context where the box is displayed (`high` or `low`). Optional. Default: `high`.
`default_hidden`|Hide the field group by default (`true` or `false`)? The field group can be toggled using the checkbox option in screen Help (on the top right). Optional. Default `false`.
`autosave`|Auto save the custom fields' values (like post content and title)? Optional. Default: `false`.
`media_modal`|Add custom fields to media modal when viewing/editing an attachment. Works only when `post_types` is or contains `attachment`. Optional. Default `false`.
`class`|Custom CSS class for the field group wrapper. Optional.
`fields`|Array of fields. See section below.

:::info Media modal limitation

Because of some limitations in the media modal, only simple fields such as text, select, radio, checkbox work. Other fields that require custom JavaScript don't work, unfortunately.

:::

#### Contexts

The plugin supports the following contexts (locations) where a field group can appear:

Name|Description
---|---
`normal`|Below the post editor. This is the default value.
`advanced`|Below the `normal` section.
`side`|On the right sidebar.
`form_top`|Top of the post form, before the post title. Added in version 4.13.0.
`after_title`|After post title. Added in version 4.13.0.
`after_editor`|After the post content editor, but before `normal` section. Added in version 4.13.0.
`before_permalink`|Before permalink. Added in version 4.13.0.

This is the screenshot how field groups appear in `form_top` and `after_title` locations (used with `seamless` style):

![meta box locations](https://i.imgur.com/kBKbS3wl.png)

:::caution Contexts in Gutenberg

Gutenberg editor does **not** support extra contexts. Only `normal`, and `side` contexts are supported. If you use Gutenberg for your post types, use these contexts only.

:::

#### Contexts not working

There are some situations that the context doesn't work as expected. That is probably because you have dragged and dropped the field groups to reorder them? If you have, then WordPress will save the position/location of them and makes the `context` parameter not working. The order of field groups is saved in the user meta `meta-box-order_{screen id}` as follows:

![meta box order](https://i.imgur.com/A7bkxT9.png)

In this case, deleting this user meta from the database will make the context work again.

### Fields

Fields are added to a field group via the key `fields`. Each field is an array of settings. In the example above, the text field is defined via:

```php
array(
    'name'  => 'Full name',
    'desc'  => 'Format: {First Name} {Last Name}',
    'id'    => $prefix . 'name',
    'type'  => 'text',
),
```

Meta Box supports more than 40 field types. All fields share some common settings like `id`, `type`, but also offer unique settings per field type. See [this guide](/field-settings/) for more details.

You can (should) add a prefix to field IDs to prevent from using the same ID with other scripts. If you want to hide the fields in the default WordPress **Custom Fields** meta box, use underscore (`_`) as the prefix.
