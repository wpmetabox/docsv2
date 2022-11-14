---
title: Creating a simple listing - Meta Box + WP Grid Builder
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We’ll use WP Grid Builder to **create an archive page for restaurants** and then **get data stored in the custom fields of Meta Box**. The filters based on custom fields values are also available, as you can see in the below picture.

![The structure of a simple listing page using WP Grid Builder + Meta Box](https://i.imgur.com/qK10425.png)

## Video version

<LiteYouTubeEmbed id='YP7sMXHdf_Q' />


## Before getting started

All of the restaurants' information will be saved in a **custom post type**, and each restaurant will be a post. The restaurant’s name and image are the default title and featured image of the post. And other information such as status, address, voucher, and logo will be saved in different **custom fields**.

On the page, we’ll have **Card**, **Grid**, and **Facet** as the following:

![The illustration of Card, Grid, Facet on the listing page](https://i.imgur.com/vsYIhRa.png) 

* **Card**: is a box to show up a restaurant information.
* **Grid**: is an area to list all the restaurants.
* **Facet**: is the filter and sort.

In the upcoming execution, we’ll create them one by one.

To do it, we need the [Meta Box core plugin](https://wordpress.org/plugins/meta-box/) and some of its extensions, including:

* **MB Custom Post Type**: to create custom post types for the restaurants;
* **Meta Box Builder**: to have a UI in the back end to create custom fields to save extra information about restaurants.

Next, we need **[WP Grid Builder](https://wpgridbuilder.com/)** to build the page.

And the last one, make sure that you installed the integration between WP Grid Builder and Meta Box by installing and activating it in the **Add-ons** section of WP Grid Builder. This will support all the fields created by Meta Box and filter the content from custom fields easily.

![Activate Meta Box plugin](https://i.imgur.com/BjrWQ5L.png)

## Step 1: Create a new custom post type and custom fields

Go to **Meta Box** > **Post Types** to create a new post type for your restaurants.

![Create a new post type for your restaurant](https://i.imgur.com/6KH6CwD.png)

To create custom fields, go to **Meta Box** > **Custom Fields** > **Add New**.

![Create custom fields for the custom post type](https://i.imgur.com/nun5Rt6.png)

You can refer to this tutorial to know how to create them.

## Step 2: Create a card

Go to **Gridbuilder** > **All Cards** > **Create a Card**.

![Go to Gridbuilder then All Cards and Create a Card](https://i.imgur.com/4qQ1rSm.png)

In the settings of the card, I keep the default in the **Card Layout** and **Card Sizing** settings. You can customize all these settings if you want.

![Keep the default in the Card Layout and Card Sizing settings](https://i.imgur.com/vKsZ39W.png)

Pay attention to the **Card Type** options. The option you select, the one appointed to the grid layout.

To add content to the card, move to the **Blocks** tab, choose the **Title** block to get the restaurant’s name, and drag it to any place where you want to display the name.

![Choose the Title block to get the restaurant’s name](https://i.imgur.com/DAGUocx.png)

Since the address information is saved in a custom field created by Meta Box, choose the **Custom Field** block to get it. In the **Edit Block** popup, name the class for styling later. Then, search for the label or ID of the field you want to get data from.

Do likewise with the voucher and status information.

The logo of the restaurant is a special one. There’s no pre-built block that supports calling out the image from custom fields, so I’ll create a new custom block.

Add the following code to the `functions.php` file:

```php
add_filter(
    'wp_grid_builder/blocks', function( $blocks ) {

        // 'custom_image_block' corresponds to the block slug.
		    $blocks['custom_image_block'] = [
            'name'            => __( 'Custom image block', 'text-domain' ),
			      'render_callback' => function() {

				        // Get current post, term, or user object.
                $post  = wpgb_get_post();
                $image = get_post_meta( $post->ID, 'custom_field_name', true );

				        if ( empty( $image ) ) {
					          return;
				        }

				        $source = wp_get_attachment_image_src( $image );

				        if ( empty( $source ) ) {
					          return;
				        }

				        printf(
					          '<img src="%s" width="%s" height="%s">',
					          esc_url( $source[0] ),
					          esc_attr( $source[1] ),
					          esc_attr( $source[2] )
				        );

			      },
		    ];

		    return $blocks;
    }
);
```
This code is officially provided by WP Grid Builder. I put it on [Github](https://github.com/wpmetabox/tutorials/blob/master/create-a-simple-listing-using-Meta-Box-and-WP-Grid-Builder/functions.php) so you can refer to it. Your work is just inserting the ID of the custom field that you want to get the image into the above code.

![Create a new custom block to get the image](https://i.imgur.com/4aNaVUj.png)

Go back to edit the card, you will see a new block named **Custom Image Block**, then add it to the card.

![Choose Custom Image Block to get the restaurant's logo](https://i.imgur.com/vFOZdyv.png)

We’ve done all the settings for the card.

## Step 3: Create a grid

Open **Gridbuilder** > **All Grids** > **Create a Grid**.

![Gridbuilder &gt; All Grids then Create a Grid](https://i.imgur.com/ApxTo14.png)

To get the content from the post type that you want to display in the grid, go to the **Content Query** section and choose the post type that we’ve just created.

![In the Content Query section and choose the post type that we’ve just created](https://i.imgur.com/e6g5zRH.png)

For the layout of the grid, it is automatically chosen as the option the same as the **Card Type** of the Card you set before. You cannot choose different options. For example, it is **Mansory** here since I set the **Card Type** as the same option.

![Grid Layout settings](https://i.imgur.com/1S1pt57.png)

Then, go down to the **Grid Responsivity** section, adjust the number of columns and spacing of the display on different device screens.

Next, in the **Card Styles** section, set both the **Default Card** and **Post Type Cards** as the **Restaurant Card** which we’ve just created.

![In the Card Styles section, set both the Default Card and Post Type Cards as the Restaurant Card which we’ve just created](https://i.imgur.com/GUDFPce.png)

## Step 4: Create a facet

To create a facet, go to **Gridbuilder** > **All Facets**.

There’re a lot of pre-made facets that you can use instantly. In my case, I choose the **Selection** facet for my filter and the **Sort** facet to arrange content in order. Then, just import data into these ones instead of creating a new facet.

![Choose the facet types and import data to these ones instead of creating a new facet](https://i.imgur.com/BJwTwGk.png)

First, let’s change some settings of the **Selection**. In the **Behaviour** section, you can see that this facet is set as a filter already.

![Change some settings of the Selection](https://i.imgur.com/yRdBRxu.png)

You can choose any filter type you want. Here, I chose **Dropdown** for example, then the filter will display like this:

![The example of a dropdown list](https://i.imgur.com/Y0lqD99.png)

Next, scroll down, and you will see the **Filter By** section. It’s the most important setting for the facet. There are 3 options of **Data Source** that you can choose from.

![The settings in Filter By section](https://i.imgur.com/NDMavni.png)

In this practice, I want to filter restaurants by voucher so that users can see which ones have a 30% or 50% discount, for example. This kind of information is saved in the custom fields created by Meta Box. So, choose **Custom Field** and select the field you want.

For other settings, I keep them as default.

With the **Sort** facet, I also keep it as the default settings. You can remove or add more options for sorting in this section.

![The settings of Sort Facet](https://i.imgur.com/omLPAvH.png)

## Step 5: Create the archive page

Go to **Page** > **Add New**.

As the example that I've shown, the page is divided into 2 sections. One is for the facets with 2 columns, and another one is for the restaurant's information.

For the first section, I add columns and choose **50/50**. In each column, add a **Facet** block inside, then choose the corresponding one. For example, I add the filter named **Selection** and choose the grid named **Restaurant Grid**. It allows you to filter content from that grid.

The second column will be set as the sort. I also chose the grid named for the sort Restaurant Grid.

![Chooose the grid name for Restaurant grid](https://i.imgur.com/2ZpWmDe.gif)

For the second section, it is the content about the restaurant. I’ve already created a grid for it. Thus, add a **Grid** block and choose your created one.

![Add a Grid block and choose your created one](https://i.imgur.com/1n7wLdA.gif)

Now, all of the restaurant’s information is displayed. And you can see that the filter and sort work well.

![The result after all steps](https://i.imgur.com/t1kxMYs.gif)

## Step 6: Style the page

In this practice, I’ll add some CSS and JS code to style the section a little bit in the WP Grid Builder.

Instead of adding code to the theme file, we’ll go to **Customization** in the grid’s settings of WWP Grid Builder, then add code to the corresponding boxes.

![Add code to the Custom CSS box in Customization section](https://i.imgur.com/HfdIdgM.png)

![Add code to the JavaScript box](https://i.imgur.com/j69PI6l.png)

This JS code is to style the status data to set it displays as a dot with colors as following.

![2 statuses of the restaurant](https://i.imgur.com/FSNO33g.png)

I put all the code on [Github](https://github.com/wpmetabox/tutorials/blob/master/create-a-simple-listing-using-Meta-Box-and-WP-Grid-Builder/custom.css), so you can refer to it for more details.

Back to the page, all of the information is displayed more beautifully, especially the restaurants’ status and logos.

![The restaurants’s status and logos are displayed beautifully in the listing page](https://i.imgur.com/A2NLv5h.png)

