---
title: Creating a pricing table page using MB Views
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In this tutorial, I’ll show you how to create a clear and well-structured pricing table using **MB Views**.

Here is my example:

![An example of pricing table page](https://imgur.elightup.com/ikpbegg.png)

## Video version

<LiteYouTubeEmbed id='AqpNYr2zwtU'/>

## Preparation

All the information about each plan, such as title, price, description, features, and even the call-to-action button, is saved in custom fields created with Meta Box.

With this approach, we strongly recommend using **Meta Box AIO** to access the full framework and all the advanced features from Meta Box extensions, including:

* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create custom fields visually;
* [MB Group](https://metabox.io/plugins/meta-box-group/): to organize custom fields into the groups for plans;
* [MB Views](https://metabox.io/plugins/mb-views/): to create a template for displaying the pricing table page’s content.

You also can install [the Meta Box plugin](https://wordpress.org/plugins/meta-box/) and those extensions individually.

That’s all. Let’s start now.

## 1.1 Creating a new page

We’ll display the pricing table on a separate page. So, we need to create it first.

Go to **Pages** and create a new one.

![Go to Pages, and create a new](https://imgur.elightup.com/TUoI3J5.png)

I leave it blank since all the content will be put in custom fields that I’ll create in the next step.

## 1.2 Creating custom fields

As I mentioned before, we’ll use custom fields to store every single piece of information about the plans on the pricing page.

All the plans will be grouped and have the same layout and structure with name, price, description, features, and button to get it, just the content is different. So, you may use the cloneable feature for them.

![The plans has the same layout, just different content](https://imgur.elightup.com/Bj6dm1m.png)

Go to **Meta Box** > **Custom Fields**, and create a new field group.

![Go to Meta Box, Custom Fields, and create a new field group](https://imgur.elightup.com/KKXnq9n.png)

First, add a **Group** field.

![Add a Group field](https://imgur.elightup.com/7BVGBq8.png)

Inside the group, add subfields following the structure you want.

![Inside the group, add subfields following the structure you want](https://imgur.elightup.com/I5ccfKG.png)

For the features, I also put them into a group for easier management. So, add a **Group** field as well.

![Add a Group field for the features](https://imgur.elightup.com/mqGyrku.png)

Also, add a subfield for it.

![Add subfield for the group of the features](https://imgur.elightup.com/1GCFa2X.png)

I make it collapsible and set the title for the group as well. In this case, I simply do it based on the order number.

![Set the group as collapsible and set the group title](https://imgur.elightup.com/Md1lawx.png)

Since each plan has more than one feature, I set this subgroup as cloneable to add more items.

![Set this subgroup as cloneable to add more items](https://imgur.elightup.com/8oLI6rs.png)

And, add two fields for the label and URL of the button.

![Add fields for the labels and URLs of the buttons](https://imgur.elightup.com/4b2CLq0.png)

For the group of the plan, we also set it as collapsible. Then, the titles for them can be based on the order number and the plan name or anything you want.

![Set the group of the plan as colapsibale and set the group title](https://imgur.elightup.com/C547W0G.png)

As well, make the group of the plans cloneable to add more than one plan on your pricing table page.

![Make group cloneable to add more than one plan](https://imgur.elightup.com/8oLI6rs.png)

After having all the fields and essential settings, move to the **Settings** tab, choose **Location** as **Post type**, and select **Page**. To apply the fields to the page you want, go to the **Advanced location rules** section and choose your created page.

![Set location for the field group](https://imgur.elightup.com/RFI7kYl.png)

Then, in the page editor, you will see all of the custom fields.

![The custom fields display in the post editor](https://imgur.elightup.com/ydJGOU5.png)

Just enter information for each plan, and click on the **+ Add more** button to add other plans.

![An example of pricing table page](https://imgur.elightup.com/kwZkrqV.png)
(Click on the + Add more button to add other plans)

## 1.3 Displaying the pricing table page

First, go to **Meta Box** > **Views**, to create a new template for the pricing table page.

![Create a new template with MB Views](https://imgur.elightup.com/zpjZcpX.png)

With **MB Views**, you can add some lines of code to the box below. Or insert fields by clicking the **Insert Field** button, then choosing fields on the right sidebar to get data from custom fields.

![Insert field to the template](https://imgur.elightup.com/u9PS8JT.png)

Since our fields are on a special page, you can see the field here.

![The field on the right side bar](https://imgur.elightup.com/l3p1iU5.png)

Click into it to insert the **Plans** field. Since it’s cloneable, a loop will be generated in the **Template** section.

![Insert the Plans field](https://imgur.elightup.com/QolmmEW.png)

Inside the loop,  just choose the subfield from the list to insert them one by one.

These are title, price, and description with 3 lines of code appearing corresponding to the chosen fields.

![Insert the title, price, description fields](https://imgur.elightup.com/PPJAKT8.png)

Next, for the plan’s feature, insert this clonable field bellow, then we also have a new loop.

![Get the plan’s feature](https://imgur.elightup.com/J70j1PV.png)

Similarly to the plan, inside this new loop, insert the wanted field.

![Insert field inside the loop](https://imgur.elightup.com/OStOoxj.png)

Back to the first loop, continuing to insert the remaining fields. We have the button text, and the button link.

![Insert the remaining fields into the loop](https://imgur.elightup.com/pwbZild.png)

After inserting all the necessary fields, move to the **Settings** section of the view, and set the **Type** as **Singular**, and the **Location** as **Pages**, then choose the name of the created page.

![Move to the Settings section of the view, and set the Type as Singular, and the Location as Pages, then choose  the name of the created page](https://imgur.elightup.com/wha7TTG.png)

As well as, you can choose a position for the pricing table on the page.

![Choose a position for the pricing table on the page](https://imgur.elightup.com/DDjmpsL.png)

Now, view the page on the frontend, you can see all the plans with their information displayed. However, it’s just a simple list of details.

![All the plans with their information displayed. But, it’s just a simple list of details](https://imgur.elightup.com/oZfQphq.png)

To make it more engaging and user-friendly, let’s transform it into a structured table. This way, customers can easily compare plans and choose the best one!

## 1.4 Styling the page

To make the pricing table page look better, back to the created template with MB Views, add some lines of code.

![Add code for styling](https://imgur.elightup.com/ZWTFFyh.png)

```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
```
This is to call the Awesome font library, to add icons for the features of each plan.

Next, include some **div** tags and classes to make styling easier.

![Add some div tag and classes](https://imgur.elightup.com/QfnuxXL.png)

Notice that, I use the `fa fa-check-circle` class from the Awesome font, helping display the circle icons.

Now, you can see that the pricing information is organized and clearer, with icons displaying the features in a bulleted format.

![The pricing information is organized and clearer, with icons displaying the features in a bulleted format](https://imgur.elightup.com/8A4lL3t.png)

To create a table for pricing plan, back to the view again, in the **CSS** tab, add the following code to style and highlight the recommended and best-selling plan.

![Add code to the CSS tab](https://imgur.elightup.com/CyulpnJ.png)

```css
.mb-pricing-container .mb-item:nth-child(2) {
    border: 5px solid #ef7a37;
    transform: scale(1.1);
}


.mb-content {
    display: flex !important;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;

}

.mb-item {
    width: 30%;
    margin: 18px;
    text-align: center;
    border: 3px solid #78787885;
    border-radius: 15px;

}

.mb-title {
    font-size: 23px;
    font-weight: bold;
    margin-top: 15px;
}

.mb-price {
    font-size: 50px;
    font-weight: 800;
    color: #262626;
}

.mb-description {
    padding: 15px 0;
    background: #f7b793;
    font-size: 20px;
    margin: 20px 0;
}

.mb-features {
    padding-left: 2.5em;
    text-align: left;
}

.item-feature {
    font-weight: 500;
    color: #262626;
    font-size: 18px;
    padding: 10px 0;
}

.item-feature i.fa.fa-check-circle {
    color: #ef7a37;
}

.mb-button {
    margin: 20px;
}

.mb-button a:hover {
    text-decoration: underline;
}

.mb-button a {
    background: #ef7a37;
    padding: 8px 15px;
    border-radius: 4px;
    color: #fff;
}
```

**In there**:

* `nth-child(2)`: is to define which plan is chosen among the pricing table. In this practice, I choose `(2)` the second item for demonstration purposes. You can change this order number as you want.
* `transform: scale(1.1)`: is to zoom it in to bring attention to it. You also can change the number or skip it.

All codes are saved in [Github](https://github.com/wpmetabox/tutorials/tree/master/create-pricing-table-with-mb-views), so you can refer to it.

Here’s how my Pricing Table page looks in the end.

![The final look of the pricing table page](https://imgur.elightup.com/ikpbegg.png)

Somedays, when you want to change the price of a plan, add features, or something else, just change the content in the custom fields. All the data on this pricing table page is dynamic.

We have had tutorials about [how to create dynamic landing pages](https://docs.metabox.io/tutorials/create-dynamic-landing-page-with-bricks/), including a pricing section and other information. We hope that they’re useful for you.

