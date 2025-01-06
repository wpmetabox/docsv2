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

Meta Box offers [three different versions](https://docs.metabox.io/introduction/#meta-box-overview), each with slightly different installation steps. Among them, **Meta Box Lite** stands out as the best starting point, offering a free version with essential features and a user-friendly interface.

Here's how to install it:

1. Go to our website, just fill in your email, and download it.
2. Go to **Plugins** > **Add New Plugin** > **Upload Plugin**.
3. Upload the downloaded file and click **Install Now**.

![Install Meta Box Lite](https://i.imgur.com/oXYJZtV.png)

Then, click **Activate** to start using Meta Box Lite. Now, you can see it in the admin dashboard.

![Meta Box Lite in the admin dashboard](https://i.imgur.com/epQY3XW.png)

::: For advanced features, get the [Meta Box AIO](https://metabox.io/pricing/) package with all extensions (both free and paid), or install individual extensions as needed from [our website](https://metabox.io/plugins/).
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
