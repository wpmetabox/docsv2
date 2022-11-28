---
title: Creating a team members page - MB Views
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We’re going to use a new method to create a team members page using Meta Box only with MB Views.

This is the sample that I made.

![Example of a team member page](https://i.imgur.com/TXY7fCC.png)

## Video version

<LiteYouTubeEmbed id='u6XVlG1_3gY' />

## Before getting started

Each member’s information will be preserved in a post and displayed as a name card. The member's name and avatar are the title and featured image of the post, respectively. Other information such as position, Facebook, Instagram, and Mail will be saved in custom fields.

To do it, we need Meta Box and its extensions:

* [Meta Box](https://metabox.io): a framework to create custom fields and custom post types. It’s free and available on [wordpress.org](https://wordpress.org/);
* [MB Custom Post Type & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create custom post types named Team Member;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): create custom fields easily to save team members’ information in the backend;
* [MB Views](https://metabox.io/plugins/mb-views/): to create a template for the team members page.

## Step 1: Create a new post type

In the **Admin Dashboard**, go to **Meta Box > Post Types**, then create a new post type for the members.

![Create a new custom post type for the Team Members](https://i.imgur.com/eaUVoER.png)

Publish and you will see a new menu in your dashboard.

![The result appears after creating](https://i.imgur.com/vrcT9BN.png)

## Step 2: Create custom fields

Go to **Meta Box > Custom Fields** to create a new field group.

![Add new fields](https://i.imgur.com/pU2U2Wn.png)

For the member’s information, I’ll create some following fields:

![Custom fields for Team Members](https://i.imgur.com/ouMfsKe.png)

In the event that you want to add more information, just create additional fields as you go.

After creating all the fields, move to the **Settings** tab of the field group. In the **Location** section, choose the **Post Type** and select **Team Member** to apply these fields to this post type.

![Set location for the custom field as the created post type](https://i.imgur.com/sqmVZ9x.png)

When adding a new post in the Team Member post type, you will see all the fields here.

![The custom fields display in the post editor](https://i.imgur.com/hrepb82.png)

## Step 3: Create a template

In the **Admin Dashboard**, go to **Meta Box > Views > Add New** to create a new template.

![Create a new template.](https://i.imgur.com/n4xngkG.png)

In the **Template** tab of the view, add some code:
```
{% set args = { post_type: 'team-member', posts_per_page: -1, orderby: 'date', order: 'ASC' } 
%}
{% set posts = mb.get_posts( args ) %}
{% for post in posts %}
    {{ mb.get_the_post_thumbnail( post.ID,'medium' ) }}
    {{ post.facebook }}{{ post.instagram }}{{ post.mail }}
    {{ post.post_title }}
    {{ post.post_content }}
    {{ mb.rwmb_the_value( 'position', '', post.ID, false ) }}
{% endfor %}
```
![Add new code to the template.](https://i.imgur.com/TQW38fy.png)

**Explanation:

* `{% set args = { post_type: 'team-member', posts_per_page: -1, orderby: 'date', order: 'ASC' } %}`

This code is used to declare the variable that obtained posts from the Team Member post type. The `posts_per_page: -1` means that it will get all the posts and display them in one page. The `orderby: 'date', order: 'ASC'` are used to define the order of the posts.

* `{% set posts = mb.get_posts( args ) %}`

This function is to get the posts data from the variable that was declared above.
```
{% for post in posts %}`
    ………
{% endfor %}`
```
This is a loop to display all the posts in the Team Member post type.
```
{{ mb.get_the_post_thumbnail( post.ID,'medium' ) }}

This function is used to get the avatar of the member which is the featured image of the post.

{{ post.facebook }} {{ post.instagram }} {{ post.mail }}
{{ post.post_title }}
{{ post.post_content }}
```
This function is used to get the data from the fields including both default fields of WordPress and custom fields. `facebook`, `instagram`, `mail` are the IDs of the custom fields. And, the `post_title` and `post_content` are the IDs of the default fields by WordPress.

For the position information, it is saved in a field in the type of **Select** with a special kind of data. So we use the following function to get its data.

```
{{ mb.rwmb_the_value( 'position', '', post.ID, false ) }}
```

The `rwmb_the_value()` is the function to get the label of the options in the **Select** field. In the event you want to get the value of the options, use this `rwmb_meta()` function.

To style the template, I used some div classes and added them to the code.

![Use some Div class to style the template](https://i.imgur.com/Yhl503n.png)

You can refer to all the code [here](https://github.com/wpmetabox/tutorials/blob/master/create-a-team-members-page-with-mb-views/template.php).

After adding code, scroll down to the **Settings** section > **Type** option as **Singular** and choose **Location** as **Page**. Then, select **Meet The Team** to apply this template to the wanted page.

![Adjust the template and apply to the page](https://i.imgur.com/N2KLyvZ.png)

Go to the **Meet The Team** page and you will see all the data has been displayed already.

![Result after applying the template](https://i.imgur.com/Ko8JdeR.png)

Now, all the information of the members has been obtained and displayed to the page. 

## Step 4: Style the page

If you want to style the page, you can easily do it by adding some CSS in the CSS tab of the created template in the Views.

![Style the page.](https://i.imgur.com/GAbooNk.png)

All the CSS code that I used is on [Github](https://github.com/wpmetabox/tutorials/blob/master/create-a-team-members-page-with-mb-views/custom.css). Refer to it for more details.

Update it and see the result on the frontend.

![Result after all steps](https://i.imgur.com/TXY7fCC.png)

