---
title: Displaying images from cloneable fields - Meta Box + Elementor
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We will display images from cloneable fields using Meta Box and Elementor.

The image below is a specific example.

![The example of displaying images from cloneable fields using Meta Box + Elementor](https://i.imgur.com/x5JABan.png)

## Video version

<LiteYouTubeEmbed id='yqRud-APqgQ' />

## Before getting started

Here are some tools we need:

* **[Meta Box core plugin](https://wordpress.org/plugins/meta-box/)**: to have the framework for creating custom fields. It’s free, and you can download it directly from [wordpress.org](https://wordpress.org/plugins/mb-custom-post-type/);
* **[Meta Box Settings Page](https://metabox.io/plugins/mb-settings-page/)**: to create settings pages;
* **[Meta Box Builder](https://metabox.io/plugins/meta-box-builder/)**: to have an intuitive UI to create custom fields in the backend to save image and other information if any;
* **[Meta Box Group](https://metabox.io/plugins/meta-box-group/)**: to organize custom fields into cloneable groups, where we input images;
* **[MB Elementor Integrator](https://metabox.io/plugins/mb-elementor-integrator/)**: to connect and display custom fields created by Meta Box plugin in the Elementor's dynamic tags.

They’re all in the **Meta Box AIO**. If you haven’t had it, you can download and install each one individually.

Finally, make sure you have **Elementor Pro** on your site.

## Step 1: Create a settings page

With **custom post types**, information from each brand will be saved in a separate post. But with a **settings page**, all of them will be on this page only. So, I will use a settings page for more convenience.

Go to **Meta Box > Settings Page > Add New**.

![Create a setting page](https://i.imgur.com/upCEEWJ.png)

Change the Option name for the page and other settings as you want.

After publishing, you’ll see a new settings page named Brands appears.

![New settings page named Brands appears](https://i.imgur.com/0etweZJ.png)

## Step 2: Create custom fields

Go to **Meta Box > Custom Fields > Add New** to create custom fields for the settings page.

The following table illustrates the fields’ structure that I’m using.

<table>
<tbody>
<tr>
<td>Field</td>
<td>Types of Field</td>
<td>ID</td>
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
<td>Brand Name</td>
<td>Text</td>
<td>brand_name</td>
</tr>
</tbody>
</table>


This is a group with two subfields inside. It is also set to be cloneable to have more spaces to add different brands' information.

![Set this group as cloneable to have more spaces to add different brands' information.](https://i.imgur.com/nI7og1l.png)

In addition, I set this group as collapsible to collapse the information in the group field.

![Set this group as collapsible to collapse the information of the group field](https://i.imgur.com/ZCXl2yG.png)

After that, open the **Settings** tab and choose **Location** as the **Settings Page** we’ve created to apply the custom fields.

![In the Settings tab, choose the Location as the Settings Page to apply the custom fields](https://i.imgur.com/aH7KIOK.png)

Go back to the settings page, and you’ll see all of the newly created custom fields. There is an **Add More** button to add another brand’s information.

![The created custom fields are displayed](https://i.imgur.com/EsuyCSx.gif)

Now, let’s fill in the information in the fields and move to the next step.

## Step 3: Create a skin

Go to **Elementor Theme Builder > Meta Box Group Skin > Add New**.

![Go to Elementor Theme Builder > choose Meta Box Group Skin > Add new skin](https://i.imgur.com/0FTgqlB.png)

Set the settings for the skin as you want. Then, add the **Image** element to display the brand logo.

![Set the settings for the skin, then add the Image element to display the brand logo](https://i.imgur.com/5Yp7q8R.png)

To get the image from the custom fields created by Meta Box, go to the **Dynamic Tags** and find the **Meta Box Field**.

![Go to the Dynamic Tags and find the Meta Box Field to get the image from custom fields](https://i.imgur.com/mHUQTcn.png)

Since the custom field we created is on the settings page, we choose the Meta Box Field in the Site section.

![Choose the Meta Box Field in the Site section](https://i.imgur.com/VEkOwof.png)

Then, choose the name of the field you want to get the image from.

![Choose the name of the field you want to get the image from](https://i.imgur.com/85HlkAI.png)

For the brand’s title, add a **Text Editor** element. Once again, go to the **Dynamic Tags** and find the **Meta Box Field** in the **Site** section and choose the **Brand Name** option.

![Add a Text Editor element to this section](https://i.imgur.com/uOd8XDu.png)

After that, I’ll style both elements a little bit.

![Style both elements a little bit](https://i.imgur.com/Ma9aEXQ.gif)

## Step 4: Display the image section on a page

Let’s edit a page with Elementor, I’m doing this with the homepage in this practice.

![Edit the homepage with Elementor](https://i.imgur.com/WOgXtDs.png)

First, I add a widget to the homepage to create a section that contains brand information. Then, add a **Heading** to it and style it as you want.

![Add a widget to the homepage to create a section that contains brand information then add a Heading to style](https://i.imgur.com/yExxtLm.gif)

Next, to display the images of logos, add the **Meta Box Group** element.

![Add the Meta Box Group element to display the brands’ logos](https://i.imgur.com/xfEddmE.png)

Set **Object Type** as **Settings page** because we’ve just input the image into fields in a settings page.

![Set Object Type as Settings page](https://i.imgur.com/TjAZfjH.png)

After that, it will set the created-latest group by default. Change it to the one that we use to save the images.

Now, all the data from the group will be displayed, but there is no styling.

![Set the created-latest group by default](https://i.imgur.com/Zph2nOn.png)

For styling, choose the skin that you’ve just created above. Then, it will turn to the new look with the style of the created skin.

![Choose the skin that you’ve created](https://i.imgur.com/wLnjmcV.png)

Also, you can configure the display of the brand section, such as the number of columns and the spacing between them.

![you can configure the display of the brand section like column's number and spacing](https://i.imgur.com/EZF6ASW.png)

Here is the result we’ve got:

![The final result of displaying images from cloneable fields with Meta Box + Elementor](https://i.imgur.com/x5JABan.png)

------
You may be interested in: 

* [Creating an FAQs page](https://docs.metabox.io/tutorials/create-faqs-page-meta-box-elementor/)
* [Creating buttons with dynamic link](https://docs.metabox.io/tutorials/create-buttons-dynamic-links/)
* [Displaying the latest products](https://docs.metabox.io/tutorials/display-latest-product-meta-box-elementor/)

