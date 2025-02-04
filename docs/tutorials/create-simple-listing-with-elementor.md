---
title: Creating a simple listing - Meta Box + Elementor
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Today, we’ll create a **simple listing with Meta Box and Elementor**. We’ll use custom fields and taxonomies from Meta Box to **showcase product information on an archive page as well as filter it easily**.

As an example, we have an archive page with a list of restaurants.

![An example of an archive page that shows a list of products.](https://i.imgur.com/1ov7T6L.png)

## Video version

<LiteYouTubeEmbed id='6mHDBIO_qlY' />

## Preparation

There’s something we should clarify before getting started.

In the backend, we will need a **custom post type** for the products as well as the restaurants, and each one of them will be saved in a post. The restaurant’s name and image are the title and feature images of the post. We also have some extra information for the restaurant, that your products also might have as well, and all of them will be saved in different **custom fields**.

On the frontend, means the listing page, we’ll divide the page into 2 sections: one to display the products and their information, and one for the filter.

![2 sections of the page: one to display the products and their information, and one for filters](https://i.imgur.com/EGbGWex.png)

Each box like this image below is for each product, and we will create a template in the type of a loop item in **Elementor** to get the product information.

![Create a loop item template to get information about a product.](https://i.imgur.com/zxlPAN6.png)

The filter is based on the voucher information that is created in the form of a taxonomy. Each one is a term of that taxonomy.

Before going ahead, let's check which tools are needed for this practice.

To create a custom post type, taxonomy, and custom fields for products, we need the [Meta Box core plugin](https://wordpress.org/plugins/meta-box/). You can install it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/). Besides, you may want some Meta Box extensions for the advanced features. You can install them individually or use Meta Box AIO.

Here are the extensions we need:

* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type and custom taxonomies for products;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create the custom field efficiently;
* [MB Views](https://metabox.io/plugins/mb-views/) (optional): to get and display the status of the restaurants;
* [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) (optional): to display custom fields as a column in the admin screen.

Finally, we’ll use **Elementor** to build the page and use **Elementor Pro**, which has integration with Meta Box, to display the information from custom fields.

## 1. Creating a new post type

Go to **Meta Box** > **Post Types** to create a new post type for your products.

![Create a new post type for your products](https://i.imgur.com/l7gvWIM.png)

After publishing, you will see a new menu in your dashboard. It’s your post type.

## 2. Creating custom fields

Your products may have some extra information, so we need custom fields in this case. Just go to **Meta Box** > **Custom Fields** > **Add New** to create some fields for it.

![Go to Meta Box > Custom Fields to create some custom fields for your products’s extra information](https://i.imgur.com/YSmZ89L.png)

I just create some typical ones for illustration purposes only.

After creating all the needed fields, go to the **Settings** tab. Choose **Location** as **Post type** and select **Restaurant** to apply these fields to this post type.

![Set location to apply the fields to your product post type.](https://i.imgur.com/EI2FtmB.png)

## 3. Creating a new taxonomy

As mentioned, we’ll have a filter on the page based on a taxonomy. I will divide the vouchers into some discount levels, and each one of them will be a term of the taxonomy. So let’s move on to create them.

Go to **Meta Box** > **Taxonomies** to create a new taxonomy.

![Go to Meta Box > Taxonomies to create a new taxonomy](https://i.imgur.com/KhU6ngP.png)

In the **Advanced** section, check the **Hierarchical** box if you want to show the taxonomy in a hierarchy.

If you want to display it as a column in the admin screen, check the **Show admin column** box. This setting is available when you have the [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) extension.

![In the Advanced section, check the Hierarchical option to show the taxonomy in a hierarchy, and Show admin column option to show it as an admin columnmy](https://i.imgur.com/IkNNrG9.png)

In the **Post Types** tab, choose the product post type that you’ve just created to apply this taxonomy to it.

![Choose the products post type to apply taxonomy to it.](https://i.imgur.com/xiWzJQl.png)

Now, you can add some terms to your product’s taxonomy.

![Add some term for your product’s taxonomy](https://i.imgur.com/zYa5QrF.png)

Now, in the post editor of your products, you will see the custom fields as well as the voucher items appearing on the right sidebar.

![The terms of the created taxonomy and the custom fields displayed in the post editor](https://i.imgur.com/rvseFQe.png)

Just input data into them.

Here are some example posts that I've created. And you can easily view the voucher information from the created taxonomy directly in the admin column.

![The voucher information from the created taxonomy directly in the admin column.](https://i.imgur.com/jUrOWvs.png)

## 4. Displaying the product information

As I mentioned before, we should create a loop item template to display all the expected information about the product first. So, go to the **Elementor Theme Builder** and create it.

![Go to the Elementor Theme Builder to create a loop item.](https://i.imgur.com/DYPSHoR.png)

![Create a loop item template to display all the expected information about the product.](https://i.imgur.com/N8mHuEC.png)

Remember to set the preview.

![Set the preview for the template](https://i.imgur.com/GGS6zGF.png)

First, add a section with a one-column layout to contain all the information about a product.

![Add a section with a one-column layout to contain all the information about a product](https://i.imgur.com/mq115Rl.png)

Now, add some elements to display the product’s information.

To display the restaurant’s image, add the **Featured Image** element.

![Add the Featured Image element to display the restaurant’s image.](https://i.imgur.com/GS6Eo1F.png)

For the name of the restaurant, choose the **Post Title** element as the restaurant’s name is the post title.

![Choose the Post Title element as the restaurant’s name is the post title](https://i.imgur.com/FUh5qBC.png)

Go ahead! Add a **Text Editor** element for the restaurant’s address. Since this information is saved in custom fields created by Meta Box, use the **Dynamic Tags**, find the **Meta Box Field** in the **Post** section, and then choose the corresponding fields.

![Add a Text Editor element for the restaurant’s address and use Dynamic Tags](https://i.imgur.com/8Itzngw.png)

![Add a Text Editor element for the restaurant’s address and use Dynamic Tags](https://i.imgur.com/4bZtQt2.png)

Now, the restaurant’s address is displayed immediately.

![The restaurant’s address is displayed](https://i.imgur.com/svRkQV8.png)

In the same way, choose an **Image** element to show the logo. Also, use the **Dynamic Tags** to connect this element with the field. Then, you can see the logo of the restaurant.

![Choose an Image element to show the logo](https://i.imgur.com/ofreCW3.gif)

The last thing is the status. It has two colors and will change based on the values saved in the custom fields. To make it auto-changed, we should use a dynamic class, then use CSS to make it the right color automatically. But Elementor doesn't support dynamic classes. So, I will use the **MB Views** to display the status of the restaurant.

Now, go to **Meta Box** and create a new view. Then, add some code to the **Template** tab.

![Use the MB Views to display the status of the restaurant.](https://i.imgur.com/j58UxUk.png)

**In there**:

`{% set restaurant_status = mb.rwmb_meta('status') %}`: is to create a variable to get the value from the **Status** field. We use the `rwmb_meta('status')` function to get value. And status is the ID of the field.

We have a condition. If the variable receives the value as open, we will name a class as `restaurant-status` open. Otherwise, if the returned value is close, we will name a class as `restaurant-status` close.

Now, set this template as a shortcode.

![Set the template as a shortcode](https://i.imgur.com/CtyvIll.png)

After publishing, a shortcode is generated automatically. Just copy it.

![A shortcode is generated automatically](https://i.imgur.com/b6SgUxq.png)

Back to edit the template for your products, choose a **Shortcode** element. And paste the created one in this box below.

![Choose a Shortcode element and paste the created one.](https://i.imgur.com/NFWuLFH.png)

So, we’ve done a loop item for the product. Let’s move on.

## 5. Creating the page

Go to **Pag**es and create a new one, as usual.

![Create a new page for the products](https://i.imgur.com/AnInt80.png)

### 5.1 Getting posts

For displaying posts, I meant products, we had a template for each post. So now, add the **Loop Grid** element.

![Add the Loop Grid element](https://i.imgur.com/qQXiAeF.png)

Choose the template that we have created.

![Choose the template that we have created](https://i.imgur.com/PDClN8u.png)

You can see that some blog posts display in the form that we set for the template, but they are wrong. They are blog posts by default.

To replace them with your products, go to the **Query** section and choose the **Source** as your product’s post type.

![To replace default posts with your products, choose the Source as your product’s post type.](https://i.imgur.com/95DaJ6l.png)

Then, all of the posts in that post type will display.

![All of the posts in that post type will display](https://i.imgur.com/xpfK7xo.png)

All the information about my product is displayed, except the status. We will fix it using CSS later.

### 5.2 Adding filters

For the filter section, just add the **Taxonomy Filter** element to the place you want

![For the filter section, add the Taxonomy Filter element](https://i.imgur.com/WcktTMv.png)

Then, select a loop grid and the taxonomy we used for the voucher. After that, a list of the discount levels that we set as the terms of the taxonomy will be displayed.

![Select a loop grid and the taxonomy we used for the voucher](https://i.imgur.com/gDb369l.png)

You can see how it works on the frontend. The status doesn’t display since it is still a class and hasn't been set to display yet.

![The status doesn’t display since it is still a class and hasn't been set to display yet.](https://i.imgur.com/A4CtYNC.gif)

## 6. Styling the page

Go back to the created template as a loop item for each product. Just customize each element's settings to have the best look for product information.

![Customize each element's settings](https://i.imgur.com/g6QtDJ1.png)

In the page editor, do so with the settings of each element.

To display and style the restaurant status, we will add some CSS.

![Add some CSS to display and style the restaurant status.](https://i.imgur.com/aWGDa4B.png)

**In there**:

These lines of code are to regulate the shape:

```css
.restaurant-status {
    width:20px;
    height:20px;
    border-radius:50%;
}
```

`background:#26e126` and `background:#eee` are the different colors used for the `.restaurant-status.open{ class` and the .restaurant-status.close{ class, respectively.

As a result, there is a new dot in the image of each product. Some are green, and some are gray.

Here is the final look of my simple listing page.

![The final look of my simple listing page](https://i.imgur.com/HuGC1xB.gif)

