---
title: Single image
---

import Screenshots from '@site/src/components/Screenshots';

The single image field allows users to select or upload one image via the WordPress media library.

## Screenshots

<Screenshots
    name="single-image"
    col1={[
        ['https://imgur.elightup.com/c7Pa4eH.png', 'The single image field interface'],
    ]}
/>

## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings, the keys are for use with code:

Name | Key | Description
--- | --- | ---
Force delete | `force_delete` | Whether or not delete the files from Media Library when deleting them from post meta. `true` or `false` (default). Optional. Note: it might affect other posts if you use the same file for multiple posts.
Image size | `image_size` | Image size displays in the edit page. Optional. Default "thumbnail". Image size is used to make sure images are not blurry. It’s not meant to display images with the exact width and height. Images are always displayed as a square.

This is a sample field settings array when creating this field with code:

```php
[
    'type' => 'single_image',
    'name' => 'Single Image',
    'id'   => 'my_image',
],
```

## Data

This field saves the attachment ID in the database.

## Template usage

**Displaying uploaded image:**

```php
<?php $image = rwmb_meta( 'my_field_id', ['size' => 'thumbnail'] ); ?>
<h3>Logo</h3>
<img src="<?= $image['url']; ?>">
```

or simpler:

```php
<h3>Logo</h3>
<?php rwmb_the_value( 'my_field_id', ['size' => 'thumbnail'] ) ?>
```

`rwmb_the_value()` outputs the image, and `rwmb_meta()` returns an array of image details:

```php
[
    'ID'          => 123,
    'name'        => 'logo-150x80.png',
    'path'        => '/var/www/wp-content/uploads/logo-150x80.png',
    'url'         => 'https://example.com/wp-content/uploads/logo-150x80.png',
    'width'       => 150,
    'height'      => 80,
    'full_url'    => 'https://example.com/wp-content/uploads/logo.png',
    'title'       => 'Logo',
    'caption'     => 'Logo caption',
    'description' => 'Used in the header',
    'alt'         => 'Logo ALT text',
    'srcset'      => 'large.jpg 1920w, medium.jpg 960w, small.jpg 480w', // List of responsive image src
    'sizes'       => [], // List of image sizes. See https://developer.wordpress.org/reference/functions/wp_get_attachment_metadata/
    'image_meta'  => [], // List of image meta. See https://developer.wordpress.org/reference/functions/wp_get_attachment_metadata/
];
```

**Display the image with link to the full-size version (for lightbox effect):**

```php
<?php $image = rwmb_meta( 'my_field_id', ['size' => 'thumbnail'] ); ?>
<h3>Logo</h3>
<a href="<?= $image['full_url'] ?>"><img src="<?= $image['url']; ?>"></a>
```

or simpler:

```php
<h3>Logo</h3>
<?php rwmb_the_value( 'my_field_id', ['size' => 'thumbnail', 'link' => true] ) ?>
```

The 2nd argument for `rwmb_meta()` and `rwmb_the_value()` is an array of extra parameters and accepts the following parameters:

Name|Description
---|---
`size`|Image size returned. Optional. Default `thumbnail`.
`link`|Set to `true` to show a link to the full-size version. Default `false`.

## Filters

This field inherits from image advanced and thus, uses the [same filters](/fields/image-advanced/) to change the texts displayed on the screen.

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