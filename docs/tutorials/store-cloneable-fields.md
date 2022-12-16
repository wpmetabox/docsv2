---
title: Storing cloneable fields in multiple rows in the database
---

Normally, the data saved in a custom field is stored in one row only in the database, even when it is a cloneable/repeater field. To convert its data to store in multiple rows, let’s follow this tutorial.

## Preparation

You should backup your database before running the code as this tutorial.

If you have a staging website (or a copy of your website on your local host), test the code on that first.

Assuming you have a **cloneable custom field** named Start Date with the ID `start_date`, which is created for a custom post type name Event (slug is *event*).

![Assume you have a cloneable custom field](https://i.imgur.com/L0umgvo.png)

This field is set to be cloneable, so that you can save more than one date for the event. The value of this field will be save in the database in one row like this:

`a:2:{i:0;s:10:"2019-05-01";i:1;s:10:"2019-04-30";} (['2019-05-01', '2019-04-30'])`

![Choose cloneable option](https://i.imgur.com/8kvsdui.png)

![Insert the text](https://i.imgur.com/ozwThci.png)

We need to convert that string back to an array of two elements and store them in two rows in the database. And we need to loop through all the events and process them all.

## Converting the upcoming data

In the theme file folder, I create a new file named `convert.php` with the code inside as below:

```php
<?php
function prefix_convert( $field_id ) {
 $query = new WP_Query( [
 'post_type' => 'event',
 'posts_per_page' => -1,
 ] );
 if ( ! $query->have_posts() ) {
 return;
 }
 while ( $query->have_posts() ) {
 $query->the_post();
 $values = rwmb_meta( $field_id );
 if ( ! is_array( $values ) || empty( $values ) ) {
 continue;
 }
 delete_post_meta( get_the_ID(), $field_id );
 foreach ( $values as $value ) {
 add_post_meta( get_the_ID(), $field_id, $value );
 }
 }
 wp_reset_postdata();
}

add_action( 'init', function() {
 if ( ! isset( $_GET['unique_key'] ) ) {
 return;
 }
 $field_id = 'start_date';
 prefix_convert( $field_id );
} );
```

The main code is in the `prefix_convert` function. Its jobs are:

1. Query all events (a custom post type '`event`').
2. For each event, get the value of the cloneable field, which should be an array.
3. Remove the custom field from the database.
4. Loop through the value array of the field and insert a new row into the meta table.

To run this function, I created a simple trigger (the code below the `prefix_convert` function). That code runs in the init hook. It checks for a secret key in the URL: '`unique_key`' (you should change it, so you're the only person who knows it) and performs the conversion task.

Just include it in your theme's `functions.php` file:

include `convert.php`;

## Converting the existing data

To convert the old values, access your site via URL: domain.com/?unique_key.

Then everything will be done automatically.

![Everything will be done automatically](https://i.imgur.com/CahvgFU.png)

But, that’s not all! There is an important action in the rest.

**Important thing**:

* After running the code, remove the include statement in your `functions.php` file. This code should be run only once.
