---
title: Meta Box - WPML Integration
sidebar_label: WPML
---

WPML (**WPML Multilingual CMS**) has a native integration with Meta Box that helps translate custom fields and its data for many objects such as posts, users, taxonomies, etc. into different languages easily. Since it is native in the WPML plugin, there is no requirement to install any further plugins.

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

### Language switcher

As its name says, this is to switch between languages on the frontend. It will be a form as a button or item in a menu.

![Set up the language switcher](https://i.imgur.com/z7aqo89.png)

Your new language switcher will now appear next to your navigation menus.

![The language switcher on the frontend allows transform the language](https://i.imgur.com/Nsnkfx9.png)

:::caution Notice

If you don’t set it up, there is nothing on the page to change the language to another one. So, the translation versions of all elements including the custom fields are not shown even when they are already existing.

:::

## Typical route of translating data from Meta Box

The available-deep compatibility between Meta Box and WPML allows you to translate many objects as well as the values of their custom fields. 

In general, you should follow three steps to translate any object on your site. 

1. Make that object translatable (in the **Settings** submenu in WPML);
2. Input translation versions for them;
3. Display the object on the frontend (using MB Views, page builders, etc.). The translation versions will go along with the object automatically.

![Go to Settings menu to make the object translatable](https://i.imgur.com/NJyl7bI.png)

There will be a few differences for specific objects as follows.

## Translating custom post types

The custom post types created with Meta Box will be included in the **Post Types Translation** section in the settings of WPML, along with three options:

- **Translatable** (only show translated items): The items which don’t have translation are not displayed.
- **Translatable** (use translation if available or fallback to default language): Display all the items with their translation version or default language if they aren’t translated.
- **Not translatable**.

![In the Post Types Translation section, make the post types translatable, including custom post types created with Meta Box](https://i.imgur.com/LMUgZIk.png)

After enabling the translatable option for the post types, in the **Translation Management** submenu, choose the post you want to translate

![Go to Translation Management to translate posts of post type](https://i.imgur.com/CQ3stQt.png)

Then, choose the translation method for each language individually or set them all.

![Choose the translation method](https://i.imgur.com/Jecuygc.png)

To display the translation of posts, you can use any page builder or MB Views. Then the translation versions will be automatically displayed when the reader clicks on the language switcher.

## Translating custom taxonomies

In the settings of WPML, also **set the custom post type**, which the taxonomies is for, is translatable. Notice that the translation versions of taxonomies are available on the page only when its post type also is translatable

Then, go to the **Taxonomies Translation** section, and find out your custom taxonomies. All the options and translation steps are the same as those for custom post types.

![Make the taxonomies and custom taxonomies translatable in the Taxonomies Translation section](https://i.imgur.com/n9QjsMp.png)

To add the translation version for any taxonomy, go to the **Taxonomy Translation** submenu.

![Go to the Taxonomy Translation submenu to add the translation version for taxonomies](https://i.imgur.com/250lUA5.png)

To translate taxonomy labels and slugs, you need the **WPML String Translation** plugin.

Then, also on the Taxonomy Translation screen, there is a section to add the translation versions for the label and slug.

![To translate taxonomy labels and slugs, you need the WPML String Translation plugin](https://i.imgur.com/VPoKURG.png)

## Translating custom fields

### Translating custom field values

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

### Translating field labels

To make Meta Box field labels translatable into different languages, we should use an add-on of WPML named **WPML String Translation**.

After installing this add-on, we should add a hook to the theme file to register the field as a string.

```
do_action( 'wpml_register_single_string', 'Meta Box Labels', $meta_box['id'] . '_' . $field['id'], $field['name'] );
```

![Add a hook to the theme file to register the field as a string](https://i.imgur.com/72049bE.png)

Then, go to the **String Translation** submenu to add the translation for field labels.

![Then, go to the String Translation submenu to add the translation for field labels](https://i.imgur.com/tIxVD1w.png)

When displaying field values, you may want to display the field label as well, so add the following code in any place you want to display it:

```
$field_label = apply_filters( 'wpml_translate_single_string', 'your_field_label', 'Meta Box Labels', 'meta_box_id_your_field_id' );
echo $field_label;
```

This function helps display not only the label in the original language, but also the translation versions.

## Translating custom term meta

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

## Translating custom user meta

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

## Translating settings page fields

Meta Box supports you entering translation for custom field values directly.

For example, I have had a **Name** field in the settings page called **Brand**.

![I'll translate the value of the Name field as an example](https://i.imgur.com/aSCqZfH.png)

To translate custom fields in the settings page, simply change the language, and input the transaltion.

![Switch language and enter the translation directly](https://i.imgur.com/PNKD4bo.gif)

For displaying translation on the frontend, you can refer to [this docs](https://docs.metabox.io/extensions/mb-settings-page/#getting-field-value). The [`rwmb_meta()`](https://docs.metabox.io/functions/rwmb-meta/) can detected the language to get and display the corresponding field value automatically. In this case, I use this code:

```
$value = rwmb_meta( 'name', ['object_type' => 'setting'], 'brand' );
echo $value;
```

The new features for this compatibility will be updated continuously.
