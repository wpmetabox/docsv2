---
title: Storing cloneable fields in multiple rows in the database
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Normally, the data saved in a custom field is stored in one row only in the database, even when it is a cloneable/repeater field. To convert its data to store in multiple rows, let’s follow this tutorial.

## Video version

<LiteYouTubeEmbed id='1aL_-T7UCtI'/>

## Preparation

Here is the mindset behind this practice:

1. For the **new data**: We’ll use [the "Clone as multiple" feature](https://metabox.io/introducing-clone-as-multiple-feature/) of Meta Box that allows you to store cloneable values in multiple rows in the database. Just turn it on in the field’s settings.
2. For the **existing data** that is not stored in multiple rows: We’ll add some code to the theme’s file to convert data to multiple rows.

Assuming that I have had a custom post type for events.

![Assuming that I have had a custom post type for events](https://imgur.elightup.com/DTKrEWd.png)

And, I also have a field to input the start date. This field is cloneable, so I can add multiple dates to the field.

![A cloneable field to input multiple start dates](https://imgur.elightup.com/xyubfJj.gif)

You can see that the values are stored in the database as a string of data and in a row only on the table.

![The values are stored in the database as a string of data and in a row only on the table.](https://imgur.elightup.com/Vnnj2hj.png)

We will convert this string to an array with two elements and store them in two rows in the database, as shown below.

![We will convert this string to an array with two elements and store them in two rows in the database](https://imgur.elightup.com/39blOUK.png)

Before we go, you should:

* Back-up your database before running the code following this tutorial.
* If you have a staging website or a copy of your website on your local host, test the code on that first.

## Setting the field to store in multiple rows

**Meta Box** provides an option to set the cloneable field to store values in multiple rows.

In the settings of the fields using the UI provided by the [MB Builder](https://docs.metabox.io/extensions/meta-box-builder/) extension, whenever you set the field as **Cloneable**, there will be an extra setting named ‘**Clone as multiple**’ right below the **Cloneable** option.

![The "Clone as multiple" feature of Meta Box allows storing cloneable values in multiple rows in the database](https://imgur.elightup.com/LjhoGyn.png)

Just turn it on.

In the case that you prefer to register the fields using code, add the `'clone_as_multiple' => true,` option to the code like this:

![Add the 'clone_as_multiple' => true, option to the code if you register the fields using code](https://imgur.elightup.com/GA0BEsr.png)

Then, all the data you input to the field after this action will be stored in multiple rows.

Let’s create a new post and add some data to the field to check that! Then, go back to check the database, the new data added to the field is stored in two different rows already. However, the data that I input before the change still is in one row.

![The new data added to the field is stored in two different rows already, but the old data is not.](https://imgur.elightup.com/Di7LgKX.png)

So, the new setting works well on all the new data, but doesn’t affect the old data.

Meanwhile, in the post editor, you will see the old data is displayed wrong and isn't separated into different rows anymore, it’ll be a string of text only.

![The old data is displayed wrong and isn't separated into different rows anymore](https://imgur.elightup.com/hikL8l2.png)

So now, we should convert the old data manually in the next step.

## Converting data to multiple rows

It should be recalled that we do this step only when you have existing data that is not stored in multiple rows. If you don’t have this kind of data, just enable the setting of the field, and then it’ll be done.

To convert the old data to be stored in multiple rows, we should use code.

Go to the theme folder, create a new `.php` file. Then, add these lines of code.

```css
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
?>
```

![Add code to the .php file to do converting](https://imgur.elightup.com/itOoG87.png)

Let’s go through it in detail!

```css
$query = new WP_Query( [
     'post_type' => 'event',
     'posts_per_page' => -1,
     ] );
```

This code is to query all the events in the custom post type with the `event` slug.

```css
if ( ! $query->have_posts() ) {
        return;
}
```

This is to check if there is no post for the event. If not, do not execute the action below, since that no post means no existing data in the field.

```css
while ( $query->have_posts() ) {
```

This is to know that if there is any existing post, the following lines will get the value of the field.

```css
 $query->the_post();
 $values = rwmb_meta( $field_id );
```
Next, here is used to check if the values are in an array or not.

```css
if ( ! is_array( $values ) || empty( $values ) ) {
    continue;
}
```

If yes, it will run following actions.

```css
delete_post_meta( get_the_ID(), $field_id );
foreach ( $values as $value ) {
            add_post_meta( get_the_ID(), $field_id, $value );
 ```

**In there**:

* `delete_post_meta( get_the_ID(), $field_id );`: to remove the custom field from the database.
* `foreach ( $values as $value ) {`: is a loop to list each value one by one.
* `add_post_meta( get_the_ID(), $field_id, $value );`: to insert new single rows into the meta table. The data added to the table will have the meta key as the field ID (`$field_id`) , and the meta value (`$value`) as a single value that is saved in the field.

The last one is to set a secret key (unique_key) in the URL. You can set it on your own. This means that all the actions in this function run only when the secret key is run.

```css

if ( ! isset( $_GET['unique_key'] ) ) {
        return;
     }
```
All the code is updated on [GitHub](https://github.com/wpmetabox/tutorials/blob/tutorials/storing-cloneable-fields-in-multiple-rows-in-the-database/convert.php), so you can refer to it.

Now, move to the `functions.php` file, add the .php file that we’ve just created.

```css
include 'convert.php';
```

![Add the php file to the functions.php file](https://imgur.elightup.com/aNYcBpZ.png)

Currently, the data has not been converted yet since we haven’t run the secret key..

![The data has not been converted yet.](https://imgur.elightup.com/TtYLp3j.png)

So, you have to access the URL in this form: **domain.com/?unique_key**. This action helps to run the secret key, then the code in the .php file will run to convert the data.

Go back to the database once again to check if the data is converted or not. Now, you can see that the old data also is in two rows instead of one row as before.

![The old data also is in two rows instead of one row](https://imgur.elightup.com/3KeB3DT.png)

Everything has been done automatically.

Let’s check whether the data also displays in the right format or not in the post editor!

![The data also displays in the right format in the post editor](https://imgur.elightup.com/QXdTp2O.png)

They display in the right way already.

## Stopping conversion

When the data of the cloneable field is in multiple rows already, there is no need to run the converting action anymore. It should be run only once.

To avoid it running again, we should go back to the `functions.`php file, and remove the line as shown in the image below.

![To avoid it running again, remove this line in the functions.php file](https://imgur.elightup.com/iJWh9gk.png)

That’s all!
