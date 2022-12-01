---
title: Moving custom fields' data to custom tables
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

By default, WordPress saves custom fields' values in the `wp_postmeta_ table` in the database, in which each row stores a custom field's data. If your website has too many custom fields' data, your database will be bloated considerably. This solution is to move your custom fields' data to a custom table in **only ONE row**. Therefore, you can release the burden of your database and improve your website performance dramatically! Now we will do it in action.

## Video version

<LiteYouTubeEmbed id='JaEvtYa4Hcg' />

## Before getting started

To move your custom fields' data to a custom table, here are the tools you need:

* <a href="https://metabox.io/">Meta Box</a> to have a framework to create a custom post type and custom fields for the form. It’s free and available on <a href="https://wordpress.org/plugins/meta-box">wordpress.org</a>.
* <a href="https://metabox.io/plugins/mb-custom-table/">MB Custom Table</a> allows saving custom fields' data in a custom table.
* <a href="https://metabox.io/plugins/meta-box-builder/">Meta Box Builder</a> to have an UI in the back-end to create custom fields for the post type.


:::tip

You can move all the custom fields' data of all custom post types to one custom table. However, it will be difficult to manage, categorize, and may cause confusion for you.

Thus, we're going to move the data of each post type to a separate custom table. This method is a bit more time-consuming, but in the long run, it will be more beneficial. That's because the custom fields' data of different post types are saved in different tables.

:::


We already have a post type named **Companies** with **Company name**, **Address**, and **Start day** fields. This is the field group of these fields in Meta Box Builder:

![Created field group](https://i.imgur.com/8lqOR5J.png)

And the custom field's data is saved in the `wp_postmeta`:

![Custom field's data is saved](https://i.imgur.com/gKgFnIH.png)

To move this custom field's data to a custom table, follow these steps:

## 1. Creating a custom table

Go to **Meta Box** &gt; **Custom Fields** and edit the field group I mentioned above. Go to the **Settings** tab and just tick the **Save data in a custom table** box.

![Choose Save data in a custom table option](https://i.imgur.com/MkML1on.png)

After that, some options will appear, and then you have to choose **Create table automatically** and enter the name of the custom table. I'll name it `wp_custom_company`

![Enter the name of custom table](https://i.imgur.com/fk6gt7A.png)

So, you have just created a custom table automatically with **Meta Box Builder.** And now, in your database, you will see a new table named `wp_custom_company`.

![Create a custom table automatically with Meta Box Builder](https://i.imgur.com/F6AI9Cv.png)

From now on, the **new data will be automatically saved in the custom table** whenever you update.

How about the **existing data** of this post type? It is still in the `wp_postmeta` table, so we need to use some code to move it to the new `wp_custom_company` table.

## 2. Moving data to the new custom table

This script below is to copy the custom fields' data in the `_wp_postmeta` table and paste it to the `wp_custom_company`. Then, it will delete the old data in the `wp_postmeta` table. Just insert this code into the `functions.php_ file`.

```php
function estar_child_data_company() {
    if ( empty( $_GET['move-data-companies'] ) || ! current_user_can( 'manage_options' ) ) {
        return;
    }

    $paged = isset( $_GET['estar-child-paged'] ) ? $_GET['estar-child-paged'] : 0;
    $paged += 1;
    $url = add_query_arg( 'estar-child-paged', $paged, 
'https://yourwebsite.com/wp-admin/?move-data-companies=1' );

    $posts = estar_child_admin_records_get_companies( $paged );
    if ( empty( $posts ) ) {
        die( 'Done' );
    }

    foreach ( $posts as $post ) {
        estar_child_move_data_company( $post );
    }

    echo "
    <script>
    ";

    die;
}
add_action( 'admin_init', 'estar_child_data_company' );

```

This script will run when you access the URL *https://yourwebsite.com/wp-admin/?move-data-companies=1* It's a URL to your WordPress backend, here we use a custom URL parameter `move-data-companies` to let the script know how to process the data.

The script will check if the current user is an admin, so normal users can't run it. When you access the URL, the script will get all the companies via `estar_child_admin_records_get_companies()` and for each company, it will process its data via `estar_child_move_data_company(). ‘estar’` is the theme that I’m using, you can change it to yours.

To prevent long execution, the code doesn't process all companies at once. Instead, it processes only a batch of companies with pagination.

Now, we need to write these 2 functions:

* `estar_child_admin_records_get_companies()`: to take the list of posts
* `estar_child_move_data_company()`: to move data for each post

```php
function estar_child_admin_records_get_companies( $paged = 1 ) {
    $args = [
        'post_type' =&gt; 'companies',
        'posts_per_page' =&gt; 100,
        'paged' =&gt; $paged,
        'fields' =&gt; 'ids',
        'orderby' =&gt; 'ID',
    ];
    $query = new WP_Query( $args );
    return $query-&gt;posts;
}
function estar_child_move_data_company( $post_id ) {
    global $wpdb;

    echo 'Migrating company ', $post_id, '<br>';

    $data = [];

    $data['ID'] = $post_id;

    $data['company_name'] = get_post_meta( $post_id, 'company_name', true );
    $data['address'] = get_post_meta( $post_id, 'address', true );
    $data['start_day'] = get_post_meta( $post_id, 'start_day', true );

    $data = array_filter( $data );
    if ( $data ) {
        $wpdb-&gt;insert( 'wp_custom_company', $data );
    }

    $meta_key_array = [
        'company_name',
        'address',
        'start_day',
    ];
    $meta_key = "'" . implode( "','", $meta_key_array ) . "'";
    $wpdb-&gt;query( $wpdb-&gt;prepare( "
        DELETE FROM wpqq_postmeta
        WHERE post_id = %d AND meta_key IN ( $meta_key )",
        $post_id
    ) );
}

```

This code queries 100 companies in each run. For each company, it gets the custom fields' data from the post meta, and then inserts them into the new custom table. After that, it removes all custom fields from the post meta table.

After adding code, go to this URL: *https://yourwebsite.com/wp-admin/?move-data-companies=1* to enable moving the custom fields' data to the custom table.

![Enable moving the custom fields' data to the custom table](https://i.imgur.com/RlNZRFS.png)

After running the script, I go to the `wp_custom_company` custom table to check. And here is the result.

![The result after running the scripts](https://i.imgur.com/5c1EPna.png)

As you can see, the custom fields' data of the **Companies** post type is now moved to the `wp_custom_company` table.

It also is deleted from the `wp_postmeta` table at the same time.

Take advantage of this special feature from Meta Box to make your site faster and more performative.
