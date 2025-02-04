---
title: Creating a product page - Meta Box + Divi
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

An effective product page can increase the customer experience, thereby boosting sales. It may have various information, images, even specifications that we should show on the page to help customers more easily make decisions. Let’s simply **create a product page** with all the needed information using **Meta Box** and **Divi**.

I’ve built a car rental page as an example:

![A product page with detailed information using Meta Box and Divi](https://i.imgur.com/aIP5koT.png)

## Video version

<LiteYouTubeEmbed id='m_nVNG0b7SY' />

## Preparation

The page contains the product's detailed information, even an image gallery. It’s a singular page of your product post type. The name and description of the product are the title, and content of the post. The remaining detailed information should be saved in the custom fields that allow you to flexibly style them.

You will need some tools to create a capturing product page that converts.
* [the Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have the framework for creating custom post types and custom fields for the products;
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the products;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI in the backend to create custom fields easily;
* [MB Divi Integrator](https://metabox.io/plugins/mb-divi-integrator/): helps Divi to get data from custom fields created by Meta Box easier.
* **Divi Builder**: to build the page and display the product information.

That’s all. Let’s get started now!

## 1. Creating a custom post type

Go to **Meta Box** and create a new post type for your products.

![Create a new post type for your products](https://i.imgur.com/ZupjzBq.png)

After publishing, you will see a new menu displayed. It's your post type.

![A new post type displayed](https://i.imgur.com/uUJvBtB.png)

## 2. Creating custom fields

These are the fields that I’ll create for example. They are just some basic fields for typical information.

![This is some basic fields for typical information](https://i.imgur.com/ptvvIYY.png)

Now, go to **Meta Box** to create custom fields.

![Go to Meta Box to create custom fields.](https://i.imgur.com/L1TGOzd.png)

First, choose the **Number** field type for the numeric information such as rental price, car year, and max passengers.

![Choose the Number field type for the numeric information](https://i.imgur.com/312wMwY.png)

Next, I create some fields that allow the user to choose one from the provided list in the **Select** type.

![Choose the Select type to allow the user to choose one from the provided list](https://i.imgur.com/7bObtM9.png)

There is a choice box to add options like this.

![A choice box to add options](https://i.imgur.com/cEsHD0m.png)

For the rest information such as fuel usage, engine capacity, max luggage, mileage, we use the **Text** field.

![Choose the Text field for some information](https://i.imgur.com/gaKpAAg.png)

The last field is the gallery, choose an **Image Advanced** field to allow the user to upload multiple images.

![Choose an Image Advanced field to allow the user to upload multiple images.](https://i.imgur.com/FUdf7Wm.png)

After creating all the fields, move to the **Settings** tab, choose **Location** as **Post type**, and then select **Car Rental** to apply these fields to the post type.

![Set location to apply these fields to the Car Rental post type.](https://i.imgur.com/SK0vrhr.png)

Now, go to the post editor, you will see all of the created custom fields.

![All of the created custom fields](https://i.imgur.com/vvxP6Z8.png)

Just fill in the information.

## 3. Creating a template for the product page

To display product information on each page, we should create a template for their singular page. Go to **Theme Builder** in **Divi** to create a new one.

![Create new template for the products](https://i.imgur.com/Izt4QPi.png)

Then, choose the **All Car Rentals** option to apply the template to all the singular pages of the **Car Rentals** post type.

![Choose the All Car Rentals option to apply the template to all the singular pages of the Car Rentals post type.](https://i.imgur.com/wH3UsQ4.png)

First, add a new section to cover all the product information.

My product page is in the type of columns like this.

![My product page is in the type of columns](https://i.imgur.com/Z3wQb8u.png)

So, I’ll choose the layout as in the image below.

![Choose the layout for your product page](https://i.imgur.com/8AIUssp.png)

Now, let’s get and display information.

In the first column, add the **Meta Box Field** module for the gallery. This is the module built by the Meta Box team that has more advantages and more optimality, especially can get images from custom fields.

![Add the Meta Box Field module for the gallery.](https://i.imgur.com/NM5Yckf.png)

Then, just set the location for this module as the field that we store the images.

![Set the location for this module](https://i.imgur.com/ZSH0oqF.png)

![Choose the field that we store the images](https://i.imgur.com/KAPG5gw.png)

The images will display on the frontend later.

Moving to the second column, I will display the detailed information of the product. Now, add a new row with the wanted layout.

![Add a new row with the wanted layout for the detailed information of the product](https://i.imgur.com/MOmuGsK.png)

For the product's name, which is saved in the post title, choose the **Post Title** module.

![For the product's name, choose the Post Title module](https://i.imgur.com/FhHM0Ps.png)

Next, to display the product description, select the **Text** module. After that, click on the **Dynamic Content** icon button and choose **Post Excerpt** from the list.

![Display the product description](https://i.imgur.com/R7TYMzk.gif)

For the rental price information saved in a custom field, add a new row. Also, add a **Text** module inside.

![Add a new row and a Text module inside for the rental price information](https://i.imgur.com/Hhhc9ud.png)

Pay attention that you also can choose the **Meta Box Field** module instead, but we refer to using Divi’s modules in this case since this kind of data is quite simple and this module provides opt-in options for styling.

Here, we also use the **Dynamic Content** icon button to get data from the field.

![Also use the Dynamic Content icon button to get data from the Car Rental Price field](https://i.imgur.com/TFqdMF5.png)

You also can add before and after text for the currency unit.

![Add before and after text for the currency unit](https://i.imgur.com/dwCN7d5.png)

For the rest of the information, they have the same style with 2 columns. The first one is the title, and the second one is the information that is obtained from the custom fields.

![For the rest of the information, they have the same style with 2 columns.](https://i.imgur.com/BBwdANr.png)

So, we’ll use the row with 2 columns.

![Use the row with 2 columns](https://i.imgur.com/LfNpkBn.png)

The first one is the title, so select the **Text** module and name it. Take Car Year as an example:

![For the title, select the Text module and just name it](https://i.imgur.com/EjTZUEu.png)

In the second column, also add a **Text** module, then connect it to the custom field to get the data using the dynamic content.

![Add a Text module, then connect it to the custom field to get the data using the dynamic content.](https://i.imgur.com/CJDv7Sy.gif)

You can style the row a little bit before cloning it for others. Then, just duplicate the row to have other ones.

![Duplicate the row to have other ones](https://i.imgur.com/fbcVS9V.png)

Thus, you need to change the title, and field to get the right one.

We’ve just finished getting all of the information about the product. You can see how it displays on the frontend.

![All the product information displays on the frontend](https://i.imgur.com/NsviAdx.png)

## 4. Styling the page

Go back to the page template editor. As all the information of the product is saved in custom fields, and you got it individually using separate modules, you can choose each module to change their settings, one by one, to have their own style for each kind of information.

![In the page template editor, choose each module to change their settings.](https://i.imgur.com/4Zc7ROK.png)

You also can add some CSS to have a beautiful style for the gallery.

![Add some CSS to have a beautiful style for the gallery.](https://i.imgur.com/JIyvliZ.png)

I use the **Slick Slider** library to set the gallery display as a slider. To make the slider work well, we need to declare the **Slick Slider** library in our theme's files.

![Declare the Slick Slider library in our theme's files](https://i.imgur.com/Zq1Shu8.png)

![Declare the Slick Slider library in our theme's files](https://i.imgur.com/6r85bWX.png)

After styling, this is the final look of the product page.

![The final look of the product page](https://i.imgur.com/aIP5koT.png)


