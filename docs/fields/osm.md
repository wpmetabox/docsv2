---
title: Open Street Map
---

import Screenshots from '@site/src/components/Screenshots';

The **Open Street Map (OSM) field** lets you select and save a location using [OpenStreetMap](https://openstreetmap.org).

It's very similar to the [Google Maps field](/fields/map/), but it provides a free alternative since [Google now requires billing details](https://metabox.io/meta-box-weekly-updates-july-2018/) (such as a credit card) to use their maps.

This field includes all the features of the Google Maps field. It comes with an address text field that supports **autocomplete**, powered by the [Nominatim](https://wiki.openstreetmap.org/wiki/Nominatim) geocoding service.

You can choose a location in two ways:
- Type in an address and select from the autocomplete suggestions.
- Click directly on the map or drag the marker - the field will automatically save the new coordinates.

The map itself is rendered using the [Leaflet](https://leafletjs.com) library.

## Screenshots

<Screenshots name="osm" col1={[
    ['https://imgur.elightup.com/jJXmxrw.png', 'The Open Street Map field interface']
]} />

## Settings

In addition to the [common field settings](/field-settings/), this field has the following options:

Name | Key | Description
--- | --- | ---
Default location | `std` | The map's default location when it loads. Format: `'53.346881,-6.258860'` (latitude, longitude). If not set, the map will default to Dublin, Ireland.
Address field | `address_field` | The ID of the address field. For multiple fields, separate IDs with commas. **Required.**
Language | `language` | Set the language for more accurate autocomplete results. See the [list of language codes](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). Optional.
Region | `region` | Restrict search results to one or more countries. Accepts [ISO 3166-1 alpha-2 codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Optional.
Marker draggable | `marker_draggable` | Determines whether the marker can be moved. Boolean, default is `true`. When set to `false`, the marker cannot be dragged - the location can only be set by searching for an address.

:::caution Address field required
You must create a [text field](/fields/text/) for the address input, and pass its ID to the map's **Address field** setting.
:::

The `address_field` can also be a list of multiple field IDs, separated by commas (e.g. `street,city,state`).
In this case:
- You can use both text and select fields.
- Autocomplete will not work. Instead, the plugin will combine the values of these fields, search for the full address, and update the map whenever any of those fields changes.

Example field setup in code:

```php
// Address field
[
    'id'   => 'my_address',
    'name' => 'Address',
    'type' => 'text',
],
// Map field
[
    'id'            => 'map',
    'name'          => 'Location',
    'type'          => 'osm',
    'std'           => '-6.233406,-35.049906,15',
    'address_field' => 'my_address',
],
```

## Data

The field saves the location as:

```
latitude,longitude,zoom
```

Example: `53.346881,-6.258860,14`

## Template usage

### Displaying the map

To show the map on the frontend, use [`rwmb_the_value()`](/functions/rwmb-the-value/) with extra parameters:

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

Available parameters:

Name | Description
---|---
`width` | Map width. Default: `640px`. Accepts `%` or `px`.
`height` | Map height. Default: `480px`. Accepts `%` or `px`.
`zoom` | Map zoom level. Default: value set in the admin, or `14` if not set.
`marker` | Show marker? `true` (default) or `false`.
`marker_icon` | URL to a custom marker icon. Optional.
`marker_title` | Marker tooltip (shown on hover).
`info_window` | Content shown when clicking the marker. HTML allowed. Avoid using quotes inside to prevent JavaScript issues.
`js_options` | Pass additional map options directly to the Leaflet library. See the [Leaflet map options](https://leafletjs.com/reference-1.3.2.html#map-option).

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

### Getting the raw field value

If you don't need to render the map but just want the coordinates:

```php
$location = rwmb_get_value( $field_id );
echo $location['latitude'];
echo $location['longitude'];
echo $location['zoom'];
```

See more about [`rwmb_get_value()`](/functions/rwmb-get-value/).

### Displaying a map inside a group

If the map is part of a group field, the helper functions above won't work. Instead, use the built-in `RWMB_OSM_Field::render_map()` helper:

```php
$args = [
    'width'  => '640px',
    'height' => '480px',
];
$group_values = rwmb_meta( 'group_id' );
// If the group is cloneable
foreach ( $group_values as $group_value ) {
    echo RWMB_OSM_Field::render_map( $group_value['map_id'], $args );
}
```

The helper function accepts:

Name | Description
--- | ---
`$location` | Map location in the format `latitude,longitude[,zoom]` (zoom is optional). Same as the map field value.
`$args` | Additional display options. Same as in `rwmb_the_value()`.
