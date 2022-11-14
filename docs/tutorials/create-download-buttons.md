---
Tile: Creating download buttons on the frontend
---
Let’s find out how to create a download button to download a file. The file wilI be saved in a custom field and got automatically.

![Use the Download button on the product page of Meta Box](https://i.imgur.com/aFZ5p6C.png)

## Before getting started

For this practice, we need the following tools:

* <a href="https://wordpress.org/plugins/meta-box/">Meta Box core plugin</a>: the framework to create custom fields;
* <a href="https://metabox.io/plugins/meta-box-builder/">Meta Box Builder</a>: provides a UI on the back end to create custom fields to save the file for downloading. Or you can use the free <a href="https://metabox.io/online-generator/">Online Generator</a> tool instead.

## Step 1: Create custom fields

Go to **Meta Box** &gt; **Custom Fields**.

Just add a **File Advanced** field to save the downloading file.

![Create the Download Button Using Custom Fields](https://i.imgur.com/ewAMKk8.png)

Next, move to the **Settings** tab &gt; **Location** &gt; choose **Post Type** as the one you want.

![move to the Settings tab > Location > choose Post Type as the one you want](https://i.imgur.com/iDOoLPL.png)

Then, you will see the created field in the post editor.

![the created field in the post editor](https://i.imgur.com/f50SCZv.png)

Now, just upload a file you want to share by clicking the **Add Media** button. Here is the document that I’ve uploaded:

![The document is inserted to the custom fields](https://i.imgur.com/Iqve4Hs.png)

## Step 2: Display the download button on the frontend

There are 2 methods to display the download button: **adding code to the theme or using a shortcode**. Note that the first way is helpful when you just need to display this button **in the same position on all pages**. If you want it to appear **in different positions on different pages**, the second one will make sense.

### Method 1: Adding code to the theme

For example, I’ll display the download button at the end of all blog posts.

![Display the Download Button in the end of the post content](https://i.imgur.com/nZdJ1TF.png)

To do so, add this code to the `functions.php` file of the theme:

```
add_action( 'estar_entry_footer_before', 'estar_child_add_link' );
function estar_child_add_link() {
	?>
	<div class="document_link_download abc">
		<?php
		$files = rwmb_meta( 'file_download' );
		foreach ( $files as $file ) : ?>
			
		<a class="document_link" href="<?php echo $file['url'] ?>" target="_blank">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
			<?php esc_html_e( 'Download document', 'estar' ) ?>		
		</a>

		<?php endforeach ?>
	</div>
	<?php
}

```

**Explanation**:

* `'file_download'` : the ID of the custom field for saving the documents that we’ve created in step 1.
* `'estar'`: the theme that I’m using.
* `add_action( 'estar_entry_footer_before', 'estar_child_add_link' );function estar_child_add_link() { ?&gt;`: the code to specify the location in which you want to display the download button. In this case, I display the download button in the `'estar_entry_footer_before'` hook of the eStar theme. This hook is created right on the tags list. You can refer to this hook <a href="https://github.com/elightup/estar/blob/master/template-parts/content/post.php">here</a> (line 42).

So, you can see the result like this:.<img alt="The download button is displayed on the front end" height="691" src="https://i.imgur.com/Oaa3J40.png" width="1000">

### Method 2: Using a shortcode

First, add this code to the `functions.php` to create the shortcode:


```
add_shortcode( 'estar_button_download', 'estar_button_download');
function estar_button_download() {
    ob_start();
    ?>
    <div class="document_link_download abc">
        <?php
	$files = rwmb_meta( 'file_download' );
	foreach ( $files as $file ) : ?>
		
	<a class="document_link" href="<?php echo $file['url'] ?>" target="_blank">
	    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
	    <?php esc_html_e( 'Download document', 'estar' ) ?>		
	</a>

	<?php endforeach ?>
    </div>
    <?php
    return ob_get_clean();
}

```

<strong>In there</strong>: `estar_button_download` is the shortcode for the download button (you can name it as whatever you want). Then, you just need to insert this shortcode in the wanted positions, such as posts, pages, and widgets.</pre>

Here is an example of how we insert that shortcode in the content of a post:

<img alt="Display the Download Button Using a Shortcode" height="666" src="https://i.imgur.com/8Tb6VyZ.png" width="1000">

Or I can add the shortcode to a widget like this:

![Insert the shortcode into a widget in WordPress](https://i.imgur.com/YqFNDx8.png)

The download button shows up on the frontend.

![Display the download button in the sidebar of WordPress website](https://i.imgur.com/gtX5VW5.png)


