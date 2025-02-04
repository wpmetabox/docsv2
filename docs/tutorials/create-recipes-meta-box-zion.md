---
title: Creating a recipe - Meta Box + Zion
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Let’s create a recipe page which contains different kinds of information stored in custom fields and display each recipe in a singular page. We’ll use **Zion** to build that page.

![Demo page of a recipe page](https://i.imgur.com/eDe9LAZ.png)

## Video version

<LiteYouTubeEmbed id='y6XCjCj3EZ8' />

## Preparation

All of the recipe information will be saved in a post of a custom post type. The recipe’s name and dish picture are the post's title and featured image. And the extra information will be saved in custom fields.

Here are the tools that we need for this practice:

* [Meta Box](https://metabox.io) to have the framework for creating custom post types and custom fields;
* [MB Custom Post Types & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create custom post types for the recipe;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have UI in the back end to create custom fields to save extra information about recipe.
* **Zion Builder**: make sure that you have **Zion Builder Pro** to have integration with Meta Box.

## 1. Creating a custom post type

Go to **Meta Box > Post Types > Add New** to create a new post type for the recipes.

![Create a custom post type](https://i.imgur.com/kOWxuCF.png)

## 2. Creating custom fields

Move to **Meta Box > Custom Fields** to create as many fields as you want.

![Create fields](https://i.imgur.com/XGXqPJH.png)

Here are the fields I use for this practice:

![Created fields for the recipe page](https://i.imgur.com/SiVQ6zM.png)

Pay attention to the Video field, we usually use the **URL** field to save links. If you use it, Zion Builder will display the link in text format only on the page. Then, we must do something to convert the link into the video preview.

Instead, we’ll use the **oEmbed** fields of Meta Box. This one allows you to save the link and display it as the video preview directly on the frontend.


![Use oEmbed fields of Meta Box to save the link and to display it as the video preview on the frontend directly](https://i.imgur.com/B4Q7Vl5.png)

After creating all the wanted fields, move to the **Settings** tab > **Location** > choose **Post Type** as **Recipes** to apply these fields to this post type.

![Set location for the custom fields](https://i.imgur.com/8ANvIPe.png)

Back to the post editor, you will see all of the created custom fields.

![Created fields in the post editor](https://i.imgur.com/65lnBhg.png)

Let’s fill in information for the recipe into the fields.

## 3. Creating a template

Go to the **Zion Builder** menu and create a new template.

First, choose the **All Recipes** option so that this template will be used for all posts of the **Recipes** post type.

![Create a template and choose All Recipes option to apply it to all post of Recipe post type](https://i.imgur.com/z1tzj64.png)

Next, set the template for the body of the page.

![Set the template for the body of the page](https://i.imgur.com/eQFaph4.png)

In the **Page options**, choose **Dynamic data preview source**. Select any post in the created post type to see its preview.

![In the Page options, choose Dynamic data preview source](https://i.imgur.com/lSpZIty.png)

Now, let’s edit the template!

Select the layout with one column only to cover all of the recipe information.

![Select a layout for the template](https://i.imgur.com/6Fo0qRn.png)

To get the recipe’s name, which is the title of the post, add a **Heading** element, then choose the **Post Title** option in the **Use dynamic data** section.

![Add a Heading element and choose Post Title option to get the recipe's name](https://i.imgur.com/3UvudTD.png)

For the first section of the page, I’ll add a component with the layout as 2 columns.

![Add a component with the layout as 2 columns](https://i.imgur.com/MOtImVj.png)

In the first column, add an **Image** element. Since the dish image is also the featured image of the post, click on the **Use Dynamic Data** button > choose **Featured Image** in the **Post** section.

![Add an Image element, click Use Dynamic Data button and then choose Featured Image](https://i.imgur.com/St0yIcw.png)

For the second column including all the timing information, add 4 **Container** elements inside. Each container will be for a type of time.

![Choose the Text element, use the Dynamic Data for the timing information](https://i.imgur.com/dYy9aV2.png)

![Each container will be for a type of time.](https://i.imgur.com/8Na1nn9.png)

In the first container, choose the **Text** element. As the timing information is saved in custom fields created by Meta Box, use the **Dynamic Data** button to connect this element to the Meta Box fields. Take the **Prep Time** field as an example.

![Choose the Text element and use Dynamic Data button to connect this element to the Meta Box fields](https://i.imgur.com/bDZq8mG.gif)

Then, choose the Heading element and name it. You can style it visually as you want.

We’ll do the same in the next three containers.

Next, I’ll add other containers for each section, like ingredients, instruction, nutrition, etc. In each one, add the Heading element and name it. Next, click the Text element, then connect it to the corresponding field.

![Add containers for each section](https://i.imgur.com/8Js5FIM.png)

For the video, I still use the **Text** element to display it because the **Video** element of Zion Builder has not yet supported getting dynamic data. Then, just change the link by inserting the dynamic data from the **oEmbed** field that we use to save the video’s link.

![Insert the dynamic data from oEmbed field to save the video's link](https://i.imgur.com/q7HJQfY.png)

After finishing getting all of the recipe information, you will see all of them are already displayed on the frontend.

![all the information is displays](https://i.imgur.com/yXgx2go.png)

## 4. Styling the page

Back to the page editor with Zion Builder, you can change the settings of each element to style them.

Here is an example result of how I styled the page in my way.

![The result](https://i.imgur.com/eDe9LAZ.png)

------

You may be interested in:
* [Creating a recipe - Zion](https://docs.metabox.io/tutorials/create-recipes-meta-box-zion/)
* [Displaying the latest products - Zion](https://docs.metabox.io/tutorials/display-latest-products-meta-box-zion/)




