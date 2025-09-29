---
title: Filtering posts by Relationships - Meta Box + Oxygen 
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Are you building an internal company portal to manage training materials? Each document is connected to a department by a Meta Box relationship. When staff log in, they’ll only see the documents for their own department, not others. If so, you should not skip this article because today, I will show you how to **create a filter posts by relationships** using **Meta Box** and **Oxygen**. 

You may find this topic useful if you are looking to build an internal website. Besides, if you are a seller, like selling courses, you can create courses associated with student groups where each student can only see the courses they have purchased or have permissions for.

Check out the page I made as an example for users:

![Check out the page I made as an example for users](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/demo-min.gif) 

## Video version

<LiteYouTubeEmbed id='zwFtKrKs1_c' />

## Preparation

Here I have several **Documents** and each of them will be a **Post**. I will create a custom post type for **Departments**. Then I will **create a bi-directional relationship** between them. The relationship connects which department will have related posts and vice versa. 

Next, I will create a custom field for the **work department** to classify the department for each **user**. When the user logs in, they will see the archive page displaying related posts of their department by filter condition. This page is built by **Oxygen**. 

So, we need **Oxygen** to build the page.

Next, you need [**Meta Box AIO**](https://metabox.io/aio/) to have the framework for creating custom post types, custom fields and relationships. As well as the Meta Box extensions inside it provide you with advanced features, specifically:

* [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/): to display the related posts and related departments as a column in the dashboard.
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the departments.
* [MB Relationships](https://metabox.io/plugins/mb-relationships/):  to create relationships between these post types.
* [MB User Meta](https://metabox.io/plugins/mb-user-meta/): to add a work department to user profile.
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create custom fields and relationships easily.

That’s all. Let’s get started now.

## Creating custom post types 

Go to **Meta Box** and create a new post type for the **Departments**.

![Go to Meta Box and create a new post type for the Departments](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/new%20post%20type-min.png) 

After creating, you can see the post types displayed in the **Admin Dashboard**. This is the list I have.

![This is the list I have](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/list%20departments-min.png) 

## Creating a relationship

Go to **Meta Box**, **Relationship**, and create a new one.

![Go to Meta Box, Relationship, and create a new one](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/add%20new%20relationship-min.png)

There’ll be the **From** and **To** sections as follows. The relationship is bidirectional, so you can put the two post types into any section.

Since they are post types, remember to set the object type as **Post** in both sections.

![Since they are post types, remember to set the object type as Post in both sections](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/object%20type-min.png) 

Set the **Post type** in the **From** section as one that we want to be in the relationship. In this case I set **Posts**, so the rest one in the **To** section will be the **Departments**.

![Set the Post type in the From section as one that we want to be in the relationship](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/posts-departments-min.png) 

Enable this setting if you want to show them as an admin column. 

![Enable this setting if you want to show them as an admin column](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/admin%20column%20relationship-min.png) 

After publishing, go to the post editor, you will see the section for setting relationships. Just fill the post information and choose its departments. 

![Just fill the post information and choose its departments](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/choose%20department%20for%20post-min.png) 

These are some posts I have. And, you can easily view the **Posts** and the related **Departments** information in these columns.

![And, you can easily view the Posts and the related Departments information in these columns](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/list%20posts-department-min.png) 

## Creating a custom field

To add departments to each user, I will create a custom field. Feel free to add additional fields depending on your needs.

Now, go to **Meta Box** > **Custom Fields**, and create a new field group.
 
![Now, go to Meta Box > Custom Fields, and create a new field group](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/add%20new%20custom%20field-min.png) 

For the user department, choose the **Post** field type, then choose **Post** type as **Department**. 

![For the user department, choose the Post field type, then choose Post type as Department](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/user%20department%20type-min.png)

Enable this setting to show them as an admin column. 

![Enable this setting to show them as an admin column](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/admin%20column%20custom%20field-min.png)

Then, move to the **Settings** tab, choose **Location** as **User** to apply the field to it.

![Then, move to the Settings tab, choose Location as User to apply the field to it](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/choose%20location%20as%20user-min.png) 

Now, in each user profile, you can see the **Department** field section. Click on it to select the department.

![Now, in each user profile, you can see the Department field section](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/work%20department%20field-min.png) 

After updating, you can see users with related work departments in the dashboard like this.

![After updating, you can see users with related work departments in the dashboard like this](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/user-department-min.png) 

## Displaying posts on an archive page

Navigate to the **Oxygen** > **Templates**, and add a new template. 

![Navigate to the Oxygen > Templates, and add a new template](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/add%20new%20template-min.png) 

Next, go to **Pages**, create a new page for the **Documents**. 

![Next, go to Pages, create a new page for the Documents](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/add%20new%20page-min.png)

Then, scroll down to the **Oxygen** section, and choose the created template to render the page using it. Edit the page with **Oxygen**.

![Edit the page with Oxygen](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/edit%20with%20oxygen-min.png)

Choose the **Documents** for the **Editing** and **Previewing**.

![Choose the Documents for the Editing and Previewing](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/editing%20and%20previewing-min.png) 

First, select a **Section** component to contain all of the page content. 

![select a Section component to contain all of the page content](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/add%20section.png) 

To get the title of the page automatically, add a **Heading** component, then click **Insert Data**, **Post**, **Title** to connect it with the title of the page.

![To get the title of the page automatically, add a Heading component, then click Insert Data, Post, Title to connect it with the title of the page](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/add%20heading-min.gif) 

Since we have more than one post on the page, you should add a Repeater component to define information structure for them all. 

![Since we have more than one post on the page, you should add a Repeater component to define information structure for them all](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/add%20repeater-min.png) 

Go to **Query** > **Advanced**, and add parameters for the query like this.

![Go to Query > Advanced, and add parameters for the query like this](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/advanced%20query-min.gif) 

In there, `post` is the slug of the **Post** post type. It means that we’ll get posts from this post type. 

![It means that we’ll get posts from this post type](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/post_type%20slug-min.png) 

I want to get all the posts we have, so the setting will be like this.

![I want to get all the posts we have, so the setting will be like this](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/post_per_page-min.png) 

Inside the **Repeater** component, there’ll be a **Div**. Add some components inside this **Div** to display the posts’ information.

I added an **Image** component and inserted data from the **Featured Image** of the post.

![I added an Image component and inserted data from the Featured Image of the post](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/add%20image-min.gif) 

Next, add a **Heading** then insert data from the **Post Title** for the course name.

![Next, add a Heading then insert data from the Post Title for the course name](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/add%20post%20tittle-min.gif) 

You may get the wrong name and image of the course, but don't worry about it. Just keep moving, you will see the right things later.

To get the department information of the post, add a **Text** component and insert data from **Meta Box Field**. If you want to display the department’ name along with the **link**, choose the **Post URL** option when inserting data like this. Immediately, you can see the post is displayed exactly with the related department’ name as follows.

![To get the department information of the post, add a Text component and insert data from Meta Box Field](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/add%20department%20information-min.gif) 

The last information of the post is date, add another **Text** below. Click on this to insert dynamic data. Choose the **Date** and fill the format that you want. In my example, I will put the format like this. 

![The last information of the post is date, add another Text below](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/add%20date-min.gif) 

After getting all the wanted information for posts, view the page on frontend. You will see the image along with their information displayed correctly. But, it seems like we should style the page a little bit to have a better appearance.

![After getting all the wanted information for posts, view the page on frontend](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/view%20on%20frontend-min.gif) 

Back to the template, you can change the settings of each component to get the wanted look for the page. Here is the one that I got after styling.

![Here is the one that I got after styling](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/after%20styling-min.png) 

## Filtering posts by relationships

Let’s add filter posts by **Relationships** so users can see the related posts of their department. **Oxygen** allows you to set rules for displaying posts easily. 

In the **Oxygen** settings, click on the **div** right below the **repeater** component, move to the **setting** tabs, choose the **Conditional Settings** icon to set the conditions. 

![choose the Conditional Settings icon to set the conditions](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/conditional%20setting-min.png) 

In the conditions’ pop up, add a new rule. Select **User Logged In** below the list and set the next box of the conditions setting like this. This rule means that only valid users will see the displayed posts.

![Select User Logged In below the list](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/user%20logged%20in-min.png) 

Next, add the second rule. In the dropdown, choose **Dynamic Data**, **Meta Box Field** and **Departments**. Choose **Post Object ID** so that **Users** can see the related posts of their department. 

![Next, add the second rule](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/2nd%20rule-min.gif)

In the next box of the conditions setting, choose **contains** to compare whether the data above contains a certain value. Then in the last box, click on the **data** button, move to **Current User** and choose **Meta or Custom** field. Fill the **Meta Key** as `user_department` so that we can get the department field value of the current user.

![In the next box of the conditions setting](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/next%20box%20setting-min.gif) 

Now, go to the page on frontend, You will see the filter works well.

First, all posts are displayed in the admin account. Log out and log back in to each user account.You can see users in different departments will only see posts from the related department.

![Now, go to the page on frontend, You will see the filter works well](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-relationships-oxygen/demo-min.gif) 















 










