---
title: Validation
---

Meta Box has a built-in validation module for all fields. You can use validation to make a field required, check password length, check phone number format, etc. The validation is done on the **client side**.

There are 2 ways of doing validation: basic validation with input attributes and advanced validation with jQuery validation plugin. You can choose which one fits your needs.

## Basic validation with input attributes

Meta Box supports [custom attributes](/custom-attributes/) for all input fields. You can use these attributes to validate the values of fields.

:::info

This type of validation uses browser validation, thus the UI and the error message depend on the browser (like language).

:::

When editing a field, switch to the **Advanced** tab, and scroll down to the **Custom HTML5 attributes**. Then click **Add New** button to add a new rule.

![validation with html5 attributes](https://i.imgur.com/Cewt9OG.png)

In the **Key** input box, you can select any rule from the dropdown (if you don't see the dropdown, simply press the down arrow button), or enter the attribute name manually. And then enter the desired value in the **Value** input box.

:::info

You need the **Meta Box Builder** extension, which is a premium extension and is already bundled in Meta Box AIO and MB Core, to follow this instruction. If you're not a premium user, consider [purchasing a license](https://metabox.io/pricing/) to use it. However, you can do this with code. See the sections below for more information.

:::

These are the available attributes that you can use for validation:

Attribute| Description
---|---
`max` | Maximum value
`maxlength` | Maximum number of characters
`min` | Minimum value
`minlength` | Minimum number of characters
`pattern` | Match a regular expression
`required` | Required
`step` | Match the step increment. Enter `any` to accept any step.
`type` | Mostly used as `url` or `email` to validate value as a valid URL or email

If you prefer to [use code to define fields](/creating-meta-boxes/#creating-custom-fields-with-code), simply add pairs of `'key' => 'value'` rules for the [field settings](/field-settings/) array:

```php
[
    'type' => 'text',
    'id'   => 'phone',
    'name' => 'Phone number',

    // highlight-start
    'required' => true,       // Make the field required.
    'pattern'  => '[0-9]{9}', // Must have 9 digits
    // highlight-end
]
```

## Advanced validation with jQuery validation plugin

For more advanced validation, including new rules and custom error messages, you might want to use the validation module, powered by the popular [jQuery validation plugin](https://jqueryvalidation.org/). It comes bundled with a useful set of validation methods and an API to write your own methods. All methods come with default error messages in English and translations into 37 other languages.

To define validation rules, switch to the **Advanced** tab, and scroll down to the **Validation**. Then click **Add New** button to add a new rule.

![validation with validation library](https://i.imgur.com/qAvW1LC.png)

For each rule, the list of types is available as a dropdown, so you can simply select it. Depending on the rule type, you can enter a value and/or custom error message.

These are available validation rules that you can use:

Name|Description
---|---
`required` | Makes the element required
`minlength` | Makes the element require a given minimum length
`maxlength` | Makes the element require a given maxmimum length
`rangelength` | Makes the element require a given value range. Array.
`min` | Makes the element require a given minimum
`max` | Makes the element require a given maximum
`range` | Makes the element require a given value range. Array.
`email` | Makes the element require a valid email
`url` | Makes the element require a valid URL
`date` | Makes the element require a date
`dateISO` | Makes the element require an ISO date
`number` | Makes the element require a decimal number
`digits` | Makes the element require digits only
`creditcard` | Makes the element require a credit card number
`equalTo` | Requires the element to be the same as another one. Value must be the ID of another field.
`extension` | Makes the element require certain file extensions. For `file`, `image` fields only.
`accept` | Makes a file upload accept only specified mime-types. For `file`, `image` fields only.
`phoneUS` | Validate for valid US phone number
`remote` | Requests a resource to check the element for validity. Value can be the URL of the resource to request for server-side validation (string) or options to fully customize the request, see [jQuery.ajax](https://api.jquery.com/jQuery.ajax). The server-side resource is called via jQuery.ajax and gets a key/value pair corresponding to the name of the validated element and its value as a GET parameter. The response is evaluated as JSON and must be `true` for valid elements, and can be any `false`, `undefined` or `null` for invalid elements, using the default message; or a string, eg. "That name is already taken, try peter123 instead" to display as the error message.

If you prefer code, you need to add a key `validation` to the [meta box settings](http://localhost:3000/creating-meta-boxes/#creating-custom-fields-with-code). This key has a parameter `rules` for validation rules and `messages` for error messages.

```php
add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
    $meta_boxes[] = [
        'title'      => 'Personal info',
        'post_types' => 'team_member',
        'fields'     => [
            [
                'name' => 'Email',
                'id'   => 'email',
                'type' => 'text',
            ],
            [
                'name' => 'Address',
                'id'   => 'address',
                'type' => 'text',
            ],
        ],
        // highlight-start
        'validation' => [
            'rules'  => [
                'email' => [
                    'required'  => true,
                    'minlength' => 7,
                ],
                // Rules for other fields
            ],
            'messages' => [
                'email' => [
                    'required'  => 'Email is required',
                    'minlength' => 'Email must be at least 7 characters',
                ],
                // Error messages for other fields
            ],
        ],
        // highlight-end
    ];

    return $meta_boxes;
} );
```

:::caution Fields with multiple inputs

The jQuery validation library actually uses the **input name**, not the input ID. In most cases, they are the same. But for some cases where a field has multiple inputs like a checkbox list, then the checkboxes don't have IDs.

In this case, **you need to use input name for the rules**. For example, if you use a taxonomy field displayed as a checkbox list, you should set validation rules as follows:

```php
'validation' => [
    'rules'  => [
        // highlight-next-line
        'my_taxonomy[]' => [
            'required'  => true,
        ],
    ],
    'messages' => [
        // highlight-next-line
        'my_taxonomy[]' => [
            'required'  => 'You must select a tag to proceed',
        ],
    ],
],
```

For the field types "File" and "Image", the input name has the format `_file_fieldID[]`, you should set validation rules as follows:

```php
'fields'     => [
    [
        'name' => 'Uploaded Files',
        'id'   => 'my_files',
        'type' => 'file',
    ],
],
'validation' => [
    'rules'    => [
        // highlight-next-line
        '_file_my_files[]' => [
            'extension' => 'pdf',
        ],
    ],
    'messages' => [
        // highlight-next-line
        '_file_my_files[]' => [
            'extension' => 'file extension not allowed',
        ],
    ],
],
```

:::