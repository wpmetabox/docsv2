---
title: Displaying the latest products - Meta Box + Oxygen
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We’re going to figure out how to have a section for the latest products on the homepage using Meta Box and Oxygen.

I created a latest restaurants section as an example:

![Example of displaying the latest products](https://i.imgur.com/EuKKW6b.gif)

## Video version

<LiteYouTubeEmbed id='2TndR67aQQk' />

## Before getting started

In this case, my products are restaurants. And, I will show the latest restaurants first and then the oldest ones. All the restaurants are posts of a custom post type. Besides basic information such as name and image of the restaurant (which are the title and featured image of the post), the restaurants will have extra information such as address, voucher and logo will be saved in different custom fields.

So, these are several tools we need:

* [Meta Box](https://metabox.io/): to have a framework to create custom post types and custom fields;
* [MB Custom Post Type & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create a new Restaurant post type;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to create custom fields to save the data of the restaurants;
* [Oxygen](https://oxygenbuilder.com/): to build the page for displaying the posts. You should use the 3.9 version or upper to have integration with Meta Box.

## Step 1: Create a new custom post type

Go to **Meta Box > Post Types > New Post Type** to create a new post type for the restaurants.

After publishing, you’ll see a new Restaurant menu in your dashboard.

![Create a new custom post type](https://i.imgur.com/07DcNhO.png)

## Step 2: Create custom fields

Go to **Meta Box > Custom Fields** to add a new field group.

![Create custom fields](https://i.imgur.com/UzCCNUn.png)

Note that when configuring the fields, you should choose the **easy-to-remember** labels and IDs since we’ll need them in the next step.

As for the **Status** and **Voucher** field, they’re selection field so we’ll have the **Choices** box to add options like this:

![create the needed fields](https://i.imgur.com/v4ZGH5g.png)

![the created fields appear in the post editor](https://i.imgur.com/5SvFuGM.png)

After creating all the needed fields, go to the **Settings** tab, choose **Location** as **Post Type** and select **Restaurant** to apply these fields to it.

![Set location for the custom fields](https://i.imgur.com/OWPyU0n.png)

When creating a new post in the **Restaurant** post type, the custom fields are there.

![The custom fields in the post editor](https://i.imgur.com/AvwlKLv.png)

## Step 3: Add a section for the latest products section

### Create and configure the section

Let’s edit the homepage with Oxygen.

![edit the homepage with oxugen](https://i.imgur.com/Dr8Hh8R.png)

Since the latest products section is a list of posts, we'll choose the **Repeater** component.

In this component settings, choose **Query > Custom > Post Type**, then search for the post type you want to get posts. In this case, it’s Restaurant.

![Search the wanted post type](https://i.imgur.com/cZbISWW.gif)

### Display products information into the section

To display restaurant’s information, add some components to show them such as name, featured image, voucher and so on.

First, to display the image of the restaurants which is the featured image of the post, add the **Featured Image** component.

![Add the featured image component](https://i.imgur.com/p0Xta9O.png)

Then, all the featured images have been obtained.

![All the images have been obtained](https://i.imgur.com/qEvXZJZ.png)

To display the name of the restaurant (which is the post title), choose the **Text** component. Then, connect this component to the post title to get dynamic data. Click the **Insert Data** button > **Post** section and choose **Title**.

![Connect the text component to the post title](https://i.imgur.com/o0kBW3B.gif)

For the address information which is saved in a custom field created by Meta Box, choose the **Text** component as well > connect to a **Meta Box field** to get the data.

![Connect to a meta box field to get the data](https://i.imgur.com/5xauy4K.gif)

Then, the addresses corresponding to each restaurant will be obtained.

![The corresponding addresses to each restaurant will be obtained](https://i.imgur.com/L347E1G.png)

For other information including status, voucher, do likewise.

For the logo, it’s a single image field, so I choose the **Code Block** component and also set it as **PHP & HTML**.

![Choose the code block component for the logo](https://i.imgur.com/NGhmyMM.png)

Add this code below to the box.
```php
<?php
    $image = rwmb_meta( 'logo', array( 'size' => 'origin' ) );
    echo '<img src="', $image['url'], '">';

?>
```

![Add the code](https://i.imgur.com/CqF0XJE.png)

**Explanation**:

* `$image = rwmb_meta( 'logo', array( 'size' => 'origin' ) );` is used to get the data from the Logo field;
* `echo '<img src="', $image['url'], '">';` is used to display the image.

After saving the changes for the page, you will see all the information of the restaurants has been displayed.

![all the information has been obtained](https://i.imgur.com/MZ15y7n.gif)

## Step 4: Style the section

### Add CSS code to style each element

To style the section, I will restructure some components and set CSS classes for them.


![Restructure some components to style the section](https://i.imgur.com/CUmsUXy.gif)

![Set css classes](https://i.imgur.com/wmRhexi.png)

Then, still in the Oxygen preview, choose **Manage > Stylesheet** and **Add Stylesheet** to add some CSS.

![Add Stylesheet to add some css](https://i.imgur.com/zXm13Wc.gif)

### Create slider effect for the section (Optional)

To have the slider effect, you should use some JS. I use the Slick Slider library for it. You can add JS code to the theme’s file or use a 3rd party plugin.

I made all the manipulations on the video tutorials above. So if you want to know it in detail, please watch the video above.

Then, go to the homepage and you will see the latest products section has already turned into a slider:

![The product section turn into a slider](https://i.imgur.com/EuKKW6b.gif)
