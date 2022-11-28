---
title: Creating a dynamic landing page
---

The information such as title, tagline, button, image, … of the landing page will be saved in custom fields. When you change them, the landing page will be changed the content but keep the layout and style. It’s called dynamic landing page.

I chose a demo like this as an example:

![Example of a llanding page](https://i.imgur.com/yOUXVUG.jpg)

![Example of landing pages](https://i.imgur.com/k2BTT9a.jpg)

![Example of landing pages](https://i.imgur.com/QpyxYnG.jpg)

## Before getting started

As you can see, there are five sections including Hero, Intro, Services, Features, CTA and Footer. Corresponding to each section, there are some types of information. To save this data, we need some custom fields.

So, we need these tools:

* [Meta Box](https://metabox.io/): to have a framework to create custom fields;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have an UI to create custom fields for the landing page in the backend;

## Step 1: Create a page

Go to **Pages > Add New** to have a new landing page.

![Create a page](https://i.imgur.com/ghISiI4.png)

![Choose landing page](https://i.imgur.com/D8YzLxh.png)

## Step 2: Create custom fields

Since each section will have different data, I will create some field groups corresponding to each section. You also can add only one field group then add corresponding groups inside for sections.

Go to **Meta Box > Custom Fields** to create new field groups.

![Create new field group](https://i.imgur.com/DR8nzGG.png)

I create a field group for each section and have corresponding custom fields for them.

![Create a field group for each section](https://i.imgur.com/5ACClAB.png)

For the **Hero** section, these are the fields for it.

![The field for Hero section](https://i.imgur.com/2RURipn.png)

Here are the fields of the other sections:

![The fields for other sections](https://i.imgur.com/hWMTPlv.png)

For the **Services** section, I created a **Group** field to easily create sub-fields to save information of each service as follows.

![Create sub-field](https://i.imgur.com/cFAh11S.png)

Since there will be more than one service, I set this group as **Cloneable** and also set it as **Collapsible** to avoid being messy in the page editor.

![Set group to be cloneable or collapsible](https://i.imgur.com/kBJNQt6.png)

For the **Feature** section, I also have a **Group** field.

![Create group field for the feature section](https://i.imgur.com/AQOJCb4.png)

This group field has the same settings as the **Section** field.

![Settings the same with section field](https://i.imgur.com/M2Md0Uv.png)

These are the fields of the CTA section:

![Fields of the CTA section](https://i.imgur.com/omwObY7.png)

After creating all the fields for each section, go to the **Settings** tab of each field group > choose **Location** as **Post Type** and select **Page**. Since we’ll apply these fields to the landing page, in the **Advanced location rules** options, choose **Landing Page**.

![Set location for the fields](https://i.imgur.com/HHQjxXD.png)

These settings will apply for all the field groups.

When you go to edit the landing page, you will see all the created field groups and its fields as below:

![Created fields display in the post editor](https://i.imgur.com/vNRj2Gr.png)

## Step 3: Create template for the page

There are two methods to create a template for the page: using MB Views or a PHP file.

If you add code to the PHP file, when you change the theme, the template will be missed. Otherwise, using MB Views ensures that the page template will not be affected.

### Method 1: Using MB Views

For this method, you will need another Meta Box extension -[ MB Views](https://metabox.io/plugins/mb-views/).

Go to **Meta Box > Views** to create a new template.

![Create new template](https://i.imgur.com/U8nwKlY.png)

Since all the content of the page is saved in custom fields, in the **Template** tab, you can easily insert fields through the **Insert Field** button to have all the created fields to get data from.

![Insert fields through Insert field button](https://i.imgur.com/6sEx4ra.gif)

![Insert fields](https://i.imgur.com/v4AP96u.png)

For easier styling later, you can add some div tags and attributes like this:

![Add some div tags](https://i.imgur.com/6olqare.png)

Then, scroll down to the **Settings** tab, choose **Type** as **Singular**. Since we created this template for the landing page, choose **Location** as **Page** and select **Landing Page**.

![Set Location for the fields](https://i.imgur.com/UKkEEBf.png)

To style the landing page, go to the CSS tab and add some CSS code to do it.

![Go to CSS tab to style the page](https://i.imgur.com/uB7lGAL.png)

Now, the landing page displays as I want.

![The landing page displays as you want](https://i.imgur.com/ie3wJiE.jpg)


![The landing page displays as you want](https://i.imgur.com/i1FiLwM.jpg)


![The landing page displays as you want](https://i.imgur.com/THWKjSp.jpg)

### Method 2: Using PHP file

To get the custom fields’ data and display them in the front end, just replace the hard-coded text or image display in the `template-home.php` file with the helper functions `rwmb_the_value ()` ot `rwmb_meta ()`.

Here, I just take the code for the hero section as an example. The code for remaining is the same.

```php
<section id="banner">
    <div class="inner">
        <h2><?php rwmb_the_value( 'hero_title' ); ?></h2>
        <?php rwmb_the_value( 'hero_desc' ); ?>
        <ul class="actions">
            <li><a href="<?php rwmb_the_value( 'hero_button_link' ); ?>" class="button special"><?php rwmb_the_value( 'hero_button_text' ); ?></a></li>
        </ul>
    </div>
    <a href="#one" class="more scrolly">Learn More</a>
</section>
```

The full code for the whole template is [here](https://gist.github.com/rilwis/ddadc4840749195fab72fa81d9c48c95#file-template-home-with-custom-fields-php).

Finally, just create a page, assign the created template to the page you want and you’ll have a perfect landing page.

