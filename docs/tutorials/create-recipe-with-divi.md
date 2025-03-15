---
title: Creating a recipe - Meta Box + Divi
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Have you tried MB Divi Integrator? Continuing the [Create a Recipe page](https://metabox.io/series/recipe/) series, today we will figure out the way to create an impressive, eye-catching recipe using **Meta Box** and **Divi Builder** with the help of their integration.

I created a singular page containing the recipe information as an example:

![a singular page containing the recipe information as an example](https://i.imgur.com/c0SlVLx.png)

## Video version

<LiteYouTubeEmbed id='jQPYJCTlO1M' />

## Preparation

Each recipe will be saved in a post of a custom post type. The recipe's name and dish picture are the post's title and featured image. Besides, you may want to have more space for the extra information. They will be saved in custom fields and separated into different sections for easier styling and managing.

We just need [Meta Box Lite](https://metabox.io/lite/) to have all the feature I mentioned:

You also should have **Divi Builder** to build the page.

## 1. Creating a custom post type

Click on the **Create a post type** button in the dashboard or go to **Meta Box** > **Post Types** > **Add New** to create a new one for the recipes.

![Go to Meta Box, Post Types, Add New to create a new one for the recipes](https://i.imgur.com/68NYL42.png)

After publishing, you will see a new menu displayed. It's your post type.

![created post type displayed as a menu in admin dashboard](https://i.imgur.com/yeD7EOm.png)

## 2. Creating custom fields

Go to **Meta Box** > **Custom Fields** to create fields to save the recipe information you want.

![Go to Meta Box, Custom Fields to create fields to save the recipe information you want](https://i.imgur.com/vvSlGCJ.png)

These are the fields that I created:

![some fields were created as example](https://i.imgur.com/agCdHxk.png)

There is a field for video that is quite special. If you want to display the video preview on the frontend, I highly recommend you use the **oEmbed** field for the video instead of the URL field.

![to display the video preview on the frontend, use the oEmbed field for the video instead of the URL field](https://i.imgur.com/w4YDjco.png)

Before publishing, move to the **Settings** tab, set the **Location** as **Post Type**, and select **Recipe** to apply these fields to it.

![move to the Settings tab, set the Location as Post Type, and select Recipe to apply these fields to it](https://i.imgur.com/Q1Pmm24.png)

Then, in the post editor of the **Recipe** post type, you will see created custom fields.

![created fields in post editor of the Recipe post type](https://i.imgur.com/9ZSKr39.png)

Just input data.

## 3. Creating template for the page

To display each recipe on each page, we should create a template for their singular page.

Go to **Divi** > **Theme Builder** to create a new template.

![Go to Divi, Theme Builder to create a new template for the singular page of each recipe](https://i.imgur.com/b6RmIZD.png)

To apply this template for recipes, choose **All Recipes** in the **Template Settings** popup.

![choose All Recipes in the Template Settings popup to apply this template for recipes](https://i.imgur.com/Jh6LUqb.png)

Add a row for the first line on the page.

![Add a row for the first line on the page](https://i.imgur.com/5tkXUTa.png)

It’s the post title, so search the **Post Title** module.

![It’s the post title, so search the Post Title module](https://i.imgur.com/9XjmUzy.png)

For this first section, add a new row. You can choose any layout as you want for this section.

![For this first section, add a new row and choose any layout as you want for this section](https://i.imgur.com/qSZZ74k.png)

In the first column, add the **Image** module.

![In the first column, add the Image module](https://i.imgur.com/yQJ7wf9.png)

Then click on the **Dynamic Content** icon button.

![click on the Dynamic Content icon button](https://i.imgur.com/0aK0Vw2.png)

And choose the **Featured Image** from the dropdown list.

![choose the Featured Image from the dropdown list](https://i.imgur.com/8S48T8R.png)

![the image will display like this](https://i.imgur.com/3Q7ng4z.png)

Move to the second column, I will display the timing information.

They’re all text, so add the **Text** module.

![add the Text module for the timing information](https://i.imgur.com/zUeSoqe.png)

We also use the **Dynamic Content** icon button to get data from custom fields.

![also use the Dynamic Content icon button to get data from custom fields](https://i.imgur.com/45peVY7.png)

Since the information is saved in custom fields from Meta Box, find the **Meta Box: Recipe Information** section, and select the custom field you want.

![Since the information is saved in custom fields from Meta Box, find the Meta Box: Recipe Information section, and select the custom field you want](https://i.imgur.com/zpYeM2S.png)

You can add the **After text** to have a clearer name the information on the page.

![You can add the After text to have a clearer name the information on the page](https://i.imgur.com/heDdmzN.png)

The next three information also are the timing ones, and may have the same style with the first one. So duplicate the **Text** module.

![duplicate the Text module for the next three information](https://i.imgur.com/ZSWAom5.png)

Then use the dynamic content feature to change and get data from the corresponding field.

![use the dynamic content feature to change and get data from the corresponding field](https://i.imgur.com/sPrNQWb.png)

Also rename the after text.

![rename the after text](https://i.imgur.com/MWFFEvJ.png)

![The timing information was gotton](https://i.imgur.com/KNftdll.png)

Add a new **Row** for the next section.

![Add a new Row for the next section](https://i.imgur.com/n1pxPu6.png)

Choose the **Text** module for the name of the section.

![hoose the Text module for the name of the section](https://i.imgur.com/07vlGhX.png)

The ingredients information in this section is saved in a custom field created with Meta Box. But it’s not normal text. It may include some format since the WYSIWYG field. So, instead of using the Text module from Divi as previously, we should use the **Meta Box Field** module.

![we should use the Meta Box Field module to get the data from the WYSIWYG field instead of using the Text module from Divi as previously](https://i.imgur.com/xoTi5fJ.png)

This is the module built by the Meta Box team that has more advantages and more optimality, especially it can display the text in the right format as you save in the custom field.

Just set the location for this module as the field you want.

![Click on the location to set location for the module](https://i.imgur.com/9doKiUg.png)

![choose the field in the dropdown list](https://i.imgur.com/isBEN93.png)

The data will display on the frontend later.

For the next type of information, we also add a couple of modules, one for the title, and one for the data.

The **Text** module for the name of section.

![add a Text module for the name of instructions section](https://i.imgur.com/Z6KHHbn.png)

However, the instructions section may include information which are set in steps. I saved them in a cloneable group, so instead of adding a Meta Box Field module, we should add a layout for this group first.

Go to **Divi** > **Divi Library** > **Add New** to create a new layout.

![Go to Divi, Divi Library, Add New to create a new layout for the group](https://i.imgur.com/nCapnD8.png)

Set the **Layout Type** as **Section**.

![Set the Layout Type as Section](https://i.imgur.com/oNWPoQc.png)

Inside the layout, add the **Meta Box Field** module.

![Inside the layout, add the Meta Box Field module](https://i.imgur.com/jI1E72q.png)

And set its location as a subfield of the group to get data from it.

![set its location as a subfield of the group to get data from it](https://i.imgur.com/JqsEh3f.png)

![since we have 2 subfields in the group, we need to use 2 Meta Box Field modules](https://i.imgur.com/9lEKPpm.png)

Now, back to the page template editor, and add the **Meta Box Cloneable** module.

![back to the page template editor, and add the Meta Box Cloneable module](https://i.imgur.com/Pf6yYCB.png)

Set its layout as the one we have just created.

![Set its layout as the one we have just created](https://i.imgur.com/rsFdNXT.png)

Also set the **Cloneable Field** as the group.

![set the Cloneable Field as the group](https://i.imgur.com/RJIjuEy.png)

All the information of each step will be listed on the page when you go to the page on front end.

For the next, add the **Text** module for the title as well.

![For the next, add the Text module for the title](https://i.imgur.com/FNl8LAN.png)

For the data from custom fields, if it’s not a cloneable one, we highly recommend using the **Meta Box Field** module. No matter which kind of data you want to get, even with the video URL, just use this module.

![we highly recommend using the Meta Box Field module because it can get every kind of data even with the video URL](https://i.imgur.com/wLrB4cZ.png)

![Every information is gotton](https://i.imgur.com/wM8L5in.png)

After getting all of the information, view the page on the frontend, all the information is displayed, and their format is also as they are in the custom fields.

![on the frontend, all the information is displayed with the right format](https://i.imgur.com/9676znI.gif)

Let’s move one to make them display better.

## 4. Styling the page

Back to the page template editor, just choose each module to change their settings, one by one.

![To style the page, back to the page template editor, choose each module to change their settings, one by one](https://i.imgur.com/eNA21da.png)

I just changed some things basically.

And this is the final look of the page.

![the final look of the page](https://i.imgur.com/kHP5gS7.gif)

You definitely can change the template’s layout to have a more efficient display since all the information is now from custom fields, so you can rearrange or set places for them very easily.
