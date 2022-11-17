---
title: Displaying images as gallery
---

By using a custom field in the type of [Image Advanced](https://metabox.io/docs/fields/image-advanced/), let’s see how to display the images uploaded into this field as a WordPress image gallery.

![Example of image gallery](https://i.imgur.com/U5bPBEK.png)

## Step 1: Create a custom field

I will create **Image Advanced** field for showing the gallery. Go to **Meta Box > Custom Fields > Add New**.

![Create custom field](https://i.imgur.com/znm7zsk.png)

After creating that field, move to the **Settings** tab, choose **Location** as **Post Type** and select Post or Page, or any post type you want to display the gallery.

![Set Location for the custom fields as post type](https://i.imgur.com/3Nwg3GM.png)

Then, you will see the created field in the post editor. Click in **Add Media** to add more images.

![https://i.imgur.com/JdyvOSy.png

## Step 2: Display gallery on the frontend

The way to display uploaded images in a WordPress gallery is quite simple: get the image IDs, put them in the gallery shortcode and run it. In this practice, we will display it on the frontend in two ways: (1) adding code to the theme's template file, and (2) using MB Views.

### Method 1: Adding code to the theme’s file

To display the gallery on the frontend, copy and insert the below code to your WordPress theme's file, such as `single.php`.

```php
$images = rwmb_meta( 'field_id' );
$image_ids = array_keys( $images );
$shortcode = '[' . 'gallery ids="' . implode( ',', $image_ids ) . '"]';
echo do_shortcode( $shortcode );
```

Or if you prefer one-line version:
```
echo do_shortcode( '[' . 'gallery ids="' . implode( ',', array_keys( rwmb_meta( 'field_id' ) ) ) . '"]' );
```
**Note**:

* `array_keys( $images )`: extract returned key of ‘field_id’;
* `'[' . 'gallery ids="' . implode( ',', $image_ids ) . '"]'`: merge all images into 1 gallery.

You can add attributes to the gallery shortcode such as the number of columns (`column`) or the image size (`size`). You can find the full list of attributes for the `gallery` shortcode [here](https://codex.wordpress.org/Gallery_Shortcode).

Then, go to the page, you will see the gallery.

### Method 2: Using MB Views

Go to **Meta Box > Views > Add New** to create a template. Click in **Insert Field** to get data from the image advanced field.

![Create a template](https://i.imgur.com/augoEfJ.gif)

After setting the location for displaying the gallery. Back to the frontend, you will see the galley.

No matter which method you used, the results will be like this:

![The result after all steps](https://i.imgur.com/U5bPBEK.png)

