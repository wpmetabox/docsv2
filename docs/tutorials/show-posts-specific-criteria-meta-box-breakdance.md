---
Title: Showing posts with specific criteria - Meta Box + Breakdance
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

If you want to display some on-sale products in a promotion campaign only, [this series](https://metabox.io/series/specific-criteria/) can be useful for your e-commerce website. In this practice, we’re going to **show posts with specific criteria** that is the on-sale status using **Meta Box** and **Breakdance**.

I did an archive page as an example. This page will display only the dishes which are on sale.

![example of an archive page displays products on sale](https://i.imgur.com/LBrcxt1.png)

## Video Version

<LiteYouTubeEmbed id='nUsxc_nOhaQ' />

## Preparation

The products will be the dishes which are posts of a custom post type. In addition to the basic information of the dishes such as the name, description and the image of the dish, there may be some extra information. They’ll be saved in custom fields.

In this case, I have two fields in order to save the original price and the promotional price. The value stored in these 2 fields will be set to the condition to choose which dishes will be displayed. Only one that has the promotional price is on sale and will be displayed on the page.

In this practice, we need these tools:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom post types and custom fields;
* [MB Custom Post Types](https://metabox.io/plugins/custom-post-type/): to create a custom post type for your products;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have an intuitive UI to create custom fields in the backend;
* [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) (optional): to display custom fields as an admin column to know exactly which one will be shown on the page;
* **Breakdance**: to build the page.

## 1. Creating a new custom post type

Go to **Meta Box** > **Post Types** > **Add New** to create a new post type for your products. Here I name it **Cuisines**.

![create a new custom post type in Meta Box](https://i.imgur.com/6BBVtyJ.png)

Then you’ll see a menu like this. It’s your post type.

![new custom post type for cuisine](https://i.imgur.com/R2aQTR2.png)

## 2. Creating custom fields

I’ll create 2 fields as an example. As I mentioned, the value stored in these 2 fields will be set to the condition to choose which dishes will be displayed.

You also can add some other custom fields to save more information about your product, and display them on the page in the same way.

![created fields](https://i.imgur.com/YRE2Nf9.png)

If you want to clearly see which products are having promotion, you can set both these fields displayed as admin columns like this.

![Show created fields as admin columns](https://i.imgur.com/l0c57yH.png)

Do it by checking this box in both fields’ settings.

![Set the fields as show as admin column](https://i.imgur.com/qXWvQh2.png)

You’ll have this setting only when you enable the [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) extension.

After creating all the fields, move to the **Settings** tab > set **Location** as **Post type** > select **Cuisines** to apply these fields to it.

![Set the location for the created fields](https://i.imgur.com/aSmE2zE.png)

Now, you’ll see all the created custom fields when creating a new post in Cuisines post type.

![all the created custom fields appear in the post editor](https://i.imgur.com/XI2IWH3.png)

## 3. Creating a global block

With Breakdance, you should create a global block to get and display wanted information from a post first, then use this global block to display them anywhere on your site.

Go to **Breakdance** > **Global Blocks** then create a new one.

![create a new global block](https://i.imgur.com/ZQafBT9.png)

Remember to set a post for live preview in order to easily see how it will display.

![set a post for live preview](https://i.imgur.com/TMrCbpd.png)

First, add a **Div** element to cover the block.

![add a Div element to cover the block](https://i.imgur.com/if4mRLE.png)

### 3.1. Setting the condition

We should **create a condition** in this element to **choose which posts will be displayed**, in this case **which ones have promotion**. Go to the settings of the **Div** element, you will see the **Conditions** section to add a new one.

![set the condition](https://i.imgur.com/FTuROGR.gif)

In the setting of the **Conditions**, choose **Dynamic Data** from the list to set the condition based on the data saved in custom fields.

![choose Dynamic Data to set the condition based on the data saved in custom fields](https://i.imgur.com/OO4gv4Q.png)

Since just posts which have any value in the promotional price will be displayed, choose the field here.

![Choose the field](https://i.imgur.com/WJRaSkZ.png)

Then change the operation to **is not empty**. That’s all for the condition.

![complete the condition](https://i.imgur.com/2Op4HWS.png)

### 3.2 Displaying the products information

Just add some reasonable elements to get product information from the posts.

Add the **Post Featured Image** element. It’ll display immediately.

![Add the Post Featured Image element](https://i.imgur.com/GWwDE1U.png)

Next, I use a **Div** element to group all the rest information for easier styling.

![add Div element to group all the rest information](https://i.imgur.com/ydWvvXv.png)

Add the **Post Title** element for the dish’s name.

![Add the Post Title element for the product’s name](https://i.imgur.com/ez58wAM.png)

Then, add another **Div** the group of the original price and promotional price.

![add Div the group of the original price and promotional price](https://i.imgur.com/oDVdiWD.png)

For the original price, add a **Text** element, then insert dynamic data from the field to it.

![add a Text element and insert dynamic data from the field](https://i.imgur.com/dDDZrad.gif)

You also can add the prepend and append text for having the unit price in the **Advanced** tab.

![add the prepend and append text in the Advanced tab](https://i.imgur.com/GmcG08Q.png)

Next, add another **Text** element for the promotional price, then get data from the corresponding field in the same way as the original price.

![Add Text element and get data for promotional price](https://i.imgur.com/vAhgEAO.gif)

Finally, add the **Post Content** element for the description of the dish.

![add the Post Content element for the product's description](https://i.imgur.com/SKKTV9K.png)

That’s all the things I want to display in the block.

![all of the product's information displayed](https://i.imgur.com/44uN5dC.png)

## 4. Creating the page

Go to **Pages** > **Add New** to create a new page as usual.

![create a new page](https://i.imgur.com/iNH1u2F.png)

Then choose **Breakdance** > **Template** > **Add Template** to create a custom template for it.

![create a custom template in breakdance](https://i.imgur.com/5q4vxz5.png)

Set the **Location** of the template as **Single/Pages**, and add the condition as follows.

https://i.imgur.com/EgCZB5r.gif

In the template editor, add a **Section** element first to cover all the page content.

![set the location for the page and add condition](https://i.imgur.com/hPQNRZc.png)

For the page title, add the **Post Title** element.

![add the Post Title element](https://i.imgur.com/jPK9hml.png)

Next, to display the posts, we should use the **Post Loop Builder** element. It allows us to display multiple posts at once.

![add the Post Loop Builder element to display the post](https://i.imgur.com/MlH7fkP.png)

Set the Global Block as the one we’ve just created.

![Set the Global Block](https://i.imgur.com/aTdG2Dy.png)

There'll be nothing displayed. Just go to the **Query** section, edit the query to set the post types that we want to get posts from as Cuisines.

![Add the Query and set the source of post which we get](https://i.imgur.com/wQueyFi.gif)

Now, there’re some posts displayed exactly as we set in the created global block.

You may think that just the posts that have value in the promotional price are displayed in this page now because we set the condition in the global block to get them. But, it’s not like that. When changing the layout a little bit, you will see some blank blocks like this.

![blank blocks](https://i.imgur.com/d8s52qa.png)

It’s weird!

Even when you check the page on the frontend, they do not disappear. It simply is the place for the posts that didn’t meet our condition. The posts’ information won’t display, but they still have their own space.

To remove them, add a **Code Block** to the template and input following JavaScript code into it.

![add a Code Block to the template](https://i.imgur.com/489JOR3.png)

![input JavaScript code](https://i.imgur.com/EN8DIOP.png)

```
jQuery('.ee-post').filter(function() {
return jQuery(this).text().trim() == ""
}).remove();
```

Now, the void disappears.

![the void disappears](https://i.imgur.com/DXeNxsg.png)

## 5. Styling the page

If you want to style the display of the post information, go back to edit the global block. Change the settings of each element in the **Style** tab to get the wanted look.

![style tab](https://i.imgur.com/hZ7ILR7.png)

For the layout, go to the template editor and do the same.

After styling, you’ll see the new appearance.

![The final look](https://i.imgur.com/LBrcxt1.png)




