---
title: Searching posts by taxonomy on archive page
---

We’ll create taxonomies for a custom post type, and in the archive page of this post type, also create a search box that allows users to search for posts based on the name of the taxonomy.

Here is an example of this practice with hotels filtered by location:

![Example of seraching posts by taxonomy](https://imgur.com/V5kT58q.png)

## Before Getting Starte

In addition to using the **Meta Box Core Plugin**, ensure you already have the **[MB Custom Post Type](https://metabox.io/plugins/custom-post-type/)**. It is a free extension of Meta Box and is used to create custom post types and custom taxonomies.

Besides, I also use a free theme as a demo. It’s [Justread](https://gretathemes.com/wordpress-themes/justread/).

## Step 1: Create a new custom post type and custom taxonomy

Go to **Meta Box** > **Post Types** > **New Post Type**.

![Create a new custom post type and custom taxonomy](https://i.imgur.com/DTRAKX9.png)

To create a taxonomy for location information, go to **Meta Box** > **Taxonomies** > **Add New**. 

Remember to choose **Hotel** in the **Assign to Post Types** section for the custom taxonomy information entry. It will assign the custom taxonomy we create to the **Hotel** post type.

![Choose Hotel in the Assign to Post Types section](https://i.imgur.com/ok1Ohaw.png)

![Chooose Hotel custom field](https://i.imgur.com/MJU8sSO.png)

Now, the **Hotel** post type will appear on the admin menu. Let’s go there and enter the information for a few hotels and locations.

![The Hotel menu appears on the admin menu](https://i.imgur.com/EJuGul8.png)

:::info

In this article, I just enter a few locations as an example. In fact, you may have a large number of locations which are on many levels such as countries, provinces, cities, regions, … That time, you need to import that data to the Location taxonomy. 

:::

You can also use [plugins](https://wordpress.org/search/import+taxonomy+data/) to import data easily. 

![You can choose more locations as you want](https://i.imgur.com/gXsuBCc.png)

## Step 2: Create the search box

First, go to the **Hotel** post type’s archive page (http://domain.com/post-type-name).

At this moment, there’s no hotel search box on the page. So, I will add a location box.

Create a file named `archive-hotel.php` (the file name is in the form of archive- [post-type-name].php) in the theme folder and add this code:

```
<div class="filter-hotel">
<p>Search Hotel</p>
    <input class="filter-input" id="location" type="" name="" placeholder="Location">
    <input class="filter-action" type="submit" name="" value="Search">
</div>
```

Then, you will see the search box as follows:

![Search box appears as following](https://i.imgur.com/Bzwysn3.png)

## Step 3: Display hotels that meet the criterion

Let’s use ajax to filter so people can click the **Search** button without reloading the website.

Add the following code to the `functions.php` file: 

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

    wp_enqueue_script( 'justread-ajax-filter-hotel', get_stylesheet_directory_uri() . '/js/filter-hotel.js', array( 'jquery' ), '', true );
    wp_localize_script( 'justread-ajax-filter-hotel', 'ajax_object', $object );
}
add_action( 'wp_enqueue_scripts', 'justread_custom_scripts' );
```

Explanation: 

* `'wp_enqueue_scripts'`: it’s the hook used to declare the filter-hotel.js file that I‘ll create later;
* `wp_localize_script ()`: a function that helps transfer the value of the variable 'ajax_url' from the functions.php file to the filter-hotel.js file.
 
Next, add the following code to functions.php to return the custom post type data as JSON when someone clicks the **Search** button.

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

Explanation:

* `'hotel'`: the slug of the custom post type that we created in step 1;
* `'location'`: the ID of the custom taxonomy that we created in step 1 for the location;
* `'wp_ajax_justread_filter_hotel' and 'wp_ajax_nopriv_justread_filter_hotel`': they’re two hooks to perform ajax. They’re named according to the following rules: wp_ajax_my_action and wp_ajax_nopriv_my_action. In this example, my_action is justread_filter_hotel.

Also, in the theme folder, let’s create another file named filter-hotel.js with the following content: 
```
jQuery( function ( $ ) {
    function filterHotel() {
        var location = ajax_object.location_autocomplete;
        $( '#location' ).autocomplete({
            source: location
        });

        $( '.filter-action' ).on( 'click', function() {
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

I’ve used the jQuery autocomplete library in the above code to propose similar destinations when a user types in the search box.

![Propose simimar destinations](https://i.imgur.com/pL9j2si.png)

This JS file helps get location data when a user clicks on the **Search** button, then passes it to the functions.php file to retrieve **Hotel** post-type data. When `functions.php` returns the data, the js file will display it (thanks to the $ `('.site-main') .html (response.post)`; code).

Now, entering a location in the **Search** box returns only hotels in that area.

