---
title: Creating taxonomy thumbnails & featured Images
--- 

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We are going to **create taxonomy thumbnails and featured images using custom fields**. The images will be saved in custom fields, then displayed as thumbnails and featured images of the taxonomy on a portfolio page, like this:

![Taxonomy Thumbnails](https://i.imgur.com/O8fP9VI.png)

![Featured image of a term on an archive page](https://i.imgur.com/2KDfpx6.png)

## Video version

<LiteYouTubeEmbed id='8Nyg8lw-GH8' />

## Before getting started 

In addition to using the [Meta Box Core Plugin](https://metabox.io/), make sure you already have these extensions:
 
* [MB Custom Post Type & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): a free extension of Meta Box to create custom post types. It’s also available on [wordpress.org](https://wordpress.org/plugins/mb-custom-post-type/);
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): It provides a UI on the back end to create and configure custom fields without code;
* [MB Term Meta](https://metabox.io/plugins/mb-term-meta/): a premium extension of Meta Box to add custom fields created with Meta Box to categories, tags, or any custom taxonomies;
* [MB Views](https://metabox.io/plugins/mb-views/): It helps you create templates without touching the theme’s files;

Finally, [Oxygen Builder](https://oxygenbuilder.com/). I build the pages with Oxygen in this practice. You should use the 3.9 version or the higher one to have native integration with Meta Box.

## Creating a new post type and taxonomy

### Step 1: Create a new post type

Go to **Meta Box > Post Types > New Post Type**. 

![Create a new post type](https://i.imgur.com/8iPsfQD.png)

After publishing, you will see your new post type displayed on the admin dashboard.

![New post displayed in the admin dashboard](https://i.imgur.com/5czIMPN.png)

### Step 2: Create taxonomy and terms

Go to **Meta Box > Taxonomies > Add New**.

![Create taxonmy and terms](https://i.imgur.com/fGePXwC.png)

Upon creating the desired taxonomy, move to the **Post Types** tab and choose **Portfolio** to apply this taxonomy to the post type. And don’t forget to click Publish.

![Create the desired taxonomy](https://i.imgur.com/FE7EZ3f.png)

After publishing, a new **Portfolio** post type and **Portfolio Type** taxonomy appear in the **Dashboard** menu. Just add terms for the taxonomy. It’s the same as creating a new category in WordPress.

![The newly created post type and taxonomy appear in the Dashboard menu](https://i.imgur.com/iFyfRw5.png)

## Creating custom fields

Go to **Meta Box > Custom Fields > Add New** to create some fields.

I will create two fields, as follows:

* **URL**: It allows users to input an image by entering the image URL. 
* **Single Image**: It supports uploading images to the Media Library.

These fields are so simple that I just enter their name and ID without any further configuration.

Then, move to the **Settings** tab, set the **Location** as **Taxonomy** and select **Portfolio Type**.

![Set location for the post type](https://i.imgur.com/FFS04q2.png)
 
Then, go to the **Portfolio Type** taxonomy, and you will see the fields. Let’s upload images for each term here.

![The fields in the taxonomy](https://i.imgur.com/m2zFoiu.png)

## Displaying thumbnails on the frontend

### Step 1: Create a Template

Go to **Meta Box > Views > Add New**, and add this code to the **Template** tab:

```
{% set args = {taxonomy: 'portfolio-type',hide_empty: false} %}
{% set portfolios = mb.get_terms( args ) %}
<div class="portfolio container">
    <h1 class="heading-title">Portfolio</h1>
    <div class="thumbnail-images">
    {% for portfolio in portfolios %}
        <div class="item">
            <div class="overlay-thumbnail-categories">
                {% set image_upload = mb.get_term_meta( portfolio.term_id, 'upload_portfolio_thumbnail', true ) %}
                {% set image_url = mb.get_term_meta( portfolio.term_id, 'url_portfolio_thumbnail', true ) %}
                {% if image_upload %}
                    {% set image_upload_link = mb.wp_get_attachment_image_src( image_upload, large) %}
                    <div class="thumbnail" style="background-image:url({{ image_upload_link [0] }})"></div>
                    <img src="{{ image_upload_link[0] }}">
                {% elseif image_url %}
                    <div class="thumbnail" style="background-image:url({{ image_url }})"></div>
                    <img src="{{ image_url }}">
                {% else %}
                    <img src="http://demo1.elightup.com/test-metabox/wp-content/uploads/2020/11/oriental-tiles.png">
                {% endif %}
            </div>
            <div class="category-title">
                <div class="category-name">{{ portfolio.name }}</div>
                <p class="description">
                    {{ portfolio.description }}
                </p>
                <a href="{{ mb.get_category_link( portfolio.term_id ) }}" target="_blank" rel="noopener">View More</a>
            </div>
        </div>
    {% endfor %}
    </div>
</div>
```
Explanation:

* `{% set args = {taxonomy: 'portfolio-type',hide_empty: false} %}`: to declare the args variable with the data taken from the taxonomy that has the slug as `portfolio-type`;
* `{% set portfolios = mb.get_terms( args ) %}`: this is used to pass the returned data of the args variable to this portfolios variable;
* `{% for portfolio in portfolios %}`: This loop will list all the terms of the taxonomy;
* `{% set image_upload = mb.get_term_meta()` and `{% set image_url = mb.get_term_meta()`: they create the `image_upload` and `image_url` variables to take the value of the fields that have IDs as `upload_portfolio_thumbnail` and `url_portfolio_thumbnail` from the corresponding terms;
* `{% if image_upload %}`: if this variable has value, it will create `image_upload_link` variable to get the link of the uploaded image;
* `wp_get_attachment_image_src ()`: to get the link of the uploaded image of the corresponding term;
* `<img src="{{ }}">`: to display the image by the link assigned to the corresponding variable;
* `{% elseif image_url %}`: if the image_upload variable has no value, it will get the value from the image_url variable;
* `<imgsrc="http://demo1.elightup.com/test-metabox/wp-content/uploads/2020/11/oriental-tiles.png">`: In case you don’t upload any image or insert any URL to the two custom fields, it will display a default image from this link. You can choose the default image as you want;
* `{{ portfolio.name }}`: This displays the name of the terms;
* `{{ portfolio.description }}`: this displays the description of the terms;
* `<a href="{{ mb.get_portfolio_link( portfolio.term_id ) }}" target="_blank" rel="noopener">View More</a>`: this code shows View More texts, and places the link of the corresponding post into it. So, when people hover over a post's thumbnail, the texts appear, and they can click to read more.

Now, move to the **Type** section and select **Shortcode**.

![Move to Type section and select Shortcode](https://i.imgur.com/bhIhF5h.png)

After publishing, your template will appear as a shortcode. You can use it to display the template anywhere on your website.

![The template will appear as a shortcode](https://i.imgur.com/PN2Gp1D.png)

### Step 2: Add the template to a page

Go to **Pages > Add New** to create a new page. You can also use an existing page.

Then, click **Edit with Oxygen**. In the case, you use any other page builder, you also can use the shortcode and insert as we’re doing in this step.

In Oxygen, click **Add** and search for **Shortcode**.

![Add the template to a page](https://i.imgur.com/l8TyKEC.png)

Then, paste the shortcode into the **Full Shortcode** item. And you can see the list of terms that appears with the thumbnails.

![The list of terms appear in the thumbnails](https://i.imgur.com/75ayMbQ.png)

### Step 3: Style the portfolio section

To make it look better, I will add some **CSS** in the **CSS** tab of the **View**. You can refer to my CSS code [here](https://github.com/wpmetabox/tutorials/blob/master/create-taxonomy-thumbnail-and-featured-image/portfolio.css).

![Add some Css code](https://i.imgur.com/u8iz3A3.png)

Here is the result:

![The result](https://i.imgur.com/AfqYQyN.png)

## Displaying featured images of taxonomy

I have an archive page for each taxonomy term. However, they haven’t had featured images yet, so I will create one at the top.

![The acrchive page still doesn't have featured images](https://i.imgur.com/TGvHgoI.png)

### Step1: Add the featured image to the archive page

Go to **Oxygen > Template > Archive > Edit with Oxygen**. Next, select a term to preview it.

![Add the featured images to archive page](https://i.imgur.com/QifwxCx.png)

Then, click **Structure** to see all the elements and structure of your page.

![All the elements and structure of your page](https://i.imgur.com/bLRITPm.png)

I’ll add a component named **Code Block**, and drag and drop it into the **Section**, above the **Div**. Then, select **PHP & HTML** and add this code:

![Add a Code Block component](https://i.imgur.com/DajUhwT.png)

```php
<?php
    $terms= get_the_terms( $post->ID, 'portfolio-type');
    $background_image = get_term_meta( $terms[0]->term_id, 'upload_portfolio_thumbnail', true );
    if ($background_image) {
        $link_image = wp_get_attachment_image_src( $background_image, 'full' );
        $link_image_source = $link_image[0];
    }
    else {
        $link_image_source = get_term_meta( $terms[0]->term_id, 'url_portfolio_thumbnail', true );
    }
    if ( !empty( $terms ) ){
        $term = array_shift( $terms );
    }
?>
<div class="port-thumbnail">
    <img class="thumbnail-cat" src="<?php echo $link_image_source ?>">
</div>
<div class="portfolio-heading"><?php echo $term->name; ?></div>
<div class="portfolio-description"><?php echo category_description(the_category_id()); ?> </div>
```

Explanation:

* `$terms= get_the_terms( $post->ID, 'portfolio-type')`: to get the list of the term from the taxonomy that the ID as `portfolio-type`;
* `get_term_meta ()`: to get the custom fields’ value of the corresponding terms;
* `src="<?php echo $link_image_source ?>`: to display images from the links that are returned from the `$link_image_source` variable;
* `if ($background_image) {$link_image = wp_get_attachment_image_src( $background_image, 'full' );$link_image_source = $link_image[0];}else {$link_image_source = get_term_meta( $terms[0]->term_id, 'url_portfolio_thumbnail', true );}`
The logic of this part is quite similar to the code of the view in step 2 of the first part. It sets a rule to decide which image to display;
* `if ( !empty( $terms ) ){`: to check which archive page of which term that users are in;
* `<?php echo $term->name; ?>`: to display the name of the corresponding term that users are in;
* `<?php echo category_description(the_category_id()); ?>`: similarly, to display the description of the corresponding term;

Here is the result:

![The result](https://i.imgur.com/0QpIjc3.png)

### Step 2: Style the featured image section

Go to **Manage > Stylesheets > Add Stylesheet** and add code:

![Style the featured image](https://i.imgur.com/yUnh1s5.png)

Here is my example CSS that I showed at the beginning of this post:

```
.port-thumbnail {
    position: relative;
    height: 100vh;
}
.archive-page-layout .port-thumbnail .thumbnail-cat {
    position: absolute;
    top: 0;
    height: 100%;
        width: 100%;
}
.portfolio-heading {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    font-size: 56px;
    font-weight: 700;
    color: #00B1B3;
}
.portfolio-description {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
}
.archive-page-layout .ct-section-inner-wrap .ct-code-block {
    width: 100%;
}
.portfolio-description p {
    margin: 0;
}
.port-thumbnail .thumbnail-cat {
    width: 100%;
    height: 100vh;
}
```

The featured image looks much better now:

![The featured image looks much better](https://i.imgur.com/0ZMkC3z.png)

Visit other terms, and you can see that all featured images are displayed beautifully.

![All featured images are displayed beautiully](https://i.imgur.com/TpW8xv5.gif)
