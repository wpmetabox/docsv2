---
title: Block Editor
---

import Screenshots from '@site/src/components/Screenshots';

The block editor field creates a standalone Gutenberg block editor in meta boxes, settings pages, and other supported Meta Box objects.

## Notes
* Requires WordPress Block Editor (Gutenberg)
* Media upload is enabled automatically for users with upload permissions
* Each Block Editor field is fully isolated from the others

## Screenshots

<Screenshots name="block-editor" col1={[
    ['/screenshots/block-editor.png', 'The block editor field interface']
]} />

## Settings

Besides the [common settings](/field-settings/), this field has a specific setting, the key is for use with code:

Name | Key | Description
--- | --- | ---
Allowed Blocks | `allowed_blocks` | List of allowed block types. Leave empty to allow all blocks.

This is a sample field settings array when creating this field with code:

```php
[
    'name'           => 'Content Blocks',
    'id'             => 'content_blocks',
    'type'           => 'block_editor',
    'allowed_blocks' => [
        'core/heading',
        'core/columns',
        'core/image',
    ],
]
```

## Data

This field saves data as Gutenberg block markup in the database, just like WordPress stores blocks in `post_content`.

## Displaying the value

Meta Box automatically applies `do_blocks()` when rendering the field value.

```php
$content = rwmb_get_value( 'content_blocks' );
echo do_blocks( $content );
```

This ensures that all Gutenberg blocks are properly rendered on the front end.

