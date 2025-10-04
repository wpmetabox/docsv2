---
title: Showing posts with specific criteria - Meta Box + Zion
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Today, we’ll show you how to display posts with specific criteria, such as products that are on sale, using **Meta Box** and **Zion**.

This is an example archive page that only displays the dishes on sale.

![Example of an archive page displays products on sale](https://imgur.elightup.com/mhYhltr.png)

## Video version

<LiteYouTubeEmbed id='t4yXHWkwbhk' />

## Preparation

The products will be the dishes, which are posts of a custom post type. These dishes will contain essential details such as name, description, and image. Additionally, there may be extra information stored in custom fields.

In this tutorial, I have two fields in order to save the original price and the promotional price. Only dishes that have a value in the promotional price field are on sale and will be displayed on the page.

Here are the needed tools:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom post types and custom fields;
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the dishes;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have an intuitive UI to create custom fields in the backend;
* [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) (optional): to display custom fields as an admin column to know exactly which one will be shown on the page;
* **Zion Builder** and **Zion Builder Pro**: to build the page.

## 1. Creating a new custom post type

Go to **Meta Box** > **Post Types** > **Add New** to create a new post type for your products.

![Create a new custom post type for products](https://imgur.elightup.com/dHPs2V5.png)

## 2. Creating custom fields

I’ll create two fields as an example. As I mentioned, the value stored in these 2 fields will be set to the condition to choose which dishes will be displayed.

![Created custom fields for extra information of products](https://imgur.elightup.com/TWzWP5Z.png)

You also can add some other custom fields to save more information about your product and display it on the page in the same way.

To easily identify which products are on sale, you can set both of these fields as admin columns like this.

![Show created fields as admin columns](https://imgur.elightup.com/khMin0M.png)

Do it by checking this box in both fields’ settings.

![Set the custom fields as show as admin column](https://imgur.elightup.com/WpcWAYf.png)

You’ll have this setting only when you enable the MB Admin Columns extension.

After creating all the fields, move to the **Settings** tab > set **Location** as **Post type** > select **Cuisines** to apply these fields to it.

![Set the location for the created fields](https://imgur.elightup.com/xmmmpmW.png)

When creating a new post in the **Cuisines** post type, you’ll see all the created custom fields.

![All the created custom fields appear in the post editor](https://imgur.elightup.com/mv5X2Qj.png)

## 3. Displaying the products on page based on a condition

Now, we’re going to create a new page to display the product information.

Since **Zion Builder** does not support styling this page title, we’ll disable it and create a new one later so that we can style it ourselves.

![Disable the page's title](https://imgur.elightup.com/tHSqnZO.png)

After creating the page, let’s edit it with **Zion Builder**.

First, add the **Section** element to cover all the content of the page.

![Add the Section element to cover all the content of the page](https://imgur.elightup.com/i349C4O.png)

Next, choose the **Container** element. Inside this container, add the **Heading** element to get the page’s title. In the dynamic data section, choose the **Post Title** option.

![Choose the Post Title option to get the page's title.](https://imgur.elightup.com/CZI9MMm.png)

You see the title of the page displayed immediately.

![The title of the page displayed immediately](https://imgur.elightup.com/3sgbk2Y.png)

### 3.1 Setting the condition

To show all the main content of the page for the products currently on sale, add another **Container** element. Since the products are arranged in three columns, add a **Column** element inside.

![Add container and column elements.](https://imgur.elightup.com/nZXv3Bc.png)

To display multiple posts, we need to enable a repeater for the above column.

In the settings of the **Column** element, go to the **Advanced** tab > **Repeater** Options and **enable the repeater provider**.

![Go to the Advanced tab, choose Repeater Options and enable the repeater provider.](https://imgur.elightup.com/ZFMXTo4.png)

Now, we’ll get all the posts from the wanted post type. In the **Post Type** section, find the right one. In my case, it’s **Cuisines**.

![Get all the posts from the Cuisines post type.](https://imgur.elightup.com/Jx9mhTQ.png)

Remember to turn on the **Enable the repeater consumer** option to display all the posts in the chosen post type.

![Turn on the Enable the repeater consumer option to display all the posts in the chosen post type.](https://imgur.elightup.com/yP0biNh.png)

In this practice, I’ll only show the posts that have a value saved in the **Promotional Price** field that is the specific criteria that I mentioned before. To do that, scroll up the settings to go to the **General options** section.

In the **Element visibility** option, choose **Advanced conditions**. Then, the **Element Condition** option will display.

![In the Element visibility option, choose Advanced conditions. Then, the Element Condition option will display.](https://imgur.elightup.com/0izo2Yn.png)

Click on the **Set advanced conditions** button, a popup will appear. It allows you to define the conditions. The mentioned condition is set based on the value of a custom field with the **ID** `promotional_price`. Therefore, choose the **Post custom field** option and fill in the field ID into the box as follows. And, select the **Is set** option because my condition is to set whether any value exists in the **Promotional Price** field or not.

![The condition of getting the wanted posts](https://imgur.elightup.com/oNb3HHr.png)

This condition means that if there is any value in this field, the post will be displayed.

As we haven’t chosen any kind of information about the product to show yet, it’s still blank there.

![As we haven't sealected any product information to display yet, it remains empty.](https://imgur.elightup.com/Hb6uakY.png)

### 3.2 Displaying the products information

Now, let’s add some elements to display the product's information as well as the dish’s information.

For the image of the dish, add the **Image** element. Then, connect it to the featured image of the post by using the **Use dynamic data** button. In the list of displaying options, find the **Featured Image** in the **Post** section.

![Get the image of the dish from custom field.](https://imgur.elightup.com/zYzXxA2.png)

Now, all the featured images have been obtained.

![All the featured images have been obtained.](https://imgur.elightup.com/uttYzf0.png)

Next, select the **Column** element to contain the remaining information about the dish.

For the dish’s name, add the **Heading** element and choose **Post Title** in the dynamic data section.

![Add the Heading element for the dish's name](https://imgur.elightup.com/yVr5JCy.png)

You see that the dishes names are displayed.

![The dishes names are displayed](https://imgur.elightup.com/nV9MVK2.png)

Add the **Column** element one more time to cover both the original price and the promotional price.

For the original price information, choose the **Text Editor** element. Since this information is saved in custom fields created by **Meta Box**, click **Use dynamic data** and find the **Meta Box Field** in the **Post** section, then choose the corresponding field like in the image below.

![The dishes names are displayed](https://imgur.elightup.com/aSq6v15.gif)

As you can see in the gif, a number will be displayed without a unit of pricing. To have the unit displayed, and add the currency unit in the box like this.

![Add the currency unit](https://imgur.elightup.com/tSo6xr2.png)

For the promotional price information, do likewise.

![Get the promotional price information](https://imgur.elightup.com/iSFwJeC.png)

To get the last information - the dish’s description, select another **Text** element. In the dynamic data section, choose the **Post Content** option.

![Get the dish’s description form custom field](https://imgur.elightup.com/LfLsaAr.png)

Now the dishes' descriptions have been obtained.

![The dishes' descriptions have been obtained](https://imgur.elightup.com/xEL0G3N.png)

We’ve just finished getting all of the information about the dish.

## 4. Styling the page

Back in the page editor with **Zion Builder**, you can change the settings of each element to style them as you want.

Go to the frontend, you can see all of the dishes along with the information that we’re looking for.

![All of the dishes along with the information that we’re looking for](https://imgur.elightup.com/mhYhltr.png)

You can compare the list of posts displayed on the page with the ones in the back end. Which one has the promotional price will be the one displayed on the page.

![Which one has the promotional price will be the one displayed on the page.](https://imgur.elightup.com/khMin0M.png)
