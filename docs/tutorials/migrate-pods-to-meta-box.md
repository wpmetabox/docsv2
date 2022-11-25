---
title: Migrating custom post type and fields from Pods to Meta Box
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We will move all the data of the custom post type and custom fields created with Pods to Meta Box easily following these few simple steps.

## Video Version

<LiteYouTubeEmbed id='iYGAXypM_c0' />

## Overall

Both Pods and Meta Box use two WordPress standard functions: `get_post_meta()` and `update_post_meta()`. 

Besides, these two plugins [save the custom fields' data](https://docs.metabox.io/database/) in the same way: save each field in a line on the post meta table with the `meta_key` field’s ID and the `meta_value` field’s value. 

Therefore, to move data from Pods to Meta Box, we just need to create new fields in Meta Box that have the same IDs as the corresponding fields in Pods. As for the custom post types, the method is the same.

I’m going to move data of the **Project** custom type and its custom fields from Pods to Meta Box. In this case, I’ll move only the data of custom fields for **posts**. You can apply the same method for **terms** and **users**.

## Before getting started

As I said, we will create a custom post type and custom fields in [Meta Box](https://wordpress.org/plugins/meta-box/), so we need it along with some of its extensions:

* [MB Custom Post Types & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create custom post types easily. It can run without installing the Meta Box core plugin. Otherwise, you can try [Post Type Generator](https://metabox.io/post-type-generator/).
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to create custom fields with an intuitive interface in the backend. If you don’t want to use this premium extension of Meta Box, you can use the free tool provided by Meta Box in the simplified version of Meta Box Builder - [Online Generator](https://metabox.io/online-generator/).

## Step 1: Get the post type’s slug & custom field’s ID in Pods

I already have the **Project** post type created with Pods. Its slug is _‘project’_. You can see it in the **Name** column:

![The created post type](https://i.imgur.com/0WjFgSH.png)

In the **Project** post type, there are two custom fields. Their IDs are _project_name_ and _project_description_.

![There are two custom fields in the post type](https://i.imgur.com/rC4Syns.png)

These are posts in the Project post type created by Pods:

![The created post type by Pods](https://i.imgur.com/rIp1QNp.png)

And these are the custom fields in the Project post type:

![The custom fields in the post type](https://i.imgur.com/WVdDK9B.png)

Now, **deactivate the Pods plugin**. After that, the data of Pods is still in the database.

## Step 2: Create a Custom Post Type and Move Its Data from Pods to Meta Box

First, activate the **Meta Box** plugin and its extensions.

Then, go to **Meta Box** > **Post Types** > **Add New**. Fill in the information for the new post type, and note that **its slug must be the same as in Pods**.

![The slug must be the same as in Pods](https://i.imgur.com/Oj8lhml.png)

After that, the new custom post type will display in the Admin Menu. When you open the new post type, you will see all the old posts of the **Project** post type that you created with Pods previously.

![The old posts of the created post type wwill appear](https://i.imgur.com/rIp1QNp.png)

Especially, the post information such as post title, post content, ... is still kept.

![The post information is still kept](https://i.imgur.com/Cgq5FzX.png)

That’s how we’ve done for moving the posts content.

## Step 3: Create Custom Fields and Move Their Data from Pods to Meta Box

Go to **Meta Box** > **Custom Fields** > **Add New** to create new fields corresponding to the fields in Pods.

Pods and Meta Box support many different fields. Therefore, every time you add a new field with Meta Box, it must have the corresponding field type. This makes sure that the data of custom fields are saved in the same method.

For example, the corresponding field type of paragraph text (Pods field) is the text area (Meta Box field).

Similar to the previous step, you must enter the corresponding IDs for the custom fields. You can use the different values for other information like **Label**. However, to make the information consistent, I recommend that you should copy exactly everything.

![Enter the corresponding IDs for the post type](https://i.imgur.com/m6f27vU.png)

After creating custom fields with the same ID as Pods, go to edit a post in the Project post type. If the custom fields look like what they were in Pods, everything is done.

![The created post type after all steps](https://i.imgur.com/JRBMlce.png)

