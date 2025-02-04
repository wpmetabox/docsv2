---
title: MB Tabs
---

MB Tabs helps you to put custom fields into tabs for a better view. Tabs can have icons and can be put on the left side of the meta box.

![tab styles](https://i.imgur.com/7Oi5dx1.jpg)

:::info Tabs in settings pages

Tabs in the settings pages are created separately with different settings by the [MB Settings Page](/extensions/mb-settings-page) extension. This extension is for grouping fields inside a field group only.

:::

## Creating tabs

First, you need to create custom fields as usual. Go to **Meta Box » Custom Fields** and [create a field group](/custom-fields/#how-to-create-custom-fields) with the custom fields you need.

![Creating a field group with some custom fields](https://i.imgur.com/YK5nBYz.png)

Then adding tabs to the field group. **Tab is a special field type** and is available in the field list.

:::info Not a premium user?

This instruction uses **MB Builder** extension, which is a premium extension and is already bundled in Meta Box AIO and MB Core. If you're not a premium user, please [purchase a license](https://metabox.io/pricing/) to use it. However, you can do this with code. See below for more information.

:::

To add a tab, click the **+ Add Field** button and search for **Tab**:

![Adding a tab field](https://i.imgur.com/GzGX7xE.png)

After adding tabs, you need to **reorder** tabs among the fields. **The fields that follow a tab will belong to this tab**.

![Reorder tabs](https://i.imgur.com/Tb0mxsJ.png)

## Tab settings

Each tab has its own settings like label or icon. To see and change the tab settings, click the tab title bar:

![View tab settings](https://i.imgur.com/Pa8zlAD.png)

Below is the meaning of each setting:

Name|Description
---|---
Label|The tab label
ID|The tab ID, which is used internally by the plugin
Type|The field type, must be "Tab"
Icon type|The icon type, you can choose between Dashicons (default), Font Awesome, or custom URL. Optional.

If you choose the tab icon type Dashicons, you'll see a list of icons to pick from (as in the screenshot above).

If you want to use a FontAwesome icon for the tab, then select Icon type "Font Awesome" and enter the [icon CSS class](https://fontawesome.com/icons?d=gallery&m=free) in the next input.

If you have a custom image for the tab icon, then select Icon type "Custom URL" and enter the icon URL in the next input.

## Tab style

The plugin provides 3 styles for tabs: "default", "box", and "left" as you can see below:

![Tab style](https://i.imgur.com/7Oi5dx1.jpg)

To change a tab style, go to the **Settings** tab and choose one style in the **Tab style** dropdown:

![Select a tab style](https://i.imgur.com/lYqoEWF.png)

You can also set the default active tab here by entering the tab ID in the **Default active tab ID**.

Now you have your tabs ready. Please edit a post to see them in action!

## Using code

If you're a developer and prefer using code to create tabs, this is a sample code to create simple tabs:

```php
add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
	$meta_boxes[] = [
		'title'     => 'MB Tabs Demo',

        // highlight-start
        'tabs'      => [
			'contact' => 'Contact',
			'social'  => 'Social Media',
		],
        // highlight-end
		'fields'    => [
			[
				'name' => 'Name',
                // highlight-next-line
				'tab'  => 'contact',
			],
			[
				'name' => 'Email',
                // highlight-next-line
				'tab'  => 'contact',
			],
			[
				'name' => 'Facebook',
                // highlight-next-line
				'tab'  => 'social',
			],
			[
				'name' => 'Twitter',
                // highlight-next-line
				'tab'  => 'social',
			],
		],
	];

	return $meta_boxes;
} );
```

To create tabs for your meta box, you need to add these parameters to your meta box settings:

Parameter|Description
---|---
`tabs`|Array of tabs. See below for details.
`tab_style`|The tab style: `default` (like tabs for Categories), `box` (like tabs for Visual and Text modes of the main editor) or `left` (like tabs in the Help screen)
`tab_default_active`|Default active tab ID.
`tab_remember`|Remember the last active tab when saving the post. Boolean. Default is `false`.

The list of tabs is defined in the `tabs` parameter. A tab can have or doesn't have an icon and can be set like this:

```php
'tabs'      => [
    'contact' => 'Contact',       // No icon
    'social'  => [                // With icon
        'label' => 'Social Media',
        'icon'  => 'dashicons-share',
    ]
],
```

The plugin supports the following icon type for tabs:

- [Dashicons](https://developer.wordpress.org/resource/dashicons/): set `icon` to the class name of Dashicons, e.g. `dashicons-email`.
- Icon font: set `icon` to the icon class name. For example, if you want to use Font Awesome, set `'icon' => 'fa fa-home'`. Note that you have to enqueue the CSS for your custom font icon yourself. The plugin only supports Dashicons by default.
- Custom URL: set `icon` to the URL of the image

Then for each field in the meta box, you need to **specify which tab it belongs to** by adding a parameter `'tab' => 'tab-id'` where `tab-id` is one of the tab IDs you have registered above.
