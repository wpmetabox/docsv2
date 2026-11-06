---
title: Bundling Meta Box
---

You can use Meta Box and its extensions as standalone plugins. You can also bundle them in your themes or plugins.

## Licensing

The rules are different for free and premium extensions. Free extensions are Meta Box, Meta Box Lite, and the free extensions on [WordPress.org](https://wordpress.org/plugins/meta-box/). Premium extensions are the extensions that you buy on [metabox.io](https://metabox.io/pricing/).

| Where you bundle | Free extensions | Premium extensions |
|---|---|---|
| Websites for you or your clients | Allowed | Allowed with your license |
| Free products, such as plugins and themes on WordPress.org | Allowed | Not allowed |
| Products and services that you sell to other people, such as premium plugins, themes, SaaS, hosting, and site maintenance | Allowed | [Contact us](https://metabox.io/contact/) for a custom pricing plan |

## Using TGM Plugin Activation

Use this method for Meta Box and free extensions. Your theme or plugin declares them as dependencies. WordPress then installs them as normal plugins and updates them automatically.

![Using Meta Box in eStar theme](https://imgur.elightup.com/dS3a6pe.png)

1. Download [TGM Plugin Activation](http://tgmpluginactivation.com/download/). For **I'm going to use TGMPA in a:**, select **Plugin**.
1. Extract the `.zip` file.
1. Copy the files `class-tgm-plugin-activation.php` and `example.php` to your theme or plugin folder.
1. Open the `example.php` file and add Meta Box to the list of required plugins:

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

5. Include the `example.php` file in the `functions.php` file of your theme or in the main file of your plugin.

## Using Composer

Use this method to put Meta Box and extensions in the `vendor` folder of your theme or plugin. This example bundles Meta Box in a plugin.

1. In your plugin folder, create a `composer.json` file with this content:

```json
{
    "require": {
        "wpmetabox/meta-box": "^5"
    },
    "autoload": {
        "files": [
            "vendor/wpmetabox/meta-box/meta-box.php"
        ]
    }
}
```

2. In your plugin folder, run `composer install`.
3. Add this line to the main file of your plugin:

```php
require 'vendor/autoload.php';
```

For more extensions, add them to the `require` and `autoload` lists. To install premium extensions, you must use your license key. Read the [Composer](/composer/) documentation for the full steps.

## Directly including extensions

:::danger Not recommended

With this method, extensions do not update automatically. You must update them manually. Old versions can cause conflicts with new versions of WordPress, or with other plugins that use a different version of Meta Box. Use this method only if you cannot use the methods above.

:::

1. Copy the extension folder to your theme or plugin. You can put it in the root folder or in a subfolder.
1. Include the main file of the extension in the `functions.php` file of your theme or in the main file of your plugin:

```php
require get_template_directory() . '/mb-settings-page/mb-settings-page.php';
```
