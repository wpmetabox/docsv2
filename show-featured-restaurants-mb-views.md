---
title: Showing the featured restaurants - P4 - MB Views
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In this practice, we’re going to display the featured restaurants using **Meta Box** only with the help of **MB Views**. Let’s see how to do it.

This is a section on homepage that I created as an example to show the featured restaurants:

![The example of the created section](https://i.imgur.com/SF3eHvi.png)

This homepage is built by **Gutenberg** and there is a section to show the featured restaurants which are chosen manually in the backend.

## Video version

<LiteYouTubeEmbed id='Kp3hM0mjlCM' />

## Preparation

Each restaurant is a post of a custom post type. Besides the basic information which is the title, featured image of the post, the restaurant’s extra information is saved in custom fields.

So, we need these tools to do this practice:

* [Meta Box plugin](https://wordpress.org/plugins/meta-box/) to have a framework to create custom post types and custom fields;
* [MB Custom Post Type & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create custom post types named Restaurants;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create custom fields for saving restaurants’ information;
* [MB Views](https://metabox.io/plugins/mb-views/): to create the template for the featured restaurants section;
* [MB Admin Columns (optional)](https://metabox.io/plugins/mb-admin-columns/): to show the custom fields as an admin column.

You can install these extensions individually or use **Meta Box AIO** to have all of them.

## 1. Creating a custom post type

Go to **Meta Box** > **Post Types** to create a new post type for the restaurants.

![Create a custom post type](https://i.imgur.com/dsjDWsv.png)

After publishing, you’ll see your newly created post type on the menu.

![Newly created post type appear in the menu dashboard](https://i.imgur.com/lLlVWCM.png)

## 2. Creating custom fields

Go to **Meta Box** > **Custom Fields** to create a new field group.

![Create custom fields](https://i.imgur.com/tpHVa6J.png)

Here are all the fields that I created.

![Created fields](https://i.imgur.com/x929fVO.png)

Besides some normal fields for typical information, I create a **Switch** field to choose whether to feature the restaurant or not.

![Create a Switch field](https://i.imgur.com/LR0qlMi.png)

Turning on the switch button means that the restaurant will be displayed in the section and vice versa.

![Turn on the switch button](https://i.imgur.com/aApoL3l.png)

I’ll also show the values of this field in the admin column to see whether the restaurant is featured or not by ticking this box. This setting is available only when you have the **MB Admin Columns**.

![Tick to choose Show as admin column](https://i.imgur.com/AAw5xBk.png)

And this is how it displays on the admin dashboard.

![The fields will display like this](https://i.imgur.com/GrV4UAu.png)

After creating all the fields, move to the **Settings** tab, choose **Location** as **Post Type** and select **Restaurant** to apply them to that post type.

![Set location for the created fields](https://i.imgur.com/8sJARDe.png)

Then, you’ll see all the newly created custom fields in the post editor. The switch field is also displayed. You can turn on or turn off the button to choose to feature the restaurant or not. Just fill in the information for the restaurant.

![All the newly created custom fields in the post editor](https://i.imgur.com/U8MF7eB.gif)

## 3. Creating a template for the section

Go to **Meta Box** > **Views** > **Add New** to create a new template that will be used to the section.

![Create a template for the section](https://i.imgur.com/kCGWyXA.png)

In the **Template** tab, add some code to display the featured restaurants:

![Add some code](https://i.imgur.com/JWsovKT.png)

``` 
{% set args = { post_type: 'restaurant', posts_per_page: -1 } %}
{% set posts = mb.get_posts( args ) %}
	{% for post in posts %}
	{% endfor %} 
```

In there:

``` 
{% set args = { post_type: 'restaurant', posts_per_page: -1 } %} 
```

This line of code is to declare to get posts from the '**restaurant**' post type.

The function ` mb.get_posts( ) ` is to get posts. And I also have a loop to get multiple posts as above.

Since we just want to display only the restaurants which are featured, we need to add a condition inside the loop.

![Add a condition inside the loop](https://i.imgur.com/jWjxEP2.png)

 ```
{% if post.feature_the_restaurant == 1 %}
{% endif %} 
```

This is the condition to display the selected posts only. feature_the_restaurant is the **ID** of the **Switch** field. Corresponding to the **On** and **Off** status of it, the value that is saved will be 1 and 0, respectively. So, this line of code means that if the posts have the switch field turned **On**, they will be displayed. 

Now, let’s insert fields inside the condition to display information from the posts. You can easily get these lines of code by using the **Insert Fields** button and then choose the corresponding fields you want to get the data from.

![Insert the fields inside the condition](https://i.imgur.com/e1MWnFA.gif)

``` <img src="{{ post.thumbnail.full.url }}" width="{{ post.thumbnail.full.width }}" height="{{ post.thumbnail.full.height }}" alt="{{ post.thumbnail.full.alt }}">
<img src="{{ post.logo.full.url }}" width="{{ post.logo.full.width }}" height="{{ post.logo.full.height }}" alt="{{ post.logo.full.alt }}" class="logo">
{% for item in post.voucher %}
{{ item.label }}
{% endfor %}
{{ post.title }}
{{ post.address }}
```

![Add the code](https://i.imgur.com/2YjR5Yp.png)

That’s all for the code to get the information of the restaurants. 

Now, set this template type as shortcode. After publishing, there will be a shortcode automatically generated like this:

![Set the template type as shortcode](https://i.imgur.com/oOtBjhc.png)

Let’s display the section on the homepage. Go to edit the homepage and choose the area where you want to add the section. In there, add a Heading block to name the section.

![Add a Heading element](https://i.imgur.com/BX1AzGP.png)

Next, add a **Shortcode** block, paste the one you’ve just copied from the view.

![Add a Shortcode block](https://i.imgur.com/fHSCFLv.png)

![Add the shortcode](https://i.imgur.com/PaxlFGp.png)

Now, all the restaurants’ information has been displayed.

![All the information has been obtained](https://i.imgur.com/Cl2lXGo.png)

If you want to have more styling, just go back to **Views** and edit the created template. We’ll add some div classes to the code first.

![Edit the created template](https://i.imgur.com/CALbfEJ.png)

Next, go to the **CSS** tab and add some code.

![Add some code in the CSS](https://i.imgur.com/N1tVM7x.png)

I’ve uploaded all the code that I used on **Github** so you can easily refer to it.

Now, you’ll see the new look of the section on the homepage.

![The new look on the homepage](https://i.imgur.com/SF3eHvi.png)
