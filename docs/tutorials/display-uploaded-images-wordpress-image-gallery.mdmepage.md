---
title: Displaying uploaded images as a WordPress image gallery
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Sometimes, you may want to show product images, a portfolio, or just a photography album on your site. So, the image gallery is very helpful. You can upload images to your website via a custom field then **display them as a gallery** on a page.

Specifically, we’ll use a custom field in the type of **Image Advanced** for uploading multiple images, then display them as an image gallery on a page. I will create a simple one like this.

![Display uploaded images as a WordPress image gallery](https://i.imgur.com/zpncoql.gif)

This task will be very easy-to-do with some **lines of code added to the theme’s files**, or simpler with the help of **MB Views**. It’s an extension of Meta Box. So let’s see how we do it in both ways.

## Video Version

<LiteYouTubeEmbed id='6_gpRrPRh8E'/>

## Preparation

We’ll need some tools for this practice:

First, we need the [Meta Box core plugin](https://wordpress.org/plugins/meta-box/) to have a framework for creating the custom field. It’s available on [wordpress.org](https://wordpress.org/plugins/meta-box/).

Next, we may need some advanced features from the **Meta Box** extensions. You can download them individually or use **Meta Box AIO** to have them all.

* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI in the backend to visually create a custom field to save images;
* [MB Views](https://metabox.io/plugins/mb-views/): to get images from the custom field and display them on the page without touching the theme’s files. But it is optional since you have another method to do it with PHP.

## 1. Creating a page and custom field

In the real case, you can add the gallery to any premade page or settings page. But in this practice, I will create a new one to display only the gallery to simplify the content. Now, go to **Pages** > **Add New** to create a new page.

![Create a new page](https://i.imgur.com/JsWdMUU.png)

I leave this page blank since I will add the gallery to this page later.

![Leave this page blank since I will add the gallery to this page later](https://i.imgur.com/CiS4fR1.png)

For the custom field to save images, I will create it now and assign it to this page.

Go to **Meta Box** > **Custom Fields** and create that field.

![Go to Meta Box > Custom Fields and create that field.](https://i.imgur.com/KEqd0ZH.png)

The field should be the **Image Advance**d type, which allows uploading multiple images.

![The Image Advanced type allows uploading multiple images.](https://i.imgur.com/uTTRyfA.png)

Now, go to the **Settings** tab, set the **Location** as **Post type**, and choose **Page**. Since we created a page for it, go to the **Advanced location rules** section below and choose the name of the page.

![Set the location to apply the custom field to the page.](https://i.imgur.com/qsSafV2.png)

No matter where you put the field, you can still get images and display them in the desired place.

On my page editor, you can see the field displayed.

![The field displayed on the post editor](https://i.imgur.com/rrsvh0z.png)

Just add some images.

## 2. Displaying images as a gallery

In the case that you are not using any page builder to build your website, you can use these two ways to have a gallery from the images uploaded into the field:

* **Using PHP**: We’ll add some lines of code to the theme’s files. It is not as complicated as common thinking. Just follow this practice with some simple git.
* **Using MB Views** from Meta Box: It will do almost the code for you without touching theme’s files, so you just need to click and click. Even when you are using any page builder, you can also use the **MB Views** following this instruction to have your wish gallery on frontend.

We highly recommend you use **MB Views** because of its various advantages. By the way, if you want the gallery to have the best look and be in the style of a slider, as I will do, you should use a JavaScript library for it as **Slick Slider** as I’ll use. So, **to make it to be a slider, you definitely need to add code, no matter which method you are using**.

### 2.1 Using PHP

Go to the **functions.php** file and add these lines of code.

![Add code to the functions.php file](https://i.imgur.com/EflBRwW.png)

**In there**:

* `rwmb_meta( 'image_gallery', ['size' => 'large'] )`: is the function to get the value of custom fields.
* `image_gallery`: is the ID of the custom field that we used to save images.
* These lines of code in the image below are just for styling later.

![These codes are just for styling later.](https://i.imgur.com/lzcdYRv.png)

Since we'll save multiple images in the fields, we should use a loop to get and display all of them.

![Use a loop to get and display all of the images](https://i.imgur.com/ipbBy0C.png)

* `add_shortcode( 'brand_image', 'get_image_field' );` is to create a shortcode named `brand_image`. We will use this shortcode to put the gallery anywhere we want.

Now, go to a page and also add a **Shortcode** block.

![Add a Shortcode block](https://i.imgur.com/msHRyxG.png)

Then input the created shortcode into the box.

![Input the created shortcode into the box](https://i.imgur.com/dhJ8YSY.png)

Now all of the images are displayed on the page.

![The images are displayed on the page.](https://i.imgur.com/RqjmOc8.png)

### 2.2 Using MB Views

Go to **Meta Box** > **Views** to create a new template that we will use for the gallery.

![Create a new template for the gallery.](https://i.imgur.com/UfRUvDX.png)

Click on the **Insert Field** button and look for the name of the field that we input images in the right sidebar.

![Insert the Image Gallery field](https://i.imgur.com/MssHlpW.png)

You can choose an option for the size of the output images.

![Choose an option for the size of the output images](https://i.imgur.com/oAX3zsn.png)

Then some lines of code will be added to the template automatically.

![Some lines of code will be added to the template automatically.](https://i.imgur.com/LCd2QeO.png)

That’s all you need to get and display the images.

Now, go to the settings of the template, and you can choose a location to display the gallery. If you have a specific page, just choose it. But in most cases, we should set this template as a shortcode, then you can add this shortcode to any place on your site.

![Set this template as a shortcode](https://i.imgur.com/EOyDFRw.png)

Then, there will be a shortcode generated. Just copy and paste it anywhere you want.

![Copy and paste the shortcode anywhere you want.](https://i.imgur.com/UfzaRnx.png)

Go to the page editor, add a **Shortcode** block, and paste the created one.

![Add a Shortcode block](https://i.imgur.com/q6hJ5Bs.png)

On the frontend, the image gallery displays already, as we used PHP.

![The image gallery displays already, as we used PHP](https://i.imgur.com/RqjmOc8.png)

The next work is styling it.

## 3. Styling the gallery

No matter which method you are using, you should use CSS and JS if you want to have a slider with a good look for the gallery.

You can use a 3rd-party library or make it yourself. In this case, I’ll use **Slick Slider**.

![Slick Slider library](https://i.imgur.com/p0SbcoW.png)

You can add files or the code above ò the library to the theme’s files or the template created with **MB Views**. The code will be quite the same.

Since I recommend you use **MB Views**, I will follow the second method. Go to the created template and add some lines of code to declare the library.

![Add some lines of code to declare the library in the created template](https://i.imgur.com/06TouC4.png)

I’ll also add some div tags and classes into the code, which is the loop.

![Add some div tags and classes into the code](https://i.imgur.com/WkQduEt.png)

Then, move to the **CSS** tab and the **JavaScript** tab, add some codes.

![Add code to the CSS tab and the JavaScript tab](https://i.imgur.com/detC0uF.png)

The code in the **JavaScript** tab above is to create a slider for the gallery. All of these codes I used are also available on [GitHub](https://github.com/wpmetabox/tutorials/tree/master/displaying-images-as-gallery), so you can refer to them.

After updating the template, you will see a gallery in the style of a slider on the page.

![A gallery in the style of a slider on the page](https://i.imgur.com/zpncoql.gif)

## Last Words

I hope this tut helpful for you guys. If you want to see more about how to use the Image Advanced custom field to display an image gallery, please dig into the tut on [creating product pages](https://docs.metabox.io/tutorials/create-product-page/).

In case you want to display an image gallery along with some information associated with the image, you can refer to another way: [display images from cloneable fields](https://docs.metabox.io/tutorials/display-images-cloneable-fields-mb-views/).
