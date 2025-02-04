---
title: Creating a video gallery page - MB Views
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

If you don’t want to use any page builder, you can use **MB Views from Meta Box to create a video gallery page**.

This is an example of the video gallery page created with MB Views:

![example for the video gallery page created with MB Views](https://i.imgur.com/07ndSkM.png)

## Video Version

<LiteYouTubeEmbed id='8EDWUjTL2uI' />

## Preparation

The page shows a list of videos with some additional information. Each video’s information will be saved in a single post of a custom post type. In particular, the information about the video such as title, description, and author is the default information of the post. For videos, instead of uploading them to the website which makes the site heavy, I’ll use videos on Youtube then store those links in a custom field and display the videos from them.

In this practice, we need these tools:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom post types and custom fields;
* [MB Custom Post Type](https://wordpress.org/plugins/mb-custom-post-type/): to create a custom post type for videos;
* [ MB Builder](https://metabox.io/plugins/meta-box-builder/): to have an intuitive UI to create custom fields in the backend;
* [MB Views](https://metabox.io/plugins/mb-views/): helps us create the template for the video gallery page.

## 1. Creating a new custom post type

Go to the **Meta Box** > **Post Types** > **New Post Type** to create a new custom post type for videos.

![Go to the Meta Box > Post Types > New Post Type to create a new custom post type for videos](https://i.imgur.com/YPY9Nm3.png)

When creating the post type, we have the **Supports** tab which provides some features to add to your post type. In this case, we’ll display the author’s information on the page, so check the **Author** box.

![check author box in supports tab to display the author’s information](https://i.imgur.com/upV5QPo.png)

After publishing, you will see your new post type in the **Admin Dashboard**.

![the created custom postype displayed](https://i.imgur.com/VhGNQpB.png)

## 2. Creating custom fields

Go to **Meta Box** > **Custom Fields** > **Add New** to create a new field group.

![Go to Meta Box > Custom Fields > Add New to create a new field group](https://i.imgur.com/yPoeBb6.png)

In this practice, I just display some basic information about the video such as title, author, content, and date supported by WordPress by default. As mentioned, I use only one custom field to save the URL of the videos. We should use the **oEmbed** field for it. It allows the **MB Views** to render the video preview from the URL directly.

![use the oEmbed field to render the video preview from the URL directly](https://i.imgur.com/hZsGgZT.png)

Then go to the **Settings** tab, set **Location** as **Post Type**, and select **Video** to apply the created field to it.

![go to the Settings tab, set Location as Post Type, and select Video to apply the created field to it](https://i.imgur.com/6qmpevs.png)

After publishing, you will see the created custom field in the post editor.

![the created custom field in the post editor](https://i.imgur.com/cpupEP4.png)

Since we have checked the **Author** box when creating the post type in the **Supports** tab, we have the section to choose the author for the post.

![author section to choose the author for the post](https://i.imgur.com/TekKapY.png)

Let’s move on to the next step.

## 3. Creating the page

First of all, create a new page for the video gallery. Move to **Pages** > **Add New** as usual.

![Pages > Add New to create a new page for the video gallery](https://i.imgur.com/jAvbbSj.png)

To create the template for this page, go to **Views** in **Meta Box** and create a new one.

![go to Views in Meta Box to create the template for the page](https://i.imgur.com/2T0Irx7.png)

In the **Template** tab, just add some code or insert fields from the list on the right sidebar to get and display information.

![add some code or insert field from the list on the right sidebar to get and display information](https://i.imgur.com/XNPs5VL.png)

First, add the **Post Title** field to display the page's title.

![add the Post title field to display the page's title](https://i.imgur.com/fgpsvAQ.png)

Next, for the section that displays the video’s information, add this code.

![for the section that displays the video’s information, add this code](https://i.imgur.com/8g79Hju.png)

```
{% set args = { post_type: 'video', posts_per_page: 9 } %}
{% set posts = mb.get_posts( args ) %}
{% for post in posts %}

{% endfor %}
```

In there:

`{% set args = { post_type: 'video', posts_per_page: 9 } %}`: is to declare that we’ll get posts from the post type that has the slug as **video** with 9 posts per page;

`mb.get_posts()`: this function is to get posts;

`{% for post in posts %}`: this loop helps to list the posts.

Then, just add some fields from the list on the right sidebar into the loop to display video’s information.

First, choose the **Video Oembed** to display the video preview.

![choose the Video Oembed to display the video preview](https://i.imgur.com/yyONNk3.png)

There will be two options to output data. Since we want to display the video preview, choose the first one.

![choose the first output data in settings to display video preview from URL](https://i.imgur.com/5lqJKHI.png)

To get and display the author’s information including avatar and name, we will use the mb.get_user() function with following code:

```{% set author = mb.get_user( post.post_author ) %}```

![use the code with the function to get and display the author’s information including avatar and name](https://i.imgur.com/bpPg2Mh.png)

Now, to display the video’s information, just insert the corresponding fields.

In the right sidebar, go to the **User** tab, set **Post author**, and choose the **User avatar** field.

![go to the User tab, set Post author, and choose the User avatar field to get author's avatar](https://i.imgur.com/G1NNVXO.png)

Choose the **Post title** for the video title in the **Post** tab.

![Choose the Post title for the video title](https://i.imgur.com/a09JS9L.png)

Go back to the **User** tab, choose the **User first name**.

![choose the User first name](https://i.imgur.com/Mp1lboW.png)

Then insert the **Post content** field.

![insert the Post content field](https://i.imgur.com/QO5gSkT.png)

Finally, choose the **Post date**.

![choose the Post date](https://i.imgur.com/TaFedis.png)

That’s all the information that we want to display for the video.

Go down to the **Settings** section of the view, choose the **Location** as **Page** and choose the **Video Gallery that is the name of the page we have created.

![Go down to the Settings section of the view, choose the Location as Page and choose the Video Gallery](https://i.imgur.com/ohtUkE9.png)

Go to the page on the front end, you’ll see the videos displayed.

![the video displayed on the frontend](https://i.imgur.com/u9APx9d.png)

## 4. Styling the page

To style the page, go back to the edit **Template** in the **Views**.

Before styling, we should add some **div** tags and classes for each information of the video.

![add some div tags and classes for each information of the video](https://i.imgur.com/1qXGqnI.png)

Next, go to the **CSS** tab of the view, and add some code to style the template.

![go to the CSS tab of the view, add some code to style the template](https://i.imgur.com/boSSZ9y.png)

I uploaded all of these codes on [Github](https://github.com/wpmetabox/tutorials/tree/master/creat-a-video-gallery-page-with-mb-views), so you can refer to it for more details.

Now, go back to the page on the frontend, you’ll see a new look of the page.

![the new look of the video gallery page](https://i.imgur.com/07ndSkM.png)
