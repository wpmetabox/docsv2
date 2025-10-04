---
title: Creating an FAQs page - MB Blocks
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In today’s practice, we’re going to **create an FAQs page** by using custom blocks and custom fields with the help of the **MB Blocks** extension from Meta Box.

Here is my simple FAQ page with some pairs of questions and answers.

![An example of the FAQs page using MB Blocks](https://imgur.elightup.com/N71jB4M.png)

## Video version

<LiteYouTubeEmbed id='ZBL6VIlQCII' />

## Preparation

The questions and answers will be saved in custom fields, and displayed by using a Gutenberg block.

These are some tools we need for this practice:

* [The Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have the framework to create custom fields as well as the block for the Q&As. It’s available on [wordpress.org](https://wordpress.org/plugins/meta-box/).
* [MB Blocks](https://metabox.io/plugins/mb-blocks/): to allow you to create custom Gutenberg blocks. With the help of this extension, we can use PHP or the UI provided by [MB Builder](https://metabox.io/plugins/meta-box-builder/) to create a block. They bring the same result. However, we recommend using MB Builder to limit the use of complex code.
* [MB Group](https://metabox.io/plugins/meta-box-group/): to organize custom fields for questions and answers into a group, so they will be in pairs.

## 1. Creating a new page

First of all, go to **Meta Box** > **Pages** > **Add New Page** to create a totally new one for the FAQs.

![Go to Pages to create a new page for the FAQs](https://imgur.elightup.com/tGUXFDj.png)

I leave it blank, since I will get content by adding the custom block in the next step.

![Just leave this page blank.](https://imgur.elightup.com/cYLMlzJ.png)

## 2. Creating a custom block

I’ll create a custom **Gutenberg** block that includes some custom fields like this:

![Create a custom Gutenberg block that includes some custom fields](https://imgur.elightup.com/c8rhyX5.png)

The group includes 2 subfields inside, one for the questions, and one for the answers. When we want to add more couples of questions and answers, we can click the **Add more** button.

![The Add more button help to add more questions and answers](https://imgur.elightup.com/ed39KAZ.png)

Now, go to **Meta Box** > **Custom Fields** to create the field group.

![Go to Meta Box > Custom Fields to create fields](https://imgur.elightup.com/00jsQUk.png)

Since I activated the **MB Builder**, I have a UI on the backend to create the fields and blocks. And, please pay attention that creating a block is the same with creating a field group.

I’ll also add some fields as usual. Firstly, it should be a group.

![Create a Group field](https://imgur.elightup.com/WZIjHYM.png)

Then, add subfields. One is for the questions, and one is for the answer.

![Add subfields for questions and answers](https://imgur.elightup.com/EYeyn5q.png)

Move back to the settings of the group, turn on the **Collapsible** option to set the group to be collapsible. And, I just keep the **Expanded** option to have the full display of subfields by default.

![Set the group to be collapsible, keep the Expanded option to have the full display of subfields by default.](https://imgur.elightup.com/qP0g3T8.png)

Next, set name for the group’s title.

![Name the group’s title](https://imgur.elightup.com/piQ8Zsh.png)

This is just optional to identify each set of the question and answer. I use some variables to name the group dynamically.

**In there**:

* `#`: This is for numbering the questions.
* `{question}`: This is the ID of the question field. It helps to display the content of the question on the group title.

I also set this group as cloneable. This is pivotal, helps to add multiple pairs of questions and answers.

![Set the group cloneable to have more than one pair of questions and answers](https://imgur.elightup.com/SOU5Rl9.png)

That’s all the custom fields and essential configurations we need in this practice.

After creating all the fields and having reasonable settings, move to the **Settings** tab, and set **Location** for those custom fields. Normally, we set the location as post, or any specific post type, or page as you want to apply fields to. But, to make this field group to be a block, we should set the location as **Block**.

![Set the location as Block](https://imgur.elightup.com/lMJ9Nyi.png)

We have two options to choose where display the field to add content to the block.

![Two options to choose where display the field to add content to the block.](https://imgur.elightup.com/xyS89n2.png)

Move to the page editor of the FAQ page, we can look for the created block to add it to the content section of the page.

![Look for the created block to add it to the content section of the page](https://imgur.elightup.com/i6N0QrN.png)

Since I set the position of the block as on the right sidebar, we will have the fields on the right position.

![The fields on the right side bar](https://imgur.elightup.com/laYrs33.png)

Now, we can try to add some questions and answers to the fields. You can also click **Add more** to add other pairs.

![Click Add more to add other pairs Q&As](https://imgur.elightup.com/U5tRuLA.png)

However, no matter how many pairs of the Q&A you add, there is nothing displayed on the content area of the page, where the block is. The reason is that we had done nothing to display the content yet.

Let's move to the next step.

## 3. Displaying data of the block

### 3.1. Rendering the data

Go back to the settings of the created block. On the **Settings** tab, the **Render** section helps to render the data saved in custom fields that we have in this block to be the content displayed on the block on the frontend.

![The Block Render Settings section helps to render the data saved in custom fields](https://imgur.elightup.com/MzsbYeM.png)

There are three options to choose how to render. You should dig in [the documentation](https://docs.metabox.io/extensions/mb-blocks/) to know their details. I’ll choose the third one.

![Choose option how to render](https://imgur.elightup.com/P5r0xii.png)

There are also some basic instructions to add code in the below image, you can follow it.

![Some basic instructions helps to write code in the Render code box](https://imgur.elightup.com/gOgWVJJ.png)

We use a cloneable group to save the couples of questions and answers, so we should have a loop to display them all.

![A loop to display Q&As](https://imgur.elightup.com/gPI24FW.png)

Inside this loop, enter these lines of code. (We did it following the instruction below).

![Add code following the instruction](https://imgur.elightup.com/cHIIatk.png)

**In there**:

* `question`: the ID of the Question field.
* `answer`: the ID of the Answer field.
* Since it is in a cloneable group, I have the prefix text `- clone`.

Now, go back to the FAQs page editor, and test how the data stored in the custom fields display visually on the page. Whenever you fill in the information in the field, the same information will be simultaneously displayed visually on the page.

![The same information will be simultaneously displayed visually on the page when filling in the information in the field.](https://imgur.elightup.com/FC6QFxd.gif)

These are the questions and answers that we need. However, they naturally have no style, including the display on the preview and on the frontend.

![The Q&As with no style display on the preview](https://imgur.elightup.com/dmhAKZC.png)

![The Q&As with no style display on the frontend](https://imgur.elightup.com/utAtrgh.png)

### 3.2. Styling the block

To have a better look for the questions and answers, those are in a block, we should go back to the settings of the block instead of the page editor. We should add some div tags and classes to the **Render code** section. And you also can use CSS as well.

![Add some div tags, classes and CSS to the Render code section.](https://imgur.elightup.com/szKy3Ei.png)

Then, go back to the page, you will see the new look of the Q&As.

![The new look of the Q&As on the page](https://imgur.elightup.com/N71jB4M.png)

We have finished **creating an FAQs page** using custom blocks and custom fields with the help of the **MB Blocks**. However, this is the way we do it with custom fields. There is also a way to create FAQs using custom post type. It's similar to displaying posts on an archive page, maybe with some filters. Check out our tut for creating a [simple listing page](https://docs.metabox.io/tutorials/create-simple-listing-meta-box-wp-grid-builder/).
