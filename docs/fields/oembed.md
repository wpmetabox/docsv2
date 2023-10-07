---
title: oEmbed
---

import Screenshots from '@site/src/components/Screenshots';

The oEmbed field creates a simple text input for entering a media URL. This field offers a live preview of the media content. It supports [many media websites](https://codex.wordpress.org/Embeds).

## Screenshots

<Screenshots name="oEmbed" col1={[
    ['https://i.imgur.com/TjOrOMM.png', 'The oEmbed field interface']
]} />

## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings, the keys are for use with code:

Name | Key | Description
--- | --- | ---
Size of the input box | `size` | Size of the input box. Without this setting, the input box is full-width
Not available text | `not_available_string` | The text message is displayed to users when the embed media is not available. Accepts HTML.

This is a sample field settings array when creating this field with code:

```php
[
    'id'    => 'oembed',
    'name'  => 'oEmbed(s)',
    'type'  => 'oembed',
],
```

## Data

This field saves the media URL to the database.

## Template usage

**Displaying the embedded media:**

```php
<h3>Youtube video</h3>
<?php rwmb_the_value( 'my_field_id' ) ?>
```

**Getting the URL:**

```php
$url = rwmb_get_value( 'my_field_id' );
echo $url;
```

## Filters

### `rwmb_oembed_not_available_string`

To change the message for all oembed field when no embed is available:

```php
add_filter( 'rwmb_oembed_not_available_string', function( $message ) {
    $message = 'Sorry, what you are looking here is not available.';
    return $message;
} );
```

You also can hide the message with CSS on the front end by putting this code into your theme or in *Customize > Additional CSS*:

```css
.rwmb-oembed-not-available {
    display: none;
}
```
