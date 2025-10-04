---
title: Creating a subscription form connecting to Mailchimp
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We’re going to use the [MB Frontend Submission](https://metabox.io/plugins/mb-frontend-submission/) extension of Meta Box to create a subscription form and connect it with an email marketing service - Mailchimp to manage and send emails fast and easily.

This is a simple subscription form.

![A simple subscription form](https://imgur.elightup.com/MALHkE9.png)

Whenever someone submits the form, their information will be saved in a post of a custom post type. So, you can see the new account in the dashboard like this.

![After submitting the form, the account info will be saved in a post of a custom post type in the dashboard.](https://imgur.elightup.com/IFsCj8h.png)

And, when you connect to the MailChimp service, you can see the account in the email list in MailChimp.

![The contact submitted from the form will be in the email list in MailChimp.](https://imgur.elightup.com/YHtpYqZ.png)

## Video version

<LiteYouTubeEmbed id='dhXyYBzvQEo'/>

## Preparation

We need to install the following tools:

* [The Meta Box plugin](https://wordpress.org/plugins/meta-box): to have a framework to create a custom post type and custom fields for the form. It’s free and available on [wordpress.org](https://wordpress.org/plugins/meta-box).
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for subscribers.
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI in the backend to visually create custom fields for the form.
* [MB Frontend Submission](https://metabox.io/plugins/mb-frontend-submission/): to display custom fields on the front-end as a form.

Finally, you need to have a Mailchimp account. In case you haven’t had it, go [here](https://login.mailchimp.com/) to create a new one.

## 1. Creating a new post type for subscribers

To save and review subscriber data easily and conveniently, firstly, you need to create a new post type. I named it as Subscribers.

Go to **Meta Box > Post Types > New Post Type**. Then modify the general information for the post type and publish it.

![create new post type for subscribers](https://imgur.elightup.com/SB3KNJK.png)

After publishing, a new menu named **Subscribers** will appear. Information of each subscriber will be saved in a post of this post type.

![Newly created post type appears in the menu](https://imgur.elightup.com/VttNgq4.png)

## 2. Creating a subscription form

Commonly, a subscription form has at least two fields: Name and Email. You may have more fields for further information. But in this case, I just create only these two basic fields for illustration purposes only.

Now, go to **Meta Box** > **Custom Fields** > **Add New** to create fields.

![Go to Meta Box to create fields for the form](https://imgur.elightup.com/j8bURp6.png)

To save database space, I will use the name that is submitted into the form for the post title. So, the ID of the Name field will be the same as the post title.

![The ID of the Name field will be the same as the post title.](https://imgur.elightup.com/WlR1pDd.png)

Apart from that, there are no special settings for the fields I want. Thus, I just create them as usual.

After creating all the fields, go to the **Settings** tab, set the **Location** as **Post type**, and choose **Subscriber** to apply all the fields to this post type.

![Set location for the created fields](https://imgur.elightup.com/oUn8BIv.png)

Once you have published the field group, its ID will be generated automatically. Just copy it since we’ll use it in the next step.

![Get ID of the field group](https://imgur.elightup.com/ADylHdJ.png)

Move to the post editor, you will see only a field for email displayed since we set the Name field as the title.

![Only a field for email displays since we set the Name field as the title.](https://imgur.elightup.com/DXon9rF.png)

I'll not input any data now, since the form will be used on the frontend, then the user can submit it.

## 3. Displaying the subscription form on the front-end

In the real case, you absolutely can add the form to a pre-built page, then the form will be set aside with some other content. However, I skip building those kinds of pages and just create a new blank page to show the form.

Now, go to **Pages** to create a new page as usual.

![Create a new page as usual.](https://imgur.elightup.com/kAFk9pR.png)

Look for the **Submission Form** block, or element, or widget (in the case you’re using a page builder). It’s provided by **MB Frontend Submission** to have the subscription form display.

![Look for the Submission Form block.](https://imgur.elightup.com/e8ItvU7.png)

Once you select this block, it’ll display the title and content fields by default. They are not what we created.

![The title and content fields display by default.](https://imgur.elightup.com/xUFZ31u.png)

To display the created custom fields for the form, add the ID of the field group to the box in the image below. The ID is the one we copied from the field group in the previous step. Then, you will see the fields displayed immediately.

![Add the ID of the field group to the ID box to display the custom fields for the form.](https://imgur.elightup.com/bjiq8Yg.png)

There are some settings of this block on the right sidebar. You can set it as you go. But, you must set the post type as the one you created for the submission. Then, every submission from this form will be saved to a post in that post type.

![Set the post type as the one you created for the submission.](https://imgur.elightup.com/mrxYZ4O.png)

Next, to disable the **Title** and **Content** field in the form, remove them in the **Post Fields** section:

![Disable the Title and Content field in the form.](https://imgur.elightup.com/9pncrWG.png)

Go to the page on the frontend, we will see the form displayed, with two fields as we want.

![The form displays with the Name field and Email field on the frontend.](https://imgur.elightup.com/tMt5uui.png)

You can go to the **Customizer** section > **Additional CSS** to add some code to beautify the subscription form.

```css
.rwmb-form .rwmb-meta-box {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 20px;
}
.rwmb-form .rwmb-field {
    display: flex;
    align-items: center;
}
.rwmb-form {
    background: #e2e8f0;
    padding: 24px;
    border-radius: 4px;
    max-width: 768px;
    margin: 0 auto;
}

.rwmb-form button {
   width: 100%;
	 margin-top:20px;
}
.rwmb-field:not(:last-of-type){
	  margin:0px !important;
}
```

![Add some CSS code to beautify the subscription form.](https://imgur.elightup.com/K1ait5c.png)

You can see in the gif below the subscription form works well, but just saves the data on your website, and you can see the contact in the back end, not your MailChimp account yet.

![The subscription form works well, but just saves the data on your website so far.](https://imgur.elightup.com/NFH30tp.gif)

So let’s go ahead to connect this form to MailChimp.

## 4. Connecting the subscription form to mailchimp

In this step, we’re going to **integrate the subscription form to MailChimp** to send the subscriber information submitted to the form to MailChimp. With this information, you can [use MailChimp to send email marketing campaigns](https://gretathemes.com/mailchimp-send-wordpress-blog-post-email/) to these subscribers easily.

To do it, I use the following library to connect to the Mailchimp API:

https://github.com/drewm/mailchimp-api

Click the link to download the `Mailchimp.php` file, and then insert it into your theme. I’m using eStar theme and its child theme, so I will create an inc folder and copy the `Mailchimp.php` file into this folder.

Next, add this code to the `functions.php` file:

```css
include get_stylesheet_directory() . '/inc/MailChimp.php';
use \DrewM\MailChimp\MailChimp;

function insertList() {
    $key = 'your API keys mailchimp';
    $list_id = 'id of the list that you want to integrate';
    $merge_var = array(
        'FNAME' => $_POST['post_title'],
        'LNAME' => '',
    );
    $mailchimp = new MailChimp( $key );

    $result = $mailchimp->post( '/lists/' . $list_id . '/members', array(
        'email_address' => $_POST['email'],
        'merge_fields'  => $merge_var,
        'status'        => 'subscribed',
    ) );
    return json_encode( $result );
}

add_action( 'rwmb_frontend_after_process', function( $config, $post_id ) {
    if ( 'subscription-form' === $config['id'] ) {
        insertList();
    }
}, 10, 2 );
```

![Add code to the functions.php file.](https://imgur.elightup.com/mlFyq7I.png)

**In there**:

* `'/inc/MailChimp.php'`: This is the direction of the file that we have just added to the theme folder;
* We use the `rwmb_frontend_after_process` hook to do below actions after the subscriber submits the form. You can look for more details about the hook on [Meta Box documentation](https://docs.metabox.io/extensions/mb-frontend-submission/#form-hooks).
* `'your API keys mailchimp'`: Where you can fill in your MailChimp API keys;
* `'id of the list that you want to integrate'`: Where you can enter the ID of the list to stipulate that the contact will be sent to which contact list in your MailChimp account;
* `$_POST[' '],`: This is to get the value stored in custom fields;

These lines below are the action that we put the contact information (including the email, name, and status) into the contact list into a MailChimp account.

```css
$result = $mailchimp->post( '/lists/' . $list_id . '/members', array(
        'email_address' => $_POST['email'],
        'merge_fields'  => $merge_var,
        'status'        => 'subscribed',
    ) );
    return json_encode( $result );
}
```
And, notice that if you have separated fields for the first name and last name, just fill in the ID to these places in this image. In my case, there is only a field for names.

![Where you can fill in the ID of the field for the first name and last name.](https://imgur.elightup.com/z46BF2h.png)

Now, go back to the form on the page to test how it connects to our Mailchimp account. Just **add a new subscription**. This new subscriber information absolutely will be saved as a post in the backend, as well as in the Mailchimp account dashboard.

![New subscriber information absolutely is saved as a post in the backend.](https://imgur.elightup.com/jHDMUrM.png)

![The new contact is also on the list in my MailChimp account.](https://imgur.elightup.com/YHtpYqZ.png)

Do you remember that I submitted an account named Janessa before I created the integration? Since it was submitted before I made the integration, it does not appear in the MailChimp. Only the new ones will be there.

So, it seems like the integration works well already.

That’s how we have done the integration between the subscription form and your MailChimp account.
