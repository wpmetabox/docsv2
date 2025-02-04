---
title: Creating a recipe - Meta Box + Elementor
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We’re going to find out how to **create a recipe page** using a page builder - Elementor. This page is a singular page of a custom post type and includes information that is stored in custom fields created with Meta Box.

I made an example like this:

![example of creating a single page](https://i.imgur.com/WdagIRI.png)

## Video version

<LiteYouTubeEmbed id='YL3rRGN7Ovc' />

## Preparation

Besides the name and the images of the recipe which are the post title and featured image, we also have extra information about the recipe and how to cook. These information will be saved in different custom fields. So, we need to create custom post type and custom fields in this practice.

Here are some tools we need:

* **[Meta Box](https://metabox.io)**: to have the framework for creating custom post types and custom fields. It’s free and you can download it directly from [wordpress.org](https://wordpress.org/plugins/mb-custom-post-type/);
* **[MB Custom Post Types & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/)**: to create a custom post type named Recipe;
* **[MB Builder](https://metabox.io/plugins/meta-box-builder/)**: to have an intuitive UI to create custom fields in the backend to save extra information;
* **[MB Elementor Integrator](https://metabox.io/plugins/mb-elementor-integrator/)**: to connect and display custom fields created by Meta Box plugin in the Elementor's dynamic tags.

They’re all in the **Meta Box AIO**. If you haven’t had it, you can download and install each one individually.

Finally, make sure you have **Elementor Pro** on your site.

## 1. Creating a new custom post type

Go to **Meta Box** > **Post Types** > **Add New** to create a new post type.

![create new custom post type](https://i.imgur.com/1MuU23Z.png)

After publishing, we’ll have a menu named Recipe in the Admin Dashboard.

![new custom post type appears in the menu navigation](https://i.imgur.com/Vo0JaNr.png)

Let’s create custom fields in the next step.

## 2. Creating custom fields

Go to **Meta Box** > **Custom Fields** to create fields. This is the structure of the fields that I created:

<table>
<thead>
<tr>
<th> Name </th>
<th> Field Type </th>
<th> Settings </th>
</tr>
<tr>
<th>Prep Time / Cooking Time / Resting Time / Total Time</th>
<th>Text</th>
<th>-</th>
</tr>
</thead>
<tbody>
<tr>
<td>Instruction</td>
<td>
Group</td>
<td>

* Cloneable
* Collapsible

</td>
</tr>
<tr>
<td> Step Number</td>
<td>Text</td>
<td>-</td>
</tr>
<tr>
<td> Description</td>
<td>Text</td>
<td>-</td>
</tr>
<tr>
<td>Video</td>
<td>oEmbed</td>
<td>-</td>
</tr>
<tr>
<td>Ingredients / Notes / Nutrition / Equipment</td>
<td>WYSIWYG</td>
<td>-</td>
</tr>
</tbody>
</table>

Since there will be more than one step for the process of cooking, create a group for the instruction with two subfields as below. And, I also set this group to be cloneable to add more steps.

![set group to be clonable](https://i.imgur.com/lIwjwUR.png)

Then, there’ll be an **Add More** button to allow adding more steps.

![click Add More button to allow adding more steps](https://i.imgur.com/3YvMnW7.png)

In the event that there are too many steps in the recipe, you can set this group to be collapsible.

![set group to be collapsible](https://i.imgur.com/ZpCkLh4.png)

It’ll help avoid being messy.

![collapse the group to avoid being messy](https://i.imgur.com/95Y1L1g.png)

I also want to add a video and preview it immediately in the back end. So, I use the oEmbed field.

![use oEmbed field to display the preview of the video directly in the frontend](https://i.imgur.com/r8VkBu7.png)

After creating all the fields, move to the **Settings** tabs, choose **Location** as **Post Type** and select **Recipe** to apply these fields to it.

![set the location for the new custom post type](https://i.imgur.com/vK505N8.png)

Then, you can easily see all the created fields in the post editor. Just fill in the recipes' details.

![newly created custom fields](https://i.imgur.com/I1EZRLQ.gif)

## 3. Creating a skin

In this case, we have a cloneable group for the instruction information. If you get the data as usual, all of them will be displayed with the same style. But, I want the data from each field in that group to have its own style. So, I'll create a skin for them.

Go to **Templates > Theme Builder > MB Group Skin > Add New** to create a new skin.

![move to theme builder to add new skin](https://i.imgur.com/M9fgsws.png)

![add new skin in the MB Group Skin](https://i.imgur.com/1peivE2.png)

Remember to set the preview for the skin.

![click the Dynamic Tags button](https://i.imgur.com/MKUnM5B.png)

Then, add a **Heading** element for the step number of the recipe.

![add a Heading element for the step number of the recipe](https://i.imgur.com/tNW7MyY.png)

To get the step number saved in custom fields created by Meta Box, click the **Dynamic Tags** button in the settings of the **Heading** element > choose the **Meta Box Field** in the **Post** section.

![click the Dynamic Tags button](https://i.imgur.com/InZoOBG.png)

Then, choose the name of the field you want to get. Here, it’s **Step Number**.

![add the Text Editor element for the description](https://i.imgur.com/XrHGBg4.png)

For the description of the step, add the **Text Editor** element. Then, also use the **Dynamic Tags** button > **Meta Box Fields** in the **Post** section and choose the corresponding fields.

![add the Text Editor element for the description](https://i.imgur.com/7YWgCEs.png)

Now, both the step and step’s description have been obtained already. It’ll automatically get and display the information saved in the first group (means the 1st step) only for the preview. You can style these elements on your own.

![style the elements on your own](https://i.imgur.com/vl1YiRp.png)

## 4. Creating a template for the recipe page

Back to the **Theme Builder > Single Post** to create a new template for post.

![create a new template for the post](https://i.imgur.com/OXSGiFb.png)

Similar to the skin, remember to set the preview for this template.

To display the name of the recipe which is the title of the post, add the **Post Title** element.

![add the Post Title element to display the name of the recipe](https://i.imgur.com/IeLxmrp.png)

We’ll display the featured image of the recipe and the timing data in 2 columns as below:

![display the data as two columns](https://i.imgur.com/qzUXgds.png)

So, add the **Inner** section element which has the layout of two columns.

![add the Inner section](https://i.imgur.com/YpkjPIR.png)

For the first column, add the **Featured Image** element to get the featured image of the post.

![add the Featured Image element to get the featured image of the post](https://i.imgur.com/aAislzD.png)

For the timing data, add the **Text Editor** element. Since the timing data is saved in custom fields created by **Meta Box**, also use the **Dynamic Tags > Meta Box Field** then connect it to the corresponding field.

![add the Text Editor element for the timing data and connect it to the corresponding field](https://i.imgur.com/wHoYtaV.png)

![add the Text Editor element for the timing data and connect it to the corresponding field](https://i.imgur.com/Ukcm8cF.png)

To name the timing information, go to the Advanced section of the Text Editor element.

![name the timing information](https://i.imgur.com/VRSLUgv.png)

Since the content of the timing information is the same, just duplicate the previous element and then connect them to the correct field where you want to get the data.

To display the **Instruction** information, search for **MB Group** element and add it to the template.

![display the Instruction information](https://i.imgur.com/fJ4LTRe.png)

Then, there’ll be some data displayed in the preview. Then, set some settings in the left sidebar to the one you need for the instruction.

![data displayed in the preview](https://i.imgur.com/06n9S2x.png)

The **Object Type** of the template is set by default as **Post** and the **Group** section will automatically set as the created-lastest group. If it is not the group field you want, you can change them to the right one.

Then all the data will be displayed correctly, but there is no styling.

For styling, in the **Skin** section, choose the skin that you’ve created in the previous step. Then, it will turn to the new look with the style of the created skin.

![choose the created in the previous step for styling](https://i.imgur.com/dxIlRxU.png)

Since we use the **oEmbed** field to be able to save the links, use the **Shortcode** element to display the preview of the video. Then click the **Dynamic Tags** button > **Meta Box Field** and choose the Video field.

![use the Shortcode element to display the preview of the video](https://i.imgur.com/iZK1Tpr.png)

For other information such as Ingredients, Nutrition, Notes and so on, add a **Heading** element to name the section.

![add a Heading element to name the section for other information](https://i.imgur.com/qOKl0C7.png)

Then, add the **Text Editor** and connect it to the right field to get the data through the **Dynamic Tags** button.

![add the Text Editor and connect it to the corresponding field to get data](https://i.imgur.com/9I1WOpw.png)

Now, all the data of the recipe has been obtained.

![all the data is obtained](https://i.imgur.com/FpYzglN.gif)

Remember to set the condition for this template to apply it to the right singular page.

![set the condition for the template to apply to the right singular page](https://i.imgur.com/fkFpzlV.png)

If you want to style for the page, just do it on your own in the editor of both the skin and template.

I’ll style some elements a bit for example.

![style the template in the Elementor visual builder](https://i.imgur.com/Jt6MDsV.png)

Now, the recipe has a new look as below:

![the recipe appearance after styling](https://i.imgur.com/WdagIRI.png)

------

You may be interested in:
* [Displaying images from cloneable fields](https://docs.metabox.io/tutorials/display-images-from-cloneable-fields-meta-box-elementor/)
* [Displaying the latest products](https://docs.metabox.io/tutorials/display-latest-product-meta-box-elementor/)
* [Showing featured products](https://docs.metabox.io/tutorials/show-featured-products-meta-box-elementor-wp-grid-builder/)
