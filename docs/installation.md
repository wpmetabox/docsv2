---
title: Installation
---

import FAQ from '@site/src/components/FAQ';

## Requirements

To run Meta Box, we recommend:
- PHP 7.4 or greater
- Latest version of WordPress

While Meta Box also works with PHP 7.0 and older versions of WordPress, these versions have reached the official End Of Life and as such may expose your site to security vulnerabilities.

## Installing Meta Box

Meta Box is [available on WordPress.org](https://wordpress.org/plugins/meta-box/). To install it, go to **Plugins &rarr; Add New** and search for **Meta Box**.

![install meta box](https://i.imgur.com/vhlYMjJ.png)

Then click the button **Install** to install it. After that, click the button **Activate** to activate the plugin.

## Installing extensions

Meta Box extensions are normal WordPress plugins, follow these steps to install them:

- Go to [My Account](https://metabox.io/my-account/) and download the extensions you want to use.
- Go to **Plugins**, click **Add new**, then click **Upload plugin**.
- Choose the `.zip` file you downloaded and click **Install now**
- After finishing the upload, click **Activate** to finish.

:::caution

Before installing extensions, make sure you installed and activated Meta Box, even if you use Meta Box AIO, MB Core, or solutions.

:::

## Next steps

Now you have everything ready!

As most WordPress websites require custom post types, let's [learn how to create them](/custom-post-types/).

## FAQ

<FAQ question="Why don't I see an admin menu after installing Meta Box?">

Meta Box (the **free version only**) is created as a library to help WordPress users work with custom post types and custom fields easier. As a library, it doesn't have admin pages for configuration or settings. Instead of that, it provides an API that you can use to speed up the process of creating meta boxes and custom fields. Developers need [use code](/creating-fields-with-code/) to create custom fields.

For normal users and beginners, we recommend using the [Online Generator](https://metabox.io/online-generator/) to build custom fields and generate the needed code to include into your themes or plugins.

**Important**: only the free version doesn't have UI, [premium users](https://metabox.io/pricing/) have powerful and friendly UI to create [custom post types](/custom-post-types/), [custom fields](/custom-fields/) and more.

See [our philosophy](/philosophy/) to understand more about Meta Box.
</FAQ>
