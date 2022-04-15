---
title: Password
---

import Screenshots from '@site/src/components/Screenshots';

The password field creates a simple password input. The password is encrypted by [wp_hash_password()](https://developer.wordpress.org/reference/functions/wp_hash_password/) before saving it into the database to make sure it's safe.

## Screenshots

<Screenshots name="password" col1={[
    ['https://i.imgur.com/xozZVMx.png', 'The password field interface']
]} />

## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings, the keys are for use with code:

Name | Key | Description
--- | --- | ---
Size of the input box | `size` | Size of the input box. Without this setting, the input box is full-width.

This is a sample field settings array when creating this field with code:

```php
[
    'name' => 'Password',
    'id'   => 'password',
    'type' => 'password',
],
```

## Data

This field saves the encrypted password in the database for better security. The password is encrypted by [wp_hash_password()](https://developer.wordpress.org/reference/functions/wp_hash_password/) function.

## Template usage

As the password is encrypted in the database, you **cannot** get the original password via code. There's no reversing function that can turn a password hash into the original one. Otherwise, it will be insecure.

Instead of trying to get the original password, you should check the saved password is correct, like this:

```php
<?php
$value = rwmb_meta( 'my_field_id' );
if ( wp_check_password( 'password to check', $value ) ) {
    echo 'Password is correct';
}
```