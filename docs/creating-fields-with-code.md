---
title: Creating fields with code
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FAQ from '@site/src/components/FAQ';

Creating custom fields with code is suitable if you want to keep everything in your themes or plugins. This way, you can re-use them in many websites and put them under a version control like Git.

## Registering custom fields with PHP

To create custom fields, you'll need to use the filter `rwmb_meta_boxes` to register field groups. This filter accepts one parameter - the array of field groups:

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

## Registering custom fields with JSON

Beside registering custom fields with PHP, you can also register custom fields with JSON. This way is more convenient and easier to manage the fields since you can put them in a separate file, use version control, and better code editor support with JSON schema.

See our guide on [Local Json feature](/tutorials/local-json).

Here is an example of how our JSON file looks like:

```json
{
  "$schema": "https://schemas.metabox.io/field-group.json",
  "title": "Event details",
  "post_types": "event",
  "fields": [
    {
      "name": "Date and time",
      "id": "datetime",
      "type": "datetime"
    },
    {
      "name": "Location",
      "id": "location",
      "type": "text"
    },
    {
      "name": "Map",
      "id": "map",
      "type": "osm",
      "address_field": "location"
    }
  ],
  "modified": 1739955432
}
```

Each field group has several settings and a list of fields, which we'll cover below.

## Field group settings

Each field group has several settings for the location or appearance. Please see the list below:

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

Only simple fields such as text, select, radio, checkbox work in the media modal. Other fields that require custom JavaScript don't work.

:::

### Contexts

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

:::caution Gutenberg

Gutenberg editor only supports `normal` and `side` contexts. Other extra contexts are not supported.

:::

## Fields

Fields are added to a field group via the key `fields`. Each field is an array of settings.

Meta Box supports more than 40 field types. They share some common settings but also offer unique settings per field type.

### Field types

When adding a field, you need to know what type it is and how it works. Understanding that helps you choose the right type of field and, therefore, the right type of data that you want to add to your posts.

Below is the list of supported field types in alphabet order with a brief description. The field type key is used for reference in code. For how do they look like and how to use them, please see details in the [Field types](/fields/) menu.

<Tabs>

  <TabItem value="basic" label="Basic" default>

These are the basic and most used field types that don't require any extra library. The UI of these fields is WordPress-native.

Type | Key | Description
--- | --- | ---
Checkbox | `checkbox` | A simple checkbox, usually used for Yes/No question
Checkbox list | `checkbox_list` | A list of checkboxes where you can select multiple choices
Radio | `radio` | Radio input where you can select only one choice
Select | `select` | Select dropdown where you can select one or multiple choice
Text | `text` | A single-line text input
Textarea | `textarea` | A paragraph text input

  </TabItem>

  <TabItem value="advanced" label="Advanced">

These are the advanced field types that usually need an additional library to provide a user-friendly UI.

