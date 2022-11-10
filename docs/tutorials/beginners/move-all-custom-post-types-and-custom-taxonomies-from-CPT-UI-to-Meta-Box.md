---
Title: How to Create a Recipe - P5 - Using Meta Box and Zion
---
Continuing with the series ‘<a href="https://metabox.io/series/recipe/">Create a recipe</a>’, today we’ll show you how to do it with another page builder, **Zion**.

<!--more-->

We also have a demo page for the tutorial like this:

![Demo page of a recipe page](https://i.imgur.com/v9WMsy5.png)

## Video Version

https://youtu.be/y6XCjCj3EZ8

## Before Getting Started

Like in the previous parts, all of the recipe information will be saved in a post of a custom post type. The recipe’s name and dish picture are the post's title and featured image. And, the extra information will be saved in custom fields.

Here are the tools that we need for this practice:

First, we need the <a href="https://wordpress.org/plugins/meta-box/">Meta Box core plugin</a> to have the framework for creating custom post types and custom fields. You can download it directly from <a href="https://wordpress.org/plugins/meta-box/">wordpress.org</a> as it’s free.

To have the advanced features of Meta Box, we need some of its extensions:

* <a href="https://metabox.io/plugins/custom-post-type/">MB Custom Post Types &amp; Custom Taxonomies:</a> to create custom post types;
* <a href="https://metabox.io/plugins/meta-box-builder/">Meta Box Builder:</a> to have an intuitive UI to create custom fields in the backend.

You can download and install each extension individually or use the **Meta Box AIO** which has all the Meta Box extensions.

The last one is **Zion Builder**. Make sure that you have **Zion Builder Pro** to have integration with Meta Box.

## Step 1: Create a Custom Post Type

Go to **Meta Box** &gt; **Post Types** &gt; **Add New** to create a new post type for the recipe.

<img alt="Create a custom post type" height="603" src="https://i.imgur.com/kOWxuCF.png" width="1000">

## Step 2: Create Custom Fields

Move to** Meta Box** &gt; **Custom Fields** to create as many fields as you want.

<img alt="Create custom fields" height="703" src="https://i.imgur.com/XGXqPJH.png" width="1000">

Here are the fields I use for this practice:

<img alt="Created fields for the recipe page" height="756" src="https://i.imgur.com/SiVQ6zM.png" width="1000">

Pay attention to the **Video** field, we usually use the **URL** field to save links. If you use it, Zion Builder will display the link in text format only. Then, we must do something to convert the link into the video preview.

Instead, we’ll use the **oEmbed** fields of Meta Box. This one allows you to save the link to display it as the video preview on the frontend directly.

<img alt="Use oEmbed fields of Meta Box to save the link and to display it as the video preview on the frontend directly" height="607" src="https://i.imgur.com/B4Q7Vl5.png" width="1000">

After creating all the wanted fields, move to the **Settings** tab &gt; **Location** &gt; choose** Post Type** as **Recipes** to apply these fields to this post type.

<img alt="Set Location for the custom fields as the recipe post type" height="642" src="https://i.imgur.com/8ANvIPe.png" width="1000">

Back to the post editor, you will see all of the newly created custom fields.

<img alt="Newly created custom fields in the post editor" height="793" src="https://i.imgur.com/65lnBhg.png" width="1002">

## Step 3: Create a Template

Go to the **Zion Builder** menu and create a new template.

First, choose the **All Recipes** option so that this template will be used for all posts of the **Recipes** post type.

<img alt="Create a template and choose All Recipes option to apply it to all post of Recipe post type" height="753" src="https://i.imgur.com/z1tzj64.png" width="1000">

Next, set the template for the body of the page.

<img alt="Set the template for the body of the page" height="629" src="https://i.imgur.com/eQFaph4.png" width="1000">

In the **Page options**, choose **Dynamic data preview source**. Select any post in the created post type to see its preview.

<img alt="In the Page options, choose Dynamic data preview source" height="774" src="https://i.imgur.com/lSpZIty.png" width="1003">

Now, let’s edit the template!

Select the layout with one column only to cover all of the recipe information.

<img alt="Select a layout for the template" height="780" src="https://i.imgur.com/6Fo0qRn.png" width="1000">

To get the recipe’s name, which is the title of the post, add a **Heading** element, then choose the **Post Title** option in the **Use dynamic data** section.

<img alt="Add a Heading element and choose Post Title option to get the recipe's name" height="650" src="https://i.imgur.com/3UvudTD.png" width="1000">

For the first section of the page, I’ll add a component with the layout as 2 columns.

<img alt="Add a component with the layout as 2 columns" height="631" src="https://i.imgur.com/MOtImVj.png" width="1006">

In the first column, add an **Image** element. Since the dish image is also the featured image of the post, click on the **Use Dynamic Data** button &gt; choose **Featured Image** in the **Post** section.

<img alt="Add an Image element, click Use Dynamic Data button and then choose Featured Image" height="655" src="https://i.imgur.com/St0yIcw.png" width="1000">

For the second column including all the timing information, add 4 **Container** element inside. Each container will be for a type of time.

<img alt="Choose the Text element, use the Dynamic Data for the timing information" height="624" src="https://i.imgur.com/dYy9aV2.png" width="1003">

<img alt="Each container will be for a type of time." height="755" src="https://i.imgur.com/8Na1nn9.png" width="1000">

In the first container, choose the **Text** element. As the timing information is saved in custom fields created by Meta Box, use the **Dynamic Data** button to connect this element to the Meta Box fields. Take the **Prep Time** field as an example.

<img alt="Choose the Text element and use Dynamic Data button to connect this element to the Meta Box fields" height="563" src="https://i.imgur.com/bDZq8mG.gif" width="1000">

Then, choose the **Heading** element and name it. You can style it visually as you want.

We’ll do the same in the next three containers.

Next, I’ll add other containers for each section like ingredients, instruction, nutrition, etc. In each one, add the **Heading** element and name it. Next, click the **Text** element, then connect it to the corresponding field.

<img alt="Add containers for each section" height="366" src="https://i.imgur.com/8Js5FIM.png" width="1000">

Now, it’s time to display the video. I still use the **Text** element to display it because the **Video** element of Zion Builder has not yet supported getting dynamic data. Then, just change the link by inserting the dynamic data from the **oEmbed** field that we use to save the video’s link.

<img alt="Insert the dynamic data from oEmbed field to save the video's link" height="553" src="https://i.imgur.com/q7HJQfY.png" width="1000">

As you can see here, although using the **Text** component, the video preview still display as we want.

After finishing getting all of the recipe information, you will see all the recipe information is already displayed on the frontend.

<img alt="All the recipe information is displayed in the frontend" height="645" src="https://i.imgur.com/yXgx2go.png" width="1000">

## Step 4: Style the Page

Back to the page editor with **Zion Builder**, you can change the settings of each element to style them.

Here is an example result of how I styled the page in my way.

<img alt="Recipe page after styling" height="917" src="https://i.imgur.com/v9WMsy5.png" width="600">

## Last Words

Wishfully, the steps above will give you a hand to **create a recipe page with Meta Box and Zion Builder** easily.

Feel free to share your results with us in the comments. And, follow our channel to see more helpful tutorials!
