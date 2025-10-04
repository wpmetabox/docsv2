---
title: Creating download and preview buttons - Meta Box + Kadence
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

It’s convenient to allow visitors to have two options: read the preview or download the PDF file. Therefore, **creating download and preview buttons** on an e-book page can be a useful topic for you. Today, let’s do it using **Meta Box** and **Kadence**.

Take a look through the e-book page with two buttons that I created as an example:

![The e-book page with the download and preview buttons](https://imgur.elightup.com/yii7GKC.png)

## Video version

<LiteYouTubeEmbed id='plBdD3YUccI' />

## Preparation

Each e-book will be a post of a custom post type. The basic information of the e-book such as image, name, and description are respectively featured images, title, and description of the post. To store the PDF file, we'll use a custom field provided by Meta Box.

So, these are some tool we need:
* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have the framework for creating the custom post type and custom fields. You can download it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/);
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the e-book;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to create a custom field for storing the PDF files;
* **Kadence** with some extra types of blocks to build the page.

## 1. Creating a custom post type

Go to **Meta Box** > **Post Types** > **Add New** to create a new one for the e-book.

![Go to Meta Box > Post Types > Add New to create a new one for the e-book](https://imgur.elightup.com/yHPavUx.png)

After publishing, the created custom post type will be displayed in the admin dashboard.

![The created custom post type is displayed in the admin dashboard](https://imgur.elightup.com/nYUvFcu.png)

## 2. Creating custom fields

Go to **Meta Box** > **Custom Fields** to create a new field group as usual.

In this practice, I’ll create only one custom field to store the PDF file for the e-book. So, add the **File Advanced** field.

![Add the File Advanced field to store the PDF file for the e-book](https://imgur.elightup.com/sqyPi30.png)

I keep this field as default without special settings. In the real case, you may want to have some advanced settings for this field or add more custom fields for extra information. But I skip them to make this practice simpler.

After that, move to the **Settings** tab. Then, set the **Location** as **Post type**, and select **E-book** to apply the field to this post type.

![Move to the Settings tab, set the Location as Post type, and select E-book to apply the field to this post type](https://imgur.elightup.com/327JoTq.png)

Go to the post editor, you will see the created custom field.

![The created custom field is displayed in the post editor](https://imgur.elightup.com/RGaKs70.png)

Just fill in the information. And, click on the **+ Add Media** button to upload a file.

![Click on the + Add Media button to upload a file](https://imgur.elightup.com/ijXUfJD.png)

These are some posts I’ve added.

![Some posts as a demonstration](https://imgur.elightup.com/6rwEj9V.png)

## 3. Displaying e-books on the archive page

As I mentioned, e-books will be displayed on the archive page. So, we need to create the page first.

Go to **Pages** > **Add New** to create a new one as usual.

![Go to Pages > Add New to create a new archive page](https://imgur.elightup.com/wDtQbWh.png)

Next, we will get and display e-books on this page.

We have multiple e-books, so I’ll create a query loop to get them all. To do it, add the **Advanced Query Loop** block. It is provided by Kadence.

![Add the Advanced Query Loop block to have query loop to get all of the posts](https://imgur.elightup.com/QboSjy5.png)

In the **Post Types** option, choose the post type we used for the e-books.

![Choose the post type we used for the e-books in the Post Types section](https://imgur.elightup.com/5ARhXGS.png)

There are some default layouts you can choose for the e-book. Choose one of them.

![Choose a layout for the e-book](https://imgur.elightup.com/mXqBMKg.png)

After that, all of the e-books are displayed with the chosen layout.

![All of the e-books are displayed with the chosen layout](https://imgur.elightup.com/mb2LmGr.png)

You can adjust it as you want.

Next, we will add the download and preview buttons for each e-book into this query loop.

## 4. Adding download and preview buttons

### 4.1. Adding a download button

First, for the download button, add an **Advanced Buttons** block.

![Add an Advanced Buttons block for the download button](https://imgur.elightup.com/5ZPsR6O.png)

Then, add a label for the button.

![Add a label for the button](https://imgur.elightup.com/mQUjxDB.png)

To connect the button to the PDF file, click on the **Link** icon to add a dynamic link to the button.

![Click on the Link icon to add a dynamic link for connecting the button to the PDF file](https://imgur.elightup.com/P8nmPWR.png)

The documentation file was saved in the custom field created with Meta Box. So, set the **Link** as **Post Custom Field**.

![Set the Link as Post Custom Field](https://imgur.elightup.com/d4NZxvV.png)

At the same time, select the field that we used to store the PDF file.

![Select the field that we used to store the PDF file](https://imgur.elightup.com/GDlnXVA.png)

To set the download function for this button, open the **Advanced** section of the button, and enable the **Download** option.

![To set the download function for this button, open the Advanced section of the button, and enable the Download option](https://imgur.elightup.com/jQII2TJ.png)

That’s done.

### 4.2. Adding a preview button

For the preview button, do the same.

Also use the **Advanced Buttons** block to add the preview button.

![Use the Advanced Buttons block to add the preview button](https://imgur.elightup.com/dcpyj8d.png)

Set the dynamic link for it as the field we used.

![Set the dynamic link for it as the field we used](https://imgur.elightup.com/9vEKzJj.png)

However, after that, there is no need to add advanced settings to the button since previewing the attached file is the default function of the button. It means that when visitors click on it, the uploaded file will be shown automatically.

Then, go to the page on the front end, you will see the buttons work well.

![The buttons work well on the frontend](https://imgur.elightup.com/nkQKh6s.gif)

Next, it seems like we should style the page a little bit to have a better appearance.

## 5. Styling the page

Back to the page editor with Kadence. Just change some parameters and settings in the **Style** and **Advanced** tab on the right sidebar of each block.

![Change some parameters and settings in the Style and Advanced tab of each block to style the page](https://imgur.elightup.com/r8bI913.png)

Then, we will have the page with a better look.

![The new look of the page after styling](https://imgur.elightup.com/EzIuLeX.gif)
