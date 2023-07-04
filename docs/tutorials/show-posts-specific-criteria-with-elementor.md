---
title: Showing posts with specific criteria - Meta Box + Elementor
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Let’s show products with specific criteria, for example, which are on sale on your website using Meta Box and Elementor.

Here is an example archive page that only shows the dishes on sale.

![Example of an archive page displays products on sale](https://i.imgur.com/1iHSC62.png)

## Video Version

<LiteYouTubeEmbed id='SBZP4fmue8c'/>

## Preparation

The products will be the dishes, which are posts of a custom post type. These dishes will have basic information such as name, description, and image. Additionally, there may be extra information stored in custom fields.

In this case, I have two fields in order to save the original price and the promotional price. The values stored in these 2 fields determine which dishes will be displayed. The only one that has the promotional price is on sale and will be displayed on the page.

In this practice, we need these tools:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom post types and custom fields;
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the dishes;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have an intuitive UI to create custom fields in the backend;
* [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) (optional): to display custom fields as an admin column to know exactly which one will be shown on the page;
* [Meta Box - Elementor Integrator](https://metabox.io/plugins/mb-elementor-integrator/): to get dynamic data from custom fields and display them on the page easily;
* **Elementor** and **Elementor Pro**: to build the page.

## 1. Creating a new custom post type

Go to **Meta Box** > **Post Types** > **Add New** to create a new post type for your products. My post type’s name is **Cuisines**.


![Create a new custom post type in Meta Box](https://i.imgur.com/8uaBTO3.png)

## 2. Creating custom fields

In this practice, I will create two fields. As mentioned before, the value stored in these two fields will be used as a condition to determine which dishes will be shown.

![Created custom fields for extra information of products](https://i.imgur.com/o66Pc7f.png)

You can also add some other custom fields to save more information about your product and display them on the page in the same way.

To easily identify which products have promotions, you can set both of these fields displayed as admin columns like this.

![Show created fields as admin columns](https://i.imgur.com/8fmXlwX.png)

To do it, just check this box in both fields’ settings.

![Set the custom fields as show as admin column](https://i.imgur.com/edBxiFs.png)

You’ll have this setting only when you enable the [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) extension.

After creating all the fields, move to the **Settings** tab > set **Location** as **Post type** > select **Cuisines** to apply these fields to it.

![Set the location for the created fields](https://i.imgur.com/3H3TSUq.png)

When creating a new post in **Cuisines** post type, you’ll see all the created custom fields.

![All the created custom fields appear in the post editor](https://i.imgur.com/vK1p3lU.png)

## 3. Displaying the products information

We’ll not get posts in this step. Just display information about a product, that is from a post. Go to **Templates** > **Add News** to create a template for it.

![Create a template](https://i.imgur.com/FzPxe82.png)

We should choose the template as a **Loop Item** for easier getting posts in the next step.

![Choose the template as a Loop Item for easier getting posts in the next step](https://i.imgur.com/hrxKD2H.png)

Remember to set the preview for the template.

![Set the preview for the template](https://i.imgur.com/PaYAlW4.png)

![Set the preview for the template](https://i.imgur.com/PdW23UK.png)

First, add a **Section** element with the one-column layout to contain all the information about a dish.

![Add a Section element to contain all the information about a dish](https://i.imgur.com/NTV3T6I.png)

Now, add some elements to display the dish’s information.

For the image of the dish, choose the **Featured Image** element.

![Choose the Featured Image element to display the image of the dish](https://i.imgur.com/KLqtszz.png)

To get the dish’s name, select the **Post Title** element.

![Select the Post Title element to get the dish’s name,](https://i.imgur.com/cIICNX4.png)

Next, choose an **Insert Section** element to cover the price, including the original price and the promotional price.

For the original price information, choose the **Text Editor** element. Since this information is saved in custom fields created by Meta Box, use the Dynamics Tags and find the Meta Box Field in the Post section, then choose the corresponding fields like in the image below.

![Add a Text Basic element and insert dynamic data from the field](https://i.imgur.com/zSjsqln.gif)

As you can see in the gif above, a number will be displayed without a unit of pricing. To have the unit, go to the **Advanced** section, and add the currency unit.

![Add the currency unit](https://i.imgur.com/rmRtv5Q.png)

For the promotional price information, do likewise.

![Get the promotional price information](https://i.imgur.com/iDndhkR.png)

To get the last piece of information - the dish’s description, select the **Post Content** element.

![Select the Post Content element to get the dish’s description](https://i.imgur.com/zDflpft.png)

We’ve just finished getting all of the information about the dish. You can style each element on your own.

## 4. Creating the page

Let’s create a new page for displaying all the dishes which are on sale. Just add a new black page, then edit it with **Elementor**.

### 4.1 Getting all posts

To get all of the posts to display on the page, add the **Loop Grid** element.

![To get all of the posts to display on the page, add the Loop Grid element.](https://i.imgur.com/Allp9z9.png)

In its **Layout** settings, choose the created template. So, you can see that some blog posts will be displayed.

![The display of some default blog posts](https://i.imgur.com/zZ5jEY6.png)

To replace them with your products, go to the **Query** section, and choose **Source** as your product’s post type. Then, all of the posts in that post type display.

![Go to the Query section, and choose Source as your product’s post type.](https://i.imgur.com/bfvoasl.png)

### 4.2 Setting conditions following the criteria

I just want to display which products are currently on sale. Thus, we need a condition based on the value of the **Promotional Price** field to choose which posts will be displayed. To do it, we need a custom query. But, in this current window, **Elementor** does not support it in the builder, so, you should use some code to create one.

You can add the code to the theme’s file directly. In this case, I recommend using the third party plugin - **Code Snippets**. It helps to create the code without accessing the theme’s file. You can install it directly from [wordpress.org](https://wordpress.org/plugins/code-snippets/).

![Use Code Snippets](https://i.imgur.com/1ASOgt7.png)

To create the custom query, go to **Code Snippets** and add new.

![Go to the Query section, and choose Source as your product’s post type.](https://i.imgur.com/Ik2liYR.png)

Then, add some code to the box to set the condition.

![To create the custom query, go to Code Snippets and add new.](https://i.imgur.com/swUB3UF.png)

```css
/**
 * Update the query to use specific post types.
 *
 * @since 1.0.0
 * @param \WP_Query $query The WordPress query instance.
 */
function my_query_by_post_types( $query ) {
	$query->set( 'post_type', [ 'cuisine' ] );
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
		'key' => 'promotional_price',
		'compare' => 'EXISTS'
	];

	$query->set( 'meta_query', $meta_query );

}
add_action( 'elementor/query/my_custom_filter', 'my_query_by_post_meta' );
```

Let’s get through the code in more detail!


![This code is to declare that we’ll query the post type that has this slug - Cuisine.](https://i.imgur.com/fVVYEs5.png)

```
function my_query_by_post_types( $query ) {
	$query->set( 'post_type', [ 'cuisine' ] );
}
add_action( 'elementor/query/my_custom_filter', 'my_query_by_post_types' );
```

This code is to declare that we’ll query the post type that has this slug - **Cuisine**.

`'my_custom_filter'` is the name of the custom query, you can name it as your own. It’ll be used for the following part.

![The line of code is the mentioned condition.](https://i.imgur.com/lSbMkla.png)

```
// Append our meta query
$meta_query[] = [
	'key' => 'promotional_price',
	'compare' => 'EXISTS'
];
```

This line of code is the mentioned condition. It is set based on the value of a custom field with the ID as **promotional price**. My condition is to compare whether any value exists in this field or not. If there is, the post will be displayed.

All of this code is available on [GitHub](https://github.com/wpmetabox/tutorials/blob/master/show-posts-with-a-specific-criteria-with-elementor/custom.php), so you can refer to it.

After adding the code snippet, go back to editing the template of the page. In the **Loop Grid**'s settings >  **Query** > **Query ID** > insert the name of the custom query you created to apply the condition that we want.

![In the Loop Grid's settings >  Query > Query ID > insert the name of the custom query to apply the condition that we want.](https://i.imgur.com/rBd2oqL.gif)

Back to the frontend, you can see all of the dishes along with the information that we’re looking for.

![The final look of displaying post with specific criteria](https://i.imgur.com/V6m7AZn.png)
