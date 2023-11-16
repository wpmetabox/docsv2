---
title: Adding custom fields to yoast SEO meta tags
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Normally, when you use Yoast SEO on your site, there will be a section to fill in the title, and description that **helps search engines index them easier**. You can fill in static content or dynamic content in these sections. But in some cases, you may want to get content not only from those default fields but from custom fields. So, how to **add content from custom fields created with Meta Box to Yoast SEO meta tags**, just follow these practices.

I'll get data from Meta Box custom fields, then add to Yoast SEO meta tags as title and description.

![add content to Yoast SEO meta tags as title and description](https://i.imgur.com/9Kux9hY.png)

## Video version

<LiteYouTubeEmbed id='0oMK9bXmkPI' />

## Preparation

If you want to add a simple custom field to meta tags, you can use the Yoast SEO snippet variables. It works in 90% of cases. However, if your custom field has complex data such as a list of text (cloneable text field) or a sub-field of a group, then you should use the custom snippet variables.

In this practice, I will create both of these field types with all these methods for easier applying in real cases.

To get started, you would have to use Yoast SEO on your site to use Yoast SEO meta tags. We also need some tools:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom fields;
* [Meta Box for Yoast SEO](https://metabox.io/plugins/meta-box-yoast-seo/): to add the content of custom fields to Yoast SEO Content Analysis;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create custom fields more easily;
* [Meta Box Group](https://metabox.io/plugins/meta-box-group/) (optional): to group fields together. I’m using it for demonstration and gives you some typical examples to see clearer how to do it with multiple types of fields.

## 1. Creating custom fields

There is little difference between getting content from the normal field, group, cloneable field, and cloneable group. So I’ll have 4 kinds of them as an example.

![4 kinds of custom fields as an example](https://i.imgur.com/hBqdgMy.png)

Go to **Meta Box** and create them.

![Go to Meta Box and create custom fields](https://i.imgur.com/YhvfOb5.png)

After creating all the fields, move to the **Settings tab**, choose **Location** as **Post type**, and select any post type you want to apply these fields for it.

![Move to the Settings tab, choose Location as Post type, and select any post type you want to apply](https://i.imgur.com/DwkQXTA.png)

After publishing the custom fields, you will see the field in the post editor. Just input some data.

![The field in the post editor](https://i.imgur.com/qP0wIXD.png)

## 2. Outputing the custom fields values to be the meta tags

There are two ways to get values from custom fields then add those content to Yoast SEO meta tags:

1. One is using Yoast SEO snippet variables. But it is just for the field which is non-cloneable and stand alone, which means that it’s not in any group.
2. Another one is using custom snippet variables to output content from group, clonable field, cloneable group, or some other special field type.

## 2.1. Using Yoast SEO Snippet Variables

Yoast SEO provides [snippet variables](https://yoast.com/help/list-available-snippet-variables-yoast-seo/) to add data from custom fields to meta tags. Go to the Yoast SEO section and add a variable with a structure like this:

`%%cf_<custom-field-name>%%`

` cf_ ` is the prepend text for variables that get data from custom fields. Just get the **ID** of the field, and replace `<custom-field-name>` with that **ID**.

In the **Yoast SEO** section in the post/page editor, enter that variable to the Meta title box like this:

![Enter that variable to the Meta title box](https://i.imgur.com/fPlhZg0.png)

In this case, I did input the variable as `%%cf_product_title%%`. In there, product_title is the ID of my custom field.

Please note that this way makes sense only when the field is non-clonable and NOT in any group.

When you add the variable, the preview will show the text immediately. It’ll be exactly the same with the content saved in the custom field.

![When you add the variable, the preview will show the text immediately](https://i.imgur.com/MoFgzCT.png)

To double check if it is in the meta tag or not, just go to the post on the front end and inspect it.

![Go to the post on the front end and inspect to double check if it is in the meta tag or not](https://i.imgur.com/ks1LXSz.png)

## 2.2. Using Custom Snippet Variables

To get data from some special custom fields, for example, group or cloneable ones, we should add code to the theme’s file to create custom snippet variables.

![Add code to the theme’s file to create custom snippet variables](https://i.imgur.com/3ggMKzF.png)

```php
add_action( 'wpseo_register_extra_replacements', function() {
           wpseo_register_var_replacement( '%%my_information%%', 'my_information_funciton', 'advanced', 'Some help text' );
	wpseo_register_var_replacement( '%%my_features%%', 'my_features_function', 'advanced', 'Some help text' );
	wpseo_register_var_replacement( '%%my_promotions%%', 'my_promotions_function', 'advanced', 'Some help text' );
} );

function my_information_funciton() {
    $value = '';

    // Get product information.
    $settings = rwmb_meta( 'product_information' );

    // Get brief description.
    $value .= isset( $settings['short_description'] ) ? $settings['short_description'] : '';

    // Get ratings.
    $value .= isset( $settings['ratings'] ) ? " {$settings['ratings']} stars" : '';

    return $value;
}

function my_features_function(){
	$value = '';
	$features = rwmb_meta( 'features' ) ?: [] ;
	$value .= ' Features: ';

	foreach ( $features as $item ){
		$value.=$item.', ';
	}
	return $value;
}

function my_promotions_function(){
	$value = '';
	$promotions = rwmb_meta( 'promotions' ) ?: [] ;
	$value .= ' Promotions: ';
	
	foreach ( $promotions as $group ) {

		// Field promotion_program:
		$value .= $group[ 'promotion_program' ] ?? '';

		// Field expired_date:
		$value .= $group[ 'expired_date' ] ?? '';

	}
	return $value;
}
```

We will use the hook ` wpseo_register_extra_replacements ` to create the custom variables.

![We will use this hook to create the custom variables.](https://i.imgur.com/hG6q0Y3.png)

I use the ` wpseo_register_var_replacement ` function from **Yoast SEO** to register that I will create three new variables since I have three fields for example.

![I use this function from Yoast SEO to register that I will create three new variables since I have three fields for example.](https://i.imgur.com/fxCPTsS.png)

These are the names of the variables that you can name as you want.

![The names of the variables](https://i.imgur.com/uWvFz3Y.png)

Notice that ` advanced and ` ` Some help text ` parameters follow **Yoast SEO** documentation, so you can look for a more detailed guide about these parameters in [there](https://yoast.com/help/list-available-snippet-variables-yoast-seo/).

Corresponding to each variable, we will have a function to get data from custom fields. You also can name those functions.

![Each variablewill have a function to get data from custom fields](https://i.imgur.com/vSXegRm.png)

In these functions, you should use the [_rwmb_meta_ helper function](https://docs.metabox.io/filters/rwmb-meta/) to get data or settings of the custom fields no matter which kind of them.

![Use the rwmb_meta helper function to get data or settings of the custom fields](https://i.imgur.com/Dlc2zFR.png)

These lines of code to get data from a **group which is non-clonable**.

![These lines of code to get data from a group which is non-clonable](https://i.imgur.com/eEy4I7e.png)

In there, this is the **ID** of the group.

![The ID of the group](https://i.imgur.com/ZPktVou.png)

These are the **IDs** of the subfields inside that group.

![The IDs of the subfields inside that group](https://i.imgur.com/gsaCCgg.png)

This one is to get data from a **cloneable field** that has the ID as ` features `. Since it is cloneable, there’ll be a loop in the function.

![A loop in the function to get data from a cloneable field](https://i.imgur.com/KYGITZp.png)

These are to get data from a **clonable group** (ID as ` promotions `) which has two subfields inside with the IDs are ` promotion_program ` and ` expired_date `.

![Get data from a clonable group which has two subfields inside](https://i.imgur.com/VN7qXm6.png)

Since the group is cloneable, you can see there also is a loop in the above function.

Now, go to the post editor, and enter the created variables into the box with the structure like this:

`%%<your_custom_variable>%%`

![Enter the created variables into the box with the structure](https://i.imgur.com/uVsX0TR.png)

Although **Yoast SEO** does not render content from custom snippet variables in the snippet preview, you can inspect the post and see it.

![Inspect the post and see the result](https://i.imgur.com/qXMMooB.png)
