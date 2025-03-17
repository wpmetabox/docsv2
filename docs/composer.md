---
title: Composer
---

import FAQ from '@site/src/components/FAQ';

This docs shows you how to use [Composer](https://getcomposer.org/) to install and update Meta Box and its extensions.

:::caution Licensing

1. If you want to bundle **premium extensions** into other products or services (plugins, themes, solutions, hosting providers, SASS companies, site maintenance providers, etc.) that sell to other people, please [contact us](https://metabox.io/contact/) for a custom pricing plan.
2. You are **not allowed** to use **premium extensions** in your free products, like plugins and themes on WordPress.org.

:::

## Meta Box and free extensions

Meta Box and all free extensions are [available on Packagist](https://packagist.org/packages/wpmetabox/).

To use them in your project, simply run:

```bash
composer require wpmetabox/meta-box // For Meta Box
composer require wpmetabox/mb-rest-api // For MB Rest API

composer require wpmetabox/meta-box-lite // Or use Meta Box Lite, which includes Meta Box and all free extensions
```

## Premium extensions

To use Composer to install paid extensions, add `repositories` rule to your `composer.json`:

```json
"repositories":[
	{
		"type": "composer",
		"url": "https://packages.metabox.io/YOUR_LICENSE_KEY"
	}
],
```

Then you can install paid extensions with:

```bash
composer require meta-box/mb-settings-page:dev-master
composer require meta-box/meta-box-group:dev-master
```

Notes:

- The version of premium extensions specified in `composer.json` **must be `dev-master`**. We don't support version constraints for premium extensions yet. You always use the latest version.
- Extensions are **not autoloaded** by default. You can manually load them or autoload by adding extensions' main files to the `autoload` array in `composer.json`.
- Extensions then will be installed in WordPress's `wp-content/plugins` folder thanks to [composer/installers](https://github.com/composer/installers). To move them to the traditional `vendor` folder, add `installer-paths` to your `composer.json` file as follows:

```json
{
	"repositories": [
		{
			"type": "composer",
			"url": "https://packages.metabox.io/YOUR_LICENSE_KEY"
		}
	],
	"require": {
		"wpmetabox/mb-custom-post-type": "^2.3",
		"meta-box/meta-box-group": "dev-master",
		"meta-box/mb-settings-page": "dev-master"
	},
	// highlight-start
	"extra": {
		"installer-paths": {
			"vendor/meta-box/{$name}": [
				"vendor:wpmetabox",
				"vendor:meta-box"
			]
		},
	},
	// highlight-end
	"autoload": {
		"files": [
			"vendor/wpmetabox/mb-custom-post-type/mb-custom-post-type.php",
			"vendor/meta-box/mb-settings-page/mb-settings-page.php",
			"vendor/meta-box/meta-box-group/meta-box-group.php"
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

:::caution Can't update with Composer


Because we use `dev-master` version, Composer can't load versions to check when running `composer update`. To fix this, please run the following command:

```bash
rm -rf vendor && composer clear-cache && composer install
```

:::
