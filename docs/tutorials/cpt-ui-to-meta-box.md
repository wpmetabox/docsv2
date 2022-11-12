---
title: Migrating from CPT UI to Meta Box
---

You can move data from the **CPT UI** to the **Meta Box** with the help of the **MB Custom Post Types** **&amp; Taxonomies** extensions. It will save a lot of time and shorten the process dramatically.

## Step 1: Back up the data

:::caution

Remember to back up your data before migrating to avoid unexpected events.

:::

Here is my example. I have this **Companies** post type created by **CPT UI** with all the posts inside.

![Post typed created by CPU UI](https://i.imgur.com/vyTY90m.png)

As you can see in the **Plugin** menu, the **CPT UI** has already been activated.

![Activate the CPU UI](https://i.imgur.com/U4ZKxGf.png)

I will now proceed to transfer the data.

## Step 2: Install plugins

I'll install and activate **MB Custom Post Types** &amp; **Custom Taxonomies**.

After that, the new **Post Types** menu appears on the **Dashboard** along with the **CPT UI Migration sub-menu**.

![New Post Type menu appears on the Dashboard](https://i.imgur.com/sxEKSlv.png)

## Step 3: Migrate the data

Go to the **Post Types** menu &gt; **CPT UI Migration** &gt; Click the **Migrate** button.

![Click the Migrate button in the Post Types menu](https://i.imgur.com/FRk0drJ.png)

When the process finishes, it will show a "Done" message.

**Note**: The **CPT UI** menu will automatically disappear when the migration process finishes. This is because Meta Box automatically deactivated it to avoid conflict and errors caused by registering the same post type.

## Step 4: Validate

The Companies post type and all the terms in the Company Types taxonomy are still there. They are the new ones created by Meta Box. It also means that all the data was migrated successfully.

![The Companies post type has successfully migrated](https://i.imgur.com/x7i0sB9.png)

And the **CPT UI** has already been deactivated.

![The CPT UI has already been deactivated](https://i.imgur.com/U4ZKxGf.png)

The migration has been done.
