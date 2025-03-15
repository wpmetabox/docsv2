---
title: Changing the ID of a Meta Box field
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

For any reason, you may want to change the ID of the custom field without having an effect on existing data. But, if you only change the ID of the field from the field group settings, the data in the field will be lost. So, how does the data remain intact when changing the field ID? Let’s find it out.

:::caution

Before going to update the field ID, make sure you [backup your database](https://deluxeblogtips.com/best-wordpress-backup-plugins/) first. The methods described here involve running SQL on your database, which can’t revert. Having backups might help you if there's something wrong.

:::

## Video version

<LiteYouTubeEmbed id='VEZSCHtOt5Q' />

## Preparation

Actually, we need the [Meta Box plugin](https://wordpress.org/plugins/meta-box/) only for this practice. Since you have had custom fields on your site already, you obviously have the Meta Box as well.

In addition, I will create the field from scratch for illustration so you can have a clear overview. So, I have the [MB Builder](https://metabox.io/plugins/meta-box-builder/) to create and manage fields visually. It is an extension of Meta Box and available in the [Meta Box Lite](https://metabox.io/lite/) and **Meta Box AIO** as well. In addition, you might want to use some advanced features from other Meta Box extensions, so you also might have them on your site.

Also, you need **permission to access the database** to check and see the changes in the data table.

Let’s start now!

## 1. Creating custom fields

If you have had them already, move on to the next step. Otherwise, if not yet, click on the **Create a field group** button in the dashboard or go to **Custom Fields** submenu and create a new field group.

![Create a new field group](https://i.imgur.com/v1KTezX.png)

I will add a basic custom field for illustration purposes.

![A basic custom field with the ID is address](https://i.imgur.com/on8v8Ue.png)

Don’t forget to move to the **Settings** tab to set the location for the fields.

![Move to the Settings tab to set the location for the field](https://i.imgur.com/gnWZkuZ.png)

The current ID of the field is `address`. After inputting data to the field in some posts, also for illustration purposes, I will take action to change this ID.

Now, just go to the post editor and input data to the field.

![The data was inputted to the field](https://i.imgur.com/673uOvT.png)

## 2. Changing the ID of the custom fields

To avoid losing data, you not only **change the ID in the field group settings** but also need to **change the `meta_key` of the field in the database** to match the new ID.

In this article, I’ll change the field’s ID from `address` to `location`.

### 2.1. Changing the ID of the custom field from the field settings

Go back to the field group to change the ID of the field. Just rename the ID.

![Rename the ID in the field settings](https://i.imgur.com/XXk3yZl.png)

Then, go to the posts, you will see that the change leads to the missing of all the data that you input to the field. The field in all the posts is blank after the change.

![The inputted data is missing](https://i.imgur.com/P04SCyG.png)

If you only change the ID in this way, you must re-enter the data to each post.

### 2.2. Changing the `meta-key` of the field in the database

Normally, Meta Box [saves data of each custom field](https://docs.metabox.io/database/?_gl=1*kowbal*_gcl_au*ODIxMDcyMzgwLjE3MDk2MDk5NTc.) in one row in the post meta table.

![Meta Box saves custom fields in the post meta table of the database](https://i.imgur.com/Tvte0TN.png)

The good news is that even when you may not see the data in the fields, they're still stored in the database. You can see the data that I input into the field in the `meta_value` column, as well as the ID from the initial when I created the field in the `meta_key` column.

![The field ID is stored in the meta_key column, and the data is in the meta_value column](https://i.imgur.com/mLrldJ7.png)

Although I changed the ID of the field, it doesn’t affect the **`meta_key`** on this table. So, to change the field ID without losing data, you should change the **`meta_key`** as well. We can do it easily using a **SQL quer**y in the php My Admin or in the theme file.

#### 2.2.1. Using the phpMyAdmin

If you have permission to access the phpMyAdmin, go to the **SQL** section of the table where you stored the data, and run the following query:

```
UPDATE wp_postmeta SET meta_key = 'location' WHERE meta_key = 'address'
```

![Run the SQL query to change the meta key from address to location](https://i.imgur.com/hzEqgoy.png)

Then, click on the **Go** button to execute it.

![Click the Go button to execute the query](https://i.imgur.com/ARlIkfp.png)

After that, back to the table. The `meta_key` now is the new ID of the field.

![The meta_key now is the new ID of the field](https://i.imgur.com/mRMwPVm.png)

#### 2.2.2. Adding code to the theme file

If you can’t access phpMyAdmin or are just familiar with using PHP, you can use the theme file to perform the same SQL query. The SQL query is exactly the same as we have in the previous method.

Go to the **functions.php** file, and add some lines of code:

```
function update_your_id() {
    global $wpdb;
    $wpdb->query( "UPDATE $wpdb->postmeta SET meta_key = 'location' WHERE meta_key = 'address'" );
}

update_your_id();
```

![Add some code to the theme file to perform the same SQL query](https://i.imgur.com/qlT2WPR.png)

Notice that if you change the theme someday, this will affect your data.

If you can check the data table in the phpMyAdmin now, you also will see the `meta_key` changed.

After changing the ID of the field both in the field settings and database, go to any post where the field is, you will see the data go back.

![The data go back](https://i.imgur.com/673uOvT.png)

That’s how we change the ID of any custom fields created with Meta Box without affecting the existing data in those fields.
