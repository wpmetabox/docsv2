---
title: Creating a pricing table page - Meta Box + Breakdance
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed'; import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

When your products have some pricing plans instead of only one, a well-designed pricing table page will be an intelligent choice to show offering your products or services.

You can also separate the pricing table into a dedicated page or make it to be a section of any page. It’s a piece of cake with the help of a combination of **Meta Box** and **Breakdance**.

I have a pricing table page as an example:

![An example of pricing table page](https://i.imgur.com/tJP7YMc.png)

## Video version

<LiteYouTubeEmbed id='0e5enPbBx4E'/>

## Preparation

All the information about each plan such as title, price, description, features, and even the call-to-action button are saved in custom fields created with Meta Box.

Then, we’ll use Breakdance to display them on the page.

So, these are some tools we need in this practice:

* The[ Meta Box plugin](https://wordpress.org/plugins/meta-box/): to have the framework to create custom fields. You can download it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/);
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create custom fields visually;
* [MB Group](https://metabox.io/plugins/meta-box-group/): to organize custom fields into the groups for plans.

Last, **Breakdance** to build the pricing table page.

That’s all. Let’s start now.

## 1. Creating a new page

We’ll display the pricing table on a separate page. So, we need to create it first.

Go to **Pages**, and create a new one.

![Go to Pages, and create a new](https://i.imgur.com/e7VdBJR.png)

I leave it blank since all the content will be put in custom fields that I’ll create in the next step.

## 2. Creating custom fields

As I mentioned before, we’ll use custom fields to store every single information about the plans on the pricing page.

All the plans will be grouped and have the same layout and structure with name, price, description, features, and button to get it, just the content is different. So, you may use the cloneable feature for them.

![The plans has the same layout, just different content](https://i.imgur.com/XofC3jY.png)

Go to **Meta Box** > **Custom Fields**, and create a new field group.

![Go to Meta Box, Custom Fields, and create a new field group](https://i.imgur.com/KKXnq9n.png)

First, add a **Group** field.

![Add a Group field](https://i.imgur.com/7BVGBq8.png)

Inside the group, add subfields following the structure you want.

![Inside the group, add subfields following the structure you want](https://i.imgur.com/nv8Ic3a.png)

For the features, I also put them into a group for easier management. So, add a **Group** field as well.

![Add a Group field for the features](https://i.imgur.com/mqGyrku.png)

Also, add a subfield for it.

![Add subfield for the group of the features](https://i.imgur.com/1GCFa2X.png)

I set it collapsible, and set the title for the group as well. In this case, I simply set it based on the order number.

![Set the group as collapsible and set the group titile](https://i.imgur.com/KIOiuKz.png)

Since each plan has more than one feature, I set this subgroup as cloneable to add more items.

![Set this subgroup as cloneable to add more items](https://i.imgur.com/vL9OfFe.png)

And, add two fields for the label and URL of the button.

![Add fields for the labels and URLs of the buttons](https://i.imgur.com/4b2CLq0.png)

For the group of the plan, we also set it as collapsible. Then, the titles for them can be based on the order number and the plan name or anything you want.

![Set the group of the plan as colapsibale and set the group title](https://i.imgur.com/C547W0G.png)

As well as, make the group of the plans cloneable to add more than one plan on your pricing table page.

![Make this group cloneable to add more than one plan](https://i.imgur.com/8zZUd3c.png)

After having all the fields and essential settings, move to the **Settings** tab, choose **Location** as **Post type**, and select **Page**. To apply the fields to the page you want, go to the **Advanced location rules** section and choose your created page.

![Set location for the field group](https://i.imgur.com/RFI7kYl.png)

Then, in the page editor, you will see all of the custom fields.

![The custom fields display in the post editor](https://i.imgur.com/V8FN6fx.png)

Just enter information for each plan, and click on the **+ Add more** button to add other plans.

![Click on the + Add more button to add other plans](https://i.imgur.com/7cmtLwn.png)

## 3. Creating global blocks to display content from cloneable groups

Before building the pricing page with Breakdance, we should create a global block to display the information and set the layout for each cloneable field or cloneable group first. We have two cloneable groups in this practice: one is for the plans, and one is for the features. So, let’s create global blocks for each of them one by one.

### 3.1. Creating a global block for the features

Go to **Global Blocks** in **Breakdance**, and create a new global block for the features.

![Go to Global Blocks in Breakdance, and create a new global block for the features](https://i.imgur.com/vQTVSQs.png)

Add a **Div** element to cover the block.

![Add a Div element to cover the block](https://i.imgur.com/KjO0Wof.png)

I’ll display a feature with an icon like this. So, add an **Icon List** element.

![Add an Icon List element](https://i.imgur.com/GMrcm0u.png)

Because the features are saved in the custom fields created with Meta Box, we should insert dynamic data from the field to this element via a small icon like the below image.

![Get data for the features via dynamic data icon](https://i.imgur.com/twNHDKY.png)

After clicking on it, look for the **Metabox** section, and the name of the field that we use to save the feature.

![Look for the Metabox section, and the name of the field that we use to save the feature](https://i.imgur.com/KTp9FWS.png)

You also can change the icon as you want.

![You also can change the icon as you want](https://i.imgur.com/LfLkq1k.png)

### 3.2. Creating a global block for the plans

We’ll create another global block for the pricing plans in the same way.

![Create another global block for the pricing plan in the same way](https://i.imgur.com/8ODWDxe.png)

Just add the corresponding element to get and display one by one. Also, use the dynamic data button to connect elements to the custom fields.

![Add the corresponding element to get and display one by one, and, use the dynamic data button to connect elements to the custom fields](https://i.imgur.com/ciHGHbY.gif)

For the features, we have created a global block for it. So, add a **Repeater Field** element.

![Add a Repeater Field element for the features](https://i.imgur.com/NnvXpuZ.png)

Then, select the created block in the **Global Block** section.

![Select the created block in the Global Block section](https://i.imgur.com/ZTf600o.png)

And, in the **Field** tab, choose the name of the field group that we used for the features.

![In the Field tab, choose the name of the field group that we used for the features](https://i.imgur.com/mHQOQVL.png)

As you can see, all the features display immediately.

For the button, add a **Button** element.

![For the button, add a Button element](https://i.imgur.com/Y40barg.png)

Connect the label and URL of the button to the corresponding fields.

![Connect the label and URL of the button to the corresponding fields](https://i.imgur.com/HsidByu.png)

That’s done.

Next, we’ll display them on the pricing page.

## 4. Displaying the pricing table page

Edit the page with Breakdance.

![Edit the page with Breakdance](https://i.imgur.com/SKV7wUK.png)

Add a **Section** element to cover the pricing section.

![Add a Section element to cover the Pricing section](https://i.imgur.com/yJJ3F2R.png)

Then, add a **Div** element. It’ll include the plans.

![Add a Div element to cover the plans](https://i.imgur.com/iQoEsTt.png)

The plans are saved in the cloneable field. So, add a **Repeater Field** element.

![Add a Repeater Field element](https://i.imgur.com/p3zEX6z.png)

And choose the global block that we created for it in the previous step.

![Choose the global block that we created for it in the previous step](https://i.imgur.com/hdfIJib.png)

Also, select the corresponding group.

![Select the corresponding group](https://i.imgur.com/n0VSEdy.png)

Now, view the page on the frontend, you can see all the plans with their information displayed.

![All the plans with their information displayed](https://i.imgur.com/MkBvwHz.png)

But, you also can see that we should modify this page to have a better look for it.

## 5. Styling the page

To make the pricing table page look better, we’ll style each of the global blocks first.

Edit the block in Breakdance, and, style each element in the **Style** and **Advanced** tabs.

![Style each element in the Style and Advanced tabs](https://i.imgur.com/tllF1xD.png)

![Style the block of features](https://i.imgur.com/dCv26dT.png)

You should style all of the global blocks you have to have the desired appearance.

![Style block of the plans](https://i.imgur.com/uizpgYC.png)

The block for each plan looks good now, we should go to the page and style the page layout a little bit more.

![Style the page layout](https://i.imgur.com/99CCemN.png)

Then, the page will be updated with the new look as you set. This is our page after styling.

![The new look of the page](https://i.imgur.com/Zn944Fc.png)

That’s done for displaying the pricing table page.

However, to help customers save time considering and make it easier to finalize their purchase, you should highlight the recommended and best-selling plan.

Back to the global block of the plan, and move to the **Advanced** tab.

In the **Advanced** section, I create a new class for the plan. It will be used to add code to emphasize a plan.

![Create a new class for the plan](https://i.imgur.com/FJqjhD6.png)

Then, in the **Custom CSS** box, add these codes:

```
article:nth-child(2) > .mb-pricing-tables{
  border: 5px solid #ef7a37;
  transform: scale(1.1);
}
```

![In the Custom CSS box, add some codes](https://i.imgur.com/kDXyKcl.png)

**In there**:

* `article:nth-child(2) > .mb-pricing-tables{`: is to define which item is chosen among clones of the `mb-pricing-tables` class. In this practice, I choose `(2)` the second item for demonstration purposes. You can change this order number as you want.
* `transform: scale(1.1)`: is to zoom it in to bring attention to it. You also can change the number or skip it.

And, this is the final look of my pricing page.

![The final look of the pricing table page](https://i.imgur.com/tJP7YMc.png)

Somedays, when you want to change the price of a plan, or add features, or something else, just change the content in the custom fields. All the data on this pricing table page is dynamic.

We have had tutorials about [how to create dynamic landing pages](https://docs.metabox.io/tutorials/create-dynamic-landing-page-with-bricks/) including pricing section and other information. We hope that they’re useful for you.


