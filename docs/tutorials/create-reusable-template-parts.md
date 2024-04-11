---
title: Creating reusable template parts in WordPress
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Sometimes you need to display the same information with the same layout as well, but in different places. Instead of storing and getting that data several times, today we are going to use **MB Views** to **create template parts**, then **include them in multiple templates** for reusable purposes.

## Video version

<LiteYouTubeEmbed id='tmpZWOdND1A'/>

## Benefits of using reusable template parts

There are 2 obvious advantages of template parts:

* They remove code duplication across templates.
* It’s easy to update when you need to make changes because you need to edit only the template part that contains changes.

But, these are not the best things about template parts. When you include template parts in a view, **they have access to the same context as the current view**. This means that **any variable defined in the main view will be available in the template parts**.

For example: if you’re creating a template part to display posts in a custom category, like this:

```css
{% set posts = mb.get_posts( args ) %}
<ul>
    {% for post in posts %}
        <li><a href="{{ mb.get_permalink( post ) }}">{{ post.post_title }}</a></li>
    {% endfor %}
</ul>
```

(To understand the syntax, please see the documentation for the [mb proxy](https://docs.metabox.io/extensions/mb-views/?_gl=1*aw83k9*_gcl_au*NzUyMjIwOTc1LjE3MDkyODg1MDc.#running-php-functions))

Then in a view, you can set the query args to show posts in a category ID 3:

```css
{% set args = {post_type: 'post', posts_per_page: 10, cat: 3} %}
{{ include( 'custom-query' ) }}
```

In another view, you can show posts in a category ID 5:

```css
{% set args = {post_type: 'post', posts_per_page: 10, cat: 5} %}
{{ include( 'custom-query' ) }}
```

You can even do more with the include syntax like conditionally including a template part:

```css
{% include ajax ? 'ajax' : 'not-ajax' %}
```

(this syntax is available only for `include` tag, not `include` function)

or include a template inside a for loop to render each item in the loop:

```css
{% for post in posts %}
    {{ include( 'post' ) }}
{% endfor %}
```

Let’s dive into a specific example to look at it in more detail.

## Preparation

Assuming you’re creating a view for the **Event** post type. And, each event has a group of the start date, end date, and location which are saved in custom fields.

![Assuming you’re creating a view for the Event post type, each event has some extra info.](https://i.imgur.com/nc0dcYL.png)

So, you may want to display them on both the singular and archive pages.

![The display of fields on both the singular page and the archive page](https://i.imgur.com/o9K1Vfi.png)

It’s when you should get the data into a template part. And then, you can include it in the singular page template and also in the archive page template.

![Include the template part in the singular page template, and also the archive page template](https://i.imgur.com/IeV2jqm.png)

This task will be very easy-to-do with the help of the **MB Views** extension from **Meta Box**.

These are some tools we need for this practice:

* [Meta Box plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create a custom post type and custom fields for the event. You can install it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/);
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the events;
* [MB Views](https://metabox.io/plugins/mb-views/): to not only get data from custom fields created with Meta Box, but also build template parts, template for pages, and also include the template parts into another template;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create the custom field visually.

## 1. Creating a custom post type

You may have a custom post type for your posts or products, or anything else already. If not, you should go to **Meta Box** > **Post Types** to create a new one.

![Go to Meta Box > Post Types to create a new post type](https://i.imgur.com/M7x14ys.png)

After publishing, there will be a new menu. It’s your post type.

![Your post type display as a new menu](https://i.imgur.com/lZleb0V.png)

## 2. Creating custom fields

Each event may have some extra information. Then, we should use custom fields to store them, just go to **Meta Box** > **Custom Fields** to create them one by one.

![Go to Meta Box > Custom Fields to create fields](https://i.imgur.com/x27WKoq.png)

Depending on the field type, the logic of showing or hiding the fields, and their hierarchy, you may want to use some extensions of Meta Box for tabs, groups, conditional logic, admin columns, and so on. For instance, I have the setting below for fields since I’ve enabled the **MB Admin Columns**. These kinds of extensions are just optional, so I did not mention it from the beginning.

![All the fields display in the post editorAn example of the setting for fields](https://i.imgur.com/6VMAIeY.png)

After creating all the needed fields, go to the **Settings** tab, choose **Location** as **Post type**, and select the name of the custom post type that you’ve created.

![Set the location to apply the fields to your post type](https://i.imgur.com/PPwWmQX.png)

Now, in the post editor, you will see the custom fields.

![The custom fields in the post editor](https://i.imgur.com/wT35dJW.png)

Just input data into them.

Here are some posts that I created for example.

![Here are some posts that I created for example.](https://i.imgur.com/3aumiz9.png)

## 3. Creating a template part

Creating a template part is the same as creating any template as usual. Go to **Views** in Meta Box to create a new view.

![Go to Views in Meta Box to create a new view.](https://i.imgur.com/crt8uLV.png)

We also add code to the **Template** tab or insert fields to get the data saved in them. I have data from three custom fields that I want to display in this template part, so just click on the **Insert Field** button and choose the created fields from the list.

![Click on the Insert Field button and choose the created fields from the list.](https://i.imgur.com/gvFAVKv.png)

The **MB Views** also provide options to choose the format of the output for some kinds of fields. Just choose one that matches your design.

![Choose the format of the output for some kinds of field.](https://i.imgur.com/G0UfeSU.png)

Obviously, you can add some code to this template to regulate how the data displays, and also add CSS or JavaScript for the advanced display. But I skip it now to keep this part simple.

In the **Settings** of the view, I just keep the **Type** as **Shortcode** as default because we don’t use this view to render data for any specific pages.

![In the Settings of the view, keep the Type as Shortcode as default as we don’t use this view to render data for any specific pages.](https://i.imgur.com/nalAXdz.png)

So, we’ve done the template part. We will use the generated ID to add to different templates.

![Use the generated ID to add to different templates](https://i.imgur.com/4EWDRrJ.png)

## 4. Including the template part into a singular page

You may have an existing template for the singular page created in any way. If it’s created with **MB Views**, just open it to edit the template with **MB Views**. Otherwise, if it’s created in other ways, you can create a new view as follows:

![Create new view for the singular page](https://i.imgur.com/7Ktr3hB.png)

Anyway, no matter which kind of template, just click the **Insert Field** button on those views. Then, look for the **View** tab, and you will see the name of the view. I also mean the template part that we've just created.

![Click the Insert Field > the View tab you will see the template part](https://i.imgur.com/9Ii5sX0.png)

After clicking on the created template part to insert it into the current template, only a short line of script will be automatically generated in the template as well. It’s also the `include` statement.

![The include statement](https://i.imgur.com/Qi6lZ0U.png)

**In there**: `event-basic-info` is the slug of the view used for the template part.

So, we’ve already added the template part to another template.

If you want to display the information that is from the template part in more than one place, just redo the insertion action. Then, there is no need to add a bunch of identical lines of code to the page anymore.

If you add this part to an existing template, just update it to save changes. In this case, I’m adding a new view for the singular page, so in the **Settings** section of the view, set the template type as **Singular**, and choose the location as the post type as we want.

![In the Settings section of the view, set the template type as Singular, and choose the location as the post type as we want.](https://i.imgur.com/1PdVftp.png)

In the **Render for** section, just choose an option for the expected position.

![In the Render for section, just choose an option for the expected position.](https://i.imgur.com/8260oU0.png)

Now, go to the view of any post of the **Event** post type, you can see all the information from the fields as we set in the template part in the previous step.

![In any post of the Event post type, all the information from the fields display as we set in the template part.](https://i.imgur.com/dyNJm9R.png)

## 5. Making changes for the template part

If you want to style or customize the section that contains the event information above, instead of going to the template of the singular page, you should go back to the template part where we get data from each field.

![Go back to the template part to customize the script](https://i.imgur.com/qeYKIG1.png)

Customize the script as you want. The simplest way is to just add some div tags and classes, as I do, for example.

![I add some div tags and classes for example.](https://i.imgur.com/YMr0gDJ.png)

Now, back to the singular page, you can see a new appearance of the section.

![A new appearance of the section.](https://i.imgur.com/2CFmKij.png)

It means that you can customize the template part without affecting the page where you have it on.

Also, if you want the information of the section displayed in multiple places on the page, you can add the template part to those places. Then, when you make changes for the template part, all of the sections in every place will be changed at the same time. Easy peasy!

Now, let’s move on to the next part of this tutorial to see another application and the advantages of using the template part.

## 6. Including the template part into an archive page

I assume that you have had an archive page like this.

![An existing archive page](https://i.imgur.com/SGS3ugS.png)

I also have the template for it using MB Views.

![The template for the archive page using MB Views](https://i.imgur.com/PubfDp9.png)

I’ll include the created template part into this template to display the section of the start date, end date, and location. In the template, look for the place where you want to add the section to.

Next, click the **Insert Field** button, and add the created template part as we did with the singular page. Then, look for the **View** tab, and choose the name of the template part.

![In the View tab, choose the name of the template part.](https://i.imgur.com/29B3dwV.png)

The same line of code is generated exactly as the one added to the singular page.

![The same line of code is generated exactly with the one added in the singular page.](https://i.imgur.com/68uvCkg.png)

Save this template and go to the archive page on the frontend, you also see the extra data displayed as on the singular page. Especially, they display in the same style as the one on the singular page.

![The extra data displayed in the archive page as in the singular page.](https://i.imgur.com/fBliaao.png)

Now, you can see why we call the template part ‘reusable’. Not only reuse it in different places on a page, but also on different pages. So, they will all have a uniform style. In the meantime, whenever you customize the template part, all the sections in all places, all pages, also change at the same time.
