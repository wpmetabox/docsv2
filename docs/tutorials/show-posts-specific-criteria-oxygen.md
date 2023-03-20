---
title: Showing posts with specific criteria - Meta Box + Oxygen
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In this practice, we’ll find out how to show posts with this kind of specific criteria using Meta Box and Oxygen.

This is the archive page that I created as an example. Only products are on sale will be displayed:

![Example of the created archive page](https://i.imgur.com/MHBfXXi.png)

## Video version

<LiteYouTubeEmbed id='MeshaXL1hrg' />

## Preparation

The products will be the dishes which are posts of a custom post type. In addition to the basic information of the dishes such as the name, description and the image of the dish, there may be some extra information. They’ll be saved in custom fields.

In this case, I have two fields in order to save the original price and the promotional price. All the dishes, which have the promotional price, are on sale and will be displayed on the page.

In this practice, we need these tools:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom post types and custom fields;
* [MB Custom Post Types & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create custom post types named Cuisines;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have an intuitive UI to create custom fields in the backend to save information about the price of products;
* [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) (optional): to display custom fields as an admin column.
* **Oxygen**: to build the page.

## 1. Creating a custom post type

Go to **Meta Box** > **Post Types** > **Add New** to create a new post type for the dishes.

![Create a custom post type](https://i.imgur.com/CKjbLOa.png)

Then, you will see a new menu like this in the Admin Dashboard. It’s your post type.

![New menu displays in the admin dashboard](https://i.imgur.com/R2aQTR2.png)

## 2. Creating custom fields

Go to **Meta Box** > **Custom Fields** to create a new field group.

![Create custom fields](https://i.imgur.com/kNWolvM.png)

Here are 2 fields I created as an example. The value stored in these 2 fields will be set to the condition to choose which dishes will be displayed.

![Created fields](https://i.imgur.com/4tVvhFa.png)

Since I want to know which dishes are having promotion, I set to show both these fields as an admin column like this:

![Show created fields as admin columns](https://i.imgur.com/jqpINJ5.png)

To do it, you will need to tick this box in both fields. You will have this setting when you enable the MB Admin Columns extension.

![Set the created fields as show as admin column](https://i.imgur.com/LBf4rOE.png)

After creating all the fields, move to the **Settings** tab > **Location** as **Post type** > select **Cuisines** to apply these fields to it.

![Set location for the created fields](https://i.imgur.com/i7P3f45.png)

Now, you’ll see all the created custom fields in the post editor of the **Restaurants** post type.

![All the created fields appear in the post editor](https://i.imgur.com/ciVVdkh.png)

## 3. Creating the archive page

### 3.1 Creating a template

Go to **Oxygen** > **Templates** to create a new template for the page.

![Create a template](https://i.imgur.com/OheUDtP.png)

Next, create a new page. Note to set the created template to apply it to the page. Then, just edit the created page with Oxygen.

![Edit with Oxygen](https://i.imgur.com/DvEbLMh.png)

Remember to set a preview for the page.

![Set preview for the page](https://i.imgur.com/KjOWO0g.png)

First, add a **Section** component to contain all the posts.

![Add a Section component](https://i.imgur.com/AiqHWlY.png)

Then, to have a page title, add a **Heading** component > **Insert Data** button and choose **Title** in the **Post** section to get the name automatically.

![Add a Heading component](https://i.imgur.com/wJxruOF.gif)

To set content in sections for easy styling later, you should use some Div components.

![Use some Div component](https://i.imgur.com/FjHdFAJ.png)

### 3.2 Adding condition to display posts

Next, add a **Repeater** component to display all the posts as we want. However, we just choose to show only the dishes which are on sale, so we need to set a condition in the settings of this component.

In the **Query** section, choose ‘**advanced**’, and edit the query to add some parameters as below.

![Add condition to display posts](https://i.imgur.com/9cUzpVF.gif)

![Add some parameters](https://i.imgur.com/p6w5399.png)

The first parameter means that we’ll get posts from the post type which has the slug as ‘**cuisine**’.

The second one is the condition based on the ‘**promotional_price**’ field. It means that if the field has any value in the field, the post will be displayed.

That’s all for the condition.

### 3.3 Displaying the posts’ information

Let’s add some other components inside the Repeater to display the information of the posts.

Add an **Image** component to get the image of the dishes which is the featured image of the post.

![Add an Image component](https://i.imgur.com/pbtK1vG.png)

Click the **Select Dynamic Data** button as below picture, and choose the **Featured Image** option from the list.

![Choose Featured Image option through select dynamic data button](https://i.imgur.com/egje5AP.png)

![All the featured images of the posts displayed](https://i.imgur.com/XhJhlwt.png)

Then, you’ll see all the featured images of the posts displayed.

![All the featured images of the posts displayed](https://i.imgur.com/indFyKZ.png)

To get the names of the dishes from the post title, add a **Heading** component > **Insert Data** button > choose **Title** in the **Post** section.

![Add a Heading component](https://i.imgur.com/j2SBt4I.gif)

For the original price of the dish, use the **Text** component.

![Use the Text component](https://i.imgur.com/Pd0x993.png)

Choose **Insert Data** to get the data that saves in the custom fields. Since the field is created by **Meta Box**, select the **Meta Box Field** option and choose the corresponding field.

![Choose the right field](https://i.imgur.com/Ql3Y4xM.gif)

You’ll see the original price of the dishes displayed immediately.

![The original price will be displayed](https://i.imgur.com/vvRDpbY.png)

For the promotional price, do likewise. Or you can duplicate the **Text** component used for the original price and just change the field connecting with it.

![Do likewise with the original price field](https://i.imgur.com/Q0KL7B9.png)

For the description of the dish which is the post content, add a **Text** component as well. Then insert data from the **Content** fields of the post.

![Add a Text component for the description](https://i.imgur.com/wpW43Vx.png)

![Choose the right field](https://i.imgur.com/DNTVUUj.png)

Now, all the information has been obtained and displayed.

![All the information is obtained](https://i.imgur.com/VstwqMs.png)

For styling, still in the page editor with Oxygen, you can style each component by changing their settings in the **Advanced** tab.

![Style the page](https://i.imgur.com/O9Lpzc0.png)

Then, you will see a new look of the page on the frontend.

![The final look](https://i.imgur.com/MHBfXXi.png)
