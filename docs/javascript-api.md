---
title: JavaScript API
---

Meta Box uses jQuery events and a few global functions in the `rwmb` object. Use them to add custom JavaScript to fields: initialize a library, react to clones, or run code after validation.

Load your script on the pages that have Meta Box fields. Make it depend on `rwmb`, the handle of the main Meta Box script:

```php
add_action( 'rwmb_enqueue_scripts', function () {
    wp_enqueue_script( 'my-fields', get_stylesheet_directory_uri() . '/js/my-fields.js', [ 'rwmb' ], '1.0', true );
} );
```

## Events

All events are jQuery events. Most of them bubble up to `document`, so you can listen on `document` and filter by a selector.

### `mb_ready`

Fires when the fields are ready. Use it instead of `$( document ).ready()` to initialize your code, because it also fires when fields are loaded later: in a block from [MB Blocks](/extensions/mb-blocks/) and in a form in the block editor.

```js
jQuery( document ).on( 'mb_ready', function ( e ) {
    // e.target is the document, or the block wrapper for MB Blocks.
    jQuery( e.target ).find( '.rwmb-text.phone' ).each( function () {
        // Initialize your library.
    } );
} );
```

In the block editor, Meta Box also runs the `mb_ready` action with `wp.hooks`. The callback gets the wrapper element:

```js
wp.hooks.addAction( 'mb_ready', 'my-plugin/ready', element => {
    // element is the DOM element that contains the fields.
} );
```

### `clone`

Fires on each input of a new clone, after the clone gets its index and default value. The handler gets the clone index. All field types use this event to initialize their library (date picker, select2…) in the new clone.

```js
jQuery( document ).on( 'clone', '.rwmb-text.phone', function ( e, index ) {
    // Initialize your library for the new input.
} );
```

### `after_clone`

Fires on each input of a new clone, after all `clone` handlers run. The handler gets the clone index.

### `clone_instance`

Fires on the new clone wrapper (`.rwmb-clone`), before its inputs get the new index. The handler gets the clone index.

### `clone_completed`

Fires on `document` after a [group](/extensions/meta-box-group/) clone is created and its sub-fields are ready. The handler gets the jQuery object of the new group clone.

```js
jQuery( document ).on( 'clone_completed', function ( e, $group ) {
    $group.find( '.rwmb-text' ).first().trigger( 'focus' );
} );
```

### `remove`

Fires on a clone wrapper (`.rwmb-clone`) before the clone is removed.

### `update_index`

Fires on each input of a new clone when the input gets its index (in the `name` and `id` attributes). The handler gets the index.

### `mb_change`

Meta Box fires this event on an input when the value changes but the browser does not fire a `change` event, for example, when users pick a color, sort media files or add a clone. [MB Blocks](/extensions/mb-blocks/) listens to it to save the block.

If your code changes a field value, trigger `mb_change` so that MB Blocks saves the new value:

```js
$input.val( 'New value' ).trigger( 'mb_change' );
```

### `mb_init_editors`

Initializes the `wysiwyg` fields (TinyMCE) inside an element. Trigger it after you show a hidden element that has `wysiwyg` fields. [MB Tabs](/extensions/meta-box-tabs/) triggers it when users switch tabs.

```js
$container.show().trigger( 'mb_init_editors' );
```

### `rwmb_map_refresh`

Refreshes the `map` and `osm` fields. Trigger it on `window` after you show a hidden element that has a map. Without it, the map can show gray tiles.

```js
jQuery( window ).trigger( 'rwmb_map_refresh' );
```

### `selected_address`

Fires on the address input of an `osm` field when users select an address from the suggestions. The handler gets the selected item, which has `label`, `latitude`, `longitude` and `address` (the address parts from OpenStreetMap).

### `color:change`

Fires on a `color` input when users pick a color.

### `cl_hide`

Fires on each input that [MB Conditional Logic](/extensions/meta-box-conditional-logic/) hides.

### `after_validate`

Fires on the form after [validation](/validation/) fails and the error classes are added to the inputs. Use it to show the invalid fields that are hidden, for example, in a collapsed section. MB Tabs uses it to switch to the tab that has errors.

```js
jQuery( document ).on( 'after_validate', 'form', function () {
    jQuery( this ).find( '.rwmb-error' ).first().closest( '.my-section' ).addClass( 'is-open' );
} );
```

### `mb_blocks_edit`

Fires on the block wrapper when a block from [MB Blocks](/extensions/mb-blocks/) shows its fields in the editor. The event `mb_blocks_edit/{block-name}` fires for a specific block, for example, `mb_blocks_edit/hero`.

## Functions and properties

### `rwmb.runConditionalLogic( $scope )`

Runs the conditional logic rules for the fields in `$scope`. Use it after you add fields to the page with JavaScript. See [MB Conditional Logic](/extensions/meta-box-conditional-logic/).

### `rwmb.hooks`

A `wp.hooks` instance for Meta Box filters in JavaScript. MB Group uses it for the `group.title` filter. See [Changing group titles with JavaScript](/extensions/meta-box-group/#changing-group-titles-with-javascript).

### `rwmb.inputSelectors`

The CSS selector for all Meta Box inputs. Use it to find the inputs in an element:

```js
$container.find( rwmb.inputSelectors );
```

### `rwmb.isGutenberg`

`true` if the current page uses the block editor.

Other properties of the `rwmb` object are for internal use. They can change without notice.
