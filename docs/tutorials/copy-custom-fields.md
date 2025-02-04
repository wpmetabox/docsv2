---
title: Copying custom fields from sites to sites
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Instead of rebuilding similar custom fields in different sites, you can use the [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/) extension to easily copy them from one site to others with just a few clicks.

In this practice, I already have the original page with the field group available. Then, copy custom fields from this site to the targeted site.

![The original page with the field group is available, but the targeted site has not yet.](https://i.imgur.com/N0IQOgB.png)

As a result, we’ll have two different sites with a similar simple field group like this.

![Two different sites with a similar simple field group](https://i.imgur.com/iQCmPqH.png)

This task will be very easy-to-do with 2 methods:

* Method 1: Add Code to the Theme’s Files
* Method 2: Just Use Meta Box Builder

So let’s see how we do it both ways.

## Video version

<LiteYouTubeEmbed id='0_AOradkfyo'/>

## Benefits of cloning custom fields among sites

Actually, cloning is copying the code of the meta boxes (field groups) / custom fields group created in a site, then embedding it into another site. That gives you the same functionality of these meta boxes and custom fields on the embedded site.

There are some benefits of cloning which you definitely are interested in:

* It helps your embedded website operate with the adequacy of necessary custom fields and its configuration. If you follow method 1, your embedded site will operate with much faster speed because of not installing any plugin for these custom fields beyond our [ultra lightweight Meta Box Framework](https://wordpress.org/plugins/meta-box/).
* You only need to create a series of custom fields on local with an adequate configuration as you want. Then embed code of the needed fields in the targeted sites. That ensures that all of the fields which you [import into the sites](https://docs.metabox.io/tutorials/export-import-custom-fields-meta-box-builder/) have the same settings.
* It may not waste time anymore in the field's configuration with the complex attributions or conditions. You only do once, and clone to the sites you need. That’ll save a lot of time.

**Please note that**:
 Cloning meta boxes among sites is different to cloning a custom field inside a meta box. Learn more about [cloning a custom field](https://docs.metabox.io/cloning-fields/).

## Preparation

Here are the tools we need:

Firstly, we need  [the Meta Box plugin](https://wordpress.org/plugins/meta-box/) on all sites to have a framework to create custom fields. It’s available on [wordpress.org](https://wordpress.org/plugins/meta-box/).

If you follow method 1, add code to the theme’s files, you just need to activate Meta Box Builder on the original site where you create the custom fields. To contrast, in the second method, we need to use this extension on all sites.

## 1. Creating custom fields

Note: If you already have custom fields on your website, you can skip this step.

Create the meta boxes and custom fields inside through the UI of Meta Box Builder. Remember to completely configure all the fields.

In there, you can also concurrently use the other extensions of Meta Box to configure your custom fields as you want, ex: [Meta Box Group](https://docs.metabox.io/extensions/meta-box-group/),[ Meta Box Conditional Logic](https://metabox.io/plugins/meta-box-conditional-logic/), [MB Geolocation](https://docs.metabox.io/extensions/meta-box-geolocation/), etc. Depending on your demand, you can create as many as fields you want and set configuration for them.

I just created a simple field group for example:

![I just created a simple field group](https://i.imgur.com/ucqWsSt.png)

After publishing, the field displayed like this.

![The field group displays.](https://i.imgur.com/ZwcWR4F.png)

## 2. Copying custom fields from one site to another

### 2.1. Method 1:  Adding code to the theme’s files

#### 2.1.1. Exporting Code of the Custom Fields

On the original site, in the field group editor, press the **Get PHP Code** button > **Generate** to automatically generate code.

![Press the Get PHP Code button > Generate to automatically generate code of the field group](https://i.imgur.com/krezr9O.png)

Pay attention to the code. In case you have many fields and you want cloning an individual field only, you may create the corresponding field group containing each needed field.

#### 2.1.2. Embedding code of field group in the targeted site

On the targeted site, go to **Appearance** > **Theme File Editor** and paste the copied code to the `functions.php` file.

![Paste the copied code of the field group to the functions.php file.](https://i.imgur.com/kq3yMwE.png)

**Remarks**:

* The targeted website doesn’t install Meta Box Builder but must install Meta Box Framework to ensure that the embedded code can operate.
* In case the target is the original website used to create fields, let’s deactivate Meta Box Builder on this site before embedding its code.
* If there has been the other code embedded in the functions.php file and it has the same ID with the new code, only the last one can be operated.
* You can embed code of many different field groups in one site but must ensure that the ID of each field group differs from others then all of the field groups can operate. If the field groups’ IDs are iterated, the last one will be prioritized as the 3rd remark point.

![The ID of the field group is iterated](https://i.imgur.com/Zu3A52x.png)

After adding the code into the targeted site, the field group with custom fields will display similar to the original site.

![On the targeted site, the field group with custom fields will display similar to the original site.](https://i.imgur.com/iQCmPqH.png)

### 2.2. Method 2: Using Meta Box Builder

**Note**: In this method, we need to use the Meta Box Builder extension on both the original site and the targeted site.

#### 2.2.1. Exporting code of the custom fields

Go to the **Custom Fields** section, click the **Export** button to export the field group into a file.

![Click the Export button to export the field group into a file.](https://i.imgur.com/8VJUbDL.png)

#### 2.2.2 Importing file to the targeted site

On the targeted site, also move to the **Custom Fields** section, click the **Import** button to import the downloaded file.

![Move to the Custom Fields section, click the Import button to import the downloaded file](https://i.imgur.com/bGLyicp.png)

Now, you can see the field group displays in the page editor. It is the same as it was on the original site.

![The field group displays on both the original site and the targeted site.](https://i.imgur.com/iQCmPqH.png)
