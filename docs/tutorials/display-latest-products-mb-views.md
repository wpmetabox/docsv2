---
title: Displaying the latest products - MB Views
---

We’ll create a section and choose the products or posts that are the latest ones to display only on the homepage.

I’ll take the restaurants as an example for products.

![the example of creating the latest restaurants section.](https://i.imgur.com/6EhYqsk.png)

## Before getting started

Here, we’ll display the latest restaurants first and then the oldest ones. Each restaurant is a post of a custom post type. All the restaurants will have detailed information including name and image (are the title and featured images of the post) and other extra information such as address, logo, voucher (are saved in different custom fields).

So, here are the tools we need.

* [Meta Box core plugin](https://metabox.io/) to have the framework for creating custom post types and custom fields. It’s free and you can download it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/).
* [MB Custom Post Type & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to a create post type named Restaurant;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to create and configure custom fields to save restaurants’ extra information;
* [MB Views](https://metabox.io/plugins/mb-views/): to create a WordPress template for the section.

## 1. Creating a new custom post type

Go to **Meta Box > Post Types** to create a new post type.

![Create a new post type for the latest products](https://i.imgur.com/cIExZCY.png)

After publishing, you will see a new **Restaurant** menu in the **Admin Dashboard**.

![The newly created custom post type appears on the menu dashboard](https://i.imgur.com/Ip1pYfc.png)

## 2. Creating custom fields

Go to **Meta Box > Custom Fields** to create a new field group.

![Create Custom Fields for the lastest products.](https://i.imgur.com/0XOJMvV.png)

My fields are quite simple so just create them as usual. Note that you should use the **easy-to-remember** ID since we’ll use them in the next step.

For the **Status** and **Voucher** information, I choose the **Select** and **Checkbox List** field respectively to add some options in the **Choices** box.

![Add options to the Status field](https://i.imgur.com/IZYsZlG.png)

![Add options to the Voucher field](https://i.imgur.com/zBcGWDw.png)

After creating all the fields, move to the **Settings** tab, choose **Location** as **Post Type** and select the **Restaurant** to apply these created fields to that post type.

![Choose the post type as Restaurant in Location section.](https://i.imgur.com/j8ix3Jc.png)

Now, when creating a post in the Restaurant post type, you’ll see all the fields.

![Enter the information for the post.](https://i.imgur.com/albVCmK.png)

## 3. Displaying posts and its information on the page

Go to **Meta Box > Views** to create a new template.

In the **Template** tab, add this code:
```
{% set args = { post_type: 'restaurant', posts_per_page: -1, orderby: 'date', order: 'DESC' } 
%}
{% set posts = mb.get_posts( args ) %}
{% for post in posts %}
            ………
{% endfor %} 
```
![Use MB Views to create a new template for the latest products.](https://i.imgur.com/njcRNNo.png)

This code is used to display the list of posts (restaurants) in the **descending order**. We’ll  display all the information of the restaurants such as featured images, vouchers, logos, restaurants’ names, addresses, open/close status and **View Detail** buttons.

**Explanation**:

* `{% set args = { post_type: 'restaurant', posts_per_page: -1, orderby: 'date', order: 'DESC' } %}`: This code declares the args variable that gets the data from the post type that has the ID as 'restaurant';
* `posts_per_page: -1` is used to get all the posts from the post type I want. In case that you just want to display a limited number of products, you just have to change -1 by any number you want;
* `orderby: 'date'`: to display the posts according to the publishing date order;
* `order: 'DESC'`: to display the latest posts first, then the older posts. If you want to display the oldest to the latest ones, replace 'DESC' them with 'ASC';
* `{% set posts = mb.get_posts( args ) %}`: this transfer the returned data of the args variable to the posts variable;
* `{% for post in posts %}`: this loop will list the posts;

Inside the loop, insert fields which we want to get the data from.

![Inside the loop, insert fields which we want to get the data from](https://i.imgur.com/B8TpKcm.gif)

![The shortcode is generated after click Public.](https://i.imgur.com/3tGFCK1.png)

For easier styling later, you can add some div tags like this:

![add soem dic tags](https://i.imgur.com/o4rmOuA.png)

Then, scroll down to the **Settings** tab, select **Shortcode** in the **Type** section to save this template as a shortcode.

![The shortcode is generated after click Public.](https://i.imgur.com/mmq9xkW.png)

After publishing the template, you’ll see the shortcode generated. Just copy and paste it anywhere you want on the website.

![The shortcode is generated after click Public.](https://i.imgur.com/hBWD7NI.png)

For example, I’ve already had a homepage built with Gutenberg. I’ll paste it in this position.

![Paste the shortcode to homepage built with Gutenberg.](https://i.imgur.com/rVPA1aE.png)

The section for the latest posts will display on the homepage like this:

![display the latest products on homepage with custom field’ value](https://i.imgur.com/1KWIwxo.gif)

You can refer to the code that I used here.

## 4. Styling the section

If you want to have advanced styling, go back to the created template in the **Views**. Depending on your idea about the look of the section, you can add both CSS and JS code to the corresponding tab of the view.

![Add code to this CSS tab in Views](https://i.imgur.com/KwDRokj.png)

For example, I add CSS like this:

![Add some CSS code](https://i.imgur.com/4TxsHPb.png)

To have styling for the status and create slider for the section, we can use some JS by adding code to the **JavaScript** tab in the view.

![use some JS by adding code to the JavaScript tab in the view](https://i.imgur.com/GGAVa0d.png)

You can refer to all the code in this post on our [Github](https://github.com/wpmetabox/tutorials/tree/master/display-latest-posts-with-MB-Views).

This is how this section displays on frontend with the final look.

![The result after all steps](https://i.imgur.com/r1RmxjF.gif)



