---
title: Creating a video gallery page - Meta Box + Elementor
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In this series, we learned how to **create a video gallery page** using page builders. This post is one of them on how to create it using **Meta Box** and **Elementor**.

This is the video gallery page that I’ll create:

![Video gallery page using Meta Box and Elementor](https://imgur.elightup.com/P4EXEZU.png)

## Video Version

<LiteYouTubeEmbed id='1EEXCa2i-8U' />

## Preparation

The page shows a list of videos with some additional information. Each video's information will be saved in a single post. In particular, the information about the video is the default information of the post, even the author. For videos, instead of uploading them to the website which makes it heavy, I’ll use videos on Youtube, then store those links in custom fields and display the video preview from them.

In this practice, we need these tools:

* **[Meta Box Lite](https://metabox.io/lite/)**: to create a custom post type for videos and have a UI on the backend to create custom fields easily. Also, it provides the Meta Box-Elementor integrator to get dynamic data from custom fields and display them in the page built with Elementor effortlessly;
* **Elementor Pro**: to build the page.

## 1. Creating a New Custom Post Type

Go to **Meta Box** > **Post Types** > **Add New** to create a new post type for the videos.

![Create a new post type for the videos](https://imgur.elightup.com/VRE64Mt.png)

Pay attention to the **Supports** tab. I want to display the author’s information, so check the ‘**Author**’ option.

![Check the ‘Author’ option to display the author’s information](https://imgur.elightup.com/1CIrp2f.png)

After publishing, you’ll see a new menu. It’s your post type.

![Post type displays on menu](https://imgur.elightup.com/UAFBvN5.png)

## 2. Creating Custom Fields

Move to **Meta Box** > **Custom Fields** > **Add New** to create a new field group.

![Create a new custom field group](https://imgur.elightup.com/axD7epo.png)

I’ll create only one custom field to save the **URL** of the video as I said at the beginning.

We normally use the **URL field** to save links. But on the front end, **Elementor** will display the link in the text format only then we must take a few more steps to convert it to the video preview.

In this case, Meta Box has the **oEmbed** field that allows you to save the **URL** and display it as the video preview on the front end directly. So, we’ll set the field in the **oEmbed** type for more convenience.

![Set the field in the oEmbed type](https://imgur.elightup.com/MnWrqMP.png)

Creating the new fields was done. Go to the **Settings** tab, choose **Location** as **Post Type** and then, select **Video** post type to apply the created field to it.

![Go to the Settings tab, choose Location as Post Type and then, select Video post type to apply the created field](https://imgur.elightup.com/zVzROms.png)

After publishing, you’ll see the created custom field in the post editor.

![The created custom field display in the post editor](https://imgur.elightup.com/oj3Vvsf.png)

As I mentioned about checking the **Author** option when creating the post type, you’ll see this section to choose the author of the post.

![Choose the author of the post](https://imgur.elightup.com/w89OrIr.png)

Let’s move on to the next steps.

## 3. Creating a Template

We’ll create a template to stipulate how the information of each video will be displayed. Go to **Templates** > **Add News** to create a new template.

![Create a template to stipulate how the information of each video will be displayed](https://imgur.elightup.com/iKuGSDD.png)

Since it is a list of posts, we should choose the template as a **Loop Item**.

![Choose the template as a Loop Item](https://imgur.elightup.com/hrxKD2H.png)

Remember to set the preview for the template.

![Set the preview for the template](https://imgur.elightup.com/zucvnNZ.png)

First, add a **Section** element with the one column layout to contain all the information of the video.

![Add a Section element with the one column layout to contain all the information of the video](https://imgur.elightup.com/1WrQP12.png)

Then, add a **Shortcode** element inside it to display the video preview.

![Add a Shortcode element inside it to display the video preview](https://imgur.elightup.com/Q5t6fQI.png)

Since, the video links are saved in a custom field created with **Meta Box**, use the **Dynamic Tags** and look for **Meta Box Field** in the **Post** section.

![Use the Dynamic Tags and look for Meta Box Field in the Post section](https://imgur.elightup.com/FN6xsfK.png)

After that, choose the field **Video oEmbed** that we use to save the video **URL**. The video preview will display immediately after.

![Choose the field Video oEmbed that we use to save the video URL](https://imgur.elightup.com/ZJZMfnM.png)

For other information about the video, I’ll group them in a section and use the **Inner Section** element with two columns.

![Use the Inner Section element with two columns](https://imgur.elightup.com/3EUIAYi.png)

Next, add an **Author Box** element into the first column.

![Add an Author Box element into the first column](https://imgur.elightup.com/QXhWqWp.png)

You can change its settings to choose to display some kind of **Author** information or not.

![Choose to display some kind of Author information](https://imgur.elightup.com/QXhWqWp.png)

In the second column, add the **Post Title** to display the video title.

![Add the Post Title to display the video title](https://imgur.elightup.com/3Vw7H0o.png)

You may want to display it as a clickable link, so choose the link as **Post URL**.

![Choose the link as Post URL](https://imgur.elightup.com/Gtvy4PL.png)

Next, add a **Text Editor** element to display the author name.

![Add a Text Editor element to display the author name](https://imgur.elightup.com/yDXovhn.png)

This information is saved in the **Author Name** field that is default by **WordPress**. So, use the **Dynamic Tags** and go to the **Author** section to find it.

![Use the Dynamic Tags and go to the Author section to find the information](https://imgur.elightup.com/x61X56B.png)

Next, add the **Post Content** element to display the description about the video.

![Add the Post Content element to display the description about the video](https://imgur.elightup.com/QeY2irj.png)

For the post date information, also add a **Text Editor** element and use **Dynamic Tags** to get information.

![Add a Text Editor element to get the post date information](https://imgur.elightup.com/rzq4mRq.png)

![Use Dynamic Tags to get information](https://imgur.elightup.com/gLjV8oS.png)

Now, all the information about the video is already displayed.

![All the information about the video is already displayed](https://imgur.elightup.com/lbPxNpc.png)

We’ll create a new page and use this template for it in the next step.

## 4. Creating the Page

Let’s create a new blank page as usual.

![Create a new blank page](https://imgur.elightup.com/4vfkBcE.png)

Then, we will edit it with **Elementor**.

![Edit page with Elementor](https://imgur.elightup.com/1f6fJ0X.png)

First, create a **Section** to cover all the posts.

![Create a Section to cover all the posts](https://imgur.elightup.com/S6d84v1.png)

![Select the structure](https://imgur.elightup.com/gGdJhuV.png)

Then, add the **Loop Grid** element inside it.

![Add the Loop Grid element inside](https://imgur.elightup.com/RB1UuvP.png)

In the **Layout** settings of the **Loop Grid**, choose the template as which one we’ve just created.

![Choose the template as which one we’ve just created](https://imgur.elightup.com/un83cY8.png)

Move to the **Query** section, choose the **Source** as **Videos** that is our post type.

![Choose the Source as Videos that is our post type](https://imgur.elightup.com/po60ujg.png)

And then, you’ll see all the videos displayed in the right format.

![All the videos displayed in the right format](https://imgur.elightup.com/ABOWhbt.png)

## 5. Styling the Page

To change the layout of the page such as the grid, the number of posts displayed per page, go to change the **Settings** tab in the page editor with **Elementor**.

![Change the layout of the page](https://imgur.elightup.com/ABOWhbt.png)

To change the way each information displays, you should go to edit each element in the created template for displaying each video.

![Change the way each information displays](https://imgur.elightup.com/AVkWsf0.png)

Back to the page on the frontend, refresh it then you will see a new look.

![Video gallery Page with Meta Box and Elementor](https://imgur.elightup.com/P4EXEZU.png)
