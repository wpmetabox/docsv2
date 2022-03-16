---
title: File Upload
---

import File from '../_parts/_file.md';

## Overview

The file upload field displays an inline upload area that you can drag and drop or select files to upload.

Note that this field doesn't open the Media Library popup for selecting existing files. You can upload new files only.

## Screenshot

![file upload](https://i.imgur.com/yGNNhOg.png)

## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings:

Name | Description
--- | ---
`max_file_uploads` | Max number of uploaded files. Optional.
`force_delete` | Whether or not delete the files from Media Library when deleting them from post meta. `true` or `false` (default). Optional. Note: it might affect other posts if you use same file for multiple posts.
`mime_type` | MIME type of files which we want to show in Media Library. Note: this is a filter for items in Media popup, it doesn't restrict file types when upload.
`max_status` | Display how many files uploaded/remaining. Applied only when `max_file_uploads` is defined. `true` (default) or `false`. Optional.
`max_file_size` | Maximum file size that the user can upload, in bytes. Optionally supports b, kb, mb, gb, tb suffixes. e.g. "10mb" or "1gb".

Note that the `multiple` setting is always set to `true` for this field.

## Sample code

```php
array(
    'id'               => 'file',
    'name'             => 'File upload',
    'type'             => 'file_upload',

    // Delete file from Media Library when remove it from post meta?
    // Note: it might affect other posts if you use same file for multiple posts
    'force_delete'     => false,

    // Maximum file uploads.
    'max_file_uploads' => 2,

    // File types.
    // 'mime_type'        => 'application,audio,video',

    // Do not show how many files uploaded/remaining.
    'max_status'       => false,
),
```

## Data

Similar to file field, this field saves multiple values (attachment IDs) in the database. Each value (attachment ID) is stored in a single row in the database with the same meta key (similar to what `add_post_meta` does with last parameter `false`).

## Template usage

<File />

## Filters

This field has some filters to change the texts displayed on the screen..

Filter|Default|Description
---|---|---
`rwmb_media_add_string`|+ Add Media|Add new file string
`rwmb_media_single_files_string`|file|Singular "file" string
`rwmb_media_multiple_files_string`|files|Plural "files" string
`rwmb_media_remove_string`|Remove|File remove string
`rwmb_media_edit_string`|Edit|File edit string
`rwmb_media_view_string`|View|File view string
`rwmb_media_select_string`|Select Files|Select files string
`rwmb_media_or_string`|or|The string "or" in "Drop files here to upload or Select Files"
`rwmb_media_upload_instructions_string`|Drop files here to upload|The upload instruction string

The code below changes the "+ Add Media" string:

```php
add_filter( 'rwmb_media_add_string', 'prefix_change_add_string' );
function prefix_change_add_string() {
    return '+ New File';
}
```
## Bind events

You can bind various events during uploading through data-uploader. Need to setTimeout the binding code.

Filter|Description
---|---|---
`Init`|Fires when the current uploader has been initialized.
`PostInit`|Fires after the init event incase you need to perform actions there.
`Refresh`|Fires when the silverlight/flash or other shim needs to move.
`Browse`|Fires when browse_button is clicked and browse dialog shows.
`BeforeUpload`|Fires just before a file is uploaded. Can be used to cancel the upload for the specified file by returning false from the handler.
`UploadFile`|Fires when a file is to be uploaded by the runtime.
`UploadProgress`|Fires while a file is being uploaded. Use this event to update the current file upload progress.
`BeforeChunkUpload`|Fires just before a chunk is uploaded. This event enables you to override settings on the uploader instance before the chunk is uploaded.
`ChunkUploaded`|Fires when file chunk is uploaded.
`FileUploaded`|Fires when a file is successfully uploaded.
`UploadComplete`|Fires when all files in a queue are uploaded.
`Error`|Fires when a error occurs.
`Destroy`|Fires when destroy method is called.

## Sample code

```php
jQuery( document ).ready( function( jQuery ){
    setTimeout(function() {
        var myUploader =  jQuery( 'input.rwmb-file_upload.rwmb-media' ).data('uploader');

        myUploader.uploader.bind('FileUploaded', function(up, file, res)
        {
            console.log( 'File Uploaded' );
        });

    }, 1000);

});
```