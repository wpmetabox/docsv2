---
title: Creating a simple listing - Meta Box + Kadence
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Today we’re going to try a new way to do it with **Kadence**. We also **display the products with information** on a page and **filter them** as well.

As an example, we have an archive page with a list of restaurants.

![An archive page with a list of restaurants](https://i.imgur.com/vetbHVm.gif)

## Video version

<LiteYouTubeEmbed id='-lJPyhjGu2c' />

## Preparation

The page into two sections: one to display the products along with their information, and one for filters.

![Sections display restaurant information and filters](https://i.imgur.com/Uqeuxuo.png)

Each product (restaurant) will be saved in a post of a custom post type. For the product information, the name and image are the title and feature images of the post. Other information such as status, address, and logo will be saved in different custom fields.

Regarding the filers, it’s based on a custom taxonomy that I created for the products.

So, we need to have these tools:
* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to create the custom post type, taxonomy, and custom fields for the products. You can install it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/);
* [MB Custom Post Types & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create a custom post type and custom taxonomy for the products;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI in the backend to create the custom fields visually;
* [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) (optional): to display custom fields or taxonomy as a column in the admin screen;
* **Kadence** and its pro version to have some extra types of blocks to build the page.

## 1. Creating a custom post type

Go to **Meta Box** > **Post Types**, and create a new post type for your products.

![Go to Meta Box > Post Types and create a new post type for your products](https://i.imgur.com/h97VZVv.png)

After publishing, the created custom post type will be displayed in the admin dashboard.

![The created custom post type is displayed in the admin dashboard](https://i.imgur.com/65s9O74.png)

## 2. Creating custom fields

As mentioned, we should create some custom fields to store the extra information for the products.

Go to **Meta Box** > **Custom Fields**, and create the fields.

![Go to Meta Box, Custom Fields, and create the fields to store extra information](https://i.imgur.com/fhVPaqB.png)

Here are some typical custom fields I created.

![Some typical custom fields created](https://i.imgur.com/MYxpiid.png)

There’s no special setting for them. You can freely create more fields to store information for products as you want with 40+ field types provided by Meta Box.

After creating all the wanted fields, go to the **Settings** tab, choose **Location** as **Post type**, and select your post type to apply these fields to it.

![Go to the Settings tab, choose Location as Post type and select Restaurant to apply these fields to this post type](https://i.imgur.com/Cq0zlSn.png)

## 3. Creating a new taxonomy

As I said, we’ll have a filter on the page based on a taxonomy. I will divide the vouchers into some discount levels, and each one of them will be a term of the taxonomy. So let’s move on to create them.

Go to **Meta Box** > **Taxonomies**, and create a new one.

![Go to Meta Box > Taxonomies and create a new taxonomy](https://i.imgur.com/f6oW9rS.png)

In the **Advanced** section, check the **Hierarchical** box if you want to show the taxonomy in a hierarchy. As well as, if you want to display it as a column in the admin screen, check the **Show admin column** box. (This setting is available when you have the [MB Admin Column](https://metabox.io/plugins/mb-admin-columns/)s extension).

![In the Advanced section, check the Hierarchical option to show the taxonomy in a hierarchy, and Show admin column option to show it as an admin column](https://i.imgur.com/dte7tEE.png)

In the **Post Types** tab, choose the post type that you’ve just created to apply this taxonomy to it.

![Choose the product post type that you’ve just created](https://i.imgur.com/dQLfQDd.png)

Now, you can add some terms to your product’s taxonomy.

![Add some terms to your product’s taxonomy](https://i.imgur.com/4fxLkfB.png)

After that, when creating a new post in the Restaurant, you will see the custom fields, as well as the terms of taxonomy appearing.

![Custom fields and the terms of taxonomy appear](https://i.imgur.com/Z2SseK9.png)

Just fill in the information.

Here are some example posts that I've created.

![Some example posts and the voucher information from the created taxonomy](https://i.imgur.com/gwkwfLv.png)

And, you can easily view the voucher information in a column.

## 4. Creating a query card for the products

To display information about each product, you need to create a query card. It allows us to define the template for individual posts.

Go to **Kadence** > **Query Cards** to create a new one.

![Go to Kadence > Query Cards to create a new one](https://i.imgur.com/tsDlOYJ.png)

Choose one layout that you want.

![Choose one layout that you want](https://i.imgur.com/RXkPx32.png)

Then you will see some default blog posts displayed. We should change these posts to the post type that we use for the products for more accurate preview.

Move to the right sidebar, set the **Preview post type** as your product post type. Pay attention that this affects the preview only, since we haven’t set any query to query the posts yet.

![Set the preview post type to your product post type](https://i.imgur.com/SUeHMV9.png)

Then, you will see that the feature image and title of the post are the same exactly with the ones you set for each product. It’s because I chose a template for this query card at first. You can check them all once again. They all have been automatically set as dynamic and chose the corresponding fields.

![The feature image and title of the post are displayed](https://i.imgur.com/vuz02Ip.png)

Next, we’ll add some blocks to display restaurant information from custom fields created with Meta Box.

To display the restaurant's address, add the **Advanced Text** block.

![Add the Advanced Text block to display the restaurant's address](https://i.imgur.com/rC4K8mU.png)

Then, enable dynamic content, and choose the **Content** as **Post Custom Field** since the address is saved in a custom field. Then, select the field name from the list.

![Enable dynamic content, and choose Post Custom Field then choose the field name](https://i.imgur.com/ZSZCXyC.png)

For the logo, choose the **Advanced Image** block.

![Add the Image Advanced block for the logo](https://i.imgur.com/IGkPXkT.png)

And, add dynamic data for it as well. Choose the **Post Custom Field** option, and select the name of the field that saves the logo.

![Add dynamic data, choose the Post Custom Field, and select the name of the field that saves the logo](https://i.imgur.com/njp8FDf.png)

For the status about the opening or closing time, also add another **Advanced Text** block.

![Add another Advanced Text block for the status](https://i.imgur.com/zahRynK.png)

With this information, we don't use dynamic data as commonly. ince the status has two values,we should add conditions to choose which value will be displayed.

In the **Advanced** section of the **Dynamic Content** settings, we should add a **div** tag as fallback content. This means that this block will display the context as ‘open’.

![In the Advanced section, add a div tag as fallback content to display the context as ‘open’](https://i.imgur.com/N2emDuR.png)

On the right sidebar, enable the **Conditional Display** option in the **Advanced** settings of the block. 

![In the Advanced settings of the block, enable the Conditional Display option](https://i.imgur.com/eQwh1oy.png)

Then, set the **Conditional** option as **Post Custom Field**, and set the name of the **Status** field. At the same time, add the comparison as equal to `open`, which is the value of the ‘open’ option that we saved in the custom field. It means that this block with the text `open` will be displayed only when the field is set as open.

![Set the Conditional option as Post Custom Field, then set the name of the Status field](https://i.imgur.com/8ZYijes.png)

We will have another **Advanced Text** block for the close status as well. Do exactly the same, but change the class and condition a little bit. Also, change the **div** tag to set the context of this block as ‘**close**’. 

![Change the class and condition for close status](https://i.imgur.com/C9vL2Om.png)

Now, in the setting of the **Conditional Display** section, the value will be close. When the field is set as close, this block will be displayed. Of course, then the block for the open status won’t be displayed.

![Set the condition and value for close status](https://i.imgur.com/62noF4k.png)

The products are displayed with all the information we want. Save this card, and move to the next step.

## 5. Adding a query

We have finished setting the display layout and data of each product. In this step, we will show them all in a layout, also add a filter.

Go to **Kadence** > **Queries** to create a new query for the product.

![Go to Kadence > Queries to create a new query for the product](https://i.imgur.com/V0ZigBa.png)

We are going to have a simple listing page with filters. There are also some options for its layout, just choose one.

![Choose one layout.](https://i.imgur.com/ZJ0l8Md.png)

In the **Post Types** settings, set the post type of your products. This helps to query posts from this post type. 

![Set the post type of your products in the Post Types settings](https://i.imgur.com/9BdraGw.png)

Now, set the name of the query card that we’ve just created. This helps to inherit the style and data of displaying each post from this card.

![Set the name of the query card that we’ve just created](https://i.imgur.com/CNLXLwG.png)

In the **Filter** block, set its source as **Taxonomy** as default, and choose the name of the taxonomy that I used for the product. It’s **Voucher**.

![Set source as Taxonomy as default, and choose the name of the taxonomy for the restaurants](https://i.imgur.com/twwWjA7.png)

So, we’ve done the layout and filter.

## 6. Creating the simple listing page

Just create a page as usual.

![Go to Page > Add New Page to create a new page](https://i.imgur.com/lBZQqzr.png)

Next, add the** Advanced Query Loop** block to add the products and filters from the created layout into the page. 

![Add the Query Loop Advanced block](https://i.imgur.com/716bzR3.png)

Set the name of the query that we created in the previous step. 

![Set the name of the query that we created](https://i.imgur.com/OrXD94P.png)

Move to the page on frontend, you will see the information of all the restaurants and also the filter displayed accurately. You can try clicking on some terms on the filter bar, they’ll work well.

![The information of all the restaurants and also the filter displayed accurately](https://i.imgur.com/5ty1erc.gif)

## 7. Styling the page

To style the page, you can go back to the page editor, or the query to modify the layout. For the display of each product, you should go back to edit the query card. 

This is the page after taking some actions to modify.

![The page got a better look](https://i.imgur.com/vetbHVm.gif)

You also can try to [create a listing page with advanced filters with UI](https://docs.metabox.io/tutorials/create-simple-listing-meta-box-wp-grid-builder/) provided by Meta Box Builder.
