---
title: Displaying the latest products - Meta Box + Zion
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We’ll create a section and choose the products or posts that are the latest ones to display only on the homepage.

I’ll take the restaurants as an example for products.

![example for displaying the latest products in a section on the homepage using Meta Box and Zion](https://i.imgur.com/OnUhpH9.png)

## Video version

<LiteYouTubeEmbed id='wgklwMfolEc' />

## Before getting started

We'll display the latest restaurants and then the oldest ones. Each one’s information will be saved in a post of a custom post type. The extra information such as address, logo, voucher will be saved in custom fields.

So we need some tools to do this practice:

* [Meta Box](https://metabox.io) to have the framework for creating custom post type and custom fields. It’s free, so you can download it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/).
* [MB Custom Post Types & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create a new custom post type named Restaurants;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to create custom fields for the Restaurant post type in the backend;
Zion Builder (Pro version): to build the page.

## Step 1: Create a custom post type

Go to **Meta Box > Post Types > Add New** to create a new post type.

![create a new custom post type](https://i.imgur.com/UGv6Sma.png)

After publishing, we’ll have a new menu named **Restaurants** in the **Admin Dashboard**.

![a new menu display on the left sidebar](https://i.imgur.com/tsUMKuy.png)

## Step 2: Create custom fields

Go to **Meta Box > Custom Fields** to create fields. I’ll create all the fields like this for the illustration purpose only:

![the custom fields that we'll create for the post type](https://i.imgur.com/8QB87vl.png)

There are no special settings for them.

After creating all the fields, move to the **Settings** tab. Remember to choose the **Location** as **Post Type** and select your product’s post type to apply these fields to it.

![set location for the fields to apply them to the wanted post type](https://i.imgur.com/u6j1aPR.png)

Now, when creating a new post in my **Restaurant** post type, the custom fields will be there.

![the custom fields displayed in the post editor](https://i.imgur.com/vgVr0Cm.png)

## Step 3: Add a section for the latest products

### Create and configure the section

Let’s edit a page to add the section. I’ll take the homepage and **edit it with Zion Builder**.

![edit the homepage with Zion builder](https://i.imgur.com/QBJdACX.png)

First, add a **Section** element to the page. Then, add a **Heading** for it.

![add a section element in the homepage](https://i.imgur.com/YKyOBSB.png)

![add a heading for the section](https://i.imgur.com/cm51Klz.png)

Next, add a **Container** and a **Column** element inside it.

![add a container inside the section](https://i.imgur.com/nXcXLOt.png)

![Add a Column element](https://i.imgur.com/mPNhMHQ.png)

In the settings of the **Column** element, go to the **Advanced** tab > **Repeater Options** and enable the repeater provider.

![enable the repeater provider for the column](https://i.imgur.com/GHIcLD6.png)

Choose the **Query type** as **Query builder** and select the **Post type** as the post type you want. In my case, it is **Restaurant**.

![query the posts from the wanted post type](https://i.imgur.com/XQ0dPUI.png)

Since we’ll display the latest posts first then the oldest ones, set order posts by **date** and then choose the **Descending** option.

![set order for the posts](https://i.imgur.com/AVlGARR.png)

Remember to **enable the repeater consumer**.

![enable the repeater consumer](https://i.imgur.com/DShULdO.png)

But, it will display all the posts in the chosen post type. So, enter a number to the **Posts per page** box to limit the number of posts. I set 10 here, so only the 10 latest posts will display in the section.

![enable the repeater consumer](https://i.imgur.com/6BGUqNF.png)

Because we haven’t chosen any kind of information of the product to show yet, it’s still blank there.

### Display products information into the section

Let’s do it by adding some elements.

Add an **Image** element to show the featured image of the post. Then, click the **Use dynamic data** button. In the list of displaying options, find the **Featured image** in the **Post** section.

![Use dynamic data button to get data from posts](https://i.imgur.com/KPJJLgR.png)

Now, all the featured images of the restaurants are shown.

![the data from posts are obtained](https://i.imgur.com/dUZJ90J.png)

Do likewise for the name of the restaurant, means the post title. Choose a **Heading** element > **Use dynamic data > Post Title**.

![get post titles for the name of restaurants](https://i.imgur.com/jkFfzLD.png)

For the address, choose the **Text** element. Then, also click the **Use dynamic** data button. Since the address is saved in a custom field created by Meta Box, find |**Meta Box Field** in the list of options.

![Use dynamic data to get data from the custom fields created by Meta Box](https://i.imgur.com/qZAGjOd.png)

Then, choose the corresponding field.

![choose the wanted fields to get the corresponding data](https://i.imgur.com/StncaRP.png)

Now, the addresses corresponding to each restaurant will be shown.

![the addresses corresponding to each restaurant will be shown](https://i.imgur.com/VQ19mPp.png)

For other information such as **Voucher** and **Logo**, do likewise.

![Add a Text element and link it to the Voucher field](https://i.imgur.com/SKqhCc3.png)

![Add a Image element and link it to the Logo field](https://i.imgur.com/kuhLDuH.png)

Now, all the information of the restaurant has been obtained and displayed in a section on the Homepage.

![all the information of the restaurant has been obtained and displayed in a section on the homepage](https://i.imgur.com/VThxpkm.png)

## Step 4: Style the section

If you want to have more styling to make this section more lively, you can easily do it in Zion visual builder.

Here, I just set the layout and change the style of some elements.

![style the layout of the section as you want in Zion visual builder](https://i.imgur.com/eOM2VD4.png)

For further styling, you can use some CSS code.

![use CSS for advanced styling](https://i.imgur.com/OFF1lNj.png)

Then the section will have a new look as below:

![The result after all steps](https://i.imgur.com/OnUhpH9.png)
