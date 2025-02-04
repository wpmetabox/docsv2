---
title: Getting posts by custom fields’ values
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In this article, I will get posts in two ways. One is using the `WP_Query` to get the post. The second one is joining the `wp_posts` and `wp_postmeta` tables together and then querying by SQL, which will be more convenient when we have to deal with databases. Let’s see how to do it in both ways.

## Video version

<LiteYouTubeEmbed id='_fg63TxLZeE' />

## Preparation

In addition to using [Meta Box](https://metabox.io/), make sure you already have these extensions:

* [MB Builder](https://metabox.io/plugins/meta-box-builder/): It has a UI for creating custom fields right on the back end.
* [MB Admin Column](https://metabox.io/plugins/mb-admin-columns/): (optional) It helps you to manage and organize posts by custom fields in the admin dashboard.

## Creating custom fields

Go to **Meta Box > Custom Fields** and click **Add New**.

![Create custom fields](https://i.imgur.com/2t37zEE.png)

In this section, I will create two fields for each method. One is the **Price** field which I will use for method 1. And, the other field to use for method 2 will be the **Type** field.

![Create 2 fields for each method](https://i.imgur.com/sSQ9y93.png)

## Method 1: Get posts using WP_Query

To know more about the parameters of which the constructor method WP_Query accepts, please read [here](https://developer.wordpress.org/reference/classes/wp_query/).

### 1. Creating a search section

Create a page template and use a `WP_Query` to query posts and display them as the search result. Besides, you have the total right to control the query as well as the returns. In the folder `page-templates` of your theme, create a file called `advanced-search.php` in the folder with the below content:

```php
<?php
/**
 * Template Name: Advanced Search
 */
```
Go to **Pages > Add New** and create an **Advanced Search** page then assign the created template to it as shown in the following image:

![Create Advanced Search](https://i.imgur.com/jK6wSJ3.png)

Now, we display the search form in the page template and edit the code of that page as below:

```php
<?php
/**
 * Template Name: Advanced Search
 */

get_header(); ?>

    <div class="wrap">
        <div id="primary" class="content-area">
            <main id="main" class="site-main" role="main">
                <form class="advanced-search-form">
                    <div class="form-group">
                        <label>Min Price</label>
                        <input type="number" name="min-price">
                    </div>
                    <div class="form-group">
                        <label>Max Price</label>
                        <input type="number" name="max-price">
                    </div>
                    <div class="form-group">
                        <input type="submit" value="Search">
                    </div>
                </form>
            </main><! – #main – >
        </div><! – #primary – >
    </div><! – .wrap – >
<?php get_footer();
```
These lines of code create two input fields, the Min Price and Max Price, which allow users to fill in some values for searching.

When you refresh the page, the search form will appear with minimum and maximum price fields, as shown below:

![The search form will appear with minimum and maximum price fields](https://i.imgur.com/F2wEqcf.png)

### 2. Creating a search function

Now, use the following code to get the values of the minimum and maximum prices which are input to the above fields on the frontend:
```php
<?php
$min_price = $_GET['min_price'] ?: '';
$max_price = $_GET['max_price'] ?: '';
```
Explanation:

`$min_price = $_GET['min_price'] ?: ''; $max_price = $_GET['max_price'] ?: '';`: Declare variables `$min_price` and `$max_price` to get the price from field `min_price` and `max_price`

Then, go back to edit the created template, edit the fields in the form as below:

Field min_price:

```
<input type="number" name="min_price" value="<?php echo esc_attr( $min_price ); ?>">
```

Field max_price:
```
<input type="number" name="max_price" value="<?php echo esc_attr( $max_price ); ?>">
```

After that, to display the search result, add the following code to the `advanced-search.php` file:

```php
<?php if ( $min_price || $max_price ): ?>
    <div class="search-result">
        <?php
        $args = [
            'posts_per_page' => - 1,
            'meta_query' => []
        ];
        if ( $min_price ) {
            $args['meta_query'][] = [
                'key' => 'hcf_price',
                'value' => $min_price,
                'compare' => '>=',
                'type' => 'NUMERIC'
            ];
        }
        if ( $max_price ) {
            $args['meta_query'][] = [
                'key' => 'hcf_price',
                'value' => $max_price,
                'compare' => '<=',
                'type' => 'NUMERIC'
            ];
        }
        $search_query = new WP_Query( $args );
        if ( $search_query->have_posts() ):
            while ( $search_query->have_posts() ) {
                $search_query->the_post();
                get_template_part( 'template-parts/post/content', 'excerpt' );
            }
            wp_reset_postdata();
            ?>in the above code
        <?php else: ?>
            <p>No result found.</p>
        <?php endif; ?>
    </div>
<?php endif; ?>
```
Explanation:

* `<?php if ( $min_price || $max_price ): ?>`: This code checks to see if both variables `min_price` and `max_price` exist.

* `if ( $min_price ) { $args['meta_query'][] = ['key' => 'hcf_price', 'value' => $min_price, 'compare' => '>=', 'type' => 'NUMERIC'];}`: This code returns posts whose fields value is greater than or equal to the value entered for `$min_price`. In there, `'hcf_price'` is the ID of the Price field.

* `if ( $max_price ) { $args['meta_query'][] = [ 'key' => 'hcf_price', 'value' => $max_price 'compare' => '<=', 'type' => 'NUMERIC' ];}`: This code returns posts with values less than or equal to the value of `$max_price`.

* `$search_query = new WP_Query( $args );`: `$search_query` variable to initialize the `WP_Query `class with `$args` as the passed parameter.

* `if ( $search_query->have_posts() ): while ( $search_query->have_posts() ) { $search_query->the_post(); get_template_part( 'template-parts/post/content', 'excerpt' ); } wp_reset_postdata(); ?>in the above code <?php else: ?> <p>No result found.</p> <?php endif; ?> </div> <?php endif; ?>`: create a loop to get posts that match the conditions specified above

In the case that the Price field is used for a custom post type, you should declare the post type in the `$args` variable like this:

```php
$args = [
    'post_type' => 'post_type_slug',
    'posts_per_page' => - 1,
    'meta_query' => []
];
```
:::caution

There is a part about building parameters for the `$args` query based on the values of the min price and max price. We use a comparison function <=, >= to ensure that the price of products is within the selected pricing range.

:::

Here is the result when someone clicks the Search button. It displays only the products with prices from 1 to 300.

![How it displays](https://i.imgur.com/Qa17B8U.png)

Furthermore, in addition to the = and >= operators, there are many other comparison conditions, such as =, !=, and IN. You can combine them with custom fields to build more complex queries. For example, finding products that have a green color, a production year >= 2012, etc. See more about these conditions [here](https://developer.wordpress.org/reference/classes/wp_query/#custom-field-post-meta-parameters).

The complete code for the file `advanced-search.php` can be found [here](https://developer.wordpress.org/reference/classes/wp_query/#custom-field-post-meta-parameters).

## Method 2: Get posts using wp_postmeta

When you install the [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) extension of Meta Box, you’ll see the fields’ values displayed in the admin dashboard like this.

![The fields' values display in the admin dashboard](https://i.imgur.com/FR2zPy9.png)

Now, I will proceed to search for posts by these values.

### 1. Join the `wp_posts` and `wp_postmeta` tables

WordPress only supports searching for keywords in the titles and content of posts and pages. To search for posts by keywords in the posts / pages titles and custom field values, you need to understand how the WordPress search feature works first.

By default, WordPress only allows searching by keywords on the `wp_posts` table in the database. Meanwhile, the `wp_postmeta` table stores additional data like custom fields’ values.

Thus, to search by custom field values, we need to JOIN `wp_posts` and `wp_postmeta` tables together. This work can be done by adding this code to the `functions.php` file:

```php
function justread_search_join( $join ) {
    global $wpdb;

    if ( is_search() ) {
        $join .=' LEFT JOIN '.$wpdb->postmeta. ' ON '. $wpdb->posts . '.ID = ' . $wpdb->postmeta . '.post_id ';
    }

    return $join;
}
add_filter( 'posts_join', 'justread_search_join' );
```
:::info

justread is the theme I’m using (you can download this free WordPress theme [here](https://wordpress.org/themes/justread/).

:::

### 2. Creating the query for search

Next, you have to edit the query to search for posts by custom field values. To do it, add the following code to the `functions.php` file:

```php
function justread_search_where( $where ) {
    global $pagenow, $wpdb;

    if ( is_search() ) {
        $where = preg_replace(
            "/\(\s*".$wpdb->posts.".post_title\s+LIKE\s*(\'[^\']+\')\s*\)/",
            "(".$wpdb->posts.".post_title LIKE $1) OR (".$wpdb->postmeta.".meta_value LIKE $1)", $where );
    }

    return $where;
}
add_filter( 'posts_where', 'justread_search_where' );
```
### 3. Allowing searching by keyword with spacing

You can now search by using the values of custom fields. However, to allow searching by the keyword having the spacing between text or not, you can add the following code to the `functions.php` file:
```php
function justread_search_distinct( $where ) {
    global $wpdb;

    if ( is_search() ) {
        return "DISTINCT";
    }

    return $where;
}
add_filter( 'posts_distinct', 'justread_search_distinct' );
```
Now, the new feature to search by custom field values is complete. Try to use the keyword "breakfast" to see if this search would be effective or not.

There are two separate posts in the search results that have the term "breakfast" in the **Type** custom field, except for one post with the phrase in its title (Lite breakfast with bread). It indicates that the advanced searching function was effective.

![2 separate posts in the search results](https://i.imgur.com/shSvlBJ.png)


