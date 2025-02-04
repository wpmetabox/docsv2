---
title: Showing upcoming events - Meta Box + Elementor
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

**Showing upcoming events** provides a clear view of upcoming deadlines and important dates, allowing you to manage tasks and priorities effectively. Today, we’re going to do it by combining **Meta Box** and **Elementor**.

These are the upcoming events I want to display in this practice.

![The upcoming events section](https://i.imgur.com/5utS48h.png)

## Video version

<LiteYouTubeEmbed id='Xga9xDaFCZk'/>

## Preparation

Specifically, just **events with the end date after the current day could be displayed**. Day by day, if it passes the end date of any event, those events will disappear from the page. And, it’s all automatic.

For example, assume that today is November 15th.

![Assume that today is November 15th.](https://i.imgur.com/X6NTxDR.png)

We will filter and display events that are either ongoing or scheduled for the future. This means that an event with an end date beyond November 15th will be shown on the page.

![An event with an end date beyond November 15th will be shown on the page.](https://i.imgur.com/bpoARON.png)

For some typical information about the event, I’ll create some custom fields. The start date and the end date as well as will be used for that filter. And in this case, each event will be a post of a custom post type.

These are some tools we use for this practice:

* [The Meta Box plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create a custom post type and custom fields for the events. You can install it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/).
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the events;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create the custom field visually;
* [Meta Box - Elementor Integrator](https://metabox.io/plugins/mb-elementor-integrator/): to help Elementor elements get the dynamic data from custom fields created with Meta Box.
* **Elementor** to build the page, obviously. I also use **Elementor Pro**, which Meta Box already has the integration with to display the information from custom fields.

## 1. Creating a new post type

Go to **Meta Box** > **Post Types** to create a new post type for the events.

![Create a new post type for the events.](https://i.imgur.com/dtSH6At.png)

## 2. Creating custom fields

Each event may have some subsidiary information. Then, we should use custom fields to store them. I have some typical ones for this practice.

![Some typical custom fields to store event information](https://i.imgur.com/6XgSeKy.png)

Two of them, the start date and end date should be must-have items since they will be used for the filter.

Now, go to **Meta Box** > **Custom Fields** to create them.

![Go to Meta Box > Custom Fields to create fields](https://i.imgur.com/Na25XOY.png)

Choose the **Date Picker** field type for the start and end date of the event.

![Choose the Date Picker field type for the start and end date of the event.](https://i.imgur.com/s1dP0SB.png)

To show the date on the management dashboard and then you can easily compare it with the result, turn on the button like in the image below. This setting is available only when enabling the [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) extension. This extension is just optional, so I did not mention it at the beginning.

![Turn on the button to show the date on the management dashboard](https://i.imgur.com/NEwQuwz.png)

After creating all the needed fields, go to the **Settings** tab > choose **Location** as **Post type** > select **Event** to apply these fields to this post type.

![Set the location to apply these fields to the Event post type](https://i.imgur.com/q7r6Svj.png)

Now, in the post editor, you will see the created custom fields.

![The created custom fields in the post editor](https://i.imgur.com/6XgSeKy.png)

Just input data into them.

Here are some posts that I created for example:

![Some posts that I created for example](https://i.imgur.com/IYTVn8a.png)

The start date and the end date are shown as admin columns. You may want to see these ones once again in the end to easily compare with the ones displayed on the page.

## 3. Creating a template for displaying each event

With **Elementor**, we should create a template to stipulate how information about each event should be displayed.

![Create a template to stipulate how information about each event should be displayed.](https://i.imgur.com/6LWQjOn.png)

Because there are multiple events, and we will use this template to display them all on the page, we should set the template as the **Loop Item** type.

![Set the template as the Loop Item type](https://i.imgur.com/23rpUYO.png)

Remember to set the preview for the template.

![Set the preview for the template](https://i.imgur.com/6mu5qSd.png)

This is the display of an event that I’m going to have for this practice.

![The display of an event](https://i.imgur.com/mXKEHEW.png)

Let’s add some elements to have it.

For the image of the event, add the **Featured Image** element.

![For the image of the event, add the Featured Image element.](https://i.imgur.com/C5KTB6E.png)

Then, add the **Post Title** element for the event title.

![Add the Post Title element for the event title.](https://i.imgur.com/DwGdVQa.png)

Next, I want to display the start date and end date along with icons, so choose the **Icon List** element instead of normal text. Since this information is saved in custom fields created with Meta Box, we’ll use the **Dynamic Tags** for each item. Find the **Meta Box Field** in the **Post** section, and then choose the corresponding fields from the dropdown list.

![Choose the Icon List element for the date, use Dynamic Tags for each item and find the Meta Box Field in the Post section](https://i.imgur.com/6Q9IWoI.png)

![Choose the corresponding fields from the dropdown list.](https://i.imgur.com/jtP2iBG.png)

Now, you’ll see a date from the **Start Date** field displayed immediately.

![A date from the Start Date field displays immediately](https://i.imgur.com/x7H3jhW.png)

You also can change the icon for the start date if you want.

Do the same to display the end date.

![Use Dynamic Tags to get the information of the End Date field](https://i.imgur.com/CdSTtHI.png)

For the location, I’ll add another **Icon List** element, actually you can use the created icon list for the dates, I just create a new one for separation. Also, use the **Dynamic Tags** to connect this element with the field.

![Get the location information](https://i.imgur.com/4pqdOf9.png)

We’ve just finished getting all of the information for the event. Let’s move to the next step.

## 4. Showing the events on the page

Let’s edit any page you want to show the upcoming events.

First, add a section on the homepage for it.

![Add a section on the homepage for the upcoming events](https://i.imgur.com/H5b6TMv.png)

Next, add a **Heading** element for the section’s title as usual and style it as you want..

![Add a Heading element for the section’s title](https://i.imgur.com/ExGPQHA.png)

To get all the posts, add the **Loop Grid** element. In the **Layout** section of this element settings, choose the created template (the template in the type of **Loop Item** we created). Then, some blog posts will be displayed.

![To get all the posts, add the Loop Grid element and choose the created template in the Layout section](https://i.imgur.com/e5Z4Unq.png)

To replace them with the events, go to the **Query** section, and change the **Source** to the **Event** post type. Then, all of the posts in that post type will display.

![In the Query section, and change the Source to the Event post type.](https://i.imgur.com/YjZafCG.png)

Note that I specifically mentioned "all the posts". However, we just want to display the upcoming events, so we need a custom query to filter those posts.

Elementor does not support creating any custom query on this screen. We should add code to the theme’s file for the query.

## 5. Creating a custom query

Go to the **Theme Functions** file, add these lines of code.

```css
/* Filer Upcoming Event */
add_action('elementor/query/filter_events', function($query) {
    $current_datetime = current_datetime()->format('Y-m-d');
    $query->set('post_type', ['event']);
    $meta_query [] = [
        ‘Relations’ => ‘OR’
        [
            'key' => 'start_date',
            'value' => date($current_datetime),
            'compare' => '>=',
        ],
       [
            'key' => 'end_date',
            'value' => date($current_datetime),
            'compare' => '>=',
    ];
    $query->set('meta_query', $meta_query);
});
```
![Add code to the theme’s file](https://i.imgur.com/Xvk7MfP.png)

For your information, this syntax is provided officially by Elementor. So, just use it with no waver.

Let’s go through it in more detail:

* `add_action('elementor/query/filter_events', function($query) {`: This hook is to create a query with the ID - `filter_events` to execute the functions below.

* `$current_datetime = current_datetime()->format('Y-m-d');`: This code helps to get the current time based on the time zone the website has been set.

 * `$query->set('post_type', ['event']);`: This is to query the post in the **Event** post type.

* The events as well as the posts that meet at least one of the two conditions below will be obtained and displayed.

![The events as well as the posts that meet at least one of the two conditions will be obtained and displayed.](https://i.imgur.com/yWSKBhb.png)

**In there**:

These lines below are to compare the start date with the current date. It means that all the upcoming events will be displayed.

```css
'key' => 'start_date',
'value' => date($current_datetime),
'compare' => '>=',
```
If there is any event that doesn't meet the first condition, but it’s happening with the end date is after the current date. Then, the second one helps to display those events.

```css
'key' => 'end_date',
'value' => date($current_datetime),
'compare' => '>=',
```
* `$query->set('meta_query', $meta_query);`: This is to set the query from the `$meta_query` variable.

That’s done for the custom query.

Remember to copy the query ID - `filter_events`.

Then, go back to the page editor with Elementor and input the created Query ID to the box.

![Input the created Query ID to the box](https://i.imgur.com/7cWxYiY.png)

But before doing that, keep track of the posts carefully. Because once you insert the ID of the custom query, the list of displayed posts will change.

![Once you insert the ID of the custom query, the list of displayed posts will change.](https://i.imgur.com/E6qdlxk.gif)

The changing images are the most clearly showing which posts have been updated.

This is how the upcoming events section displays on the page.

![The upcoming events section before styling](https://i.imgur.com/4c1FMU3.png)

We should style it a bit for a better look.

## 6. Styling the section

Go back to the created template as a loop item for each event. Just customize each element's settings to have a better look for the event information.

![Customize each element's settings of the loop item](https://i.imgur.com/GQLK7dF.png)

As well as, in the page editor, do so with the settings of the **Loop Grid** element.

![Customize the element’s settings in the page editor and  the Loop Grid element](https://i.imgur.com/uQI7efX.png)

Now, all of the upcoming events are displayed as we want.

![The upcoming events are displayed as we want.](https://i.imgur.com/5utS48h.png)

We've covered all the steps to display **the upcoming events** using **Meta Box** and **Elementor**. If you use other page builders, you can follow our channel to see them later.

In case you want to show posts with other specific conditions, you can refer to [this tut](https://docs.metabox.io/tutorials/show-posts-specific-criteria-with-elementor/). Hope it can be helpful to you!
