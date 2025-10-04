---
title: Creating an FAQs page - MB Views
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

If you are looking at how to **create an FAQs page without using any page builder**, we will share an easy and straightforward tip using **MB Views** that you can follow to build that page. Let’s dive in to explore the process of creating the FAQs page in detail.

This is the page I’d like to create today:

![An FAQs page using MB Views](https://imgur.elightup.com/Z7qgPOG.gif)

## Video Version

<LiteYouTubeEmbed id='W0A535dpksQ' />

## Preparation

The FAQs page contains questions and answers that are saved in the custom fields created with Meta Box. The questions and answers will be classified and separated into tabs. In each tab, each pair of questions and answers also will be grouped together.

So, in this practice, we need these tools:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom fields;
* [MB Views](https://metabox.io/plugins/mb-views/): to create and style the template for the page without touching the theme files;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to create custom fields;
* [MB Group](https://metabox.io/plugins/meta-box-group/): to organize the fields for questions and answers into a group since they are in pairs.

You can install them individually or use **Meta Box AIO**.

## 1. Creating a new page

Go to **Pages** > **Add New** to have a new FAQs page.

![A new FAQs page](https://imgur.elightup.com/KlNEJhq.png)

## 2. Creating custom fields

As I mentioned, the questions and answers will be classified in different tabs and also grouped in pairs. So, I’ll create the fields with the following structure.

![The questions and answers will be classified in different tabs and also grouped in pairs](https://imgur.elightup.com/WMIfOFz.png)

The cover group for tabs is cloneable, so you can add as many tabs as you want for multiple kinds of questions.

![The cover group for tabs is cloneable](https://imgur.elightup.com/U3WIHeM.png)

You can also set the title for the group based on the content of the **Tab Name** field for easier identification.

![Set the title for the group based on the content of the Tab Name field](https://imgur.elightup.com/XN5iwwF.png)

Inside each tab, means the group, I create a field to name the tab. This name will be displayed on the left sidebar of the page.

Also, I added a subgroup that contains two subfields. Thanks to this subgroup, the questions and answers are grouped in a pair. The subgroup also is cloneable so you can add more pairs of questions and answers.

![Add a subgroup that contains two subfields](https://imgur.elightup.com/wkc8rOO.png)

There are 2 text fields inside the subgroup. They are for the questions and answers.

![Create 2 text fields inside the subgroup](https://imgur.elightup.com/R61hZAU.png)

This subgroup is set to be cloneable as well. It helps to add multiple pairs of questions and answers.

![Set the subgroup to be cloneable](https://imgur.elightup.com/wq6RdNr.png)

After configuring all the fields, move to the **Settings** tab. Choose **Location** as **Post Type** and select **Page**.

![Select Page in the Settings tab](https://imgur.elightup.com/yDq8atU.png)

To apply these fields to the page you want, go to the **Advanced Location Rules** section below and choose the name of the page.

![Choose the name of the page](https://imgur.elightup.com/BZX5zSn.png)

Now, go to the page editor, you will see the custom fields displayed.

![The custom fields displayed on the page editor](https://imgur.elightup.com/B7TbRo8.png)

## 3. Displaying the FAQs on the page

### 3.1. Getting and display Q&As from custom fields

Go to **Views** in **Meta Box** and create a new one.

![Go to Views in Meta Box and create a new one](https://imgur.elightup.com/TxwUE2f.png)

To get the data saved in the custom fields, just click on the **Insert Field** button and choose the name of the created fields from the list.

![Choose the name of the created fields from the list to get the data saved in the custom fields](https://imgur.elightup.com/oiKptU8.png)

Since the created fields are all the subfields in a group named **Tabs**. You must click on it to open it up. Whenever you click on it, a loop will be added to the template since the group is cloneable.

![A loop will be added to the template when I click to Tabs](https://imgur.elightup.com/bQfuTal.png)

We’ll insert fields inside this loop. First, insert the **Tab Name** field into the loop.

![Insert the Tab Name field into the loop](https://imgur.elightup.com/MkWKTtH.png)

The page I’ll create today has two sections. One on the left are the names of the tabs. And, the one on the right are the questions and answers. It is separated from the left one, so I will add another loop by clicking on the **Tabs** field.

![Add another loop by clicking on the Tabs field](https://imgur.elightup.com/euMpOf1.png)

The group containing the questions and answers is also cloneable, so there will be another loop inside.

![Add another loop inside group](https://imgur.elightup.com/hOuWwnG.png)

Now, just insert the **Question** field and **Answer** field into the loop.

![Insert the Question field and Answer field into the loop](https://imgur.elightup.com/nVtIjnU.png)

You can see the structure clearer like this.

![The structure of the FAQs page](https://imgur.elightup.com/pTfUgay.png)

You should add some **div** tags and classes to use **CSS** for styling later.

![Add some div tags and classes to use CSS for styling later](https://imgur.elightup.com/JXn9xYK.png)

Now, set the template type as **Singular**, and choose the page as its location.

![Set the template type as Singular and choose the page as its location](https://imgur.elightup.com/eO2SsuY.png)

Go to the page on the front end, all the tab names, questions, and answers are displayed already.

![All the tab names, questions, and answers are displayed already on the frontend](https://imgur.elightup.com/BYGIDlU.png)

That’s done for getting the questions and answers from custom fields and displaying them on the page.

### 3.2. Styling the page

Back to the template in the **Views**, go to the **CSS** tab, and add some code.

![Go to the CSS tab and add some code to style the page](https://imgur.elightup.com/8DYGSnG.png)

Then the look of the page will change.

![The look of the page will change](https://imgur.elightup.com/cPP0HSR.png)

For now, when you click on the name of each tab, nothing happens. All the pairs of questions and answers still display on the page. There is no classification. You should add JS to make the tabs work.

### 3.3. Adding JavaScript for tabs

Also back to the template, go to the **JavaScript** tab to add code.

![Go to the JavaScript tab to add code](https://imgur.elightup.com/5luiQpt.png)

```
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

These lines of code are to trigger when users click on any tab name. When I add div tags and classes for each element on the page, I set the class for the tab names as '_tab-category_'. So, we’ll trigger the action based on that class.

![Set the class for the tab names as 'tab-category'](https://imgur.elightup.com/DnWDHmi.png)

I also set classes for the section displaying questions and answers and use it in this code.

![Set classes for the section displaying questions and answers](https://imgur.elightup.com/gbF6Xcc.png)

If you use this code, please change these classes to your own.

Then, we need to add a line of code to the theme’s file to declare the **JavaScript** library

` <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script> `

![Add a line of code to the theme’s file to declare the JavaScript library](https://imgur.elightup.com/mQJEKuH.png)

All of the code I’m using in this practice is uploaded on our [Github](https://github.com/wpmetabox/tutorials/tree/master/create-faq-page) channel, you can refer to them.

Now, go to the FAQs page on the frontend, you will see the tabs run as we want.

![The FAQs page on the frontend](https://imgur.elightup.com/pAgEYQf.gif)
