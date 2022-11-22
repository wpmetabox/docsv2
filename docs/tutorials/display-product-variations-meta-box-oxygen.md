---
title: Displaying product variations - Meta Box + Oxygen
---

Let’s display product variations that are stored in custom fields to the product page. We’ll use **Oxygen** to build the page.

![Example of product variations](https://i.imgur.com/TbbFLpa.gif)

## Video version

(Coming soon)

## Before getting started

For this practice, we need these tools:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom post type and custom fields;
* [MB Custom Post Types & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the products;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have an UI to create custom fields right in the back end to save the product variations;
* [Meta Box Group](https://metabox.io/plugins/meta-box-group/): to organize custom fields into repeatable / cloneable and collapsible groups.

The last one is [Oxygen](https://oxygenbuilder.com/). You should use the 3.9 version or higher, which already has integration with Meta Box.

## Step 1: Create a new custom post type

Go to **Meta Box > Post Types > New Post Type**.

![Create a new custom post type](https://i.imgur.com/sA6AR2s.png)

Step 2: Create custom fields

The product normally has a lot of information that we need to save in custom fields. Go to **Meta Box > Custom Fields > Add New** to create them.

![create custom fields](https://i.imgur.com/sB2mWc8.png)

In this tutorial, just take a typical example of a fashion product and look at the below structure for fields:

<table>
<tbody>
<tr>
<td> Field </td>
<td> Types of Field </td>
<td> ID </td>
</tr>
<tr>
<td>Variations of Product</td>
<td>Group</td>
<td>variations_of_product</td>
</tr>
<tr>
<td>Product Image</td>
<td>Image Advanced</td>
<td>product_image</td>
</tr>
<tr>
<td>Size</td>
<td>Checkbox List</td>
<td>size</td>
</tr>
<tr>
<td>Original Price</td>
<td>Text</td>
<td>original_price</td>
</tr>
<tr>
<td>Promotional Price</td>
<td>Text</td>
<td>promotional_price</td>
</tr>
<tr>
<td>Status</td>
<td>Select</td>
<td>status</td>
</tr>
<tr>
<td>Color Name</td>
<td>Select</td>
<td>color_name</td>
</tr>
</tbody>
</table>


Since the product may have more than one variation, I set this group to be cloneable.

![Set the Variations of Product group as cloneable to have more spaces to add variations.](https://i.imgur.com/bTOZOMH.png)

In the **Settings** tab of the field group, remember to set location for it to be your product’s post type.

Back in the post editor of your product, you’ll see the created fields.

![The created custom fields are displayed in post editor.](https://i.imgur.com/Ntyl4wY.png)

Just enter information for the product.

## Step 3: Display the variations information

Go to the **Oxygen** menu and create a new template.

In the settings of the template, choose a design that you want the template inherit from, then choose your post type in the **Singular** section to apply the template to it.

![Choose the design and post type for the template.](https://i.imgur.com/Lnkfcnq.png)

Back to the post editor of your post type, you will see the section with **Edit with Oxygen** button. Click it to edit the template.

![Click Edit with Oxygen to edit the template.](https://i.imgur.com/vTyDODo.png)

Now, add a **Section** component for having a container.

![Add a Section component](https://i.imgur.com/kcgbyHK.png)

Then, add the **Code Block** inside and choose the **PHP & HTML** section to add code.

![Go to PHP & HTML in Code Block to add code.](https://i.imgur.com/FW8fQ9F.png)

![Add code to the Code Block](https://i.imgur.com/txC7S8S.png)

This code was uploaded to [Github](https://github.com/wpmetabox/tutorials/blob/master/display-product-variations/template-oxygen.php), you can refer to it for more details.

There are some points in the code we should clarify:

First, our group is cloneable, so we must create a loop to get information. Usually, you can create a loop only, then display all the fields inside the loop. But, for styling later and setting display rules for the variation easier, we should create a loop for each information separately.

To get product images, I use this code:

```php
<?php foreach ( $variations_of_product as $gallery ) : ?>
	<?php $variation_image_ids = $gallery['product_image'];?>
	<?php foreach ( $variation_image_ids as $large_image ) : ?>
		<?php $large = RWMB_Image_Field::file_info( $large_image, ['size' => 'large'] ); ?>
		<img src="<?php echo $large['full_url'] ?>">
	<?php endforeach; ?>
	<?php foreach ( $variation_image_ids as $thumbnail_image ) : ?>
		<?php $thumbnail = RWMB_Image_Field::file_info( $thumbnail_image, ['size' => 'thumbnail'] ); ?>
		<img src="<?php echo $thumbnail['full_url'] ?>">
	<?php endforeach; ?>
<?php endforeach; ?>
```
In there:
* `<?php $variation_image_ids = $gallery['product_image'];?>`: is to get value from the field that has ID product_image;
* `<?php foreach ( $variation_image_ids as $large_image ): ?>`: a loop to display all the images saved in the field;
* `RWMB_Image_Field::file_info()`: is to get images url.

I displayed all the images twice, one in large size, and one in thumbnail size. They’ll be used to set in the slider later.

For the price, there are Promotional Price and Original Price, but promotional price is not always available. So, I set a rule to display them as below:

```php
<?php $j = 0; ?>
<?php foreach ( $variations_of_product as $price ) : ?>
    <?php $j ++; ?>
    <?php if ($price['promotional_price']): ?>
        <?php echo $price['promotional_price'] ?>
        <?php echo $price['original_price'] ?>
    <?php else: ?>
        <?php echo $price['original_price'] ?>
    <?php endif; ?>
<?php endforeach; ?>
```

For the Size, it is a Checkbox List field with several options and allows choosing more than one option. So that we need a loop to get all the saved options. In addition, each option always has both the value and label. We use this syntax to get the values of options:

```php
<?php $k = 0; ?>
<?php foreach ( $variations_of_product as $size_group ) : ?>
    <?php $k ++; ?>
    <?php $o = 0; ?>
        <?php $values = $size_group['size']; ?>
        <?php foreach ( $values as $value ) : ?>
            <?php $o ++; ?>
            <?php echo $value; ?>
        <?php endforeach;?>
<?php endforeach; ?>
```

The Status field is a **Select** field (which has options as well as the checkbox list), but instead of getting the value of options as the Size, we should get the label. Then, the code will be much different from the Size’s one.

```php
<?php
    foreach ( $variations_of_product as $key => $variation ) {
        $class  = $key === 0 ? ' active' : '';
        $status = isset( $variation['status'] ) ? $variation['status'] : '';
        $group  = rwmb_get_field_settings( 'variations_of_product' );
    foreach ( $group['fields'] as $field ) {
        if ( empty( $field['options'] ) ) {
            continue;
        }
?>
    <?php if($field['options'][$status]): ?>
        <?= $field['options'][$status]; ?>
    <?php endif; ?>
    <?php
        }
    }			
?>
```

Furthermore, variations are differentiated by color, so we have this code to get colors:

```php
<?php foreach ( $variations_of_product as $color ) : ?>
	<?php $variation_color = $color['color_name']; ?>
			<a href="#<?php echo $variation_color ?>" class="color <?php echo $variation_color ?>" title="<?php echo $variation_color ?>"><?php echo $variation_color ?></a>
<?php endforeach; ?>
```


` data-id="<?php echo $price['color_name'] ?>" `

This attribute will obtain the name of the corresponding color, then we’ll know which images, prices, status, or sizes are of which variation. So that we can easily choose which information should be shown to fit the chosen color.

Apply the code then back to a single product page, you’ll see all the information of product display.

![Apply the code then back to a single product page](https://i.imgur.com/fOaCeZD.png)

## Step 4: Set rules to display the variations

Information of each variation is not always displayed. They will be shown only when the matching color displays. To set that rule and have a slider for the image gallery, we need some JS code. As well as, we should use some CSS to have a beautiful display.

Please notice that you can use a 3rd party plugin to add JS and CSS instead of inserting them directly into the theme file.

### Download the js and css library

For the slider and the rule, I use the Slick library. It is also available on [Github](https://github.com/kenwheeler/slick). We just need three files here.

![JS and CSS files in the Slick library.](https://i.imgur.com/fkSE9Mv.png)

### Create custom js for slider and rules

Next, create a new **custom.js** file in the **js** folder and add code to it.

![Add code to custom.js file.](https://i.imgur.com/qpLNLT0.png)

 ```js
jQuery(document).ready(function ($) {
    $('.slider-single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: false,
        infinite: false,
        useTransform: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',

    });

    $('.slider-nav')
        .on('init', function (event, slick) {
            $('.slider-nav .slick-slide.slick-current').addClass('is-active');
        })
        .slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false,
            focusOnSelect: false,
            infinite: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            }, {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }, {
                breakpoint: 420,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }]
        });

    $('.slider-single').on('afterChange', function (event, slick, currentSlide) {
        $('.slider-nav').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.slider-nav .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });

    $('.slider-nav').on('click', '.slick-slide', function (event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');

        $('.slider-single').slick('slickGoTo', goToSingleSlide);
    });
    jQuery(".grouped-product .color-contain-group .color-group .color-name a").click(function (e) {
jQuery(".color-contain-group .color-group .color-name").removeClass("active");
jQuery(this).show();
jQuery(this).parent().addClass("active");
jQuery("div[data-id]").removeClass("active");
jQuery("div[data-id='" + jQuery(this).attr("href").replace("#", "") + "']").addClass("active");
jQuery('.slider-single').slick('refresh');
jQuery('.slider-nav').slick('refresh');
e.preventDefault();
    });

    jQuery(".size-contain-group .size-group .info .list-size a").click(function (e) {
        e.preventDefault();
    });

    jQuery('.size-contain-group .size-group .info .list-size .size-name').click(function(){
        jQuery(this).addClass('active');
        jQuery('.size-contain-group .size-group .info .list-size .size-name').not(this).removeClass('active')
    })
})
```
Explanation:

* `$('.slider-single').slick({ })` to create a slider for the elements that have the .slider-single class. They are product images which I set to display in the large size.
* `$('.slider-nav')`: to create a slider as well. The elements which have the .slider-nav class are product images which I set to display in the thumbnail size.
* `.on('init', function (event, slick) { })`: to identify which thumbnail is in the current slide. And, that thumbnail will be added a class as “is active”.
* `$('.slider-single').on('afterChange', function (event, slick, currentSlide) { })`: to trigger the event that someone clicks on the large image to move to the other one, then the thumbnail slider will be changed to the corresponding thumbnail.
* `$('.slider-nav').on('click', '.slick-slide', function (event) { })`: to trigger that event when someone clicks on the thumbnail slider. Then, it also displays the corresponding large image in the large slider.
* `jQuery(".grouped-product .color-contain-group .color-group .color-name a").click(function (e) { })`: to trigger when someone clicks on a product color using the A tag we added in the view.
* `jQuery(".color-contain-group .color-group .color-name").removeClass("active"); jQuery(this).show(); jQuery(this).parent().addClass("active")`: to remove the active class from the unselected color and add it to the selected one.
* `jQuery("div[data-id]").removeClass("active"); jQuery("div[data-id='" + jQuery(this).attr("href").replace("#", "") + "']").addClass("active")`: to remove and add the active class to all the elements that have value of the data-id attribute as the name of the color. It means that when you click on a color, all the corresponding information of that variation such as price, size, status, and image gallery will be displayed.
* `jQuery('.slider-single').slick('refresh') and jQuery('.slider-nav').slick('refresh')`: to refresh both sliders to load new images.

### Declare the js and css files

Add code inside the function **custom_enqueue_files()** in the `plugin.php` file in the case you use the 3rd party plugin. Otherwise, add to the `functions.php` to declare all the above js and css files.

```
            wp_enqueue_style('slick', plugin_dir_url( __FILE__ ).'/assets/css/slick.css');
	wp_enqueue_style('slick-theme', plugin_dir_url( __FILE__ ).'/assets/css/slick-theme.css');

	wp_enqueue_script('custom', plugin_dir_url( __FILE__ ).'/assets/js/custom.js', ['jquery']);
	wp_enqueue_script('slick-min', plugin_dir_url( __FILE__ ).'/assets/js/slick.min.js', ['jquery']);
	wp_enqueue_script('script', plugin_dir_url( __FILE__ ).'/assets/js/script.js', ['jquery']);
```
	
Go back to a single product page, there is a slider and some differences.

![The product images have already turned into a slider.](https://i.imgur.com/QR1FF2Z.gif)

## Step 5: Style the product page

Back to page editor by Oxygen, go to **Manage > Stylesheets > Add Stylesheet** to have space to add CSS.

![Go to Manage > Stylesheets > Add Stylesheet to have space to add CSS](https://i.imgur.com/bXom5pT.png)

Then add code into the box. All the code is uploaded into [Github](https://github.com/wpmetabox/tutorials/blob/master/display-product-variations-with-Oxygen/custom.css), so you can refer to it.

![Add CSS to the box](https://i.imgur.com/fTmhDu0.png)

Now, on the single product page, you’ll see a final result. When you select a color, the photo gallery will change to that color automatically. At the same time, the sizes and prices also change correspondingly.

![The product variations turned into a new look.](https://i.imgur.com/TbbFLpa.gif)
