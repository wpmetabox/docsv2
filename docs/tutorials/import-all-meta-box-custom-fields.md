---
title: Importing all Meta Box custom fields - Using WP All Import
---

To import all Meta Box custom fields, you need to map their corresponding data during the import process in WP All Import.

This documentation provides more details on each field and what’s imported for it when using the [Meta Box Import Add-On](https://www.wpallimport.com/import-meta-box-fields/) by WP All Import.

To learn how the import process works, please see [this tutorial](https://docs.metabox.io/tutorials/import-data-meta-box-custom-fields/).

## 1. Basic fields:

These are the most common fields that you can import. Here's more on each basic field type available:

### 1.1. Text

Simple plain-text field. Imports text. 

![Import the text field using the Meta Box Import Add-On by WP All Import ](https://i.imgur.com/FeNfnSr.png)

### 1.2. Textarea

Same as a text field but with a bigger area. Imports text.

![Import the textarea field using the Meta Box Import Add-On by WP All Import with a bigger area than the text field](https://i.imgur.com/1n18T3W.png)

### 1.3. Checkbox List

Multiple choice field. When importing multiple values, separate with a comma. If you have both values and labels in the field definition, use the values. You can use the **Select value for all records** option to choose the same value for all records:

![Use the Select value for all records option to choose the same value for all records](https://i.imgur.com/H75h7qa.png)

Alternatively, you can use the **Set with XPath** option to import values dynamically:

![Use the Set with XPath option to import values dynamically](https://i.imgur.com/E02qkD9.png)

### 1.4. Checkbox

Single choice field. Imports a value for checked and no value for unchecked. 

![For the Checkbox field, imports a value for checked and no value for unchecked](https://i.imgur.com/BQfmIKB.png)
 
### 1.5. Radio

List of radio inputs where you select a single choice. Imports the value as text.

![To import the Radio field, imports the value as text](https://i.imgur.com/FA2540n.png)

### 1.6. Select

Select the dropdown to choose one or multiple values. When importing multiple values, separate with a comma. If you have both values and labels in the field definition, use the values.

![To import the Select field, use the values](https://i.imgur.com/eFBKSSH.png)

## 2. Advanced Fields:

These contain most of the Meta Box custom fields available to import. Below are more details on each advanced field.

### 2.1. Autocomplete

Plain-text field with autocomplete features. When importing multiple values, separate with a comma. If you have both values and labels in the field definition, use the values.

![Use the values to import the Autocomplete field](https://i.imgur.com/PiZ7QFT.png)

### 2.2. Background

This lets you set the background color, select an image, and set other background settings.

![You can set the background color, select an image, and set other background settings](https://i.imgur.com/SqjqIp4.png)

### 2.3. Button Group

This field lets you select one or more options by enabling buttons from a button group.

![Import the Button Group field using the Meta Box Import Add-On by WP All Import](https://i.imgur.com/sdHT9bt.png)

### 2.4. Color Picker

This field lets you select a color. You have to specify the color hex code preceded by a numeral, e.g., `#ea5f1a`.

![Import the Color Picker field using the Meta Box Import Add-On by WP All Import](https://i.imgur.com/j5l6PMX.png)

### 2.5. Date Picker

This field stores a date value. You can import any date format supported by the PHP strtotime() function.

![Import the Date Picker field using the Meta Box Import Add-On by WP All Import](https://i.imgur.com/m57joa8.png)

### 2.6. Datetime Picker

This field stores a date and time value. Use any format supported by the PHP strtotime() function.

![Import the Datetime Picker field using the Meta Box Import Add-On by WP All Import](https://i.imgur.com/fiA1iek.png)

### 2.7. Fieldset Text

This field is a set of text inputs. You can import values into each text input separately.

![Import the Fieldset Text field using the Meta Box Import Add-On by WP All Import](https://i.imgur.com/C09UGIq.png)

### 2.8. Hidden

Simple hidden input text.

![Import the Hidden field using the Meta Box Import Add-On by WP All Import](https://i.imgur.com/vMDQdAs.png)

### 2.9. Icon

Imports an icon class name.

![Imports an icon class name](https://i.imgur.com/gu8ymVg.png)

### 2.10. Image Select

This field allows you to select a choice visually with images, which works similarly to a radio/checkbox field. When importing multiple values, separate with a comma. If you have both values and labels in the field definition, use the values.

![Use the values to import the Image Select field](https://i.imgur.com/UvxDs07.png)

### 2.11. Key Value

This field allows you to input an unlimited group of "key-value" pairs. You can choose between Fixed, Variable (XML), or Variable (CSV). The interface lets you define these fields.

![The interface lets you define the Key Value field with option of Fixed, Variable (XML), or Variable (CSV)](https://i.imgur.com/PgRRPzS.png)

You can learn more about importing this data here: **[Cloneable & Repeater Fields](https://docs.google.com/document/d/1vq_iBp8SMVegC1jiUI1NJOQ3aY4BBMEQRffcE4QWV5U/edit#heading=h.pa02dd29k180)**.

### 2.12. oEmbed

Simple text input to import a media URL and show that media. Imports text.

![Import the oEmbed field using the Meta Box Import Add-On by WP All Import](https://i.imgur.com/EmJtZrI.png)

### 2.12. Password

Simple password input field. 

![Import the Password field using the Meta Box Import Add-On by WP All Import](https://i.imgur.com/7tpcWsA.png)

### 2.13. Select Advanced

This field creates a select dropdown field with the [select2](https://select2.org/) library. When importing multiple values, separate with a comma. If you have both values and labels in the field definition, use the values.

![Use the values to mport the Select Advanced field](https://i.imgur.com/rJ9KV12.png)

### 2.14. jQuery UI Slider

This field uses a slider to select a number. Imports a numerical value.

![Imports a numerical value to import the jQuery UI Slider field](https://i.imgur.com/WMiKcHv.png)

### 2.15. Switch

This field shows an on/off switch to enable or disable something. You have to import `1` for on and `0` for off.

![Import 1 for on and 0 for off](https://i.imgur.com/AeqmTmO.png)

### 2.16. Text List

This is a field with a list of text inputs. Each field available to import will have its own input.

![Import the Text List field using the Meta Box Import Add-On by WP All Import](https://i.imgur.com/SDNHWjR.png)

### 2.17. Time Picker

This field lets you select a time. You can use any date format supported by the PHP strtotime() function.

![Import the Time Picker field using the Meta Box Import Add-On by WP All Import](https://i.imgur.com/2S45C8K.png)

### 2.18. WYSIWYG Editor

This is the What-You-See-Is-What-You-Get field. It provides a bigger text field input to bring in any content you need.

![Import the WYSIWYG Editor field using the Meta Box Import Add-On by WP All Import](https://i.imgur.com/wiH2L1x.png)

## 3. HTML5 Fields:

These are the fields for HTML5 input types. They act similar to a text input but for other data types. Here’s more on each HTML5 field type available:

* **Email**: Plain-text field for an email.
* **Number**: Plain-text field for a number.
* **Range**: Plain-text field to import the number range.
* **URL**: Plain-text field to import a URL.

![Import types of HTML5 Fields using the Meta Box Import Add-On by WP All Import](https://i.imgur.com/C86X1lv.png)

## 4. WordPress Fields:

These are fields related to WordPress data that you need to link to from Meta Box. Here’s more on each WordPress field type available:

* **Post**: This field links with a post type or custom post type. It accepts post ID, slug, or a title. You can use a separator character to import multiple entries.
* **Sidebar**: This field links to a sidebar from the site.
* **Taxonomy**: This field links with a taxonomy from the site and sets post terms.
* **Taxonomy Advanced**: This field also links with a taxonomy from the site but stores term IDs instead.
* **User**: This field links with a user on the site.

![Import field types related to WordPress](https://i.imgur.com/JLitGpe.png)

Learn more about importing these fields here: [How to Import Meta Box WordPress Fields](https://www.wpallimport.com/documentation/import-meta-box-wordpress-fields/).

## 5. Upload Fields:

These fields allow handling attachments and files, as well as images. Here’s more on each upload field type available:

* **File**: Single file upload file.
* **File Advanced**: Multiple file upload.
* **File Upload**: Upload area where you can drag and drop files to upload.
* **Image**: Single image upload.
* **Image Advanced**: Multiple image upload.
* **Image Upload**: Inline upload area where you can drag and drop or select images to upload.
* **Single Image**: Select or upload one image via the WordPress media library.
* **Video**: Video field.

All of these fields look the same during import. Here’s how the **File** field looks:

![Example of the File field importing](https://i.imgur.com/6YBuLvT.png)

The only different field is **Single Image**, which looks like this: 

![UI of Single Image field imprting](https://i.imgur.com/7ZkeSAL.png)

Learn more about importing these fields here: [How to Import Meta Box Upload Fields](https://www.wpallimport.com/documentation/import-meta-box-upload-fields/).

## 6. Cloneable & Repeater Fields

All field types can be turned into cloneable with Meta Box. Here’s more on the different methods available to import cloneable fields:

### 6.1. Fixed

This is used when each data piece is stored in its own column, i.e., using separate elements. For example, if you have a cloneable field containing a link, and your CSV file has five columns – url_one, url_two, url_three, etc:

![When import Cloneable field containing a link, the CSV file has five columns](https://i.imgur.com/kWiAbi8.png)

In this scenario, you manually add five rows to the cloneable field via **+ Add more** and drag and drop each field into its corresponding place:

![Manually add five rows to the cloneable field via + Add more and drag and drop each field into its corresponding place](https://i.imgur.com/ORGh4eb.png)

### 6.2. Variable (XML)

When importing an XML, data can be stored as sibling elements. For example:

```
<images>
<image>image_example_1.jpg</image>
<image>image_example_2.jpg</image>
<image>image_example_3.jpg</image>
<image>image_example_4.jpg</image>
<image>image_example_5.jpg</image>
</images>
```

Since drag & drop won’t create the correct XPath, you should provide an XPath using the FOREACH syntax available in WP All Import: [Processing and Grouping Multiple Elements with FOREACH Loops](https://www.wpallimport.com/documentation/foreach-loops/).

![You should provide an XPath using the FOREACH syntax available in WP All Import](https://i.imgur.com/HCbvX1g.png)

### 6.3. Variable (CSV)

This option is handy when your data is stored in a single column in your CSV file, separated using a separator character.

For example, if you have a cloneable field with a list of colors and their hex codes, and both pieces of data are stored within their own columns inside the CSV file:

![Both pieces of data are stored within their own columns inside the CSV file](https://i.imgur.com/zfg2mr7.png)

You must update the **Separator Character**, since it’s different, and then drag & drop each column into the appropriate sub-field. This is how that looks:

![Drag & drop each column into the appropriate sub-field](https://i.imgur.com/LdzjP9B.png)

When this Meta Box cloneable data gets imported, the first item in the color column will be associated with the first hex code, the 2nd item in the color column with the 2nd hex code, and so on.

You can learn more about importing cloneable fields here: [How to Import Meta Box Cloneable & Repeater Fields](https://www.wpallimport.com/documentation/import-meta-box-cloneable-repeater-fields/).
