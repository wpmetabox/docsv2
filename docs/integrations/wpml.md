---
title: Meta Box - WPML Integration
sidebar_label: WPML
---

WPML (**WPML Multilingual CMS**) seamlessly integrates with Meta Box, allowing you to easily translate data (both values and labels) of various objects, including posts, taxonomies, custom fields, settings pages, relationships, and users.

## Before you start

Log in to your [WPML account](https://wpml.org/account/downloads/), and download the **OTGS Installer**, then upload it to your WordPress site.

Besides, you may need to install some or one of the [WPML add-on plugins](https://wpml.org/documentation/wpml-core-and-add-on-plugins/) for several translation cases of custom fields, that will be indicated in detail in this documentation.

Now, you should make sure that you set up WPML already, including the site languages and the language switcher.

Go to **WPML** > **Setup Wizard** to start setting up WPML.

### Site languages

The WPML setup wizard is a short process for configuring WPML on your site. It helps you choose which languages to translate your website into, decide whether to use subdirectories or different domains for your translated URLs, and install any additional addons.

Setting up the site language is the first step.

![WPML setup interface](https://i.imgur.com/HGQSHPm.png)

This section allows you to choose the languages from the list of 65 languages. In there, you also can regulate which is the default language, and which are custom ones. Also, create a custom language if you can't find languages that you need in the list.

After setting up languages, they will appear in the admin bar, allowing you to switch between languages easily for configuration or enter the translations accordingly in the backend.

![The languages on the admin bar](https://i.imgur.com/WEczWMo.png)

### Language switcher

As its name says, this is to switch between languages on the frontend. It will be a form as a button or item in a menu.

Scroll down to the **Menu Language Switcher** section and add a new one.

![Set up the language switcher](https://i.imgur.com/z7aqo89.png)

Your new language switcher will now appear next to your navigation menus.

![The language switcher on the frontend allows transform the language](https://i.imgur.com/Nsnkfx9.png)

:::caution Notice

If you don’t set it up, there is nothing on the page to change the language to another one. So, the translation versions of all elements including the custom fields are not shown even when they are already existing.

:::

## Overview and typical route of translating data from Meta Box

The available deep compatibility between Meta Box and WPML allows you to translate many objects, as well as the values of their custom fields directly.

In essence, each Meta Box object has two components: configuration (label) and data (value). For example, a custom post type includes its settings (plural name, singular name, etc.) and the posts within it. Similarly, a field group consists of its configuration and the fields displayed in the post editor for entering values.

To translate values, you should follow three steps to translate any object on your site:

1. Make that post type, taxonomy, and custom field translatable (in the **Settings** submenu in WPML).
2. Input translation versions for them.
3. Display the object on the front end (using MB Views, page builders, etc.). The translated versions will go along with the object automatically.

Translating labels of objects is simpler than. Meta Box - WPML integration **detects the labels as strings automatically**. So, you can input translation versions without any complex configuration. This feature allows you to translate labels of all objects, including post types, taxonomies, field groups, fields, settings pages, and relationships. They’re available in the **Translation Management** submenu with corresponding names:

![New tabs help translate labels of objects](https://i.imgur.com/26bLfbA.png)

Data will be stored as packages, you can check them in the **String Translation** or **Packages** submenu.

![Package management screen](https://i.imgur.com/TvwpKsQ.png)

There are two places to input the translation for labels. One is in the **Translation Management** menu to able to translate multiple items at once. Then, the typical route to translate them is the same as translating normal strings:

1. Select the objects/strings you want to translate and click on the **Translate your content** button.
2. Choose a suitable translation method.
3. Review/ Input the translation in the **Translation** queue.

Or go to the **String Translation** submenu, search and input translation one by one.

After that, when you switch languages on the admin bar, the corresponding content will be transferred immediately.

## Custom post types

After [creating your custom post type](https://docs.metabox.io/tutorials/create-custom-post-types-taxonomies/), you need to make it translatable, then input the translation for posts of the post type.

The custom post types created with Meta Box will be included in the **Post Types Translation** section in the settings of WPML. In this section, locate the custom post type you want to translate. It’s along with three options::

- **Translatable** (only show translated items): The items which don’t have translation are not displayed.
- **Translatable** (use translation if available or fallback to default language): Display all the items with their translation version or default language if they aren’t translated.
- **Not translatable**.

Set it to **Translatable** – only show translated items, and click **Save** to confirm.

![In the Post Types Translation section, make the post types translatable, including custom post types created with Meta Box](https://i.imgur.com/LMUgZIk.png)

After enabling the translatable option for the post types, go to **WPML** > **Translation Management**, you can see the tab named your post type along with its post. Select the custom posts you want and click on the **Translate your content** button.

![Go to Translation management submenu to translate custom posts](https://i.imgur.com/z9Gla1n.png)

To display the translation of posts, you can use any page builder or MB Views. Then the translation versions will be automatically displayed when the reader clicks on the language switcher.

### Post type labels

Labels of Meta Box post type are detected as strings already. So, they’re available in the **Translation Management** submenu. Find the **Meta Box: Post Type** tab, and choose the post type you want.

![Translate labels of custom post type from Meta Box](https://i.imgur.com/g6xjTq2.png)

Then, you can input the translation for each label as usual.

![Enter translations for the labels](https://i.imgur.com/WCI8r6y.png)

After translating yourself or using WPML AI, just switch languages to see the translation of post type labels.

![The post type labels are translated](https://i.imgur.com/YMdpdKV.png) 

## Custom taxonomies

Translating custom taxonomies and their labels is the same as translating post types.

In the settings of WPML, also **set the custom post type**, which the taxonomies is for, is translatable. Notice that the translation versions of taxonomies are available on the page only when its post type also is translatable.

Then, go to the **Taxonomies Translation** section, and find out your custom taxonomies. All the options and translation steps are the same as those for custom post types.

![Make the taxonomies and custom taxonomies translatable in the Taxonomies Translation section](https://i.imgur.com/n9QjsMp.png)

To add the translation version for any taxonomy, go to the **Taxonomy Translation** submenu.

![Go to the Taxonomy Translation submenu to add the translation version for taxonomies](https://i.imgur.com/250lUA5.png)

### Taxonomy labels

Labels of Meta Box taxonomies are declared as WPML strings. So, translating them is effortless. Just also go to the **Translation Managerment** submenu, then select your taxonomy from the **Meta Box: Taxonomy** tab since they’re strings of WPML without manual installation.

![Go to Meta Box: Taxonomy to translate taxonomy labels](https://i.imgur.com/q8ShQG8.png)

## Custom fields

### Custom field values

Set up the WPML plugin to translate custom field values in the **Custom Fields Translation** section.

Search the field ID in the **Search** bar to find out the field that you want to translate. There are four options to choose from for each field:

- **Don’t translate**
- **Copy**: each time you update the field, the value in that field is automatically copied to the translated version without being translated.
- **Copy once**: is similar to Copy but it just copies the field’s value for the first time. Other times you update the field, it doesn’t do it.
- **Translate**: is to translate the field.

![Set up the WPML plugin to translate custom field values in the Custom Fields Translation section](https://i.imgur.com/HxrGwgp.png)

Assuming that I chose translation method for the post type that custom fields applied to, move to the **Translations** submenu, you can add (if you translate yourself) or view (if you use AI to translate automatically) the translation.

![Go to Translations submenu to add or view translation](https://i.imgur.com/aVMExyp.png)

Then, a new screen where we add translations for the custom fields will appear.

![Add or view the translation of field value](https://i.imgur.com/TbSeTGL.png)

This also works well with cloneable fields, including cloneable groups.

You can use MB Views for any page builder for displaying them on the frontend.

### Field labels

Meta Box - WPML integration helps you translate labels of easily, including `label description`, `input description`, `default value`, `placeholder`, and `adding more text` of cloneable field/group.

For example, I have a field with labels as below:

![The field label need to translate](https://i.imgur.com/zkp33YL.png)

In the **Translation Management** submenu, find the **Meta Box: Field Group** tab, and select the field group you want to translate the labels from this tab.

![Go to Meta Box: Field Group tab to translate field labels](https://i.imgur.com/kNqnSWH.png)

Then, in the post editor, the translation of labels is outputed automatically when you switch language in the admin bar.

![The label translations display well]( https://i.imgur.com/hl4ic4Q.png)

## Settings page fields

Meta Box supports you entering translation for custom field values directly.

For example, I have had a **Name** field in the settings page called **Brand**.

![I'll translate the value of the Name field as an example](https://i.imgur.com/aSCqZfH.png)

To translate custom fields in the settings page, simply change the language, and input the transaltion.

![Switch language and enter the translation directly](https://i.imgur.com/PNKD4bo.gif)

For displaying translation on the frontend, you can refer to [this docs](https://docs.metabox.io/extensions/mb-settings-page/#getting-field-value). The [`rwmb_meta()`](https://docs.metabox.io/functions/rwmb-meta/) fucntion can detected the language to get and display the corresponding field value automatically. In this case, I use this code:

```
$value = rwmb_meta( 'name', ['object_type' => 'setting'], 'brand' );
echo $value;
```

### Settings page labels

Similar to the translating labels of other objects, you can translate the settings page labels in the **Translation Management** submenu.

Open the **Meta Box: Settings Page** tab, you can see your settings page in the list. Just click and translate them.

You also can translate field labels on the settings page. That field group is in the **Meta Box: Field Group** tab as well.

![Translate label of settings page and settings page field](https://i.imgur.com/hzEoPQG.png)

Then, translations of both field label and settings page label are shown when you switch the languages.

![The translations are shown](https://i.imgur.com/yVlUdZk.png)

## Relationship labels

Meta Box also effortlessly supports translation labels of relationships.

In the **Translation Management** section, click on the **Meta Box: Relationship** tab to select your relationship.

![Go to Meta Box: Relationship to translate relationship label](https://i.imgur.com/FD3BkIv.png)

Then, translate them as the other labels, and in the post editor, you can see the content relationship is switched when you change the laguages:

![The tranlation of relationship label displays well](https://i.imgur.com/KjKbrUV.png)

In the case that you want to translate relationship values, simply translate the object type, such as post, term, or user.

## Others

Beside the basic objects, Meta Box-WPML also helps you translate other items.

### Custom term meta

In the settings of WPML, enable the translation feature for all of these following objects:

- Post type (in the **Post Types Translation** section)
- Taxonomy (the **Taxonomies Translation** section)
- Custom fields (in the **Custom Term Meta Translation** section)

![Enable the translation feature for post types, taxonomies, custom fields of taxonomies](https://i.imgur.com/GAwNV9c.png)

Then, do the same with translating custom taxonomies, go to the **Taxonomy Translation** submenu. When adding a translation version for each taxonomy, the term meta will appear along with the taxonomy information.

![The term meta will appear along with the taxonomy information to add the translation version](https://i.imgur.com/xB8ONj2.png)

As usual, when we want to display the term meta value, we use the `get_term_meta` function. This is an example:

![Use the get_term_meta function to display the term meta value](https://i.imgur.com/fG75xq7.png)

Even when you have translations for those values, just keep using this function, then the translations will display automatically.

### Custom user meta

By default, WPML translates only the basic fields of the user such as first_name, last_name, nickname, description, and display_name. To make custom user fields translatable, you need to convert them to strings before translating.

So, we should install the **WPML String Translation** add-on.

After installing it, add this filter to the theme file to convert value of a custom field to string:

```
add_filter( 'wpml_translatable_user_meta_fields', function( $fields ) {
   $fields[] = 'your_field_ID';
   return $fields;
} ); 
```

![Add this filter to the theme file to convert value of a custom field to string](https://i.imgur.com/ljOvUY8.png)

Or, use this syntax for bulk converting:

![Or use this syntax for bulk converting](https://i.imgur.com/Qim8Kgi.png)

:::tip

We recommend using a child theme in this case to avoid missing the strings when you update your theme.

:::

Then, go to **WPML** > **String Translation**, and scroll down to the **Utilities** section, choose the user roles you would like to make translatable in the **Translate User properties** tab.

![Choose the user roles you would like to make translatable in the Translate User properties tab](https://i.imgur.com/1FNNnrI.png)

After that, the fields are in the **Strings translation** table along with their values. Just click on the “**+**” button to add the translation for each value.

![Translate custom fields value](https://i.imgur.com/CvzFlY8.png)

To display fields for users on the frontend, you should use the following function:

```
get_the_author_meta( ‘your_custom_user_field_ID’, $user_id );
```

When the field values display, the translation will go along with it.

