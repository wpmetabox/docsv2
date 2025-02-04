---
title: Bundling Meta Box into another plugin
---

When you create a website for a client, hiding information such as the used plugins may be a good idea. In this case, **bundling Meta Box into another plugin** will come in handy.

I will create a new plugin then bundle Meta Box into it for example.

## 1. Creating a new plugin

In the **wp-content** folder > **plugin**, create a new folder named `project-demo` with a `project-demo.php` file inside. The php file will have the following content:

```php
<?php
/**
 * Plugin Name: Project Demo
 * Plugin URI: https://metabox.io
 * Version: 1.0
 * Author: Meta Box
 * Author URI: https://metabox.io
 */
```
In the **Admin Dashboard > Plugins**, you’ll see a new plugin named **Project Demo**. Let's activate it.

## 2. Bundling Meta Box using composer

We must download the necessary libraries from Meta Box into the plugin you've created.

In the **project-demo** folder, we create a file named `composer.json` with the following content:

```json
{
    "repositories":[
        {
            "type": "composer",
            "url": "https://wpackagist.org"
        }
    ],
    "require": {
        "wpackagist-plugin/meta-box": "^5"
    },
    "extra": {
        "installer-paths": {
            "vendor/meta-box/meta-box": ["wpackagist-plugin/meta-box"]
        }
    },
    "autoload": {
        "files": [
            "vendor/meta-box/meta-box/meta-box.php"
        ]
    }
}
```

**Explanation**:

* `require`: this is the declaration of the libraries that you need to download. In this example, I declare the Meta Box library only. You can refer to other codes to declare the libraries of the extensions here.
* `extra`: this is declaring a path of where we want to store the libraries.
* `autoload`: requires loading the libraries automatically when we activate the plugin.

:::caution

