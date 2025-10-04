---
title: Displaying a users list on the frontend
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In this guide, I'll show you how to **use Meta Box to easily display a user list on a page** as well as publish the user accounts **only when they are allowed** by the owners, besides, hide the accounts that users don’t want to publish.

I’ll make the user list as a table like this:

![Example of a users list](https://imgur.elightup.com/UiBK2AF.gif)

## Video version

<LiteYouTubeEmbed id='Lj7ejCAfyT4'/>

## Preparation

In the user list, we can display the default information as names and some extra information. Those extra details will be saved in custom fields created with **Meta Box**.

I will separate the list into pages, limit the number of users displayed on a page, have pagination for it, and also have a searching box that allows us to find any user (as you see in the above image).

These are the tools we need for this practice:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom fields;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to [create custom fields with an intuitive user interface](https://docs.metabox.io/tutorials/create-custom-fields/) (UI) with easy drag-and-drop manipulations on the backend. If you can code to create a custom field, you can skip this extension. But there is another free tool if you still want to use UI, which is the [Online Genera-tor](https://metabox.io/online-generator/).
* [DataTables](https://datatables.net/): It is a library that uses jQuery to add advanced features to tables in HTML. It helps you display and create functions (pagination and search) with tables more easily.

## 1. Creating custom fields

By default, WordPress already has some fields for users to input information. But sometimes, you may need some further information from them. Then, you should create custom fields to save that extra data.

These are some custom fields I will create for this practice as an example.

![Some custom fields I will create for the user list](https://imgur.elightup.com/In9SVPb.png)

In there, the **Publish or not?** field is a special one. This is to choose with two options: Yes or No, also is where users let us know if their account is allowed to display on the list or not.

Go to **Meta Box > Custom Fields** to create a new field group.

![Go to Meta Box > Custom Fields to create fields.](https://imgur.elightup.com/MWTZe9H.png)

For the first field, choose the **Radio** type. It allows adding some options in the **Choices** box for users to choose from. In this case, it’s just publish or not publish. So, I input two options in the Yes/No form, and set the Default value of this field to Yes.

![The Publish or not? field lets us know whether the user wants to publish their account or not.](https://imgur.elightup.com/QKfnu3h.png)

Instead of using the radio field, you can also use some other type, such as Switch, Checkbox, or Select field. They are quite the same for this use.

Other fields are common and typical fields, so just create them as usual. I set no special settings for them.

![Create custom fields as usual for user list](https://imgur.elightup.com/UU5RRXu.png)

After creating all the fields, move to the **Settings** tab and choose **Location** as **User** to display this field group on the User page.

![Set location to display the fields on the User page](https://imgur.elightup.com/xjKIlsN.png)

Now, on the profile page of any user, you will see the fields we have created.

![The fields we have created display on the profile page of any user.](https://imgur.elightup.com/Ijucdis.png)

Just fill in the information.

## 2. Creating a new page

In the real case, you can add the user list to any pre-build page with some other content. But, I will create a new page to display only the user list on the page to keep this practice playing around the main content.

Go to the **Pages** and create a new one as usual.

![Create new page to display a user list](https://imgur.elightup.com/8NMWxVV.png)

I leave this page blank since I will add the user list to it later.

## 3. Displaying a user list on the page

In this practice, I’m providing two ways to display the user list on the page.

* **Using PHP**. We’ll add some lines of code to the theme’s files. It is not as complicated as common thinking. Just follow this practice with some simple git.
* **Using MB Views** from **Meta Box**. This way, you will not touch any theme’s file. This plugin also helps to simplify the code a little bit, even if it is simple already, and the list will not be affected when you change the theme. So, I highly recommend this method.

### 3.1. Method 1: Using PHP

#### 3.1.1. Creating a template

We should create a template for the page first. So, go to the theme folder and create a new php file.

![Go to the theme folder and create a new php file](https://imgur.elightup.com/gmCmKoG.png)

Now, add some codes to the file.

```
<?php
/*
*    Template Name: Users Listing Page
*/
?>
<?php get_header(); ?>
<h1>Users List</h1>
<table id="Userslist">
    <thead>
        <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
        </tr>
    </thead>
<tbody>
        </tbody>
    <tfoot>
        <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
        </tr>
    </tfoot>
</table>
<?php get_footer(); ?>
```
![Add some codes to the php file](https://imgur.elightup.com/OQMeTI8.png)

**In there**:

`<?php get_header(); ?> and <?php get_footer(); ?>`: is to display the default header and footer of your website.

These lines of code in the image below are for the table, and it’s quite familiar since it’s the same as the table you usually add to a post.

![These lines of code are for the table.](https://imgur.elightup.com/jHpkjNP.png)

Pay attention that I named this table with an ID as `Userslist`. We will use it for JavaScript later.

Go to the page editor and apply the created template to it.

![Apply the created template to the page](https://imgur.elightup.com/YlGdmhj.png)

Then, on the frontend, you will see the page with the table like this. Just the titles of the table display.

![The page with the table](https://imgur.elightup.com/mSKI5D3.png)

#### 3.1.2. Getting the user information

Now, back to the template file to edit the code. We will get the data and insert it into the body of the table.

But first, we will add some code to add a condition for display users since we have a field to choose to display the user or not.

```
$users = get_users( [
    'meta_key'   => 'publish_account',
    'meta_value' => 'yes',
] );
```
![Add some code to add a condition for display users](https://imgur.elightup.com/65NNY2n.png)

We use the `$users = get_users` function to get the user information. This condition based on the value saved in the **Publish or not?** field. So, the key will be the ID of the field, which is `publish_account`. And `yes` is the value of the option, which means users allow us to display their information. Hence, these lines, which I have added, help to get only users who choose the **Yes** option in the field.

Next, let’s get information from each user.

We have multiple users, so we should use a loop to get all of them.

```
<?php
        foreach ($users as $user) { $user_id = $user->ID; ?>
        <tr>
                <td><?php echo $user->display_name; ?></td>
                <td><?php echo rwmb_meta( 'position', array( 'object_type' => 'user' ), $user_id ); ?></td>
                <td><?php echo rwmb_meta( 'office', array( 'object_type' => 'user' ), $user_id ); ?></td>
                <td><?php echo rwmb_meta( 'age', array( 'object_type' => 'user' ), $user_id ); ?></td>
                <td><?php echo rwmb_meta( 'start_date', array( 'object_type' => 'user' ), $user_id ); ?></td>
                <td>$<?php echo number_format(rwmb_meta( 'salary', array( 'object_type' => 'user' ), $user_id ),3,",","."); ?></td>
</tr>
<?php } ?>
```

![Use a loop to get all users](https://imgur.elightup.com/WdW5f0p.png)

**In there**:

* `$user_id = $user->ID`: this function helps to get user ID and assign it to `$user_id`.
* `$user->display_name`: we use this function to display the user’s names since the name of each user is from a default field provided by WordPress.
* `rwmb_meta( )`: this function helps to get the data from the fields. For example, we use `rwmb_meta( 'position', array( 'object_type' => 'user' ), $user_id )` to get the value of the field with the position ID from the user’s ID.
* `array( 'object_type' => 'user' )`: regulates that only data from the field assigned to the User object will be obtained.

Then, the table on the frontend has this look for now.

![The table on the frontend](https://imgur.elightup.com/cexAMSU.png)

#### 3.1.3. Adding functions to the table

There is a problem that my list just has under 100 users but it looks pretty long. So, if the number of users on your website is much more than that, you will not be able to display it in just one page as above. That's why we should use the DataTables library. This tool will help us paging, sorting, and searching data in tables more easily.

Back to the template file, add this line to register the CSS library of **DataTables**.

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/datatables@1.10.18/media/css/jquery.dataTables.min.css" />
```

![Add code to register the CSS library of DataTables.](https://imgur.elightup.com/fdKJ6jJ.png)

These codes below are to declare the JavaScript libraries, including the one from **DataTables**.

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/datatables@1.10.18/media/js/jquery.dataTables.min.js"></script>
```

![Add code to declare the JavaScript libraries, including the one from DataTables.](https://imgur.elightup.com/rsrXwaJ.png)

Next, add the following script that helps to use the **DataTables** library.

```
(function ($) {
    $(document).ready(function () {
        $('#Userslist').DataTable();
    });
})(jQuery);

```

![Add the script that helps to use the DataTables library.](https://imgur.elightup.com/hJseIp9.png)

Please note that `Userslist` is the ID of the table that we added above. And, the library will do everything to add paging, sorting, and searching functions for you. However, in the event that you want to customize the tables more, there are also many [other customization options from the library](https://datatables.net/examples/index) that you can refer to!

Go to the page, and you can see the user list with those functions as you want.

![The user list with functions as you want.](https://imgur.elightup.com/UiBK2AF.gif)

Visit [here](https://github.com/wpmetabox/tutorials/tree/master/list-users) to see the full source code:

###  3.2. Method 2: Using MB Views

We also need to create a template for the page. But, I won’t go to the theme folder. Instead, just go to **Meta Box** > **Views**, and create a new template.

![Go to Meta Box > Views, and create a new template](https://imgur.elightup.com/w8KhHP7.png)

#### 3.2.1. Getting the user information

First, add the condition.

![Add the condition](https://imgur.elightup.com/nsHtNXu.png)

In the same way, in using PHP, the key will be `publish_account`, the ID of the field. And `yes` is the value of the option.

Now, let’s get the user’s information. Also, use the `mb.get_users( )` function to get users.

![Use the mb.get_users( ) function to get users.](https://imgur.elightup.com/nSC8XrZ.png)

As well, add a loop.

![Add a loop](https://imgur.elightup.com/X7M5WEO.png)

Inside the loop, we will get data from default fields and custom fields. Instead of adding code for this, we will insert fields directly from the list on the right sidebar.

![Insert fields directly from the list on the right sidebar.](https://imgur.elightup.com/dDut7Dx.png)

Here are all the fields we insert:

![All the fields we insert](https://imgur.elightup.com/1DfpUkr.png)

That’s all the information about the user I will get in this practice.

Go to the **Settings** section of the view, set the type of the template as **Singular**. And choose the created page.

![Set the type of the template](https://imgur.elightup.com/meVqiTP.png)

In the event that you want to input the table in any other place, it also provides other options that match your need. If not, just set the type as shortcode, then embed it anywhere. It always works.

Go to the page on the frontend, you will see the data displayed without the table.

![The data displayed without the table.](https://imgur.elightup.com/U5irC5K.png)

#### 3.2.2. Adding the table format

Back to the template in the views, add a heading for the table.

![Add a heading for the table](https://imgur.elightup.com/lqN2NGh.png)

 And, add some code for the table. They are exactly the same as the ones we use with PHP, also as the one we usually use for a table.

![Add some code for the table](https://imgur.elightup.com/1c4mg3K.png)

I also added the loop, which is exactly the same as the loop we created before:

![Add a loop](https://imgur.elightup.com/misy24Z.png)

Now, move each line in this image to the loop in the table.

![Move each line in this image to the loop in the table](https://imgur.elightup.com/4frdEgB.gif)

There is a table on the page now.

![There is a table on the page.](https://imgur.elightup.com/cexAMSU.png)

#### 3.2.3. Adding functions to the table

Once again, go back to the template to add paging, sorting, and searching to the table.

The same with the first method, add three lines at the top and bottom to declare the libraries.

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/datatables@1.10.18/media/css/jquery.dataTables.min.css" />
```

![Add the line at the top to declare the libraries.](https://imgur.elightup.com/vEB1r3F.png)

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/datatables@1.10.18/media/js/jquery.dataTables.min.js"></script>
```

![Add these lines at the bottom to declare the libraries.](https://imgur.elightup.com/rA41uza.png)

Then, go to the **JavaScript** tab, add the same script as method 1. This helps to apply the **DataTables** library to the table.

```
(function ($) {
    $(document).ready(function () {
        $('#Userslist').DataTable();
    });
})(jQuery);
```

![Add CSS to the JavaScript tab](https://imgur.elightup.com/sAdp8xM.png)

`Userslist` still is the ID of the table. As mentioned, the library will do everything to add paging, sorting, and searching functions for you.

And, this is the table with those functions in the final result. The pagination works well, and you can also search for any user.

![The user list table with wanted functions](https://imgur.elightup.com/UiBK2AF.gif)

We have finished **displaying a user list on the frontend** with two methods: using PHP and using MB Views. In the case that you want to do something more for your user, there's something that you may want to dig into: how to [create a custom avatar for users](https://docs.metabox.io/tutorials/create-custom-avatar/) or how to [create a custom user profile page on frontend](https://docs.metabox.io/tutorials/create-user-profile-page/) to avoid accessing the backend from unexpected users. Thanks for reading!
