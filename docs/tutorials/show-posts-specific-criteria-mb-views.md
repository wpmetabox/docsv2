---
title: Showing posts with a specific criteria - MB Views
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In this practice, we will find another way to do it with the help of MB Views from Meta Box.

This is the archive page that I created as an example. Only products are on sale will be displayed:

![Example of the created archive page](https://i.imgur.com/cujHZlS.png)

## Video version

<LiteYouTubeEmbed id='S5yVT5eTJYE' />

## Preparation

Each dish is a post of a custom post type. In addition to the basic information of the dishes such as the name, description and the image of the dish, there may be some extra information. So, they will be saved in custom fields. In this case, I have two fields in order to save the original price and the promotional price. All the dishes, which have the promotional price, are on sale and will be displayed on the page.

In this practice, we need these tools:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom post types and custom fields;
* [MB Custom Post Types & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create custom post types;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have an intuitive UI to create custom fields in the backend;
* [MB Views](https://metabox.io/plugins/mb-views/): to create a page template for displaying posts;
* [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) (optional): to display custom fields as an admin column.

## 1. Creating a custom post type

Go to **Meta Box** > **Post Types** > **Add New** to create a new post type for the dishes.

![Create a custom post type](https://i.imgur.com/co5AZcu.png)

Then, you will see a new menu like this in the admin dashboard. It’s your post type.

![New menu displays in the admin dashboard](https://i.imgur.com/UlyrAQo.png)

## 2. Creating custom fields

Go to **Meta Box** > **Custom Fields** to create a new field group.

![Create custom fields](https://i.imgur.com/va1KaU5.png)

Here are 2 fields I created as an example. The value stored in these 2 fields will be set to the condition to choose which dishes will be displayed.

![Created fields](https://i.imgur.com/rJFvzQi.png)

Since I want to know which dishes are having promotion, I set to show both these fields as an admin column like this:

![Show created fields as admin columns](https://i.imgur.com/Gz0J4ew.png)

Check this box to show this field as an admin column. You will have this setting when you enable the **MB Admin Columns**.

![Set the created fields as show as admin column](https://i.imgur.com/BQPth9F.png)

After creating all the fields, move to the **Settings** tab > **Location** as **Post** type > select **Cuisines** to apply these fields to it.

![Set location for the created fields](https://i.imgur.com/ntkUFQu.png)

Now, you’ll see all the created custom fields in the post editor of the Restaurants post type.

![All the created fields appear in the post editor](https://i.imgur.com/XtgNvpa.png)

## 3. Creating the archive page

Go to **Views** > **Templates** to create a new template for the page.

![Create a new template for the page](https://i.imgur.com/KdBYVqQ.png)

Instead of typing code, you will open the **Insert Field** and choose the field that you need. First, insert the **Post Title** for the page’s name.

![Insert the post title for the page’s name](https://i.imgur.com/Ky9LQHQ.png)

To display the posts, I’ll add some code as follows:

```
{% set args = { post_type: 'cuisine', meta_key : 'promotional_price', meta_value: '', meta_compare : '!=', meta_type : 'CHAR', posts_per_page: 6, order: 'DESC' } %}
{% set posts = mb.get_posts( args ) %}
{% for post in posts %}
{% endfor %}
```

![Add some code](https://i.imgur.com/7VN7J0e.png)

Let’s get through each line with me.

```
{% set args = { post_type: 'cuisine', meta_key : 'promotional_price', meta_value: '', meta_compare : '!=', meta_type : 'CHAR', posts_per_page: 6, order: 'DESC' } %}
```

This is used to declare getting posts from the **Cuisine** post type which slug is cuisine.

Along with that, I also added some attributes.

```
meta_key : 'promotional_price', meta_value: '', meta_compare : '!=', meta_type : 'CHAR',
```

All of these ones are to set the condition that stipulates that only the posts that have any value in the promotional price field will be got and displayed. **_'promotional_price'_** is the **ID** of the **Promotional Price** field. **_meta_value: '', meta_compare : '!=', meta_type : 'CHAR'_** is to recognize if there is any data in the field or not. The data type to compare is character. If it is NOT that there is no character in the field, the post will be displayed.

```
{% set posts = mb.get_posts( args ) %}
```

This is the function to get posts.

```
{% for post in posts %}
{% endfor %}
```

This is a loop that we used to display multiple posts. Inside the loop, we’ll insert some fields to get data from them as follows to get the information about the products.

First, insert the Post thumbnail to display the dish’s image.

![Insert the post thumbnail to display the dish’s image](https://i.imgur.com/EJHQohy.png)

Insert the **Post Title** once again, but this is for the name of the dishes which is saved in the title of the post.

![Insert the post title for the name of the dishes](https://i.imgur.com/8KG3i2b.png)

Next are the **Promotional Price** and **Original Price**.

![Add the promotional price and original price code](https://i.imgur.com/mnWVrVY.png)

Finally, the **Post Content** to display the dishes description.

![Insert post content to display the dishes description](https://i.imgur.com/0G6hexJ.png)

After choosing all the wanted fields to get data from, move to set the Location for this template as **Page**, then choose the name of the created page here.

![Choosing all the wanted fields to get data from](https://i.imgur.com/deJll4X.png)

Go back to the page on the frontend, you’ll see the dishes are displayed but with no styling.

![The dishes are displayed on the frontend](https://i.imgur.com/PDbiliv.png)

For styling the page, you can go back to the **Views** to edit the template. You should add some div tags into the template. I also added the unit price for the pricing like this.

![Add some div tags into the template](https://i.imgur.com/w6BDnZQ.png)

You also can add some **CSS** in the **CSS** tab of the view as follows.

![Add some CSS in the CSS tab of the view](https://i.imgur.com/w1JXHRW.png)

This code is available on **GitHub**, so you can refer to it for more details.

Now, you will see a new look of the page on the frontend.

![A new look of the page on the frontend](https://i.imgur.com/cujHZlS.png)


