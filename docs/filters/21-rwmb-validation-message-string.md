---
title: rwmb_validation_message_string
---

This filter changes the message that shows at the top of the form when [validation](/validation/) fails.

```php
apply_filters( 'rwmb_validation_message_string', $message );
```

It has 1 parameter: `$message`. The default value is "Please correct the errors highlighted below and try again." The plugin escapes the message, so do not use HTML.

## Example

```php
add_filter( 'rwmb_validation_message_string', function () {
    return 'Some fields are not correct. Please check the fields in red.';
} );
```
