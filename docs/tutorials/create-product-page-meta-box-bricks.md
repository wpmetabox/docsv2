---
title: Creating a product page - Meta Box + Bricks
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We’re going to find out how to create a product page using Meta Box and Bricks. I chose to create a car rental page as an example.

![Example of a Product Page](https://i.imgur.com/iufdSei.png)

## Before getting started

As you can see, my product page contains the product’s detailed information. Each product will be a post of a custom post type. The basic information such as products’ name and its description are the title and content of the post. Other extra information will be saved in different custom fields.

Here are some tools we need:

* [Meta Box core plugin](https://metabox.io/): to have a framework to create custom post types and custom fields;
* [MB Custom Post Types & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create a custom post type named Car Rentals;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have an UI to create custom fields for saving products’ detailed information;
* **Bricks**: to build the page.

## Video version

<LiteYouTubeEmbed id='95DviTWI25o' />

## 1. Creating a post type

Go to **Meta Box > Post Types > Add New** to create a new post type.

![Create a new custom post type](https://i.imgur.com/lGQiD5h.png)

After publishing, you will see a new **Car Rentals** menu here.

![New custom post type after created in the admin dash board](https://i.imgur.com/eg4njnw.png)

## 2. Creating custom fields

Go to **Meta Box > Custom Fields** to create a new field group. Here, I created some fields as below to save the products’ information:

![Created custom field](https://i.imgur.com/NTX5107.png)

For the car year information, you can give some example data for it by filling in an example year in the **Placeholder** box.

![To give some example data for the field, fill in the Placeholder box](https://i.imgur.com/Hq7LjQK.png)

You can also enter numbers in the **Min Value** and **Max Value** boxes in order to limit the numbers of passenger like this:

![Enter numbers in the Min Value and Max Value boxes to limit the number of passengers](https://i.imgur.com/ayglK5l.png)

For the fuel information, I choose it as a **Select** field to fill in some options in the **Choices** box to allow choosing one from them.

![Fill in some options in the Choices box to allow users to choose](https://i.imgur.com/PS4WJJ6.png)

After creating all the needed fields, move to the **Settings** tab, choose **Location** as **Post Type** and select the **Car Rentals** to apply these fields to it.

![Set location in the settings to apply created fields](https://i.imgur.com/RosbUB9.png)

You can easily see all the created custom fields when creating a new post in the Car Rentals post type.

 ![All created custom fields in the created post type](https://i.imgur.com/Hw2emW6.png)

## 3. Creating a template for the page

Go to **Bricks > Template** to create a new template.

![Create a template for the page](https://i.imgur.com/UI0YVKU.png)

Since each product is displayed as a single page, set the template as **Single** and then edit it with **Bricks**.

![Set the template as Single](https://i.imgur.com/2mCVaEW.png)

Let’s display the product information in the created template.

To apply the template to the post type we want, go to the **Settings > Template Settings > Conditions** and choose **Post Type** in the list of options. Then, select the wanted post type. Here, it’s **Car Rentals**.

![Apply the template to the wanted post type](https://i.imgur.com/uUtj64h.gif)

To show a single post as a preview from the chosen post type, move to the **Populate Content** section and select the content type as a **single post**. In the list of options, choose the post you want to get the data from.

![Select the content type as a single post](https://i.imgur.com/t4i3PSH.png)

Now, let’s get the data and display it in the template.

First, to display all the images of the products as a slider, add a **Carousel** element. Since all the products’ images are saved in a custom field created by Meta Box, click the **Select dynamic data** button and find the corresponding field. In this case, it’s the **Gallery**.

![Add a Carousel element](https://i.imgur.com/tK8mwH0.png)

Then, all the pictures of the products will be shown immediately.

![All the pictures of the products will be shown imediately](https://i.imgur.com/zUnzhN1.png)

Since the name and the description of the car are the post title and post content, add the **Post Title** and **Post Content** element.

![Add the Post title and post content element](https://i.imgur.com/m1eb7NW.png)

To display the rental price per day, add the **Rich Text** element. Then, click the **Select dynamic data** button > choose the corresponding field to get the data that is saved in a custom field created by Meta Box.

![Display the rental price per day](https://i.imgur.com/54ZOeGo.png)

For all the detailed information of the product, add the **List** element. In this element, add items such as Car Year, Fuel, Max Passenger, etc. You can add title for each item as the name of the characteristic, then add dynamic data from custom fields into the Meta section as follows:

![Add the List element for detailed information](https://i.imgur.com/sp1N4Io.png)

Then, still in the list, just add respective items and connect them to the custom fields in the same way.

![Add respective items to the list and connect them to the wanteds custom fields](https://i.imgur.com/Hs7YcQD.png)

![Connect them the same way](https://i.imgur.com/jWNrKsK.png)

Now, all the information of the product has been displayed.

## 4. Styling the page

You can style some elements and layout of the page as you want in the Bricks visual builder. Choose the wanted element and change the settings in the Style section.

I just styled a little bit for example.

![Style the page](https://i.imgur.com/hY89Ndj.png)

Here is my product page after styling.

![The final result](https://i.imgur.com/iufdSei.png)
