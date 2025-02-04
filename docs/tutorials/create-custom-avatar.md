---
title: Creating a custom avatar for users
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

As you know, each WordPress user account has a unique avatar. And, you can completely **add or change the avatar by creating a custom field** that allows users to **upload photos right on the website**.

This is the example look.

![Example of the custom avatar for users](https://i.imgur.com/nDAnx3y.png)

## Video version

<LiteYouTubeEmbed id='FbjNorcc9Js' />

## Preparation

You’ll need to use the [Meta Box core plugin](https://wordpress.org/plugins/meta-box/) for this practice. You can download it directly from [wordpress.org.](https://wordpress.org/plugins/meta-box/)

We also need some Meta Box extensions to have some advanced features:

* [MB User Meta](https://metabox.io/plugins/mb-user-meta/) or [MB User Profile](https://metabox.io/plugins/mb-user-profile/): They allow you to create fields for users. You can choose to use one of them;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to create custom fields with an intuitive UI right in the backend.

## 1. Creating a custom field to upload avatar picture

Go to **Meta Box > Custom Fields > Add new**.

I will add a custom field in the type of Single Image that allows the user upload only one image to the field.

The **ID** of this field will be used in the next steps, so you can change it to an easy-to-remember one.

![Change ID of the custom field to an easy-to-remember one since we will use it in the next step](https://i.imgur.com/VuJxEmP.png)

Next, move to the **Settings** tab, set the **Location** as **User**.

![Set the Location of the field group as User to apply it for users](https://i.imgur.com/wAIXSKl.png)

Go to the user profile page, you will see the new custom field. Let’s try to add an image.

![The created custom field displays in the user profile page](https://i.imgur.com/dgFPO3M.png)

But now, the **Profile Picture** field hasn't received it and recognized it as the user avatar. Thus, we should take some further actions.

## 2. Adding code to theme files

To set the image in the custom field to be the avatar, we should add some code to the theme file.

Go to the theme’s **functions.php** file and add code like this:

```
add_filter( 'get_avatar_url', 'mb_get_avatar_url', 10, 3 );

function mb_get_avatar_url( $url, $id_or_email, $args ) {
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

![The code that we add to the functions.php file to set the image saved in the custom field to be the profile picture](https://i.imgur.com/vNiMzXi.png)

**Explanation**

```
add_filter( 'get_avatar_url', 'mb_get_avatar_url', 10, 3 );
```

This is to declare that we will add a filter named `mb_get_avatar_url' to the` `get_avatar_url` hook provided by WordPress. And, you can set the filter name as anything you want.

```
function mb_get_avatar_url( $url, $id_or_email, $args ) {
```

This is to declare that the added filter will have these three parameters: `$url`, `$id_or_email`, and `$args`.

```
if ( is_numeric( $id_or_email ) ) {
    $user_id = $id_or_email;
} elseif ( is_string( $id_or_email ) && ( $user = get_user_by( 'email', $id_or_email ) ) ) {
    $user_id = $user->ID;
} elseif ( is_object( $id_or_email ) && ! empty( $id_or_email->user_id ) ) {
    $user_id = (int) $id_or_email->user_id;
}
```

These above lines of code is to get the ID of the current user. Then assign it to the `$user_id` variable.

```
if ( empty( $user_id ) ) {
    return $url;
}
```

This one is to check if the `$user_id` variable has value or not. If not, the avatar is still the image that is currently set in the Profile Picture field.

Otherwise, if there is any image in the custom field which has the ID as `custom_avatar` and is used for the User object, we’ll use the `rwmb_meta( )` function to get the value of that field in the next line of code.

```
$custom_avatar = rwmb_meta( 'custom_avatar', [ 'object_type' => 'user' ], $user_id );
```

And, only the value saved in the field which matches the ID of the current user (based on the `$user_id` variable) will be obtained. Then that value will be transferred to the `$custom_avatar_user` variable.

```
if ( ! $custom_avatar_user ) {
    return $url;
}
```

These above lines of code is to check if the `$custom_avatar_user` variable is empty, it means that there is no image in the custom field, the avatar still being the image that is currently set in the Profile Picture field.

Otherwise, if there is any value in the `$custom_avatar_user` variable, means you did upload any image to the field, the `$url` variable will be assigned the value from the `$custom_avatar_user` variable. Then, the avatar will be the one from the custom field.

```
$url = $custom_avatar['full_url'];
```

Now just back to the user profile page. The avatar is now like this.

![The profile picture is now as default since we didn't set any image into the field](https://i.imgur.com/ctjmQEY.jpg)

Let’s try to upload an image to the custom field and check if this one will change or not.

It works already.

![Upload an image to the custom field, then the profile picture will automatically change to be the same one](https://i.imgur.com/GjtYfKx.png)
