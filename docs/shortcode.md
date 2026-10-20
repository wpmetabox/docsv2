---
title: Shortcode
---

Use the `[rwmb_meta]` shortcode to print a field value in post content or a widget. For other ways to display fields, see [Displaying fields](/custom-fields/#displaying-fields).

```php
[rwmb_meta id="field_id" object_id="15"]
```

## Attributes

Attribute|Description
---|---
`id`|Field ID. Required.
`object_id`|Object ID. Required when `object_type` is not `post`. For `post`, if you omit it, Meta Box uses the current post ID.
`object_type`|Object type. Optional. Default: `post`. Allowed values: `post`, `term`, `user`, `comment`, `setting`, `network_setting`, `model`.
`attribute`|One key from the field value when the value is an array, for example an image URL or a term slug. Meta Box reads the value with [rwmb_get_value()](/functions/rwmb-get-value/).
`render_shortcodes`|Whether to run shortcodes inside the field value. Default: `true`.

The shortcode uses the same parameters as [rwmb_the_value()](/functions/rwmb-the-value/).

:::tip Other attributes

You can pass extra attributes. Meta Box forwards them to [rwmb_the_value()](/functions/rwmb-the-value/) as the second argument. For `model`, pass `type` with the model name. Use the same model name that `rwmb_meta()` uses.

:::

## Permission checks

If you set `object_id`, Meta Box checks whether the current user can read that object before it prints the value.

Object type|Rule
---|---
`post`|Allow publicly viewable posts. If the post has a password and the visitor has not entered it, require `read_post`. Other non-public posts also need `read_post`.
`term`|Allow [publicly viewable](https://developer.wordpress.org/reference/functions/is_term_publicly_viewable/) terms. Other terms need `edit_term`.
`comment`|Allow approved comments when the parent post is readable. Other comments need `edit_comment`.
`user`|Need `edit_user` for that user.
`setting`|Allowed.
`network_setting`|Allowed.
`model`|Allowed. Pass the model name in `type`.
Other values|Denied.

Notes:

- If `object_type` is not `post`, pass `object_id`. If you omit `object_id`, the shortcode returns an empty string.
- Guests cannot read user meta through the shortcode. The current user must be able to edit that user. To show a public user field on the front end, use the filter below or print the value in PHP.
- Unknown `object_type` values are denied. Use the filter below to allow them.

## Examples

Text field:

```php
[rwmb_meta id="phone"]
```

Image URL (`single_image`):

```php
[rwmb_meta id="company_logo" attribute="url" size="thumbnail"]
```

Term meta:

```php
[rwmb_meta id="color" object_id="15" object_type="term"]
```

Settings value:

```php
[rwmb_meta id="phone" object_id="site_option" object_type="setting"]
```

Network settings value:

```php
[rwmb_meta id="phone" object_id="network_option" object_type="network_setting"]
```

Custom table field for post meta:

```php
[rwmb_meta id="area" object_id="15" storage_type="custom_table" table="properties"]
```

Custom table model:

```php
[rwmb_meta id="area" object_id="15" object_type="model" type="property"]
```

## Override permission checks

When `object_id` is set, use `rwmb_meta_shortcode_permission` to allow or deny that object. The filter does not run when a non-`post` shortcode omits `object_id`. When that happens, the shortcode returns an empty string.

```php
// Allow every object that reaches the check. Use only when you trust the content authors.
add_filter( 'rwmb_meta_shortcode_permission', '__return_true' );

// Allow one public user field for everyone.
add_filter( 'rwmb_meta_shortcode_permission', function ( $allowed, $object_type, $object_id, $atts, $field_id ) {
	if ( 'user' === $object_type && 'job_title' === $field_id ) {
		return true;
	}
	return $allowed;
}, 10, 5 );
```

## Bypass HTML filtering

By default Meta Box runs the output through `wp_kses_post()`. To skip that filter:

```php
add_filter( 'rwmb_meta_shortcode_secure', '__return_false' );
```

To skip it for one field:

```php
add_filter( 'rwmb_meta_shortcode_secure_footer_script', '__return_false' );
```
