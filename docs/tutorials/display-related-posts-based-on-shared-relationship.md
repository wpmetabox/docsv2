---
title: Displaying related posts based on a shared relationship with Meta Box
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Today, we’re going to **create and display related posts in a single post based on a shared relationship** with **Meta Box**. This can be applied to various scenarios, such as showing related events connected to the same artists, related products within the same category, or additional articles by the same author.

In this example, I’ll show events linked to the same artist on a single event page like this:

![Show events linked to the same artist on a single event page](https://i.imgur.com/gCYnR7G.png)

## Video version

<LiteYouTubeEmbed id='Pkgzl3TSy1c'/>

## Preparation

In this practice, we’ll have two separate custom post types: Events and Artists. Also, we will create a bi-directional relationship between them, then show events linked to the same artist on a single event page.

These are some tools we need for this tutorial:

* [The Meta Box core plugin](https://wordpress.org/plugins/meta-box/): provide a framework to create custom post types and relationships;
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create custom post types for the events and artists;
* [MB Relationships](https://metabox.io/plugins/mb-relationships/): to create relationships between these post types;
* [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) (optional): to display the related events and related artists in the dashboard;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have the UI to create the relationship in an intuitive way. In addition, if you want to add extra information about the events and artists, you also can use this extension to create custom fields to store that kind of data. In this practice, I don’t use it to create custom fields to make it more simple.

## 1. Creating new custom post types

Go to **Meta Box** > **Post Types** to create a new custom post type for the artists and another one for events.

![Go to Meta Box to create new custom post types for the artists and events.](https://i.imgur.com/iFokCSM.png)

After publishing, you’ll see the created custom post types in the admin dashboard.

![The created custom post types in the admin dashboard](https://i.imgur.com/llIikjc.png)

Now, we can add some posts for each post type.

Then, let's create a relationship between the events and artists.

## 2. Creating the relationship

Go to **Meta Box** > **Relationships** to create the relationships between the Events and Artists post types.

![Create the relationships](https://i.imgur.com/unNtU2B.png)

You can enter all the settings for the relationship and each side of it in the **From** and **To** sections.

![You can enter all the settings for the relationship and each side of it in the From and To sections.](https://i.imgur.com/QPj5TFc.png)

Because we’re setting the relationship between two post types, set the **Object type** as **Post** in both sections.

![Set the Object type as Post in both sections.](https://i.imgur.com/vlRK9Nx.png)

In the **Post type** option, choose the post type you want to create a relationship with. The relationship is bidirectional, so you can put the post types not in order. I set the **Events** in the **From** section, and the rest is **Artists**.

![In the Post type option, choose the post type to create a relationship with](https://i.imgur.com/rB6V3ny.png)

Next, this setting is available when you activate the [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) extension only.

![The setting enables to show a columns in the dashboard](https://i.imgur.com/4oF5Bjv.png)

Once enabled, columns will appear in the dashboard showing related events and artists.

![Columns will appear in the dashboard showing related events and artists.](https://i.imgur.com/ja5ibTu.png)

In the **Field** tab, you can set the label for the relationship section that shows in the post editor.

![In the Field tab, you can set the label for the relationship section.](https://i.imgur.com/KxQ7w1B.png)

There’ll be a box at the right sidebar to choose **which Artists are related to the current post** in the **Events** post type, and vice versa.

![A section allow you choose which Artists are related to the current post in the Events post type](https://i.imgur.com/f8o8pSf.png)

After publishing, go to a post editor, you can see a section like that allowing you to select several artists.

![Select several artists](https://i.imgur.com/VbKVNKx.gif)

Here is my example of filling out all relationship information for events and artists.

![All relationship information for events and artists](https://i.imgur.com/1mTj4jm.png)

## 3. Showing related posts based on a shared relationship

This is my single event page before this practice.

![Single event page](https://i.imgur.com/rdefRcw.png)

Now, I will add other events that the artist of this event also participates in, like I showed at the beginning. I named this section as Related Events.

### 3.1 Adding a pattern for the related events section

First, go to the theme folder. I’m using the Twenty Twenty Four theme, which is a block theme, so I should add a pattern for the related event section.

![Go to the theme folder](https://i.imgur.com/Iik4Ew5.png)

Create a new `.php` file in the `patterns` folder, then add the following code.

```css
<?php
/**
 * Title: Related events
 * Slug: twentytwentyfour/related-events
 * Inserter: no
 */
?>

<h2 style="font-weight:bold;">Related Events</h2>

<?php

$current_id = get_the_ID();
$connected = new WP_Query( [
    'relationship' => [
        'id'      => 'event-to-artist',
        'from'      => get_the_ID(),
    ],
] );

$atist_related = [];
while ( $connected->have_posts() ) : 
	$connected->the_post(); 
	$atist_related[] = get_the_ID();
endwhile;

$events_related = [];
foreach ( $atist_related as $id_atist ) :
	$connected1 = new WP_Query( [
	    'relationship' => [
	        'id'      => 'event-to-artist',
	        'to'      => $id_atist,
	    ],
	] );
	while ( $connected1->have_posts() ) : 
		$connected1->the_post();
		
	    $events_related [get_the_ID()] = get_the_title();
	endwhile;
endforeach;

unset($events_related[$current_id]);

?>

<?php foreach ( $events_related as $key => $value ) : ?>
	<li><a href="<?php the_permalink($key); ?>"><?php echo $value; ?></a></li>
<?php endforeach;?>
```
![Create a new php file, then add some code](https://i.imgur.com/lCvk5fz.png)

Let’s break down the code:

#### 3.1.1 Getting ID of the current post

I created a new variable to get the ID of the current post.

```css
$current_id = get_the_ID();
```
#### 3.1.2 Querying to get related artists

This query is to get posts from the relationship.

```css
$connected = new WP_Query( [
    'relationship' => [
        'id'      => 'event-to-artist',
        'from'      => get_the_ID(),
    ],
] );
```
* `event-to-artist`: the ID of the created relationship;
* `'from'      => get_the_ID(),`: query to get ID of the posts (means artists) connected with the current post (event).

I also created an empty array `$atist_related = [];`. It will be used to store the returned ID of all the artists who are related to the current post as set in the relationship field.

```css
$atist_related = [];
while ( $connected->have_posts() ) : 
	$connected->the_post(); 
	$atist_related[] = get_the_ID();
endwhile;
```
I did a double check to make sure that there is any returned ID from the query, then push them into the array.

#### 3.1.3 Querying to get related events

This part is to get the related event posts that have the same artists with the current post.So, I created another array, `$events_related = [];`. Then, loop through each artist ID in the `$artist_related` array to query events related to that artist.

```css
$events_related = [];
foreach ( $atist_related as $id_atist ) :
	$connected1 = new WP_Query( [
	    'relationship' => [
	        'id'      => 'event-to-artist',
	        'to'      => $id_atist,
	    ],
	] );
	while ( $connected1->have_posts() ) : 
		$connected1->the_post();
		
	    $events_related [get_the_ID()] = get_the_title();
	endwhile;
endforeach;
```
You can see that , I use the following syntax once again to query events related to the current artist ID using the relationship.

```css
$connected1 = new WP_Query( [
	  'relationship' => [
	      'id'      => 'event-to-artist',
	      'to'      => $id_atist,
	  ],
] );
```
Pay attention that, there is a difference when you query the artist and the event using the relationship.

When we created the relationship, there were two sections named **From** and **To**. If you set the **Event** post type in the **From** section, you should set ‘from’ to get all the artists related to the event. Otherwise, set ‘to’ to get all the events related to the artist.

![A difference when you query the artist and the event using the relationship](https://i.imgur.com/16djSpF.png)

Afterward, since I get all the posts related to the artists, it might include the current post. This post should not be displayed in the section, so we need to remove it from the array.

```css
unset($events_related[$current_id]);?>
```

#### 3.1.4 Displaying the related posts

Finally, it’s the part displays each related event with the permalink and title.

```css
<?php foreach ( $events_related as $key => $value ) : ?>
	<li><a href="<?php the_permalink($key); ?>"><?php echo $value; ?></a></li>
<?php endforeach;?>
```

So, we’ve done the pattern for the section.

### 3.2 Including pattern to the template

Move on to the template of the single page. Choose a place to include the pattern.

```css
<!-- wp:group {"style":{"spacing":{"margin":{"top":"var:preset|spacing|40"},"padding":{"bottom":"var:preset|spacing|50"}}},"layout":{"type":"constrained"}} -->
	<div class="wp-block-group">
		<!-- wp:pattern {"slug":"twentytwentyfour/related-events"} /-->
	</div>
	<!-- /wp:group →
```

![Choose a place to include the pattern](https://i.imgur.com/caMvIOY.png)

That’s all. All the code is updated on [Github](https://github.com/wpmetabox/tutorials/tree/tutorials/display-related-posts) for your reference.

Go to the frontend, you can see that there are some posts displayed in the related events section on each single event post. It also works well when you check on another post.

![There are some posts displayed in the related events section on each single event post](https://i.imgur.com/ldG9pph.gif)

If you simply want to display related content using bi-directional relationships, take a look at [this guide](https://docs.metabox.io/tutorials/create-relationships-mb-views/) for detailed instructions. Thanks for reading!
