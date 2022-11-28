---
title: Displaying the latest products - Meta Box + Elementor
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We’ll create a section and choose the products or posts that are the latest ones to display only on the homepage.

I’ll take the restaurants as an example for products.

![Example of showing latest products](https://i.imgur.com/9K0bmI2.gif)

## Video version

<LiteYouTubeEmbed id='KvYfEO-X4OA' />

## Before getting started

I will show the latest restaurants first and then the oldest ones. Each restaurant is a post of a custom post type. All the extra information of each restaurant such as address, logo, status and voucher will be saved in different custom fields.

So we need some tools for this practice:

* [Meta Box](https://metabox.io/): to have a framework to create custom post types and custom fields;
* [MB Custom Post Type & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create a new post type for the restaurants;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to easily create custom fields for saving extra information of the restaurant.
* [Meta Box - Elementor Integrator](https://metabox.io/plugins/mb-elementor-integrator/): to get data saved in custom fields created by Meta Box in the template of Elementor;
* [Elementor](https://elementor.com/) (Pro version): to build the page and display all the restaurants’ information;
* [Elementor Custom Skin](https://wordpress.org/plugins/ele-custom-skin/): to create a loop to display the listing of posts.

## Step 1: Create a new custom post type

Go to **Meta Box > Post Types > New Post Type** to create a new custom post type.

![Create a new post type for the latest products.](https://i.imgur.com/E0PpYjv.png)

After publishing, you will see a new **Restaurant** menu in the Admin Dashboard.

![A new menu named Restaurant appears.](https://i.imgur.com/YTbt5ZN.png)

## Step 2: Create custom fields

Go to **Meta Box > Custom Fields** to create a new field group. Then, create custom fields as you want.

![Create custom fields for the lastest products.](https://i.imgur.com/hn36nQr.png)

You should set a simple ID to remember since we’ll need them in the next steps.

For the **Status** and **Voucher** information, they are the selections field. So, you can add some options in the **Choices** box like this:

![Add options to the Status field](https://i.imgur.com/miN7Qny.png)

![Add options to the Voucher field](https://i.imgur.com/cZ2IKzD.png)

After creating all the needed fields, move to the **Settings** tab, choose **Location** as **Post Types** and select **Restaurant** to apply these fields to it.

![Choose the post type as Restaurant in Location section.](https://i.imgur.com/gvr0cBD.png)

When you edit any post in the **Restaurant** post type, you’ll see all the created custom fields. Just fill in the data.

![Enter the information into fields.](https://i.imgur.com/qm8DIgf.png)

## Step 3: Create a new template

We’re going to create a template to display the information of the restaurants.

Go to **Templates > Theme Builder** to add a new template .

![Create a new template](https://i.imgur.com/SHuMxdU.png)

Since we’ll have a list of products, choose the template as a loop.

![Choose the template as a Loop.](https://i.imgur.com/tie34CB.png)

Then, remember to set the preview in the **Settings** tab for having a live preview.

![Choose any post of the post type in the Settings tab.](https://i.imgur.com/q3mtdsr.png)

First, add an **Inner Section** element to group some elements that I want to style at once as the featured image, logo and voucher.

![Add an Inner Section to group some elements](https://i.imgur.com/EDvUikT.png)

It has 2 columns inside so I’ll remove one.

![Remove 1 columns in Inner Section.](https://i.imgur.com/nxj2Crh.png)

Next, add a **Featured Image** element into the created Inner Section to show the image of the restaurant.

![add the Featured Image widget into the Inner Section](https://i.imgur.com/n5uCzxR.png)

To get the value of the **Voucher** field, use a **Text Editor** element. Since this field is created by Meta Box, click the **Dynamic Data** button > choose **Meta Box Field** option in the **Post** section and connect it to the corresponding field. In this case, it’s **Voucher**.

![Click on the Dynamic Tags icon > choose Meta Box Field option in the Post section > choose the field you want.](https://i.imgur.com/RkTFBT6.gif)

For the **Logo**, add an **Image** element and also choose the source from a Meta Box field.

![Setting for Logo field.](https://i.imgur.com/MbN8a8r.gif)

Moving on, out of the **Inner Section**, add a **Post Title** element and link it to the **Post URL**.

![add a Post Title widget and link it to the Post URL.](https://i.imgur.com/ls4qZKm.gif)

The **Address** of the restaurant is also saved in a custom field, add a **Text Editor** element and connect it to the corresponding field like we did to obtain Voucher information.

![Settings for Address field](https://i.imgur.com/q9HEYCe.gif)

When users hover over the featured image of the restaurant, I want a text as **View Detail** display, so I add a **Heading** widget here. Rename the **Title** to **View Detail** and link it to the 
**Post URL**.

![Setting for View Detail field.](https://i.imgur.com/dXaufUA.gif)

For the **Status** information, just do the same as the **Voucher** information.

![Setting for Status field.](https://i.imgur.com/zBqWBsP.gif)

Now, you also can see that all the information of the restaurant has been displayed.

## Step 4: Add section to the page

Go to edit the page where you want to display the latest products section with Elementor. I take the homepage as an example.

On the homepage, I created a title for this section, just add the posts below it.

Since there is a list of the latest restaurants, drag the **Posts** element to this position on the homepage for displaying them.

![add the list of the latest products to the position on the homepage](https://i.imgur.com/j5mZjaD.png)

Because I have the **Elementor Custom Skin** plugin. I have an option to set the skin as **Custom**.

![Choose Custom in Skin tab.](https://i.imgur.com/YEEMx3s.png)

Then, select the **Default Template** as the template which we have just created.

Next, in the **Query** section, choose the source as the post type of your products.

![In the Query section, choose the source as the post type of your products.](https://i.imgur.com/BoTDDnq.png)

You can also see some settings for you to display the order of posts. Since we will display the newest posts then the oldest ones, so I set the order by date and choose DESC, which means **Descending** options.

![In the Query section, choose the source as the post type of your products.](https://i.imgur.com/9rh4I3B.png)

All the products are obtained and displayed in the time order: the latest post first, then the older one.

![The result of displaying the latest products section before styling.](https://i.imgur.com/tb3kVVQ.png)

## Step 5: Style the section

### Add CSS code to style each element

To style the section, you can set the CSS classes for each element in the **Advanced** tab.

![In the Advanced tab, set CSS classes to prepare styling for the latest products section.](https://i.imgur.com/V1ONafz.gif)

After setting CSS classes for each element, choose the **Section** element that includes all the elements of the posts. Move to the **Advanced** tab > **Custom CSS** and add code to the box.

![Add code to the box](https://i.imgur.com/aMXgVuT.png)

I uploaded the code I use to [Github](https://github.com/wpmetabox/tutorials/blob/master/display-latest-posts-with-Elementor/custom.css), so you can easily refer to it.

### Create slider effect for the section (Optional)

To have the slider effect, you should use some JS. I use the [Slick Slider library](https://github.com/kenwheeler/slick/tree/master/slick) for it. You can add JS code to the theme’s file or use a 3rd party plugin.

I use [this JS code](https://github.com/kenwheeler/slick/blob/master/slick/slick.min.js), you can refer to it.

I made all the manipulations on the video tutorials above. So if you want to know it in detail, please watch the video above.

Then, go to the homepage and you will see the latest products section has already turned into a slider:

![The result after all steps](https://i.imgur.com/26ZajWu.png)

