---
title: Showing upcoming events - using MB Views
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Today, we're delving into a practical application of the **MB Views** extension from Meta Box on how to **show upcoming events**. It helps to highlight important dates and deadlines, making it easier for everyone to stay informed and participate.

Just events with the end date after the current day could be displayed. When each day passes, events that have ended will automatically disappear from the page.

![The upcoming events section is created by MB Views.](https://imgur.elightup.com/xSyaxCt.png)

## Video version

<LiteYouTubeEmbed id='s755CePEo8M'/>

## Preparation

Assume that today is January 10th.

![Assume that today isJanuary 10th.](https://imgur.elightup.com/GfpVAme.png)

We will filter and display the events that are either happening now or scheduled for the future. This signifies that an event with an end date beyond January 10th will be shown on the page.

![An event with an end date beyond January 10th will be shown on the page.](https://imgur.elightup.com/TCg2vTG.png)

In this case, each event will be a post of a custom post type. To store some typical information about the events, including dates, I’ll create some custom fields. The start date and the end date will be used for that filter.

Before going ahead, let’s prepare some necessary tools for this practice.

* [The Meta Box plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create a custom post type, custom fields, and a template for displaying the upcoming events;
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the events;
* [MB Views](https://metabox.io/plugins/mb-views/): to create a template to display the upcoming events;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create the custom fields visually.

And now, let’s start!

## 1. Creating a new post type

Go to **Meta Box** > **Post Types** to create a new post type for the events.

![Create a new post type for the events.](https://imgur.elightup.com/yyfMGTt.png)

## 2. Creating custom fields

Each event might include additional details. Then, we should use custom fields to store them; just create them as you go. These are some typical ones for this practice.

![Some typical custom fields to store event information](https://imgur.elightup.com/wqkeGqN.png)

Two of them, the start date and end date, are essential since they will be used for the filter.

Now, go to **Meta Box** > **Custom Fields** and create them.

![Go to Meta Box > Custom Fields to create fields.](https://imgur.elightup.com/Bl8iZWM.png)

I’ll choose the **Date Picker** field type for both the start and end date of the event.

![Choose the Date Picker field type for the start and end date of the event.](https://imgur.elightup.com/YBxf59P.png)

To show the date on the management dashboard for easy comparison with results, we should enable the field’s setting below. This feature is only visible when enabling the [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) extension. While optional, it's a handy feature to have.

![Turn on the button to show the date on the management dashboard.](https://imgur.elightup.com/P0k6zHg.png)

After creating all the fields, go to the **Settings** tab. Choose **Location** as **Post type**, and select **Event** to apply these fields to this post type.

![Set the location to apply these fields to the Event post type.](https://imgur.elightup.com/GUYQ8N3.png)

Then, in the post editor, you will see the created custom fields.

![The created custom fields in the post editor.](https://imgur.elightup.com/wqkeGqN.png)

Simply input data into them.

Here are some posts that I made, for example.

![Some posts that I created for example.](https://imgur.elightup.com/p2lQEeM.png)

The start date and the end date are shown as admin columns as well. You may want to see these ones once again in the end to easily compare them with the ones displayed on the page.

## 3. Creating a template to display all events on the page

In this step, I just want to show all the posts. It means all the events. For filtering the upcoming events, I’ll set a condition later.

Head over to **Meta Box** > **Views** to create a new template for the upcoming events section.

![Go to Meta Box > Views to create a new template for the upcoming events section.](https://imgur.elightup.com/gv0qKuC.png)

With **MB Views**, you can insert fields into the template by clicking the **Insert Fields** button, and choose any fields on the right sidebar to get data from them.

![Insert fields into the template by clicking the Insert Fields button > choose any fields on the right sidebar to get data from them.](https://imgur.elightup.com/hzqoHdE.png)

Or, you can also add some lines of code to the **Template** tab, like this:

![Add some lines of code to the Template tab.](https://imgur.elightup.com/H59IscS.png)

```css
{% set args = { post_type: 'event', posts_per_page: -1 } %}
{% set posts = mb.get_posts( args ) %}
{% for post in posts %}
{% endfor %}
```
**In there**:

```css
{% set args = { post_type: 'event', posts_per_page: -1 } %}
```

This line is to declare that we’ll get posts from the post type that has the `event` slug. And, `-1` helps to get all posts in that post type. You can change it to get the expected number of posts.

```css
{% set posts = mb.get_posts( args ) %}
```

We use the `mb.get_posts` function to get the posts.

As we have various posts, use a loop to display all of them.

```css
{% for post in posts %}
{% endfor %}
```

For displaying the event's information, just use the button, as I said before. And then, insert some fields into the mentioned loop.

First, for the image of the event, choose the **Post thumbnail** field. You can choose a suitable image size to display.

![For the image of the event, choose the Post thumbnail field.](https://imgur.elightup.com/XQaxxEn.png)

Next, choose **Post title** to display the title of the event.

![Choose Post title to display the title of the event.](https://imgur.elightup.com/6rMbokY.png)

Now, I want to show the start date, end date, and location, which are saved in the custom fields created with Meta Box. Find them in the list, then insert the fields as usual.

![Look for the Event Information field group.](https://imgur.elightup.com/AlOa5Jz.png)

**Meta Box** also provides some options to set the output of the date. So, just set the one that fits your needs.

![Meta Box also provides some options to set the output of the date.](https://imgur.elightup.com/jlFr28H.png)

Do the same to display the end date and location.

![Display the end date and location.s](https://imgur.elightup.com/HbeqDs6.png)

That’s all the information I want to show for the events.

I just keep the settings of the template’s type as **Shortcode** to display this template anywhere easier.

![Keep the settings of the template’s type as shortcode to display this template anywhere easier.](https://imgur.elightup.com/dVBIP7S.png)

Notice that you should copy the generated shortcode to use it later.

![Copy this generated code to use it later.](https://imgur.elightup.com/ZjLJxND.png)

Now, go to any place where you want to display the upcoming events, add the **Shortcode** block.

![Add the Shortcode block.](https://imgur.elightup.com/JK2whdN.png)

Following this, insert the created shortcode into the box.

![Paste the created shortcode in the box.](https://imgur.elightup.com/Q3fWTyz.png)

So, we’ve just finished getting all the posts of the **Event** post type. Again, I just specifically mentioned "all the posts".

![Display all the posts of the event post type.](https://imgur.elightup.com/uLctyxt.png)

If you want to style the section, go back to the template and add some codes.

![If you want to style the section, back to the template, add some codes.](https://imgur.elightup.com/fyKD6f7.png)

```css
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
```

This is to call the Awesome font library in order to add icons for the start date, end date, and location.

You should also add some **div** tags and classes to style easily.

![Add some div tags and classes to style easily.](https://imgur.elightup.com/r2sO8B3.png)

Afterward, go to the **CSS** tab and add some codes. All of these codes are available on our [GitHub](https://github.com/wpmetabox/tutorials/tree/tutorials/show-upcoming-event) channel, so you can refer to it for more details.

![Go to the CSS tab and add some codes](https://imgur.elightup.com/CydufwK.png)

Go to the frontend, the new look has been done.

![The new look has been done.](https://imgur.elightup.com/WwNf3Yk.png)

To display only the upcoming events, we need to add a condition to filter those posts. So, let’s move on to the next step.

## 4. Adding condition to show only the upcoming events

Go back to the template, add the specific line of code to **compare the end date with the current date**. If the events have the end date after the current date, they could be displayed. So, add the following line of code inside the loop::

```css
{% if post.end_date  >=  mb.date('Y-m-d') %}
```

![Add the specific line of code to compare the end date with the current date.](https://imgur.elightup.com/f6ivqLl.png)

**In there**:

* `post.end_date`: to get the value of the **End Date** field;
* `mb.date('Y-m-d')`: to get the value of the current date with its format;
* `>=`: this operation is to get the events that have the end date after the current date.

On the frontend, you can see the upcoming events clearly. Just events have the end date after the current day, January 10, which I marked at the beginning could be displayed.

![You can see the upcoming events clearly on the frontend.](https://imgur.elightup.com/xSyaxCt.png)

To learn how to [display posts based on specific criteria](https://docs.metabox.io/tutorials/show-posts-specific-criteria-oxygen/), check out our comprehensive guide. I hope you find it helpful!
