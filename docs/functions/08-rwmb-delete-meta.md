---
title: rwmb_delete_meta
---

`rwmb_delete_meta` deletes the value of a field. It works with all storages: post meta, term meta, user meta, settings pages and custom tables.

## Arguments

```php
rwmb_delete_meta( $object_id, $field_id, $args = [] );
```

Parameter|Description
---|---
`$object_id`|Object (post, term, user) ID. For a settings page, use the option name.
`$field_id`|Field ID.
`$args`|Extra arguments, the same as in [rwmb_meta](/functions/rwmb-meta/), such as `object_type`. Optional.

The function returns `true` if the value is deleted, `false` if not. It returns `false` if the field is not registered.

:::warning

This function works only after the field is registered (hook `init` with priority 20). Run it after that, the same as [rwmb_set_meta](/functions/rwmb-set-meta/).

:::

The function fires the [`rwmb_before_delete_field` and `rwmb_after_delete_field`](/actions/rwmb-delete-field/) actions.

## Examples

**Delete a field value of a post:**

```php
rwmb_delete_meta( 123, 'subtitle' );
```

**Delete a field value of a term:**

```php
rwmb_delete_meta( 15, 'color', [ 'object_type' => 'term' ] );
```

**Delete a field value in a custom table:**

```php
rwmb_delete_meta( 123, 'price', [
    'storage_type' => 'custom_table',
    'table'        => 'wp_products',
] );
```
