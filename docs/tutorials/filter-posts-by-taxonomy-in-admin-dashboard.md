---
title: Filtering posts by taxonomy in the admin dashboard
---

Managing content on WordPress can become overwhelming as the number of posts grows, whether they are regular blog posts or part of a specific custom post type. Even with taxonomies to categorize posts, searching through large volumes of content remains challenging, especially when you need to find specific information within a particular post.

Therefore, **filtering posts is essential to easily find a certain group of content**. Since posts are often categorized by taxonomies, we can filter posts based on these terms right in the backend, making the search process faster and more efficient.

![Filter posts by taxonomy](https://i.imgur.com/4WgDnl2.gif)

However, WordPress does not support this feature by default, so to enable filtering posts by a specific taxonomy, we’ll need to have a few additional steps.

Let’s explore how to enable post filtering in this guide!

To start, assuming that you already have posts in a custom post type and taxonomies created with the [MB Custom Post Type & Taxonom](https://metabox.io/plugins/custom-post-type/)y extension from Meta Box. However, even with these, you still can’t filter posts by taxonomy directly. To do that, you’ll need an additional plugin - Admin Taxonomy Filter.

## Step 1: Installing a plugin

To filter ports by a taxonomy, we need to use the [Admin Taxonomy Filter](https://wordpress.org/plugins/admin-taxonomy-filter/) plugin. This one is also developed by the Meta Box team, so it works seamlessly with both custom post types and custom taxonomies on your website. You can download this plugin on [wordpress.org](https://wordpress.org/plugins/admin-taxonomy-filter/).

![Install the Admin Taxonomy Filter plugin](https://i.imgur.com/3maRXza.png)

Once you’ve installed this plugin, you can filter posts in a custom post type in the admin area by custom taxonomies.

## Step 2: Setting up the taxonomy

Go to **Settings** > **Taxonomy Filter**, and look for the custom post type and choose the taxonomy you want to filter by. This step ensures that the plugin knows which taxonomy should be used for filtering posts within that custom post type.

![Look for the custom post type and choose the taxonomy you want to filter by.](https://i.imgur.com/3Jf3M8t.png)

When you’ve selected the taxonomy, let’s move to filter posts by this taxonomy!

## Step 3: Filtering posts by taxonomy

From now on, when you go to a post list in a custom post type, you’ll see a new box to choose a term of the selected taxonomy to filter posts by.

![A new box to choose a term of the selected taxonomy to filter posts by.](https://i.imgur.com/wgWycNS.png)

Just selecting a term from the dropdown list and clicking the Filter button. Then, the list of posts categorized under the selected term will then be displayed.

![Filter posts by the taxonomy.](https://i.imgur.com/4WgDnl2.gif)

So, the Admin Taxonomy Filter plugin did everything for you.

In another aspect, if you're looking to filter posts by taxonomy on the frontend, check out our detailed guide [here](https://docs.metabox.io/tutorials/search-posts-by-taxonomy/).
