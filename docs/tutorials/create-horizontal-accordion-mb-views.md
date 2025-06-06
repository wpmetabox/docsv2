---
title: Creating a dynamic horizontal posts accordion - Using MB Views
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

If you're looking for a way to present your blog in a fresh and dynamic way, then this guide is for you. We'll explore how to create a **horizontal accordion** of featured images with the help of **MB Views** from Meta Box.

This is a page I created as an example of this tutorial:

![An example of horizontal accordion](https://i0.wp.com/images.elightup.com/meta-box/blog/horizontal-accordion/horizontal_accordion.gif)

## Video version

<LiteYouTubeEmbed id='0TP0OE1nYe4'/>

## Benefits of the accordion style

Typically, blog posts are presented in a traditional format: headlines, paragraphs, and images arranged one after another from top to bottom. This structure is clear and easy to read, but it can sometimes feel dull. You have to scroll to view all the content.

When you want to make it innovative and exciting, using an accordion can be a great option. It is a user interface element that allows content to be expanded or collapsed, helping organize information in a compact and interactive way. So, displaying posts as an accordion brings some benefits for your WordPress site:

* Save screen space
* Make your content more eye-catching
* Offer a better user experience: readers can quickly browse through multiple posts without scrolling too much.

There are lots of different accordion styles out there, but we’re going to focus on a horizontal one, using featured images of posts as the interactive tabs.

## Preparation

As you can see on the demo I have at first, the thumbnail and short title are present for each post. They are arranged side by side. When you click on the title, the corresponding post content will be displayed. It may sound tricky or complicated at first, but you'll see that it's absolutely doable, especially with the help of MB Views.

So, in this practice, we recommend you install [**Meta Box AIO**](https://metabox.io/aio/) to have a framework and features of [MB Views](https://metabox.io/plugins/mb-views/) to create a template for displaying posts in a horizontal accordion.

You can also use other extensions inside Meta Box AIO for additional advanced features. 

## 1. Creating a new page

I already have some posts here for demonstration purposes.

![Some posts here for demonstration purposes](https://i0.wp.com/images.elightup.com/meta-box/blog/horizontal-accordion/example-of-posts.png)

I’ll display these posts as an accordion on a page. So, let’s create it first.

Go to **Pages**, and create a new one.

![Go to Pages, and create a new one for the horizontal accordion](https://i0.wp.com/images.elightup.com/meta-box/blog/horizontal-accordion/create-new-page.png)

## 2. Creating a template for horizontal accordion

We’ll display and make the accordion interactive using MB Views.

Go to **Meta Box** > **Views**, and create a template for it.

![Go to Meta Box > Views, and create a template for displaying horizontal accordion](https://i0.wp.com/images.elightup.com/meta-box/blog/horizontal-accordion/create-new-view.png)

With MB Views, you can insert fields through the **Insert Field** button or add code directly. I combine both of them.

### 2.1 Getting data of posts

First, add these lines of code:

```
{% set args = { post_type: 'post', posts_per_page: -1} %}
{% set posts = mb.get_posts( args ) %}
{% for post in posts %}

{% endfor %}
```

![Add some code to get posts](https://i0.wp.com/images.elightup.com/meta-box/blog/horizontal-accordion/get-posts.png)

**In there**:

* `{% set args = { post_type: 'post', posts_per_page: -1} %}`: is to declare that we’ll get posts on the site through the `post` slug. If you want to get posts from a custom post type, just change that slug.
* `mb.get_posts`: is a Meta Box function to get the post.
* `{% for post in posts %}...{% endfor %}`: is a loop to display all of posts since there are various posts.

Inside the loop, we’ll get data for each post. We recommend you use the button I mentioned before, then you can insert any field you want from the right panel. In this case, we need the featured images, post title, and the post ID for linking between the post content and its title. All of them are in the **Post** tab. Just insert them one by one. 

When you insert a field, the code will be generated in the **Template** tab.

![Insert the field you want to get data for posts](https://i0.wp.com/images.elightup.com/meta-box/blog/horizontal-accordion/insert-field.png)

You can also set the size for the post thumbnail. After inserting three fields, our template will be like this:

![The Template tab after insert field for getting data](https://i0.wp.com/images.elightup.com/meta-box/blog/horizontal-accordion/insert-all-needed-field.png)

Next, move to the **Settings** tab to apply the template to the page we created at first. Set the **Type** as **Singular**, and choose your page. You should put the accordion at the top of the post content.

![Apply the template for the page of horizontal accordion](https://i0.wp.com/images.elightup.com/meta-box/blog/horizontal-accordion/setting-template.png)

On the frontend, the page is displayed with all the data we get.

![All the data is displayed](https://i0.wp.com/images.elightup.com/meta-box/blog/horizontal-accordion/data-display.png)

### 2.2 Transforming data to horizontal accordion

In this step, we’ll style the data and add action to have the horizontal accordion.

#### 2.2.1 Styling the data

Back to the created template to add some code. 

First, add a line of code to declare and load the jQuery library we’ll use for having a horizontal accordion.

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
```

![Add code to declare jQuery library](https://i0.wp.com/images.elightup.com/meta-box/blog/horizontal-accordion/add-jquery-library.png)

For the data we get, you should modify it for styling by adding some **`div`** tags and classes. Then, the code will be like this:

![Modify the code and add div tags and classes](https://i0.wp.com/images.elightup.com/meta-box/blog/horizontal-accordion/modify-code.png)

As you can see, I use `mb.get_permalink()` function to retrieve the URL of the post via its ID.

And, `mb.substr(post.title, 0, 15)` cuts the post title to the first 15 characters, including space. It's used to display a shortened version of the title. You can change this number as you want. 

Next, move to the **CSS** tab to add some code to make the data of the accordion more beautiful.

![Add some code into the CSS tab to style the accordion](https://i0.wp.com/images.elightup.com/meta-box/blog/horizontal-accordion/add-css.png)

#### 2.2.2 Adding action for the interactive thumbnail

Go ahead to the **JavaScript** tab to add an action for the accordion. I’ll add some code:

```
$(function () {
    var width_accordian = $('.accordian ul').css("width");
    $('.accordian .image_title').css("width", width_accordian);

    var lis_count = $('.accordian .mb-item').length;
    function set_width_time() {
        var width = 100 / lis_count;
        $('.accordian .mb-item').css("width", width + '%');
    }
    set_width_time();

    $(".accordian ul li.mb-item").hover(function () {
        var width1 = 40 / (lis_count - 1);
        $('.accordian .mb-item').css("width", width1 + '%');
        $(this).css("width", '60%');
    }, function () {
        set_width_time();
    });
});
```

![Add code to the JavaScript tab to add action for the interactive thumbnail](https://i0.wp.com/images.elightup.com/meta-box/blog/horizontal-accordion/add-javascript-horizontal-accordion.png)

**Specifically**: 

* `var width_accordian = $('.accordian ul').css("width")`: is to get the width of the element inside the accordion.
* `$('.accordian .image_title').css("width", width_accordian)`: set the accordion width to all the images we have.
* `var lis_count = $('.accordian .mb-item').length`: helps count the total posts.
* `var width = 100 / lis_count`: is to equally divide the width among all items.

When the reader hovers over a thumbnail, the below code runs:

```
$(".accordian ul li.mb-item").hover(function () {
        var width1 = 40 / (lis_count - 1);
        $('.accordian .mb-item').css("width", width1 + '%');
        $(this).css("width", '60%');
    }, function () {
        set_width_time();
```

Specifically, the width of the image hovered over will increase to 60%, and the others will equally share the remaining 40%.

That’s done. I’ve uploaded the code I use in this tutorial to [GitHub](https://github.com/wpmetabox/tutorials/tree/master/horizontal-posts-accordion), so you can refer to it.

Now, go to the page on the frontend. You’ll see that the accordion looks good, with a thumbnail and a short title. The width of each featured image changes when you interact with it. Also, the full content of the corresponding post will be shown when you click on the title.

![The horizontal accordion works well](https://i0.wp.com/images.elightup.com/meta-box/blog/horizontal-accordion/horizontal_accordion.gif)

We also have a helpful tutorial on [dynamic styling with data attributes](https://metabox.io/dynamic-styling-using-data-attributes/), a great way to make your pages even more visually appealing.
