---
title: Creating a custom 404 page in WordPress - Meta Box + Oxygen
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Let’s explore an interesting way to have a **custom 404 page** with flexible content using custom fields created with **Meta Box** and displaying them with **Oxygen**.

Here is my custom 404 page as an example:

![The custom 404 page was built by Meta Box and Oxygen.](https://i.imgur.com/rH5v9zL.png)

## Video version

<LiteYouTubeEmbed id='o1mTmQKDlxs'/>

## Preparation

The page may contain any kind of information that you think is useful for visitors. You can add an image, a message, buttons to redirect them to another page that makes sense to them, or anything else. All of them should be regulated by content in custom fields.

Therefore, in this practice, we will use the following tools:

* [The Meta Box plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom fields and a settings page;
* [MB Settings Page](https://metabox.io/plugins/mb-settings-page/): to create a settings page to input the 404 page’s information;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create the custom fields visually;
* [MB Group](https://metabox.io/plugins/meta-box-group/): to organize custom fields into groups for better management and display.
* **Oxygen**: to build the page.

Now, let’s start!

## 1.1 Creating a new settings page

Since the 404 page is not a specific page as usual, we’ll use a settings page to include all the content of the page. 

Go to **Meta Box** > **Settings Pages** and create a new page.

![Go to Meta Box > Settings Pages, and create a new one.](https://i.imgur.com/ZVhynn7.png)

For the position of the settings page, you can put it on every place in the menu. I’ll set this page as a submenu, and choose the **Parent menu** as the **Settings**.

![Set the position of the settings page in the menu](https://i.imgur.com/wSES9B9.png)

Then, go to the page in the **Settings** menu. It’s still blank since we haven’t added any content to it yet.

![The page is in the Settings menu, it’s still blank](https://i.imgur.com/LtKOXWn.png)

Let’s move to the next step.

## 1.2 Creating custom fields for the 404 page’s content

As I mentioned before, instead of adding any specific content to the 404 page, we’ll use custom fields to have dynamic content for it. These custom fields will be set on the created settings page.

Go to **Meta Box** > **Custom Fields** and create a new field group.

![Go to Meta Box > Custom Fields, and create a new field group](https://i.imgur.com/Yz6IA1P.png)

These are some fields that I’ll create for the page as examples. Simply add more fields if you want to have more content on the page.

![Some fields that I’ll create for the page as examples](https://i.imgur.com/a2UeSdk.png)

For the button, we’ll group the label and URL together, then we’ll have a bundle for each button. So, add a **Group** field type for the button.

![Add a Group field for the button](https://i.imgur.com/lI1NCyH.png)

Inside the group, add two subfields with the corresponding field type.

![Add the subfields for the label and URL of the button](https://i.imgur.com/CijbDF4.png)

In my specific case, I set the group as collapsible and named it for the button.

![Set the name of the button](https://i.imgur.com/oQemLrc.png)

If you want to add more than one button, make the group cloneable by enabling the corresponding option.

![Set the group is clonable to add more than one button](https://i.imgur.com/vtoIV1A.png)

After creating all the fields, move to the **Settings** tab, set the **Location** as **Settings page**, and choose the created settings page to apply the fields to it.

![In the Settings tab, set the Location and choose the created settings page to apply the fields to it.](https://i.imgur.com/bveviUt.png)

Then, go to your settings page, and you will see custom fields displayed.

![The custom fields display in the settings page](https://i.imgur.com/I2EyGOT.png)

Just input content for the page there.

Next, we’ll get and display these input data on the frontend.

## 1.3 Creating a template for the 404 page

We’ll get and display the content of the 404 page in a template created with Oxygen.

Go to **Oxygen** > **Templates** to add a new template.

![Add new template with Oxygen](https://i.imgur.com/DMyy9Go.png)

And, choose any option to inherit its design.

![Choose any option to inherit its design.](https://i.imgur.com/IQeXq99.png)

Oxygen supports a specific template for 404 page. Just choose that option.

![Oxygen supports a specific template for 404 page.](https://i.imgur.com/bNDZcgA.png)

Then, edit it in Oxygen.

Based on your own design, just add a new section and choose the suitable layout for it.

In my case, first, add a new section.

![Add a new section](https://i.imgur.com/z0rXPdi.png)

Then, I add a **Column** component and choose the suitable layout.

![Add a Column component and choose the suitable layout](https://i.imgur.com/ih5yHfL.png)

Next, just add some components into two columns to get and display data for the 404 page.

Inside the first column, I’ll add an **Image** component. Move to the **Image URL** tab because I saved the image in the url format.

![Choose Image component for the image](https://i.imgur.com/1TLWZX2.png)

Since it was saved in the custom field created with Meta Box, click on the **Data** button, look for the **Meta Box Field** section, and choose the name of the field that we saved the image to get data from it. Then, you can see the image appears immediately.

![Get the image](https://i.imgur.com/U6kcGqB.gif)

In the second column, select a **Text** component for the message. And connect it to the corresponding field by clicking the default text, and choosing **Insert data**.

![Add a Text component for the message](https://i.imgur.com/5ISpaNB.png)

Now, we’ll see the options in the **Post** section. Choose the **Meta Box Field** option, and select the message field. After that, you’ll see the message of the 404 page.

![Choose the Meta Box Field option, and select the message field.](https://i.imgur.com/Aflc2x0.gif)

The last one is the buttons. Their label and URLs are saved in the cloneable group. However, Oxygen hasn’t supported getting that kind of data on the settings page directly. So, we should use code to get them.

Opt for a **Code Block** component, and add some code in the **PHP & HTML** section.

![Add a Code Block component, go to the PHP & HTML section.)](https://i.imgur.com/0N2Hgon.png)

![Add some code in the PHP & HTML section](https://i.imgur.com/SBIYNX1.png)

Explanation:

```css
$group = rwmb_meta( 'button', ['object_type' => 'setting'], '404-page' );
```

This line of code is to get data from a group in the settings page. `rwmb_meta` is the function provided by Meta Box to get data. `button` is the ID of the group. And `404-page` is the ID of the settings page.

Since the group is cloneable, we need to have a loop to list all the items. Inside the loop, we’ll display data from two subfields: the title and URL.

```css
foreach ($group  as $value) :       
    echo $value['title'];
    echo $value['url'];
endforeach;
```
That’s done for getting content.

Go to the page on the frontend. You will see the data is displayed all. But, the button is in text format.

![The data is displayed all. But, the button is in text format.](https://i.imgur.com/wVyeVR0.png)

Now, we need to modify it a little bit to have a better look. So, let’s move to the next step.

## 1.4 Styling the 404 page

Back to edit the created template with **Oxygen**, change some settings of each component to have the desired look.

![Change some settings of each component to have the desired look.](https://i.imgur.com/82E6XHN.png)

In the **Code Block** where I display the button, I add some div tags and classes, then modify it a little bit.

![In the Code Block where I display the button, I add some div tags and classes](https://i.imgur.com/Etzm2gv.png)

**In there**:
```
<a class="mb_button" href="<?php echo $value['url'];?>"><?php echo $value['title'];?></a>
```
This line of code is to embed the URL on the label of the button.

Finally, use **CSS** to style the button.
```
a.mb_button {
     border-radius: 5px;
    margin-right: 30px;
    color: #fff;
    padding: 12px;
    background: #363636;
    text-decoration: none;
}
a.mb_button:hover{
    color: #d39450;
}
```

![Use CSS to style the button](https://i.imgur.com/UH99k5E.png)

And this is the final look of my 404 page.

![The custom 404 page was built by Meta Box and Oxygen.](https://i.imgur.com/rH5v9zL.png)

Then, you will get a 404 page with beautiful, useful, and flexible content that you can change easily without touching the template anymore.

## 1.5 Updating the content for the 404 page

Somedays, if you want to update the image, message, or button on this page, just go back to the settings page, and change the content in the custom fields.

![Go back to the settings page, and change the content in the custom fields.](https://i.imgur.com/yp5hyV0.png)

Then, you’ll have a 404 page with the new content. It’s more convenient for management.

![A 404 page with the new content](https://i.imgur.com/DMYMmiB.png)
