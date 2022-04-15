---
title: Taxonomy
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Screenshots from '@site/src/components/Screenshots';

The taxonomy field allows you to select one or multiple taxonomy terms. This field has several settings that can be displayed as a: simple select dropdown, checkbox list, or beautiful select dropdown with select2 library.

If the taxonomy is hierarchical, you can display the field as a select or checkbox tree, e.g. showing children terms when a parent term is selected.

:::caution Taxonomy vs. taxonomy advanced

- Taxonomy field **doesn't store data**. It just sets post terms. Think about it like a replacement of the *Category* or *Tag* meta box of WordPress.
- Taxonomy advanced **stores terms' IDs** and doesn't set post terms.

:::

## Screenshots

<Screenshots
    name="taxonomy"
    col1={[
        ['https://i.imgur.com/PzPkqur.png', 'The taxonomy field default interface'],
        ['https://i.imgur.com/Ook0RwT.png', 'The taxonomy field with checkbox list interface'],
        ['https://i.imgur.com/iLMFVBY.png', 'The taxonomy field with checkbox tree interface'],
        ['https://i.imgur.com/orDECYA.png', 'The taxonomy field with select tree interface'],
    ]}
    col2={[
        ['https://i.imgur.com/D7Q5mUA.png', 'The taxonomy field with radio list interface'],
        ['https://i.imgur.com/XMhMjoN.png', 'The taxonomy field with radio list inline interface'],
    ]}
/>

## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings, the keys are for use with code:

Name | Key | Description
--- | --- | ---
Taxonomies | `taxonomy` | Taxonomy slug(s). Can be a string (for single taxonomy) or an array (for multiple taxonomies). Required.
Query args | `query_args` | Query arguments for getting taxonomy terms. Uses same arguments as [get_terms()](https://developer.wordpress.org/reference/functions/get_terms/). Optional.
Placeholder | `placeholder` | The placeholder for the select box. Default is "Select a {taxonomy label}". Applied only when the `field_type` is a select field.
Add new | `add_new` | Allow users to create a new term when submitting the post (`true` or `false`).
Remove default meta box | `remove_default` | Remove the default WordPress taxonomy meta box. Only works with the classic editor.
Field type | `field_type` | How the terms are displayed? See below.

This field inherits the look and field (and settings) from other fields, depending on the field type, which accepts the following value:

Field type | Description | Settings inherited from
--- | --- | ---
`select` | Simple select dropdown. | [Select](/fields/select/)
`select_advanced` | Beautiful select dropdown using the select2 library. This is the default value. | [Select advanced](/fields/select-advanced/)
`select_tree` | Hierarchical list of select boxes which allows to select multiple items (select/deselect parent item will show/hide child items). Applied only when the post type is hierarchical (like pages). | [Select](/fields/select/)
`checkbox_list` | Flatten list of checkboxes which allows to select multiple items. | [Checkbox list](/fields/checkbox-list/)
`checkbox_tree` | Hierarchical list of checkboxes which allows to select multiple items (select/deselect parent item will show/hide child items). Applied only when the post type is hierarchical (like pages). | [Checkbox list](/fields/checkbox-list/)
`radio_list` | Flatten list of radio boxes which allows to select only 1 item. | [Radio](/fields/radio/)

This is a sample field settings array when creating this field with code:

```php
[
    'name'       => 'Taxonomy',
    'id'         => 'taxonomy',
    'type'       => 'taxonomy',
    'taxonomy'   => 'category',
    'field_type' => 'select_advanced',
],
```

## Ajax load

Meta Box uses ajax to increase the performance of the field query. Instead of fetching all terms at once, the plugin now fetches only some terms when the page is loaded, and then it fetches more terms when users scroll down to the list.

See this video for demonstration (made for posts, but works similar for taxonomies, the UI of the Meta Box Builder was from the old version, the new version of Meta Box Builder has a better UI):

<LiteYouTubeEmbed id='2acm5gW59Mc' />

:::info

This feature is available only for fields that set the field type to **select advanced**. There are some extra parameters for you to disable or customize.

:::

### Enable/Disable ajax requests

This feature is enabled by default when you set the field type to "select advanced".

If you're using code to create this field, the settings to enable/disable it is `ajax`, which accepts a boolean value (and it's `true` by default):

```php
[
    'id'       => 'project_cat',
    'title'    => 'Project Categories',
    'type'     => 'taxonomy',
    'taxonomy' => 'project_cat',
    // highlight-next-line
    'ajax'     => true,
],
```

Setting this parameter to `false` will disable ajax requests.

