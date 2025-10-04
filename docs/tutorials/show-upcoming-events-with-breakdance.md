---
title: Showing upcoming events - Meta Box + Breakdance
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

**Displaying upcoming events** highlights important dates and deadlines, making it easier for everyone to join. Let's use **Meta Box** and **Breakdance** to achieve this!

We're focusing on **displaying events with end dates after the current date**. Each day, if an event's end date has passed, it magically disappears from the page. All automated!

![The upcoming events section created by Meta Box and Breakdance](https://imgur.elightup.com/CI38tj5.png)

## Video version

<LiteYouTubeEmbed id='c7nZCUKpPSQ'/>

## Preparation

Imagine that today is January 30th.

![Assume that today is January 30th.](https://imgur.elightup.com/BEC0jA3.png)

We will filter and display the events that are either ongoing or scheduled for the future. This means that an event with an end date beyond January 30th will be shown on the page.

![An event with an end date beyond January 30th will be shown on the page.)](https://imgur.elightup.com/Z2BIHSb.png)

In this case, each event will be a post of a custom post type. I’ll create some custom fields to store some typical information about events. The start date and the end date will also be used for filtering purposes.

Let’s check which tools are necessary for this practice.

* [The Meta Box plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create a custom post type and custom fields for the events;
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the events;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create the custom fields visually;
* **Breakdance**: to build the page, which contains the upcoming events section.

Now, let’s start!

## 1. Creating a new post type

Go to **Meta Box** > **Post Types** to create a new post type for the events.

![Create a new post type for the events.](https://imgur.elightup.com/abGyY4o.png)

## 2. Creating custom fields

Each event may have some subsidiary information. Then, we should use custom fields to store them; just create them as you go. Here are some typical ones for this practice.

![Some typical custom fields to store event information](https://imgur.elightup.com/xudbLbw.png)

Two of them, the start date and the end date, should be must-have items since they will be used for the filter.

Now, go to **Meta Box** > **Custom Fields** and create them.

![Go to Meta Box > Custom Fields to create fields](https://imgur.elightup.com/wx7123p.png)

I’ll choose the **Date Picker** field type for both the start and end date of the event.

![Choose the Date Picker field type for the start and end date of the event.](https://imgur.elightup.com/lffhi0Z.png)

Pay attention that you’ll only see this setting for the field when enabling the [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) extension. Just turn it on to show the date on the management dashboard, then you can easily compare with the result. This feature is optional, so I did not mention it before.

![Turn on the button to show the date on the management dashboard](https://imgur.elightup.com/2N6Xqho.png)

After creating all the needed fields, go to the **Settings** tab > choose **Location** as **Post type**, and select **Event** to apply these fields to this post type.

![Set the location to apply these fields to the Event post type](https://imgur.elightup.com/CWiN4CI.png)

Now, in the post editor, you will see the created custom fields.

![The created custom fields in the post editor](https://imgur.elightup.com/xudbLbw.png)

Simply input data into them.

These are some posts that I created for reference.

![Some created posts](https://imgur.elightup.com/PnvSd9r.png)

The start date and the end date are shown as admin columns as well. You may want to see these ones once again in the end to easily compare them with the ones displayed on the page.

## 3. Creating a global block stipulating the display of an event

With Breakdance, you should start by making a global block. This block will get information from a post first, then show it anywhere on your site.

Go to **Breakdance** > **Global Blocks** and create a new global block.

![Create a new global block.](https://imgur.elightup.com/8NoLKdW.png)

Don't forget to pick a post to see how it looks.

![Pick a post to see how it looks in preview](https://imgur.elightup.com/DOBTDn3.png)

My global block will display the information of each post (I mean event) in a box like this:

![The global block will display the information of each post in a box](https://imgur.elightup.com/6UXo2D1.png)

Now, first, select the **Div** element to cover the block.

![Select the Div element to cover the block](https://imgur.elightup.com/N9kTlLt.png)

Inside this div, add some elements to get detailed information of the events.

For the image of the event, choose a **Post Featured Image** element since it is saved as the post's featured image. And then, the image is displayed in the preview.

![Get the image of the event](https://imgur.elightup.com/6aMfR2B.png)

Next, add the **Post Title** element for the event title.

![Add the Post Title element for the event title](https://imgur.elightup.com/BQoUzQs.png)

Now, I want to display the start date, end date, and location in the same style along with icons, so I choose the **Icon List** element instead of normal text. Since this information is saved in custom fields created with Meta Box, we use **Insert Dynamic Tags** for each item.

![To display the start date, end date, and location, choose the Icon List element, then use Insert Dynamic Tags](https://imgur.elightup.com/QJwKzmq.png)

Then, choose the corresponding fields in the **Metabox** section.

![Choose the corresponding fields in the Metabox section](https://imgur.elightup.com/mN27pHr.png)

Afterward, you'll see the start date appear right away.

![The start date appears](https://imgur.elightup.com/mQ4M5K3.png)

Besides, you can also change any icon for each item you want.

Do the same to display the end date.

For the location, I’ll add another **Icon List** element. Actually, you can use the created icon list for the dates; I just create a new one for separation. Also, use the **Insert Dynamic Tags** to connect this element with the right field.

![Get the location](https://imgur.elightup.com/tQ0XrlO.gif)

That’s all for displaying event information on the block.

## 4. Displaying all events on the page

It’s time to show all the events  on the page. Just to clarify, at this stage, we're displaying "all the events". For filtering, we’ll do it separately in the next step.

Now, edit any page with **Breakdance**.

I’m going to add a section to the page to show the upcoming events.

Begin by selecting a **Section** element.

![Select a Section element for the upcoming events.](https://imgur.elightup.com/axWk8Nh.png)

Next, add a **Heading** element, and give it a title.

![Add a Heading element for section title](https://imgur.elightup.com/CRAHWdz.png)

To display the wanted posts, we need the **Post Loop Builder** element. Then, in the **Global Block** section, choose the one we’ve just created.

![To display the wanted posts, we need the Post Loop Builder element.](https://imgur.elightup.com/Hu3BfOY.png)

You see, there is no information now. So, move to the **Query** section, choose **Custom**, and edit the query to get posts from the custom post type that we use for events.

![Move to the Query section, choose Custom, and edit the query to get posts from the custom post type that we use for events.](https://imgur.elightup.com/O68WI9Q.png)

**In there**:

* In the **Source** data: choose the **Post Types** as **Event** to get data from this post type.
* In the **Posts per page** section: you can enter the number to limit how many posts are shown. In this case, I fill in `-1` to show all the events.

Now, there’re some posts with information displayed exactly as we set in the created global block.

![There’re some posts with information displayed exactly as we set in the created global block.](https://imgur.elightup.com/TDVaUlo.png)

We’ve just finished getting all the posts in the event post type. Note that I specifically mentioned "all the posts" since we will add the filter later.

Let's style the section a bit. You can go back to edit the global block to change how the post information looks, as well as style the section.

So, you can see all the events displayed on the frontend with styling.

![All the events displayed on the frontend with styling](https://imgur.elightup.com/OpoxQwT.png)

To display only the upcoming events, we need a custom query to filter those posts.

## 5. Querying to show only the upcoming events

Go back to the **Query** section of the **Post Loop Builder** element, instead of using the query as the previous step, we should look for the **Array** section to add conditions flexibly. You can see an available code, which is a PHP array commonly used to customize queries for retrieving data.

![In the Query section of the Post Loop Builder element, look for the Array section to add conditions flexibly.](https://imgur.elightup.com/H9VVq3r.png)

Let’s add some code following the structure to display only the upcoming events.

```css
return [
  'post_type' => 'event',
  'posts_per_page'=> -1,
  'meta_key'=> 'end_date',
  'meta_compare'=> '>=',
  'meta_value'=>date('Y-m-d'),
];
```
![Add some code to display only the upcoming events.](https://imgur.elightup.com/dzgRvkW.png)

**Explanation**:

```css
'post_type' => 'event',
'posts_per_page'=> -1,
```
These lines of codes to get all posts in the **Event** post type.

```css
 'meta_key'=> 'end_date',
 'meta_compare'=> '>=',
 'meta_value'=>date('Y-m-d'),
```
This is to compare the end date with the current date. If the events have the end date after the current date, they could be displayed. In there:

* `'meta_key'=> 'end_date',`: to set the meta key as the ID of the field named **End Date**;
* `'meta_compare'=> '>='`: to get the events that have the end date after the current date;
* `'meta_value'=>date('Y-m-d'),`: to get the value of the current date with its format.

Now, just the upcoming events are displayed. Only events have the end date after the current date, which I marked at the beginning, could be displayed.

![The upcoming events section created by Meta Box and Breakdance](https://imgur.elightup.com/CI38tj5.png)

For [displaying posts with specific criteria](https://docs.metabox.io/tutorials/show-posts-specific-criteria-oxygen/), you can refer to our guide. I hope you find it helpful!
