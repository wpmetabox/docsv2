---
title: How to create custom fields?
---

Custom fields are arbitrary extra data attached to posts to provide more information about posts. To create them, you’ll have three options supported by <a href="https://docs.metabox.io/installation/">Meta Box</a> to choose from.

## Install and activate Meta Box

Before getting started, make sure you install and activate the <a href="https://docs.metabox.io/installation/">Meta Box plugin</a>. It’s free and available on <a href="https://wordpress.org/plugins/meta-box/">wordpress.org</a>, you can freely access and download the plugin.

![Install and activate Meta Box](https://i.imgur.com/UVojT23.png)

## Method 1: Create custom fields using Meta Box Builder with UI

To use this method, you need to have <a href="https://metabox.io/plugins/meta-box-builder/">Meta Box Builder</a> extension to create custom fields and modify their settings directly in the admin dashboard with the UI interface.

You can go to **My Account** or **Meta Box AIO** to download and activate it. 

### Step 1: Add new fields

Go to **Meta Box** &gt; **Custom Fields** &gt; **Add New**.

![Add new custom field](https://i.imgur.com/nFBvLEr.png)

This is the UI to help you create a field group without the coding skills required.

![Name a title for the new field group](https://i.imgur.com/vC85CAC.png)

In the **Fields** tab, name a title for the new field group. Click on the **Add Field** then choose your desired fields among more than 40 field types that Meta Box supports.

![Choose the wanted fields among more than 40 types of fields](https://i.imgur.com/EHuKdvC.png)

### Step 2: Configure the settings of custom fields

After selecting the custom fields you need, go to modify the **General Information** for each field.

This section comes with various options which can be categorized into 2 groups below:

Common settings shared by all field types:

![Configure the settings of custom fields](https://i.imgur.com/qlUvy3C.png)

* **Label**: the label of the field;
* **ID**: the ID of the field (required). It will be used as meta_key when saving to the database. You should use numbers, characters, and underscores to name the ID;
* **Type**: choose the field type you want (required);
* **Label Description**: describe the label here. It appears below the field label;
* **Input Description**: describe the field and it will display below the field input;
* **Default value**: this is the default value that will be put in the data entry box;
* **Placeholder**: the placeholder text for the input or search box;
* **Cloneable**: choose to make the field repeatable

For example, I configure common settings of the “**Text**” field like this:

![Configure common settings of the field](https://i.imgur.com/WIGwbap.png)

This is how it will display:

![How the field displays](https://i.imgur.com/XHOXBUH.png)

For more details about field settings, you can read <a href="https://docs.metabox.io/field-settings/">this documentation</a>.

Besides the common settings, some field types such as the Number field, Select field, and Image Upload field also have their special settings.

The **Number** field has extra settings like **Step**, **Min value**, and **Max value**.

![Extra settings of number field](https://i.imgur.com/pyQPGis.png)

The Select field provides an additional section named **Choice** to enter options to select.

![Additional section of Select field](https://i.imgur.com/3zRTBkP.png)

For other special settings, please read the <a href="https://docs.metabox.io/">documentation</a> to understand their usage.

Next, move to set up the **Advanced** settings. These settings are the same for all field types.

Each option has its clear explanation, you can hover over the title to read tooltips or read <a href="https://docs.metabox.io/extensions/meta-box-builder/">the documentation</a>.

![The Advanced settings are the same for all field types](https://i.imgur.com/xrF35n1.png)

### Step 3: Modify the settings of field group

Now, move to the **Settings** tab, and set up the attributes for the field group.

![Modify the settings of field group](https://i.imgur.com/EYdGXOI.png)

* **Location**: choose the location where you want to display the field group;
* **Position**: choose the position to display the field group;

For each location you choose, you’ll have the following rules. They are the features of some extensions like <a href="https://metabox.io/plugins/meta-box-include-exclude/">MB Include Exclude</a>, <a href="https://metabox.io/plugins/meta-box-show-hide/">MB Show Hide</a>, and <a href="https://metabox.io/plugins/meta-box-conditional-logic/">MB Conditional Logic</a>.

![Features of some extensions](https://i.imgur.com/PkY36b0.png)

* **Advanced location rules**: show/hide custom fields only in some pages conditionally by post ID, page template, category, tag, or custom taxonomy;
* **Toggle rules**: show/hide the field group under condition;
* **Conditional logic**: show fields precisely when you want to and not a second sooner.

## Method 2: Create custom fields using online generator

<a href="https://metabox.io/online-generator/">Online Generator</a> is a free tool provided by Meta Box. In case you haven’t had the <a href="https://metabox.io/plugins/meta-box-builder/">Meta Box Builder</a> which is a premium extension of Meta Box, you can use this tool to create custom fields. It provides a UI as well but in a simpler version.

On the <a href="https://metabox.io/online-generator/">Online Generator</a> page, you will see the UI as below:

<img alt="The UI of online generator page" height="686" src="https://i.imgur.com/XuNsf36.png" width="1000">

### Step 1: Create and modify fields

Just choose any field from the list in the first area.

![Create and modify fields](https://i.imgur.com/u3ltPC7.png)

After adding new fields, in the second area, configure their settings as you prefer. Moreover, you can duplicate, delete or reorder them.

![Configure their settings as you prefer](https://i.imgur.com/WR98uqv.png)

Next, in the third area, open the **Settings** tab and modify the settings for the field group.

![Modify the settings of the field group](https://i.imgur.com/9aS2JzJ.png)

**Note**: The field settings in the Online Generator tool are almost similar to the settings in the Meta Box Builder, excluding some advanced settings such as **Advanced location rules**, **Toggle rules,** **Conditional Login**, and **the field group style**. Therefore, you can refer to method 1 to know how to configure custom fields in detail.

### Step 2: Copy code to the plugin

After configuring your custom fields, press the **Generate code** button to get the code of their settings.

![Copy code to the plugin](https://i.imgur.com/l7JfEKk.png)

Then go to your plugin, put the code into it then check the result. In case you haven’t had a plugin, refer to step 1 in method 3 to know how to create a plugin.

![How the field display after adding the code](https://i.imgur.com/pLgiqRw.png)

## Method 3: Create custom fields by coding yourself

In case you don’t want to use a UI to create custom fields, you can code for it. Just follow these following steps.

### Step 1: Create a New Plugin

Go to **wp-content/plugins,** and create a new folder. Then create a php file with the content as below:

```
<?php
/*
Plugin Name: Hotel Price
Plugin URI: https://metabox.io
Description: A quick demo for Meta Box
Version: 1.0
Author: MetaBox.io
Author URI: https://metabox.io
License: GPL2
*/
```

### Step 2: Create fields

In the created php file, hook the rwmb_meta_boxes filter. It has only one parameter which is an array that contains the configuration of meta boxes. In this array, you can add, edit, or delete elements and return them.

Each element of this array serves as a description for meta boxes. It contains field settings to specify where and how data is loaded and saved. You can learn more about field settings <a href="https://docs.metabox.io/field-settings/">here</a>.

```php
add_filter( 'rwmb_meta_boxes', 'hp_metaboxs' );
function hp_metaboxs( $meta_boxes ) {
    $meta_boxes[] = array(
        'title' => 'Hotel Price',
        'fields' => array(
            array(
                'id' => 'price',
                'name' => 'Price',
                'type' => 'number',
            ),
            array(
                'id' => 'availability',
                'name' => 'Availability',
                'type' => 'radio',
                'options' => array(
                    'Available' => 'Available',
                    'Unavailable' => 'Unavailable',
                ),
            ),
        ),
    );
    return $meta_boxes;
}

```
 
Now back to the edit post page, the created meta box will display below the edit area like this:

![The created meta box will display below the edit area like this](https://i.imgur.com/FrF0rJb.png)

To improve the look &amp; feel of these custom fields, you can even <a href="https://metabox.io/add-icon-to-title-custom-fields/">add icons to their titles</a> or <a href="https://metabox.io/use-custom-html-field-output-text-custom-css/">style them using CSS</a>.

Now you can add some data to the fields.

Step 3:
After creating data for custom fields, go to display them on the front-end. You have two options to show them:

1. As Meta Box uses the API of WordPress standards, use any function examined <a href="https://metabox.io/easy-way-to-add-custom-fields-in-wordpress-without-plugins/">here</a> to show the information of custom fields. Further, to add an API to WordPress, refer to <a href="https://docs.metabox.io/extensions/mb-rest-api/#getting-custom-fields-values-in-rest-api-responses">this documentation</a>.
2. Use the <a href="https://docs.metabox.io/displaying-fields/">MB View extension</a> of Meta Box that makes your code to be compatible with other plugins of it.

Next, select the template-parts folder of the theme you’re using, then insert the following code to the content.php file:
```php
<ul>
        <li>
            <strong>Price</strong>: <?php echo rwmb_meta( 'price' ) ?>
        </li>
        <li>
            <strong>Availability</strong>: <?php echo rwmb_meta( 'availability' ) ?>
        </li>
    </ul>
```

Now open the post that we’ve edited and see the result:

![The result after all steps](https://i.imgur.com/cn0pxHM.png)

## Conclusion

We've introduced 3 methods that help save tons of time and effort to create and configure custom fields. Depending on your purpose, choose the method that is most suitable for you. Try it now and if you have any questions, feel free to let us know in the section below.
