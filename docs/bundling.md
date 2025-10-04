---
title: Bundling Meta Box
---

import FAQ from '@site/src/components/FAQ';

Meta Box and extensions can be used as standalone plugins or bundled within other themes or plugins.

:::caution Licensing

1. If you want to bundle Meta Box into other products or services (plugins, themes, solutions, hosting providers, SASS companies, site maintenance providers, etc.) that sell to other people, please [contact us](https://metabox.io/contact/) for a custom pricing plan.
2. You are **not allowed** to use premium extensions in your free products, like plugins and themes on WordPress.org.

:::

## Using TGM Plugin Activation

It's recommended to use the [TGM Plugin Activation](http://tgmpluginactivation.com) to declare Meta Box and free extensions as dependencies for your themes or plugins. This way, Meta Box and the extensions can be auto-updated to the latest version.

![Using Meta Box in eStar theme](https://imgur.elightup.com/dS3a6pe.png)

To use the, follow these steps:

1. Download [TGMPA Plugin Activation](http://tgmpluginactivation.com/download/). For **I'm going to use TGMPA in a:** select **Plugin**.
1. Extract the downloaded `.zip` file and copy the file `class-tgm-plugin-activation.php` and `example.php` to your theme/plugin folder.
1. Open the `example.php` file and add Meta Box to the required plugin list:

```php
require_once __DIR__ . '/class-tgm-plugin-activation.php';

add_action( 'tgmpa_register', 'prefix_register_required_plugins' );

function prefix_register_required_plugins() {
    $plugins = [
        // highlight-start
        [
            'name'     => 'Meta Box',
            'slug'     => 'meta-box',
            'required' => true,
        ],
        // highlight-end
    ];
    $config  = [
        'id' => 'your-id',
    ];
    tgmpa( $plugins, $config );
}
```

Then, include the `example.php` file in your theme's `functions.php` or your plugin's main file.

## Directly including extensions

:::danger Not recommended

This method disables the auto update mechanism and sometimes causes conflicts with the latest versions of WordPress, or with other plugins that use other versions of Meta Box and extensions. And you have to update extensions manually. You should consider using TGMPA Activation class as described above first, and only use this method if you don't have another choice.

:::

Bundling extensions is that you include extensions directly in your products and use them as a library.

1. Copy the extension folder to your theme or plugin. You can put it in the theme root folder or a subfolder.
1. Include the extension's main file in the `functions.php` of your theme or your plugin's file:

```php
require get_template_directory() . '/mb-settings-page/mb-settings-page.php';
```
