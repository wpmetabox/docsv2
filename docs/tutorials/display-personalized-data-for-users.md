---
title: Displaying personalized data for users
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Today, we’ll walk you through a useful way of **displaying dynamic, personalized data for users** on your website with Meta Box.

In this tutorial, I’ll take an example of displaying sales representative information of who is responsible for the current user, I mean client, who has logged in their account already. Each client has their own sales representative, so different clients logged in to their account will see different sales information. This can be super useful to help your client reach out to the account manager easier.

![Display dynamic, personalized data for users](https://imgur.elightup.com/QuNJwcG.gif)

In this tutorial, we’ll achieve it with **Meta Box**. In the same way, we can design any kind of personalized content following this way.

## Video version

<LiteYouTubeEmbed id='WNkqYUOSoVw'/>

## Preparation

Each client or customer already has their own account. They can log in and look at personalized content that is designated for each one of them separately. In this case, the information of the sales representative, also known as the account manager, is that kind of designated content.

The sales information will be saved in custom fields and posts of a custom post type. Then, we will set a relationship between sales and client accounts.

So, we need:[Meta Box AIO](https://metabox.io/aio/): to have a framework to create a custom post type, custom fields, relationships, and advanced features from:

* [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/): to display columns in the dashboard for clients and sales representatives, making it easier to manage and view relationships;
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the Sales Reps;
* [MB Relationships](https://metabox.io/plugins/mb-relationships/): to create a relationship between the Sales Reps and the users;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to create custom fields to save the details of the Sales Rep visually. It also provides the UI to create the relationship in an intuitive way;
* [MB Views](https://metabox.io/plugins/mb-views/): to create a view to display dynamic, specific data for users if you don’t want to add code directly to the theme.

Now, let’s go step by step.

## 1. Creating a custom post type

Go to **Meta Box** > **Post Types** to create a new custom post type specifically for the sales representatives. This will help us manage each Sales Rep’s information separately and more effectively within a single post editor.

![Create a new custom post type specifically for the sales representatives](https://imgur.elightup.com/D3tCkUO.png)

After publishing, you’ll see the created custom post type in the admin dashboard.

![The created custom post type in the admin dashboard](https://imgur.elightup.com/gYVqamO.png)

## 2. Creating custom fields for the Sales Reps

Instead of inputting all the information about each sales representative into the post content, we should use custom fields to store them. Then, we can style each one easier.

Now, go to **Meta Box** > **Custom Fields**, and just add fields one by one corresponding to the kind of content.

![Go to Meta Box > Custom Fields, and just add fields.](https://imgur.elightup.com/sIXzNGz.png)

You absolutely can add additional fields for any related details as you want.

Once creating all the fields, move to the **Settings** tab, set the **Location** as **Post type**, and select the **SalesRep** to apply the fields to it.

![Set location to apply the fields to the post type.](https://imgur.elightup.com/6jrZVh4.png)

Now, in any post editor, you will see the custom fields displayed.

![The custom fields displayed in post editor](https://imgur.elightup.com/dQJKB25.png)

Just input content there.

Below are some posts I have created and filled out information about. I mean, each post also is a sales representative. And I want to assign them to clients.

![Some posts of the SalesRep post type](https://imgur.elightup.com/CBCQII2.png)

## 3. Creating the relationship

When a client, also a user, logs in, they can view detailed information about the sales representative assigned to them. As I mentioned earlier, we need to create a connection between the **User** and the **SalesRep** using the relationship feature in Meta Box.

So, go to **Meta Box** > **Relationships** to create the relationships between two of these objects.

![Create the relationships between two of these objects.](https://imgur.elightup.com/GVjW5va.png)

We have the **From** and **To** sections with the same structure of settings. Because Meta Box supports bi-directional relationships, these two sections are just for two separate objects to connect; the order will not matter.

![The From and To sections with the same structure of settings](https://imgur.elightup.com/VyRD9HD.png)

In this case, I set the SalesRep in the **From** section, and the rest is the User.

Starting with the **From** section, set the **Object Type** as **Post** because we're working with the SalesRep post type.

![set the Object Type as Post because we're working with the SalesRep post type](https://imgur.elightup.com/KPwRIrS.png)

In the **Post type** option, choose the post type you want to create a relationship. In this case, SalesRep.

![In the Post type option, choose the post type you want to create a relationship.](https://imgur.elightup.com/nIoMmeT.png)

Pay heed to the **Show as an admin column** box. It’s available when you activate the **MB Admin Columns** extension. When you check this option, there’ll be a column in the dashboard to show which users are related to the post of a SalesRep. This makes it easier to see the connection between each Sales Rep and their assigned users directly from the backend.

![Check the box to have a column in the dashboard to show which users are related to the post of a SalesRep](https://imgur.elightup.com/1I9Ob6k.png)

In the **Field** tab, you can set the label for the relationship section that appears in the post editor.

![Set the label for the relationship section.](https://imgur.elightup.com/Ufu0jSj.png)

Therefore, there will be a box in the right sidebar with the label we named, allowing you to choose which user is related to the current post.

![A box at the right sidebar to choose which user is related to the current post in the SalesRep post type](https://imgur.elightup.com/sHSqDXy.png)

In the **Max items** section, I set the number to 1 so that you can select just one user. However, in a real scenario, you can enter the number you want to adjust the number of users selected.

![Enter the number you want to adjust the number of users selected](https://imgur.elightup.com/EDQ2Mth.png)

Continuing the **To** section in the same way. Set the **Object type** as **User** because it’s time for the User. And other settings are similar to what we did with the **From** section.

![All settings of the to section.](https://imgur.elightup.com/q4lvsNz.png)

That’s all to set the relationship.

After publishing, go to any user profile or a post editor; you can see a corresponding section like this:

![A corresponding section in the user profile or a post editor](https://imgur.elightup.com/O7Z9y6C.png)

You can fill in the information from either the user profile or the post editor. Since the relationship is bidirectional, whichever option you choose to link the SalesRep, the corresponding field will automatically be updated on the other side as well.

As you can see in the below image, the related information is shown as admin columns:

![The related information shown as admin columns](https://imgur.elightup.com/qDzx5ji.png)

## 4.  Displaying Sales Rep information for current user

As mentioned earlier, I’m providing two methods to display the Sales Rep information for the current user, both achieving the same result. Each method involves using code.

I still show both these ways, and then you can experiment yourself to decide which one works best for you.

### 4.1.  Method 1: Using MB Views

Start by navigating to **Meta Box** > **Views**, and create a new view for displaying the Sales Rep information.

![Create a new view for displaying the Sales Rep information.](https://imgur.elightup.com/7QarK38.png)

In the **Template** tab, we can insert some lines of code.

```
{% if mb.is_user_logged_in %}
    {% set salesrep_related = { relationship: { id: 'salesrep-to-user', to: user.ID }, nopaging: true, post_type: 'salesrep' } %}
    {% set salesreps = mb.get_posts(salesrep_related) %}

    {% for salesrep in salesreps %}
    <div class="mb-container">
        <div class="mb-content">
            <div class="mb-your-sale">Your Sales Representative</div>
            <div class="mb-title-sale">{{  salesrep.post_title }}</div>
            <img src="{{ mb.get_the_post_thumbnail_url(salesrep.ID) }}" alt="{{  salesrep.post_title }}" />
            <div class="mb-phone"><b>Phone Number</b>: {{  salesrep.phone }}</div>
            <div class="mb-email"><b>Email</b>: {{  salesrep.email }}</div>
            <div class="mb-experience"><b>Years of experience</b>: {{  salesrep.years_of_experience }}</div>
            <div class="mb-language"><b>Language</b>: {{  salesrep.language.label }}</div>
            <div class="mb-motto"><b>Working Motto</b>: {{  salesrep.working_motto }}</div>
        </div>
    </div>
    {% endfor %}

{% endif %}
```

![In the Template tab, we can insert some lines of code](https://imgur.elightup.com/crgAB49.png)

Let’s go through it in detail!

#### 4.1.1. Checking user login & retrieve Sales Rep data

```
{% if mb.is_user_logged_in %}
```

This is to check whether the current user is logged in or not. If they are, the following code will be executed. It also means that only the one logged in to their account can see the sales representative.

```
{% set salesrep_related = { relationship: { id: 'salesrep-to-user', to: user.ID }, nopaging: true, post_type: 'salesrep' } %}
```

The `salesrep_related` variable is used to query only posts that are input to the relationship that has the ID - `salesrep-to-user`, also for the current user only. These posts absolutely should belong to a specific post type. In this case, salesrep.

```
{% set salesreps = mb.get_posts(salesrep_related) %}
```

This is to get the list of matching posts and save it to the `salesreps` variable.

#### 4.1.2. Displaying Sales Rep information

These lines of code are used to display the Sales Rep’s information.

```
{% for salesrep in salesreps %}
<div class="mb-container">
        <div class="mb-content">
            <div class="mb-your-sale">Your Sales Representative</div>
            <div class="mb-title-sale">{{  salesrep.post_title }}</div>
            <img src="{{ mb.get_the_post_thumbnail_url(salesrep.ID) }}" alt="{{  salesrep.post_title }}" />
            <div class="mb-phone"><b>Phone Number</b>: {{  salesrep.phone }}</div>
            <div class="mb-email"><b>Email</b>: {{  salesrep.email }}</div>
            <div class="mb-experience"><b>Years of experience</b>: {{  salesrep.years_of_experience }}</div>
            <div class="mb-language"><b>Language</b>: {{  salesrep.language.label }}</div>
            <div class="mb-motto"><b>Working Motto</b>: {{  salesrep.working_motto }}</div>
        </div>
</div>
```

If there is more than one sales representative who takes care of the current client, this loop below processes them one by one and displays them all.

```
{% for salesrep in salesreps %}
```

Particularly, these are basic information stored in usual posts, such as the Sales Rep's name from the post title and their avatar from the post thumbnail.

```
<div class="mb-title-sale">{{  salesrep.post_title }}</div>
<img src="{{ mb.get_the_post_thumbnail_url(salesrep.ID) }}" alt="{{  salesrep.post_title }}" />
```
Also, these are to get the extra information saved in Meta Box custom fields.

```
<div class="mb-phone"><b>Phone Number</b>: {{  salesrep.phone }}</div>
<div class="mb-email"><b>Email</b>: {{  salesrep.email }}</div>
<div class="mb-experience"><b>Years of experience</b>: {{  salesrep.years_of_experience }}</div>
<div class="mb-language"><b>Language</b>: {{  salesrep.language.label }}</div>
<div class="mb-motto"><b>Working Motto</b>: {{  salesrep.working_motto }}</div>
```
They are phone, email, years of experience, language, and working moto. `phone`, `email`, `years_of_experience`, `language`, and `working_motto` are the corresponding IDs of each custom field.

Now, just move to the Settings section of the view, set the Type as Singular, choose the Location as the post type where you want the SalesRep information to display.

![Set location for the view.](https://imgur.elightup.com/kF22XSP.png)

As well, you can choose a suitable position for the data of the Sales Rep on the page.

![Choose a suitable position for the data of the Sales Rep on the page](https://imgur.elightup.com/dKM7b4y.png)

All the Sales Rep information will be displayed. However, some additional styling is required to enhance its visual appeal.

![The Sales Rep information will be displayed](https://imgur.elightup.com/W5hTmMW.png)

Back to the view editor, in the **CSS** tab, add some code for styling.

```
.mb-container {
    background: #e7e7e7;
    text-align: center;
}
.mb-content {
    padding: 20px 50px;
}
.mb-your-sale {
    font-weight: bold;
    font-size: 30px;
}
.mb-title-sale{
    font-weight: bold;
    font-size: 25px;
    color: #bb2c2c;
    margin-bottom:15px;
}
.mb-container img {
    width: 100%;
}
.mb-phone {
	padding-top:20px;
}
.mb-language,
.mb-email,
.mb-experience,
.mb-phone,
.mb-motto {
    font-size: 20px;
    margin-top: 5px;
    text-align: left;
}
```

![Add some code for styling in the CSS tab.](https://imgur.elightup.com/MgE6uUq.png)

Now, let's check the frontend to see the final result! The Sales Rep information looks great. When logging in with a different account, the corresponding Sales Rep who is assigned to that user will be displayed.

![The Sales Rep information looks great.](https://imgur.elightup.com/QuNJwcG.gif)

Let’s move on to another approach!

### 4.2. Method 2: Using PHP

Go to your theme’s file, then add the following code.

```
function your_sales_representative(){
	$connected = new WP_Query( [
        'relationship' => [
            'id'      => 'salesrep-to-user',
            'to'      => get_current_user_id(),
        ],
    ] );

    $html ='';
     while ( $connected->have_posts() ) :
     	$connected->the_post();
     	$id_salesrep = get_the_ID();
     	 $html  .= '<div class="mb-container">
            <div class="mb-content">
            	<div class="mb-your-sale">Your Sales Representative</div>
            	<div class="mb-title-sale">'. get_the_title() .'</div>
            	<img src=" '. get_the_post_thumbnail_url($id_salesrep).'" />
            	<div class="mb-phone"><b>Phone Number</b>: '.rwmb_meta( 'phone', $id_salesrep ) .'</div>
                <div class="mb-email"><b>Email</b>: '.rwmb_meta( 'email', $id_salesrep ) .'</div>
                <div class="mb-experience"><b>Years of experience</b>: '.rwmb_meta( 'years_of_experience', $id_salesrep ) .'</div>
                <div class="mb-language"><b>Language</b>: '.rwmb_meta( 'language', $id_salesrep ) .'</div>
                <div class="mb-motto"><b>Working Motto</b>: '.rwmb_meta( 'working_motto', $id_salesrep ) .'</div>
            </div>
        </div>';
    endwhile;
    return $html;
}

add_shortcode( 'your_sales_rep', 'your_sales_representative' );
```

![Add code to the theme’s file.](https://imgur.elightup.com/7mavJOw.png)

Let’s take a closer look at it:

#### 4.2.1. Creating a new function to handle everything

```
function your_sales_representative(){}
```
This function is used for displaying the Sales Rep information assigned to the current user.

#### 4.2.2. Querying to get Sales Rep

This query is to get posts of the **SalesRep** post type that are related to the currently logged-in user using the relationship.

```
$connected = new WP_Query( [
    'relationship' => [
        'id' => 'salesrep-to-user',
        'to' => get_current_user_id(),
    ],
] );
```
**In there**:

* `salesrep-to-user`: the ID of the created relationship.
* `$id_salesrep = get_the_ID();`: to query only data connected to the current user.

I create an empty variable, `$html ='';`, to store the output data for the Sales Rep, which will be built up next.

```
while ( $connected->have_posts() ) :
    $connected->the_post();
```
This loop goes through each Sales Rep post returned by the above query.

```
$id_salesrep = get_the_ID();
```

This is to get the ID of the current post.

#### 4.2.3. Displaying Sales Rep information

```
$html  .= '<div class="mb-container">
    <div class="mb-content">
        <div class="mb-your-sale">Your Sales Representative</div>
        <div class="mb-title-sale">'. get_the_title() .'</div>
        <img src=" '. get_the_post_thumbnail_url($id_salesrep).'" />
        <div class="mb-phone"><b>Phone Number</b>: '.rwmb_meta( 'phone', $id_salesrep ) .'</div>
        <div class="mb-email"><b>Email</b>: '.rwmb_meta( 'email', $id_salesrep ) .'</div>
        <div class="mb-experience"><b>Years of experience</b>: '.rwmb_meta( 'years_of_experience', $id_salesrep ) .'</div>
        <div class="mb-language"><b>Language</b>: '.rwmb_meta( 'language', $id_salesrep ) .'</div>
        <div class="mb-motto"><b>Working Motto</b>: '.rwmb_meta( 'working_motto', $id_salesrep ) .'</div>
</div>
```
These lines of code follow the HTML structure as well and display the sales representative's information linked to the current user. It’s quite the same with the code we used in the **MB Views**, but use the `rwmb_meta` function to get data from custom fields created with Meta Box.

We also use IDs of the fields as we did before, and `salesrep` is the slug of the custom post type where we saved the sales information.

![ID of the fields](https://imgur.elightup.com/TxRvxMy.png)

#### 4.2.4 Creating a shortcode

Finally, create a shortcode to display the Sales Rep information anywhere when the user is logged in.

```
add_shortcode( 'your_sales_rep', 'your_sales_representative' );
```
Now, go to the desired page and add a **Shortcode** block.

![Add a Shortcode block.](https://imgur.elightup.com/LCBQVVm.png)

Then, input the created shortcode in the box.

![Input the created shortcode.](https://imgur.elightup.com/h32Dt03.png)

So, you can see all the information of a Sales Rep display.

![All the information of a Sales Rep before styling](https://imgur.elightup.com/W5hTmMW.png)

Also, we’ll add **CSS** to style this section.

![Add CSS to style the Sales Rep section](https://imgur.elightup.com/u1GFNvU.png)

I’ve uploaded all lines of code to [GitHub](https://github.com/wpmetabox/tutorials/tree/master/display-sales-rep-information), so feel free to refer to them.

Now, on the frontend, let's see the final result! The Sales Rep looks great already! When logging in with a different account, the Sales Rep specifically assigned to that user will be displayed.

![Display dynamic, personalized data for users](https://imgur.elightup.com/QuNJwcG.gif)

So, it works the same with the first method with MB Views. Now, just choose the one that feels better to you.

If you’re interested in exploring more about relationships and dynamic content, check out this guide on [displaying related posts based on shared relationships with Meta Box](https://docs.metabox.io/tutorials/create-relationships-mb-views/).
