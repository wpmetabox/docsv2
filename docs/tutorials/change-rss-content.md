---
title: Changing the RSS content
---

This article will show you **how to get information from a custom field created by** [Meta Box](https://wordpress.org/plugins/meta-box/) **then include them into the** [RSS feed](https://gretathemes.com/rss-feed-applications-wordpress/). I will use [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/) to have a UI to create custom fields.

## Step 1: Create custom fields

Go to **Meta Box > Custom Fields > Add New** to create fields.

![Create custom fields](https://i.imgur.com/YqBrdhd.png)

After creating all the fields, move to the **Settings** tab. Remember to set the **Location** as **Post Type**, and select your product’s post type to apply these fields to it. The Post Type I’ve applied for is **Booking**.

![Se location for the created fields](https://i.imgur.com/VzyIi7J.png)

Back to the post editor, the custom fields will be there.

![Created fields display in the post editor](https://i.imgur.com/FimNykY.png)

You can fill in some information to the fields to check if it is in the RSS in the next step.

## Step 2: Display custom fields’ values on the frontend

We’ll use the function `rwmb_meta()` to get value from the fields.

In your theme folder, find the `content.php` and add this code:
```
 <ul>
        <li>
            <strong>Price</strong>: <?php echo rwmb_meta( 'price' ) ?>
        </li>
        <li>
            <strong>Availability</strong>: <?php echo rwmb_meta( 'availability' ) ?>
        </li>
  </ul>
```
In there, `price` and `availability` are the IDs of the fields.

Back to your post, the values of these fields will be displayed as follows:

![The values of the created fields](https://i.imgur.com/X3UragY.png)

The custom fields’ values are shown. Next is to include them in the RSS feed.

## Step 3: Add the values of custom fields to the rss feed

Go to the `functions.php` file and add this code:
```
/**
 * MetaBox- Add custom fields into RSS Feed
 *
 */

function prefix_add_custom_fields_to_feed($content) {
    if(is_feed()) {
        $post_id = get_the_ID();
            $price = rwmb_meta('price');
            $output = '<div><h3>Hotel Information</h3>';
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
Explanation:

* `if(is_feed()) {}`: to make sure that we are inputting the data into the RSS feed;
* `rwmb_meta()`: we also use this function to get values from fields;
* `price` and `availability` also are the IDs of the fields;
* `$output .=`: to write the returned values into the RSS feed.

## Step 4: Display RSS feed

Go to **Appearance > Widgets**, find the **RSS** tab then drag it into the area you want. Then you enter a link which is in the form of http://yourwebsite.com/feed in the **RSS Feed URL** section.

![Display the rss feed](https://i.imgur.com/sppBE9h.png)

This is the result when searching url: http://yourwebsite.com/feed.

![The result](https://i.imgur.com/G5AqMFZ.png)

So, you’ve finished changing the RSS feed’s content already.
