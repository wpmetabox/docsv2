---
title: MB Pods Migration
---

MB Pods Migration extension helps you to migrate field groups, custom field data, and relationships from Pods to Meta Box.

:::caution

This extension only migrates the data created by Pods within a site. It doesn't migrate your website from local to the development environment (you'll need another plugin for this) nor the way you use the data like getting the data and displaying it on the front end. After the migration, just go to the database and check how it changes.

:::

## Backup the database

Before migrating data, make sure you have a backup of your database. During the migration process, because of the difference in [data format](/database/), the plugin will attempt to modify the existing data in custom fields created by Pods. We try to do it at a very minimum level and create a backup of fields for some specific cases, but it's still important to make a backup just in case something goes wrong.

## Migrate

Before migrating, make sure you keep Pods, Meta Box (required) and extensions (optional) activated. To know which extensions you might need, please see the **How it works** section below. Normally, if you use Meta Box AIO and keep all extensions activated, you don't have to worry about this.

To migrate, go to **Meta Box > Pods Migration** and click the **Migrate** button.

The plugin will show the process of migrating. When it's done, you'll see the text "Done".

![Migrate from Pods to Meta Box](https://i0.wp.com/images.elightup.com/meta-box/plugins/pods-migration/admin-screen.png)

## How it works

MB Pods Migration tries to migrate all the following data from Pods to Meta Box. Please note that not all data types and settings in Pods have an equivalent in Meta Box. The plugin will try to migrate as much as it can. The details are explained below:

### Post types and taxonomies

The plugin will migrate all custom post types and custom taxonomies created in Pods to Meta Box. This job requires the [MB Custom Post Type](/extensions/mb-custom-post-type/) extension. All the settings like labels and icons are migrated as well.

:::caution

**We must remove Pods post types and taxonomies** after migration, as we cannot change their status to 'Inactive'. Therefore, please ensure that all data is processed before proceeding with the deletion.

:::

### Field groups

Pods field groups are migrated to Meta Box's field groups, which requires [Meta Box Builder](/extensions/meta-box-builder/). Most of the field group settings are the same as in Meta Box.

:::caution

**We must remove Pods field groups** after migration, as we cannot change their status to 'Inactive'. Therefore, please ensure that all data is processed before proceeding with the deletion.

:::

For **field group locations**, the basic rules are already supported in Meta Box and extensions. You might need extensions such as:

- [MB Term Meta](/extensions/mb-term-meta/): If you set locations for taxonomies.
- [MB User Meta](/extensions/mb-user-meta/): If you set locations for users.
- [MB Settings Page](/extensions/mb-settings-page/): If you set locations for settings page.

Besides, if you use complex locations, then you'll need [Meta Box Include Exclude](/extensions/meta-box-include-exclude/) extension. Due to the difference in how plugins create rules, the plugin works the following way:

- If there's only one location group: the plugin will migrate all rules with operator `AND`.
- If there are multiple location groups: the plugin will take the first rule of each group and combine them with operator `OR`.

### Custom fields data

Most Pods field types work well with Meta Box, such as text, radio, select, etc. However, there's still a difference in how plugins store values in the database and we try to mimic the effect as much as possible. The settings for fields in Pods were previously stored in individual rows in the database (in a complex manner). We have now migrated them to a single 'settings' meta key and stored them in one row.

:::info Meta key

Pods stores the field values in the database with the meta key = field ID, which is the same as Meta Box. So, in most cases, we reuse these values. Only in cases that the data format is not compatible with Meta Box, we'll modify the value to match.

:::

### Settings Page

The plugin also migrates all Settings Page from Pods to Meta Box. You'll need the [Meta Box Builder](/extensions/meta-box-builder/) and [MB Settings Page](/extensions/mb-settings-page/) to do this. We'll migrate the settings and data of all Pods settings page to Meta Box.

:::caution

**We must remove Pods settings page** after migration, as we cannot change their status to 'Inactive'. Therefore, please ensure that all data is processed before proceeding with the deletion.

:::

### Relationships

The plugin also migrates all relationships from Pods to Meta Box. You'll need the [Meta Box Builder](/extensions/meta-box-builder/) and [MB Relationships](/extensions/mb-relationships/) to do this. As the settings are quite different between the plugins, we'll migrate the settings of all Pods relationships to many-to-many relationships in Meta Box.

Of course, the data of relationships (the connections between items) are also migrated.

:::caution

**We must remove Pods relationships** after migration, as we cannot change their status to 'Inactive'. Therefore, please ensure that all data is processed before proceeding with the deletion.

:::