---
title: Building a hotel booking website using Meta Box - P2 - Booking page in backend
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In [the first post of this series](https://docs.metabox.io/tutorials/build-hotel-booking-website-p1/), we created a page showing all the hotel room’s information. It normally has a button or several call-to-action areas to go to the booking page, which allows your customers to make an order. However, cause some businesses have strong direct channels, they want their sales to **make booking orders for their customers** as well. Along with that, to have you imagine how to create a booking page in the frontend later (which is in the 3rd post), I made this post to show you how to create one in the backend. That is for **internal users** only.

![Create a booking page in the back end](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/create-booking-page-in-back-end.gif)

Before going ahead, let’s check some tools we need in this practice.

## Video version

<LiteYouTubeEmbed id='9KsJpQkF4Ko' />

## Preparation

Each booking will be saved as a post in a custom post type. All the related information, such as customer details, check-in/check-out dates, order info, payment, and booking status, will be stored in custom fields. We’ll also generate a unique booking ID automatically for each entry to make it easier to track and manage bookings in the backend.

To build a hotel booking website, we need to use [Meta Box AlO](https://metabox.io/aio/) to have all needed features.

Let’s start now!

## 1. Creating a custom post type

We are going to create a new custom post type called Booking. Each booking made will be saved as a post in this post type.

Head to **Meta Box** > **Post Types**, and create a new one.

![Create post type](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/create-post-type.png)

Each booking automatically uses its ID as the title and doesn’t need content or images. So I disable the default fields for easier control and just turn on the **Revision** option to allow tracking changes.

![Turn on the Revision option to allow tracking changes.](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/revision-option-track-changes.png)

## 2. Creating custom fields for the booking

For the booking page, we need to create many different fields. You should clarify in advance what you want, how users fill in the data, how to show fields and their values, etc. This makes the process much smoother. As my supposition, all the fields I need are as follows:

**Name** | **Field type** | **Function**
--- | --- | ---
Order Number | number | Is an array of numbers and auto-generated whenever the booking is created
Booking Date | date | Date of creating the booking
Person in Charge | user | Choose one from the list of users in WordPress
Customer information | heading | Separate the sections
·  Full Name | text |
·  Mobile | number |
·  Email | email |
·  Address | text |
·  Notes | textarea |
Booking Information | heading | Separate the sections
Booking Details | group | Group of fields regarding the booking room. This group is cloneable for the case that the customer books multiple rooms
· Room | post | Choose one from the list of the rooms
· Price | number |
· Adults | number |
· Children | number |
· Age of Children (1, 2) | number | Each field is for a child. This field is auto-display whenever there is one more child
· Extra Bed | number |
· Check-in Date | date |
· Check-out Date | date |
· Total Nights of Stay | number | Auto-calculated bases on the check-in and check-out date
Total Number of Rooms | number | Auto-calculated bases on the number of the group about the room details
Other Request | textarea |
Payment Information | heading | Separate the sections
·  Total Amount | number | Auto-calculated bases on room details and number of rooms
·  Paid Amount | number | Manual input by sales
·  Unpaid Amount | number | \= Total amount - the paid amount
Booking Status | heading | Separate the sections
·  Booking Status | select | Choose one from the provided statuses
·  Refund (if any) | select | Choose one level (%)  from the provided levels

![All the fields I need](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/all-fields.gif)

In the demo, you can see that the fields are grouped into sections based on their purposes, like** Customer Details**, **Room Booking**, **Payment**, and **Booking Status**. Each section has a clear heading and includes related fields underneath, making the form more organized and easier to follow.

The **Booking Information** section is a cloneable group, useful for booking multiple rooms. We also set conditions for some fields to appear only when needed; for example, the **Price** field shows up after selecting a room, and the **Age of Children** fields only appear if there’s more than one child included in the booking. I’ll go into detail for those with special settings.

Since the process is similar, I’ll walk you through the key fields only.

Now, go to **Meta Box**, **Custom Fields**, to create a new field group.

![Create a new group](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/create-new-group.png)

Then, create fields one by one.

### 2.1 Creating a number field for order number

Begin with a **Number** field for the order number. Since it is auto-generated information that users can not input or edit, tick the **Disabled** and **Read Only** options.

![A Number field for the order number](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/order-number-field.png)

### 2.2 Creating a field for person in charge

For the person in charge of the booking, typically a staff member with a WordPress admin account, we’ll use a **User** field. This allows you to select any user from the admin list.

![The person in charge of the booking field](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/person-in-charge-field.png)

### 2.3 Creating a heading to separate the sections

Now, let’s organize the fields a bit to make things clearer and more well-structured. I use a **Layout** field called **Heading** to separate the sections or groups. This one is for customer information. Then, just add a few simple fields for the customer’s details, like name, phone number, and email.

![Use Heading to separate the sections or groups.](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/heading-separate-section.png)

###  2.4 Creating a group of fields for booking details

In this section, we’ll create a **Group** of fields containing all booking-related information: type of rooms, price, number of adults, number of children, children’s ages, extra bed, check-in and check-out dates. To group them all, we need help from the MB Group extension we mentioned before.

![Create a Group of fields containing all booking-related information.](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/booking-details-group-field.png)

And, enable the cloneable option for the case that the customer books multiple rooms. Then, set C**ustom CSS Class** to track when the user clones the group to book additional rooms. This will help to calculate the total room later.

![Set Custom CSS Class to track when the user clones the group](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/custom-css-track-user-clone-group.png)

Besides that, each sub-field in this group has some remarks:

#### 2.4.1 Fields for the Room Name

For the room, choose the field type as **Post**. In the field settings, choose the corresponding post type. This lets users choose from the list of rooms we created earlier [in the previous part](https://docs.metabox.io/tutorials/build-hotel-booking-website-p1/).

#### 2.4.2 The Children field

As the regulation of each hotel, children may be charged or not depending on their ages. So we will create additional fields to fill in their ages. An additional field for age will appear when you add one more in the **Children** field. I restrict the maximum number of children is two as well.

I use [MB Conditional Logic](https://metabox.io/plugins/meta-box-conditional-logic/) to set a condition for the age fields.

![Restrict the maximum number of children](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/restrict-maximun-number-children.png)

![Set a condition for children field](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/condition-for-children.png)

Like the above image, I set the **Age of Children 1** field displays when **Children >=1**. It is likewise for the **Age of Children 2,** displays when **Children >=2**.

#### 2.4.3 Check-in Date and Check-out Date

We create these fields in the type of normal date with a calendar. In the last post of this series, we will show the vacant room to the calendar in real time.

In the drop-down menu, choose **Date Picker**. This field will show a calendar to choose a date instead of typing.

The following field is for Extra Bed. Very simple with no special settings.

Once all fields are configured, move to the **Settings** tab, set the **Location** as **Post type**, and select **Booking** to apply these fields to it.

![Set location to apply fields to the Booking post type](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/set-location-apply-fields.png)

Now, navigate to your post editor of that post type, and you will see custom fields displayed.

![Created fields in the post editor](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/fields-in-post-editor.png)

Simply input values in these fields. When choosing any room, there will be a price section that appears as we set the condition before, but it does not display the corresponding price. It's the same when you choose the number of children.

![Price section appears](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/price-section.gif)

We have an auto-saved booking with pending status shown as admin columns as well.

![Auto-saved booking](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/auto-saved-booking.png)

When the booking is approved, a booking confirmation number will be issued. Let’s add more functions to the custom fields in the next step.

## 3. Adding extra functions to the custom fields

In this step, we are going to deal with some special fields to automatically calculate or generate values for them. Including:

* Automatically generate booking order number;
* Automatically calculate the total number of booking rooms;
* Automatically display the corresponding price of the booking room;
* Automatically calculate the total nights of stay;
* Automatically calculate the total amount.

We’ll need to code much in this part. Let’s go!

Go to your theme folder, and add some code to the `functions.php` file.

![The functions.php file](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/function.php.jpg)

### 3.1 Automatically generate booking order number

Each post in the **Booking** post type will have neither a title nor a permalink. All of them will be kinds of the Auto Draft after saving.

This is the post before we create a title for it:

![The post before we create a title](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/post-before-create-title.png)

Now, add these codes to the functions.php in the theme folder:

```php
add_action( 'save_post_booking', function ( $post_id ) {
    if ( wp_is_post_revision( $post_id ) || defined( 'DOING_AUTOSAVE' ) ) return;

    $post = get_post( $post_id );
    if ( $post->post_title !== "#$post_id" || $post->post_name !== (string) $post_id ) {
        wp_update_post( [
            'ID'         => $post_id,
            'post_title' => "#$post_id",
            'post_name'  => $post_id,
        ] );
    }

    update_post_meta( $post_id, 'order_number', $post_id );
}, 20 );
```

In there, `update_post_meta($post_id, 'order', $post_id)` helps to set the post ID to be the value of the **Order Number** field.

Save the `functions.php` file, then create a new booking order for a try. You’ll see the title of order as below:

![Post ID is set to be title and permalink of the order
](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/set-title-permalink.jpg)

![The order number is auto-generated by post ID](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/order-number-auto-generated-by-post-ID.jpg)

### 3.2 Automatically calculate the total number of booking rooms

By default, the quantity of rooms will be 1, equivalent to 1 group of booking details for 1 room. Use this following code so that whenever users add or edit a booking, the JS file will be loaded. It helps handle things like disabling booked dates via AJAX.

```php
function add_admin_scripts( $hook ) {
    $screen = get_current_screen();
    if ( $hook == 'post-new.php' || $hook == 'post.php' ) {
        if ( isset( $screen->post_type ) && 'booking' === $screen->post_type ) {
            wp_register_script( 'booking-js', get_stylesheet_directory_uri() . '/js/booking.js' );

            // Passing AJAX Data into JavaScript
            $ajax_data = array(
                'ajax_url' => admin_url( 'admin-ajax.php' ),
                'nonce'    => wp_create_nonce( 'booking_nonce' ),
            );
            wp_localize_script( 'booking-js', 'booking_ajax', $ajax_data );

            // Passing room data into JavaScript
            $rooms     = get_posts( [
                'post_type'      => 'room',
                'posts_per_page' => -1,
            ] );
            $arr_rooms = [];
            foreach ( $rooms as $room ) {
                $disabled_dates = dates_disable( $room->ID );
                $arr_rooms[]    = [
                    'id'             => $room->ID,
                    'price'          => rwmb_get_value( 'price', '', $room->ID ),
                    'disabled_dates' => $disabled_dates,
                ];
            }
            wp_localize_script( 'booking-js', 'rooms_data', $arr_rooms );

            wp_enqueue_script( 'booking-js' );
        }
    }
}
add_action( 'admin_enqueue_scripts', 'add_admin_scripts' );
```

Afterward, create a **JavaScript** file to handle calculations and dynamic interactions. Now add some script into that file.

![The booking.js file](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/booking.js.jpg)

When users add or remove a room group, this script updates the total number of rooms. And also refreshes the price, stay duration, and total cost for all existing room groups.

```js
$('.group-booking .add-clone').on( 'click', function ( e ) {
    setTimeout( function () {
        var rooms = $( '.group-booking .rwmb-group-clone:not(.rwmb-clone-template)' ).length;
        $( '#total_number_of_rooms' ).val( rooms );

        // Update all rooms
        $( ".group-booking .rwmb-field select[name*='[room]']" ).each( function () {
            updateRoom( $( this ) );
        } );
    }, 100 );
} );

// Handle room removal
$( '.group-booking .remove-clone' ).on( 'click', function ( e ) {
    setTimeout( function () {
        var rooms = $( '.group-booking .rwmb-group-clone:not(.rwmb-clone-template)' ).length;
        $( '#total_number_of_rooms' ).val( rooms );
        update_total_payment();
    }, 100 );
} );
```

**In there**:

* `group-booking`: is the Custom CSS Class of the group of fields about booking details;
* `total_number_of_rooms`: is the ID of the Total Number of Room field;
* `add-clone`, `remove-clone`: is the Custom CSS Class of the Add Room or Remove button. To see this information, you may press F12:

![View the custom CSS class of two buttons](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/view-custom-css-class-of-buttons.jpg)

### 3.3 Automatically display the corresponding price of the booking Room

First, we set the Price field to **Read only** with a condition to display is that the value of the Room field is not “**empty**”. It means that when the Room field has any value (not leave it blank), the Price field will appear.

![Calculate the price of room](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/calculate-price-room.gif)

To do it, add the following code to the **JS** file.

```js
$( '.group-booking' ).on( 'change', "select[name*='[room]']", function () {
    updateRoom( $( this ) );
} );

// Initialize event for extra bed
$( '.group-booking' ).on( 'change', "input[name*='[extra_bed]']", function () {
    var roomSelect   = $( this ).closest( '.rwmb-field' ).siblings().find( "select[name*='[room]']" );
    var check_out    = $( this ).closest( '.rwmb-field' ).siblings().find( "input[name*='[check_out]']" );
    var total_nights = $( this ).closest( '.rwmb-field' ).siblings().find( "input[name*='[total_nights_of_stay]']" );
    var total_amount = $( this ).closest( '.rwmb-field' ).siblings().find( "input[name*='[total_amount]']" );

    if ( check_out.val() ) {
        var roomPrice   = roomSelect.data( 'roomPrice' ) || 0;
        var extra       = parseInt( $( this ).val() ) || 0;
        var total       = parseInt( total_nights.val() ) || 0;
        var total_extra = extra * roomPrice;
        var finalAmount = ( roomPrice + total_extra ) * total;

        if ( ! isNaN( finalAmount ) ) {
            total_amount.val( finalAmount );
            update_total_payment();
        }
    }
} );
```

### 3.4 Automatically calculate the total nights of stay

Before calculating the total nights of stay, we should set a condition that the check-out date must be after the check-in date. I use js to set the `minDate` of the check-out date is the check-in date plus one unit.

We can see some specified code for special aims:

```js
check_in.datepicker( 'destroy' ).datepicker( {
    dateFormat: 'yy-mm-dd',
    beforeShowDay: function ( date ) {
        var formattedDate = $.datepicker.formatDate( 'yy-mm-dd', date );
        var isDisabled    = allDisabledDates.includes( formattedDate );
        var today         = new Date();
        today.setHours( 0, 0, 0, 0 );
        var isPastDate    = date < today;

        return [ ! isDisabled && ! isPastDate, '', isDisabled ? 'This date cannot be booked' : isPastDate ? 'Cannot select past dates' : '' ];
    },
    onSelect: function ( date ) {
        var d        = new Date( date );
        var af_date  = d.getDate() + 1;
        var af_month = d.getMonth() + 1;
        var af_year  = d.getFullYear();
        var min_date = af_year + '-' + af_month + '-' + af_date;

        check_out.datepicker( 'option', 'minDate', min_date );
    }
} );
```

When selecting the check-out date, the following code will call the calculate_total_day function to calculate the number of nights stayed and assign it to the total_nights_of_stay field.

```js
check_out.datepicker( 'destroy' ).datepicker( {
    dateFormat: 'yy-mm-dd',
    beforeShowDay: function ( date ) {
        var formattedDate = $.datepicker.formatDate( 'yy-mm-dd', date );
        var isDisabled    = allDisabledDates.includes( formattedDate );
        var today         = new Date();
        today.setHours( 0, 0, 0, 0 );
        var isPastDate    = date < today;

        return [ ! isDisabled && ! isPastDate, '', isDisabled ? 'This date cannot be booked' : isPastDate ? 'Cannot select past dates' : '' ];
    },
    onSelect: function ( date ) {
        var total      = calculate_total_day( check_in.val(), date );
        if ( ! isNaN( total ) ) {
            total_nights.val( total );

            var extra       = parseInt( extra_bed.val() ) || 0;
            var roomPrice   = roomSelect.data( 'roomPrice' ) || 0;
            var total_extra = extra * roomPrice;
            var finalAmount = ( roomPrice + total_extra ) * total;

            if ( ! isNaN( finalAmount ) ) {
                total_amount.val( finalAmount );
                update_total_payment();
            }
        }
    }
} );
```

After that, add these codes to the `booking.js` file to calculate the total nights of stay:

```js
function calculate_total_day( check_in, check_out ) {
    var date1 = new Date( check_in );
    var date2 = new Date( check_out );

    return ( date2.getTime() - date1.getTime() ) / ( 1000 * 3600 * 24 );
}
```

From now on, your **Total Nights of Stay** field’s value is automatically changed when you choose a date:

![Total Nights of Stay](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/total-nights.gif)

### 3.5 Automatically calculate the total amount

The formula to calculate the total amount is as below:

Total Amount = (Price of room 1 + numbers of extra bed in room 1 * price) * nights
                      + (Price of room 2 + numbers of extra bed in room 2 * price) * nights
                      + …
                      + (Price of room N + numbers of extra bed in room N * price) * nights

In there, I set the Extra Bed is a kind of room and has a fixed price. At the same time, I create a field for the Total Amount of Each Room:

Total Amount of Each Room = (Price of room + numbers of extra bed * price) * nights

We just need to summarize all the Total Amount of Each Room to get the Total Amount of the booking.

Add these codes to the booking.js file to calculate the total amount of each room:

```js
function update_total_payment() {
    var total_payment = 0;

    $( ".group-booking .rwmb-field input[name*='[total_amount]']" ).each( function () {
        var value = parseInt( $( this ).val() ) || 0;
        total_payment += value;
    } );

    $( '#total' ).val( total_payment );

    var paid_amount = parseInt( $( '#paid_amount' ).val() ) || 0;
    var unpaid      = total_payment - paid_amount;

    $( '#unpaid_amount' ).val( unpaid );
}

function update_paid_amount() {
    $( '#paid_amount' ).on( 'change', function () {
        $( '#unpaid_amount' ).val( parseInt( $( '#total' ).val() ) - parseInt( $( this ).val() ) );
    } );
}

update_paid_amount();
```

All code is updated on [Github](https://github.com/wpmetabox/tutorials/tree/master/how-to-build-hotel-booking/p2), so you can refer to it:

Therefore, all the fields will automatically run as your logic:

Now let’s book an order on the back end to choose a room and dates to see if the pricing and calculations are working correctly.

![book an order](https://i0.wp.com/images.elightup.com/meta-box/blog/hotel-booking-back-end/create-booking-page-in-back-end.gif)
