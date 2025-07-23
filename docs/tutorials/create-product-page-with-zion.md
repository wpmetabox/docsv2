---
title: Creating a product page - Meta Box + Zion
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

A well-designed product page can enhance the customer experience and lead to increased sales. It should include details like various information, images, and specifications to help customers make informed decisions. In this practice, we are going to find out how to **create a Product Page** using **Meta Box** and **Zion**.

Check out the car rental page I made as an example:

![Check out the car rental page I made as an example](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/demo.png)

## Video version

<LiteYouTubeEmbed id='f9dv1L9ZbjA' /> 

## Preparation

This page contains the product's detailed information and its gallery. It’s a singular page of your product post type. The name and description of the product are the title and content of the post. The remaining detailed information will be saved in the custom fields.

So, we need the [Meta Box AIO](https://metabox.io/aio/) to have the framework for creating custom post types and custom fields for your products. 

Besides, we need some Meta Box’s extensions for advanced features:

* [MB Custom Post Types](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the products.
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create custom fields easily.
* [MB Views](https://metabox.io/plugins/mb-views/): to create a template for displaying a gallery.

Finally, we need **Zion** and **its Pro version** to build the page.

## 1. Creating a custom post type

Go to **Meta Box** > **Post types** and create a new post type for your products.

![Go to Meta Box > Post types and create a new post type for your products](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/new%20post%20type.png)

After publishing, you will see a new menu displayed. It's your post type.

## 2. Creating custom fields

In this practice, I just create some basic fields for typical information of the product.

![I just create some basic fields for typical information of the product](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/cf%20demo.png)

Go to **Meta Box** > **Custom Fields** to create them one by one.
 
![Go to Meta Box > Custom Fields to create them one by one](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/add%20new%20field.png)

Choosing the **Number** field for numeric information, such as rental price, car year, and max passengers.
 
![Choosing the Number field for numeric information](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/number%20field.png) 

![rental price, car year, and max passengers](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/rental%20price%20car%20year%20max%20passengers.png)

About the max passengers' information, you can also enter numbers in the Min value and Max value boxes to limit the number of passengers.
 
![About the max passengers' information, you can also enter numbers in the Min value and Max value boxes to limit the number of passengers](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/minmax.png)

Next one, choose the **Select** field to contain selective information such as fuel, doors, gearbox. Fill in the options into the **Choice** box.
 
![choose the Select field to contain selective information](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/fuel%20doors%20gearbox.png)
 
![fuel, doors, gearbox](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/choicebox.png)
 
![Fill in the options into the Choice box](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/select.png)

For other information such as fuel usage, engine capacity, max luggage, select the **Text** field. In the **Input description** box, you can add some descriptions to add information to the field.
 
![select the Text field](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/text.png)
 
![fuel usage, engine capacity, max luggage](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/fuel%20usage%20engine%20capacity%20max%20luggage.png)
 
![In the Input description box, you can add some descriptions to add information to the field](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/input%20description.png)

The last field is the gallery, choose an **Image Advanced** field to allow the user upload multiple images.
 
![choose an Image Advanced field to allow the user upload multiple images](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/image%20advanced.png)
  
![The last field is the gallery](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/gallery.png)

After creating all the fields, move to the **Settings** tab, choose **Location** as **Post Type**, and then select **Car Rental** to apply these fields to this post type.
 
![After creating all the fields, move to the Settings tab, choose Location as Post Type, and then select Car Rental to apply these fields to this post type](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/location.png)

## 3. Creating a template for the product page

Go to the **Zion Builder** > **Theme builder** > **Add new template** to create a new template.

![Go to the Zion Builder > Theme builder > Add new template to create a new template](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/add%20new%20template.png)        

Then, in the list below, check the **All Car Rentals** option so that this template will be used for all posts of the post type. 
 
![Then, in the list below, check the All Car Rentals option so that this template will be used for all posts of the post type](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/all%20car%20rental.png)

**Add Body** to this template and now edit it.
 
![Add body to this template and now edit it](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/add%20body.png)

Go to the **Page options**, choose **Dynamic data review source**.
 
![Go to the Page option, choose Dynamic data review source](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/page%20option.png)

In the **Select** post, you can see the **Source type** and the post type name available. You can also choose the post of that post type to have a preview.

![In the Select post, you can see the Source type and the post type name available. You can also choose the post of that post type to have a preview](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/select%20post.png)

Now, add a **Section** to cover all of the product information. Add a **Column**.
 
![Now, add a Section to cover all of the product information. Add a Column](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/add%20section.png)

I’ll build the product page following the corresponding layout layout with two columns. The first one is for the gallery, and the rest is for other information. 
 
![I’ll build the product page following the corresponding layout layout with two columns. The first one is for the gallery, and the rest is for other information](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/demo%20column.png)

So, select the corresponding layout, and change the **Content orientation** to **horizontal**.
 
![So, select the corresponding layout, and change the Content orientation to horizontal](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/horizontal.png)

In the first column, we’ll display the image gallery of the product. However, **Zion** doesn’t support doing it. We need to use **MB Views** to have the gallery, then paste the shortcode generated from the view into this element. 

So, I added a **Shortcode** element.
 
![So, I added a Shortcode element](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/shortcode.png)

Next, we’ll move to **Meta Box** > **Views**, and create a new view for the gallery.
 
![Next, we’ll move to Meta Box > Views, and create a new view for the gallery](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/create%20a%20new%20view%20for%20the%20gallery.png)

I use the **Insert Field** button to find out which field stores the gallery. After selecting the image size, you can see the loop in the **Template** tab because there is more than one image.
 
![I use the Insert Field button to find out which field stores the gallery. After selecting the image size, you can see the loop in the Template tab because there is more than one image](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/loop.png)

After publishing, you can see the **Shortcode** I mentioned before. Just copy it and paste into **Zion**.
 
![After publishing, you can see the Shortcode I mentioned before](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/shortcode%20copy.png)
 
![Just copy it and paste into Zion](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/shortcode%20paste.png)

Now, we’ll get and display data for the second column.

First, add a **Heading** element for the product name. 
 
![First, add a Heading element for the product name](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/heading%20column.png)

Then, click on **Use dynamic data** and choose **Post title**.
 
![Then, click on Use dynamic data and choose Post title](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/dynamic%20data%20post%20tittle.png)

For the description, simply use a **Text** element. Also **use dynamic data**, and select **Post content**. 
 
![For the description, simply use a Text element](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/text%20description.png)
 
![Also use dynamic data, and select Post content](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/post%20content.png)

Next, to display the price, add a **Text** element as well. Its data is saved in a custom field created with **Meta Box**. So, you should **use dynamic data**, then find the **Meta Box Field**. 
 
![Next, to display the price, add a Text element as well. Its data is saved in a custom field created with Meta Box. So, you should use dynamic data, then find the Meta Box Field](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/dynamic%20data%20metabox%20field.png)

Inside the **Field options** pop-up, you can see the **Rental Price** field. Click on it, and the price will be shown.
 
![Inside the Field options pop-up, you can see the Rental Price field. Click on it, and the price will be shown](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/field%20popup.png)

Regarding the remaining information, they have the same style with 2 columns. The first one is the name of the product characteristic, and the second one is the value that is obtained from the custom fields.

![Regarding the remaining information, they have the same style with 2 columns. The first one is the name of the product characteristic, and the second one is the value that is obtained from the custom fields](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/demo%20column%20information.png)

Therefore, I add a **Column** element, then choose a suitable layout. 
 
![Therefore, I add a Column element, then choose a suitable layout](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/suitable%20layout.png)

I use the **Text** elements for both columns. For the left column, type the name in the **Content box**. 
 
![I use the Text elements for both columns. For the left column, type the name in the Content box](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/type%20name%20of%20content%20box.png)

In the right column, connect the text element to the custom field to get the data using the dynamic content. This process is similar to the price.
 
![In the right column, connect the text element to the custom field to get the data using the dynamic content. This process is similar to the price](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/dynamic%20data%20car%20year.png)

For the rest, do the same.

To save time, I duplicate it. Then, change the name and value to get the right one.
 
![To save time, I duplicate it. Then, change the name and value to get the right one](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/the%20rest.png)

We’ve just finished getting all of the information about the product. Let’s see how it displays on the frontend.

## 4. Styling the page

Back to the page editor with **Zion**. Just change some parameters and settings in the **Styling** and **Advanced** tab of each block.
 
![Back to the page editor with Zion. Just change some parameters and settings in the Styling and Advanced tab of each block](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/styling%20and%20advanced.png)

Now, it’s better, but the gallery hasn’t yet. To style it, back to the view on **Meta Box** that we created.

To transfer the separate images to the gallery, I’ll use some **CSS** and **JavaScript** libraries. So in the **Template** tab, I declared them.

First, add this code:

```
<div class="car-gallery">
{% for item in post.gallery %}
<img src="{{ item.full.url }}" width="{{ item.full.width }}" height="{{ item.full.height }}" alt="{{ item.full.alt }}">
```
 
![So in the Template tab, I declared them](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/code%20in-template%20tab.png)

Then, move to the **CSS** tab to add some code.
 
![Then, move to the CSS tab to add some code](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/code%20in-css.png)

Next, go to the **JavaScript** tab to add some code. This will display the images as a carousel.

```
jQuery(document).ready(function ($) {
$('.car-gallery').slick({
infinite: true,
arrows: true,
slidesToShow: 1,
slidesToScroll: 1,
dots: true,
});
});
```
 
![Next, go to the JavaScript tab to add some code. This will display the images as a carousel](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/code%20in-java.png)

In there:

`$('.car-gallery').slick({ `:  is to select the element with car-gallery

```
infinite: true,
arrows: true,
slidesToShow: 1,
slidesToScroll: 1,
dots: true,
```          

These are some attributes as the slider features, such as infinite looping; left and right navigation arrows; and others.

That’s done. Let’s see the page on the frontend. The slideshow works well.
 
![That’s done. Let’s see the page on the frontend. The slideshow works well](https://i0.wp.com/images.elightup.com/meta-box/blog/create-a-product-page/filter-demo.gif)

















