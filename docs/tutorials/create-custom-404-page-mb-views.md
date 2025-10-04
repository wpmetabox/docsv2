---
title: Creating a custom 404 page using MB Views
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Today, I’ll show you how to **create a better 404 page** with flexible content that you can change anytime without affecting the design using the **MB Views** extension from Meta Box.

Here is my example:

![The custom 404 page was built by MB Views.](https://imgur.elightup.com/VrCu8Vf.png)

## Video version

<LiteYouTubeEmbed id='xfLNr3qEf4o'/>

## Preparation

The page may contain any kind of information that you think is useful for visitors. You can add an image, a message, buttons to redirect them to other relevant pages, or anything else. All of them should be regulated by content in custom fields. By using custom fields, you can simply change the content in those fields, and the page will automatically display the updated version.

Let’s look for the detailed list of tools we need for this practice.

* [The Meta Box plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create a settings page and custom fields for the 404 page content;
* [MB Settings Page](https://metabox.io/plugins/mb-settings-page/): to create a settings page to input the 404 page’s information;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create the custom fields visually;
* [MB Views](https://metabox.io/plugins/mb-views/): to create a template for displaying the 404 page’s content.

Besides, you can make the most of some other extensions to have your own field structure that fits your page’s content. They may be [Meta Box Tab](https://metabox.io/plugins/meta-box-tabs/), [MB Conditional Logic](https://metabox.io/plugins/meta-box-conditional-logic/), and so on. However, they are just optional. In this practice, I’ll use [MB Group](https://metabox.io/plugins/meta-box-group/) to organize custom fields into groups for simpler management and display.

You can install them individually or just use **Meta Box AIO**.

That’s all. Let’s start now.

## 1. Creating a settings page

The 404 page is not a specific page, so we’ll use a settings page to include all the content and other settings for it.

Go to **Meta Box** > **Settings Pages** and create a new page.

![Go to Meta Box > Settings Pages and create a new page](https://imgur.elightup.com/W2VGf6H.png)

For the position of the settings page, you can put it on every place in the menu. I’ll set this page as a submenu, and choose the Parent menu as the Settings.

![Set the page as a submenu, and choose the Parent menu as the Settings](https://imgur.elightup.com/xzKizar.png)

Then, go to the page in the **Settings** menu. It’s still blank since we haven’t added any content to it yet.

![The page is in the Settings menu, it’s still blank](https://imgur.elightup.com/DXQ1iTH.png)

Let’s move to the next step.

## 2. Creating custom fields for the 404 page’s content

Instead of directly adding specific content to the page, I'll use custom fields to store all the information.

Go to **Meta Box** > **Custom Fields** and create a new field group.

![Go to Meta Box > Custom Fields and create a new field group](https://imgur.elightup.com/RqDFB9a.png)

These are some fields that I’ll create for the page as examples. Feel free to add more fields if you want additional content on the page.

![Some fields that I’ll create for the page as examples](https://imgur.elightup.com/CpjDhAb.png)

For the button, I’ll group the label and URL together, then we’ll have a bundle for each button. So, add a **Group** field type for the button.

![Add Group field for the button](https://imgur.elightup.com/MVAmunx.png)

Inside this group, add two subfields: one for the label, and another for the URL, where you want the visitors to arrive.

![Inside the group, add two subfields for the content and URL](https://imgur.elightup.com/0eJPeNE.png)

You can set the group as collapsible to see buttons in a clear structure. And, to see the buttons apart, you can name the title of the groups as well. Here, I use `{name}` to name the button as the label for management purposes only.

![Name the title of the groups](https://imgur.elightup.com/pTvE8QQ.png)

If you want to add more than one button to the page, it's advisable to set this group as cloneable.

![Set the group is clonable to have more than one button](https://imgur.elightup.com/R18wdTS.png)

After creating all the fields, move to the **Settings** tab, set the **Location** as **Settings page**, and choose the created settings page to apply the fields to it.

![In the Settings tab, set the location as the created settings page to apply the fields to it](https://imgur.elightup.com/UgQIzfv.png)

Then, on your settings page, you will see custom fields displayed.

![The custom fields are displayed in the settings page.](https://imgur.elightup.com/nXU3joS.png)

Just input some content to the fields. They will be used to display on the 404 page later.

## 3. Creating a template for 404 page

Go to **Meta Box** > **Views** to create a new template for the 404 page.

![Create a new template for the 404 page](https://imgur.elightup.com/WR2zrtO.png)

With **MB Views**, you can add some lines of code to the box or insert fields by clicking the **Insert Field** button, then choosing fields on the right sidebar to get data from custom fields.

![You can add code to the box or use the Insert Field button to insert fields](https://imgur.elightup.com/RIoyLr4.png)

Since our fields are on a settings page, turn to the **Site** section to see them.

![Turn to the Site section to see fields being on a settings page.](https://imgur.elightup.com/SojeZFR.png)

First, for the image of the 404 page, insert the **Image** field. And, you can choose an image size that fits your page style.

![For the image of the 404 page, insert the Image field](https://imgur.elightup.com/owi1v9I.png)

Next, to display the message, choose the corresponding one.

![Insert the Message field](https://imgur.elightup.com/CuBsfXY.png)

For the button, insert the **Button** field. Since it’s cloneable, a loop will be generated in the **Template** section.

![For the button, insert the Button field.](https://imgur.elightup.com/9hY644d.png)

Inside the loop, we’ll insert the button name, and its url as well.

![Insert the button name, and its url ](https://imgur.elightup.com/I9LPkfE.png)

Now, go to the **Settings** section to apply this template for the 404 page. Since it is a special page, we need to use a conditional tag provided by WordPress to set the location for this template. First, set the view type as **Code**. Then, put in a tag on the box. With the `is_404()`  tag, we show this template only on pages not found.

![Set type of the template to apply it for the 404 page](https://imgur.elightup.com/TNXZzMm.png)

Now, if you access any broken link of your website, you’ll see the 404 page information displayed.

![The 404 page information displays without styling](https://imgur.elightup.com/Fs9oIWy.png)

You can see that it might not look nice as you'd like, so you may need to style it a bit.

## 4. Styling the 404 page

Back to the created template with **MB Views**, include some div tags and classes to make styling easier.

![Include some div tags and classes](https://imgur.elightup.com/69k9D4T.png)

Also, add some code to the **CSS** tab for styling the page.

![Add some code to the CSS tab for styling the page](https://imgur.elightup.com/vFpuf5a.png)

Then, the 404 page displays with a better look already.

![The 404 page displays with a better look already](https://imgur.elightup.com/VrCu8Vf.png)

From now on, whenever visitors go to an unavailable page on your site, they’ll find the 404 page. Also, the buttons will help drive them to another page that may have some helpful content.

## 5. Changing 404 page content in daily use

Someday, when you want to change the content of the 404 page, including the image, message, or button, simply go back to the settings page, change the data saved in the custom fields.

![Change the content of the 404 page in the settings page](https://imgur.elightup.com/FGF59qb.png)

Then, you will have a new 404 page with fresher content.

![A new 404 page with fresher content](https://imgur.elightup.com/DHMKUKm.png)

That way, you can test which content will match and be good enough to keep the visitor staying longer on your site.
