---
title: Getting field settings by field ID
---

In case you want to refer to the field's name, field's options array (in a select field) or other settings later in your code, the `rwmb_get_field_settings()` function will help you do it as your desire.

![Getting field settings by field ID](https://imgur.elightup.com/dZqo7d0.png)

## About the function

`rwmb_get_field_settings()` is a helper function that gets the field settings by field ID. Just add this code:

```$field = rwmb_get_field_settings( $field_id );```

However, if you create a custom field for terms, user profile or a settings page, you will need to specify the object type in the second parameter:

```$field = rwmb_get_field_settings( $field_id, array( 'object_type' => 'term' ) ); // or 'user', 'setting’```

As you might see, the 2nd parameter is very similar to the 2nd parameter in the `rwmb_meta()` helper function if you use it to get meta value for terms, user profile or settings page. That's because the function `rwmb_get_field_settings()` is used internally inside the helper function to find field settings.

In another case, you **create 2 custom fields with the same ID but different settings for 2 different custom post types**. To get the correct field settings, you need to specify the post ID in the last parameter:

```$field = rwmb_get_field_settings( $field_id, '', $post_id );```

It's the same if you **create 2 custom fields with the same ID for 2 taxonomies or 2 settings pages**. In that case, in addition to the 3rd parameter (which should be term ID or settings page ID), you need to specify the object type in the 2nd parameter, just like you did above.

The general syntax for the function is:

```$field = rwmb_get_field_settings( $field_id, $args, $object_id );```

## Example

The example below is a real use-case of the `rwmb_get_field_settings()` that a user asked. He had a group of text fields and wanted to list all the subfields in the format Field Name: Field Value. Without this function, he needed to manually type the sub-field name and ID. But now he can do it automatically.

```php
<?php
// Function to get the sub-field values from grouped meta fields.
function prefix_meta($group, $field){
    $group = rwmb_meta($group);
    $value = isset($group[$field]) ? $group[$field] : '' ;
    return $value;
}
// Function to dynamically display group based meta information.
function prefix_show_meta_info($group){
    $grp = rwmb_get_field_settings($group);
    $grpsize = rwmb_meta($group);
    for ($i=0; $i < count($grpsize); $i++) { ?>
        <div class="sub-field"><?= $grp['fields'][$i]['name'].": "; ?><?= prefix_meta($group,$grp['fields'][$i]['id']); ?></div>
    <?php }
}

// Call: prefix_show_meta_info('group_id')
```

Using `rwmb_get_field_settings()`, you don't have to remember the field's name anymore. Your code will be minimal and clear.

So, if you need to refer to the field settings, this function is all you need.
