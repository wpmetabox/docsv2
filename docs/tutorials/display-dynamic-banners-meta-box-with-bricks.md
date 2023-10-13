---
title: Displaying the dynamic banners - Meta Box + Bricks
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Placing banners with the same content but different sizes on multiple places of the website may take a lot of time in designing. But, you totally can **use custom fields with dynamic content** to create those banners at once. Then, when you want to change the content, just replace it in custom fields without re-design the banner. Let’s do it with **Meta Box** and **Bricks**!

These are two banners that have the same content but different sizes and positions.

![Two banners have the same content but different sizes and positions](https://i.imgur.com/irFcAQG.png)

## Video version

<LiteYouTubeEmbed id='smYFaIQpF4U'/>

## Preparation

Specifically, the banner background, text, color, text position, or any element of the banner are stipulated from the content saved in custom fields. These fields will be placed on a settings page.

In this practice, we’ll use the following tools:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have framework to create a settings page and custom fields for the banner;
* [MB Settings Page](https://metabox.io/plugins/mb-settings-page/): allows you to create a settings page to input banner information;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): provides a UI on the back end to easily create custom fields;
* **Bricks Builder**: to build the page and display banners.

## 1. Creating the settings page

We’ll use a settings page to include all the content and other settings of the banner.

Go to **Meta Box** > **Settings Pages** to create a new one. There is no need for special settings for it in this practice.

![Create a settings page](https://i.imgur.com/nDLKVh1.png)

After publishing, you can see a new settings page named **Banner**.

![A new settings page named Banner](https://i.imgur.com/0yHJVii.png)

You’ll see that it’s blank now, so just move one to create custom fields for it.

## 2. Creating custom fields

Each element for the content of the banner should be put in a separate custom field. These are some fields that I’ll create for the banner.

![The custom fields that I’ll create for the banner](https://i.imgur.com/5Hjnlzl.png)

The first field you can see in the image above is to set to display the banner on the frontend or not. You can turn on or turn off the banner easily thanks to it.

All the other fields are the content of the banner. They’re just typical ones. You should create fields based on your own requirements for the banner.

Now, move to the **Meta Box** > **Custom Fields** to create them.

Choose the **Checkbox** type for the first field, which regulates whether to display the banner or not.

![The Checkbox field regulates whether to display the banner or not.](https://i.imgur.com/e6zsKTV.png)

For the other fields for the content of the banner, just create them without special settings.

After creating all the fields, move to the **Settings** tab, choose **Location** as **Settings Page**, and select **Banner** to display the created fields to the settings page we use for the banner.

![Set location to display the created fields to the Banner settings page](https://i.imgur.com/mD11Yyy.png)

Now, the custom fields are ready on the settings page.

![The custom fields are ready on the settings page](https://i.imgur.com/85265aq.png)

You can start adding content for the banner.

## 3. Creating a template for banner

Simply go to **Bricks** and create a template to display the banner and regulate how its content displays. Then, put this template into any place on any page you want.

In the right sidebar, choose the template type.

![Choose the template type](https://i.imgur.com/Wu9eQD0.png)

After creating a new template, edit it with **Bricks**.

First, to cover the banner content, add a new section. There’ll be a container inside the section.

![There’ll be a container inside the section.](https://i.imgur.com/9utKxfm.png)

### 3.1 Seting rule to display or hide the banner

We’ll add some elements inside this container to display the banner’s content. But first, we should **add a condition to set whether to display the banner or not**, following the value that we choose for the Checkbox field.

I will use CSS to do it. So, I will **add a dynamic class** for the Section element. Go to the Attributes section in this element’s settings, add a new attribute.

![To add a dynamic class for the Section element, add new attributes](https://i.imgur.com/gLIBCUy.png)

You can name the class whatever you want.

![You can name the class whatever you want.](https://i.imgur.com/vOcadzD.png)

However, to make the class be dynamic, click on the **Select dynamic data** button on the Value box, and choose the field where we stipulate if to display the banner or not.

![To make the class be dynamic, click on the Select dynamic data button, and choose the field stipulating if to display the banner or not.](https://i.imgur.com/zvAq1KP.png)

So, the name of the class will be added a variable as below. It’ll change following the status of the **Checkbox** field.

![The name of the class will be added a variable](https://i.imgur.com/Blem5iR.png)

Next, go to the **CSS** section, add these codes.

![In the CSS section, add some codes](https://i.imgur.com/ux8vHwf.png)

```css
.banner-display-Yes{
  display:block;
}
.banner-display-No{
  display:none;
}
```
`.banner-display-` are the first part of the name of the dynamic class that we have set. `Yes` or `No` is from the variable in the class. If you check the box to show the banner, the value saved in the **Checkbox** field will be `yes`. And the class will be `.banner-display-Yes`, so these lines of code below will display the banner on pages.
```css
.banner-display-Yes{
  display:block;
```
Otherwise, if you uncheck the box, the class will be .banner-display-No, then the banner will disappear thanks to this:

```css
.banner-display-No{
  display:none;
}
```
### 3.2 Displaying banner’s content

Before displaying content from custom fields, we should add some **Div** elements to divide content into separate parts for easier styling later.

![Add some Div elements to divide content into separate parts for easier styling later](https://i.imgur.com/txRYcPf.png)

Now, add a **Basic Text** element for the banner’s title.

![Add a Basic Text element for the banner’s title](https://i.imgur.com/eEkCRCw.png)

As the banner’s title is saved in a custom field created with **Meta Box**, click the **Select dynamic data** button and choose the right field. It’s **Title**.

![Get the banner’s title from the custom field](https://i.imgur.com/bPQRP2J.png)

Currently, it’ll display like in the image below.

![The banner’s title doesn't display as you want on the backend](https://i.imgur.com/uflTYhr.png)

Don't worry, you can see the right text on the frontend.

For the banner’s description, select another **Basic Text** element. We also use the **Select dynamic data** button and choose the field correspondingly.

![Get the banner’s description from custom field](https://i.imgur.com/WseqX7c.png)

For the background image of the banner, I will add the image from the custom field to be the background of the **Div** element that covers the banner. There also is a button for selecting dynamic data from custom fields as well. Just search for the one where we saved the image for the banner.

![Add the image from the custom field to be the background of the Div element that covers the banner.](https://i.imgur.com/hzW8TiF.png)

Now, you can see the image displayed in the background.

![The image displayed in the background](https://i.imgur.com/TSY9CKI.png)

I have some fields to regulate the color and position of the text on the banner. Whenever users change the value in those custom fields, their position will automatically change as well. It’ll be done very easily since **Bricks** allows adding some attributes using dynamic data for each element. This is one of the interesting things that makes me love Bricks. I guess you will do so.

In the setting of each element that you want to set the position based on values in custom fields, just add values for the attribute, following what you do with CSS as normally. But, click on the **Select dynamic data** button and find the field where the style is stipulated to insert a variable into the value of each attribute like this.

![Click on the Select dynamic data button and find the field where the style is stipulated to insert a variable into the value of each attribute](https://i.imgur.com/LPTkN0I.gif)

![Add an attribute with the style stipulated from the Banner Color and Title’s Position fields.](https://i.imgur.com/Q8pvIvr.png)

**In there**:

* `color:{mb_banner_color}`: is for the color, and `{mb_banner_color}` is the variable to get dynamic value from the Color field;
 * `text-align:{mb_banner_titles_position}`: is for the position, and `{mb_banner_titles_position}` is the variable to get dynamic value from the Title’s Position field.

Do the same with the style of the banner’s description, also add an attribute with the style stipulated from the **Description Color** and **Description’s Position** fields.

![Add an attribute with the style stipulated from the Description Color and Description’s Position fields.](https://i.imgur.com/CTSWec7.png)

That’s all for the banner template. This is the preview of the banner on the frontend.

![The preview of the banner on the frontend](https://i.imgur.com/AhpSQCl.png)

You see, the color and the position of the text follow the settings that we set in the custom fields.

Let’s move on to the next step to put this template to some specific place on the website to display the banner.

## 4. Displaying banner in some places

### 4.1 Displaying banner in sidebar

I will take the sidebar as a typical example for where we put the banner. Just edit the page where the sidebar is on with **Bricks**. I’ll add the banner to this space.

![Add banner in Sidebar](https://i.imgur.com/WunOqvV.png)

Go to the right corner of the header bar of **Bricks** and click the **Templates** icon to add templates. Then, choose to insert the one that we’ve just created.

![Insert the created template](https://i.imgur.com/W5mGwVy.gif)

You can see that the banner displays immediately.

In the structure of the page, there’re also the elements following those we added in the template.

![After inserting the created template, there’re also the elements following those we added in the template.](https://i.imgur.com/FLd4ZuZ.png)

You can also change the style settings of those elements to have a better look. This is how my banner displays in the sidebar on the frontend after that.

![The banner displays in the sidebar on the frontend.](https://i.imgur.com/NlFcYOG.png)

### 4.2 Displaying banner as full-width image on a page

In any place of a page, insert the created template for the banner. There’re also the same elements for the banner.

![The same elements for the banner](https://i.imgur.com/kFNm0sM.png)

You also should change those elements settings to get the right display for full-width.

Now, on the frontend, you can see both of the two places displaying the banner in different sizes. And, the two banners have the same content and some of the settings for style.

![The two banners in different sizes have the same content and some of the settings for style](https://i.imgur.com/zLhmjbU.png)

From now on, whenever you change the values saved in the custom fields, the content of the banners on every place will be changed while their size and layout remains intact.

## Last Words

It’s not difficult to **create dynamic banners using Meta Box and Bricks**, right? From now on, you can have banners in different sizes on your website with the same content and settings. You can apply this way to put banners with the same content in multiplace on your website without designing too many ones. This saves more time and effort. Hope this tutorial will be helpful for you!

In the case that you are not using Bricks or any page builder, we also have [another tutorial](https://docs.metabox.io/tutorials/create-dynamic-banners/)https://docs.metabox.io/tutorials/create-dynamic-banners/ for you. Just take a look and follow the guides.
