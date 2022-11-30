---
title: Copying custom fields from sites to sites
---

Instead of rebuilding similar custom fields in different sites, you can use the <a href="https://metabox.io/plugins/meta-box-builder/">Meta Box Builder</a> extension to easily copy them from one site to others with just a few clicks.

## Benefits of cloning custom fields from site to sites

Actually, cloning is copying the code of the meta boxes/custom fields group created on a site, then importing it into another site.

On the other hand, you can create a series of custom fields on a local site only with an adequate configuration as you want. Then, import the code of the needed fields to the target sites. **It ensures that all of the fields which you import into the sites have the same settings**.

Moreover, **there is no need to install any extension of Meta Box on the target sites.**

There are some benefits of this:

* You may not worry about having the same request for the same fields but configurations are different among projects. You also stop the memory of how you configure fields escapes you, whether it has the error or not.
* It may not waste time anymore in the field configuration with the complex attributions or conditions. You only do it once, and clone to the sites you need. That’ll save a lot of time.
* Your website runs faster because of not installing any plugin or extensions for these custom fields beyond the Meta Box Framework. Meanwhile, you still have the adequacy of necessary custom fields and their configuration on your website.

## Before getting started

Here are the tools we need:

* <a href="https://wordpress.org/plugins/meta-box/">Meta Box plugin</a>: install this plugin on all sites to have a framework to create custom fields. It’s free and available on <a href="https://wordpress.org/plugins/meta-box/">wordpress.org</a>.
* <a href="https://metabox.io/plugins/meta-box-builder/">Meta Box Builder</a>: activate this extension on the original site where you created the custom fields.

## Creating field groups and custom fields

If you already have custom fields, you can move to the next step. In case you want to create a sample of custom fields and then paste them into sites, let’s do it.

We have another tutorial for this step, please take a look for more detail [here](https://docs.metabox.io/tutorials/create-custom-fields/).

For instance, I created a field group like this:

![The created group field](https://i.imgur.com/a0YcjmB.png)

![Example of the created group field](https://i.imgur.com/hUeyTAx.png)

## Exporting the code of custom fields

Go back to the field group editor. Press the **Get PHP Code button** &gt; **Generate** to generate the code.

![Export the code of custom fields](https://i.imgur.com/Lck73Gd.png)

Next, click on the **Copy** button to copy all the code at once.

Remember that this is the code of a field group, so you’re exporting all the custom fields included in this field group.

If your field group includes several custom fields and you want to clone some specific ones only, you need to separate them into different field groups and then export each one.

## Importing code to another website

Next, on the website where you want to paste the code, go to **Appearance** &gt; **Theme File Editor** and open the `functions.php` file to embed the copied code.

![Import code to another website](https://i.imgur.com/8I12iIG.png)

Then click on the **Update File** button.

**Remarks:**

1. There is no need to install the [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/) on the targeted website, but you must install the [Meta Box](https://wordpress.org/plugins/meta-box/) core plugin on this site to make sure that the embedded code can operate.
2. In case the target is the original website used to create fields, let’s deactivate Meta Box Builder on this site before embedding its code.
3. If the field group IDs are iterated, only the last one is accepted. Therefore, make sure the ID of each field group differs from others so all of them can work.

After embedding the code into another site, the field group with custom fields will display similar to the original site:

![The custom fields will display similar to the original site](https://i.imgur.com/DqD5CzH.png)

