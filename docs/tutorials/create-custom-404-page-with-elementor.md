---
title: Creating a custom 404 page in WordPress - Meta Box + Elementor
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

404 page is not a kind of main content on your website, since it appears only when visitors come to an unavailable page. However, for better SEO and better experience, we should pay some attention to this kind of page, to harmonize content, and drive visitors to the wanted pages.

So, let’s explore an interesting way to have a **custom 404 page** with flexible content using custom fields created with **Meta Box** and displaying it with **Elementor**. This will help you change the page's content easily in daily use.

Here is my custom 404 page as an example:

![The custom 404 page was built by Meta Box and Elementor](https://i.imgur.com/T2DDpXq.png)

## Video version

<LiteYouTubeEmbed id='gm9v7ZPxoAA'/>

## Preparation

Besides the notice of ‘page not found’, you definitely add some other content, to make this page more informative. So, I added an image, a message, and two buttons. All of them will be regulated by content in custom fields.

Therefore, in this practice, we will use the following tools:

* [Meta Box plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom fields. It’s available on [wordpress.org](https://wordpress.org/plugins/meta-box/);
* [MB Settings Page](https://metabox.io/plugins/mb-settings-page/): to create a settings page to input the 404 page’s information;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create the custom field visually;
* [Meta Box - Elementor Integrator](https://metabox.io/plugins/mb-elementor-integrator/): to get data from Meta Box’s custom fields, using dynamic tags of Elementor;
* [Meta Box Group](https://metabox.io/plugins/meta-box-group/) (optional): to organize custom fields into the group. In this case, they are the labels and URLs of the buttons;
* **Elementor** and its pro version to build the page.

Now, let’s start!

## 1. Creating a new settings page

The 404 page is not a specific page on the frontend, so we’re going to use a settings page to include all the content and other settings for it.

Go to **Meta Box** > **Settings Pages** and create a new page.

![Go to Meta Box > Settings Pages and create a new page](https://i.imgur.com/wJtdTpq.png)

For the position of the settings page, I’ll set this page as a submenu, and choose the **Parent menu** as the **Settings**.

![Set the page as a submenu, and choose the Parent menu as the Settings](https://i.imgur.com/f7ON6Y8.png)

Then, you’ll see the page in the **Settings** menu. It’s still blank now since we haven’t added any content for it.

![The page is in the Settings menu, it’s still blank](https://i.imgur.com/SrU2PqM.png)

Let’s move to the next step.

## 2. Creating custom fields

Instead of adding any specific and static content to the page, we’ll use custom fields. Then, input content to the fields.

Go to **Meta Box** > **Custom Fields** and create a new field group.

![Go to Meta Box > Custom Fields and create a new field group](https://i.imgur.com/ChyIFBo.png)

These are some fields that I’ll create for the page as examples. In the case that you want more fields for more information, just add them as you go.

![Some fields that I’ll create for the page as examples](https://i.imgur.com/xfWd50l.png)

As mentioned, we’ll group the label and URL of the button together, then we’ll have a bundle for each button. So, add a **Group** field type for the button.

![Add Group field for the button](https://i.imgur.com/3LxuypF.png)

I also want to add two buttons to the page, so make this group be cloneable.

![Set the group is clonable to have more than one button](https://i.imgur.com/JyC78RL.png)

You also can set the title for the group. Here, I use `{#}` to number the button for the management purpose only.

![Set the title for the group using {#} to number the button](https://i.imgur.com/5JoKeqv.png)

Inside the group, add two subfields: one for the label, and another for the URL, for the direction.

![Inside the group, add two subfields for the content and URL](https://i.imgur.com/FLRkKc0.png)

After creating all the fields, move to the **Settings** tab, set the **Location** as **Settings page**, and choose the created settings page to apply the fields to it.

![Move to the Settings tab, set the Location as Settings page, and choose the created settings page to apply the fields to it](https://i.imgur.com/jOnhfrH.png)

Then, go to your settings page, you will see custom fields displayed.

![The custom fields are displayed in the settings page](https://i.imgur.com/vy3KUtF.png)

Just input data. Here is my content for example.

![Input data for the settings page](https://i.imgur.com/ue3aaLL.png)

## 3. Creating skins for the buttons

Since we have a cloneable group for the buttons, and Elementor does not support directly displaying data from them on a template, we should create a skin for it first.

Go to **Templates** > **Theme Builder**.

![Go to Templates > Theme Builder](https://i.imgur.com/ZRL5nTH.png)

There will be the **Meta Box Group Skin** menu. Click on it and add a new skin.

![Click on the Meta Box Group Skin and add new skin](https://i.imgur.com/HcJkrAl.png)

In the **Preview Settings** section, choose **404**.

![In the Preview Settings section, choose 404](https://i.imgur.com/flenLb2.png)

Now, add a **Section** element to cover the button.

![Add a Section element to cover the button](https://i.imgur.com/lAvMENe.png)

Then, add a **Button** element.

![Add a Button element](https://i.imgur.com/sQ4C2S4.png)

We have the label for the button in the custom fields, so in the **Text** settings of the button, use the **Dynamic Tags** and look for the **Meta Box Field** option.

![In the Text settings of the button, use the Dynamic Tags and look for the Meta Box Field option](https://i.imgur.com/mev3DRt.png)

Then, choose the name of the field that saved the button’s label. You will see it on the button immediately.

![Choose the name of the field that saved the button’s label](https://i.imgur.com/98EpBUi.png)

For the link in the button, it also is saved in a custom field as well, so use **Dynamic Tags**.

![Use Dynamic Tags in the Link settings to get the URL of the link](https://i.imgur.com/8qUxiWf.png)

In the **Meta Box Field** option, find out the field that saves the links.

![In the Meta Box Field option, find out the field that saves the links](https://i.imgur.com/5pMW78r.png)

You can style the button to have the new look as you want in the **Style** tab. I simply change the color of the button.

![Style the button a little bit](https://i.imgur.com/GCf6rFi.png)

## 4. Creating a template for the 404 page

Now, we’ll create a template to stipulate how information about the 404 page should be displayed.

Also in the **Theme Builder** of Elementor, there is an exclusive section for the 404 page. Go to create a new template in this part now.

![Go to the Error 404 section to add a new template for the 404 page](https://i.imgur.com/dUxUQfK.png)

There will be various pre-built templates provided by Elementor, you can exploit them to save time and just change the content, or, build your own one.

First, add a widget with the expected layout.

![Add a widget with the expected layout](https://i.imgur.com/QEzVRV9.png)

Then, just add elements into this template as usual.

In the first column, for the image, I’ll add an **Image** element.

![In the first column, I’ll add an Image element](https://i.imgur.com/g41XH1f.png)

And use the **Dynamic Tags** to get the image from the custom field we set on the created settings page.

![Use the Dynamic Tags to get the image from the custom field we set on the created settings page](https://i.imgur.com/f4vsJAh.png)

Choose the name of the field from the list.

![Choose the name of the field from the list](https://i.imgur.com/SZ12dGB.png)

In the second column, to highlight the message, add a **Heading** element.

![In the second column, to highlight the message, add a Heading element](https://i.imgur.com/I4K7AfX.png)

Also use the **Dynamic Tags** to choose the field to get the content.

![Use the Dynamic Tags to choose the field to get the content](https://i.imgur.com/18gfHMZ.png)

Next, for the buttons, we’ve had a skin for it, so look for the **Meta Box Group** element.

![Add the Meta Box Group element for the buttons](https://i.imgur.com/7sRfaLt.png)

Since the data is from a settings page, set the **Object Type** as **Settings page**.

![Set the Object Type as Settings page](https://i.imgur.com/jASpEEQ.png)

Then, set the name of the group that we use to store the information for the button.

![Set the name of the group that we use to store the information for the button](https://i.imgur.com/N14j6v1.png)

And, the last one, set the created skin in the **Skin** section.

![Set the created skin in the Skin section](https://i.imgur.com/jOTAvxu.png)

You can see the two buttons displayed immediately.

## 5. Styling the page

If you want to modify the layout and change the look of the page, just go to the **Style** tab and **Advanced** tab of each element, and change the settings.

![Go to the Style tab and Advanced tab of each element to style the page](https://i.imgur.com/PzQFrVu.png)

This is the final look of my 404 page.

![The final look of the custom 404 page](https://i.imgur.com/T2DDpXq.png)

From now on, whenever visitors go to an unavailable page on your site, they’ll find this page. These two buttons will help to drive them to another page that may have some helpful content.

In the case that you want to **change the content of the 404 page**, just go back to the settings page, and **change the data saved in the custom fields**.
