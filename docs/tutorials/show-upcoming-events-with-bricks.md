---
title: Showing upcoming events - Meta Box + Bricks
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Sharing what’s coming up helps us see important dates and deadlines, so we can manage events better. Take **the upcoming events** as an example. Let's use **Meta Box** and **Bricks** to make it happen!

![Show the upcoming events section using Meta Box and Bricks](https://i.imgur.com/cHLKvtj.png)

## Video version

<LiteYouTubeEmbed id='sBCGEXOqUKE'/>

## Preparation

This is the rule: just **events with the end date after the current day could be displayed**. Day by day, if it passes the end date of any event, those events will automatically disappear from the page.

Assume that today is December 8th.

![Assume that today is December 8th.](https://i.imgur.com/QEmgAj4.png)

We will filter and display the events that are either ongoing or scheduled for the future. This means that an event with an end date beyond December 8th will be shown on the page.

![An event with an end date beyond December 8th will be shown on the page.](https://i.imgur.com/4UqOrgp.png)

For some basic event details, I’ll create some custom fields. The start date and the end date as well as will be used for that filter. And in this case, each event will be a post of a custom post type.

Here's what we'll use:

* [Meta Box plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create a custom post type and custom fields for the events. You can install it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/);
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the events;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create the custom fields visually;

And, I use **Bricks** to build the page.

Now, let’s start!

## 1. Creating a new post type

Go to **Meta Box** > **Post Types** to create a new post type for the events.

![Create a new post type for the events.](https://i.imgur.com/nHqoJie.png)

After publishing, you’ll see a new menu. It’s your post type.

![A new menu in the dashboard](https://i.imgur.com/vfenqqI.png)

## 2. Creating custom fields

Each event may have some subsidiary information. Then, we should use custom fields to store them. I have some typical ones for this practice.

![Some typical custom fields to store event information](https://i.imgur.com/G8UYFj2.png)

Two of them, the start date and end date should be must-have items since they will be used for the filter.

Now, go to **Meta Box** > **Custom Fields** to create them.

![Go to Meta Box > Custom Fields to create fields](https://i.imgur.com/zLE9E3q.png)

Choose the **Date Picker** field type for the start and end date of the event.

![Choose the Date Picker field type for the start and end date of the event.](https://i.imgur.com/3tphzzX.png)

To display the date on the management dashboard for easy comparison with the results, turn on the button like in the image below. This setting is available only when enabling the [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) extension. This extension is just optional, so I did not mention it at the beginning.

![Turn on the button to show the date on the management dashboard](https://i.imgur.com/F1vb6Th.png)

After creating all the needed fields, go to the **Settings** tab > choose **Location** as **Post type** > select **Event** to apply these fields to this post type.

![Set the location to apply these fields to the Event post type](https://i.imgur.com/95m0aQd.png)

Now, in the post editor, you will see the created custom fields.

![The created custom fields in the post editor](https://i.imgur.com/G8UYFj2.png)

Just input data into them.

Here are some posts that I created for example:

![Some posts that I created for example](https://i.imgur.com/g0cAvCN.png)

The start date and the end date are shown as admin columns. You may want to see these ones once again in the end to easily compare with the ones displayed on the page.

## 3. Displaying all events on the page

Now, edit a page with **Bricks**.

First, select a **Section** element.

![Select a Section element.](https://i.imgur.com/Jxjindh.png)

Next, add a **Heading** element, and name the title.

![Add a Heading element, and name the title](https://i.imgur.com/Fmxu74e.png)

In the **Container** element inside the section, select the **Div** element to contain the event’s information.

![Select the Div element to contain the event’s information.](https://i.imgur.com/ClxOPom.png)

Then, to get all posts in the **Event** post type, enable the **Use query loop** button. In the **Query** section, choose the **Type** as **Posts**. And, choose the post type you want to get data from in the Post type section.

![Set condition to get all posts in the Event post type](https://i.imgur.com/HGsTxC0.png)

Now, let’s add some elements to get detailed information of the events.

For the image of the event, choose the **Image** element. Since these images are the featured image of the post, click the **Select dynamic data** icon and choose the **Featured Image** option.

![Get the image of the event](https://i.imgur.com/i6yet3E.png)

As you can see, the image is displayed in the preview.

![The image is displayed in the preview](https://i.imgur.com/YlooJgw.png)

Next, add the **Post Title** element for the event title.

![Add the Post Title element for the event title](https://i.imgur.com/ULYQoiu.png)

Now, I want to display the start date, end date, and location along with icons, so choose the **Icon Box** element instead of normal text.

![Choose Icon Box element to display the start date, end date and location along with icons](https://i.imgur.com/gyULXuW.png)

You can style, and choose any icon as you want.

![You can style and choose the icon as you want.](https://i.imgur.com/NdQkqBu.png)

As this information is saved in custom fields created with Meta Box, we’ll use the **Select dynamic data**, and then choose the corresponding fields.

![Use the Select dynamic data, and then choose the corresponding fields](https://i.imgur.com/AfIA8NF.png)

As a result, you’ll see a date from the **Start Date** field displayed immediately.

![A date from the Start Date field displayed immediately](https://i.imgur.com/4vsG5r5.png)

Do the same with the end date and location. Just duplicate the **Icon Box** element for saving time, then change the corresponding information.

We’ve just finished getting all the posts in the event post type. Note that I specifically mentioned "all the posts".

![All the posts in the event post type display](https://i.imgur.com/9DKkkwv.png)

To style this section, choose each element and change its settings.

Look at this picture, you can see all the events shown on the frontend with styling.

![All the events shown on the frontend with styling](https://i.imgur.com/KufWzNx.png)

To display only the upcoming events, we need a custom query to filter those posts. Let’s move to the next step.

## 4. Quering to show the upcoming events

It’s great when Bricks supports creating any custom query on the screen. So in the page editor with Bricks, go back to the **Query** section of the div, look for the **Meta Query** section, and add a meta query.

![In the Query section of the div, look for the Meta Query section, and add a meta query.](https://i.imgur.com/c3nc2HU.png)

We should compare the end date with the current date. If the events have the end date after the current date, they could be displayed. Let’s set the condition like this:

![Set condition to display the upcoming event](https://i.imgur.com/JXmSMWZ.png)

**In there**:

* In the **Meta key** box, enter the ID of the field named **End Date**.
* In the **Meta Value** box, add the current date with the `{current_date:Y-m-d}` format.
* In the **Compare** box, choose the **Greater than or equal** option to get the events that have the end date after the current date.

That’s all for the condition!

On the frontend, just events have the end date after the current day, which I marked at the beginning could be displayed.

![Just events have the end date after the current day](https://i.imgur.com/cHLKvtj.png)

Should you need to display posts with additional [specific criteria](https://docs.metabox.io/tutorials/show-posts-with-specific-criteria-bricks/), you can refer to it. Hope it can be helpful to you!
