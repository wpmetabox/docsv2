---
title: Displaying images from cloneable fields - Meta Box + Bricks
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';


Today, we’ll use Meta Box and Bricks to display images from cloneable fields. Take the brand logos as an example:

![The example of displaying the logos](https://i.imgur.com/udymyMf.png)

## Video version

<LiteYouTubeEmbed id='UZ-8JEEUNyc' />

## Before getting started

Typically, we’ll use a custom post type to create multiple posts for brands. But now, I’ll do another way more conveniently and simply - creating a settings page. All brand information will be input to that page. It means that all of them will be in one place only for easier management.

![The settings page](https://i.imgur.com/lQaXxjJ.png)

For this practice, we need these tools:

* [Meta Box](https://wordpress.org/plugins/meta-box/): to have the framework for creating custom fields;
* [Meta Box Settings Page](https://metabox.io/plugins/mb-settings-page/): to create settings pages to input images;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have an intuitive UI to create custom fields for saving the brand information;
* [Meta Box Group](https://metabox.io/plugins/meta-box-group/): to organize custom fields into cloneable groups, where we input images;
* **Bricks**: to build the page.
 
## 1. Creating a settings page

Go to **Meta Box > Settings Page > Add New**.

In my case, the settings page is quite simple and contains only the image of each brand. As there’s no special setting, I'll just change the option name.

![Create a settings page](https://i.imgur.com/Vvrql4e.png)

After publishing, you’ll see a new settings page named **Brands** appears as below:

![Created settings page appear](https://i.imgur.com/S1Z1BuW.png)

It’s blank now.

## 2. Creating custom fields

Let’s create custom fields for the settings page. They will be used to save the brand information.

In the admin dashboard, go to **Meta Box > Custom Fields > Add New**. I created fields with the structure below.

<table>
<thead>
<tr>
<th>Field</th>
<th>Types of Field</th>
<th>ID</th>
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
<td>Brand Name</td>
<td>Text</td>
<td>brand_name</td>
</tr>
</tbody>
</table>

This is a group with 2 subfields inside. It is also set to be cloneable to have more spaces to add information for different brands.

![2 subfields inside](https://i.imgur.com/oVFMAGs.png)

After that, go to the **Settings** tab and choose the **Location** as the settings page that we’ve created to apply the custom fields to it.

![Set location for the setting page](https://i.imgur.com/q8eWRPv.png)

Back to the settings page, and you’ll see the created custom fields appear. Moreover, to add another brand’s information, you can press the **Add more** button.

![Created custom fields appear](https://i.imgur.com/1e8AcPK.gif)

Now, just fill in the brand’s information in the fields.

## 3. Displaying images on the frontend

Let’s edit a page with **Bricks**. I chose the homepage for example.

First, to contain all the brands' information, add a new section. Then, put it anywhere you want to show it on that page.

Next, to add the title of the section, choose the **Heading** element and name it.

![Add a Heading element](https://i.imgur.com/EJrofNF.png)

In the **Container** element inside the section, select the **Div** element to contain the brand information.

![Select Div element](https://i.imgur.com/ABA7PIF.png)

Then, to get the data of brands, enable the **Use query loop** button. And in the **Query** section, choose the type of data source as **MB Group: Brand Group**. In the name, you can see the ‘Brand Group’ is the name of the group that we’ve just created.

![Enable the Use query loop](https://i.imgur.com/8uOrwqN.png)

For the brand’s logos, as they are saved in the custom field created by Meta Box, choose the **Image** element > choose the **Select** **Dynamic** data button > select the right field - **Brand Image Upload**. Now all the brand's logos are displayed already.

![Choose Image element](https://i.imgur.com/q0VM7gp.gif)

For the brand’s names, choose the Basic Text element. We also use the Select Dynamic data button and choose the field correspondingly. Then, you’ll see the brand’s name displayed immediately.

![Choose the Basic text elememt](https://i.imgur.com/4sd3DoR.gif)

On the homepage, you’ll see all of the brand information.

![All the imformaiton is obtained](https://i.imgur.com/HlGt615.png)

## 4. Styling the section

Now, go back to the page editor with **Bricks**, choose each element and change the settings to style them in your own way.

After styling, all the brand logos are displayed as we want.

![Style the section](https://i.imgur.com/udymyMf.png)

