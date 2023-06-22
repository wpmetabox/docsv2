---
title: Showing the featured restaurants - Meta Box + Elementor
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In today’s practice, we're going to show the featured products using **Meta Box** and **Elementor**. 

I’m getting restaurants as an example for the products and this is the section I’ll create in this tutorial: 

![The featured products using Meta Box and Elementor](https://i.imgur.com/1wdDGxA.png)

## Video Version

<LiteYouTubeEmbed id='ski5c4SxePg' />

## Preparation

All of the featured restaurants in the section are chosen manually by a custom field in the backend. It’s a switch field. The restaurant will be displayed in the featured section when this button is turned on.

![The restaurant will be displayed in the featured section when this button is turned on](https://i.imgur.com/2vBgC2q.png)

So, to get started, we need these tools:

* [Meta Box plugin](https://wordpress.org/plugins/meta-box/): to create the switch field. In addition, you may want to add some extra information about your product, so custom fields also come handy.
* [MB Custom Post Types](https://metabox.io/plugins/custom-post-type/): to create custom post type for the products;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI in the back end to create custom fields;
* [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) (optional): to display the custom fields as an admin column to easily see the information. I use it to show you which restaurants will be featured to easily compare with the result.
* [Meta Box - Elementor Integrator](https://metabox.io/plugins/mb-elementor-integrator/): to get dynamic data from custom fields and display them on the page easily.
* **Elementor** and its pro version: to build the homepage and the section.

You can install them individually or use the Meta Box AIO for all.

## 1. Creating a custom post type

Go to **Meta Box** and create a new custom post type for your products.

![Create a new custom post type for your products](https://i.imgur.com/63DJvXS.png)

After publishing, you will see your post type display as a menu.

![The post type displayed as a menu](https://i.imgur.com/333f5oW.png)

## 2. Creating custom fields

Go to **Meta Box** > **Custom Fields** to create fields to save extra information for the restaurants as usual.

![Create fields to save extra information for the restaurants](https://i.imgur.com/XdyWIfO.png)

I’ll create some custom fields for product information. You also can add other ones.

![Create some custom fields for product information](https://i.imgur.com/9Qx6OHx.png)

Besides some familiar fields, I use a switch field to choose to display the restaurant in the section or not. It’s based on the value of the field.

![Use a switch field to choose to display the restaurant in the section or not](https://i.imgur.com/4CwZFBj.png)

In the backend, to know if the restaurant is featured or not, just check the following box in the settings of the switch field. It's available only when you have **MB Admin Columns**.

![The restaurant is featured when you have MB Admin Columns](https://i.imgur.com/SAeRlAS.png)

After having all the fields, go to the **Settings** tab, choose **Location** as **Post type**, and Restaurant to apply the fields to it.

![Apply the fields to the post](https://i.imgur.com/SV7pm4Z.png)

Then, when adding a new post, you’ll see the fields. If you want to feature the restaurant, just turn on the button.

![If you want to feature the restaurant, just turn on the button](https://i.imgur.com/2vBgC2q.png)

I added some posts for instance, you can easily see which one will be displayed in the section from the column.

![The posts displayed in the section from the column](https://i.imgur.com/EgDc5U3.png)

## 3. Displaying information of a product

Go to **Elementor** and create a template to designate which and how the information from a post of a product will be displayed.

![Create a template to designate which and how the information from a post ò a product will be displayed](https://i.imgur.com/EXSvTuU.png)

Set the template as **Loop Item**.

![Set the template as Loop Item](https://i.imgur.com/nom3rmd.png)

Choose the post type to get the right preview.

![Choose the post type to get the right preview](https://i.imgur.com/0Whce0K.png)

Add a **Section** element.

![Add a Section element](https://i.imgur.com/EOWO4DJ.png)

Let's add information for each restaurant. First, insert **Featured Image** element to display restaurant image.

![Insert Featured Image element to display the restaurant image](https://i.imgur.com/6JILeZY.png)

Add **Text Editor** for the voucher.

![Add Text Editor for the voucher](https://i.imgur.com/FrJyLjQ.png)

Use the **Dynamic Tags**, look for the **Meta Box Field** option, and choose the field from the list.

![Use the Dynamic Tags, look for the Meta Box Field option, and choose the field from the list](https://i.imgur.com/R4Ikgiy.gif)

Next, add the **Post Title** for the restaurant name.

![Add the Post Title for the restaurant name](https://i.imgur.com/mJ7jRsH.png)

Add an additional **Text Editor** element. It’s for the address which also is saved in a custom field.

![Add an additional Text Editor element](https://i.imgur.com/GwoilCE.png)

We should use the **Dynamic Tags** as well, and find the **Address** field.

![We should use the Dynamic Tags as well, and find the Address field](https://i.imgur.com/zXqvoPC.gif)

For the logo, add an **Image** element.

![Add an Image element for the logo](https://i.imgur.com/aQZRrgT.png)

Then, add **Dynamic Tags** from the logo field to display the image.

![Add Dynamic Tags from the logo field to display the image](https://i.imgur.com/ditLy1L.gif)

That's all of the information I want to get and display for the restaurant.

![All of the information I want to get and display for the restaurant](https://i.imgur.com/MHcB0fe.png)

## 4. Creating a custom query

We need a condition based on the value of the **Switch** field to choose which posts will be displayed. As a result, we need a **Custom Query** when creating the section of the homepage. **Elementor** does not support it in the builder, so you should use a little bit of code to create one. It’s really easy with the official format provided by **Elementor**, so just follow it without concern.

You can add code directly to the theme file, but it’s not recommended. I’ll use a third party plugin which is **Code Snippets**. You can install it directly from [wordpress.org](https://wordpress.org/plugins/code-snippets/).

To create a custom query, go to **Code Snippets** to add new.

![Go to Code Snippets to create a custom query](https://i.imgur.com/BFjBjoe.png)

Add some code to set the condition.

![Add some code to set the condition](https://i.imgur.com/K24FBOJ.png)

```
/**
 * Update the query to use specific post types.
 *
 * @since 1.0.0
 * @param \WP_Query $query The WordPress query instance.
 */
function my_query_by_post_types( $query ) {
	$query->set( 'post_type', [ 'restaurant' ] );
}
add_action( 'elementor/query/my_custom_filter', 'my_query_by_post_types' );

/**
 * Update the query by specific post meta.
 *
 * @since 1.0.0
 * @param \WP_Query $query The WordPress query instance.
 */
function my_query_by_post_meta( $query ) {

	// Get current meta Query
	$meta_query = $query->get( 'meta_query' );

	// If there is no meta query when this filter runs, it should be initialized as an empty array.
	if ( ! $meta_query ) {
		$meta_query = [];
	}

	// Append our meta query
	$meta_query[] = [
		'key' => 'feature_the_restaurant',
		'value'=>1,
		'compare' => '='
	];

	$query->set( 'meta_query', $meta_query );

}
add_action( 'elementor/query/my_custom_filter', 'my_query_by_post_meta' );
```

Let’s get through for more detail. 

![These lines of code are to declare that we’ll query the post type which has the ID as 'restaurant'](https://i.imgur.com/iEpPEfd.png)

```
function my_query_by_post_types( $query ) {
	$query->set( 'post_type', [ 'restaurant' ] );
}
add_action( 'elementor/query/my_custom_filter', 'my_query_by_post_types' );
```

These lines of code are to declare that we’ll query the post type which has the ID as '**_restaurant_**'.

![the ID as 'restaurant'](https://i.imgur.com/2j0PLp7.png)

**_my_custom_filter_** is the name of the custom query, you can name it as your own.

![The name of the custom query](https://i.imgur.com/maMfxTF.png)

![The mentioned condition](https://i.imgur.com/gWw7PCt.png)

```
$meta_query[] = [
	'key' => 'feature_the_restaurant',
	'value'=>1,
	'compare' => '='
];
```

This is the mentioned condition. It means that if the custom field, which has the **ID** as '**_feature_the_restaurant_**', has the value as 1, the post will be got and displayed. **1** is the value of its **On** status.

![The ID as 'feature_the_restaurant', has the value as 1, the post will be got and displayed](https://i.imgur.com/ZNhZ55B.png)

Now, move on to display posts on the homepage.

## 5. Creating the section 

Go to edit the homepage with **Elementor**.

![Go to edit the homepage with Elementor](https://i.imgur.com/oExPxZZ.png)

Add a **Section** elemento to the page as usual.

![Add a Section element to the page as usual](https://i.imgur.com/RMKOR3B.png)

Then, insert a **Heading** for it.

![Insert a Heading for it](https://i.imgur.com/eoaDCLB.png)

Add the **Loop Grid** element to get posts.

![Add the Loop Grid element to get posts](https://i.imgur.com/W8i8c6q.png)

Choose the created template, but some blog posts will be displayed in the form.

![Choose the created template](https://i.imgur.com/UCiXVWL.png)

To display the wanted posts from your product post type, go to the **Query** section. Set the **Source** as your product’s post type. Then **all the posts** from that post type will be displayed.

![Go to the Query section. Set the Source as your product’s post type](https://i.imgur.com/JuKd3y5.gif)

Fill in the **Query ID** box with the name of the created custom query to apply the condition that we want. The displaying posts will be changed.

![Fill in the Query ID box with the name of the created custom query](https://i.imgur.com/LAzmQi0.png)

To style the way each information of the post displays, go back to edit the created template as the **Loop Item** and customize each element’s settings.

Then the section will display with a nice look on the frontend.

![The featured products displayed on the homepage](https://i.imgur.com/1wdDGxA.png)
