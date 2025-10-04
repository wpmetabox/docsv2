---
title: Automatically adding alt text to uploaded images
---

The alternative text (Alt text) plays an important role in improving your website's SEO and image rankings. However, manually adding alt-text to every uploaded image in WordPress can be time-consuming, especially for sites that frequently upload large amounts of media.

Fortunately, Meta Box can make this process automatic. So, let’s explore the way to **add alt text for images effortlessly** using the **Meta Box custom field and action hook**.

## Why Should We Use Action Hook to Automate Alt Text in WordPress?

Using an action hook to automatically add alt text is not only more convenient but also more effective. As a result, managing media alt text is optimized.

### Benefits of Automatically Adding Alt Text

Each website usually has thousands of images. And it would be a nightmare to have to add alt text to uploaded images by hand. So, automating set alt text helps you **save time and effort significantly**.

Moreover, you can **avoid missing** filling in the alternative text for the uploaded image. Then, the result on Google Image Search is improved.

### Benefits of Using Action Hook and Custom Fields

Many users are used to uploading images manually to WordPress. However, I suggest a more optimal method: using a custom field since it’s helpful to get the alt text effortlessly via the `rwmb_{field_id}_after_save_field` action hook.

As you may know, custom fields are used for dynamic content. Therefore, you can update images easily without affecting the WordPress core.

[`rwmb_after_save_field`](https://docs.metabox.io/actions/rwmb-after-save-field/) is a Meta Box action hook that runs after a field is saved. And, `rwmb_{field_id}_after_save_field` is one of its variations. It applies to a field with a particular ID. Using this action, **adding alt text will be automatic, dynamic, and flexible**.

You can also specify where the image alt text should come from. It could be the image name, description, or anything else. In this article, I will use the image name as an example.

## Adding image alt text automatically

Before starting, you should install [Meta Box Lite](https://metabox.io/lite/) on your site to have a UI on the backend to visually create a custom field for uploading images. It’s free.

As the method I mentioned above, we’ll use a custom field for uploading images, then use the `rwmb_{field_id}_after_save_field` action hook to set alt text for them.

### Creating a custom field to upload images

Right on the admin dashboard of Meta Box, click on the **Create a field group** quick button.

![Create a new field group](https://imgur.elightup.com/PhEnumD.png)

Besides custom fields to store extra information about the post type or page, add a new field to upload the image in the backend. Meta Box provides two field types for it: **Single Image** (to add an image) and **Image Advanced** (to add many images). For demonstration purposes, I add the **Single Image** field.

![Add a Single image field](https://imgur.elightup.com/pNgK4i3.png)

You should remember the field ID. It’ll be used to set the alt text in the next step.

### Adding action hook to the themes file

Go to your themes file and add this code:

```
add_action( 'rwmb_{field_id}_after_save_field', function ( $new, $old, $object_id ) {
    $alt_text = get_the_title( $object_id );
    update_post_meta( $object_id, '_wp_attachment_image_alt', $alt_text );
}, 10, 3 );
```

![Add code to the themes file to add alt text automatically](https://imgur.elightup.com/Mxim2JU.png)

**Explanation**:

* `rwmb_{field_id}_after_save_field`: is a Meta Box action hook that triggers after a specific field is saved. It runs only when that field is updated.
* `$new`, `$old`, `$object_id`: are the parameters of this action.
* `$alt_text = get_the_title( $object_id )`: is to retrieves the title of the post or attachment with the given ID, then assign to the `alt_text` variable.
* `update_post_meta( $object_id, '_wp_attachment_image_alt', $alt_text )`: is to get data from the `alt_text` variable to assign to the alt text image through `wp_attachment_image_alt`. It is the meta key used by WordPress to store alt text for images.

That’s done.

In the case that you use the **Image Advanced** field in the previous step, the code will be like this:

```
add_action( 'rwmb_{field_id}_after_save_field', function ( $new, $old, $object_id ) {
    foreach ( $object_id as $image_id ) {
        $alt_text = get_the_title( $image_id );
        update_post_meta( $image_id, '_wp_attachment_image_alt', $alt_text );
    }
}, 10, 3 );
```

There is only one difference here: You should retrieve each image and its title via the `image_id` instead of the `object_id`.

### Uploading image

Go to the post editor, you can see the field you created. Click on the + Add Media button to upload an image.

![Click on the + Add media to upload image](https://imgur.elightup.com/nAlQmmb.png)

The alt text is blank now. You don’t need to type it as previously.

![The alt text is blank now](https://imgur.elightup.com/FARK10u.png)

After displaying the image on the frontend using MB Views or any page builders, you can see the alt text is created automatically.

![The alt text is added automatically.](https://imgur.elightup.com/9x87o7N.png)
