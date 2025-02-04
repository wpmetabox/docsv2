---
title: Showing the featured restaurants - Meta Box + Oxygen
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';


We’ll display the featured posts on the frontend using a custom field for manually choosing. Take restaurants as an example:

![Example of showing featured restaurants ](https://i.imgur.com/5u7QYM9.png)

## Video version

<LiteYouTubeEmbed id='GZ8dFWAhnXA' />

## Preparation

In my case, I have already made this homepage using Oxygen. The section is to show the featured restaurants which are chosen manually in the backend by a custom field. The restaurants will be stored in a **post type**, and each one will be a post. Along with the default information as title and featured image, I also add some extra ones and display them such as logo, voucher, and address, is saved in **custom fields**.

Furthermore, I also set a condition. It indicates that only selected posts will be displayed in this section. I’ll use a special custom field to know when a post is selected.

Here are the tools we need for this practice:

* [Meta Box core plugin](https://metabox.io/): to have a framework to create custom post types and custom fields;
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create custom post types for the restaurants;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to create custom fields for saving extra information of the restaurants;
* [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/): to show the status of whether the restaurants are featured or not in the list of posts.
* **Oxygen**. You should use the 3.9 version or upper, which has integration with Meta Box already.

## 1. Creating a new custom post type

Go to** Meta Box > Post Types** to create a new post type for the restaurants.

![Create a new custom post type](https://i.imgur.com/J971WAs.png)

## 2. Creating custom fields

Go to **Meta Box > Custom Fields** and create fields as you want.

![Create custom fields](https://i.imgur.com/BHG0wDo.png)

To select which restaurant is featured on the frontend, I’ll create another custom field as the **Switch** type so that users can change the selection button.

![Create custom field as Switch type to select which restaurant is featured on the frontend](https://i.imgur.com/Mr1qsiG.png)

This field will display as a button and has two status. The **Off** status will indicate that you do not want to recommend the restaurant. Otherwise, the **On** status will let us know that you want to feature the restaurant.

![Off and On status to show you want to feature restaurant or not](https://i.imgur.com/RPBme1A.png)

Since I want to show the restaurant's status and quickly compare the results when displaying the restaurants on the homepage, I use the **MB Admin Columns** extension from Meta Box. To do it, tick the box as in the image below. However, this is just an optional part

![Use MB Admin Columns extension to show the status of the restaurant and compare the results](https://i.imgur.com/PZUWCYs.png)

After that, go to the **Settings** tab > **Location** > choose **Post Type** as the **Restaurant** post type that we’ve just created to apply the custom fields to it.

![Set location for the post type ](https://i.imgur.com/6txnpzB.png)

In the post editor, you will see all of the created custom fields.

![All created custom fields in the post editor](https://i.imgur.com/OEQLG3l.png)

These are the posts that I created as an example. You can easily see which restaurants will be featured like this.

![Example of created posts to see which restaurants will be featured](https://i.imgur.com/qI2RZfk.png)

## 3. Creating the section for the featured posts

First, select a **Section** component to contain all of the restaurant's information. Add a **Heading** component and name it to have a title for the section.

![Create the section for the featured posts](https://i.imgur.com/1RadUWF.png)

### 3.1. Setting a condition

To get all the posts of the **Restaurant** post type, select a **Repeater** component. Then, go to the **Query** section to choose the data source and set conditions.

Normally, to get the posts, you can choose the **default** or **custom** type. As I only select a certain posts to be displayed based on the condition, I choose the query in the **advanced** type.

![Select a Repeater component to get all the posts of the Restaurant post type](https://i.imgur.com/56WjHRI.png)

Now, let’s create conditions to choose which posts to display. We’ll add some query parameters as follows:

First, add a parameter to specify that we’ll get only posts from the restaurant post type. In the box as in the image below, enter the ID of the post type you want to get the data.

![Enter the ID of the wanted post type to get the data](https://i.imgur.com/gefnfAE.png)

Next, add another parameter as `meta_query`. This aim is to choose which posts in the restaurant post type are displayed.

![Add another parameter as meta_query to choose which posts in the restaurant post type](https://i.imgur.com/9dgat9w.png)

**Explanation**:

* In the **key** option, fill in the ID of the field named **Feature the Restaurant?**, because the condition will be set based on the value of this field.
* In the **type** option, enter **numeric** since this switch field has 2 options: On or Off, corresponding to 1 and 0. They are the numeric type.
* In the **value** option, add the value as **1** because it’s defaulted to the yes status of the switch field. It means that only posts where the switch field is in On status will be displayed in this section.

To limit the number of posts to display in the section, we add the last parameter. Choose the `post_per_page parameter` and set the number of posts you want to display.

![Add the post_per_page parameter to limit the number of posts to display ](https://i.imgur.com/1YXSJi4.png)

We’ve done the settings for the condition, press the **Add Parameters** button.

After applying, there are 6 boxes for 6 posts. It’s equivalent to the number of posts we set for the section.

![Equivalent number of boxes for the posts ](https://i.imgur.com/hfC2d2H.png)

### 3.2. Displaying the restaurants information

Now, it’s time to display information of each restaurant. In the **div** inside the **Repeater** component, add an **Image** component to display the restaurant’s image, then connect it with the featured image of the post.

![Choose a text component and connect it to the corresponding field](https://i.imgur.com/wjnVBty.png)

For the voucher information, choose a **Text** component and connect it to the corresponding field.

![Choose a text component and connect it to the corresponding field](https://i.imgur.com/lgm6Ybz.gif)

To get the restaurant’s name automatically, add the **Heading** component, and connect it with the title of the post.

![Add a heading component to get the restaurant's name](https://i.imgur.com/fBjvwKO.gif)

For the address information, do the same with the **Voucher** field. Add a **Text** component to it, then connect it to the **Address** field.

![Add a text component to get the address information](https://i.imgur.com/r5FcAHS.gif)

The last one we want to display is the restaurant’s logo. Choose an **Image** component. Because the logo field is created by Meta Box and it returns the URL, go to the **Image URL** tab to get data from this field.

![Choose an Image component to display the restaurant's logo](https://i.imgur.com/y9FhJjD.gif)

That’s all for getting information about the featured restaurants. Now, on the homepage, all the featured restaurants' information is displayed.

![All the information is displayed](https://i.imgur.com/o9MDqBS.png)

## 4. Styling the section

For styling, go back to the page editor with Oxygen. Then, choose each component and change the settings to style them.

You can also add some CSS in the **Custom CSS** tab to have a more advanced style.

![Style the section](https://i.imgur.com/wj2TehN.png)

Go to the homepage, all the featured restaurants are displayed as we want.

![All the featured restaurants are displayed as wanted](https://i.imgur.com/5u7QYM9.png)

