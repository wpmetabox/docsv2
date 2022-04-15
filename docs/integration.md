---
title: Integration
---

import FAQ from '@site/src/components/FAQ';

Meta Box and extensions can be used as standalone plugins or integrated with other themes or plugins.

:::caution Licensing

1. To integrate premium extensions into your products, you must purchase an [agency license](https://metabox.io/pricing/), which allows you to use them on unlimited sites.
2. You are **not allowed** to use premium extensions in your free products, like on WordPress.org.

:::

## Integrating Meta Box

It's recommended to use the [TGM Plugin Activation](http://tgmpluginactivation.com) to declare Meta Box as a dependency for your themes or plugins. This way, Meta Box can be auto-updated to the latest version.

![using Meta Box in eStar theme](https://i.imgur.com/dS3a6pe.png)

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

## Integrating extensions

Free extensions can be registered as dependencies using TGM Plugin Activation as above. However, this method doesn't work for premium extensions as they're not available on WordPress.org. For that reason, we'd recommend using one of the following methods.

:::caution Updates

Integrating extensions into your products disables the Meta Box auto-update. Thus, you have to update extensions manually.

:::

### Bundling extensions

This way, you include extensions directly in your products and use them as a library.

1. Copy the extension folder to your theme or plugin. You can put it in the theme root folder or a subfolder.
1. Include the extension's main file in the `functions.php` of your theme or your plugin's file:

```php
require get_template_directory() . '/mb-settings-page/mb-settings-page.php';
```

### Using Composer

[Composer](https://getcomposer.org/) is the modern way to install PHP packages. If you use Composer in your projects, then you can register Meta Box and extensions as dependencies.

To use Composer to install Meta Box extensions, add `repositories` rule to your `composer.json`:

```json
"repositories":[
  {
    "type": "composer",
    "url": "https://wpackagist.org"
  },
  {
    "type": "composer",
    "url": "https://packages.metabox.io/YOUR_LICENSE_KEY"
  }
],
```

These lines tell Composer to find packages in 2 places:

- [WPackagist.org](https://wpackagist.org): a repository for all WordPress themes and plugins. You need it if you want to install free extensions.
- Meta Box repository: for premium extensions. Note that you need an active license key.

Then you can install Meta Box extensions with:

```bash
composer require wpackagist-plugin/mb-custom-post-type,
composer require meta-box/mb-settings-page:dev-master
composer require meta-box/meta-box-group:dev-master
```

Notes:

- The version of premium extensions specified in `composer.json` **must be `dev-master`**. We don't support version constraints for premium extensions yet. You always use the latest version.
- Free extensions can use whatever versions available on WordPress.org
- Extensions are **not autoloaded** by default. You can manually load them or autoload by adding extensions' main files to the `autoload` array in `composer.json`.
- Extensions then will be installed in WordPress's `wp-content/plugins` folder thanks to [composer/installers](https://github.com/composer/installers). To move them to the traditional `vendor` folder, add `installer-paths` to your `composer.json` file as follows:

```json
{
  "repositories": [ {
    "type": "composer",
    "url": "https://packages.metabox.io/YOUR_LICENSE_KEY"
  }],
  "require": {
    "wpackagist-plugin/mb-custom-post-type": "^2.3",
    "meta-box/meta-box-group": "dev-master",
    "meta-box/mb-settings-page": "dev-master",
  },
  // highlight-start
  "extra": {
    "installer-paths": {
      "vendor/meta-box/{$name}": ["vendor:wpackagist-plugin", "vendor:meta-box"]
    },
  },
  // highlight-end
  "autoload": {
    "files": [
      "vendor/meta-box/mb-custom-post-type/mb-custom-post-type.php",
      "vendor/meta-box/mb-settings-page/mb-settings-page.php",
      "vendor/meta-box/meta-box-group/meta-box-group.php",
    ]
  }
}
```

To make the extensions work, load Composer's autoload file:

```php
require 'vendor/autoload.php';
```

Now you can start using Meta Box extensions in your products!

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

<FAQ question="Can I install Meta Box with Composer?">

Yes, you can integrate Meta Box by bundling it or using Composer. However, we recommend using TGM Plugin Activation method because it allows you to auto update the plugin.

</FAQ>