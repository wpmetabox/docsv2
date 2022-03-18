---
title: Integration
---

import FAQ from '@site/src/components/FAQ';

Meta Box and extensions can be used as standalone plugins or integrated with other themes or plugins.

:::caution Licensing

1. To integrate premium extensions into your products, you must purchase an [agency license](https://metabox.io/pricing/), which allows to use on unlimited sites.
2. You are **not allowed** to use premium extensions in your products and release them for free, like on WordPress.org.

:::

## Integrating Meta Box

It's recommended to use the [TGM Plugin Activation](https://tgmpluginactivation.com) to declare Meta Box as a dependency for your themes or plugins. To use the, follow these steps:

1. Download [TGM Plugin Activation](http://tgmpluginactivation.com/download/). For the option **I'm going to use TGMPA in a:**, select **Plugin**.
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

## Integrating extensions

There are two ways to integrate Meta Box extensions into your products:

### Bundling extensions

1. Copy the extension folder to your theme or plugin. You can put it in the theme root folder or a subfolder.
1. Include the extension's main file in the `functions.php` of your theme or your plugin's file:

```php
require get_template_directory() . '/mb-settings-page/mb-settings-page.php';
```

### Using Composer

To use Composer to install Meta Box extensions, add `repositories` rule to your `composer.json`:

```json
"repositories": [{
  "type": "composer",
  "url": "https://packages.metabox.io/YOUR_LICENSE_KEY"
}],
```

Then you can install Meta Box extensions with:

```bash
composer require meta-box/mb-settings-page:dev-master
composer require meta-box/meta-box-group:dev-master
```

Notes:

- The version of extensions specified in `composer.json` **must be `dev-master`**. We don't support version constraints for Meta Box extensions yet. You always use the latest version.
- Extensions are **not autoloaded** by default. You can manually load them or autoload by adding extensions' main files to the `autoload` array in `composer.json`.
- Extensions then will be installed in WordPress's `wp-content/plugins` folder thanks to [composer/installers](https://github.com/composer/installers). To move them to the traditional `vendor` folder, add `installer-paths` to your `composer.json` file as follows:

```json
{
  "repositories": [ {
    "type": "composer",
    "url": "https://packages.metabox.io/YOUR_LICENSE_KEY"
  }],
  "require": {
    "meta-box/meta-box-group": "dev-master",
    "meta-box/mb-settings-page": "dev-master",
  },
  // highlight-start
  "extra": {
    "installer-paths": {
      "vendor/meta-box/{$name}": ["vendor:meta-box"]
    },
  },
  // highlight-end
  "autoload": {
    "files": [
      "vendor/meta-box/mb-settings-page/mb-settings-page.php",
      "vendor/meta-box/meta-box-group/meta-box-group.php",
    ]
  }
}
```

To make the extensions work, simply load Composer's autoload file:

```php
require 'vendor/autoload.php';
```

Now Meta Box extensions are available in your plugin/theme and you can start using them!

:::tip Boilerplate

To make it easier for developers, I've created a composer.json file, which contains a full list of extensions, free and premium. You can [grab it here](https://github.com/wpmetabox/library/blob/master/composer/composer.json) and remove the extensions you don't want to use.

:::

## FAQ

<FAQ question="Why can't I update with Composer?">

Because we use `dev-master` version, Composer can't load versions to check when running `composer update`. To fix this, please run the following command:

```bash
rm -rf vendor && composer clear-cache && composer install
```

</FAQ>