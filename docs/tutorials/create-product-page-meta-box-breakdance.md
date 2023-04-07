--- 
title: Creating a product page - Meta Box + Breakdance 
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In this practice, we’re going to find out the way to create a typical product page with Breakdance.

This is my Car Rental page that I created as an example for the product:

![Example of a product page](https://i.imgur.com/KeW7MSD.png)

## Video version

<LiteYouTubeEmbed id='JYnJTnwetwk' />

## Preparation

In this case, my product page is about car rental and it contains the product’s detailed information. All of this information will be saved in posts of a custom post type. The name of the product and its description are the title and content of the post. The remaining detailed information will be saved in the different custom fields.

So to get started, we need these tools:

* [Meta Box core plugin](https://metabox.io/): to have the framework for creating custom post types and custom fields. It’s free and you can download it directly from wordpress.org;
* [MB Custom Post Types & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the product named Car Rentals;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have an intuitive UI to create custom fields in the backend for saving information about the products;
* **Breakdance**: to create the page.

## 1. Creating a custom post type

Go to **Meta Box** > **Post Types** to create a new post type.

![Create custom post type by Meta Box](https://i.imgur.com/38rvrJG.png)

After publishing, you will see a new menu in the admin dashboard.

![Created a post type by using Meta Box](https://i.imgur.com/Zy8olYJ.png)

## 2. Creating custom fields

Go to **Meta Box** > **Custom Fields** to create a new field group.

![Create a new field group with extra informations on custom fields](https://i.imgur.com/1TEDsFW.png)

Here are the fields I created to save information about the product. They are just some basic fields for typical information, so just create them as usual.

![All the created fields of custom fields that you set up](https://i.imgur.com/LgFtdZx.png)

For the information such as rental price, car year and max passengers, they are just numeric information. So choose the **Number** field.

![Created a number fields before creating product page](https://i.imgur.com/LV0t0cy.png)

You can fill in an example year so that when entering information about the car year. So, users can easily understand and enter the information correctly.

![Fill in the Placeholder of the product](https://i.imgur.com/LE55yu6.png)

Continue with the max passengers' information. You also can enter numbers in the **Min** value and **Max** value boxes to limit the number of passengers.

![Choose min and max values to set custom fields for page](https://i.imgur.com/yXvMhPy.png)

Next, choose the **Select** field to contain selective information. So, you can fill in the options into the **Choices** box.

![Fill in the choices information for page](https://i.imgur.com/NlMJU2Y.png)

For other information, select the **Text** field. In the Input description box, you can add some descriptions to add information to the field.

![Fill product information in the input description](https://i.imgur.com/gKcsWH5.png)

For the image of the products, choose an **Image Advanced** field to allow users to upload multiple images.

![Select type for the image of the product](https://i.imgur.com/Y6str25.png)

After creating all the fields, move to the **Settings** tab, choose **Location** as **Post Type**, and then select the
ar Rental post type to apply these fields to it.

![Move to settings and select the post type](https://i.imgur.com/HCq26nl.png)

Now, you will see all the created fields when editing posts in **Car Rental**.

![All the created fields of product page that you made](https://i.imgur.com/BsDVNZ5.png)

## 3. Creating a template for the product page

Go to **Breakdance** > **Templates** > **Add Template** to create a new template for the product page.

![Create a new template for page by using Breakdance](https://i.imgur.com/MzSAm7F.png)

In the **Location** settings, choose **Car Rentals** in the **Single** section to apply this template to the single page of that post type.

![Apply template to the single page of that post type](https://i.imgur.com/yQEgO5K.png)

Then, just edit the newly created template with **Breakdance**.

First, add a **Section** to cover all the content of the page.

![Edit the newly created template for page with Breakdance](https://i.imgur.com/1teY4vy.png)

Since I want to divide content on the page into 2 columns, I add a **Column** element, and choose the suitable layout.

![Add a column element and choose the suitable layout for new page](https://i.imgur.com/CabE5jJ.png)

In the first column, add a **Gallery** element to display product images.

![Add a gallery element for product page](https://i.imgur.com/ezfsrHK.png)

Because we saved the products’ images in a custom field created by **Meta Box**, click on the **Insert Dynamic Data** icon > **Meta Box** section > choose the **Gallery** field which is the one we used to save the images.

![Save the images and set up it on the gallery](https://i.imgur.com/MM3tkYe.gif)

Then, you will see all the images displayed immediately.

![All the images of product page displayed](https://i.imgur.com/WwwVEca.png)

That’s all for the first column. Let’s move to the second one.

First, add a **Post Title** and **Post Content** to display the name and description of the product which are default of **WordPress**.

![Display the name and description of the product page to show informations product](https://i.imgur.com/8ABfo59.png)

For the pricing, add a **Text** element.

![Add a text element on product page to show specific information](https://i.imgur.com/AcK9OmZ.png)

There will also be an icon to insert dynamic data into the element. Because the price is also saved in a custom field, we will choose the field from the **Meta Box** section as well.

![Choose the field from the Meta Box section](https://i.imgur.com/GS39mES.gif)

You will see the price displayed already, buy only the number.

![the price displayed of the product was showed on the product page](https://i.imgur.com/uOSZhcn.png)

To display the unit of the pricing, click to the **Rental Price** option > **Advanced** to add extra text in the **Prepend** and **Append** boxes.

![Use a div to create information of page](https://i.imgur.com/hFoJXsc.png)

For the rest information, each row contains two types of the text: the text on the left is statics and the right one is data from the custom fields. So, we will use a **Div** and some elements inside for each row.

![Use a div to create information of page](https://i.imgur.com/r3riP5V.png)

Then, add a **Heading** element to add the static text on the left side of the row.

![Add a heading element to product](https://i.imgur.com/QOpW0nX.png)

Next, add a **Text** element. To get the information saved in custom fields, click to the **Insert Dynamic Data** icon > **Meta Box** section and choose the corresponding field.

![Add a text element to get the information saved in custom fields](https://i.imgur.com/rSeFaA6.png)

For the remaining information, do likewise. Or, you just need to duplicate the above Div, then change the text in the heading as well as the field connected with the Text element.

![Remain information and change the text in the heading as well as the field connected](https://i.imgur.com/09AZaJZ.gif)

After getting all the data, you will see all the information of the product display on the single page like this:

![All the information of the product page display](https://i.imgur.com/E2NNiGp.png)

If you want to have more styling for the product page, just go back to the template editor with **Breakdance**, and then go to the **Style** tab of each element to customize to style as you want.

![Create new template for product page](https://i.imgur.com/DTpnj5w.png)

![Create gallery for product page](https://imgur.com/qos6V76.png)

After styling, the product page has turned to a new look:

![Demo product page using Meta Box and Breakdance finished](https://i.imgur.com/KeW7MSD.png)
