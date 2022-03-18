---
title: Custom post types
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

![create a new custom post type](https://i.imgur.com/3GKvMnb.png)

There are several settings divided into tabs. In most cases, you only need to enter the plural name, singular name, and slug in the **General** tab and click the **Publish** button to register the post type.

:::info

To understand the settings in detail, please [see the docs](/extensions/mb-custom-post-type/#post-type-settings) for the MB Custom Post Types & Custom Taxonomies extension.

:::

## Creating custom taxonomies

When having a lot of posts of a custom post type, you might want to categorize them. For example, categorize music albums by genre or artist. To categorize posts like that, you'll need custom taxonomies.

Taxonomies in WordPress is a mechanism for grouping posts, like category and tag. In the example above, "genre" and "artist" are custom taxonomies for the custom post type "music album".

To create a new custom taxonomy, go to **Meta Box » Taxonomies** and click **Add New**:

![create a new taxonomy](https://i.imgur.com/zKK4f87.png)

There are several settings divided into tabs. In most cases, you only need to enter the plural name, singular name, and slug in the **General** tab and click the **Publish** button to register the taxonomy.

:::info

To understand the settings in details, please [see the docs](/extensions/mb-custom-post-type/#taxonomy-settings) for the MB Custom Post Types & Custom Taxonomies extension.

:::

## Video tutorial

The video below shows you the steps and explains the settings for a custom post type and a custom taxonomy:

<LiteYouTubeEmbed id='-oYrHGOri4w' />

## Next steps

After creating a custom post type, let's [add custom fields](/custom-fields/) to add more details for posts of that post type! That's the most important part of the whole process and is the heart of Meta Box.