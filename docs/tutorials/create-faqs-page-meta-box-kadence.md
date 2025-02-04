---
title: Creating an FAQs page - Meta Box + Kadence
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Continuing our series on [creating an FAQs Page](https://metabox.io/series/faqs-page/) with **Meta Box** and page builders, today we have just explored a different method, using **Meta Box** and **Kadence**. Having an FAQ page is a way to be more proactive and predictive with what readers are going to need help with. Let’s dive in to explore the process of creating the FAQs page in detail.

This is an example of a FAQs page that I created.

![An example of a FAQs page created with Kadence and data from custom fields created with Meta Box.](https://i.imgur.com/HPyWQmw.png)

## Video version

<LiteYouTubeEmbed id='QCs6JtW0NMY' />

## Preparation

The FAQs page includes several couples of questions and answers that are saved in custom fields.

To do it, we need the tools as follow:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have the framework for creating custom fields. It’s free, and you can download it directly from wordpress.org.
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to easily create custom fields to save information about the questions and answers;
* [MB Group](https://metabox.io/plugins/meta-box-group/): to organize custom fields into pairs for questions and answers;

## 1. Creating a new page

Go to **Page** > **Add New** to create a page as usual. This will be used for the FAQs page.

![Go to Pages to create a new page for the FAQs](https://i.imgur.com/IqCa9ZW.png)

## 2. Creating custom fields

Go to **Meta Box** > **Custom Fields** to create a new field group. I’m having a group with two subfields inside since each question will go along with the corresponding answer.

![This is a new field group with two subfields inside](https://i.imgur.com/1lMVy8v.png)

In addition, each question and answer may be too long to display on the post editor, so I set this group as **Collapsible** to collapse the information in the group field.

![set FAQs group as Collapsible to collapse the information in the group field](https://i.imgur.com/IdHAhNH.png)

You can also set the title for the group based on the content of the **Question** field for easier identification. The **{#}** variable is for numbering the questions, and the **{question}** variable is the ID of the question field to display the content of that question.

![Add titles for the group](https://i.imgur.com/fJTMAx0.png)

There will be more than one couple of Q&A. So, we’ll set this group as **Cloneable** to add more questions and answers easily.

![Set the group cloneable as we may have more than one pair of questions and answers](https://i.imgur.com/6zgiCGM.png)

After configuring all the fields, move to the **Settings** tab. Choose **Location** as **Post type** and select **Page**.

![Move to the Settings tab. Choose Location as Post type and select Page](https://i.imgur.com/WEvyNDL.png)

Since we created the fields for the FAQs page, go to the **Advanced location rules** section below and select the page name as FAQ

![Go to the Advanced location rules section below and select the page name as FAQ](https://i.imgur.com/4nODnBa.png)

Now, go to the page editor, you will see the custom fields displayed.

![This is the custom fields displayed](https://i.imgur.com/MEte2ER.png)

Let’s fill in some questions and answers.

![These are some questions and answers filled](https://i.imgur.com/E4X53hq.png)

## 3. Displaying the FAQs on the page

Let’s edit the page template with Kadence to display questions and answers on the page.

First, add a **Repeater** block to get all the content saved in the cloneable group that we used to save the questions and answers.

![add a Repeater block to get all the content saved in the cloneable group](https://i.imgur.com/UjmlXPM.png)

Choose the **Source** as the page we used for the FAQ page.

![Choose the Source as the page we used for the FAQ page](https://i.imgur.com/iZt0f2A.png)

In the **Repeater Field** section, choose the name of the group field that contains the two subfields inside for the question and answer.

![In the Repeater Field section, choose the name of the group field](https://i.imgur.com/tbMqciV.png)

We haven’t set anything yet to stipulate how the date will be displayed, so the preview will be like this.

![This is the preview before the date will be displayed](https://i.imgur.com/7lKoTnM.png)

For the content of the questions and answers, add blocks inside the **Repeater**, as well as inside the **Repeater Layout**.

![add blocks to show content of the questions and answers](https://i.imgur.com/amDPaui.png)

Next, I’ll choose a **Text Advanced** block for the questions.

![choose a Text Advanced block for the questions](https://i.imgur.com/25NPea3.png)

Enable the dynamic content for this block. Then, choose the field for the question.

![Enable the dynamic content for this block. Then, choose the field for the question](https://i.imgur.com/wNBlS2V.png)

The questions will display immediately on the preview.

Do the same with the Answers. Also, add another **Text Advanced** block, then choose dynamic data from the **Answer** field.

![add another Text Advanced block, then choose dynamic data from the Answer field](https://i.imgur.com/l3oEsii.png)

We’ve finished getting and displaying all the questions and answers. You can see it now on the page on frontend but it doesn't look good.

![This is the page on frontend without style.](https://i.imgur.com/Yw5atsP.png)

Let’s move on to make them display in a better look.

## 4. Styling the page

Back to the page editor with **Kadence**, change the settings of each block to have the wanted layout and style.

This is the new look of the page as I did as an example.

![This is the new look of the page](https://i.imgur.com/HPyWQmw.png)
