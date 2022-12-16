---
title: Creating add-to-calendar buttons
---

Creating an **"Add to Calendar" button for events, sales promotions, or coming soon pages** with countdown timers can help users quickly add the event to their calendars via the `.ics` file. Thanks to that, readers can remember or create reminders to attend your event. Let’s find out how to make it in this article!

Here is an example which we’ll do for this practice:

![Example of add-to-calendar buttons](https://i.imgur.com/mO38pFO.png)

## Preparation

Here are the tools we’ll use in this practice:

* [Meta Box](https://metabox.io/)
* [MB Custom Post Type & Taxonomies](https://wordpress.org/plugins/mb-custom-post-type/): to create custom post types for events;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): It provides UI to create custom fields;

## 1. Creating a new post type

Go to **Meta Box > Post Types > New Post Type** to create a post type for the events.

![Create a new post type](https://i.imgur.com/8iPsfQD.png)

After publishing the post type, you’ll see a new menu.

![The newly created post type appears in the menu dashboard](https://i.imgur.com/X6FQ62u.png)

## 2. Creating custom fields

We'll create some fields to save time and other event information.

Go to **Meta Box > Custom Fields > Add New**. Here are the custom fields that I created for example:

![Create custom fields](https://i.imgur.com/yq1dTER.png)

After finishing creating the fields, move to the **Settings** tab. In the **Location** section, select **Post Types** as **Events** to apply these fields to the post type.

![set Location for the custom fields as post type](https://i.imgur.com/nO6uBiw.png)

Back to the post editor, you will see all the created custom fields. Let’s fill in the information into them.

![Newly created custom fields in the post editor](https://i.imgur.com/UUyhiQq.png)

## 3. Creating the add-to-calendar button

First, I create a file named `single-event.php` in the theme folder (I’m using the [Justread](https://gretathemes.com/wordpress-themes/justread/) theme) to edit the template of the singular **Event** page.

After that, include the **Add to Calendar** button on this page by adding the following code to the `single-event.php` file:

```php
<?php
$start_date = rwmb_get_value( start_date, array( 'format' => 'Y-m-d g:iA' ) );
$start_date = wp_date( 'Ymd\THis', $start_date );
$end_date   = rwmb_get_value( end_date, array( 'format' => 'Y-m-d g:iA' ) );
$end_date   = wp_date( 'Ymd\THis', $end_date );
?>

<form method="post" action="?ics=true">
        <input type="hidden" name="start_date" value="<?php echo $start_date; ?>">
        <input type="hidden" name="end_date" value="<?php echo $end_date; ?>">
        <input type="hidden" name="location" value="<?php echo rwmb_meta( 'event_location' ); ?>">
        <input type="hidden" name="summary" value="<?php the_title(); ?>">
        <input type="submit" value="Add to Calendar">
</form>
```

**Note**:

* `start_date`, `end_date`, and `event_location` are the IDs of the three fields that I’ve created in step 1.
* `name="start_date"`, `name="end_date"`, `name="location"`, `name="summary"` are the names of the data variables that will be used in the above code.
* The above code is a form with the POST method to pass the `start_date`, `end_date`, `location`, and `summary data`.

Next, we use the `template_redirect` hook to download the ics file (when users click the Add to Calendar button) with the start_date, end_date, location, and summary data received above.

This hook runs before we determine which template is loaded. In other words, it reloads the page to show a new window for users to download the **ics** file.

All you need to do now is add the following code to the `functions.php` file:

```php
function justread_ics_download() {
        if ( is_singular( ‘event’ ) && isset( $_GET['ics'] ) ) {
                include get_stylesheet_directory() . '/inc/ICS.php';
                header('Content-Type: text/calendar; charset=utf-8');
                header('Content-Disposition: attachment; filename=invite.ics');

                $ics = new ICS(array(
                        'location' => $_POST['location'],
                        'dtstart' => $_POST[start_date],
                        'dtend' => $_POST[end_date],
                        'summary' => $_POST['summary'],
                ));

                echo $ics->to_string();
                exit();
        }
}
add_action( 'template_redirect', 'justread_ics_download' );
```

**Explanation**:

The ICS class is used to export the **ics** file when users click the **Add to Calendar** button and download this file. This class is declared in the `ICS.php` file. You can refer to this `ICS.php` file's content here.

When going to the event's single page, you will see the result:

![The result](https://i.imgur.com/vII8Oua.gif)

When clicking the **Add to Calendar** button, the users will immediately download an **ics** file and then open it with an application on their computer.

![clicking the Add to Calendar button](https://i.imgur.com/xYEYGiw.png)

![open it with an application on their computer](https://i.imgur.com/mO38pFO.png)

