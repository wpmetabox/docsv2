---
title: Creating a recipe - Meta Box + Brizy
---

In the [previous tutorials](https://docs.metabox.io/tutorials/create-recipes-meta-box-zion/) of this series, we’ve found out how to create a recipe page using some of the page builders. In this practice, we’ll use another one - Brizy to do it with the help of Meta Box.

This is the page that I created as an example:

![The example of created recipe](https://i.imgur.com/f1XeFRO.png)

## Video version

(link)

## Preparation

Each recipe is saved in a post of a custom post type and displayed in a single page. Besides some default fields that may help to save some basic information. You may want to have more space for the extra ones. So, we need custom fields for them.

To get started, we need the [Meta Box core plugin](https://wordpress.org/plugins/meta-box/) to have the framework for creating custom post types and custom fields. It’s free and you can download it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/).

For the advanced features from Meta Box, we need some of its extensions:

[MB Custom Post Types & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create a custom post type named Recipe;
[Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have an intuitive UI to create custom fields to save the recipe information;
[Brizy](https://www.brizy.io/) (Brizy Pro version): to build the pager.

## 1. Creating a custom post type

Go to **Meta Box** > **Post Types** > **Add New** to create a new post type.

![Create a custom post type](https://i.imgur.com/bkU2AVR.png)

After publishing, we’ll have a menu named Recipe in the Admin Dashboard.

![Created post type appears in the Admin Dashboard](https://i.imgur.com/TJDJRAH.png)

Let’s create custom fields in the next step.

## 2. Creating custom fields

Go to **Meta Box** > **Custom Fields** to create fields. These are the fields that I created:

![Created fields](https://i.imgur.com/NExew0x.png)

Pay attention to a special field for the video. Since **Brizy** supports displaying the video preview from the link saved in the type of text. So, instead of using the **URL** field or the **oEmbed** to save the video link as other tutorials, I’ll use the **Text** field.

![Use Text field to save the link of video](https://i.imgur.com/MxWOuhb.png)

After creating all the fields, move to the **Settings** tab, choose **Location** as **Post Type** and then select **Recipe** to apply these fields to it.

![Set location for the created fields](https://i.imgur.com/QrBZDjK.png)

Then, you can easily see all the created custom fields in the post editor. Just fill in the recipe’s details.

![Created fields display in the post editor](https://i.imgur.com/auwABHx.png)

## 3. Creating the page

Go to **Brizy** > **Templates** to create a new template.

![Create the Page](https://i.imgur.com/gFHul7c.png)

Remember to set the condition to set this template for the single post/page of the Recipe.

![Set the condition for the page](https://i.imgur.com/WqXrE6r.png)

First, go to the **Global Blocks** to set the header for the page.

![Set the header for the page](https://i.imgur.com/mRv2sII.png)

To display the name of the recipe, add a **Title** element. It’ll automatically get the data from the post title.

![Add a title element](https://i.imgur.com/Gcw0QQo.png)

For the first section, I divided information into two columns. One column is for the image of the recipe and the other is for the timing information. So, add a **Column** element.

![Add a Column element](https://i.imgur.com/7POiMkt.png)

Drag the **Featured Image** element to the first column. The image will be displayed immediately.

![Drag the Featured Image element to the first column](https://i.imgur.com/ZFhVSYX.png)

Next, I’ll add **Row** inside the second column. Each row will be used for each type of timing information.

![Add Row inside the second column](https://i.imgur.com/sKxGm8I.png)

Inside the row, add a **Text** element, then choose **Typography** to customize the text. You will see a small icon button to choose more options from a dropdown list for the text. 

The first one is to add a custom text that you can type any text as you want into the element. All the rest ones on the list are the names of custom fields. Since we save the data about the time in custom fields, choose the corresponding ones.

![Choose Typography element](https://i.imgur.com/A9hUdcZ.gif)

To compare the type of time, add another **Text** element. Set it as **Custom Text** to change the text into the type of time.

![Add another Text element](https://i.imgur.com/Z5S2yQW.gif)

For other information about the time, do likewise.

![Do likewise with other information](https://i.imgur.com/i0b7XC8.png)

Now, let’s get the **Ingredient** section. Add a **Text** element and set it as a heading. Then, type the name of the section.

![Add a text element and set it as a heading](https://i.imgur.com/3Pk7CNl.png)

To display the information about the ingredients that is stored in custom fields, add another **Text** element below the heading and also connect it to a custom field. The content will be displayed immediately.

![Add another Text element](https://i.imgur.com/uD14rHX.gif)

For other sections, just do the same.

In the **Video** section, instead of adding **Text**, add a **Video** element. A default video will be displayed.

![Add a Video element for the Video section](https://i.imgur.com/bVgDpg5.png)

To display the video about the recipe, click to the preview button. Beside the pre-set link, there is also the icon to connect with custom fields.

![Click the preview button](https://i.imgur.com/N1XCATf.png)

We’ve done getting all the information about the recipe. Add a new block and then go to the Global Blocks section once again to add the footer for the page.

This is how it displays on the frontend.

![All the information has been obtained](https://i.imgur.com/VdhHvbY.png)

If you want to style the page, you can go back to the template editor of Brizy and change the column width as well as the settings of each element to have the style you want. Just customize one by one, then you will see the new look of the page.

![Change the column width](https://i.imgur.com/c0A39P2.png)

Here is the result that I want.

![The final result](https://i.imgur.com/f1XeFRO.png)
