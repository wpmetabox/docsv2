---
title: Showing posts with specific criteria - Meta Box + Bricks
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In sale seasons, you may want to create an archive page to display only the products which are on sale, then this series is for you. In this practice, we’re going to show posts with specific criteria, in this case, it’s the products that are on sale.

I’ll create a page using Bricks to show them like this with an example of dishes for the products.

![Example of showing the posts with criteria](https://imgur.elightup.com/jixQXCm.png)

## Video version

<LiteYouTubeEmbed id='fGm74bVzbkg' />

## Preparation

Each dish is a post of a custom post type and there may be some extra information you want to save in custom fields for them. In this case, I have two fields in order to save the original price and the promotional price. All the dishes which have the promotional price, which means that it’s on sale, will be displayed on the page.

In this practice, we need these tools:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom post types and custom fields;
* [MB Custom Post Types & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create custom post types;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have an intuitive UI to create custom fields in the backend;
* **Bricks** Builder: to create the page.

## Creating a custom post type

Go to **Meta Box > Post Types > Add New** to create a new post type for the dishes. Here, I name it **Cuisines**.

![Create a custom post type](https://imgur.elightup.com/QBR48fA.png)

## Creating custom fields

Go to **Meta Box > Custom Fields** to create fields.

![Create custom fields](https://imgur.elightup.com/o38tqhY.png)

Here are the two fields that I’ve just created.

After creating all the fields, move to the **Settings** tab > **Location** as **Post type** > select **Cuisines** to apply these fields to it.

![Set location for the created fields](https://imgur.elightup.com/bXWE1qR.png)

When creating any post in the **Cuisines** post type, you’ll see all created custom fields.

![New post in the Cuisines post type in the Post Editor](https://imgur.elightup.com/oXohkMV.png)

## Creating the page

Go to **Pages > Add New** to create a new page.

![Create the Page](https://imgur.elightup.com/HilxJ2n.png)

Then, let’s edit it with **Bricks**.

![Edit with Bricks](https://imgur.elightup.com/wf4EwEW.png)

First, add a new Section element to contain all the dishes’ information.

![Add a Section element](https://imgur.elightup.com/5VJ7C5V.png)

Next, add a **Heading** element to display the page’s title. Since the title of the page is the post title, choose **Select dynamic data** > **Post title** to get the page’s name.

![Add a Heading element](https://imgur.elightup.com/ATbL9s5.png)

Now, we’re going to get the dishes. However, we just want to display only the dishes that are on sale. So, we need to set conditions for them. Let’s see how to do it.

## Setting the condition

Inside the **Container**, add a **Div** element to cover all of the post.

![Add a Div element to cover all of the post](https://imgur.elightup.com/BOoOM7B.png)

Since each dish is a post of a custom post type, switch the button to enable the Use the query loop option and set the query. Choose **Post** and **Cuisines** to get the data from posts of that post type.

![Enable the Use the query loop and set the query](https://imgur.elightup.com/mHOxKt6.png)

Because we just want to display only the posts that are on sale, which means the **Promotional Price** field of those posts must have a value.
So, scroll down to the **Meta Query** section. Based on the value of the **Promotional Price** fields, we can clarify which dishes to display. Therefore, in the Meta Key, fill in the ID of the **Promotional Price** field.

![Fill in the ID of promotional price field in the Meta Key](https://imgur.elightup.com/R5dvmSu.png)

Then in the **Compare**, choose **Not equal**. So, all the posts having value in the **Promotional Price** fields will be chosen to display.

![Choose Not equal in the Compare](https://imgur.elightup.com/WFNVyAs.png)

That’s all for the condition. Next, we’ll display the information you want for each post.

## Displaying the cuisines information

To display the image of the dishes, add the **Image** element.

![Add an Image element](https://imgur.elightup.com/rTODJjS.png)

Since these images are the featured image of the post, choose the **Select dynamic data** button and find the **Featured Image** option in the **Post** section.

![Choose Featured Image to get the image of the dish](https://imgur.elightup.com/2YeLnqT.png)

Next, to get the name of the dish which is the post title, add a **Heading** element, and choose the Select dynamic data button, then find **Post Title**.

![Add a Heading element and choose Post title through the Select dynamic data button](https://imgur.elightup.com/HYNVBex.png)

After that, add a **Div** element.

For the price of the dish, instead of adding **Basic Text**, I’d like to use the **Rich Text** element to get information about the price. The **Basic Text** allows you to get the data from the field only, but the **Rich Text** enables adding the extra text along with the data.

So, to display the original price, add a **Rich Text** element.

![Add a Rich text element for the original price field](https://imgur.elightup.com/cZeHc6d.png)

This is the section of the custom fields created by **Meta Box** for the **Cuisines** post type. Go to **Meta Box (Cuisines)** and then find the **Original Price** field.

![Find the correct field](https://imgur.elightup.com/Dd3dK9H.png)

For the promotional price information, do likewise.

![Do likewise with promotional price field](https://imgur.elightup.com/YuoGvPh.png)

To display the description of the dish which is the post content, add a **Basic text** and then connect it to the Post content fields through the **Select dynamic data** button.

![Add a Basic Text for the post content](https://imgur.elightup.com/Vx8IYrS.png)

Now, all the information is shown. This is how it displays on the front end.

![All information has been obtained](https://imgur.elightup.com/L9D39sD.png)

## Styling the page

Still in the page editor with **Bricks**, style any element you want by changing their settings in the **Style** tab.

![Style the page](https://imgur.elightup.com/Ft8whJ1.png)

The archive page now displays beautifully.

![The archive page displays beautifully](https://imgur.elightup.com/jixQXCm.png)
