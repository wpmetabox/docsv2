---
title: Creating an FAQs page - Meta Box + Bricks
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In today’s practice, let me show you a way to create an FAQs page using Meta Box and Bricks.

This image below is a specific example:

![This is example of the created page](https://imgur.elightup.com/q8DrPFt.png)

## Video version

<LiteYouTubeEmbed id='SXo6s4y_XGs' />

## Preparation

The FAQs Page contains questions and answers that are saved in the custom fields created with Meta Box. They are also displayed in an accordion style on the page.

To do it, we need the tools as follow:

Meta Box core plugin to have the framework for creating custom fields. It’s free, and you can download it directly from wordpress.org.
* [MB Group](https://metabox.io/plugins/meta-box-group/): to organize custom fields into pairs for questions and answers;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to easily create custom fields to save information about the questions and answers;
* Bricks Builder: to create the FAQs page.

## 1. Creating a new page

Go to **Page** > **Add New** to create a page as usual.

![Created a new page](https://imgur.elightup.com/z303DwT.png)

## 2. Creating custom fields

Go to **Meta Box** > **Custom Fields** > **Add New**. This is the structure of the fields I created:

|      Name       | Field Type |       Settings        |
|-----------------|------------|-----------------------|
|   FAQs Group    |   Group    | Cloneable Collapsible |
|       Questions |    Text    |           -           |
|        Answer   |  Textarea  |           -           |

Since each question will go along with the corresponding answer, we have these 2 fields inside a group.

There will be more than one couple of Q&A. So, we’ll set this group as **Cloneable** to add more questions and answers easily.

![Set this group as Cloneable](https://imgur.elightup.com/ihrV9BB.png)

Then, there’ll be an **Add more** button to allow adding more Q&A to the FAQs page like this:

![Add the add more button](https://imgur.elightup.com/SNfVGgF.png)

In addition, in case you have many questions and answers, you can set this group as **Collapsible**.

![Tick Collapsible option](https://imgur.elightup.com/JqD5lpX.png)

Next, you can name the group’s title using some variables as follows. The **{#}** variable is for numbering the questions and the **{question}** variable is the ID of the question field to display the content of that question.

![Name the group’s title](https://imgur.elightup.com/q6FxvGc.png)

Naming like this will help you identify the set of Q&A more easily and avoid being messy.

![Naming will help you identify the set of Q&A](https://imgur.elightup.com/6En8OdT.png)

After creating all the fields, move to the **Settings** tab, and choose **Location** as **Page**. Since we created the fields for the FAQs page, go to the **Advanced location rules** section below and choose the **FAQ** which is the name of the page.

![Set location and advanced location rules for the created field](https://imgur.elightup.com/EMtO8ii.png)

Then, you can easily see all the fields in the page editor. Just fill in the Q&A now.

![Created field in the post editor](https://imgur.elightup.com/uXQ6nQF.png)

## 3. Editing the page

Still in the page editor, go to **Edit with Bricks**.

First, select the **Section** element to contain all content of the page.

![Select the Section element](https://imgur.elightup.com/Tj20VMP.png)

Next, add a **Post Title** element to get the title of the page.

![Add a Post Title element](https://imgur.elightup.com/ahlSxrH.png)

Inside the **Container**, to show or hide the pairs of questions and answers for detailed information easily, let’s add the accordion. But, instead of using the **Accordion** element, I choose the **Accordion (Nestable)** one so that I can add elements inside it.

![Choose the Accordion (Nestable)](https://imgur.elightup.com/lVauYF1.png)

Normally, you can use each item here for a pair of questions and answers. The **Title** will be the question, and the **Content** will be the answer. The number of items will be the same as the number of the pairs. However, we saved the question and answer in a **cloneable group**, so you only need one item in the accordion and remove the others.

![Delete one item](https://imgur.elightup.com/CT7v3uA.png)

Next, enable the query loop for the item. In the **Type** of the query settings, choose the created group field. Then, the number of displayed accordions will be the same as the number of questions.

![Choose the Select dynamic data button and find the created group field](https://imgur.elightup.com/pbYfndY.png)

To show the question, go to the **Heading** element, choose **Select dynamic data** button, then search for the **Question** field.

![Choose the Select dynamic data button and find the question field](https://imgur.elightup.com/iz2ggzw.png)

For the answer, move to the **Rich Text** element. Choose **Select dynamic data** button, and the corresponding field as well.

![Choose the Select dynamic data button and find the corresponding field](https://imgur.elightup.com/4IhD5fi.png)

Then, you will see all the information displayed like this.

![The information is displayed](https://imgur.elightup.com/sK4OeLy.png)

For styling the page, still in the page editor with **Bricks**, you can style each element by changing their settings.

Then you will see the new look of the page.

![The final result](https://imgur.elightup.com/q8DrPFt.png)
