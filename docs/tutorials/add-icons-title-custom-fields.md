---
title: Adding icons to the title of custom fields
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Sometimes you may want to **embellish the fields, or have some signatures for them**. There is not only a way to do that such as adjusting size, space, color, … but also **adding icons into their title**. Instead of using only text for the meta box’s title or field name, we can **use icons for addition or alternative**. Let’s dive in to explore the process of adding icons to the title in detail.

This is an example for adding the icons that we will create in this practice.

![An example for adding the icons to titles of custom fields](https://i.imgur.com/4npFj2j.png)

## Video Version

<LiteYouTubeEmbed id='aRPqEdvXxdc'/>

## Preparation

To have custom fields on your site, you might have the [Meta Box plugin](https://wordpress.org/plugins/meta-box/). You can install it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/).

Beside that, if you have the [MB Builder](https://metabox.io/plugins/meta-box-builder/) to create and manage the fields in an intuitive UI, it’ll be easier to add the icons. Otherwise, you can add the HTML script of the icon to the code directly.

I will give you both ways in this practice.

## 1. Enqueuing the icon library

As you know, there are several icon libraries available. You must enqueue your wanted library to the theme before using it.

If you use [FontAwesome](https://fontawesome.com/), [Elusive](http://elusiveicons.com/), or [Genericons](http://genericons.com/), you must follow these executions:

1. Download the library to your computer.
2. Copy the **CSS** and font files and paste them to the theme’s folder.
3. Add this code to the **functions.php** file.

```
function your_prefix_enqueue_admin_style() {
    wp_enqueue_style( 'admin_css', get_stylesheet_directory_uri() 'css_file_direction_in_the_theme_folder' );
}
add_action( 'admin_enqueue_scripts', 'your_prefix_enqueue_admin_style' );
```

Otherwise, you can totally skip this step if you use [Dashicons](https://developer.wordpress.org/resource/dashicons/). This library is developed by WordPress so you can use it without enqueuing.

From now on, you can use any icons from the enqueued library on your site, including the field title.

## 2. Creating custom fields

Now, I will create some fields for adding icons to the titles.

Go to **Meta Box** > **Custom Fields** to create the fields.

![Go to Meta Box > Custom Fields to create the fields](https://i.imgur.com/gNg6QgK.png)

These are the fields that I have created. They are all the basic and typical fields, so I made no special settings.

![These are the fields created](https://i.imgur.com/jj0pAGv.png)

After having all the fields, move to the **Settings** tab, set the **Location** and select **Post** to apply the fields to it.

![Move to the Settings tab, set the Location and select Post to apply the fields](https://i.imgur.com/H1YCtzT.png)

Then, on the editing post, you will see the fields but without icons.

![The fields but without icons in post editor](https://i.imgur.com/dthvH4Y.png)

## 3. Getting the icon script

To add icons, I’m going to use icons from the **Dashicons** library.

Go to [this link](https://developer.wordpress.org/resource/dashicons/#ellipsis) on [wordpress.org](http://wordpress.org), and search for an icon you want.

![Search for an icon you want](https://i.imgur.com/DDi0yT2.png)

Then, copy the **HTML** of the icon to show it in the next steps.

![Copy the HTML of the icon to show icons](https://i.imgur.com/pCBOUZj.png)

## 4. Adding icons to the title of custom fields

As I mentioned before, you can create and manage the fields **using the UI** provided by the [MB Builder extension](https://metabox.io/plugins/meta-box-builder/), or **using code**. No matter which way you are doing, adding icons to the title are quite the same.

### 4.1. Using MB Builder

This is a field group that I made before. It was created by using the UI.

![This is a field group created](https://i.imgur.com/jj0pAGv.png)

Now, I will add an icon to the field group title, as well as the titles of all the fields.

To add the icon to the field group title, paste the HTML that we’ve just copied to any place on the title.

![Paste the HTML to add the icon to the field group title](https://i.imgur.com/l56TLRu.png)

Do likewise with the titles of the fields. Just paste the HTML of the icon as you want to the title.

![Paste the HTML of the icon to add icons to fields](https://i.imgur.com/WEmmQGf.png)

### 4.2. Using code

We’ll add the HTML to the meta box's **title** attribute or the field's **name** attribute.

Here is the original code of a meta box created by Meta Box plugin.

![Here is the original code of a meta box created by Meta Box plugin](https://i.imgur.com/30yTlUk.png)

Add and paste HTML script into the line where we set the field group title.

![Paste the HTML to the line is where we set the field group title](https://i.imgur.com/0eyplwB.png)

Also paste the HTML scripts of the icons to the lines where we register the name of each field.

![Paste the HTML of the icons to these lines are where register the name of each field](https://i.imgur.com/ETZkcZV.png)

## 5. Displaying the icons

Go to the post editor, you will see the icons displayed besides the field group title and each field title. This is how they look in the backend.

![The icons displayed in the backend](https://i.imgur.com/4npFj2j.png)

If this field group is also displayed on a page on the frontend, they would display well.

Now, I’ll add a block in the type of **Submission Form**.

![Add a block in the type of Submission Form](https://i.imgur.com/JtfdwsZ.png)

After adding the ID of the field group to this box, the fields will display immediately, obviously along with the icons.

![After adding the ID of the field group to this box, the fields will display with icons](https://i.imgur.com/YCobk8w.png)

We’ve finished adding the icons. Here is the result on the frontend.

![Here is the result on the frontend](https://i.imgur.com/XldNzri.png)
