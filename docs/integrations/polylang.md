---
title: Meta Box - Polylang integration
sidebar_label: Polylang
---

Integration with Polylang offers an intuitive interface to translate both values and labels of all objects, including post types, taxonomies, custom fields, settings pages, and relationships. It works smoothly whether you're using Polylang or Polylang Pro.

Especially, the UI for translating Meta Box field values is the standout feature of this integration, instead of using the `wpml-config.xml` file as Polylang documentation.

## Configuration

After installing Polylang on your site, the setup wizard is automatically launched with all the necessary steps to configure easily a multilingual website.

In there, two of the most essential setup steps are the site languages and the menus.

### Site languages

In the case that you skip the setup wizard, go to **Languages** > **Setup** to add the languages for your site. Then, you should define at least one language by choosing from a list of over 90 predefined languages or creating a custom one. The first language you add becomes the default language of your multilingual website.

![Setup the languages](https://i.imgur.com/sSF8iW4.png)

On this screen, you also can configure media, content, and homepage in the next steps. Click on the **Continue** button to set them up.

### Menus

This focuses on displaying and customizing the switch language button on the frontend.

Go to **Appearance** > **Menus**, then follow these steps:

![Set up the language switcher menu](https://i.imgur.com/lIG0mgX.png)

1. Click on the **Screen option** button to enable the **Language switcher** option.
2. Select the position of the menu or create a new menu
3. In the **Add menu items** section, navigate to the **Language switcher** tab, check the box, and click on the **Add to menu** button.
4. In the **Languages** tab, check the appropriate options to configure the language switcher and its interface.

Note that the language switcher will display a language only if at least one post or one page has been published in this language.

If you haven’t seen the switcher on the frontend, save your change in the **Manage Locations** tab.

## Overview

Each Meta Box object includes the **value** (data) and **label** (configuration). Meta Box - Polylang integration allows you to translate both of them.

In terms of labels, you can input translations directly without any additional configuration. They are strings in the **Translations** table already. For convenience, Meta Box provides filters based on objects along with their name, as you can see below:

![Meta Box provides filters based on objects to translate labels easily](https://i.imgur.com/uXuszXC.png)

So, you can translate labels of post types, taxonomies, fields/field groups, and settings page. You should use them to avoid missing any labels instead of using the search bar.

:::note

Labels must have a value in order to be translated (for example: The “Add more” text of a cloneable field or custom submit button of a settings page). If the label is empty or not set, the translation feature will be skipped for that label.

:::

To translate values, depending on the object you want to translate, there will be corresponding translation methods:

* Values of post types (posts) and taxonomy (terms): Activate languages in the **Settings** submenu, then input translation directly in the post editor and taxonomy admin.
* Field values: Create a wpml-config.xml file that defines the translation action and field ID you need to translate.
* Settings page field values: Simply switch the language on the top bar and enter the translation without any settings.

To display translation on the frontend, you can use MB Views, a page builder or code.

## Post types

For example, I [created a post type](https://docs.metabox.io/tutorials/create-custom-post-types-taxonomies/) named Events. Now, our goal is to translate its labels and posts.

### Post type labels

Go to **Languages** > **Translations**. Then, find the **Meta Box Post Type** option with the name you want from the dropdown list, and click **Filter** to have all the labels of that post type. Simply enter the translations one by one.

![Filter by Meta Box Post type to translate post type labels](https://i.imgur.com/VteWkxg.png)

After saving the changes, the translation updated immediately.

![The translations of post type labels are displayed](https://i.imgur.com/Wp55M8G.png)

### Post type values

First, you need to activate languages and translations for the custom post type.

Go to **Languages** > **Settings**. Then, click on the **Settings** button in the **Custom post types and Taxonomies** option to activate the translations feature for it.

![Activate languages and translations for the custom post type](https://i.imgur.com/1Y9GNLM.png)

After that, go to the post editor to enter the translation for posts. There is a section named **Languages** on the right panel. You can enter the title translation into the box, or click on the “**+**” button to switch to the post in the corresponding language and input the translation of the title and description of the post.

![Click on the + button to input the translation for the posts](https://i.imgur.com/vjn0e4G.png)

The icon will be changed to Edit when that language has the translation version.

![The icon is changed to edit](https://i.imgur.com/MJw5Ous.png)

Now, in the post type admin, that translation is displayed when you switch the language.

![The translation of posts is displayed](https://i.imgur.com/Jy4uLuW.png)

## Taxonomies

Translating custom taxonomy labels and values is the same as translating post types.

### Taxonomy labels

In the **Translation** submenu, filter strings by **Meta Box Taxonomy**. Then, just switch the language in the top bar and enter translation for labels one by one.

![Filter by Meta Box taxonomy to translate taxonomy labels](https://i.imgur.com/e7swwEM.png)

After saving translations, you can see they are output like this:

![The translations of taxonomy labels are displayed](https://i.imgur.com/o172sjp.png)

### Taxonomy values

To translate terms of taxonomy, you need to activate languages and translations of that taxonomy and the post type that the taxonomy is assigned to.

They are all located in the **Custom post types and Taxonomies** option.

![Activate languages and translations for the custom post type and taxonomy](https://i.imgur.com/AL0oeiu.png)

Then, in the taxonomy admin, you have two positions to add translations for the term like this:

![Input translations for terms](https://i.imgur.com/exCEMLN.png)

## Custom fields

### Field labels

Meta Box - Polylang integration allows you to translate labels easily, including field group name, `field label`,  `label description`, `input description`, `default value`, `placeholder`, and `adding more text` of cloneable field/group.

Assuming that we need to translate these labels:

![The field labels need to translate](https://i.imgur.com/MC70T2x.png)

Navigate to **Languages** > **Translations**. In the list of filters, you can see **Meta Box Field Group**. In this case, I set the language as Show all languages to fill in the translations for all languages at the same time.

![Filter by Meta Box Field group to translate field labels](https://i.imgur.com/B8Uqixa.png)

Go to the post editor, you can see the translation of field labels.

![The translations of field labels are displayed](https://i.imgur.com/03TVVw1.png)

### Field values

Instead of editing the `wpml-config.xml` file manually as previously, you can now translate field values and manage translations directly with a user-friendly interface. Translating is easy for both developers and non-developers. 

Right in the **Settings** tab of the field group, there is a new setting named **Translation**, along with 4 options:

* Do not translate any fields in this field group
* Translate all fields in this field group
* Synchronize values across languages
* Set translation mode per field

![The translation setting offers options to translate the field group](https://i.imgur.com/0u6oMI9.png)

When you choose the fourth option, a pop-up includes all the fields and groups with three translation methods:

* **Ignore**: The field value will NOT be copied to the new translation. And you can add the new value as you want.
* **Translate**: The field value will be copied to the new translation, and you can edit it without affecting the other translations
* **Synchronize**: The field value will be synced to all translations whenever you make changes to any translation.

![Choose the translation mode for each field](https://i.imgur.com/Ixa2BhO.png)

:::note

* If you have a group, you can only set the translation mode at the group level. All subfields will follow the same translation mode as the group.
* For object-based fields (e.g., image, file, post, term, user), when the translation mode is set to `translate`, the Meta Box – Polylang integration will copy the **ID of the original object** instead of linking to its translated version.

:::

If you use code, you can also translate the values of fields and field groups. Just add the `translation` property, which supports the following values (corresponding translation mode with UI):

* `ignore`: The field group/field value will be left blank in the newly created translation.
* `translate`: The value will be copied and can be edited.
* `copy`: The value will be synced to all translations
* `advanced`: Enable custom translation settings for each field.

For example, to translate the `address` field, the code as below:

![Translate field values using code](https://i.imgur.com/OTgSY8K.png)

Then, the field in the post editor is ready for enter the translation with the default value as the field value of the default language.

![Enter the translation for the values](https://i.imgur.com/cslzgAq.png)

## Settings pages

### Settings page labels

Similar to translating labels of other objects, this integration helps you filter and translate the settings page labels quickly.

Go to the **Translation** submenu, then filter strings by **Meta Box Settings Page**:

![Filter by Meta Box Settings Page to translate settings page labels](https://i.imgur.com/D8yMzvA.png)

Even when you have custom fields on the settings page, the Meta Box - Polylang integration works well for translating field labels. Also, filter by **Meta Box Field Group** to enter translations for them.

![Filter by Meta Box Field group to translate settings page field labels](https://i.imgur.com/Cv10qfd.png)

In the settings page, all the labels are switched to the corresponding language seamlessly.

![The translations of setting page labels are displayed](https://i.imgur.com/5GGEM21.png)

### Settings page field values

Translating field values in the settings page is simplest since you can enter the translation directly without any additional configuration. 

![Translate values of settings page fields](https://i.imgur.com/NAevAVT.gif)

Besides, you can still filter strings by **MB Settings Page** in the **Translation** table as other labels.

![Filter by MB Settings Page to translate settings page field values](https://i.imgur.com/fLdiIZw.png)

:::caution

When you delete a value from one language on the settings page, the values from other languages are auto-deleted. It happens with not only the Meta Box settings page but also WordPress settings (For instance, site title or site description in **General** settings)

:::

## Relationship labels

In the Translations submenu, filter strings by **Meta Box Relationship** to input the translation for the relationship labels:

![Translate relationship labels](https://i.imgur.com/q3UL2Qa.png)

Then, in the post editor, they transfer well when you change the language

![The relationship labels are translated](https://i.imgur.com/4Dn6t9O.png)
