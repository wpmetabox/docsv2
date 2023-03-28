---
title: Creating a recipe - Meta Box + Breakdance
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In today's practice, we're going to create a recipe page with Breakdance.

This is the singular page that I created as an example:

![Example of the created page](https://i.imgur.com/b2lJYVn.png)

## Video version

<LiteYouTubeEmbed id='ybqLQFFMu5c' />

## Preparation

Each recipe is saved in a post of a custom post type and further information such as time, ingredients and so on will be saved in custom fields.
So, here are the tools we need:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/) to have a framework for creating custom post types and custom fields easily. It’s free and you can download it directly from [wordpress.org](https://wordpress.org/plugins/mb-custom-post-type/).
* [MB Custom Post Types & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create custom post types named Recipes;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have an intuitive UI to create custom fields in the backend for saving data about the recipe;
* Breakdance: to create the page.

## 1. Creating a custom post type

Go to **Meta Box** > **Post Types** > **Add New**.

![Create a new post type](https://i.imgur.com/ngEWCuU.png)

After publishing, you will see a new Recipes menu like this in the Admin Dashboard.

## 2. Creating custom fields

Go to **Meta Box** > **Custom Fields**. Here are the fields that I created:

![Create custom fields](https://i.imgur.com/9dC6gk0.png)

There is a special field that is one for video. Instead of using the **URL** field to save the video link, I use **oEmbed**. This field type allows us to display the video preview directly on the frontend.

![Use oEmbed field so that video will display on the frontend](https://i.imgur.com/NVj2YIs.png)

After creating all the fields, move to the Settings tabs, choose Location as Post Type and select Recipe to apply these fields to this custom post type.

![Set Location for the created custom fields](https://i.imgur.com/CqTqmfu.png)

Then, you can easily see all the created fields in the post editor. Just fill in data into them.

![Created fields in the post editor](https://i.imgur.com/1COAwYl.png)

## 3. Creating a template for the page

Go to **Breakdance** > **Add New** to create a new template for the single post page of the recipe.

![Create a template for the page](https://i.imgur.com/jDvuObS.png)

First, add a **Section** element.

![Add a Section element](https://i.imgur.com/pKq3HSB.png)

Since the name of the recipe is the title of the post, add a **Post Title** element.

![Add a post title element](https://i.imgur.com/A0dIWfB.png)

I’ll use some **Div** tags to divide content into sections and columns as you can see here.

![Add some Div tags to divide content into sections and columns](https://i.imgur.com/rpzhu6a.png) 

Then, add the **Post Featured Image** element to display the picture. 

![Add a Post Featured Image element to display the picture](https://i.imgur.com/HWqygXv.png)

The cooking time and others similar are in another column, so I also add another **Div** element. Adding a **Text** element inside, then insert dynamic data to it. Choose the **corresponding** field of the kind of time you want to display from the **Metabox** section.

![Add another Div element](https://i.imgur.com/L6misJ7.gif)

You’ll immediately see the number here. To know which kind of it, you can add a prepend or append text for the element.

![The number will be displayed](https://i.imgur.com/sk1T0V9.gif)

For others, duplicate the element, then change the connecting field as well as the append text.

Leave this first section with two columns, add a new **Div** element for the new section. Add a heading for it. For the content that saves in the corresponding custom field, add a Text element, then insert data from that field.

![Add a Text element](https://i.imgur.com/BI0adPM.png)

Do likewise with other sections or just **duplicate** this **Div** element. Also change the heading, and the connecting field of the Text element.

![Do likewise with other sections](https://i.imgur.com/YY999qW.png)

For the **Video** section, instead of using **Text** element, I’ll use **Video** element and connect it with the Video field. There is the preview because I set the custom field in the type of oEmbed. In the case you use any other field type, the URL may display in the kind of text instead of a video preview.

![The URL may display like this](https://i.imgur.com/nemx9PL.png)

We’ve done all the information about the recipe. 

![All the information has been obtained](https://i.imgur.com/8N3nYdZ.png)

Still in the template editor, change the settings of each element to have as your desire. Just customize one by one.

![Style the Page](https://i.imgur.com/HF13yjr.png)

Then you will see the new look of the page.

![The final result](https://i.imgur.com/b2lJYVn.png)

