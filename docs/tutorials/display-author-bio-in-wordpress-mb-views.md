---
title: Displaying author bio in Wordpress - MB Views
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

An author bio is a great asset for any blog where you can display all information about the author behind each post. So, you should have a section for their bio to let readers know more about the author who made the fantastic contents. Moreover, it also helps build credibility with your readers and can strengthen your site’s authority. Let’s find out how to have them using **MB Views** from **Meta Box**.

This is an example for the bio section that we will create in this practice.

![This is an example for the bio section](https://i.imgur.com/jZeM1G9.png)

## Video Version

<LiteYouTubeEmbed id='fFd6mEa65ew' />

## Preparation

Each author will be a user on your WordPress website. We have a tutorial on [how to let users have the authority to publish posts](https://metabox.io/add-guest-author-guest-posts-meta-box/) on your website without accessing the backend. In this practice, I assume that they have it already.

Still, they have an account with some basic and default place for information as WordPress provided. As well as, we’re using custom fields for some extra information that you can flexibly input any kind of data.

Since we use the custom fields to store some of the author information, we need some tools:

* [Meta Box plugin](https://wordpress.org/plugins/meta-box/): to have the framework for creating custom fields.
* [MB Relationships](https://metabox.io/plugins/mb-relationships/): to create a bi-directional relationship between posts and users to know which post from which author;
* [MB User Meta](https://metabox.io/plugins/mb-user-meta/): to assign fields to users;
* [MB Views](https://metabox.io/plugins/mb-views/): to create a template for the section displaying the author information on the post;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to create custom fields to save author information on an easy-to-use UI;
* [MB Group](https://metabox.io/plugins/meta-box-group/): to group the fields together for better organization. This is optional;
* [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/): to manage the posts from which authors and show it on the admin screen. This is optional as well.

## 1. Creating custom fields

We’ll create some custom fields for some further information about the author such as social links, phone, address, etc. 

Go to **Meta Box** > **Custom Fields** to create the fields.

![Go to Meta Box > Custom Fields to create the fields.](https://i.imgur.com/RjZk1Gj.png)

After having all the fields, move to the **Settings** tab, set the **Location** to apply the fields to **User**. Notice that, we can do this only when activated the [MB User Meta](https://metabox.io/plugins/mb-user-meta/) extension.

![Go to the Settings tab, set the Location to apply the fields to User](https://i.imgur.com/iugQxX9.png)

Go to the user profile page, you will see the field in each account, and you can input information to them.

![The field information in user account](https://i.imgur.com/Q40wl87.png)

## 2. Creating the relationship

WordPress supports setting an author for each post, but only one author can be chosen. In the real applications, there may be more than one author contributing to the post, so we should use relationships for more optimal use.

Go to **Meta Box** > **Relationships**, and create a bi-directional relationship between the posts and the authors.

![Go to Meta Box > Relationships to create a bi-directional relationship between the posts and the authors](https://i.imgur.com/VffskjM.png)

There’ll be two sections: **From** and **To** with the same structure of settings. Because Meta Box supports bi-directional relationship, so these two sections are just for separate two objects to connect, the order will be not matter.

![There are two sections with the same structure of settings](https://i.imgur.com/EN5eED0.png)

I set the **Object Type** as **Post** in the **From** section and **User** in the **To** section.

![Set the Object Type as Post in From sections and User in To sections.](https://i.imgur.com/OKrFjZW.png)

Because I activated the [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) extension before, I have the following option in both two sections of the relationship’s settings. You should check the box to manage the posts and who publishes them better.

![The option in both two sections of the relationship’s settings](https://i.imgur.com/qlXxSIw.png)

It will help to display the related posts from the relationship on the dashboard like this.

![This is the related posts from the relationship on the dashboard](https://i.imgur.com/PIuuaw8.png)

In the **Field** tab, you can set the label for the relationship section in the post editor.

![Set the label for the relationship section that shows in the post editor](https://i.imgur.com/sxmJqgy.png)

Go to the user profile page, you will have a field to choose which posts were contributed by this user.

![This is a field to choose which posts were contributed by this user](https://i.imgur.com/fZBnpBN.png)

As well as, in a post editor, you also can choose an author or more for the post.

![The box to choose an author or more for the post](https://i.imgur.com/CWRekVG.png)

## 3. Displaying the author bio on the page

Go to **Views** and create a new template for the author bio section.

![Go to Views and create a new template for the author bio section](https://i.imgur.com/wombigk.png)

In the **Template** tab, you can add some code or insert fields from the list in the right sidebar.

![Add some code or insert fields from the list in the right sidebar.](https://i.imgur.com/cFvs5Py.png)

### 3.1. Querying to get authors

I will display information of the authors who are set in the relationship field, go to the **Query** tab. You’ll see the ID of the relationship that we created.

![Go to the Query tab and see the ID of the relationship that we created](https://i.imgur.com/LSPVdwP.png)

We’ll create a template for the author information section, so choose the **Connect To** option. Then, some lines of code will be generated automatically.

![Choose the Connect To option to create a template for the author information section](https://i.imgur.com/ziFigD1.png)

**Explanation**

```
{% set relationship = attribute( relationships, 'post-to-user' ) %}
```

This line is to query the users following the relationship. 

`'post-to-user'` : This is the ID of the created relationship.

```
{% for user in relationship.to %}
………………………….
{% endfor %}
```

This loop helps to get and display all the authors that were set in the relationship field. 

### 3.2. Displaying author information

To display each author's information, just insert some fields as usual inside the loop.

In the **User** tab, I have all the information about the author that saves in custom fields. They’re avatar, title, contact, social … Just insert them one by one.

![Insert fields about the author that saves in custom fields](https://i.imgur.com/o3kClqR.gif)

After getting all of the information of the author as you want, move to the **Settings** section of the view, set the **Type** as **Singular**, and choose the name of any post type that we set the author for in **Location**.

![Set the Type as Singular, and choose the name of any post type that we set the author for in Location](https://i.imgur.com/zIzQyvc.png)

Go to a singular page now, you will see all the expected author information displayed. 

![The expected author information displayed without styling](https://i.imgur.com/R2XkW3c.png)

### 3.3. Styling the section

To have a better look for the section, go back to the created template, add some **div** tags and classes for each information.

![Add some Div tags and classes for each information.](https://i.imgur.com/G5kEV0M.png)

Then go to the **CSS** tab, add some code.

![Go to the CSS tab, add some code](https://i.imgur.com/hOhQMA5.png)

Back to the page on frontend, the new look has been done.

![The final look of the author bio section](https://i.imgur.com/XQY5zkz.png)
