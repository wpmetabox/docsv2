---
title: Creating a subscription form connecting to Mailchimp
---

We’re going to use the [MB Frontend Submission](https://metabox.io/plugins/mb-frontend-submission/) extension of Meta Box to create a subscription form and connect it with an email marketing service - Mailchimp to manage and send emails fast and easily.

## Preparation

We need to install the following tools:

* [Meta Box](https://metabox.io): to have a framework to create a custom post type and custom fields for the form. It’s free and available on [wordpress.org](https://wordpress.org/plugins/meta-box).
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have an UI in the back-end to create custom fields for the form.
* [MB Frontend Submission](https://metabox.io/plugins/mb-frontend-submission/): to display custom fields on the front-end as a form.
* [MB Custom Post Type & Custom Taxonomy](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the form, each submitted form will be a post.

Finally, you need to have a Mailchimp account. In case you haven’t had it, go [here](https://login.mailchimp.com/) to create a new one.

## 1. Creating a new post type for subscribers

To save and review subscriber data easily and conveniently, firstly, you need to create a new post type. I named it as Subscribers.

Go to **Meta Box > Post Types > New Post Type**. Then modify the general information for the post type and publish it.

![create new post type for subscribers](https://i.imgur.com/yenctSX.png)

After publishing, a new menu named **Subscribers** will appear as below:

![Newly created post type appears in the menu](https://i.imgur.com/jjokucc.png)

## 2. Creating a subscription form

I’m going to add two basic custom fields for a subscription form: **Name** and **Email**.

Besides, to save the database space, I will use the name which is submitted into the form for the post title, and the email for the post content. So, the ID of the Name field will be post_title, and the ID of the Email field will be `post_content` which are two default IDs in WordPress for title and post content.

Go to **Meta Box > Custom Fields > Add New**. Then choose the field type as **Text** for both Name and Email fields.

![Create new custom fields](https://i.imgur.com/KlPBlbP.png)

Pay attention to the ID of these fields, remember to set the right IDs as I said above.

After that, move to the **Settings** tab and in **Location**, choose the **Subscriber** post type.

![Set location for the created fields](https://i.imgur.com/U4eTWO0.png)

Normally, after publishing the field group, its ID will be auto-generated in the **Field Group ID** box. You can also change the field group ID as you desire. This ID will be used in the next step.

![The IDs are auto-generated](https://i.imgur.com/B4p8GvN.png)

## 3. Displaying the subscription form on the front-end

To display the subscription form on the website, which means displaying the custom fields on the frontend, and allow users to fill in the fields right on the frontend, you need to use the [MB Frontend Submission](https://metabox.io/plugins/mb-frontend-submission/) extension.

I created a **Subscribe** page to display the form on page.

First, go to **Meta Box > Custom Fields** to see all the field groups that you created on site. Then, you will see a column that show shortcodes like this:

![Create a column showing shortcodes](https://i.imgur.com/9bs6zWO.png)

Copy the shortcode of the field group that we use for the subscription form. This shortcode will be like this:

```php
[mb_frontend_form id='subscription-form' post_fields='title,content']
```

Now, go to the Subscribe page and paste the shortcode into it.

![Copy and paste the shortcode](https://i.imgur.com/DuR9u8K.png)

To customize the subscription form, you can add some attributes as following:

```php
[mb_frontend_form id="subscription-form" ajax="true" recaptcha_key="..." recaptcha_secret="..."]
```
Explanation:
* `subscription-form`: id of the field group we’ve created
* `ajax=”true”`: enable loading ajax
* `recaptcha_key`: Google reCaptcha site key
* `recaptcha_secret`: Google reCaptcha secret key

I use Google reCaptcha to avoid spamming. In addition, to integrate Google reCaptcha in the frontend form, simply enter the site key and the secret key into the shortcode above.

Read [this documentation](https://docs.metabox.io/extensions/mb-frontend-submission/#shortcode-attributes) to get a detailed guide for reCaptcha and other attributes of the form.

Here is how the subscription form displays on the page.

![The subscription form displays like this](https://i.imgur.com/x4sK4RD.png)

## 4. Styling the subscription form

To style the form, go to **Appearance > Customize > Additional CSS**. Then add the CSS code below to make the form more appealing:
```css
.rwmb-form {
	background: #e2e8f0;
	padding: 24px;
	border-radius: 4px;
	max-width: 768px;
	margin: 0 auto;
}
.rwmb-form .rwmb-meta-box {
	display: flex;
	justify-content: space-between;
	grid-gap: 12px;
}
.rwmb-form .rwmb-field {
	flex: 1;
}
.rwmb-form .rwmb-field:not(:last-of-type) {
	margin: 0 0 12px;
}
.rwmb-form .rwmb-label,
.rwmb-form .rwmb-field .rwmb-input {
	float: none;
	width: 100%;
	margin-bottom: 5px;
}
.rwmb-form button, .rwmb-form input {
	width: 100%;
}
```

This is how it looks after customizing with CSS:

![Customize the form with css](https://i.imgur.com/xz62Goe.png)

## 5. Connecting the subscription form to mailchimp

We’re going to integrate the subscription form to MailChimp to send the subscriber information submitted into the form to MailChimp. With this information, you can [use MailChimp to send email marketing campaigns](https://gretathemes.com/mailchimp-send-wordpress-blog-post-email/) to these subscribers easily.

To do it, use the library below to connect to the MailChimp API:

https://github.com/drewm/mailchimp-api

Access the link and download the `Mailchimp.php` file, then insert it into your theme.

For example, I’m using the [eStar](https://gretathemes.com/wordpress-themes/estar) theme and its [child theme](https://gretathemes.com/what-is-child-theme/#what-is-child-theme), so I create an inc folder and copy the `Mailchimp.php` file to it.

![Use the theme for example](https://i.imgur.com/5Ocba5i.png)

Next, add this code to the `functions.php` file:

```php
include get_stylesheet_directory() . '/inc/MailChimp.php';
use \DrewM\MailChimp\MailChimp;

function insertList() {
	$key = 'your API keys mailchimp';
	$list_id = ' id of the list that you want to integrate';
	$merge_var = array(
		'FNAME' => $_POST['post_title'],
		'LNAME' => '',
	);
	$mailchimp = new MailChimp( $key );

	$result = $mailchimp->post( '/lists/' . $list_id . '/members', array(
		'email_address' => $_POST['post_content'],
		'merge_fields'  => $merge_var,
		'status'        => 'subscribed',
	) );
	return json_encode( $result );
}

add_action( 'rwmb_frontend_after_process', function( $config, $post_id ) {
	if ( 'subscription-form' === $config['id'] ) {
		insertList();
		die;
	}
}, 10, 2 );
```

Explanation:

* `'rwmb_frontend_after_process'`: the hook we have after the form is submitted;
* `subscription-form`: id of the field group we’ve created in step 2;
* To get the API key of MailChimp, log in to your MailChimp account, and then copy the API key in the **Your API keys** section.

![Copy the API key](https://i.imgur.com/rB5PK5G.png)

* Press the **Create A Key** button to get the API key

![Get the API key](https://i.imgur.com/8NJEyb2.png)

* To get the id of the list, go to **Audience > All Contacts**, click **Settings**, and choose **Audience name and defaults**:

![Get the ID of the list](https://i.imgur.com/VBh0h3H.png)

* In the **Audience ID** section, the list of id will appear:

![the list appear in the Audience ID section](https://i.imgur.com/CNpTwjo.png)

:::info

Mailchimp often changes their interface, so the next time going to Account MailChimp, it may look different from this post. However, the process is still the same.

:::


After that, make a test to check whether the system works well. I filled in the subscription form with the name and email as below:

![Check whether the system works well](https://i.imgur.com/xz62Goe.png)

And here they are displayed in the email list of MailChimp:

![The information displays in the email list](https://i.imgur.com/r54eO6D.png)

That’s how we have done the integration between the subscription form and your MailChimp account.
