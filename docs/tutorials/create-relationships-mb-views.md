---
title: Creating relationships - MB Views
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In the previous part of [this series](https://metabox.io/series/create-relationships/), we learned how to **create relationships** with several page builders. However, if you don’t want to use them, you still can create and display the relationship between two objects on your website with the help of **MB Relationships and MB Views from Meta Box**. In this practice, we’ll create a bi-directional relationship between Courses and Instructors post type and show them on the page.

This is an archive page for example. It includes a list of courses and the name of instructors who contributed to each course.

![archive page includes a list of courses and the name of instructors who contributed to each course.](https://i.imgur.com/tcUoKiA.png)

## Video version

<LiteYouTubeEmbed id='RVvyTgNnxsw' />

## Preparation

We have two separate custom post types: **Courses** and **Instructors**. In this case, the relationship is to link the courses to their instructors, and also link each instructor to the courses to which they contributed. These relationships will be shown on both the singular page of each post type and the archive page for **Courses**.

In this practice, we need these tools:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom post types and custom fields;
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create custom post types for the courses and instructors;
* [MB Relationships](https://metabox.io/plugins/mb-relationships/): to create relationships between these post types;
* [MB Views](https://metabox.io/plugins/mb-views/): to create the pages and their template for relationships;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have an intuitive UI on the backend to create custom fields and relationships;
* [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) (optional): to display the related courses and related instructors in the dashboard.

## 1. Creating new custom post types

Go to **Meta Box** > **Post Types** to create a new post type for the instructors, and another one for the courses.

![Go to Meta Box > Post Types to create a new custom post type for the instructors, and another one for the courses.](https://i.imgur.com/5WUnuXF.png)

After publishing, you will see your new post types in the **Admin Dashboard**.

![your new custom post types in the Admin Dashboard](https://i.imgur.com/WtyRval.png)

## 2. Creating custom fields

If you need to save some extra information for each post type, just go to **Meta Box** > **Custom Fields** > **Add New** to create custom fields as usual. In this case, I just create some for the courses as follows.

![Meta Box > Custom Fields > Add New to create custom fields](https://i.imgur.com/phyXbjW.png)

After creating all the wanted fields, go to the **Settings** tab, set the **Location** as **Post type**, and select the **Course** to apply created fields to it.

![go to the Settings tab, set the Location as Post type, and select the Course to apply created custom fields to it](https://i.imgur.com/BwFj3xU.png)

## 3. Creating the relationships

Go to **Meta Box** > **Relationships** to create the relationships between the Courses and Instructors post types.

![Go to Meta Box > Relationships to create the relationships between the Courses and Instructors post types.](https://i.imgur.com/12A1HeA.png)

There’ll be the **From** and **To** section to set the relationship. 

![the From and To section to set the relationship](https://i.imgur.com/k5tohya.png)

Because we’re setting the relationship between 2 post types, set the **Object Type** as **Post** in both two sections.

![set the Object Type as Post in both two sections](https://i.imgur.com/DaaZlJx.png)

In the **Post type** option, choose the post type you want to create a relationship. The relationship is bidirectional, so you can put the post types not in order. For example, I set the **Instructor** in the **From** section, and the rest is **Course**.

![In the Post type option, choose the post type you want to create a relationship I set the Instructor in the From section, and the rest is Course](https://i.imgur.com/hicX7co.png)

Because I activated the [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) extension before, I have this option in both two sections of the relationship’s settings.

![the option in both two sections of the relationship’s settings](https://i.imgur.com/OVrLVah.png)

Check that box to show which courses are related to the post of an instructor and vice versa.

![Check that box to show which courses are related to the post of an instructor and vice versa](https://i.imgur.com/dTJ317F.png)

In the **Field** tab, you can set the label for the relationship section that shows in the post editor.

![In the Field tab, you can set the label for the relationship section that shows in the post editor](https://i.imgur.com/PTXAZ4t.png)

That’s all to set the relationship. Go to a post editor of the **Course** post type, there’ll be a box at the right sidebar to choose **which instructors are related to the current post**. It displays as a field, this will make sense when you get posts from this field in the next step. You can select several courses in the section.

![there’ll be a box at the right sidebar to choose which instructors are related to the current post You can select several courses in the section](https://i.imgur.com/2zQipFB.png)

It’ll be the same when you add related courses for an instructor. 

![the box to add related courses for an instructor](https://i.imgur.com/IfTtNyF.png)

In the dashboard, all the information will display like this.

![In the dashboard, all the information will display like this](https://i.imgur.com/IzrftMS.png)

## 4. Displaying the relationship

In this practice, we’ll display this relationship on both singular pages of the Course post type and Instructor post type, also on the archive page where all the courses are listed.

### 4.1 Displaying the relationship on the singular page of Instructors

This is an example of the **Instructor** post type. It shows detailed information about one instructor. There will be a section to show all the courses that the instructor contributed to.

![example shows detailed information about one instructor and a section to show all the courses that the instructor contributed to.](https://i.imgur.com/wO4Af6X.png])

To create the template for the singular page of Instructors, go to **Views** in **Meta Box** and create a new one.

![go to Views in Meta Box and create the template for the singular page of Instructors](https://i.imgur.com/tIT5zGj.png)

In the **Template** tab, you can add some code or insert fields from the list in the right sidebar.

![In the Template tab, you can add some code or insert fields from the list in the right sidebar.](https://i.imgur.com/btxJ1S0.png)

First, choose the **Post title** to get the name of the instructor.

![choose the Post title to get the name of the instructor](https://i.imgur.com/uQyBGqw.png)

Then, choose **Post content** to get detailed information about the instructor.

![choose Post content to get detailed information about the instructor](https://i.imgur.com/oUCApg4.png)

Next, we’ll create a section to display a list of courses contributed by this instructor. It’s the relationship that we want. So we will get posts following the created relationships. 

Move on to the **Query** tab. There is the name of the relationship that we created.

![Move on to the Query tab. There is the name of the relationship that we created](https://i.imgur.com/3iSoQzs.png)

We’re creating a template for the Instructor singular page, so choose the **Connect To** option. It is the name of the field for the relationship when you edit a post in the Instructor post type.

![choose the Connect To option, it is the name of the field for the relationship when you edit a post in the Instructor post type.](https://i.imgur.com/HDGDKG1.png)

There are some lines of code display.

**_Explanation_**: 

* `{% set relationship = attribute( relationships, 'instructor-to-course' ) %}`: to query the posts following the relationship;
* `{% for post in relationship.to %}`: this loop helps to list the posts because there will be multiple posts.

To display each post's information, just insert some fields as usual inside this loop.

Choose the **Post thumbnail** to show a featured image of the course.

![Choose the Post thumbnail to show a featured image of the course](https://i.imgur.com/k1x0W2k.png)

Next, choose the **Post title** to get the name of the course.

![choose the Post title to get the name of the course](https://i.imgur.com/zfcyHrn.png)

I have some extra information about the course that saves in custom fields. They’re type, date, place, and price. Just choose them one by one.

![choose type, date, place, and price](https://i.imgur.com/ZsxnUFe.png)

After getting all of the information of the posts as you want, move to the **Settings** section of the view, set the **Type** as **Singular**, and choose the name of the post type as **Instructor** in **Location**.

![move to the Settings section of the view, set the Type as Singular, and choose the name of the post type as Instructor in Location.](https://i.imgur.com/AfjEZOE.png)

Go to a page that shows any instructor information, you will see the posts displayed like this.

![the information displayes](https://i.imgur.com/O4lxmfo.png)

To have a better look for the page, go back to the created template, add some **div** tags and classes for each information.

![add some div tags and classes for each information](https://i.imgur.com/86J94Nb.png)

Then add some CSS.

![add some CSS](https://i.imgur.com/xSyS2GZ.png)

Back to the page on frontend, the new look has been done.

![the final look of the Singular Page of Instructors](https://i.imgur.com/fyz8xqi.png)

### 4.2. Displaying the relationship on the singular page of Courses

We’ll show each course information and the instructor who contributed to them on the page. It uses the relationship we created.

![the page show each course information and the instructor who contributed to](https://i.imgur.com/oGpusLt.png)

Go to **Views** and create another template. Do likewise with the singular page of the Instructor.

![Go to Views and create another template](https://i.imgur.com/0giSlHx.png)

Just choose the fields from the list on the right sidebar to display the course’s information.

First, choose the **Post thumbnail** to show a featured image of the course.

![choose the Post thumbnail to show a featured image of the course](https://i.imgur.com/QAvwyRR.png)

Then choose the **Post title**, **Post content**, even the information in the custom fields such as **Type**, **Date**, **Place**, and **Price**.

![choose the Post title, Post content, even the information in the custom fields such as Type, Date, Place, and Price](https://i.imgur.com/bzfFAHI.png)

To display information about the related instructor, I also use the **Query** tab, and choose the **Connect From** option. It’s this option because the field for the relationship in the Course’s post editor has that name.

![use the Query tab to display information about the related instructor, and choose the Connect From option](https://i.imgur.com/i1ywLPr.png)

It also may have more than one related instructor, so there is a loop. Insert fields inside this loop to display the instructor information. 

In this case, I choose only the **Post title** to have the name of the instructors.

![choose the Post title to have the name of the instructors](https://i.imgur.com/HZoKC8U.png)

Also set the **Type** and **Location** for the view to apply it to the singular page of the Course post type.

![set the Type and Location for the view to apply it to the singular page of the Course post type.](https://i.imgur.com/BNilrUS.png)

All of the information displayed.

![All of the information displayed](https://i.imgur.com/a2A0QMr.png)

Back to the created template, also add some **div** tags and classes.

![add some div tags and classes](https://i.imgur.com/7q4JbN1.png)

Then add some CSS.

![add some CSS](https://i.imgur.com/kmHoluN.png)

And this is the result.

![the final look of the singular page of course](https://i.imgur.com/qm4T7im.png)

### 4.3. Displaying the relationship on an archive page

We’ll create an archive page showing all the courses. On the page, we also display the instructor who contributed to each course.

![archive page showing all the courses and display the instructor who contributed to each course.](https://i.imgur.com/GUWYQBs.png)

Move to **Pages** > **Add New** to create a new page as usual.

![Move to Pages > Add New to create a new page as usual](https://i.imgur.com/qm0IhGp.png)

To create the template for this page, go to **Views** in **Meta Box** and create a new one.

![go to Views in Meta Box and create a new template](https://i.imgur.com/iGnDFLa.png)

In the **Template** tab, insert the **Post title** field to display the page's title.

![In the Template tab, insert the Post title field to display the page's title.](https://i.imgur.com/QWFDwsG.png)

For the section that displays the course’s information, add this code.

![For the section that displays the course’s information, add this code](https://i.imgur.com/ARwip9b.png)

```
{% set args = { post_type: 'course', posts_per_page: -1, order: 'DESC'} %}
{% set posts = mb.get_posts( args ) %}
{% for post in posts %}
    
{% endfor %}
```

**_Explanation_**:

* `{% set args = { post_type: 'course', posts_per_page: -1, order: 'DESC'} %}`: is to declare that we’ll get all of the posts from the post type that has the slug as course;
* `mb.get_posts()`: this function is to get posts;
* `{% for post in posts %}`: this loop helps to display all the posts.

Let’s get and display the course’s information as usual by inserting some fields from the list on the right sidebar into this loop. These all things are the information from the post’s default fields and custom fields.

![get and display the course’s information as usual by inserting some fields from the list on the right sidebar into this loop](https://i.imgur.com/knj04CW.png)

For the related instructors that store in the relationship field, we use the following code:

```
[instructor_list courseid={{post.ID}}]
```

![For the related instructors that store in the relationship field, we use the following code](https://i.imgur.com/vDJBOt5.png)

It is to list all the instructors related to a course that is defined by ID. However, it hasn’t worked yet. We should declare this shortcode in the theme file later to activate it.

Scroll down to the **Settings** section of the views, choose the location as **Page**, and choose the **Courses**.

![Scroll down to the Settings section of the views, choose the location as Page, and choose the Courses](https://i.imgur.com/hnzTDlO.png)

Go to the page on frontend, you will see that there is no instructor name displayed since we haven’t activated the mentioned shortcode.

![no instructor name displayed since we haven’t activated the mentioned shortcode](https://i.imgur.com/OCXE4HU.png)

You can go to the theme file and add code directly or use a third-party plugin, for example, Code Snippets.

Go to **Snippets**, add a new one, and add code to the **Function** tab.

![Go to Snippets, add a new one, and add code to the Function tab](https://i.imgur.com/W4R7MVP.png)

```
add_shortcode( 'instructor_list', function ($atts) {
	extract( shortcode_atts( array(
		   'courseid' =>''
		), $atts));
	ob_start();
	$connected = new WP_Query( [
		'relationship' => [
			'id' 	=>	'instructor-to-course',
			'to'  => $courseid,
		],
		
	]);
	
	$resultstr = array(); 
  	if( $connected->have_posts() ): while ( $connected->have_posts() ) : $connected->the_post();
		 $resultstr[] = '<a href="'.get_the_permalink().'">'.get_the_title().'</a>';
  	endwhile; endif;	
	echo implode(", ",$resultstr);
  	wp_reset_postdata();
	return ob_get_clean();
} );
```

**_Explanation_**:

```
$connected = new WP_Query( [
    'relationship' => [
        'id' 	=>	'instructor-to-course',
        'to'  => $courseid,
],
```

These code are to stipulate that we will get data from the relationship that connects to the current post and has the `instructor-to-course` ID.

```
$resultstr = array(); 
  if( $connected->have_posts() ): while ( $connected->have_posts() ) : $connected->the_post();
    $resultstr[] = '<a href="'.get_the_permalink().'">'.get_the_title().'</a>';
  endwhile; endif;	
  echo implode(", ",$resultstr);
  wp_reset_postdata();
  return ob_get_clean();
```

These ones to check if there is any data from the relationship field, we will get the title of the instructor and its permalink.

Go back to the archive page on the frontend, the name of the instructors displayed.

![Go back to the archive page on the frontend, the name of the instructors displayed](https://i.imgur.com/Y5LcO3x.png)

To style this page, go back to the view. Add some **div** tags and classes.

![Add some div tags and classesto style the page](https://i.imgur.com/njby6OR.png)

Then add some CSS code.

![add some CSS code](https://i.imgur.com/W87sQHT.png)

This is the new look for the page.

![the final look of the archive page](https://i.imgur.com/3DjsjGz.png)

I uploaded all of these codes which I used for this practice on [Github](https://github.com/wpmetabox/tutorials/tree/master/create-relationships-with-mb-view), so you can refer to them.
