---
title: Creating a custom avatar for users
---

Normally, to change your avatar on WordPress, you have to use your Gravatar account and change your avatar on it. After that, it will automatically link to your account on the website. However, this method may be time-consuming for some. For users to be able to change their avatar directly on the website, we can create a field where we can upload an image and link it so that you can apply it to your avatar. It is called a custom avatar.

![Example of a custom avatar](https://imgur.com/G18RnMP)

## Before Getting Started

In addition to using the [Meta Box Core Plugin](https://metabox.io/), make sure you already have these extensions:

* [MB User Meta](https://metabox.io/plugins/mb-user-meta/) or[ MB User Profile](https://metabox.io/plugins/mb-user-profile/): to create fields for your user profiles. It’s okay to use one of them only.
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to create custom fields with an intuitive UI without having to code yourself. In addition, you can also use another tool to do that - Online Generator.

## Step 1: Create a field to upload avatar picture

Go to **Meta Box > Custom Fields > Add new**.

Then, click **Add Field** button and select **Single Image** field type to create your needed field. 

![Create the wanted fields](https://imgur.com/qJImjuJ)

Since the ID of the Single Image field will be used in the next steps, change it to something easy to remember, e.g., custom_avatar.

Next, move to the **Settings** tab and set the **Location** as **Users**.

![set location for the created fields](https://imgur.com/csuPTND)

Finally, click **Save Changes** to save the created custom field.

When you go to edit a user profile in the **Users** section, you will see the **Custom Avatar** field appear.

![Custom avatar field appear](https://imgur.com/YzeZDmQ)

You can upload an image to the field.

## Step 2: Get data from the custom avatar field to set

Now, your **Profile Picture** hasn't got the uploaded picture from your **Custom Avatar** field automatically yet.

![The profile picture hasn't got the uploaded picture](https://imgur.com/5EYCABo)

To make it happen, you need to put this code into the `functions.php` file:

```php
add_filter( 'get_avatar_url', 'mbua_get_avatar_url', 10, 3 );

function mbua_get_avatar_url( $url, $id_or_email, $args ) {
    if ( is_numeric( $id_or_email ) ) {
        $user_id = $id_or_email;
    } elseif ( is_string( $id_or_email ) && ( $user = get_user_by( 'email', $id_or_email ) ) ) {
        $user_id = $user->ID;
    } elseif ( is_object( $id_or_email ) && ! empty( $id_or_email->user_id ) ) {
        $user_id = (int) $id_or_email->user_id;
    }

    if ( empty( $user_id ) ) {
        return $url;
    }

    $custom_avatar = rwmb_meta( 'custom_avatar', [ 'object_type' => 'user' ], $user_id );

    if ( ! $custom_avatar ) {
        return $url;
    }

    $url = $custom_avatar['full_url'];
    
    return $url;
}
```
After adding the code, you will see that the **Profile Picture** has been automatically replaced with the similar image that you uploaded in the **Custom Avatar** field.

![After adding the code there will be uploaded custom avatar](https://imgur.com/G18RnMP)

## Last Words

Using a custom field to have a custom avatar may save time and effort more than manually changing the avatar in Gravatar. Did you see that? Keep track of our tutorial section for more useful tips.
