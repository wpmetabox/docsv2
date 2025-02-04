---
title: Having a chronological timeline in WordPress using MB Views
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Today, we'll use the **MB Views** extension from Meta Box to **create a professional timeline**, visually presenting events, roadmaps, milestones, and changelogs for easy access.

Here is a simple example!

![An example of the timeline as the changelog along with the date, the version, and details](https://i.imgur.com/ANBWmnE.png)

## Video version

<LiteYouTubeEmbed id='JB8Ws8yFcgA' />

## Preparation

The timeline page shows multiple milestones, along with the date and information about the event. Each event will be saved in a post of a custom post type. Then, we use custom fields to manually choose which post (means event) will be shown in the timeline, as well as set their order.

Let's take a look at the tools we'll need for this practice.

* [The Meta Box plugin](https://wordpress.org/plugins/meta-box/) to have a framework for custom post type, custom fields, and **MB Views**;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to visually create custom fields on a UI in the backend;
* [MB Views](https://metabox.io/plugins/mb-views/): to create a template for the timeline page;
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/) (optional): to create a custom post type if you do not want to use the blog posts for the posts we show in the timeline;
* [Meta Box Group](https://metabox.io/plugins/meta-box-group/) (optional): to group the fields together for better organization.

Make sure these extensions are enabled before we start.

## 1. Creating a new page

In the real case, you may have an existing page with other content and just add the timeline to the page as an additional part. But, in this practice, I’ll create a new page to display the timeline only.

Go to **Pages** > **Add New** to create a new one, as usual.

![Go to Pages > Add New to create a new one as usual](https://i.imgur.com/RvpQIRs.png)

## 2. Creating custom fields

To specify the content that will be shown in the timeline, I’m going to add some custom fields to the page.

Each timestamp includes 2 types of information:

* The date regulates the order of the content on the timeline: I use the **Date Picker** field for it.
* The details of the event: You can use some types of custom fields to input those details directly as usual. But, in the case that you want to get the content from some existing posts, you should use the **Post** field type. This is useful if detailed event information is already in a custom post type.

These pieces of information will go along together, so I set them up in a group. Here is the structure of the fields:

![Structure of the custom fields](https://i.imgur.com/gQ3SnlJ.png)

To have them, go to **Meta Box** > **Custom Fields** and create a new field group.

![Go to Meta Box > Custom Fields and create a new field group](https://i.imgur.com/39wUHLN.png)

First, add a **Group** field.

![Add a Group field](https://i.imgur.com/0Mwz8V7.png)

Inside the group, add subfields following the structure I indicated.

The first one is for the time. Meta Box offers several fields for time and date, just pick one that suits you. I choose the **Date Picker** field for illustration purposes.

![Add the Date Picker field for the time](https://i.imgur.com/o26M7xG.png)

The second one should be the **Post** field type. As I explained, you can add any kind of field to input content, but if you have posts including that, we can use the **Post** field to indicate those posts. Then, we must set the post type of those posts.

![Use the Post field to choose a post from the regulated post type to have their content.](https://i.imgur.com/ILrnNUb.png)

I have no more special settings for these fields.

But for the group, you should set it as collapsible to see all timestamp and its content in a neat structure.

![Set the group as collapsible to see all changes in a clear structure](https://i.imgur.com/uxxIots.png)

If you want to easily identify the content of each timestamp on the timeline, you can add a title for the group. There are several suggestions to choose from when you click on the button at the end of the **Group title** box.

![There are some suggestions to set the group title](https://i.imgur.com/O69HKu0.png)

**In there**:

* `{#}`: is to number the item;
* `date_timeline` and `post_timeline`: are the IDs of the subfields. They help to set the group title based on the content input to those fields.

Certainly, since a timeline has multiple timestamps, we need more than one post showing on it. Therefore, we should set this group as cloneable. It’s a kind of must-have setting.

![Set the group as cloneable](https://i.imgur.com/DGrvZnB.png)

You also can enable the **Sortable** option to rearrange the events based on the group title. In this case, I set the title as the date of the timestamp, so the posts will be sorted by the date that you set for each.

![Enable the Sortable option to rearrange the events](https://i.imgur.com/rGcPCyY.png)

After creating the fields and having reasonable settings, move to the **Settings** tab, choose **Location** as **Post type**, and select **Page**. Then, go to the **Advanced location rules** section below, and choose the page we created for the timeline to apply these fields to it.

![Set the location of the field group as the post we use for the timeline.](https://i.imgur.com/v388w7x.png)

Now, go to the page editor, you will see the created fields.

![The created fields in page editor](https://i.imgur.com/jU8OyZG.png)

In the **Post** field, there is a list including all the posts from the post type that you set for this field.

![There is a list including all the posts from the post type](https://i.imgur.com/Hs7hszw.png)

Just choose the date and the post.

To add multiple timelines for the timeline, click on the **+ Add more** button to add the new date and content.

![Click on the + Add more button to add new timestamp.](https://i.imgur.com/HwIDNlA.png)

Move on to display this information on the timeline using **MB Views**.

## 3. Getting content from custom fields

First, we need to get all the data saved in custom fields that we made in the previous step. They include the date of the timestamps and its content.

So, head over to **Meta Box** > **Views** and create a new view as usual to do it.

![Create new view with MB Views](https://i.imgur.com/SJHIpmR.png)

The data is from the fields, so click on the **Insert Field** button and choose the fields from the list on the right sidebar to get data from them.

![Click on the Insert Field button and choose the fields from the list on the right sidebar to get data from them.](https://i.imgur.com/pU2rSsQ.png)

Since we applied custom fields to the post, you should look for them in the **Post** tab. Find out the group that we created for the timeline. It's cloneable, so once we click on it, a loop will be generated in the template.

![Find out the group that we created for the timeline](https://i.imgur.com/B4ukuQ1.png)

Next, simply choose the subfields from the list to insert them into the loop one by one.

![Choose the subfields from the list to insert them into the loop one by one](https://i.imgur.com/8OJylFz.png)

Meta Box also provides some options to set the output of the data. So, just set the one that fits your needs.

For the post, we also have some options to set its output. Because I want to show all the content of the post for more detail of the event, I choose the **Post content** option.

![Choose the Post content option to show all the content of the post for more detail of the event.](https://i.imgur.com/6LJdAhh.png)

After inserting all the fields, scroll down to the **Settings** section of the view, set the **Type** setting as **Singular**, and choose the **Location** as the created page to apply the template to it. It also means adding the timeline to the page. In the other case, you can set other **location** to fit your case.

![In the Settings section, set type and location for the view](https://i.imgur.com/6DrM2lt.png)

Then, go to the page on the frontend, we will see all the data displayed in chronological order according to the timestamp that we saved in the **Date** field.

![All the data displayed in chronological order according to the timestamp](https://i.imgur.com/GL3irL7.png)

We’ve just displayed the data in an appropriate order. There’s been nothing to show the timeline as a flow of time yet. The flow should be visual to help viewers easily follow the information. So, we should style this timeline a lot more.

## 4. Styling the timeline

In the real case, you may have a lot of ideas for a beautiful timeline. But, in this practice, I’m going to make the timeline in a simple style like this:

![The timeline is in a simple style.](https://i.imgur.com/ANBWmnE.png)

If you like it, just follow up this step.

Go back to the view that we made for the timeline to add some code:

![Add code to to style the timeline.](https://i.imgur.com/uThyMMb.png)

**Explanation**:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
{% for clone in post.timeline %}
```

This line is to declare a JavaScript library. We’ll use it to have the action to have the **Read more** button where we can interact with to read the full content of the event or collapse them all in a short part.

As you can see in the image above, we should add some **div** tags and classes for each element that we want to have on the timeline. Along with the ones I set for the date and the content of the post, I also added a class to have the dot and another one for the **Read more** button.

![Add div and class for each element we want to have in the timeline](https://i.imgur.com/HJLL6J8.png)

Next, insert code in the **JavaScript** tab for the **Read more** button.

```
jQuery(function ($) {
    $('.timeline-readmore').click(function () {

        $(this).parent().find('.timeline-post').toggleClass('show-full-content')

        if ($(this).text() == "Read more")
            $(this).text("Read less")
        else
            $(this).text("Read more");
    })
})
```
![Insert code in the JavaScript tab for the Read more button](https://i.imgur.com/1vLzFvX.png)

**In there**:

```
$('.timeline-readmore').click(function () {
```

This is to trigger when visitors click on the **Read more** button. And, `timeline-readmore` is the class I created for the button before.

When the button is clicked, this line below will run.

```
$(this).parent().find('.timeline-post').toggleClass('show-full-content')
```

* `timeline-post`: is the class used for the post content where we want to show fully or neatly based on the click on the **Read more** button.
* When the reader clicks on the button, the line will add the `show-full-content` class to the post content section. Since it is a toggle class, it will be removed when having one more click. We will use this class to show full of the post content later. It also means that, when it’s removed, the content will be hidden, as at the beginning.

Along with the change of content, the label on the button also needs to change. When the content shows fully, it should be **Read less** or something else. So I have this following part to turn the labels.

```
 if ($(this).text() == "Read more")
            $(this).text("Read less")
else
            $(this).text("Read more");
```

Finally, go to the **CSS** tab and add some code.

![Go to the CSS tab, and add some code](https://i.imgur.com/Oo1MliU.png)

Based on all the classes we added, even the toggle class from JavaScript, we can style the timeline easily.

These are some parts I want to highlight:

```
border-left: 1px solid #dddedf;
```

It is to have a line for the timeline to show the flow of time.

```
.timeline .dot {
    width: 14px;
    height: 14px;
    position: absolute;
    background-color: #000;
    border-radius: 50%;
    min-width: 14px;
    min-height: 14px;
    left: -7px;
    top: 7px;
    box-shadow: 0 0 12px 0 rgba(8, 35, 43, 0.65);
```

The part above is to style the dot for each timestamp.

In addition, I use `max-height: 300px;` to set the max height for the section displaying each post's content to limit the area for each of them. Then, use `overflow: hidden;` to hide all the content that overflows the area.

And the last one, `max-height: unset !important;,` is to remove the max height of the post content section to show all the hidden content.

All of these codes are available on our [GitHub](https://github.com/wpmetabox/tutorials/tree/tutorials/create-timeline) channel, so you can refer to it for more details.

After saving the template, go back to the page on the frontend. You can see the new look of the timeline after styling. The button also works well.

![The new look of the timeline, and the buttons work well.](https://i.imgur.com/ANBWmnE.png)

By the way, if you use different page builders, stay tuned for our upcoming guide to [have a chronological timeline](https://docs.metabox.io/tutorials/create-timeline-with-bricks/).

Additionally, we recommend our article on [showing upcoming events](https://docs.metabox.io/tutorials/show-upcoming-events-with-mb-views/), which filters and displays ongoing or future events, ensuring your visitors don’t miss any information. I hope you find it helpful!
