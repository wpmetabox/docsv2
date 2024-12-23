---
title: Counting the number of related posts using MB Views
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

**Numbering related posts** and **displaying their total count** is an effective way to enhance user experience. Using the **MB Views** extension from Meta Box, you can implement this feature easily and provide readers with a clear idea of how much relevant content they can explore.

So, I’ll show you two approaches:

* Displaying numbered bullet points for each related post.
* Showing the total number of related posts at the bottom of the section.

![Favorite button will automatically appear on the posts](https://i.imgur.com/e654M8s.png)
(Number related posts as well as count the total, using the MB Views extension from Meta Box)

Let’s see how to have it!

## Video version

<LiteYouTubeEmbed id='hiMeLkGX1QA' />

## Preparation

In this tutorial, we’ll use a **Post** field to store multiple related posts and then display them on the frontend. For that, we’ll need a few essential tools to set everything up.

* [The Meta Box plugin](https://wordpress.org/plugins/meta-box/): provides a framework for creating a custom field;
* [MB Views](https://metabox.io/plugins/mb-views/): create a template for displaying and counting related posts;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): have a UI on the back end for visually creating custom fields to save the related posts.

In the case that you want to display related content in the post of any custom post type, you should activate the [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/) extension as well. In this practice, I’ll use the blog posts for demonstration purposes only, so I skip this extension.

Now, let’s go step by step.

## Creating a custom field for related posts

I’ll add related posts to my blog posts, so I'll create the field without any extra steps. As mentioned earlier, if you're adding these related posts to posts in a custom post type, you'll need to create that post type first, and then create a custom field for it.

For illustration purposes of this practice only, I’ll set up a field to add multiple related posts like this.

![A Post field to add multiple related posts](https://i.imgur.com/drvwc77.png)

Now, go to **Meta Box** > **Custom Fields** and create a new field group.

![Create a new field group](https://i.imgur.com/t1ZUWwN.png)

Add a field in the type of **Post**. This field type allows you to choose more than one post from a regulated post type. So that, you can use it to choose several posts, then we can see them as related posts.

![Choose the Post field to save multiple postss](https://i.imgur.com/q0YPZ6V.png)

You should configure this field a little bit.

Specifically, in the **Post types** setting, you should choose the post type that the related posts are. In other words, only the posts from the post type set in this setting can be chosen.

![Choose the post type that the related posts are](https://i.imgur.com/iYt03A4.png)

Next, in the **Field type** setting, you can choose a kind of selecting field, then the created field will inherit its style of displaying and inputting data. To know more about the style of each option in this setting, you can refer to [the documentation](https://docs.metabox.io/fields/post/#settings) of each providing field type.

![In the Field type setting, you can choose a kind of selecting field](https://i.imgur.com/IZyvaRW.png)

Additionally, you should turn on the **Multiple** option if you want to allow users to add more than one related post.

![Turn on the Multiple option if you want to allow users to add more than one related post.](https://i.imgur.com/XHMrxFk.png)

After configuring all options for the field, move to the **Settings** tab, set **Location** as **Post type**, then choose a post type of the post where you want to show related posts.

![Set location as Post type, then choose a post type of the post where you want to show related posts](https://i.imgur.com/gHzA4i4.png)

Go to the post editor, you will see the created field.

![The created field on the post editor](https://i.imgur.com/QIzQrL4.png)

Now, you can click on the field and see the list of posts from the post type you set in the settings of the fields.

![When clicking on the field, you can see the list of posts from the post type](https://i.imgur.com/AT5fy49.png)

Just choose some of them from the list.

## Displaying related posts

Before counting the number of posts, we need to display them first. Head over to **Views** in **Meta Box** and create a new view for its template.

![Head over to Views in Meta Box and create a new view for its template.](https://i.imgur.com/Bn7Dfnj.png)

With **MB Views**, you can add some lines of code to the **Template** tab or insert fields into it by clicking the **Insert Fields** button, and choose any fields on the right sidebar to get data from them.

![With MB Views, add code in the Template tab or insert fields from the sidebar.](https://i.imgur.com/bEJzhYo.png)

In this case, insert the created field, and its suitable output.

![Insert the created field, and its suitable output.](https://i.imgur.com/73YssjW.png)

Then, it will automatically generate code to the template.

![It will automatically generate code to the template](https://i.imgur.com/dZU05me.png)

As we have many posts input in the fields, we have a loop, as shown in the image above. It will list all the related posts that are added into the custom fields.

After that, go down to the **Settings** section of the view, set the **Type** as **Singular**, and choose the location as the singular of your post type.

![In the settings, set Type to Singular and select the singular location of your post type.](https://i.imgur.com/AdmRKNd.png)

Then, you’ll see the related posts section in every post.

![The related posts section in every post.](https://i.imgur.com/tDqagpO.png)

Next, we will add some numbers to this section to let audiences know the total number of related posts.

## Counting the related posts in the list with bullet points

Back to the template, I add a variable, `{{ loop.index }}`, to automatically number each related post in the list. This helps track and display the order of each post.

![Add a variable to automatically number each related post in the list.](https://i.imgur.com/PfMnRDW.png)

Moving on to the frontend, you’ll see the related posts listed with numbered bullet points. This makes it easy for readers to see how much associated content they can explore.

![The related posts listed with numbered bullet points](https://i.imgur.com/wwRx49X.png)

Moreover, if you update the custom field, the list will automatically refresh to reflect those changes, ensuring your content stays up-to-date and engaging.

![If you update the custom field, the list will automatically refresh to reflect those changes](https://i.imgur.com/bYJv1E7.gif)

## Counting posts in total

Still in the created template, remove the `{{ loop.index }}` variable first.

![Remove the {{ loop.index }} variable first](https://i.imgur.com/PfMnRDW.png)

And, add a few lines of code.

```
{% set total_related_post =  mb.count(post.related_posts) %}
<b>Total Related Post:</b> {{ total_related_post }}
```

![Add a few lines of code](https://i.imgur.com/oqmUC3y.png)

**Explanation**:

* The `total_related_post` variable: represents the number of posts selected in the **Post** field with ID as `related_posts`. Then, I use the count function, `mb.count`, to calculate the total number of posts from that field.

* `<b>Total Related Post:</b> {{ total_related_post }}`: display the number of posts that have been counted above.

Now, you'll see the total number of related posts displayed, giving you a clear insight into the content available.

![The total number of related posts displayed](https://i.imgur.com/9hK72Et.png)

If you want to learn more about displaying related posts in a dynamic way, check out our tutorial on [displaying related posts based on a shared relationship](https://docs.metabox.io/tutorials/create-relationships-mb-views/) or explore how to [add related posts with Meta Box](https://docs.metabox.io/tutorials/add-related-posts/).
