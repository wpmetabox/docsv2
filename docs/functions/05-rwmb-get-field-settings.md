---
title: rwmb_get_field_settings
---

`rwmb_get_field_settings` is a helper function that gets the field settings by field ID.

It's very helpful in case you want to refer to field's name, field's options array (in a select field) or other settings later in your code.

## Usage

To get field settings by field ID, just call:

```php
$field = rwmb_get_field_settings( $field_id );
/*
Result:
[
    'id' => 'field_id',
    'name' => 'Field Name',
    'type' => 'text,
]
*/
```

However, if you create a custom field for [terms](/extensions/mb-term-meta/), [users](/extensions/mb-user-meta/) or [settings pages](/extensions/mb-settings-page/), you will need to specify object type in the second parameter:

```php
$field = rwmb_get_field_settings( $field_id, ['object_type' => 'term'] ); // or 'user', 'setting
```

## Arguments

This function accepts 3 arguments as below:

```php
$field = rwmb_get_field_settings( $field_id, $args, $object_id );
```

Name|Description
---|---
`$field_id`|The field ID. Required.
`$args`|Extra arguments for some object types or storages. It works similarly in [rwmb_meta](/functions/rwmb-meta/) function. Can be array or a string in format `param1=value1&param2=value2`. Optional.
`$object_id`|Object ID that custom fields are get from. Optional. If not present, current post ID is used.

## Returned value

This function returns full array of field settings.

## Examples

**Getting a select field:**

```php
<?php
$field = rwmb_get_field_settings( 'country' );
```

**Displaying all the sub-fields of a non-cloneable group in the format Field Name: Field Value:**

```php
<?php
$group_id       = 'my_group';
$group_settings = rwmb_get_field_settings( $group_id );
$group          = rwmb_meta( $group_id );

for ( $i = 0; $i < count( $group ); $i++) {
    $field = $group_settings['fields'][$i];
    ?>
    <div class="sub-field"><?= $field['name'] ?>: <?= $group[ $field['id'] ] ?></div>
    <?php
}
```

**Getting a field for a term with ID 15:**

```php
$field = rwmb_get_field_settings( 'color', ['object_type' => 'term'], 15 );
```

**Getting a field from a settings page:**

```php
$field = rwmb_get_field_settings( 'hotline', ['object_type' => 'setting'], 'site_option' );
```

**Getting a field from a custom table:**

```php
$field = rwmb_the_value( 'price', ['storage_type' => 'custom_table', 'table' => 'properties'], 15 );
```
