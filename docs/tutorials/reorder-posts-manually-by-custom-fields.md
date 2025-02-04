---
title: Reordering posts manually using custom fields
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Arranging posts in a custom order will be much easier if you use custom fields. It allows you to set any post first without criteria.

![An example of arranging posts in a custom order](https://i.imgur.com/Z2Xhqlj.png)

This is the new order of the posts as you can see.

![This is the new order of the posts](https://i.imgur.com/HVGMR2D.png)

## Video Version

<LiteYouTubeEmbed id='qX9oPY9yS-E' />

## Preparation

To get started, we need the **Meta Box** to have the framework for creating custom fields. It’s free, so you can download it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/).

Also, we’ll use some of Meta Box’s extensions:

* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to create custom fields easily.

* [Meta Admin Columns](https://metabox.io/plugins/mb-admin-columns/): to manage the posts and view the order more easily in the WordPress admin.

## 1. Creating custom fields

We’ll need to create a custom field to enter the ordinal number for posts like this.

![This is a custom field for enter the ordinal number for posts](https://i.imgur.com/iKYGTdL.png)

When you put in a number, we will show it in the dashboard to easily see the position of all the posts.

![This is the position of all the posts](https://i.imgur.com/obMNFXu.png)

[MB Builder](https://metabox.io/plugins/meta-box-builder/) can help you easily create custom fields without touching any line of code.

In the dashboard, go to **Meta Box** > **Custom Fields**, click **Add New** button to create a new field group.

![Go to Meta Box > Custom Fields, click Add New button to create a new field group](https://i.imgur.com/ZmDvKsK.png)

Choose the **Number** field since we just want to enter a number into the field.

![Choose the Number field to enter a number into the field.](https://i.imgur.com/RqeLAVg.png)

I named the field as **Order of the Post** to easily identify it. Now, look at the field’s ID that I marked, you can use the automatically generated ID by Meta Box builder or replace it with your own ID for easy memorizing.

![This is the field’s ID to use the automatically generated ID by Meta Box builder ](https://i.imgur.com/ck4OBY6.png)

To see exactly the order by the ordinal number, you can set the field display as an admin column. This setting is available only when you activate the [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) extension. Just turn on this button, and then set the position for the column.

![This is an admin column to see exactly the order by the ordinal number](https://i.imgur.com/Ug3lln7.png)

After having the field, move to the **Settings** tab, set the **Location** as **Post Type** and select **Post** or your own custom post type to apply the field to it.

![After having the field, move to the Settings tab, set the Location as Post Type and select Post or your own custom post type to apply the field](https://i.imgur.com/PAknb6n.png)

After creating the custom field, move to **Post Editor**, open a post that you want to reorder, and find the created field. Enter the number that you want this post to display and update the article.

![Move to Post Editor, enter the number that you want this post to display and update the article.](https://i.imgur.com/6ZQsDWQ.png)

After filling in the numbers for posts, you will see them in the admin screen like this.

![After filling in the numbers for posts, you will see them in the admin screen](https://i.imgur.com/ZEnMvCA.png)

## 2. Displaying posts in the custom order

Go to a page, and add the **Latest Posts** block.

![Go to a page, and add the Latest Posts block.](https://i.imgur.com/L5yd8BB.png)

These posts are displayed in the order based on published date order by default. To change the order to your custom one, we should add some code to the theme’s files.

Look for the **functions.php** file. Add code like this.

```
function memory_custom_post_order_sort( $query ) {
    if ( !$query->is_main_query() && $query->is_home() ) {
        $query->set( 'orderby', 'meta_value_num' );
        $query->set( 'meta_key', 'mb_order' );
        $query->set( 'order', 'ASC' );
    }
}
add_action( 'pre_get_posts', 'memory_custom_post_order_sort' );
```

![Add code in the functions.php file](https://i.imgur.com/oZUI1Sb.png)

**Explanation:**

* `'pre_get_posts'`: the hook that fires just before the post query is created
* `is_home()`: ensure that the reordering happens on the homepage only.

```
query->set( 'orderby', 'meta_value' );
$query->set( 'meta_key', 'mb_order' );
$query->set( 'order', 'ASC' );
```

These 3 lines arrange your posts in ascending order according to the value of the field with ID **'mb_order'**. Replace **'mb_order'** with your field ID if you use another ID.

`'ASC'`: display your post in ascending order. If you want the reverse order, change `'ASC'` to `'DESC'`.

After that, save the code and go back to the page on frontend. You will see the new order of the posts. It’s exactly with the number that I entered for them.

![This is the new order of the posts.](https://i.imgur.com/HVGMR2D.png)
