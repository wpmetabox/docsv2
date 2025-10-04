---
title: Creating a recipe - Meta Box + Bricks
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We’re going to **create a recipe page** using **Meta Box** and **Bricks**. This page is a singular page of a custom post type and includes information that is stored in custom fields created with Meta Box.

The image below is a specific example.

![Example of a recipe](https://imgur.elightup.com/JI0CuA9.jpg)

## Video version

<LiteYouTubeEmbed id='ev24jQJTgCY' />

## Preparation

In this case, the recipe page is the singular page of the Recipe post type. The recipe’s name and the dish's pictures are the title and featured image of the post. Besides, the remaining detailed information will be saved in custom fields.

We need [Meta Box Lite](https://metabox.io/lite/) to create custom post type for the recipes and have UI for creating custom field right on the back end. It's free.

And, we use [Bricks](https://bricksbuilder.io/) to build the page.

## 1. Creating a new custom post type

We'll create a new post type for the recipe. You can refer to [this article](https://docs.metabox.io/tutorials/create-custom-post-types-taxonomies/) for more details.

![Create a new custom post type for the recipe](https://imgur.elightup.com/8iPsfQD.png)

After publishing the post type, you’ll see a new menu.

![New post type showed in the menu dashboard](https://imgur.elightup.com/fBqG9cp.png)

## 2. Creating custom fields

Click on the **Create a field group** button in the dashboard or go to **Custom Fields** submenu to create a new one.

Here are the custom fields that I created:

![Created custom fields to save the recipe information](https://imgur.elightup.com/eQqMYU2.png)

Pay attention to the **Video** field. Instead of using the **URL** field to save the video link, I use **oEmbed**. This field type allows us to display the video frame directly on the front end.

After finishing creating the fields, move to the **Settings** tab. In the **Location** section, select **Post Types** as **Recipe** to apply these fields to the post type.

![Set Location for the custom fields in order to apply them to the Recipe post type](https://imgur.elightup.com/57Ni4p8.png)

Back to the post editor, you will see all the created custom fields.

![Newly created custom fields showed in the post editor](https://imgur.elightup.com/CW1s8Jk.png)

## 3. Creating a page template using bricks

Go to **Bricks > Templates > Add new**.

![Create a template for the recipe page using Bricks](https://imgur.elightup.com/5zptNPs.png)

Then, edit it with **Bricks**.

![Edit the template with Bricks](https://imgur.elightup.com/ZB1CuwK.png)

Go to **Settings > Template Settings > Conditions**> choose **Post Type > Recipes** in the list of options.

![Set conditions for the template to apply it to the Recipes post type](https://imgur.elightup.com/mGPukpK.png)

Choose a post in the **Populate Content** section to see it in the preview.

![Choose a post in the Populate Content section to see its preview](https://imgur.elightup.com/0tKmRBb.png)

Now, let’s get the data and display the recipe in the template.

First, add a new **Container** element to cover all the recipe information.

![Add a new Container element](https://imgur.elightup.com/VfDnLEo.png)

Then, add a **Post Title** element to display the recipe's name.

![Add a Post Title element](https://imgur.elightup.com/HETAWaI.png)

To display the dish image and time, add another **Container** to cover them.

![Add another Container element to display the dish image and time](https://imgur.elightup.com/xRPdzD3.png)

For the dish pictured, add an **Image** element inside that **Container**. It is the featured image of the post, so in the settings of the **Image** element, select **Dynamic Data** and choose the **Featured image** option from the list.

![Add an Image element inside that Container element and select Dynamic Data to get the dish picture](https://imgur.elightup.com/Y1BJxhT.png)

For the time section to complete the dish, add a new container.

Instead of adding **Basic Text**, I’d like to use the **Rich Text** element to get information about the time. The **Basic Text** allows you to get the data only from the field. But, the **Rich Text** allows you to add the extra text along with the data.

![Use Rich Text element to get information about the time](https://imgur.elightup.com/r4mIfoj.png)

To get data from custom fields, click on the **Select Dynamic Data** button with a lightning bolt icon. Then, select the **Meta Box (recipe)** item and choose the field you want to display.

![Choose the wanted field to get the data](https://imgur.elightup.com/GBVvj0C.png)

For the **Ingredient** section, I’ll add a **Heading**. If you want to style this heading, set the HTML tag for it. It also helps you optimize SEO more effectively.

![Add a Heading in the Ingredient section](https://imgur.elightup.com/AYXklRB.png)

For this section's content, add a **Basic Text** element. Then, I also add dynamic data to get the data stored in the custom fields. Find the field name you want.

![Add a Basic Text element and then choose the wanted field to get the data from](https://imgur.elightup.com/qM62cPq.png)

For the **Instruction** section, I will add a **DIV** tag to cover all the information in the step and description fields. Then, I will enable a loop to show a cloneable field. In the **Query** section, get the data that I created in the custom fields.

![Add a DIV tag for the Instruction section](https://imgur.elightup.com/tvDvAng.png)

To display both the step and description fields, I use a rich text element. And get saved data from **Dynamic Data**.

![Use a rich text element to display both steps and description fields](https://imgur.elightup.com/3q4Mz8i.png)

For the **Video** section, I will add a **Heading** and **Video** element.

![Add a Heading and Video element for the Video section](https://imgur.elightup.com/mLC4owd.png)

To get the data from the created **oEmbed** field, go to the **Video** element, and change the source section to **Dynamic Data**. Then, search for the **Video** field you created.

![Change the Source section to Dynamic Data to get the data from the created fields](https://imgur.elightup.com/oGqeKJS.png)

I will do the same with other sets of information.

![Do likewise with other sets of information](https://imgur.elightup.com/HHknTqp.png)

## 4. Styling the page

Just choose the desired element and change the settings in the **Style** section in Bricks’ template editor.

![Style each elements in the Brick's template editor](https://imgur.elightup.com/wrouPIy.png)

Here is the result.

![The result after all steps](https://imgur.elightup.com/ZkaeruX.jpg)

------

You may be interested in:
* [Creating a simple listing site](https://docs.metabox.io/tutorials/create-simple-listing-meta-box-bricks/)
* [Creating a team members](https://docs.metabox.io/tutorials/create-team-members-page-meta-box-bricks/)
* [Creating a product page](https://docs.metabox.io/tutorials/display-latest-product-meta-box-bricks/)
