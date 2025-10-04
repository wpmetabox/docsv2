---
title: Creating a video gallery page - Meta Box + Zion
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Do you want to display your video list on your page? In [this series](https://metabox.io/series/video-gallery/), I will show you **how to create a video gallery page** with the page builders. In today's practice, we're going to find out how to do it with **Meta Box** and **Zion**.

This is the final look of the video gallery page.

![an example of video gallery page was built by Meta Box and Zion](https://imgur.elightup.com/f8qJXIx.png)

Let’s do it step by step.

## Video version

<LiteYouTubeEmbed id='vjdOhrsmS7Y' />

## Preparation

The page is an archive page with a video list and their information. Each video’s information is kept in a single post of a custom post type.

In this tutorial, I use only 1 custom field to store the URL of the video instead of uploading the video on the website to avoid bloating the site. Then, display a video on the front end from the URL using Zion. You obviously can also add more custom fields to save extra information about the video.

So in this practice, we need these tools:

* **[Meta Box Lite](https://metabox.io/lite/)**: to create a custom post type for videos and have a UI on the backend to create custom fields easily;
* **Zion Builder** and **its Pro Version** to build the video gallery page.

## 1. Creating a new custom post type

Go to **Meta Box** > **Post Types** > **Add New** to create a new post type for the videos.

![Go to Meta Box, Post Types, Add New to create a new post type for the videos](https://imgur.com/z47w9mX.png)

Pay attention to the **Supports** tab when creating the post type. I want to display the author’s information on the gallery page, so check the box to enable the author feature.

![check the Author box in the Supports tab to display the author’s information on the gallery page](https://imgur.elightup.com/2RKLTlK.png)

After publishing, you can see a new menu, it’s your post type.

![the created custom post type displayed](https://imgur.elightup.com/8HIQZsB.png)

## 2. Creating custom fields

Move to **Meta Box** > **Custom Fields** > **Add New** to create a new field group.

![Move to Meta Box, Custom Fields, Add New to create a new field group](https://imgur.com/kSHAtGX.png)

As I mentioned before, I’ll create only one custom field to store the video **URL**. To display the video preview on the page, I highly recommend you use the **oEmbed** field instead of the URL field.

![you should use the oEmbed field instead of the URL field to display the video preview on the page](https://imgur.elightup.com/DSDjlkk.png)

After creating the field, go to the **Settings** tab, choose the **Location** as **Post type**, and select **Video** to apply the custom field to this post type.

![go to the Settings tab, choose the Location as Post type, and select Video to apply the custom field to this post type](https://imgur.com/1Dr7ppQ.png)

Now, you’ll see the created custom field in the post editor.

![the created custom field in the post editor](https://imgur.elightup.com/PDbuToj.png)

Pay attention to the **Author** box. This section is available since we set it to enable the author feature for the Video post type when creating it.

![the Author box is available in post editor since we set it to enable the author feature for the Videos post type when creating it](https://imgur.com/etpWD6n.png)

Now let’s move on to the next steps.

## 3. Creating the page

Go to **Pages** > **Add News** to create a new page for the video gallery, as usual.

![Go to Pages, Add News to create a new page for the video gallery](https://imgur.elightup.com/t1cb2mB.png)

Fill information and then remember to click on the area next to the title to disable the page title. We’ll get and display it by **Zion** later for more flexibility in styling.

![Fill information and then remember to click on the area next to the title to disable the page title. We’ll get and display it by Zion later for more flexibility in styling](https://imgur.elightup.com/DjMIAW0.png)

Now, edit the page with **Zion Builder**.

First, add the **Section** element to cover all the content of the page.

![add the Section element to cover all the content of the page](https://imgur.elightup.com/cQiDUrg.png)

![add the Section element to cover all the content of the page](https://imgur.elightup.com/hPnO5NY.png)

Then, add the **Heading** element inside to get the page title.

![add the Heading element inside to get the page title](https://imgur.elightup.com/uRDSyn6.png)

And, add **dynamic data** from the **Post title** to it.

![add dynamic data from the Post title to the Heading element](https://imgur.elightup.com/Wt9tzKR.png)

To divide the videos into 3 columns, add a **Column** element.

![add a Column element to divide the videos into 3 columns](https://imgur.elightup.com/p5XE5aP.png)

### 3.1. Setting the query

Inside the **Column**, add a **Container** element to cover the post.

![Inside the Column, add a Container element to cover the post](https://imgur.elightup.com/Pt3gNl4.png)

In the **Advanced** tab of the **Container**, enable the **Repeater Provider** to display all the posts from the wanted post type.

![In the Advanced tab of the Container, enable the Repeater Provider to display all the posts from the wanted post type](https://imgur.elightup.com/pV9SsOC.png)

Next, set the **Query type** as **Query builder** and **Post type** as **Videos** to query all the posts from this post type.

![set the Query type as Query builder](https://imgur.elightup.com/i0imGo6.png)

![set the Post type as Videos to query all the posts from this post type](https://imgur.elightup.com/sxB0Den.png)

Remember to enable the **Repeater Consumer** to display all the posts in the chosen post type.

![enable the Repeater Consumer to display all the posts in the chosen post type](https://imgur.elightup.com/YhFZMqz.png)

You will see nothing displayed now since we didn’t get any information from the video. So let’s add some elements to show them.

### 3.2. Displaying video information

Inside **Container**, for the video preview, add a **Text** element.

![Inside Container, for the video preview, add a Text element" width](https://imgur.elightup.com/uy2ssBZ.png)

Since the video URL is saved in a custom field created by **Meta Box**, use the **dynamic data** option, and look for the **Meta Box Field** option.

![Since the video URL is saved in a custom field created by Meta Box, use the dynamic data option, and look for the Meta Box Field option](https://imgur.elightup.com/Z43qaUr.png)

Then choose the **Video Oembed** field from the list. You will see the video preview immediately.

![choose the Video Oembed field from the list then the video preview immediately](https://imgur.elightup.com/SWcZWIz.png)

Next, add some **Column** elements to set the layout for the rest of the video information.

![add some Column elements to set the layout for the rest of the video information](https://imgur.elightup.com/N22a0bJ.png)

One column is to display the avatar of the author, and the other one will display other information about the video.

![One column is to display the avatar of the author, and the other one will display other information about the video](https://imgur.elightup.com/xdZA4WV.png)

In the first column, to get the author’s avatar, add an **Image** element. Then, also add **dynamic data** to it, and choose the **Author Profile Image** option. The picture of the author will be displayed immediately.

![to get the author’s avatar, add an Image element and add dynamic data to it, choose the Author Profile Image option](https://imgur.elightup.com/6XWwOcj.gif)

In the second column, add a **Heading** element for the video title. Also add **dynamic data** for it from the **Post title**.

![add a Heading element for the video title. Also add dynamic data for it from the Post title](https://imgur.elightup.com/xMYA43C.gif)

Add a **Text** element then choose **Author info** from **dynamic data** to get the name of the author.

![Add a Text element then choose Author info from dynamic data to get the name of the author](https://imgur.elightup.com/bj5L1iI.gif)

For the description and date of the video, do likewise, just choose the right field from the list.

![For the description and date of the video, do likewise, and choose the right field from the list](https://imgur.elightup.com/e81rZBD.gif)

You will see how it displays on the front end.

![the video gallery page on the frontend](https://imgur.elightup.com/f4MXooz.gif)

## 4. Styling the page

Go back to **edit the page with Zion**, you can change the settings of each element to get a new look of the page.

You also can add some **CSS** for further styling.

![You can add some CSS for further styling](https://imgur.elightup.com/D9xD1oY.png)

This is the final result of the video gallery page that I want.

![the final result of the video gallery page](https://imgur.elightup.com/f8qJXIx.png)
