---
title: Creating a team members page - Meta Box + Oxygen
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We’re having this post to create a team member page with Meta Box and Oxygen.

I also made a sample of the page which is built by Oxygen.

![Sample for the Team Members Page with Meta Box and Oxygen](https://i.imgur.com/Zxtz5ca.png)

## Video version

<LiteYouTubeEmbed id='CgI4bxfOkk4' />

## Preparation

Each member’s information will be saved in a separated box, maybe called a name card. They are saved in posts of a custom post type for team members only.

The name and avatar of the member are the titles and the featured images of the post. And other information such as Position, Facebook, Instagram, and Mail will be saved in different custom fields.

Here are some tools we need:

* **[Meta Box](https://metabox.io)**: This is the framework to create custom fields and custom post types. It’s free and available on **[wordpress.org](https://wordpress.org/plugins/meta-box/)**
* **[MB Custom Post Type](https://metabox.io/plugins/custom-post-type/)**: to create custom post types for Team Member;
* **[Meta Box Builder](https://metabox.io/plugins/meta-box-builder/)**: provides a UI in the back end to create custom fields easily for Member Information;
* **[MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/)** (optional): to display the position of each members in the admin area;
* **[Oxygen](https://oxygenbuilder.com/)**: to build the page. You should use the 3.9 version or upper to have integration with Meta Box.

## 1. Creating a new custom post type

Go to **Meta Box > Post Types > New Post Type** to create a Team Members post type.

![Create a new custom post type for the Team Members](https://i.imgur.com/yb8gspm.png)

Then, you will see a post type in the Admin Dashboard.

![A post type in the Admin Dashboard](https://i.imgur.com/pPBwDKq.png)

## 2. Creating custom fields

Go to **Meta Box > Custom Fields > Add New** to create a new field group for the member’s information.

For the position field, I also want to display it in the admin column. So I tick the option **Show as an admin column**. However, this is just an optional setting. Thus, depending on your needs, you can use it or not.

![set the custom fields display as admin columns](https://i.imgur.com/1CTpDiv.png)

After creating all the fields, move to the **Settings** tab > **Location** section, choose the **Post Types** as **Team Members** to apply these fields to it.

![set location for the custom field as the created post type](https://i.imgur.com/nXqbnRN.png)

Now, go to the post editor in Team Members post type, you will see the fields. Let's add information for team members.

![the custom fields display in the post editor](https://i.imgur.com/CeHd3gg.png)

## 3. Creating a template for the page

In the Oxygen, create a new template and choose **inactive - Default Page** to set it to inherit this style.

![create a new template for the team members page](https://i.imgur.com/je3Yd7u.png)

Next, create a new page for the team members and assign the created template to this page in the **Render Page Using Template** section.

![assign template for the page](https://i.imgur.com/nJjF8SB.png)

Let’s edit the template!

In the **Previewing** section, choose the page you want to see the preview. Then, select a **Section** component to contain all of the team members’ information.

![add a Section component for the content in the page](https://i.imgur.com/FqZQutj.png)

To get the title of the page automatically, add the **Heading** component, then click **Insert Data > Post > Title** to connect this component with the title of the page.

![add title for the page by connecting the component to the page title to get information automatically](https://i.imgur.com/tG9l6Xh.gif)

Next, add a **Repeater** component to get the data from all the posts that we use for our team members. To get the source of data, go to **Query > Custom > Post Type** and find the ID of the created post type for our team members.

![add Repeater to get all the posts](https://i.imgur.com/lcCdWoA.gif)

In the below image, there are many small boxes which are the number of posts that I have.

![the Repeater displays many boxes, each one is for a post](https://i.imgur.com/DQgCOWY.png)

To avoid being messy when displaying the posts, in the **Preview Render** section, choose **Single Mode** to see the preview of a post only.

![change the preview of the Repeater to single mode](https://i.imgur.com/wv7wgf5.png)

In this tutorial, each name card of a member has two columns. One is to display the image and social icons. Another one is to show the member information. I'll use two **Div** tags to divide the content into two columns.

![the name card of each member is divided into 2 columns](https://i.imgur.com/kVlLHSO.png)

In the first **Div** tag, add the **Featured Image** component to have the avatar saved as the post's featured image.

![add Featured Image component to get the avatar](https://i.imgur.com/cwjTTWm.gif)

Next, create another **Div** tag for all social icons in order to style them easier later. Then, choose the **Icon Button** component. Since the social links are also saved in custom fields, connect these icons to the corresponding data. Go to **Insert Dynamic Data > Meta Box Field** > choose the corresponding field.

Take the **Facebook** icon as an example:

![link the custom fields to get the data automatically for the Facebook link](https://i.imgur.com/CxPFvce.gif)

Then, you can customize the Facebook icon as you want.

Now, let’s get the member’s information in the second column.

Choose the **Title** component for displaying the member's name since it is the post title.

![add title of the post to get the member name](https://i.imgur.com/ui0VQDO.png)

To get the member's position, add the **Text** component. Then, also connect it to the position field like the way we did with the social icons. After clicking the **Insert Data** button, choose **Meta Box Field > Position**.

![connect the custom fields to the text conponent to get the data of member's position](https://i.imgur.com/Or9sBIy.gif)

Since the **Position** is a select field, the options in the choices box may have only labels as I set in step 2, or include both value and label as normal. In the template editing with Oxygen, when you get the position’s information, there are two options as well. And, I’ll choose the label.

![set the obtained data to get as label](https://i.imgur.com/TusazlW.png)

Finally, choose the **Content** component to get a short introduction of the member.

![add the Content component to get the member's description](https://i.imgur.com/YD84SfS.png)

So, on the Meet the Team page, you can see all the information about the members.

![The members' information display on the page](https://i.imgur.com/zgYdBjR.gif)

Let’s style this page.

## 4. Styling the page

To style this page, you can choose each component and change the settings.

In the **Advanced** tab, there are a lot of choices so that you can style as you want.

![style each element for better display](https://i.imgur.com/nJzvzCM.png)

After styling the components, to see all the posts, just enable the **Preview Render** section to the **Normal Mode**.

![change the preview mode of the repeater to normal mode to show all the posts on preview](https://i.imgur.com/4uFS6Kv.png)

In addition, if you want some further styling, you may try adding some CSS.

![add CSS for additional style](https://i.imgur.com/7egE2fd.png)

Let’s see the result!

![The team members page after all steps](https://i.imgur.com/Zxtz5ca.png)

