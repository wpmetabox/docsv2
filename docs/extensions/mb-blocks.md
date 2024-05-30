---
title: MB Blocks
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

With the help of MB Blocks, WordPress developers are now able to create Gutenberg blocks using PHP only. There is no JavaScript configuration and build process. The plugin is also compatible with Full-Site Editing, so your blocks can be used to create templates in the FSE.

Here is a screenshot of a custom Gutenberg block (hero area) that's created using MB Blocks:

![custom Gutenberg block](https://i.imgur.com/fVTmMWi.png)

The preview of the block is displayed in the main content area while the block configuration is displayed on the right. This allows you to edit the block content and live-preview the block in real time. Later, you can also change where the block settings are displayed (on the sidebar or right in the main content area).

## Block registration with Meta Box Builder

The easiest way to create a block is using [Meta Box Builder](/extensions/meta-box-builder/). The plugin provides you with the UI to create blocks easily. This is the video on doing that:

<LiteYouTubeEmbed id='v3ke1DBlWuk' />

## Block registration with block.json

WordPress recommends using `block.json` for block registration because of [these benefits](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#benefits-of-using-the-metadata-file).

MB Blocks supports registering blocks using a `block.json` file. It respects WordPress standards so the registration steps are the same as native WordPress block registration.

### Creating the block.json file

Assuming we're creating a hero content block, which has 3 fields: title, image, and content, create a `block.json` file with the following content. It's recommended to put it in a folder `blocks/block-name` (in this example, it's `blocks/hero-content`) within your theme, but you can put it anywhere. We'll use the path for registering the block later.

```json
{
    "$schema": "https://schemas.wp.org/trunk/block.json",
    "apiVersion": 3,
    "name": "meta-box/hero-content",
    "title": "Hero Content",
    "description": "A custom hero content block that uses MB fields.",
    "style": [
        "file:./hero-content.css"
    ],
    "category": "formatting",
    "icon": "format-quote",
    "keywords": [
        "hero-content",
        "quote"
    ],
    "supports": {
        "anchor": true
    },
    "attributes": {
        "image": {
            "type": "object",
            "default": {
                "full_url": "https://example.com/photo.png"
            }
        },
        "title": {
            "type": "string",
            "default": "Hello, World!"
        },
        "content": {
            "type": "string",
            "default": "This is a hero content block."
        }
    },
    "render": "file:./hero-content.php"
}
```

You can see the syntax is the same as WordPress's JSON specification for the [block metadata](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/). The differences are:

- The block name must start with `meta-box/` to make it work with Meta Box.
- The `attributes` must be an array of fields, where the field IDs are the properties and the field types and default values are the properties values. These fields must match the Meta Box fields that we will register below.

:::success

To create a `block.json` file, you can use our [Block Generator](https://metabox.io/block-generator/), which provides a friendly user interface to enter block data.

:::

### Registering the block

After creating the `block.json` file, you must register it with WordPress. Put the following snippet in your theme or plugin.

```php
function your_prefix_register_blocks() {
	// Specify the path to the block.json's folder.
	register_block_type( get_template_directory() . '/blocks/hero-content' );
}

add_action( 'init', 'your_prefix_register_blocks' );
```

### Registering block fields

Now you need to register block fields with Meta Box. The block fields must match the fields defined in the `block.json`'s `attributes` property above.

Registering block fields is similar to [registering a field group](http://localhost:3000/creating-fields-with-code/) in Meta Box. The only difference is that you must set `type` to `block`:

```php
add_filter( 'rwmb_meta_boxes', function( $meta_boxes ) {
    $meta_boxes[] = [
        'title'       => 'Hero Content',
        'id'          => 'hero-content',
        'description' => 'A custom hero content block',

		// highlight-next-line
        'type'        => 'block',

        // Block fields, must match block.json's attributes.
        'fields'      => [
            [
                'type' => 'single_image',
                'id'   => 'image',
                'name' => 'Image',
            ],
            [
                'id'   => 'title',
                'name' => 'Title',
            ],
            [
                'type' => 'textarea',
                'id'   => 'content',
                'name' => 'Content',
            ],
        ],
    ];
    return $meta_boxes;
} );
```

After that, you can go to edit a post and insert your block into the post content!

### Rendering the block

In the `block.json` file, you can specify the PHP template to render the block via the `render` parameter.

```json
{
	"render": "file:./hero-content.php"
}
```

(this means render the block with the PHP file `hero-content.php` in the same folder as the `block.json` file)

By following WordPress standards, these parameters are available in the block template file:

- `$attributes`: the block attributes, which have all the block settings and fields' data. Attributes are automatically [prepared for you](#automatically-prepare-attributes) so you can access them directly.
- `$content`: the block's inner content.
- `$block`: the block object, an instance of `WP_Block` class.

```php
<div <?= get_block_wrapper_attributes(); ?>>
    <?= esc_html( $attributes['title'] ); ?>

	<img src="<?= $attributes['image']['full_url'] ?>">

	<p><?= $attributes['content'] ?></p>
</div>
```

#### Using MB Views

You can also use MB Views to render the block. This is useful when you want to create views with twig, manage JS, CSS from within the Dashboard.

To do so, first, make sure you have the [MB Views](/extensions/mb-views/) plugin installed and activated. Then, instead of using `file:` prefix, use `view:` prefix.

```json
{
    "render": "view:testimonial"
}
```

Now create a view by going to Meta Box > Views and create a new view with the name `testimonial`. In the view, you can use twig syntax to render the block. For example:

```php
<div {{ mb.get_block_wrapper_attributes() }}>
	<img class="testimonial__image" src="{{ attributes['image']['full_url'] }}">
	<div class="testimonial__body">
		<div class="testimonial__content" style="min-height: 50px;">
		    <InnerBlocks />
		</div>
		<div class="testimonial__author">{{ attributes['name'] }}</div>
	</div>
</div>
```

:::tip

You can access `{{ block }}`, `{{ attributes }}`, `{{ content }}` in the view like the above example.

You can also use CSS and JS tabs in the view to add styles and scripts for the block.

PHP functions need to be prefixed with `mb.` to be used in the view.

:::


Set the view's type to `Block` and name to `testimonial`. Then save the view.

![Settings](https://i.imgur.com/UzauX1A.png)

### Block styles and scripts

The `block.json` allows you to add styles and scripts for blocks as follows. In the value, it’s possible to pass a script handle registered with the `wp_register_script` or `wp_register_style` functions, a path to a JavaScript/CSS file relative to the `block.json` file, or a list with a mix of both.

```json
{
	// Editor script: will only be enqueued in the editor.
	"editorScript": "file:./index.js",
	// Script: will be enqueued both in the editor and on the frontend.
	"script": "file:./script.js",
	// View script: will be enqueued only on the frontend.
	"viewScript": [ "file:./view.js", "example-shared-view-script" ],
	// View script module: will be enqueued only on the frontend.
	"viewScriptModule": [ "file:./view.js", "example-shared-script-module-id" ],

	// Editor style: will only be enqueued in the editor.
	"editorStyle": "file:./index.css",
	// Style: will be enqueued both in the editor and on the frontend.
	"style": [ "file:./style.css", "example-shared-style" ],
	// View style: will be enqueued only on the frontend.
	"viewStyle": [ "file:./view.css", "example-view-style" ],
}
```

## Block registration without block.json

If you don't want to use `block.json` to register blocks, you can do that with pure PHP. The process is similar to [registering a field group](http://localhost:3000/creating-fields-with-code/) in Meta Box. The only difference is that you need to add some settings for the block.

Assuming we're creating a hero content block with 3 fields: title, image, and content. Open your theme's `functions.php` file (or your plugin's PHP file) and add the following code:

```php
add_filter( 'rwmb_meta_boxes', function( $meta_boxes ) {
	$meta_boxes[] = [
		'title'           => 'Hero Content',
		'id'              => 'hero-content',
		'description'     => 'A custom hero content block',

		// highlight-start
		// Block settings.
		'type'            => 'block',
		'icon'            => 'awards',
		'category'        => 'layout',
		'context'         => 'side',
		'render_template' => get_template_directory() . '/blocks/hero/template.php',
		'enqueue_style'   => get_template_directory_uri() . '/blocks/hero/style.css',
		'supports' => [
			'align' => ['wide', 'full'],
		],
		// highlight-end

		// Block fields.
		'fields'          => [
			[
				'type' => 'single_image',
				'id'   => 'image',
				'name' => 'Image',
			],
			[
				'id'   => 'title',
				'name' => 'Title',
			],
			[
				'type' => 'textarea',
				'id'   => 'content',
				'name' => 'Content',
			],
		],
	];
	return $meta_boxes;
} );
```

The block settings are inherited from the Block *JavaScript* API with a few differences. See the [block registration](https://developer.wordpress.org/block-editor/developers/block-api/block-registration/) page on the Gutenberg Handbook if you need more details.

### Block settings

#### `title`

The block title. It's used to display the block when you click the Block Inserter in Gutenberg.

#### `id`

The block ID. Must be unique.

:::caution No underscores

A block ID can only contain lowercase alphanumeric characters and dashes and must begin with a letter. It doesn't accept underscores, i.e. `my_block` won't work, but `my-block` will work.

:::

#### `version`

The block version. This version number is also used to enqueue CSS and JavaScript files to avoid browser caching.

#### `icon`

The block icon. Can be any of [WordPress' Dashicons](https://developer.wordpress.org/resource/dashicons/) (without the prefix `dashicons-`), or a custom `svg` element (string) or [FontAwesome 5 free icons](https://fontawesome.com/).

Example:

```php
// Specifying a dashicon for the block
'icon' => 'book-alt',

// FontAwesome 5 icon
'icon' => 'fas fa-user',

// Specifying a custom svg for the block
'icon' => '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M19 13H5v-2h14v2z" /></svg>',
```

If you need an advanced configuration for the icon, you can set `icon` as an array that can contain background and foreground colors, these colors will appear with the icon when they are applicable e.g.: in the inserter.

```php
'icon' => [
    // Specifying a background color to appear with the icon e.g.: in the inserter.
    'background' => '#7e70af',
    // Specifying a color for the icon (optional: if not set, a readable color will be automatically defined)
    'foreground' => '#fff',
    // Specifying a dashicon for the block
    'src' => 'book-alt',
],
```

#### `description`

The block description. Optional.

#### `type`

Tells Meta Box to register this as a Gutenberg block (not as a normal meta box). This must be set to `block`.

#### `category`

Specify the block category, which is used to help users browse and discover them. Available values: `text`, `media`, `design` (default), `widgets`, `theme`, `embed`. If a theme or a plugin registers a custom category, you can use it, too.

#### `keywords`

List of keywords that users can use to search the block from the block inserter.

```php
// Make it easier to discover a block with keyword aliases.
'keywords' => ['image', 'photo', 'pics'],
```

#### `context`

Where to show the block settings. If set to `side` (default), the block settings are displayed on the right sidebar when you select the block. If set to `normal`, the block settings are displayed when you click the Edit icon in the block toolbar.

See the short video below to understand.

<LiteYouTubeEmbed id='FOw0bPG_jjw' />

#### `supports`

Custom supports for the block. This parameter accepts an array like this:

```php
'supports' => [
	'align'           => ['wide', 'full'],
	'customClassName' => true,
	'multiple'        => true,
	'reusable'        => true,
	'lock'            => false,
],
```

The following parameters are available for `supports`:

`align`

Add supports for the block alignment. Note that your theme must add styling for the Gutenberg alignment.

```php
// Add the support for the block alignment (left, center, right, wide, full).
'align' => true,
// Pick which alignment options to display.
'align' => [ 'left', 'right', 'full' ],
```

`customClassName`

This property adds a field to define a custom CSS class name for the block's wrapper. It's useful when you want to add custom styling for a specific instance of the block.

`multiple`

If you want to have a block that can be inserted into each post one time only (like a hero area block), then set this parameter to `false`. A non-multiple block's icon is automatically dimmed (unclickable) to prevent multiple instances.

`reusable`

A block may want to disable the ability to be converted into a reusable block. By default, all blocks can be converted to reusable blocks. If supports reusable is set to `false`, the option to convert the block into a reusable block will not appear.

`lock`

If you want to remove the support for locking UI, set this parameter to `false`.

#### `mode`

The default mode of the block: `edit` to make it show the edit fields when loaded, `preview` (default) to show the rendered HTML when loaded.

```php
'mode' => 'edit',
```

#### `render_callback`

A custom PHP callback or MB Views to display the block content, it accepts the following parameters:

- `$attributes`: the block attributes, which have all the block settings and fields' data. Attributes are automatically [prepared for you](#automatically-prepare-attributes) so you can access them directly.
- `$content`: the block's inner content.
- `$block`: the block object, an instance of `WP_Block` class.
- `$is_preview`: whether previewing the block in the admin. Deprecated.
- `$post_id`: the current post ID. Deprecated. You can get the post ID with `get_the_ID()`.

Please note that you can use all of these parameters **regardless of the number of parameters and order**.

For example: `( $attributes, $block )`, `( $block, $attributes )`, `( $attributes, $content )`... are valid function signatures.

```php
// Specify a custom PHP callback to display the block.
'render_callback' => 'my_hero_callback',

// You can also use MB Views to render the block by prefixing the view name with `view:`.
'render_callback' => 'view:hero-view',

// Or using $this class method.
'render_callback' => [ $this, 'my_hero_callback' ],

// Or using static method.
'render_callback' => [ 'MyClass', 'my_hero_callback' ],
```

```php
<?php
function my_hero_callback( $attributes ) {
	// Fields's data.
	if ( empty( $attributes['data'] ) ) {
		return;
	}

	// Custom CSS class name.
	$class = 'hero ' . ( $attributes['className'] ?? '' );
	if ( ! empty( $attributes['align'] ) ) {
		$class .= " align{$attributes['align']}";
	}
	?>
	<div class="<?= $class ?>" style="background-color: <?= $attributes['background_color'] ?>">
		<img class="hero__image" src="<?= $attributes['image']['full_url'] ?>">

		<div class="hero__body">
			<h2><?= $attributes[ 'title' ] ?></h2>
			<div class="hero__content"><?= $attributes[ 'content' ] ?></div>
		</div>
	</div>
	<?php
}
```

#### `render_template`

Sometimes you might want to separate the code that outputs a custom Gutenberg block into a template part, then you can use `render_template` parameter to specify the full path to that template part.

```php
'render_template' => get_template_directory() . '/blocks/hero/template.php',
```

Inside the template file, you have full access to these parameters, just like `render_callback`:

- `$attributes`: the block attributes, which have all the block settings and fields' data. Attributes are automatically [prepared for you](#automatically-prepare-attributes) so you can access them directly.
- `$content`: the block's inner content.
- `$block`: the block object, an instance of `WP_Block` class.
- `$is_preview`: whether previewing the block in the admin. Deprecated.
- `$post_id`: the current post ID. Deprecated. You can get the post ID with `get_the_ID()`.

So, inside the `blocks/hero/template.php`, you can write:

```php
<?php
// Fields' data.
if ( empty( $attributes['data'] ) ) {
	return;
}

// Custom CSS class name.
$class = 'hero ' . ( $attributes['className'] ?? '' );
if ( ! empty( $attributes['align'] ) ) {
	$class .= " align{$attributes['align']}";
}
?>
<div class="<?= $class ?>" style="background-color: <?= $attributes[ 'background_color' ] ?>">
	<img class="hero__image" src="<?= $attributes['image']['full_url'] ?>">

	<div class="hero__body">
		<h2><?= $attributes[ 'title' ] ?></h2>
		<div class="hero__content"><?= $attributes[ 'content' ] ?></div>
	</div>
</div>
```

#### `enqueue_style`

If you want to specify a custom styling for this specific block, then set this parameter to the URL of the custom CSS file that will be used to style the block.

```php
'enqueue_style'   => get_template_directory_uri() . '/blocks/hero/style.css',
```

If you have multiple blocks, then using multiple CSS files might hurt the performance of your website since you have many CSS files enqueued. In that case, please put the styles in your theme, and use the functions [enqueue_block_assets()](https://developer.wordpress.org/reference/hooks/enqueue_block_assets/) and [enqueue_block_editor_assets()](https://developer.wordpress.org/reference/hooks/enqueue_block_editor_assets/) to enqueue your styles.

#### `enqueue_script`

If your block requires custom JavaScript actions, then set this parameter to the URL of the custom JavaScript file that will be used to do JavaScript tasks for the block (like initializing a slider).

```php
'enqueue_script'   => get_template_directory_uri() . '/blocks/hero/script.js',
```

Please note that this script should be run in 2 cases:

- When the block is done loading on the front end
- When the block preview is done loading in the block editor on the back end

On the back end, every time you modify the block settings, the block preview is re-rendered. The whole HTML of the block preview will be replaced by the new HTML.

So, to trigger a custom code when the block preview is loaded, you need to add an event listener to the event `mb_blocks_preview/{$block_id}` and run your code there:

```js
// Run when a block preview is done loading.
$( document ).on( 'mb_blocks_preview/hero-area', function( e ) {
	console.log( e.target ); // e.target is the wrapper div of the block.
	// Do something.
} );
```

To make it work for both the front end and back end, you can write your JavaScript like this:

```js
( function( $ ) {
    function init() {
        // Do something.
    }

    // Run when a document ready on the front end.
    $( document ).ready( init );

    // Run when a block preview is done loading.
    $( document ).on( 'mb_blocks_preview/hero-area', init );
} )( jQuery );
```

Note that jQuery is already added as a dependency for the script, so you can use it in your script.

#### `enqueue_assets`

If your block has some CSS / JavaScript dependencies (such as a JavaScript library), then using `enqueue_style` and `enqueue_script` might not be a good option since it allows you to enqueue only one single CSS / JS file.

In that case, use `enqueue_assets` to enqueue your assets. This parameter accepts a PHP callback function, like this:

```php
'enqueue_assets' => function() {
	wp_enqueue_style( 'slick', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css', [], '1.8.1' );
	wp_enqueue_script( 'slick', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', ['jquery'], '1.8.1', true );
	wp_enqueue_script( 'my-custom-script', get_template_directory_uri() . '/blocks/hero/script.js', ['slick'], '', true );
}
```

#### `preview`

This attribute allows you to set preview data for the block, which will show when you click on the plus icon (+) on the toolbar:

![block preview](https://i.imgur.com/bwMPY4t.png)

The block preview is just the block rendered with sample data. And you'll just need to set the parameter `preview` as an array of that sample data.

For example, if you have a "Team Member" block (as above) that has 3 fields: image, title, and description, you can set the `preview` parameter as follows:

```php
'preview' => [
	'image'       => 'https://domain.com/person.jpg', // Image URL
	'title'       => 'William Shakespeare',
	'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
]
```

#### `storage_type`

Sets the storage for the block fields. Default, it's `attributes`, which means saving block fields in the attributes.

If you want to save the block fields into custom fields, set it to `post_meta`. Saving block fields in the custom fields makes the block act as a wrapper of custom fields. In this case, to prevent bugs, you *should* set `multiple` to `false` to prevent inserting the same block multiple times (see `supports` parameter above).

If you want to save the block fields into custom tables, you need to activate the [MB Custom Table](/extensions/mb-custom-table/) extension first. Then set `storage_type` and `table` as follows:

```php
'storage_type' => 'custom_table',
'table'        => 'your table name',
```

See [MB Custom Table documentation](/extensions/mb-custom-table/) for more details.

### Block fields

Each block can have unlimited fields. Adding fields to blocks is similar to adding fields to a custom meta box. All you need to do is specify the fields in the parameter `fields` from the block settings.

```php
add_filter( 'rwmb_meta_boxes', function( $meta_boxes ) {
	$meta_boxes[] = [
		// Other block settings.

		// Block fields.
		'fields'          => [
			[
				'type' => 'single_image',
				'id'   => 'image',
				'name' => 'Image',
			],
			[
				'id'   => 'title',
				'name' => 'Title',
			],
			// Other fields,
		],
	];
	return $meta_boxes;
} );
```

Each field is an array of its settings. See [this guide](/field-settings/) for details about field settings.

## Block rendering

There are various ways to render a block (via `render` property if you use `block.json` or via `render_callback` or `render_template` if you don't use `block.json`). In any case, the plugin provides you these variables that you can use:

- `$attributes`: the block attributes, which have all the block settings and fields' data. Attributes are automatically [prepared for you](#automatically-prepare-attributes) so you can access them directly.
- `$content`: the block's inner content.
- `$block`: the block object, an instance of `WP_Block` class..

### Automatically prepare attributes

By default, all attributes inside `$attributes` are automatically prepared for you. `$attributes[ $field_id ]` returns the value of the [`rwmb_get_value()`](/functions/rwmb-get-value/) function, which gives you all the data for the field.

For example, if you have a `single_image` field, the value of that field is stored as a number (attachment ID). But when you access the field value via `$attributes['image']`, you'll get the whole attachment object like below, which is more convenient to use:

```php
[
    'ID'          => 123,
    'name'        => 'logo-150x80.png',
    'path'        => '/var/www/wp-content/uploads/logo-150x80.png',
    'url'         => 'https://example.com/wp-content/uploads/logo-150x80.png',
    'width'       => 150,
    'height'      => 80,
    'full_url'    => 'https://example.com/wp-content/uploads/logo.png',
    'title'       => 'Logo',
    'caption'     => 'Logo caption',
    'description' => 'Used in the header',
    'alt'         => 'Logo ALT text',
    'srcset'      => 'large.jpg 1920w, medium.jpg 960w, small.jpg 480w', // List of responsive image src
    'sizes'       => [], // List of image sizes. See https://developer.wordpress.org/reference/functions/wp_get_attachment_metadata/
    'image_meta'  => [], // List of image meta. See https://developer.wordpress.org/reference/functions/wp_get_attachment_metadata/
]
```

And you can use it in your block template like this:

```php
<img src="<?= $attributes['image']['full_url'] ?>">
```

This preparation is helpful for not-simple fields like image, file, post, taxonomy, etc.

### Accessing raw data

In case you want to access the raw data (e.g., the attachment ID), you can use the `data` key inside `$attributes`. `$attributes['data']` contains all the info of fields as an array in the format of `'field_id' => 'field_value'`.

Note that, unlike `$attributes[ $field_id ]`, the field value in `$attributes['data']` is *not* prepared, which means it's the raw value.

For example, for a `single_image` field, the value of `$attributes['data']['image']` is the attachment ID.

### Rendering helper functions

In addition to the automatic preparation of attributes, to make it easier to access the block fields' data, we created 2 helper functions: `mb_get_block_field()` and `mb_the_block_field()`.

These functions work exactly like the [`rwmb_get_value()`](/functions/rwmb-get-value/) and [`rwmb_the_value()`](/functions/rwmb-the-value/), but applied for the current block only. The first function returns the data stored for a block field, while the 2nd one outputs that data.

```php
// Get block image field.
$image = mb_get_block_field( 'image' );
echo $image['full_url'];

// Output the block content field.
mb_the_block_field( 'content' );
```

### Reserved attributes

When you create a block, there are some reserved attributes that you should avoid using for field's ID, unless your purpose is to override the default MB Block's behavior. These attributes are:

- `id`: the auto generated ID for the block, which is unique for each block.
- `name`: the block name.

These attributes are used by MB Blocks for easier to style and manipulate the block. If you a field with IDs `id` or `name`, the field's value will override the default value generated by MB Blocks.

In that case, if you want to get the block name, you can use the variable `$block->name`. `$block` is a variable that is always available in your template (or callback). It's an instance of the [`WP_Block`](https://developer.wordpress.org/reference/classes/wp_block/) class.

### Deprecated parameters

These parameters are available in the previous versions of MB Blocks and are deprecated since 1.5.0. They're still working but will be removed in the future. Please use the alternative methods instead.

- `$is_preview`: a boolean variable to let you know if you're in the preview mode for Gutenberg or on the front end. It's useful when you want to display a custom message to users when they edit the block on the back end. To check if the active block is in preview mode, use `defined( 'REST_REQUEST' ) && REST_REQUEST` instead.
- `$post_id`: the current post ID. You can access via `get_the_ID()` function instead.

## Nested blocks

WordPress has an amazing feature for Gutenberg blocks called [InnerBlocks](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/), which allows you to insert other blocks inside a block. Since version 1.4, MB Blocks also supports this feature.

Assuming you want to create a custom testimonial block, which has the following data:

- An image
- A title
- A paragraph for the testimonial content
- And a select field for the testimonial style (something like an image on the right or above the content)

It's easy to make those fields with MB Blocks. However, it might be less flexible than using the default Gutenberg heading and paragraph blocks for the title and content field. So, we might want to wrap those 2 fields into a `InnerBlocks` like this:

- Image
- InnerBlocks
- Style

This is an example code of the block:

```php
<?php
add_filter( 'rwmb_meta_boxes', function( $meta_boxes ) {
	$meta_boxes[] = [
		'title'           => 'Testimonial',
		'id'              => 'testimonial',
		'type'            => 'block',
		'context'         => 'side',
		'render_callback' => function( $attributes ) {
			?>
			<div class="testimonial testimonial--<?= $attributes['style'] ?>">
				<div class="testimonial__text">
					<InnerBlocks />
				</div>
				<div class="testimonial__image">
					<?php mb_the_block_field( 'image' ) ?>
				</div>
			</div>
			<?php
		},
		'fields'          => [
			[
				'type' => 'select',
				'id'   => 'style',
				'name' => 'Style',
				'options' => [
					'default'     => 'Default',
					'image_above' => 'Image above',
				],
			],
			[
				'type' => 'single_image',
				'id'   => 'image',
				'name' => 'Image',
			],
		],
	];
	return $meta_boxes;
} );
```

When inserting a field in the admin, you'll see the block like this:

![inner blocks](https://i.imgur.com/p42aGbT.png)

As you can see the InnerBlocks on the left, where the usual placeholder is displayed "Type / to choose a block". And you can insert headings (of any type H1, H2, H3, etc.) and the content very easily.

![inner blocks in action](https://i.imgur.com/GckMMnA.png)

:::tip

I use [Wayfinder](https://wordpress.org/plugins/wayfinder/) plugin to show the block outline, which makes it easier to see which blocks are being edited.

:::

`<InnerBlocks />` must be wrapped in a `<div>` tag to avoid breaking the DOM nodes in the Block Editor.

```html
<div class="my-inner-blocks">
	<InnerBlocks />
</div>
```

To make it more powerful, MB Blocks supports the following properties of InnerBlocks. They're the same as in the [block handbook](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/).

### `allowedBlocks`

`allowedBlocks` helps you to restrict blocks that are available to insert into the InnerBlocks. The blocks that are not specified, will be not available to be inserted.

In your template (or render callback), you can set `allowedBlocks` like this:

```php
<InnerBlocks
	allowedBlocks="<?= esc_attr( json_encode( [
		'core/heading',
		'core/paragraph',
	] ) ) ?>"
/>
```

This allows you to insert only heading and paragraph blocks.

### `orientation`

By default, InnerBlocks expects its blocks to be shown in a vertical list. A valid use case is to style InnerBlocks to appear horizontally. When blocks are styled in such a way, the orientation prop can be used to indicate a horizontal layout:

```php
<InnerBlocks orientation="horizontal" />
```

### `template`

Use the template property to define a set of blocks that prefill the InnerBlocks component when inserted. You can set attributes on the blocks to define their use. The example below shows a book review template using InnerBlocks component and setting placeholder values to show the block usage.

```php
<InnerBlocks
	template="<?= esc_attr( json_encode( [
		[ 'core/heading',   [ 'placeholder' => 'Enter testimonial title...' ] ],
		[ 'core/paragraph', [ 'placeholder' => 'Enter testimonial content...' ] ],
	] ) ) ?>"
/>
```

### `templateLock`

Template locking allows locking the InnerBlocks area for the current template. Options:

- 'all' — prevents all operations. It is not possible to insert new blocks. Move existing blocks or delete them.
- 'insert' — prevents inserting or removing blocks, but allows moving existing ones.
- false — prevents locking from being applied to an InnerBlocks area even if a parent block contains locking. ( Boolean )

If locking is not set in an InnerBlocks area: the locking of the parent InnerBlocks area is used.

If the block is a top-level block: the locking of the Custom Post Type is used.

### Example

This is a more complete example of the testimonial block with more properties:

```php
<?php
add_filter( 'rwmb_meta_boxes', function( $meta_boxes ) {
	$meta_boxes[] = [
		'title'           => 'Testimonial',
		'id'              => 'testimonial',
		'type'            => 'block',
		'context'         => 'side',
		'render_callback' => function( $attributes ) {
			?>
			<div class="testimonial testimonial--<?= mb_get_block_field( 'style' ) ?>">
				<div class="testimonial__text">
					<InnerBlocks
						allowedBlocks="<?= esc_attr( json_encode( [
							'core/heading',
							'core/paragraph',
						] ) ) ?>"
						orientation="vertical"
						template="<?= esc_attr( json_encode( [
							[ 'core/heading',   [ 'placeholder' => 'Enter testimonial title...' ] ],
							[ 'core/paragraph', [ 'placeholder' => 'Enter testimonial content...' ] ],
						] ) ) ?>"
						templateLock="insert"
					/>
				</div>
				<div class="testimonial__image">
					<?php mb_the_block_field( 'image' ) ?>
				</div>
			</div>
			<?php
		},
		'fields'          => [
			[
				'type' => 'select',
				'id'   => 'style',
				'name' => 'Style',
				'options' => [
					'default'     => 'Default',
					'image_above' => 'Image above',
				],
			],
			[
				'type' => 'single_image',
				'id'   => 'image',
				'name' => 'Image',
			],
		],
	];
	return $meta_boxes;
} );
```

## Block templates

Sometimes you want to load default blocks when creating a new post. Block templates allow specifying a default initial state for an editor session. Use the argument `template` when [registering the post type](/custom-post-types/):

```php
'template'              => [
    ['meta-box/{$block_id}']
]
```

## Block data

Each block created using MB Blocks is a *dynamic block*. By default, the block data is saved as a JSON string in the block content.

If you view the post content via a tool like PHPMyAdmin, you'll see the block is stored as a string like this:

```html
<!-- wp:meta-box/hero-content {"id":"block_jyqlhbauqz4jz51ahab","data":{"image":"10","title":"Hi, I’m Martin Green","subtitle":"WEB DEVELOPER \u0026 DESIGNER","content":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta suntlo explica bo. Nemo enim ipsam voluptatem quia voluptas.","signature":"9","button_text":"Discover More","button_url":"#","background_color":"#f5f7f8"},"align":"wide"} /-->
```

When you decode the JSON string, you'll see the block data as an object like this:

```json
{
  "id": "block_jyqlhbauqz4jz51ahab",
  "data": {
    "image": "10",
    "title": "Hi, I’m Martin Green",
    "subtitle": "WEB DEVELOPER \u0026 DESIGNER",
    "content": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta suntlo explica bo. Nemo enim ipsam voluptatem quia voluptas.",
    "signature": "9",
    "button_text": "Discover More",
    "button_url": "#",
    "background_color": "#f5f7f8"
  },
  "align": "wide"
}
```

It has the following attributes:

- `name`: the block name. Note that if you have a field with ID `name`, the field value will overwrite this property. In this case, if you want to get the block name, you can use the variable `$block->name`.
- `id`: a unique ID for the block. Note that it's different from the block settings ID. This ID can be used to set the `id` parameter in the HTML if you want.
- `align`: block alignment
- `anchor`: block anchor
- `className`: custom CSS class for the block
- `data`: an array of the block fields' data, in the format of `'field_id' => 'field_value'`

The data is passed to the `render_callback` or `render_template` as a `$attributes` parameter. So you can use it to render the block. See the [block rendering](#block-rendering) section for more details.

### Saving block data in post meta or custom tables

Besides saving the block data as a JSON string in the block's attributes, the plugin allows you to save data in post meta or custom tables. This makes blocks behave the same as a normal field group.

If you want to save block data in post meta, in the meta box's group, set the `storage_type` to `post_meta`:

```php
[
	'storage_type' => 'post_meta',
	'supports' => [
		'multiple' => false,
	],
]
```

In this case, to prevent bugs, you *should* set `multiple` to `false` to prevent inserting the same block multiple times (the codes above already have that).

If you want to save the block fields into custom tables, you need to activate the [MB Custom Table](/extensions/mb-custom-table/) extension first. Then set `storage_type` and `table` as follows:

```php
[
	'storage_type' => 'custom_table',
	'table' => 'your_table_name',
	'supports' => [
		'multiple' => false,
	],
]
```

:::caution Caveats

When saving block data in post meta or custom tables, there is no attributes stored in the block itself. 
Automatic preparation of attributes is not available, helpers functions like `mb_get_block_field()` and `mb_the_block_field()` will not work.
You will have to use the [rwmb_meta](/functions/rwmb-meta/) function to get the block data.

:::

## Hooks

`mb_${blockId}_settings`

This is a filter to let developers change the block settings **via Javascript**. It accepts one parameter - `settings`, the block settings array.

In this filter, `blockId` is the block ID, which has the format `meta-box/id` where `id` is the field group ID.

To use a JavaScript hook, please refer to [this tutorial](https://metabox.io/wordpress-javascript-hooks/).

## Video Tutorial

**Create Custom Gutenberg Blocks With Meta Box (only PHP)**

<LiteYouTubeEmbed id='PAisKy8eC2U' />

**Build Gutenberg Blocks Visually With Meta Box Builder**

<LiteYouTubeEmbed id='v3ke1DBlWuk' />

See more details on [using Meta Box Builder with MB Blocks](https://metabox.io/build-gutenberg-blocks-visually-with-meta-box-builder/).

## Examples

The complete code example for the video (and used to write this tutorial) is [available in the Library](https://github.com/wpmetabox/library/tree/master/extensions/mb-blocks/hero). You can copy the code and put it in your theme. Then start to modify it to create your own Gutenberg blocks.