### Limit the number of terms for pagination

The number of terms for pagination is set via the `number` parameter in the "Query_args" setting:

```php
[
    'id'         => 'project_cat',
    'title'      => 'Project Categories',
    'type'       => 'taxonomy',
    'taxonomy'   => 'project_cat',
    'ajax'       => true,
    'query_args' => [
        // highlight-next-line
        'number' => 10,
    ],
],
```

When fetching new terms, the new terms will be appended to the list of options in the dropdown, to make the infinite scroll effect.

:::info Initial load

The number of terms **doesn't affect the initial load** of the field. When the field is loaded, Meta Box **only queries for saved terms** (which is usually not many). So the initial query is very minimal and doesn't cause any performance problems.

:::

### Searching parameters

You probably don't want to perform an ajax request when opening the dropdown at first. You might want to _make ajax requests only when users type something_ and search for that. To do that, you need to set the `minimumInputLength` for the input, as below:

```php
[
    'id'         => 'project_cat',
    'title'      => 'Project Categories',
    'type'       => 'taxonomy',
    'taxonomy'   => 'project_cat',
    'ajax'       => true,
    'query_args' => [
        'number' => 10,
    ],
    'js_options' => [
        // highlight-next-line
        'minimumInputLength' => 1,
    ],
],
```

This parameter sets the minimum number of characters required to start a search. It may be good if you don't want users to make too many ajax requests that could harm your server.

## Data

:::caution No value saved!

This field **does not save any value** in the database. Instead of that, it **sets the taxonomy terms for the current being edited post**. In short, it behaves exactly like the "Category" and "Tags" meta boxes.

:::

The purpose of this field is to replace the default WordPress meta box for taxonomy and offer more options to control how it displays.

For this reason, if you have two taxonomy fields, and select different values for them, after saving, they still show the same value.

:::tip How to save data

If you prefer saving data, check out the [taxonomy advanced](/fields/taxonomy-advanced/) field.

:::

## Template usage

**Getting selected term object:**

```php
<?php $term = rwmb_meta( 'my_field_id' ); ?>
<pre>
    <!-- Show all data from the selected post -->
    <?php print_r( $term ); ?>
</pre>
```

**Displaying selected term name:**

```php
<?php $term = rwmb_meta( 'my_field_id' ); ?>
<p><?= $term->name; ?></p>
```

or simpler:

```php
<p><?php rwmb_the_value( 'my_field_id', ['link' => false] ) ?></p>
```

**Displaying the selected term with link:**

```php
<?php $term = rwmb_meta( 'my_field_id' ); ?>
<p><a href="<?= get_term_link( $term ) ?>"><?= $term->name ?></a></p>
```

or simpler:

```php
<p><?php rwmb_the_value( 'my_field_id' ) ?></p>
```

**Additional options for `rwmb_the_value()`:**

Using `rwmb_the_value` also has some extra options as following:

```php
<!-- Displaying the term without link -->
<?php rwmb_the_value( 'my_field_id', ['link' => false] ) ?>

<!-- Displaying the term with link to view term (default) -->
<?php rwmb_the_value( 'my_field_id' ) ?>
<?php rwmb_the_value( 'my_field_id', ['link' => 'view'] ) ?>

<!-- Displaying the term with link to edit term -->
<?php rwmb_the_value( 'my_field_id', ['link' => 'edit'] ) ?>
```

**Displaying multiple selected terms:**

If the settings "Multiple" is set or the field is cloneable, you can loop through the returned values like this:

```php
<?php $terms = rwmb_meta( 'my_field_id' ); ?>
<h3>Project categories</h3>
<ul>
    <?php foreach ( $terms as $term ) : ?>
        <li><a href="<?= get_term_link( $term ) ?>"><?= $term->name ?></a></li>
    <?php endforeach ?>
</ul>
```

of simpler:

```php
<h3>Project categories</h3>
<?php rwmb_the_value( 'my_field_id' ); ?>
```

`rwmb_the_value()` automatically output multiple selected posts as an unordered list with links to each post.

## Filters

`rwmb_taxonomy_choice_label` and `rwmb_{$field_id}_choice_label`

These filters allow developers to change the label of `taxonomy` fields. The first label applies to all `taxonomy` fields, and the second one is for a specific field.

Example: If you are using a field called `my_field` and you want to change the label in the select box, use this code:

```php
function my_field_filter( $label, $field, $term ) {
    return $label . ' - Custom text';
}
add_filter( 'rwmb_my_field_choice_label', 'my_field_filter', 10, 3 );
```