Type | Key | Description
--- | --- | ---
Background | `background` | Set background properties
Button | `button` | A simple button, usually used for JavaScript triggers
Button group | `button_group` | Select one or multiple choices by enabling button(s) from a group
Color picker | `color` | Color picker
Custom HTML | `custom_html` | Output custom HTML content
Date picker | `date` | Date picker
Datetime picker | `datetime` | Date and time picker
Hidden | `hidden` | For storing a default hidden value
Image Select | `image_select` | Select a choice with images
Key Value | `key_value` | Add an unlimited group of key-value pairs
Google maps | `map` | Google Maps
oEmbed | `oembed` | Input for media from Youtube, Vimeo, and all [supported sites](https://wordpress.org/support/article/embeds/) by WordPress
Open Street Maps | `osm` | Open Street Maps
Password | `password` | For entering a password
Select advanced | `select_advanced` | Beautiful select dropdown using [select2](https://select2.github.io) library
Slider | `slider` | jQuery UI slider
Switch | `switch` | On/off switch with iOS style
Time picker | `time` | Time picker
WYSIWYG editor | `wysiwyg` | WordPress editor

Besides, some field types that are rarely used and we would not recommend using them because their UI is not as good and native as other fields.

Type | Key | Description
--- | --- | ---
Autocomplete | `autocomplete` | Text input that uses an autocomplete library to suggest user input. Not recommended. Use the Select or Select advanced field type instead.
Fieldset text | `fieldset_text` | Group of text inputs. Not recommended. Use the Group field type instead.
Text list | `text_list` | Group of text inputs. Similar to Fieldset text, but has a different UI. Not recommended. Use the Group field type instead.

  </TabItem>

  <TabItem value="html5" label="HTML5">

:::caution

These are field types that use the built-in browser UI without extra libraries. The UI might be different across operating systems and browsers. Please use with care.

:::

Type | Key | Description
--- | --- | ---
Email | `email` | For entering an email address with browser validation
Number | `number` | For entering a number with browser validation
Range | `range` | A slider for selecting a number
URL | `url` | An input for URL with browser validation

  </TabItem>

  <TabItem value="wordpress" label="WordPress">

These are field types that help you select a WordPress object.

Type | Key | Description
--- | --- | ---
Post | `post` | For selecting posts
Sidebar | `sidebar` | For selecting sidebars
Taxonomy | `taxonomy` | For selecting taxonomy terms. Doesn't save term IDs in post meta, but set post terms.
Taxonomy advanced | `taxonomy_advanced` | For selecting taxonomy terms and saving term IDs in post meta as a comma-separated string. It doesn't set post terms.
User | `user` | For selecting users

  </TabItem>

  <TabItem value="upload" label="Upload">

These are field types that help you upload media files.

Type | Key | Description
--- | --- | ---
File | `file` | Simple file upload with default UI like `<input type="file" />`. Not recommended. Use File advanced instead.
File advanced | `file_advanced` | Multiple file uploads with WordPress media popup
File input | `file_input` | A text input for entering a file URL with the ability to select a file from the Media Library
File upload | `file_upload` | Multiple file uploads with a drag and drop area
Image | `image` | Simple image upload with default UI like `<input type="file" />`. Not recommended. Use Image advanced instead.
Image advanced | `image_advanced` | Multiple image uploads with WordPress media popup, usually used for a gallery
Image upload | `image_upload` | Multiple image uploads with a drag and drop area
Single image | `single_image` | Single image upload with WordPress media popup
Video | `video` | Multiple video uploads with WordPress media popup

  </TabItem>

  <TabItem value="layout" label="Layout">

These are field types that help you organize and improve the UI of the fields.

Type | Key | Description
--- | --- | ---
Divider | `divider` | Simple horizontal line
Heading | `heading` | Heading text
Group | `group` | For creating nesting groups of fields. Requires [MB Group](/extensions/meta-box-group/) extension.
Tab | `tab` | For organizing fields in tabs. Requires [MB Tabs](/extensions/meta-box-tabs/) extension.

  </TabItem>

</Tabs>

### Field settings

Each field contains settings to determine where and how data is loaded and saved. All fields share some common settings, but also offer unique settings per field type. There are also settings from extensions which are explained on each extension docs.

Below is the list of settings with a brief description. The keys are for reference in code.

<Tabs>

  <TabItem value="general" label="General">

![general settings](https://i.imgur.com/MJ3JRiT.png)

Name | Key | Description
--- | --- | ---
Label | `name` | Field label. Optional. If empty, the field input is 100% width.
ID | `id` | Field ID. Required and must be unique. **It will be used as `meta_key` when saving to the database**. Use only numbers, letters, and underscores (and rarely dashes).
Type | `type` | Field type. Required.
Label description | `label_description` | Label description, displayed below the field label. Optional.
Input description | `desc` | Field description, displayed below the field input. Optional.
Default value | `std` | Default value. Optional.
Placeholder | `placeholder` | Placeholder text for the input or select box. Optional.
Required | `required` | Whether the field is required (`true` or `false`). Optional. Default `false`.
Disabled | `disabled` | Whether the field is disabled (`true` or `false`). Optional. Default `false`.
Read only | `readonly` | Whether the field is read only (`true` or `false`). Optional. Default `false`.
Multiple | `multiple`|Does the field have multiple values (like the `select` field)? Optional. Default `false`.
Cloneable | `clone` | Is the field clonable (repeatable)? `true` or `false`. Optional. Default `false`.
Sortable | `sort_clone`|Ability to drag-and-drop reorder clones (`true` or `false`). Optional. Default `false`.
Clone default value | `clone_default`|Clone the default value of fields? `true` or `false` (default).
Clone as multiple | `clone_as_multiple`|Whether to store clone values in multiple rows in the database? Optional. Default `false`.
Max number of clones | `max_clone`|Maximum number of clones. Optional. Default `0` (unlimited).
Min number of clones | `min_clone`|Minimum number of clones. Optional. Default `0`.
Add more text | `add_button`|The text for **Add more** clone button. Optional. Default "+ Add more".

  </TabItem>

  <TabItem value="advanced" label="Advanced">

![advanced settings](https://i.imgur.com/jX7YDH3.png)

Name | Key | Description
--- | --- | ---
Before | `before` | Custom HTML outputted before field's HTML.
After | `after` | Custom HTML outputted after field's HTML.
Custom CSS class | `class` | Custom CSS class, in case you want to customize the field. Optional.
Custom sanitize callback | `sanitize_callback` | Custom PHP callback for sanitizing field value before saving into the database. Set it to `none` to bypass the sanitization. See [more details](/sanitization/).
Save field value | `save_field` | Whether to save field value. Optional. Default `true`. This option doesn't work in the block editor (Gutenberg).
Custom HTML5 attributes | `attributes` | Custom attributes for inputs. See [more details](/custom-attributes/).
Validation | `validation` | Validation rules for fields. Optional. See [more details](/validation/).
Custom settings | N/A | Custom field settings, useful when you want to add your settings to fields.

  </TabItem>

</Tabs>

:::tip Field ID prefix

You can add a prefix to field IDs to prevent from using the same ID with other scripts. If you want to hide the fields in the default WordPress **Custom Fields** meta box, use underscore (`_`) as the prefix.

:::

### Field-specific settings

Besides all common settings, each field type can have its own settings. Please see more details for each field type on the left menu.

:::tip Code examples

To save time read and write settings for fields, we've already prepared some code examples that you can get from [Meta Box Code Snippet Library](https://github.com/wpmetabox/library/).

:::

### Shorthand syntax

For **text** field type, you can omit the `type` settings, like this:

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
            // highlight-start
            [
                'name' => 'Location',
                'id'   => 'location',
            ],
            // highlight-end
            [
                'name'          => 'Map',
                'id'            => 'map',
                'type'          => 'osm',
                'address_field' => 'location',
            ],
        ],
    ];

    return $meta_boxes;
} );
```

And if the `id` of the field can be auto-generated from the field name, you can omit it and **define the field as a simple string**:

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
            // highlight-next-line
            'Location',
            [
                'name'          => 'Map',
                'id'            => 'map',
                'type'          => 'osm',
                'address_field' => 'location',
            ],
        ],
    ];

    return $meta_boxes;
} );
```

## Video tutorial

This video shows you all the field types and field settings:

<LiteYouTubeEmbed id='WWeaM5vIAwM' />

## FAQ

<FAQ question="Why does not my default value work?">

The mechanism of `std` in Meta Box works only if the **field group has not been saved before**. It means all fields in that field group, not just the specific field that you set the `std` for. So if there's any field that already has value, then `std` won't work for other fields, even new fields you've just added.

Examples:

When you create a new post, then no fields have values (of course), then `std` works for all fields.

When you edit an existing post that has a field group, then some fields might have values. Therefore, `std` doesn't work for all fields. In this case, if you edit the field group and add a new field, `std` still doesn't work for that new field (even it has no value before), because the field group has been saved before.

</FAQ>

<FAQ question="Why does not my context work?">

There are some situations that the context doesn't work as expected. That is probably because you have dragged and dropped the field groups to reorder them? If you have, then WordPress will save the position/location of them and use the saved position instead of the value in the `context` parameter. The order of field groups is saved in the user meta `meta-box-order_{screen id}` as follows:

![meta box order](https://i.imgur.com/A7bkxT9.png)

In this case, deleting this user meta from the database will make the context work again.

</FAQ>