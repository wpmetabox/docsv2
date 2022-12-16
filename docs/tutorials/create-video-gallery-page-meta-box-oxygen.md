---
title: Creating a video gallery page - Meta Box + Oxygen
---


import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We’ll use Oxygen to **create a page showing a video gallery**. **The video's information is stored in the custom fields created by Meta Box**. Here is an example:

![The example of creating a video gallery page with Meta Box and Oxygen](https://i.imgur.com/xg6ygqB.png)

## Video version

<LiteYouTubeEmbed id='rs2kJI8NZYQ' />

## Preparation

The gallery includes a lot of videos, and each one will be saved as a post. So, we'll have a custom post type for it. All the information about the video, such as the title, description, and author is the post’s default information.

To avoid making your site heavier, we will save the videos somewhere else, for example, on Youtube. Then, I’ll save the video link in a custom field.

![Places to save the video's information](https://i.imgur.com/yBa2unw.png)

For this practice, we need these tools:

* **[Meta Box](https://metabox.io)**: to have a framework to create custom post type and custom fields
* **[MB Custom Post Type & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/)**: to create custom post types for the videos;
* **[Meta Box Builder](https://metabox.io/plugins/meta-box-builder/)**: to provide a UI on the back end to easily create custom fields to save the video’s links.
* **[Oxygen](https://oxygenbuilder.com/)**: to build the page. You should use the 3.9 version or higher, which has integration with Meta Box.

## 1. Creating a new custom post type

Go to **Meta Box** > **Post Types** > **New Post Type** to create a new custom post type for the videos.

![Create a new custom post type for videos](https://i.imgur.com/Ddma0xi.png)

In the settings of the post type, we have the **Support** tab that provides some features to add to your post type. In this case, we will display the author’s information for this post, so check the **Author** box here.
![In the settings of the post type, choose some features of the Supports tab to add them to the post type](https://i.imgur.com/qSceLhJ.png)

## 2. Creating custom fields

Move to **Meta Box** > **Custom Fields** > **Add New**.

As I said before, I’ll create only one custom field to save the video’s links. Normally, we use the URL field to save links. But if you use it, Oxygen will only display the link as text on the frontend, then we must take a few more steps to convert the link into the video preview.

Instead, Meta Box has the **oEmbed** field type that allows you to save the link and display it as the video preview on the frontend directly. Thus, in this tutorial, we choose the **oEmbed** for more convenience.

![Choose oEmbed fields that allow you to save the link and display it as the video preview on the frontend](https://i.imgur.com/3Q52CkV.png)

After creating the field, go to the **Settings** tab, set the **Location** as the **Post Type**, and choose **Video** to apply the newly created field to this post type.

![In the Settings tab, set the Location as the Video Post Type to apply the created field to this post type](https://i.imgur.com/yh6aob5.png)

Then, in the post editor, you will see the newly created custom field.

![In the Post Editor, you will see the created custom field](https://i.imgur.com/FM7J0e6.png)

Furthermore, since we added the **Author** feature to the **Support** tab, we’ll have the **Author** section to choose the post’s author like this.

![As we added the Author feature in the Supports tab, we will have the Author section to choose the post’s author](https://i.imgur.com/UkjEHH1.png)

## 3. Creating a template for page with Oxygen

In the **Oxygen** menu, create a new template and apply it to the wanted page. Then, edit the page with Oxygen.

First, set the preview as usual.

To get the title of the page automatically, add a **Heading** component, then click **Insert Data** > **Post** > **Title** to connect it with the title of the page.

![Get the title of the video gallery page automatically](https://i.imgur.com/gR1Xwe8.gif)

Then, add a **Section** component to display the video gallery.

![Add a Section component to display the video gallery](https://i.imgur.com/ajscNU2.png)

Inside the **Section** component, add a **Repeater** component and set a data source for it. Go to **Query** > **Custom** > **Post Type** and find the ID of the created post type.

![Inside the Section component, add a Repeater component and set a data source for it](https://i.imgur.com/MVf3BNJ.gif)

Add a **Video** component inside the **Repeater**. You will see the default video preview from Oxygen. Now, we need to change the URL of this component to the one in the custom fields.

![To get the wanted video preview, we need to change the URL in Dynamic tag](https://i.imgur.com/7rgAiUf.png)

Click the **Data** button. Then, in the **Meta/Custom Field** section, find the field’s ID that you saved the video’s link.

![Get the wanted video preview step by step](https://i.imgur.com/8SXcNPn.gif)

For other information about the video, such as the video’s title, description, and author, select the corresponding component as **Text Link, Text, Image**, etc. Then, use the **Data** tag in the same way to automatically get the data from the post.

After adding all the wanted components, you will see all the video’s information displayed like this:

![After adding all the wanted components, you will see all the video’s information displayed](https://i.imgur.com/cZ453jD.png)

After saving the template, you will see the video gallery on the page.

![The video gallery on the page before styling](https://i.imgur.com/5py7iGN.png)

## 4. Styling the page

Go back to the page editor with Oxygen. For easy styling, you can add some **div** tags for each element or group them together and add classes for them.

You can change the layout of the gallery in the settings of the **Repeater**, or choose each component and change its settings.

![Change the layout of the gallery in the settings](https://i.imgur.com/9a01tAh.png)

If you want to have some advanced style for the page, you should use some CSS codes. Go to **Manage** > **Stylesheets** > **Add Stylesheet** and add some code.

![Use some CSS codes to style the video gallery page](https://i.imgur.com/9cX1mYv.png)

All the code I’ve uploaded to Github. You can refer to it.

Go to the video gallery page on the frontend, you’ll see the new look.

![The video gallery page have a new look after styling](https://i.imgur.com/xg6ygqB.png)

