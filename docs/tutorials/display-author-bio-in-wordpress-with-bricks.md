---
title: Displaying author bio in wordpress - Meta Box + Bricks
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Having a section for their bio is to let people know more about the author who made the fantastic content. This way also helps to improve the credit of the content as well as the author on the post. Let’s dive in to explore how to display them with **Meta Box** and **Bricks**. 

This is an example for the bio section that we will create in this practice.

![This is an example for the bio section](https://i.imgur.com/iVqEoAy.png)

## Video Version

<LiteYouTubeEmbed id='IyffwB3IXhk'/>

## Preparation

Each author will be a user on your WordPress website. They also have an account with some basic and default place for information as WordPress provided. As well as, we’re using custom fields for some extra information that you can flexibly input any kind of data.

As a result, they can publish a post on their own. You can dig into [the tutorial on having Guest Authors](https://metabox.io/add-guest-author-guest-posts-meta-box/) for more details. In this practice, we are going to find out just how to display their information on each post they made.

In this practice, we need some tools:

* [MB Relationships](https://metabox.io/plugins/mb-relationships/): to create a bi-direactional relationship between posts and users to know which post from which author.
* [MB User Meta](https://metabox.io/plugins/mb-user-meta/): It allows you to create fields for users.
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to create custom fields to save author information on an easy-to-use UI.
* [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/): to manage the posts from which authors and show it on the admin screen.
* **Bricks** to build the page.

## 1. Creating custom fields

WordPress provides just some basic fields for users to save the most common information. So, to save more things such as social links, phone, address,... I’ll create custom fields, then assign them to users.

Go to **Meta Box** > **Custom Fields** to create the fields.

![Go to Meta Box > Custom Fields to create the fields](https://i.imgur.com/Hm0WACb.png)

After having all the fields, move to the **Settings** tab, set the **Location** to apply the fields to **User**. Notice that, we can do this only when activated the [MB User Meta](https://metabox.io/plugins/mb-user-meta/) extension.

![move to the Settings tab, set the Location to apply the fields to User](https://i.imgur.com/osVTxd8.png)

Go to the user profile page, you will see the field in each account, and you can input information to them.

![These are the field in each account](https://i.imgur.com/mtH9nd4.png)

## 2. Creating the relationship

Go to **Meta Box** > **Relationships**, and create a bi-directional relationship between the posts and the authors.

![Go to Meta Box > Relationships, and create the relationship between the posts and the author](https://i.imgur.com/fwbvQIo.png)

There’ll be two sections: **From** and **To** with the same structure of settings.

![Enter all the settings for the relationship and each side of it in two sections](https://i.imgur.com/nQRG45r.png)

Because Meta Box supports bi-directional relationship, so these two sections are just for separate two objects to connect, the order will be not matter. I set the **Object Type** as **Post** in the **From** section and **User** in the **To** section.

![set the Object Type as Post in the From section and User in the To section](https://i.imgur.com/KbkGP26.png)

Because I activated the [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) extension before, I have the following option in both two sections of the relationship’s settings. You should check the box to manage the posts and who publishes them better.

![show as an admin column option in both two sections of the relationship’s settings](https://i.imgur.com/h58JdqT.png)

It will help to display the related posts from the relationship on the dashboard like this.

![This is authors are related to posts](https://i.imgur.com/PIuuaw8.png)

In the **Field** tab, you can set the label for the relationship section in the post editor.

![In the Field tab, set the label for the relationship section in the post editor](https://i.imgur.com/RpJFIKW.png)

After publishing the relationship, you will see a new field on the right sidebar in the post editor of each post type.

![The box as a field at the right sidebar to choose which author is related to the current post](https://i.imgur.com/y23c757.png)

Go to the user profile page, you will have a field to choose which posts contributed by this 
author.

![This is a field to choose which posts contributed by the author](https://i.imgur.com/2rXZLb4.png)
 
As well as, in the post editor, you also can choose an author who is related to the current post. You can select several authors in this section.

![This box to choose which author is related to the current post](https://i.imgur.com/qKe5G24.png)

## 3. Displaying the author information on the page

You might have a template for the singular page where you display the post content.

![This is a template for the singular page where display the post content](https://i.imgur.com/jgxXe7K.png)

Go to **Bricks**, and edit the template.
 
![Go to Bricks, and edit the template](https://i.imgur.com/nxRrgfb.png)

Go to the settings of this template, set a condition to assign to **Post** in the Post type.

![In the setting of template, set a condition to assign to Post in the Post type](https://i.imgur.com/mHPySAi.gif)

And, also set a preview for it in the **Populate content** section.
 
![set a preview for it in the Populate content section](https://i.imgur.com/cWGNfYn.png)

I’ll add the author bio at the bottom of the page body. So, add the **Heading** element for this section.

![add the Heading element for the author section](https://i.imgur.com/u0VIrNE.png)

Add a **Block** for the section. 

![Add a Block element for all information of the author](https://i.imgur.com/6iHj7OG.png)

I also will use this **Block** element again to set the layout and easier style later. Or, you can use the **Div** element instead.

![Use this Block element again to set the layout and easier style later](https://i.imgur.com/yaI4oUP.png)

### 3.1. Setting the query to get user

Before displaying the author information, we should set a **Query** to get only the user who is set as author in the relationship field. So, enable query loop for the block which will cover all the author information. 

![Enable query loop for the block to cover all the author information](https://i.imgur.com/Cv82Orz.png)

Instead of setting the query type as **User**, I’ll set the name of the relationship between **Post** and **User** that I created in the previous step. This setting helps us to query all the authors related to this post, not only one author if you use the default field for author from WordPress.

![Set the name of the relationship between Post and User to query all the authors related to this post](https://i.imgur.com/7moYkWE.png)

Now, it’s time to display the author's information.

### 3.2. Displaying the author information

I will create a section with some basic information about an author like this.

![This is a section with some basic information about an author](https://i.imgur.com/JWKuQIg.png)

Based on the fields you have for the author, and which one you want to show, just add reasonable elements inside the Block element that we added the query to.

Add an **Image** element for the author avatar. 

![Add an Image element for the author avatar](https://i.imgur.com/Od62JNV.png)

Then select dynamic data from the corresponding field.

![select dynamic data from the corresponding field](https://i.imgur.com/ATuSO9q.png)

For the name, title, and bio. I choose the **Basic Text** element. 

![For the name, title, and bio, choose the Basic Text element](https://i.imgur.com/nGf22Sd.png)

And also set dynamic data for each of them. Here I set dynamic data for names as an example.

![Set dynamic data for names as Nicename](https://i.imgur.com/zGQmg8p.png)

Do the same with the title and bio.

![Set dynamic data for the title and bio](https://i.imgur.com/9saBJBL.gif)

The contact information saved in a group field. We should use a query to get data from the group. So, I added another **Block** element, and enabled the query loop for it. Then, set the type of the query as the name of the group field for the contact information.

![Add another Block element for contact information](https://i.imgur.com/3dtZzv4.png)

![Enable the query loop for the Block element, set the type of the query as the name of the group field](https://i.imgur.com/UkRm0CL.png)

Then use the **List** element to display the contact info.

![Choose List element to display the contact info](https://i.imgur.com/twTFI6P.png)

Add the title for Website information, and set the **Meta** setting as dynamic data from the matched subfield of the group.

![Add the title for Website information, and set the Meta setting as dynamic data from the matched custom field](https://i.imgur.com/wLB4enw.png)

For other contact information, do the same. Just change the title and set the **Meta** settings.

The last part is where we show all the icons for the social linking. The links also are saved in a group, so I add a **Block** element once again. Also, set a query for this **Block** element from the group of custom fields for social networks.

![add a Block element and set a query for social networks](https://i.imgur.com/W07MBQ3.png)

Then, add some **Icon** elements inside the block. Each one will be used for a social network linking.

![Add some Icon elements used for social network linking](https://i.imgur.com/xV7AKbk.png)

In each **Icon** element, choose an icon to display.

![Choose an icon to display](https://i.imgur.com/Z2vIsAy.png)

Set the **Link** as **External URL**. Then, in the **URL** option, set dynamic data from a subfield of the group as well.

![Set the Link as External URL and set dynamic data from a subfield of the group](https://i.imgur.com/2hg5o6E.png)

Do likewise for all the social network icons.

After getting all the expected information for the author, just go to the page on the front end, you will see the result of all the author information without any style.

![This is the result of all the author information without any style](https://i.imgur.com/hsQ5zCZ.png)

### 3.3. Styling the section

To make the author bio section look better, go back to the page template, change the settings of each element.

This is the desired look for the section.

![This is the desired look for the section](https://i.imgur.com/iVqEoAy.png)
