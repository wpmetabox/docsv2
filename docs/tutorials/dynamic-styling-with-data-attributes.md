---
title: Dynamic styling with data attributes
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

You usually use classes and IDs to style your WordPress. However, they can not style an element depending on its state, taxonomy, or specific properties. In those cases, data attributes can help you achieve them. So, let’s explore a new way to **target and style elements** in web design using **data attributes**. It helps to make styling dynamic.

In this practice, I’ll use terms as data attributes to style posts based on the different types. Therefore, each kind of hotel has a distinct style. And the posts with the same type will have the same style.

![Example of using data attributes to dynamically style dynamically](https://i.imgur.com/N55u20b.png)

## Video version

<LiteYouTubeEmbed id='qzVpJ1ZVuKc' />

## What are data attributes?

Similar to classes and IDs, the data attribute is a **type of HTML attribute** used for styling elements. So, what is different about the data attribute from others?

Data attribute gives you **more context** and **unique**, **valuable data** that identifies the specific elements or posts. So, it makes styling dynamic and flexible. As a result, the HTML will be clear since you don’t have to create too many classes.

We’ll take a look at a specific context to understand it more easily. I have had a list of hotels. They are assigned to the amenities service. Then, I want each type of amenity to have its own style. We can not use classes as usual since every post has the same class named `hotel`. Classes can not target specific posts somehow. But data attributes can do that. And we’ll style based on them. In this case, the term is a data attribute. Each term will be an attribute for styling.

We’ll go into detail about how to style elements with data attributes.

## Preparation

We need to have posts first. In the case of hotels, each hotel is a post of a custom post type. And, as I mentioned before, we’ll use the term as an attribute of data. So, we need [**Meta Box AIO**](https://metabox.io/aio/) in this practice, specifically:

* [MB Custom Post Types and Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create a custom post type and custom taxonomy for the hotels or products.
* [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/): to display taxonomy as a column in the admin screen.

To display posts on the frontend, you can use [MB Views](https://metabox.io/plugins/mb-views/) or any page builder. In this practice, I use **Bricks** to add data attributes directly.

Let’s start now!

## 1. Creating a custom post type

In the case that you use default posts, you can skip this step.

Right in the Meta Box dashboard, click on the **Create a post type** quick action or go to **Meta Box** > **Post Types** to create a new one for the hotel.

![Click on the Create a post type on the dashboard to create a new one.](https://i.imgur.com/U2oK8uE.png)

After publishing, a new menu appeared. It’s your post type.

The created post type is displayed on the menu.](https://i.imgur.com/co1wLtW.png)

## 2. Creating a custom taxonomy

As I mentioned before, we’ll use terms as data attributes. So, let’s create a new taxonomy.

Navigate to **Meta Box** > **Taxonomies** to create a new custom taxonomy.

![Move to the Taxonomies submenu to create a custom taxonomy.](https://i.imgur.com/d5nwbu5.png)

Since I want to display the taxonomy as a column in the admin screen, move to the **Advanced** tab and check the **Show admin column** option. It’s available when you have the [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) extension.

![In the Advanced tab, click the Show admin column option](https://i.imgur.com/IT24Xdv.png)

In the **Post Types** tab, choose the post type that you’ve just created to apply this taxonomy to it.

![In the Post Types tab, select the post type.](https://i.imgur.com/EaV0zHJ.png)

Now, when you create posts, you can see the section to add amenities for them. In that section, you can type the amenity or choose one from the list below.

![A new section for setting taxonomy in the post editor.](https://i.imgur.com/CZgoXac.png)

Then, they are displayed in the column.

![The terms are displayed in a column.](https://i.imgur.com/KO0mEqv.png)

## 3. Displaying posts on the page

As I said before, you can use MB Views or a page builder to display hotels in any place you want. For demonstration purposes, I’ll use Bricks to display them on the homepage.

Edit the homepage with Bricks.

![Edit the homepage with Bricks.](https://i.imgur.com/MA3RaIk.png)

Add a new section specifically for the hotels.

![Add a new section specifically for the hotels.](https://i.imgur.com/4ShDtla.png)

Inside it, add a **Heading** element to name the section.

![Add a Heading element to name the section](https://i.imgur.com/bR2X4Hl.png)

Next, add a **Div** element to contain the hotels.

![Add a Div element to contain the hotels](https://i.imgur.com/CJ8Wxq5.png)

To get all posts in the `hotel` post type, enable the **Query loop** button. Then, choose the post type you want to get data from in the **Post type** section.

![Enable the Query loop button and choose the post type.](https://i.imgur.com/q9Ztg7F.png)

After that, simply add some elements to get data for the hotel as usual.

Add an **Image** element to get the hotel images.

![Add an Image element to get the hotel images.](https://i.imgur.com/W6h1TT8.png)

It’s the featured images of posts. So, we’ll use the **Dynamic data** icon, and choose **Feature Image** from the list.

![Use the Dynamic data icon, and choose Feature Image from the list](https://i.imgur.com/7nPmhkj.png)

For the hotel’s name, we use the **Basic text** element.

![Use the Basic text element for the hotel’s name.](https://i.imgur.com/258J60d.png)

Also, use the dynamic data feature to get data for it. The names of hotels are the post title. So, select it.

![Select the Post title from the dynamic data list.](https://i.imgur.com/XAIi15q.png)

To display the type of amenity, add another **Basic Text** element.

![Add another Basic text element for the type of amenity.](https://i.imgur.com/4rwbD51.png)

The amenities are terms of taxonomy. We’ll use the Dynamic data button as well and find out the term from the dropdown list.

![Choose the taxonomy from the list.](https://i.imgur.com/q7nu30H.png)

If you have extra information saved in custom fields, just add the corresponding elements to get them.

After that, on the frontend, you’ll see all the data displayed already.

![All the data is displayed.](https://i.imgur.com/lFeOgOQ.png)

You can style the section to have a better look. Use the **Style** tab as usual.

![Style the section.](https://i.imgur.com/0htOTGT.png)

This is my new look for the hotel section.

![The hotel section after styling as usual.](https://i.imgur.com/4kNqozm.png)

However, I want to style it based on each service. It means there are differences between types of amenities. It will be easier to check which hotels offer the same service. So, let’s move on to the key point of this tutorial.

## 4. Styling with data attributes

To style any element that is identified, using CSS or classes is impossible. While data attributes are the solution for this demand.

Back to the page editor with Bricks.

In the **Style** tab of the **Div** element, there is a tab called **Attributes**. Open that tab, and enter the name of the attribute in the **Name** box. It’ll be used to style later. You can set any name you want.

![Enter the name of attribute in the Attributes tab](https://i.imgur.com/KnQCdsr.png)

The value of the attribute is the data that you style based on. It can be the post title, custom fields, or anything. In this tutorial, I want to style to distinguish the type of hotel. So, click on the **Dynamic data** icon, and select your team. This step is the same as getting data from terms.

![Set the value of the attribute as the term using the dynamic data icon.](https://i.imgur.com/LE86xbd.png)

I want to remove the links, so I added the `plain` filter.

![Add the plain filter to remove the links.](https://i.imgur.com/saHFtS9.png)

Now, when inspecting the section on the frontend, you’ll see the elements have a new data-color attribute attached to them.

![Each post has a new attribute with the value is its term of taxonomy](https://i.imgur.com/vHix6nX.png)

We’re taking data that is associated with each hotel and injecting it right into the HTML. So, we can target elements based on that data. Our work is just styling those attributes.

Back to the page template in Bricks, also in the **Style** section of the **Div** element, move to the **CSS** tab, then add some code to have the appearance of the section as you want.

![Add CSS for each data attribute to style them](https://i.imgur.com/fqB1jxe.png)

And this is the new look of the section. In there, the hotels that share the same amenity tend to have a similar style.

![The new look of the section with different styles for different amenities](https://i.imgur.com/bNrc12y.png)

With data attributes, you can target and style anything without affecting performance. It’s really powerful and potential.

