---
title: MB Toolset Migration
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

MB Toolset Migration extension helps you to migrate field groups, custom field data, and relationships from Toolset to Meta Box.

## Backup the database

Before migrating data, make sure you have a backup of your database. During the migration process, because of the difference in [data format](/database/), the plugin will attempt to modify the existing data in custom fields created by Toolset. We try to do it at a very minimum level and create a backup of fields for some specific cases, but it's still important to make a backup just in case something goes wrong.

## Migrate

Before migrating, make sure you keep Toolset, Meta Box (required) and extensions (optional) activated. To know which extensions you might need, please see the **How it works** section below. Normally, if you use Meta Box AIO and keep all extensions activated, you don't have to worry about this.

To migrate, go to **Meta Box > Toolset Migration** and click the **Migrate** button.

The plugin will show the process of migrating. When it's done, you'll see the text "Done".

![Migrate Toolset to Meta Box](https://i.imgur.com/2rxOfzu.png)

## How it works

MB Toolset Migration tries to migrate all the following data from Toolset to Meta Box. Please note that not all data types and settings in Toolset have an equivalent in Meta Box. The plugin will try to migrate as much as it can. The details are explained below:

## Post types and taxonomies

The plugin will migrate all custom post types and custom taxonomies created in Toolset to Meta Box. This job requires the [MB Custom Post Type](/extensions/mb-custom-post-type/) extension. All the settings like labels and icons are migrated as well.

:::caution

**We do not remove Toolset post types and taxonomies** after migration, for safety. Instead, we changed their status to 'Inactive'. You can remove them later after all the data is processed.

:::

### Field groups

Toolset field groups are migrated to Meta Box's field groups, which requires [Meta Box Builder](/extensions/meta-box-builder/). Most of the field group settings are the same as in Meta Box.

:::caution

**We do not remove Toolset field groups** after migration, for safety. Instead, we changed their status to 'Inactive'. You can remove them later after all the data is processed.

:::

For **field group locations**, the basic rules are already supported in Meta Box and extensions. You might need extensions such as:

- [MB Term Meta](/extensions/mb-term-meta/): If you set locations for taxonomies.
- [MB User Meta](/extensions/mb-user-meta/): If you set locations for users.

Besides, if you use complex locations, then you'll need [Meta Box Include Exclude](/extensions/meta-box-include-exclude/) extension. Due to the difference in how plugins create rules, the plugin works the following way:

- If there's only one location group: the plugin will migrate all rules with operator `AND`.
- If there are multiple location groups: the plugin will take the first rule of each group and combine them with operator `OR`.

### Custom fields data

Most Toolset field types work well with Meta Box, such as text, radio, select, etc. However, there's still a difference in how plugins store values in the database. Because of that, we'll process the following:

1. **Convert meta keys** in the database. Toolset sets meta keys for fields with the format `wpcf-{$field_id}`. The plugin will change the meta key to just `$field_id` for simplicity.
2. For **media fields**, Toolset stores URLs in the database. We'll change them to IDs.
2. For **fields that have multiple values** such as checkbox list, Toolset saves their values as serialized arrays. We'll migrate them multiple rows in the database (similar to what `add_post_meta` does with the last parameter `false`).
3. For **repeatable groups**, Toolset saves values of each sub-fields in a row in the database (in a complicated way). We'll migrate them into groups (which requires [Meta Box Group](/extensions/meta-box-group/)).

:::info Field backup

For these fields, as the data format is different, for safety, we create a backup for each field value. The new field value is stored with the key `_ts_bak_{$field_id}`.

:::

### Relationships

The plugin also migrates all relationships from Toolset to Meta Box. You'll need the [Meta Box Builder](/extensions/meta-box-builder/) and [MB Relationships](/extensions/mb-relationships/) to do this. As the settings are quite different between the plugins, we'll migrate the settings of all Toolset relationships to many-to-many relationships in Meta Box.

Of course, the data of relationships (the connections between items) are also migrated.

:::caution Database tables

For safety, we don't remove Toolset relationships tables (3) after the migration.

:::