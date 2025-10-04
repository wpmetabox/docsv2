---
title: Creating a simple listing - Meta Box + Breakdance
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Next to the previous tutorial on [the series](https://metabox.io/series/simple-listing-with-filters/) ‘**creating a simple listing**’ using **Meta Box** and page builders, we’re going to find out a new way to do it with **Breakdance**. We use custom fields and taxonomies created by Meta Box to **display information about products on an archive page and filter them** as well.

We have an archive page that shows a list of restaurants as an example.

![example of an archive page that shows a list of restaurants](https://imgur.elightup.com/qZuHtUP.png)

## Video version

<LiteYouTubeEmbed id='p6i4Nc-F1zU' />

## Preparation

In this practice, we will divide the page into 2 sections: one to display the products and their information, and one for filters.

For the products (I meant restaurants), we will need a custom post type, and each one of them will be saved in a post. Your products may have some extra information, so you can use custom fields to save them. In my case, the restaurant’s name and image are the title and feature images of the post. Other information such as status, address, and logo will be saved in different custom fields.

Regarding the filter, it’s based on a custom taxonomy that I created as vouchers.

![the page includes 2 sections: one to display the products and their information, and one for filters](https://imgur.elightup.com/7n0DyMC.png)

To do it, we need the tools as follow:

* **[Meta Box Lite](https://metabox.io/lite/)**: to create the Restaurant post type and taxonomy named Voucher to filter posts. Also, it provides a UI in the back end to create custom fields to save extra information about restaurants;
* **Breakdance** to build the page.

## 1. Creating a new custom post type

Go to **Meta Box** > **Post Types** to create a new post type for your products.

![Go to Meta Box, Post Types to create a new post type for your products](https://imgur.elightup.com/Ju31w9y.png)

After publishing, you will see a new menu in your dashboard, that’s your created custom post type.

## 2. Creating a new taxonomy

As mentioned, we’ll have a filter for the products based on a taxonomy as vouchers. The voucher will be divided into some discount levels, and each of them will be a term of this taxonomy.

Go to **Meta Box** > **Taxonomies** to create a new taxonomy.

![Go to Meta Box, Taxonomies to create a new taxonomy](https://imgur.elightup.com/x437iFX.png)

In the **Advanced** section, check the **Hierarchical** option if you want to show the taxonomy in a hierarchy.

You may want to check the **Show admin column** option to show it as an admin column. This setting is available when you have the [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) extension.

![In the Advanced section, check the Hierarchical option to show the taxonomy in a hierarchy, and Show admin column option to show it as an admin column](https://imgur.elightup.com/xIU7xZP.png)

In the **Post Types** tab, choose your products post type that you’ve just created to apply this taxonomy to it.

![In the Post Types tab, choose the products post type to apply taxonomy to it](https://imgur.elightup.com/U8e5M5C.png)

Now, you can add some term for your product’s taxonomy.

![add some term for your product’s taxonomy](https://imgur.elightup.com/263MEFr.png)

## 3. Creating custom fields

Just go to **Meta Box** > **Custom Fields** > **Add New** to create some custom fields for your products’s extra information if any.

![go to Meta Box, Custom Fields, Add New to create some custom fields for your products’s extra information](https://imgur.elightup.com/UqUFtSg.png)

Here are some typical custom fields I created.

![some typical custom fields I created](https://imgur.elightup.com/YXi1LXs.png)

If you need more fields, freely choose any type of field for your case. Meta Box has [more than 40 field types](https://youtu.be/WWeaM5vIAwM) that you can benefit from.

After creating the fields, move to the **Settings** tab. Then choose the **Location** as **Post type** and select your products post type to apply these fields to it.

![move to the Settings tab, choose the Location as Post type and select your products post type to apply these fields to it](https://imgur.elightup.com/zGUAPnn.png)

After publishing, go to a post editor, you will see the terms of the created taxonomy and the custom fields displayed. Just add some information for your products.

![the terms of the created taxonomy and the custom fields displayed in the post editor](https://imgur.elightup.com/pqHCZe0.png)

## 4. Creating a global block

To display information about each product, we should create a global block. Go to **Breakdance** > **Global Blocks** then create a new one.

![Go to Breakdance, Global Blocks to create global block](https://imgur.elightup.com/ez1bcWa.png)

Set a post for preview.

![Set a post for preview](https://imgur.elightup.com/F3x0RH5.png)

First, add an **Image** element to display the restaurant’s image.

![add an Image element to display the restaurant’s image](https://imgur.elightup.com/oRtmApt.png)

Click on the **Insert Dynamic Data** button.

![Click on the Insert Dynamic Data button](https://imgur.elightup.com/Xm4E3cR.png)

Then choose **Featured Image** in the **Post** section.

![choose Featured Image in the Post section](https://imgur.elightup.com/HXZq94r.png)

Next, add a **Text Link** element for the product name.

![add a Text Link element for the product name](https://imgur.elightup.com/ss8vuZq.png)

It’s from the post title, so click on the **Insert Dynamic Data** button and look for it.

![click on the Insert Dynamic Data button and look for post title](https://imgur.elightup.com/HcrnxBc.png)

This element has a setting that allows you to embed a link into this title. There’s also an option to insert dynamic data to it.

![embed a link into this title by using insert dynamic data in the Link box](https://imgur.elightup.com/qYkRcWQ.png)

Choose **Post Permalink** inside.

![Choose Post Permalink inside](https://imgur.elightup.com/3t54xrX.png)

Go ahead, add a **Text** element for showing the address.

![add a Text element for showing the address](https://imgur.elightup.com/iiPUcts.png)

This information is saved in a custom field created with Meta Box, so also insert dynamic data to this element.

![click on the insert dynamic data button to choose the source of data](https://imgur.elightup.com/28wxyyb.png)

Look for the **Metabox** section, you will see the name of the custom field. Choose it.

![Look for the Metabox section and choose Address](https://imgur.elightup.com/FTnWZGh.png)

In the same way, add an **Image** element to show the logo, also insert dynamic data to get the image of logo.

![add an Image element to show the logo, also insert dynamic data to get the image of logo](https://imgur.elightup.com/A5llLtT.png)

Do likewise for the status information. Add a **Text** element, insert dynamic data from the **Status** field.

![for the Status information, add a Text element, insert dynamic data from the Status field](https://imgur.elightup.com/42myB0m.png)

Now, you can style each element in this global block by changing their settings. I changed them to have this look.

![style each element in this global block by changing their settings](https://imgur.elightup.com/Ejv68n8.png)

## 5. Creating the page

Go to **Pages** and create a new page as usual, then edit it in **Breakdance**.

![Go to Pages and create a new page as usual, then edit it in Breakdance](https://imgur.elightup.com/eHssYew.png)

First, add a **Section** element to cover all the content of the page.

![add a Section element to cover all the content of the page](https://imgur.elightup.com/keVYE25.png)

Inside the section, add the **Heading** element to the page title.

![Inside the section, add the Heading element to the page title](https://imgur.elightup.com/1azAOnI.png)

### 5.1. Getting posts

To display the list of posts, add the **Post Loop Builder** element.

![To display the list of posts, add the Post Loop Builder element](https://imgur.elightup.com/wrd7LyM.png)

In the **Global Block** box, choose the **Restaurant Block** that we’ve made in the previous step.

![In the Global Block box, choose the Restaurant Block that we’ve made in the previous step](https://imgur.elightup.com/svoaMiA.png)

Then go to the **Query** section to set a custom query to get posts.

![go to the Query section to set a custom query to get posts](https://imgur.elightup.com/0flPgkm.png)

Select the name of the post type you use for your products.

![Select the name of the post type you use for your products](https://imgur.elightup.com/mOlEfPq.png)

There are also some other settings for the query in this popup. You can customize the query as you want. In this case, I left them all as default.

Immediately, you will see the products displayed.

![the products displayed](https://imgur.elightup.com/odFUS1l.png)

Now, let’s add a filter bar to this page.

### 5.2. Adding filters

In the settings of the **Post Loop Builder** element, there is the **Filter Bar** section. Click on the **Enable** button to enable a filter bar for this element.

![In the settings of the Post Loop Builder element, Click on the Enable button to enable a filter bar for this element](https://imgur.elightup.com/MRzfVQR.png)

In the **Type** box, choose the taxonomy that we created for the products.

![In the Type box, choose the taxonomy that we created for the products](https://imgur.elightup.com/G8TTpwh.png)

A list of the discount levels that I set as the terms of the taxonomy will be displayed.

![A list of the discount levels that I set as the terms of the taxonomy will be displayed](https://imgur.elightup.com/ZSTs8jV.png)

Next, you can enable the **All Filter** option.

![enable the All Filter option](https://imgur.elightup.com/8aRixc0.png)

That's how I complete adding the filter bar to the page.

### 5.3. Styling the page

You also can style each element on the page a little bit to have a better look.

![style each element on the page a little bit to have a better look](https://imgur.elightup.com/MaeJaVW.png)

All the status dots are green. We should use some JavaScript to automatically change the color of the dot following the value saved in the Status custom field. So, add a **Code Block** element to the page.

![add a Code Block element to the page to automatically change the color of the dot following the value saved in the Status custom field](https://imgur.elightup.com/HGlqhLf.png)

And, add some code into the block.

![add some code into the block](https://imgur.elightup.com/tfw2z0D.png)

Now go to the front end and you can see the final look of the simple listing page.

![go to the front end and you can see the final look of the simple listing page](https://imgur.elightup.com/qZuHtUP.png)

The filter also works well.

![The filter works well](https://imgur.elightup.com/wJGHrnV.gif)
