---
title: Creating menus for restaurants - Meta Box + Bricks
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

There will be a large number of restaurants on your site and you may want to create their own menu for each one. In this practice, we’re going to do it using Meta Box and Bricks Builder.

This is an example that I created:

![Example of the created menu](https://imgur.elightup.com/erBL42i.png)

## Video version

<LiteYouTubeEmbed id='IKezivBoazI' />

## Preparation

Normally, we can create a new post type and each dish will be a post of that post type. However, in this case, I want to put dishes into a menu for a particular restaurant. And each restaurant including its information will be displayed on a singular page. So, instead of creating each dish as a separate post of different post type, all the detailed information of the dish in the menu will be saved in custom fields stored in the post containing the restaurants’ information.

Here are the tools we need for this practice:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom post type and custom fields;
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create custom post type named Restaurant for the restaurants and menus;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to easily create custom fields that save the dishes’s information;
* **Bricks Builder**: to create the singular page to display the menu.

## 1. Creating a custom post type

Go to **Meta Box > Post Types > Add New** to create a new post type for the restaurants.

![Create a custom post type](https://imgur.elightup.com/72YZrNw.png)

## 2. Creating custom fields

Go to **Meta Box > Custom Fields** to create fields. I’ll create all the fields with the structure like this:

<table>
<tbody>
<tr>
<td> Name </td>
<td> Field type </td>
<td> Settings </td>
</tr>
<tr>
<td>Menu Details</td>
<td>Group</td>
<td>

* Collapsible
* Cloneable

</td>
</tr>
<tr>
<td>Name</td>
<td>Text</td>

</tr>
<tr>
<td>Price</td>
<td>Text</td>

</tr>
<tr>
<td>Description</td>
<td>Text</td>

</tr>
<tr>
<td>Image</td>
<td>Single Image</td>

</tr>
</tbody>
</table>

![The created fields](https://imgur.elightup.com/c8DdCdL.png)

As you can see from the above image, there is a group with 4 subfields inside. These subfields are for the dish detail. To add more dishes, set this group to be cloneable.

![Set the group to be cloneable](https://imgur.elightup.com/yiivMPt.png)

Then, there’ll be an **Add more** button to allow adding more dishes.

![Add more button to allow adding more dishes](https://imgur.elightup.com/Va9Tcdg.png)

If there are many dishes on the menu, it will be a bit messy. So, to avoid messing up, you can set this group to be collapsible.

![Set the group to be collapsible](https://imgur.elightup.com/PNeWhyM.png)

It’ll be neat when adding information for the menu like this.

![The information is displayed in a tidy way](https://imgur.elightup.com/0gIVm99.png)

After creating all the fields, move to the **Settings** tab > **Location** as **Post type** > select **Restaurant** to apply these fields to it.

![Set location for the created fields](https://imgur.elightup.com/DcnUzxe.png)

Then, you can see all the created fields in the post editor. Just fill in the dishes’ details.

![All created fields in the post editor](https://imgur.elightup.com/KhFMMUr.png)

## 3. Displaying the menu information

I already have a singular page that displays all of the detailed information of a restaurant which is a post in the Restaurant post type with a template below.

![The singular page to display all the detailed information of the restaurant](https://imgur.elightup.com/JMBi6OR.png)

Let’s edit the template of this page with Bricks to add the menu.

First, to contain all the menu's information, add a new **Div**.

![Add a Div element to contain all the information](https://imgur.elightup.com/cZ2MV4n.png)

Next, choose the **Heading** element and name the menu.

To contain the dishes’ information, add the **Container** element inside the div. Then, to get the data of the dishes, enable the **Use query loop** button. And in the **Query** section, choose the type of data source. Because our information is saved in the custom fields which are included in a clonable group, we should choose the type as **MB Group** along with the name of the group that we have created for the custom field.

![Choose the Heading element to get the dish's name](https://imgur.elightup.com/E1AeYsS.png)

To get the dish’s name, choose the **Heading** element. As the name of the dish is saved in the custom field of Meta Box, use the **Select Dynamic data** button and choose the field name in which we store the name of the dishes. Now you can see that the dishes’ names have just been displayed.

![Choose the Heading element to get the dish's name](https://imgur.elightup.com/K5HAkiu.gif)

For the dish’s price, choose the **Basic Text** element. It’s also stored in the created custom field. So, we also use the **Select Dynamic data** button and choose the field correspondingly. Then, you’ll see the dish’s price displayed immediately.

![Add a Basic text element for the dish's price](https://imgur.elightup.com/tmkgKhO.gif)

To add the dish’s description, do likewise with the dish’s price. Just duplicate the **Basic Text** element and connect it to the corresponding field to get the right information..

For the last information - the dish’s image, choose the **Image** element. Since the images are also saved in the custom field as well, choose the **Select Dynamic data** button and select the right field. Here, you see that the dish’s image has just been obtained already.

![Add a Image element for the dish's image](https://imgur.elightup.com/QPOYEiH.gif)

We have just displayed all the wanted information of the dishes.

Go to the frontend, you’ll see all of the menu information.

![The menu in the frontend](https://imgur.elightup.com/i2e8Jrj.png)

For further styling, you can go back to the page editor with Bricks Builder and customize each element in your own way. We can add some images to decorate the menu. Here, I just style the page as an example:

![The final result](https://imgur.elightup.com/MyvG5PJ.png)


