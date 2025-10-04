---
title: Showing events on calendar - MB Views
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

If you're looking for a way to track and manage important events such as meetings, conferences, holidays, or personal tasks, showing them on the calendar is a brilliant idea. It is also an incredibly useful feature in many applications and information management systems. When events are visually displayed on a calendar, users can plan more efficiently and avoid redundancy or missing important activities.

Instead of adding a new plugin that can reduce the performance of the website, **MB Views** from Meta Box can help you **display events on a calendar effortlessly and effectively**.

I have a page as an example of an event calendar. On it, you can see which event is on which day, and how long it is based on the start date and end date. You can view the event on the calendar by month, week, or day as well.

![An example of](https://imgur.elightup.com/eE5gShL.png)

If you find it necessary or interesting, let's dive into the details of this tutorial together.

## Video version

<LiteYouTubeEmbed id='mAw9TNH7xsU'/>

## Preparation

Displaying events or tasks on the calendar is completely feasible with only Meta Box. Specifically, we’ll create a custom post type for the events; the event's time, such as the start date and end date, will be stored in the custom fields, and then MB Views will help you display them on the calendar.

With that concept, we highly recommend you use **Meta Box AIO** to have the framework and all the needed advanced features from Meta Box extensions, including:

* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the events;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to visually create the custom fields to store event information;
* [MB Views](https://metabox.io/plugins/mb-views/): to create a template to display events on the calendar.

You also can install Meta Box and those extensions individually.

Let’s start now!

## 1. Creating a custom post type

Each event will be a post of a custom post type. So, we need to create it first.

Click on the **Create a post type** quick action right on the Meta Box dashboard or go to **Meta Box** > **Post Types** > **Add New** to create a new one for the event.

![Click on the Create a post type quick action to create a new custom post type](https://imgur.elightup.com/0zEMI3s.png)

Enter the plural and singular name for the post type. And after publishing, a new menu will appear right here. It’s your post type.

![The new post type appears as a new menu](https://imgur.elightup.com/lmfnSBm.png)

## 2. Creating custom fields

To display events on the calendar, we need the start and end dates. In the real case, the event might include other additional details such as address, moderator, and so on. But in this tutorial, I just use date for the main purpose, so, let’s create custom fields for them.

To do it, you have two methods:

The first one, right after you publish the post type successfully, there is a notice. Just click on the **Add custom fields to this post type** button in there.

![Click to add field group for the post type automatically](https://imgur.elightup.com/2spGFOK.png)

Then, you can see the interface of a field group. It’s applied to the **Event** post type automatically.

The second method is moving to the **Custom Fields** sub-menu, and creating a new field group as usual. Then, set the location for this field group. I’ll follow this way.

![Go to Meta Box, Custom Fields, and create a new field grouphttps://imgur.elightup.com/E3Yspw2.png)

As I said above, these are two fields I created to store the start and end dates.

![Two fields for the start and end date](https://imgur.elightup.com/EnQOOKj.png)


I chose the **Datetime Picker** field type for both the start and end date of the event. If you don’t want to note the time, you can use the **Date Picker** instead.

![Choose the Datetime Picker field type for both the start and end date](https://imgur.elightup.com/SBWbGve.png)

If you want to show the date on the management dashboard, just enable the **Show as admin column** feature. Notice that, you’ll only see this setting for the field when enabling the [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) extension. While optional, it's a handy feature to have.

![Enable the Show as admin column to display the field on the dashboard.](https://imgur.elightup.com/b2JcaE2.png)

If you want to store other information, just add corresponding field types as you go.

After creating all the needed fields, move to the **Settings** tab. Choose **Location** as **Post type**, and select **Event** to apply these fields to it.

![Set the location of the field group as Event post type.](https://imgur.elightup.com/xuAxGpE.png)

Then, in the post editor, you will see the created custom fields.

![The created custom field displays in the post editor](https://imgur.elightup.com/ctbqxEA.png)

Simply input data into them.

These are some posts that I created for example. The start date and the end date are shown as admin columns as well.

![I created some posts as example](https://imgur.elightup.com/zG0G0WU.png)

## 3. Creating a template to get event information

You can use any page builder to get event information. But after doing it, I’ll use JavaScript to transform them on the calendar. So, using **MB Views** will be more convenient.

In the Meta Box dashboard, click on the **Create a view** button or go ahead to the **Views** submenu to create a new template for displaying the events.

![Create a new view to display the event calendar](https://imgur.elightup.com/R6YZEGn.png)

With MB Views, you can insert fields into the template by clicking on the **Insert Field** button, and choose any fields on the right sidebar to get data from them. Or, add some lines of code directly.

First, I add these lines of code:

```
{% set args = { post_type: 'event', posts_per_page: -1} %}
{% set posts = mb.get_posts( args ) %}
{% for post in posts %}

{% endfor %}
```
![Add code to get posts from the post type.](https://imgur.elightup.com/5rVD00R.png)

**In there**:

* `{% set args = { post_type: 'event', posts_per_page: -1} %}`: is to declare that we’ll get posts from the `event` post type. `-1` helps to get all posts in that post type.
* `mb.get_posts()`: is a Meta Box function to get the posts.
* `{% for post in posts %}...{% endfor %}`: is a loop we add to get and display all the posts since we have various posts.

Inside the loop, we’ll get information about the event. You should use the button I mentioned before, and insert the field you want from the right panel.

![Click on the button to insert field](https://imgur.elightup.com/CfunedS.png)

For demonstration purposes, I just get three basic information including the event name, start date, and end date. They will be used on the calendar later.

The event name means **Post title**. Click on it from the right panel.

![The event name is the post title](https://imgur.elightup.com/aaRAoKc.png)

For the start and end dates, Meta Box provides some options to set the output of the date. To ensure event transformation works correctly on the calendar, you should choose the format which follows the ISO standard.

![Select the format of date](https://imgur.elightup.com/vOM4VQM.png)

Do the same with the end date.

![The start date and end date after inserting field and choosing format](https://imgur.elightup.com/fStiRJn.png)

The template is now in the simplest version since it is just to get data.

I keep the type of this template as **Shortcode**, then we can put it in any place we want through the generated shortcode.

![Set the type of template as shortcode](https://imgur.elightup.com/UWGEOqw.png)

After publishing this template, the shortcode is generated automatically. Just copy it.

![Copy the generated shortcode](https://imgur.elightup.com/lsToQ6E.png)

Assuming that you want to display the event calendar on a page, go to the page editor, then paste the copied shortcode.

![Paste the shortcode in the place you want](https://imgur.elightup.com/4GgPbKD.png)

On the front end, the information about all the events is displayed.

![The content displayed.](https://imgur.elightup.com/KURGmnB.png)

Next, we’ll transfer this information to the calendar.

## 4. Transfering events information to the calendar

We will use JavaScript to display events on the calendar and make them more beautiful. So, back to the template that we created to modify and add some code.

First, I’ll add some lines to declare some libraries we’ll use to have an event calendar.

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.9.0/fullcalendar.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.9.0/locale-all.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.9.0/fullcalendar.min.css" />
```

![Declare JavaScript and CSS libraries for the calendar](https://imgur.elightup.com/uabIxpd.png)

In this practice, I use some JavaScript libraries to have some features of the calendar such as date-time format, showing the calendar by week, month, or year, calendar language, and calculating time differences.

I also declare the CSS library for styling the calendar.

Next, I set a variable as an empty array, since it will include the values from the fields in posts, which are obtained by the loop.

![Set a variable as an empty array](https://imgur.elightup.com/BFpEgzH.png)

Then, modify the loop to transfer all the values to the array.

![Modify the loop to transfer all the values to the array](https://imgur.elightup.com/YNHTBCX.png)

Now, add this code:

```
<div id="calendar" data-event='{{ event_info|json_encode() }}'></div>
```
![Create a div tag and convert variable to JSON](https://imgur.elightup.com/JvcmUxG.png)

It’s to create a new **div** tag that has an ID as `calendar`. It’ll be used in JavaScript later. Also, you should convert the variable to JSON to use in Javascript. Then assign it to the `data-event` attribute.

Next, move to the **CSS** tab to make the event and calendar more beautiful.

![Go to the CSS tab to style the calendar](https://imgur.elightup.com/cAWLCIg.png)

Then, move to the **JavaScript** tab, and add some code to transfer events on the calendar.

```
$(function () {
    var getTimeElement = document.getElementById("calendar");
    var data_event = JSON.parse(getTimeElement.getAttribute("data-event"));

    const current_date = new Date();

    $('#calendar').fullCalendar({
        locale: 'en',
        header: {
            left: 'prev,next, today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        defaultDate: current_date,
        navLinks: true,
        editable: true,
        eventLimit: true,
        events: data_event,
    });
});
```

![Add some code into the JavaScript tab to transfer events on the calendar](https://imgur.elightup.com/gfKgLMC.png)

**Explanation**:

* `var getTimeElement = document.getElementById("calendar")`: is to get data from the element that has the `calendar` ID.
* `var data_event = JSON.parse(getTimeElement.getAttribute("data-event"))`: is to get data from the `data-event` attribute. It includes the values we assigned before.
* `const current_date = new Date()`: is to add a constant as the current date. It’s to set the default position on the calendar.

In the above code, I also configure attributes of the calendar with the help of the library I declared at first. These are some attributes I set for the function. For illustration purposes, I just use some major attributes of the calendar library such as calendar language, header, and the default date. You completely customize them as you want. Pay attention to `eventLimit: true`. It’s for changing the format of the event in a place that has limited space such as a sidebar.

That’s done. I uploaded the code to [GitHub](https://github.com/wpmetabox/tutorials/tree/master/show-events-to-calendar), so you can refer to it.

Now, go to the page, and this is the new look of the event calendar with all the features such as viewing the calendar in day, week, month, and the next or previous period.

![An event calendar with all features.](https://imgur.elightup.com/k8iHMhe.png)

On the calendar, you can see which event is on which day, and how long it is based on the start date and end date.

Will it work well if the event schedule is placed in a different position? I’ll put it on the right sidebar of the homepage as an example.

Also, use the template shortcode.

All the data was displayed as we expected, but the format is different a little bit. To see the event, just click on it.

![The format of event calendar is different a little bit.](https://imgur.elightup.com/A02dW2d.gif)
