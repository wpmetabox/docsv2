---
title: Adding custom fields to products in WooCommerce - Meta Box + Bricks
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed'; 
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

WooCommerce is a popular platform for eCommerce in WordPress which provides some information saved in the product data section. But, you still may need some things further that it does not provide, such as custom fields for extra information about products. Let’s dive in to explore how to display them with **Meta Box** and **Bricks**.

This is an example of a single page for products in WooCommerce that we will create in this practice.

![An example about a single page for products in WooCommerce](https://i.imgur.com/W9WCFGV.png)

## Video version

<LiteYouTubeEmbed id='Jzgd9IXj8fQ' />

## Preparation

Besides some information saved in the product data section that WooCommerce provides, we will add some extra information saved in custom fields created with Meta Box to the page as well.

![Information saved in WooCommerce and custom fields](https://i.imgur.com/oR7nisJ.png)

In this practice, we absolutely need **WooCommerce** to have some features for your products and shop.

For custom fields, we need the [Meta Box core plugin](https://wordpress.org/plugins/meta-box/) to have a framework to create them. You can download it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/).

We also need some advanced features from Meta Box which are from some of its extensions:

* [Meta Box Builde](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to create custom fields easily;
* [Meta Box Group](https://metabox.io/plugins/meta-box-group/): to group the fields together for better structure. It is optional;
* **Bricks** to help build the page.

## 1. Creating custom fields

Although WooCommerce provides some fields from basic to advanced to input the product information. You may want to have some other information for products in some cases. Then, custom fields will come handy.

These are the fields that I’ll create for example. They are just some basic fields for typical information.

![These are the fields created for extra information](https://i.imgur.com/X3DrA65.png)

Go to **Meta Box** > **Custom Fields** to create the fields.

![Go to Meta Box > Custom Fields to create the fields](https://i.imgur.com/Lj5XrQh.png)

Meta Box has [more than 50 field types](https://www.youtube.com/watch?v=WWeaM5vIAwM) that can meet almost any type of data you expect to input.

For the basic information, we use the **Text** field.

![This is Text fields for basic information](https://i.imgur.com/tUMWLE3.png)

I’ll create some fields that allow the user to choose one from the provided list in the **Select** type.

![Some fields that allow the user to choose one from the provided list in the Select type](https://i.imgur.com/OChNbOo.png)

There is a choice box to add options in the **Select** field type.

![A choice box to add options](https://i.imgur.com/9zLF3T2.png)

After having all the fields, move to the **Settings** tab, choose **Location** as **Post type**, and select **Product** to apply these fields to it.

![Move to the Settings tab, choose Location as Post type, and select Product to apply these fields](https://i.imgur.com/mc0maEH.png)

Pay attention that the product post type is auto-generated by WooCommerce. It is not the post type created with Meta Box.

![The product post type is auto-generated by WooCommerce](https://i.imgur.com/vYuBWSh.png)

Now when editing a product, you will see the created fields.

![These are the created fields](https://i.imgur.com/A8GjSZQ.png)

Just input some data.

![Input some data in the created fields](https://i.imgur.com/1eRx01O.png)

You still can add product data in the **Product data** section provided by Woocommerce. It does not affect the data in the custom fields at all, and vice versa.

![Some product data in the Product data section provided by Woocommerce](https://i.imgur.com/GxEe3dL.png)

## 2. Creating a template for the product page

Go to **Bricks** to create a new template for the product page.

![Go to Bricks and create a new template for the product page](https://i.imgur.com/ywEQAsO.png)

Select the template type as **Woocommerce Single Product**. Then, edit the created template with Bricks.

![Select the template type as Woocommerce Single Product](https://i.imgur.com/KBlGwgy.png)

Go to the settings of this template, set a condition to assign to **Product** in the Post type.

![Set a condition to assign to Product in the Post type](https://i.imgur.com/fYK1ZO4.png)

And, also set a preview for it in the **Populate content** section.

![Set a preview for it in the Populate content section](https://i.imgur.com/Hx9SYBu.png)

Add a **Section** for covering all the page content.

![Add a Section for covering all the page content](https://i.imgur.com/ay6EvkM.png)

### 2.1. Displaying the product information in WooCommerce

Now, I’ll display some information saved in the product data section that WooCommerce provides.

Choose the two columns layout for the **Container** inside the section. Then, add one by one element to display all the product information.

![Choose the two columns layout for the Container inside the section](https://i.imgur.com/M7c7Tmd.png)

At the top of the page content area, select **Breadcrumbs** element to generate the corresponding breadcrumbs for each single product page.

![Select Breadcrumbs element to generate the corresponding breadcrumbs](https://i.imgur.com/AovOXWi.png)

Bricks provides some elements that are specific for Woocommerce, so you can easily display the product information just by choosing the corresponding elements.

![Bricks provides some elements that are specific for Woocommerce](https://i.imgur.com/uFgXq3r.png)

Add the **Product gallery** element to display all the images from the Product gallery field provided by WooCommerce.

![Add the Product gallery element to display all the images](https://i.imgur.com/oh2uQ66.png)

For some information about products, add the **Product title** element then add the **Product price**. It’s also from a field provided by Woo.

![For some information about products, add the Product title element then add the Product price](https://i.imgur.com/hjPCe39.png)

I’ll choose the **Product Meta** element and then select **Product short description** to describe the product.

![Choose the Product Meta element and then select Product short description to describe the product](https://i.imgur.com/Hbsgm6C.png)

A product page also should have the **Add to cart** button and Bricks also provides a dedicated element to have this button for Woo.

![Choose Add to cart button for a product page](https://i.imgur.com/rhkttAi.png)

Moreover, Bricks also has a dedicated element for a popular section that displays the tabs of product details, review, comment, and so on.

![Bricks also has a dedicated element for a popular section](https://i.imgur.com/6KARt3B.png)

Add **Heading** element for the related products. 

![Add Heading element for the related products](https://i.imgur.com/qKMnyRL.png)

And select **Related Products** to show it.

![Select Related Products for showing](https://i.imgur.com/lVcqmND.png)

### 2.2. Displaying the product information in custom fields

Now, for other information saved in custom fields created with Meta Box, instead of using the elements that are for Woo only, we should choose the normal element, then use the dynamic data feature.

All the data that is saved in the fields is a kind of a list of characteristics about the product, so choose the **List** element to display them.

![Choose the List element to display kind of a list of characteristics about the product](https://i.imgur.com/sgUtZSj.png)

I’ll open the **Items** section and there will be a list of items.

![These are the lists of items](https://i.imgur.com/GhG6PI2.png)

Just set the name of the item.

![Set the name of the item](https://i.imgur.com/SZEh8OY.png)

Then set the Meta for the item using dynamic data.

![Set the Meta for the item using dynamic data](https://i.imgur.com/difExU5.png)

I’ll set an icon for the item like this.

![Set an icon for the item](https://i.imgur.com/EAGNoo8.png)

Do the same with some kind of information that we have in the fields. Just duplicate the first item for saving time and change the title, the field in the **Meta setting** as well.

This is all information saved in custom fields.

![This is all information saved in custom fields](https://i.imgur.com/P59zwO9.png)

This is all the information about the product that I expect to display on the single page but without styling.

![All the information about the product displayed without styling](https://i.imgur.com/aQ9DEN6.gif)

## Styling the product page

To have a better look for the product page, you should go back to the page editor with Bricks. Then, choose each element, both the element dedicated for Woo or the one for custom fields created with Meta Box, just change the settings to style them.

Now, you will see the page has turned to a new look.

![This is a new look of the page](https://i.imgur.com/aa26q9i.gif)