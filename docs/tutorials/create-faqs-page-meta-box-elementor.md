---
title: Creating an FAQs page - Meta Box + Elementor
--- 

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We’re going to add FAQs to a page using Meta Box. And, we’ll use Elementor to build the page.

This is the example page:

![Example of FAQs page created by using Meta Box and Elementor](https://i.imgur.com/sjpQ1l7.png)

## Video version

<LiteYouTubeEmbed id='nGTT2Vl_t1U' />

## Before getting started

We have a FAQs page that needs to have custom fields for saving the questions and corresponding answers for it. So we need these tools to do it:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/) to have the framework for creating custom fields. It’s free, and you can download it directly from wordpress.org.
* [Meta Box Group](https://metabox.io/plugins/meta-box-group/): to organize custom fields into robust and intensely user-friendly groups;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have an intuitive UI to create custom fields in the backend;
* [Meta Box Include Exclude](https://metabox.io/plugins/meta-box-include-exclude/): to add more rules on where to display the field group on the FAQs page;
* [Meta Box - Elementor Integrator](https://metabox.io/plugins/mb-elementor-integrator/): to connect and display data from custom fields created by Meta Box plugin in the Elementor's dynamic tags;
* [Elementor](https://elementor.com/) (Pro version): to build the page for displaying Q&A;

## Step 1: Create a new page

Go to **Pages > Add New** to create a new page for FAQs.

![Create a new page](https://i.imgur.com/1StiUwk.png)

## Step 2: Create custom fields

Go to **Meta Box > Custom Fields** to create a new field group for the page.

These are fields I’ve just created.

![Set group as cloneable to add more questions and answers easily](https://i.imgur.com/2B95tfC.png)

Since each question will go along with the corresponding answer, we have these 2 fields inside a group: Questions and Answers.

There also will be more than one couple of Q&A. So, we set this group to be cloneable to easily add more questions and answers. Then, there'll be an **Add More** button to allow adding more Q&A to the FAQs page as follows.

![Adding more options to the page with Add more button](https://i.imgur.com/zn6ljsx.png)

To avoid being messy when you have too many Q&A on the page, you can set this group to be collapsible. This is optional only.

![Set the group to be collapsible to display the Q&A in a tidy way](https://i.imgur.com/2W0m7B3.png)

It’ll look more clear.

![Fields display the Q&A in a tidy way](https://i.imgur.com/UHecgu8.png)

After creating all the fields, move to the **Settings** tab, choose **Location** as **Post type** and select **Page**. Since we created the fields for the FAQs page, go to the **Advanced location rules** section below and choose the FAQ.

![Set location for FAQs page ](https://i.imgur.com/emaEfTi.png)

Then, you can easily see all the fields in the page editor. Just fill in the Q&A.

![The page with created custom fields ](https://i.imgur.com/DqQ2lHz.png)

## Step 3: Create a skin

If you don’t use a cloneable field, you can get the data as usual, all of them will be displayed with the same style. Here, I used a cloneable field and was willing to have a different style for the questions and answers. So, I’ll create a skin to do it easily.

Go to **Templates > Theme Builder > Meta Box Group Skin > Add New** to create a new skin.

![Create a skin in Template from the Menu Dashboard](https://i.imgur.com/UGJOh3h.png)

![Click Add New for new skin to appear in the Meta Box groups skin](https://i.imgur.com/bFZjnQZ.png)

Remember to set the preview for the skin.

![Set the preview for the skin](https://i.imgur.com/MisYHIc.png)

Then, add a **Heading** element for the questions.

![Get the information as answers that save in MB custom fields](https://i.imgur.com/v6KL4iO.png)

To get the information of the question saved in custom fields, click the **Dynamic Tags** button in the settings of the **Heading** element > choose **Meta Box Field** in the **Post** section.

![Get the information as answers that save in MB custom fields](https://i.imgur.com/t0i8CjF.png)

Then, choose the name of the field you want to get data from. In my case, it’s **Question**.

![Choose the name of the wanted field to get data ](https://i.imgur.com/0QQbvwK.png)

For the answer of the corresponding question, add the **Text Editor** element. Then, also use the **Dynamic Tags** button > **Meta Box Fields** > choose the **Answer** fields.

![Choose Text Editor element for the answer of the corresponding questions created ](https://i.imgur.com/nbwMXmw.png)

Now, both the question and answer have been obtained already.

It’ll automatically get and display the information saved in the first group (means the 1st question and answer) only for the preview.

Since this skin will be applied for the FAQs page, remember to add a condition when publishing it.

![Add a condition when publishing ](https://i.imgur.com/M1jOCwQ.png)

## Step 4: Apply the skin to the page

Go to **Pages** > edit the FAQs page with Elementor.

![Edit the FAQs page with Elementor](https://i.imgur.com/w57xWhG.png)

Since all the information of the Q&A is saved in a cloneable group with subfields, add the **Meta Box Group** element to get the data from that group.

![Add the Meta Box Group element to get the data](https://i.imgur.com/6BXDc6m.png)

Then, there’ll be some data displayed in the preview. However, it may not be the information correctly as you want. So, change the settings in the left sidebar to the needed ones as follows.

![Set options in the left side bar to match the information with the previews](https://i.imgur.com/XsfnVfl.png)

The **Object Type** of the template will have 2 options are **Post** and **Settings** page. Since our custom fields are for a page, we choose the **Post** option. It will be the same if your fields are applied for a post type. In the event that your custom fields are for a settings page, choose another one.

It will be automatically set as the created-latest group in the **Group** section. If it is not the group field you want, you can change them to the right one.

Then all the data will be displayed correctly, but there is no styling.

For styling, choose the skin that you’ve created in the **Skin** section. Then, it will turn to the new look with the style of the created skin.

![Choose the skin created](https://i.imgur.com/p655vfl.png)

Now, all the questions and answers have been shown with different styles.

![Q&A shows with different style](https://i.imgur.com/IVCVx89.png)

Since the element which is the question and answer are set in the skin, you need to go back to the created skin to style it if you want to have more advanced styling.

![Back to the created skin to style](https://i.imgur.com/wle2LFn.png)

Then all the changes in the skin will be automatically applied for the page.

![The result of created faqs page](https://i.imgur.com/sjpQ1l7.png)

