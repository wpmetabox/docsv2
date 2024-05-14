---
title: Creating a video gallery page - Meta Box + Kadence
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Ready to beautify your website with a stunning video gallery? In today's practice, we're going to find out how to do it with **Meta Box** and **Kadence**.

This is my example.

![A video gallery created with Meta Box and Kadence](https://i.imgur.com/ndXhllO.png)

## Video version

<LiteYouTubeEmbed id='JlYEo5T7VlQ' />

## Preparation

The page is an archive page with a list of videos. Each video is kept in a post of a custom post type.

The information of the video is also the default information from the post, even the short description, author, or date. Just the videos are saved in a custom field.

So, we need some tool for this practice:

* [Meta Box plugin](https://wordpress.org/plugins/meta-box/) to have a framework that allows creating a custom post type and a custom field for videos. You can download it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/);
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for videos;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to create a custom field to store the video URL.

You can download and install each extension individually or use the **Meta Box AIO** which has all the Meta Box extensions.

Finally, I have **Kadence** with **its pro version** to have some extra types of blocks to flexibly display the information.

## 1. Creating a new post type

Go to **Meta Box** > **Post Types** to create a new post type for the videos.

![Create a new post type for the videos](https://i.imgur.com/UrQfdhp.png)

Since I want to show the author information for each video, go to the **Supports** tab, and check the **Author** box to enable the author feature for the posts.

![Check the box to enable the author feature](https://i.imgur.com/SwVCnfd.png)

After publishing, you will see a new menu displayed. It's your post type.

![A new menu display in the dashboard](https://i.imgur.com/jkynIAI.png)

## 2. Creating a custom field

Move to **Meta Box** > **Custom Fields** > **Add New** to create a new field group.

![Move to Meta Box > Custom Fields > Add New to create a new field group.](https://i.imgur.com/lpux754.png)

In this practice, the related information of the video is the default supported by WordPress. So, I use only one custom field to save the video. Also, instead of uploading the video, I use a **URL** from another place. However, I won’t use the URL field. The **oEmbed** field will be the best choice in this case because **Kadence** can **display the video preview directly from the link saved in this field type**.

![Choose the oEmbed field to save the video’s link](https://i.imgur.com/4QEuhAa.png)

After creating the field, in the **Settings** tab, choose **Location** as the **Post type**, and select Video to apply these fields to it.

![Set location to apply the field to the Video post type](https://i.imgur.com/rZ8PqwQ.png)

Now, you’ll see the created custom field in the post editor.

![The created custom field in the post editor](https://i.imgur.com/IUxR4z7.png)

Pay attention to the **Author** box. This section is available since we set it to enable the author feature for the **Video** post type when creating it.

![The Author box is available since we set it to enable the author feature for the Video post type.](https://i.imgur.com/i0PF1yL.png)

Let's add some information and some videos as well.

Now, move on to the next step.

## 3. Creating a query card for the video

To get information about each video from posts, you should create a query card first. This is a new feature of the **Advanced Query Loop** from **Kadence**. It allows us to define the template for individual posts within the loop.

Go to **Kadence Blocks** > **All Query Cards** and create a new one.

![Go to Kadence Blocks > All Query Cards and create a new query card](https://i.imgur.com/oQJ8ANU.png)

After choosing the wanted layout for the card, you will see some default blog posts displayed.

![After choosing the wanted layout for the card, some default blog posts display.](https://i.imgur.com/mKqU2Yj.png)

Go to the right sidebar, set the preview as the post type that we created.

![Set the preview as the post type that we created](https://i.imgur.com/hX7gfgm.png)

The preview will change, but please notice that it’s just changing in the preview, not querying any data.

![The preview will change, not querying any data.](https://i.imgur.com/F8qs8Wd.gif)

So now, you can remove some unnecessary blocks, and choose the suitable blocks to get the corresponding information.

First, to get the video preview, choose the **Dynamic HTML** block to have more options to customize the display of the video preview.

![Choose the Dynamic HTML block to have more options to customize the display of the video preview](https://i.imgur.com/S6bMTXM.png)

Then, set the **HTML Content** as **Post Custom Field** and select the field of the video.

![Set the HTML Content as Post Custom Field and select the field of the video](https://i.imgur.com/Eb8EYl3.png)

Now, you can see the videos displayed immediately.

![The videos display](https://i.imgur.com/IEM0UOS.png)

For the additional information of the video, we style it into 2 columns like this:

![2 columns of additional information of the video](https://i.imgur.com/vdwxAJL.png)

So, add a **Columns** block, and choose the layout for it.

![Add a Columns block and choose the layout for it](https://i.imgur.com/eWcJqMl.png)

In the first column, add an **Advanced Image** block to display the author’s avatar. Instead of selecting any image, just enable dynamic image for this block.

![Add an Advanced Image block to display the author’s avatar, just enable dynamic image for this block](https://i.imgur.com/VfMSt8F.png)
 
Click on the button as the image below shown, and choose the **Author Image** from the dropdown list.

![Choose the Author Image from the dropdown list](https://i.imgur.com/I36XJrC.png)

After that, you will see the author's avatar appear.

![The author's avatar appears.](https://i.imgur.com/AgPeACn.png)

Move to the second column, choose a **Section** block to cover all the rest information. Next, add a **Text Advanced** block to get the name of the video stored in the title of the post.

![Choose a Section block to cover all the rest information and a Text Advanced block to get the name of the video](https://i.imgur.com/AKFUqd1.png)

Now, enable dynamic content, and choose the **Post Title** option.

![Enable dynamic content and choose the Post Title option](https://i.imgur.com/BgIQUwF.png)

Next, choose the **Author Name** block. The name says it all!

![Choose the Author Name block to get the names of the authors.](https://i.imgur.com/GdbvY9Z.png)

For the video’s description, choose the **Dynamic HTML** block again. Then, set the **HTML Content** as **Post Excerpt**.

![For the video’s description, choose the Dynamic HTML block, then set the HTML Content as Post Excerpt.](https://i.imgur.com/UyrbM28.png)

And the last information is the published date, choose another **Dynamic HTML** block and connect it to the post date.

![For the published date, choose the Dynamic HTML block and connect it to the post date.](https://i.imgur.com/zykh2TG.png)

That’s all the information in the videos that I want to show.

Now, we can change some parameters in each block to have a better look.

![Change some parameters in each block to have a better look](https://i.imgur.com/3QNDH6O.png)

## 4. Displaying the video gallery on the page

It’s time to display the video gallery on the frontend.

### 4.1 Creating a page

First, go to** Meta Box** > **Pages** to create a new page as usual.

![Go to Meta Box > Pages to create a new page](https://i.imgur.com/AdWfzmf.png)

### 4.2 Adding query

We’ve regulated how the information displays in the **Query Card**, but haven’t stipulated where it will query from yet. So now, add the** Advanced Query Loop** block provided by Kadence, and create a new query.

![Add the Advanced Query Loop block.](https://i.imgur.com/qqcP6zv.png)

![Create a new query](https://i.imgur.com/8VJXvMU.png)

For the layout, I will do it later, so skip choosing any pre-made layout.

There’ll be a place to choose which post type we want to query from on the below screen. Choose the post type that we use for the videos.

![Choose the post type that we use for the videos.](https://i.imgur.com/vu1qwEP.png)

And, don’t forget to select the created card for the layout of each video display. Then, this loop will inherit its layout and styling.

![Select the created card for the layout of each video display](https://i.imgur.com/5FbM6RX.png)

Now, the page displays all the videos along with their information already. You can change the layout of the gallery by changing some settings.

![Change the layout of the gallery by changing some settings](https://i.imgur.com/ozrgq5S.png)

You also can use some CSS as well.

![Use some CSS](https://i.imgur.com/QIg6mzT.png)

Let’s see how they look on the page!

![The final result of the video gallery](https://i.imgur.com/ndXhllO.png)

So, we've created the page for the video gallery.

Sometimes, you may want to display an attractive [video playlist](https://docs.metabox.io/tutorials/display-video-playlist-mb-views/) on your sites as well. You can refer to it
