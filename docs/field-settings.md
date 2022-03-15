---
title: Field settings
displayed_sidebar: sidebar
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Each field contains settings to determine where and how data is loaded and saved. All fields share some common settings, but also offer unique settings per field type. There are also settings from extensions which are explained on each extension docs.

## Field types

When adding a field, you need to know what type it is and how it works. Understanding that helps you choose the right type of field and, therefore, the right type of data that you want to add to your posts.

Below is the list of supported field types in alphabet order with a brief description. The field type key is used for reference in code. For how do they look like and how to use them, please see details in the [Fields](/category/fields/) menu.

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
Datetime local | `datetime-local` | Date and time picker. Not recommended, use Datetime picker field type instead.
Email | `email` | For entering an email address with browser validation
Month | `month` | Month picker
Number | `number` | For entering a number with browser validation
Range | `range` | A slider for selecting a number
Phone number | `tel` | For entering a formatted phone number
URL | `url` | An input for URL with browser validation
Week | `week` | Week picker

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
Group | `group` | For creating nesting groups of fields. Requires [Meta Box Group](/extensions/meta-box-group/) extension.
Tab | `tab` | For organizing fields in tabs. Requires [Meta Box Tabs](/extensions/meta-box-tabs/) extension.

  </TabItem>

</Tabs>

To understand field types, please see this video below:

<LiteYouTubeEmbed id='WWeaM5vIAwM' />

## Common settings

Each field contains settings to determine where and how data is loaded and saved. All fields share some common settings, but also offer unique settings per field type. There are also settings from extensions which are explained on each extension docs.

Below is the list of settings with a brief description. The key is used for reference in code.

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

:::tip

You can (should) add a prefix to field IDs to prevent from using the same ID with other scripts. If you want to hide the fields in the default WordPress **Custom Fields** meta box, use underscore (`_`) as the prefix.

:::

## Field-specific settings

Besides all common settings, each field type can have its own settings. Please see more details for each field type on the left menu (section "Fields").

:::tip

To save time read and write settings for fields, we've already prepared some code examples that you can get from [Meta Box Code Snippet Library](https://github.com/wpmetabox/library/).

:::

## Customize field settings

Outside of the "Edit field group" UI, it is possible to modify a field's settings via the [rwmb_normalize_field](/filters/#rwmb_normalize_field) filter. This filter exposes the `$field` settings array for each field and allows customization to all settings.

This example shows how to modify a specific field (called `customer_name`) via this filter to customize settings unavailable to the UI.

```php
add_filter( 'rwmb_normalize_customer_name_field', function( $field ) {
	$field['required'] = true;
	$field['size'] = 20;
	$field['placeholder'] = 'Mark Cuban';

	return $field;
} );
```
