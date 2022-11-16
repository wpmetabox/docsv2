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


