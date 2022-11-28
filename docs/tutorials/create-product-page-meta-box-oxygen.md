---
title: Creating a product page - Meta Box + Oxygen
--- 

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

I’ll create a car rental page for example of a product page. It’s a singular page of a custom post type.

## Video version

<LiteYouTubeEmbed id='9P2Q49n8sJk' />

## Before getting started

Product is a kind of custom post type. In this case, each car for rental will be a post in that post type. Besides the default information such as title and content of the post, a product may have some extra information. E.g. each car will have some information such as price, image gallery, type of fuel, etc. So, we use custom fields to save that information.

![The extra information will be saved in custom fields](https://i.imgur.com/KT6xDPo.png)

For this practice, we need these tools:

* [Meta Box](https://metabox.io): to have framework to create custom post types and custom fields;
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create custom post types for the product;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create custom fields to save extra information of product.

The last one is [Oxygen](https://oxygenbuilder.com/) which is used to build the page. You should use the 3.9 version or upper, which has integration with Meta Box already.

## Step 1: Create a new custom post type

Go to **Meta Box > Post Types > New Post Type**.

![create new custom post type](https://i.imgur.com/ZGSNOek.png)

Enter the name for the post type, and if you want some further configuration, follow [this tutorial](http://docs/metabox.io//tutorials/create-custom-post-type-taxonomies/).

Step 2: Create custom fields

Go to Meta Box > Custom Fields, then create fields as you want for the products.

![create new custom fields](https://i.imgur.com/akw8HU0.png)

Here are the simple fields that we created:

![example of car rental with some common fields](https://i.imgur.com/yRLXjpI.png)

After creating all the essential fields, move to the **Settings** tab > **Location** > choose **Post Type** as **Car Rental** to apply these fields to it.

![Settings tab Location choose Post Type as Car Rental](https://i.imgur.com/Q3YdpN5.png)

Back to the post editor, you will see all of the created custom fields. Just fill in some data.

![newly created custom fields](https://i.imgur.com/gkVJ6Vx.png)

## Step 3: Create a template with Oxygen

Go to the **Oxygen** menu and create a new template.

In the settings of the template, choose a design that you want the template to inherit from, then choose your post type in the **Singular** section to apply the template to it.

![Choose the design for the template you wants to display](https://i.imgur.com/ZEyhb85.png)

Now, go to edit any post, we can see the template is already rendered for it.

![Move to the post editor and create a new post in the newly created post type](https://i.imgur.com/CTQREhu.png)

After filling in the information for the product, let’s edit the template.

First, select a **Section** component to cover all of the product information.

![select a Section component to contain all of the product information](https://i.imgur.com/ppnWLhx.png)

If you want to set columns for the content as below, let’s add a **Column** component.

![split the content into columns](https://i.imgur.com/6pDhCvc.png)

![add the column component](https://i.imgur.com/ywHmHod.png)

Just set the **Column Layout** as you want.

In this **Column** component, there’ll be two **div** tags available, equivalent to two columns. In the first **div** tag, select the **Carousel Builder** component to display the image gallery as a slider.

Choose **Meta Box gallery** in the Carousel content section, and fill in the ID of the gallery field in the Meta Box image field section. Then, all the images saved in that field will be displayed.

![set the galler](https://i.imgur.com/eyUWeFG.png)

You can move to the **Advanced** tab to set the slider display as you want.

Go to the second column with the 2nd **div** tag. To get the title of the post, which is the name of the product, add a **Heading** component. Then, insert data from the post title into this component.

![insert data from the title of the post](https://i.imgur.com/MZf00m2.gif)

For the product description, choose the **Text** component and connect it with the content of the post.

Also, choose the **Text** component for the price of the product. The pricing includes the currency, so you can type some text and symbols in this component to get the right format, then insert data from the field.

![display the price of product](https://i.imgur.com/IQTqdXh.gif)

For all of the following section, I’ll add a div component.

![add a div component](https://i.imgur.com/gFiYiBt.png)

For each row in this section, I also use a **div** component.

![Create a div to hold a row's information](https://i.imgur.com/kYAEy6C.png)


In the **div** for a row, choose the **Heading** component and name it as the name of the characteristic. Then, add a **Text** component and connect it to the field, which saves the corresponding data to the characteristic. Last one, style these two components and the **div** that covers them in your own way.

For the remaining characteristics, just clone this **div**, which is used for a row by duplicating. Then, just change the headings and link the **Text** components to the right fields.

![Change the text component to the right field](https://i.imgur.com/mvbpUhP.png)

We’ve finished getting all of the information about the product and displayed them on the product page. You can style them as you want.

Here is the result after styling.

![The product page when we finished creating it](https://i.imgur.com/Z8h2iDS.png)

