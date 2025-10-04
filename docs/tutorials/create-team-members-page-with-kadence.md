---
title: Creating a team members page - Meta Box + Kadence
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In the previous posts of the [Creating a Team Members Page](https://metabox.io/series/team-members/) series, we have tried with many page builders and Meta Box only. To continue, let’s see how to create the member page using **Meta Box** and **Kadence**.

This page is an example. It shows all your team members and some of their information.

![the page shows all members in the team and their information](https://imgur.elightup.com/58yX6YS.png)

## Video version

<LiteYouTubeEmbed id='OwKakmyronk'/>

## Preparation

Each member information is saved in a post of a custom post type and displayed as a name card. For members' information, the name and the avatar of the member are the title and the featured image of the post. Some extra information such as position, Facebook, Instagram, and Mail will be saved in custom fields.

These are some tools we need in this practice:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have the framework for creating the custom post type and custom fields for the members. You can install it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/);
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the team members;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI in the back end to visually create custom fields;
* The pro version of **Kadence** with some extra types of blocks to build the page.

## 1. Creating a new custom post type

Go to **Meta Box** > **Post Types** > **Add New** to create a new one for the team members.

![go to Meta Box, Post Types to create a new one](https://imgur.elightup.com/aAiS9X9.png)

After publishing, the created custom post type will be displayed in the admin dashboard.

![the created custom post type displays in the admin dashboard](https://imgur.elightup.com/MAl6eZ5.png)

## 2. Creating custom fields

As mentioned before, we’ll create some custom fields to save some common information about each member.

Go to **Meta Box** > **Custom Fields** > **Add New** to create a new field group.

![go to Meta Box, Custom Fields to create a new field group](https://imgur.elightup.com/nOgUCXR.png)

These are the fields that I created:

![Some custom fields created to save the members information](https://imgur.elightup.com/gIQdxIP.png)

For the position, use the **Select** field which provides some options to choose from.

![For the position, use the Select field to have some options to choose from](https://imgur.elightup.com/EFGc88D.png)

Then, fill in those options into the **Choices** box.

![Fill in options into the Choices box for the positions of members](https://imgur.elightup.com/VhPCUQ8.png)

For other information such as Facebook, Instagram, and Mail, you can choose the **URL** field to save the link for those social networks.

![Choose the URL field to save the link for those social networks](https://imgur.elightup.com/dtIqS96.png)

Besides, you can use other field types to save other kinds of members’ information as you want.

After creating all the fields, move to the **Settings** tab, choose the **Location** as **Post Type**, and select **Team Member** to apply these fields to it.

![Set the Location for the field group as Post Type, and select Team Member to apply these fields to it](https://imgur.elightup.com/PxLpcem.png)

Go to the post editor, and you will see the created custom fields.

![the created custom fields display in the post editor](https://imgur.elightup.com/lUMC2RK.png)

Just input information for your members.

## 3. Creating a query card

To get information of each member from posts, we should create a query card first. This is a new feature of the **Advanced Query Loop** from **Kadence**. It allows us to define the template for individual posts within the loop.

Go to **Kadence Blocks** > **All Query Cards** and create a new one.

![Go to Kadence Blocks > All Query Cards and create a new query card](https://imgur.elightup.com/HV7wois.png)

![set the name of the query loop card](https://imgur.elightup.com/pRO7pPx.png)

At the first time, you will see the card display data from blog posts by default. Go to the right sidebar, and set the preview as the post type that we created.

![Set the preview of the query card as the post type that we created](https://imgur.elightup.com/Q1Xgg7s.png)

The preview will change, but it’s just changing in the preview, not querying any data.

I’ll design the cards for each person with two columns inside. So add a **Row Layout** block and choose the layout for the content in the card.

![add a Row Layout block and choose the layout for the content in the card](https://imgur.elightup.com/QSMjUGQ.png)

![Open the structure of block to easily see the structure of content](https://imgur.elightup.com/U4s11te.png)

You can remove the default blocks inside the query card which you don’t use.

![remove the default blocks which you don’t use](https://imgur.elightup.com/soVXA3I.png)

In the first column of the added Row Layout block, add the **Advanced Image** block for the member avatar.

![In the first column, add the Advanced Image block for the member avatar.](https://imgur.elightup.com/er2ONY6.png)

Enable the dynamic image for this block. Then choose the **Featured image** from the **Post** to display them.

![Enable the dynamic image for the Advanced Image block, then choose the Featured image from the Post to display them](https://imgur.elightup.com/TB3cFUv.gif)

The next part is a group of icons for social network linking. So, add a **Section** block.

![add a Section block to cover the group of icons for social network linking](https://imgur.elightup.com/FpO8LGb.png)

Then, add an **Icon** block inside this section.

![add an Icon block](https://imgur.elightup.com/WLbAKgh.png)

Choose an icon for it.

![Choose the wanted  icon on the right sidebar](https://imgur.elightup.com/lqizUX9.png)

Also, enable the dynamic link.

![Also enable the dynamic link](https://imgur.elightup.com/4JhZmJS.png)

And, set the link from the **Post Custom Field**.

![choose the link from the Post Custom Field](https://imgur.elightup.com/T50Leuw.png)

Then, choose the name of a field where you save the link in the **Custom Field** box.

![choose the name of a field where you save the link in the Custom Field box](https://imgur.elightup.com/Dnk3a0S.png)

Duplicate the block to add an icon for another social network.

![Duplicate the block to add an icon for another social network](https://imgur.elightup.com/TejsbCq.png)

Then, just change the field for the link to get the right one from the corresponding field.

![change the field for the link of instagram](https://imgur.elightup.com/OtHyTS8.png)

![change the field for the link of mail](https://imgur.elightup.com/xyR17gu.png)

Next, move to the second column.

To get the name of the member, you can use the **Title** block as usual. But in this case, I want to have more options to customize its style, so I choose the **Dynamic HTML** block.

![choose the Dynamic HTML block for the name of the member to have more options to customize its style](https://imgur.elightup.com/hV9EHhv.png)

Then set the **HTML Content** as **Post Title** to get the member name from the title of the post.

![set the HTML Content as Post Title](https://imgur.elightup.com/LEldTSS.png)

We also use this block to get information about the position.

![also use Dynamic HTML block to get information about the position](https://imgur.elightup.com/Qcudiao.png)

Choose the **HTML Content** as **Post Custom Field**.

![Choose the HTML Content as Post Custom Field](https://imgur.elightup.com/7bbyFVH.png)

And look for the **Position** field on the dropdown list.

![look for the Position field on the dropdown list](https://imgur.elightup.com/fO1hUKo.png)

For the description of members, do the same and set the **HTML Content** as **Post Excerpt**.

![For the description of members, do the same and set the HTML Content as Post Excerpt](https://imgur.elightup.com/OIFjLs1.png)

That’s all the information of the members that I want to show.

## 4. Adding query

We regulated how the information was displayed in the Query Card, but haven’t stipulated where it will query from. So now, go to add a new query in Kadence.

Go to **Kadence Blocks** > **All Queries** and add a new query.

![Go to Kadence Blocks, All Queries and add a new query to stipulate where the information will query from.](https://imgur.elightup.com/bBzukqX.png)

There is a field to choose which post type we want to query from. Choose the post type that we use for the members.

![Choose the post type that we use for the members](https://imgur.elightup.com/PZD9J6B.png)

And, don’t forget to select the created card in this box.

![select the created card in the box](https://imgur.elightup.com/ZFlM02g.png)

Then this loop will inherit the content and styling from the created query card.

![the loop inherited its content and styling](https://imgur.elightup.com/bDHF5s6.png)

So, we’ve done the query basically.

Kadence provides some extra blocks here to add filter, pagination, or sorting to the loop.

![extra blocks to add filter, pagination, or sorting to the loop provide by Kadence](https://imgur.elightup.com/n9BVvfI.png)

I’ll try to add pagination for example.

![try to add pagination for the page](https://imgur.elightup.com/3UQd1tv.png)

There are also options to customize the pagination, but I’ll keep it as default.

## 5. Displaying on the page

First, go to **Pages** > **Add New** to create a new page as usual.

![go to Pages, Add New to create a new page as usual](https://imgur.elightup.com/R0T9b7A.png)

Add the **Advanced Query Loop** block provided by **Kadence**.

![Add the Advanced Query Loop block provided by Kadence](https://imgur.elightup.com/WIZEfSS.png)

Then, choose the query loop we created in the previous step.

![choose the query loop we created in the previous step](https://imgur.elightup.com/WO79clL.png)

Go to the page on the front end, you will see the page displaying all the members’ information, along with the pagination that I added.

## 6. Styling the page

Go back to edit the query loop, you can change some parameters in each block, even each one that we use for the query card, to have a better look.

![Go back to edit the query loop, change some parameters in each block to have a better look](https://imgur.elightup.com/5nu4qV6.png)

Here is the final look of the team member page that I want.

![the final look of the team member page](https://imgur.elightup.com/IrHb6PA.gif)
