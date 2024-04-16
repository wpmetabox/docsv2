---
title: Open Street Map
---

import Screenshots from '@site/src/components/Screenshots';

This field creates a [Open Street Map](https://openstreetmap.org) where you can select a location. This field is very similar to the [Google Map](/fields/map/) field and provides an alternative solution for displaying maps, since [Google requires developers to enter credit card ](https://metabox.io/meta-box-weekly-updates-july-2018/) details.

This field supports all features that the Google Maps field has. It comes along with a text field for address input, which has the autocomplete feature. The data for address autocomplete is gotten from [Nominatum](https://wiki.openstreetmap.org/wiki/Nominatim) geocoding service.

You also can pick a location by clicking on the map or dragging and dropping the marker. When you do that, the coordinates are saved in the field value.

This field uses [Leaflet](https://leafletjs.com) library to render the map.

## Screenshots

<Screenshots name="osm" col1={[
    ['https://i.imgur.com/jJXmxrw.png', 'The Open Street Map field interface']
]} />

## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings, the keys are for use with code:

Name | Key | Description
--- | --- | ---
Default location | `std` | Default location of the map when loaded. Format `'53.346881,-6.258860'` (latitude, longitude). If missing, the field will show Dublin, Ireland.
Address field | `address_field` | The ID of the address field. For multiple address fields, enter field IDs separated by commas. Required.
Language | `language` | Language for more accurate auto-complete results. See [list of language codes](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). Optional.
Region | `region` | Limit search results to a specific country (or a list of countries). Accepts [ISO 3166-1alpha2 code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Optional.

:::caution Address field

You're required to create a [text field](/fields/text/) for entering an address and pass its ID to the map's "Address field".

:::

The address field can be also a list of text input fields' IDs, separated by commas. For example: `street,city,state`. In that case, there's no autocomplete for address. Instead of that, when you click the **Find Address** button (below the map), the field will search for the address combined with the values of those fields and set the location for the map.

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
    'type'          => 'osm',
    'std'           => '-6.233406,-35.049906,15',
    // highlight-next-line
    'address_field' => 'my_address',
],
```

## Data

This field saves the location in the following format `latitude,longitude,zoom`.

## Template usage

### Displaying the map

To display the maps on the frontend, use the [rwmb_the_value()](/functions/rwmb-the-value/) function, but we need to add more parameters:

```php
<h2>Maps</h2>
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
`js_options` | Additional map options. Map options are passed into the Leaflet library. See [here](https://leafletjs.com/reference-1.3.2.html#map-option).

The code below shows how to use `js_options` for advanced control how the map is displayed:

```php
$args = [
    'width'      => '640px',
    'height'     => '480px',
    'js_options' => [
        'doubleClickZoom' => false,
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
    'width'  => '640px',
    'height' => '480px',
];
$group_values = rwmb_meta( 'group_id' );
// If group is cloneable
foreach ( $group_values as $group_value ) {
    // highlight-next-line
    echo RWMB_OSM_Field::render_map( $group_value['map_id'], $args );
}
```

The helper function `RWMB_Map_Field::render_map` accepts 2 parameters:

Name|Description
`$location`|The location of the map center / marker, in format `latitude,longitude[,zoom]` (zoom is optional). It's the same format as the map field value.
`$args`|Additional parameters for the map. The same as for helper function `rwmb_the_value` above.
