---
title: Custom Select / Checkbox Tree
displayed_sidebar: general
---

If you've used the [taxonomy field](/fields/taxonomy/), you will see it has an option to display options in a checkbox / select tree. When users select a parent item, it will show children item. It's quite a nice feature for users. But how to do that with normal checkbox list or select field types?

The answer is simple: it's already supported. And you need to register options for these fields with code like this:

```php
add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
    $meta_boxes[] = [
        'title'  => 'Test',
        'fields' => [
            [
                'type'    => 'select_tree', // or checkbox_list
                'id'      => 'cb',
                'name'    => 'Hierarchical checkboxes',
                'options' => [
                    [ 'value' => 'value1', 'label' => 'label 1' ],
                    [ 'value' => 'value2', 'label' => 'label 2' ],
                    // highlight-start
                    [ 'value' => 'sub1', 'label' => 'Sub 1', 'parent' => 'value1' ],
                    [ 'value' => 'sub2', 'label' => 'Sub 2', 'parent' => 'value1' ],
                    // highlight-end
                ],
                'placeholder' => 'Select an item',
                'flatten'     => false,
            ],
        ],
    ];
    return $meta_boxes;
} );
```

To enable select/checkbox tree, you need to:

- Set the option in format of `[ 'value' => 'Your value', 'label' => 'Your label' ]`
- For child items, add `'parent' => 'parent_value'`
- Set `'flatten' => false` for the field
- Set the field type `checkbox_list` if you want a checkbox tree or `select_tree` if you want a select tree.
