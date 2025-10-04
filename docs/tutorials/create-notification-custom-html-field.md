---
title: Creating notification using custom HTML field
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

When input data to custom fields, you definitely can use the field's description to notice or warn users about something. But it is not attractive enough so they can skip it. That’s when you should use an alert message for your custom fields. With Meta Box, you can do it easily with the help of the Custom HTML field type. Let’s explore how to create a notification using this field.

This is a notification that I created for example.

![An example of notification was created by custom HTML field from Meta Box](https://imgur.elightup.com/VXxEXSC.png)

## Video version

<LiteYouTubeEmbed id='ZrerziToyrc' />

## Preparation

We need the following tools for this practice:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/) to have the framework for creating custom fields. It’s free, and you can download it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/);
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to create custom fields;
* [MB Conditional Logic](https://metabox.io/plugins/meta-box-conditional-logic/) (optional): to show or hide custom fields based on the data users fill in another field. It is just optional if you need to show or hide fields in your case.
* [MB Group](https://metabox.io/plugins/meta-box-group/) (optional): to group together the fields along with the Custom HTML field that we use for the notification. This is optional as well. In fact, you obviously can set the Custom HTML field stand alone.

## 1. Creating custom fields

Go to **Meta Box** > **Custom Fields** and create some custom fields.

![Go to Meta Box > Custom Fields to create some custom fields](https://imgur.elightup.com/5TOOpkY.png)

For the first field, choose the type as the **Radio** field. Then, you can fill in some options for choosing into the **Choices** box.

![choose the type as the Radio field, then fill in some options for choosing into the Choices box.](https://imgur.elightup.com/nZC8zqM.png)

Since I want the alert message to go along with another field, I will put both of them into a group. There is no need to have a label for this group, so leave it blank.

![the alert message to go along with another field, so put both of them into a group with blank label](https://imgur.elightup.com/nsMdVS9.png)

This group will appear only when the user chooses the **Yes** option in the **Radio** field, so we will set a conditional logic for this group. Go to the **Advanced** tab in the settings of the group and add the rule.

![Go to the Advanced tab in the settings of the group and add the rule to set the rule when does the alert message apear](https://imgur.elightup.com/RNVU3RY.png)

Fill in the ID of the **Radio** field and the value of the Yes option.

![Fill in the ID of the Radio field and the value of the Yes option](https://imgur.elightup.com/QsSFDQG.png)

Now, add a **Custom HTML** field for the alert. It’ll be a subfield of the group.

![Add the first subfield of the group which has the type as Custom HTML](https://imgur.elightup.com/16tFtXs.png)

Add content for it in the box named **Content (HTML allowed)**.

![Add content for it in the box named Content (HTML allowed)](https://imgur.elightup.com/r0F2LOY.png)

I also added a div tag and classes for this text as `<div class="alert alert-info">` for styling this notification later.

Add the remaining field.

![Add the remaining field. Here is the Text field with the Label is Subject](https://imgur.elightup.com/DWhaLx5.png)

Let’s set the location for these fields. Go to the **Settings** tab, set **Location** as **Post Type**, then choose any post type you want.

![Go to the Settings tab, set Location as Post Type, then choose any post type to set the location of created custom fields](https://imgur.elightup.com/EPpp7rC.png)

Go to the post editor, you will see the fields with the notification.

![the fields with the notification displayed in the post editor](https://imgur.elightup.com/P3U0PpI.png)

The notification is quite not prominent compared to other texts. So, let's style it a little bit.

## 2. Styling the notification

I will use CSS to style the notification. So, go to the theme's files, add this code to declare and create a file named `admin.css`:

```
add_action( 'rwmb_enqueue_scripts', 'enqueue_custom_style' );
function enqueue_custom_style() {
    wp_enqueue_style( 'custom-css', get_template_directory_uri() . '/assets/css/admin.css' );
}
```

![add the code to declare and create a file named admin.css](https://imgur.elightup.com/07s2RAn.png)

Next, go to the file and add some CSS code with the content as follows:

```
.alert-info {
background-color: #d9edf7;
border-color: #bcdff1;
color: #31708f;
}
.alert {
padding: .75rem 1.25rem;
margin-bottom: 1rem;
border: 1px solid transparent;
border-radius: .25rem;
font-weight: bold;
line-height: 2;
display: flex;
align-items: center;
}
```

The `alert` and `alert-info` are two classes that I added in the content of the notification when creating its custom field.

![go to the file, add some CSS code for 2 classes to style the notification](https://imgur.elightup.com/weBA0Mt.png)

Now, go back to a post editor, you will see the message has a new look.

![the final look of the notification](https://imgur.elightup.com/VXxEXSC.png)
