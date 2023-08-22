---
title: Creating a FAQs page - Meta Box + Breakdance
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Having a FAQs page on your site will help the visitors to find the information they want quickly. There’re many ways to create a page for FAQs and in this practice, we’ll share with you one of the most helpful ways by using **Meta Box** and then use **Breakdance** to build it.

This is an example of a FAQs page that I created.

![this is an example of the FAQs page](https://i.imgur.com/XfC5Oy8.png)

## Video version

<LiteYouTubeEmbed id='61YYhzuzD_g' />

## Preparation

The FAQs page includes several couples of question and answer that are saved in custom fields.

Here are some tools we need for this practice:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework for creating a custom post type and custom fields;
* [Meta Box Group](https://metabox.io/plugins/meta-box-group/): to organize custom fields into pairs for questions and answers;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to easily create custom fields;
* **Breakdance** to build the page. Make sure you activate and update to the latest version to have full integration with Meta Box.

## 1. Creating a new page

Go to **Pages** > **Add New** to create a new blank page.

![Go to Pages > Add New to create a new blank page](https://i.imgur.com/44ia28u.png)

It will be our FAQ page.

## 2. Creating custom fields

Go to **Meta Box** > **Custom Fields** > **Add New**. This is the structure of the fields I created:

|      Name       | Field Type |       Settings        |
|-----------------|------------|-----------------------|
|   FAQs Group    |   Group    | Cloneable Collapsible |
|       Questions |    Text    |           -           |
|        Answer   |  Textarea  |           -           |

Each question will go along with an answer. So, we add a group to set them in a pair.

Since we may have more than one pair of questions and answers, I set this group cloneable.

![Set this group cloneable because we may have more than one pair of questions and answers](https://i.imgur.com/CJ35O3r.png)

Then we’ll have an **Add more** button like this.

![the Add more button](https://i.imgur.com/VSJmQ5g.png)

Each pair of question and answer may have long content, or there may be too many pairs, so you should set this group collapsible.

![Set this group collapsible](https://i.imgur.com/YAW97Pi.png)

Then they will display in a more succinct way.

![The questions and answers display in a more succinct way](https://i.imgur.com/0tmbMTU.gif)

And you can add titles for the group as follows. The `{#}` variable is for numbering the pair and the `{question}` variable is the ID of the question field to show the question on the title.

![add titles for the group](https://i.imgur.com/q7ftCO2.png)

After creating all the fields and having reasonable settings, move to the **Settings** tab, choose **Location** as **Post type**, and select **Page**. To apply the fields to the page you want, go to the **Advanced location rules** section below and choose your page. In this case, I chose **FAQ**.

![Set the location of custom fields created in the Settings tab](https://i.imgur.com/enfjiGR.png)

After publishing, you will see all of the custom fields in the page editor. Just enter some questions and answers. Click **Add more** to add other pairs.

![Enter some questions and answers in the page editor. Click Add more to add other pairs](https://i.imgur.com/sHez9Wv.png)

## 3. Creating a global block

We’ll have more than one pair of questions and answers. So let’s create a global block to display the information and set the layout and style for a pair.

Go to **Breakdance** > **Global Blocks** to create a new one.

![Go to Breakdance > Global Block to create a new one](https://i.imgur.com/mSFWlxF.png)

Add a **Div** element to cover the block.

![Add a Div element to cover the block](https://i.imgur.com/h08Hx2L.png)

For the content of the question, add a **Text** element.

![For the content of the question, add a Text element](https://i.imgur.com/vsx6ac6.png)

Because the question is saved in the custom field created by Meta Box, we should insert dynamic data from the field to this element through this icon button.

![insert dynamic data from the field to the element through the dynamic data icon button](https://i.imgur.com/xZVEVA6.png)

Look for the **Meta Box** section, then select the name of the field that we use to save the question.

![Look for the Meta Box section, then select the name of the field that we use to save the question.](https://i.imgur.com/1A2KGSQ.png)

Next, add another **Text** element for the answer.

![add another Text element for the answer](https://i.imgur.com/gQCGRnc.png)

Also insert dynamic data from the Answer field.

![Also insert dynamic data from the Answer field.](https://i.imgur.com/kPqe2Zh.png)

Now, you can see a couple of questions and answers displayed.

![a couple of questions and answers displayed](https://i.imgur.com/fzD6Hrr.png)

You can style this block by changing the settings in the **Style** tab of each element. And this is the new look of the global block.

![the new look of the global block](https://i.imgur.com/tcdETRM.png)

## 4. Displaying Q&As on the page

Go back to edit the page in **Breakdance**. It’s still blank now. We’ll display the questions and answers here.

![Go back to edit the page in Breakdance. It’s still blank now](https://i.imgur.com/jLsDjF7.png)

They are in a cloneable group, so add a **Repeater Field** element.

![They are in a cloneable group, so add a Repeater Field element](https://i.imgur.com/JCNtJWL.png)

In the **Global Block** section of its settings, choose the name of the global block that we’ve just created.

![In the Global Block section of its settings, choose the name of the global block that we’ve just created.](https://i.imgur.com/gqBmjWr.png)

Next, go to the **Field** section. Choose the name of the group field that contains the Question and Answer field.

![go to the Field section, choose the name of the group field that contains the Question and Answer field](https://i.imgur.com/bRwm6m6.png)

Now, all the questions and answers are displayed with the style we set in the global block.

![all the questions and answers are displayed with the style we set in the global block](https://i.imgur.com/Uptl2kQ.png)

You can change the settings of the Repeater Field element to have a better layout. Let’s see the page on frontend. All the questions and answers display adequately.

![All the questions and answers display adequately on the frontend](https://i.imgur.com/XfC5Oy8.png)
