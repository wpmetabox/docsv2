---
title: Showing the featured products - Meta Box + Elementor + WP Grid Builder
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We’ll create a section to **display the featured products on the homepage** which is built with Elementor. To choose which product is featured and displayed, we’ll **use a custom field and use a condition based on this field’s value**. The condition will be created with the help of WWP Grid Builder.

I’ll take the restaurants as example for products:

![Example of Featured Restaurant](https://i.imgur.com/HkEGy4I.png)

## Video

<LiteYouTubeEmbed id='w9JLxvGAy4Y' />

## Before getting started

The section is shown as a slider on the homepage. It is provided by WP Grid Builder in the Grid type. In the grid, there are cards, and each one displays information about a restaurant.

![The illustration of Grid and Card in the restaurant section](https://i.imgur.com/9NML7JD.png)

The restaurant's information will be saved in a post of a **custom post type** named **Restaurants**. Their names and images are the titles and featured images of the posts. And other information, such as address, voucher, and logo also will be saved in **custom fields**.

So, here are the tools we need for this practice:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom post type and custom fields;
* [MB Custom Post Types](https://metabox.io/plugins/custom-post-type/): to create custom post types for the restaurants;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to create custom fields to save the extra information of the restaurants;
* [Elementor](https://elementor.com/): to build the page. I use the Elementor Pro;
* [WP Grid Builder](https://wpgridbuilder.com/): to create a condition to choose which restaurants will be displayed.
* **Integrations** between WP Grid Builder and Meta Box, and between WP Grid Builder and Elementor: you can activate them in the Add-ons section of WP Grid Builder.

![Intergrations between WP Grid Builder](https://i.imgur.com/eo20R9C.png)

## Step 1: Create a new custom post type

Go to **Meta Box > Post Types** to create a new post type for the restaurants.

![Create a new custom post type for ](https://i.imgur.com/OyfXcNz.png)

## Step 2: Create custom fields

Go to **Meta Box > Custom Fields**, then create fields as you want.

![Create custom fields for featured restaurants](https://i.imgur.com/qcgRv8D.png)

To select and display which restaurant is featured on the frontend, I’ll create an extra custom field as the **Switch** type.

![Create extra custom field](https://i.imgur.com/tOUm3JX.png)

After creating all the needed fields, go to the **Settings** tab > **Location** > choose **Post Type** as the **Restaurant** post type that we’ve just created to apply the custom fields to it.

![Set location for restaurant post type](https://i.imgur.com/ahZWfHd.png)

In the post editor, you will see all of the newly created custom fields.

![Newly created fields in the post editor](https://i.imgur.com/oYwjdKI.png)

Look at the field which we use to clarify which restaurant is featured, it is in the button style with two statuses. One is the Off status will indicate that you do not want to recommend the restaurant. Otherwise, the On status will let us know that you want to feature the restaurant.

Now, let’s fill in the information for the restaurant into the fields.

## Step 3: Create a card

Go to **Gridbuilder > All Cards > Create a Card**. This is the one to stipulate which information about the products (in this case is the restaurants) will be displayed.

![Create a card](https://i.imgur.com/qlbNjeQ.png)

You can change all the settings of the cards as you want in the **General** section.

To add content to the card, move to the **Blocks** section. First, choose the **Title** block to get the restaurant’s name and drag it to any place where you want to display it.

![Set title, drag and drop to the position you want to display](https://i.imgur.com/qbApMn9.png)

To style the title, go to the **Appearance** tab in the **Edit Block** popup, and change the settings.

![Style the title](https://i.imgur.com/UprwS9C.png)

For the information that is saved in custom fields created by Meta Box, I’ll add a **Custom Field** block.

![Add a custom block to get the information saved in custom fields](https://i.imgur.com/MNvRMls.png)

You can add a class name for the block in the **Class Name** section for styling later.

Also in this popup, the **Source Type** is **Custom Field** by default. To get the data from the field in which we want to display the information, choose the name of the field in the **Custom Field** section.

We do this to display the voucher and address information as well.

The logo of the restaurant is a special one. There’s no pre-built block that supports calling out the image from custom fields, so I’ll create a new custom block. Add the following code to the `functions.php` file:

```php
add_filter(
    'wp_grid_builder/blocks', function( $blocks ) {

        // 'custom_image_block' corresponds to the block slug.
        $blocks['custom_image_block'] = [
            'name' => __( 'Custom image block', 'text-domain' ),
            'render_callback' => function() {

                // Get current post, term, or user object.
                $post = wpgb_get_post();
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

:::info

Just replace the `custom_field_name` by the ID of the custom field that you want to get the image.

:::

![Create a new custom block to get the image.](https://i.imgur.com/r4xqHop.png)

These lines of code are provided by WP Grid Builder. I put it on [Github](https://github.com/wpmetabox/tutorials/blob/0a8495cb82525150d7afacf5c65baea55fd721c8/create-a-simple-listing-using-Meta-Box-and-WP-Grid-Builder/functions.php), so you can refer to it.

Now, go back to the card editor, a new block named **Custom Image Block** will appear. Just add it to the card.

![Choose Custom Image Block to get the restaurant's logo.](https://i.imgur.com/moPVdC6.png)

There is no need to change any options for this block.

That’s all for the card.

## Step 4: Create a grid and condition

### Create the grid to display products

Go to **Gridbuilder > All Grids > Create a Grid**. This is where to display all the products we want to feature.

![Gridbuilder > All Grids > Create a Grid.](https://i.imgur.com/1mU3IzZ.png)

To get the posts that you want to display in the grid, go to the **Content Query** section, and choose the content type as **Post Types**. Then, choose the post type that we’ve just created for the restaurant so that the grid can get all the posts from that post type.

![choose the name of the post type created to get the content to display](https://i.imgur.com/kPnv9cS.png)

### Set the condition

Pay attention to the **Custom Fields** section - an important part. This is where you set the condition to display the restaurants.

![Set the condition to display the restaurants](https://i.imgur.com/Pi3bYW5.png)

We’ll display the restaurants which have the **Switch** field in the On mode only. So, fill in the ID of the **Switch** field in the **Key Field** section.

In the **Fields Type** section, choose **Numeric** since this **Switch** field has two options On or Off with the corresponding value as 1 and 0. They are the numeric type.

Next, just enter **1** into the **Value Field** box to show the restaurants that have the **Switch** field set in the On mode.

### Set style for the grid

For the layout of the grid, you can set this section to be a slider by choosing the **Carousel** option in the **Grid Carousel** section.

![choose the Carousel option in the Grid Carousel section](https://i.imgur.com/6KThSVc.png)

Next, go to the **Grid Builder** section, and set the navigation of the slider.

To stipulate which information displays in the grid, move to the **Card Style** section. Then, set both the **Default Card** and **Post Type Cards** as the **Featured Restaurants Card** which we’ve just created.

![Choose the card styles you want to display for the post as Featured Restaurant](https://i.imgur.com/IWRqW5y.png)

## Step 5: Display the grid on the frontend

Let’s edit the homepage with Elementor. 

Add a section to a place you want to display it on the homepage. Add a **Heading**, name it, and style it as you want.

Then, search for the **Grid** element and drag it into the section. In the **Content** box, we need to choose the grid that we have just created.

![In the Content box, choose the grid that we have just created](https://i.imgur.com/wykz8KD.png)

Then, you’ll see the featured restaurants displayed on the homepage.

![Featured restaurants as displayed on the homepage](https://i.imgur.com/QBwcKeC.png)

## Step 6: Style the section

In the editor for the created grid of WP Grid Builder, go to the **Customization** section and add CSS code.

![Add CSS](https://i.imgur.com/OY8PeaF.png)

I also put this code on [Github](https://github.com/wpmetabox/tutorials/blob/2dcff256452fab4bbd189d8a22a8129a94f2ea50/display-the-featured-restaurant%E2%80%99s-section-wpgridbuilder/custom.css), so you can refer to it.

Now, go to the frontend, you will see a new look of the section. That’s done!

![The new and better look of the section after styling](https://i.imgur.com/HkEGy4I.png)




