---
title: Creating a recipe - MB Views 
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We’re going to **create a recipe** page using MB Views. This page is a singular page of a custom post type and includes information that is stored in custom fields created with Meta Box.

There is some information on the page like this:

![The recipe on a food blog](https://i.imgur.com/INT35XD.png)

And, we’re creating a page with another style for demo only.

## Video version

<LiteYouTubeEmbed id='pfX0QYllIb8' />

## Before getting started

In addition to using the [Meta Box Core Plugin](https://metabox.io/plugins/meta-box-builder/), make sure you already have these extensions:

* [MB Custom Post Types & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): It helps to create a custom post type that we need for recipes;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): It has a UI for creating custom fields right on the back end.
* [MB Views](https://metabox.io/plugins/mb-views/): Build front-end templates for WordPress without touching theme files. 
* [eStar](https://gretathemes.com/wordpress-themes/estar/): It is a lightweight and highly customizable WordPress theme.

## 1. Creating a custom post type

Go to **Meta Box > Post Types > New Post Types**.

![Create the Recipe custom post type for posting recipes with Meta Box plugin.](https://i.imgur.com/8iPsfQD.png)

I created the Recipe post type with the following information:

![Create the post type](https://i.imgur.com/fBqG9cp.png)

## 2. Creating custom fields

Go to **Meta Box > Custom Fields > Add New**.

Here are the custom fields that I created:

![The custom fields for the recipe post type](https://i.imgur.com/eQqMYU2.png)

After finishing creating the fields, move to the **Settings** tab. In the **Location** section, select **Post Types** as **Recipe** to apply these fields to the post type.

![Choose the post type as recipe](https://i.imgur.com/57Ni4p8.png)

Back to the post editor, you will see all of the newly created custom fields.

![Newly created custom fields in the post editor](https://i.imgur.com/CW1s8Jk.png)

## 3. Displaying recipe information on frontend

I’m going to display the recipe information saved in custom fields into this section on the singular post page.

![Custom fields](https://i.imgur.com/Wp1BugZ.png)

There are two methods to get and display the custom fields’ value on the front end: 

* **Method 1**: Add the code to the theme file.
* **Method 2**: Use **MB Views** extension.

### Method 1: Adding code to the theme file

I’ll use a hook of [eStar](https://gretathemes.com/wordpress-themes/estar/) theme which is `estar_entry_footer_before` to display custom fields’ value. Refer to this hook [here](https://gretathemes.com/docs/estar/#section-theme-hooks).

Just add the following code to the `functions.php` file of the theme:

```php
add_action( 'estar_entry_footer_before', 'estar_child_recipe' );
function estar_child_recipe() {
	if ( ! is_singular( 'recipe' ) ) {
		return;
	}
	$ingredients = rwmb_meta( 'ingredients' );
	$instructions = rwmb_meta( 'instructions' );
	$equipment = rwmb_meta( 'equipment' );
	$video = rwmb_meta( 'video' );
	$notes = rwmb_meta( 'note' );
	$nutrition = rwmb_meta( 'nutrition' );
	$prep_time = rwmb_meta( 'prep_time' );
	$cook_time = rwmb_meta( 'cook_time' );
	$resting_time = rwmb_meta( 'resting_time' );
	$total_time = rwmb_meta( 'total_time' );
	?>
	<div class="recipe-food__container">
		<h2 class="recipe-name">Recipe</h2>
		<div class="recipe-group recipe-times">
			<h3 class="recipe-header">
				<div class="recipe-line"></div>
			</h3>
			<div class="recipe-times__container">
				<div class="recipe-times__item">
					<span class="label">Prep Time</span>
					<span class="recipe-time"><?php echo $prep_time; ?></span>
				</div>
				<div class="recipe-times__item">
					<span class="label">Cook Time</span>
					<span class="recipe-time"><?php echo $cook_time; ?></span>
				</div>
				<div class="recipe-times__item">
					<span class="label">Resting Time</span>
					<span class="recipe-time"><?php echo $resting_time; ?></span>
				</div>
				<div class="recipe-times__item">
					<span class="label">Total Time</span>
					<span class="recipe-time"><?php echo $total_time; ?></span>
				</div>
			</div>
		</div>
		<div class="recipe-group recipe-equipment">
			<h3 class="recipe-header">
				Equipment
				<div class="recipe-line"></div>
			</h3>
			<?php echo do_shortcode( wpautop( $equipment ) ); ?>
		</div>
		<div class="recipe-group recipe-ingredients">
			<h3 class="recipe-header">
				Ingredients
				<div class="recipe-line"></div>
			</h3>
			<?php echo $ingredients; ?>
		</div>
		<div class="recipe-group recipe-instructions">
			<h3 class="recipe-header">
				Instructions
				<div class="recipe-line"></div>
			</h3>
			<?php echo $instructions; ?>
		</div>
		<div class="recipe-group recipe-video">
			<h3 class="recipe-header">
				Video
				<div class="recipe-line"></div>
			</h3>
			<?php echo wp_oembed_get( $video ); ?>
		</div>
		<div class="recipe-group recipe-notes">
			<h3 class="recipe-header">
				Notes
				<div class="recipe-line"></div>
			</h3>
			<?php echo $notes; ?>
		</div>
		<div class="recipe-group recipe-nutrition">
			<h3 class="recipe-header">
				Nutrition
				<div class="recipe-line"></div>
			</h3>
			<?php echo $nutrition; ?>
		</div>
	</div>
	<?php
}
```

**Explanation**: 

* `'estar_child_recipe'` is the function name, you can set it on a whim.
* `'ingredients'` , `'instructions'` , `'equipment'` , `'video'` ,` 'note'` ,` 'nutrition'` , `'prep_time'` , `'cook_time'` , `'resting_time'`, `'total_time'` are the IDs of custom fields.
* `do_shortcode( wpautop(  ) )`: remove extra tags from custom field WYSIWYG
* `wp_oembed_get()`: Embeds the object by specified URL. Tries to get the HTML code from the passed URL by using supported WordPress oEmbed providers.

### Method 2: Using the MB Views extension

Go to **Meta Box > Views > Add New**.

![Add MB views](https://i.imgur.com/NAnJJ7P.png)

In the **Template** tab of the view, insert wanted fields to get the information by clicking the **Insert Field** button and choosing the corresponding fields from the list.

![Insert the wanted fields](https://i.imgur.com/0vPuqpf.gif)

![choose the corresponding fields from the list](https://i.imgur.com/t6TDfDz.png)

After getting all the wanted fields, we should add some div tag and class for easier styling in the next step.

![add some div tag](https://i.imgur.com/3VWd3TO.png)

I’ve uploaded all of these codes on [Github](https://github.com/wpmetabox/tutorials/blob/master/create-recipe-with-meta-box/template.php), you can refer to it.

Next, scroll down to see the **Settings** section of the view:

![Settings section of the view](https://i.imgur.com/eZYZtZn.png)

Set the **Type** of the template as **Singular**, then choose the **Location** as **Recipe** to apply this template to all the posts in the Recipe post type.

Now, whichever method you choose, you’ll get the result like this:

![Set loction for the custom fields](https://i.imgur.com/hHzqid1.jpg)

## 3. Styling the recipe page

Go to **Customizer > Additional CSS** and add the CSS code.

This is my example CSS:
```css
.recipe-food__container {
	border: 1px solid #E0E0E0;
	padding: 20px;
	background: #b0e4e4;
}
.recipe-food__container p {
	margin-bottom: 5px;
}
.recipe-group {
	margin-bottom: 30px;
}

.recipe-header {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	font-size: 1.2em;
	text-transform: uppercase;
	margin-bottom: 15px;
}
.recipe-line {
	flex: auto;
	height: 1px;
	border-bottom: 1px solid #e0e0e0;
	margin-left: 15px;
}
.recipe-times .recipe-line {
	margin-left: 0;
}
.recipe-times__container {
	display: flex;
	padding: 5px;
	margin: 5px 0;
}
.recipe-times__item {
	flex: 1;
	display: flex;
	flex-direction: column;
	text-align: center;
}
.recipe-times__item .label {
	text-transform: uppercase;
	opacity: 0.6;
}
```
Otherwise, if you use the method 2 in the previous step, which means you’re using the MB Views, you can go back to the Views to edit the template and insert the above CSS code to the view.

![Insert the CSS code](https://i.imgur.com/rS5NJ1Z.png)

Now my pizza recipe looks much more delicious and beautiful.

![The result](https://i.imgur.com/evpVQXw.jpg)

------

You may be interested in: 
* [Creating a team members page](https://docs.metabox.io/tutorials/create-team-members-page-mb-views/)
* [Displaying images from cloneable fields](https://docs.metabox.io/tutorials/display-images-cloneable-fields-mb-views/)
* [Creating a product page](https://docs.metabox.io/tutorials/create-product-pages-mb-views/)
