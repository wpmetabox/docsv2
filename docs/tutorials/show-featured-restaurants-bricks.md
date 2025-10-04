---
title: Showing the featured restaurants - Bricks
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Let’s see how to showcase some featured posts on a page. Take restaurants as an example like this:

![Example of some featured posts on a page](https://imgur.elightup.com/cn3g8F5.png)

## Video version

<LiteYouTubeEmbed id='pK1_OhNiazM' />

## Preparation

This section will display only the restaurants which are manually chosen to be featured. To do it, we will create a custom field to choose which one is featured.

Each restaurant is a post of a custom post type. Its name and image are the post title and the featured image. Besides this basic information, additional information such as address, voucher, and logo will be added as well and saved in different custom fields.

These are the tools we need for this practice:

* [Meta Box core plugin](https://metabox.io/): to have a framework to create custom post types and custom fields;
* [MB Custom Post Types & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create a custom post type named Restaurants:
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have an intuitive UI to create custom fields in the backend for saving extra information of the restaurants;
* **Bricks**: to build the featured restaurants section.

## 1. Creating a custom post type

Go to **Meta Box > Post Types** to create a new post type.

![Create a custom post type](https://imgur.elightup.com/DfSCcR4.png)

After publishing, you’ll see a new **Restaurants** menu in the admin dashboard.

![The created restaurants menu disappear in the admin dashboard](https://imgur.elightup.com/ZNP5DlY.png)

## 2. Creating custom fields

Go to **Meta Box > Custom Fields** to create a new field group. I’ll create some fields as below to save extra information:

![Create custom fields](https://imgur.elightup.com/Es8KGeR.png)

To select and display which restaurant is featured on the frontend. I choose the **Switch** field so users can change the selection button.

![Select and display which restaurant is featured on the frontend](https://imgur.elightup.com/BZ5qdEB.png)

You should name an **easy-to-remember** ID for this field since we’ll use it later.

This is how the switch field displays in the post editor. The **Off** status will show that the restaurant is not featured. On the contrary, the **On** status will show that the restaurant is featured.

![On and off status](https://imgur.elightup.com/WxXYW42.png)

![Choose the wanted status](https://imgur.elightup.com/TalYx8T.png)

After creating all the needed fields, move to the **Settings** tab, choose **Location** as **Post Type** and select **Restaurant** to apply these fields to it.

![Choose Location for the created fields](https://imgur.elightup.com/0dVVHBf.png)

Then, you’ll see all the created custom fields when editing any post in the Restaurants post type.

![All the created fields in the post type](https://imgur.elightup.com/YzeWin3.png)

## 3. Creating a section on homepage

Go to **Pages** and **edit Homepage with Bricks**.

![Create a section on the homepage](https://imgur.elightup.com/9F1MCJl.png)

Add a new **Section** element to contain all the restaurants’ information.

![Add a Section element](https://imgur.elightup.com/TPVyidZ.png)

To name the section, add a **Heading** element.

![Add a heading element](https://imgur.elightup.com/cOEIw5O.png)

Now, let’s set the condition to display the featured posts.

### 3.1 Setting the condition

To get all the posts from the post type, we can use the **Posts** element. We also can use this element in this practice. It supports adding conditions to choose which posts you want to show.  However, we’ll use another way to do it by using a **div** tag in this tutorial. So, add a **Div** element.

With this **Div** element, you can get posts with conditions as well. But, to get each information of the posts, you can add different elements then easily style each one with more options of settings instead of coding.

![WSet the condition](https://imgur.elightup.com/MzbJKRX.png)

Since each restaurant is a post of a custom post type, enable the Use the query loop option and set the query to get the wanted posts and post type.

![Set the query to get the wanted posts](https://imgur.elightup.com/G8Ut4Lj.png)

![Choose the options](https://imgur.elightup.com/ystt3kG.png)

We’ll display the featured restaurants only, so scroll down to find the Meta Query section and enter the meta key as the **ID** of the field named **Feature the Restaurant**.

![Enter the meta key as the ID of the field](https://imgur.elightup.com/6QRjuam.png)

Since this is a **Switch** field with 2 options: On or Off. Corresponding to these 2 options, their values are 1 and 0. So if you want to choose the featured posts which you turned on the button, enter 1 corresponding to the **On** option in the **Meta Value***.

Then, choose the **Compare** and **Type** options as **Equal** and **Numeric**, respectively.

![Choose the compare and type options](https://imgur.elightup.com/RMcubig.png)

That’s all for the condition. Next, we’ll display all the information of the restaurants.

### 3.2 Displaying the restaurants information

Add an **Image** element to display the image of the restaurant. Since these images are the featured image of the post, choose the **Select dynamic data** button and find the **Featured Image** option in the **Post** section.

![Add an Image element to display the image](https://imgur.elightup.com/sFQjIs0.png)

Then, all the restaurants’ images have been obtained.

![All the images have been obtained](https://imgur.elightup.com/uX64KhP.png)

For the **Logo** of the restaurant, also add the **Image** element > **select dynamic data** button and search for the field.

![For the Logo of the restaurant](https://imgur.elightup.com/SsMRV52.png)

For the name of the restaurant means the title of the post, add the **Post Title** element. After that, all the names of the restaurant will display correspondingly.

![add the pót tittle element](https://imgur.elightup.com/XZdvxHa.png)

For the **Voucher** information, add the **Basic Text** element and also use the select dynamic data button and find the corresponding fields. Here, it’s Voucher.

![Add the Basic text element](https://imgur.elightup.com/ugU6c4E.png)

To display the **Address** information, do the same.

![Do likewise to display the Address information](https://imgur.elightup.com/RV7RhLu.png)

Now, all the information of the featured restaurants is shown.

![All the information of the featured restaurants is shown](https://imgur.elightup.com/JDmpTch.png)

## 4. Styling the section

For styling, you can easily style each element in the **Bricks visual builder**. In the event that you want to have advanced styling, just add CSS classes for the element you want. Then, go to **Style** tab > **CSS** and add some code in the **Custom CSS** section.

In my cases, I want to style the voucher field with advanced styling so I did it as an example:

![Style the section](https://imgur.elightup.com/oce2lSB.png)

![Add some code](https://imgur.elightup.com/wCui5cP.png)

This is the result of my featured restaurants section:

![The final result](https://imgur.elightup.com/cn3g8F5.png)
