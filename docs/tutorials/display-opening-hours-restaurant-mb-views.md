---
title: Displaying opening hours for restaurants - MB Views
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

For a website having information about more than one restaurant, each one may have their own opening hours. To have this kind of information, we can use custom fields.

## Video version

<LiteYouTubeEmbed id='8nZwyBbAWXU' />

## Before getting started

In this practice, I’ll take an example of an online food order with multiple restaurants on the site. Each restaurant will be a post in their own custom post type. Then, we’ll display the opening hours on the singular post where we put information about each restaurant.

For having time slots for each day, we’ll use custom fields. So, we need the [Meta Box](https://metabox.io) to have a framework to create them. Furthermore, we also need some advanced features from Meta Box that are available in the following extensions:

* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/?swcfpc=1): provides an intuitive UI in the back end to create and configure custom fields for opening hours;
* [MB Group](https://metabox.io/plugins/meta-box-group/?swcfpc=1): helps to arrange fields into groups;
* [MB Conditional Logic](https://metabox.io/plugins/meta-box-conditional-logic/?swcfpc=1): allows you to create rules to control the display of hours with options.
* [MB Views](https://metabox.io/plugins/mb-views/?swcfpc=1): create templates and display the custom fields’ value in Opening Hours on the frontend;

## Step 1: Create custom fields

Normally, we will create a new custom post type for the **restaurants** first. I skipped that step since I already had it on my website. If you haven’t had it yet, create it first then go to this step.

Go to **Meta Box > Custom Fields > Add New** to create a new field group. Then, add custom fields with the structure like this:

<table>
<thead>
<tr>
<th> Name </th>
<th> ID </th>
<th> Type </th>
<th> Options </th>
<th> Condition </th>
</tr>
</thead>
<tbody>
<tr>
<td>Choose an option</td>
<td>choose_an_option</td>
<td>select</td>
<td>1. all_days_are_the_same
2. difference_between_weekdays_and_weekend
3. custom</td>
</tr>
<tr>
<td>All days have the same opening hours</td>
<td>all_days_have_the_same_opening_hours</td>
<td>group</td>

<td>display only when:
the choose_an_option_ field = the all_days_are_the_same_ option</td>
</tr>
<tr>
<td> Type of opening hours</td>
<td>type_of_opening_hours</td>
<td>select</td>
<td>1. open_all_day
2. close_all_day
3. by_appointment_only
4. enter_hours</td>

</tr>
<tr>
<td> Choose time slots</td>
<td>choose_time_slots</td>
<td>group</td>

<td>display only when: the _type_of_opening_hours_ field = the _enter_hours_ option</td>
</tr>
<tr>
<td>Start time</td>
<td>start_time</td>
<td>time picker</td>

</tr>
<tr>
<td>End time</td>
<td>end_time</td>
<td>time picker</td>

</tr>
<tr>
<td>Weekdays</td>
<td>weekdays</td>
<td>group</td>

<td>display only when: the _choose_an_opton_ field = the _difference_between_weekdays_and_weekend_ option</td>
</tr>
<tr>
<td> Type of opening hours</td>
<td>type_of_opening_hours**_weekdays**</td>
<td>select</td>
<td>1. open_all_day
2. close_all_day
3. by_appointment_only
4. enter_hours</td>

</tr>
<tr>
<td> Choose time slots</td>
<td>choose_time_slots_weekdays</td>
<td>group</td>

<td>display only when: the _type_of_opening_hours_weekdays_ field = the _enter_hours_ option</td>
</tr>
<tr>
<td>Start time</td>
<td>start_time_weekdays</td>
<td>time picker</td>

</tr>
<tr>
<td>End time</td>
<td>end_time_weekdays**</td>
<td>time picker</td>

</tr>
<tr>
<td>Weekend</td>
<td>weekend</td>
<td>group</td>

<td>display only when: the _choose_an_opton_ field = the _difference_between_weekdays_and_weekend_ option</td>
</tr>
<tr>
<td> Type of opening hours</td>
<td>type_of_opening_hours**_weekend**</td>
<td>select</td>
<td>1. open_all_day
2. close_all_day
3. by_appointment_only
4. enter_hours</td>

</tr>
<tr>
<td> Choose time slots</td>
<td>choose_time_slots_weekend</td>
<td>group</td>

<td>display only when: the _type_of_opening_hours_weekend_ field = the _enter_hours_ option</td>
</tr>
<tr>
<td>Start time</td>
<td>start_time_weekend</td>
<td>time picker</td>

</tr>
<tr>
<td>End time</td>
<td>end_time_weekend</td>
<td>time picker</td>

</tr>
<tr>
<td>Monday</td>
<td>monday</td>
<td>group</td>

<td>display only when: the _choose_an_option_ field = the _custom_ option</td>
</tr>
<tr>
<td> Type of opening hours</td>
<td>type_of_opening_hours_monday</td>
<td>select</td>
<td>1. open_all_day
2. close_all_day
3. by_appointment_only
4. enter_hours</td>

</tr>
<tr>
<td> Choose time slots</td>
<td>choose_time_slots_weekend</td>
<td>group</td>

<td>display only when: the _type_of_opening_hours_monday_ field = the _enter_hours_ option</td>
</tr>
<tr>
<td>Start time</td>
<td>start_time_weekend</td>
<td>time picker</td>

</tr>
<tr>
<td>End time</td>
<td>end_time_weekend</td>
<td>time picker</td>

</tr>
<tr>
<td>…</td>
<td>…</td>
<td>…</td>
<td>…</td>
<td>…</td>
</tr>
<tr>
<td>Sunday</td>
<td>…</td>
<td>…</td>
<td>…</td>
<td>…</td>
</tr>
</tbody>
</table>

You can see in the above table, the first field is a **select** field with 3 options. I filled in the options into the **Choice** box as below.

![Fill in the options](https://i.imgur.com/dYGYZn9.png)

These 3 options will be used to set the display rule of other group fields.

To set conditions to groups, for example, with the **All days have the same opening hours** group, go to the **Advanced tab**, and then set the rule in the **Conditional Logic** section like this:

![Set conditons to groups](https://i.imgur.com/AquTHJL.png)

This rule means this group will be displayed when the **Choose an Option** field is selected as **All days have the same opening hours** option which has the value is `all_days_are_the_same`.

Similarly, if the **Choose an Option** field is chosen as the **Difference between weekdays and weekend** options, all the subfields of the **Weekdays** and **Weekend** group will be displayed. Or if the Choose an Option field is selected as the **Custom** option, the group fields for every day in a week will be shown up. That’s the concept of how to create fields.

In each group field, I also have subfields with the same structure.

The **Type of Opening Hours** field is the select field. I have 4 options in the Choice box:

* Open All day;
* Close All day;
* By Appointment Only;
* Enter Hours.

If the restaurant has different opening hours, you can choose **Enter Hours** to display the **Start Time** and **End Time** field in the **Choose Time Slots** group. So, I will set the rule for this group like this:

![Choose Enter Hours to display](https://i.imgur.com/Pk70SvN.png)

In case the restaurant opens in multiple time slots, we’ll need this group to be cloneable. So, I tick this box as below:

![Set group to be cloneable](https://i.imgur.com/aJP7FdB.png)

After creating all the fields, go to the **Settings** tab of the field group, choose **Location** as **Post Type**, and select **Restaurant** to apply these fields to this post type.

Publish this field group and go to the post editor in **Restaurant**, you will see the custom fields here.

![Created fields in the post editor](https://i.imgur.com/OelC36Y.gif)

## Step 2: Display the fields’ value on the frontend

In this step, we’ll get the input data from those custom fields to display into the Restaurant single page with **MB Views**.

If you’ve had a template created by MB Views for the Restaurant single page, just go to it and edit. If not, create one. Then, add code to the view.

The code is quite long, so I put it in my Github [here](https://github.com/wpmetabox/tutorials/tree/master/showing-opening-hours-section-with-MB-Views). You can refer to it for more details. The code is divided into several parts to get corresponding group data. Because of the same concept in all parts, I’ll explain a typical part to be more clear about the logic.

```
<div class="opening-hours">
<h2>
    Opening Hours
</h2>
<div class="detail-schedule">
    {% set options = post.choose_an_options.value %}
    {% if (options == "all_days_are_the_same") %}
        {% set same_days = post.all_days_have_the_same_opening_hours.type_of_opening_hours.value %}
        {% if ( same_days == "enter_hours") %}
        <div class="date-time">
            <div class="date">
                Mon - Sun
            </div>
            <div class="hour">
            {% for clone in post.all_days_have_the_same_opening_hours.choose_time_slots %}
            <div class="time-slot">
                <p class="starting-hour">
                    {{ clone.start_time | date( 'h:i A' ) }}
                </p>
                <p class="ending-hour">
                    {{ clone.end_time | date( 'h:i A' ) }}
                </p>
            </div>
            {% endfor %}
            </div>
        </div>
    {% else %}
    <div class="date-time">
        <div class="date">
            Mon - Sun
        </div>
        <div class="hour">
            {{ post.all_days_have_the_same_opening_hours.type_of_opening_hours.label }}
        </div>
    </div>
    {% endif %}
```
Here I created a variable named **options** to admit the value from the **Choose an Option** field. Then I set a rule based on its value to display values from the subfield in the corresponding group. It’s quite the same with the rules we created when configuring the fields.

First, if its value is `all_day_are_the_same`, the values of fields in the **All days have the same opening hours** group will be displayed.

![Add the code](https://i.imgur.com/fUMwtHG.png)

I set a variable named same_days to admit the value from the **Type of Opening Hours** field. If it is `enter_hours`, the **Choose Time Slots** group will be obtained and displayed the data. As we set before, this group is cloneable, so there is a loop here.

![Add the code](https://i.imgur.com/4LO0llZ.png)

After adding code, depending on if the view is new or not, choose the right **Type** and **Location** for the view in the **Settings** section.

Go to the single Restaurant page and see how the opening hours section displays.

![The oopening hours section displays](https://i.imgur.com/OEssGcj.png)

All the time slots are shown exactly as I input in the backend. But this section doesn't look as good as I want. So, I will add some CSS to style this section in the next step.

## Step 3: Style the opening hours section

Still, in the view of the single Restaurant page, move to the **CSS** tab. And add the code below.
```
.container.detail-restaurant .opening-hours {
    max-width: 300px;
    margin: 0 auto;
    width: 100%;
}

.container.detail-restaurant .opening-hours h2 {
    margin: 0 0 10px;
        text-align: center;
        border: 4px solid rgba(231,57,72,.85);
    border-right: 0;
    border-left: 0;
}

.container.detail-restaurant .detail-schedule .date-time {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
        align-items: baseline;
}

.container.detail-restaurant .detail-schedule .date-time .hour .starting-hour:after{
    content: '-';
    margin: 0 5px;
}

.container.detail-restaurant .detail-schedule .date-time .hour .time-slot {
    display: flex;
}

.container.detail-restaurant .detail-schedule .date-time .date {
    font-weight: 700;
    font-size: 15px;
}

.container.detail-restaurant .detail-schedule {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
        border-bottom: 4px solid rgba(231,57,72,.85);
    padding-bottom: 10px;
}
```
Now, go back to the single restaurant page, you’ll see the Opening Hours section looks much more beautiful.

![The final result](https://i.imgur.com/714VXYe.png)

