---
title: Managing & displaying course schedule with filters - Using MB Views
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Using a schedule filter is perfect for an educational platform offering different course schedules, a booking page for doctors or spa services, movie or theater showtimes, or homestay listings with availability filters. This approach improves the user experience.

In this practice, I will take an example to illustrate the schedule filter for courses using **MB Views**. 

![Example of schedule filter in single course)](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/kq.png)

Before going ahead, let’s check some tools we need for this practice.

## Video version

<LiteYouTubeEmbed id='lA0J-3kH1Xw'>

## Preparation

We’ll use a settings page for the schedule, where we show schedule details. Including courses are posts of a custom post type. The remaining information is stored in custom fields. And, to display the schedule filter and data, I use MB Views.

So, I highly recommend you use [**Meta Box AIO**](https://metabox.io/aio/) to have a framework to create a custom post type, custom fields, a settings page, and template. As well as, it provides advanced features from Meta Box extensions. These are some extensions I use in this practice:

* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the course
* [MB Settings Page](https://metabox.io/plugins/mb-settings-page/): to create a settings page for the schedule
* [MB Views](https://metabox.io/plugins/mb-views/): to create a view for adding the schedule filter to the page
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI in the backend for creating fields visually
* [MB Group](https://metabox.io/plugins/meta-box-group/): to organize custom fields into groups for easier management

Let’s start now.

## 1. Creating a settings page

As I said before, we’ll use the settings page to include all the content of the schedule.

Go to **Meta Box** > **Settings Page**, and add a new one.

![Go to Meta Box > Settings Page, and add a new one](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/create-settings-page.png)

For the position of the settings page, you can put it in any place you want. In this case, I keep the location by default.

It’s still blank since we haven’t added any content to it yet.

![The settings page is blank.](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/blank-sp.png)

## 2. Creating a custom post type

We’ll have many courses, and each one is a post of a custom post type. So, let’s create that post type.

Go to **Meta Box** > **Post Types**, and create a new one.

![Go to Meta Box > Post Types](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/create-cpt.png)

After publishing, our post type appears right here. Move to it to create posts. And these are some courses I created as an example.

![Some courses](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/posts.png)

## 3. Creating custom fields

Do you remember the settings page where we haven’t added content? We’ll do it in this step, through custom fields.

These are some fields I want to create.

![Some fields](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/fields.png)

Each item is a day, including information about the teacher, the price, and the courses. The teacher can be chosen from the list, and the course can be selected from the course we created in the previous step. And, we obviously have many items, so I use a cloneable group to have them all.

To create them, navigate to **Custom Fields** in **Meta Box**, and create a new field group.

![Go to Custom Fields in Meta Box](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/create-cf.png)

First, add a **Group** field.

![Add a Group field](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/group.png)

Inside this group, add subfields as the structure you want.

Add a **Date Picker** field for the date.

![Add a Date Picker field for the date](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/sf1.png)

Regarding the teacher, I add a **Select** field, then input the teacher’s names in the **Choices** box.

![Add a Select field, then input the teacher’s names in the Choices box](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/sf2.png)

Simply add a **Number** field for the price.

![Add a Number field for the price](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/sf3.png)

Next, regarding the course, add a field in the type of **Post**. [This field type](https://docs.metabox.io/fields/post/) allows you to choose more than one post from a regulated post type.

![Add a Post field](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/sf4.png)

Then, in the **Post Types** setting, you should choose the post type which you want to choose posts. And enable the multiple setting to choose more than one course.

![Choose post type](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/sf5.png)

For the group, you should set the group as collapsible to see all changes in a clear structure and set the group title to distinguish it.

![Setting group is collapsible, and group title as you want](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/collapsible.png)

Next, make the group cloneable to add more than one item.

![Make the group cloneable](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/cloneable.png)

After having all the fields with essential settings, click on the **Settings** icon, and set the **Location** as **Settings page**, then choose the settings page you want to apply the field group to.

![Set location for the field group](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/location.png)

Now, go to your settings page, and you will see custom fields displayed. Just input data for each item.

![Fields display in the settings page](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/fields-in-sp.png)

When you click on the field of the Courses, a list of posts from the post type you set in the settings is shown. Just choose some of them.

![Choose a post from the list.](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/select-posts.png)

With the entered data, you have two choices for displaying data on the frontend. I’ll use the tabular format for both of them:

1. Simply show information by date. Then, you can have an overview of the courses.
2. Filter all the information related to a course. It is useful when you want to check the schedule of the current single course being viewed. On it, you can check which days the course is scheduled for, who will teach, and how much it costs. Then, comparing and choosing one that fits you is easier. This choice involves a bit of coding knowledge.

Let me show you how to do each one, step by step.

## 4. Displaying all courses on an archive page

In this step, we’ll display courses by day, following the structure of the field group.

We need to have the page first. Go to **Pages** and create a new one.

![Create a page](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/create-page.png)

Next, we’ll use MB Views to show data on this page. Navigate to the **Meta Box** > **View** and create a new view for displaying courses and other information.

![Go to the Meta Box > View and create a new view](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/view-archive.png)

In the **Template** tab, you can add code directly, but I recommend you use the **Insert Field** button and choose the field you want to get data from the list on the right panel. Since we saved fields in the settings page, move to the Site tab, and you can see our field group.

![Find the field in the Site tab](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/insert-field-group.png)

Click on it. It is a cloneable group, so you’ll see a loop is generated.

![A loop was generated for the cloneable group](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/loop.png)

Inside this loop, just insert subfields one by one. MB Views also allows you to choose the format or output for some special fields. Select one that fits you.

![Insert subfields](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/insert-sf.png)

There is more than one course on a day. That’s why when you insert the field, of course, there is a nested loop.

![A nested loop for the courses](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/nested-loop.png)

After that, scroll down to the **Settings** section to set the location for the template. You should set its type as **Singular**, then choose the page you created.

![Set the location for the template](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/setting-view.png)

Now, view the page on the frontend; you can see all the data is displayed.

![The data is displayed](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/frontend-archive.png)

To make the data easier to read, I decided to display it as a table. So I returned to the created template to style it.

I’m adding some `div` tags and classes, as well as some code for the table format.

![Modify the template](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/style1.png)

Pay attention to the line of code `{% if not loop.last %}, {% endif %}` to ensure that a comma is added after each course except the last one.

Then, move to the **CSS** tab to style the table.

![Add CSS to style](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/css1.png)

And this is the new look of my page.

![The final look of the archive page](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/archive.png)

## 5. Displaying schedule on the single course

This is our aim in this tutorial. It is to filter information related to a specific course. Your visitors can choose the date, teacher, and price that are suitable for them. I also use MB Views.

Go to **Views**, and create another view.

![Create a new view for the single course](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/single-view.png)

I’ll add some code directly.

```
{% set course_id = post.ID %}
{% set options = mb.get_option('schedule') %}
{% set schedule = options.schedule_detail ?? [] %}
{% set filtered = [] %}
```

![Get data from the group and settings page](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/add-code.png)

**Specifically**:

* `{% set course_id = post.ID %}`: is to get the post ID of the course being viewed. It’s also the ID of the course.
* `mb.get_option('schedule')`: is a function to get data from the schedule settings page.
* `{% set schedule = options.schedule_detail ?? [] %}`: is to get data from the `schedule_detail` group field group. It’s the ID of the group we created.
* `{% set filtered = [] %}`: is to create an empty array to later store filtered results.

A course can be taught on different days. So we need a loop to get data from all the items in the schedule. 

```
{% for row in schedule %}
    {% set related_courses = row.courses ?? [] %}
    {% if course_id in related_courses %}
        {% set filtered = filtered|merge([row]) %}
    {% endif %}
{% endfor %}
```

![Set condition for the data](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/insert-single.png)

This part of the code means:

Inside the loop, I retrieve all the courses of each item and assign them to the `related_courses` variable.

In that variable, we’ll check whether it includes the ID of the course that is being viewed; the data row will be added to the array we created before.

Next, add this code:

```
{% if filtered is not empty %}
    <table class="mb-table">
        <thead>
            <tr>
                <th>Day</th>
                <th>Teacher</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {% for row in filtered %}
                <tr>
                    <td>{{ row.date | date( 'd F Y' ) }}</td>
                    <td>{{ row.teacher }}</td>
                    <td>${{ row.price }} </td>
                </tr>
            {% endfor %}
        </tbody>
    </table>
{% else %}
    <p>No schedule available for this course.</p>
{% endif %}
```

![Retrieve the data.](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/column-single.png)

When the array has at least one value, the information, including `date`, `teacher`, and `price`, will be retrieved.

Otherwise, in the case that the filter is empty, the text of “No schedule available for this course” will be shown.

Since we display the data in a table, you should style the table a little bit. Move to the **CSS** tab to add some code.

![Add CSS for the page.](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/css2.png)

Now, you need to set the location for this template. I want to apply it to a single course. So, also set the **Type** as **Singular**, but choose **Course**.

![Set the location to apply the template for the singular course.](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/setting2.png)

View a course on the frontend, you can see the expected information.

![The final look of the single post.](https://i0.wp.com/images.elightup.com/meta-box/blog/schedule-filter/kq.png)
