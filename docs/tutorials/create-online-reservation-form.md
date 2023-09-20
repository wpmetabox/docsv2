---
title: Creating online reservation form for restaurants
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

It's common for restaurants to offer online booking services on their websites. In this tutorial, I'll show you how to create an online reservation form. This form allows clients to provide essential information for their reservation, select their desired services or items, and even calculate the total amount right within the form.

![An online reservation form](https://i.imgur.com/7hHtp32.png)

In this practice, I’ll provide you two methods to create this kind of reservation:

* Method 1: Non-coding. But, use a field named **Math Operation** from a 3rd-party (still based on Meta Box) for automatically calculating the total amount.
* Method 2: Using code to calculate the amount.

## Video versions

For the method 1 without coding, you can look for this video:

<LiteYouTubeEmbed id='1OYjsgpa1g0' />

For the method 2 that use some code, you can look for the following video:

<LiteYouTubeEmbed id='K6YfrQ3ZRLY' />

## Preparation

These are some tools we need for this practice:

First, we should have the [Meta Box framework](https://wordpress.org/plugins/meta-box/). It’s available on [wordpress.org](https://wordpress.org/plugins/meta-box/).

Moreover, we’ll need some advanced features from **Meta Box** extensions, as follows.

* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): creates custom post type for the reservations.
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): has an intuitive UI to create custom fields in the backend to save the reservation information.
* [MB Frontend Submission](https://metabox.io/plugins/mb-frontend-submission/): creates forms for users to submit their orders from the frontend.

## 1. Creating a new custom post type

Go to **Meta Box** > **Post Types** > **New Post Type** to create a new one for the reservation.

![Create a new custom post type for the reservation](https://i.imgur.com/yb4UuGe.png)

## 2. Creating custom fields for the reservation form

Let’s create custom fields to save the reservation information. You can create fields as usual according to your requirements of the booking. Here are some fields I created.

![The created custom fields to save the reservation information](https://i.imgur.com/QPgcxgu.png)

### 2.1 For the typical fields

I set the ID of the **Full Name** field as the post title to automatically save the customer name in the title of the post.

![ Set ID of the Full Name field as the post title](https://i.imgur.com/MQkyOft.png)

Since this field will be displayed on a page on frontend, you may want to style the field. So you can add a **CSS** class for the field. Just go to the **Advanced** tab in the field settings and name a class in this box.

![Add a CSS class for the fielde](https://i.imgur.com/lyESkTd.png)

If you want to show all the information of the user's order in the admin column for better management, simply turn on the option shown in the image below.

![Show all the information of the user's order in the admin column](https://i.imgur.com/xdyA11c.png)

Next, I need a field that allows customers to choose a set lunch, so I choose the **Select** field type.

In the **Choices** section, we usually input the set lunch name only. But, I’ll do a trick. Instead of creating another field for price, I put the price as the value of the set lunch. And the label of each option will be the set lunch’s name.

![Set options with the values for the custom fields of choosing a set lunch](https://i.imgur.com/JZuwsNv.png)

Similar to the **Private Room** field. I also set the value as price.

![Set the value as price for the Private Room field.](https://i.imgur.com/yyMMkl7.png)

### 2.2 For the amount field

As I mentioned before, we have two ways to create this field. The difference is just how you make it to calculate following your own formula.

#### Method 1: Calculate without using code

To make the field calculate following a formula without using any code, you should use a 3rd-party git to have a field type named **Math Operation**.

Without this field, you need to add some code to the theme files to have a field that can automatically calculate based on the values from other fields. But with this field, you should do nothing, just enter the formula, then it will do everything for you.

To have that field, follow [the Github link](https://github.com/kevinlanteri/RWMB_math_operator_Field) and download these 3 files.

![Download these 3 files to install the Math Operation field](https://i.imgur.com/9whvnSC.png)

Then, upload them into the corresponding JS and CSS folders and add the following code to the `functions.php` file to declare them.

```css
function child_theme_scripts() {
    wp_enqueue_style('font-awesome', 'https://cdn.jsdelivr.net/fontawesome/4.7.0/css/font-awesome.min.css', '', '4.7.0');
}
add_action( 'wp_enqueue_scripts', 'child_theme_scripts' );
```

Then when creating custom fields, you will see a new field type named **Math Operation**. Just choose it.

![A new field type named Math Operation.](https://i.imgur.com/ka8ooS8.png)

In this field, there will be 2 special settings like this.

![2 special settings of the Math Operation field](https://i.imgur.com/HzPtGAz.png)

**In there**:

* The first setting is to identify the fields on which the calculation will be made. You should add the ID of all the fields which appear in the below formula.
* The second one is to insert the formula.

That’s done for the **Math Operation** field. Thanks to this field, there is no need to add code anymore. It will work later without any further action.

#### Method 2: Calculate using code

In the case you want to code to add functions to the **Amount** field, just create it in the **Text** field type.

![Choose the Text field type for to the Amount field](https://i.imgur.com/55jSx6w.png)

The value of the **Amount** field will be $0 as default and will not change no matter what you change the information in the fields or not. To figure out the amount then apply the number into this field, we can use some code as follows.

In the `functions.php` file, add this code to **create the formula**.

```css
add_action( 'wp_ajax_total', 'text_domain_load_total_ajax' );
add_action( 'wp_ajax_nopriv_total', 'text_domain_load_total_ajax' );
function text_domain_load_total_ajax() {
    $adults = $_POST['adults'] ?? 1;
    $children = $_POST['children'] ?? 0;
    $set_lunch = $_POST['set_lunch'] ?? 0;
    $private_room = $_POST['private_room'] ?? 0;
    $total = ( $adults * $set_lunch ) + ( $children * $set_lunch /2 ) + $private_room;
    $total = '$' . number_format($total, 2, '.', ',');
    wp_send_json_success( $total );
    die();
}
```
**Explanation**:

* `add_action ()`: is a hook to create an action named total;
* `text_domain_load_total_ajax()`: is the function to load the values of all the variables and then put them into the formula;
* `$adults`, `$children`, `$set_lunch`, `$private_room`: are the variables;
* `$adults = $_POST['adults'] ?? 1`: is to check if the **adults** variable has any value. If it has, the value will be admitted. Otherwise, this variable will be applied to the default value, in this case, it is 1. You can set the default value as you want;
* `wp_send_json_success( $total )`: is to return the value of the total variable in json.

So far, no value has passed to any variable yet. All the variables are 0 or 1 as default value as I set in the above code.

Whenever customers change the options in the fields, the value of the options must be recognized and passed to those variables. To load those values, I need to create a script.js file in the js folder of the theme as follows:

```css
(function($){
    $(document).ready(function(){
        $("#adults, #children, #set_lunch, #private_room").on( 'change', function(){
            var adults = $('#adults').val();
            var children = $('#children').val();
            var set_lunch = $('#set_lunch').val();
            var private_room = $('#private_room').val();
            console.log( set_lunch );
            $.ajax( {
                type: "post",
                dataType: "json",
                url : ReservationParams.ajaxURL,
                data: {
                    action: 'total',
                    adults: adults,
                    children: children,
                    set_lunch: set_lunch,
                    private_room: private_room
                },
                success: function(response) {
                    //console.log(response);
                    $('#amount').val(response.data);
                },
                error: function( jqXHR, textStatus, errorThrown ){
                    console.log( 'The following error occurred: ' + textStatus, errorThrown );
                }
            } )
        } )
    })
})(jQuery)
```
![Create a JS file to load the value and send it to the function](https://i.imgur.com/Dl9I26A.png)

You can see that I used ajax here to load the values. In there:

* `#adults`, `#children`, `#set_lunch`, `#private_room`: are the IDs of the custom fields in the reservation form;
* `adults`, `children`, `set_lunch`, `private_room`: are the variables using for the above formula, I’m assigning the values of the fields with the corresponding IDs to them;
* `action: 'total'`: The values are being sent by ajax to this action with the url is `url` : `ReservationParams.ajaxURL`;
* `success: function(response)`: if the request succeeds, this will call the value returned by the functions file then print to the custom field which has the ID as amount.

Now, add this code to the `functions.php`, inside the `child_theme_scripts()` function we have added before to enqueue both the `script.js` file and the `url` of ajax.

```css
wp_enqueue_script( 'theme-script', get_stylesheet_directory_uri() . '/js/script.js', array( 'jquery' ), '1.0', true );
wp_localize_script( 'theme-script', 'ReservationParams', array( 'ajaxURL' => admin_url( 'admin-ajax.php' ) ) );
```
![Enqueue the JS file and URL of the AJAX in the functions file to enable them](https://i.imgur.com/1HrstKS.png)

**Note**:

* `'theme-script'`: this name is the one you created, please pay attention that you must set it be the same in both lines;
* `'ReservationParams'` and `'ajaxURL'` are from url : `ReservationParams'.ajaxURL`, you can change them, but do it at both.

That’s all for the fields.

### 2.3 Field Group Settings

After creating all the fields, go to the **Settings** tab > choose **Location** as **Post type**, and select the **Reservation** to apply these fields to it.

![Set location to apply the custom fields](https://i.imgur.com/hJ2Nkuh.png)

Once you have published the field group, its **ID** will be generated automatically. Just copy it, since we’ll use it in the next step.

![The ID of the field group](https://i.imgur.com/rLEOCbx.png)

## 3. Creating the reservation page

I’ll use a page with the pre-built template, which is quite simple to make a demo for this practice. You can see in the demo below, we have the booking form. It’s built from the custom fields which we have just created.

![The booking form](https://i.imgur.com/LnQpJt5.png)

### 3.1 Creating a new page

Go to **Pages**, create a new one and choose a template for the page.

![Choose a template for the page](https://i.imgur.com/zC5nNEm.png)

### 3.2 Displaying form on the page

Look for the **Submission Form** block provided by **MB Frontend Submission** to have the booking form.

![The Submission Form block provided by MB Frontend Submission to have the booking form](https://i.imgur.com/lcCaMXt.png)

Once you select this block, it’ll display the **Title** and **Content** fields by default.

![The default field](https://i.imgur.com/cF29S8F.png)

If you want to display the custom fields for the reservation form, add the **ID** of the created field group in the box. Then, you will see all the fields displayed.

![Add the ID of the created field group](https://i.imgur.com/zftwRxy.png)

Select **Post Type** as **Reservation** to stipulate that when the user enters data into the form, that data will be saved in the post of the **Reservation** post type.

![Select Post Type as Reservation to stipulate that when the user enters data into the form](https://i.imgur.com/uVi8DkC.png)

In this practice, I’ll not use the **Title** and **Content** fields, so hide them by removing the options in the **Post Fields**  section and deleting their labels.

![Delete some fields](https://i.imgur.com/9PxTRHB.png)

You also can change the label of the **Submit** button.

![Change the label of the Submit button](https://i.imgur.com/6SyAFKG.png)

Go to the page on frontend, you will see fields displayed like this.

![The fields displayed on frontend](https://i.imgur.com/yxTPoAn.png)

### 3.3 Styling the form

I will use CSS to style the form.

![Use CSS to style the form](https://i.imgur.com/xwGXiBO.png)

Pay attention that I added a class for each field when creating them. So, just use those classes. I put this code on [Github](https://github.com/wpmetabox/tutorials/tree/master/create-online-reservation-form-for-restaurants) so you can refer to it.

### 3.4 Testing the form

Let’s have a test.

![Test the reservation form](https://i.imgur.com/oVy0SVK.gif)

You can see in the gif that the **Amount** field automatically changes the number whenever you change the option on the previous fields. This field is working well no matter what method you use to create the formula.

Then, go to the backend to see if the order is saved or not. You can see everything has been stored in a post already.

![The order is saved in backend](https://i.imgur.com/1gwdZnc.png)
