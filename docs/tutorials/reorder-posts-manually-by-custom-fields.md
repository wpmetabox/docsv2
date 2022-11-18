---
title: Reordering posts manually using custom fields
---

Arranging posts in a custom order will be much easier if you use custom fields. It allows you to set any post first without criteria.

### Before Getting Started

To get started, we need the [Meta Box core plugin](https://wordpress.org/plugins/meta-box/) to have the framework for creating custom fields. It’s free, so you can download it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/).

Also, we’ll use some of Meta Box’s extensions:

* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to create custom fields easily.
* [Meta Admin Columns](https://metabox.io/plugins/mb-admin-columns/): to manage the posts and view the order more easily in the WordPress admin.

## Step 1: Create a custom field to set the order

We need to create a custom field to enter the ordinal number for posts.

![Create a custom field](https://i.imgur.com/wNK8aEU.png)

In the **Dashboard**, go to **Meta Box > Custom Fields** and create a new field group. I named the fields as ‘Order of the Post’ and set it in the type of **Text** field.

![Create a new field group](https://i.imgur.com/VgDtYQq.png)

To see exactly the order by the ordinal number, you can set this field display as an admin column in the admin. Just tick this box and set the position for the column.

![Set this field display as an admin column in the admin](https://i.imgur.com/D8ZRb9J.png)

Note that this option is available only when you activate the **MB Admin Columns**.

After publishing, move to **Post Editor**, open a post that you want to reorder, and you will see the field.

![The created field in the post editor](https://i.imgur.com/PZBwXQe.png)

After filling in the numbers for posts, you will see them in the admin like this.

![The numbers shows in the admin](https://i.imgur.com/1TwevgK.png)

## Step 2: Reorder posts on the front end

Your page still doesn’t display the post in the created order above unless you add this code to the `functions.php` file of your theme.

```php
function memory_custom_post_order_sort( $query ) {
    if ( $query->is_main_query() && is_home() ) {
        $query->set( 'orderby', 'meta_value' );
        $query->set( 'meta_key', 'mb_order' );
        $query->set( 'order', 'ASC' );
    }
}
add_action( 'pre_get_posts', 'memory_custom_post_order_sort' );
```
**Explanation**:

* `'pre_get_posts'`: the hook that fires just before the post query is created.
* `is_home()`: ensure that the reordering happens on the homepage only; in case, if you want to reorder posts on the archive page only, use this function is_archive().
* field with id `mb_order`. Replace `mb_order` with your field ID if you use another ID. 
* `mb_order`: the field’s id created in the custom fields. You can replace `mb_order` with your field ID if you use another ID. 
* `ASC`: display your post in ascending order. Change it to `DESC` if you want to show your post in descending one.

Save the code, and you will see the new order of the post in the page you want.
