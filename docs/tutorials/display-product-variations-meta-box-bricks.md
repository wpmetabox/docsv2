---
title: Displaying product variations - Using Meta Box + Bricks
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In this tutorial, let’s find out how to have product variations using custom fields created by Meta Box and display them on a single page by Bricks.

This is the page that I created as an example:

![The example of displaying product variations on the single product page](https://imgur.elightup.com/Pw34n4k.png)

Each of the variations here is set as a color of the product. When you choose a color, it will get the corresponding image gallery. When you choose another one, it will get a different gallery. At the same time, other information of that variation will automatically come up.

Creating variations for the products is quite special practice. If you are using some of the other page builders, you may need to use code. However, you can do it totally visually with Bricks.

Let’s see how to do it.

## Video version

<LiteYouTubeEmbed id='jl988lFpF9o' />

## Preparation

Each product is a post of a custom post type. The name and description of the product is the title and content of the post. Other information such as product image, size, price and status will be saved in custom fields created by Meta Box.

Here are the tools that we need for this practice:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom fields and custom post types;
* [MB Custom Post Types & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create custom post type for the products named Online Shop;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI in the backend to create custom fields easily for saving information about the products;
* [MB Group](https://metabox.io/plugins/meta-box-group/): to organize custom fields into repeatable and collapsible groups;
* **Bricks**: to build the page visually.

## 1. Creating a custom post type

Go to **Meta Box** > **Post Types** > **Add New** to create a new post type for the products.

![Create a new post type](https://imgur.elightup.com/uLCsLDv.png)

After publishing, you’ll see a new **Online Shops** menu in the admin dashboard.

![A new menu appears after creating a new post type](https://imgur.elightup.com/abGmaiG.png)

Let’s create custom fields to save products’ information.

## 2. Creating custom fields

Go to **Meta Box** > **Custom Fields** to create a new field group.

![Create custom fields by Meta Box](https://imgur.elightup.com/Sg8Ttse.png)

Since each variation will have the same types of detailed information, we’ll include them all in a group. This is the group field that I created.

![Create variations of product group](https://imgur.elightup.com/N2J578J.png)

![Variations Product group with subfields inside](https://imgur.elightup.com/OiujakZ.png)

There may be some variations of each product, so this group should be cloneable to have an ‘**Add more**’ button to easily add more variations like this.

![Add more variations](https://imgur.elightup.com/0s7c77I.png)

Set it to be cloneable by this tick.

![Set the Variations of Product group as cloneable to have more spaces to add variations](https://imgur.elightup.com/yudwpEd.png)

After that, move to the **Settings** tab > choose **Location** as **Post Type** and then select the **Online Shop** post type to apply these fields to it.

![Choose the location as post type of the product](https://imgur.elightup.com/bTUXNiv.png)

Now, when adding a new post in the post type, you’ll see all the created fields. Just fill in some information.

![The created custom fields are displayed in post editor](https://imgur.elightup.com/xCVmqQx.png)

## 3. Displaying the product variations on the product page

### 3.1 Creating a new template

Go to **Bricks** > **Templates**.

![Go to Bricks > Templates to create new template](https://imgur.elightup.com/t4mdiPO.png)

Since the product page is a single page, select the template type as **Single**, then just edit it with **Bricks**.

![Select the template type as Single and edit it with Bricks](https://imgur.elightup.com/X0mPi9e.png)

Remember to set conditions for the template to apply it to the single page of the products post type.

![Set conditions for the template](https://imgur.elightup.com/QeEgFOS.png)

And then, you can set the preview of the products page in the **Populate Content** section.

![Set the preview of the products page in the populate content section](https://imgur.elightup.com/RdA38OI.png)

### 3.2 Displaying product's information

First, add a **Section** element to have a container for covering all the product information.

![Add a section element to have a container to cover all the product information](https://imgur.elightup.com/AGtz8zC.png)

Then, I will add some **Div** elements to set the layout for the page. We’ll use a Div element to contain each section for each one of gallery, color, price, size, and status. Inside this cloak **Div** element, there will be another **Div** to create a loop to call all the data of the section.

![Add some Div elements to set the layout for the page](https://imgur.elightup.com/KaVRT3e.png)

Since each variation will have its own image gallery, you should add a **Div** element and enable the query loop for it to call all the images. Choose the type as **MB Group** which is the group that I created to save the product details.

![Choose the type as MB Group in a Div element setting](https://imgur.elightup.com/UXtNVUt.gif)

Then, add a **Carousel** element inside the Div to display the images as a slider.

![Add a Carousel element to display the images as a slider](https://imgur.elightup.com/SnFdjqq.png)

Since the images of the product are saved in the custom fields created by **Meta Box**, go to the **Select dynamic data** section of the **Carousel** and look for the fields that we’ve saved the images.

![Looking for the fields was created at the the Select dynamic data section](https://imgur.elightup.com/GwpHsQg.png)

Now, you will see all the images display immediately.

![The product images have already displayed](https://imgur.elightup.com/oFolyc2.png)

Add a new **Div** element to contain all the other product information.

![Create a new Div element to contain all the other product information](https://imgur.elightup.com/A05wyDq.png)

Inside it, add the **Post Title** and **Post Content** elements to display the products’ name and description.

![Input the post title and post content elements to display the products’ name and description](https://imgur.elightup.com/DoifEOh.png)

For the section to display the color of the product, add another **Div** element.

![Add another Div element to display the color of the product](https://imgur.elightup.com/GNLzJVq.png)

Then, add a **Basic Text** and change the text to differentiate this section.

![Insert a Basic Text and move the text to differentiate this section](https://imgur.elightup.com/wuGXjqA.png)

I’ll also add some **Div** elements for this section as well. One is to display the color labels for the variations. So, enable the query loop for it. Then, also choose the name of the group field that we’ve just created.

![Enable the query loop and choose the name of the group field ](https://imgur.elightup.com/q8MbFG2.png)

Now, to get the color information, add another** **Div element, then choose **HTML** tag as a link. This helps to allow the viewer to click on the color name and the information will be changed to one of the corresponding variations. And then, select the link type as **Dynamic Data** to have the options to connect this div to a custom field. In my case, it's the **Color Name** field.

![Select the link type as Dynamic Data to have the options to connect the new div to a custom field](https://imgur.elightup.com/slzKbr4.gif)

You may want to not redirect the viewer to a new page when choosing color. So add an additional hash character. As a result, just information on the current page will be changed when clicking to select the color.

![Insert an additional hash character to not redirect the viewer to a new page when choosing color](https://imgur.elightup.com/ClFifmp.png)

Next, add a **Basic Text** element, then use the **Select dynamic data** button to get the color information of the product from the custom field.

![Apply the select dynamic data button to get the color information of the product from the custom field](https://imgur.elightup.com/LMHgv7R.png)

For the rest of the information, use the Div element as you want. It’s kind of the logic of getting color. So, just follow what has been done to get the color of the product.

![Use the Div element to show information](https://imgur.elightup.com/xuCq1il.png)

There will be a **Div** element to contain the prices. There will be multiple variations and each one will have its own price, which are saved data in the cloneable group, so also enable the query loop for this **Div** element, and choose the group name that we’ve created.

![Enable the query loop and choose the group name that we’ve created for product](https://imgur.elightup.com/6DFAG7W.png)

After that, add a **Basic Text** element to display the promotional price. Similarly to get the color information, use the **Select dynamic data** button and connect this element to the corresponding field.

![Using the Select dynamic data button for connecting this element to the corresponding field](https://imgur.elightup.com/LMHgv7R.png)

To show the unit of price, you can also add a **currency** character like this:

![Add a currency character to show the unit of price of product](https://imgur.elightup.com/FU5b7Et.png)

For original price, size and status, do likewise.

And then, add a **Button** element to have the button to order or buy the product.

![Including a button element to have the button to order or buy the product](https://imgur.elightup.com/YqQPG58.png)

Let’s see how it displays on the frontend.

![Product information displayed on the frontend](https://imgur.elightup.com/WcpcFiQ.png)

### 3.3 Setting rules to display variations

To trigger when the viewer clicks on the color, then change the information to the corresponding one, we should use some attributes for the added elements and JS code.

Go to the cloak **Div** element that contains each section for gallery, color name, price, size, and status to add attribute like this.

![Using some attributes for the added elements and JS code to change the information to the corresponding one](https://imgur.elightup.com/im3quTD.gif)

Since all the sections of the variation will be called at the same time based on these attributes, make sure to use an unifying name for all the adding attributes. Also, set the attributes’ value as the value in the **Color Name** field by using the dynamic data.

![Using the dynamic data to set the attributes’ value as the value in the Color Name field](https://imgur.elightup.com/SMrvPjU.png)

After that, go to the settings of this template > **Page Settings** > **Custom Code** to add some JS to the **Body (footer) scripts** section to create a function for triggering the moment users click to the color name, then activate and deactivate the information of the corresponding variations.

![Insert some JS to the Body (footer) scripts section to create a function for triggering the moment users click to the color name](https://imgur.elightup.com/ewACPuR.png)

```
<script>
    jQuery(document).ready(function(){     jQuery(".color-name:first,.group-image:first,.price-group:first,.info:first,.status:first").addClass('active');
        jQuery(".color-contain-group .color-group .color-name a").click(function (e) {
        jQuery(".color-contain-group .color-group .color-name").removeClass("active");
        jQuery(this).show();
        jQuery(this).parent().addClass("active");
        jQuery("div[data-id]").removeClass("active");
        jQuery("div[data-id='" + jQuery(this).attr("href").replace("#", "") + "']").addClass("active");
        e.preventDefault();
       });
    });
</script>
```

In there,_** jQuery(".color-contain-group .color-group .color-name a").click(function (e) {**_ is to trigger when someone clicks on a product color. Then admit the name of the selected color by setting it active. Compare it with the value of the added attribute from other elements. If they are matched, the information from those elements will be displayed.

Now, you can see the active status changing when choosing any color.

![The active status changing when choosing any color](https://imgur.elightup.com/BDMebEN.gif)

For styling the page, you can go back to the template editor with **Bricks** and style any element you want.

![Styling any element as you want with Bricks](https://imgur.elightup.com/9MDGnuo.png)

For styling the color, I will add another attribute for the color name like this.

![Add another attribute for the color name](https://imgur.elightup.com/3Ebx4Sk.png)

If you want to have further styling, go to the Custom Code section again and add some CSS code.

![Add some CSS code in the Custom Code section to have further styling](https://imgur.elightup.com/lSPb96i.png)

Now, the page has turned to a new look.

![The product variations turned into a new look](https://imgur.elightup.com/Pw34n4k.png)
