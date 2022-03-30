---
title: Button
---

import Screenshots from '@site/src/components/Screenshots';

The button field creates a simple button. It doesn't have any value. Usually, this field is used to trigger custom JavaScript actions.

## Screenshots

<Screenshots name="button" col1={[
    ['https://i.imgur.com/9ciaST1.png', 'The button field interface']
]} />

## Settings

This field doesn't have any specific settings. It only uses [common settings](/field-settings/). But there are important settings that you should pay attention to, the keys are for use with code:

Name | Key | Description
--- | --- | ---
Default value | `std` | Button text.
Custom HTML5 attributes | `attributes` | A list of custom HTML5 attributes for the button. [More info](/custom-attributes/).

This is a sample field settings array when creating this field with code:

```php
[
    'type'       => 'button',
    'name'       => 'Advanced Settings',
    'std'        => 'Toggle',
    'attributes' => [
        'data-section' => 'advanced-section',
        'class'        => 'js-toggle',
    ],
],
```

## Data

This field does not save any value in the database.

## Custom JavaScript

As said above, this field is usually used for custom JavaScript actions. To enqueue a JavaScript file to the admin editing page, use the [rwmb_enqueue_scripts](/actions/rwmb-enqueue-scripts/) hook:

```php
add_action( 'rwmb_enqueue_scripts', 'prefix_enqueue_custom_script' );
function prefix_enqueue_custom_script() {
    wp_enqueue_script( 'script-id', get_template_directory_uri() . '/js/admin.js', [ 'jquery' ], '', true );
}
```

And in the `admin.js` script, you can trigger a custom action when click the button:

```js
jQuery( function( $ ) {
    $( '.js-toggle' ).on( 'click', function() {
        // Do something.
    } );
} );
```
