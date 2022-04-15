---
title: Google Maps
---

import Screenshots from '@site/src/components/Screenshots';

This field creates a Google Maps where you can select a location. It requires a text field for address input, which has the autocomplete feature. The data for address autocomplete is gotten from Google Maps Geocode service.

You also can pick a location by clicking on the map or dragging and dropping the marker. When you do that, the coordinates are saved in the field value.

## Screenshots

<Screenshots name="map" col1={[
    ['https://i.imgur.com/zyKqRTD.png', 'The Google Maps field interface']
]} />

## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings, the keys are for use with code:

Name | Key | Description
--- | --- | ---
Google Maps API key | `api_key` | Google Maps API key. [Get here](https://developers.google.com/maps/documentation/javascript/get-api-key). Required.
Default location | `std` | Default location of the map when loaded. Format `'53.346881,-6.258860'` (latitude, longitude). If missing, the field will show Dublin, Ireland.
Address field | `address_field` | The ID of the address field. For multiple address fields, enter field IDs separated by commas. Required.
Language | `language` | Google Maps language. See [list of language code](https://developers.google.com/maps/faq#languagesupport).
Region | `region` | The region code, specified as a [country code top-level domain](https://en.wikipedia.org/wiki/Country_code_top-level_domain). This parameter returns autocompleted address results influenced by the region (typically the country) from the address field. [See here for more details](https://developers.google.com/maps/documentation/geocoding/intro#RegionCodes).

:::caution Address field

You're required to create a [text field](/fields/text/) for entering an address and pass its ID to the map's "Address field".

:::

The address field can be also a list of text input fields' IDs, separated by commas. For example: `street,city,state`. In that case, there's no autocomplete for address. Instead of that, when you click the **Find Address** button (below the map), the field will search for the address combined with the values of those fields and set the location for the map.

:::caution

Make sure you enabled the **Geocoding API** to make the autocomplete feature work!

:::

This is a sample field settings array when creating this field with code:

```php
// Address field.
[
    // highlight-next-line
    'id'   => 'my_address',
    'name' => 'Address',
    'type' => 'text',
],
// Map field.
[
    'id'            => 'map',
    'name'          => 'Location',
    'type'          => 'map',
    'std'           => '-6.233406,-35.049906,15',
    // highlight-next-line
    'address_field' => 'my_address',
    'api_key'       => 'XXXXXXXXX',
],
```

## Data

This field saves the location in the following format `latitude,longitude,zoom`.

## Template usage

### Displaying maps

To display the Google Maps on the frontend, use the [rwmb_the_value()](/functions/rwmb-the-value/) function, but we need to add more parameters:

```php
<h2>Google Maps</h2>
<?php
$args = [
    'width'        => '640px',
    'height'       => '480px',
    'zoom'         => 14,
    'marker'       => true,
    'marker_icon'  => 'https://url_to_icon.png',
    'marker_title' => 'Click me',
    'info_window'  => '<h3>Title</h3><p>Content</p>.',
];
rwmb_the_value( 'my_field_id', $args );
?>
```

Parameter | Description
---|---
`width` | Map width, default is 640px. Can be '%' or 'px'.
`height` | Map height, default is 480px. Can be '%' or 'px'.
`zoom` | Map zoom, default is the value set in admin, and if it's omitted - 14.
`marker` | Display marker? `true` (default) or `false`.
`marker_icon` | URL to the marker icon. Optional.
`marker_title` | Marker title when hover.
`info_window` | Content for the info window displayed when click the marker. HTML allowed. This content will be passed to JavaScript, so it's better to **avoid quotes**.
`js_options` | Custom JavaScript options for map. [See here](https://developers.google.com/maps/documentation/javascript/reference#MapOptions).

The code below shows how to use `js_options` for advanced control how the map is displayed:

```php
$args = [
    'width'      => '640px',
    'height'     => '480px',
    'js_options' => [
        'mapTypeId'   => 'HYBRID',
        'zoomControl' => false,
    ],
];
rwmb_the_value( 'my_field_id', $args );
```

### Getting field value

In case you don't want to display the map, but get the location's latitude and longitude, use the code below:

```php
$location = rwmb_get_value( $field_id );
echo $location['latitude'];
echo $location['longitude'];
echo $location['zoom'];
```

Read more about [rwmb_get_value()](/functions/rwmb-get-value/).

### Outputting a map in a group

If you have a map inside a group, then the helper functions above don't work. In that case, you can use a helper function in the plugin to show the map.

```php
$args = [
    'width'      => '640px',
    'height'     => '480px',
    'js_options' => [
        'mapTypeId'   => 'HYBRID',
        'zoomControl' => false,
    ],
];
$group_values = rwmb_meta( 'group_id' );
// If group is cloneable
foreach ( $group_values as $group_value ) {
    // highlight-next-line
    echo RWMB_Map_Field::render_map( $group_value['map_id'], $args );
}
```

The helper function `RWMB_Map_Field::render_map` accepts 2 parameters:

Name|Description
---|---
`$location`|The location of the map center / marker, in format `latitude,longitude[,zoom]` (zoom is optional). It's the same format as the map field value.
`$args`|Additional parameters for the map. The same as for helper function `rwmb_the_value` above.

## Filters

### `rwmb_google_maps_url`

This filter allows developers to add more libraries or change the Google Maps URL. It accepts a single parameter - the URL of the Google Maps script and should return an URL.

For example, the code below adds "geometry" library to the Google Maps script:

```php
add_filter( 'rwmb_google_maps_url', function ( $url ) {
    return add_query_arg( 'libraries', 'geometry', $url );
} );
```
