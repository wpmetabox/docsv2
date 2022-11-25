---
title: Creating an auto-updated cheat sheet
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Today, we’ll create a submission form to input data, then the data will be automatically inserted into a table in a post.

![Example of a submission form](https://i.imgur.com/l46BdPT.png)

## Video version

<LiteYouTubeEmbed id='_XnNwhKFzlY' />

## Before getting started

In this tutorial, specifically, we’ll add a cheat sheet about the deals for Black Friday. Each deal will have information like product name, product type, offer start date, end date, and promotion code.

You need to install the following tools:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom post type and custom fields;
* [MB Custom Post Type & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create custom post types for the Black Friday deals;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to provide a UI on the back end to create custom fields to save the deals’ information;
* [MB Frontend Submission](https://metabox.io/plugins/mb-frontend-submission/): display custom fields on the frontend to help users submit deals easier;
* [MB Views](https://metabox.io/plugins/mb-views/): display values of the custom fields (deals’ information) on the post.

## Step 1: Create a new custom post type

We’ll create a post type for the deals. Each of the deals will be a post of this post type.

Go to **Meta Box > Post Types > Add New**.

![Create a new custom post type](https://i.imgur.com/zg4UN4f.png)

## Step 2: Create fields for the submission form

Users will have a form to submit a deal, so we’ll create custom fields for it. Each field will be used to import a type of deal’s information.

<table>
<tbody>
<tr>
<td> Name of the Fields </td>
<td> IDs of the Fields </td>
<td> Field types </td>
</tr>
<tr>
<td>Your Product Name</td>
<td>post_title</td>
<td>text</td>
</tr>
<tr>
<td>Your Product Type</td>
<td>product_type</td>
<td>select_advanced</td>
</tr>
<tr>
<td>Your Offer</td>
<td>offer</td>
<td>text</td>
</tr>
<tr>
<td>Start Date</td>
<td>start_date</td>
<td>date</td>
</tr>
<tr>
<td>End Date</td>
<td>end_date</td>
<td>date</td>
</tr>
<tr>
<td>Promotion Code</td>
<td>promotion_code</td>
<td>text</td>
</tr>
</tbody>
</table>


Here I will use the `post_title` field to save product names as the title of the post.

Now, go to **Meta Box > Custom Fields > Add New** to create fields. Here are the fields I have created.

![Created fields](https://i.imgur.com/mQbZNFf.png)

After creating the necessary fields, go to the **Settings** tab > **Location** >  choose **Post types** as **Deal** to apply these fields to it.

![Set location for the created fields](https://i.imgur.com/Eb4XcL6.png)

In the post editor, you’ll see all the created custom fields.

![The created fields in the post editor](https://i.imgur.com/FJEP7B6.png)

If you are in charge of importing data, you can import data directly from the backend. Otherwise, if you want other people to import data into your cheat sheet, you need to bring these fields to the frontend.

## Step 3: Display the submission form on the frontend

Now, we need **MB Frontend Submission** to display the custom fields of this form to the frontend. It’ll automatically generate a shortcode for the field group like this:

![Auto generated shortcode](https://i.imgur.com/vofBXWh.png)

You just need to put the shortcode anywhere you want to display the submission form.

![Put the shortcode anywhere to display submission form](https://i.imgur.com/Kb2OKhp.png)

However, here I want to add some more things to my form, so I add some attributes to my shortcode like this:

```
[mb_frontend_form id="black-friday-deal" ajax="true" post_status="draft" recaptcha_key="your_key" recaptcha_secret="your_key"]
```

In there:

* `black-friday-deal`: is the ID of the field group I have created in step 2;
* `ajax="true"`: enable ajax loading;
* `recaptcha_key` and `recaptcha_secret`: Google reCaptcha site key and secret key. I use it to avoid being spammed;
* `your_key`: Fill in the corresponding keys of your Google reCaptcha here;
* `post_status="draft"`: I want the data to be censored before posting so I set up this post in the ‘draft’ status right after users have submitted.

And the custom fields of my submission form will show up on the frontend like this:

![The created fields in the frontend](https://i.imgur.com/EDsxdKx.png)

If you want to add more things to the submission form, you can add other attributes to the shortcode. You can see a list of addable attributes and detailed instructions [here](https://docs.metabox.io/extensions/mb-frontend-submission/#shortcode-attributes).

## Step 4: Style the submission form

Go to **Customizer > Additional CSS** and add some CSS:

```css
.rwmb-form {
    background: #e2e8f0;
    padding: 24px;
    border-radius: 4px;
    margin: 0 auto 30px !important;
}
.rwmb-form .rwmb-meta-box .rwmb-field {
    padding: 0 5px;
}
.rwmb-form .rwmb-field:not(:last-of-type) {
    margin: 0 0 12px;
}
.rwmb-form .rwmb-label,
.rwmb-form .rwmb-field .rwmb-input,
.rwmb-form .rwmb-field .select2-container {
    float: none;
    margin-bottom: 5px;
}
.rwmb-form button, .rwmb-form input {
    width: 100%;
}
.rwmb-form .rwmb-input input,
.rwmb-form .rwmb-input select {
    max-width: 100%;
}
.rwmb-form .select2-container .select2-selection--single,
.rwmb-form .select2-container--default .select2-selection--single .select2-selection__arrow {
    height: 40px;
}
.rwmb-form .select2-container--default .select2-selection--single .select2-selection__rendered {
    line-height: 40px;
}
```

My submission form will turn to this appearance:

![The created submission form](https://i.imgur.com/yGTzWlD.png)

## Step 5: Display data into a table on frontend

Go to **Meta Box > Views > Add New**, and add these codes:

```
{% set args = {post_type: 'deal', posts_per_page: -1, orderby: 'date', order: 'ASC' } %}
{% set posts = mb.get_posts( args ) %}

<table>
    <thead>
        <tr>
            <td>No.</td>
            <td>Name</td>
            <td>Product Type</td>
            <td>Offer</td>
            <td>Start Date</td>
            <td>End Date</td>
            <td>Code</td>
        </tr>
    </thead>
    <tbody>
        {% for p in posts %}
            <tr>
                <td>{{ loop.index }}</td>
                <td>{{ p.post_title }}</td>
                <td>{{ mb.rwmb_meta( 'product_type', '', p.ID ) }}</td>
                <td>{{ mb.rwmb_meta( 'offer', '', p.ID ) }}</td>
                <td>{{ mb.rwmb_meta( 'start_date', '', p.ID ) | date( 'Y-m-d' ) }}</td>
                <td>{{ mb.rwmb_meta( 'end_date', '', p.ID ) | date( 'Y-m-d' ) }}</td>
                <td>{{ mb.rwmb_meta( 'promotion_code', '', p.ID ) }}</td>
            </tr>
        {% endfor %}
    </tbody>
</table>
```
In these lines of code, I use a custom query which is `get_posts`. The attributes such as `post_title`, `your_product_type`, `your_offer`, … are IDs of custom fields.

After that, go to the **Settings** section of this view, and choose **Shortcode** as the **Type**, so that we can use a shortcode to add this table to the post.

![Settings of this view](https://i.imgur.com/VTxQSES.png)

I place the shortcode into the content of the post like this:

![Place the shortcode into the content of the post](https://i.imgur.com/2teYAb5.png)

This is all of the post content on the frontend with a deal list:

![The result in the front end](https://i.imgur.com/IghgQXM.png)

When someone imports data to the submission form, the data will be saved in a post having **Deal** post type and ‘draft’ status. If I review and approve this content, it will turn into ‘Published’. At this time, information about the deal will show up right in the table in my post.
