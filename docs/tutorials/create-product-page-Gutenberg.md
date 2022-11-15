---
Tile: Create a product page - Meta Box + Gutenberg
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

If you are using a theme without any page builders or just using Gutenberg, you can create a product page using MB Views.

I’ll take a car rental page for example:

![Example of a product page](https://i.imgur.com/tVV72cn.png)

## Video version

<LiteYouTubeEmbed id='DnKcWGkyhEQ'>

## Before getting started

The product is a kind of custom post type. In this case, each car for rental will be a post of that post type. The product’s name and its descriptions are the title and content of the post. We’ll need custom fields to save some extra information about the cars, such as price, image gallery, type of fuel, etc.

![The product is a kind of custom post type](https://i.imgur.com/yv2kOpa.png)

For this practice, we need these tools:

* <a href="https://wordpress.org/plugins/meta-box/">Meta Box core plugin</a>: provides a framework to create custom post type and custom fields;
* <a href="https://metabox.io/plugins/custom-post-type/">MB Custom Post Type</a>: to create custom post types for the product;
* <a href="https://metabox.io/plugins/meta-box-builder/">Meta Box Builder</a>: to have a UI on the back end to create custom fields to save extra information of the product;
* <a href="https://metabox.io/plugins/mb-views/">MB Views</a>: to create a template for the product page without touching the theme file.

## Step 1: Create a new custom post type

Go to **Meta Box** &gt; **Post Types** &gt; **New Post Type**.

![Create a new custom post type](https://i.imgur.com/uQhCt4b.png)

Then, enter information and configure the post type.

## Step 2: Create custom fields

Go to **Meta Box** &gt; **Custom Fields**, then create fields as you want.

![Create custom fields](https://i.imgur.com/7DGGaUi.png)

In this tutotial, I just take a typical example of car rental with some common fields. Here are the fields that I created.

![The created fields](https://i.imgur.com/jRCpmfY.png)
 
Next, move to the Settings tab &gt; Location &gt; choose Post Type as Car Rental to apply these fields to this post type.

![Set Location for the Post type](https://i.imgur.com/zXyF1Bu.png)

In the post editor, you will see all of the newly created custom fields.

![Newly created custom fields show in the post editor](https://i.imgur.com/mIGtsRv.png)

## Step 3: Create a template for the page

To display the product’s details, you normally have to go to the theme’s files to add code or use a page builder. However, you have another way with the **MB Views** extension to create templates for the product page.

Go to **Meta Box** &gt; **Views** to create a new template. Instead of typing code into the box in the **Template** tab, you can insert fields to get their data.

![Create a Template and insert fields to get data](https://i.imgur.com/8TrA6p9.png)

Just click the **Insert Field** button and choose which one you want.

First, get the image gallery of the product, so insert the **Gallery** field and choose an image size for it.

![To create a slider with many product images, insert Gallery field and choose an image size](https://i.imgur.com/qiuJz3y.png)

Next, insert the product name and its description. They are the default fields of WordPress.

![insert the default fields of WordPress](https://i.imgur.com/FP1ofx4.png)

For the fuel, door, and gearbox information, because they are **Select** fields, you’ll have a setting where you can choose the output of the options as **Value** or **Label**.

![For Select fields, choose the output of options](https://i.imgur.com/AA92obr.png)
Moving on, I’ll insert the remaining fields in turn.

![Insert the remaining fields](https://i.imgur.com/KWEMpxQ.png)

In the **Settings** section of the view, set the** Type** section as **Singular** to assign this template to a single post page. Then, add a rule in the **Location** section to apply it to the Car Rental page only.

![In the Settings section of the view, set the Type section as Singular and add rule in the Location section](https://i.imgur.com/o277okt.png)

On the product page, all the product information is already displayed.

![All the product information is displayed in the product page](https://i.imgur.com/SrnDUqe.png)
  
## Step 4: Style the page

Before styling, let’s add some **div** tags to separate the page into different sections for easier styling.

![To style easier, add some div tags](https://i.imgur.com/DMVE3Bp.png)

Next, go to the **CSS** tab, add some code.

![Go to the CSS tab, add some code](https://i.imgur.com/TapZkUJ.png)

I also added some code in the **JavaScript** tab. This is to create a slider for the gallery.

![Go to the JavaScript tab, add some code](https://i.imgur.com/a5wBuDh.png)

All of these codes are available on <a href="https://github.com/wpmetabox/tutorials/tree/master/create-a-product-page-with-MB-Views">Github</a>, you can refer to it.

Now, you’ll see the final look of the page on the frontend. That’s done!

![The created product page in the frontend" height="473" src=](https://i.imgur.com/tVV72cn.png)
