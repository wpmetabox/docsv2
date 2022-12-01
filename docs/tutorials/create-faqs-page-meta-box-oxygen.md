---
title: Creating an FAQs page - Meta Box + Oxygen
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We are going to **create an FAQs page** using **Meta Box** and **Oxygen**. It has questions and answers that have been saved in custom fields created with Meta Box.

This is a specific example that we’ll create in this practice:

![Example of an FAQs page](https://i.imgur.com/DNgiXCm.png)

## Video version

<LiteYouTubeEmbed id='K0F-Mbiz_ls' />

## Before getting started

For custom fields, we will use [Meta Box](https://metabox.io/) and [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/) to have a UI for creating custom fields right on the back end.

The FAQs page is built with [Oxygen](https://oxygenbuilder.com/). You should use its 3.9 version or higher, which has native integration with Meta Box.

The questions and answers are displayed in an accordion style on the page, which is provided by [OxyExtras](https://oxyextras.com/). This is optional only.

## 1. Creating a new page

Go to **Pages > Add New** to create a page for FAQs.

![Create a new page](https://i.imgur.com/n1QF4Yl.png)

## 2. Creating custom fields

Go to **Meta Box > Custom Fields > Add New**. I’ll add a group with two subfields inside. It is also set to be cloneable to have more spaces to add different questions and answers.

![Create custom fields](https://i.imgur.com/zwh3H9m.png)

Then, there'll be an **Add More** button to allow adding more Q&A on the **FAQs page**.

![Click Add more button to add more Q&A on the FAQs page](https://i.imgur.com/QJCZxzt.png)

I also made this group **Collapsible** so that the information in the group field could be collapsed.

![Set group to be Collapsible to collapse the information](https://i.imgur.com/85DgUtu.png)

It’ll help avoid being messy.

![The information is displayed in a tidy way](https://i.imgur.com/vl9VY5s.png)

After creating all the fields, move to the **Settings** tab, choose **Location** as **Post type** and select **Page**. Since we created the fields for the FAQs page, go to the **Advanced location rules** section below and select the page name.

![Set Location for the created fields as post type](https://i.imgur.com/KieFPaY.png)

Back in the page editor, you will see the fields and can fill in information about questions and answers.

![The fields appear in the page editor](https://i.imgur.com/hR9kpeL.png)

## 3. Creating a template with Oxygen

In **Oxygen**, create a new template and choose the **inactive - Default Page** option to inherit its style and choose to apply this template for **Pages**.

![Create a template with Oxygen](https://i.imgur.com/pogPyfZ.png)

Back to the **FAQs** page, assign the newly created template to this page in the **Render Page Using Template** section.

![Assign the created template to the FAQs page](https://i.imgur.com/98U2QBB.png)

Now, let’s edit the template with **Oxygen**.

In the **Previewing** section, choose the page you want to see in the preview. Then, select a **Section** component to contain all of the FAQs information.

![Choose the page you want to see in the preview](https://i.imgur.com/5adiUY5.png)

Next, add the **Pro Accordion** component. This component will only be available when you have **Oxy Extras** on your site. If you don’t have it, you can add **Text** components instead as normal.

![Add a Pro Accordion component](https://i.imgur.com/vsIxJLd.png)

Since I used Meta Box custom fields to save the FAQs information, I set the Accordion type as **Accordion - Dynamic Items (Meta Box)**.

![Set Accordion type as Accordion - Dynamic Items (Meta Box) to save the FAQs information ](https://i.imgur.com/Jo8ZKIT.png)

You can input the value in the **Dynamic Data** section to show the questions and answers.

![Go to the Dynamic Data section](https://i.imgur.com/OHjsovu.png)

![Input parameters to show the Q&A](https://i.imgur.com/LpS5GPo.png)

The group we used in this tutorial is cloneable, so add the group's ID into the box which I marked as 1 in the picture above.

The question will be the **Header Text**, so I added the **Question** field's ID in the box which I marked as 2. For the answers, I also input the ID of the **Answer** field and set it in the **Content field** box, which is marked as 3.

After applying parameters, the preview will show you all of the questions and answers.

![Go to the Dynamic Data section](https://i.imgur.com/w8gIjN8.png)

Normally, to have a better score for SEO, the FAQs page should have schema markup.

The **Oxy Extras** supports the **FAQ schema** feature. Just go to the **Advanced** section to enable the FAQ Schema Markup.

![Go to the Advanced section of the accordion](https://i.imgur.com/w8gIjN8.png)

![Enable the FAQ Schema Markup in the Advanced section](https://i.imgur.com/e6qJH4Q.png)

If you haven’t had the **Oxy Extras**, you can try the **Slim SEO Schema** to have the **FAQ Schema** following this tutorial.

Finally, click the **Apply Params** button to end the setup.

![To end up the setup, click Apply Params](https://i.imgur.com/v3O4GpT.png)

Now, on the FAQs page, you will see the result like this.

![Result of the created FAQ page after all steps](https://i.imgur.com/iL7LKx4.gif)

------

You may be interested in: 

* [Creating a product page](https://docs.metabox.io/tutorials/create-product-page-meta-box-oxygen/)
* [Creating a recipe](https://docs.metabox.io/tutorials/create-recipe-meta-box-oxygen/)
* [Creating a team members page](https://docs.metabox.io/tutorials/create-team-members-page-meta-box-oxygen/)

