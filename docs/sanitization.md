---
title: Sanitization
---

import FAQ from '@site/src/components/FAQ';

To ensure the user input is safe to save to the database, Meta Box provides a mechanism to sanitize fields' values. The sanitization is automatically applied for all built-in field types. For some fields such as select or radio, Meta Box also validates the submitted value to ensure it's a valid value (e.g. available in the field options).

The sanitization is applied for both single and cloneable fields. With cloneable fields, sanitization is applied for each cloned value.

## Default sanitize callbacks

We try to provide appropriate callbacks for built-in field types and use built-in WordPress sanitization functions as much as possible.

To see the list of default sanitize callbacks, please [see the plugin source code](https://github.com/wpmetabox/meta-box/blob/master/inc/sanitizer.php#L50).

:::caution

- **Textarea field**: Meta Box **removes all scripts and iframes** from the value. If you want to enter scripts (like Google Analytics) or embed videos, then you need to disable sanitization. See below for details.
- **Choice fields**: Meta Box validates the input to make sure it's in the field options.
- **[Groups](/extensions/meta-box-group/)** are not sanitized due to their complexity.

:::

## Bypass the sanitization

If you don't want to sanitize the input value for a specific field (we don't encourage this, obviously), then go to the **Advanced** tab and set **Custom sanitize callback** to "none":

![disable sanitization](https://i.imgur.com/hqzOpTt.png)

In this case, whatever users input will be saved.

:::info Not a premium user?

This instruction uses **Meta Box Builder** extension, which is a premium extension and is already bundled in Meta Box AIO and MB Core. If you're not a premium user, please [purchase a license](https://metabox.io/pricing/) to use it. However, you can do this with code. See below for more information.

:::

If you use code, then set `'sanitize_callback' => 'none'` in the [field settings](/creating-fields-with-code/#field-settings):

```php
[
    'type'              => 'text',
    'id'                => 'amount',
    'name'              => 'Amount',
    // highlight-next-line
    'sanitize_callback' => 'none',
]
```


## Custom sanitize callback

To provide a custom sanitize callback for a field, please enter a function name to the **Custom sanitize callback** settings in the **Advanced** tab when editing a field.

![custom sanitizate callback](https://i.imgur.com/NnS4XAC.png)

And don't forget to define the function in your theme or plugin.

The code below uses code to define a custom sanitize callback that auto add a currency symbol "$" to a text field if it's missed:

```php
add_filter( 'rwmb_meta_boxes', function( $meta_boxes ) {
    $meta_boxes[] = [
        'title' => 'Test Sanitization Money Field',
        'fields' => [
            [
                'type'              => 'text',
                'id'                => 'amount',
                'name'              => 'Amount',
                // highlight-next-line
                'sanitize_callback' => 'my_sanitize_money_field',
            ]
        ],
    ];
    return $meta_boxes;
} );

// highlight-start
function my_sanitize_money_field( $value, $field, $old_value, $object_id ) {
    if ( 0 !== strpos( $value, '$' ) ) {
        $value = '$' . $value;
    }
    return $value;
}
// highlight-end
```

The sanitize callback is passed 4 parameters as follows:

Parameter|Description
---|---
`$value` | The submitted value
`$field` | The field settings
`$old_value` | The old value which is in the database
`$object_id` | The current object ID

## FAQ

<FAQ question="Why doesn't my textarea field save values?">

Probably you are trying to save a script like Google Analytics or an embeded video. Meta Box removes all these things during sanitization. To save them, please disable sanitization for the field. See the "Bypass the sanitization" section for details.

</FAQ>
