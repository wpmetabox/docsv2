---
title: Creating a contact form using Meta Box
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

The contact form makes it simple and reliable for anyone to **leave their information** for buying your product, looking for consulting, or just contacting your brand. And you know what, **Meta Box can help you create a contact form in WordPress very easily**.

I made an example with the most popular form as you can see in the Contact page:

![Contact forms page](https://i.imgur.com/UzbIwwc.png)

## Video Version

<LiteYouTubeEmbed id='tbbdBTcuBBo' />

## Preparation

To get started, we need the [Meta Box core plugin](https://wordpress.org/plugins/meta-box/) to have the framework for creating a custom post type for the contacts and custom fields for the form. You can download it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/).

For the advanced features from Meta Box, we need some of its extensions:

* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the contacts;
* [MB Frontend Submission](https://metabox.io/plugins/mb-frontend-submission/): to create forms that allow users to submit their information from the front end;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to create custom fields;
* [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) (optional): to display contact’s information in the admin screen.

## 1. Creating a custom post type for contacts

Go to **Meta Box** and create a new post type to save the contacts.

![Create a new post type to save the contacts](https://i.imgur.com/gv6YtCj.png)

After that, you will see a new menu for the post type in the admin dashboard.

![A new menu for the post type in the admin dashboard](https://i.imgur.com/R3Aghmg.png)

## 2. Creating custom fields for the form

My form will have some fields as below. In your own case, you may have any other kind of field for users to fill in information. Meta Box has [more than 40 field types](https://youtu.be/WWeaM5vIAwM?feature=shared) that can meet your needs.

![These are some fields that I created](https://i.imgur.com/ZcAZvm0.png)

Go to **Meta Box** and create them.

![Go to Meta Box and create custom fields](https://i.imgur.com/zWrW6ac.png)

You should set some or all the fields as required, and show them as an admin column to have a clear overview of all the contact information in the admin dashboard.

![Set some or all the fields as required, and show them as an admin column](https://i.imgur.com/ORtOrFI.png)

If you want to set this field display as the **Title**, you can set this option as **Replace**, and `title`. It helps to display the field in the place of the title in the admin dashboard, not replace the data saved in the title.

![Set this field display as the Title and set this option as Replace](https://i.imgur.com/O6uphzB.png)

In the event that you want the name filled in the field to be the title of the post, you should replace the **ID** of this field to _post_title_.

![You should replace the ID of this field to post_title](https://i.imgur.com/xG61wbo.png)

After creating all the wanted fields for the form, move to the **Settings tab**, set the **Location** as **Post type**, and select **Contacts** to apply these fields to it.

![Select Contacts to apply these fields](https://i.imgur.com/DxLRYHB.png)

Now, when adding a new post on the **Contacts** post type, you’ll see the fields.

![The Fields after adding a new post on the Contacts post type](https://i.imgur.com/DQhIT2a.png)

After filling in the information, you will see the information display on the admin dashboard as well.

![The information display on the admin dashboard](https://i.imgur.com/R6BbruY.png)

But, this form is just in the backend now. Users must access the admin page to fill in the form. So, we should bring it to the frontend.

## 3. Displaying the form

Create a page for the **Contact page** as usual.

![Create a page for the Contact page](https://i.imgur.com/IDgY5sF.png)

I will bring the custom fields as the form into the content section of this page. So, look for a block named **Submission Form**. This block is available only when you activate the [MB Frontend Submission](https://metabox.io/plugins/mb-frontend-submission/) extension from **Meta Box**.

![Look for a block named Submission Form](https://i.imgur.com/JBD7k1G.png)

As default, just the **Title** and **Content** fields display.

![The Title and Content fields display](https://i.imgur.com/7Ab4l1C.png)

To have the fields on the page, move to the block’s settings, and fill in the **ID** of the field group that we created for the form. All the fields will be displayed immediately.

![ Fill in the ID of the field group to have the fields on the page](https://i.imgur.com/7vlAtaA.png)

I recommend you turn on the option ‘**Enable ajax submission**’. It helps to avoid refreshing the entire page during the submitting process.

![Turn on the option ‘Enable ajax submission’](https://i.imgur.com/dlybQAu.png)

Next, choose the post type as **Contact** to stipulate that the submission will be saved as a post in this post type.

![Choose the post type as Contact to stipulate that the submission will be saved as a post in this post type](https://i.imgur.com/4sxIrY6.png)

You also can remove the **Title** and **Content** field since we do not need them for the contact form.

![Remove the Title and Content field](https://i.imgur.com/CBTanKU.png)

These notification texts also can be changed as you want.

![These notification texts also can be changed as you want](https://i.imgur.com/ilXQC57.png)

Now, go to the page on the frontend. You'll see the form with the custom fields we created.

![The form with the custom fields we created](https://i.imgur.com/Ms1BDlt.png)

Let’s check if the ones I fill into the form are saved or not.

![Fill into the form are saved or not](https://i.imgur.com/TAfCWlz.gif)

It works perfectly!

## 4. Sending email notification

Whenever someone submits the form, the website’s admin should notice it. You can set it to automatically send them an email to notify it.

We should add some lines of code in the theme’s file.

![Add some lines of code in the theme’s file](https://i.imgur.com/qctHKA1.png)

```
add_action( 'rwmb_frontend_after_process', function( $config, $post_id ) {
    if ( 'contact-form' !== $config['id'] ) {
        return;
    }
    $email = rwmb_meta( 'your_email', '', $post_id );
    $name = rwmb_meta( 'your_name', '', $post_id );
    $subject = rwmb_meta( 'subject', '', $post_id );
    $message = rwmb_meta( 'message', '', $post_id );
    $body = "<p>Name: $name</p>
        <p>Email: $email</p>
        <p>Subject: $subject</p>
        <p>Message: $message</p>";

    $headers = ['Content-Type: text/html; charset=UTF-8', 'From: My Site Name <support@example.com>',"Reply-To: $email"];
    wp_mail( 'admin@domain.com', 'New contact message', $body,$headers );
}, 10, 2 );
```

This means that we'll add the hook ``` rwmb_frontend_after_process ``` to run our custom code to send the email.

![Add the hook rwmb_frontend_after_process to run our custom code to send the email](https://i.imgur.com/geDOXKZ.png)

In the email, I want to let the admin know the contact information, so I will get the data submitted to the fields using the ``` rwmb_meta() ``` function.

![Using the rwmb_meta()  function to get the data submitted to the fields ](https://i.imgur.com/rF95EiH.png)

These are the **IDs** of the custom fields that we’ve just created for the form.

![The IDs of the custom fields that we’ve just created for the form](https://i.imgur.com/Cxeay2R.png)

These following lines of code are to display that information in the email.

![Following lines of code are to display that information in the email](https://i.imgur.com/9ykaROD.png)

This line is to set the type of email, how it displays the sender name, and how to reply.

![This line is to set the type of email, how it displays the sender name, and how to reply](https://i.imgur.com/3UmAVSi.png)

'_admin@domain.com_' is the receiver's address who will receive all the notifications about every submission. It should be the email of the admin or anyone who manages the contacts.

![The receiver's address who will receive all the notifications about every submission](https://i.imgur.com/uZty8Bc.png)

From now on, whenever someone submits the form, they will see a new contact in both the admin dashboard and their inbox.

![A new contact will display in both the admin dashboard and their inbox](https://i.imgur.com/P5UonaW.gif)
