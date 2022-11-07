---
title: Moving custom post types & taxonomies from CPT UI to Meta Box
---

You can move data from the **CPT UI** to the **Meta Box** with the help of the **MB Custom Post Types** **&amp; Taxonomies** extensions. It will save a lot of time and shorten the process dramatically.

## Backing up the data

**Note**: Remember to back up your data before migrating to avoid unexpected events.

Here is my example. I have this **Companies** post type created by **CPT UI** with all the posts inside.

![Post typed created by CPU UI](https://i.imgur.com/vyTY90m.png)

As you can see in the **Plugin** menu, the **CPT UI** has already been activated.

<img alt="Activate the CPU UI" height="636" src="https://i.imgur.com/U4ZKxGf.png" width="1560">

I will now proceed to transfer the data.

## Installing plugins

I'll install and activate **MB Custom Post Types** &amp; **Custom Taxonomies**.

After that, the new **Post Types** menu appears on the **Dashboard** along with the **CPT UI Migration sub-menu**.

<img alt="New Post Type menu appears on the Dashboard" height="606" src="https://i.imgur.com/sxEKSlv.png" width="1200">

## Migrating the data

Go to the **Post Types** menu &gt; **CPT UI Migration** &gt; Click the **Migrate** button.

<img alt="Click the Migrate button in the Post Types menu" height="603" src="https://i.imgur.com/FRk0drJ.png" width="1200">

When the process finishes, it will show a "Done" message.

**Note**: The **CPT UI** menu will automatically disappear when the migration process finishes. This is because Meta Box automatically deactivated it to avoid conflict and errors caused by registering the same post type.

## Validating

The Companies post type and all the terms in the Company Types taxonomy are still there. They are the new ones created by Meta Box. It also means that all the data was migrated successfully.

<img alt="The Companies post type has successfully migrated." height="606" src="https://i.imgur.com/x7i0sB9.png" width="1200">

And the **CPT UI** has already been deactivated.

<img alt="The CPT UI has already been deactivated" height="636" src="https://i.imgur.com/U4ZKxGf.png" width="1560">

The migration has been done.
