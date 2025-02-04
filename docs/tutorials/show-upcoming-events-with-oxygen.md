---
title: Showing upcoming events - Meta Box + Oxygen
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

**Showing upcoming events** highlights important dates and deadlines, making it easier for everyone to join. Let's use **Meta Box** and **Oxygen** to make it happen!

We'll **only display events that have an end date after the current date**. Day by day, if it passes the end date of any event, those events will automatically disappear from the page.

![The upcoming events section](https://i.imgur.com/2qGRKvt.png)

## Video version

<LiteYouTubeEmbed id='0355b__TU9o'/>

## Preparation

Assume that today is December 12th.

![Assume that today is December 12th.](https://i.imgur.com/WjuSHun.png)

We will filter and display the events that are either ongoing or scheduled for the future. This means that an event with an end date beyond December 12th will be shown on the page.

![An event with an end date beyond December 12th will be shown on the page.](https://i.imgur.com/A7aiHaS.png)

In this case, each event will be a post of a custom post type. And, I’ll create some custom fields to store some typical information about the event including the dates. The start date and the end date, as well, will be used for that filter.

Before moving forward, let’s check which tools are necessary for this practice.

* **Oxygen**: to build the page;
* [Meta Box plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create a custom post type and custom fields for the events;
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the events;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create the custom fields visually.

## 1. Creating a new post type

Go to **Meta Box** > **Post Types** to create a new post type for the events.

![Create a new post type for the events.](https://i.imgur.com/OwLdcXb.png)

## 2. Creating custom fields

Each event may have some extra information. As mentioned, we’ll use custom fields to store them, so just create them as you go. These are some typical ones for this practice.

![Some typical custom fields to store event information](https://i.imgur.com/L4VkKYI.png)

Two of them are the start date and end date. They should be must-have items since they will be used for the filter.

Now, go to **Meta Box** > **Custom Fields** and create them.

![Go to Meta Box > Custom Fields to create fields](https://i.imgur.com/Mj5vipt.png)

I’ll opt for the **Date Picker** field type for the start and end date of the event.

![Choose the Date Picker field type for the start and end date of the event.](https://i.imgur.com/PfprHUs.png)

Keep in mind that the field setting below is visible when enabling the **MB Admin Columns** extension. Just turn it on to show the date on the management dashboard, and then you can easily compare it with the result. It is optional, so I did not mention it before.

![Turn on the button to show the date on the management dashboard](https://i.imgur.com/R7bFwXo.png)

Once you’ve created all the needed fields, go to the **Settings** tab > choose **Location** as **Post type**, and select **Event** to apply these fields to this post type.

![Set the location to apply these fields to the Event post type](https://i.imgur.com/0uma3XH.png)

Now, in the post editor, you will see the custom fields.

![The created custom fields in the post editor](https://i.imgur.com/L4VkKYI.png)

Simply input data into them.

These are some posts that I created for reference.

![Some posts that I created for example](https://i.imgur.com/E36Ou5g.png)

The start date and the end date are shown as admin columns as well. You may want to see these ones once again in the end to easily compare them with the ones displayed on the page.

## 3. Displaying all events on the page

It’s time to showcase the event information on the page. Remember, we're just displaying "all the events”. For filtering, we’ll do it separately in the next step.

Now, edit any page with **Oxygen**.

First, select a **Section** component to contain all of the event's details.

![Select a Section component to contain all of the event's details](https://i.imgur.com/XFck560.png)

Next, add a **Heading** component for the title of the upcoming events section.

![Add a Heading component for the title of the upcoming events section](https://i.imgur.com/u0X0Ydc.png)

To get all the posts of the **Event** post type, select a **Repeater** component. Then, go to the **Query** section to choose the source of data.

![Choose a Repeater component to get all the posts of the Event post type](https://i.imgur.com/6J06dQX.png)

Normally, to get the posts, you can choose the default or custom type. As I only select a certain number of posts to be displayed based on the condition, I choose the query in the advanced type.

![Choose the query in the advanced type.](https://i.imgur.com/AKBhqjp.png)

We’ll add some query parameters, as follows:

![Add some query parameters to get all the posts](https://i.imgur.com/JdS50r8.png)

* The `post_type` parameter is to specify that we'll only get posts from the **Event** post type. Remember to enter the ID of the post type you want to get data in the **data** box.
* The `post_per_page` parameter is to limit the number of posts displayed in the section. You can set the number of posts you want. For my expectation, I just enter the default number as `-1` to display all the posts in that post type.

After applying, there are some boxes equivalent to the number of posts.

![Some boxes equivalent to the number of posts](https://i.imgur.com/R5R9YVe.png)

Let’s display information about each event. We’ll add some components to the available **Div** of the **Repeater** component.

![Add some components to the available Div of the Repeater component.](https://i.imgur.com/x9sGo30.png)

To display the event’s image, select the **Image** component, then connect it to the featured image of the post. After that, images are displayed immediately.

![Display the event’s image](https://i.imgur.com/NbjMnkH.gif)

For the event title, add the **Text** component. Link this component to the post's title by clicking the text, and choose **Insert data**.

![For the event title, add the Text component.](https://i.imgur.com/YVRdc8M.png)

Then, choose the **Title** option in the **Post** section.

![Choose the Title option in the Post section](https://i.imgur.com/rVD604C.png)

So, you can view the event's title.

![The event's title displays.](https://i.imgur.com/9xnSaOy.png)

I want to display the start date, end date, and location in the same style along with icons. I’ll begin with the start date first. Add a new **Div** component to cover the start date information with its icon. Next, select the **Icon** component for the icon.

![Add a new Div component to cover the start date information with its icon and select the Icon component for the icon](https://i.imgur.com/yjY4XS5.png)

Following that, choose **Text** to get the start date. As this information is saved in a custom field created with Meta Box, click the **Insert data** button > choose **Meta Box Field** > select the corresponding field. As a result, you’ll see a date from the **Start Date** field displayed.

![Get the start date information.](https://i.imgur.com/N4ii6li.gif)

Do the same with the end date and location. Just duplicate the **Div** component to save time, then change the corresponding information.

![Duplicate the Div component](https://i.imgur.com/ZCQSDlq.png)

We’ve just finished getting all the posts in the event post type along with their short information.

![All the posts in the event post type along with their short information.](https://i.imgur.com/W6pOc72.png)

Note that again, I specifically mentioned "all the posts".

You can beautify this section as you want by changing the settings of each component. After making some adjustments, my events display with styling on the frontend like this.

![All events display with styling on the frontend](https://i.imgur.com/p9ydux0.png)

Now, move on to an important step to display only the upcoming events using a custom query to filter those posts.

## 4. Quering to show only the upcoming events

It’s great when Oxygen supports creating custom queries. So, in the page editor with Oxygen, go back to the **Query** section of the **Repeater** component and edit the query once again.

![Go back to the Query section of the Repeater and edit the query once again.](https://i.imgur.com/hTbKPYU.png)

We should compare the end date with the current date. If the events have the end date after the current date, they could be displayed. So, add other parameters to execute.

![Add other parameters to only show the upcoming events.](https://i.imgur.com/ISd8tu2.png)

* The `meta_key` parameter: to get the value of the **End Date** field, so enter its ID in the data box.
* The `meta_value` parameter: to get the current date's value. Pay attention that Oxygen allows the use of PHP function to return values, so choose the option with the same name.

![PHP function to return values](https://i.imgur.com/pOr1nJ3.png)

Then, fill in the function name as "date" and fill in its format. In this case, enter the default current date.

![Fill in the function name as "date", and fill in its format.](https://i.imgur.com/MI1KBVA.png)

* The `meta_compare` parameter: to compare the end date to the current date. Use the `>=` operation to get the events that have the end date after the current date.

After applying, you can see the change in the preview section.

![The change in the preview section](https://i.imgur.com/SUjPN7E.gif)

It’s clear that some events have disappeared immediately. It means that only the upcoming events are displayed.

Check the frontend to double-check.

![The upcoming events section](https://i.imgur.com/2qGRKvt.png)

Just events have the end date after the current day, which I marked at the beginning could be displayed.

For displaying posts with [specific criteria](https://docs.metabox.io/tutorials/show-posts-specific-criteria-oxygen/), you can refer to our guide. I hope you find it helpful!
