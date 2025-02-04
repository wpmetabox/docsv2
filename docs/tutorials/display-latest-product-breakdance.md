---
title: Displaying the latest products - Meta Box + Breakdance
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In today's practice, we're going to create the latest product section using Meta Box and Breakdance.

I take the restaurants as an example for the posts as well as for the products:

![Each restaurant is a post in a custom post type](https://i.imgur.com/sTREMWQ.png)

## Video version

<LiteYouTubeEmbed id='HrhJUBQA7Uk' />

## Preparation

In this case, my products are restaurants. Each restaurant will be a post in a custom post type and displayed in a box as in the image below. It is created as a global block in Breakdance.

![Each restaurant is a post in a custom post type](https://i.imgur.com/OFq9unJ.png)

In the block, the name of the restaurant and its image are the title and the featured image of the post. Further, you may want to add some extra information for your products, so I have something as a demo, such as logo, address, and voucher. This extra information will be saved in the custom fields created by Meta Box.

And, in this section, only the 6 latest restaurants will be displayed.

For this practice, we need these tools:

* [Meta Box](https://wordpress.org/plugins/mb-custom-post-type/): to have the framework for creating custom post type and custom fields.
* [MB Custom Post Types](https://metabox.io/plugins/custom-post-type/): to create custom post types for the products;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have an intuitive UI to create custom fields in the backend to save the product information;
* **Breakdance**: to build the page and create a section to display the latest posts.

## 1. Creating a new custom post type

Go to **Meta Box > Post Types > New Post Type** to create a new post type for the products.

![Create a new custom post type](https://i.imgur.com/ZwkLvos.png)

## 2. Creating custom fields

Each restaurant has extra information, so we’ll create custom fields to save them. Go to Meta Box > Custom Fields to create fields. Here are the fields that I’ll create:

![The created custom fields](https://i.imgur.com/ZJ7E9r5.png)

After creating all the fields, move to the **Settings** tab > **Location** > choose **Post Type** as the **Restaurants** post type to apply these fields to it.

![Set location for the created fields as post type](https://i.imgur.com/c2WVoJv.png)

Go to the post editor, you will see all of the created custom fields.

![All the created fields appear in the post editor](https://i.imgur.com/0by2k0P.png)

Just fill in the information.

## 3. Creating a global block

Now, let’s create a global block to get the post information! Go to **Breakdance > Global Blocks** then create a new one.

![Create a global block](https://i.imgur.com/yydOEph.png)

Remember to set the preview for the global block.

My global block is to display the information of each post in a box like this.

![The information of each post is displayed in the global block](https://i.imgur.com/upsbvVj.png)

First, we'll add a div for this box.

![Add a div element](https://i.imgur.com/EMwkovo.png)

Next, add an **Image** element to display the featured image of the post. To insert dynamic data for this element, just click the icon in the image below and choose the **Featured Image** option in the **Post** section.

![Add an Image element for the featured image](https://i.imgur.com/DGURTdQ.png)

For the restaurant’s name, select a **Text Link** element to display the name in link format. Then, choose the **Post Title** option. And, if you want to set the hyperlink, choose the Post Permalink option in the **Link** section.

![Select a Text Link element for the restaurant's name](https://i.imgur.com/tstVynR.gif)

To display the restaurant’s address, add a **Text** element. As the address is saved in the custom field created by **Meta Box**, we’ll insert the dynamic data into this element. Also, click the icon as we did before and choose the corresponding field name in the **Meta Box** section. Then, the restaurant’s address will be obtained.

![Do likewise with the voucher information](https://i.imgur.com/ZooOCEx.gif)

For the voucher information, do likewise.

For the last one - the logo of the restaurant, we’ll add an Image element for it. The logo is saved in the custom field as well, so we’ll also insert the dynamic data into this element.

![Add an Image element for the logo of the restauran](https://i.imgur.com/lN1j9eg.gif)

We have just displayed all the wanted information from the restaurant.

## 4. Adding the section to the homepage

Let’s edit the homepage with Breakdance. First, add a new section to the page to contain all the latest products.

![Add a Section to the Homepage](https://i.imgur.com/7We9NeN.png)

Then, add a heading to name it.

For displaying the wanted posts, choose a **Post Loop Builder** element. In the **Global Block** section of this element's settings, choose the global block which has just been created.

![Choose a Post Loop Builder element to display the wanted posts](https://i.imgur.com/zuKFTsx.png)

To stipulate the source of data and the products you want to display in the section, go to the **Query** section > **Custom** > then edit the query like this:

![Go to Query section > Custom > then edit the query to stipulate the source of data](https://i.imgur.com/AgDuofT.png)

**In there:**

* In the **Source** data, it’ll be automatically set as the **Post Types**, then choose the name of the product you want to get the post from.
* In the **Post per page** section, enter the number to limit the number of posts you want to display in this section.
* In the **Order** section, the query also automatically sets the order by date and descending. It means that the latest post will be displayed first and then the older one. That’s exactly what we want in this practice. So, we just keep this setting by default.

After applying the query, you’ll see all the latest restaurants appear in the order you want.

## 5. Styling the section

Go back to the created global block. Then, customize each element, and also can add some CSS to the element to get the wanted display.

After styling the global block, back to the homepage, you’ll see the information of the posts will have a new look like this.

![Style the section](https://i.imgur.com/eA4bAZd.png)

Next, we’ll set the layout of the section for better display. Go to edit the homepage with Breakdance, and change the setting of each element.

After that, you’ll see the new appearance.

![The final result after styling](https://i.imgur.com/sTREMWQ.png)
