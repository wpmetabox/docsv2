---
title: Creating dynamic landing page in WordPress - Meta Box + Elementor
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Did you spend a lot of time and effort creating landing pages for multiple marketing campaigns by adding one by one image or text to the page template, even when they have the same structure of content?

We bring a comprehensive solution for these cases, named **Dynamic Landing Page**. Just build a page as a sample with **content saved in custom fields**, have a template for it with a perfect interface. Then, when having a new campaign, just **duplicate the page**, and **change the content from the fields**. You’ll have a new landing page with new messages without touching the template anymore.

In this practice, we will figure out how to create a dynamic landing page using custom fields created with **Meta Box**, and displaying with **Elementor**.

These are some example landing pages which have the same structure and different content. I will build a sample template for them now.

![](https://i.imgur.com/Cx6Lp2Y.png)

## Video version

<LiteYouTubeEmbed id='ePcIeSMp50I' />

## Preparation

We need the following tools for this practice:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have the framework for creating custom fields. It’s free, and you can download it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/);
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create the custom fields efficiently;
* [MB Testimonials](https://metabox.io/plugins/mb-testimonials/): a ready-to-use solution from Meta Box that helps to create a testimonial section with pre-built layouts;
* [Meta Box - Elementor Integrator](https://metabox.io/plugins/mb-elementor-integrator/): to get dynamic data from custom fields and display them on the page easily;
* [Meta Box Group](https://metabox.io/plugins/meta-box-group/) and [MB Tabs](https://metabox.io/plugins/meta-box-tabs/) (optional): to organize custom fields into groups or tabs with a clearer structure;
* Elementor and Elementor Pro on your site to build the page.

Let’s start now!

## 1. Creating a new page

Go to **Pages** > **Add New** to create a new page as usual.

![Go to Pages, Add New to create a new page ](https://i.imgur.com/FGckQwS.png)

I leave it blank since all the content will be put in the custom fields that I’ll create in the next step.

## 2. Creating custom fields

We will create custom fields for every element on the page and organize them in groups and tabs based on sections on the page.

![organize custom fields in groups and tabs based on sections on the page thanks to Meta Box Group and MB Tabs](https://i.imgur.com/fBQoksC.png)

For some kind of content, you may use cloneable fields or cloneable groups.

![you may use cloneable fields or cloneable groups for some kind of content](https://i.imgur.com/KTGDmjx.png)

In short, just create the fields following your content structure. We have more than 40 field types for almost every kind of data and layout, so just exploit them best.

Now, go to **Meta Box** > **Custom Fields** and create those fields.

![go to Meta Box > Custom Fields and create custom fields](https://i.imgur.com/LBJv7vP.png)

To create tabs, just add a field with the type as **Tab**.

![To create tabs, add a field with the type as Tab](https://i.imgur.com/Y1BVqUe.png)

Then add some fields.

![add some custom fields for the Hero Section](https://i.imgur.com/l1KGkcX.png)

All the fields below the **Hero Section** tab field will be displayed in the tab.

For the menu on the landing page, there will be multiple items on the menu. Each one of them includes the label and its link. So I will create a cloneable group.

![create a cloneable group for the menu on the landing page since there will be multiple items on the menu. Each one of them includes the label and its link.](https://i.imgur.com/TmZdaZu.png)

The sub-fields will be used to input the label and URL of each item.

![The sub-fields will be used to input the label and URL of each item.](https://i.imgur.com/ZolPxWo.png)

The button information will be in a group as well.

![The button information will be in a group as well](https://i.imgur.com/y5jCXxf.png)

Next, I add a new Tab field.

![add a new Tab field](https://i.imgur.com/Ayvt80y.png)

Whenever you do that, it’s understood that the fields between the first tab field and this new tab field belong to the first one.

![the fields between the first tab field and the new tab field belong to the first one](https://i.imgur.com/KyKFjLy.png)

Go ahead with the other fields. Just keep in mind the expected structure and create fields to follow it.

![continue creating custom fields following the expected structure](https://i.imgur.com/FfupIXi.png)

For the content in the testimonials section, I’ll use the **MB Testimonials** extension to build it, so I’ll create only a custom field for title, and another one for description of this section. All other content of this section will be created later.

![For testimonial section, create custom fields for title, and description. Other information will be made by MB Testimonials](https://i.imgur.com/xYX7YDi.png)

After creating all the fields, move to the **Settings** tab, set the **Location** as **Post Type**, and choose **Page**.

![After creating all the fields, move to the Settings tab, set the Location as Post Type, and choose Page](https://i.imgur.com/6L68LRw.png)

Go to the **Advanced location rules** section below, and choose the name of the page we created for the dynamic landing page.

![Go to the Advanced location rules section below, and choose the name of the page we created for the dynamic landing page.](https://i.imgur.com/Cv2gcb3.png)

Go to the page editor, you will see all the fields.

![all the custom fields displayed](https://i.imgur.com/DvQ73hf.gif)

Just input the content that you want to be on the landing page to the corresponding fields. I did it with some content for example.

![input the content that you want to be on the landing page to the corresponding fields](https://i.imgur.com/O8o5STZ.gif)

## 3. Creating testimonials

When activating the MB Testimonials solution, there will be a menu in the dashboard.

![The menu of testimonials in the dashboard when activating the MB Testimonials solution](https://i.imgur.com/F8oFFka.png)

Go there and add a new testimonial for your page.

This section is to add content of each feedback from your customers.

![The section is to add content of each feedback from your customers](https://i.imgur.com/nS1buTv.png)

If you want to add more feedback from another person, just click the **Add more** button.

![click the Add more button to add more feedback from another person](https://i.imgur.com/x7QKk9D.png)

This MB Testimonial solution also provides some pre-built layouts. You can choose one.

![choose one of pre-built layouts of MB Testimonials solution](https://i.imgur.com/kpdcufR.png)

Also can set some parameters for the styling.

![set some parameters for the styling](https://i.imgur.com/8dX1mZV.png)

There will be a shortcode automatically generated, just copy it since we will use it on the page.

![copy the shortcode automatically generated](https://i.imgur.com/WVAKBcp.png)

We had another tutorial on [how to use the MB Testimonials solution](https://docs.metabox.io/extensions/mb-testimonials/) to create and customize the testimonial section. You can watch it for more details.

Let’s move on to the next step.

## 4. Create skins to display content from groups

Since we have some fields in groups, and Elementor does not support displaying data from them directly on a template, we should create a skin for each group first.

Note that each skin is just for a group. So, there are how many groups of fields, there also are how many skins.

Go to **Templates** > **Theme Builder**.

![Go to Templates > Theme Builder to create skin for groups](https://i.imgur.com/PFVzdlO.png)

There will be the **Meta Box Group Skin** menu. Click on it and add a new skin.

![Click on the Meta Box Group Skin menu and add a new skin.](https://i.imgur.com/iB1DIa5.png)

In the **Preview Settings** section, select the **Page** and find out the name of your page.

![In the Preview Settings section, select the Page and find out the name of your page.](https://i.imgur.com/D1RQUZV.png)

Let’s add some elements and use Dynamic Tags to get and display content from subfields of the group.

### 4.1. Skin for the Menu

I will take this first skin for the menu for example.

Add a **Section** element to cover the menu.

![Add a Section element to cover the menu](https://i.imgur.com/Dv6wprF.png)

Add a **Heading** element for the name of the item.

![Add a Heading element for the name of the item](https://i.imgur.com/IcPC2Z4.png)

This name is from custom fields, so use the **Dynamic Tags**, choose the **Meta Box Field** option.

![use the Dynamic Tags, choose the Meta Box Field option to get the name of item](https://i.imgur.com/LjS5qgl.png)

Then, look for the name of the field that saves the menu’s name. Here I chose **Menu Tittle**.

![look for the name of the field that saves the menu’s name](https://i.imgur.com/30218uC.png)

Although the group for menu items is cloneable, just the first item will display on the preview. It does not matter.

Each menu item should be clickable and link to the URL that saves in custom fields as well. So in the **Link** option, also use **Dynamic Tags**, choose **Meta Box Field** option, and choose the field that saves the links.

![in the Link option, also use Dynamic Tags, choose Meta Box Field option, and choose the field that saves the links of the menu](https://i.imgur.com/YmVLXx8.png)

I have finished getting items to display on the menu.

Go ahead to create a new skin for getting content from another group. The next one is for the button.

### 4.2. Skin for the Button

Also add elements and use Dynamic Tags to get data from custom fields.

![Also add elements and use Dynamic Tags to get data for the button from custom fields](https://i.imgur.com/juKbtIc.png)

This is a button, so you can style it a little bit.

![style button a little bit](https://i.imgur.com/7uh1Hqv.png)

### 4.3. Skin for Features Section

Do the same for the skin to display the featured information.

![Do the same for the skin to display the featured information](https://i.imgur.com/IcRXSr6.png)

### 4.4. Skin for Pricing

If your landing page has **nested groups**, just create skin for the subgroup first. In this case, it is the skin for the items in each plan.

![If your landing page has nested groups, just create skin for the subgroup first, here, create the skin for the items in each plan.](https://i.imgur.com/B2l6cxl.png)

After that, create another skin for the group that covers it. Just add elements as usual for other content in the group.

![create another skin for the group that covers it. Just add elements as usual for other content in the group](https://i.imgur.com/PDjubZa.png)

For content from the subgroup, add the **Meta Box Group** element.

![For content from the subgroup, add the Meta Box Group element](https://i.imgur.com/rVyVAW4.png)

Choose the name of the subgroup. And set the skin as the one we’ve just created.

![Choose the name of the subgroup. And set the skin as the one we’ve just created](https://i.imgur.com/1txYnIf.png)

Remember to change the Type of this element to be the Subgroup as well.

![change the Type of this element to be the Subgroup](https://i.imgur.com/i1YaGIv.png)

### 4.5. Skin for Reasons Section

Next, do likewise to create a skin for the reasons section.

![do likewise to create a skin for the reasons section](https://i.imgur.com/nzw6AlJ.png)

I have already created skins for all the groups for my landing page.

![all of the skin for groups for the landing page](https://i.imgur.com/wxBmNet.png)

## 5. Creating template for the landing page

Go to the page editor and edit it with Elementor.

![Go to the page editor and edit it with Elementor](https://i.imgur.com/XcoRcDz.png)

Set the **Page Layout** as **Elementor Canvas** to make this page totally blank without any pre-built header and footer.

![Set the Page Layout as Elementor Canvas to make this page totally blank without any pre-built header and footer.](https://i.imgur.com/p878AD5.png)

To create a header, just choose a reasonable layout. Here, I have 2 columns: one is for the logo, and the rest is for the menu.

![To create a header, choose a reasonable layout. Here, I have 2 columns: one is for the logo, and the rest is for the menu.](https://i.imgur.com/3neKWxT.png)

### 5.1. Displaying content from the stand-alone fields

In the first column, add a reasonable element for the content that is from a stand-alone field (which is not in any group), such as the logo of the landing page.

![In the first column, add a reasonable element for the content that is from a stand-alone field](https://i.imgur.com/vosZdcw.png)

Then use Dynamic Tags to get data from the corresponding custom field.

![click the dynamic tags and choose the Meta Box Field](https://i.imgur.com/qfJT1nA.png)

![choose the corresponding field](https://i.imgur.com/zj7Blg1.png)

### 5.2. Displaying content from the groups

For the second column, since it's a menu from a group, and we’ve created a skin in the previous step, just look for the **Meta Box Group** element.

![For the second column, since it's a menu from a group, and we’ve created a skin in the previous step, just look for the Meta Box Group element.](https://i.imgur.com/4mby82t.png)

Set the name of the group as the one we created for the menu. And choose the corresponding skin. Then, you will see the menu display with all the items.

![Set the name of the group as the one we created for the menu. And choose the corresponding skin. Then, the menu display with all the items.](https://i.imgur.com/BDeA7ag.png)

So, we have a rule about getting data from the custom fields.

* Firstly, for the **content from the stand-alone field**, just **add a corresponding element**, then **use Dynamic Tags to get data** from the wanted field.
* Secondly, for the **content from the groups**, we had **skin** for each group. So, add the **Meta Box Group** element, set the name of the group that we want to get data from, and choose the corresponding skin.

Please be aware that we should follow this rule through all of these steps to get full content from custom fields.

![follow the rule through all of these steps to get full content from custom fields](https://i.imgur.com/p4E8JfG.png)

### 5.3. Displaying the testimonial section

We also have a special section for testimonials. It has the section’s title and description from custom fields, so follow the rule.

![follow the rule to get Testimonial section’s title and description from custom fields](https://i.imgur.com/wXjnjNF.png)

We created a testimonial with the MB Testimonials solution from Meta Box and copied its shortcode in the previous step. To get data from MB Testimonials, just add a **Shortcode** element.

![To get data from MB Testimonials, just add a Shortcode element](https://i.imgur.com/iSG3yQp.png)

Then paste the shortcode to the box as follows:

![paste the shortcode to the box](https://i.imgur.com/mKEA5hz.png)

And this is our landing page on the frontend with all information displayed, including testimonials.

![the landing page on the frontend with all information displayed, including testimonials](https://i.imgur.com/2GV6vgw.gif)

The next work is styling this page.

## 6. Styling the page

### 6.1. Customizing the skins

You should style each element in the created skins first since the skin regulates how the data from the groups displayed. Just do it one by one.

![You should style each element in the created skins first since the skin regulates how the data from the groups displayed. Just do it one by one](https://i.imgur.com/RdMbCMd.png)

### 6.2. Customizing the page template

Lastly, go to edit the page with Elementor. Style each element as well. Absolutely, you may need some CSS for advanced display.

![go to edit the page with Elementor. Style each element as well. you may need some CSS for advanced display](https://i.imgur.com/SrfrTLl.png)

You’ll have the new look of the landing page.

![the new look of the landing page](https://i.imgur.com/oIfqVMV.gif)

But, I use this page as a sample only. **It’s not for any specific marketing campaign**. To create one for a campaign, we should go ahead to the next step.

## 7. Cloning the landing page for specific campaigns

When you have a new marketing campaign, just follow these steps:

1. **Clone the dynamic landing page** that we have just created to a new one;
2. Change the page’s content in custom fields, and you’ll get a new landing page.

To clone the page but keep its layout built with Elementor, we should use a third-party plugin named **Duplicate Page**. It’s available on repo. Just look for it and install.

![Look for and install Duplicate Page to clone the page but keep its layout built with Elementor](https://i.imgur.com/w7aQpgK.png)

There will be a new option to duplicate the landing page under the page.

![There will be a new option to duplicate the landing page under the page.](https://i.imgur.com/AugpYWq.png)

Just duplicate it to any number of pages you want. I just created two to easily show you the concept.

![duplicate it to any number of pages you want. I just created two to easily show you the concept](https://i.imgur.com/5Wxp3W8.png)

Next, you should go to **Custom Fields** in **Meta Box**, and add location for the field group that we created for the landing page as the new pages.

![go to Custom Fields in Meta Box, and add location for the field group that we created for the landing page as the new pages](https://i.imgur.com/Sa8CVav.png)

Go to those pages editor, you will see that they inherit all the custom fields including data saved in them.

![Go to those pages editor, you will see that they inherit all the custom fields including data saved in them](https://i.imgur.com/Mx7jSCV.png)

Just change it to the new one matched with your new campaign.

![Just change it to the new one matched with your new campaign](https://i.imgur.com/Etb9ehE.png)

Go to the pages on frontend, you will see that you now have different versions of pages. Just different in content but the same layout.

![different versions of pages with different in content but the same layout](https://i.imgur.com/pjF8u0p.png)
