---
title: Creating relationships - Meta Box + Breakdance
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Continuing the series on **creating a relationship** between two objects on your website, we have just explored a different method, using **Meta Box** and **Breakdance**. In this practice, we’ll create a bi-directional relationship between Courses and Instructors post types and show them on both singular and archive pages.

This is an archive page for example. It includes a list of courses and the name of instructors who contributed to each course.

![This is an archive page](https://imgur.elightup.com/2oZbllI.png)

This is a singular page that shows information of an Instructor. There is also a section to display all the courses contributed by this instructor.

![This is a singular page that shows information of an Instructor](https://imgur.elightup.com/YAvoRst.png)

## Video Version

<LiteYouTubeEmbed id='uUz_sgcvJY8' />

## Preparation

We have two separate custom post types: **Courses** and **Instructors**. In this case, the relationship is to link the courses to their instructors, and also link each instructor to the courses to which they contributed. This bi-directional relationship will be shown on the both singular page of each post type and the archive page for **Courses**.

Here are some Meta Box extensions for the advanced features:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom post types and custom fields, and relationships;
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create custom post types for the courses and instructors;
* [MB Relationships](https://metabox.io/plugins/mb-relationships/): to create relationships between these post types;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have an intuitive UI on the backend to create custom fields and relationships;
* [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) (optional): to display the related courses and related instructors in the dashboard.
* **Breakdance** to build the pages.

## 1. Creating the custom post types

Go to **Meta Box** > **Post Types** to create a new post type for the instructors, and another one for courses.

![Go to Meta Box > Post Types to create new post types for Instructors and Courses](https://imgur.elightup.com/YLFWpYh.png)

After publishing, you will see new menus displayed. These are my created post types.

![These are created post types](https://imgur.elightup.com/bt0kuUJ.png)

## 2. Creating custom fields

If you want to add some custom fields to save some extra information for each post type, just go to **Meta Box** > **Custom Fields** to create fields as usual. In this practice, I just add some fields for the courses.

![Go to Meta Box > Custom Fields to create fields for the Courses](https://imgur.elightup.com/7OvmoV1.png)

After creating all the wanted fields, go to the **Settings** tab, set the **Location** as **Post type**, and select the post type you want to apply the fields to.

![Go to the Settings tab, set the Location as Post type, and select the post type you want to apply the fields](https://imgur.elightup.com/7VebKWi.png)

## 3. Creating relationships

Go to **Meta Box** > **Relationships** to create the relationships between the Courses and Instructors post types.

![Go to Meta Box > Relationships to create the relationships between the Courses and Instructors](https://imgur.elightup.com/3GjqbEQ.png)

There’ll be two sections: **From** and **To** with the same structure of settings.

![There’ll be two sections: From and To with the same structure of settings](https://imgur.elightup.com/9rtavbY.png)

Because we’re setting the relationship between 2 post types, set the **Object Type** as **Post** in both two sections.

![set the Object Type as Post in both two sections.](https://imgur.elightup.com/zBmN7pj.png)

In the **Post type** option, choose the post type you want to create a relationship. The relationship is bi-directional, so you can put the post types not in order. For example, I set the **Instructor** in the **From** section, and the rest is **Course**.

![Set the Instructor in the From section, and the rest is Course.](https://imgur.elightup.com/XVzeHvU.png)

Because I activated the [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) extension before, I have the following option in both two sections of the relationship’s settings.

![Set Admin Colums for two sections of the relationship’s settings.](https://imgur.elightup.com/6DSk001.png)

It will help to display the related posts from the relationship on the dashboard like this.

![the related posts from the relationship displayed on the dashboard](https://imgur.elightup.com/dTJ317F.png)

In the **Field** tab, you can set the label for the relationship section in the post editor.

![In the Field tab, you can set the label for the relationship section in the post editor.](https://imgur.elightup.com/a2BwkVI.png)

After publishing the relationship, you will see a new field on the right sidebar in the post editor of each post type.

In the post editor of the **Course** post type, you will see this one to choose **which instructor is related to the current post**. You can select several instructors in this section.

![Select several instructors in the post editor of the Course post type](https://imgur.elightup.com/bGQhgLR.png)

It’ll be the same when you add related courses for an instructor.

![add related courses for an instructor](https://imgur.elightup.com/NfmhEI0.png)

In the dashboard, all the information will display like this.

![In the dashboard, add related courses for an instructor like this](https://imgur.elightup.com/8liR6rG.jpg)

## 4. Creating a global block for Courses

I will create a section to show all the information of the courses that the instructor contributed to. To display information about each course, we should create a global block.

![create a global block to show all the information of the courses that the instructor contributed to](https://imgur.elightup.com/ekWy8wL.png)

Go to **Breakdance** > **Global Blocks**.

![Go to Breakdance > Global Blocks.](https://imgur.elightup.com/4s8CrHS.png)

Select **Div** element to cover the whole block.

![Select Div element to cover the whole block.](https://imgur.elightup.com/YrvCb8z.png)

Add an **Image** element to show the course image.

![Add an Image element to show the course image.](https://imgur.elightup.com/p9u7vJx.png)

Click on the **Insert Dynamic Data** button to insert dynamic data to this element.

![Click on the Insert Dynamic Data button to insert dynamic data to this element.](https://imgur.elightup.com/Xm4E3cR.png)

Then choose **Featured Image** in the **Post** section.

![choose Featured Image in the Post section.](https://imgur.elightup.com/f92qEPd.png)

The name of the course is the post title and embedded link, so add the **Text Link** element.

![Add the Text Link element for the name of the course](https://imgur.elightup.com/LL8htS3.png)

Then insert dynamic data from the **Post Title**.

![insert dynamic data from the Post Title.](https://imgur.elightup.com/7RrwldL.png)

The **Text Link** element also provides a setting to set the embed link as dynamic data.

![The Text Link element provides a setting to set the embed link as dynamic data.](https://imgur.elightup.com/RlN8KY5.png)

And choose **Post Permalink** inside.

![choose Post Permalink inside.](https://imgur.elightup.com/pDPObEw.png)

I’ll add a **Div** element for each kind of information that is from custom fields.

![Add a Div element for each kind of information](https://imgur.elightup.com/S1PNty1.png)

Go ahead, add a **Text** element for showing the first course’s information.

![Add a Text element for showing the first course’s information.](https://imgur.elightup.com/Ia7yTM9.png)

This course’s information is saved in a custom field created with Meta Box, so also insert dynamic data to the **Text** element. Look for the **Metabox** section, choose the name of the custom field.

![Insert dynamic data to the Text element. In the Metabox section, choose the name of the custom field.](https://imgur.elightup.com/yRW4pyK.png)

For other lines, in the same way, just duplicate this **Div** element, change each **Text** element inside to get the right name and data from custom fields.

![Duplicate Div element, change each Text element inside to get the right name and data from custom fields.](https://imgur.elightup.com/9xAlTWz.png)

You can change those elements to style this block a little bit to have a good look.

![Style the block a little bit to have a good look.](https://imgur.elightup.com/TelQvr5.png)

## 5. Displaying the relationship

In this practice, we’ll display this relationship on the singular page of the Instructor post type; and on the archive page where all the courses are listed.

### 5.1. Displaying the relationship on the singular page of Instructors

This is an example of the Instructor post type. It shows detailed information about one instructor. There will be a section to show all the courses that the instructor contributed to. and, we already have a global block to display each one of those posts.

![This is an example of the Instructor post type](https://imgur.elightup.com/ekWy8wL.png)

Go to **Breakdance** and create a new template for the page.

![Go to Breakdance and create a new template for the page.](https://imgur.elightup.com/Dbo4muk.png)

Remember to set the location for this template as the single page of the Instructors post type.

![Remember to set the location for this template as the single page of the Instructors post type.](https://imgur.elightup.com/GJvWd8V.png)

Add a **Section** element to cover all the content of the page.

![Add a Section element to cover all the content of the page.](https://imgur.elightup.com/7DP89Sd.png)

Add the Post Title element to display the instructor name.

![Add the Post Title element to display the instructor name.](https://imgur.elightup.com/KW9ChHv.png)

Then, add the Post Content element to get the instructor’s description.

![Add the Post Content element to get the instructor’s description.](https://imgur.elightup.com/tSNwsTZ.png)

For the section displaying all the contributed courses, there are multiple posts so we should add the **Post Loop Builder** element.

![Add the Post Loop Builder element to display all the contributed courses](https://imgur.elightup.com/oJLJhQB.png)

Choose the name of the created global block.

![Choose the name of the created global block.](https://imgur.elightup.com/HEQidPf.png)

Since we haven’t set the source of data to query from, there will be no information display.

![Since we haven’t set the source of data to query from, there will be no information display.](https://imgur.elightup.com/7HOjRQ4.png)

To display the course’s information, move to the **Query** section of the Post Loop Builder element, choose **Array**.

![Move to the Query section of the Post Loop Builder element, choose Array to display the course’s information](https://imgur.elightup.com/8jU2yHc.png)

We should add some lines of code like this:

```
return [
  'post_type' => 'course',
  'posts_per_page'=>-1,
  'relationship' => [
    'id'   => 'instructor-to-course',
    'from' => get_the_ID()
  ],
];
```

![add some lines of code](https://imgur.elightup.com/bvoU1U9.png)

`'post_type' => 'course',`

This line code is to stipulate that we will query posts from the Course post type.

```
'relationship' => [
  'id'   => 'instructor-to-course',
  'from' => get_the_ID()
],
```

These lines are to stipulate that only the posts that are set in the relationship will be queried. **'instructor-to-course'** is the ID of the created relationship.

After adding the query, you will see a list of courses displayed automatically.

![A list of courses displayed automatically after adding the query](https://imgur.elightup.com/gS7vKuL.png)

Just style this template now to get a better display.

![Style this template to get a better display.](https://imgur.elightup.com/Dn5mNy7.png)

### 5.2. Displaying the relationship on an archive page

We’ll create an archive page showing all the courses. There will be the same kind of information for each course should be displayed, so you should create a global block for them.

![This is an archive page showing all the courses](https://imgur.elightup.com/Ir8Me9r.png)

In that global block, I also display the related instructor names of the course.

![This is a page show the related instructor names of the course.](https://imgur.elightup.com/2oZbllI.png)

There may be more than one instructor contributing to a course, so we should use a global block to get and display their names.

So, there will be two new global blocks:

![There are two new global blocks](https://imgur.elightup.com/AEb6vUE.png)

### 5.2.1. Displaying the Instructor’s name

Instructor Block is to display the instructor name only, so add a **Text link** element.

![Add a Text link element to display the instructor name](https://imgur.elightup.com/0h55fIu.png)

Click on the **Insert Dynamic Data** button to insert dynamic data from the **Post Title**. Insert link as well from the **Post Permalink**.

![Click on the Insert Dynamic Data button to insert dynamic data from the Post Title. Insert link as well from the Post Permalink.](https://imgur.elightup.com/7Pb6qe4.gif)

Next, we will add the instructor name from the created global block to the block for displaying course information.

This block to display the course on the archive page has the same structure and content with the one for the course on the Instructor singular page, so just copy all the elements from the previous block, and paste to this new one.

![Copy all the elements from the previous block, and paste to this new one.](https://imgur.elightup.com/zNgkoig.gif)

In the new global block for the courses, I’ll add a new **Div** element to display the instructor's name. Or, just duplicate the **Div** element to inherit its style then change the text.

![Add a new Div element to display the instructor's name](https://imgur.elightup.com/bZ5NihZ.png)

Add the **Post Loop Builder** element inside the new Div.

![Add the Post Loop Builder element inside the new Div.](https://imgur.elightup.com/IeICEnf.png)

Choose the global block as the one we created for the instructor.

![Choose the global block as the one we created for the instructor.](https://imgur.elightup.com/SssjiSn.png)

We also need to regulate the query for this element. Choose **Array**, and add code.

![Choose Array, and add code to regulate the query for the element.](https://imgur.elightup.com/7CA0Rba.gif)

```
return [
  'post_type' => 'instructor',
  'posts_per_page'=>-1,
  'relationship' => [
    'id'   => 'instructor-to-course',
    'from' => get_the_ID()
  ],
];
```

These lines are the same with the one we use to display the related course in the previous step. Just replace the ID of the post type with the **instructor**.

This preview post has names of two instructors, so we should style this global block a bit more.

![This preview post has names of two instructors](https://imgur.elightup.com/0gHl3zi.png)

Now, it looks like this.

![The instructor names after styling.](https://imgur.elightup.com/y0sMl40.png)

#### 5.2.2. Creating the archive page

Now, go to create the archive page then edit it in **Breakdance**.

![go to create the archive page then edit it in Breakdance.](https://imgur.elightup.com/Gt4YCXZ.png)

Add a **Section** element to cover the page.

![Add a Section element to cover the page.](https://imgur.elightup.com/poaxvao.png)

Inside the section, add the **Heading** element to the page title.

![Inside the section, add the Heading element to the page title.](https://imgur.elightup.com/kTGNRyv.png)

For the list of courses, use the **Post Loop Builder** again. Set the global block as **Course Archive Block** that we use for the courses displaying on this archive page.

![Use the Post Loop Builder and set the global block as Course Archive Block that using for the courses](https://imgur.elightup.com/bpyqPIF.gif)

And set the query for it. Just replace the post type with **'course'**.

![Set the query for it. Just replace the post type with 'course'.](https://imgur.elightup.com/hHKDUTP.png)

Now, customize the layout. This is the final look I have after styling.

![This is the final look I have after styling](https://imgur.elightup.com/bmzUAyn.png)
