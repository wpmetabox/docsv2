**Displaying uploaded images:**

```php
<?php $images = rwmb_meta( 'my_field_id', ['size' => 'thumbnail'] ); ?>
<h3>Uploaded images</h3>
<ul>
    <?php foreach ( $images as $image ) : ?>
        <li><img src="<?= $image['url']; ?>"></li>
    <?php endforeach ?>
</ul>
```

or simpler:

```php
<h3>Uploaded files</h3>
<?php rwmb_the_value( 'my_field_id', ['size' => 'thumbnail'] ) ?>
```

`rwmb_the_value()` outputs images in an unordered list, and `rwmb_meta()` returns an array of images, each image has the following information:

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

**Display images with links to the full-size versions (for lightbox effects):**

```php
<?php $images = rwmb_meta( 'my_field_id', ['size' => 'thumbnail'] ); ?>
<h3>Uploaded images</h3>
<ul>
    <?php foreach ( $images as $image ) : ?>
        <li><a href="<?= $image['full_url'] ?>"><img src="<?= $image['url']; ?>"></a></li>
    <?php endforeach ?>
</ul>
```

or simpler:

```php
<h3>Uploaded files</h3>
<?php rwmb_the_value( 'my_field_id', ['size' => 'thumbnail', 'link' => true] ) ?>
```

**Displaying only one image:**

```php
<?php $images = rwmb_meta( 'my_field_id', ['limit' => 1] ) ?>
<?php $image = reset( $images ) ?>
<img src="<?= $image['url']; ?>">
```

The 2nd argument for `rwmb_meta()` and `rwmb_the_value()` is an array of extra parameters and accepts the following parameters:

Name|Description
---|---
`size`|Image size returned. Optional. Default `thumbnail`.
`link`|Set to `true` to show a link to the full-size version. Default `false`.
`limit`|Limit the number of returned images.
