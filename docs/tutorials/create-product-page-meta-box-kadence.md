---
title: Creating a Product Page - Meta Box + Kadence
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

There are numerous ways to build ecommerce product pages that I shared in [this series](https://metabox.io/series/product-page/). In this article, we’ll share some best practices for product page design by using Meta Box and Breakdance.

This is my product page that I’ve created for illustration, you can see as below:

![My product page that I’ve created](https://i.imgur.com/LZwCeva.png)

## Video Version

<LiteYouTubeEmbed id='S4nHT47XYLI' />

## Preparation

This is a single page built with Kadence containing the product's detailed information. Each product is a post of a custom post type. The name of the product and its description are the title and content of the post.

So, in this practice, we need these tools:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom fields and custom post types;
* [MB Custom Post Types and Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the product;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create custom fields easily.
* **Kadence**: to have some extra types of blocks to build the page.

## 1. Creating a Custom Post Type

Go to **Meta Box** > **Post Types** to create a new post type for your product.

![Go to Meta Box > Post Types to create a new post type for your product](https://i.imgur.com/PwPLdhU.png)

After publishing, you will see a new menu displayed. It's your post type.

![A new menu displayed](https://i.imgur.com/r0cCIoD.png)

## 2. Creating Custom Fields

In this practice, I just create some basic fields for typical information of the product.

![Some basic fields for typical information of the product](https://i.imgur.com/kxEo9A4.png)

Go to **Meta Box** > **Custom Fields** to create them one by one.

![Create custom fields one by one](https://i.imgur.com/3OUrxJ9.png)

Choosing the **Number** field for numeric information, such as rental price, car year, and max passengers.

![Choosing the Number field for numeric information](https://i.imgur.com/DKzwtMs.png)

For the car year information, you can fill in an example year so that when entering information, users can easily understand and enter the information correctly.

![Fill in an example year for the car year information](https://i.imgur.com/NwSonRR.png)

About the max passengers' information, you also can enter numbers in the **Min value** and **Max value** boxes to limit the number of passengers.

![Enter numbers in the Min value and Max value boxes to limit the number of passengers](https://i.imgur.com/fZGQUJk.png)

Next one, choose the **Select** field to contain selective information such as fuel, doors, gearbox. Fill in the options into the **Choice** box.

![Choose the Select field to contain selective information](https://i.imgur.com/GAoLP78.png)

For other information such as fuel usage, engine capacity, max luggage, select the **Text** field. In the **Input** description box, you can add some descriptions to add information to the field.

![Add some descriptions to add information to the field](https://i.imgur.com/FbzTQYd.png)

The last one is the gallery. Choose an **Image Advanced** field to allow users to upload multiple images. 

![Choose an Image Advanced field to allow users to upload multiple images](https://i.imgur.com/o1FYDgq.png)

After creating all the fields, move to the **Settings** tab, choose **Location** as **Post type**. And then, select **Car Rental** to apply these fields to this post type.

![Apply the fields to post type](https://i.imgur.com/kWZwuE3.png)

### 3. Creating the Page Template

Go to **Appearance** > **Kadence** > **Elements** > **Add New** to create a template for your product page.

![Create a template for your product page](https://i.imgur.com/UAvrBcH.png)

Choose element type as **Template**.

![Choose element type as Template](https://i.imgur.com/ctGv8zo.png)

Remember to set a preview for this template.

![Set a preview for the template](https://i.imgur.com/UOz4VtP.png)

Set the placement for the template as **Replace Single Post Content**, and choose **Single Car Rentals** to assign this template to the product single page.

![Assign the template to the product single page](https://i.imgur.com/RKFHpuk.png)

Add a **Columns** block, and choose the 50/50 layout to divide content and images into two columns.

![Divide content and images into two columns](https://i.imgur.com/3m9T5Cy.png)

In the first column, add an **Advanced Gallery** block to display product images.

![Add an Advanced Gallery block to display product images](https://i.imgur.com/7hjdv1J.png)

Turn on **Enable Dynamic Gallery** for this block to get images from custom fields.

![Turn on Enable Dynamic Gallery for this block to get images from custom fields](https://i.imgur.com/mglXptC.png)

Right after that, you will see the **Dynamic button** on the right sidebar to set the dynamic data for the gallery. Click on it, then choose the **Post Custom Field**, and choose **Gallery**, which is the custom field that we created to store the product images.

![Set the dynamic data for the gallery](https://i.imgur.com/WUFnu1f.png)

There will be multiple images, so you should set the gallery layout as **Slider**.

![Set the gallery layout as Slider](https://i.imgur.com/zmnOYu2.png)

Set a reasonable size for the images in the **Advanced** section.

![Set a reasonable size for the images in the Advanced section](https://i.imgur.com/Dd7LC2O.png)

Move to the second column, add an **Advanced Text** block for the product name.You also can use the **Text** block instead, but it has fewer settings for styling than **Advanced Text**.

![Add an Advanced Text block for the product name](https://i.imgur.com/yAoW9TB.png)

Click to the **Dynamic button** and choose **Post Title** to automatically get the product name from it.

![Choose Post Title to automatically get the product name](https://i.imgur.com/dEBgmUU.png)

Select **Advanced Text** to display the short description of the product. And, also set the dynamic content for it by clicking the button and pick **Post Excerpt**.

![Set the dynamic content](https://i.imgur.com/48wrX2p.gif)

Next, use the **Text** or **Advanced Text** block for the pricing. 

![Use Advanced Text block for the pricing](https://i.imgur.com/SyqhvDk.png)

Add the unit price in the right form. Then, add dynamic data of pricing from the custom fields in the same way with the gallery. 

![Add the unit price in the right form](https://i.imgur.com/VZmUGpu.gif)

For the remaining product information, we will use the **Row Layout** block provided by **Kadence**. Then, you can select the two columns layout.

![Use the Row Layout block to remain product information](https://i.imgur.com/nk7DVdS.gif)

In the column on the left, add **Advanced Text** block and type the name of the product characteristic.

![Add Advanced Text block and type the name of the product characteristic](https://i.imgur.com/emfOKLl.gif)

In the column on the right, add an **Advanced Text** as well, then add dynamic data from the corresponding custom field to it.

![Add an Advanced Text](https://i.imgur.com/N6YVbbz.gif)

You can put this row in the basic style and move on to the next one. For saving time, you can duplicate the created row. Change its name, and field to the right one.

![Duplicate the created row and Change its name, and field to the right one](https://i.imgur.com/4soBYjg.gif)

After displaying all the wanted information on the page, you will see it look like this on the frontend.

![A product page with Meta Box and Kadence](https://i.imgur.com/2Shjzka.png)

That’s done for the page.