This code just bundles the free Meta Box plugin inside my plugin. If you want to add other Meta Box extensions to create advanced custom fields or settings pages, check out [this file](https://github.com/wpmetabox/library/blob/master/composer/composer.json).

When bundling other extensions, especially the premium ones, you must enter the product's license key (details in [this file](https://github.com/wpmetabox/library/blob/master/composer/composer.json)).

:::

In the `project-demo` folder, run **composer install** (make sure you installed Composer).

![Run composer install](https://i.imgur.com/nh2Kpop.png)

Then, the `project-demo` folder will include these folders and files as follows:

![The project demo folder will include folders and files](https://i.imgur.com/NZRgGWT.png)

Finally, run the following code in the `project-demo.php` file to download the libraries that you’ve declared:

```php
require 'vendor/autoload.php';
```

![The code](https://i.imgur.com/wD5bgNO.png)

## 3. Create custom post types and custom fields

From now on, you can create custom post types and custom fields using the created plugin. This is quite similar to installing Meta Box on a website. The difference is that if you don’t bundle extensions providing UI (such as [MB Builder](https://metabox.io/plugins/meta-box-builder/), [MB Custom Post Type & Custom Taxonomy](https://metabox.io/plugins/custom-post-type/)) into the plugin as I did, you have to code manually. Instead of writing code in the `functions.php` file, you must do it in the `.php` file of the created plugin (project-demo.php).

I’ll use the created plugin, which includes Meta Box, to create a new post type named **Project**.

### Creating a custom post type

Add the following code to the `project-demo.php` file:

```php
// Create a new post type
function prefix_register_post_type_project(){
    $label = [
        'name'          => 'Projects',
        'singular_name' => 'Project',
    ];

    $args = [
        'labels'      => $label,
        'supports'    => ['title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments'],
        'rewrite'     => [
            'slug'       => 'project',
            'with_front' => false,
            'feeds'      => true,
            'pages'      => true,
        ],
        'public'            => true,
        'show_ui'           => true,
        'menu_position'     => 20,
        'capability_type'   => 'page',
        'map_meta_cap'      => true,
        'has_archive'       => true,
        'query_var'         => 'project',
        'show_in_rest'      => true,
        'show_in_menu'      => true,
        'show_in_nav_menus' => true,
    ];
    register_post_type( 'project', $args );
}
add_action( 'init', 'prefix_register_post_type_project' );
```

On the **Admin Dashboard**, you’ll see a new menu named `Projects`. It’s the custom post type that you’ve created.

![New menu named project](https://i.imgur.com/JD0rMix.png)

### Creating custom fields

To create custom fields, you need to code manually if you didn’t include the Meta Box Buidler to the created plugin. Add code (as in the example below) into the `project-demo.php` file:

```php
// Add custom fields for the Project post type
function prefix_add_fields_project( $meta_boxes) {
    $meta_boxes[] = [
        'title'      => 'Information project',
        'post_types' => 'project',
        'fields'     => [
            [
                'id'   => 'investors',
                'name' => 'Investors',
            ],
            [
                'id'   => 'customer',
                'name' => 'Customer',
            ],
            [
                'id'   => 'description',
                'name' => 'Description',
                'type' => 'textarea',
            ],
            [
                'id'   => 'image',
                'name' => 'Images',
                'type' => 'image_advanced',
            ],
        ],
    ];
    return  $meta_boxes;
}
add_filter( 'rwmb_meta_boxes', 'prefix_add_fields_project' );
```

Try creating/editing an article in the Project post type. The fields will appear as follows:

![Try creating or editing an article in the project post type](https://i.imgur.com/hK1uSos.png)

### Creating template for singular post

Let’s create a Template for a single page of the Project post type. Add the following code to the `project-demo.php` file:

```php
// Register a new template for the single page of Project post type
function prefix_project_template( $template ) {
    if ( is_singular( 'project' ) ) {
        $template = plugin_dir_path( __FILE__ ) . 'project-template.php';
    }
    return $template;
}
add_filter( 'template_include', 'prefix_project_template', 99 );
```
Next, create a new file in the project-demo folder that is named `project-template.php` (it must have the name as we’ve declared above) with the following content:

```php
<?php get_header(); ?>
<div class="content">
    <h3><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h3>
    <p><?= get_the_date('d.m.Y'); ?></p>
</div>
<?php get_footer(); ?>
```

### Getting custom fields' values

Add the following code to the content of the template file (`project-template.php`):

```php
<div class="img-post">
    <?php
    $images = rwmb_meta( 'image', ['size' => 'full'] );
    foreach ( $images as $image ) {
        echo '<img src="'. $image['url']. '">';
    }
    ?>
</div>
<div class="infomation">
    <?php
    $investors = rwmb_meta( 'investors' );
    $customer = rwmb_meta( 'customer' );
    $description = rwmb_meta( 'description' );
    ?>
    <table>
        <tr>
            <td class="col-1">Investors</td>
            <td><?php echo $investors; ?></td>
        </tr>
        <tr>
            <td class="col-1">Customer</td>
            <td><?php echo $customer; ?></td>
        </tr>
        <tr>
            <td class="col-1">Description</td>
            <td><?php echo $description; ?></td>
        </tr>
    </table>
</div>
```
At this time, on the single post page of the **Project** post type, the content will be displayed as follows:

![The content displays like this](https://i.imgur.com/zCfYxyZ.png)

Fields and their values are not displayed well, so we need to style them a bit.

### Styling fields

In the `project-demo` folder, I created a file named style.css. Then, I enqueue it to the `project-demo.php` file:

```php
function prefix_project_styles() {
    wp_enqueue_style( 'prefix_main-style', plugin_dir_url( __FILE__ ) . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'prefix_project_styles' );
```

The structure of the project-demo folder is now like this:

![The structure of the folder](https://i.imgur.com/lxzpLEe.png)

Depending on how you want to display the custom fields, you add the corresponding code to the `style.css` file. For example:

```css
.information table, td {
    border: 1px solid black;
}

img {
    display: inline-block!important;
    height: auto;
    max-width: 200px!important;
    margin-right: 15px!important;
    margin-bottom: 20px;
}

.content {
    width: 800px;
    margin: 0 auto;
}

.col-1 {
    width: 30%;
}
```
After that, the fields’ values will be displayed as follows:

![The field's values will be displayed](https://i.imgur.com/yb88znd.png)
