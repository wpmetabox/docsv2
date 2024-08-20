---
title: Rendering blocks with views in Meta Box
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

[MB Blocks](https://docs.metabox.io/extensions/mb-blocks/) is a powerful plugin for creating custom Gutenberg blocks. If using a separate template file to render the block is inconvenient, we have a more optimal way for you: **render blocks using views**.

We have this quote block with some simple content as an example. It is rendered and styled using a view provided by the **MB Views** extension from Meta Box.

![A simple custom block rendered and styled using a view](https://i.imgur.com/TGtzQmW.png)

## Video version

<LiteYouTubeEmbed id='8D04nVqXKQQ' />

## Why render with views?

If you use the MB Blocks from Meta Box to create custom blocks for a time, you have three options to render a block:

* **PHP callback function**: when the rendering code is in the same file with registering, styling, and other code.
* **Template file**: when you want to put the rendering code in a separate file in the theme folder.
* **Code**: allows you to add code directly on the block setting screen.

However, all of them may be difficult to manage the templates of all the blocks since each one is in a different place.

That’s why we highly recommend using views to render the block with the help of the [MB Views](https://docs.metabox.io/extensions/mb-views/) extension. These are some benefits of this method:

* MB Views can help to **get and display data** from custom fields in the block more **easil**y than ever.
* All the templates for rendering the blocks are in **one place for management**.
* You can **reuse** the view to have the same template for multiple blocks.

## Preparation

We should ensure have all of the following tools:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom blocks, and custom fields for the block if any. You can install it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/);
* [MB Blocks](https://metabox.io/plugins/mb-blocks/): to create custom Gutenberg blocks;
* [MB Views](https://metabox.io/plugins/mb-views/): to create the views for rendering the blocks;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have UI on the backend to register and configure the block visually.

Besides, you can install other extensions to have advanced features for your block and custom fields such as [Meta Box Group](https://metabox.io/plugins/meta-box-group/), [Meta Box Conditional Logic](https://metabox.io/plugins/meta-box-conditional-logic/), etc.

You can install them one by one individually or use **Meta Box AIO** to have them all.

After activating all the needed tools, let’s dive into how to render the blocks using views.

## 1. Registering a custom block

In Meta Box, a custom block also means a field group, even when you have no custom fields inside the block.

So, just go to **Meta Box** > **Custom Fields**, and create a new field group.

![Go to Meta Box > Custom Fields, and create a new field group](https://i.imgur.com/lExrgGP.png)

You can add custom fields to the block or not. You still can have the content for the block by adding it directly in the template or view where we use it to render the block. Then, the content will be [static](https://www.youtube.com/watch?v=SrCjDz_d9CI). Otherwise, add custom fields for [dynamic content](https://www.youtube.com/watch?v=v3ke1DBlWuk). Just choose the way that fits you. 

For demonstration purposes, I will create custom fields to save information about the quote, its author, and the image. The remaining content will be added directly when rendering.

![Add custom fields to have dynamic content or skip this step to have static one](https://i.imgur.com/Yz2Gimt.png)

In the **Settings** tab, remember to set the field group location as **Block** to register the block. This is a must-have setting.

![In the Settings tab, remember to set the field group location as Block to register the block](https://i.imgur.com/QDiVEzs.png)

Next, we’ll move to the main part of this tutorial: Render a custom block with a view.

## 2. Rendering block with view

We will have two ways to approach creating a view to render the block:

1. Go to the **Views** menu, create a new one as usual, and set its type as **Block**. Then, go back to the block settings and apply the view.
2. Add a new view in the settings of the block. It’s also where we’ve just registered the block in the previous step.

All roads lead to Rome. You’ll have a view to render the block where you can explore all the power that MB Views provides. As well as, the view can be managed on the page that lists the views, and you can modify it easily.

![Manage the view for the block in the list of Views menu](https://i.imgur.com/CNJysml.png)

### 2.1. Creating a view in the MB Views

Go to **Meta Box** > **Views**, and add a new view.

![Go to Meta Box > Views, and add a new view](https://i.imgur.com/zUm4MM0.png)

In the template tab, you can add any content to the template. It will be used as the content of the block later.

In the case that the block has some custom fields, you can use the **Insert Field** button and look for the field from the list on the right sidebar. Click on it to get the data from the field and add them to the template.

![Use the Insert Field button and look for the field to get data](https://i.imgur.com/Mab5FMv.gif)

Don't forget to add other content that you didn't input to the custom fields of the block.

![Add the content that you didn't input to the custom fields of the block to have static content](https://i.imgur.com/tkYPccH.png)

You also can add **`div`** tags, classes, as well as use **CSS**, and **JavaScript** tabs to add code to style the block.

![Add div tags and classes to the view for styling the block](https://i.imgur.com/wrCPldf.png)

![Use CSS, and JavaScript tabs to add code to style the block](https://i.imgur.com/uIK9cHP.png)

After that, move to the **Settings** section of the view, set the **Type** as **Block**.

![Move to the Settings section of the view, set the Type as Block](https://i.imgur.com/AXjoeN0.png)

Save the view, then go back to the block settings.

In the **Block Render Settings** section, open the **Render with** option, and choose the **View** option from the dropdown list.

![In the Block Render Settings section, open the Render with option, and choose the View option](https://i.imgur.com/Nox5J2Z.png)

Then, one more setting will display. Just select the view we’ve just created to apply it for the block.

![Select the view we’ve just created to apply it for the block.](https://i.imgur.com/YNXpdqa.png)

That’s done.

To check its work, go to a post/page and add the block.

![Go to a post/page and add the block](https://i.imgur.com/9o7HOHV.png)

![The block displayed with meta boxes to input data](https://i.imgur.com/Y2QX9OX.png)

The content that you add to the custom fields in the block will be displayed immediately in the preview. 

![The content that you add to the custom fields in the block will be displayed immediately in the preview](https://i.imgur.com/nCwsbwb.gif)

It means that the view works well to render the block content.

### 2.2. Creating a view in the block settings

Still in the **Block Render Settings** section when you register or configure the block, if you choose the option **Render with View**, there is a button to add a new view for the block. If you have no pre-made view for the block to choose from, you should use it.

![The Add View button allows you to create a new view for rendering the block](https://i.imgur.com/78NZaQE.png)

It will open a window which is the same with creating a view in the MB Views screen. The functionality of areas, tabs, and buttons is kept intact.

![A window is the same with creating a view in the MB Views screen opened](https://i.imgur.com/i2nAEN0.png)

Do the same to get data from fields, or add some other content, or even CSS and JavaScript to style the block.

![Get data from fields, and add some other content, or even CSS and Javascript to style the block.](https://i.imgur.com/plooucN.png)

After inserting all the content you want to render for the block, scroll down to the **Settings** section of the view. You can see that the type is set as **Block** by default.

![The type of the view is set as Block by default](https://i.imgur.com/HQIrzId.png)

The view is selected automatically in this setting as well. At the same time, there is also a button to edit the view.

![The view is selected automatically in this setting as well and a button to edit the view](https://i.imgur.com/q1h7Oux.png)

So that when you want to change the style or content of the block, you can go to this block setting and do it. No more going to the place where you save the template.

In the post/page editor, add the block and you will see everything also works well. And we have a block displayed on the frontend exactly.

![The block on the frontend](https://i.imgur.com/TGtzQmW.png)

Besides the render-block-with-view feature, you also can try [registering a block using block.json file](https://metabox.io/mb-blocks-register-block-using-json-file/). All of them follow a goal: Making MB Blocks become a comprehensive tool for having the desired block for you.
