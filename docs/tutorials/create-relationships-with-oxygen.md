---
title: Creating Relationships - Meta Box + Oxygen
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Relationships feature from **Meta Box** allows you to relate post types, users, pages together. In this practice, we’ll share the way to create a bi-directional relationship between Courses and Instructors post types for example. Then, we’ll display the related instructors to a course and vice versa, using **Meta Box** and **Oxygen**.

![Create Relationships - Using Meta Box and Oxygen](https://imgur.elightup.com/avyeAWl.png)

## Video Version

<LiteYouTubeEmbed id='-7x1Y4DMl8g' />

## Preparation

I have **Courses** and **Instructors** as two separate custom post types. I will create a bi-directional relationship between them. The relationship will show the course is contributed by which instructors and the instructor contributes to which courses. This kind of information will be displayed on the archive page and singular page of each post type.

Here are the tools that we need for this practice:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom post types, custom fields, and relationships.
* [MB Custom Post Types](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the courses and instructors.
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create custom fields and relationships easily.
* [MB Relationships](https://metabox.io/plugins/mb-relationships/): to create relationships between these post types.
* [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) (optional): to display the related courses and related instructors in the dashboard.
* **Oxygen**: to build the pages. You should use its 3.9 version or higher, which has native integration with Meta Box.

## 1. Creating the Custom Post Types

Go to **Meta Box** > **Post Types** to create a new post type for the instructors. Also create a new one for the courses.

![Create a new post type for the instructors](https://imgur.elightup.com/tcunUEp.png)

Then, you will see new menus displayed in the **Admin Dashboard**. They’re your post types.

![There are the post types that we created](https://imgur.elightup.com/RTcYlyS.png)

## 2. Creating Custom Fields

You may want to add some custom fields for each post type for some extra information of the courses or the instructors. It’s optional. Just go to **Meta Box** > **Custom Fields** to create fields as usual. I also created some for the courses as follows.

![Create custom fields for each post type for some extra information of the courses or the instructors](https://imgur.elightup.com/sAQQ0lD.png)

## 3. Creating Relationships

Let’s create relationships between the **Courses** and **Instructors** post types. Go to **Meta Box** > **Relationships** to create a new one.

![Create relationships between the Courses and Instructors post types](https://imgur.elightup.com/eSyFqvL.png)

There’ll be the **From** and **To** section as follows. The relationship is bidirectional, so you can put the two post types into any section.

![Setting relationships](https://imgur.elightup.com/qZUQ07Y.png)

Since they are post types, remember to set the object type as **Post** in both sections.

![Set the object type as Post in both sections](https://imgur.elightup.com/Elxtdjo.png)

Set the **Post type** in the **From** section as one that we want to be in the relationship. In this case I set Instructor, so the rest one in the **To** section will be the **Course**.

![Set the Post type in the From section as one that we want to be in the relationship](https://imgur.elightup.com/7ve4ihj.png)

Because I activated the **MB Admin Column** extension, I have this option in the relationship’s settings.

![Show as an admin column](https://imgur.elightup.com/R9iCN6h.png)

I set it to show the related courses and instructors in a column in the dashboard.

In the Field tab of both sections, you can set a label for the relationship section in the post editor.

![Set a label for the relationship section in the post editor](https://imgur.elightup.com/jIT7vzS.png)

That’s all to set the relationship. Go to a post editor of the **Course** post type, there’ll be a box at the right sidebar to **choose which instructors related to the current post**. As well as, there'll be a box in the post editor of the **Instructor** post type to **choose which courses related to the current instructor**. It displays as a field, this will make sense when you get posts from this field in the next step.

![Choose which courses related to the current instructor](https://imgur.elightup.com/bz40r6I.gif)

Then, in the dashboard, you will see the related posts like this:

![The related posts](https://imgur.elightup.com/53R9rio.jpg)

## 4. Displaying the Relationship

In this part, I will display these relations on both the singular page of the **Course** post type, and the **Instructor** post type, also on the archive page where all the courses are listed.

### 4.1 Displaying the Relationship on a Singular Page

Let’s display the relations on the singular page of the **Course** and the **Instructor** post types.

This is the page to show the detailed information about one instructor. There will be a section to show all the courses that the instructor contributed to.

![The page to show the detailed information about one instructor](https://imgur.elightup.com/tPclXiV.png)

Go to **Oxygen** > **Template** > **Add New Template** as usual.

![Go to Oxygen > Template > Add New Template](https://imgur.elightup.com/gW0WKg3.png)

Remember to set the template as **Singular** and choose the name of the post type as **Instructors** and publish.

![Set the template and choose the name of the post type](https://imgur.elightup.com/ZUO5Rpu.png)

Then edit it with **Oxygen**.

![Edit it with Oxygen](https://imgur.elightup.com/HYH96hF.png)

Choose an instructor for the preview.

![Choose an instructor for the preview](https://imgur.elightup.com/EGhpKoj.png)

Insert a **Section** component.

![Insert a Section component](https://imgur.elightup.com/xO9oIOK.png)

Add a **Heading** to display the name of the instructor from the post title.

![Add a Heading to display the name of the instructor from the post title](https://imgur.elightup.com/PKZj6Dd.gif)

Also add a **Text** component to display the biography of the instructor, that is saved in the post content.

![Display the biography of the instructor](https://imgur.elightup.com/oHIYa6U.gif)

Now, let’s display the related courses. There will be multiple posts, so add a **Repeater** component.

![Add a Repeater component](https://imgur.elightup.com/fI8FYMy.png)

In its **Query** section, choose advanced and add parameters for the query like this.

![Choose advanced and add parameters for the query](https://imgur.elightup.com/izuPMp5.gif)

In there, `course` is the slug of the **Courses** post type. It means that we’ll get posts from this post type.

![The slug of the Courses post type](https://imgur.elightup.com/MZBhjsX.png)

Next, add the second **parameter** as follows.

![Add the second parameter](https://imgur.elightup.com/YuutdnS.png)

To add the value in the parameter, choose **Meta Box field** from the range and we can see the **Related Courses** field that allows us to choose posts which are related to an instructor.

![Choose posts which are related to an instructor](https://imgur.elightup.com/mNbTHUU.gif)

All of these parameters stipulate that only the posts that are listed in the **Related Course** field will be displayed.

![All of these parameters stipulate are listed in the Related Course field](https://imgur.elightup.com/VdUzsf9.png)

Inside the **Repeater** component, there’ll be a **Div**. Add some components inside this **Div** to display the courses’ information.

First, add an **Image** component and insert data from the **Featured Image** of the post.

![Add an Image component and insert data from the Featured Image of the post](https://imgur.elightup.com/G4GiTJf.gif)

Add a **Heading** then insert data from the **Post Title** for the course name.

![Add a Heading then insert data from the Post Title for the course name](https://imgur.elightup.com/LHLz0iE.gif)

You may get the wrong name and image of the course, but don't worry about it. Just keep moving, you will see the right things later.

Keep adding some other components, then insert data from custom fields of the **Courses** as usual. After getting all the wanted information for the course, save the template and go to the page on frontend. You will see the courses along with their information displayed correctly.

![The courses along with their information displayed](https://imgur.elightup.com/CpnU58K.png)

Back to the template, the preview will display correctly as well. You can change the settings of each component to get the wanted look for the page. Here is the one that I got after styling.

![The preview display correctly after styling](https://imgur.elightup.com/LvF2I9D.png)

On the other hand, we also can display the instructor name in the singular page of the course. I already have a singular page with a template to display the course's detailed information. We’ll display the related instructor in this place.

![Display the related instructor](https://imgur.elightup.com/GUNjI5s.png)

Add a **Div** component or just duplicate one from your created **Div** components.

![Display the related instructor](https://imgur.elightup.com/rVzzYXE.png)

Change the text in the **Content** section of the component.

![Change the text in the Content section of the component](https://imgur.elightup.com/5FPl7eb.png)

Then, insert data from the **Related Instructor** field into the component.

![Insert data from the Related Instructor field into the component](https://imgur.elightup.com/hfTk2sf.gif)

If you want to display the instructor name along with the link, choose the **Post URL** option when inserting data like this.

![Choose the Post URL option when inserting data](https://imgur.elightup.com/vP8odGk.png)

Then on the page that shows the course details, you will see the related instructor name as follows.

![The course details on the page](https://imgur.elightup.com/aic6dpz.png)

### 4.2 Displaying the Relationship on an Archive Page

Let’s add related instructors to the archive page for the courses.

![Add related instructors to the archive page for the courses](https://imgur.elightup.com/3qmBOcE.png)

In the template of the page, you may have a **Repeater** element to display all the posts since this is an archive page.

![Repeater element to display all the posts](https://imgur.elightup.com/HR3mW69.png)

Add a **Div** and some **Text** components inside the Repeater.

![Add a Div and some Text components inside the Repeater](https://imgur.elightup.com/6OfFtfv.png)

Change the content of the first **Text** component.

![Change the content of the first Text component](https://imgur.elightup.com/b7mCCOH.gif)

Insert data from the **Related Instructor** field into the second **Text** component.

![Insert data from the Related Instructor field into the second Text component](https://imgur.elightup.com/EoxkAaY.gif)

Save the template and we can see it displayed on the frontend.

![The template displayed on the frontend](https://imgur.elightup.com/p1n1ZlB.png)
