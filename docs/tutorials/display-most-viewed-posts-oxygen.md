---
title: Displaying the most viewed posts - P2 - Meta Box + Oxygen
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We are going to create a section to display the most viewed posts on the homepage built with Oxygen. Let’s take restaurants as an example of these posts.

![Example of displaying the most viewed posts](https://i.imgur.com/4kOQh7l.png)

## Video version

<LiteYouTubeEmbed id='3P6KJHquRL4' />

## Preparation

Since we're going to display the most viewed posts, we’ll use a third-party plugin to count the post views. It’s the [Post Views Counter](https://vi.wordpress.org/plugins/post-views-counter/) plugin.

For the posts, we’ll create a **custom post type** named **Restaurants**, and each restaurant will be a post of that post type.

When displaying the most viewed posts, you may wish to show more than just the title and featured image (the default fields). In this case, I’ll display extra information about the address, voucher, and logo. They'll be saved in the custom fields of the post. So, we'll use these tool in this practice:

* [Meta Box Lite](https://metabox.io/lite/): to create custom post types and have UI for creating custom fields;
* [Oxygen Builder](https://oxygenbuilder.com/): use its 3.9 version or higher to have native integration with Meta Box;
* [Post Views Counter](https://vi.wordpress.org/plugins/post-views-counter/): to count the post views.

## 1. Creating a new custom post type

Go to **Meta Box > Post Types** to create a new post type for the restaurants.

![Create a new custom post type](https://i.imgur.com/MSAfcUL.png)

## 2. Creating custom fields

Go to **Meta Box > Custom Fields > Add New**.

![Create custom fields](https://i.imgur.com/JqG6idp.png)

After creating all the needed fields, go to the **Settings** tab > **Location** > choose **Post Type** as the **Restaurant** post type we’ve just created to apply the custom fields.

![Set location for the created custom fields](https://i.imgur.com/XGY0Ch6.png)

In the post editor, you will see all of the newly created custom fields appear.

![All created custom fields appear in the post editor](https://i.imgur.com/0tzGv05.png)

## 3. Counting the posts view

Normally, there is no information about the posts’ view available in WordPress by default. We must do it on our own. Install the **Post Views Counter** plugin, then go to **Settings** > **Post Views Counter** and check the box next to the post type whose views you want to count.

![Install Post views counter plugin](https://i.imgur.com/U9NGVTt.png)

Right after that, you can see the view numbers of each restaurant appear. Based on these numbers, we’ll choose which restaurant has the most views and display it in the section.

![Choose which restaurants have the most views to display in the section](https://i.imgur.com/y4mB0Lj.png)

## 4. Creating the section

Edit a page with **Oxygen**, e.g., the homepage.

First, choose the **Section** component to contain all of the restaurant information. Then, add a **Heading** element and enter the title.

![Add a Heading element to enter the title](https://i.imgur.com/iTyWClu.png)

### 4.1. Setting a condition

To get all the posts of the **Restaurant** post type, select the **Repeater** component. Then, go to the **Query** section to choose the data source and set conditions.

Normally, you can choose the **default** or **custom** type to get the posts. However, in this case, I only want a specific number of posts to be displayed based on the condition, so I chose the **advanced** query type.

![Choose Advanced query type to display specific number of posts](https://i.imgur.com/EdGsVYQ.png)

Now, let’s create conditions to choose which posts to display. We’ll add some query parameters as follows:

First, add a `post_type` parameter to specify that we’ll get only posts from the restaurant post type. In the box, as shown in the image below, enter the ID of the post type for which you want to get the data.

![Add a post_type parameter ](https://i.imgur.com/M1RluBt.png)

Then, add another parameter named `meta_query`. This aims to choose which posts in the restaurant post type are displayed.

![Add a meta_query parameter](https://i.imgur.com/OP6iU1a.png)

To limit the number of posts to display in the section, we add the `post_per_page` parameter and set the number of posts you want to display.

![Add the post_per_page parameter to limit the number of posts to display](https://i.imgur.com/kuZVzor.png)

We’ve completed the condition settings. After applying, there are 6 boxes for 6 posts. It’s equivalent to the number of posts we set for the section.

![There is a box for each post](https://i.imgur.com/AAieadn.png)

### 4.2. Displaying the restaurants' information

Now, it’s time to display information about each restaurant. In the div inside the **Repeater** component, add an **Image** component to display the restaurant’s image, then connect it with the post's featured image.

![Add an Image component in the div that is inside the Repeater component](https://i.imgur.com/6jmB9MG.png)

For the voucher information, choose a **Text** component and connect it to the corresponding field.

![Choose a Text component for the voucher information](https://i.imgur.com/t6dXKk0.gif)

The next piece of restaurant information we want to display is the restaurant’s logo. Choose an Image component. Because the logo field is created by Meta Box and it returns the URL, go to the Image URL tab to get data from this field.

![Choose an Image component for the restaurant's logo](https://i.imgur.com/9WELhe2.gif)

To get the restaurant’s name automatically, add the **Text** component and connect it with the post's title.

![Add the text component to get the restaurant's name](https://i.imgur.com/3LmuR7n.png)

For the address information, do the same with the **Voucher** field. Add a **Text** component, then connect it to the **Address** field.

![Add a text component ](https://i.imgur.com/TQfAjAv.png)

That’s all. Now, the information for all of the most viewed restaurants is now available on the homepage.

![All the information of the most viewed restaurants is available](https://i.imgur.com/YOfw77V.png)

## 5. Styling the section

For styling, go back to the page editor with **Oxygen**. Then, choose each component and change the settings to style them.

You can also add some CSS in the **Custom CSS** tab to have a more advanced style.

![Add some CSS code](https://i.imgur.com/QfE6Gyt.png)

Go to the homepage; all the featured restaurants are displayed as we want.

![The final result ](https://i.imgur.com/88pjwUb.png)

