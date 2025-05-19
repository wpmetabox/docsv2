---
title: Creating a pricing table page - Meta Box + Elementor
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Continuing our series on [creating a pricing page](https://docs.metabox.io/tutorials/create-pricing-table-page-with-bricks/), this article will cover in detail how to build one using the combination of **Meta Box** and **Elementor**. If your product offers multiple pricing plans, this tutorial will help you create a clear and well-structured pricing page.

This is my pricing table page as an example:

![An example of pricing table page](https://i.imgur.com/ikpbegg.png)

## Video version

<LiteYouTubeEmbed id='NdIZTrarj9k' />

## Preparation

All the information of the pricing table, including the plan, pricing, description, features, and button, will be saved in custom fields created with Meta Box. Thanks to that, the data will be dynamic. And the page is built by Elementor. So, these are some tools in this practice:

First, we need [**Meta Box AIO**](https://metabox.io/aio/) to have a framework to create custom fields and extensions for advanced features:

* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI in the backend to create custom fields visually;
* [MB Group](https://metabox.io/plugins/meta-box-group/): to organize custom fields into robust and intense groups;
* [MB Elementor Integrator](https://metabox.io/plugins/mb-elementor-integrator/): to get data from Meta Box’s custom fields, using dynamic tags of Elementor.

And, **Elementor** and its pro version to build the page.

Now, let’s start.

## 1. Creating a new page

We’ll display the pricing table on a new page. So, we need to create it first.

Simply go to **Pages**, and create a new one.

![Go to Pages and create a new one](https://i.imgur.com/iOu9ot0.png)

For the page content, we’ll add it through custom fields created with Meta Box in the next step.

## 2. Creating custom fields

We’ll use custom fields to store the plan information to have dynamic and flexible content for the pricing table page.

Each plan is a group. As you can see, they have the same layout with name, price, description, features, and buttons. Just the content is different. So, we’ll use the cloneable feature for them.

Go to **Meta Box** > **Custom Fields**, and create a new field group.

![Go to Meta Box, Custom Fields, and create a new field group](https://i.imgur.com/CIp0ozP.png)

First, add a **Group** field for the plan.

![Add a Group field for the plan](https://i.imgur.com/ObdSDri.png)

Inside the group, add some subfields following the layout of content you want for your own plan. These are subfields in my case:

![Add some subfields](https://i.imgur.com/32SfLEU.png)

There, I use a group to store the features' content for easier management. For this subgroup setting, I set it as collapsible, then named each item based on the order.

![Set the group for the feature collapsible](https://i.imgur.com/aHmNb9M.png)

Each plan has more than one feature, so the group should be cloneable.

![The group should be cloneable](https://i.imgur.com/1F3JLS6.png)

For the group of the plan, we set it as collapsible as well. The name of each group can be based on the order number and plan title for distinguishing.

![Set the group for the plan collapsible](https://i.imgur.com/2tkJqvF.png)

A product usually has several packages for buyers with diverse options. Thus, I enable the cloneable option to add more than one plan.

![The group is cloneable](https://i.imgur.com/PJjPcvl.png)

In the case that you want to display other information, just add the respective field types.

After having all the fields with reasonable settings, move to the **Settings** tab, set the **Location** as **Post type**, and select **Page**. To apply the fields to the specific page you want, click on the **Advanced location rules** section below, and select your created page.

![Set the location for the field group](https://i.imgur.com/HLWTDGK.png)

Now, go to the page, you can see all the created custom fields ready. Just input data for each plan. 

## 3. Creating skins

We have two cloneable groups: one for the features, and another for the plan. However, Elementor does not support directly displaying data from them on a template. We should create a skin for them first.

Go to **Template** > **Theme Builder**. There will be the **Meta Box Group Skin** menu. Click on it and add a new skin.

![Go to Meta Box Group Skin menu to create a new skin](https://i.imgur.com/iB1DIa5.png)

### 3.1. Skin for features

Move to the **Setting** tab to set the name and location of the skin for preview. We start with the group of features.

![Set the skin for the features](https://i.imgur.com/Cxi4nE4.png)

In the **Preview Settings** section, choose **Page**, and select the pricing table page.

![Set the preview settings as the pricing page](https://i.imgur.com/ZFJm74c.png)

Now, add a **Section** element to cover the feature.

![Add a Section element to cover the feature](https://i.imgur.com/EFR9CbF.png)

Then choose the layout for the feature you want. Since I want to have an icon at the beginning of the feature content, I choose a suitable layout.

![Choose a suitable layout.](https://i.imgur.com/AeWym0W.png)

Just add some elements to this skin.

In the first column, add an **Icon** element. 

![Add an Icon element](https://i.imgur.com/rennbC3.png)

Then, click on the **Icon Library** button to select the icon from the library.

![Click on the Icon Library button to select the icon from the library.](https://i.imgur.com/9yxlkmn.png)

For the remaining column, add a **Text Editor** element.

![Add a Text Editor element](https://i.imgur.com/1EVhiPd.png)

Since the data is saved in custom fields created with Meta Box, click the **Dynamic Tags** button. And choose **Meta Box Field** in the **Post** section.

![Click on the Dynamic tags icon and choose Meta Box Field](https://i.imgur.com/5zdhVY3.png)

Then, choose the name of the field you want to get data from. In my case, it’s **Item**. The data will be displayed with the content you input.

![Choose the name of the field](https://i.imgur.com/RL4EH72.png)

### 3.2. Skin for plans

For the skin of the plan, do the same.

![For the skin of the plan, do the same.](https://i.imgur.com/nP7FfKL.png)

Also, add a section to cover the plan. 

![Add a section to cover the plan](https://i.imgur.com/NeVbEWh.png)

The concept here is we’ll add the suitable elements, then use the **Dynamic Tags** button to get data for the element from Meta Box custom fields.

First, for the plan name, add a **Heading** element.

![Add a Heading element](https://i.imgur.com/Iqc6au8.png)

Click on the dynamic tags icon, and select the **Meta Box Field**.

![Click on the dynamic tags icon, and select the Meta Box Field](https://i.imgur.com/H9Y9G35.png)

Then choose the right field to get data from.

To display the price, add a **Text Editor** element. 

![Add a Text Editor element](https://i.imgur.com/PI206NP.png)

Also, click on the dynamic tag icon to get dynamic data and choose the corresponding field.

![Click on the dynamic tag icon to get dynamic data and choose the corresponding field](https://i.imgur.com/YTaV1iy.png)

Do the same with the description.

![Do the same with the description](https://i.imgur.com/8s2lZwf.png)

There is a slight difference for the feature. It’s saved in the group, and we’ve had a skin for it. Therefore, add the **Meta Box Group** element to get the data from that skin.

![Add the Meta Box Group element](https://i.imgur.com/VLLfVwB.png)

The feature is a subgroup in the Plan group. You should set the **Type** of the element as **Sub-group**. Then, choose the group name and the created skin for the feature. 

![Choose the group and skin for the element](https://i.imgur.com/wlGOo3Y.png)

Immediately, all the features, along with the content and layout displayed as we set before.

The last one is the button. Add a **Button** element.

![Add a Button element](https://i.imgur.com/1mLnJ8p.png)

Also, use the dynamic tags to get data for the button’s label and its URL.

![Get data for the button’s label and its URL.](https://i.imgur.com/mhWFurj.png)

After getting and displaying all the data, we’ll set the condition for the template. The skin will be applied to the pricing table page, so set the condition as below:

![Set the condition for the template](https://i.imgur.com/VZIyBI9.png)

## 4. Creating a template for the pricing table page

We have had the page for the pricing table. So just edit it with Elementor.

![Edit the page with Elementor.](https://i.imgur.com/fGMxS3l.png)

Add a section to cover the page.

![Add a section to cover the page](https://i.imgur.com/gJqgd9D.png)

If you want to have any additional content, just add a reasonable element. For demonstration purposes, I’ll display plans without any other content.

The plan information is saved in the cloneable group as well. So, add a **Meta Box Group** element. 

![Add a Meta Box Group element](https://i.imgur.com/t4feZlX.png)

Set the **Group** as the name of the plan group, and select the corresponding skin. 

![Select the corresponding skin](https://i.imgur.com/TWZCFxv.png)

All the plans, along with their information, were displayed.

This is the pricing table page on the frontend. 

![The pricing table page on the frontend](https://i.imgur.com/KHv5cqr.png)

But you need to modify the page to make it more beautiful and attractive. 

Let’s move to the next step.

## 5. Styling the pricing table page

To change the look of the page, we’ll style each skin on it, then the page template will be updated with the new appearance.

Edit the created skins one by one. Just go to the **Style** tab and **Advanced** tab of each element, and change the settings as you want.

![Go to the Style tab and Advanced tab of each element to style](https://i.imgur.com/DBPxQpw.png)

Now, our page is better.

![The new look of the page after styling](https://i.imgur.com/HDK4VHy.png)

But it’s not the end. Besides the information about pricing, I also want to highlight the best-selling and recommended plan.

Back to the skin for the plan. Move to the **Advanced** tab to create a class for highlights later.

![Move to the Advanced tab to create a class](https://i.imgur.com/2CewLUC.png)

Then, in the **Custom CSS** tab, add this code: 

```
div.mbei-group:nth-of-type(2)  .mb-pricing-tables {
    border: 5px solid #EF7A37;
    transform: scale(1.1);
}
```
![Add code to the Custom CSS tab](https://i.imgur.com/qToVsJI.png)

**In there**: 

* `mb-pricing-tables`: is the class we created for the plan.
* `nth-of-type(2)`: is to regulate which clone of the group will be emphasized. Here, it’s the second.
* `transform: scale(1.1)`: is to zoom the spotlight plan in to attract attention.

That’s done.

And, this is the final look of the pricing table page.

![The final look of the pricing table page](https://i.imgur.com/ikpbegg.png)

Somedays, when you want to change the price of a plan, or add features, or something else, just change the content in the custom fields. All the data on this pricing table page is dynamic.


