---
title: Creating custom post types
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import FAQ from '@site/src/components/FAQ';

When building a website, there may be sections on the website such as events and projects where the content and appearance are very different from posts and pages. That's when you need custom post types.

## What are custom post types?

Custom post types are different types of content in WordPress. You should consider creating a custom post type for a particular content type if:

- It needs to be displayed differently from posts and pages, or
- It doesn't look and feel like a post or a page, or
- It needs some additional fields and characteristics

## How to create a custom post type?

Creating custom post types is done easily with the **MB Custom Post Types & Custom Taxonomies** extension. This extension is already bundled in Meta Box AIO, MB Core, or you can install it for free from [WordPress.org](https://wordpress.org/plugins/mb-custom-post-type/).

To create a new custom post type, go to **Meta Box » Post Types** and click **New Post Type**:

![create a new custom post type](https://i.imgur.com/QwdI219.png)

And you'll see a screen to configure the post type:

![creating a post type](https://i.imgur.com/GhMqEU4.png)

In most cases, you only need to enter the plural name, singular name, and slug in the **General** tab and click the **Publish** button to register the post type.

:::caution Don't use WordPress reserved terms

There is a complete set of [WordPress reserved terms](https://codex.wordpress.org/Reserved_Terms) that should **not** be used for the post type slug as they may conflict with WordPress core functionality.

:::

### Post type settings

If you want to customize the post type such as changing the menu icon or disabling the block editor (Gutenberg) for it, please see the settings below.

:::tip

From our experience, the most important settings are in the **Advanced** tab.

:::

<Tabs>
  <TabItem value="general" label="General" default>

![creating a post type](https://i.imgur.com/GhMqEU4.png)

Name | Description
---|---
Plural name | General name for the post type, usually plural. Required.
Singular name | Name for one object of this post type. Required.
Slug | Post type key. Must not exceed 20 characters and may only contain lowercase alphanumeric characters, dashes, and underscores.

When entering a singular name for the post type, the slug is automatically generated. You can manually change the slug if necessary.

  </TabItem>

  <TabItem value="label" label="Label">

Labels are automatically generated from the post type's plural and singular names.

![label settings](https://i.imgur.com/h3pXR2Y.png)

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

![advanced settings](https://i.imgur.com/AzdNBWH.png)

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

![supports settings](https://i.imgur.com/Fk9dp5w.png)

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

This is the list of taxonomies that are registered for the post type. Simply select the taxonomies you want to use for the post type.

![taxonomies settings](https://i.imgur.com/aggYlsw.png)

  </TabItem>

</Tabs>

### Generate PHP code

If you're familiar with PHP, you might want to get the PHP code to register the post type. To do that, click the **Get PHP Code** button and copy the generated code. Then can insert it into your theme's `functions.php` file (or your plugin's file). After inserting, you can deactivate the extension to make your site a little bit faster.

### Video tutorial

The video below shows you the steps and explains the settings for a custom post type (and also custom taxonomy):

<LiteYouTubeEmbed id='-oYrHGOri4w' />

## FAQ

<FAQ question="Why do I see 404 errors (not found) for my custom post type?">

The problem is that WordPress hasn't refreshed the rewrite rules for the custom post type. Please go to **Settings » Permalink** and re-save the settings.

</FAQ>

<FAQ question="How do I customize the permalink for custom post types?">

Meta Box only supports changing the rewrite slug for custom post types. If you want more customization for the permalink, you'll need a plugin like [Custom Post Type Permalinks](https://wordpress.org/plugins/custom-post-type-permalinks/) or if you're a developer, you can follow [this guide](https://www.shibashake.com/wp/custom-post-type-permalinks-part-2).

</FAQ>

<FAQ question="How do I change a post type slug without losing posts?">

After changing your post type slug, you can use the plugin [Post Type Switcher](https://wordpress.org/plugins/post-type-switcher/) to switch the posts from the old post type to the new one.

</FAQ>

<FAQ question="Will my posts be deleted if I remove a post type?">

No, they're still in the database, but not visible. To show them again, simply create a post type with the old slug.

</FAQ>

## Next steps

After creating a custom post type, you might want to add some custom taxonomies to categorize them or add custom fields to enter more details for each post of that post type. Let's continue with [custom taxonomies](/creating-taxonomies/).