# Create Your First Meta Box Block

## Introduction

Meta Box Blocks helps you create custom blocks for the new WordPress block editor (Gutenberg) without complicated build tools or frameworks. 
Creating a block is as simple as defining attributes and rendering the output.

There are three ways to create a block with Meta Box Blocks:

- Via Meta Box Builder
- Via Meta Box group array
- Via native WordPress block registration

All of them have tradeoff between simplicity and flexibility. In this tutorial, we'll go through the third way, which is the most flexible way to create a block and it's recommended by WordPress for its [benefits](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#benefits-of-using-the-metadata-file).

In this tutorial, we will create a simple testimonial block with two fields: `name` and `image`, for the testimonial content, we'll use the inner blocks feature, this way we can use any block for the content. Here's how the block looks like:

![Image](https://i.imgur.com/fVTmMWi.png)

## Prerequisites

You need to have the following plugins installed and activated:
- Meta Box
- MB Blocks

Although you can use MB Blocks with any theme, for this tutorial, we'll use the default WordPress theme Twenty Twenty-Four. It's the latest default theme at the time of writing this tutorial and it's built with the block editor in mind.

It's the best practice to create a child theme to modify the theme's functionality but we won't cover that step in this tutorial. Lets just assume that you're using a child theme of Twenty Twenty-Four.

## Step 1: Create a Meta Box that storing Block Attributes

Open the `functions.php` file of your theme and add the following code to register a block:

```php
add_filter( 'rwmb_meta_boxes', function( $meta_boxes ) {
	$meta_boxes[] = [
		'title'           => 'Testimonial',
		'id'              => 'testimonial',
		'description'     => 'A custom testimonial block',
		// highlight-next-line
		'type'            => 'block',
		'mode'            => 'preview',
		'fields'          => [
			[
				'type' => 'text',
				'id'   => 'name',
				'name' => 'Name',
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

As you can see, a block meta box is similar to a normal meta box, but it has a different type. The `mode` parameter is set to `preview` to make the default block preview mode.

## Step 2: Register the Block

We'll register the block using the native WordPress block registration function. So it's exactly the same as registering a normal block.

In the same `functions.php` file, add the following code to register the block:

```php
add_action( 'init', function () {
	register_block_type( __DIR__ . '/blocks/testimonials' );
} );
```

This code will register a block with the metadata file located at `blocks/testimonials/block.json`. The metadata file contains the block's attributes and settings.

## Step 3: Create the Block's Metadata File

As the step 2 mentioned that we'll create `testimonials` block in the `blocks` folder. It's the best practice to put all blocks under the `blocks` folder to keep the theme organized.

Create a new folder `blocks` in the root of your theme and create a new file `testimonials/block.json` with the following content:

```json
{
    "$schema": "https://schemas.wp.org/trunk/block.json",
    "apiVersion": 3,
    "name": "meta-box/testimonial",
    "title": "MB Testimonial",
    "description": "A custom testimonial block that uses MB fields.",
    "style": [
        "file:./testimonial.css"
    ],
    "category": "formatting",
    "icon": "format-quote",
    "keywords": [
        "testimonial",
        "quote"
    ],
    "supports": {
        "anchor": true,
        "align": true,
        "color": {
            "background": true,
            "text": true
        }
    },
    "attributes": {
        "image": {
            "type": "object",
            "default": {
                "full_url": "https://i0.wp.com/metabox.io/wp-content/themes/rooster/images/online-generator.png?quality=100"
            }
        },
        "name": {
            "type": "string",
            "default": "Michael Scott"
        },
        "align": {
            "type": "string",
            "default": "right"
        }
    },
    "render": "file:./testimonial.php"
}
```

This metadata file defines the block's attributes, settings, the render file, etc. All of them are self-explanatory and follow the [official documentation](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/). We'll explain some of them here:

- We use the latest schema `https://schemas.wp.org/trunk/block.json` and version for the metadata file.
- The `name` is the block's name, which is used to register the block in PHP code. It should be unique and prefixed with `meta-box/` so MB Blocks can recognize it.
- The `style` parameter points to the CSS file for the block. We'll create this file later.
- The `render` parameter points to the PHP file that renders the block's output. We'll create this file later.
- Some of the block's attributes are defined here, including the default values.
- We use `supports` to define the block's features, such as alignment, color, etc. This allows users to customize the block's appearance and easy for theme developers to style the block.

### Default Attributes
It's recommended to set default values for the block's attributes. This way, when users add the block to the editor, they'll see the default values. It's also useful for theme developers to see how the block looks like in the editor.

You might wondering why we set type `object` for the `image` attribute. This is because we use the `single_image` field in the meta box to store the image. MB Blocks will automatically get the related image object and prepare for you to use in the template file so `$attributes['image']` will return an image object and `$attributes['image']['full_url']` will return the full URL of the image. That's why we set the default value is an object with the `full_url` of the image. You can also set other properties of the image object like `id`, `alt`, `caption`, etc.

## Step 4: Render the Block's Output

As the metadata file `"render": "file:./testimonial.php"` points to the `testimonial.php` file in the same folder with `block.json`, we need to create this file to render the block's output.

Create a new file `blocks/testimonials/testimonial.php` with the following content:

```php
<?php
/**
 * @var array<string, mixed>[] $attributes The block attributes.
 * @var \WP_Block $block The block instance.
 */
?>
<div <?= get_block_wrapper_attributes(); ?>>
	<img class="testimonial__image" loading="lazy" src="<?= esc_html( $attributes['image']['full_url'] ) ?>">
	<div class="testimonial__body">
		<div class="testimonial__content" style="min-height: 50px;">
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
		<div class="testimonial__author"><?= esc_html( $attributes['name'] ) ?></div>
	</div>
</div>
```

MB Blocks follows exactly what WordPress recommendation, we'll have `$attributes`, `$content` and `$block` variables to get the block's attributes and settings. But we recommend using the `<InnerBlocks>` tag instead of `$content` so that can work with both editor and frontend.

We use the `get_block_wrapper_attributes` function to get the block's wrapper attributes, which includes the block's alignment and color. This function is provided by the block editor and it's recommended to use it to keep the block consistent with the editor's styles.

The `InnerBlocks` component is used to render the inner blocks. We use the `allowedBlocks` parameter to allow only `core/heading` and `core/paragraph` blocks. This way, users can only add these blocks to the testimonial block. The `template` parameter is used to define the default content of the testimonial block. It includes a heading and a paragraph. The `templateLock` parameter is set to `insert` to prevent users from removing the default content.

One of the best feature of MB Blocks is auto preparing data for you so you can use it directly in the template file. In this case, because we use `image` field for the block, Meta Box will save ID of the attachment like usual and then MB Blocks will automatically get the image data and prepare for you to use in the template file. You can see that we use `$attributes['image']['full_url']` to get the full URL of the image. This is very convenient and easy to use.

## Step 5: Style the Block

Create a new file `blocks/testimonials/testimonial.css` with the following content:

```css
.testimonial {
	display: flex;
	justify-content: space-between;
}
.testimonial__image {
	margin-right: 10px;
	min-width: 150px;
	height: 150px !important;
	border-radius: 99px;
}
.testimonial__content {
	font-size: 18px;
	font-style: italic;
	color: #666;
}
.testimonial__author {
	text-transform: uppercase;
	font-weight: bold;
	font-size: 16px;
	margin-top: 10px;
}
```

Now, try to add the block to the editor and see how it looks like. You can also customize the block's appearance using the block's settings, such as alignment, color, etc.

## Conclusion
Congratulations! You've created your first block with MB Blocks. It's simple and flexible. Check out the [documentation](https://docs.metabox.io/extensions/mb-blocks/) for more information about MB Blocks and how to create more complex blocks.

## Useful Links
- [MB Blocks documentation](https://docs.metabox.io/extensions/mb-blocks/)
- [WordPress block editor handbook](https://developer.wordpress.org/block-editor/)
