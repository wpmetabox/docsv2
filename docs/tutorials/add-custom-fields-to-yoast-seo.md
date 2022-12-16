---
title: Adding custom fields to Yoast SEO meta tags
---

We are going to find out how to add custom fields to meta tags in Yoast SEO.

## Preparation

Here are all the tools we need for this practice:

* [Meta Box](https://metabox.io): to have framework to create custom fields;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have an UI on the backend to create custom fields easier;
* [Meta Box for Yoast SEO](https://metabox.io/plugins/meta-box-yoast-seo): to add content of custom fields to Yoast SEO Content Analysis to have better SEO score.

If you want to add a simple custom field to meta tags, you can use the Yoast SEO snippet variables. It works in 90% cases. However, if your custom field has complex data such as a list of text (cloneable text field) or a sub-field of a group, then you should use the custom snippet variables.

In this practice, I will create both of these field types with all these methods for easier appling in the real cases.

## Creating custom fields

Go to **Meta Box > Custom fields** to create fields. The data input to these fields will be used to add to the meta tags in this tutorial.

![Create fields](https://i.imgur.com/CtKt0Dw.png)

After publishing the custom fields, you will see the field in the post editor. Just add some text for testing.

For the next step, we have two methods to add these texts to the meta tags of Yoast SEO.

In this case, the **Product Title** field is in the simple type without cloneable or any other complex settings, so you can use the Yoast SEO snippet variables for it.

For the **Product Information** group field, you should use the custom snippet variables.

## Using Yoast SEO snippet variables

Yoast SEO provides [snippet variables](https://kb.yoast.com/kb/yoast-wordpress-seo-titles-metas-template-variables/) to add data from custom fields to meta tags. It’s in the form of `%%cf_<custom-field-name>%%`.

Just get the ID of the field, and replace `<custom-field-name>` with that ID.

For example, in the Yoast SEO section in the post/page editor, enter the variable to the **Meta description** box like this:

`%%cf_product-title%%`

Or, just type % then Yoast will suggest field’s ID in a dropdown list like this:

![Just type % then Yoast will suggest field's ID](https://i.imgur.com/p8W7BZo.png)

Then, the variable will be displayed like this.

![The variale will be displayed like this](https://i.imgur.com/nOAgtmc.png)

It also means that the content from the Product Title field is recognized as a meta description of the post by Yoast.

## Using custom snippet variables

The task is **getting the product short description and rating from the Product Information group and output them to the post description meta tag**. Follow the steps below.

### Registering a custom snippet variable

First, register a custom snippet variable for Yoast by adding the following code in `functions.php` file:

```php
add_action( 'wpseo_register_extra_replacements', function() {
    wpseo_register_var_replacement( '%%my_var%%', 'my_callback_function', 'advanced', 'Some help text' );
} );
```
The hook `wpseo_register_extra_replacements` is used to register a custom replacing variable (snippet variables). Inside the callback function, we use Yoast SEO's function `wpseo_register_var_replacement()` function to register a new variable. This function has 4 parameters:

* Variable name: The name of the variable to replace, i.e. '%%var%%', the surrounding %% are optional, name can only contain [A-Za-z0-9_-]. Note that your variable cannot start with `cf_ or ct_ as` they're used by Yoast SEO for custom fields and custom taxonomies.
* Callback function: Callback function to retrieve the replacement value for the variable.
* Type of variable: `basic` or `advanced`, `defaults` to `advanced`.
* Help text: Help text to be added to the help tab for this variable.

Here is the callback function to retrieve the replacement value for the variable. Copy and insert this code to `functions.php`.

```php
function my_callback_function() {
    $value = '';

    // Get product information.
    $settings = rwmb_meta( 'product_information' );

    // Get brief description.
    $value .= isset( $settings['short_description'] ) ? $settings['short_description'] : '';

    // Get ratings.
    $value .= isset( $settings['ratings'] ) ? " {$settings['ratings']} stars" : '';

    return $value;
}
```

This function gets the product information using the [rwmb_meta() helper function](https://docs.metabox.io/displaying-fields/). As it's a group, we have to get the group value and from that, get the values of sub-fields (short description and rating). Then it returns the value.


### Using the created snippet variable

After registering the custom snippet variable, go to **SEO > Search Appearance** and enter the new variable into the **Meta description** box:

![Enter the new variable into the Meta description box](https://i.imgur.com/I2unxzu.png)

Then, just go to edit a product and enter all the information for custom fields:

![Go to edit a product and enter all the information for custom fields](https://i.imgur.com/kXWQRXr.png)

Unfortunately, Yoast SEO **does not render custom snippet variables in the snippet preview**. So, the only way to check it is **viewing the source code** of the page on the front end.

![View the source code](https://i.imgur.com/K9BpMcp.png)

:::tip

If the settings of SEO plugins make you exhausted, and you want something simple and just works, then try our plugin [Slim SEO](https://wordpress.org/plugins/slim-seo/). It does all the SEO jobs for your WordPress websites automatically without getting lost in the configuration.

:::
