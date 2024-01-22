---
title: Creating taxonomy thumbnails & featured Images - MB Views
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Having taxonomy thumbnails will be a good way to make that page be more attractive. In today’s practice, we are going to find out how to create thumbnails for a taxonomy and featured images for a portfolio page with MB Views from Meta Box.

This is an example for the portfolio page that we will create in this practice.

![An example for the portfolio page](https://i.imgur.com/fPWSHRH.png)

We often use images in a portfolio page as a term of a taxonomy, which is about an accommodation type, with its own thumbnail.

The image used for the thumbnail also will be used to be the featured image of the archive page of the taxonomy’s term.

![This is the featured image of the archive page](https://i.imgur.com/u53Eqt4.png)

## Video version

<LiteYouTubeEmbed id='IAQx6PBW9XA' />

## Preparation

In this practice, we need some advanced features from Meta Box:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to create custom post types, taxonomies as well as a custom field to store the images for the taxonomy;
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type and custom taxonomy for the portfolio;
* [MB Term Meta](https://metabox.io/plugins/mb-term-meta/): to add custom field created with Meta Box to categories, tags, or any custom taxonomies;
* [MB Views](https://metabox.io/plugins/mb-views/): to create templates to display the thumbnails and the featured images without touching the theme’s files;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have an intuitive UI to create the custom field for the images.

## 1. Creating a new custom post type

Go to **Meta Box** > **Post Types** > **Add New**.

![Go to Meta Box to create a new custom post type.](https://i.imgur.com/7Zz6by8.png)

After publishing, you will see a new menu displayed in the admin dashboard.

![A new menu of the post type displayed in the admin dashboard.](https://i.imgur.com/9KFYE5n.png)

## 2. Creating a custom taxonomy

Go to **Meta Box** > **Taxonomies** > **Add New** to create a new taxonomy.

![Go to Meta Box to create a new custom taxonomy for the created post type.](https://i.imgur.com/UdqCdnI.png)

When creating the wanted taxonomy, move to the **Post Types** tab, and choose **Portfolio** to apply this taxonomy to the post type as you want.

![Apply the creating taxonomy to a post type.](https://i.imgur.com/aRlI3Qf.png)

Now, you can go back to the created post type, and see a new submenu.

![There will be a place to add new term to the custom taxnonomy.](https://i.imgur.com/EM2mkwc.png)

Let’s add some terms for the taxonomy. These are some terms that I created for illustration.

![These are some example terms that created for illustration](https://i.imgur.com/XtobpfQ.png)

However, there is no place for any kind of images for custom taxonomy so far. Let’s go ahead to create one with the help of custom fields from Meta Box.

## 3. Creating custom fields

In this practice, I’ll create two custom fields for the taxonomy to give you a more comprehensive guide. In your real case, I recommend you choose one of them and use only one field for simplicity.

Go to **Meta Box** > **Custom Fields** to create the fields.

![Go to Meta Box > Custom Fields to create the fields.](https://i.imgur.com/DFMDVcA.png)

First, I choose the field in the type as **URL**. This one allows you to save links of the images. It’ll be useful when you save images in a 3-party service instead of uploading on your site.

Next, choose **Single Image** for the one uploading the images. This one allows you to upload an image and save it to your website gallery.

![I'm creating two fields in two common types.](https://i.imgur.com/SKu7Yml.png)

After having the field, move to the **Settings** tab, choose **Location** as **Taxonomy**, and select **Portfolio Type** which is the created taxonomy. Notice that you can set the location as the taxonomy only when you enable the [MB Term Meta](https://metabox.io/plugins/mb-term-meta/) extension.

![Assign the custom field to the Portfolio Type that is the created taxonomy.](https://i.imgur.com/ZiONahy.png)

Go back to create a new term for the taxonomy and you will see the created custom fields.

![The created custom field display when creating a new term for the taxonomy of the portfolio.](https://i.imgur.com/TdER7AY.png)

Now, you also can edit some terms and see the fields to have an image for each term.

![You also can edit some terms and see the fields to have an image for each term.](https://i.imgur.com/GL9kaq2.png)

## 4. Displaying images as taxonomy’s thumbnails

### 4.1. Creating the page and template

Go to **Pages** to create a new page for the portfolio. I will add content for this page via a template created with **MB Views**.

![Go to Pages to create a new page for the portfolio.](https://i.imgur.com/8m73IO1.png)

Go to **Meta Box** >** Views** to create a template.

![Go to Views to create a new template for the portfolio page.](https://i.imgur.com/2LpUsQt.png)

### 4.2. Getting terms and images

In the template tab of the view, we’ll add some lines of code.

```
{% set args = {taxonomy: 'portfolio-type',hide_empty: false} %}
{% set portfolios = mb.get_terms( args ) %}
{% for portfolio in portfolios %}
		{% set image_upload = mb.get_term_meta( portfolio.term_id, 'upload_portfolio_thumbnail', true ) %}
		{% set image_url = mb.get_term_meta( portfolio.term_id, 'url_portfolio_thumbnail', true ) %}
{% endfor %}
```		

![Add some lines of code to get terms and images.](https://i.imgur.com/4CC719E.png)

**In there:**

```
{% set args = {taxonomy: 'portfolio-type',hide_empty: false} %}
```

This line is to declare that we’ll get data from the taxonomy because the images are saved in a custom field that is assigned to a taxonomy. `'portfolio-type'` is the slug of the taxonomy.

Next, we use the `mb.get_terms( args )` function to get terms from the taxonomy.

```
{% for portfolio in portfolios %}
		
{% endfor %}
```

I have this loop to display all the terms that we got from the taxonomy.

![Create some variables to get images from custom fields.](https://i.imgur.com/76l0Ntb.png)

```
{% set image_upload = mb.get_term_meta( portfolio.term_id, 'upload_portfolio_thumbnail', true ) %}
{% set image_url = mb.get_term_meta( portfolio.term_id, 'url_portfolio_thumbnail', true ) %}
```

In this part, the `mb.get_term_meta` function helps to obtain data from the custom fields. `'upload_portfolio_thumbnail'` is the ID of the single image field for uploading, and `'url_portfolio_thumbnail'` is the ID of the URL field.

### 4.3. Adding condition to display images

We have two fields for storing images while only one image can be displayed, so I have a condition in the next lines to choose which one will be displayed.

```
{% if image_upload %}
    {% set image_upload_link = mb.wp_get_attachment_image_src( image_upload, large) %}
    <img src="{{ image_upload_link[0] }}">
{% elseif image_url %}
    <img src="{{ image_url }}">
{% else %}
    <img src="https://metabox.io/wp-content/uploads/2020/03/MB-Views-extension.jpg">
{% endif %}
```

This one will be added inside the loop.

![Having a condition to choose image from which field will be displayed.](https://i.imgur.com/w9yIY1h.png)

**In there:**

`{% if image_upload %}` is to know if this `image_upload` variable carries any value or not, which also means the single image field stores any image or not. If yes, the next line will run:

```
{% set image_upload_link = mb.wp_get_attachment_image_src( image_upload, large) %}
```

It’s to get the url of the uploaded image from the `image_upload` variable. And then, we’ll use the link to print the url to display the image on the page using this: `<img src="{{ image_upload_link[0] }}">`

`{% elseif image_url %}` means that if there is no image in the uploading field (the `image_upload` variable is empty), we will examine this `image_url` variable. Also, print the image from the stored url using this: `<img src="{{ image_url }}">`

In the case that the `image_url` variable is empty as well, you should set a default image for the thumbnail. Just use the URL of any image to set as default in this line:

```
<img src="https://metabox.io/wp-content/uploads/2020/03/MB-Views-extension.jpg">
```

![Set a default image for the thumbnail if there is no image store in the custom fields.](https://i.imgur.com/zXDcXN5.png)

That’s all for the thumbnails.

### 4.4. Noticing

In your real case, you may have only one field for the images, so you can remove one of these lines depending on which field you don’t want to use. As well as, remove the condition and corresponding part of displaying the images.

![Remember to remove corresponding lines of code when you have only field for images.](https://i.imgur.com/IErfFYP.png)

Remember to change the name of the variables as you want.

### 4.5. Displaying terms information

```
{{ portfolio.name }}
{{ portfolio.description }}
```

Two lines above are the title and the description of the term. You can type for it, or insert them from this Insert Field button.

![You can choose to type the code or insert field directly on the template.](https://i.imgur.com/ZKxqqBM.png)

We’ve done getting all the needed information for the portfolio.

Go down to the **Settings** section of the view, set the **Type** setting as **Singular**. Then, set a rule for **Location** to apply the template to the portfolio page.

![Set the location for the template to apply it to the portfolio page.](https://i.imgur.com/36JPKog.png)

Go to the page on the front end, you'll see the data displayed.

![The images and the terms information display on the page.](https://i.imgur.com/X0CWjCN.png)

### 4.6. Styling the page

To style the page, go back to the edit template in the Views.

Before styling, we should add some Div tags and classes to divide information into different parts.

![Add div tags and classes to the template for styling.](https://i.imgur.com/dVIBX0z.png)

This line is to create a button to go to the term’s archive page.

![Add a button for each terms to link to the archive page.](https://i.imgur.com/dWy4Sdm.png)

This is the page on frontend now.

![The page after divided into section using div tags.](https://i.imgur.com/Xz822kg.png)

Back to the view again, go to the **CSS** tab, add some code to style the page.

![Add CSS to the template.](https://i.imgur.com/oo8yVJ4.png)

Now you will see the Portfolio page displayed with a better look.

![The portfolio page after styling.](https://i.imgur.com/AyL2akH.png)

## 5. Displaying images as featured images

I have a pre-made template for this archive page. But, there is no featured image on the page as default. So I will take the image saved in the custom field to be the featured image of this page, and display it on the top.

![The archive page as default.](https://i.imgur.com/VoN64qR.png)

Go back to Meta Box to create a new view.

![Go to view to create a new template for the featured image.](https://i.imgur.com/qDT0Vik.png)

And add this script:

```
{% if term.taxonomy == 'portfolio-type' %}
    {% set image_upload = term.upload_portfolio_thumbnail.full.url %}
    {% set image_url = term.url_portfolio_thumbnail %}
    {% if image_upload %}
            <img src="{{ image_upload }}">
        {% elseif image_url %}					
            <img src="{{ image_url }}">
        {% else %}
            <img src="https://metabox.io/wp-content/uploads/2020/03/MB-Views-extension.jpg">
        {% endif %}
{% endif %}
```

![Add some code to the template.](https://i.imgur.com/RmCuVEd.png)

I also divide the code into parts to explain it clearer.

### 5.1. Defining the archive page

```
{% if term.taxonomy == 'portfolio-type' %}
```

Since we will display the image on the archive page of the term, I have this condition to check whether the current page is the expected page or not. `'portfolio-type'` is the ID of the taxonomy.

### 5.2. Getting images

We will use the same structure of code in the previous template for the portfolio page to get URLs of the images.

```
{% set image_upload = term.upload_portfolio_thumbnail.full.url %}
{% set image_url = term.url_portfolio_thumbnail %}
```

![Create variables to get images from custom fields.](https://i.imgur.com/Jgpro28.png)

These `upload_portfolio_thumbnail` and `url_portfolio_thumbnail` variables are the field’s ID.

![These variables are the fields' IDs](https://i.imgur.com/2nSexyY.png)

That’s all to get images. 

### 5.3. Conditioning to display the images

The next part is the condition. It has the same logic as the one we use for the portfolio page, so I will not dig in any more.

![Add a condition to choose image from which field will be displayed.](https://i.imgur.com/bujeh9v.png)

### 5.4. Applying to the page

Now, I’ll leave this setting as default to generate this template as a shortcode.

![Set the template as a shortcode.](https://i.imgur.com/toVtj8k.png)

Copy the Shortcode. Then, you can input this shortcode to any place on the page template.

![Add the shortcode to any place on the page.](https://i.imgur.com/eMK1xMh.gif)

The page of a term has the image now.

![The image displayed on the page.](https://i.imgur.com/wUMWPRT.png)

If you want to have beyonce styling for the image, go back to the template of this featured image and add some CSS.

![Add CSS to the template of displaying image to style it.](https://i.imgur.com/NgeSYp0.png)

This is the new look of the featured image of the page.

![The page with the featured image after styling.](https://i.imgur.com/fiHE5Nx.png)
