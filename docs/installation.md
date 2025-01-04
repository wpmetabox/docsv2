---
title: Installation
---

import FAQ from '@site/src/components/FAQ';

## Requirements

To run Meta Box, we recommend:
- PHP 7.4 or greater
- Latest version of WordPress

While Meta Box also works with PHP 7.0 and older versions of WordPress, these versions have reached the official End Of Life and as such may expose your site to security vulnerabilities.

## Meta Box installation guide

Depending on [three Meta Box versions](https://docs.metabox.io/introduction/#meta-box-overview), the installation steps will differ a little bit. Follow the instructions below for your selected version:

### Ver 1: Meta Box plugin + individual extensions

#### Meta Box plugin

Meta Box is available on [WordPress.org](https://wordpress.org/plugins/meta-box/). To install it, go to **Plugins** > **Add New Plugin** and search for **Meta Box**. Then, click the **Install Now** button.

![Install meta box](https://i.imgur.com/ZwnLkg3.png)

After that, click the **Activate** button to activate the plugin. So, you’ll see it in the dashboard like this:

![The Meta Box in the admin dashboard](https://i.imgur.com/Bx4xst7.png)

#### Individual extensions

Meta Box extensions are also kinds of WordPress plugins. For all the extensions, you can view them one by one [here](https://metabox.io/plugins/). Once you've selected the extensions you want, you can download or purchase them, then install them by following these steps:

* Download free extensions directly from [our website](https://metabox.io/plugins/) or log in to [My Account](https://metabox.io/my-account/) to access the premium extensions you’ve purchased.

![Log in to My Account to access the premium extensions](https://i.imgur.com/PYBGYMy.png)

* Go to **Plugins** > **Add New Plugin** > **Upload Plugin**, then upload the file and install it.

![Upload the file and install](https://i.imgur.com/jxjYWsU.png)

Once activated, you also see it in the dashboard.

![Plugin in admin dashboard](https://i.imgur.com/HdvMXUi.png)

### Ver 2: Meta Box Lite

**Meta Box Lite** bundles up the **Meta Box** plugin and **all free extensions** into one package. The installation process is similar to installing any plugin.

1. Download Meta Box Lite on our website.
2. Go to **Plugins** > **Add New Plugin** > **Upload Plugin**.
3. Upload the downloaded file and click **Install Now**.

Then, click **Activate** to start using Meta Box Lite. And you can see it in the dashboard as well.

### Ver 3: Meta Box AIO

**Meta Box AIO** includes the **Meta Box** plugin and **all extensions (both free and paid)** in one package. The installation process is quite the same with installing a paid extension:

1. Log in to [My Account](https://metabox.io/my-account/) and download the Meta Box AIO package.
2. Go to **Plugins** > **Add New Plugin** > **Upload Plugin**.
3. Upload the downloaded file and click **Install Now**.

After the upload finishes, click **Activate** to complete the installation.

We have the **Meta Box AIO** package in the dashboard, and we have all extensions (both free and paid) in one place like this:

![Meta Box AIO in admin dashboard](https://i.imgur.com/WRq4XB3.png)

![all extensions both free and paid in one place](https://i.imgur.com/q3X7nOE.png)

You can enable the desired extensions from the list.

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
