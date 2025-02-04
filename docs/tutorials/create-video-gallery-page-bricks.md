---
title: Creating a video gallery page - Meta Box + Bricks
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In this practice, we will find another way to do it with the help of **Meta Box** and **Bricks**.

This is my example about the video gallery page:

![This is example of the created page](https://i.imgur.com/n9yefb4.png)
## Video version

<LiteYouTubeEmbed id='zfcyY0aDZ9U' />

## Preparation

The page shows a list of videos with additional information. Each video's information will be saved in a single post. In particular, the information about the video is the default information of the post. For videos, instead of uploading them to the website which makes the site heavy, I will use videos on Youtube and store those links in custom fields and display the videos from them.

So, we need these tools to do it including

Meta Box plugin to have a framework to create custom post types and custom fields.
* [MB Custom Post Types & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create a custom post type for videos;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create custom fields easily;
* [Bricks](https://bricksbuilder.io/): to build the page.

## 1. Creating a custom post type

Go to **Meta Box** > **Post Type** to create a new post type.

![Create a custom post type](https://i.imgur.com/THfH67F.png)

Pay attention to the **Supports** tab, I want to display the author's information so tick the **Author** option.

![Go to Supports tab and choose Author](https://i.imgur.com/HUAflgc.png)

After publishing, you’ll see a new **Videos** menu in the **Admin Dashboard**.

![Created post type](https://i.imgur.com/dc5Rg1k.png)

## 2. Creating custom fields

Move to **Meta Box** > **Custom Fields** > **Add New**.

![Add a new custom field](https://i.imgur.com/dWxukiv.png)

As I said at the beginning, I’ll create only one custom field to save the video’s links. We normally use the URL field to save links. But on the front end, **Bricks** will display the link in the text format only, then we must take a few more steps to convert it to the video preview.

In this case, **Meta Box** has the oEmbed field that allows you to save the URL and display it as the video preview on the front end directly. So we’ll set the field in the Oembed type for more convenience.

![Choose the Oembed field](https://i.imgur.com/GlCjtlq.png)

After creating the field, go to the **Settings** tab, set the Location as the **Post** type, and choose **Video** to apply the created field to this post type.

![Set location for the created field](https://i.imgur.com/gW76P1w.png)

After publishing, you'll see the created custom field in the post editor.

![Created field in the post editor](https://i.imgur.com/vJ0CAja.png)

As I mentioned about ticking the **Author** option in the post type. Now we can see this section to choose the **Author** for the post here.

![Choose Author option](https://i.imgur.com/9ABCggh.png)

Let’s move on to the next steps.

## 3. Creating the page

Move to **Meta Box** > **Pages** > **Add New** to create a new page for the **Video Gallery**.

![Add a new page](https://i.imgur.com/WoeAcXy.png)

After creating the page, just edit it with **Bricks**.

First, add a **Section** element to cover the content of the page and add a **Post Title** element inside to get the page title automatically.

![Add a post title element](https://i.imgur.com/04MTJ9Q.gif)

Next, add some Div elements to divide content into sections.

Inside a **Div** element, enable the query loop, then go to **Query** > **Post type** > **Videos** to get posts from that post type.

![Enable the query loop and set up the query](https://i.imgur.com/1IAcH0j.png)

Now, we’ll display the information of the videos from the posts.

Add a **Video** element to display the video preview. Since the videos are saved in a custom field created by **Meta Box**, set the source of the video as **Dynamic** data instead of Youtube.
Choose the **Select** dynamic data button and find the **Video** oEmbed field in the **Meta Box** section.

![Choose the Select dynamic data button and find the Video oEmbed field](https://i.imgur.com/0wZwP3f.png)

Scroll down to the **Overlay** section, choose **Select** dynamic data > **Video** oEmbed field.

![Scroll down to the Overlay section, and choose Select dynamic data > Video oEmbed field](https://i.imgur.com/EsjSm8G.gif)

 Then, add a new **Div** element. You’ll see the preview of the video as you want.

![Add a new Div element](https://i.imgur.com/RnYUCY4.png)

To get the author of the video, add the Author element inside the **Div**. There‘ll be some information you want to display for the author or not.

![Add the Author element inside the Div](https://i.imgur.com/bvTN4lN.png)

For other information about the video, I added a new **Div** tag to group all 3 elements for easy styling later.

Add the **Post Title** element and change the HTML tag also add a class for it to style for the next step.

![Add the Post Title element and change the HTML tag](https://i.imgur.com/XQ7pM1E.png)

Add the **Basic Text** to show the author name and use the **Select** dynamic data button to connect it to the right field.

![Add the Basic Text](https://i.imgur.com/8BmLWMT.png)

To get the description of the video, add the **Post Content** element.

![Add the Post Content element](https://i.imgur.com/2WIup8b.png)

To display the date of the video, add the **Basic Text** element, then connect it to the post date through the **Select** dynamic data button.

![Add the Basic Text element](https://i.imgur.com/kl2W7AF.png)

After saving, you will see the video gallery on the page.

![The video gallery is displayed](https://i.imgur.com/ozwIB07.png)

For styling the page, just go back to the page editor with **Bricks**. You can choose each element to style each one individually.

![Style the page](https://i.imgur.com/01HYy7f.png)

For further styling, you can also use some **CSS**.

![Add some CSS](https://i.imgur.com/Vee375q.png)

Now, you’ll see the new look of the page.

![The final result](https://i.imgur.com/n9yefb4.png)
