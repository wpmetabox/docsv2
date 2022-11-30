---
title: Displaying the latest products - Meta Box + Bricks
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We’ll create a section and choose the products or posts that are the latest ones to display only on the homepage.

I’ll take the restaurants as an example for products.

![Example of displaying the latest products using Meta Box and Bricks](https://i.imgur.com/c5ujBZH.png)

## Video version

<LiteYouTubeEmbed id='ThRnmpJgROE' />

## Before getting started

As you can see in my example, my products are restaurants which are posts of a custom post type. We’ll display the latest posts first and then the oldest ones based on the posts’ published date. The name and image of the restaurants are the post title and featured image of the post. The extra information such as address, logo, and voucher will be stored in separated custom fields.

These are the tools we need:

* [Meta Box](https://metabox.io): to have a framework for creating custom post types and custom fields.
* [MB Custom Post Types & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create a new custom post types named Restaurant;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to create custom fields in the backend for saving restaurants’ information;
* **Bricks**: to build the page. Remember to update and activate the latest version of Bricks on your site.

## 1. Creating a new custom post type

Go to **Meta Box > Post Types > New Post Type** to create a new post type.

![Create a New Custom Post Type](https://i.imgur.com/KysSnCO.png)

Publish and you’ll see a new menu named Restaurants in the dashboard.

![a new menu display on the left sidebar](https://i.imgur.com/zwO4Ahp.png)

## 2. Creating custom fields

Go to **Meta Box > Custom Fields*8 to create fields.

![the custom fields that we'll create for the post type](https://i.imgur.com/WqQ0AkW.png)

After creating all the needed fields, move to the **Settings** tab, choose **Location** as **Post Type** and select **Restaurant** to apply these fields to it.

![set location for the fields to apply them to the wanted post type](https://i.imgur.com/nvYip9J.png)

When creating a new post in the Restaurant post type, the custom fields will be there.

![newly created custom fields](https://i.imgur.com/VKHeWA1.png)

## 3. Adding a section for the latest products

### Creating and configuring the section

Let’s edit a page to add the section. I’ll take the homepage and **edit it with Bricks**.

![edit the Homepage with Bricks.](https://i.imgur.com/ouz94cl.png)

First, add a **Section** element to the page, then you’ll see a **Container** element inside to cover all the restaurants’ information.

![add a Section element](https://i.imgur.com/sV8cG5I.png)

Then, add a **Heading** element to name the section

![Add a Heading element to display the title of the section](https://i.imgur.com/ujQwD1H.png)

In the **container**, add the **Posts** element then you will see a list of blog posts as default with featured image, title, and short description in the preview.

![add the Posts element](https://i.imgur.com/aYZz9TF.png)

Since we need to show the posts saved in **Restaurant** post type instead of blog post, go to the **Query** section of the **Posts** element, choose **Post Type** as **Restaurant**.

![change the post type in the query section](https://i.imgur.com/eNTK7H9.png)

Since we’ll display the latest posts first and then the oldest ones, set the order post by **Published date** and then choose the **Descending** option.

![change the order by as you wanted](https://i.imgur.com/y1sFh5H.png)

But, it will display all the posts in the chosen post type. So, enter a number to the **Posts per page** box to limit the number of posts. I set 6 here, so only the 6 latest posts will display in the section.

![Enter the number to the Post per page box](https://i.imgur.com/yNuz9TK.png)

Next, if you want to change the page’s layout or the display of the featured image, go to the Layout and the Image section to change the settings as you want.

![change the layout options](https://i.imgur.com/Oz1MhPE.png)

![change the image options](https://i.imgur.com/2CKWlmP.png)

### Displaying products information into the section

Now, let’s add data from custom fields to the section to show extra information about the restaurants. Still in the **Content** section of the **Posts** element, go to the **Fields** and add some fields. You also can remove the field you don’t want to show here, e.g I’ll remove the post excerpt.

![add fields which you created in the cusom fields](https://i.imgur.com/h6DKlD1.png)

To display the data in your wanted fields, click **Add Field > Dynamic Data** then find the corresponding fields. The data of each post will immediately display in the preview.

![data of each post will display corresponding to the fields you set](https://i.imgur.com/gXk0Cs5.gif)

Repeat these actions to get all the fields. And, pay attention that when you select to get data from the logo field, it will display text as a default. For that reason, to display images, add an attribute as below:

![adjust the logo field to show as picture instead of text](https://i.imgur.com/PM6Hgtn.png)


:::tip

You should use the HTML tag for each element for easier styling in the next step.

:::


![You should use the HTML tag for each element for easier styling in the next step](https://i.imgur.com/l5ID9rP.png)

Now, all the data saved in custom fields has been obtained and displayed on the frontend.

![all the data saved in custom fields has been obtained and displayed on the frontend](https://i.imgur.com/WYMV9q9.png)

## 4. Styling the section

In the Bricks visual editor, you can easily style the section as you want. For further styling, you can also add some CSS code.

![add CSS class for the Posts elements](https://i.imgur.com/Y0AnxjC.png)

![add CSS code](https://i.imgur.com/SYXlUSC.png)

Here is the result after styling.

![result after all steps](https://i.imgur.com/c5ujBZH.png)
