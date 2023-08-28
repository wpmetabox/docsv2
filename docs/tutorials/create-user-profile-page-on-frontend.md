---
title: Creating user profile page on the frontend
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

WordPress allows you to add more users to your website, but only from the backend. To let visitors register and manage accounts on the frontend, you can **create a user profile page** and also add custom fields for them to fill in their information. If you are using the Meta Box plugin, you can do it easily.

This is the user profile page I’ll create in this tutorial for example.

![The user profile page](https://i.imgur.com/3myNEDx.png)

## Video version

<LiteYouTubeEmbed id='SWts1bnqjRA'/>

## Preparation

Specifically, users will be able to register an account and log in as usual. They will have the ability to change their password on a separate page. Further, on the user profile page, you can display some fields that allow users to edit their account information. It may include some WordPress default fields and also custom fields that I create for some further information.

![The WordPress default field and the other fields in the user profile page.](https://i.imgur.com/G3d8JhK.png)

These are some tools we need for this tutorial:

First, we have [the Meta Box framework](https://wordpress.org/plugins/meta-box/). It’s available on [wordpress.org](https://wordpress.org/plugins/meta-box/).

Moreover, we’ll need some advanced features from Meta Box extensions. You can download them individually or use **Meta Box AIO** to have them all.

To create custom fields for users, we need to use [MB User Meta](https://metabox.io/plugins/mb-user-meta/) or [MB User Profile](https://metabox.io/plugins/mb-user-profile/). In this practice, we definitely have to use **MB User Profile** for creating the register page, login page, and user profile page on the frontend. If you do not use **Meta Box AIO**, you don't need to use **MB User Meta**. Otherwise, if you have the **Meta Box AIO**, it will require you to enable the **MB User Meta** extension.

Finally, [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/) helps create custom fields.

## Allowing users to register an account

Simply go to the **Settings** menu > **General**, then check the box **Anyone can register** in the **Membership** section.

![The settings allows users to register an account.](https://i.imgur.com/VTZURFF.png)

Furthermore, you can set the default role for the new user in the **New User Default Role** section. There are some options.

![Set the default role for the new user](https://i.imgur.com/ddrBXl6.png)

## Creating custom fields

When using the **MB User Profile** extension of **Meta Box**, it’ll provide some fields to create a registration page on the frontend. However, it only includes four fields, as the image shows.

![The MB User Profile extension of Meta Box provides some fields to create a registration page.](https://i.imgur.com/xs2yGbK.png)

If you want users to provide additional information, you should create custom fields.

And, by default, WordPress already has fields for users to input information like this.

![WordPress already has fields for users to input information](https://i.imgur.com/ySmt9YQ.png)

But these fields can only be filled from the backend. Sometimes, you may not want your users to access the backend and prefer them to input information directly from the frontend. To do that, we’ll create some custom fields to be the alternative to these fields. This way, users can enter the matching information, which will be automatically transferred into the corresponding WordPress fields.

Just go to the **Meta Box** > **Custom Fields** > **Add New**  to create some fields. I’ll create 3 fields to replace the 3 default fields in WordPress.

![Create 3 fields to replace the 3 default fields in WordPress](https://i.imgur.com/SeQBcOa.png)

Pay attention to setting these fields to be alternatives to the default fields. This means that when the user fills in the created fields, that data will also be entered into the default fields. To do that, we need to make sure the **ID** of the custom field is the same as the **ID** of the matching default field.

For example, WordPress sets the **First Name** field as `first_name`, so I set my field with the ID as `first_name` as well.

![Set the ID of the First Name field](https://i.imgur.com/tF4X8Et.png)

After creating all the necessary fields, move to the **Settings** tab and remember to set **Location** as **User**.

![In the Settings tab, remember to set Location as User](https://i.imgur.com/murAhYE.png)

Once you have published, the field group ID will be generated automatically. But, you can also fill out the ID on your own. We’ll use it in the next step.

![The field group ID](https://i.imgur.com/EJg3hjL.png)

## Creating the registration page

Let’s create a new page for registration.

As I mentioned before, the **MB User Profile** extension of **Meta Box** will provide a form like this. 

![The MB User Profile extension of Meta Box provides a registration form](https://i.imgur.com/h0rvEj2.png)

To create the form, in the page editor, select the **Registration Form** block provided by the **MB User Profile** extension.

![Select the Registration Form block](https://i.imgur.com/VZnpKnO.png)

It should be a form with the username, password, and email fields. But I logged in with an admin account to do this practice, there will be a message.

![A message displays instead of a form](https://i.imgur.com/HUklAYD.png)

The form will display when you go to the page without any login as I showed before. And, you can register an account. However, this page just has some basic information about the account. If you want the user to add some other information that matches the WordPress default fields, I’ll display the created custom fields in this area.

![The place where created custom fields display](https://i.imgur.com/v7WZNHk.png)

Go back to edit the registration page. In the settings of the **Registration Form** block that we’ve just added, fill in the **ID** of the field group that we created.

![In the settings of the Registration Form block, fill in the ID of the field group](https://i.imgur.com/xBPJPoD.png)

This is the **ID** that I set when creating the field group for the previous registration form. After filling out the **ID**, you won’t see anything new on the page in the backend. You need to go to the frontend to see the differences. Now, the 3 created fields appear here.

![The 3 created fields appear](https://i.imgur.com/HO32v7d.png)

Just create a new account for testing, then move to the admin dashboard, you’ll see the new account. And the provided information is also saved in both the default and custom fields.

![The new account in the admin dashboard](https://i.imgur.com/5irUqb6.png)

## Creating the login page

After registering for an account, users will need a page where they can log in and manage their account information.

Go to the **Pages** > **Add New** to create a new one. Usually, there'll be 2 fields that are username or email and password in the login form. These types of fields are automatically generated by **MB User Profile** within a block named **Login Form**.

![Choose the Login Form](https://i.imgur.com/TNBOLy4.png)

Similar to the registration page, as I'm logged in with an admin account, I don't see the login form; instead, I only see a message.

The form will display when you go to the page without logging in.

![The form will display without logging in.](https://i.imgur.com/Z6gEJnF.png)

Now you can login to your account.

## Create the change password page

You may also need the page that allows users to change their password. Let’s create a new page as usual. Add the **Edit Profile Form** block provided by the **MB User Profile** extension of Meta Box as well.

![Add the Edit Profile Form block](https://i.imgur.com/4JTr6SY.png)

In the box below, fill in the **ID**. Then, you’ll see these 2 fields displayed immediately.

![Fill in the ID in the settings of the Edit Profile Form block ](https://i.imgur.com/mwxs1uU.png)

On the right sidebar, you can also customize the form by changing some settings.

For example, change the label of the button.

![Change the label of the button](https://i.imgur.com/Q5QXklc.png)

To access the **Change Password** page, users must log in to their account first. After logging in, you can see the page that I’ve just created allowing users to change their password.

![The Change Password page](https://i.imgur.com/77H2E9v.png)

## Creating the user profile page

Usually, users need to access the backend to view and modify their account information. However, if you want to restrict users from entering the backend and only allow them to access the frontend, you can create a user profile page to display their account information, as I showed at the beginning of this tutorial.

As I said, the user profile page will contain the WordPress default fields. Further, you can add other fields to display additional information. They’re from custom fields that we’ll create later.

### Displaying default fields

Now, create a new page. 
 
On the user profile page, add the **Edit Profile Form** block, which is provided by **MB User Profile**.

![Add the Edit Profile Form block,](https://i.imgur.com/A7m4J9B.png)

In the block settings, enter the **ID** that I previously created a field group with three default fields into the section. Then, you will see 3 fields displayed on the page immediately.

![In the Edit Profile Form block settings, enter the ID of field group with three default fields](https://i.imgur.com/LOSSY7v.png)

Go back to the frontend, and you can see the user profile page with some personal information.

![The user profile page with some personal information.](https://i.imgur.com/zFOziMH.png)

It already has the account information that I have logged in to, and you can completely edit it.  Next, let’s add some additional fields to this page.

### Creating and displaying additional fields

Go to **Meta Box** and create a new field group.

![Go to Meta Box and create a new field group](https://i.imgur.com/CTtGlJY.png)

You can add any type of field that saves any kind of information you want. There’s no specific requirement for these fields.

Once you have created all the fields, move to the **Settings** tab and remember to set **Location** as **User**.

![Set the location to the new field group.](https://i.imgur.com/w9cwTjs.png)

We’ll use the field group **ID** later.

![the field group ID](https://i.imgur.com/YLaDLsr.png)

Next, go back to edit the user profile page. In the section in the image below, also fill in the **ID** of the created fields.

![Fill in the ID of the created fields](https://i.imgur.com/fMF8dNK.png)

Then, the fields display on the page immediately. You also can customize the form by changing some settings on the right sidebar.

On the frontend, you will see these fields appear.

![The user profile page with both personal information and additional information](https://i.imgur.com/3myNEDx.png)

Now, you can fill in the additional information and save it on this user profile page.

## Final words

To finalize all the forms, you should change the settings of each block provided by [MB User Profile](https://docs.metabox.io/extensions/mb-user-profile/) as well as style the fields for better display. For your quick reference, we have a tutorial for styling custom fields using CSS in [this post](https://metabox.io/style-meta-boxs-custom-fields-using-css/).

We hope that with these tools and tutorials, you can easily make your own custom user profile page and get a lot of users. And note that you should use [a transactional email service](https://metabox.io/free-transactional-email-services/) to notify your users after they successfully register an account on your site. That will help you become more professional.

We also have [a tutorial](https://github.com/wpmetabox/docsv2/blob/tutorial/docs/tutorials/add-guest-author-guest-posts.md) about adding Guest Author, which is quite similar to creating a user profile page so I guess you may also like it.

Cheers!
