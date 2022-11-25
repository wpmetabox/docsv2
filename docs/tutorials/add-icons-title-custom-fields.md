---
title: Adding icons to the title of custom fields
---

Icons can be used instead of text when naming a meta box's title or field name. Let’s find out how to create it in this tutorial!

## Enqueuing CSS and fonts library for the icons

As you know, there are several icon libraries. You should enqueue your desired library to the theme before using it.

If you use [FontAwesome](https://fontawesome.com/), [Elusive](http://elusiveicons.com/), or [Genericons](https://genericons.com/), follow these instructions:

1. Download the library to your computer.
2. Copy the CSS and font files and paste them into the theme’s folder.
3. Add this code to the functions.php file.

```
function your_prefix_enqueue_admin_style() {
    wp_enqueue_style( 'admin_css', get_stylesheet_directory_uri() . 'css_file_direction_in_the_theme_folder' );
}
add_action( 'admin_enqueue_scripts', 'your_prefix_enqueue_admin_style' );
```

You can skip this step if you’re using [Dashicons](https://developer.wordpress.org/resource/dashicons/). Because this library was created by WordPress, you may use it without enqueueing. 

I’ll use [Dashicons](https://developer.wordpress.org/resource/dashicons/) in this practice since it's simpler.

## Adding icons to the title of the custom fields

There are two ways to insert icons into the title of meta box or field name, which are using code or UI. However, the UI is available only when you have [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/),

Here is my example with 3 custom fields inside. I will add icons to this meta box and its custom fields. 

![Example of created fields](https://i.imgur.com/F8DGLez.png)

Firstly, go to the [Dashicons](https://developer.wordpress.org/resource/dashicons/#minus) page and get the HTML for the icons.

![Go to Dashicons page to get the HTML for the icons](https://i.imgur.com/kVWKje7.png)

Then, choose one of these ways.

### 1. Use code to add icons

Add the HTML to the meta box's **title** attribute or the field's **name** attribute.

For example, here is the original code of a meta box created by Meta Box plugin:

![Teh original code](https://i.imgur.com/yTq2J2E.png)

I added the HTMLs of the icons to these positions:

![Add the HTMLs of the icons](https://i.imgur.com/RnRckhp.png)

Save the code, and the fields will look like this:

![The fields display after saving the code](https://i.imgur.com/gwuXqzV.png)

### 2. Use UI to add icons

In this way, you need to install [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/) which provides an intuitive UI to create and configure custom fields in the admin dashboard.

Here are my example fields.

![Example fields](https://imgur.com/A8QNyRf)

Now, we add the HTML of the icon to the **Title** of Meta Box or **Label** of fields.

![Add the HTML of the icon](https://i.imgur.com/8jQyMmu.png)

Finally, select **Update** to save all the changes.

Here is the result on the frontend:

![The result](https://i.imgur.com/A5eAU1J.png)




