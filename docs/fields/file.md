---
title: File
---

import File from '../_parts/_file.md';
import CustomUploadFolder from '../_parts/_custom-upload-folder.md';
import Screenshots from '@site/src/components/Screenshots';

The file field creates a simple file upload with default UI like `<input type="file">`. Unlike other media fields, this field doesn't use Media Library UI to upload files.

## Screenshots

<Screenshots
    name="file"
    col1={[
        ['https://i.imgur.com/LIWgUZW.png', 'The file field interface'],
    ]}
/>

## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings, the keys are for use with code:

Name | Key | Description
--- | --- | ---
Max number of files | `max_file_uploads` | Max number of uploaded files. Optional.
Force delete | `force_delete` | Whether or not delete the files from Media Library when deleting them from post meta. `true` or `false` (default). Optional. Note: it might affect other posts if you use the same file for multiple posts.
Custom upload folder | `upload_dir` | Full path to a custom upload folder.
Unique filename callback | `unique_filename_callback` | Custom callback to set the uploaded file name. Works only when uploading to a custom folder.

This is a sample field settings array when creating this field with code:

```php
[
    'id'               => 'file',
    'name'             => 'File',
    'type'             => 'file',
    'force_delete'     => false,
    'max_file_uploads' => 2,
],
```

## Data

This field saves multiple attachment IDs in the database. Each value (attachment ID) is stored in a single row in the database with the same meta key (similar to what `add_post_meta` does with the last parameter `false`).

<CustomUploadFolder />

## Template usage

<File />

## Filters

This field has some filters to change the texts displayed on the screen..

Filter|Default|Description
---|---|---
`rwmb_file_upload_string`|Upload Files|File upload string
`rwmb_file_add_string`|+ Add new file|Add new file string
`rwmb_file_delete_string`|Delete|File delete string
`rwmb_file_edit_string`|Edit|File edit string

All filters above accept 2 parameters:

- `$string`: the string needs to be changed
- `$field`: array of the field settings

The code below changes the "+ Add new file" string:

```php
add_filter( 'rwmb_file_add_string', function () {
    return '+ New File';
} );
```
