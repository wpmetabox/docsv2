---
title: Searching posts by taxonomy on archive page - P1 - using Meta Box
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We’ll create taxonomies for a custom post type, and in the archive page of this post type, also create a search box that allows users to search for posts based on the name of the taxonomy.

Here is an example of this practice with hotels filtered by location:

![Example of seraching posts by taxonomy](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-posts-taxonomy-archive-page/filter-posts-by-taxonomy.gif)

## Video version

<LiteYouTubeEmbed id='IIVktyNygsg'/>

## Preparation

In this tutorial, we’ll create taxonomies for a custom post type and also create a search box that allows users to search for posts (like hotels) based on the name of the taxonomy (like location).

Therefore, I recommend using the free version - [Meta Box Lite](https://metabox.io/lite/). You can download it from our website directly. With just this version, you’ll already have the framework and the [MB Custom Post Type & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/) extension, which are all you need to create a custom post type for hotels and a custom taxonomy for locations.

If you're using [Meta Box AIO](https://metabox.io/aio/), you definitely already have the framework and that needed free extension.

Besides, we’ll use PHP code for searching hotels by location, so add it to your theme’s file.

Let’s start now.

## Create a New Custom Post Type and a Custom Taxonomy

As I mentioned earlier, we’ll start by creating a new custom post type named **Hotel**, and the information of each hotel will be saved as a post of that post type. Then, I’ll create a custom taxonomy for that post type to categorize the hotels based on their locations.

Now, go to **Meta Box** > **Post Types** to create a new custom post type for the hotels.

![Create a new custom post type for the hotels.](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-posts-taxonomy-archive-page/new-post-type-hotel.png)

After publishing, you’ll see the created custom post type in the menu dashboard.

![The created custom post type in the menu dashboard](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-posts-taxonomy-archive-page/created-post-type-menu.png) 

Next, still in the Meta Box screen, create a new taxonomy for location information.

![Create a new taxonomy for location information.](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-posts-taxonomy-archive-page/new-taxonomy-location.png)

In the **Advanced** tab, pay attention to this setting. It’s available when you activate the [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) extension. It’s optional, so I did not mention it before. When you check it, there’ll be a column in the dashboard to show the hotel’s location so that you can compare the results conveniently.

![Set up settings for taxonomy.](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-posts-taxonomy-archive-page/taxonomy-settings.png) 

Move to the **Post Types** tab, and choose the Hotel to assign the custom taxonomy that we’ve created to that post type.

![Assign the custom taxonomy that we’ve created to that post type.](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-posts-taxonomy-archive-page/assign-taxonomy-post-type.png) 

Now, in the post editor of the **Hotel** post type, we’ll see the taxonomy section, where we can enter the hotel location.

![We’ll see the taxonomy section in the post editor of the Hotel post type.](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-posts-taxonomy-archive-page/taxonomy-section-post-editor.png)

Just fill in all the information.

These are some created posts, for example. The location as well as the taxonomy also display in the admin dashboard.

![The location as well as the taxonomy also display in the admin dashboard.](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-posts-taxonomy-archive-page/taxonomy-admin-dashboard.png)

**Note**: I just entered a few sample locations as an example. In reality, you’ll probably have a large set of location data across multiple levels, such as countries, provinces, cities, or regions. That time, instead of adding them manually, you should import the data directly into the **Location** taxonomy to save time. You can use plugins to easily import data.

## Create a Search Box for Searching Posts by Taxonomy

Before creating a search box, we need to make sure that the archive page can already display all the posts, I mean all the hotels.

First, go to the theme folder. As I mentioned, I’m using the **Justread** theme. So, create a new PHP file, then add some code.

```
get_header();
the_archive_title( '<h1 class="page-title">', '</h1>' );
the_archive_description( '<div class="archive-description">', '</div>' );
if ( have_posts() ) :
    while ( have_posts() ) : the_post();
        get_template_part( 'template-parts/content', get_post_format() );
    endwhile;
else :
    get_template_part( 'template-parts/content', 'none' );
endif; ?>
get_footer();
```

![Create php file and add code](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-posts-taxonomy-archive-page/php-file.png)

Let’s take a look at some key parts:

```
the_archive_title( '<h1 class="page-title">', '</h1>' );
the_archive_description( '<div class="archive-description">', '</div>' );

These lines are for displaying the archive page title and its description. 

if ( have_posts() ) :
    while ( have_posts() ) : the_post();
        get_template_part( 'template-parts/content', get_post_format() );
    endwhile;
else :
    get_template_part( 'template-parts/content', 'none' );
endif; ?>
```

These lines of code check if there are any posts. If there are, it loads the corresponding template to display the post content.

Next, add some `div` tags and classes to make styling easier.

![Add some div tags and classes to make styling easier.](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-posts-taxonomy-archive-page/add-div-tags-classes.png)

After that, let’s create an archive page. Remember to set the right slug so that it will point to the correct archive of the **Hotel** post type.

![Set the right slug so that it will point to the correct archive of the Hotel post type](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-posts-taxonomy-archive-page/set-slug.png)

When you check the frontend, you only see all the hotel posts listed.

![All the hotel posts listed](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-posts-taxonomy-archive-page/hotel-posts-listing.png)

Now, come to the most important part of this step - creating a search box to filter hotels by location.

Back in the theme’s file again, add the following code to show the filter box and search button.

```
<div class="filter-hotel" style="margin-left:48px;">
    <p>Search Hotel</p>
    <input class="filter-input" id="location" type="" name="" placeholder="Location">
    <input class="filter-action" type="submit" name="" value="Search">
</div> 
```

![Add the following code to show the filter box and search button.](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-posts-taxonomy-archive-page/create-filter-box-search-button.png)

This HTML structure creates a simple filter box with a text input for location and a search button.

![A simple filter box with a text input for location and a search button.](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-posts-taxonomy-archive-page/text-input-%20location-search-%20button.gif)

Let’s make it functional in the next step.

## Display Posts that Meet the Specific Criterion

I want the page not to reload when users click the Search button, so I use Ajax to filter.

### Set Up Data and Ajax

First, go to the **functions.php** file, and add some code to set things up:

```
function justread_custom_scripts() {
    $terms = get_terms( array(
        'taxonomy'   => 'location',
        'hide_empty' => false,
    ) );
    foreach ( $terms as $term ) {
        $location[] = $term->name;
    }
    $object = [
        'ajax_url' => admin_url( 'admin-ajax.php' ),
        'location_autocomplete' => $location,
    ];

    wp_enqueue_style( 'style-jquery', '//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css', true );
    wp_enqueue_script( 'jquery-ui-library', 'https://code.jquery.com/ui/1.13.2/jquery-ui.js', array( 'jquery' ), '', true );
    wp_enqueue_script( 'justread-ajax-filter-hotel', get_stylesheet_directory_uri() . '/js/filter-hotel.js', array( 'jquery' ), '', true );
    wp_localize_script( 'justread-ajax-filter-hotel', 'ajax_object', $object );
}
add_action( 'wp_enqueue_scripts', 'justread_custom_scripts' );
```

![Add code to the function.php](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-posts-taxonomy-archive-page/add-code-function-php.png)

**Specifically**:

```
$terms = get_terms( array(
        'taxonomy'   => 'location',
        'hide_empty' => false,
) );
```

We create an array retrieving all the Location taxonomy terms.

```
foreach ( $terms as $term ) {
        $location[] = $term->name;
}
```

This helps loop through terms to get their names.

```
$object = [
        'ajax_url' => admin_url( 'admin-ajax.php' ),
        'location_autocomplete' => $location,
];
```
This part is to have an object that sends each taxonomy value to the AJAX handler for processing.

And include some necessary libraries in the theme.

```
wp_enqueue_style( 'style-jquery', '//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css', true );
wp_enqueue_script( 'jquery-ui-library', 'https://code.jquery.com/ui/1.13.2/jquery-ui.js', array( 'jquery' ), '', true );
```
Afterward, use the line below to add scripts and styles using the `justread_custom_scripts` function.

```
add_action( 'wp_enqueue_scripts', 'justread_custom_scripts' );
```
### Query Posts

Next, still in the function.php file, add more code to query the custom post type data when someone clicks the Search button.

```
function justread_filter_hotel() {
    $location = $_POST['location'];
    $query_arr = array(
        'post_type' => 'hotel',
        'post_status' => 'publish',
        'tax_query' => array(
            array(
                'taxonomy' => 'location',
                'field'    => 'name',
                'terms'    => array( $location ),
                'operator' => 'IN',
            ),
        ),
    );
    $query = new WP_Query( $query_arr );

    if ( $query->have_posts() ) :
        ob_start();
        while ( $query->have_posts() ) : $query->the_post();
            get_template_part( 'template-parts/content', get_post_format() );
        endwhile;
        $posts = ob_get_clean();
    else :
        $posts = '<h1>' . __( 'No post', 'justread' ) .'</h1>';
    endif;

    $return = array(
        'post' => $posts,
    );
    wp_send_json( $return );
}
add_action( 'wp_ajax_justread_filter_hotel', 'justread_filter_hotel' );
add_action( 'wp_ajax_nopriv_justread_filter_hotel', 'justread_filter_hotel' );
```
**Explanation**:

```
function justread_filter_hotel() {
    $location = $_POST['location'];
    $query_arr = array(
        'post_type' => 'hotel',
        'post_status' => 'publish',
        'tax_query' => array(
            array(
                'taxonomy' => 'location',
                'field'    => 'name',
                'terms'    => array( $location ),
                'operator' => 'IN',
            ),
        ),
    );
    $query = new WP_Query( $query_arr );
```
This is to query the hotel post type that matches the location name selected by the user. It uses the criteria defined in the `$query_arr` variable to retrieve the matching posts.

```
if ( $query->have_posts() ) :
        ob_start();
        while ( $query->have_posts() ) : $query->the_post();
            get_template_part( 'template-parts/content', get_post_format() );
        endwhile;
        $posts = ob_get_clean();
    else :
        $posts = '<h1>' . __( 'No post', 'justread' ) .'</h1>';
    endif;

    $return = array(
        'post' => $posts,
    );
    wp_send_json( $return );
```

This code checks if there are posts in the query. If so, it gets the content by loading the appropriate template part. If there are no posts, it shows a “No post” message.

```
add_action( 'wp_ajax_justread_filter_hotel', 'justread_filter_hotel' );
add_action( 'wp_ajax_nopriv_justread_filter_hotel', 'justread_filter_hotel' );
```

These lines allow the `justread_filter_hotel` function to respond to AJAX requests from all users, whether they are logged in or not. **In there**: `'wp_ajax_justread_filter_hotel'` and `'wp_ajax_nopriv_justread_filter_hotel'` are two hooks to perform ajax. They’re named according to the following rule: `wp_ajax_my_action` and `wp_ajax_nopriv_my_action`. In this example, `my_action` is `justread_filter_hotel`.

### Add Script for Filtering

Back to your theme’s file, add a new JS file to run the action filtering the posts. Also, add some code and go through it in more detail.

```
jQuery( function ( $ ) {
    function filterHotel() {
        var location = ajax_object.location_autocomplete;
        $( '#location' ).autocomplete({
            source: location
        });

        $( '.filter-action' ).on( 'click', function() '{
            var location = $( '#location' ).val();
            jQuery.ajax({
                url: ajax_object.ajax_url,
                type: "POST",
                data: {
                    action: 'justread_filter_hotel',
                    location: location,
                },
                success: function(response) {
                    $( '.site-main' ).html(response.post);
                }
            });
        } );
    }
    filterHotel();
} );

```

![Add a new JS file to run the action filtering the posts.](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-posts-taxonomy-archive-page/js-file.png)

**Explanation**:

```
var location = ajax_object.location_autocomplete;
```

The `location` variable gets list values ​​of taxonomies.

```
$( '#location' ).autocomplete({
      source: location
});
```
This is to display a list of associated taxonomies when entering text in the input search box.

```
$( '.filter-action' ).on( 'click', function() '{
```

This line detects when the search button is clicked on the website.

```
var location = $( '#location' ).val();
```

This is to get the text that the user types into the search box.

```
jQuery.ajax({
      url: ajax_object.ajax_url,
      type: "POST",
      data: {
            action: 'justread_filter_hotel',
            location: location,
      },
      success: function(response) {
            $( '.site-main' ).html(response.post);
       }
 });
```
This jQuery code sends a request to get data using the `justread_filter_hotel. function`, and update the main section with the results.

```
filterHotel();
```

This simply activates the function that we created before.

### Register JS File

Now, move to the **function.php** to register the JS file.

```
wp_enqueue_script( 'justread-ajax-filter-hotel', get_stylesheet_directory_uri() . '/js/filter-hotel.js', array( 'jquery' ), '', true );
wp_localize_script( 'justread-ajax-filter-hotel', 'ajax_object', $object );
```

![Register the JS file](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-posts-taxonomy-archive-page/register-js-file.png)

In there: The `wp_enqueue_scripts` hook is used to declare the file. And use the `wp_localize_script` function that helps transfer the taxonomy values from the PHP file to the JS file.

When you enter a location in the Search box, only the hotels in that location will be returned and displayed on the page.

![Filter posts by taxonomy](https://i0.wp.com/images.elightup.com/meta-box/blog/filter-posts-taxonomy-archive-page/filter-posts-by-taxonomy.gif)

In this way, you can create similar filters to search for hotels or posts by any criteria. You can apply it flexibly to create more filtering features for your website. Hope this tip is helpful for you!

If you found this helpful, you might also like these tutorials about [creating a simple listing](https://docs.metabox.io/tutorials/create-simple-listing-meta-box-bricks/), [filtering posts by custom taxonomies](https://docs.metabox.io/tutorials/filter-posts-by-custom-fields-taxonomies/).
