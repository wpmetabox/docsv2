---
title: Creating Download and Preview Buttons - MB Views
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

If you want to give users options to read previews or download PDF files, you shouldn't skip this article. Here is a quick tutorial on how to create an ebook page with 2 buttons **allowing preview and download the ebook using MB Views**.

In such cases, I created an ebook page as an example:

![An ebook page with download and preview button](https://i.imgur.com/eOuohga.png)

## Video version

<LiteYouTubeEmbed id='I718h2v7u_s'/>

## Preparation

This archive page shows the product's detailed information along with 2 buttons. The first one allows directly downloading a PDF file. And the second button is to view it online.

Each ebook will be a unique post of a custom post type. The name of the ebook and its image are the title and featured image of the post. We'll use a custom field provided by Meta Box to store the PDF file and the two buttons will link to this file.

For this practice, we need these tools:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create a custom post type and custom fields:
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for ebooks;
* [MB Views](https://metabox.io/plugins/mb-views/): to create and style the template for the page without touching the theme files;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to provide a UI on the back end to create custom fields.

You can install them individually or use **Meta Box AIO**.

## 1. Creating a custom post type

Go to **Meta Box** > **Post Types** > **Add New** to create a new post type for your ebooks.

![Create a new post type for your ebooks](https://i.imgur.com/qT4mSI8.png)

After publishing, you will see your new post types in the admin dashboard.

![A new post types in the admin dashboard](https://i.imgur.com/HJH7vDO.png)

## 2. Creating custom fields

I’ll create only one custom field to store the **PDF file** for the ebook. So choose the **File Advanced field**.

![Create custom field to store the PDF file for the ebook](https://i.imgur.com/OVFP6Vt.png)

Next, move to the **Settings** tab. Choose **Location** as **Post Type** and then select **ebook** to apply this field to the post type.

![Select ebook to apply the field to the post type](https://i.imgur.com/sFdDXnz.png)

Go to the post editor, you will see the created custom fields.

![The created custom fields](https://i.imgur.com/ZPHUwSg.png)

## 3. Creating the page template

### 3.1. Creating a new page

I’ll create a new page first.

![Create a new page](https://i.imgur.com/hEvACcg.png)

![A new ebook page](https://i.imgur.com/IXGGJub.png)

### 3.2. Creating a template

Then, go to **Views** of **Meta Box** to create a new template for the page.

![Create a new template for the page](https://i.imgur.com/IQUZxVe.png)

### 3.3. Querying the posts

Add some code to the **Template** tab as follows:

![Add some code to the Template tab](https://i.imgur.com/wlESRzO.png)

```
{% set args = { post_type: 'ebook', posts_per_page: -1 } %}
{% set posts = mb.get_posts( args ) %}
{% for post in posts %}

{% endfor %}
```

Let’s get through each line with me.

```
{% set args = { post_type: 'ebook', posts_per_page: -1 } %}
```

This line of code is to declare that we will get posts from the post type that has an ID as **'_ebook_'**. The number **_-1_** means that we will display all the posts on the page. You can change it as you want.

Next, we’ll use the **_mb.get_posts( )_** function to get posts.

```
{% for post in posts %}

{% endfor %}
```

This is the loop to display all the posts.

### 3.4. Displaying the ebook information

To display the ebook information, you can add code or just insert fields from the right sidebar into the above loop.

![Insert fields from the right sidebar into the above loop to display the ebook information](https://i.imgur.com/LEfECsx.png)

Choose the **Post thumbnail** field to display the book images.

![Choose the Post thumbnail field to display the book images](https://i.imgur.com/bXcG7Oj.png)

Then, choose the **Post title** to show the book's name.

![Choose the Post title to show the book's name](https://i.imgur.com/uXcoC51.png)

And click on **Post content** for description.

![Click on Post content for description](https://i.imgur.com/LZehEU0.png)

### 3.5. Creating buttons

To have a **download button**, insert the custom field that we created.

![Insert the custom field that we created to have a download button](https://i.imgur.com/PJ3gnFo.png)

Change some codes to name the button and set it to download ebooks directly.

![Change some codes to name the button and set it to download ebooks directly](https://i.imgur.com/brhf993.png)

Insert the custom field once again to have the **preview button**.

![Insert the custom field to have the preview button](https://i.imgur.com/6Txs0eW.png)

Just add a name for the button.

![Add a name for the button](https://i.imgur.com/QDwnw2X.png)

### 3.6. Assigning the template to the page

Move to the **Settings** section of the **View**. Set the template in the type of **Singular page**.

![Set the template in the type of Singular page](https://i.imgur.com/7qvKgYv.png)

Choose the location as **Page** and select **ebook shop** to apply the template to the page.

![Select ebook shop to apply the template to the page](https://i.imgur.com/udHScoE.png)

After publishing, go back to the page on the front end, all the product information and buttons are displayed already.

![The product information and buttons are displayed already](https://i.imgur.com/xAR784H.png)

## 4. Styling the page

With **MB Views**, we should use **CSS** to style. So, let’s add some div tags and classes for elements.

![Add some div tags and classes for elements](https://i.imgur.com/UQEtBVx.png)

Next, add some **CSS** code to this tab.

![Add some CSS code](https://i.imgur.com/0897K0x.png)

All of these codes are available on our [Github](https://github.com/wpmetabox/tutorials/tree/master/create-download-and-preview-buttons-mb-view), so you can refer to them.

After updating the template, you’ll see the new look on the front end. You can click on the **Download button** to get the ebook or choose the **Preview button** to read it online.

![Ebook shop with download and preview buttons](https://i.imgur.com/zZzqXc1.png)
