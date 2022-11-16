---
title: Displaying images from cloneable fields - MB Views
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Images like a series of brand logos of typical partners or avatar of clients in the testimonial section, could be saved in custom fields. This tutorial is on how to display them without using any page builders.

## Video version

<LiteYouTubeEmbed id='nteLH6DDKSI' />

## Before getting started

We’ll need <a href="https://wordpress.org/plugins/meta-box/">Meta Box core plugin</a> and some of its extensions for this practice:

* <a href="https://metabox.io/plugins/mb-settings-page/?swcfpc=1">MB Settings Page</a>: create settings pages for uploading images;
* <a href="https://metabox.io/plugins/meta-box-builder/?swcfpc=1">Meta Box Builder</a>: it provides a UI to create custom fields;
* <a href="https://metabox.io/plugins/meta-box-group/?swcfpc=1">Meta Box Group</a>: organize custom fields into cloneable groups, where we input images;
* <a href="https://metabox.io/plugins/mb-views/?swcfpc=1">MB Views:</a> it helps you to create templates as well as get and display fields’ values.

## Step 1: Create a settings page

Go to **Meta Box** &gt; **Settings Page** &gt; **Add New** and change the option name.

![Create a Settings Page](https://i.imgur.com/xj8IOWJ.png)

Now, a new menu named **Brands** appears. It’s my new **Settings Page.**

![The new Settings Page named Brands appears](https://i.imgur.com/U4H4ELu.png)

## Step 2: Create custom fields for the settings page

In the **Admin Dashboard**, go to **Meta Box** &gt; **Custom Fields** &gt; **Add New**. I created fields with the below structure.

<table>
<tbody>
<tr>
<td> Field </td>
<td> Types of Field </td>
<td> ID </td>
</tr>
<tr>
<td>Brand Group</td>
<td>Group</td>
<td>brand_group</td>
</tr>
<tr>
<td>Brand Logo Upload</td>
<td>Single Image</td>
<td>brand_logo_upload</td>
</tr>
<tr>
<td>Brand Logo Url</td>
<td>Url</td>
<td>brand_logo_url</td>
</tr>
<tr>
<td>Brand Name</td>
<td>Text</td>
<td>brand_name</td>
</tr>
</tbody>
</table>

This is a group with three subfields inside. This group is set to be cloneable to have more spaces to add different brands information.<img src="https://i.imgur.com/Hi033mY.png">

As you can see in the structure, I added 2 fields which are **Single Image** and **Url**. One allows you to upload images and save them in the library, and one allows you to input a link of an image from anywhere.

![Set this group as cloneable to have more spaces to add different brands information.](https://i.imgur.com/dmaPInv.png)

After having all the needed fields, go to the **Settings** tab and choose the **Location** as the Settings Page that we’ve just created to apply the custom fields to it.

![2 fields which are Single Image and Url help you upload images and input a link of image.](https://i.imgur.com/MHr0exH.png)

Back to the **Settings Page**, you’ll see all of the created custom fields. You can click **Add more** to add another brand’s information.

![In the Settings tab, choose the Location as the Settings Page that we’ve just created to apply the custom fields.](https://i.imgur.com/4JJ0nEh.png)

## Step 3: Display data from fields

To get the input data from those custom fields to display the brand information, I will use **MB Views** to create a template. Go to **Meta Box** &gt; **Views** and add a new view.

In the **Template** tab of the view, click the **Insert Field** button to choose the value from which fields to display.

![In the Template tab, you can insert fields to get their data](https://i.imgur.com/2aD8XWb.png)

Since we created custom fields for the **Settings Page**, we go to the **Site** tab then find the created custom fields.

![In Site tab, find the custom fields that I created for the Settings Page.](https://i.imgur.com/mJIBoAZ.png)

Because this group is cloneable so whenever you open the group here to find any field, it will auto-generate a **Loop**.

![A Loop is auto generated whenever you open the group to find any field.](https://i.imgur.com/SLlnKl4.png)

Delete the text ‘INSERT SUB-FIELDS HERE” and choose a field from the list in the sidebar to add a field inside the loop.

![Edit the code a little bit to create a rule for displaying images.](https://i.imgur.com/HPXAk4U.gif")

When you insert the logo from the **Single Image** field, you can choose the size to output. Here I set it to be the thumbnail.

![Set logo size as thumbnail](https://i.imgur.com/A9VwBOb.png)

When inserting the fields, I also edit the code a little bit to create a rule for displaying images. For example, I set a rule that if there is no URL input to the URL **field**, the value from the **Single Image** field will be obtained and displayed.

![Get the value from the Single Image field when the URL field is empty.](https://i.imgur.com/ndDjfEa.png)

The following code will stipulate that if there is no input data in the **Brand Logo Upload** field, the image from the link in the **URL** field will be displayed.

![Get the value from the URL field when the Single Image field is empty.](https://i.imgur.com/Xro7EVw.png)

Next, if there is data in both the **Image Upload** and **URL** field, I set priority to display the image of the **Brand Logo Upload** field.

![Set priority to display the images](https://i.imgur.com/2YUI1Vy.png)

If you have any further information for the brand, such as the **Brand Name** that I have in this case, remember to insert them in the next lines.

![Get the value of Brand Name field.](https://i.imgur.com/m4VWKZB.png)

If you want to style this section, add some **div** tags. I also did it and here is all the code.

```
<div class="brand-group">
{% for clone in site.brands.brand_group %}
    <div class="brand-img">
    {% if clone.brand_logo_url|trim is empty %}
        <img src="{{ clone.brand_logo_upload.thumbnail.url }}" width="{{ 
clone.brand_logo_upload.thumbnail.width }}" height="{{ 
clone.brand_logo_upload.thumbnail.height }}" alt="{{ clone.brand_logo_upload.thumbnail.alt }}">
    {% elseif clone.brand_logo_upload.thumbnail.ID|trim is empty %}
        <img src="{{ clone.brand_logo_url }}">
    {% else %}
        <img src="{{ clone.brand_logo_upload.thumbnail.url }}" width="{{ 
clone.brand_logo_upload.thumbnail.width }}" height="{{ 
clone.brand_logo_upload.thumbnail.height }}" alt="{{ clone.brand_logo_upload.thumbnail.alt 
}}">
    {% endif %}
    <p class="name">
        {{ clone.brand_name }}
    </p>
    </div>
{% endfor %}
</div>
```
To finish, move to the **Settings** section, choose the type of view as **Shortcode**.

![Choose the type of view as Shortcode in Settings section.](https://i.imgur.com/nEOIWFM.png)

After publishing this view, a shortcode will be generated automatically. You can copy and paste it to any page you want to display the template.

Now, you can see all of the brand logos along with their names displayed already. But this section hasn’t looked good yet. Thus, we’ll need some JS and CSS to make it look better.

![After inserting fields, the brand logos along with their names displayed already, but it hasn’t looked good yet.](https://i.imgur.com/nEOIWFM.png)

## Step 4: Style the section

In the view, move to the **CSS** tab and add css into the box.

![Add code to CSS tab.](https://i.imgur.com/hUni7yc.png)

All the css code is uploaded to <a href="https://github.com/wpmetabox/tutorials/blob/effb1b8d4729da57bf3fe5ee77dc2fe2827678a7/display-images-from-cloneable-fields-with-Gutenberg/custom.css">Github</a>, you can refer to it.

After adding css, my brand section turned into a new look.

![After adding CSS, the brand logos section turned into a new look.](https://i.imgur.com/MQpnntm.png)


