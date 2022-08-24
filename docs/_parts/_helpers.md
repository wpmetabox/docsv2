These are some helper functions that you can use to retrieve more info:

Field type|Helper function(s)
---|---
`image`, `image_advanced`, `image_upload`, `single_image`|[`wp_get_attachment_image_src()`](https://developer.wordpress.org/reference/functions/wp_get_attachment_image_src/)
-|[`wp_get_attachment_image_url()`](https://developer.wordpress.org/reference/functions/wp_get_attachment_image_url/)
-|`RWMB_Image_Field::file_info( $image_id, $args );` (where `$args` is an array and accepts only `size` attribute)
`file`, `file_advanced`, `file_upload`|[`get_attached_file()`](https://developer.wordpress.org/reference/functions/get_attached_file/)
-|`RWMB_File_Field::file_info( $image_id );`
`oembed`|`RWMB_OEmbed_Field::get_embed( $url );`
`taxonomy`, `taxonomy_advanced`|[`get_term()`](https://developer.wordpress.org/reference/functions/get_term/)
`user`|[`get_userdata()`](https://developer.wordpress.org/reference/functions/get_userdata/)
`post`|[`get_post()`](https://developer.wordpress.org/reference/functions/get_post/)
`wysiwyg`|[`wpautop()`](https://developer.wordpress.org/reference/functions/wpautop/)

Read more on [how field values are saved into the database](/database/).