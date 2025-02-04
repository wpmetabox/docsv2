---
title: Filtering posts by custom fields with FacetWP
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

On an archive page, we’ll display posts and filter them by the values stored in the custom fields created by Meta Box. With the help of FacetWP, we can do it easily without coding.

Here is the page about the restaurants I created as an example:

![Two sections of the page](https://i.imgur.com/KcIh5xL.gif)

## Video version

<LiteYouTubeEmbed id='kjkVaC_QKQs' />

## Before getting started

There are some things that need to be clarified. On the page, we’ll have two sections. One is used to filter the restaurants by conditions. We’ll create this part using FacetWP. The second part is to show up all the restaurants.

![Two sections of the page](https://i.imgur.com/1KwGTbg.png)

All the information of the restaurants is saved in a custom post type. Each restaurant is a post of a custom post type. Besides the basic information such as name and image of the restaurants which are the post title and featured images, other additional information will be saved in different custom fields.

In the upcoming execution, we’ll create them one by one. No matter if you’re using any page builder or not, you can also use FacetWP to filter posts as I’m doing in this practice.

There are the tools we need:

* [Meta Box](https://metabox.io/): to have framework to create custom post types and custom fields;
* [MB Custom Post Types & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create a new post type named Restaurant;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have an intuitive UI to create custom fields for saving restaurants’ information;
* [MB FacetWP Integration](https://metabox.io/plugins/meta-box-facetwp-integrator/): to create a filter based on the Voucher field;
* [Meta Box Elementor Integrator](https://metabox.io/plugins/mb-elementor-integrator/): to connect and display custom fields created by Meta Box in the Elementor’s dynamic tags;
* **Elementor** (pro version): to have integration with Meta Box to build the page;
* **Elementor Custom Skin**: to create a template as a loop to display the list of restaurants.

## 1. Creating a custom post type

Go to **Meta Box > Post Types > Add New** to create a new post type.

![Create a custom post type](https://i.imgur.com/6sOZGUC.png)

After publishing, we’ll have a new **Restaurants** menu in the admin dashboard.

![The created post type appears in the admin dashboard](https://i.imgur.com/TnHSOKQ.png)

## 2. Creating custom fields

Go to **Meta Box > Custom Fields** to create a new field group. Here are the field that I created:

![The created custom fields](https://i.imgur.com/z2NgC9J.png)

For the **Voucher** information, choose the **Checkbox list** field to allow adding some options in the **Choices** box. These options will be used as a condition to filter posts when creating a filter section in the next step.

![Choose the Checkbox list field for the Voucher information to add some options in the Choices box](https://i.imgur.com/CAFAseK.png)

After creating all the needed fields, move to the **Settings** tab, choose **Location** as **Post Type** and select **Restaurant** to apply these fields to this post type.

![Set Location for the created post type](https://i.imgur.com/aH4gsoe.png)

When creating a new post in Restaurant post type, you’ll see all the created custom fields:

![All created custom fields appear in a new post of the created post type](https://i.imgur.com/kNNgVlz.png)

## 3. Creating a template

Depending on the page builder you’re using, there will be some differences in the creating page and template. You may need to create a template for the page or edit the page directly.

In this case, with Elementor, we need to create one. This template is to display all the posts along with their information. About the filter section, we’ll create it later.

Since we’ll have a list of restaurants on the page, we need a special type of template which is a loop. This option is provided by **Elementor Custom Skin**. You can try it.

Go to **Templates > Theme Builder** and choose **Loop**.

![Go to Templates and then Theme Builder](https://i.imgur.com/j1X9403.png)

![Choose Loop option](https://i.imgur.com/C3XZx7u.png)

Remember to set the preview for the template.

Since the image and name of the restaurants are the featured image and title of the post, add the **Featured Image** and **Post Title** elements.

![Add the Featured Image and Post Title elements ](https://i.imgur.com/t88N4jD.png)

For the address of the restaurant, add the **Text Editor** element. Since the restaurants’ addresses are saved in a custom field created by Meta Box and the custom field is for post, let’s use the **Dynamic Tags** > choose **Meta Box Fields** in the **Post** section.

![Add the Text Editor element for the address of the restaurant](https://i.imgur.com/dI5pXSb.png)

And then, select the corresponding field. In this case, it’s **Address**.

![Connect the Text Editor element to the correct field by using Dynamic Tags](https://i.imgur.com/tG9sWJw.png)

For the voucher information, do the same.

![Do likewise with the voucher information](https://i.imgur.com/NRH3aIC.png)

![Connect the element to the right field](https://i.imgur.com/D9iY0Xr.png)

Now, all the restaurant’s information has been displayed.

![All the information has been obtained](https://i.imgur.com/PQzv5RG.png)

Save the template and remember to set the condition to apply this template.

![Save the template and remember to set the condition to apply this template](https://i.imgur.com/23Wa2Fh.png)

## 4. Creating the page

Go to **Pages** to create a new page and **edit it with Elementor**.

![Create a new page](https://i.imgur.com/jogEKj6.png)

Add the Posts element to the page.

![Add the Posts element to the page](https://i.imgur.com/VGioxUT.png)

In the Skin setting of the Posts element, choose Custom and then select the default template as the one we’ve just created.

![In the Skin setting of the Posts element, choose Custom and then select the created template](https://i.imgur.com/YwgDCzr.png)

Next, go to the **Query** section, choose the source as the post type you want. In this case, it’s **Restaurant**.

![In the Query section, choose the source as the wanted post type](https://i.imgur.com/ef865A8.png)

Now, the preview shows all the posts with the information as we want.

![The preview shows all the posts with the information.](https://i.imgur.com/UIxRMnQ.png)

Let’s see how to add a filter section in the next step.

## 5. Adding filter

This task will be done by FacetWP. If you use other page builders, you can also create the filter as I’m doing in this practice.

In the admin dashboard, go to **Settings** and choose **FacetWP** to create a new filter.

![Create a new filter](https://i.imgur.com/xR9nNT6.png)

Since we will filter the post by the promotion of the restaurant which is saved in the **Voucher** field, choose the **Data Source** as **Voucher** in the **Restaurant** post type.

![Choose the Data Source as Voucher in the Restaurant post type](https://i.imgur.com/TBkcCS5.png)

Save the changes and copy the shortcode of the facet.

![Save the changes and copy the shortcode of the facet](https://i.imgur.com/7KTGmPH.png)

Then, go back to the created page editor with Elementor, add a Shortcode element to paste the code we’ve just copied.

![Add a Shortcode element to paste the copied code](https://i.imgur.com/jjFu27A.png)

After applying the code, you’ll see a section to filter posts in the frontend. All the restaurants having the same coupons are filtered correctly.

![All the restaurants having the same coupons are filtered correctly](https://i.imgur.com/ZUipHsz.gif)

If you want to style the page, just go back to the template of the page and style each element as you want. Or, you can use some CSS code to have further styling. In this case, I just style the page a bit, for instance:

![Style the page](https://i.imgur.com/6k2QCRy.png)

All the changes in style will be applied immediately. This is how it looks on the frontend. The filter section created by FacetWP works well and all the posts have been filtered.

![The result](https://i.imgur.com/KcIh5xL.gif)
