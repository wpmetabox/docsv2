---
title: Image Upload
---

import Image from '../_parts/_image.md';
import Screenshots from '@site/src/components/Screenshots';

The image upload field displays an inline upload area that you can drag and drop or select images to upload.

## Screenshots

<Screenshots
    name="image-upload"
    col1={[
        ['https://i.imgur.com/Ev4iwoQ.png', 'The image upload field interface'],
    ]}
/>

## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings, the keys are for use with code:

Name | Key | Description
--- | --- | ---
Max number of files | `max_file_uploads` | Max number of uploaded files. Optional.
Force delete | `force_delete` | Whether or not delete the files from Media Library when deleting them from post meta. `true` or `false` (default). Optional. Note: it might affect other posts if you use the same file for multiple posts.
Show status | `max_status` | Display how many files uploaded/remaining. Applied only when "Max number of files" is defined. `true` (default) or `false`. Optional.
Image size | `image_size` | Image size displays in the edit page. Optional. Default "thumbnail". Image size is used to make sure images are not blurry. It’s not meant to display images with the exact width and height. Images are always displayed as a square.
New image placement | `add_to` | Whether to add new images to the beginning or the end of the list. `beginning` or `end`. Default `end`. Optional.
Max file size | `max_file_size` | Maximum file size that the user can upload, in bytes. Optionally supports b, kb, mb, gb, tb suffixes. e.g. "10mb" or "1gb".

This is a sample field settings array when creating this field with code:

```php
[
    'id'               => 'image',
    'name'             => 'Image upload',
    'type'             => 'image_upload',
    'force_delete'     => false,
    'max_file_uploads' => 2,
    'max_status'       => false,
    'image_size'       => 'medium',
],
```

## Data

This field saves multiple attachment IDs in the database. Each value (attachment ID) is stored in a single row in the database with the same meta key (similar to what `add_post_meta` does with the last parameter `false`).

## Template usage

<Image />

## Filters

This field inherits from file advanced and thus, uses the [same filters](/fields/file-advanced/) to change the texts displaying on the screen.

Filter|Default|Description
---|---|---
`rwmb_media_add_string`|+ Add Media|Add new image string
`rwmb_media_single_images_string`|image|Singular "image" string
`rwmb_media_multiple_images_string`|images|Plural "images" string
`rwmb_media_remove_string`|Remove|Image remove string
`rwmb_media_edit_string`|Edit|Image edit string
`rwmb_media_view_string`|View|Image view string

The code below changes the "+ Add Media" string:

```php
add_filter( 'rwmb_media_add_string', 'prefix_change_add_string' );
function prefix_change_add_string() {
    return '+ New Image';
}
```

## Tutorials

[How to display uploaded images as a WordPress image gallery?](https://metabox.io/display-uploaded-images-as-wordpress-image-gallery/)


