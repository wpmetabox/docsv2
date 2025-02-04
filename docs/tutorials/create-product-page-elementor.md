---
title: Creating a product page - Meta Box + Elementor
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Let’s find out how to create a great product page using Meta Box and Elementor! I take a car rental for the product as an example.

![Example of a product page](https://i.imgur.com/eR5DcdE.png)

## Video version

<LiteYouTubeEmbed id='gI0M5nuzPj8' />

## Preparation

The product page is a singular page. All of its information is saved in a post of a custom post type. The name of the product and its descriptions are the title and content of the post. The remaining detailed information will be saved in the custom fields created by **Meta Box**.

![A product page is a singular page](https://i.imgur.com/DaLle8J.png)

So, in this practice, we need these tools:

* [Meta Box](https://wordpress.org/plugins/meta-box/): to have a framework to create a custom post type and custom fields;
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create custom post types for the products;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to create custom fields to save the product information;
* [MB Elementor Integration](https://metabox.io/plugins/mb-elementor-integrator/): to get the dynamic data from custom fields created by Meta Box;
* **Elementor** to build the page.

## 1. Creating a new custom post type

Go to **Meta Box > Post Types > New Post Type** to create a new custom post type.

![Create a new custom post type](https://i.imgur.com/1UoEKF3.png)

## 2. Creating custom fields

The product has extra detailed information, so we’ll create custom fields to save them. Go to **Meta Box > Custom Fields**, then create fields as you want.

![Create custom fields](https://i.imgur.com/RLzyil1.png)

In my case, I just take a typical example of a car rental with some common fields. Here are the fields that I created.

![The created custom fields](https://i.imgur.com/W1deiPo.png)

To know more about the field type, you may have your own specific information for the product. So, you may want to find out each field type to get the matching one. We have a video to talk about all the field types of Meta Box in detail. You can dig into it.

After creating all fields, move to the **Settings** tab > **Location** > choose **Post Type** as **Car Rental** to apply these fields to this post type.

![Set location for the created custom fields as post type](https://i.imgur.com/I1gm1Oa.png)

In the post editor, you will see all of the created custom fields.

![All created fields in the post editor](https://i.imgur.com/SjBBCpL.png)

## 3. Creating a template

Go to the **Elementor Theme Builder** and create a new template. Since it’s for a singular page of a custom post type, we’ll create it in the type of a single post.

![Create a template](https://i.imgur.com/yyXmCoo.png)

After setting the preview for the template, let’s edit it.

My product page has two columns like this:

![Two columns of the product page](https://i.imgur.com/YcW9Ksx.png)

So, first, add a widget and choose the layout for it.

![Add a widget and choose the layout](https://i.imgur.com/qgwzmNm.png)

In the first column, select the **Image Carousel** to display the image gallery as a slider. Then, to get the image that is saved in the custom field, go to the **Dynamic Tags**, find the **Meta Box Field** in the Post section, and choose the field that is set for the image. After that, you can see all of the images appear.

![Find the corresponding field to get the data by using Dynamic Data](https://i.imgur.com/RkfR1jo.gif)

Move to the second column to display other information about the product. The first one is the product's name which is saved in the post titl. So, choose the **Post Title** element > select the **Post Content** element to get the product’s description.

![The rest of the information will have the same style with 2 columns](https://i.imgur.com/3uJDuKv.png)

For the rental price information, choose the **Text Editor** element. Since the rental price is saved in custom fields created by **Meta Box**, also use the **Dynamics Tags > Meta Box Field** in the Post section > choose the corresponding fields. A number will be displayed without a unit of the pricing.

![Choose the Text editor element](https://i.imgur.com/JKWxASC.gif)

To have the unit displayed here, go to the Advanced section, and add the currency unit.

![Add the currency unit](https://i.imgur.com/M9prrn2.png)

For the rest of the information in this section, they have the same style with 2 columns. The first one is the title, and the second one is the information that is obtained from the custom fields.

![The rest of information in this section](https://i.imgur.com/SDHPQ9D.png)

Thus, we’ll use the **Inner Section** with 2 columns as well for each row.

![Inner Section with 2 columns for each row](https://i.imgur.com/quyDxUW.png)

![2 columns of each row](https://i.imgur.com/HDkwhM1.png)

The first column is the title. So, select the **Heading** element, then just name and style it.

![The first column is the title](https://i.imgur.com/uSpRUnR.png)

In the second column in the **Inner Section** element, add a **Text Editor** element, then connect it to the custom field to get the data using the dynamic tags. Take **Car Year** as an example.

![Add a Text Editor element](https://i.imgur.com/dsNR88Q.gif)

You can duplicate the **Inner Section** to have other rows and change the information to get the right one.

After getting all of the information about the product, remember to set the condition for this template to apply it to the singular page of the **Car Rental**.

![Set the condition](https://i.imgur.com/ykzuUrs.png)

Now, in the frontend, all of the product's detailed information is displayed.

![All the information is displayed](https://i.imgur.com/Ije0Xxw.png)

## 4. Styling the page

Still in the editor of the created template, just customize each element to get the wanted style.

![Style each element as you want](https://i.imgur.com/Nek1KHd.png)

Here is my product page after styling.

![The final result](https://i.imgur.com/eR5DcdE.png)
