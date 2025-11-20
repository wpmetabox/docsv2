---
title: MB Custom Post Types & Custom Taxonomies
sidebar_label: MB Custom Post Types
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FAQ from '@site/src/components/FAQ';

This extension helps you create custom post types and custom taxonomies with a user-friendly interface.

## Creating post types

To create a new custom post type, go to **Meta Box » Post Types** and click **New Post Type**:

![create a new custom post type](https://imgur.elightup.com/3GKvMnb.png)

There are several settings divided into tabs. In most cases, you only need to enter the plural name, singular name, and slug in the **General** tab and click the **Publish** button to register the post type.

### Post type settings

If you want to customize the post type such as changing the menu icon or disabling the block editor (Gutenberg) for it, please see the settings below.

:::tip

From our experience, the most important settings are in the **Advanced** tab.

:::

<Tabs>
  <TabItem value="general" label="General" default>

![creating a post type](https://imgur.elightup.com/GhMqEU4.png)

Name | Description
---|---
Plural name | General name for the post type, usually plural. Required.
Singular name | Name for one object of this post type. Required.
Slug | Post type key. Must not exceed 20 characters and may only contain lowercase alphanumeric characters, dashes, and underscores.

When entering a singular name for the post type, the slug is automatically generated. You can manually change the slug if necessary.

  </TabItem>

  <TabItem value="label" label="Label">

Labels are automatically generated from the post type's plural and singular names.

![label settings](https://imgur.elightup.com/h3pXR2Y.png)

Name | Description
---|---
Add new | Label for adding a new singular item. Default is 'Add New' for both hierarchical and non-hierarchical types.
Add new item | Label for adding a new singular item. Default is 'Add New Post' / 'Add New Page'.
Edit item | Label for editing a singular item. Default is 'Edit Post' / 'Edit Page'.
New item | Label for the new item page title. Default is 'New Post' / 'New Page'.
View item | Label for viewing a singular item. Default is 'View Post' / 'View Page'.
View items | Label for viewing post type archives. Default is 'View Posts' / 'View Pages'.
Search items | Label for searching items. Default is 'Search Posts' / 'Search Pages'.
Not found | Label used when no items are found. Default is 'No posts found' / 'No pages found'.
Not found in trash | Label used when no items are in the Trash. Default is 'No posts found in Trash' / 'No pages found in Trash'.
Parent items | Label used to prefix parents of hierarchical items. Not used on non-hierarchical post types. Default is 'Parent Page:'.
All items | Label to signify all items in a submenu link. Default is 'All Posts' / 'All Pages'.
Nav menu archives | Label for archives in nav menus. Default is 'Post Archives' / 'Page Archives'.
Attributes meta box | Label for the attributes meta box. Default is 'Post Attributes' / 'Page Attributes'.
Media frame button | Label for the media frame button. Default is 'Insert into post' / 'Insert into page'.
Media frame filter | Label for the media frame filter. Default is 'Uploaded to this post' / 'Uploaded to this page'.
Featured image meta box | Label for the featured image meta box title. Default is 'Featured image'.
Setting the featured image | Label for setting the featured image. Default is 'Set featured image'.
Removing the featured image | Label for removing the featured image. Default is 'Remove featured image'.
Used as featured image | Label in the media frame for using a featured image. Default is 'Use as featured image'.
Menu name | Label for the menu name. Default is the same as plural name.
Table filter hidden heading | Label for the table views hidden heading. Default is 'Filter posts list' / 'Filter pages list'.
Table date filter hidden heading | Label for the date filter in list tables. Default is 'Filter by date'.
Table pagination hidden heading | Label for the table pagination hidden heading. Default is 'Posts list navigation' / 'Pages list navigation'.
Table hidden heading | Label for the table hidden heading. Default is 'Posts list' / 'Pages list'.
Item published | Label used when an item is published. Default is 'Post published.' / 'Page published.'
Item published privately | Label used when an item is published with private visibility. Default is 'Post published privately.' / 'Page published privately.'
Item switched to draft | Label used when an item is switched to a draft. Default is 'Post reverted to draft.' / 'Page reverted to draft.'
Item scheduled | Label used when an item is scheduled for publishing. Default is 'Post scheduled.' / 'Page scheduled.'
Item updated | Label used when an item is updated. Default is 'Post updated.' / 'Page updated.'

  </TabItem>

  <TabItem value="advanced" label="Advanced">

![advanced settings](https://imgur.elightup.com/AzdNBWH.png)

Name | Description
---|---
Description | A short descriptive summary of what the post type is.
Public | Whether a post type is intended for use publicly either via the admin interface or by front-end users. Default false.
Hierarchical | Whether the post type is hierarchical (e.g. page). Default false.
Exclude from search | Whether to exclude posts with this post type from front-end search results. Default is the opposite value of the public settings.
Publicly queryable | Whether queries can be performed on the front end for the post type as part of `parse_request()`. Default is inherited from the public settings.
Show UI | Whether to generate and allow a UI for managing this post type in the admin. Default is the value of the public settings.
Show in menu | Where to show the post type in the admin menu.
Menu position after | The position in the menu order the post type should appear.
Menu icon | The URL to the icon to be used for this menu (Dashicons).
Show in nav menus | Makes this post type available for selection in navigation menus. Default is the value of the public settings.
Show in admin bar | Makes this post type available via the admin bar. Default is the value of show in menu settings.
Show in REST | Whether to include the post type in the REST API. Set this to true for the post type to be available in the block editor.
REST API base slug | Custom base URL of REST API route. Default is the post type slug.
Capability type | The string to use to build the read, edit, and delete capabilities. Default 'post'.
Has archive | Whether there should be post type archives. Will generate the proper rewrite rules if the rewrite settings are enabled. Default false.
Custom archive slug | The custom archive slug. Default is the post type slug.
Custom rewrite slug | Customize the permalink slug. Default is the post type slug.
Prepended permalink structure | Whether the permalink should be prepended. Example: if your permalink is `/blog/`, then your links will be: `false` -> `/news/`, `true` -> `/blog/news/`. Default true.
Query var | Sets the custom query var key for this post type. Default is the post type slug.
Can export | Whether to allow this post type to be exported. Default true.
Delete with user | Whether to delete posts of this type when deleting a user.

  </TabItem>

  <TabItem value="supports" label="Supports">

These are core features the post type supports.

![supports settings](https://imgur.elightup.com/Fk9dp5w.png)

Name | Description
---|---
Title | Post title
Editor | Post editor (the main content)
Excerpt | Post excerpt
Author | Post author
Thumbnail | The featured image
Trackbacks | The trackbacks/pingbacks from other websites
Custom fields | The custom fields meta box in the edit screen
Comments | Enable comments for posts of this type
Revisions | Enable revisions for posts of this type
Page attributes | The attributes meta box to select post template and parent
Post formats | Enable post format for posts

  </TabItem>

  <TabItem value="taxonomies" label="Taxonomies">

This is the list of taxonomies that are registered for the post type. Select the taxonomies you want to use for the post type.

![taxonomies settings](https://imgur.elightup.com/aggYlsw.png)

  </TabItem>

  <TabItem value="features" label="Features" default>

![The Features tab of MB Custom Post Type](./img/cpt-features-tab.png)

Name | Description
---|---
Re-Order Posts | Order posts of that post type using a drag and drop interface.
Add toggle status column | Add a column to quickly toggle post status between published and draft.

  </TabItem>

</Tabs>

### Getting PHP code

If you're familiar with PHP, you might want to get the PHP code to register the post type. To do that, click the **Get PHP Code** button and copy the generated code. Then can insert it into your theme's `functions.php` file (or your plugin's file). After inserting, you can deactivate the extension to make your site a little bit faster.

## Creating taxonomies

To create a new custom taxonomy, go to **Meta Box » Taxonomies** and click **Add New**:

![create a new taxonomy](https://imgur.elightup.com/zKK4f87.png)

There are several settings divided into tabs. In most cases, you only need to enter the plural name, singular name, and slug in the **General** tab and click the **Publish** button to register the taxonomy.

The settings are similar to creating post types above.

### Taxonomy settings

If you want to customize the taxonomy such as setting the hierarchy or showing it in the post type list table, please see the settings below.

:::tip

From our experience, the most important settings are in the **Advanced** tab.

:::


<Tabs>
  <TabItem value="general" label="General" default>

![create taxonomies](https://imgur.elightup.com/yy7wy9w.png)

Name | Description
---|---
Plural name | General name for the taxonomy, usually plural. Required.
Singular name | Name for one object of this taxonomy. Required.
Slug | Taxonomy key, must not exceed 32 characters and may only contain lowercase alphanumeric characters, dashes, and underscores.

When entering a singular name for the taxonomy, the slug is automatically generated. You can manually change the slug if necessary.

  </TabItem>

  <TabItem value="labels" label="Labels" default>

Labels are automatically generated from the taxonomy's plural and singular names.

![taxonomy label settings](https://imgur.elightup.com/LtuXkrh.png)

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

![ taxonomy advanced settings](https://imgur.elightup.com/dOCcR5d.png)

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

This is the list of post types that are connected with the taxonomy. Select the post types you want to connect to the taxonomy.

![post types settings](https://imgur.elightup.com/MQCmchM.png)

  </TabItem>

  <TabItem value="permissions" label="Permissions" default>

![Permissions tab](./img/taxonomy-permissions-tab.png)

Name | Description
---|---
Manage terms | The capability required for managing terms.
Edit terms | The capability required for editing terms.
Delete terms | The capability required for deleting terms.
Assign terms | The capability required for assigning terms.

  </TabItem>


  <TabItem value="features" label="Features" default>

![The Features tab of Custom Taxonomy](./img/taxonomy-features-tab.png)

Name | Description
---|---
Re-Order Terms | Order terms of this taxonomy using a drag and drop interface.

  </TabItem>

</Tabs>

### Getting PHP code​

If you're familiar with PHP, you might want to get the PHP code to register the taxonomy. To do that, click the **Get PHP Code** button and copy the generated code. Then can insert it into your theme's `functions.php` file (or your plugin's file). After inserting, you can deactivate the extension to make your site a little bit faster.

## Video tutorial

The video below shows you the steps and explains the settings for a custom post type (and also custom taxonomy):

<LiteYouTubeEmbed id='-oYrHGOri4w' />

## Notes

### Custom capabilities for custom post types

When creating custom post types, you have 3 options to set capabilities: copy from "post", copy from "page" or create custom capabilities. While copying from "post" or "page" is clear (the plugin applies the same capabilities from post or page for this custom post type), creating custom capabilities might be confusing.

When you select "custom" for capabilities, the plugin does the following (assumming we have a post type `book`):

- Set `'capability_type' => array( 'book', 'books' ),`, and
- Set `'map_meta_cap' => true`

These 2 steps will create the following capabilities for the post types:

```php
[edit_post]              => 'edit_book'
[read_post]              => 'read_book'
[delete_post]            => 'delete_book'

// Primitive capabilities used outside of map_meta_cap():

[edit_posts]             => 'edit_books'
[edit_others_posts]      => 'edit_others_books'
[publish_posts]          => 'publish_books'
[read_private_posts]     => 'read_private_books'

// Primitive capabilities used within map_meta_cap():

[read]                   => 'read',
[delete_posts]           => 'delete_books'
[delete_private_posts]   => 'delete_private_books'
[delete_published_posts] => 'delete_published_books'
[delete_others_posts]    => 'delete_others_books'
[edit_private_posts]     => 'edit_private_books'
[edit_published_posts]   => 'edit_published_books'
[create_posts]           => 'edit_books'
```

And thanks to `map_meta_cap`, the admin role can edit the posts types.

### Block templates with MB Blocks

Sometimes you want to load default blocks created by [MB Blocks](/extensions/mb-blocks/) when creating a new post. Block templates allow specifying a default initial state for an editor session. Use the argument `template` when registering the post type:

`'template'              => [
    ['meta-box/{$block_id}']
]`

### Reserved terms

There is a complete set of reserved keywords, or terms, in WordPress that should not be used in certain circumstances as they may conflict with core functionality. See more in [the documentation](https://codex.wordpress.org/Reserved_Terms).

## FAQ

<FAQ question="Why do I see 404 errors (not found) for my custom post type?">

The problem is that WordPress hasn't refreshed the rewrite rules for the custom post type. Please go to **Settings » Permalink** and re-save the settings.

</FAQ>

<FAQ question="How do I customize the permalink for custom post types?">

Meta Box only supports changing the rewrite slug for custom post types. If you want more customization for the permalink, you'll need a plugin like [Custom Post Type Permalinks](https://wordpress.org/plugins/custom-post-type-permalinks/) or if you're a developer, you can follow [this guide](https://www.shibashake.com/wp/custom-post-type-permalinks-part-2).

</FAQ>

<FAQ question="How do I add custom taxonomies to the permalink of custom post types?">

Similar to the question above, Meta Box only supports changing the rewrite slug for custom post types. If you want to add custom taxonomies to the permalink of custom post types, you'll need a plugin like [Custom Post Type Permalinks](https://wordpress.org/plugins/custom-post-type-permalinks/) or if you're a developer, you can follow [this guide](https://wordpress.stackexchange.com/q/94817/2051).

</FAQ>

<FAQ question="How do I change a post type slug without losing posts?">

After changing your post type slug, you can use the plugin [Post Type Switcher](https://wordpress.org/plugins/post-type-switcher/) to switch the posts from the old post type to the new one.

</FAQ>

<FAQ question="Will my posts be deleted if I remove a post type?">

No, they're still in the database, but not visible. To show them again, create a post type with the old slug.

</FAQ>

<FAQ question="Can I change the back-end UI for selecting taxonomy to radio buttons?">

The default WordPress UI can't be changed to radio buttons. However, you can remove the default WordPress UI and create a [taxonomy field](/fields/taxonomy/) with Meta Box, which supports many ways to display and choose terms, including radio buttons. See this video for how to do that:

<LiteYouTubeEmbed id='6KBmZX-c6MY' />

</FAQ>

<FAQ question="Can I use this extension without Meta Box?">

Yes! This extension can work independently without Meta Box. If you only need custom post types and/or custom taxonomies (no custom fields), then you can install the extension for free from [WordPress.org](https://wordpress.org/plugins/mb-custom-post-type/).

</FAQ>
