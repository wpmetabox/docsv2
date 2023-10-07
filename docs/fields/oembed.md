---
title: oEmbed
---

import Screenshots from '@site/src/components/Screenshots';

The oEmbed field creates a simple text input for entering a media URL. This field offers a live preview of the media content such as videos, audios, images, tweets, polls, podcasts, etc. from [many 3rd-party services](https://codex.wordpress.org/Embeds).

It helps to show the live preview below the field when input data, and also display the media’s preview on frontend much easier in most cases.

## Screenshots

<Screenshots name="oEmbed" col1={[
    ['https://i.imgur.com/TjOrOMM.png', 'The oEmbed field interface']
]} />

This is an easy way to add videos from [Youtube](http://www.youtube.com/), [Vimeo](http://vimeo.com/), or [Tiktok](https://www.tiktok.com/en), musics from [Spotify](http://www.spotify.com/) or [SoundCloud](http://soundcloud.com/), presentation slideshows from [SlideShare](http://www.slideshare.net/), and so much other content from third-party services into your WordPress site.

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

This field **saves the URL** of the media (video, music, slideshow, podcast, etc.) to the database.

## Template usage

**Displaying the embedded media**:

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

To change the message for all oEmbed field when no embed is available, use this filters:

### `rwmb_oembed_not_available_string`

Follow this template:

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
