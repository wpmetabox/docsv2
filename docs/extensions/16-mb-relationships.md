---
title: MB Relationships
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

MB Relationships helps you to create relationships between posts, terms, and users in WordPress. So when you edit an item (post, term, user), you can select other items to connect to. It works with all post types, and all custom taxonomies and users, and supports many-to-many, one-to-many, or many-to-one relationships.

This is an example of a many-to-many relationship between events (a custom post type) and speakers (user).

![Events to speakers relationship](https://i0.wp.com/images.elightup.com/meta-box/docs/relationships/events-to-speakers.png)

The plugin uses a custom table for storing relationships and integrates with default WordPress queries to retrieve the connected items easily. Using a custom table has several benefits:

- Bi-directional by its nature
- Easier querying items in both directions (`from` and `to`) or querying sibling items
- Not polluting the post/term/user meta tables
- Better performance

The custom table is automatically created when the plugin is activated.

## Creating relationships

Creating a relationship is done by either of the following methods:

- **Using [MB Builder](/extensions/meta-box-builder/)**, which helps you create relationships with UI. This extension is a premium extension and is already bundled in Meta Box AIO/MB Core.
- **Using code**.

Before going into the detailed settings of a relationships, it's important to note that: when a relationship is created, you'll see a meta box (usually on the right side - this position can be changed). And inside that meta box, there'll be a cloneable field ([post](/fields/post/), [taxonomy_advanced](/fields/taxonomy-advanced/), or [user](/fields/user/) depending on the object type) for you to select connected items. So the settings of a relationships will be divided into 3 parts: settings for the relationship, for the meta box and for the field.

Now let's see how to create a relationship with MB Builder.

### Using MB Builder

To create a relationship, go to **Meta Box > Relationships** and click **Add New**.

![Create a relationship with MB Builder](img/relationship/create-relationship.png)

Here you can enter all the settings for the relationship and each side of the relationship (**From** and **To**).

#### Relationship settings

Name | Description
---|---
Delete data in database? | Delete data in database when the relationship is deleted.
Reciprocal relationship | Whether the relationship is reciprocal, e.g. a relationship between items of the same type. If you choose this, make sure you set the settings for the "From" and "To" sides the same.

When editing an item, the plugin will show a meta box for selecting connected items. In the case of reciprocal relationships, because it's set between items of the same type, without selecting this setting, the plugin will show 2 meta boxes for both "from" and "to" sides. Selecting this setting will ensure there's only 1 meta box that appears.

#### Side settings

For each side, there are 3 tabs of settings:

- **General**: for general settings such as object type and post type.
- **Meta Box**: for extra meta box settings. These settings are the same as the field group settings when creating custom fields.
- **Field**: for extra field settings. These settings are the same as the field settings ([post](/fields/post/), [taxonomy_advanced](/fields/taxonomy-advanced/), or [user](/fields/user/) depending on the object type).

<Tabs>
  <TabItem value="general" label="General" default>

![general settings for a relationship side](img/relationship/general.png)

Name | Description
---|---
Object type | What type of object you want to set. If you choose "Term" or "User", make sure you already activate [MB Term Meta](/extensions/mb-term-meta/) or [MB User Meta](/extensions/mb-user-meta/) extension.
Post type | If you select object type = "Post", then the post type settings will appear to let you select the post type.
Taxonomy | If you select object type = "Term", then the taxonomy settings will appear to let you select the taxonomy.
Empty message | The custom message is displayed when there are no connections. Leaving this setting blank will use the default message "No connections".
Show admin filter | Add a select dropdown to filter posts by this relationship. Works only for posts.
Show as admin column | Show the connections in the admin list table of posts/terms or users. When you select this setting, the following settings will appear.
Column position | Select the position of the admin column. You need to set it after/before or replace an existing column by selecting the option from the dropdown and selecting/entering the ID of the target column. Note that the plugin already prepares a list of common columns in WordPress, so you can just press the down arrow key to select them. If you create a [custom admin column](/extensions/mb-admin-columns/), enter the column ID here.
Column title | Custom admin column title. Leaving this setting blank will show the default title from the relationship meta box.
Item link type | For each connected item, you can set how it shows in the admin column: with a link to the edit page, with a link to the view it on the frontend, or without links.

  </TabItem>
  <TabItem value="meta-box" label="Meta Box">

The plugin automatically creates meta boxes to let you select connected items. The meta box settings are very much like a [normal meta box](/creating-fields-with-code/#field-group-settings) when you create custom fields, but simpler.

![meta box settings for a relationship side](img/relationship/meta-box.png)

Name | Description
---|---
Title | The custom meta box title. Leaving this setting blank will set the title default to "Connected To" or "Connected From".
Context | Where to show the meta box.
Priority | The priority of the meta box. Meta boxes with a high priority will show first.
Style | The meta box style: default (with wrapper) and seamless (no wrapper).
Collapse by default | Whether to collapse the meta box when the edit page loads.
Custom CSS class | If you want to style your meta box, then enter a custom CSS class here.

  </TabItem>
  <TabItem value="field" label="Field">

To select connected items, the plugin uses Meta Box's [post](/fields/post/), [taxonomy advanced](/fields/taxonomy-advanced/) or [user](/fields/user/) field according to the object type of the relationship. This tab shows the settings for the field.

![field settings for a relationship side](img/relationship/field.png)

Name | Description
---|---
Label | The field label. Leaving it empty to hide the field label.
Label description | A description is displayed below the field label.
Input description | A description is displayed below the field input.
Placeholder | The custom placeholder for the select dropdown.
Query args | Custom query args to get posts/terms/users to select from. It's a set of key-value pairs, which represent the arguments like in the `WP_Query` (for posts), `get_terms` (for terms) and `get_users` (for users).
Max items | The maximum number of selected items. If you want to set the relationship 1:1 or 1:n, then set it 1 (for 1:1 make sure to set it on both the "From" and "To" sides).
Add more text | The custom text for the add more button.
Before | A custom HTML to output before the field.
After | A custom HTML to output after the field.
Custom CSS class | If you want to style the field, then enter a custom CSS class here.

  </TabItem>
</Tabs>

### Using code

The code below registers a relationship **from posts to pages**:

```php
add_action( 'mb_relationships_init', function() {
    MB_Relationships_API::register( [
        'id'   => 'posts_to_pages',
        'from' => 'post',
        'to'   => 'page',
    ] );
} );
```

This code will show 2 meta boxes for posts and pages in the edit screens:

- For posts: the meta box to select connected pages.
- For pages: the meta box to show the posts that connect from.

If you wan to register a relationship **from categories to posts**, then use the following code:

```php
add_action( 'mb_relationships_init', function () {
    MB_Relationships_API::register( [
        'id'   => 'categories_to_posts',
        'from' => [
            // highlight-start
            'object_type' => 'term',
            'taxonomy'    => 'category',
            // highlight-end
        ],
        'to'   => 'post',
    ] );
} );
```

Or register a relationship **from users to posts**:

```php
add_action( 'mb_relationships_init', function () {
    MB_Relationships_API::register( [
        'id'   => 'users_to_posts',
        'from' => [
            // highlight-next-line
            'object_type' => 'user',
        ],
        'to'   => 'post',
    ] );
} );
```

#### Syntax

The main API function `MB_Relationships_API::register` has the following parameters:

Name|Description
---|---
`id`|The relationship ID (or type). It's used to identify a relationship with others. Required.
`from`|The "from" side of the relationship. Required. See below for details.
`to`|The "to" side of the relationship. Required. See below for details.
`reciprocal`|Whether the relationship is reciprocal (`true` or `false`). Optional.

Both sides `from` or `to` accept various parameters for the connection and meta box:

- If you pass **a string** to `from` or `to`, the plugin will understand that as the **post type**. So the relationship will be created from posts to posts with specific post types.
-  If you pass **an array** to `from` or `to`, then the array accepts the following parameters:

Name|Description
---|---
`object_type`|The object type the relationship is created from/to: `post` (default), `term` or `user`. Optional.
`post_type`|The post type if the `object_type` is set to `post`. Default `post`. Optional.
`taxonomy`|The taxonomy if the `object_type` is set to `term`.
`empty_message`|The message displayed when there's no connections.
`meta_box`|Meta box settings, has the [same settings as a normal meta box](/creating-fields-with-code/#field-group-settings). Below are common settings you might want to change:
-- `title`|The meta box title. Default is "Connect To" for "from" side and "Connected From" for "to" side.
`field`|Field settings, has the same settings as a [post](/fields/post/), [user](/fields/user/) or [taxonomy](/fields/taxonomy/) field according to the object type. Below are common settings you might want to change:
-- `name` | Field title.
-- `placeholder` | Placeholder text.
-- `query_args`|Custom query arguments to get objects of `object_type`. These arguments will be passed to `WP_Query()`, `get_terms()` or `get_users()` depending what `object_type` is.
-- `max_clone` | Maximum number of connections.

The field settings apply from object `from` to object `to`. That means the custom field (relationship) shows on the object `from` get object type, post type, and field settings from object `to`.

#### Admin column

The plugin supports showing connected items in the admin list table of posts/terms or users. To enable this feature, add the `admin_column` parameter to the `from` or `to` relationship configuration:

```php
MB_Relationships_API::register( [
    'id'   => 'posts_to_pages',
    'from' => [
        'object_type'  => 'post',
        // highlight-next-line
        'admin_column' => true,
    ],
    'to'   => [
        'object_type'  => 'post',
        'post_type'    => 'page',
        // highlight-next-line
        'admin_column' => 'after title',
    ],
] );
```

Similar to [MB Admin Columns](/extensions/mb-admin-columns/), the plugin supports 3 formats of the parameter:

1. A boolean `true`: to simply display the admin column. The column will be added to the end of the list table. And the title of the column will be the title of the connection meta box (when you edit a post).
1. A string "before title": to specify the column position. It accepts 2 words: the first one is the placement ("before", "after" or "replace") and the last one is the target existing column ID.
1. An array of advanced configurations, as below:

```php
'admin_column' => [
    'position' => 'after title',
    'title'    => 'Price',
    'link'     => 'edit',
],
```

Key|Description
---|---
`position`|Specify where to insert the new column. It's the same as described in the #2 method above.
`title`|Column title. Optional. Default is the meta box title.
`link`|Config the link for the items displayed in the admin column. Can be `view` (click to view item on the front end - default), `edit` (click to edit item), or `false` (no link).


### Bi-directional relationships

While the relationships are registered clearly with the term "from" and "to", the connections are bi-directional. You will be able to query back and forth without any problem. The query API is explained in the next section.

The data is stored in the database as a pair of (from_id, to_id), thus making it independent from either side.

## Getting connected items

### API

Using the API is the fastest and simplest way to get connected items:

```php
$pages = MB_Relationships_API::get_connected( [
    'id'   => 'posts_to_pages',
    'from' => get_the_ID(),
] );
foreach ( $pages as $p ) {
    echo $p->post_title;
}
```

If you need more control over connected items (like sorting or limiting the number of items), see the sections below for each type of content.

### Posts

To get pages that are connected from a specific post (the *Basic Usage* example), use the following code:

```php
<?php
$connected = new WP_Query( [
    'relationship' => [
        'id'   => 'posts_to_pages',
        'from' => get_the_ID(), // You can pass object ID or full object
    ],
    'nopaging'     => true,
] );
while ( $connected->have_posts() ) : $connected->the_post();
    ?>
    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
    <?php
endwhile;
wp_reset_postdata();
```

To query for connected posts, just pass another parameter `relationship` to `WP_Query()`.

If you want to display posts that connected to a specific page (the **backward query**), then just replace `from` by `to` in the code above:

```php
$connected = new WP_Query( [
    'relationship' => [
        'id' => 'posts_to_pages',
        'to' => get_the_ID(), // You can pass object ID or full object
    ],
    'nopaging'     => true,
] );
```

That's all.

**So, why WP_Query() you might ask?**

There are 3 reasons that we want to use `WP_Query()`:

1. Using `WP_Query()` allows developers to create a **flexible** query to the database. Imagine you want to get related posts (which are set manually by the plugin) *and* in the same category. `WP_Query()` allows you to do that easily. Without it, you probably need to create 2 manual queries (1 from a relationship, and 1 from a category).
1. `WP_Query()` is optimized for getting posts. It creates **only 1 query** to the database. Besides, in that single query, you'll be able to retrieve **full post objects**, not just post IDs. (You still can retrieve only post IDs if you set `'fields' => 'ids'` - how flexible it is!).
1. `WP_Query()` is so familiar with WordPress developers. No need to introduce another API just for the same purpose.

Also note that, in the example above, we set `nopaging` to `true`, which disables pagination. So the query returns all the connected posts.

For the full list of supported parameters for `WP_Query()`, please see the [documentation](https://developer.wordpress.org/reference/classes/wp_query/).

### Terms

Similar to posts, getting connected terms is simple:

```php
$terms  = get_terms( [
    'taxonomy'     => 'category',
    'hide_empty'   => false,
    'relationship' => [
        'id' => 'categories_to_posts',
        'to' => get_the_ID(), // You can pass object ID or full object
    ],
] );
foreach ( $terms as $term ) {
    echo $term->name;
}
```

We use WordPress function `get_terms()` with an additional parameter `relationship` with the same reasons as for posts.

For the full list of supported parameters for `get_terms()`, please see the [documentation](https://developer.wordpress.org/reference/functions/get_terms/).

### Users

Similar to posts, getting connected users is simple:

```php
$users  = get_users( [
    'relationship' => [
        'id' => 'users_to_posts',
        'to' => get_the_ID(), // You can pass object ID or full object
    ],
] );
foreach ( $users as $user ) {
    echo $user->display_name;
}
```

We use WordPress function `get_users()` with an additional parameter `relationship` with the same reasons as for posts.

For the full list of supported parameters for `get_users()`, please see the [documentation](https://codex.wordpress.org/Function_Reference/get_users).

### Current item

In the examples above, we use `get_the_ID()` to get the ID of the current post. But if we query for connected posts from a relationship `terms_to_posts`, then that function doesn't work.

In that case, we need to use the following functions:

Function|Description
---|---
[`get_queried_object()`](https://codex.wordpress.org/Function_Reference/get_queried_object)|Get the current-queried object. If you're on a single post/page, it will return the post object. If you're on a category archive, it will return the category object and so on. Note that in the code above, `from` and `to` accepts both object ID and full object.
[`get_queried_object_id()`](https://developer.wordpress.org/reference/functions/get_queried_object_id/)|Get the current-queried object ID. Similar to the above function but returns only object ID.
[`get_current_user_id()`](https://developer.wordpress.org/reference/functions/get_current_user_id/)|Get current user ID.

## Getting sibling items

Assume you have 2 custom post types: student and class. Each student can join 1 or more classes (many-to-many relationship). Now how to get the classmates of the given student A?

To get sibling of a post, add `'sibling' => true` to the query as follows:

```php
$siblings = new WP_Query( [
    'relationship' => [
        'id'      => 'posts_to_pages',
        'to'      => get_the_ID(),
        // highlight-next-line
        'sibling' => true,
    ],
    'nopaging'     => true,
] );
```

The code is similar to the above section, except for the extra `sibling` parameter. That parameter works for all post, term, or user queries.

## Post archive

All the examples above work well with a single post, term, or user. But if you want to display connected posts on the blog archive page, this method will create a dozen of queries for each post on the archive page. That's a lot of extra queries.

To solve this problem, we need to use the following code:

```php
global $wp_query, $post;

MB_Relationships_API::each_connected( [
    'id'   => 'posts_to_pages',
    'from' => $wp_query->posts, // 'from' or 'to'.
] );

while ( have_posts() ) : the_post();

    // Display connected pages
    foreach ( $post->connected as $p ) :
        echo $p->post_title;
        // More core here...
    endforeach;

endwhile;
```

### How does it work?

On each request, WordPress automatically runs a query that finds the appropriate posts to display. These posts are stored in the global `$wp_query` variable.

The API function `MB_Relationships_API::each_connected()` will take a list of posts from `$wp_query->posts` and pull the related pages from the database (with a single database query) and assign them to each post via the `connected` property. So, you can loop through `$post->connected` and display connected pages.

If you create a custom query than default WordPress query, just pass the array of objects to the function, like this:

```php
$my_query = new WP_Query( [
    // your parameters
] );

MB_Relationships_API::each_connected( [
    'id'   => 'posts_to_pages',
    'from' => $my_query->posts, // Set to $my_query.
] );

while ( $my_query->have_posts() ) : $my_query->the_post();

    // Display connected pages
    foreach ( $post->connected as $p ) :
        echo $p->post_title;
        // More code here.
    endforeach;

endwhile;
```

The property name can be set to anything with an additional `'property' => 'your_property_name'`. See the below sections.

### Multiple connections

If you create multiple relationships between objects, you still can manipulate the query multiple times, like this:

```php
// Get connected pages and assign them to property 'connected_pages'.
MB_Relationships_API::each_connected( [
    'id'       => 'posts_to_pages',
    'from'     => $wp_query->posts,
    'property' => 'connected_pages',
] );

// Get connected users and assign them to property 'artists'.
MB_Relationships_API::each_connected( [
    'id'       => 'users_to_posts',
    'from'     => $wp_query->posts,
    'property' => 'artists',
] );

while ( have_posts() ) : the_post();

    // Display connected pages
    foreach ( $post->connected_pages as $post ) : setup_postdata( $post );
        the_title();
        ...
    endforeach;
    wp_reset_postdata(); // Set $post back to original post

    // Displayin connected users
    foreach ( $post->artists as $artist ) :
        echo $artist->display_name;
    endforeach;

endwhile;
```

### Nesting

Since the `each_connected()` function accepts array of post objects, it's easy to create nested query like this:

```php
$my_query = new WP_Query( [
    'post_type' => 'movie'
] );
MB_Relationships_API::each_connected( [
    'id'       => 'movies_to_actors',
    'from'     => $my_query->posts,
    'property' => 'actors',
] );

while ( $my_query->have_posts() ) : $my_query->the_post();

    // Another level of nesting
    MB_Relationships_API::each_connected( [
        'id'       => 'actors_to_producers',
        'from'     => $post->actors,
        'property' => 'actors',
    ] );

    foreach ( $post->actors as $post ) : setup_postdata( $post );
        echo '<h3>Connected Producers</h3>';

        foreach ( $post->producers as $post ) : setup_postdata( $post );
            the_title();

            ...
        endforeach;
    endforeach;

    wp_reset_postdata();
endwhile;
```

## Query by multiple relationships

For example, if you have event-to-band and event-to-artist relationships and you want to get all bands and artists that are connected from an event, then you can do the following:

```php
$query = new WP_Query( [
    'relationship' => [
        'relation' => 'OR',
        [
            'id'   => 'events_to_bands',
            'from' => get_the_ID(),
        ],
        [
            'id'   => 'events_to_artists',
            'from' => get_the_ID(),
        ],
    ],
    'nopaging'     => true,
] );
while ( $query->have_posts() ) {
    $query->the_post();
    echo get_the_title() . '<br>';
}
wp_reset_postdata();
```

## Managing connections programmatically

The plugin has several public APIs that can help you create or delete connections between 2 items using code.

### `has`

This function checks if 2 objects have a specific relationship.

```php
$has_connection = MB_Relationships_API::has( $from, $to, $id );
if ( $has_connection ) {
    echo 'They have a relationship.';
} else {
    echo 'No, they do not have any relationship.';
}
```

Name|Description
---|---
`$from`|The ID of the "from" object.
`$to`|The ID of the "to" object.
`$id`|The relationship ID.

### `add`

This function adds a specific relationship between 2 objects.

```php
MB_Relationships_API::add( $from, $to, $id, $order_from = 1, $order_to = 1 );
```

This function checks if the 2 objects already have a relationship and adds a new relationship only if they haven't.

When calling `add` function, the plugin fires a hook as follow:

```php
do_action( 'mb_relationships_add', $from, $to, $id, $order_from, $order_to );
```

### `delete`

This function deletes a specific relationship between 2 objects.

```php
MB_Relationships_API::delete( $from, $to, $id );
```

This function checks if the 2 objects already have a relationship and delete that relationship only if they have.

When calling `delete` function, the plugin fires a hook as follow:

```php
do_action( 'mb_relationships_delete', $from, $to, $id );
```

## Shortcode

The plugin provides a single flexible shortcode to display connected items.

```php
[mb_relationships id="posts_to_pages" direction="from" mode="ul"]
```

It accepts the following parameters:

Name|Description
---|---
`id`|Relationship ID. Required.
`items`|List of items for getting connected items from/to. Optional. If missed, the shortcode will get the current object ID.
`direction`|Get connected items `from` (default) or `to`. Optional.
`mode`|How to display connected items? `ul` (unordered list - default), `ol` (ordered list), `inline` (display items joined by commas), or `custom`.
`separator`|The separator between connected items if `mode` is set to `custom`. Optional.

## Database

The relationship data is stored in a single database `mb_relationships` with the following columns:

Column|Description
---|---
`ID`|The connection ID
`from`|The ID of the "from" object
`to`|The ID of the "to" object
`type`|The relationship ID (type)
`order_from`|The order of the item for the "from" side
`order_to`|The order of the item for the "to" side

This structure allows us to create simple and efficient queries. All columns are also indexed to optimize for speed.

If you use the extension as a separated plugin, e.g. not bundle it within another, then the table is created during plugin activation. It's the ideal situation, where the plugin only checks for table existence only once.

If you bundle the extension within another plugin, then the table is checked and created when it's loaded. While the check is relatively fast, it's still an extra small query to the database.

## REST API

The plugin provides REST API endpoints so you can retrieve and update related items from external sources.

Note: each relationship must first be created use [any of the supported methods](#creating-relationships).

### Check for the existence of a connection

Send a `GET` request to `/wp-json/mb-relationships/v1/{id}/exists?from={from ID}&to={to ID}`.

By default, this endpoint does not require authentication or authorization; use the `mb_relationships_rest_api_can_read_relationships` and/or `mb_relationships_rest_api_can_read_relationships_public` filter to modify this.

Example:

```shell
curl --request GET --url 'https://example.test/wp-json/mb-relationships/v1/posts_to_pages/exists?from=14773&to=13577'
```

```json
{
	"has_relationship": true,
	"relationship": "posts_to_pages",
	"to": 13577,
	"from": 14773
}
```

### Get all “to” objects for a specified “from” object

Send a `GET` request to `/wp-json/mb-relationships/v1/{id}/connected-from/{from ID}`.

By default, this endpoint does not require authentication or authorization; use the `mb_relationships_rest_api_can_read_relationships` and/or `mb_relationships_rest_api_can_read_relationships_public` filter to modify this.

Example:

```shell
curl --request GET --url 'https://example.test/wp-json/mb-relationships/v1/posts_to_pages/connected-from/14773'
```

```json
{
	"relationship": "posts_to_pages",
	"from": 14773,
	"to": [
        13577,
        13578,
        13579,
    ],
}
```

### Get all “from” objects for a specified “to” object

Send a `GET` request to `/wp-json/mb-relationships/v1/{id}/connected-to/{to ID}`.

By default, this endpoint does not require authentication or authorization; use the `mb_relationships_rest_api_can_read_relationships` and/or `mb_relationships_rest_api_can_read_relationships_public` filter to modify this.

Example:

```shell
curl --request GET --url 'https://example.test/wp-json/mb-relationships/v1/posts_to_pages/connected-to/13577'
```

```json
{
	"relationship": "posts_to_pages",
	"from": [
        14773,
        14775,
        14777,
    ],
	"to": 13577,
}
```

### Create a new connection

Send a `POST` request to `/wp-json/mb-relationships/v1/{id}` with body parameters `from` and `to`.

By default, this endpoint requires a user with `publish_posts` capability (administrator role); use the `mb_relationships_rest_api_can_create_relationships` and/or `mb_relationships_rest_api_can_create_relationships_public` filter to modify the capabilities.

Example:

```shell
curl --request POST \
  --url https://example.test/wp-json/mb-relationships/v1/posts_to_pages \
  --header 'Authorization: Basic dXNlcjpwYXNzd29yZA==' \
  --header 'Content-Type: multipart/form-data' \
  --form from=14773 \
  --form to=13952
```

```json
{
	"has_relationship": true,
	"relationship": "posts_to_pages",
	"to": 13577,
	"from": 14773
}
```

### Delete a connection

Send a `DELETE` request to `/wp-json/mb-relationships/v1/{id}?from={from ID}&to={to ID}`.

By default, this endpoint requires a user with `delete_posts` capability (administrator role); use the `mb_relationships_rest_api_can_delete_relationships` and/or `mb_relationships_rest_api_can_delete_relationships_public` filter to modify the capabilities.

Example:

```shell
curl --request DELETE \
  --url 'https://example.test/wp-json/mb-relationships/v1/team_member_to_location?from=14773&to=13952' \
  --header 'Authorization: Basic dXNlcjpwYXNzd29yZA=='
```

```json
{
	"has_relationship": false,
	"relationship": "posts_to_pages",
	"to": 13577,
	"from": 14773
}
```
