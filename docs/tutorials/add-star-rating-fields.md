---
title: Adding star rating fields
---

Meta Box hasn’t provided any **field type for star rating** yet. If you want to have one, you should create it on your own by following this tutorial. **This will be a new field type** which will stand by current 40+ field types from Meta Box.

## 1. Creating a plugin to create a new field type

I named this new plugin **MB Rating Field** so go to the **wp-content** folder and create the files with the directory structure as below:

```php
wp-content/plugins/mb-rating-field
css
  - admin.css
  - frontend.css
rating.php
mb-rating-field.php
```

There, just create the files inside and add content for them as following steps.

First, to create the plugin, add the following code to the `mb-rating-field.php` file:

```php
<?php /** * Plugin Name: MB Star Rating 
* URI plugin: https://metabox.io 
* Description: Add a new star rating field type for Meta Box 
* Version: 1.0 
* Author: MetaBox.io 
* Author URI: https://metabox.io 
* License: GPLv2 */
```

Then, you will see the new plugin in the list of installed plugins in the **Dashboard**. Let’s activate it.

![The new plugin in the list of installed plugins](https://i.imgur.com/F1XriLc.png)

## 2. Creating a new field type as star rating

In the `rating.php` file, add some code to add the star ratings field type.

```
if (class_exists ('RWMB_Field')) {
    class RWMB_Rating_Field extends RWMB_Field {}
}
```
This is to create a class named `RWMB_Rating_Field` for this rating field. Usually, if you want to create a certain type of field, you should create a class with the syntax `RWMB _ {$ field_type} _Field`. You can see more details in [this guide](https://docs.metabox.io/custom-field-type/) of Meta Box.

Next, declare this class in the plugin `mb-rating-field.php` file created in Step 1 by adding this code to this file:

```php
add_action ('init', 'prefix_load_rating_type');
function prefix_load_rating_type () {
    require __DIR__. '/rating.php';
}
```
## 3. Creating options for the field type

Once you have the rating field, you need to create options that allow website owners to score stars (from 0.5 to 5 stars).

This rating class will inherit all the methods of the `RWMB_Field` class. In this rating field, we must specify the content of the html method to output the HTML in the backend.

Do it by adding the following code to the `rating.php` file.

```
public static function html( $meta, $field ) {
	return sprintf(
		'<fieldset class="rwmb-rating" id="%1$s">
		<input type="radio"' . checked( $meta, 5, false ) . 'id="%1$s_star5" name="%2$s" value="5" /><label class="full" for="%1$s_star5" title="5 stars"></label>
		<input type="radio"' . checked( $meta, 4.5, false ) . 'id="%1$s_star4half" name="%2$s" value="4.5" /><label class="half" for="%1$s_star4half" title="4.5 stars"></label>
		<input type="radio"' . checked( $meta, 4, false ) . 'id="%1$s_star4" name="%2$s" value="4" /><label class="full" for="%1$s_star4" title="4 stars"></label>
		<input type="radio"' . checked( $meta, 3.5, false ) . 'id="%1$s_star3half" name="%2$s" value="3.5" /><label class="half" for="%1$s_star3half" title="3.5 stars"></label>
		<input type="radio"' . checked( $meta, 3, false ) . 'id="%1$s_star3" name="%2$s" value="3" /><label class="full" for="%1$s_star3" title="3 stars"></label>
		<input type="radio"' . checked( $meta, 2.5, false ) . 'id="%1$s_star2half" name="%2$s" value="2.5" /><label class="half" for="%1$s_star2half" title="2.5 stars"></label>
		<input type="radio"' . checked( $meta, 2, false ) . 'id="%1$s_star2" name="%2$s" value="2" /><label class="full" for="%1$s_star2" title="2 stars"></label>
		<input type="radio"' . checked( $meta, 1.5, false ) . 'id="%1$s_star1half" name="%2$s" value="1.5" /><label class="half" for="%1$s_star1half" title="1.5 stars"></label>
		<input type="radio"' . checked( $meta, 1, false ) . 'id="%1$s_star1" name="%2$s" value="1" /><label class="full" for="%1$s_star1" title="1 star"></label>
		<input type="radio"' . checked( $meta, 0.5, false ) . 'id="%1$s_starhalf" name="%2$s" value="0.5" /><label class="half" for="%1$s_starhalf" title="0.5 stars"></label>
		</fieldset>',
		$field['field_name'],
		$field['id'],
		$meta
	);
}
```

**Note that** we use the "radio" field type to give the user a 0.5 to 5 band score to rate.

Next, we need to style it a little bit to show the above radio options as stars (currently they are only visible as small circles).

![Style the star rating](https://i.imgur.com/kR6T3wI.png)

Just add this code to the `css/admin.css` file.

```
.rwmb-rating {
    border: none;
    float: left;
}
.rwmb-rating > input { display: none; }
.rwmb-rating > label:before {
    margin: 5px;
    font-size: 1.25em;
    font-family: FontAwesome;
    display: inline-block;
    content: "\f005";
}
 
.rwmb-rating > .half:before {
    content: "\f089";
    position: absolute;
}
.rwmb-rating > label {
    color: #ddd;
    float: right;
}
/***** CSS Magic to Highlight Stars on Hover *****/
 
.rwmb-rating > input:checked ~ label, /* show gold star when clicked */
.rwmb-rating:not(:checked) > label:hover, /* hover current star */
.rwmb-rating:not(:checked) > label:hover ~ label { color: #FFD700;  } /* hover previous stars in list */
.rwmb-rating > input:checked + label:hover, 
.rwmb-rating > input:checked ~ label:hover,
.rwmb-rating > label:hover ~ input:checked ~ label, .rwmb-rating > input:checked ~ label:hover ~ label { color: #FFED85;  }
.rwmb-rating input[type=radio]:checked+label:before {
    color: unset;
}
```
To get the style in admin, we use the function `admin_enqueue_scripts () to enqueue`. Please enqueue in the `rating.php` file as follows:
```
public static function admin_enqueue_scripts() {
    wp_enqueue_style( 'rwmb-rating', plugin_dir_url( __FILE__ ) . '/css/admin.css', [], '1.0.0' );
}
```

## 4. Creating a field in type of star rating

Now, we can create custom fields with rating field type using the newly created **MB Star Rating** plugin!

However, it’s not in the Meta Box Builder, you must create the field using code. Add this code to the `functions.php` file:

```php
<?php
add_filter( 'rwmb_meta_boxes', 'your_prefix_register_meta_boxes' );
function your_prefix_register_meta_boxes( $meta_boxes ) {
    $prefix = '';
    $meta_boxes[] = [
        'title'      => esc_html__( 'Project Field', 'text-domain' ),
        'id'         => 'project-field',
        'post_types' => ['post'],
        'context'    => 'normal',
        'priority'   => 'high',
        'fields'     => [
            [
                'id'   => $prefix . 'name',
                'type' => 'text',
                'name' => esc_html__( 'Name', 'text-domain' ),
            ],
            [
                'id'   => $prefix . 'rating',
                'type' => 'rating',
                'name' => esc_html__( 'Rating', 'text-domain' ),
            ],
        ],
    ];
    return $meta_boxes;
}
```

In there, `'post_types'` => `['post']` stipulates the location of the fields as blog posts. 

After that, you will see the created custom field display in the post editor.

![Newly created field display in the post editor](https://i.imgur.com/Uxg005Y.png)

## 5. Displaying the value from the star rating fields

We have created a custom field to add star ratings to a post / page in the backend. You can use the WordPress `wp_star_rating ()` function to display ratings on the frontend for readers to view.

In the `rating.php` file, you use the `format_single_value ()` method by adding this code:

```
public static function format_single_value( $field, $value, $args, $post_id ) {
	require_once( ABSPATH . 'wp-admin/includes/template.php' );
	wp_enqueue_style( 'dashicons' );
	wp_enqueue_style( 'frontend', plugin_dir_url(__FILE__) . '/css/frontend.css' );
	$starrating = rwmb_get_value( $field['id'] );
	$args = array(
		'rating' => $starrating,
		'type' => 'rating',
	);
	wp_star_rating( $args );
}

```

**Note**: To use the `wp_star_rating()` function, you need to require the `wp-admin/includes/template.php` file as above.

The above code will output the following HTML on the frontend:
```
<div class="star-rating" title="Number of stars obtained rating">
     <div class="star star-full"></div>
     <div class="star star-full"></div>
     <div class="star star-full"></div>
     <div class="star star-half"></div>
     <div class="star star-empty"></div>
</div>
```
In case you want the star reviews to look better, you should style a bit. I will enqueue the Dashicons and the frontend.css file as in the method above. Below is the content of the frontend.css file:

```
@font-face {
    font-family: "dashicons";
    src: url("../fonts/dashicons.eot");
}
@font-face {
    font-family: "dashicons";
    src: url(data:application/x-font-woff;charset=utf-8;base64,) format("woff"),
        url("../fonts/dashicons.ttf") format("truetype"),
        url("../fonts/dashicons.svg#dashicons") format("svg");
    font-weight: normal;
    font-style: normal;
}
.star-rating .star-full:before {
    content: "\f155";
}
.star-rating .star-half:before {
    content: "\f459";
}
.star-rating .star-empty:before {
    content: "\f154";
}
.star-rating .star {
    color: #0074A2;
    display: inline-block;
    font-family: dashicons;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    height: 20px;
    line-height: 1;
    text-align: center;
    text-decoration: inherit;
    vertical-align: top;
    width: 20px;
}
```
To display the results to the website, simply insert the following code in your theme's `single.php` file or anywhere you want to display:

```
rwmb_the_value( 'rating' );
```
In the case that you don’t want to touch the theme files, instead of adding the above line of code to the `single.php` file, just use MB Views to display the field’s value.

And this is the result:

![the result after all steps](https://i.imgur.com/Imu5HNb.png)

You can download the code in this tutorial from [Github](https://github.com/wpmetabox/mb-rating-field).
