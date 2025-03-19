---
title: Creating a video gallery page - Meta Box + Breakdance
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In today's practice, we're going to find out how to create a video gallery page with the help of Meta Box and Breakdance.

This is an archive page that I created as an example:

![The example of creating a video gallery page with Meta Box and Breakdance](https://imgur.com/Otnspcw.png)

## Video version

<LiteYouTubeEmbed id='TiV3tcumXUk' />

## Preparation

The page shows a list of videos with additional information. Each video's information will be saved in a single post. In particular, the information about the video is the default information of the post. For videos, instead of uploading them to the website which makes the site heavy, I will use videos on Youtube and store those links in custom fields and display the videos from them.

Here are the tools we need for this practice:

* [Meta Box Lite](https://metabox.io/lite/): to create a custom post type for videos and have a UI on the backend to create custom fields easily;
* [Breakdance](https://breakdance.com/): to build the page.

## 1. Creating a new custom post type

Go to **Meta Box** > **Post Types** > **Add New**.

![Create a new custom post type for videos](https://imgur.com/ygeaJpW.png)

Since I want to show the author information for each video, I’ll go to the **Support** tab, and check this box.

![In the settings of the post type, choose some features of the Supports tab to add them to the post type](https://i.imgur.com/OHlexXv.png)

After publishing, you will see a new **Videos** menu like this in the **Admin Dashboard**.

![This is a new post type that we created](https://imgur.com/XUUdmL9.png)

## 2. Creating custom fields

Go to **Meta Box** > **Custom Fields** to create custom fields.

![Create new custom fields for videos](https://imgur.com/q3UXgVD.png)

In this practice, the related information of the video is the default supported by **WordPress**. So, I use only one custom field to save the video.

Also, instead of uploading the video, I use a **URL** from another place. However, I won’t use the **URL** field. The **oEmbed** field will be the best choice in this case because **Breakdance** can display the video preview directly from the link saved in this field.

![Choose oEmbed fields that allow you to save the link and display it as the video preview on the frontend](https://imgur.com/DFFW9kj.png)

In the **Settings** tab, choose **Location** as the **Post Type**, and select **Video** to apply the field to it.

![In the Settings tab, set the Location as the Video Post Type to apply the created field to this post type](https://imgur.com/K22UOU7.png)

Then, you will see all the custom fields in the post editor of the **Video** post type.

![In the post editor, you will see the created custom field](https://imgur.com/PFpL5Jb.png)

## 3. Creating a new global block

With **Breakdance**, you should create a global block to get and display information from a post first, then use this global block to display them anywhere on your site.

Go to **Breakdance** > **Global Blocks** > **Add Global Block**.

![Create a global block to get and display information from a post](https://imgur.com/tg07ysp.png)

Remember to set a post for live preview.

Add a **Div** element to cover the block. Then add a **Video** element inside. You’ll see a preview of a random video display.

![Add div and video elements to cover the block](https://imgur.com/dloZuff.gif)

Click on the icon **Insert Dynamic** data, then choose the field in the **Meta Box** section. The video preview will display.

![Choose the field in the Meta Box section](https://imgur.com/VzJYZMr.gif)

For the other information for the video, add a **Column** element to separate them into two columns.

![Add a column element to separate other information for the video](https://imgur.com/ca31KwM.gif)

In the first column, add the **Author** element. It will automatically get information about the author from the post.

![Add the author element to automatically get information about the author from the post](https://imgur.com/hztldMc.png)

You should configure it a little bit to choose which information of the author will be displayed.

![Choose informations of the author will be displayed](https://imgur.com/3mTMSQb.png)

Add the **Post Title** for the video title to the second column.

![Add the post title for the video title](https://imgur.com/c0iwSpo.png)

Add a **Text** element, there’ll be an icon when you hover it to insert dynamic data. Choose the **Author Name** field from the **Author** section.

![Add a text element and choose the author name field for the video](https://imgur.com/RwZoPoc.gif)

Add the **Post Content** element.

![Add the post content element for the video gallery](https://imgur.com/RzgIEhK.png)

For the publish date, also add a **Text** element, then insert data from the **Post Date**. You can add some text or symbol before or after the date by using the prepend and append settings.

![Add some text or symbol to video gallery](https://imgur.com/08eiYfE.gif)

That’s all to display a video in the block.

## 4. Creating the page

Go to **Pages** > **Add New** to create the page, then edit it with **Breakdance**.

Add a **Section** element to cover all the content in the body of the page. Then add the **Post Title** element to display the name of the page.

![Add a section element to cover all the content in the body of the page](https://imgur.com/r4PZ5LR.gif)

Next, look for the **Post Loop Builder**. In the **Global Block** section, choose the one we’ve just created.

![In the global block section, choose the one we’ve just created](https://imgur.com/OyGCgQK.png)

Then move to the **Query** section, choose **Custom**, and edit the query. Choose the **Post Types** as **Videos** to get data from this post type.

![Choose the post types as videos to get data from this post type](https://imgur.com/8YhDgqS.png)

Then your wanted information about the videos will be displayed.

![The video gallery on the page before styling](https://imgur.com/Cz9NwE3.png)

For styling, still in the page editor with **Breakdance**, change the settings of each element to have the look as you desire. Just customize one by one.

![Change the settings of each element to have the look as your desire](https://imgur.com/o4QaSJK.png)

Then you will see the new look of the page.

![The video gallery page have a new look after styling](https://imgur.com/Otnspcw.png)
