---
title: Displaying the latest products - Meta Box + Kadence
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In today's practice, we're going to show the latest products in a section on a page using Meta Box and Kadence.

We take the restaurants as an example for the posts as well as for the products:

![Example of displaying the latest products](https://imgur.elightup.com/01E3Bmk.png)

## Video version

<LiteYouTubeEmbed id='XdOk6JDqsz8'/>

## Preparation

As I said before, my products are restaurants. Each restaurant will be a post in a custom post type. In this section, only the 6 latest restaurants will be displayed.

The name of the restaurant and its image are the title and featured image of the post. Further, you may want to add some extra information about your products. I also have something such as logo, voucher, and address. This extra information will be saved in the custom fields created with Meta Box.

For this practice, we need these tools:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have the framework for creating custom post types and custom fields;
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the products;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have an intuitive UI to create custom fields in the backend;
* **Kadence**: to build the page and create a section to display the latest posts. In this practice, I also use the pro version of Kadence.

## 1. Creating a new custom post type

Go to **Meta Box** > **Post Types** > **New Post Type** to create a new post type for the products.

![Create a new custom post type](https://imgur.elightup.com/pcT8HOJ.png)

## 2. Creating custom fields

Go to **Meta Box** > **Custom Fields** to create fields to save some extra information. These are the fields that I’ll create:

![The created custom fields](https://imgur.elightup.com/adhttur.png)

After creating all the fields, move to the **Settings** tab > **Location** > choose **Post Type** as the **Restaurants** post type to apply these fields to this post type.

![Example of displaying the latest products](https://imgur.elightup.com/54ft9WW.png)

Go to the post editor, you will see all of the created custom fields.

![Set location for the created fields as post type](https://imgur.elightup.com/IAKTEc1.png)

Just fill in the information.

## 3. Adding the section to the homepage

Let’s edit the homepage to create a section for the latest restaurants.

First, add a **Heading** block.

![Add a Heading block to name the section.](https://imgur.elightup.com/N11vyYC.png)

To display the wanted posts, we need the **Query Loop** block.

![The Query Loop block to display the wanted posts.](https://imgur.elightup.com/i8QsY97.png)

After choosing a template for the Query Loop, you will see some default blog posts displayed.

![Default blog posts](https://imgur.elightup.com/1Vu81kx.png)

Their order is by date and descending. It means that the latest post will be shown first, followed by the older ones. That’s exactly what we want.

Now, our work is just changing the posts from blog posts to restaurants. Before that, you can remove some information from the post if you don’t want to display.

To change the posts to the restaurants, move to the **Post Type** section on the right sidebar and choose your post type from the list. In this case, it’s Restaurant.

![Change the posts to the restaurants.](https://imgur.elightup.com/wvtBCyw.png)

Look at the picture below! You can see that the titles are replaced by the restaurants’ names.

![The restaurants’ names appear.](https://imgur.elightup.com/pQgpHD6.png)

It’s time to get some information for the restaurants.

First, add the **Advanced Image** block to display the restaurant’s image.

![Add the Advanced Image block to display the restaurant’s image.](https://imgur.elightup.com/rROhRIz.png)

There is an icon in the picture below to enable dynamic data for this block. Click on the icon, then choose the **Featured Image** from the list.

![Enable dynamic data for the Advanced Image block.](https://imgur.elightup.com/Va8AwRy.gif)

Next, add a **Paragraph** block for the voucher information.

![Add a Paragraph block for the voucher information.](https://imgur.elightup.com/ncKh6H3.png)

Click on the **Dynamic Data** button, and choose **Post Custom Field** option since the voucher information is saved in a custom field.

![On the Dynamic Data button, choose Post Custom Field option as the voucher information is saved in a custom field.](https://imgur.elightup.com/zcun9om.png)

After that, in the **Custom Field** section, we should choose the **Custom Input** option instead of choosing a field as usual. This is because the **Voucher** field is the **Checkbox List** type, and I want to get the label of the selected option from the field.

![In the Custom Field section, choose the Custom Input option.](https://imgur.elightup.com/D0lvNJh.png)

In the **Custom Meta Key** section, fill in the ID of the **Voucher** field.

![In the Custom Meta Key section, fill in the ID of the Voucher field.](https://imgur.elightup.com/sjDcUF3.png)

Now, the voucher information will not display, just a text like this will display instead.

![The voucher information will not display.](https://imgur.elightup.com/EQ3VxZa.png)

Don’t worry! You will see the right information on the frontend. So, keep moving.

To get the restaurant's address, add another **Paragraph** block and add dynamic data for it.

![To get the restaurant's address, add another Paragraph block and add dynamic data for it.](https://imgur.elightup.com/niwXUZh.gif)

The logo will be the same as the feature image. So, choose an **Advanced Image** block and add dynamic data for it. Also choose **Post Custom Field**, then select the name of the field that saves the logo.

![Get the logo information.](https://imgur.elightup.com/fbe1qGo.gif)

If you have more kinds of information for your products, just follow this way to display them.

Finally, I set the number of posts to display in this section as well as change the layout to the **Grid** style.

![Set the number of posts as well as change the layout to the Grid style.](https://imgur.elightup.com/DESNmos.png)

Go to the homepage, you can see all of the information about the restaurants displayed correctly.

![All of the information about the restaurants displayed correctly.](https://imgur.elightup.com/EYqkotZ.png)

## 4. Styling the section

Go back to edit the homepage. You can add some classes for the blocks if you want to use some CSS to style them.

![Add some classes for the blocks.](https://imgur.elightup.com/lvFxvCm.png)

You can also change some settings for each block.

For advanced style, you may want to use some CSS. Go to the **Customizer** section > **Additional CSS** and add some code.

![Go to the Customizer section > Additional CSS and add some code.](https://imgur.elightup.com/9fjCotG.png)

I uploaded all of the code on [Github](https://github.com/wpmetabox/tutorials/blob/master/display-the-latest-products-with-Kadence/custom.css), you can refer to it.

After adding some CSS, you can see the new look of the section immediately.

![Example of displaying the latest products](https://imgur.elightup.com/01E3Bmk.png)
