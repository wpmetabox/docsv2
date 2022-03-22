---
title: rwmb_enqueue_scripts
---

This action runs after all Meta Box scripts and styles are enqueued to allows developers to enqueue more scripts and styles.

```php
do_action( 'rwmb_enqueue_scripts', $meta_box );
```

It takes 1 parameter: the instance of `RW_Meta_Box` class for the current field group.

## Examples

This code enqueues a CSS file for a specific field group.

```php
add_action( 'rwmb_enqueue_scripts', function( $meta_box ) {
	if ( $meta_box->id === 'event-details' ) {
		wp_enqueue_style( 'event', get_template_directory_uri() . '/css/admin/event.css' );
	}
} );
```
