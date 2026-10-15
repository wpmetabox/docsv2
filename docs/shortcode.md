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
`attribute`|One key from the field value when the value is an array (for example image URL or term slug). Meta Box reads the value with [rwmb_get_value()](/functions/rwmb-get-value/).
`render_shortcodes`|Whether to run shortcodes inside the field value. Default: `true`.

The shortcode uses the same parameters as [rwmb_the_value()](/functions/rwmb-the-value/).

:::tip Other attributes

You can pass extra attributes. Meta Box forwards them to [rwmb_the_value()](/functions/rwmb-the-value/) as the second argument.

:::

## Permission checks

If you set `object_id`, Meta Box checks whether the current user can read that object before it prints the value.

Object type|Rule
---|---
`post`|Allow published posts with no password. Other posts need the `read_post` capability.
`term`|Allow [publicly viewable](https://developer.wordpress.org/reference/functions/is_term_publicly_viewable/) terms. Other terms need `edit_term`.
`comment`|Allow approved comments when the parent post is readable. Other comments need `edit_comment`.
`user`|Need `edit_user` for that user.
`setting` / `network_setting`|Need the settings page capability. Meta Box matches the page by `option_name`, or by `id` when `option_name` is empty. Default capability: `edit_theme_options`.
`model`|Need the model capability. Meta Box resolves the model from the `model` or `type` attribute, or from the field registry. Default capability: `edit_posts`.
Other values|Denied.

Notes:

- If `object_type` is not `post`, pass `object_id`. If you omit `object_id`, Meta Box sets `object_type` to `post` and uses the current post.
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

Custom table field:

```php
[rwmb_meta id="area" object_id="15" storage_type="custom_table" table="properties"]
```

## Bypass permission checks

Use `rwmb_meta_shortcode_permission` to change or bypass the object check:

```php
// Allow every object type. Use only when you trust the content authors.
add_filter( 'rwmb_meta_shortcode_permission', '__return_true' );

// Allow one settings page for everyone.
add_filter( 'rwmb_meta_shortcode_permission', function ( $allowed, $object_type, $object_id, $atts, $field_id ) {
	if ( 'setting' === $object_type && 'site_option' === $object_id ) {
		return true;
	}
	return $allowed;
}, 10, 5 );

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
