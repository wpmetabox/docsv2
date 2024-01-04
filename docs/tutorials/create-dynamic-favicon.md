---
title: Creating dynamic favicon in wordPress
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Do you recognize those tiny symbols that appear in your browser next to the website name? The favicon is that. The small icon helps to attract and create a memorable image of the brand in the user’s mind. It is typically 16 and 16 pixels in size and is kept in a file called favicon.io in the server's root folder. But, in some other cases, you may want to highlight your products or any page by setting other specific favicons for each of them. Then, using the Meta Box plugin along with editing the theme a little bit will help you get it.

This is the dynamic favicon we’ll create in today's practice. Let’s look at how to do it.

![Dynamic favicon we’ll create](https://i.imgur.com/cc7Mq7L.png)

## Video version

<LiteYouTubeEmbed id='Lb42Nv2Bkf0' />

## Preparation

In this practice, I will create dynamic favicons for my product pages. Each singular page of a product will have its own favicon.

So, to get started, we need some tools:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have the framework for creating the custom post type for the products and custom field for the favicons;
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for products;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a **UI** on the back end to create the custom field for the favicon easily.

## 1. Creating product pages

We should have product pages before adding favicons for them. You might have it on your site already. But if not, we have another tutorial to [create product pages](https://metabox.io/series/product-page/). You should follow it.

In this practice, I create a post type named **Product**.

![Create a post type named Product](https://i.imgur.com/g8piQG7.png)

## 2. Creating a custom field

I’ll create only one custom field to upload the favicon image. Each post of a product will have this field to save its own favicon. In the real case, you may want to create some other fields for extra information about the product.

Just go to the **Meta Box** and create them.

![Go to the Meta Box and create a new custom field](https://i.imgur.com/eDDbNQv.png)

In this case, I create only one field for the favicon in the type as **Single Image**.

![I create only one field for the favicon in the type as Single Image](https://i.imgur.com/O0S0ODL.png)

After creating the wanted fields, move to the **Settings** tab, set the **Location** as **Post type**, and select **Product** to apply the field to it.

![Move to the Settings tab, set the Location as Post type, and select Product to apply the field to it](https://i.imgur.com/Xt8koLp.png)

Now, when adding a new post on the **Products** post type, you’ll see the field.

![The field displayed](https://i.imgur.com/vwgGnpV.png)

Try to add an image to the field. Note that, since the favicon has the ratio as 1:1, you should choose an image with the same ratio to make sure that it will be displayed in the best way.

## 3. Setting the field’s value to be favicon

We should interfere with the theme to set the favicon as we want. You definitely can go to the theme’s files and add code. But, with **Meta Box**, we have the **MB Views** to indirectly interfere with the theme. In today’s practice, we will provide a guide for both ways. However, we still highly recommend using **MB Views** since the favicon will not be affected when you change or edit the theme.

### 3.1. Method 1: Adding code to theme’s file

We should add code to the theme’s files to add some functions for the fields.

![Add code to the theme’s files](https://i.imgur.com/o7zoZsh.png)

```
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

Since we will set the favicon for the singular page of the products only, we have the part to check if the current page is the singular page of the product post type or not. If not, it will do nothing. But if it is the wanted page, all the below lines of code will run and we will have the dynamic favicon on the page.

![The part to check if the current page is the singular page of the product post type or not](https://i.imgur.com/sQw7dkk.png)

First, I use the ` rwmb_meta( ) ` function to get the value of the field. '_favicon_' is the **ID** of the field that I save the favicon.

![The function to get the value of the field](https://i.imgur.com/AuP2ZaD.png)

There also will be some attributes in this function to regulate the output, you should follow the documentation for more details.

![Some attributes in this function to regulate the output](https://i.imgur.com/K47cBGc.png)

` $favicon = $favicon ? $favicon['url'] : get_site_icon_url(); : ` is to check if there is any image in the field. If not, it will get the default icon of the site.

![To check if there is any image in the field. If not, it will get the default icon of the site.](https://i.imgur.com/jZWgZjQ.png)

If the field has any image, echo ` "<link rel='shortcut icon' href='$favicon' sizes='32x32' type='image/x-icon'>"; ` will display it to be the favicon of the page.

![If the field has any image, codes will display it to be the favicon of the page](https://i.imgur.com/4eDPsQZ.png)

These attributes are the default of **HTML**, you should not change it.

![These attributes are the default of HTML](https://i.imgur.com/BppjdQF.png)

` wp_head ` is the hook that allows you to print the image to the header tag of the page.

![The hook that allows you to print the image to the header tag of the page](https://i.imgur.com/yV0rBq2.png)

Go back to the page on the frontend, and you’ll see the image from the field displayed as the favicon already.

![The image from the field displayed as the favicon already](https://i.imgur.com/7WYdYtK.png)

### 3.2. Method 2: Using MB Views

Go to **Views** in **Meta Box** and create a new view.

![Go to Views in Meta Box and create a new view](https://i.imgur.com/hsF0HW7.png)

We should get the image saved in the field, so click on the button. And choose the created field that we use for the favicon.

![Click on the button and choose the created field that we use for the favicon](https://i.imgur.com/ZIOawsr.png)

You can choose how the image will be output. We should choose the **Image URL** option.

![Choose how the image will be output](https://i.imgur.com/Aaq5skQ.png)

Next, change the code a bit to set it to the page title in the browser tab. It’s quite the same with the one we use with **PHP**.

![Change the code a bit to set it to the page title in the browser tab](https://i.imgur.com/ggZr5ck.png)

This is the one we get when inserting the field.

![This is the one we get when inserting the field](https://i.imgur.com/tjsn3zs.png)

Go down to the settings section of the view, and choose the type of the view as **Action**. Since we also use the hook as method 1 to interfere in the theme, set the **Action** name as the hook we want to use.

![Choose the type of the view as Action, and set the Action name as the hook we want to use](https://i.imgur.com/k9IJOs4.png)

In the **Run** on section, choose the type of page you want the favicon to display on.

![Choose the type of page you want the favicon to display on](https://i.imgur.com/4uzSttF.png)

Then, set the **Location** as the post type of your product. So, the view will be applied to all the singular pages of the **Product** post type.

![Set the Location as the post type of your product](https://i.imgur.com/RPzNMbf.png)

There is no need to use too much code anymore when using **MB Views**. After publishing the view, you also see the favicon.

![After publishing the view, you also see the favicon](https://i.imgur.com/Y3V72aK.png)
