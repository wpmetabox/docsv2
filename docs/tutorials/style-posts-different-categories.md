---
title: Styling posts in different categories
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

If you want posts in different categories to have different styles, just follow this tutorial. I will set the background color for the posts as the example in this practice. The posts in a category will have a blue background color, then posts in another category will have another background color.

This is an example of the posts’ background.

![Example of the posts' background](https://i.imgur.com/7TsL5Wb.png)

## Video version

<LiteYouTubeEmbed id='sV_ZW2y5CpY' />

## Preparation

To change the posts’ background color by categories, we need to create a custom field for the category to choose the background color, then use some code to display it on the frontend.

With this method, you can change other CSS attributes of whatever category you want, for example:

* Add a class to the body tag (via the body_class filter) to customize the CSS for the whole page more conveniently;
* Change post title color;
* Change the font size;
* Change the position or hide the sidebar.

This method has many other applications as well. The main idea here is to create settings for the category, then get/use these settings for the posts in that category.

:::caution

If you already have had many different layouts and want to choose one for a post, or category, you can use this method. However, you’ll need to create a class to identify the post/category using which layout.

:::

As I’ve mentioned, we need to create a custom field for the category to choose the background color. So we need to install and activate the [Meta Box](https://metabox.io/) and some of its extensions:

* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have UI in the backend creating custom fields.
* [MB Term Meta](https://metabox.io/plugins/mb-term-meta/): to add custom fields to taxonomy terms such as categories and tags.

## 1. Creating a custom field

We’ll create a field only for the background color. Go to **Meta Box > Custom Fields > Add New**.

![Create a custom field](https://i.imgur.com/tRptXL6.png)

I choose the **Color Picker** field for the Background Color to choose the color.

![Choose the Color Picker field for the background color](https://i.imgur.com/gk6FAJm.png)

Pay attention to the **ID** of the field since we will use it in the next step.

Next, move to the **Settings** tab and choose **Location** as **Taxonomy** and select **Category** to display the custom field on category. You’ll have this option only when you install the **MB Term Meta** extension already.

![Set Location for the created custom fields](https://i.imgur.com/4hf66vQ.png)

Then, go to **Posts > Categories** and select any category you want to edit. You’ll see the field there.

![Seclect the wanted category to edit](https://i.imgur.com/bCg14PX.png)

Just choose a color for the category.

## 2. Changing the background color for posts

Go to a post in the **Breakfast** category, its background color still is the white as default.

![The default color background](https://i.imgur.com/bFncjk8.png)

To change the background color of the post, add the following code to the `functions.php` file:

```php
function estar_output_frontend() {
	If ( ! is_single() ) {
		return;
	}
	$categories       = get_the_category();
	$background_color = get_term_meta( $categories[0]->term_id, 'background_color', true );
	if ( ! $background_color ) {
		return;
	}
	echo '<style>
		.single-post {
			background-color: ' . $background_color . ';
		}
	</style>';
}
add_action( 'wp_head', 'estar_output_frontend' );
```

![Insert the code](https://i.imgur.com/7glCfcO.png)

**Explanation**:

* *estar* is the theme that I am using. You can download this free theme [here](https://gretathemes.com/wordpress-themes/estar/);
* `If ( ! is_single() ) {}`: is to check that the user is in the singular post or not. If yes, do the following actions.
* `get_the_category ()`: To know which category the post is.
* `get_term_meta ($ categories [0] -> term_id, 'background_color', true)`: use `get_term_meta ()` to get the value of the custom field corresponding to the category returned by the get_the_category() function, with the ID of the custom field is `background_color` (we created it in step 1).
* ` wp_head`: This hook will print the above data into the head tag on the front end of your WordPress website.

Now, I will set a color in the **Background Color** field of the **Breakfast** category:

![Set color in the Background color field](https://i.imgur.com/pXdv8dr.png)

Then, go back to the post, you will see the background turns to another color:

![Background turns into other color](https://i.imgur.com/7TsL5Wb.png)

