---
title: Creating custom post types and taxonomies
---


import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

## Video version

<LiteYouTubeEmbed id='-oYrHGOri4w' />

## Preparation

We need [Meta Box Lite](https://metabox.io/lite/) to create custom post types and custom taxonomies. It's free, so just download and install it on your site.

![Install Meta Box Lite to create custom post types and custom taxonomiesMB custom post typed and custom taxonomies plugin](https://i.imgur.com/6Kqp8ek.png)

After you install Meta Box Lite, you will see a quick action name **Create a post type** and the Post Types as a sub-menu in the Meta Box menu.

![There're two positions you can create a new custom post type](https://i.imgur.com/68NYL42.png)

## Creating custom post types

Click on the **Create a post type** button. Then, enter the plural and singular name for the post type. About the slug, it’s auto-generated, but you can change it as you want.

In my case, I create a new post type with the name is Project, the slug is _project_.

![Create a new post type with the name is Project](https://i.imgur.com/Ar2uT2I.png)

## Configuring the post type

### Changing the labels

If you want to change the labels of the post type, move to the **Labels** tab. All the options are also auto-created based on the post type’s name that you’ve made.

![Options of labels tab are auto-generated on the created post type name](https://i.imgur.com/YxfTzn8.png)

**Advanced options**

In the event that you want to add more advanced information for the post type, go to the **Advanced** tab. And then, you will see a new screen with dozens of fields to edit.

![To add more advanced information for the post type, go to the Advanced tab](https://i.imgur.com/qdHGC1Z.png)

Here are some options you may need:

* **Public queryable**: it allows to get the taxonomy’s data and display it on the website;
* **Hierarchical**: it allows to make the post type hierarchical - it means you can have a parent post type and its sub-post types inside;
* **Show UI**: it allows to show the post type as the menu in the Dashboard;
* **Show in menu**: once you enable the **Show UI** option, go to specify where to display the post type in the admin menu. There are several options to select like **Show as top-level menu**, **Show as sub-menu of WP Engine**, **Show as sub-menu of Dashboard**, etc.

![With Show as top-level menu default option, two fields will appear](https://i.imgur.com/oXk1z33.png)


:::note

If you still keep the Show as top-level menu default option, two fields will appear:

:::


* **Menu position after**: it allows to choose the position in the menu order the post type should appear;
* **Icon Type**: you’ll have three icon types to select for the post type, namely Dashicons, SVG, and Custom URL;

![Choose options you want](https://i.imgur.com/CjAacBI.png)

* **Menu icon**: select an icon for the post type. If you choose other options in the **Show in menu field**, only the icons in the type of Dashicons are available;

![Choose the options you want](https://i.imgur.com/RmnfwHP.png)

* **Show in nav menu**: show the post type section in the menu;

![Choose the screen elements to show](https://i.imgur.com/s1XrH8f.png)

* **REST API base slug**: enter the REST API base lug to get the data of the post type via API;
* **Has archive**: enable post type archives;
* **Custom archive slug**: customize the archive slug;
* **Custom rewrite slug**: customize the permastruct slug;

![Choose the options you want](https://i.imgur.com/r1yUpet.png)

### Support features

To choose the features which you want the post type to have, go to the **Supports** tab. This part is the same as the step of declaring the _$support_ parameter when you create post types using the code.

![Choose more features for the post type](https://i.imgur.com/9n9pBqx.png)

### Setting taxonomies for the post type

In the **Taxonomies** tab, you can see there are several options for you to choose which taxonomies you want to apply the created post type for. If you create any custom post types, they will also appear here. Keep reading to the next part to know how to create custom taxonomies.

![Set taxonomies for the post type](https://i.imgur.com/KVKwlKK.png)

After setting up the custom post types, remember to publish the one you created. Then, you can easily see the post type in the Admin Dashboard. In my case, a new menu named Projects has been shown.

![The created post type will appear in the menu dashboard](https://i.imgur.com/g5Nmc9t.png)

## Creating custom taxonomies

Click on the **Create a taxonomy** quick action on the dashboard to move to the Taxonomies submenu.

![Create custom taxonomies](https://i.imgur.com/cZrEL4a.png)

Then, you just need to fill in the information of the taxonomy. Similar to creating the custom post types, the slug is also auto-generated and you can also change it as you want.

![Fill in the information of the taxonomy](https://i.imgur.com/CohaxS7.png)

## Configuring the taxonomy

### Changing the labels

In the **Labels** tab, all options are also generated automatically, but you can change them as well.

![Set the options of Labels tab as you want](https://i.imgur.com/mmmuYHt.png)

### Advanced Options

For the **Advanced** tab, there are several fields which are similar to the advanced tab when creating a post type. However, there are some special options:

* **Hierarchical**: show the taxonomy hierarchical that allows you to type the term you need like this:

![There are some special options for the Advanced tab](https://i.imgur.com/2TJyQxr.png)

* **Show on edit page**: display the taxonomy on the edit page;
* **Show it quick edit**: show this taxonomy in the quick/bulk edit panel;
* **Hierarchical URL**: enable it to include the URL of the parent taxonomy in the URL of the sub-taxonomy;

![Choose the options you want](https://i.imgur.com/ZgYEVsO.png)

### Setting post type for the taxonomy

In the event that you want to apply the created taxonomy to a post type, move to the **Post Types** tab and select the post type where you want to show it for.

![Set post type for the taxonomy](https://i.imgur.com/FeGp5qS.png)

