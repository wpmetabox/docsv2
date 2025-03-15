---
title: Export/Import custom fields
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Instead of <a href="https://metabox.io/copy-custom-fields-with-meta-box-builder/">using code to embed custom fields from one site to others</a>, we could use another method supported by <a href="https://metabox.io/plugins/meta-box-builder/">MB Builder</a>. This extension allows you to export/import custom fields fast and easily.

:::info

* This method allows you to choose exporting/importing any field group individually;
* This method allows you to export/import only the field settings, excluding the data that is stored in the fields.

:::

## Video Version

<LiteYouTubeEmbed id='BGVY-5W6d7g'/>

## Preparation

We need the [Meta Box Lite](https://metabox.io/lite/) or **Meta Box AIO** to have **MB Builder** on both websites, the original site and targeted one. This extension provides a UI to create custom fields and the export and import features.

After activating two plugins, you’ll see a new **Meta Box** menu as below:

![Meta Box dashboard menu](https://i.imgur.com/j0HQpBg.png)

## Creating custom fields

On the original site, let’s create some fields. We have a tutorial on creating custom fields with MB Builder, please take a look for more detail [here](https://docs.metabox.io/tutorials/create-custom-fields/).

Here we’ll create a field group named **Author** and export/import its settings to other sites for example.

![Created field group](https://i.imgur.com/W6y5utN.png)

## Exporting field groups and custom fields

To export the custom fields from the original site, go to **Meta Box** > **Custom Fields**. Then, a list of field groups will appear. Choose the ones you want to export by ticking the checkbox.

Next, there are two ways to export the field groups.

If you choose one field group, simply click on its **Export** option like this:

![Click on Export option](https://i.imgur.com/0nfoK7n.png)

In case you export several field groups, press the **Bulk actions** dropdown, then select the **Export** option and **Apply**.

![To choose several field groups, press the Bulk actions](https://i.imgur.com/3uSObWY.png)

After that, the file that contains the data of the selected field groups will be downloaded automatically.

## Importing field groups and custom fields

In the dashboard of the targeted website you want to import the field group, go to **Meta Box** > **Custom Fields** > **Import**.

Then click on **Choose File** and select the downloaded file to import the field group.

![Click on Choose File and select downloaded file](https://i.imgur.com/9975GzX.png)

Then go back to the field groups list in the **Custom Fields** menu on the targeted site, and you’ll see the imported field group is displayed as follows:

![Imported field group is displayed](https://i.imgur.com/pUZ5i4f.png)

To check whether the field group works well, you might create/edit a page or post where the custom fields are located, the fields will display similar to the original website.

![Edit or created a page to check whether the field group works well](https://i.imgur.com/rLSvmBB.png)
