---
title: Building a hotel booking website using Meta Box - P1
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

A website for hotel booking usually has 4 common pages:

1. The archive page for all the rooms, along with their information.
2. The Booking page in the backend for your internal use.
3. A front-end page that allows customers to book a room.
4. The booking management page in the backend.

In this first guide, we'll create a room page. Other functionality will be covered in the next tutorials in this series.

This is my page of rooms as an example:

![The archive page of the room](img/hotel-booking-room-archive/final.png)

## Video version

<LiteYouTubeEmbed id='vbzCmmGXt3Y' />

## Preparation

Each room is a post of a custom post type. It usually has information about name, image, price, and other information that will be saved in custom fields. As well as, I use custom taxonomy to store types of rooms.

So, we highly recommend you use [**Meta Box AIO**](https://metabox.io/aio/) to have a framework to create a custom post type, a custom taxonomy, and custom fields. Also, it includes all the Meta Box extensions that you need for your creation.

These are extensions you may need:

* [MB Custom Post Types and Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the room, and a custom taxonomy for the room types.
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create the custom field visually and efficiently.
* [MB Views](https://metabox.io/plugins/mb-views/): to create a template for displaying rooms.

Let’s start now!

## 1. Creating a new custom post type

Go to Meta Box > Post Types, and create a new one for the room.

![Go to Meta Box > Post Types, and create a new one for the room](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-room-archive/cpt.png)

In the **Supports** tab, you can disable the **Editor** option to skip it in the post editor. All the information about the rooms will be added through custom fields.

![You can disable the Editor option](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-room-archive/editor.png)

After publishing, a new menu will appear right here. It’s your post type.

![The created post type in the menu](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-room-archive/post-type.png)

## 2. Creating custom fields for the room information

As I said above, we’ll create custom fields to store extra information about rooms.

Go to **Custom Fields** in **Meta Box** and create a new field group.

![Go to Custom Fields in Meta Box and create a new field group](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-room-archive/create-field.png)

These are some fields I created:

![Some fields I created for rooms](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-room-archive/fields.png)

They are the basic fields and no special settings. In the case that you want to add more information, just choose the corresponding [field type](https://docs.metabox.io/fields/) provided with Meta Box.

After having all the fields, click to the **Settings** panel, set the **Location** as **Post type**, and choose the **Room** to apply the fields to this post type.

![Set location for the field group](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-room-archive/location.png)

Now, go to the post editor, and you can see all the fields displayed look like the live preview in the field creation screen.

![The fields are displayed in the post editor](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-room-archive/field-display.png)

Just enter the data for each room.

## 3. Creating a custom taxonomy

We need taxonomy to save the room type. So, let’s create it.

Go to **Meta Box** > **Taxonomies**.

![Go to Meta Box > Taxonomies](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-room-archive/create-tax.png)

In the **Advanced** tab, you can enable the setting I highlight in the image below to show the taxonomy as a column in the admin dashboard. It’s available only when you activate the [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) extension.

![Enable the Show admin column setting](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-room-archive/show-column.png)

Next, move to the **Post Types** tab, select the **Room** to apply the taxonomy to it.

![Select the Room in the Post Types tab to apply the taxonomy to it.](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-room-archive/choose-post-type.png)

Then, you can navigate to the taxonomy to create some terms. 

![Add terms](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-room-archive/terms.png)

In the post editor, you can see a section that allows you to select the term. Then, they will be in a column like this:

![Choose the taxonomy for each post](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-room-archive/choose-term.png)

## 4. Displaying rooms on the frontend

To display rooms and their information on the frontend, you can use any page builder you're familiar with, or MB Views. In this practice, I will use MB Views. We have had many tutorials about how to display posts using MB Views, along with different functionalities such as filtering and searching. You can refer to them.

On the Meta Box, click on the **Create a view** button to have a new template for the archive page of rooms.

![Create a view](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-room-archive/create-view.png)

In the Template tab, you can add code directly or insert a field to get the data you want.

First, I add this code:

```
{% set args = {  post_type: 'room',   posts_per_page: -1,  orderby: 'date',order: 'DESC'    } %}
{% set posts = mb.get_posts(args) %}
{% for post in posts %}

{% endfor %}
```

![Get posts](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-room-archive/get-posts.png)

In there:

* `{% set args = { post_type: 'room', posts_per_page: -1, orderby: 'date', order: 'DESC' } %}`: is to declare that we’ll get posts from the `room` post type.
* `mb.get_posts()`:  is a Meta Box function to get the posts.
* `{% for post in posts %}...{% endfor %}`: is a loop we use to get all the posts, since there are various rooms.

Inside the loop, we’ll get data for each room.

For the image, we’ll get the first one in the room gallery. So, I add this part:

```
{% if post.gallery|length > 0 %}
    {% set first_image = post.gallery|first %}
    <img src="{{ first_image.full.url }}"
    alt="{{ first_image.alt ?? post.title }}">
{% endif %}
```

![Get images for rooms](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-room-archive/get-term.png)

To display other information, I use the **Insert Field** button and choose the field from the right panel.

When you click on a field, the code will be generated in the **Template** tab.

![The generated code when you insert a field](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-room-archive/insert-field.png)

Just insert the field you want to get and display data.

![Insert the field you want to get and display data](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-room-archive/insert.png)

I added some **`div`** tags and classes, as well as modified the code a little bit.

![Add some div tags and classes and modify the code.](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-room-archive/div-class.png)

After that, scroll down to the **Settings** tab to set the location of this template. I set the **Type** as **Archive** and select **Room Archive** to apply the template for the archive page of rooms.

![Set the type for the view](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-room-archive/setting-view.png)

On the frontend, all the data is displayed. But it needs to be made more beautiful.

![All the data is displayed](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-room-archive/data-display.png)

Back to the created template, move to the **CSS** tab, and add some code to style the page.

![Add CSS to style the page.](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-room-archive/css.png)

Now, our page is better with the room information.

![The new look of the room page.](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-room-archive/final.png)

I uploaded the code to [GitHub](https://github.com/wpmetabox/tutorials/tree/master/how-to-build-hotel-booking/p1), you can refer to it.
