---
title: Creating an FAQs page - Meta Box + Divi
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed'; 
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

**Creating an FAQs page** on your website is a useful method for visitors to quickly find the information they're looking for. Let’s see how to do it by using **Meta Box** and **Divi**.

This is an example of an FAQ page that I created.

![An example of the FAQs page using Meta Box and Divi](https://i.imgur.com/IqwyfIa.png)

## Video version

<LiteYouTubeEmbed id='Ja7maoWDE7g' />

## Preparation

The FAQs page includes several pairs of questions and answers that are saved in custom fields.

To get started, we need [the Meta Box core plugin](https://wordpress.org/plugins/meta-box/) to have a framework for creating custom fields. You can download it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/).

Besides, we’ll use some Meta Box extensions for more advanced features, as follows:

* [MB Divi Integrator](https://metabox.io/plugins/mb-divi-integrator/): helps you use Divi to get data from custom fields created with Meta Box more easily;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to easily create custom fields;
* [Meta Box Group](https://metabox.io/plugins/meta-box-group/): to organize custom fields into pairs for questions and answers.

Finally, we need **Divi** to build the page.

## 1. Creating a new page

Go to **Pages** > **Add New** to create a new page. It will be our FAQ page.

![Go to Pages to create a new page for the FAQs](https://i.imgur.com/LdsSOWs.png)

I leave it blank, and I will create custom fields in the next step to input content for this page.

![Just leave this page blank.](https://i.imgur.com/IMFfcxR.png)

## 2. Creating custom fields

Go to **Meta Box** > **Custom Fields** > **Add New**. This is the structure of the fields I created:

|      Name       | Field Type |       Settings        |
|-----------------|------------|-----------------------|
|   FAQs Group    |   Group    | Cloneable Collapsible |
|       Questions |    Text    |        Subfield       |
|        Answer   |  Textarea  |        Subfield       |

Each question will go along with an answer. So, we add a group to set them in a pair.

Since we may have more than one pair of questions and answers, I set this group cloneable.

![Set the group cloneable as we may have more than one pair of questions and answers](https://i.imgur.com/B56hn6u.png)

Then, we’ll have an Add more button like this in the page editor.

![The Add more button help to add more questions and answers](https://i.imgur.com/YiqI44x.png)

I also set this group as Collapsible. And I just keep the Expanded option to have the display of subfields by default.

![Also set the group as Collapsible and keep the Expanded option to have the display of subfields by default.](https://i.imgur.com/Gih2Ja4.png)

And you can add titles for the group as follows to identify the set of Q&A more easily.

![Add titles for the group](https://i.imgur.com/k2aykN8.png)

**In there**:

* `{#}`: This variable is for numbering the pair.
* `{question}`: This variable is the ID of the Question field to show the question on the title.

After creating all the fields and having reasonable settings, move to the **Settings** tab, choose **Location** as **Post type**, and select **Page**. To apply the fields to the page you want, go to the **Advanced location rules** section below and choose your page. In this case, I chose **FAQ**.

![Set location to apply the fields to the FAQ page.](https://i.imgur.com/N4mvoPv.png)
 
After publishing, you will see all of the custom fields in the page editor. Just enter some questions and answers. Click Add more to add other pairs.

![All of the custom fields are displayed in the page editor, and you can click Add more to add other pairs.](https://i.imgur.com/AZCxGGV.png)

## 3. Creating a Divi layout

The Questions and Answers are **saved in a cloneable group**, so we should create a layout to get data from the sub-fields first.

Go to **Divi Library** > **Add New**.

![Go to Divi Library to create a new layout](https://i.imgur.com/ysUI4c5.png)

Next, instead of using modules from Divi, we highly recommend using the **Meta Box Field** module.

![Look for the Meta Box Field module](https://i.imgur.com/kKkVcCI.png)

This is the module built by the **Meta Box** team that has more advantages and more optimality. We have introduced it in more detail in [this walkthrough](https://metabox.io/meta-box-divi-integration-walkthrough/#non-cloneable-fieldsgroups), so you can refer to it for more information.

Now, set the location for this module as the sub-field of the group in the **Meta Box Field** section.

![Set the location for this module as the sub-field of the group](https://i.imgur.com/ldil1nQ.png)

Go ahead, choose another Meta Box Field module for the Answer field, then also set the location as the Answer field as well.

![Choose another Meta Box Field module for the Answer field, then set the location as the sub-field](https://i.imgur.com/RiqLwkG.png)

So, we have done the layout for displaying a pair of the Q&A.

## 4. Applying the layout to the FAQs page

Go to edit the FAQ page with **Divi Builder**, and add a row.

![Add a row to the FAQ page using Divi](https://i.imgur.com/H49Yptv.png)

We had a layout for the questions and answers which are from a cloneable group, so add the **Meta Box Cloneable** module.

![Add the Meta Box Cloneable module](https://i.imgur.com/YTEvNuV.png)

Next, set its layout as the one we have just created. Also set the **Cloneable Field** section as the group.

![Set the created layout and also set the Cloneable Field section as the group](https://i.imgur.com/ItLce6e.png)

All the information of each pair of question and answer will be listed on the page when you go to the page on the frontend.

![All Q&As will be listed on the FAQ page](https://i.imgur.com/wvGP8cz.png)

They are all displayed, but without styling. Let’s move on to the next step to make them display with a better look.

## 5. Styling the page

We should go back to the layout that we use to display the data from the sub-fields. Change the settings of each module to have a new style for those data.

![Change the settings of each module to have a new style for that data.](https://i.imgur.com/ORH2JQ7.png)

I’ve just changed some things basically.

Then you will see the new look of the Q&As on the page.

![The new look of the Q&As on the page](https://i.imgur.com/IqwyfIa.png)

We have finished creating an FAQs page using Meta Box and Divi. However, this is the way we do it with custom fields. There is also a way to create FAQs using custom post type. It might be the same with display posts in an archive page, maybe with some filter, so you can look at the tutorial on how to have a simple listing page.
