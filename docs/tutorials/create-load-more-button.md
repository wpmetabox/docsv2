---
title: Creating a load more button with Meta Box
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Today, I’ll show you how to **create a Load More button using Meta Box**, to let users load posts dynamically without refreshing the page. This makes browsing smoother and improves user experience.

![Create a flexible Load More button with Meta Box.](https://imgur.elightup.com/oCsIf99.gif)

Let’s walk through how to do it!

## Video version

<LiteYouTubeEmbed id='XwSC7NUk7s8' />

## Preparation

My archive page shows some posts that are stored in a custom post type. When I click the Load More button, it will load more posts and display them instantly on the page. The number of posts to show at first and load each time will be set in custom fields.

For this practice, here are the tools you’ll need.

First, we need [the Meta Box plugin](https://wordpress.org/plugins/meta-box/) to have a framework to create a custom post type, custom fields, and a settings page.

Also, you may need some advanced features from extensions of Meta Box. So you can install them separately or use **Meta Box AIO** to get everything bundled together.

These are the extensions you may want to activate.

* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for any content you want to display, whether it’s restaurants, books or other listings;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to visually create custom fields for managing archive display settings, including the Load More button;
* [MB Settings Page](https://metabox.io/plugins/mb-settings-page/): to create a settings page where you can control archive settings;
* [MB Views](https://metabox.io/plugins/mb-views/): to create a template for displaying posts and integrating the Load More button.

Now, let’s go step by step.

## 1. Creating a custom post type

Go to **Meta Box** to create a new custom post type for your content.

![Create a new custom post type for your content.](https://imgur.elightup.com/zEqmNtJ.png)

After publishing, you’ll see the created custom post type.

![The created custom post type](https://imgur.elightup.com/ySiVtg3.png)

These are some posts in the post type, for example, I created. This content will be displayed on the archive page as a listing.

![Some posts in the created post type](https://imgur.elightup.com/kEVCcUq.png)

## 2. Creating a settings page for the archive

Since the archive page isn’t a static page you can edit directly, we’ll use a settings page to manage its content and layout flexibly.

Go to **Meta Box** > **Settings Pages**, and create a new settings page.

![Create a new settings page.](https://imgur.elightup.com/SFTwEhM.png)

For now, the page is blank; we’ll add content in the next step.

![The settings page is blank before applying custom fields to it.](https://imgur.elightup.com/9JAfYJK.png)

## 3. Creating custom fields for the load more button

To configure the **Load More** button, we need to store additional settings, such as how many items to show at first, how many to load per click, and how the layout should be structured.

We'll create custom fields for these settings using Meta Box, like this image below.

![Custom fields for archive settings](https://imgur.elightup.com/KDrFv5R.png)

Simply add more fields if you want to have more settings.

Now, go to **Meta Box** > **Custom Fields**, and create a new field group.

![Create a new field group.](https://imgur.elightup.com/GlUSiPF.png)

Just add field types one by one corresponding to the kind of content.

Start by adding a **Text** field for post type. This field allows users to enter the custom post type that will be listed dynamically. It ensures the Load More button loads posts from the correct post type.

![Add a Text field for post type.](https://imgur.elightup.com/3zdoSOt.png)

Next, add a **Number** field for **Item First** to set the number of posts displayed initially.

![Add a Number field for Item First to set the number of posts displayed initially.](https://imgur.elightup.com/gGRxQsE.png)

Then, add another **Number** field labeled **Item Load More** to determine how many additional posts will load each time the button is clicked.

![Add the Item Load More field to determine how many additional posts will load each time the button is clicked.](https://imgur.elightup.com/Q4SufZ1.png)

The last field is the **Select** field for **Column**, which helps users define how many columns the posts should be displayed in.

![Choose the Select field for Column, helping users define how many columns the posts should be displayed in.](https://imgur.elightup.com/ZIV8Al5.png)

After creating all the fields, move to the **Settings** tab, set the **Location** as **Settings Page**, and choose the created settings page to apply the fields to it.

![Set location to apply fields to the archive page](https://imgur.elightup.com/5piTZs7.png)

Afterward, navigate to your settings page, and you will see custom fields displayed.

![In the settings page, you will see custom fields displayed.](https://imgur.elightup.com/sjviGh4.png)

Simply input values in these fields.

Now, let's display the posts along with the selected settings on the frontend.

## 4. Displaying posts on the archive

In this step, we’ll create a template to just display posts on the archive page using the settings we configured earlier. Enhancing the layout and adding interactive features like the Load More button will be covered in the next part.

Head over to **Meta Box** > **Views**, and create a new template specifically for this purpose.

![Go to Meta Box > Views, and create a new template](https://imgur.elightup.com/jXchUPn.png)

With **MB Views**, you can add some lines of code to the **Template** tab or insert fields into it by clicking the **Insert Field** button and choosing any fields on the right sidebar to get data from them.

![Insert fields](https://imgur.elightup.com/MNNMwtH.png)

Since they are on a settings page, move to the **Site** tab and choose the fields one by one.

![Since they are on a settings page, move to the Site tab.](https://imgur.elightup.com/TUR5IV3.png)

It will automatically generate code to the template.

![The generated code in the template](https://imgur.elightup.com/djGuith.png)

You can also set the output of the field.

After inserting all the fields into the template, in the **Settings** section, set the location where we want to display this template. I just keep the settings of the template type as shortcode to display this template anywhere more easily.

![Keep the settings of the template type as shortcode to display this template anywhere.](https://imgur.elightup.com/wKCk1qF.png)

Notice that you should copy the generated shortcode to use it later.

![The generated shortcode](https://imgur.elightup.com/tMfe6fd.png)

Now, go to any place where you want to display the listing. In my case, I’ll create a new page for the archive. Then, add the **Shortcode** block.

![Add the Shortcode block.](https://imgur.elightup.com/gY5bXTi.png)

And paste the created shortcode in the box.

![Paste the created shortcode in the box](https://imgur.elightup.com/vpbcq5d.png)

Now, you can see the values displayed on the frontend. These are the settings we configured earlier, including the post type, the number of posts to show initially, and the number of posts to load each time.

![The values displayed on the frontend](https://imgur.elightup.com/mFnOumT.png)

Next, we'll use these values to dynamically display the posts on the archive page.

Back to the **Template** tab, add code to query and display the posts. Then, modify the code to use the dynamic value retrieved from the archive settings so the post type can be changed easily from the admin area.

```
{{ site.archive.item_first }} <br>
{{ site.archive.item_load_more }} <br>

{% set args = { post_type: site.archive.post_type, posts_per_page: -1 } %}
{% set posts = mb.get_posts( args ) %}
<div class="mb-container">
    <div class="mb-row">
        {% for post in posts %}
        <div class="mb-coloumn coloumn-{{ site.archive.column.value }}">
            <div class="mb-content">
                <div class="item">
                    <img src="{{ post.thumbnail.full.url }}" width="{{ post.thumbnail.full.width }}" height="{{ post.thumbnail.full.height }}" alt="{{ post.thumbnail.full.alt }}">
                    <h3>{{ post.title }} </h3>
                    <div>{{ post.content }}</div>
                </div>
            </div>
        </div>
        {% endfor %}
    </div>
 </div>
```

![Add code to query and display the posts.](https://imgur.elightup.com/EdDeWlG.png)

**In there**:

```
{% set args = { post_type: site.archive.post_type, posts_per_page: -1 } %}
```

This line of code is to declare that we’ll get posts from the post type that is dynamically retrieved from `site.archive.post_type`.
```
{% set posts = mb.get_posts( args ) %}
```

We’ll use the `mb.get_posts` function to get posts.

And since we have multiple posts, we have a loop here to display them.

```
 {% for post in posts %}
…
 {% endfor %}
```

Inside the loop, we have:

```
 <div class="mb-coloumn coloumn-{{ site.archive.column.value }}">
```

This line dynamically sets the number of columns for displaying posts based on the value chosen in the archive settings.

```
<img src="{{ post.thumbnail.full.url }}" width="{{ post.thumbnail.full.width }}" height="{{ post.thumbnail.full.height }}" alt="{{ post.thumbnail.full.alt }}">
<h3>{{ post.title }} </h3>
<div>{{ post.content }}</div>
```
These are some default fields inserted from the right sidebar to display the post’s data, specifically the post thumbnail, title, and content.

Note that I did use some `div` tags and classes for styling.

After that, move to the CSS tab and add some code for styling as well.

```
.mb-container {
    max-width: 100%;
}

.mb-row {
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.mb-content .item div {
    padding: 0 10px 5px;
}

.mb-content {
    height: 100%;
    display: block;
    padding: 0 10px 30px;
}

.mb-content h3 {
    margin: 10px;
    color: #d14e4e;
}

.item {
    background: #3658992b;
    height: auto;
    width: 100%;
}

.item img {
    width: 100%;
    height: 250px;
}

.coloumn-2 {
    width: 50%;
}

.coloumn-3 {
    width: 33.33%;
}

.coloumn-4 {
    width: 25%;
}

.coloumn-5 {
    width: 20%;
}
```

![Add code to the CSS tab for styling](https://imgur.elightup.com/FgdG9mP.png)

Especially, use `display: block` to ensure that all posts are visible since now we just want to display all.
```
.coloumn-2 {
    width: 50%;
}

.coloumn-3 {
    width: 33.33%;
}

.coloumn-4 {
    width: 25%;
}

.coloumn-5 {
    width: 20%;
}
```

These lines of code set the width of each column based on the number of columns chosen. These are applied to the created class in the template to ensure the posts are displayed in a grid format.

Now, we’ve displayed the posts on the frontend!

![All posts display on the frontend.](https://imgur.elightup.com/IrX17N6.gif)

But to make it more user-friendly, let’s add a Load More button so visitors can explore more content without reloading the page.

## 5. Adding a load more Button

In the **Template** tab, add some code again and modify it to display the Load More button.

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
{% set args = { post_type: site.archive.post_type, posts_per_page: -1 } %}
{% set posts = mb.get_posts( args ) %}
<div class="mb-container">
    <div class="mb-row">
        {% for post in posts %}
        <div class="mb-coloumn coloumn-{{ site.archive.column.value }}">
            <div class="mb-content">
                <div class="item">
                    <img src="{{ post.thumbnail.full.url }}" width="{{ post.thumbnail.full.width }}" height="{{ post.thumbnail.full.height }}" alt="{{ post.thumbnail.full.alt }}">
                    <h3>{{ post.title }} </h3>
                    <div>{{ post.content }}</div>
                </div>
            </div>
        </div>
        {% endfor %}
    </div>
    <a href="" data-first="{{ site.archive.item_first }}" data-loadmore="{{ site.archive.item_load_more }}" id="load-more">Load More</a>
</div>
```

![Add code and modify it in the Template tab to have a Load More button.](https://imgur.elightup.com/AxZEiNg.png)

**In there**:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```

This line includes the jQuery library from online.

Use the `data-first` attribute to hold the number of posts displayed initially, while `data-loadmore` specifies how many more posts will be loaded each time the button is clicked. And the ID, `load-more`, is used to target the button with JavaScript to handle the loading functionality.

Next, move to the **CSS** tab again to make a small adjustment. Change `display: block` to `display: none`to hide all posts, allowing JavaScript to control how many posts are displayed at a time.

![Hide all posts](https://imgur.elightup.com/c4M67ds.png)

And add code to style the button.

```
#load-more {
    text-decoration: none;
    transition: 0.3s;
    background-color: #000;
    color: #fff !important;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 20px;
    margin: 50px 0;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translate(-50%);
}

#load-more:hover {
    background-color: #d14e4e;
    text-decoration: none;
}
```
Now, go to the **JavaScript** tab to add a function for the button.

```
jQuery(document).ready(function ($) {
    var getTimeElement = document.getElementById("load-more");
    var first = getTimeElement.getAttribute("data-first");
    var loadmore = getTimeElement.getAttribute("data-loadmore");
    $(".mb-content").slice(0, first).show();
    $("#load-more").on("click", function (e) {
        e.preventDefault();
        $(".mb-content:hidden").slice(0, loadmore).slideDown();
        if ($(".mb-content:hidden").length == 0) {
            $("#load-more").css('visibility', 'hidden');
        }
    });
});
```

![Add code to the JavaScript tab.](https://imgur.elightup.com/V0uL2Nd.png)

**In particular**:
```
var getTimeElement = document.getElementById("load-more");
```
This finds the Load More button using its ID, `load-more` .

```
var first = getTimeElement.getAttribute("data-first");
var loadmore = getTimeElement.getAttribute("data-loadmore");
```
These retrieve the values from the button’s attributes. In there, as I said before, data-first determines how many posts are shown initially .data-loadmore specifies how many posts will be revealed per click.

```
$(".mb-content").slice(0, first).show();
```
This line displays the first set of posts based on the first value. For example, the Item First field has the value as 6. It’ll show the first six posts.

When the Load More button is clicked, the function below runs.
```
 $("#load-more").on("click", function (e) {
        e.preventDefault();
        $(".mb-content:hidden").slice(0, loadmore).slideDown();
        if ($(".mb-content:hidden").length == 0) {
            $("#load-more").css('visibility', 'hidden');
        }
    });
```
`e.preventDefault();` is to stop the default action, so when you click the Load More button, it won’t take you to a new page. Instead, it will run the code below to load more posts.

```
$(".mb-content:hidden").slice(0, loadmore).slideDown();
```
This line means that after clicking the button, it will show the next set of hidden posts based on the number entered in the field.

And, check if there are no more hidden posts left.
```
if ($(".mb-content:hidden").length == 0) {
```

If all posts are displayed, the Load More button is hidden.
```
$("#load-more").css('visibility', 'hidden');
```

That's all for the code. You can refer to it on GitHub [here](https://github.com/wpmetabox/tutorials/tree/master/create-load-more-button-using-mb-views).

Now, the **Load More** button is fully functional! When you click it, additional posts appear based on the number set in the custom field. If there are no more posts to load, the button automatically disappears.


![The Load More button is fully functional.](https://imgur.elightup.com/oCsIf99.gif)

With a Load More button in place, customizing your archive page just got easier. With Meta Box, you can store settings like post count, layout, and colors in custom fields — no coding needed. This gives you full control to adjust the archive layout anytime, making content management both flexible and efficient.

