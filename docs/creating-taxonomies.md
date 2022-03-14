---
title: Creating custom taxonomies
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FAQ from '@site/src/components/FAQ';

When having a lot of posts of a custom post type, you might want to categorize them. For example, categorize music albums by genre or artist. To categorize posts like that, you'll need custom taxonomies.

## What are custom taxonomies?

Taxonomies in WordPress is a mechanism for grouping posts, like category and tag. In the example above, "genre" and "artist" are custom taxonomies for the custom post type "music album".

## How to create a custom taxonomy?

Creating custom taxonomies is very similar to creating post types that we have seen [previously](/creating-post-types/). It's done easily by the same **MB Custom Post Types & Custom Taxonomies** extension, which is already bundled in Meta Box AIO, MB Core, or you can install it for free from [WordPress.org](https://wordpress.org/plugins/mb-custom-post-type/).

To create a new custom taxonomy, go to **Meta Box » Taxonomies** and click **Add New**:

<img src="https://i.imgur.com/bwI5gXL.png" alt="create a new custom taxonomy" width="300" height="390" loading="lazy" />

And you'll see a screen to configure the taxonomy:

![create taxonomies](https://i.imgur.com/yy7wy9w.png)

In most cases, you only need to enter the plural name, singular name, and slug in the **General** tab and click the **Publish** button to register the taxonomy.

:::caution Don't use WordPress reserved terms

There is a complete set of [WordPress reserved terms](https://codex.wordpress.org/Reserved_Terms) that should **not** be used for the taxonomy slug as they may conflict with WordPress core functionality.

:::

### Taxonomy settings

If you want to customize the taxonomy such as setting the hierarchy or showing it in the post type list table, please see the settings below.

:::tip

From our experience, the most important settings are in the **Advanced** tab.

:::


<Tabs>
  <TabItem value="general" label="General" default>

![create taxonomies](https://i.imgur.com/yy7wy9w.png)

Name | Description
---|---
Plural name | General name for the taxonomy, usually plural. Required.
Singular name | Name for one object of this taxonomy. Required.
Slug | Taxonomy key, must not exceed 32 characters and may only contain lowercase alphanumeric characters, dashes, and underscores.

When entering a singular name for the taxonomy, the slug is automatically generated. You can manually change the slug if necessary.

  </TabItem>

  <TabItem value="labels" label="Labels" default>

Labels are automatically generated from the taxonomy's plural and singular names.

![taxonomy label settings](https://i.imgur.com/LtuXkrh.png)

Name | Description
---|---
Search items | Label for searching items. Default 'Search Tags'/'Search Categories'.
Popular items | Label for most popular items, only used for non-hierarchical taxonomies. Default 'Popular Tags'.
All items | Label to signify all items in a submenu link. Default 'All Tags'/'All Categories'.
Parent item | Label for parent item, only used for hierarchical taxonomies. Default 'Parent Category'.
Parent item colon | The same as parent item, but with colon : in the end.
Edit item | Label for adding a new singular item. Default 'Edit Tag'/'Edit Category'.
View item | Label for viewing a singular item. Default 'View Tag'/'View Category'.
Update item | Label for updating a singular item. Default 'Update Tag'/'Update Category'.
Add new item | Label for adding a new singular item. Default 'Add New Tag'/'Add New Category'.
New item name | Label for new item name. Default 'New Tag Name'/'New Category Name'.
Separate items with commas | This label is only used for non-hierarchical taxonomies. Default 'Separate tags with commas', used in the meta box.
Add or remove items | This label is only used for non-hierarchical taxonomies. Default 'Add or remove tags', used in the meta box when JavaScript is disabled.
Choose from most used | This label is only used on non-hierarchical taxonomies. Default 'Choose from the most used tags', used in the meta box.
Not found | Label used in the meta box and taxonomy list table. Default 'No tags found'/'No categories found'.
No terms | Label used in the posts and media list tables. Default 'No tags'/'No categories'.
Filter by | This label is only used for hierarchical taxonomies, used in the posts list table. Default 'Filter by category'.
Table pagination hidden heading | Label for the table pagination hidden heading.
Table hidden heading | Label for the table hidden heading.
Most used tab | Title for the Most Used tab. Default 'Most Used'.
Back to items | Label displayed after a term has been updated.
Menu name | Label for the tab in the admin menu.

  </TabItem>

  <TabItem value="advanced" label="Advanced" default>

![ taxonomy advanced settings](https://i.imgur.com/dOCcR5d.png)

Name | Description
---|---
Description | A short descriptive summary of what the taxonomy is for.
Public | Whether a taxonomy is intended for use publicly either via the admin interface or by front-end users.
Public queryable| Whether the taxonomy is publicly queryable. If not set, the default is inherited from the public settings.
Hierarchical | Whether the taxonomy is hierarchical. Default false.
Show UI | Whether to generate and allow a UI for managing terms in this taxonomy in the admin. If not set, the default is inherited from the public settings (default true).
Show in menu | Whether to show the taxonomy in the admin menu. If true, the taxonomy is shown as a submenu of the object type menu. If false, no menu is shown. The show UI settings must be true. If not set, default is inherited from the show UI settings.
Show in nav menus | Makes this taxonomy available for selection in navigation menus. If not set, the default is inherited from the public settings.
Show on edit page | Whether to show the taxonomy meta box on the edit page.
Show in REST | Whether to include the taxonomy in the REST API. Set this to true for the taxonomy to be available in the block editor.
REST API base slug | To change the base URL of the REST API route. Default is the taxonomy slug.
Show tag cloud | Whether to list the taxonomy in the Tag Cloud Widget controls. Default is inherited from the show UI settings.
Show in quick edit | Whether to show the taxonomy in the quick/bulk edit panel. Default is inherited from the show UI settings.
Show admin column | Whether to display a column for the taxonomy on its post type list table. Default false.
Custom rewrite slug | Customize the permastruct slug. Default is the taxonomy slug.
Prepended permalink structure | Should the permastruct be prepended. Default true. Example: if your permalink structure is `/blog/`, then your links will be: false -> `/news/`, true -> `/blog/news/`.
Hierarchical URL | Either hierarchical rewrite tag or not. Default false.
Query var | Sets the query var key (taxonomy slug) for this taxonomy.
Sort | Whether terms in this taxonomy should be sorted.

  </TabItem>

  <TabItem value="post type" label="Post types" default>

This is the list of post types that are connected with the taxonomy. Simply select the post types you want to connect to the taxonomy.

![post types settings](https://i.imgur.com/MQCmchM.png)

  </TabItem>

</Tabs>

### Generate PHP code​

If you're familiar with PHP, you might want to get the PHP code to register the taxonomy. To do that, click the **Get PHP Code** button and copy the generated code. Then can insert it into your theme's `functions.php` file (or your plugin's file). After inserting, you can deactivate the extension to make your site a little bit faster.

### Video tutorial

The video below shows you the steps and explains the settings for a custom taxonomy (with a custom post type):

<LiteYouTubeEmbed id='-oYrHGOri4w' />

## FAQ

<FAQ question="Can I change the back-end UI for selecting taxonomy to radio buttons?">

The default WordPress UI can't be changed to radio buttons. However, you can remove the default WordPress UI and create a [taxonomy field](/fields/taxonomy/) with Meta Box, which supports many ways to display and choose terms, including radio buttons. See this video for how to do that:

<LiteYouTubeEmbed id='6KBmZX-c6MY' />

</FAQ>

<FAQ question="How do I add custom taxonomies to the permalink of custom post types?">

Meta Box only supports changing the rewrite slug for custom post types. If you want to add custom taxonomies to the permalink of custom post types, you'll need a plugin like [Custom Post Type Permalinks](https://wordpress.org/plugins/custom-post-type-permalinks/) or if you're a developer, you can follow [this guide](https://wordpress.stackexchange.com/q/94817/2051).

</FAQ>

## Next steps

After creating a custom post type and some custom taxonomies, let's [add custom fields](/creating-meta-boxes/) to add more details for posts of that post type! That's the most important part of the whole process and is the heart of Meta Box.