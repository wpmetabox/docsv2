---
title: Displaying images from cloneable fields - Meta Box + Oxygen
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We’re going to find out how to **use Oxygen to display images from cloneable fields** created with Meta Box.

I made an example like this:

![The example of displaying images from cloneable fields using Meta Box and Oxygen](https://i.imgur.com/I21QKgJ.png)

## Video Version

<LiteYouTubeEmbed id='mUcuw6NGUC4' />

## Preparation

In addition to using [Meta Box](https://metabox.io), make sure you already have these extensions:

* **[MB Settings Page](https://metabox.io/plugins/mb-settings-page/)**: it helps you to create settings pages, we’ll need a settings page to place the custom fields into.
* **[MB Builder](https://metabox.io/plugins/meta-box-builder/)**: It provides a UI to create custom fields.
* **[Meta Box Group](https://metabox.io/plugins/meta-box-group/)**: this extension helps to organize custom fields into cloneable groups, where we input images.

You can install these extensions individually or use **Meta Box AIO** to have them all in one place.

The last one is [Oxygen](https://oxygenbuilder.com/). You should use the 3.9 version or higher, which has native integration with Meta Box.

## 1. Creating a settings page

With **Custom Post Types**, information from each brand will be saved in a separate post. But with a **Settings Page**, all of them will be on this page only.

Go to **Meta Box > Settings Page > Add New**.

![Create a Settings Page](https://i.imgur.com/Mvf52Z4.png)

After publishing, a new menu named **Brands** appears.

![The new Settings Page named Brands appears](https://i.imgur.com/tq05p6M.png)

## 2. Creating custom fields

Let’s create custom fields to save images and other information for the created settings page.

Go to **Meta Box > Custom Fields > Add New**.

The following table illustrates the fields’ structure that I’m using.

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
<td>Single Image (sub-field)</td>
<td>brand_logo_upload</td>
</tr>
<tr>
<td>Brand Logo Url</td>
<td>Url (sub-field)</td>
<td>brand_logo_url</td>
</tr>
<tr>
<td>Brand Name</td>
<td>Text (sub-field)</td>
<td>brand_name</td>
</tr>
</tbody>
</table>

This is a group with three subfields inside. It is also set to be **Cloneable** to have more places to add different brands' information.

![Set this group as cloneable to have more spaces to add different brands' information](https://i.imgur.com/AejdEzp.png)

**Single Image** and **URL** are added to the structure. One allows you to upload photos to a library, while the other lets you connect to any image.

![2 fields which are Single Image and Url help you upload images and input a link of image](https://i.imgur.com/gA0UsTn.png)

After that, open the **Settings** tab and choose **Location** as the **Settings Page** we’ve created to apply the custom fields.

![In the Settings tab, choose the Location as the Settings Page to apply the custom fields](https://i.imgur.com/VxvJWFE.png)

Go back to the settings page, and you’ll see all of the newly created custom fields. There is an **Add More** button to add another brand’s information.

![The created custom fields are displayed](https://i.imgur.com/EsuyCSx.gif)

Now, let’s fill in the information in the fields and move to the next step.

## 3. Displaying images from the fields

To add a section for displaying brands’ information, go to the Edit with Oxygen section of the page you want.

First, add a Div component.

![Choose a Div component to add a section for displaying brands’ information](https://i.imgur.com/4yRloLd.png)

Next, add a Code Block inside the Div. Then, add code to the PHP&amp;HTML section.

![The PHP&amp;HTML section of Code Block](https://i.imgur.com/OrkYDBg.png)

![Add code to the PHP&amp;HTML section](https://i.imgur.com/P5jDaTg.png)

I’m using this code, you can refer to it.

```php
<?php
$group = rwmb_meta( 'brand_group', ['object_type' => 'setting'], 'brand' );
?>
<div class="brand-group">
    <?php
        <?php
            $image = RWMB_Image_Field::file_info( $value['brand_logo_upload'], ['size' => 'thumbnail'] );
        ?>
        <div class="brand-img">
            <?php if (!empty($image)): ?>
                <img src="<?php echo $image['url']?>"/>
            <?php elseif (!empty($value['brand_logo_url'])): ?>
                <img src="<?php echo $value['brand_logo_url'] ?>"/>
            <?php else: ?>
                <img src="<?php echo $image['url']?>"/>
            <?php endif; ?>
            <p class="name"><?php echo $value['brand_name'] ?></p>
        </div>
    <?php endforeach; ?>
</div>
```
**Explanation**
* `$group = rwmb_meta( 'brand_group', ['object_type' => 'setting'], 'brand' );`create the $group variable to get the value of the field which has the ID as brand_group, from the object which has type as settings page and name as Brands. You can change the name of this variable as you want, but please make sure you input exactly the field ID and object name as yours.
* `<?php foreach( $group as $value): ?>`:since the brand_group the field is cloneable, I create a loop to get value from the $group variable.
* `$image = RWMB_Image_Field::file_info( $value['brand_logo_upload'], ['size' => 'thumbnail'] );`:create the $image variable to obtain value from the field which has ID as brand_logo_upload. This field is a single image field, so we use the RWMB_Image_Field( ) to get value.
* `<?php if (!empty( )): ?>`:is to check if the variable has value or not.
* `img src="<?php echo $image['url']?>"/> and <img src="<?php echo $value['logo_url'] ?>"/>`:display image from the corresponding returned url.
* `<?php echo $value['brand_name'] ?>`: get and display the value from the field brand_name.

```
<?php if (!empty($image)): ?>
    <img src="<?php echo $image['url']?>"/>
```

If the `$image` variable doesn't have a value, we'll use the returned value to show the uploaded image.

```
<?php elseif (!empty($value['brand_logo_url'])): ?>
    <img src="<?php echo $value['logo_url'] ?>"/>
```

If there is any value in the **URL** field, which has ID `brand_logo_url`, we will display the image from that link.
```
<?php else: ?>
    <img src="<?php echo $image['url']?>"/>
```

If both of these fields have a value, we set priority here to display only the image from the **Single Image**.

After adding code, click **Apply Code**.

Now, you can see all of the brand logos, along with their names, displayed in the live preview already.

![After editing with Oxygen, the brand logos along with their names displayed already.](https://i.imgur.com/T2ZUjxs.png)

But it hasn’t looked good yet. Thus, we’ll need some CSS to make it look better.

## 4. Styling the section using CSS

From the **Primary** tab in the page editor by Oxygen, choose **CSS** to style the section.

![Choose CSS to style the section](https://i.imgur.com/R8mzxkU.png)

You can refer to this CSS.

```css
.brand-group {
    padding-left: calc(30px/2);
    padding-right: calc(30px/2);
    max-width: 1140px;
    margin: 0 auto 10px;
    width: 100%;
	display:flex;
	justify-content: space-between;
}


.brand-img img {
    width: 150px;
    height: 150px;
    object-fit: contain;
    margin: 0 auto;
}

.brand-img .name {
    text-align: center;
    margin: 10px 0;
    font-size: 14px;
    font-weight: 700;
	text-transform: uppercase;
}
```

![Add the code](https://i.imgur.com/qbSpxxt.png)

Here is the result.

![The result after all steps](https://i.imgur.com/I21QKgJ.png)

------

You may be interested in:

* [Creating a team members page](https://docs.metabox.io/tutorials/create-team-members-page-meta-box-oxygen/)
* [Creating a video gallery page](https://docs.metabox.io/tutorials/create-video-gallery-page-meta-box-oxygen/)
* [Creating an FAQs page](https://docs.metabox.io/tutorials/create-faqs-page-meta-box-oxygen/)

