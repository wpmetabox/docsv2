---
title: Changing the ID of a Meta Box field
---

You’ll have two methods to update the ID of a Meta Box field without having an effect on existing data.

:::caution

Before going to update the field ID, make sure you [backup your database](https://deluxeblogtips.com/best-wordpress-backup-plugins/) first. The methods described here involve running SQL on your database, which can’t revert. Having backups might help you if there's something wrong.

:::

## Method 1: Running SQL in phpMyAdmin

I’ll change the field’s ID from `location` to `address`.

In phpMyAdmin, you can directly run the SQL UPDATE statement to perform the change. Meta Box [saves each custom field](https://docs.metabox.io/database/) in one row in the post meta table, where the field id is the `meta_key` and the value will be the `meta_value` in the meta table.

So, in phpMyAdmin you only need to run the following SQL:

```
UPDATE wp_postmeta SET meta_key = 'location' WHERE meta_key = 'address'
```

Go to the SQL tab and enter the SQL query above, then click the Run button to execute it.

![Enter the SQL query above in the SQL](https://i.imgur.com/BIl1IaJ.png)

## Method 2: Using a Functionality Plugin

If you can’t access phpMyAdmin, you can create a functionality plugin that can help you perform the same SQL query.

Create a PHP file with the following content:

```php
<?php
/**
* Plugin Name: Update Your ID
* Description: This is the plugin to help you update your ID.
* Version: 1.0.0
* Author: eLightUp
**/

function update_your_id() {
    global $wpdb;
    $wpdb->query( "UPDATE $wpdb->postmeta SET meta_key = 'location' WHERE meta_key = 'address'" );
}

update_your_id();

```

I named the plugin as **Update Your ID**. It has only the `update_your_id` function which runs the SQL query to perform the database update. The SQL query is exactly the same that we have in the previous method.

After creating the file, upload it to the **wp-content/plugins** folder. Then go to **Dashboard** &gt; **Plugins** and activate it. Once activated, the plugin will execute the SQL and change your field ID from location to address.

Then, if you don't want it to run every time your site loads, don't forget to deactivate the plugin. Running it only once is enough.
