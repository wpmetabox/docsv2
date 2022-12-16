---
title: Creating a team members page - Meta Box + Bricks
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We’ll introduce a way to create a team member page with **Bricks** using custom post type and custom fields.

This is my sample team members page:

![Sample for the Team Members Page with Meta Box and Oxygen](https://i.imgur.com/RJ9eO0k.png)

## Video version

<LiteYouTubeEmbed id='h07sZBTGTDQ' />

## Preparation

Each member’s information will be saved in a post and displayed as a name card on the page. All extra information about each member such as Position, Facebook, Instagram, and Mail will be saved in custom fields. Name and image of the member are the title and featured image of the post.

To do it, we need Meta Box and its extensions:

* [Meta Box](https://metabox.io): This is the framework to create custom fields and custom post types. It’s free and available on [wordpress.org](https://wordpress.org/plugins/meta-box/)
* [MB Custom Post Type & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create custom post types for Team Member;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): provides a UI in the back end to create custom fields easily for Member Information;

We’ll use [Bricks](https://bricksbuilder.io/) to build the page.

## 1. Creating a new custom post type

Go to **Meta Box > Post Types > New Post Type**.

![Create a new custom post type](https://i.imgur.com/Nywe9kt.png)

After publishing, you will see your new post type displayed on the admin dashboard.

![The result appears after creating](https://i.imgur.com/pjgDm93.png)

## 2. Creating custom fields

Go to **Meta Box > Custom Fields > Add New**.

![Create customs field for Team Members](https://i.imgur.com/t3JZZ3b.png)

After finishing creating the fields, move to the **Settings** tab. In the **Location** section, select **Post Types** as **Team Members** to apply these fields to the post type.

![set location for the custom field as the created post type](https://i.imgur.com/uh6ZzrP.png)

Finally, go to the post editor, and you will see your created custom fields appear.

![the custom fields display in the post editor](https://i.imgur.com/ZNScdEe.png)

## 3. Creating the page

Move to **Pages > Add New** to create a new page. Then, edit it with Bricks.

![create a new template for the team members page](https://i.imgur.com/wz7nqeq.png)

First, add a new **Container** element to cover all the team members’ information.

![add a container element](https://i.imgur.com/9ZvykU1.png)

Then, add a Heading element to display the title of the page and fill in the name of the page on it.

![add a heading element](https://i.imgur.com/OhndX3Z.png)

To get all the posts, we have the **Posts** element and **Related Posts** element. While the **Posts** show posts along with filters and navigation, the **Related Posts** does not. So I choose the **Related Posts** element.

![Choose the Related Posts element to get all the posts](https://i.imgur.com/ne8hdSl.png)

When adding the **Related Posts** element, a list of blog posts will be displayed in default.

Since we need the posts in the **Team Member** post type instead of blog posts, go to the **Query** section and change the post type to **Team Member** to get the wanted posts.

![go to the Query change the post type to Team Member to get the wanted post](https://i.imgur.com/dVomurP.png)

To change the information that you want to display in each post, move to the Fields section. There is the Post Title, Published Date, and Post Excerpt in default. Remove the one you don’t want to display.

![Add Item > Insert Dynamic Data to add a new field and insert the dynamic data from the custom fields](https://i.imgur.com/lSZA7aH.png)

Next, add a new field and insert the dynamic data from the custom fields by clicking **Add Item > Insert Dynamic Data** and find the wanted fields.

For instance, I choose the **Position**. Then, the position of each member will display in the preview immediately.

![Add Item > Insert Dynamic Data to add a new field and insert the dynamic data from the custom fields](https://i.imgur.com/SxVeXby.gif)

For other information like Facebook, Instagram, and Mail, simply do the same.

Be noted that, when inserting dynamic data, it just displays them as text. To set them as URLs, you should add an attribute to these fields as below.

![To set information as URLs, you should add an attribute to these fields](https://i.imgur.com/vcW2Uzi.gif)

What’s more, the description of each member is the content of the post. So, we just need to add a **Post Content** element.

Now, all the information of the members has been obtained.

![To set information as URLs, you should add an attribute to these fields](https://i.imgur.com/gt7XfwX.png)

Because Bricks does not support adding classes for each element, you should use the HTML tag for styling. You can set elements in different levels of HTML tag such as: H1, H2, H3, div, p, … That will help a lot for SEO as well.

![use the HTML tag for styling](https://i.imgur.com/bNCoekt.png)

## 4. Styling the page

For styling the page, still in the page editor with Bricks, move to the **Style** section of each element to change the look of them if you want.

![move to the Style section of each element to change the look of them](https://i.imgur.com/uoFV9zq.png)

Or, you may use some CSS codes as I did to have advanced styling.

![For more advanced styling, use some CSS codes](https://i.imgur.com/1cEFnl7.png)

I placed all of the code on [Github](https://github.com/wpmetabox/tutorials/blob/master/create%20a-team-members-page-with-bricks/custom.css) so you can look it up for further information.

Now, go to see the result on the frontend.

![The result after all steps](https://i.imgur.com/RJ9eO0k.png)


