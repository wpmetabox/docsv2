---
title: Creating a custom 404 page in WordPress - Meta Box + Bricks
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Let’s explore an interesting way to have a **custom 404 page** with flexible content using custom fields created with **Meta Box** and displaying them with **Bricks**.

Here is my custom 404 page as an example:

![The custom 404 page was built by Meta Box and Bricks.](https://i.imgur.com/g3Md0DC.png)

## Video version

<LiteYouTubeEmbed id='ssAuHEA7Fc0'/>

## Preparation

The page may contain any kind of information that you think is useful for visitors. You can add an image, a message, buttons to redirect them to another page that makes sense to them, or anything else. All of them should be regulated by content in custom fields so that you can change it easily and more conveniently.

Therefore, in this practice, we will use the following tools:

* [Meta Box plugin](https://wordpress.org/plugins/meta-box/) to have a framework to create custom fields. It’s available on [wordpress.org](https://wordpress.org/plugins/meta-box/).
* [MB Settings Page](https://metabox.io/plugins/mb-settings-page/): to create a settings page to input the 404 page’s information;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create the custom fields visually;
* [Meta Box Group](https://metabox.io/plugins/meta-box-group/) (optional): to organize custom fields into the group. In this case, they are the labels and URLs of the buttons;
* **Bricks**: to build the page.

Now, let’s start!

## 1. Creating a new settings page

Since the 404 page is not a specific page as usual, we’ll use a settings page to include all the content of the page. 

Go to **Meta Box** >** Settings Pages** and create a new page.

![Go to Meta Box > Settings Pages and create a new page](https://i.imgur.com/W6NcuOW.png)

For the position of the settings page, you can put it on every place in the menu. I’ll set this page as a submenu, and choose the **Parent menu** as the **Settings**.

![Set the page as a submenu, and choose the Parent menu as the Settings](https://i.imgur.com/s2BxQly.png)

Then, go to the page in the **Settings** menu. It’s still blank since we haven’t added any content to it yet.

![The page is in the Settings menu, it’s still blank](https://i.imgur.com/N7AYCGN.png)

Let’s move to the next step.

## 2. Creating custom fields

Instead of adding any specific and static content to the page, I’ll use custom fields to store them all.

Go to **Meta Box** > **Custom Fields** and create a new field group.

![Go to Meta Box > Custom Fields and create a new field group](https://i.imgur.com/VecQFXW.png)

These are some fields that I’ll create for the page as examples. Simply add more fields if you want to have more content on the page.

![Some fields that I’ll create for the page as examples](https://i.imgur.com/tO43YEU.png)

For the button, we’ll group the label and URL together, then we’ll have a bundle for each button. So, add a **Group** field type for the button.

![Add Group field for the button](https://i.imgur.com/PPuXnGc.png)

You can set the group as collapsible to see buttons in a clear structure. And, you can name the title for the group as well. Here, I use `{#}` to number the button for management purposes only.

![Set the title for the group using {#} to number the button](https://i.imgur.com/PGvd6r7.png)

If you want to add more than one button to the page, you should set this group as cloneable.

![Set the group is clonable to have more than one button](https://i.imgur.com/MNEjBez.png)

Inside the group, add two subfields: one for the label, and another for the URL for the direction.

![Inside the group, add two subfields for the content and URL](https://i.imgur.com/G02Gmhi.png)

After creating all the fields, move to the **Settings** tab, set the **Location** as **Settings page**, and choose the created settings page to apply the fields to it.

![In the Settings tab, set the location as the created settings page to apply the fields to it](https://i.imgur.com/OvVLldb.png)

Then, go to your settings page, and you will see custom fields displayed.

![The custom fields are displayed in the settings page](https://i.imgur.com/0nlNtHC.png)

Just input data. Here is my content for example.

![Input data for the settings page](https://i.imgur.com/Yo6qK5k.png)

## 3. Creating a template for 404 page

Go to **Bricks** > **Templates** and create a new one to display the 404 page.

![Go to Bricks > Templates and create a new one to display the 404 page.](https://i.imgur.com/NhAwCZr.png)

To regulate the template to be used for 404 pages, you must set the type of this template as ‘**Error page**’.

![Regulate the template to be used for 404 pages](https://i.imgur.com/Xka2xHL.png)

And then, edit the template with Bricks, you must set a condition to apply the template to the **Error page** as well.

![Set a condition to apply this template to the Error page](https://i.imgur.com/cDjEY2H.png)

Depending on the structure of the content that you want to have on the page, just choose a suitable layout.

![Choose a suitable layout.](https://i.imgur.com/Nm0nSlD.png)

Now, we should find some elements that match the kinds of content you saved in the custom fields to display them.

To get the content from the custom fields, we’ll use the **Dynamic Data** button for the element. Then, look for the name of the field in the **Meta Box** section. Take the image of the 404 page as an example.

![Get the image of the 404 page](https://i.imgur.com/IXqApq0.png)

After that, you will see the image displayed in the preview section immediately.

![The image displayed in the preview section immediately](https://i.imgur.com/cUZTvnK.png)

Do likewise for other content.

With the buttons, they are from a cloneable group, so you should use a query loop to get them all. Therefore, add a **Div** element, then enable the query loop for it, and just set the type of data source as the name of the group.

![Add a Div element, then enable the query loop for it, and just set the type of data source as the name of the group.](https://i.imgur.com/xppP6hc.png)

Now, add a **Button** element inside the **Div** element.

![Add a Button element inside the Div element](https://i.imgur.com/IcqpHwy.png)

We have the label as well as URL for the button saved in custom fields, so we also use dynamic data for this element. We do it in the same way as getting data from other custom fields, click the icon below to set the label, and choose the name of the field where we store the label from the list.

![Get the label of the button](https://i.imgur.com/Bk86kG0.png)

For the links of the buttons, set the type as **Dynamic Data**. As well, choose the fields where we store the URLs. The links will automatically be embedded into the button.

![Get the links of the buttons](https://i.imgur.com/0tXAoLe.png)

How much content you put in the custom fields, how many elements you should add to this template to display them all.

After that, you should view the page on the frontend to see how it looks.

![The custom 404 page was built by Meta Box and Bricks.](https://i.imgur.com/r4kTexs.png)

This is a simple page that I’ve made. That’s all the content that I want to have on this page. But, you might have more than that. Make sure you get and display them all.

## 4. Styling the 404 page

The next part is to modify the layout of the page as well as style each element to have a better look. Just go back to edit the 404 page with **Bricks** to do it.

![Style the 404 page](https://i.imgur.com/Cq4es5y.png)

Then you will get a 404 page with beautiful, useful, and flexible content that you can change easily without touching the template anymore.

![404 page displays with beautiful, useful, and flexible content that you can change easily without touching the template anymore.](https://i.imgur.com/g3Md0DC.png)

From now on, whenever visitors go to an unavailable page on your site, they’ll find this page. These two buttons will help drive them to another page that may have some helpful content.

In the event that you want to **change the content of the 404 page**, just go back to the settings page, and **change the data saved in the custom fields**.

If you don't want to use a 404 page, you can try a [301 redirect](https://gretathemes.com/create-301-redirects-in-wordpress/#benefits-of-301-redirects), which helps keep people on your site.

Also, for better SEO, check out our series on [analyzing content in custom fields](https://metabox.io/series/SEO-analysis/). Feel free to suggest any tutorials by leaving a comment and following our blog. Thanks for reading!
