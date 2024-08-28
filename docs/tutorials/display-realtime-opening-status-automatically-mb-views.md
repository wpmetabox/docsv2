---
title: Displaying real-time opening status automatically - Using MB Views
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Having a real-time-opening-status is a brilliant feature on this kind of site. So, I’d like to share a way to **display the real-time opening status dynamically and automatically** right now on this post. It's easily with the help of MB Views from Meta Box. Let’s see how now!

For the demonstration purposes, I’ll put the status with the opening hours like this:

![The real-time opening status created with MB Views](https://i.imgur.com/KjMDYzA.png)

We already had tutorials on [how to have the fields for saving the opening hour, and how to display them on the page](https://metabox.io/series/opening-hours/). So, in this practice, we will pay heed to learn how to make the status real-time only.

## Video version

<LiteYouTubeEmbed id='h8qlU19PpfY' />

## Preparation

Each restaurant is a separate post of a custom post type and has its own opening time slots.

To let visitors know it’s open or closed right at the time when they see the board, the status must be real-time based on comparing the current time and the opening hours set as in the board. All the information related to the opening time of the restaurant, store, or office, will be saved in custom fields created with Meta Box.

So, we need these tools:

* [Meta Box plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create the custom post type and custom fields. You can install it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/).
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the restaurants;
* [MB Views](https://metabox.io/plugins/mb-views/): to create a template to display the opening time and the restaurant status;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create the custom fields visually.

Furthermore, there are some other extensions you may want to use to have the appropriate structure of the custom fields such as group, conditional logic. We mentioned them in detail in other tutorials on [showing opening hours](https://docs.metabox.io/tutorials/display-opening-hours-restaurant-mb-views/).

You can install them individually, or use **Meta Box AIO** to have them all.

Now, let’s embark on step by step.

## 1. Creating custom fields for opening time

As I said before, we need to have custom fields to save the time slots. 

Go to **Meta Box** > **Custom Fields**, and create a new field group for the opening time.

![Go to Meta Box > Custom Fields, and create a new field group for the opening time](https://i.imgur.com/ts9uZn3.png)

We have had another tutorial on [how to have them and display the timing information in detail](https://docs.metabox.io/tutorials/display-opening-hours-restaurant-with-bricks/) as I mentioned, so you should refer to them for more details of this step and concept.

I’m going to create typical and quite simple groups of fields for this practice following this structure.

![The structure of simple groups of fields to save the opening time](https://i.imgur.com/uZjqGYE.png)

No matter what the structure of the fields, the concept of having real-time status still is the same.

After creating all the fields, don’t forget to set the location to apply the field group. Then, go to the post editor to input opening hours.

![Input the opening information in post editor](https://i.imgur.com/i4e9HfI.png)

## 2. Displaying the real-time status

You need to have a single page to display detailed information about each restaurant, including the section on their opening hours. You can refer to [this tutorial](https://www.youtube.com/watch?v=mjwLTGE0UKI) on how to display this timing information. In this practice, I made the page already in order to focus on how to have the real-time status based on those timing slots.

Someone uses static text for it and then changes it manually. But it is not optimal. The purpose of this tutorial is to display the real-time opening status **dynamically**. It means that the status will turn between Open and Close **automatically**. For that, we will use Javascript to compare the current time with the time slots saved in custom fields. Let’s do it now!

### 2.1. Step 1: Getting the time slots

First, we should have a new view to get all the time slots.

Go to **Meta Box** > **Views**, and create a new view. 

![Go to Meta Box > Views, and create a new one](https://i.imgur.com/LrtMRug.png)

In the **Template** tab, click on the **Insert Field** button and look for the fields where we save the timing information since they are saved in custom fields.

![In the Template tab, click on the Insert Field button and look for the fields where we save the timing information](https://i.imgur.com/ZOP41o3.png)

The start time and end time are in cloneable groups so there will be a loop added into the template.

![There will be a loop added into the template since the start time and end time are in cloneable groups](https://i.imgur.com/XUeYSYh.png)

When we insert the field of time slot, Meta Box will offer some options for the output. 

![Meta Box will offer some options for the output for the time slots](https://i.imgur.com/LjSwWtv.png)

We should choose **Custom** in this case, and set the format of timing data as the below image. It is the format that will be used in JavaScript later.

![You should choose Custom, and set the format of timing data](https://i.imgur.com/Jj1AuUZ.png)

We will save the **Type** of this view as **Shortcode**. The generated shortcode will be used for the page template.

![Set the Type of this view as Shortcode to have a shortcode which used for the page template.](https://i.imgur.com/EykyCH9.png)

Right on the place where we put the status, add a **Shortcode** element.

![Add a Shortcode element](https://i.imgur.com/zyzE1Vt.png)

Insert the shortcode into the box.

![Insert the shortcode into the box](https://i.imgur.com/IMQtpOY.png)

Then on the page, we will see a list of time slots displayed.

![A list of time slots displayed on the page](https://i.imgur.com/xG23atD.png)

### 2.2. Step 2: Converting time slots data to a JavaScript object

Back to the view to create some arrays to include all the time slots along with their date.

```
{% set timeArray = [] %}
{% for clone in post.custom_time %}
    {% set  timeSlotsArray= [] %}
    {% for clone in clone.choose_time_slots %}
        {% set timeSlotsArray = timeSlotsArray|merge([ {'start_time':clone.start_time | date( 'H.i' ),'end_time':clone.end_time | date( 'H.i' )} ] ) %}
    {% endfor %}
    {% set timeArray = timeArray|merge([ { 'day':clone.day.value, 'timeSlots':timeSlotsArray} ]) %}
{% endfor %}
```

![Create some array to include all the time slots along with their date](https://i.imgur.com/P9WhBkz.png)

**In there**: 

* `{% set timeArray = [] %}`: is the array to include all the day along with their time slots.
* `{% set timeSlotsArray = timeSlotsArray|merge([ {'start_time':clone.start_time | date( 'H.i' ),'end_time':clone.end_time | date( 'H.i' )} ] ) %}`: is the array to join the start time and end time of a time slot.
* `{% set  timeSlotsArray= [] %}`: is the array to include all the set of time slots of a day.
* `{% set timeArray = timeArray|merge([ { 'day':clone.day.value, 'timeSlots':timeSlotsArray} ]) %}`: is the array to include all those sets of time of a day, with the name of the day they are.

Then, add these lines of code:

```
<div id="time" data-time='{{timeArray|json_encode()}}'>
    <div id="restaurant-status"></div>
</div>
```

![Add some code as image](https://i.imgur.com/6B8cQto.png)

**Explanation**:

* `time`: is an HTML ID we set.
* `data-time`: is the attribute which is transferred from the `timeArray` array. It and the `time` ID will be used for using JavaScript later.
* `restaurant-status`: is the ID we create to display the status. 

The context of the status and its style will be stipulated in the next step.

### 2.3. Step 3: Adding JavaScript to compare current time with time slots

Move on to the JavaScript tab of the view, and add the following code:

```
var getTimeElement = document.getElementById("time");
var TimeObject = JSON.parse(getTimeElement.getAttribute("data-time"));
// Short day
var date = new Date();
Date.shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
function short_Days(date) {
    return Date.shortDays[date.getDay()];
}
// Get time now
var now = date.getHours() + "." + date.getMinutes();

// Loop TimeObject
TimeObject.forEach(function (elm) {

    if (elm.day == short_Days(date)) {

        var timeSlots = elm.timeSlots

        var statusArray = [];
        timeSlots.forEach(function (elm) {
            if (parseFloat(now) > parseFloat(elm.start_time) && parseFloat(now) < parseFloat(elm.end_time)) {
                statusArray.push('open')
            } else {
                statusArray.push('close')
            }
        })

        if (statusArray.includes('open')) {
            document.getElementById("restaurant-status").innerHTML = `OPEN`;
        } else {
            document.getElementById("restaurant-status").innerHTML = `CLOSE`;
        }

    }
})
```

![Move on to the JavaScript tab, and add some code](https://i.imgur.com/WPLF9zm.png)

Let’s dig into each part for details.

#### 2.3.1. Getting data of time slots

```
var getTimeElement = document.getElementById("time");
var TimeObject = JSON.parse(getTimeElement.getAttribute("data-time"));
```

These lines are to get all the data that we save in the arrays through the `time` ID and `data-time` attribute which was set in the previous step.

#### 2.3.2. Getting current time

```
// Short day
var date = new Date();
Date.shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
function short_Days(date) {
    return Date.shortDays[date.getDay()];
}
```

This part is to create a function to get the current day.

* `date = new Date()` (line4): is the variation we created for the current day.
* `getDay()` (line 7): is to get the current day.
* `return Date.shortDays[date.getDay()]`: is to convert the current day into the short form as we indicated in the 5th line.

```
var now = date.getHours() + "." + date.getMinutes();
```

This part is to get the current time. 

The current time with the hour and minute, and is transferred to the `now` attribute. This data will be used for the condition in the next part.

#### 2.3.3. Comparing current time with time slots

```
if (elm.day == short_Days(date)) {

        var timeSlots = elm.timeSlots

        var statusArray = [];
        timeSlots.forEach(function (elm) {
            if (parseFloat(now) > parseFloat(elm.start_time) && parseFloat(now) < parseFloat(elm.end_time)) {
                statusArray.push('open')
            } else {
                statusArray.push('close')
            }
        })

        if (statusArray.includes('open')) {
            document.getElementById("restaurant-status").innerHTML = `OPEN`;
        } else {
            document.getElementById("restaurant-status").innerHTML = `CLOSE`;
        }

    }
})

```

* `if (elm.day == short_Days(date)) {`: is  to check which day we set in the custom field is the current day. Then, the time slots of that day will be checked, then compared with the current time.
* `var statusArray = []`: is to create the attribute for the status and set it as empty by default.
* `if (parseFloat(now) > parseFloat(elm.start_time) && parseFloat(now) < parseFloat(elm.end_time)) {`: is to compare the start time and end time with the current time through the `now` attribute.

If the current time meets the condition, the `open` value will be pushed into the array of status. Otherwise, if the current time doesn’t meet the condition, the `close` value will be pushed into the array.

#### 2.3.4. Pushing the status

```
if (statusArray.includes('open')) {
    document.getElementById("restaurant-status").innerHTML = `OPEN`;
} else {
    document.getElementById("restaurant-status").innerHTML = `CLOSE`;
}
```

This part is to regulate the context added to the `restaurant-status` HTML ID based on the value transferred to the array. We created this ID in the template before. This context is the text we display on the page for the status.

To style the text, you can use some CSS.

![Add some CSS to style the text](https://i.imgur.com/hUDpKFO.png)

That’s done. All the code is updated [here](https://github.com/wpmetabox/tutorials/tree/tutorials/realtime-restaurant-status) for your reference.

Now, let’s check how it works.

Assuming that it’s 11:30 on Friday. Then the status will be **Close**. Because on Friday, the restaurant is open from 7 to 11 o’clock.

![The status works well](https://i.imgur.com/7XY07yq.png)

If you change the time slots saved in the custom field. Then, the status turned to **Open** automatically.

![The status is dynamic](https://i.imgur.com/KjMDYzA.png)

So, the status works well.
