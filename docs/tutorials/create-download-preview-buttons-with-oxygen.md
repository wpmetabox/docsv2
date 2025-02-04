---
title: Creating download and preview buttons - Meta Box + Oxygen
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In today's post, we'll walk you through the way to create an e-book page with download and preview buttons using Meta Box and Oxygen**. The e-book files can be downloaded easily or viewed online by website visitors with just one click.

Take a look through the e-book page with two kinds of buttons that I created:

![The e-book page with two kinds of buttons](https://i.imgur.com/JkzmLtp.png)

## Video version

<LiteYouTubeEmbed id='G0npHZH9mvA'/>

## Preparation

This is an archive page that shows the product's detailed information along with the buttons. Each e-book will be a unique post of a custom post type. The name of the e-book and its image are the title and featured image of the post. We'll use a custom field provided by Meta Box to store the PDF file.

So, in this practice, we need these tools:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have the framework for creating custom post types and custom fields;
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the e-books;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to create custom fields to store the PDF files;
* **Oxygen**: to build the page.

## 1. Creating a custom post type

Go to **Meta Box** > **Post Types** to create a new post type for the e-books.

![Create a new post type for the e-books](https://i.imgur.com/NxTFiji.png)

After publishing, you’ll see a new item appear in the admin dashboard.

![A new item appear in the admin dashboard](https://i.imgur.com/5AIygzf.png)

## 2. Creating custom fields

I’ll create only one custom field to store the PDF file of the e-book. So choose the **File Advanced** type to save this kind of data. The file will be used for both Download and Preview buttons.

![Create one custom field to store the PDF file of the e-book](https://i.imgur.com/eaTCm4f.png)

Next, move to the **Settings** tab. Choose **Location** as **Post Type** and then select **E-book** to apply the field to the post type.

![Choose Location as Post Type and then select E-book to apply the field to the post type](https://i.imgur.com/oh3s4aO.png)

Go to the post editor, you will see the created custom fields.

![The created custom fields](https://i.imgur.com/19yLKXp.png)

## 3. Creating the page

Go to **Oxygen** > **Templates** to add a new template.

![Add a new template](https://i.imgur.com/8oNzUTA.png)

![Go to Oxygen > Templates to add a new template](https://i.imgur.com/VyL02lB.png)

Next, create a new page.

![Create a new page](https://i.imgur.com/NO5teGE.png)

Set the created template to apply it to the new page.

![Set the created template to apply to the new page](https://i.imgur.com/6vCNGh9.png)

Then, edit the template with **Oxygen**.

![Edit the template with Oxygen](https://i.imgur.com/VmpOekS.png)

Remember to set the preview.

![Set the preview](https://i.imgur.com/OOpUhax.png)

Select the **Section** component to cover the page content.

![Select the Section component to cover the page content](https://i.imgur.com/3iMJkTD.png)

Then, add a **Heading** and insert data from the page title.

![Add a Heading](https://i.imgur.com/UeZKtVt.png)

![Insert data from the page title](https://i.imgur.com/B3JvDYJ.gif)

We will display all the e-books first, then add buttons later.

### 3.1. Displaying e-books information

Inside the **Section**, add a **Repeater** component to get all the posts of the `e-book` post type.

![Add a Repeater component to get all the posts of the e-book post type](https://i.imgur.com/U0VesT6.png)

Go to the **Query** section in the settings of the **Repeater** to choose the source of data.

![Go to the Query section to choose the source of data](https://i.imgur.com/clu23bA.png)

Choose **Custom**, and set the **Post type** as ‘**e-book**’ to get posts from the post type.

![Choose Custom, and set the Post type as ‘e-book’ to get posts from the post type](https://i.imgur.com/6AG3yGD.png)

![Set the Post type as ‘e-book’ to get posts from the post type](https://i.imgur.com/CC10cvz.png)

Inside the **Repeater**, there will be a **Div**. I’ll add some components to the Div to display the e-book information.

![Inside the Repeater, there will be a Div](https://i.imgur.com/eM4IT4l.png)

First, add an **Image** component.

![Add an Image component](https://i.imgur.com/yRmTYnc.png)

Insert data from the **Featured Image** of the post

![Insert data from the Featured Image of the post](https://i.imgur.com/KRkcvwN.png)

![Insert data from the Featured Image of the post](https://i.imgur.com/mhtansp.png)

You can change the settings of the **Div** a little bit to put the e-book into columns and see all the images.

![Change the settings of the Div a little bit to put the e-book into columns and see all the images](https://i.imgur.com/cYWMaie.png)

For the name of the books, add a **Text** component.

![Add a Text component](https://i.imgur.com/DE4pvtq.png)

Then insert data from the **Post Title**.

![Then insert data from the Post Title](https://i.imgur.com/XYa79R2.gif)

For the book description, use the **Text** component.

![Use the Text component](https://i.imgur.com/jqqWlnD.png)

And insert data from **Post Content**.

![Choose insert data](https://i.imgur.com/Vxf3yJn.png)

![Insert data from Post Content](https://i.imgur.com/wnEXEB6.png)

Now, move ahead to create the buttons.

### 3.2. Creating the buttons

Add a **Button** component.

![Add a Button component](https://i.imgur.com/9y7sw1K.png)

Change the button label.

![Change the button label](https://i.imgur.com/TOAGjcU.png)

In the **URL** setting, insert data from the custom field to the button. Choose **Meta Box Field** option, then select the name of the field that we used to store the PDF file.

![Insert data from the custom field to the button](https://i.imgur.com/bgV1Jkj.gif)

This action just helps to embed the URL of the **PDF** file into the button. To allow users to download the file from it, we should add an attribute to the button.

Go to the **Advanced** > **Attributes** section in the settings of the Button component.

![Go to the Advanced > Attributes section in the settings of the Button component](https://i.imgur.com/ZdbWMwI.png)

Then add an attribute as a `download` to the button.

![Add an attribute as download to the button](https://i.imgur.com/VzDH07r.png)

That’s done for the **Download** button. For the **Preview** button, you can do the same way.

Add **Button** component.

![Add Button component](https://i.imgur.com/rXJNWh8.png)

Set the label.

![Set the label](https://i.imgur.com/tGfKi2N.png)

Insert **URL** from the field that stores the **PDF file**.

![Insert URL from the field that stores the PDF file](https://i.imgur.com/uCQiNRn.gif)

It’s a little bit different with the **Download** button. There is no need to add any attribute as well as any action for the **Preview** button. The file will be open to view when people click on the button.

After getting all the data, we have an e-book page with buttons like this.

![An e-book page with buttons](https://i.imgur.com/TX0F5Y9.png)

## 4. Styling the page

Just change the settings of each component to have a better look for them.

![A better look for e-book page](https://i.imgur.com/JkzmLtp.png)
