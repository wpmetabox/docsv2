---
title: Creating a recipe - Meta Box + Kadence
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In this practice, we’ll use **Kadence** to build a singular page and get the recipe information stored in the custom fields created with **Meta Box**.

This is the page for showing a recipe that I created as an example:

![This is the page for showing a recipe](https://imgur.elightup.com/UCn1kj5.png)

## Video version

<LiteYouTubeEmbed id='XqKC7zo272k' />

## Preparation

This page is a single page that contains all the recipe information such as time, ingredients and so on, that will be saved in custom fields. Each recipe is saved in a post of a custom post type. So, we need these tools:

* [**Meta Box Lite**](https://metabox.io/lite/): to create custom post type and have UI on the back end gor creating custom fields.
* **Kadence**: to create the page.

## 1. Creating a new custom post type

Click on the quich action on the dashboard or go to **Meta Box > Post Types > Add New**.

![Go to Meta Box and create new post type](https://imgur.elightup.com/68NYL42.png)

After publishing, you will see a new menu displayed. It's your post type.

![A new menu displayed in new post type](https://imgur.elightup.com/BdFBS36.png)

## 2. Creating custom fields

Go to **Meta Box > Custom Fields** to create fields. These are the fields that I created:

![Go to Meta Box to create fields](https://imgur.elightup.com/NdFqZhM.png)

There is a special field for the video. Instead of using the URL field, I recommend you use the **oEmbed**. We can display the video preview right on the front end thanks to this field type.

![Using oEmbed to display the video preview right on the front end](https://imgur.elightup.com/smXqMg8.png)

After creating all the fields, move to the **Settings** tabs, choose **Location** as **Post Type** and select **Recipe** to apply these fields to this post type.

![Go to Settings, choose Location as Post Type and select Recipe to apply these fields to this post type](https://imgur.elightup.com/bvRQksS.png)

When creating a new post in Recipes, you’ll see all the created custom fields.

![All the created custom fields displayed on the post editor](https://imgur.elightup.com/JLYUTHX.png)

Just fill in some information.

## 3. Creating a template for the page

Go to **Appearance > Kadence > Elements > Add New** to create a template for the recipe page.

![Create a template with Kadence for the recipe page.](https://imgur.elightup.com/90DlAxg.png)

### 3.1. Settings for the template

Choose the element type as **Template**.

![Choose the element type as Template](https://imgur.elightup.com/mR6QFVp.png)

Set a **preview** for easy following.

![Set a preview for easy following.](https://imgur.elightup.com/q7knq81.png)

In the **Placement** section, choose **Replace Single Post Content** and choose to assign the template to the single page of the **Recipes** post type.

![In the Placement section, choose Replace Single Post Content to apply this template for the single page of the Recipe post type](https://imgur.elightup.com/1vkPfK6.png)

### 3.2. Displaying recipe information

For the recipe name information, add a **Heading** block.

![For the recipe name information, add a Heading block.](https://imgur.elightup.com/Hj5lnYy.png)

Then, add **Dynamic data** from the **Post Title** to display the recipe name.

![Add data from the Post Title to display the recipe name.](https://imgur.elightup.com/RLcRTDy.png)

I have two sections for the recipe information.

For this first section, there are 2 columns to show the image and the time information like this.

![Show the image and the time information](https://imgur.elightup.com/OVXWIwl.png)

So, add a **Row Layout** block and choose the layout you want.

![Add a Row Layout block and choose the layout you want for the image and timing information.](https://imgur.elightup.com/Rq02Ila.png)

In the first column, add an **Advanced Image** block to display the dish image.

![Add an Advanced Image block to display the dish image.](https://imgur.elightup.com/nQLZcud.png)

Turn on **Enable Dynamic Image** setting for the block to get images from custom fields. And, choose the **Featured Image** from the dropdown list.

![Turn on Enable Dynamic Image setting and choose the Featured Image](https://imgur.elightup.com/Xx2SWW4.gif)

Move to the second column to add the timing information.

![Add the timing information](https://imgur.elightup.com/CdE3H1X.png)

Each couple of lines like these will be a group. So, add a **Group** block for the first one.

![Add a Group block](https://imgur.elightup.com/mNHwQhy.png)

Inside the **Group**, add a **Paragraph** block to show the time information.

![add a Paragraph block to show the time information.](https://imgur.elightup.com/9mD8Tnq.png)

The timing information is saved in custom fields, so add **dynamic data** to the block as well, and choose the **corresponding field** to get the right data.

![add dynamic data to the block](https://imgur.elightup.com/TmlyFAJ.gif)

The next 3 groups are the same as the timing group, we just change the text and field of the element. Then, you will get the right ones.

![Change the text and field of the element](https://imgur.elightup.com/0IiDJcX.gif)

In the next section, just add a **Section** block to cover each one.

![Add a Section block to cover each one](https://imgur.elightup.com/TFvwOix.png)

Add a **Heading** inside it and type the name of the next information.

![Add a Heading inside it and type the name of the next information](https://imgur.elightup.com/4WrL2ke.png)

After that, insert a **Paragraph**. Click on the** Dynamic** button, choose **Post Custom Field**, and select the wanted field from the list.

![Click on the Dynamic button, choose Post Custom Field](https://imgur.elightup.com/u8I83rh.gif)

All the sections are quite the same, so just clone the created section, change the heading, and change the field as well. The information will be obtained and displayed correctly step by step.

But there is a difference in the Video section. Because the video is saved as an URL in a custom field as **oEmbed**, we should replace the **Paragraph** block with a different one.

To display the video preview from the URL, simply use the **Dynamic HTML** block.

![To display the video preview from the URL, simply use the Dynamic HTML block.](https://imgur.elightup.com/Nc3C9uJ.png)

Go to the **HTML Content** setting, choose **Post Custom Field**, and choose the name of the field that you saved the video.

![Go to the HTML Content setting, choose Post Custom Field, and choose the name of the field that you saved the video](https://imgur.elightup.com/cVmx4Bd.gif)

We’ve done getting all the information about the recipe.

![We’ve done getting all the information about the recipe](https://imgur.elightup.com/3ZNYOPp.jpg)

## 4. Styling the page

For styling, go back to the page editor with **Kadence**. Then, choose each component and change the settings to style them. Or in the case you want to use some CSS, just add classes for them then add **CSS code**.

![Edit page with Kadence by add CSS code.](https://imgur.elightup.com/RsiJhKv.png)

This is how my page in the final look.

![This is final look of a recipe page which also is a singular page](https://imgur.elightup.com/UCn1kj5.png)


