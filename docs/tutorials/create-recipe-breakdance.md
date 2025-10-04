---
title: Creating a recipe - Meta Box + Breakdance
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In today's practice, we're going to create a recipe page with Breakdance.

This is the singular page that I created as an example:

![Example of the created page](https://imgur.elightup.com/b2lJYVn.png)

## Video version

<LiteYouTubeEmbed id='ybqLQFFMu5c' />

## Preparation

In this case, the recipe page is the singular page of the Recipe post type. The recipe’s name and the dish's pictures are the title and featured image of the post. Besides, the remaining detailed information will be saved in custom fields. Each recipe is saved in a post of a custom post type and further information such as time, ingredients and so on will be saved in custom fields.

So, we need [Meta Box Lite](https://metabox.io/lite/) to create custom post type for the recipes and have UI for creating custom field right on the back end. It's free.

And, we use **Breakdance** to create the page.

## 1. Creating a new custom post type

We'll create a new post type for the recipe. You can refer to [this article](https://docs.metabox.io/tutorials/create-custom-post-types-taxonomies/) for more details.

Use quick action in the dashboard or go to **Meta Box** > **Post Types** > **Add New**.

![Create a new post type](https://imgur.elightup.com/ngEWCuU.png)

After publishing, you will see a new Recipes menu like this in the Admin Dashboard.

## 2. Creating custom fields

Go to **Meta Box** > **Custom Fields**. Here are the fields that I created:

![Create custom fields](https://imgur.elightup.com/9dC6gk0.png)

There is a special field that is one for video. Instead of using the **URL** field to save the video link, I use **oEmbed**. This field type allows us to display the video preview directly on the frontend.

![Use oEmbed field so that video will display on the frontend](https://imgur.elightup.com/NVj2YIs.png)

After creating all the fields, move to the Settings tabs, choose Location as Post Type and select Recipe to apply these fields to this custom post type.

![Set Location for the created custom fields](https://imgur.elightup.com/CqTqmfu.png)

Then, you can easily see all the created fields in the post editor. Just fill in data into them.

![Created fields in the post editor](https://imgur.elightup.com/1COAwYl.png)

## 3. Creating a template for the page

Go to **Breakdance** > **Add New** to create a new template for the single post page of the recipe.

![Create a template for the page](https://imgur.elightup.com/jDvuObS.png)

First, add a **Section** element.

![Add a Section element](https://imgur.elightup.com/pKq3HSB.png)

Since the name of the recipe is the title of the post, add a **Post Title** element.

![Add a post title element](https://imgur.elightup.com/A0dIWfB.png)

I’ll use some **Div** tags to divide content into sections and columns as you can see here.

![Add some Div tags to divide content into sections and columns](https://imgur.elightup.com/rpzhu6a.png)

Then, add the **Post Featured Image** element to display the picture.

![Add a Post Featured Image element to display the picture](https://imgur.elightup.com/HWqygXv.png)

The cooking time and others similar are in another column, so I also add another **Div** element. Adding a **Text** element inside, then insert dynamic data to it. Choose the **corresponding** field of the kind of time you want to display from the **Metabox** section.

![Add another Div element](https://imgur.elightup.com/L6misJ7.gif)

You’ll immediately see the number here. To know which kind of it, you can add a prepend or append text for the element.

![The number will be displayed](https://imgur.elightup.com/sk1T0V9.gif)

For others, duplicate the element, then change the connecting field as well as the append text.

Leave this first section with two columns, add a new **Div** element for the new section. Add a heading for it. For the content that saves in the corresponding custom field, add a Text element, then insert data from that field.

![Add a Text element](https://imgur.elightup.com/BI0adPM.png)

Do likewise with other sections or just **duplicate** this **Div** element. Also change the heading, and the connecting field of the Text element.

![Do likewise with other sections](https://imgur.elightup.com/YY999qW.png)

For the **Video** section, instead of using **Text** element, I’ll use **Video** element and connect it with the Video field. There is the preview because I set the custom field in the type of oEmbed. In the case you use any other field type, the URL may display in the kind of text instead of a video preview.

![The URL may display like this](https://imgur.elightup.com/nemx9PL.png)

We’ve done all the information about the recipe.

![All the information has been obtained](https://imgur.elightup.com/8N3nYdZ.png)

Still in the template editor, change the settings of each element to have as your desire. Just customize one by one.

![Style the Page](https://imgur.elightup.com/HF13yjr.png)

Then you will see the new look of the page.

![The final result](https://imgur.elightup.com/b2lJYVn.png)

