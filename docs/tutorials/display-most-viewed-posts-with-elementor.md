---
title: Displaying the most viewed posts - Meta Box + Elementor
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Sometimes finding the best content or most wanted products on your website can be hard for your visitors. So, [showing the most viewed posts](https://metabox.io/series/most-viewed-posts/) on your homepage or anywhere on your WordPress website will help them a lot to find the most popular ones.

In this practice, I’ll give you a simple step-by-step guide on **how to display the most viewed posts**, or products as usual, using Meta Box and Elementor.

I’m getting restaurants as an example for the products.

![Display the most viewed posts using Meta Box and Elementor](https://i.imgur.com/pdRP9MK.png)

## Video version

<LiteYouTubeEmbed id='3cqhwSMqf1g' />

## Preparation

We have some further information about restaurants. This data is stored in posts from a custom post type. And some of them will be saved in the custom fields.

For this practice, we need these tools:

* **Elementor** and its pro version: to build the homepage and display the most viewed posts section;
* **[WP Post Views](https://wordpress.org/plugins/wp-post-views/)**: to count the post views;
* **[Meta Box Lite](https://metabox.io/lite/)**: to create custom post types and have UI for creating custom fields.

## Creating a new custom post type

Go to **Meta Box**, and create a new post type for the products.

![Go to Meta Box, and create a new post type](https://i.imgur.com/aOm6syu.png)

After publishing, you will see your post type displayed as a menu.

![post type displayed as a menu](https://i.imgur.com/z6DtrVA.png)

## Creating custom fields

Each restaurant, or product, might have extra information, so we’ll create custom fields to save it. These are some typical fields that I created. These fields have no special settings.

![The fields that I created by using Meta Box](https://i.imgur.com/7OGHoNx.png)

Go to **Meta Box** to create them.

![Go to Meta Box and create new fields](https://i.imgur.com/hdUziby.png)

After creating all the custom fields, go to the **Settings** tab, choose **Location**, as **Post type**, and select **Restaurant** to apply these fields to this post type.

![Apply the fields to the restaurant post type](https://i.imgur.com/idVTgfc.png)

Go to the post editor, and you will see all of the created custom fields.

![The created custom fields](https://i.imgur.com/78gcJCH.png)

## Setting up to count the post views

I already added some posts for example. Normally, you only see the post title, the date, and nothing else on the screen. There is no number of the post views anywhere as well.

![Just the post title, the date on the screen](https://i.imgur.com/LBPxkSc.png)

To have a number of post views, go to the settings of the **WP Post Views** plugin. Check the show post view column box, and choose the post type you want to count the posts view.

![Setting the WP Post Views plugin](https://i.imgur.com/VIjQAWY.png)

Then, this plugin will automatically count the views of the posts in this post type. As well as, displays a column showing the post views. Based on the number of views, we’ll choose which one has the most views and display it in the section.

![Display a column showing the post views](https://i.imgur.com/4RmHctA.png)

## Displaying product information

First, go to **Elementor**, and create a template to designate which and how the information from a post will be displayed.

![Go to Elementor, and create a template](https://i.imgur.com/FESdlO2.png)

Set the template as the **Loop Item**.

![Set the template as Loop Item](https://i.imgur.com/Ytjwujj.png)

Also, set the post type to get the right preview.

![Set the post type to get the right preview](https://i.imgur.com/sCkmstR.png)

Then, add reasonable elements for getting the wanted information. First, set the **Featured Image** element to display the restaurant's image.

![Set the Featured Image element to display the restaurant's image](https://i.imgur.com/AByGVgg.png)

For the voucher, add the **Text Editor** element.

![Add the Text Editor element for the voucher](https://i.imgur.com/rxsD66C.png)

This information is saved in a custom field created with **Meta Box**. So use the **Dynamic Tags**, look for the **Meta Box Field** option.

![Use the Dynamic Tags to insert the information](https://i.imgur.com/8VL2Rxv.png)

And, choose the field from the list.

![Choose the field from the list](https://i.imgur.com/RLj0rG4.png)

Next, add the **Post Title** for the restaurant name.

![Add the Post Title for the restaurant name](https://i.imgur.com/1jgb1Tk.png)

To get the restaurant address, add another **Text Editor** element.

![To get the restaurant address, add another Text Editor element](https://i.imgur.com/O4WyKJu.png)

The address is also saved in a custom field, so use the **Dynamic Tags** as well.

![Use the Dynamic Tags to insert address field information](https://i.imgur.com/QZ5lfQQ.png)

And, find the **Address** field.

![Find the Address field](https://i.imgur.com/A5m7UnZ.png)

For the logo, add an **Image** element.

![For the logo, add an Image element](https://i.imgur.com/Pi3WnJu.png)

Also, add **Dynamic Tags** from the **Logo** field, then the image will be displayed.

![Add Dynamic Tags from the Logo field](https://i.imgur.com/Ouabkqc.png)

Choose the **Logo** field to show the restaurant logo.

![Choose the Logo field and the image will be displayed](https://i.imgur.com/iyELMJj.png)

That’s all the information I want to get and display for each restaurant, I’ll style this template later.

![All the information I want to get and display for each restaurant](https://i.imgur.com/8G0RueM.png)

### Displaying posts

Go to edit the homepage with **Elementor**.

![Go to edit the homepage with Elementor](https://i.imgur.com/ROwMCGi.png)

Add a new section to cover all information.

![Add a new section to cover all information](https://i.imgur.com/xDJxlZA.png)

And, add a **Heading** for it.

![Add a Heading for it](https://i.imgur.com/NrpFAdz.png)

Name the title and set some style.

![Name the title and set some style](https://i.imgur.com/nT8NeYX.png)

To get posts, add the **Loop Grid** element.

![Add the Loop Grid element to get the posts](https://i.imgur.com/6Oopbnz.png)

In the settings of the **Loop Grid** element, choose the created template in the **Layout** section.

![Choose the created template in the Layout section](https://i.imgur.com/awfcWIq.png)

Some default blog posts will be displayed on the page preview. To replace them with your products, go to the **Query** section. And set the **Source** as your product’s post type. Then, all the posts from that post type will be displayed. Note that I said ‘all the posts’.

![Set the Source as your product’s post type](https://i.imgur.com/IC41ZS4.png)

So, we had a section to display the products already. Next, we should add a custom query to this section to have a condition and choose which posts will be displayed.

![We had a section to display the products already](https://i.imgur.com/lIKXY76.png)

### Creating a custom query

The condition is based on the number of views that the **WP Post Views** plugin counts. It will be a custom query.

However, **Elementor** does not support creating custom queries in the builder, so we should use a little bit of code to create one. It’s really easy with the official syntax provided by **Elementor**, just follow it without any concern.

Go to the **functions.php** file, and add some lines of code.

```
function my_query_filter_most_views( $query ) {
    $query->set( 'orderby', 'meta_value_num' );
    $query->set( 'meta_key', 'entry_views' );
    $query->set( 'order', 'DESC' );
}
add_action( 'elementor/query/custom_filter', 'my_query_filter_most_views' );
```

![Go to the Theme File, and add some lines of code](https://i.imgur.com/iSHQNBV.png)

Explanations:

* ` $query->set( 'orderby', 'meta_value_num' ); `: set the query based on the numeric value.

* ` $query->set( 'meta_key', 'entry_views' ); `: get the value from the ` 'entry_views' ` variable provided by the WP Post Views plugin. It’s also the number of post views.

* ` $query->set( 'order', 'DESC' ); `: arrange to sort the posts in order from the most viewed posts to the fewer viewed posts.

* ` custom_filter `: the name of the custom query that we’re creating, you can name it as your own. Copy this name, we will use it in the next step.

Then save the file, and go back to edit the page with **Elementor** now.

Go to the section that we created in the previous step. To apply the condition to this section, in the settings of the **Loop Grid** element, look for the **Query ID** box, fill in the name of the created custom query.

![Fill in the name of the created custom query](https://i.imgur.com/unMm3bt.png)

The displaying posts will be changed.

![The most viewed posts page created by Meta Box and Elementor](https://i.imgur.com/8olGX7V.png)

These are the most viewed posts.

## Styling the section

To style the display of the posts, go back to edit the created template as the **Loop Item**.

![Go back to edit the created template to style the display of the posts](https://i.imgur.com/gze6QZO.png)

And, customize each element's settings.

![Customize each element's settings](https://i.imgur.com/NINSkur.png)

Go back to the homepage on the frontend, and you will see the section of the most viewed posts with a nice look.

![The section of the most viewed posts with a nice look](https://i.imgur.com/pdRP9MK.png)


