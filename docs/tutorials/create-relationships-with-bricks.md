---
title: Creating relationships - Meta Box + Bricks
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

If you want to create a relationship between two objects on your website, the **MB Relationships** from **Meta Box** can help you. In this practice, we’ll create a bi-directional relationship between Courses and Instructors post type for example. In addition, we also display them on the page with the help of **Bricks Builder**.

Here is an archive page I created. It includes courses and the name of instructors who contributed to each course.

![archive page shows courses and the name of instructors who contributed to each course](https://imgur.elightup.com/ikj6Mb1.png)

## Video version

<LiteYouTubeEmbed id='W4AOlPGBuH8' />

## Preparation

We have two separate custom post types: Courses and Instructors. In this case, the relationship is to link the courses to their instructors, and also link each instructor to the courses to which they contributed. This bi-directional relationship will be shown on the both singular page of each post type and the archive page for Courses.

Here are the tools that we need for this practice:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom post types and custom fields, and relationships;
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create custom post types for the courses and instructors;
* [MB Relationships](https://metabox.io/plugins/mb-relationships/): to create relationships between these post types;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have an intuitive UI on the backend to create custom fields and relationships;
* [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) (optional): to display the related courses and related instructors in the dashboard;
* **Bricks** to build the pages.

## 1. Creating the custom post types

Go to **Meta Box** > **Post Types** to create a new post type for the instructors, and another one for courses.

![Go to Meta Box, Post Types to create a new post type for the instructors, and courses](https://imgur.elightup.com/aGmZQuM.png)

Then, you will see new menus displayed in the **Admin Dashboard**. They’re your post types.

![Custom post types display in the Admin Dashboard](https://imgur.elightup.com/XKuWPo0.png)

## 2. Creating custom fields

If you want to add some custom fields for each post type to save some extra information about the courses or the instructors, just go to **Meta Box** > **Custom Fields** to create fields as usual. In this practice, I just add some fields for the courses.

![go to Meta Box, Custom Fields to create custom fields](https://imgur.elightup.com/OvMDY8e.png)

After creating all the wanted fields, go to the **Settings** tab, set the **Location** as **Post type**, and select the post type you want to apply the fields to it.

![go to the Settings tab, set the Location as Post type, and select the post type you want to apply the custom fields to it](https://imgur.elightup.com/SV6O6cC.png)

## 3. Creating relationships

Go to **Meta Box** > **Relationships** to create the relationships between the Courses and Instructors post types.

![Go to Meta Box, Relationships to create the relationships between the Courses and Instructors post types](https://imgur.elightup.com/HwHL4ut.png)

You can enter all the settings for the relationship and each side of it in two sections.

![enter all the settings for the relationship and each side of it in two sections](https://imgur.elightup.com/w7gcV0z.png)

In this practice, the relationship is bidirectional so you can put the post types not in order. Besides that, because they are post types, set the **Object Type** as **Post** in both two sections.

![set the Object Type as Post in both two sections](https://imgur.elightup.com/UIAXa46.png)

In the **Post type** option, choose the post type you want to create a relationship. For example, I set the **Instructor** in the **From** section, and the other is the **Course**.

![In the Post type option, choose the post type you want to create a relationship](https://imgur.elightup.com/zKOpmXX.png)

Because I activated the [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) extension before, I have this option in both two sections of the relationship’s settings.

![show as an admin column option in both two sections of the relationship’s settings](https://imgur.elightup.com/XMDuoQH.png)

I set it to show which courses are related to an Instructor and vice versa.

![when you check the option, you can see which courses are related to an Instructor](https://imgur.elightup.com/xQeBaOe.png)

In the **Field** tab, you can set the label for the relationship section in the post editor.

![In the Field tab, set the label for the relationship section in the post editor](https://imgur.elightup.com/KnQC6pr.png)

There’ll be a box at the right sidebar to choose **which instructor is related to the current post** in the Course post type and vice versa. It displays as a field, this will make sense when you get posts from this field in the next step.

![the box as a field at the right sidebar to choose which instructor is related to the current post in the Course post type](https://imgur.elightup.com/iaqEuU1.png)

After publishing, go to a post editor and you can choose more than one course in the **Related Course** section.

![you can choose more than one course in the Related Course section ](https://imgur.elightup.com/tKQxVHZ.gif)

It’ll be the same when you add related instructors for a course.

In the dashboard, all the information will display like this.

![all the information displays](https://imgur.elightup.com/8liR6rG.jpg)

## 4. Displaying the relationship

In this practice, we’ll display this relationship on both singular pages of the Course post type and Instructor post type; and on the archive page where all the courses are listed.

### 4.1. Displaying on the singular page of Instructors

This is an example of the **Instructor** post type. It shows detailed information about one instructor and the courses related to it.

![example of the Instructor post type shows detailed information about one instructor and the courses related to it](https://imgur.elightup.com/p9TyEXQ.png)

Go to **Bricks** > **Templates** > **Add New** to create a new one.

![Go to Bricks, Templates, Add New to create a new one](https://imgur.elightup.com/SfHwroE.png)

On the right sidebar, choose the **Template type** as **Single**, then edit it with Bricks.

![choose the Template type as Single, then edit it with Bricks](https://imgur.elightup.com/DnVGo4U.png)

Go to the settings of this template, set a condition to assign this one to the Instructor post type.

![Go to the settings of this template, set a condition to assign this one to the Instructor post type.](https://imgur.elightup.com/ccg5sfx.gif)

And also set a preview for it in the **Populate content** section.

![set a preview for it in the Populate content section](https://imgur.elightup.com/949UH6E.png)

Add a **Section** to have a **Container** covering all the page content.

![Add a Section to have a Container covering all the page content](https://imgur.elightup.com/50PgzxM.png)

Add a Post Title element to display the name of the instructor.

![Add a Post Title element to display the name of the instructor.](https://imgur.elightup.com/CyqyETC.png)

To get a description of the instructor, add the **Post Content** element.

![To get a description of the instructor, add the Post Content element](https://imgur.elightup.com/xqJhEhe.png)

For the section displaying all of the courses related to an instructor, add some **Div** elements to set the layout.

![For the section displaying all of the courses related to an instructor, add some Div elements to set the layout](https://imgur.elightup.com/swKCrlK.gif)

To display the courses which are chosen in the **Related Course** field, we should use the query loop in this **Div**.

![To display the courses which are chosen in the Related Course field, we should use the query loop in this Div](https://imgur.elightup.com/uqjGuVM.png)

Normally, we set the **Type** as **Posts** to get posts in the post type we want. However, in this case, we want to show posts that are set in the relationship, so it’s different. You’ll see an option is **‘MB Relationship’ along with the name of the relationship you created before**. Choose it.

![set the Type as MB Relationship along with the name of the relationship you created before](https://imgur.elightup.com/35TZaMS.png)

Then, just add elements to display the course information.

First, add an **Image** element.

![add an Image element](https://imgur.elightup.com/IKkkDCR.png)

And select dynamic data as the **Featured image** to get the featured image of the post.

![select dynamic data as the Featured image to get the featured image of the post](https://imgur.elightup.com/iLzZIGU.png)

Next, add the **Post Title** element to get the title of courses.

![add the Post Title element to get the title of courses](https://imgur.elightup.com/2BSmjHq.png)

Then, I use the **Rich Text** element to display extra information about the courses.

![Rich Text element to display extra information about the courses](https://imgur.elightup.com/Qp6UK48.png)

The information is saved as custom fields of Course in **Meta Box**, so click on the dynamic data button and choose the corresponding field in the dropdown list.

![click on the dynamic data button and choose the corresponding custom field from Meta Box in the dropdown list](https://imgur.elightup.com/e7F2Qez.gif)

For other information, do the same. Duplicate the **Rich Text** element and change the corresponding fields.

![Duplicate the Rich Text element and change the corresponding fields to get and dispaly other information](https://imgur.elightup.com/FMBZKoJ.png)

All the information is displayed like this.

![All the information is displayed](https://imgur.elightup.com/4Qmw3QX.png)

Now, you can go back to the template and style each element to get the new look you want. This is my page after styling.

![the final look of the singular page of instructor](https://imgur.elightup.com/yTKG0Ky.png)

### 4.2. Displaying on the singular page of Courses

Let’s create a singular page of the Course post type and show the instructor who contributed to each course. It uses the relationship we created.

![singular page of the Course post type and show the instructor who contributed to each course](https://imgur.elightup.com/74O4Yjd.png)

Also create another template for the course. Do likewise with the singular page of the Instructor.

![Create course template and set the condition likewise with instructor template](https://imgur.elightup.com/LdrAZaB.gif)

Add a **Section** element for the page.

![Add a Section element for the page](https://imgur.elightup.com/ql84cnK.png)

To display course information, we’ll add some elements to get information from featured images and custom fields. We also use dynamic data as usual.

![add some elements to get information from featured images and custom fields, also use dynamic data](https://imgur.elightup.com/46JVLFO.png)

Lastly, to display information about the related instructor, add a **Div** element.

![to display information about the related instructor, add a Div element](https://imgur.elightup.com/mCp31vM.png)

In this **Div** tag, set a query for it to get and display the instructor related to the course only. Similar to the Instructor singular page, I also set the **Type** of this query as **MB Relationship** along with the name of the relationship we created.

![enable query loop and set the Type of this query as MB Relationship](https://imgur.elightup.com/apxsrNy.png)

Then, add some elements to display instructor information.

Use the **Heading** element to have the Instructor heading.

![Use the Heading element to have the Instructor heading](https://imgur.elightup.com/BoRvdRf.gif)

And, add the **Post Title** to get the name of the instructor.

![add the Post Title to get the name of the instructor](https://imgur.elightup.com/ZFvejVh.png)

If you want to set a hyperlink for the instructor’s name to link to the Instructor's singular page, just enable this button.

![enable button to set a hyperlink for the instructor’s name to link to the Instructor's singular page](https://imgur.elightup.com/Br4fteY.png)

Sometimes, you can see the information incorrectly displayed. Don’t worry, everything will be right on the frontend.

![the final look of the singular page of course](https://imgur.elightup.com/kg7Nk93.png)

### 4.3. Displaying on an archive page

We’ll create an archive page showing all the courses. On the page, we also display the instructor who contributed to each course.

![archive page showing all the courses and display the instructor who contributed to each course](https://imgur.elightup.com/C6GsCzn.png)

Go to **Pages** > **Add New** to create a new page as usual and edit it with Bricks.

![Go to Pages > Add New to create a new page as usual and edit it with Bricks.](https://imgur.elightup.com/Uf2COnX.png)

Add a **Section** to cover the page.

![Add a Section to cover the page](https://imgur.elightup.com/ZCY920M.png)

Then, add the **Heading** element to display the title of the page.

![add the Heading element to display the title of the page](https://imgur.elightup.com/TsBqjEw.png)

Inside the **Container**, add a **Div** element to get the layout to cover all of the courses.

![Inside the Container, add a Div element to get the layout to cover all of the courses.](https://imgur.elightup.com/U26brZy.png)

Enable the query for the **Div**. And set the **Type** as **Posts** and choose **Post type** as **Courses** to display all the posts in the Course post type on this page.

![Enable the query for the Div and set the Type as Posts and choose Post type as Courses to display all the posts in the Course post type on this page.](https://imgur.elightup.com/J0MqplP.png)

Inside the **Div**, let’s add some elements to get and display information about each course.

Similar to the previous part, add an **Image** element and select dynamic data as the featured image for courses.

![add an Image element and select dynamic data as the featured image for courses](https://imgur.elightup.com/L1ka3MI.png)

Add the **Post Title**.

![Add the Post Title.](https://imgur.elightup.com/dvOreJf.png)

And **Rich Text** element with dynamic data to get information from custom fields for extra information about the courses.

![And Rich Text element with dynamic data to get information from custom fields for extra information about the courses](https://imgur.elightup.com/SJB7HFo.png)

Finally, for the related instructor in each course, do likewise with the Course singular page. Add a **Div** element.

![for the related instructor in each course add a Div element](https://imgur.elightup.com/nQhgbxR.png)

Enable the **Query loop** and set the **Type** as **MB Relationship**.

![Enable the Query loop and set the Type as MB Relationship](https://imgur.elightup.com/XQa3iHF.png)

Also, add elements to display instructor information.

Add the **Post Title** element to display the name of the instructor.

![Add the Post Title element to display the name of the instructor.](https://imgur.elightup.com/Amw2vLr.png)

Go to the front end and you’ll see the information displayed completely and exactly.

![the information displayed completely and exactly](https://imgur.elightup.com/wjqoXvH.png)

If you want to style the page, go back to the template in Bricks, and change the setting of each element. This is the final look I have after styling.

![the final look of archive page](https://imgur.elightup.com/NoA3qca.png)
