---
title: Updates
---

import FAQ from '@site/src/components/FAQ';

Meta Box and all extensions can be updated automatically or manually. The automatic update uses the WordPress update mechanism which checks for new versions twice a day. This is the recommended way to get new updates from our website.

## Automatic update

To enable automatic updates, you need to have a valid license key. Go to [My Account](https://metabox.io/my-account/) page to get it.

Then go to **Meta Box » License** and enter your license key and click **Save Changes** button.

![entering meta box license key](https://i.imgur.com/vybVU36.png)

From now on, when WordPress checks new versions for plugins, it will also check for new versions of Meta Box extensions. If there is any new update, you'll see this:

![New versions](https://i.imgur.com/Gul7JuL.png)

Then you can update the extensions the same way as for other plugins by clicking the **Update now** link.

## Manual update

You can also update the extensions manually by following these steps:

1. Go to [My Account](https://metabox.io/my-account/) page.
1. On your account page, you will see all downloads for your purchased extensions. Download the extension(s) to your computer, unzip the file and upload the extension folder to your website, overwriting the old files.

## FAQ

<FAQ question="Why is my license key invalid when I re-save it?">

Don't click the **Save Changes** button twice. The 2nd time you reload the page, the password is hidden and is replaced with **** (the actual asterisks). This prevents other people to see and steal your license key. So, when click **Save Changes** again, you actually save ****, not the actual license key.

</FAQ>

<FAQ question="Why can't I update even with a valid license key?">

We cache the requests to check updates in a WordPress transient, which has a one-day lifetime. To force WordPress to check for updates, you need to remove this transient. To do that, please install the [WP-Sweep](https://wordpress.org/plugins/wp-sweep/) plugin and clear all transients. Then go to **Dashboard » Updates** and click the **Check again** button.

</FAQ>

<FAQ question="Can I define the license key via a constant in wp-config.php?">

You can define the license key in a constant in the `wp-config.php` file instead of storing it in the database. It might be more secure since no one can see it from the WordPress dashboard or in the database. To do that, define it via the `META_BOX_KEY` constant:

```php
define( 'META_BOX_KEY', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456' ); // Your Meta Box license key.
```

</FAQ>
