---
title: Changing the RSS content using custom fields
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

This article will show you how to **get information from a custom field created by Meta Box**, then **include them into the** [RSS feed](https://gretathemes.com/rss-feed-applications-wordpress/). Now, let’s do it.

## Video version

<LiteYouTubeEmbed id='PJR2Unkz4WE'/>

## Preparation

First, you might have some custom fields with content on your site. As well as, you might have [the Meta Box plugin](https://wordpress.org/plugins/meta-box/) to have a framework to create them.

Besides, in this tutorial, we’ll use the [MB Builder](https://metabox.io/plugins/meta-box-builder/) extension (premium) to have an intuitive UI in the backend to create the fields visually. However, you can also add code or use the [Online Generator](https://metabox.io/online-generator/) tool (free) from Meta Box to create fields.

## 1. Creating custom fields

Feel free to create custom fields for saving any information for your post. If you have had them, move on to the next step. Otherwise, if not yet, just go to **Meta Box** > **Custom Fields** and create them.

![Go to Meta Box > Custom Fields and create fields.](https://imgur.elightup.com/FRD5WT0.png)

Here are some fields I created as an example.

![A simple subscription formSome created fields as an example.](https://imgur.elightup.com/YPrYnej.png)

After creating all the needed fields, remember to set the location to assign these fields to any post type you want.

![Set the location to assign the fields to any post type you want](https://imgur.elightup.com/gbl0AO0.png)

Now, in the post editor, you’ll see all the fields displayed like this:

![All the fields display in the post editor](https://imgur.elightup.com/wpW5tXw.png)

In case you don't use **MB Builder**, you can code to add fields or use the [Online Generator](https://metabox.io/online-generator/) tool of Meta Box, then copy the generated code to save time.

You can add the following code to the functions.php file or add it to the created plugin (if you have one) to create the custom fields.

```css
add_filter( 'rwmb_meta_boxes', 'hp_metaboxs' );
function hp_metaboxs( $meta_boxes ) {
    $meta_boxes[] = array(
        'title'    => 'Hotel Booking Price',
        'fields' => array(
            array(
                'id'        => 'price',
                'name' => 'Price',
                'type'   => 'number',
            ),
            array(
                'id'       => 'availability',
                'name' => 'Availability',
                'type'   => 'radio',
                'options'             => array(
                    'Available'     => 'Available',
                    'Unavailable' => 'Unavailable',
                ),
            ),
        ),
    );
    return $meta_boxes;
}
```

Then, when you edit a post, the custom fields will be displayed like we did with MB Builder.

![The fields display in the post editor when you use Online Generator](https://imgur.elightup.com/wpW5tXw.png)

Just fill in the data. And, we will input this data to the RSS in the next step.

## 2. Displaying custom fields’ values on the frontend

You might want to display the data from custom fields on a page on the frontend. It’s a common purpose of saving data in custom fields. However, please notice that **whether you display the data on the frontend or not, you still can add them into the RSS**.

Anyway, there are several ways to display data stored in custom fields on the frontend.

* Use a page builder for the most convenient way, and do not touch any line of code.
* Add code to the theme’s file.
* Use MB Views for better optimization in coding.

In this case, we will need to **add code to the theme’s file to add data from custom fields to the RSS**, so I will use the same way to display data on the frontend.

Go to **Appearance** > **Theme File Editor**, find a file that regulates the template of the page that you want to display the data.

![Go to a theme’s file that regulates the template of a page you want to display the data](https://imgur.elightup.com/EtxhzlE.png)

Then, add code using the `rwmb_meta` syntax.

![add code using the rwmb_meta syntax](https://imgur.elightup.com/zBzM906.png)

**In there**: `price` and `availablity` are the IDs of the fields.

Go to the page on the frontend, the values of the fields will be displayed.

![The values of the fields will be displayed on the frontend](https://imgur.elightup.com/cdPqj3Y.png)

Now, it’s time to include these values to the RSS feed.

## 3. Adding the values of custom fields to the RSS feed

Go to the `functions.php` file, and add these lines of code.

```css
/**
 * MetaBox- Add custom fields to RSS feed
 *
 */

function prefix_add_custom_fields_to_feed($content) {
    if(is_feed()) {
        $post_id = get_the_ID();
            $price = rwmb_meta('price');
            $output = '<div><h3>Thông tin phòng</h3>';
            $output .= '<p><strong>Price:</strong> ' . $price . '</p>';

            $availability = rwmb_meta('availability');
            $output .= '<p><strong>Availability:</strong> ' . $availability . '</p>';
            $output .= '</div>';
        $content = $content.$output;
    }
    return $content;
}
add_filter('the_content','prefix_add_custom_fields_to_feed');
```

![Add code to the functions.php file](https://imgur.elightup.com/EQ0h5dZ.png)

Let’s go through it in more detail:

* `if(is_feed()) {}`: This condition is to make sure that we are inputting the data into the RSS feed.
* `$post_id = get_the_ID();`: This code will get the ID of the post. Then, we also use the `rwmb_meta` function to get values from fields in the post. And, `price` and `availablity` are still the IDs of those fields.
* The returned value will be passed to the `$output` variable along with some extra text that I just added manually.

![The returned value will be passed to the $output variable along with some extra text that I just added manually](https://imgur.elightup.com/ywCJm7x.png)

* `$content = $content.$output;`: This line will write the data from the `$output` variable into the content of the post.
* `add_filter('the_content','prefix_add_custom_fields_to_feed');`: The `the_content` hook is to add those data to the content of the RSS feed. In the event that you want to add data from the fields to the title of the posts in the RSS feed, use the `the_title` hook.

![Use the the_title hook to add data from the fields to the title of the posts in the RSS feed.](https://imgur.elightup.com/4WuAw7C.png)

Then, go to the RSS file of your site at this address - http://yourwebsite.com/feed. You will see the data from custom fields has been there already.

![In the RSS file of your site, the data from custom fields has been there already.](https://imgur.elightup.com/itblCLZ.png)

So, you’ve finished changing the RSS feed’s content already.

## 4. Extra: Displaying RSS feed on your website

If you want to show the most recent posts using the RSS feed somewhere on your site, for instance, the sidebar. So, go to **Appearance** > **Widgets**, add a new one in the **Sidebar** section.

![Go to Appearance > Widgets, add a new one in the Sidebar section](https://imgur.elightup.com/uIkiXyM.png)

Then, choose the **RSS** block.

![Choose the RSS block](https://imgur.elightup.com/dRwH2Gh.png)

Once again, enter the URL of the feed as the one I showed you in the previous step.

![Enter the URL of the feed](https://imgur.elightup.com/hCgxy6v.png)

Then, some posts whose data is saved in the RSS feed will display.

![Some posts whose data is saved in the RSS feed will display](https://imgur.elightup.com/Nv8aCdH.png)

In the settings of this block, there are some options to choose from to set how many posts will be displayed, and some other information. Just change it as you want.

![The settings of the Rss block](https://imgur.elightup.com/CxoWt30.png)
