---
title: Migrating from ACF to Meta Box
---
# Migrating custom fields data from ACF to Meta Box

You can easily move data from **ACF** to **Meta Box** with the help of the **MB ACF Migration** plugin. It will save a lot of time and shorten the process dramatically.

## Before getting started

In addition to using the <a href="https://metabox.io/">Meta Box Core Plugin</a>, make sure you already have these extensions:

* <a href="https://metabox.io/plugins/meta-box-builder/">Meta Box Builder</a>: A Meta Box premium extension that provides a UI to create and manage custom fields on the backend;
* <a href="https://metabox.io/plugins/mb-acf-migration/">MB ACF Migration</a>: This extension is also available in the WordPress repo. Besides, if you use Meta Box AIO or Meta Box Core (in the premium bundle), go to **Meta Box** &gt; **Extensions**, and you will see MB ACF Migration in the list. Just tick to enable it.

![Enable the necessary extentions](https://i.imgur.com/Ym7KUMY.png)

Besides these above plugins, remember to install all the Meta Box extensions that correspond to the migrated features. For example, if you have fields in a group created by ACF, you have to enable **Meta Box Group** to migrate the group field data. Or, in ACF, when you set a location to display a field group in taxonomy, you have to activate the **MB Term Meta** extension in Meta Box.

## 1. Checking and backing up the data

**Note**: Remember to back up your data before migrating to avoid unexpected errors.

I have these custom fields created by ACF for example, including **Text**, **Email**, **Gallery**, and **Repeater**. The **Repeater** has three sub-fields: **Checkbox**, **Text**, and **Gallery.**

![Example of created fields created by ACF](https://i.imgur.com/8x1UkKO.png)

!["The repeater has three sub-fields](https://i.imgur.com/Nfsdi9v.png)

Besides, I used conditional logic to display the image field when users choose the **Project Type** as Web Design. The field group that I created by ACF is shown like this:

![The created field group](https://i.imgur.com/5Wa0fr9.gif" )

Make sure that when you migrate custom fields data from ACF to Meta Box, you’ve activated all the necessary plugins, even ACF.

As you can see here in the **Plugin** menu, the ACF has already been activated.

![Activate ACF plugin](https://i.imgur.com/h36TWSK.png)

## 2. Installing Meta Box extensions

As I said before, we need to install extensions that correspond to the features that you used with ACF.

In this case, similar to all the above features in **ACF**, I will use these extensions of Meta Box:

* **Meta Box Group**: to have a group field corresponding to Group + Repeater in ACF
* **MB Conditional Logic**: to have the conditional logic feature.

![Install extensions](https://i.imgur.com/0DtTi2R.png)

## 3. Migrating the data

Go to the **Meta Box** menu &gt; **ACF Migration** &gt; Click the **Migrate** button.

![Migrate the data](https://i.imgur.com/JB0rX9z.png)

When the process finishes, it will show a “Done” message.


:::caution

The **AFC** menu will automatically disappear when the migration process finishes. This is because **Meta Box** turned the ACF plugin off automatically to avoid problems caused by registering the same post type.


:::


## 4. Rechecking the data after migration

Now, you can see that the fields are displayed the same as when you use **ACF**. All the features, like group and conditional logic, also work well.

![Recheck the data after migration](https://i.imgur.com/HRrfX3b.png)

Here are the fields that are shown in the field edit. All the information, such as field group ID and ID of each field, has remained:

![The created fields show in field edit](https://i.imgur.com/GJbguDw.png)

![All the information has remained](https://i.imgur.com/SHaFa9W.png)

And the **ACF** has already been deactivated.

!["ACF has already been deactivated](https://i.imgur.com/G7trDkv.png)

The migration has been done.
