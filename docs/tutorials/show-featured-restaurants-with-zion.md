---
title: Showing the featured restaurants - Meta Box + Zion
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In today’s practice, we're going to **show the featured products** using **Meta Box** and **Zion**.

In this case, I use the restaurants as an example of the products. This is the section I’ll create:

## Video version

<LiteYouTubeEmbed id='cgsmhm-JUXg'/>

## Preparation

All of the featured restaurants in this section are chosen manually by a custom field in the backend. Each restaurant is a post of the custom post type named **Restaurants**.

In addition to the basic information about the restaurant, such as the name and image as the title and featured image of the post, it may include some other information, such as the voucher, address, and logo. This extra information will be saved in separate custom fields.

Here are some tools we need for this practice:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework for creating a custom post type and custom fields;
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): create a custom post type for the restaurants;
* [MB Box Builder](https://metabox.io/plugins/meta-box-builder/): create custom fields to save the restaurant information;
* [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) (optional): helps to display the custom fields as an admin column to easily see the information. I use it to show you which restaurants will be featured to easily compare with the result.
* **Zion Builder**: to create the featured restaurant section. You should use its **pro version** to make sure it runs smoothly with Meta Box.
 
## 1. Creating a new custom post type

Go to **Meta Box** > **Post Types** to create a new post type for the restaurants.

![The featured products using Meta Box and Zion.](https://i.imgur.com/c3TYzzc.png)

After publishing, you will see your post type displayed as a menu.

![The post type displayed as a menu](https://i.imgur.com/YcyWpzX.png)

## 2. Creating custom fields

Go to **Meta Box** > **Custom Fields** to create fields to save extra information for the restaurants as usual.

![The post type displayed as a menu](https://i.imgur.com/BEilkwt.png)

Here are all the custom fields that I created.

![All the custom fields for product information.](https://i.imgur.com/jA2cQLp.png)

Besides some familiar fields, I create a **Switch** field to choose whether to feature the restaurant or not.

![Use a switch field to choose to display the restaurant in the section or not](https://i.imgur.com/Lp2Q83A.png)

Turning on the switch button means that the restaurant will be displayed in the section and vice versa.

![If you want to feature the restaurant, just turn on the button](https://i.imgur.com/VInjNQk.png)

I’ll also show the values of this field in the admin column to see whether the restaurant is featured or not by ticking this box. This setting is available only when you have the **MB Admin Columns**.

![The restaurant is featured when you have MB Admin Columns](https://i.imgur.com/OlwQU8Y.png)

And this is how it displays on the admin dashboard.

![The posts displayed in the section from the column.](https://i.imgur.com/MbfUEv1.png)

After having all the fields, go to the **Settings** tab, choose **Location** as **Post type**, and select **Restaurant** to apply the fields to it.

![Go to the Settings tab, choose Location as Post type, and select Restaurant to apply the fields to it](https://i.imgur.com/2Vq031r.png)

In the post editor, you’ll see the created custom fields. The switch field is also displayed. You can turn on or turn off the button to choose to feature the restaurant or not.

![Turn on or turn off the button to choose to feature the restaurant or not.](https://i.imgur.com/7pZNBb0.gif)

## 3. Creating the section

Let’s edit the homepage with **Zion Builder**.

To create the section that shows the featured restaurants, add a **Section** element. Then, choose the **Heading** element and name it.

![Choose the Heading element to name the section.](https://i.imgur.com/OnhoDvQ.png)

Now, add a **Container** element to cover the posts. You can use a **Column** element to easily set the layout for posts.

![Add a Container element to cover the posts](https://i.imgur.com/QCQKO4F.png)

### 3.1 Setting the condition to display featured posts

In the settings of this **Column** element, I’ll add a condition to choose which posts will be displayed. If you don’t use the **Column**, you can add the condition into the **Container** in the same way.

Go to the **Advanced** tab, click on **Advanced conditions** to create a condition.

![Create a new post type for your e-books.](https://i.imgur.com/ciwGZOu.png)

The condition will be based on the value of the switch field, so select the **Post custom field** from the list and fill in the **ID** of the switch field into the box.

![Select the Post custom field](https://i.imgur.com/yQsptgS.png)

![Fill in the ID of the switch field](https://i.imgur.com/GZfthwS.png)

The switch field has two statuses: **On** and **Off**, corresponding to the value **1** or **0**. Since we want to display the post that has this field turned on, we put **1** into the **field value** box.

![Put 1 into the field value box which corresponds to the On status.](https://i.imgur.com/eFCc0Ps.png)

That’s all for the condition. It’s quite simple.

There will be multiple posts in the section, so go to the **Repeater Options** and turn on **Enable the repeater provider**.

![Turn on Enable the repeater provider](https://i.imgur.com/e0luGOB.png)

In the **Query type** section, choose **Query Builder**. In this case, I set the **Post type** as **Restaurant** to get posts from this post type.

![Set the Post type as Restaurant to get posts from this post type.](https://i.imgur.com/wSsMeCZ.png)

Remember to choose **Enable repeater consumers**. This is where you limit the total number of posts that will display.

![Choose Enable repeater consumers to limit the total number of posts that will display.](https://i.imgur.com/IsOnVbe.png)

You can enter numbers to the box in the image below to display only the posts in the range. For example, this is to choose to display the posts from the first to the third position. The ones from the 4th position will be disabled.

![Enter number to display only the posts in the range](https://i.imgur.com/84Ft0Dq.png)

Leaving these boxes blank means that we will display all the posts that meet the condition. Otherwise, disabling the repeater consumer means that no post will be displayed.

### 3.2 Displaying the restaurants information

Now, we’re moving to add elements to display the restaurant information.

To display the restaurant image, add an **Image** element. Then, click on the **Use dynamic data** icon and choose **Featured Image**.

![Display the restaurant image by using dynamic data.](https://i.imgur.com/ESXrXvS.png)

You see that the restaurant's images have been obtained.

![The restaurant's images have been obtained](://imgur.com/DMKVPmu)

For displaying the restaurant name that saves in the post title, add a **Heading** element, and also use dynamic data to get information from the **Post Title**.

![Add a Heading element > use dynamic data to get information from the Post Title.](https://i.imgur.com/A1aiCQh.png)

To set it as clickable, in the **Link** section, also use dynamic data and choose the **Post/ Page Link** option.

![Set the restaurant name as clickable](https://i.imgur.com/nFbFHNL.png)

Next, add a **Text** element for the address. Click on the **Use dynamic data** icon, choose **Meta Box Field** > choose the corresponding field. It is **Address**.

![Display the restaurant address.](https://i.imgur.com/remIp3P.png)

Do likewise to display the voucher and logo, just add a reasonable element. We also use dynamic data to get data from the right field.

![Display the voucher](https://i.imgur.com/KxWOJ10.png)

![Display the logo](https://i.imgur.com/twKoHuP.png)

We’ve displayed the wanted posts along with their information.

![All of the information I want to get and display for the restaurant](https://i.imgur.com/OffEeyH.png)

## 4. Styling the section 

For styling, go back to the page editor with **Zion**, choose each element inside the section to change its settings. Do it one by one. 

![Choose each element inside the section to change its settings.](https://i.imgur.com/58aYPoU.png)

Now we have a new look of the section.

![A new look of the featured restaurants section](https://i.imgur.com/rD4bUCm.png)
