---
title: Creating menus for restaurants - Meta Box + Elementor
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In an online food order website, you may have more than one restaurant and each one will have their own menu. Let's see how to create menus for them by using custom fields with the support from Meta Box and Elementor in this practice.

![Example of Restaurant's menu](https://i.imgur.com/zt6Mdaw.png)

## Video version

<LiteYouTubeEmbed id='mE_mtLz5lCA' />

## Preparation

Each restaurant on the website will be a post of a custom post type. Then the dishes of their menus will be added to those posts by using custom fields.

For this practice, we need these tools:

* [Meta Box](https://metabox.io): to have a framework to create custom post type and custom fields;
* [MB Custom Post Types & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create custom post types for the restaurant;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have an intuitive UI to create custom fields in the backend to save the extra information of the restaurant’s menus;
* [MB Elementor Integration](https://metabox.io/plugins/mb-elementor-integrator/): to connect and display custom fields created by Meta Box plugin in the Elementor's dynamic tags.
* Make sure you have **Elementor Pro** on your site.

## 1. Creating a custom post type

Go to **Meta Box > Post Types > Add New**.

![Create a new custom post type](https://i.imgur.com/w4zyONq.png)

After publishing, we’ll have a new menu named **Restaurants**.

![The post type appear as a menu after creating](https://i.imgur.com/WfnjLM7.png)

## 2. Creating custom fields

Go to **Meta Box > Custom Fields** to create fields. I’ll create them with the structure like this:
<table>
<tbody>
<tr>
<td> Name </td>
<td> Field type </td>
<td> Settings </td>
</tr>
<tr>
<td>Menu Details</td>
<td>Group</td>
<td>Collapsible
Cloneable</td>
</tr>
<tr>
<td>Name</td>
<td>Text</td>
<td>-</td>
</tr>
<tr>
<td>Price</td>
<td>Text</td>
<td>-</td>
</tr>
<tr>
<td>Description</td>
<td>Text</td>
<td>-</td>
</tr>
<tr>
<td>Image</td>
<td>Single Image</td>
<td>-</td>
</tr>
</tbody>
</table>

![Go to Meta Box then Custom Fields to create fields](https://i.imgur.com/2Ax2rMj.png)

This is a group with four subfields, which are for the dish detail. So, each group will be for a dish only. To add more dishes, set this group to be cloneable.

![Set group to be cloneable](https://i.imgur.com/YIx3yBc.png)

Then, there’ll be an **Add more** button to allow adding more dishes.

![Add more dishes by clicking Add more button](https://i.imgur.com/NFrLWmN.png)

In case the restaurant has too many dishes, you can set the group to be collapsible.

![Set group to be collapsible](https://i.imgur.com/RDxggHr.png)

It’ll be tidier when adding information for the menu like this:

![The information is displayed in a tidy way](https://i.imgur.com/kQZRO6I.png)

After creating all the fields, move to the **Settings** tab > **Location** > choose **Post Type** as **Restaurant** to apply these fields to it.

![Set location for the created fields](https://i.imgur.com/nQ2ZMor.png)

Then, you can see all the created fields in the post editor.

![Created fields in the post editor](https://i.imgur.com/Tv7fWAc.png)

 Just fill in the dishes’ details.

## 3. Creating a skin

To style the menus later, you should create a skin to display the dishes information.

Go to **Templates > Theme Builder**, add a new skin in the type of **MB Group Skin**.

![Create a skin](https://i.imgur.com/zaHjbZ7.png)

![Go to MB Group Skin then Add New](https://i.imgur.com/AsSMDrN.png)

Set the settings for the skin as you want and remember to choose a post for preview. Then, add the **Heading** element for the name of the dish.

![Add a Headling element](https://i.imgur.com/oqaxrPl.png)

To get the name of the dish saved in custom fields, click the **Dynamic Tags** button in the settings of the **Heading** element. And, choose the **Meta Box Field** in the **Post** section.

![Use Dynamic Tags to get the data](https://i.imgur.com/5hFozpI.png)


:::caution

Since our custom fields are created for a post type, find the **Meta Box Field** in the **Post** section. In case the custom fields are for a settings page or something else, look for the **Meta Box Field** in the corresponding section in the list.

:::


Then, choose the name of the field you want to get the name of the dish from.

![Choose the name of the wanted field to get the name of the dish form](https://i.imgur.com/MtzOjK0.png)

For the price and description of the dish, add the **Text Editor** element. Once again, use the **Dynamic Tags > Meta Box Fields** in the **Post** section, then choose the corresponding fields.

For the image of the dish, add an **Image** element. Also use the Dynamic Tags and select the Image field.

![Add an Inmage section](https://i.imgur.com/NxnJxmf.png)

As you can see, it’ll automatically get and display the information saved in the first group (means the 1st dish) only in the preview of the skin.

## 4. Creating a template for the menu

Back to the **Theme Builder > Single Post** to create a new template for post.

![Create template for the post](https://i.imgur.com/QbLvPzB.png)

Similar to the skin, remember to set the preview for this template.

Find and add the **MB Group** element to the template.

![Add Meta Box group element](https://i.imgur.com/FScgkh5.png)

Then, there’ll be some posts displayed in the preview. But it may not be the information from the posts you want.

![The information is obtained](https://i.imgur.com/h2IqKYJ.png)

Look at the left sidebar, the **Object Type** of the template is set by default as **Post** and the **Group** section will automatically be set to the created-lastest group. If it is not the group field you want, you can change them to the right one.

Then all the data will be displayed correctly, but there will be no styling.

For styling, in the **Skin** section, choose the skin that you’ve created in the previous step. Then, it will turn to the new look with the style of the created skin.

![Choose the created skin to style](https://i.imgur.com/sAe04lk.png)

## 5. Styling the menu

To have more styling, you can add some decoration for the template as I did.

![Add some decoration for the template](https://i.imgur.com/hAkHNIj.png)

However, the elements that are the dish detail are set in the skin, you need to go back to the created skin to style them.

![Go back to the created skin to style the dish details](https://i.imgur.com/uFwUmU0.png)

Then all the changes in the skin will be automatically applied to the template.

Here is the final result we’ve got after all the styling. That’s all!

![Final result](https://i.imgur.com/zt6Mdaw.png)


