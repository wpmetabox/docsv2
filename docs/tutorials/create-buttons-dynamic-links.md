---
title: Creating buttons with dynamic links
---

Dynamic links are created to show various links in different posts and are displayed as buttons. It can be made in a variety of ways. One method is to use custom fields.

For instance, I have a website about theme reviews here. Each post about a theme has buttons for its own demo and download pages. They are dynamic links.

![Create buttons with dynamic links](https://i.imgur.com/4eZDsXP.png)

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

## Video version

<LiteYouTubeEmbed id='8sD-Lyy6-5c' />

## Preparation

In addition to using Meta Box, make sure you already have these extensions:

* <a href="https://metabox.io/plugins/meta-box-builder/">Meta Box Builder</a>: It provides UI to create custom fields;
* <a href="https://metabox.io/plugins/mb-views/">MB Views</a>: Build front-end templates for WordPress without touching theme files. Support Twig and all field types.

If you are using a page builder such as <a href="https://metabox.io/plugins/mb-elementor-integrator/">Elementor</a> or <a href="https://metabox.io/plugins/mb-elementor-integrator/">Beaver Builder</a>, please activate the corresponding integration from Meta Box.

All these extensions are available in the Meta Box AIO, which includes the Developer and Lifetime licenses.

## Creating custom fields for URLs

First, we need custom fields for saving URLs for each post. If you’ve had <a href="https://metabox.io/plugins/meta-box-builder/">Meta Box Builder</a> in your pocket, you will have a UI on the backend to create custom fields visually. Otherwise, please go to the <a href="https://metabox.io/online-generator/">Online Generator</a>, create fields, generate code, and copy it to get the fields.

They are quite simple with a type of URL and there are no special settings.

![Choose URL type of custom field" height](https://i.imgur.com/4YxJdnE.png)

After having these fields, please go to the posts and input some links. That way, you will have data to check if the buttons work.

## Creating buttons without page builder

For someone who is not using any page builder on their site, this part may help. MB Views from Meta Box will help to create a button easily with a shortcode.

Just go to **Views** and create a new view with this code:

```php

<a class="wp-block-button__link" href="{{ post.view_demo }}">
    View demo
</a>
<a class="wp-block-button__link" href="{{ post.download }}">
    Download
</a>

```


In there, `view_demo` and `download` are custom fields with IDs. By the way, because I’m using the <a href="https://gretathemes.com/wordpress-themes/estar/">eStar</a> theme, I must use the `wp-block-button__link` class to create buttons.

The view will generate a shortcode as you see in the below image. Just copy and embed it somewhere.

![The view will generate a shortcode](https://i.imgur.com/wqfanwd.png)

For instance, I pasted it to a sidebar on the single blog post page and got these default buttons.

![Example of the default buttons](https://i.imgur.com/KbrVNak.png)

Note that this look of the button is from the theme default.

## Creating buttons with dynamic links using Oxygen

I’ve already pre-made a template using <a href="https://oxygenbuilder.com/">Oxygen</a>. It is applied to blog posts.

I will set a container to contain two buttons right under the featured image of the post.

![Set a container to contain two buttons right under the featured image](https://i.imgur.com/Vk9dVOF.png)

Now, add a button. At the end of the URL section, there is a button linked to dynamic data. Click it, then choose **Meta** / **Custom** **Field** in the **Post** section. Next, scroll your mouse until you find the ID of the wanted field to connect to the button.

![Set the wanted buttons](https://i.imgur.com/0MnXzkH.png)

The remaining thing to do is style the button as you want.

![Style the buttons as you want](https://i.imgur.com/mpf6wGt.png)

I also created another one with a new style and linked it to another field. And, here they are in a post, with links.

![Created another one with a new style and link it to another field](https://i.imgur.com/VGaSsEY.png)

## Creating buttons with dynamic links using Beaver Builder

I also created a similar template with <a href="https://www.wpbeaverbuilder.com/">Beaver Builder</a>.

First, I add columns to set the layout, and then I add a button. There’s a Link section for inserting a static link to the button’s settings. Click the plus icon to receive Meta Box URLs.

![Create buttons with dynamic links using Beaver Builder](https://i.imgur.com/STX2ztz.png)

You will see the **Meta Box Field** option in the drop-down list. Choose it by clicking **Connect**.

![Connect it with Meta Box field option](https://I.imgur.com/Y8DWp57.png)

Then, choose the name of the field you want.

The last thing, style your button. That’s all.

To have another button, you can duplicate this one to save time, then reconnect it to another field as well as restyle it.

![To restyle the template, reconnect it to another field](https://i.imgur.com/HBwcQAD.png)

Now, go to a post. You will see the buttons with links.

![Buttons with links](https://i.imgur.com/yjgAJo7.png)

## Creating buttons with dynamic links using Bricks

The last page builder is <a href="https://bricksbuilder.io/">Bricks</a>. In the same way, add a container with 4 columns first, then buttons.

Different from other page builders, Bricks allows you to choose the type of link from a dropdown list. To get data from custom fields in Meta Box, please choose **Dynamic Data**.

![Meta Box is suggested with the name of custom fields](https://i.imgur.com/8AuikQQ.png)

After that, you will see Meta Box is suggested with the name of custom fields following. Choose one if you want.

![Meta Box is suggested with the name of custom fields](https://i.imgur.com/WtMoWZg.png)

Bricks will render a corresponding link to this preview post so that you can check if the data is correct.

![Bricks will render a corresponding link to this preview post so that you can check if the data is correct](https://i.imgur.com/0OxPFAB.png)

After that, all the work is styling.

![Style as you want" height](https://i.imgur.com/7c2FqO2.png)

Then, I’ve got an ace button in the preview. Let’s duplicate it to have a new one. I’ll change the data source and restyle this new button.

![Duplicate it to have a new one](https://i.imgur.com/xA5IPOO.png)

Finally, here they are on a post.

![The created post after all steps](https://i.imgur.com/1m0k62M.png)
