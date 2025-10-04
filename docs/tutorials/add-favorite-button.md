---
title: Adding a favorite button
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

**MB Favorite Posts** is a solution of Meta Box for users saving a post to their Favorite lists. This solution provides you with all the needed tools and features to **add a Favorite button**. This tutorial will show how!

## Video version

<LiteYouTubeEmbed id='fSFmNp-Ayew' />

## Preparation

These are the tools we need for this practice:

* [Meta Box](https://metabox.io/): to have a framework to use its solution;
* [MB Favorite Posts](https://metabox.io/plugins/mb-favorite-posts/): to create a favorite button.

After activating the **MB Favorite Posts** solution, a favorite button will automatically appear on the posts of your site like this:

![Favorite button will automatically appear on the posts](https://imgur.elightup.com/cbHgNd6.png)

In default, this button is named as **Add to Favorites**, and shown at the end of the content section of your blog posts. Of course, you can change its name, display position, and ask users to log in before using this button. In particular, you can add a page for users to sign up for a new account or see the list of their favorite posts.

To set up the Favorite button, go to **Settings > Favorite Posts**.

![Set up the favorite button](https://imgur.elightup.com/b1XVrCl.png)

For each side, there are 3 tabs of settings:

* General: for general settings such as Position, Post Types,...
* Button: for button styles and content such as change text, color, or font-size
* Icon: show/hide icon and change parameter

## General settings

![General settings](https://imgur.elightup.com/cf6kslJ.png)

### Pre-built styles

You can change the style for the button. We create 3 predefined styles for you to choose from:

* Default: which has a form of a button
* Like: a simple like icon (similar to Facebook like button)
* Rounded: a rounded button with an icon only

![Style for the button](https://imgur.elightup.com/1FlEIKQ.gif)

### Enabling for non-logged in users

This option is chosen as default. However, if users do not log in, their favorite posts list will be **temporarily saved in the cookie of the browser**, and will be lost when the cookie is deleted.

![The favorite posts list will be temporarily saved in the cookies or the browser](https://imgur.elightup.com/kR3395E.png)

To avoid these annoying cases, you had better allow users to create an account and save their favorite posts list in their account.

First, untick the **Enable for non-logged in users** option > **Register Page** section:

![Choose Register page option](https://imgur.elightup.com/0B0GWGe.png)

If you’ve had a register page already and want to use it, just leave the **Register Page** box blank. Then anyone logging in to their accounts with any roles can use the favorite button.

Or you can create a new blank page.

![Create a new blank page](https://imgur.elightup.com/DRNIbbJ.png)

After that, in the **Register Page** section, you will see the page you have just created in the dropdown list as below:

![The created page](https://imgur.elightup.com/Bsfkh8f.png)

**MB Favorite Posts** will automatically add fields to this register page with a form.

![MB favorite posts will automatically add fields](https://imgur.elightup.com/v9olzco.png)

### Position

Choose where to display the favorite button as you want by this setting. To choose its location on a single post page, you just have to choose 1 of these 3 options in the **Position** section on the setting page like this:

![Choose one of 3 options in Position](https://imgur.elightup.com/oIy4TIa.png)

If you want to display the Favorite button in the posts of a certain post type, tick to choose that post type in the **Post Types** section.

![Choose the post type in the Post Types section](https://imgur.elightup.com/2GmNxJx.png)

Moreover, you can show the favorite button at other positions on a single post or a random page if you want. Just refer to the code in the **Shortcodes** section.

![Refer to the code in the Shortcodes section](https://imgur.elightup.com/ibmcdQw.png)

For example, I added my favorite button to the sidebar of the my website by going to **Appearance > Widgets** and add a **Shortcodes** to paste the shortcode as follow:

![Add a shortcodes to paste the shortcode](https://imgur.elightup.com/zbOSEv1.png)

### Dashboard Page

It is a page where users review their list of favorite posts. When you choose to allow non-logged in users to use this feature, you still have to choose the **Dashboard** page as a certain page, so that users have a place to see their favorite posts list. In case, users choose a post as their favorite, it will be shown on this **Dashboard Page**.

![The chosen posts will be shown in Dashboard Page](https://imgur.elightup.com/re6rDzh.png)

Finally, you need to display your **Favorite Posts** page on your website to help users access it easily. I will set it on my menu as an example.

![Display the favorite posts page on the website](https://imgur.elightup.com/eNLSwfC.png)

When going to the **Favorite Posts** page, you will see a list of favorite posts display like this:

![The list of favorite posts displays like this](https://imgur.elightup.com/HKdPPS9.png)

## Button settings & Icon settings

**Button** and **Icon** tabs in the settings of the MB Favorite Posts solution are so easy to set up. They allow you to customize the style for all elements of the button, such as text, size, color, etc. It also provide a live preview for the bottom, so you can easily set up the button and icon as you want.

![Buttons in the settings](https://imgur.elightup.com/W8fsJ28.png)

![Icon tabs in the settings](https://imgur.elightup.com/0kjcCfA.png)




