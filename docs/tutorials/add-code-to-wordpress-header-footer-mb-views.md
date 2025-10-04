---
title: Adding code to header and footer in WordPress - Using MB Views
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In the header and footer of the WordPress website, you can add custom code such as tracking scripts, meta tags, or custom CSS to connect with external services. Today, let’s try a simple way to **add code to the WordPress header and footer** with the help of **MB Views** from Meta Box.

## Video version

<LiteYouTubeEmbed id='O2z0wpXNY2U' />

## Why MB Views?

To integrate your websites with external services like Google Analytics, Google Search Console, and Facebook Pixel, etc. You usually should add code to the header and footer of the website.

To do it, you can add code to the theme directly. But, it is not an optimal option. We recommend using plugins or third-party services that can help to do that indirectly. It brings two significant benefits:

* The code will be not affected when you change the theme;
* You can manage the code more easily.

**MB Views** is one of those plugins. It will come handy especially when you have Meta Box on your site.

For the header and footer, MB Views supports two actions: **`wp_head`** and **`wp_footer`**. So, your work is just inserting the code into the view, then using one of these actions. Then, everything will be done.

In this blog, I’m giving some examples of adding code to the header and footer, including adding or changing the content in the header or footer, and adding Google Analytics and Google Tag Manager scripts.

## Preparation

These are some tools we need in this tutorial:
* [Meta Box](https://wordpress.org/plugins/meta-box/): to have the framework for using MB Views. You can download it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/).
* [MB Views](https://metabox.io/plugins/mb-views/): to add code to the header and footer.

## 1. Adding or changing the content in the header

We will create a view as usual, then use the two actions I mentioned to define them in the header or footer.

Go to **Meta Box** > **Views** and create a new view.

![Go to Meta Box > Views to create a new view.](https://imgur.elightup.com/cCoXsG0.png)

Add any code you want to declare, get data, style, or anything else...in three tabs provided by MB Views.

![Add any code you want into the Template, CSS, JavaScript tabs](https://imgur.elightup.com/3oFDJq0.png)

For example, in the **Template** tab, I add some code:

```
<meta name="description" content="Meta Box plugin">
<link rel="stylesheet" href="styles.css">
```

![In the Template tab, add some code as an example](https://imgur.elightup.com/3uaTfru.png)

In there, `<meta name="description" content="Meta Box plugin">` is to add a description for the meta tag with the content as `“Meta Box plugin”`.

I also use CSS to style the menu in the header a little bit.

![Also use CSS tab to style](https://imgur.elightup.com/4N2flCf.png)

In the **Javascript** tab, I add a line to display a notification.

![In the Javascript tab, I add a line to display a notification](https://imgur.elightup.com/et05Zl7.png)

After adding the code as you want, scroll down to the **Settings** section.

To add all the above code to the header or footer, we should set the type for this view as **Action**. Then, enter the action in the **Action name** box.

![Set the type for this view as Action and enter the action in the Action name box](https://imgur.elightup.com/Qdyjc9e.png)

After publishing, on the frontend, you’ll see the alert which has content specified in the **JavaScript** tab before.

![There’s an alert displayed](https://imgur.elightup.com/93hEQTC.png)

The menu on the header also turns to red as styling.

![The menu on the header also turns to red as styling](https://imgur.elightup.com/8BoYrRh.png)

## 2. Adding or changing content in the footer

Do the same with the footer.

In another view, add code to the tabs.

![Add some code into three tabs](https://imgur.elightup.com/S70saNZ.gif)

Then, instead of using the action for the header, just use the `wp_footer` action to apply the code to the footer of the website.

![Use the wp_footer action to apply the code to the footer of the website](https://imgur.elightup.com/l8io2DF.png)

Go to the page on frontend. There is a notification since I also added it in the **JavaScript** tab.

![There is a notification on the frontend](https://imgur.elightup.com/CE2PX9M.png)

Also, the footer has a text section in black.

![The footer has a text section in black](https://imgur.elightup.com/9Y8lx10.png)

## 3. Adding code to connect with external services

For a clearer look, let's add the code to connect the website with external services.

Not only changing the content and styling something on your pages, you can also use the MB Views to add scripts from third parties such as Google, Facebook, Hotjar, etc. I’ll link the header with Google Analytics and Google Tag Manager as examples.

### 3.1. Adding Google Analytics code snippet

For Google Analytics, after getting the code snippet from your Google account, go back to your site, and create a new view as well.


![Create a new view to add Google Analytics code snippet](https://imgur.elightup.com/ISeTYKG.png)

Paste the script to the **JavaScript** tab.

![Paste the script to the JavaScript tab](https://imgur.elightup.com/3nlpOO2.png)

Then set the **Type** as **Action**, and name the action as `wp_head` to add the script to the header of the page.


![Set the Type as Action, and name the action as wp_head to add the script to the header of the page](https://imgur.elightup.com/TSoikSh.png)

That’s done.

### 3.2. Adding Google Tag Manager code snippet

Do likewise with the Google Tag Manager code snippet. Get it from your Google account.

Then, add the script to the **JavaScript** tab in a view.


![Add the script of Google Tag Manager to the JavaScript tab](https://imgur.elightup.com/OV7I0rh.png)

And, set the type of the view as action as well. We also should use the `wp_head` action in this case.


![Set the type of the view using the wp_head action](https://imgur.elightup.com/Bcrk9RU.png)

That’s so simple.
