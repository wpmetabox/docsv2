---
title: Adding related posts
---

Normally, most tools set related posts automatically based on the keywords, tags, categories, or taxonomies. It might be not precise, especially when you want particularly related posts to be prior on the list. In that case, **choosing related posts manually using custom fields will be the best way**. This post will show how!

## Before getting started

We need to install the following tools:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): is a framework that allows you to custom custom fields;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have an UI in the backend to create custom fields.

## Step 1: Create a new custom field

We’ll create a custom field in the type of **Post** where users can choose which post will be related to the current one.

In the admin dashboard, go to the **Meta Box > Custom Fields > Add New**.

Click **Add Field** button and select **Post** in the drop-down menu.

![Add field and select Post field](https://i.imgur.com/Uxj2t8a.png)

There’re some settings that you should pay attention here:

* **Label description**: where you put any notice for users. I leave the ‘Choose 3 Related Posts’ text here to request the writers choose enough three posts to be related.
* **Post types**: choose Post, Page, or Custom Post Type you want to query.
* **Field type**: stipulates how the post field shows the posts inside. There are several styles to show such as: Select advanced (default), Checkbox list, Radio list,...

![The important settings](https://i.imgur.com/GVW00A5.png)

After configuring all options for the field, move to the **Settings** tab, set the **Location** as **Post type**, then choose a post type of the post where you want to show related posts. I set it as **Post** here.

![Set location for the custom fields](https://i.imgur.com/tveh2L4.png)

Back to the post editor of your post type, you will see the created field and a list of posts to choose from:

![Created field in the post editor](https://i.imgur.com/kr4iWdH.png)

## Step 2: Display the related posts on the front end

The created Post field saves the IDs of chosen related posts. It returns an array of values as follows:
```
array (size=3)
    0 => string '36' (length=2)
    1 => string '25' (length=2)
    2 => string '29' (length=2)
```

So, we use the function to get the value of posts in this form:

```
$post_ids = rwmb_meta( $field_id );
foreach ( $post_ids as $post_id ) {
    echo '<p>'. get_the_title( $post_id ). '</p>';
}
```

In there:

* `$field_id`: ID of the Post Field which we set
* `$post_ids`: The array of post IDs that the Post Field returns

We can customize or export data by IDs. It means that you can get any information from the related posts such as title, thumbnail, excerpt to show on your website. I did get just the title in the above code.

To get more information, we also use the function as above with some customization. Put the following gist to the single.php file if your post type is post. If your post is another custom post type, create a file named `single-{custom_post_type_slug}.php` and put the gist into there.

```php
<?php 
$field_id = 'related_posts';
$related_posts = rwmb_meta( $field_id );
if (isset($related_posts)) { ?>
	<div id="relatedPosts" class="related-posts">
		<h3 class="related-posts-headline"><em>You might also like</em></h3>
		<div class="related-posts-items jp-related-posts-grid"> 
			<?php foreach ($related_posts as $related_post) { ?>
				<div class="related-post-item">
					<a class="related-post-a" href="<?php echo get_the_permalink($related_post); ?>" title="<?php echo get_the_title($related_post); ?>" rel="nofollow">
						<img class="related-post-img" src="<?php echo get_the_post_thumbnail_url($related_post, 'thumbnail'); ?>" alt="<?php echo get_the_title($related_post); ?>">
					</a>
			    <h4 class="related-post-title">
				<a class="related-post-a" href="<?php echo get_the_permalink($related_post); ?>" title="<?php echo get_the_title($related_post); ?>" rel="nofollow"><?php echo get_the_title($related_post); ?></a>
			    </h4>
			    <p class="related-post-excerpt"><?php the_excerpt($related_post); ?></p>
			</div>

			<?php } ?>
		</div>
	</div>	 
<?php } ?>
```

Then, the related posts will be displayed like this:
![The final result](https://i.imgur.com/9xIf0QH.png)

