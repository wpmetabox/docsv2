---
title: Filtering posts by custom fields and taxonomies
---

Besides using Tag and Category to filter your posts, you can also use custom fields and custom taxonomies to do it. This is a tutorial on doing it with the example of creating two filters for a bookselling site with two different features: publishers and authors.

Here are some tools we need:

* [Meta Box](https://metabox.io/) to have a framework to create custom post types and custom fields. It’s free and available on wordpress.org;
* [MB Custom Post Type & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create a custom post type named Book and a custom taxonomy named Publishers;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have an intuitive UI to create custom fields for Book custom post type in the backend.

## Using custom taxonomies

### Step 1: Create a custom taxonomy

Since I’ve already had a custom post type named **Books**, I will create a custom taxonomy for it. If you don't know how to create a custom post type, refer to [this article](https://docs.metabox.io/tutorials/create-custom-post-type-taxonomies/) for more details.

Go to **Meta Box > Taxonomies > Add New** to create the taxonomies. Then, just fill in the information for it.

![Create custom taxonomy](https://i.imgur.com/miT907T.png)

To assign this taxonomy to the **Book** post type, move to the **Post Types** tab and tick to the Book option.

![Assign the created taxonomy to the wanted post type](https://i.imgur.com/dGHlcGE.png)

If you want to display the list of the taxonomy’s terms as a checkbox list in the post editor like the below pic, just go to **Advanced** tab, tick the **Hierarchical** box.

![Choose option you want to display the list](https://i.imgur.com/DQBQMza.png)

![Go to Advanced section to choose](https://i.imgur.com/Wei8Bkq.png)

Otherwise, if you do not check the Hierarchical box, the taxonomy section will display like this:

![The taxonomy section displays the way you choose](https://i.imgur.com/qBYQoHQ.png)

After publishing the taxonomy, you will see it in the **Book** menu.

![Created taxonomy appears in the menu](https://i.imgur.com/dh8y7kR.png)

Now, you can create terms for the taxonomy.

![Create terms for the taxonomy](https://i.imgur.com/RtCi2no.png)

Then, you will see all the terms displayed in the post editor.

![Terms display in the post editor](https://i.imgur.com/DQBQMza.png)

### Step 2: Display the taxonomy terms on the archive page

Go to **Appearance > Theme File Editor** > `archive.php` and add this code to where you want to show the terms on the archive page.

```php
<div class="filter-custom-taxonomy">
    <?php $terms = get_terms( 'publisher' ) ?>
    <?php foreach ( $terms as $term ) : ?>
        <a href="?getby=cat&cat=<?= esc_attr( $term->slug ) ?>">
             <?= esc_html( $term->name ) ?>
        </a>
    <?php endforeach; ?>
</div>
```
In there, ***publisher*** is the slug of the created taxonomy. You can replace it with your own one.

This is how your term displays in the archive page:

![The terms display in the archive page](https://i.imgur.com/HuBUeD1.png)

### Step 3: Get posts by the taxonomy terms

Still in the **Theme File Editor**, go to the `functions.php` file, add these codes:

```php
function yourprefix_filter_archive_by_tax( $query ) {
    if ( is_admin() || ! $query->is_archive() || ! $query->is_main_query() || empty( $_GET['getby'] ) || 'cat' !== $_GET['getby'] ) {
        return;
    }
    $tax_query = [
        [
            'taxonomy' => 'publisher',
            'field'    => 'slug',
            'terms'    => $_GET['cat'],
        ],
    ];
    $query->set( 'tax_query', $tax_query );
    return $query;
}
add_action( 'pre_get_posts', ‘yourprefix_filter_archive_by_tax’);
```

In this code:

`yourprefix_filter_archive_by_tax`:This is the name that I set for the function. You can name it as you want

`if ( is_admin() || ! $query->is_archive() || ! $query->is_main_query() || empty( $_GET['getby'] ) || 'cat' !== $_GET['getby'] ) {`: This statement does check if the user is on the archive page on frontend and it runs the main query or not.
   
```
    $tax_query = [
        [
            'taxonomy' => 'publisher',
            'field'    => 'slug',
            'terms'    => $_GET['cat'],
        ],
    ];
```
This is to declare the variable to get the posts which have the taxonomy’s slug as `publisher`. `terms`    => $`_GET['cat']` is used to get the slug of the terms inside the taxonomy.

`add_action( 'pre_get_posts', ‘yourprefix_filter_archive_by_tax’);`

This is used to add a callback function to an action hook. `pre_get_posts` is the name of the hook filter and the `yourprefix_filter_archive_by_tax` is a callback to add into `pre_get_posts`. We use `pre_get_posts` to modify the query to get the wanted posts. We simply add a `tax_query` by publisher to get posts that have the selected term.

Here is the final result. All books of that term are filtered.

![The final result](https://i.imgur.com/qCrvR8p.gif)

Using custom fields

Step 1: Create a custom field

First of all, create a custom field named **Author** for the **Book** post type. This data saved in the custom field will be used for the filter.

In the **Admin Dashboard**, go to **Meta Box > Custom Fields > Add New > Add Fields**.
For the Book’s Author, I set it as a **Text** field to easily fill in the name of the author.

Note that, you should remember the field’s ID to add it to the code.

![add the field's ID to the code](https://i.imgur.com/XLkACEE.png)

Move to the **Settings** tab, choose **Location** as **Post Type**, and select **Book** to apply this field to this post type.

![Set location for the fields](https://i.imgur.com/zEivz1d.png)

Here is the created custom field in the post editor.

![created fields](https://i.imgur.com/luX44DB.png)

Step 2: Display the list of fields’ value

Add these codes below in the `archive.php file` to show the custom field’s values:

```php
<div class="filter-custom-field">
    <?php
    global $wpdb;
    $meta_values = $wpdb->get_col( "SELECT DISTINCT meta_value FROM $wpdb->postmeta WHERE meta_key='book_author'" );
    foreach ( $meta_values as $meta_value ) : ?>
        <a href="?getby=field&field=<?= esc_attr( $meta_value ) ?>">
            <?= esc_html( $meta_value ) ?>
        </a>
    <?php endforeach ?>
</div>
```
In this code, we use a raw SQL query to get all values of the `book_author` custom field. These values are stored in the post meta table.

Now, in the archive page, all the created custom fields have been obtained.

![All the created custom fields have been obtained in the archive page](https://i.imgur.com/Ri98Mwa.png)

### Step 3: Get posts by custom field’s values

In the `functions.php` file, use these codes to set the filter action:
```
function yourprefix_filter_archive_by_field( $query ) {
    if ( is_admin() || ! $query->is_archive() || ! $query->is_main_query() || empty( $_GET['getby'] ) || 'field' !== $_GET['getby'] ) {
        return;
    }

    $query->set( 'meta_key', 'book_author' );
    $query->set( 'meta_value', $_GET['field'] );

    return $query;
}
add_action( 'pre_get_posts',’yourprefix_filter_archive_by_field’);
```
Similar to filter posts by taxonomy, we use the `pre_get_action` and set the query parameters for meta query: `meta_key`, `meta_value`.

Here is the result when I filter all books of the author:

![The result after all steps](https://i.imgur.com/p1Hs1hN.gif)

