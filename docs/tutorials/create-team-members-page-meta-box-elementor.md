---
title: Creating a team members page - Meta Box + Elementor
---


import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';


We will go through some steps to create a team member page using Meta Box and Elementor.

This is a sample we’ll use for this practice:

![Team Members Page](https://imgur.elightup.com/FjOklKG.png)

## Video version

<LiteYouTubeEmbed id='gemgZLtMe84' />

## Preparation

As you can see, each member’s information will be included in a separated box, maybe called a name card. They are saved in posts of a custom post type for team members only.

The name and avatar of the member are the titles and the featured images of the post. And other information such as Position, Facebook, Instagram, and Mail will be saved in different custom fields.

To do it, we need Meta Box and its extensions:

* <a href="https://metabox.io/plugins/custom-post-type/">MB Custom Post Type</a>: to create custom post types for Team Member;
* <a href="https://metabox.io/plugins/meta-box-builder/">MB Builder</a>: provides a UI in the back end to create custom fields easily for Member Information;
* <a href="https://metabox.io/plugins/mb-elementor-integrator/">MB Elementor Integration</a>. allows you to get data from custom fields created by the Meta Box plugin in the templates of Elementor.
* <a href="https://elementor.com/">Elementor</a> (Pro version): to built the page for displaying team members’ information;
* <a href="https://wordpress.org/plugins/ele-custom-skin/">Elementor Custom Skin</a>: to have the Loop template to display the list of posts which are members.

## 1. Creating a new post type

In the **Admin Dashboard**, go to **Meta Box** &gt; **Post Types**, then create a new post type for members.

![create new post type for members](https://imgur.elightup.com/yb8gspm.png)

After publishing the new post types, you will see a new item in your menu.

![Add the post type's name in the box](https://imgur.elightup.com/LECK97n.png)

## 2. Creating custom fields for the post type

Go to **Meta Box** &gt; **Custom Fields** to create a new field group.

For the position information, I’d like to create a **Select** field that allows us to set some options to choose from.

![Create a Select field for Position information](https://imgur.elightup.com/ILn7UvY.png)

For other information such as Facebook, Instagram, and Mail, we set them as **URL** fields that allow us to fill in a link.

![Set URL fields](https://imgur.elightup.com/7R4Yxwc.png)

After creating all the fields, move to the **Settings** tab &gt; **Location** section, choose the **Post Types** as **Team Members** to apply these fields to it.

![Set location for Member Information field group](https://imgur.elightup.com/nXqbnRN.png)

Now, go to the post editor in Team Members post type, you will see the fields. Let's add information for team members.

![Add member's information](https://imgur.elightup.com/CeHd3gg.png)

## 3. Creating a template for the name cards

Go to **Templates** &gt; **Saved Templates** &gt; **Add New.**

Each name card is a post and we’ll display all of them so we should create a template as a loop.

![Create a loop template](https://imgur.elightup.com/1Cg3YHL.png)

Go to the **Preview** settings, choose **Team Members** from the list to get the post from that post type to have a visual preview.

![Get all the posts from team member post type](https://imgur.elightup.com/prLJp0j.png)

Now, we’ll add a widget to create a name card.

Since each name card of a member has 2 columns, one is to display the avatar and social icons, another one is to show the member information, choose the structure as 2 columns for the widget.

![Wiget for the card name](https://imgur.elightup.com/81TJUid.png)

![Select the structure for widget](https://imgur.elightup.com/WoZnO4s.png)

Name the **CSS Classes** in the **Advanced** section for styling the name card later.

![Name the CSS Classes in the Advanced section](https://imgur.elightup.com/WiM15iC.png)

In the first column of the name card, add the **Featured Image** element to have the avatar saved in the featured image of the post. Then, change the size of the image to the thumbnail size.

![Add the Featured Image elements to save the avatar](https://imgur.elightup.com/Ndkj6Xu.png)

All the social contacts are icons with the same style so I’ll add them into a section that will help to style them at once. For it, I choose the **Inner Section**.

![Style the social contacts](https://imgur.elightup.com/wkZE625.png)

Drag an **Icon** element to the section and choose what you want.

To get the links saved in the custom fields such as Facebook, Instagram and Mail, click the **Dynamic Tags** button, choose **Meta Box Field** option in the **Post** section and select the corresponding field.

![Save the link such as Facebook, Mail,... in custom fields](https://imgur.elightup.com/Gi9GB07.gif)

Drag the **Post Title** element to get the name of each member.

![Drag the Post Title element to get the name of each member.](https://imgur.elightup.com/eEAof3c.png)

The position of each member also is saved in a custom field. It’s just text so I add a **Text Editor** element, then also connect it to the corresponding field. Click the **Dynamic Tags** &gt; **Meta Box Field**, then find the **Position** field.

![Add a Text Editor element, then connect it to the corresponding field](https://imgur.elightup.com/NWsSHPj.png)

The description about each member is saved in the **Post** content, so drag the **Post Content** element into the second column.

![Drag the Post Content element as the description about each member is saved.](https://imgur.elightup.com/uUhUlLN.png)

Now, all the information of the team member has been obtained. If you want to style their display, customize the settings of each element as you want.

I made an example as following:

![all the information of the team member has been obtained](https://imgur.elightup.com/w0WufAO.gif)

## 4. Displaying all the members’ name cards on the page

Go to **Pages** &gt; **Add New** to create a Team Members page. Then, **edit it with Elementor**.

Drag the **Posts** widget to the content of the page.

![Drag the Post widget to the content of the page.](https://imgur.elightup.com/VKsQDd7.png)

In the setting of the **Posts** element, I have the **Skin** option in the **Layout** section because I used the **Elementor Custom Skin** plugin. In the **Select a Default Template** settings, choose the **Team Member Template** which we have just created.

![Adjust the layout according to the template created.](https://imgur.elightup.com/hOdCRot.png)

Next, in the **Query** section, choose the source as the post type of your team members to get all the posts from that post type.

![Choose the source as the post type in Query section](https://imgur.elightup.com/g9WZtKT.png)

Now, the preview shows the posts with exactly the information we want.

![Preview of the posts](https://imgur.elightup.com/uQJWMB1.png)

After displaying all the team member’ name cards to the page, you can style the page as you want.

For more advanced styling, I also added some custom CSS. Go to **Posts** element &gt; **Advanced** &gt; **Custom CSS** to add your code.

![Add CSS in the box](https://imgur.elightup.com/zqMlY7Y.png)

Here is my CSS code that you can refer to:

```css
.team-member .elementor-widget:not(:last-child) {
    margin-bottom: 5px;
}
.team-member p {
    margin: 5px;
}
.team-member .member-box .elementor-row .elementor-widget-wrap .social-icon
.elementor-row .elementor-widget-wrap {
    padding: 5px 0;
}
.team-member .member-box .elementor-row .elementor-column .elementor-widget-wrap {
    align-content: center;
}
```
It displays beautifully as I want.

![Team Members Page after adding CSS](https://imgur.elightup.com/b2ENTxJ.png)
