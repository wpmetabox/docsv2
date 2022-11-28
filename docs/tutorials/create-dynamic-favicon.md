---
title: Creating dynamic favicon in WordPress 
---

Favicon is a small icon on the browser tab that helps to attract and create a memorable image of the brand in the user’s mind. It is typically 16x16 pixels in size and is kept in a file called `favicon.io` in the server's root folder. Using Meta Box plugin and editing the theme a little bit will help you get it easily. 

Here is my example: 

![Example of dynamic favicon](https://i.imgur.com/2Pvq4fh.png)

## Before Getting Started

In addition to using the [Meta Box](https://metabox.io), make sure you already have [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/). It allows you to create custom fields in the back end using an intuitive UI without coding.

Also, to make a dynamic favicon, you must do some things with the theme. I'm making this tutorial with the help of [Justread from Gretathemes](https://gretathemes.com/wordpress-themes/justread/). It's free and fast, so you could give it a try.

## Step 1: Create a new post type

Go to **Meta Box > Custom Post Type > New Post Type**.

![create a new post type](https://i.imgur.com/TieNS3U.png)

Then, name it and publish.

![Name the created post type](https://i.imgur.com/oOYhUT4.png)

## Step 2: Add a new custom field

Go to **Meta Box** menu > **Custom Fields > Add New**.

![Add a new custom field](https://i.imgur.com/ca5hFyG.png)

Add the **Single Image** field and set its name as **Favicon** to upload an image 

![Add the Single imgae field](https://i.imgur.com/DVIyUSH.png)

After filling in the information, move to the **Settings** tab. Then, set the **Location** to any post type you want. For example, I save it as **Product**.

![Set location for the fields](https://i.imgur.com/7IZclY9.png)

Go back to the edit page of the product post. You will see the field and can add an image to the field.

![The fiedls will be shown](https://i.imgur.com/faszUxs.png)

## Step 3: Set the field’s value to be favicon

The current favicon of your product page is now the site’s one. Thus, we will replace it with the custom field’s value.

Put the below code into the `functions.php` file in your theme folder.

```php
function prefix_dynamic_favicon(){
   if ( ! is_singular( 'product' ) ) {
   return;
   }

   $favicon = rwmb_meta( 'favicon', array( 'size' => 'thumbnail' ) );
   $favicon = $favicon ? $favicon['url'] : get_site_icon_url();

   echo "<link rel='shortcut icon' href='$favicon' sizes='32x32' type='image/x-icon'>";
}
add_action( 'wp_head', 'prefix_dynamic_favicon' );
```

This code is to check on the singular page of the `product` post type whether the Favicon field has value or not. If not blank, the image in the field becomes the favicon. Otherwise, the website's favicon appears.

I used `wp_head` to add this code to the head of the page.

In the above code, please note that:

* `get_site_icon_url()`: allows us to get the URL of the website’s favicon. It returns a value that is a URL.

* `rwmb_meta( 'favicon' )`: gets value of the field which has the ID as `favicon`.

* `Array ( ‘size’ => ‘thumbnail’)`: is the image size of the favicon.

If you need any further parameters for the image field, [this documentation](https://docs.metabox.io/fields/image/#template-usage) is for your quick reference.

Save the `functions.php` file and go to the product page. You will see the image displayed as the favicon:

![The final result](https://i.imgur.com/RVLyjAd.png)
