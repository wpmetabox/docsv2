---
title: Displaying images from cloneable fields - MB Views
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Images like a series of brand logos of typical partners or avatar of clients in the testimonial section, could be saved in custom fields. This tutorial is on how to display them without using any page builders.

## Video version

<LiteYouTubeEmbed id='nteLH6DDKSI' />

## Before getting started

We’ll need [Meta Box core plugin](https://wordpress.org/plugins/meta-box/) and some of its extensions for this practice:

* [MB Settings Page](https://metabox.io/plugins/mb-settings-page/?swcfpc=1): create settings pages for uploading images;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/?swcfpc=1): it provides a UI to create custom fields;
* [Meta Box Group](https://metabox.io/plugins/meta-box-group/?swcfpc=1): organize custom fields into cloneable groups, where we input images;
* [MB Views](https://metabox.io/plugins/mb-views/?swcfpc=1): it helps you to create templates as well as get and display fields’ values.

## Step 1: Create a settings page

Go to **Meta Box > Settings Page > Add New** and change the option name.

![Create a Settings Page](https://i.imgur.com/xj8IOWJ.png)

Now, a new menu named **Brands** appears. It’s my new **Settings Page**.

![The new Settings Page named Brands appears.](https://i.imgur.com/U4H4ELu.png)

## Step 2: Create custom fields

In the **Admin Dashboard**, go to **Meta Box > Custom Fields > Add New**. I created fields with the below structure.

<table>
<thead>
<tr>
<th>

**Field**

</th>
<th>

**Types of Field**

</th>
<th>

**ID**

</th>
</tr>
</thead>
<tbody>
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


This is a group with three subfields inside. This group is set to be cloneable to have more spaces to add different brands information.

![Set this group as cloneable to have more spaces to add different brands information.](https://i.imgur.com/Hi033mY.png)

As you can see in the structure, I added 2 fields which are **Single Image** and **Url**. One allows you to upload images and save them in the library, and one allows you to input a link of an image from anywhere.

![2 fields which are Single Image and Url help you upload images and input a link of image.](https://i.imgur.com/dmaPInv.png)

After having all the needed fields, go to the **Settings** tab and choose the **Location** as the **Settings Page** that we’ve just created to apply the custom fields to it.

![In the Settings tab, choose the Location as the Settings Page that we’ve just created to apply the custom fields.](https://i.imgur.com/MHr0exH.png)

Back to the **Settings Page**, you’ll see all of the created custom fields. You can click **Add more** to add another brand’s information.

![The created custom fields are displayed.](https://i.imgur.com/4JJ0nEh.png)

## Step 3: Display data from fields

To get the input data from those custom fields to display the brand information, I will use **MB Views** to create a template. Go to **Meta Box > Views** and add a new view.

In the **Template** tab of the view, click the **Insert Field** button to choose the value from which fields to display.

![In the Template tab, you can insert fields to get their data.](https://i.imgur.com/2aD8XWb.png)

Since we created custom fields for the **Settings Page**, we go to the **Site** tab then find the created custom fields.

![In Site tab, find the custom fields that I created for the Settings Page](https://i.imgur.com/mJIBoAZ.png)

Because this group is cloneable so whenever you open the group here to find any field, it will auto-generate a Loop.

![A Loop is auto generated whenever you open the group to find any field](https://i.imgur.com/SLlnKl4.png)

Delete the text ‘INSERT SUB-FIELDS HERE” and choose a field from the list in the sidebar to add a field inside the loop.

![choose a field from the list in the sidebar to add a field inside the loop](https://i.imgur.com/HPXAk4U.gif)

When you insert the logo from the **Single Image** field, you can choose the size to output. Here I set it to be the thumbnail.

[Get the value from the Single Image field when the URL field is empty](https://i.imgur.com/A9VwBOb.png)

When inserting the fields, I also edit the code a little bit to create a rule for displaying images. For example, I set a rule that if there is no URL input to the **URL** field, the value from the **Single Image** field will be obtained and displayed.

![Get the value from the Single Image field](https://i.imgur.com/ndDjfEa.png)

The following code will stipulate that if there is no input data in the **Brand Logo Upload** field, the image from the link in the **URL** field will be displayed.

![The following code will stipulate that if there is no input data](https://i.imgur.com/Xro7EVw.png)

Next, if there is data in both the **Image Upload** and **URL** field, I set priority to display the image of the **Brand Logo Upload** field.

![If there is data set priority to display image](https://i.imgur.com/2YUI1Vy.png)

If you have any further information for the brand, such as the **Brand Name** that I have in this case, remember to insert them in the next lines.

![Remember to insert the added information in the text line](https://i.imgur.com/m4VWKZB.png)

If you want to style this section, add some **div** tags. I also did it and here is all the code.

```
<div class="brand-group">
{% for clone in site.brands.brand_group %}
    <div class="brand-img">
    {% if clone.brand_logo_url|trim is empty %}
        <img src="{{ clone.brand_logo_upload.thumbnail.url }}" width="{{ clone.brand_logo_upload.thumbnail.width }}" height="{{ clone.brand_logo_upload.thumbnail.height }}" alt="{{ clone.brand_logo_upload.thumbnail.alt }}">
    {% elseif clone.brand_logo_upload.thumbnail.ID|trim is empty %}
        <img src="{{ clone.brand_logo_url }}">
    {% else %}
        <img src="{{ clone.brand_logo_upload.thumbnail.url }}" width="{{ clone.brand_logo_upload.thumbnail.width }}" height="{{ clone.brand_logo_upload.thumbnail.height }}" alt="{{ clone.brand_logo_upload.thumbnail.alt }}">
    {% endif %}
    <p class="name">
        {{ clone.brand_name }}
    </p>
    </div>
{% endfor %}
</div>
```
To finish, move to the **Settings** section, choose the type of view as **Shortcode**.

![choose the type of view as shortcode](https://i.imgur.com/nEOIWFM.png)

After publishing this view, a shortcode will be generated automatically. You can copy and paste it to any page you want to display the template.

Now, you can see all of the brand logos along with their names displayed already. But this section hasn’t looked good yet. Thus, we’ll need some JS and CSS to make it look better.

![All the images appeared](https://i.imgur.com/mTWu5xF.gif)

## Step 4: Style the section

In the view, move to the **CSS** tab and add css into the box.

![Add Css code to the box](https://i.imgur.com/hUni7yc.png)

All the css code is uploaded to [Github](https://github.com/wpmetabox/tutorials/blob/effb1b8d4729da57bf3fe5ee77dc2fe2827678a7/display-images-from-cloneable-fields-with-Gutenberg/custom.css), you can refer to it.

After adding css, my brand section turned into a new look.

![The result after adding css code](https://i.imgur.com/MQpnntm.png)
 
 ------

You may be interested in: 
* [Creating user profile page on frontend](https://docs.metabox.io/tutorials/create-user-profile-page/)
* [Creating a dynamic landing page](https://docs.metabox.io/tutorials/create-dynamic-landing-page/)
* [Creating a team members page](https://docs.metabox.io/tutorials/create-team-members-page-mb-views/)

