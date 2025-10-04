---
title: Displaying all listings on a map with Meta Box
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

If you own a chain restaurant, coffee shop, store, or even a company that has different branches in different cities, then you may want to markup all of them on a single map, and show this network on your website. Meta Box will give you an easy way to find exactly what you need!

I created a map like that.

![Listings on the map displayed at the same time](https://imgur.elightup.com/MhunFC7.png)

There are several listings on the map displayed at the same time. They are all the restaurants in a chain. Each one of them has a custom marker icon. When clicking on the marker, a popup is displayed with the restaurant name and address.

## Video Version

<LiteYouTubeEmbed id='xSHhNiiOngI' />

## Preparation

To have each restaurant displayed in each place, we should save the information about each restaurant in a post of a custom post type, and, obviously, include its location. In this practice, I use custom fields for the location.

Here are the tools that we will use in this practice:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create a custom post type for the listings and custom fields for the locations;
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the listings;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI in the back end to create custom fields easily;
* [MB Views](https://metabox.io/plugins/mb-views/) (optional): to create a page template for displaying the listings on the map. In another way, you can add code to the theme’s files instead of using this extension. You can choose one of these ways which I’m going to provide you in this practice.

You can install them individually or just use **Meta Box AIO** for all.

## 1. Creating a new custom post type

Go to **Meta Box** and create a new post type for your listings. It can be restaurants, company branches, coffee shops, or fashion stores, etc.

![Create a new post type for your listings](https://imgur.elightup.com/unBszgu.png)

After publishing, you will see a new menu displayed. It's your new post type.

![A new post type displayed on tha dashboard](https://imgur.elightup.com/uPiWu7M.png)

## 2. Creating custom fields

As mentioned, I’m going to create these three fields. Maybe you want more fields for more information, just add them as you go. But for demonstration purposes, I just use these ones.

![The fields that I created for the practice](https://imgur.elightup.com/zw0o1e3.png)

Go to **Meta Box** and create the fields.

![Go to Meta Box and create the fields](https://imgur.elightup.com/C3DcfGh.png)

Choose the **Text** field for the address.

![Choose the Text field for the address](https://imgur.elightup.com/E1HUQts.png)

I’ll use the **Open Street Maps** field for the map.

![Use the Open Street Maps field for the map](https://imgur.elightup.com/e7tguQ4.png)

I have the **Address** field above where I input the location in text. To autocomplete the address when you type some text in the **Address** field and connect it with the map, we should fill in the ID of the **Address** field into the settings of the map field.

![Fill in the ID of the Address field into the settings of the map field](https://imgur.elightup.com/WrtwGAH.png)

Then, you can type some text to the **Address** field and choose one from the suggested list, or just click on the map, drag and drop the marker to set the location. To know more about this field type, please dig in [our documentation](https://docs.metabox.io/fields/osm/) for more detail.

For the marker icon, I choose a URL field to save the icon link.

After creating all the fields, move to the **Settings** tab. Remember to choose the **Location** as **Post type** and select **Restaurant** to apply these fields to it.

![Choose the Location as Post type and select Restaurant to apply these fields](https://imgur.elightup.com/oKerr3F.png)

Go to the post editor, you will see the created custom fields.

![The created custom fields](https://imgur.elightup.com/oQWGAQO.png)

## 3. Displaying the map and listings

I’m going to have a page for the map only. In your case, you might want to add some content to the page, but I’ll skip it to keep this practice simple.

![Create a new page](https://imgur.elightup.com/rYfIyph.png)

I’ll create a template for the page using both two ways:
1.** Adding code to the theme’s files**: you should add some files to the theme’s folder as well as add code to several different files.
2. **Using the MB Views extension of Meta Box**: just work on a place only for all. Besides that, the template will not be affected when you change the theme.

You should experiment yourself to find which makes sense to you.

### 3.1. Method 1: adding PHP code to the theme

#### 3.1.1. Adding files

Go to your theme folder, and add a new **PHP file** for the page template. You can name it another way as you want.

![Add a new PHP file for the page template](https://imgur.elightup.com/c3mZqA7.png)

We’ll use some **JavaScript** for the map, so go to the **JS** folder, and add a new file.

![Go to the JS folder](https://imgur.elightup.com/gsaNrRV.png)

![Add a new file](https://imgur.elightup.com/xSyJPwk.png)

#### 3.1.2. Adding template

Now, go to the created **PHP file** and add some code.

```
<?php
/**
* Template Name: Listing on a map
*/
get_header();
?>
<div id="map_ID" style="width: 100%; height: 600px"></div>
<?php get_footer(); ?>
```

![Go to the created PHP file and add some code](https://imgur.elightup.com/BSl30XI.png)

**In there:**

` get_header(); and <?php get_footer(); ?> ` are to load the header and footer just like any other pages in your theme.

![This codes is to load the header and footer just like any other pages in your theme](https://imgur.elightup.com/UWcoXrL.png)

` <div id="map" style="width: 100%; height: 600px"></div> ` is the main content area of the page, it simply shows a **Div** with a specific width and height. The **Div** will be used to display the map via this HTML ID: ` id="map" `.

![Show a Div with a specific width and height](https://imgur.elightup.com/0xt1lEV.png)

Now, go to the created page. Choose the template that we have just created.

![Choose the template that we have just created](https://imgur.elightup.com/lqkD0R9.png)

#### 3.1.3. Getting Data

Next, to regulate which content will be displayed on the page, go to add code to the functions.php file.

![Go to add code to the functions.php file](https://imgur.elightup.com/KaEyIav.png)

```
add_action( 'wp_enqueue_scripts', function() {
    if ( is_page_template( 'tbl-listings-map.php' ) ) {
        wp_enqueue_style( 'leaflet', 'https://unpkg.com/leaflet@1.5.1/dist/leaflet.css', [], '1.5.1' );
        wp_enqueue_script( 'leaflet', 'https://unpkg.com/leaflet@1.5.1/dist/leaflet.js', [], '1.5.1', true );

        wp_enqueue_script( 'list', get_parent_theme_file_uri( 'js/list.js' ), ['jquery', 'leaflet'], '1.0', true );

        $locations = [];
        $query = new WP_Query( [
            'post_type' => 'restaurant',
        ] );
        foreach ( $query->posts as $post ) {
            $location            = rwmb_get_value( 'location', '', $post->ID );
            $location['title']   = $post->post_title;
            $location['address'] = rwmb_get_value( 'address', '', $post->ID );
            $location['icon']    = rwmb_get_value( 'icon_url', '', $post->ID );
            $locations[]         = $location;
        }
        wp_localize_script( 'list', 'Locations', $locations );
    }
} );
```

![Add code to the functions.php file](https://imgur.elightup.com/epznESR.png)

**In there:**

` if ( is_page_template( 'tbl-listings-map.php' ) ) { ` is to check if the current page is using the created template, the below lines of code will be applied.

![Check if the current page is using the created template, the below lines of code will be applied](https://imgur.elightup.com/WJcrHjp.png)

` 'tbl-listings-map.php' ` is the name of the **PHP** file that I have just created, you should replace it with your own.

![The name of the PHP file that I have just created](https://imgur.elightup.com/k8y8UsX.png)

```
wp_enqueue_style( 'leaflet', 'https://unpkg.com/leaflet@1.5.1/dist/leaflet.css', [], '1.5.1' );
wp_enqueue_script( 'leaflet', 'https://unpkg.com/leaflet@1.5.1/dist/leaflet.js', [], '1.5.1', true );
```

I’m going to use the **Leaflet library** for **CSS** and **JS** to have the map with a beautiful look. So those lines are to enqueue the libraries.

![Those lines are to enqueue the libraries](https://imgur.elightup.com/k5Aq4ci.png)

```
wp_enqueue_script( 'list', get_parent_theme_file_uri( 'js/list.js' ), ['jquery', 'leaflet'], '1.0', true );
```

This is to enqueue the created file in the **JS** folder.

![Enqueue the created file in the JS folder](https://imgur.elightup.com/1nbh4Ax.png)

I created an array to store all the data about the locations.

![The array to store all the data about the locations](https://imgur.elightup.com/Pm0uV7v.png)

```
        $query = new WP_Query( [
            'post_type' => 'restaurant',
        ] );
```

This line of code is the query to get data from the wanted post type. And, ` restaurant ` is the **ID** of the post type of the restaurants that I’m using.

![The query to get data from the wanted post type](https://imgur.elightup.com/fjdhgrg.png)

There will be multiple posts since there are multiple locations, so we have a loop.

![We have a loop](https://imgur.elightup.com/OrLMlOe.png)

Inside the loop, these are the associative arrays to get data of each element of the location.

![The associative arrays to get data of each element of the location](https://imgur.elightup.com/wrqWrhl.png)

We use the ` rwmb_get_value ` function to get data from the custom fields. ` 'location' `, ` 'address' `, and ` 'icon_url' ` are the **ID** of the fields.

![The function to get data from the custom fields](https://imgur.elightup.com/kUsqDXG.png)

` rwmb_get_value('location','',post->ID) ` will return values from the **Location** field which is the **Open Street Map**. They include both the latitude and longitude.

![This codes will return values from the Location field which is the Open Street Map](https://imgur.elightup.com/k29zyvE.png)

` $post->post_title; ` is to get the title of the post, it’s also the restaurant name.

![Get the title of the post, it’s also the restaurant name](https://imgur.elightup.com/ieixc7S.png)

` rwmb_get_value( 'address', '', $post->ID ); ` is to get the address in text from the **Address** field.

![Get the address in text from the Address field](https://imgur.elightup.com/RrMLteq.png)

` rwmb_get_value( 'icon_url', '', $post->ID ); ` is to get the icon for the marker.

![Get the icon for the marker](https://imgur.elightup.com/ul7VgZN.png)

All of that data will be transferred to the created array by this: ` $locations[] = $location; `

` wp_localize_script( 'list', 'Locations', $locations ); ` is to pass the values from the ` $locations ` array to a **JavaScript Object** that has named **Locations**.

![Pass the values from the $locations array to a JavaScript Object that has named Locations](https://imgur.elightup.com/yynyvIp.png)

We’ll use this object in the created **JS** file to display all the locations on the map.

#### 3.1.4. Displaying data using JavaScript

We just got the data so far and haven't displayed them yet.

To do it, go to the created **JS** file to add code.

```
( function ( document, Locations, L ) {

      // Set the first location.
      var First_Location_Point = L.latLng( Locations[ 0 ].latitude, Locations[ 0 ].longitude );

      // Map options.
      var map_options = {
            center: First_Location_Point,
            zoom: 13
      };

      // Initialize the map.
      var mapObject = L.map( document.querySelector( '#map_ID' ), map_options );

       // Set tile layer for Open Street Map.
    var tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
      mapObject.addLayer( tileLayer );

      // // Show marker for each location.
      Locations.forEach( function ( location_on_map ) {
            // Marker options.
            var marker_options = {
                  title: location_on_map.title,
                  icon: L.icon( {
                        iconUrl: location_on_map.icon
                  } )
            };
            var Location_Point = L.latLng( location_on_map.latitude, location_on_map.longitude );
            var marker = L.marker( Location_Point, marker_options ).addTo( mapObject );

            // Show name of the restaurant when click on the icon.
            marker.bindPopup( '<b>' + location_on_map.title + '</b><br>' + location_on_map.address ).openPopup();
      } );

} )( document, Locations, L );
```

![Go to the created JS file to add code](https://imgur.elightup.com/DmbNTMW.png)

` ( function ( document, Locations, L ) { ` is to get data from the created **JavaScript** object.

![Get data from the created JavaScript object](https://imgur.elightup.com/HMBo5hj.png)

When someone goes to the page and looks at the map for the first time, the map should be fixed at a specific point. So, I created a point via this line:

```
var First_Location_Point = L.latLng( Locations[ 0 ].latitude, Locations[ 0 ].longitude );
```

This point will be regulated based on the first set of values in the stored value string.

![This point will be regulated based on the first set of values in the stored value string](https://imgur.elightup.com/rgn5cGG.png)

This part is to set the options for the map.

![Set the options for the map](https://imgur.elightup.com/4sWiOkw.png)

The center point of the map shows for the first time when a user looks at it will be set as the first location.

![Show for the first time when a user looks at it will be set as the first location](https://imgur.elightup.com/FabFBAR.png)

```
var mapObject = L.map( document.querySelector( '#map_ID' ), options );
```

This is to initialize the map. It also means to display the map. The map will be displayed in the place where this **HTML ID** was set. We did it in the php file for the page template.

![Initialize the map](https://imgur.elightup.com/ztpnYrY.png)

The map will have settings as the options as we set.

![The map will have settings as the options as we set](https://imgur.elightup.com/d8q7cam.png)

This part is to set a tile layer, and copyright for the map.

![Set a tile layer, and copyright for the map](https://imgur.elightup.com/D7bJdGh.png)

The next part is the main one of this practice to show all the markers on the map at the same time.

![The main one of this practice to show all the markers on the map at the same time](https://imgur.elightup.com/BVrT2jr.png)

```
Locations.forEach( function ( location_on_map ) { } );
```

This is a loop to get all the data from this object.

![A loop to get all the data from this object](https://imgur.elightup.com/JdjwiwJ.png)

I created two variables to store the data about each location.

![I created two variables to store the data about each location](https://imgur.elightup.com/YhBPn8R.png)

Then transfer all of them to the ` mapObject ` variable. This variable is the one we use to initialize the map above. It also means that we finished adding markers to the map.

![Transfer all of them to the mapObject variable](https://imgur.elightup.com/EuLRuUK.png)

To have a popup to show the detailed information of each marker when clicking on each one,  I have this:

```
marker.bindPopup( '<b>' + location_on_map.title + '</b><br>' + location_on_map.address ).openPopup();
```

![A popup to show the detailed information of each marker when clicking on each one](https://imgur.elightup.com/DIpKWsH.png)

Now, go to the page on the frontend. If nothing goes wrong, here's what you'll see.

![Listings on a map page](https://imgur.elightup.com/G67g126.png)

For each marker, display a popup when click on the icon of each restaurant. The popup will show the title and address of the restaurant in detail.

In the case that you don’t want to touch the theme files, let’s go ahead to see another way with **MB Views**.

### 3.2. Method 2: Using MB Views

Go to **Views** in **Meta Box** and create a new template.

![Go to Views in Meta Box and create a new template](https://imgur.elightup.com/gjQkCn8.png)

#### 3.2.1 Adding template

I’m going to add code to the **Template** tab. The code will be quite the same as what we added in both php files in the first method.

```
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css" />

<div id="map" style="width: 100%; height: 600px"></div>

{% set args = { post_type: 'restaurant' } %}
{% set posts = mb.get_posts( args ) %}
{% set restaurantsArray = [] %}
{% for post in posts %}
	{% set restaurantsArray = restaurantsArray|merge(
      [
         {
            'longitude':
            'latitude':
            'address':
            'title':
            'icon':
         }
      ] ) %}
{% endfor %}

<div class="restaurants-list" data-items='{{restaurantsArray|json_encode()}}'></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.slim.min.js"></script>
<script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"></script>
```

![Add code to the Template tab](https://imgur.elightup.com/mJ0Xwqa.png)

You can see that there is not much difference in code between the two methods.

` <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css" /> ` is to register the **Leaflet CSS Library**.

![Register the Leaflet CSS Library](https://imgur.elightup.com/3JF24tS.png)

` <div id="map" style="width: 100%; height: 600px"></div> ` is to display the map. We also use **JavaScript** later and use ` id='map_ID' ` of the map.

![Display the map](https://imgur.elightup.com/4A3325i.png)

We have ` {% set args = { post_type: 'restaurant' } %} ` to query data from the restaurant post type.

![Query data from the restaurant post type](https://imgur.elightup.com/ttyedFH.png)

We use the ` mb.get_posts( args  ) ` function to get posts.

![The function to get posts](https://imgur.elightup.com/lkg3IIR.png)

I’m also creating a new empty array to get data about the location from each post. You can name the array as any name as you want.

![Create a new empty array to get data about the location from each post](https://imgur.elightup.com/q16OKVQ.png)

And then, have a loop to get data from all the posts, and assign them to the array using this:
` {% set restaurantsArray = restaurantsArray|merge( `.

![Have a loop to get data from all the posts, and assign them to the array](https://imgur.elightup.com/UlNApuR.png)

These are the keys of the data we’re getting from posts. They are saved in some fields of the post, so we will insert a corresponding field for each one of them.

![Insert a corresponding field for each one of them](https://imgur.elightup.com/qXCseqe.png)

Click on the **Insert Field** button, and choose a field from the list.

![Click on the Insert Field button, and choose a field from the list](https://imgur.elightup.com/ad6z4aG.png)

The longitude is the data saved in the **Open Street Map** field. It is named **Location**, so choose it.

![he longitude is the data saved in the Open Street Map field. It is named Location](https://imgur.elightup.com/1n159rT.png)

There will be some options of the map for the output data, just choose **Longitude**.

![Choose Longitude](https://imgur.elightup.com/cQ9DDp7.png)

After removing the curly braces, the generated code will be like this.

![After removing the curly braces, the generated code will be like this](https://imgur.elightup.com/F8VxbRZ.png)

Do likewise for the latitude. Remember that these data are compulsory to locate a position on the map.

![Insert the latitude data](https://imgur.elightup.com/XgIHp2G.png)

Next, insert the **Address** fields.

![Insert the Address fields](https://imgur.elightup.com/5yioppB.png)

Add the **Post title**.

![Add the Post title](https://imgur.elightup.com/ywI9PVc.png)

And, we also have a field for marker icons.

![We also have a field for marker icons](https://imgur.elightup.com/5CHkij6.png)

In the first method, **WordPress** has the ` wp_localize_script) ` function to convert data from **PHP** to **JavaScript**. But with **MB Views**, we do not use it. Instead of that, we use the ` class="restaurants-list" ` **HTML** class and transfer all the values from the `restaurantsArray` array to this class.

![We use the class="restaurants-list" HTML class and transfer all the values from the restaurantsArray array to this class](https://imgur.elightup.com/UA0lYjs.png)

This line of code is to declare the **Leaflet JavaScript library**.

![This line of code is to declare the Leaflet JavaScript library](https://imgur.elightup.com/1nt1Vio.png)

That’s all for the template.

#### 3.2.2. Adding JavaScript

Still in the view, move to the **JavaScript** tab, and use the code that we use in the **JS** file in the first way.

![Use the code that we use in the JS file in the first way](https://imgur.elightup.com/ivDGVdm.png)

There will be a difference in the first part since we use **HTML** class to store data:

```
(function (document, L) {

      const Locations = $('.restaurants-list').data('items')

})(document, L);
```

![Use HTML class to store data](https://imgur.elightup.com/1NXCBya.png)

All the following lines of code are exactly the same with the script we use in the JS file in the first method. So, I’ll not dig into them anymore.

#### 3.2.3. Applying template to the page

Go to the **Settings** section of the view, and set the type as **Singular**.

![Go to the Settings section of the view, and set the type as Singular](https://imgur.elightup.com/SAPcQFG.png)

Then add a rule to set the location as the created page.

![Add a rule to set the location as the created page](https://imgur.elightup.com/CDaEFRQ.png)

Go to the page, the map and all the markers also displayed.

![The map and all the markers also displayed](https://imgur.elightup.com/2CFxh2z.png)


