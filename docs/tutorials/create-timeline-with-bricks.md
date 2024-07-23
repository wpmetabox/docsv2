---
title: Creating a timeline page - Meta Box + Bricks
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Sometimes, you should show the content in a timeline format. This type of content is really useful when you want to display the timeline of an event, historical milestones, roadmap, or changelog of a plugin/theme, etc. A **logical and clear timeline** can help visitors get information easily. In this article, let’s create and display a timeline page using a combination of **Meta Box** with **Bricks**.

This one is an example.

![An example of the timeline as the changelog along with the date, the version, and details](https://i.imgur.com/xQk3AN6.png)

## Video version

<LiteYouTubeEmbed id='Isnp3fL5G8g' />

## Preparation

The timeline page shows multiple timestamps along with the date, title of the event, and details. All of the information will be saved in custom fields created with Meta Box.

So, in this tutorial, we need these tools:
* [Meta Box plugin](https://wordpress.org/plugins/meta-box/): to have a framework for creating custom fields to save the updated information. You can download it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/);
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to create custom fields visually;
* [Meta Box Group](https://metabox.io/plugins/meta-box-group/) (optional): to group the fields together for better organization;
* **Bricks** to build the timeline page.

When all of the tools are activated, let’s dive in step by step.

## 1. Creating a new page

We will display the timeline on a page. So, we should have it first.

Go to **Pages** > **Add New** to create a new one as usual.

![Go to Pages > Add New to create a new one as usual](https://i.imgur.com/PdNUHv4.png)

## 2. Creating custom fields

As I mentioned, we need to create some fields to add content about the timeline for the page. 

Each point in the timeline includes two types of information:

* The date regulates the order of the content on the timeline. I use the **Date Picker** field for it.
* The details of the event: you can use some types of custom fields to input those details as usual. But in the case that you want to get the content from some existing posts, you should use the **Post** field type.

These fields will go along together. In other words, they are in a group. So, the structure of the fields will be like this:

![Structure of the custom fields](https://i.imgur.com/NnGg35f.png)

To have them, go to **Meta Box** > **Custom Fields**, and create a new field group.

![Go to Meta Box > Custom Fields, and create a new field group](https://i.imgur.com/rQPr6jh.png)

First, add the **Group** field.

![Add a Group field](https://i.imgur.com/1lllx66.png)

Inside the group, add subfields following two types of data.

The first one is for the time. Meta Box supports several fields for time and date, just choose a suitable one in your case. For illustration purposes, I choose the **Date Picker** field. 

![(Add the Date Picker field for the time](https://i.imgur.com/WdUWqSu.png)

Another subfield is for the event details. Normally, you may use some basic fields to save the content. But it’s in a simple case only. For others, we usually have posts to put into the timeline. So, we should use the **Post** field. It allows us to **choose a post from the regulated post type** to have their content. This option may be more optimal for saving time, especially in the case you have available posts.

![Use the Post field to choose a post from the regulated post type to have their content](https://i.imgur.com/JjNZREi.png)

When configuring the Post field, remember to regulate the post type that the posts should be.

There are no more special settings for these two subfields. But, for the group, you should set the group as collapsible to see all changes in a clear structure.

![Set the group as collapsible to see all changes in a clear structure](https://i.imgur.com/AGLCb7E.png)

Also, we should set a title for the group to easily identify the content of each point on the timeline. There are some suggestions to choose from when you click on the button at the end of the **Group title** box.

![There are some suggestions to set the group title](https://i.imgur.com/aDDeom6.png)

**In there**:

* `{#}`: is to number the item.
* `date_timeline` and `post_timeline`: are the IDs of the subfields. They help to set the group title based on the content input to those fields.

There is certainly more than one milestone that we want to show on a timeline. Therefore, we should set the group as cloneable. It’s a kind of must-have setting.

![Set the group as cloneable](https://i.imgur.com/gbktVyW.png)

You also can enable the **Sortable** option to rearrange the events. Absolutely, it’s based on the group title. In this case, I set the title as the date, so the post will be sorted by the date that you input.

![Enable the Sortable option to rearrange the posts](https://i.imgur.com/p3FuAR3.png)

After creating the fields and having reasonable settings, move to the **Settings** tab, choose **Location** as **Post type**, and select **Page**. Then, go to the **Advanced location rules** section below, and choose the page we used for the timeline to apply these fields to it.

![Set the Location of the field group as the post we use for the Timeline.](https://i.imgur.com/KneNte6.png)

Now, go to the page editor, and you will see the created fields.

![The created fields in page editor](https://i.imgur.com/mwJAgfx.png)

In the **Post** field, there is a list including all the posts from the post type that you set for this field.

![There is a list including all the posts from the post type](https://i.imgur.com/YmC6zCn.png)

Just choose the date and the post.

To add more timestamps for the timeline, click on the **+ Add more** button to set the new date and content.

![Click on the + Add more button to set the new date and content.](https://i.imgur.com/hPX5NFI.png)

In the next step, we will display this information on the page using **Bricks**.

## 3. Displaying timeline information

Edit the page you created in the first step with **Bricks**.

![Edit the page with Bricks](https://i.imgur.com/9gd6YIZ.png)

First, add a **Section** element to cover all the content of the page.

![Add a Section element to cover all the content of the page](https://i.imgur.com/5aHnHFI.png)

There is an available container. We’ll add some elements inside this container to display the timeline information.

Also for demonstration purposes, I skip displaying the title of the page. Do it as usual if you want.

First, add a **Div** element to specify that we will get content from a cloneable group.

![Add a Div element to specify that we will get content from the cloneable group](https://i.imgur.com/C6dQGdD.png)

Enable the query loop and choose the type of the query as the group we use to insert content for the page.

![Enable the query loop and choose the type of the query as the group we use to insert content for the page](https://i.imgur.com/g49n5sN.png)

After that, inside the div, just add some elements to get data from two subfields of the group.

To display the date of each point, add a **Basic Text** element.

![Add a Basic Text element to display the date of each point](https://i.imgur.com/Pk7r0q1.png)

Use the **Select dynamic data** button to choose the subfield that saves the date information.

![Use the Select dynamic data button to choose the subfield that saves the date information.](https://i.imgur.com/mRA5xyN.png)

You also can add some characters to stipulate the format of the date output.

![Add some characters to stipulate the format of the date output](https://i.imgur.com/vBv6NLe.png)

Next, add another **Div** element to cover the details of the content for each timestamp.

![Add another Div element to cover the details of the content for each point](https://i.imgur.com/cH39ATY.png)

We use the **Basic Text** element as well to get data saved in the Post field.

![Add another Basic Text element to get data saved in the post field](https://i.imgur.com/EvWDVww.png)

Also, choose the subfield for getting data from.

![Choose the subfield for getting data from](https://i.imgur.com/kNsLqD9.png)

But, it returns only the title of the posts. If you want to show both the title and content of each post, we should add a PHP function for the output data. Bricks supports that so you can do it easily.

Click on the **Select dynamic data** button one more time, and find out the **Output PHP function**.

![Add the Output PHP function](https://i.imgur.com/WMg67Yx.gif)

We have the `post_timeline` as the ID of the field we use to get posts from. We still need to modify it a little bit. Also, add the [:value](https://academy.bricksbuilder.io/article/dynamic-data/) attribute to get the value of the field, instead of the title only. 

![Modify the dynamic data and an attribute to get the value of the field](https://i.imgur.com/ZcHcC6L.png)

As you can see in the above image, the post content is displayed immediately.

View the page on the frontend, you will see all the information is ready.

![All the information is ready on the frontend](https://i.imgur.com/XcobV6f.png)

## 4. Styling the timeline

To have a better look for the timeline, back to the page editor with Bricks and change the settings of each element, or add some CSS to style it in your own way. In Particular, we’ll create the **flow of time** and some **points** on it in this step.

Let’s beautify the layout of the timeline.

### 4.1. Setting the line

To show the flow of time, you can set the border for the div that includes the content.

![Set the border for the div to show the flow of time](https://i.imgur.com/zV81lvl.png)

### 4.2. Limiting the content display

You also should set the max height for the section displaying each post's content to limit the area for each of them. Then, hide all the content that overflows the area. Each post will display shorter content.

![Set the max height then hide all the content that overflows the area](https://i.imgur.com/vt528Ok.png)

### 4.3. Styling the dots of timestamps

Besides normal styling, we’ll add a **Div** element to have some dots on the timeline indicating the timestamps.

![Add a Div element to have the point on the timeline](https://i.imgur.com/H5TpRnr.png)

Then, style the div to have the desired dots.

![Style the div to have the desired point](https://i.imgur.com/1YHFgrP.png)

### 4.4. The Read more button

Also, when we hide a part of the posts, we should have a **Read more** button in each post content to make the timeline clearer and more decent. So, add a **Button** element.

![Add a Button element for the Read more button](https://i.imgur.com/XYXsLJZ.png)

Next, we’ll set the action for this button to make it clickable.

You need to create some classes for the button. In this practice, I create two classes: one for the button, and one for the content. They will be used to regulate action in JavaScript.

![Create a class for the button](https://i.imgur.com/O0aWH6H.png)

![Create a class for the content](https://i.imgur.com/9nVVu4z.png)

To add an action for the button, add a **Code** element.

![Add a Code element to add action for the button](https://i.imgur.com/tlAjtiX.png)

Then, add some lines of code:

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script>
jQuery(function($){
    $('.timeline-readmore').click(function(){
    $(this).parent().find('.timeline-content').toggleClass('show-full-content');

        if($(this).text() == "Read more")
            $(this).text("Read less");
        else
            $(this).text("Read more");	
    })
})
</script>
```

![Add some code for the action of the button](https://i.imgur.com/A5Zgib8.png)

**In there**:

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
```

This line of code is to declare the JavaScript library which allows you to run the JavaScript below.

```
$('.timeline-readmore').click(function(){: 
```

This is to trigger when visitors click on the button via the `timeline-readmore` class we created for the button before.

```
$(this).parent().find('.timeline-content').toggleClass('show-full-content')
```

It is to show or hide the full content. Particularly, when the button is clicked, the `show-full-content` class will be added to the Basic text element via the `timeline-content` class. All the content will be shown. And, when you click the button one more time, the class will be removed, the content will return to the shortened format.

Along with the change of content, the label on the button also needs to change. So I used the part of the code:

```
if($(this).text() == "Read more")
    $(this).text("Read less");
else
    $(this).text("Read more");
```

When the content is in the full version, the button will turn from **Read more** to **Read less**, and vice versa.

### 4.5. Showing / Hiding the full content

We set the max height for the short form of content before. We also have the class and toggle class for the content section to know when it should be shown fully. Now, we will use CSS to show or hide the content based on those classes.

Move to the **Style** tab, and input these codes into the **CSS** section:

```
.timeline-content .timeline-post.show-full-content {
    max-height: unset !important;
    overflow: auto !important;

}
```

![Remove the max height of the post content section to show all the content](https://i.imgur.com/Dgm82mM.png)

This means we’ll remove the max height of the post content section to show all the hidden content when the class `show-full-content` is added to the content section.

On the frontend, you can see the new look of the timeline after styling. The button also works well.

![The new look of the timeline, and the button works well](https://i.imgur.com/VhwYcLT.gif)

That’s done.
