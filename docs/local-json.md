---
title: Local JSON
---

Beside registering custom fields with PHP, you can also register custom fields with JSON. This way is more convenient and easier to manage the fields since you can put them in a separate file, use version control, leverage caching, and better code editor support with JSON schema.

This feature is available in the [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/) extension.

## How it works

To use local JSON to register custom fields, you need to create a new folder called `mb-json` field in your theme with write permission (`755`).
After creating the folder, you can put the JSON files in that folder. Meta Box now will automatically load the JSON files and register the fields, no more database queries.

## Syncing changes

The Meta Box Builder plugin will automatically discover the JSON files in the `mb-json` folder and display them in the **Sync available** tab, showing the status of the JSON files. You can also review the changes by clicking on the **Review** button.

![Sync available](https://imgur.com/jLpE9Wc.png)

### Syncing JSON to the database

When you make changes to the `modified` attribute of the JSON files, there will be a Sync button in the Meta Box Builder page. Clicking on that button will sync the changes from json file to the database.

![Sync changes](https://i.imgur.com/QjJrTW9.png)

You can review the changes before syncing by clicking on the **Review** button.

![Review changes](https://imgur.com/SmYRkAF.png)

### Syncing database to JSON

You can save changes to the JSON file just by saving the field group in the Meta Box Builder. The JSON file will be updated automatically. 
Please note that deleting a field group in the Meta Box Builder will also delete the JSON file.

## JSON schema

We also support JSON schema so you can take advantage of the code editor's auto-completion feature. Here is the schema URL:

```json
https://schemas.metabox.io/field-group.json
```

A field group JSON file should look like this:

```json
{
  "$schema": "https://schemas.metabox.io/field-group.json",
  "title": "Event details",
  "post_types": "event",
  "fields": [
    {
      "name": "Date and time",
      "id": "datetime",
      "type": "datetime"
    },
    {
      "name": "Location",
      "id": "location",
      "type": "text"
    },
    {
      "name": "Map",
      "id": "map",
      "type": "osm",
      "address_field": "location"
    }
  ],
  "modified": 1739955432
}
```


## Adding custom folders

By default, the plugin will look for the JSON files in the `mb-json` folder in the active theme. You can add custom folders to load JSON files by using the `mb_json_paths` filter. Here is an example:

```php
add_filter( 'mb_json_paths', function( $paths ) {
    $paths[] = '/path/to/your/folder';
    
    return $paths;
} );
```

## Security

It's a good practice to hide the JSON files from the public. The easiest way to do that is adding `index.php` file to the folder. This way, when people try to access the folder, they'll see a blank page.

```php
<?php
// Silence is golden.
```
