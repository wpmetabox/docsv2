---
title: Creating an FAQs page - MB Views
---

We’ll create an FAQs (Frequently Asked Questions) page where the questions and answers are saved in custom fields.

This is the page we’re going to create in this practice. It’s built without using any page builder.

![The example of FAQs page](https://i.imgur.com/JQyjIeJ.gif)

## Preparation

We’ll need these tools:

* [Meta Box](https://metabox.io/plugins/meta-box-builder/): to have framework to create custom fields;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to create and configure custom fields;
* [Meta Box Group](https://metabox.io/plugins/meta-box-group/): to group the fields together. In this case each couple of question and answer will be set in a group.

## 1. Creating a new page

Go to **Pages > Add New** to have a new FAQs page.

![Create a new page](https://i.imgur.com/ghISiI4.png)

![The FAQs page](https://i.imgur.com/LocJd9u.png)

## 2. Creating custom fields

Go to **Meta Box > Custom Fields > Add New** to create fields saving questions and answers. I created custom fields with the following structure:

<table>
<tbody>
<tr>
<td> Name </td>
<td> Field Type </td>
<td> Settings </td>
</tr>
<tr>
<td>Tabs</td>
<td>Group</td>
<td>collapsible
cloneable</td>
</tr>
<tr>
<td>Tab Name</td>
<td>Text</td>
<td>-</td>
</tr>
<tr>
<td>Q &amp; A</td>
<td>Group</td>
<td>cloneable</td>
</tr>
<tr>
<td>Question</td>
<td>Text</td>
<td>-</td>
</tr>
<tr>
<td>Answer</td>
<td>Textarea</td>
<td>-</td>
</tr>
</tbody>
</table>


![Create custom fields](https://i.imgur.com/cobeBWj.gif)

Each tab will be a category and there are many questions and answers there. To add more Q&As for each tab, I will tick the **cloneable** box in two groups: **Tabs** and **Q & A**. However, the tab is just optional. It’ll be simpler and easier without having tabs.

After creating all the fields, move to the **Settings** tab, choose **Location** as **Post Type** and select **Page**. Since we created the fields for the FAQs page, go to the **Advanced location rules** section below and choose the **FAQs**.

![Set location for the created fields](https://i.imgur.com/Z1d2McF.png)

Back to the post editor, you will see all of the created custom fields.

![Created custom fields appear in the post editor](https://i.imgur.com/4ZKQO6n.png)

## 3. Displaying the FAQs on the page

There are two methods to show the FAQs information on the FAQs page: using MB Views or using a PHP file.

If you add code to the PHP file, when you change the theme, the template will be missed. Otherwise, using MB Views ensures that the page template will not be affected.

### Method 1: Using MB Views

For this method, you will need a Meta Box extension which is [MB Views](https://metabox.io/plugins/mb-views/). Just install it or use the Meta Box AIO.

Go to **Meta Box > Views** to create a new template.

![Create a new template](https://i.imgur.com/U8nwKlY.png)

Since all the content of the page is saved in custom fields, in the **Template** tab, you can easily insert fields through the **Insert Field** button to have all the created fields to get data from.

First, look for the field group we’ve just created for the FAQs. It’s a cloneable group so whenever you create it, a loop will display.

![Insert fields into the created template](https://i.imgur.com/1txdLfU.gif)

Just replace the text inside the loop with any field in the group. Just choose one by one and get all the fields as below:

![Replace the text inside the loop with any field](https://i.imgur.com/OBAsdWL.png)

For easier styling later, you can add some div tags and attributes like this:

![Add some div tags and attributes to style easier](https://i.imgur.com/7YbjS5e.png)

You can refer to the whole code with MB Views [here](https://github.com/wpmetabox/tutorials/blob/master/create-faq-page/template-views.php).

Then, scroll down to the **Settings** tab, choose **Type** as **Singular**. Since we created this template for the FAQs page, choose **Location** as **Page** and select **FAQs**.

![Choose type of fields as Singular](https://i.imgur.com/I059yC1.png)

To display questions and answers corresponding to its tab, we need to add some Javascript. Go to the **Javascript** tab and add the following code to it.

```javascript
jQuery(document).ready(function()
{
    function activeTab(obj)
    {
        jQuery('.tab-category ul li').removeClass('active');
        jQuery(obj).addClass('active');
        var id = jQuery(obj).find('a').attr('href');
        jQuery('.ul-cate').hide();
       jQuery(id).show();
    }

   jQuery('.tab-category li').click(function(){
        activeTab(this);
        return false;
    });

    activeTab(jQuery('.tab-category li:first-child'));
});
```

Explanation:

* `function activeTab(obj){}`: create a function named activeTab with **obj** parameter;
* `jQuery('.tab-category ul li').removeClass('active')`: remove class `‘active’` from all tabs;
* `jQuery(obj).addClass('active')`: add class ‘active’ in clicked tab;
* `var id = jQuery(obj).find('a').attr('href')`: get `‘href’` of tab to show corresponding to the content;
* `jQuery('.ul-cate').hide(`): hide the content from displaying tabs;
* `jQuery(id).show()`: show the content from the current tab;
* `jQuery('.tab-category li').click(function(){
     activeTab(this);
     return false;
})`: add click event when changing tab;
* `activeTab(jQuery('.tab-category li:first-child'))`: add `‘active’` class when loading page.

![Add some Javascript code](https://i.imgur.com/HKgkIE0.png)

To style the FAQs page, go to the **CSS** tab and add some CSS code to do it.

![Add some Css code to style](https://i.imgur.com/kAk6lVa.png)

Now, the FAQs page will show like this:

![How the created FAQs page look like](https://i.imgur.com/JQyjIeJ.gif)

### Method 2: Using PHP file

To get the custom fields’ data and display them on the page, you need to create a template file from your theme and apply it to the created page in Step 1. The file is named `page-faqs.php` (you can name it another way if you want). Then, enter the following content in the file:
```php
<?php
/**
  * Template Name: FAQs
  */

```
This page template is named **FAQs**. Now go to **Pages > Add New** and create a new page. Select **FAQs** (which is the name of the created template) from the list of available page templates:

![Select the created FAQs page](https://i.imgur.com/6zhUTzn.png)

Now, back to the `page-faqs.php` file and insert this code:

![Insert the code](https://i.imgur.com/UBoKeaY.png)

The full code for the whole template is [here](https://github.com/wpmetabox/tutorials/blob/master/create-faq-page/template.php).

Then, go to the FAQs page, you will see the questions and answers display as you want.

------
You may be interested in:

* [Creating online admission form](https://docs.metabox.io/tutorials/create-online-admission-form/)
* [Configuring homepage](https://docs.metabox.io/tutorials/configure-homepage/)
* [Displaying product variations](https://docs.metabox.io/tutorials/display-product-variations-mb-views/)

