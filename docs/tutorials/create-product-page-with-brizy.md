---
title: Creating a product page - Meta Box + Brizy
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

An effective product page can capture customer attention and contain all the information they might need before buying. Follow these practices using Meta Box and Brizy, you’ll be able to simply create a product page that’s full of needed information.

I’ve built a car rental page as an example:

![A Product Page using Meta Box and Brizy](https://i.imgur.com/FVancwG.png)

## Video version

<LiteYouTubeEmbed id='354_gelxeak' />

## Preparation

The page contains the product's detailed information, and its gallery. It’s a singular page of your product post type. The name and description of the product are the title, and content of the post. The remaining detailed information will be saved in the custom fields that allows you to flexibly style the page.

You will need some tools to create a capturing product page that converts.
* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have the framework for creating custom post types and custom fields for my products;
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the products;
* [MB Views](https://metabox.io/plugins/mb-views/): to create a template for the image gallery of products;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI in the backend to create custom fields easily;
* **Brizy**: to build the page.

## 1. Creating a custom post type

Go to **Meta Box** and create a new post type for your products.

![Create a new post type for your products](https://i.imgur.com/G3fyo3H.png)

After publishing, you will see a new post type displayed.

![A new post type displayed](https://i.imgur.com/aDPOgzE.png)

## 2. Creating custom fields

These are the fields that I’ll create for example. They are just some basic fields for typical information.

![This is some basic fields for typical information](https://i.imgur.com/ti7rrBB.png)

Go to **Meta Box** to create custom fields.

![Create custom fields](https://i.imgur.com/xVBKEEV.png)

First, choose the **Number** field type for the numeric information.

![Choose the Number field type for the numeric information](https://i.imgur.com/83GsOrt.png)

![These are the number fields that I created](https://i.imgur.com/R0x23QI.png)

Create some fields that allow the user to choose one from the provided list in the **Select** type.

![Create Select fields that allow the user to choose one from the provided list](https://i.imgur.com/wOEEjti.png)

![These are Select fields that I created](https://i.imgur.com/vCJJ2rj.png)

For the rest information such as fuel usage, engine capacity, max luggage, mileage, we use the **Text** field.

![Use the Text field for the rest information ](https://i.imgur.com/DOmwAKa.png)

![These are the Text fields that I created](https://i.imgur.com/rAC9K6I.png)

Choose an **Image Advanced** field for the gallery to allow the user to upload multiple images.

![Choose an Image Advanced field for the gallery to allow the user to upload multiple images](https://i.imgur.com/jGYsSec.png)

After creating all the fields, move to the **Settings** tab, choose **Location** as **Post Type**, and then select **Car Rental** to apply these fields to the post type.

![Move to the Settings tab to apply these fields to the post type](https://i.imgur.com/O6w7Di9.png)

Then, move to the post editor, you will see all of the created custom fields.

![All of the created custom fields](https://i.imgur.com/RY2bvDY.png)

## 3. Creating the page

### 3.1. Setting the page

Go to **Brizy** and create a template for the product page.

![Create a template for the product page](https://i.imgur.com/2OagrAq.png)

Choose **Single** for the template type.

![Choose Single for the template type](https://i.imgur.com/Tes5No1.png)

And choose your product post type name from the list.

![Choose your product post type name from the list](https://i.imgur.com/6TAW59p.png)

Then, edit the template with **Brizy**.

![Edit the template with Brizy](https://i.imgur.com/4JlcVeM.png)

Add a block.

![Add a block](https://i.imgur.com/56RxTwz.png)

Go to the **Global Blocks** section to set the header for the page.

![Set the header for the page](https://i.imgur.com/kgiyewz.png)

Add a new block for the page content.

![Add a new block for the page content](https://i.imgur.com/ciXA0qB.png)

![Choose create your own](https://i.imgur.com/6iw63UN.png)

I use the **Row** element to divide content into two columns. Basically, you can choose one of two elements: **Column** and **Row**. They are quite the same, but there is a difference on how to edit each inside column size.

![Use the Row element to divide content into two columns](https://i.imgur.com/FvMV7d9.png)

### 3.2. Creating the gallery

In the first column, I want to show images of the product as a slider. Actually, **Brizy** doesn't have any elements which can get multiple images at once from the **Image Advance** field from **Meta Box**, which saves the product images. Therefore, I use **MB Views** to create a template for it, then use the shortcode to embed it into this column.

Go to **Views** of **Meta Box** to add a new view.

![Go to Views of Meta Box to add a new view](https://i.imgur.com/tFwBMFF.png)

First, add a class for the gallery to set the style for them later.

![Add a class for the gallery](https://i.imgur.com/keiGj3Y.png)

Click the **Insert Field** button, and choose the name of the field that we’ve used to save the product images.

![Click the Insert Field button](https://i.imgur.com/ZWyWA2b.png)

![Choose the name of the field that we’ve used to save the product images](https://i.imgur.com/oTzkjgh.png)

You can add some **CSS** to apply a style for the gallery. I use it to set its display as a slider.

![Add some CSS to apply a style for the gallery](https://i.imgur.com/AK2x0mK.png)

I uploaded all the code in [Github](https://github.com/wpmetabox/tutorials/tree/master/create-a-product-page-width-brizy), you can go there to see it in detail.

Move to the **Settings** section of the **View**. Set this view in the type of **Shortcode**.

![Set this view in the type of Shortcode](https://i.imgur.com/bwt7VFB.png)

Then, a shortcode will be automatically generated right after you publish the view. You can copy it.

![a shortcode automatically generated right after publishing the view](https://i.imgur.com/ULjkck0.png)

Back to the template editor with **Brizy**, insert the **Shortcode** element into the first column.

![Insert the Shortcode element into the first column](https://i.imgur.com/M4ytIpb.png)

Paste the shortcode generated by the view. 

![Paste the shortcode generated by the view](https://i.imgur.com/Hfe7KAS.png)

### 3.3. Displaying product information

Move on to the second column, add a **Title** element to show the product name.

![Add a Title element to show the product name](https://i.imgur.com/AKB0l8b.png)

As well as, add the **Content** element to display product description.

![Add the Content element to display product description](https://i.imgur.com/3z8kvoq.png)

I will use the **Row** element for the next information.

![Use the Row element for the next information](https://i.imgur.com/isteBXu.png)

Inside the **Row**, add a **Text** element on the left, and add some text for the information’s name. 

![Add a Text element on the left, and add some text for the information’s name](https://i.imgur.com/L9anIXJ.png)

On the right, also add a **Text** element. 

![Add a Text element](https://i.imgur.com/GKzr93v.png)

The information is the pricing that saves in a custom field. So, choose the **Typography** button to customize the text. Click on the **Dynamic data** button and choose a field that you want to get data from. 

![Get the information is the pricing that saves in a custom field](https://i.imgur.com/nXUU8Gf.gif)

Then the data will display into the element automatically.

![The data will display into the element automatically](https://i.imgur.com/G0BUpts.png)

For the next information, use the **Row** element as well.

![Use the Row element as well](https://i.imgur.com/K7jnORh.png)

You can do likewise as the previous one to get data from custom fields.

![Get data from custom fields](https://i.imgur.com/fuipZZ5.gif)

Since the following ones are the same in the content and style, you can style the first row a little bit. 

![Style the first row a little bit](https://i.imgur.com/uy2aloJ.gif)

Then, duplicate it to save time displaying and style them. 

![Duplicate the row to save time displaying and style](https://i.imgur.com/MFaScji.png)

Just change the text in the left column, and change the field in the right column. You’ll get full of this section in the right form.

![Get full of this section in the right form](https://i.imgur.com/Q2SwqxP.png)

Also style the pricing a little bit. We’ve done displaying all the information about the product. 

![We’ve done displaying all the information about the product](https://i.imgur.com/uI0c44a.png)

Add a new block for the footer.

![Add a new block for the footer](https://i.imgur.com/WzvevB1.gif)

Then, the product page will display as below:

![The product page will display](https://i.imgur.com/FVancwG.png)
