---
title: Creating a pricing table page - Meta Box + Bricks
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

If your products come with multiple pricing plans rather than just one, a well-structured pricing table page is a smart way to showcase your offerings. Today, we’ll do it with **Meta Box** and **Bricks**.

Here is my example:

![An example of pricing table page](https://i.imgur.com/tJP7YMc.png)

## Video version

<LiteYouTubeEmbed id='48E83QvUQlk'/> 

## Preparation

All the information about each plan, such as title, price, description, features, and even the call-to-action button, is saved in custom fields created with Meta Box.

We need some tools:

* [The Meta Box plugin](https://wordpress.org/plugins/meta-box/) to have the framework to create custom fields;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create custom fields visually;
* [MB Group](https://metabox.io/plugins/meta-box-group/): to organize custom fields into the groups for plans;
* **Bricks**: to build the pricing table page.

That’s all. Let’s start now.

## 1. Creating a new page

We’ll display the pricing table on a separate page. So, we need to create it first.

Go to **Pages** and create a new one.

![Go to Pages, and create a new](https://i.imgur.com/q31dcJ9.png)

I leave it blank since all the content will be put in custom fields that I’ll create in the next step.

## 2. Creating custom fields

As I mentioned before, we’ll use custom fields to store every single piece of information about the plans on the pricing page.

All the plans will be grouped and have the same layout and structure with name, price, description, features, and button to get it, just the content is different. So, you may use the cloneable feature for them.

![The plans has the same layout, just different content](https://i.imgur.com/XofC3jY.png)

Go to **Meta Box** > **Custom Fields**, and create a new field group.

![Go to Meta Box, Custom Fields, and create a new field group](https://i.imgur.com/7kS269f.png)

First, add a **Group** field.

![Add a Group field](https://i.imgur.com/fOnqj7c.png)

Inside the group, add subfields following the structure you want.

![Inside the group, add subfields following the structure you want](https://i.imgur.com/4Uh8T45.png)

For the features, I also put them into a group for easier management. So, add a **Group** field as well.

![Add a Group field for the features](https://i.imgur.com/lBYRs4Y.png)

Also, add a subfield for it.

![Add subfield for the group of the features](https://i.imgur.com/hxPNqNA.png)

I set it collapsible, and set the title for the group as well. In this case, I simply set it based on the order number.

![Set the group as collapsible and set the group titile](https://i.imgur.com/opNxQoc.png)

Since each plan has more than one feature, I set this subgroup as cloneable to add more items.

![Set this subgroup as cloneable to add more items](https://i.imgur.com/iyKBCLq.png)

And add two fields for the label and URL of the button.

![Add fields for the labels and URLs of the buttons](https://i.imgur.com/6FsTWnU.png)

For the group of the plan, we also set it as collapsible. Then, the titles for them can be based on the order number and the plan name or anything you want.

![Set the group of the plan as colapsibale and set the group title](https://i.imgur.com/Nlmz2er.png)

As well, make the group of the plans cloneable to add more than one plan on your pricing table page.

![Make this group cloneable to add more than one plan](https://i.imgur.com/L6yqLkA.png)

After having all the fields and essential settings, move to the **Settings** tab, choose **Location** as **Post type**, and select **Page**. To apply the fields to the page you want, go to the **Advanced location rules** section and choose your created page.

![Set location for the field group](https://i.imgur.com/PXPRMuW.png)

Then, in the page editor, you will see all of the custom fields. 

![The custom fields display in the post editor](https://i.imgur.com/56haRUD.png)

Just enter information for each plan, and click on the **+ Add more** button to add other plans.

![Click on the + Add more button to add other plans](https://i.imgur.com/9HAgEUZ.png)

## 3. Displaying the pricing table page

Let’s edit the pricing table page with Bricks.

Add a **Section** element to cover all the content of the page. There is an available container. We’ll add some elements inside this container to display the pricing table.

![Add a Section element to cover all the content of the page](https://i.imgur.com/evv3EVn.png)

Since our information is saved in a cloneable group, we need a **Div** element first.

![Add div element for cloneable group](https://i.imgur.com/BvWF5KN.png)

Then, enable the **Use query loop** button. And in the **Query** section, choose the type of data source. This is the MB group along with the name of the group that we have created for the custom field.

![Get data source for the div.](https://i.imgur.com/t32eBqn.png)

Now, inside this div, just add some elements to get data from the subfields of the group.

To get the plan’s name, choose the **Heading** element. As the name of the plan is saved in the custom field of Meta Box, use the **Dynamic data** button. Then, look for the field where we store the name of the plan.

![Get the plan’s name](https://i.imgur.com/fs979go.png)

Now, you can see that the plans’ names have just been displayed.

![You can see that the plans’ names have just been displayed.](https://i.imgur.com/QlU1dfp.png)

For the plan’s price, add the **Basic Text** element. It’s also stored in the created custom field. So, we also use the **Dynamic data** button and choose the field correspondingly.

![Get the plan’s price](https://i.imgur.com/4J49q3l.png)

Do the same to get the plan’s description.

Turning to the features of each plan, as they are saved in the cloneable field, add another **Div** element. Also, enable the **Use query loop** button. And in the **Query** section, choose the type of data source as we created for the features.

![Display the features of each plan](https://i.imgur.com/NuH5IjF.png)

Inside this div, add an element to get the feature data. I’ll display a feature with an icon. So, add an Icon Box element. Then, choose the icon as you want.

![Choose icon for feature.](https://i.imgur.com/frE9nQq.png)

Move to the **Content** section, use the **Dynamic data** again, and choose the corresponding field to get the feature data.

![get the feature data](https://i.imgur.com/tnkuoul.png)

Next, we want to display the button, which is to get the plan. In the first div, add a **Button** element. Since it is also saved in the Meta Box custom field, choose the right field to get the corresponding data. It just displays the button without any function.

![Display the button without any function.](https://i.imgur.com/Job3rDi.png)

I want to embed a link in this button so that users can click the button to grab the deal. Thus, in the **Link type** section, choose the Dynamic data option, and select the field where there is the url of the button.

![Get the link for the button](https://i.imgur.com/soVuG1l.png)

We have done getting all the information of the pricing table page.

![a simple list of detail](https://i.imgur.com/7s3ON2R.png)

Now, view the page on the frontend, you can see all the plans with their information displayed. However, it’s just a simple list of details. We want to present it in a table format, so it's more visually appealing and allows customers to easily compare the plans and make a purchase decision.

## 4. Styling the page

To make the pricing table page look better, go back to the page editor with Bricks, and customize each element to style them in your own way.

![Customize each element to style them in your own way with Bricks](https://i.imgur.com/IywaIaz.png)

Then, the page is updated with the new appearance.

![The new look of the page](https://i.imgur.com/Zn944Fc.png)

However, there's one more thing I want to do: highlight the recommended and best-selling plan.

In the page editor again, add some classes for the container and the div as well so that we can use it for styling later.

![Add classes for styling](https://i.imgur.com/s3BlbnU.png)

Then, in the **CSS** section of the div, add these codes.

```
.mb-pricing-container .mb-pricing-tables:nth-child(2) {
    border: 5px solid #ef7a37;
    transform: scale(1.1);
}
```

![In the CSS box, add some codes.](https://i.imgur.com/SeL0uyy.png)

**In there**:

* `.mb-pricing-container`  and `.mb-pricing-tables`: classes we added for styling;
* `nth-child(2)`: is to define which item is chosen among clones of the mb-pricing-tables class. In this practice, I choose `(2)` the second item for demonstration purposes. You can change this order number as you want.
* `transform: scale(1.1)`: is to zoom it in to bring attention to it. You also can change the number or skip it.

And, this is the final look of my pricing page.

![The final look of the pricing table page](https://i.imgur.com/tJP7YMc.png)

Somedays, when you want to change the price of a plan, or add features, or something else, just change the content in the custom fields. All the data on this pricing table page is dynamic.
