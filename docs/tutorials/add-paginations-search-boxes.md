---
title: Adding paginations & searching box to custom fields
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Rendering all the pre-made data of a custom field at once on the screen in the backend can cause the post or page editor to look very confusing. Adding pagination to separate those values into pages, and also providing a search box to search any value right in the field will come in handy.

Here is an example.

![An example of adding Paginations & Searching Box to Custom Fields](https://imgur.elightup.com/vTHuU2Z.png)

The fields include various images that you can choose from. Instead of showing all of them on this screen, I use this pagination and a search box to find a reasonable one easier.

## Video version

<LiteYouTubeEmbed id='nmTzTP8sILs' />

## Preparation

In this post, we will focus on pagination and we'll build a search box that allows users to look up any value in the field.

To get started, we need some tools:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/) to have a framework to create custom fields;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/) to have the UI, you can install this extension individually, or use **Meta Box AIO** to enable it.

## 1. Creating custom fields

I will create two fields. One is to show some image options to choose from. The other field allows adding text to search any image that is in the below field.

![The custom fields that I created](https://imgur.elightup.com/zd3m391.png)

Go to **Meta Box**, and add fields as usual.

![Go to Meta Box, and add fields](https://imgur.elightup.com/wwncaF0.png)

The **Search box** should be a **Text** field that allows typing characters inside.

![Choose a Text field for the Search box](https://imgur.elightup.com/LjQXoEc.png)

Move to the **Advanced** tab, and add a class for this field since we will use **JavaScript** later to add the search feature to this field.

![Add a class for the field](https://imgur.elightup.com/zPxbb7E.png)

The next field is to provide some images. So I’ll add it as an **Image Select** field.

![Insert an Image Select field](https://imgur.elightup.com/XXHPoEY.png)

In the **Choices box** of this field’s settings, add some images.

![In the Choices box of this field’s settings, add some images.](https://imgur.elightup.com/AiPDU1Y.png)

This is the **URL** of the image.

![The URL of the image](https://imgur.elightup.com/QVAW1lN.png)

This is the name of the image that you set on your own. The name will be the value saved in the custom field.

![The name of the image that you set on your own](https://imgur.elightup.com/iEdr8gV.png)

In the **Advanced** settings section of this field, I add a **Text** to display after the field. It is to list the pagination numbers later which are regulated by a class named '**pagination**'.

![Add a Text to display after the field](https://imgur.elightup.com/A6I1BPt.png)

After creating all the fields, move to the **Settings** tab, choose **Location** as **Post type**, and select a post type to which you want to assign these fields to.

![Move to the Settings tab, choose Location as Post type, and select a post type to which you want to assign these fields to](https://imgur.elightup.com/7ptLtuh.png)

Then, go to the post editor, you will see the fields displayed. All the images in the field are displayed without any pagination since we haven’t created them. The Search box also hasn’t worked yet.

![All the images in the field are displayed without any pagination](https://imgur.elightup.com/JhjOoaN.png)

## 2. Adding functions to the fields

We should add code to the theme’s files to add some functions for the fields. They help to create the pagination and search features.

Go to the **functions.php** file, and add some lines of code.

```
function estar_add_list_js_library() {
    wp_enqueue_script( 'listjs', '//cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js' );
    wp_enqueue_script( 'estar-custom-scripts', get_stylesheet_directory_uri() . '/js/scripts.js' );
}
add_filter( 'rwmb_enqueue_scripts', 'estar_add_list_js_library' );

add_action('admin_head', 'my_custom_css');
function my_custom_css() {
  echo '<style>
        .pagination li {
            display:inline-block;
            padding:5px;
        }
    <   /style>';
}
```

First, since I will use **JS**, I declared the **JS** online library that I will use in these lines as well as a new file to add code:

```
function estar_add_list_js_library() {
    wp_enqueue_script( 'listjs', '//cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js' );
    wp_enqueue_script( 'estar-custom-scripts', get_stylesheet_directory_uri() . '/js/scripts.js' );
}
add_filter( 'rwmb_enqueue_scripts', 'estar_add_list_js_library' );
```

![Add some codes to declare the JS online library](https://imgur.elightup.com/WAiUtMP.png)

**estar** is the theme that I’m using for my website (you can download [this theme](https://gretathemes.com/wordpress-themes/estar/) here for free).

![The theme that I’m using for my website](https://imgur.elightup.com/EmaTEUP.png)

These lines of code are used to display the pagination and stipulate its style. But we haven’t created it yet.

![These lines of code are used to display the pagination and stipulate its style](https://imgur.elightup.com/tEl1E1Z.png)

Then, go to the created **JS file**. Add the git.

```
jQuery( function( $ ) {
    $( document ).ready( function() {
        var options = {
            valueNames: [
                { attr: 'value', name: 'rwmb-image_select' }
            ],
            pagination: true,
            page: 3,
        };
        var featureList = new List( 'background-for-post', options );
    } );

    $( '#background-for-post .rwmb-image_select-wrapper' ).find( '.rwmb-input' ).addClass( 'list' );
} );
```

![Go to the created JS file and add the git](https://imgur.elightup.com/1hfPUyb.png)

These are to create the pagination.

![These are to create the pagination](https://imgur.elightup.com/MNIuP89.png)

In this example, I divided the options in the Image Select field into 3 pages. ` rwmb-image_select ` also regulated that the pagination is used for the field that is in the type as **Image Select** only.

![The code regulated that the pagination is used for the field that is in the type as Image Select only](https://imgur.elightup.com/X5t0da6.png)

And, the function ` var featureList = new List( 'background-for-post', options ); ` handles the search function for the field that you’ve created above. In there, ` background-for-post ` is the **ID** of the field group I’ve created.

![The function handles the search function for the field that you’ve created above](https://imgur.elightup.com/CMH1E2S.png)

Now, back to the post editor, you'll see the paginations as page numbers 1, 2, and 3. Click on each page, you will see different images. Also, the search box worked well.

![The paginations as page numbers 1, 2, and 3. Also, the search box worked well.](https://imgur.elightup.com/BBBYsKg.gif)

We’ve just finished this practice.
