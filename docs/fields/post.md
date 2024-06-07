---
title: Post
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Screenshots from '@site/src/components/Screenshots';

The post field allows you to select one or multiple post (or any custom post type) objects. This field has several settings that can be displayed as a: simple select dropdown, checkbox list, or beautiful select dropdown with select2 library.

If the post type is hierarchical, you can display the field as a select or checkbox tree, e.g. showing children posts when a parent post is selected.

## Screenshots

<Screenshots
    name="post"
    col1={[
        ['https://i.imgur.com/jV4d0TW.png', 'The post field default interface'],
        ['https://i.imgur.com/kWVBpgr.png', 'The post field with checkbox list interface'],
        ['https://i.imgur.com/Vq8VNuD.png', 'The post field with radio list interface'],
    ]}
/>

## Settings

Besides the [common settings](/field-settings/), this field has the following specific settings, the keys are for use with code:

Name | Key | Description
--- | --- | ---
Post types | `post_type` | Post types to query. Can be a string (for a single post type) or array (for multiple post types). Required.
Query args | `query_args` | Query arguments for getting post objects. Uses same arguments as [WP_Query](https://developer.wordpress.org/reference/classes/wp_query/#parameters). Optional.
Set as parent | `parent` | Whether or not to set the selected post as the parent for the current being edited post? `true` or `false` (default).
Placeholder | `placeholder` | The placeholder for the select box. Default is "Select a {post label}". Applied only when the field type is a select field.
Field type | `field_type` | How the posts are displayed? See below.

The default value of **query_args** is publish. Following the WordPress documentation, the attachment post (media) can be considered a child of a post so you can use the post_status inherit or any to get the attachment posts.

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
    'name'        => 'Select a page',
    'id'          => 'page',
    'type'        => 'post',
    'post_type'   => 'page',
    'field_type'  => 'select_advanced',
    'placeholder' => 'Select a page',
    'query_args'  => [
        'post_status'    => 'publish',
        'posts_per_page' => - 1,
    ],
],
```

## Ajax load

Meta Box uses ajax to increase the performance of the field query. Instead of fetching all posts at once, the plugin now fetches only some posts when the page is loaded, and then it fetches more posts when users scroll down to the list.

See this video for demonstration (the UI of the Meta Box Builder was from the old version, the new version of Meta Box Builder has a better UI):

<LiteYouTubeEmbed id='2acm5gW59Mc' />

:::info

This feature is available only for fields that set the field type to **select advanced**. There are some extra parameters for you to disable or customize.

:::

### Enable/Disable ajax requests

This feature is enabled by default when you set the field type to "select advanced".

If you're using code to create this field, the settings to enable/disable it is `ajax`, which accepts a boolean value (and it's `true` by default):

```php
[
    'id'        => 'project',
    'title'     => 'Project',
    'type'      => 'post',
    'post_type' => 'project',
    // highlight-next-line
    'ajax'      => true,
],
```

Setting this parameter to `false` will disable ajax requests.

### Limit the number of posts for pagination

The number of posts for pagination is set via the `posts_per_page` parameter in the "Query args" setting:

```php
[
    'id'         => 'project',
    'title'      => 'Project',
    'type'       => 'post',
    'post_type'  => 'project',
    'ajax'       => true,
    'query_args' => [
        // highlight-next-line
        'posts_per_page' => 10,
    ],
],
```

When fetching new posts, the new posts will be appended to the list of options in the dropdown, to make the infinite scroll effect.

:::info Initial load

The number of posts **doesn't affect the initial load** of the field. When the field is loaded, Meta Box **only queries for saved posts** (which is usually not many). So the initial query is very minimal and doesn't cause any performance problems.

:::

### Searching parameters

You probably don't want to perform an ajax request when opening the dropdown at first. You might want to _make ajax requests only when users type something_ and search for that. To do that, you need to set the `minimumInputLength` for the input, as below:

```php
[
    'id'         => 'project',
    'title'      => 'Project',
    'type'       => 'post',
    'post_type'  => 'project',
    'ajax'       => true,
    'query_args' => [
        'posts_per_page' => 10,
    ],
    'js_options' => [
        // highlight-next-line
        'minimumInputLength' => 1,
    ],
],
```

This parameter sets the minimum number of characters required to start a search. It may be good if you don't want users to make too many ajax requests that could harm your server.

## Data

This field saves post ID(s) in the database.

If "Multiple" is not set, a single post ID is saved in the database. Otherwise, the field saves multiple post IDs in the database, where each post ID is stored in a single row in the database with the same meta key (similar to what `add_post_meta` does with the last parameter `false`).

If the field is cloneable, then the value is stored as a serialized array in a single row in the database.

If "Parent" is set, this field doesn't save any data. Instead, it sets the selected post as the parent for the current being edited post.

## Template usage

**Getting selected post ID:**

```php
<?php $post_id = rwmb_meta( 'my_field_id' ); ?>
<p>Selected post ID: <?= $post_id ?></p>
```

**Getting selected post object:**

```php
<?php $post_id = rwmb_meta( 'my_field_id' ); ?>
<?php $post = get_post( $post_id ); ?>
<pre>
    <!-- Show all data from the selected post -->
    <?php print_r( $post ); ?>
</pre>
```

**Displaying selected post title:**

```php
<?php $post_id = rwmb_meta( 'my_field_id' ); ?>
<h3><?= get_the_title( $post_id ); ?></h3>
```

or simpler:

```php
<h3><?php rwmb_the_value( 'my_field_id', ['link' => false] ) ?></h3>
```

**Displaying the selected post with link:**

```php
<?php $post_id = rwmb_meta( 'my_field_id' ); ?>
<h3><a href="<?= get_permalink( $post_id ) ?>"><?= get_the_title( $post_id ); ?></a></h3>
```

or simpler:

```php
<h3><?php rwmb_the_value( 'my_field_id' ) ?></h3>
```

**Additional options for `rwmb_the_value()`:**

Using `rwmb_the_value` also has some extra options as following:

```php
<!-- Displaying the post title without link -->
<?php rwmb_the_value( 'my_field_id', ['link' => false] ) ?>

<!-- Displaying the post title with link to view post (default) -->
<?php rwmb_the_value( 'my_field_id' ) ?>
<?php rwmb_the_value( 'my_field_id', ['link' => 'view'] ) ?>

<!-- Displaying the post title with link to edit post -->
<?php rwmb_the_value( 'my_field_id', ['link' => 'edit'] ) ?>
```

**Displaying multiple selected posts:**

If "Multiple" is set or the field is cloneable, you can loop through the returned values like this:

```php
<?php $post_ids = rwmb_meta( 'my_field_id' ); ?>
<h3>Related posts</h3>
<ul>
    <?php foreach ( $post_ids as $post_id ) : ?>
        <li><a href="<?= get_permalink( $post_id ) ?>"><?= get_the_title( $post_id ); ?></a></li>
    <?php endforeach ?>
</ul>
```

of simpler:

```php
<h3>Related posts</h3>
<?php rwmb_the_value( 'my_field_id' ); ?>
```

`rwmb_the_value()` automatically output multiple selected posts as an unordered list with links to each post.

## Filters

`rwmb_post_choice_label` and `rwmb_{$field_id}_choice_label`

These filters allow developers to change the label of `post` fields. The first label applies to all `post` fields and the second one is for a specific field.

Example: If you are using a field called `my_field` and you want to change the label, use the code below:

```php
function my_field_filter( $label, $field, $post ) {
    return $post->post_title . ' - ' . $post->post_status;
}
add_filter( 'rwmb_my_field_choice_label', 'my_field_filter', 10, 3 );
```
