---
title: Creating and configuring custom fields
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

## Video version

<LiteYouTubeEmbed id='_DaFUt92kYY' />

## Before getting started

We need [Meta Box](https://docs.metabox.io/installation/) to create custom fields. It’s free and available on wordpress.org.

![Install Meta Box core plugin](https://i.imgur.com/VN8iwgE.png)

To have a UI on the backend to create custom fields easily, we need **Meta Box Builder**. It’s a premium Meta Box extension. You can download it individually [here](https://metabox.io/plugins/meta-box-builder/) or use Meta Box AIO to have all Meta Box extensions.

In case you haven’t had the Meta Box Builder, you still can create custom fields by using the [Online Generator](https://metabox.io/online-generator/) provided by Meta Box, but it is only a simplified version of the Meta Box Builder. 

## Adding new field group and custom fields

Go to **Meta Box** > **Custom Fields** > **Add New** to create a new field group.

![Add new field group and custom fields](https://i.imgur.com/HemRqin.png)

This is the UI to help you create a field group without touching any line of code. You can name the field group and then add custom fields for it.

![The UI without no coding](https://i.imgur.com/MV3SGdz.png)

In the **Fields** tab, click on the **Add Fields** then you will see a list of field types. You can find the needed fields from the list or search for it in the search box.

![You can find the needed fields from the list or search for it](https://i.imgur.com/VnPr0VJ.png)

Meta Box has **more than 40 field types**, so you can choose any one from the list to input any data you want. For more information about each type, you can refer to [this video](https://youtu.be/WWeaM5vIAwM).

When creating fields, you can drag to rearrange the fields’ order. Or you can duplicate or delete the field depending on your demand.

![You can duplicate or delate the field depending on your demand](https://i.imgur.com/ECKnPMI.png)

If you want to create a group field, add a field in the **Group** type. Then, you can add sub-fields to this group field by clicking the **Add New** button like this.

![You can add the sub=fields](https://i.imgur.com/vFG070v.png)

After adding the fields you want, you can publish the field group. And then, you will see an auto-generated ID based on the name of the field group like this:

![Auto-generated ID based on the name of the field group](https://i.imgur.com/29aMz2X.png)

You also can change this field group ID as you want.

## Configuring the each custom fields

In the settings of each field, you will have two tabs which are **General** and **Advanced**. Let’s get through each one.

### General settings

**Common settings in general**:

All the settings in the **General** settings for each field are the common ones for most of the fields.

![All the settings in the General settinngs for each fiedld are the common ones for most of the fields](https://i.imgur.com/yZNs9CV.png)

As you can see, there are several settings:

* **Label**: to name the field as you want;
* **ID**: it’s required since you cannot publish the field group if you don’t enter the ID of the field. It will be used as meta_key when saving to the database. Normally, the ID will be auto-generated based on the label of the field, but you can also change it on your own. You should use numbers, characters, and underscores to name it;

![Example of the iD](https://i.imgur.com/vLWu3Zd.png)

* **Type**: show the type of the field. You can change it to another field type with keeping the settings such as **Label** and **ID** of the field;

![You can change the field type](https://i.imgur.com/5TWZXtd.png)

* **Label Description**: describe the label here. It appears below the field label;
* **Input Description**: describe the field and it will display below the field input;
* **Placeholder**: the placeholder text for the input or search box;

For example, I choose the **Text** field and configure these three settings like this:

![Example of my settings](https://i.imgur.com/j31ZpVb.png)

This is how they display:

![How it displays](https://i.imgur.com/oSP7p8a.png)

* **Cloneable**: allow you to add more value for the field. You can use this option for every field type, even the **Group** field;

![Cloneable allows you to add more value](https://i.imgur.com/aShzeEg.png)

If you tick to choose **Cloneable** option, you’ll see some further settings inside:

![Some futher settings inside after choosing Cloneable option](https://i.imgur.com/PYGYpHc.png)

The **Sortable** settings allow drag-and-drop to reorder clones. And, the **Clone as multiple settings to save clones in multiple** rows in the database;

After choosing the **Cloneable** option for the field, you can easily add more value for the field by the **Add New** button.

![Easily add more value for the field by clicking Add new button](https://i.imgur.com/A6UxWXk.png)

**Special settings for some fields**:

For the field type such as **Number** and **Text**, there will be these two settings:

* **Prepend Text**: are the text before the input box of the field in the backend;
* **Append Text**: are the text after the input box of the field in the backend;

![Prepend text and append text](https://i.imgur.com/qbA9PVi.png)

These texts will display like this:

![ How these texts will display](https://i.imgur.com/wkiSsJx.png)

For the selection field types such as **Select**, **Checkbox list**,... you will have a **Choices** box to fill in some options. They will be in the form like this:

![For some field types there will be choices box](https://i.imgur.com/e0Zcogs.png)

The left one is the value of the option. And the right one is the label of the option. 

![The left one is the value of the option. And the right one is the label of the option](https://i.imgur.com/zLZw95R.png)

You can follow this structure or read for more format of the option in the instruction below the box.

Still in the fields in the kinds of selection, you also have the **Default value** settings. If you enter a value into this box, you always see an option that has been chosen already in the post editor. Then, the user still can change the options as they want. E.g. The first option of my **Payment Discount** field is also chosen as default like this.

![How it will display](https://i.imgur.com/2TN713A.png)

**Special settings provided by Meta Box extensions**:

With some settings that have hyperlink, they are the settings provided Meta Box extensions.

![With some settings that have hyperlink, they are the settings provided Meta Box extensions](https://i.imgur.com/HmXb1xu.png)

For example:

The **Show as an admin column** settings is provided by the **MB Admin Column**. When you tick to choose it, you will see other settings options for you to choose like this.

![The admin column](https://i.imgur.com/T0hBFUx.png)

These settings will help your field display in the admin area as follows.

![These settings will help your field display in the admin area like this](https://i.imgur.com/3P2dvo2.png)

And, the Columns settings is provided by the **Meta Box Column** extension.

![the Columns settings is provided by the Meta Box Column extension](https://i.imgur.com/XvkBfja.png)

Each row to display the fields will be divided into 12 grids. If you want the fields displayed in columns, just change the number in the box to any number up to 12. For example, to set 3 columns as follows, just set the first field as 4 in the **Columns** box, and the others as 4 as well.

![You can change the number of columns in the box](https://i.imgur.com/swehWP5.png)

If you use the **Meta Box Tooltip** extension, you will have the **Tooltip** setting.

![Tooltip setting](https://i.imgur.com/akiR2vj.png)

This allows you to show the explanation of the field when hovering over the title or the icon.

![The explantion of the field shows](https://i.imgur.com/5s8kLX3.png)

Please note that the settings of the sub-fields also follow the ones of normal fields. 

![the settings of the sub-fields also follow the ones of normal fields](https://i.imgur.com/iuX1q9z.png)

As well as, in the settings of each field, you can hover over the tooltip icons to know clearly about each one option.

![you can hover over the tooltip icons to know clearly about each one option](https://i.imgur.com/unw1nqG.png)

### Advanced settings

In the **Advanced** tab of each field, these settings are the same for all the field types.

![These settings are the same for all the field types](https://i.imgur.com/JI00mGS.png)

* **Before** and **After**: to add HTML before and after the field output;

![Before and After: to add HTML before and after the field output](https://i.imgur.com/yXlTkD8.png)

* **Custom CSS class**: to add your CSS if you want to have custom style;
* **Save field value**: to save the field value into the database. Normally, this option will be chosen in default;
* **Custom sanitize callback**: allow to enter PHP function name for custom sanitization;
* **Custom HTML5 attributes**: if you want some attributes in type of HTML5, refer to [this documentation](https://docs.metabox.io/custom-attributes/) for more details to know how to add it here;
* **Validation**: helps to check the value of the field. Some rules are available in this option. You can also add new rules for your own needs.
* **Custom Settings**: to add your own custom settings. These settings are saved in the field settings as well.

![Custom settings to add your own settings](https://i.imgur.com/La3M0jO.png)

Furthermore, if you use the **MB Conditional Logic** extension, you will have a setting like this:

![The setting like this](https://i.imgur.com/cP953Y8.png)

The conditional logic will allow you to create rules to control the display of the fields.

![The conditional logic will allow you to create rules to control the display of the fields](https://i.imgur.com/E5fvEKS.png)

Each option has its clear explanation, you also see the tooltips of each when hovering over the icon.

For more details about field settings including the general and advanced ones, please read [this documentation](https://docs.metabox.io/field-settings/).

## Configuring the field group

In the field group editor, go to the **Settings** tab and set up the attributes for the field group.

![go to the Settings tab and set up the attributes for the field group](https://i.imgur.com/oSG9ZE7.png)

There are also some settings such as **Conditional Logic**, **Custom CSS class** and **Custom settings** that are the same as settings for the fields in the **Advanced** tab of it. But, the difference is that these settings apply for the whole field group.

The **Location** settings is the most-used setting in every case. It allows you to choose the location where you want to display the field group.

![The Location settings is the most-used setting in every case](https://i.imgur.com/qM43f81.png)

Which location you choose, the corresponding option will be there.

For example, if you choose the **Location** as **Post Type**, which is the one we usually set for custom fields, you will see two settings inside:

* **Advanced location rules**: to add more rules on where to display the field group such as choosing a post, or a page. It’s quite similar to the **Conditional Logic**. You will have this option when installing **Meta Box Include Exclude** extension;

* **Toggle rules**: allow to show/hide this field group under conditions. It is the settings when you install **Meta Box Show Hide** extension;

![Advanced location rules and toggle](https://i.imgur.com/0UGLN5X.png)

The **Position** setting option is to choose the position to display the field group.

![The Position setting option is to choose the position to display the field group](https://i.imgur.com/OjH5keL.png)

If you want to make the field group always collapse in the post editor, choose the **Collapsed by default** option.

**Save data in a custom table** is the settings provided by **MB Custom Table** to optimize the database. For more information, look at [this](https://metabox.io/plugins/mb-custom-table/).

There are also some other special settings if you use more Meta Box extensions. To know more details about each extension, refer to this [documentation](https://docs.metabox.io/extensions/).
