---
title: Creating a recipe - Meta Box + Oxygen
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We’ll use Oxygen to build a singular page and get the recipe information stored in the custom fields created with Meta Box.

![Example of a Recipe](https://i.imgur.com/SCek8XG.png)

## Video version

<LiteYouTubeEmbed id='HZLS8pe2nDk' />

## Preparation

All of the information about the recipe will be saved in posts of a **custom post type**. The recipe’s name and the dish picture are the title and the featured image of the post. Besides, the remaining detailed information will be saved in **custom fields**.

The necessary tools are listed below:

* [Meta Box](https://metabox.io): to have framework to create custom post types and custom fields;
* [MB Custom Post Types & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create custom post types for the recipes;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have an intuitive UI to create custom fields to save the recipe information.

The last one is [Oxygen](https://oxygenbuilder.com/). You should use the 3.9 version or higher which has the integration with Meta Box already.

## 1. Creating a custom post type

Go to **Meta Box > Post Types > Add New**.

![Create a Custom Post Type](https://i.imgur.com/RABAgP1.png)

Then, enter information and configure the post type.

## 2. Creating custom fields

Move to **Meta Box > Custom Fields**, then create fields as you want.

![Create Custom Fields](https://i.imgur.com/hMEoDLf.png)

Here are the fields I use for this practice:

![Field group created](https://i.imgur.com/pWljhJt.png)

Pay attention to the video information. Normally, we use the **URL** field to save links, but if you use it, Oxygen will display the link in text format only. Then, we must take a few more steps to convert the link into the video preview.

However, Meta Box has the **oEmbed** fields that allow you to save the link and display it as the video preview on the frontend directly. So, we’ll use it for more convenience.

![Create oEmbed fields to save the link and display it as the video preview on the frontend](https://i.imgur.com/bjmwlGC.png)

Next, move to the **Settings** tab > **Location** > choose **Post Type** as **Recipes** to apply these fields to this post type.

![Set location for Recipe post type](https://i.imgur.com/hIBUV0X.png)

In the post editor, you will see all of the newly created custom fields.

![Newly created custom fields](https://i.imgur.com/f56IhBp.png)

## 3. Creating a template with Oxygen

Go to the **Oxygen** menu and create a new template.

In the settings of the template, select a design that you want the template to inherit from, then choose your post type in the **Singular** section to apply the template to it.

![Select the wanted design for the template to be inherited from.](https://i.imgur.com/v7yxRNu.png)

Now, go to edit any post, we can see the template is already rendered for this product page.

![ The template is rendered for this product page](https://i.imgur.com/DyNtTuL.png)

After filling in the information for the recipe, let’s edit the template with Oxygen.

First, select a **Section** component to cover all of the recipe information.

![Select a Section](https://i.imgur.com/Dx2dg0D.png)

To get the recipe’s name, which is the title of the post, add a **Heading** component. Then, connect it to the post title to get data.

![Add a Heading component and connect it to the post title to get data.](https://i.imgur.com/Fn0YwT4.gif)

In the first section, I’ll divide the content into two columns like this:

![Divide the content into 2 columns](https://i.imgur.com/Dm1ogHm.png)

So, add a **Column** component. Then, there’ll be two **div** tags available inside it, equivalent to two columns. In the first div tag, add the **Featured Image** component to get the dish’s image.

![Add an extra div inside as for the row](https://i.imgur.com/YZpgSjH.png)

Move to the second column, which covers all the information about the completed time. I’ll add an extra div inside it. This div is for a row.

![Add a Text component, and connect it to the field that saves the corresponding time information](https://i.imgur.com/c6uJEsA.png)

Inside this div, add a Text component and connect it to the field that saves the corresponding time information. Then, choose the Heading component and name it. Finally, style the row in your own way.

![Duplicate the div and change the name and fields](https://i.imgur.com/XGYqe77.png)

Then, you can duplicate the div that is used for the first row to have more rows. Then, change the names and fields.

![Duplicate the div](https://i.imgur.com/kwRlvQn.png)

For the rest section, we create another **div** in the **Section** component. Inside this div, choose the **Heading** component and name it, e.g. Ingredients. Also, add the **Text** component, then connect it to the corresponding field which saves the information about the ingredients, instructions, note, nutrition, equipment.

![Create another div in the section](https://i.imgur.com/D1099pU.png)

For the video information, there is a difference. Replace the **Text** component by the **Video**.

To display that data, I'll add a **Video** component. Then, just change the link by inserting the dynamic data from the **oEmbed** field that we use to save the video’s link.

![Add a Video component to display data](https://i.imgur.com/kwRlvQn.png)

We’ve finished getting all of the recipe information. On the frontend, you see that all of them are already displayed.

![Back to the frontend, everything is well displayed](https://i.imgur.com/HXaAJjv.png)

## 4. Styling the page

Back to the page editor with Oxygen, choose each component and change the settings to style them.

I’ll style the time section for example. This section has 4 row and they should be have the same style, so I’ll use a class for 4 rows. Style a row, then these 4 rows will change the style at once.

![Style the page](https://i.imgur.com/5S1rCSw.png)

Go to the recipe page, and you’ll see the new look.

![Back to the frontend, everything is well displayed](https://i.imgur.com/SCek8XG.png)

------

You may be interested in:
* [Creating a product page](https://docs.metabox.io/tutorials/create-product-page-meta-box-oxygen/)
* [Creating a team members page](https://docs.metabox.io/tutorials/create-team-members-page-meta-box-oxygen/)
* [Creating a video gallery page](https://docs.metabox.io/tutorials/create-video-gallery-page-meta-box-oxygen/)
