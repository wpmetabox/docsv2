---
title: Displaying product variations - MB Views
---

Let’s create a single product page that contains different information of product variations stored in custom fields. Whenever you click on a color button, all the corresponding information of that variation will be displayed, even in the image gallery.

![Example of product variations](https://imgur.elightup.com/FuWHvCk.gif)

## Preparation

For this practice, we need these tools:

* [Meta Box](https://metabox.io): to have a framework to create custom post type and custom fields for products;
* [MB Custom Post Type & Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): creates custom post types for the products;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): provides a UI in the back end to create custom fields to save extra information for product variations;
* [MB Group](https://metabox.io/plugins/meta-box-group/): helps you organize custom fields into repeatable and collapsible groups;
* [MB Views](https://metabox.io/plugins/mb-views/): create templates for the product page as well as get the custom fields’ value and display them.

## Video version

(Coming soon)

## 1. Creating a new custom post type

Go to **Meta Box > Post Types > New Post Type**.

![Create a new post type](https://imgur.elightup.com/g3nBd0W.png)

## 2. Creating custom fields

Go to **Meta Box > Custom Fields > Add New** to create fields you want.

![add new custom fields](https://imgur.elightup.com/sB2mWc8.png)

This is the structure of the fields that I’ll create.

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

Each product may have more than one variation. Thus, we set the **Variations of Product** group as cloneable to have more spaces to add variations.

![Set groups to be cloneable](https://imgur.elightup.com/T5oEKfl.png)

After creating all the necessary fields, go to the **Settings** tab > **Location** > choose **Post Type** as **Online Shop** to apply these fields to it.

![Choose the wanted post type to apply the created custom fields](https://imgur.elightup.com/2va9DxP.png)

Back to the post editor, you will see all of the created custom fields.

![Created custom fields in the post editor](https://imgur.elightup.com/Ntyl4wY.png)

Now, just enter the information into the fields.

## 3. Displaying the variations information

To display the product variations information on the product page, you normally have to go to the theme’s files to add code or use a page builder. But, you have another way with the **MB Views** from **Meta Box** to create templates without touching the theme’s files.

So, let’s create a new template using it.

Instead of typing code into the box in the **Template** tab, you can insert fields to get their data.

![Insert fields in the template tab](https://imgur.elightup.com/KxxeSJE.png)

Just click the **Insert Field** button and choose which one you want. However, whenever you wanna add a field from a cloneable group, a loop will be added first. Just replace the text inside the loop by the field you want.

![Choose the wanted field](https://imgur.elightup.com/vZWtYLE.gif)

This is how it is after inserting all the fields.

![Insterting all the fields](https://imgur.elightup.com/o4BxH6F.png)

Also in the template, I get the value from the **Product Image** field twice. One displays in the large size, and one in the thumbnail size. All of them will be used to set a slider later.

I also changed the code a little bit to know when the variation has any promotion price and set a rule to display both of the original and promotional prices or just the original one.

![Change the code a little bit](https://imgur.elightup.com/NBp9TcQ.png)

Next, move to the **Settings** section of the view. Assign this template to the single product page.

![Assign this template to the single product page](https://imgur.elightup.com/ZysUrW0.png)

Go to the single product page, you can see the result.

![The result](https://imgur.elightup.com/238hUm2.gif)

It is so messy now. We’ll need some JS and CSS to make it more beautiful with a better layout.

Before styling, we need to edit this template a little bit more. Back to the view, then add some **div** tags to divide elements into sections. I put the code on our [Github](https://github.com/wpmetabox/tutorials/blob/master/display-product-variations/template-views.php), you can refer to it.

There is a notice that I added an A tag in the place where I output the color of variations. I also created a dynamic class there. It will generate different classes using the color name.

![Create dynamic class](https://imgur.elightup.com/nXxFEee.png)

I added an attribute named `data-id` for price, size, status as well as image gallery. This attribute will admit the value of the corresponding color name.

![Add an atribute](https://imgur.elightup.com/oN8nKj0.png)

On the single product page, all the elements have just been rearranged.

![All the elements of single product page have just been rearranged](https://imgur.elightup.com/m0ckVMh.gif)

## 4. Setting rules to display the variations

The images of the product variations will be in a slider and the information of each variation displays only when you choose the matching color. To have it, I use some JS and CSS. However, I’m using **My Custom Functionality** plugin instead of adding them directly to the theme. So, when I change the theme, it won’t be affected.

### Downloading the JS and CSS library

For the JS and CSS, I use the Slick library. It’s also available on [Github](https://github.com/kenwheeler/slick/tree/master/slick). We just need three files here.

![Use Slick library for the JS and CSS](https://imgur.elightup.com/fkSE9Mv.png)

Go to the folder of the My Custom Functionality plugin. Upload them into the corresponding JS and CSS folders.

### Creating custom JS for slider and rules

Next, to set a rule that stipulates for displaying the information of each variation as well as the slider, I’ll create a **custom.js** file in the **js** folder and add the following code to it.

![Create a custom.js file](https://imgur.elightup.com/qpLNLT0.png)

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
**Explanation**:

* `$('.slider-single').slick({ })` to create a slider for the elements that have the `.slider-single` class. They are product images which I set to display in the large size.
* `$('.slider-nav')`: to create a slider as well. The elements which have the .slider-nav class are product images which I set to display in the thumbnail size.
* `.on('init', function (event, slick) { })`: to identify which thumbnail is in the current slide. And, that thumbnail will be added a class as “is active”.
* `$('.slider-single').on('afterChange', function (event, slick, currentSlide) { })`: to trigger the event that someone clicks on the large image to move to the other one, then the thumbnail slider will be changed to the corresponding thumbnail.
* `$('.slider-nav').on('click', '.slick-slide', function (event) { })`: to trigger that event when someone clicks on the thumbnail slider. Then, it also displays the corresponding large image in the large slider.
* `jQuery(".grouped-product .color-contain-group .color-group .color-name a").click(function (e) { })`: to trigger when someone clicks on a product color using the A tag we added in the view.
* `jQuery(".color-contain-group .color-group .color-name").removeClass("active"); jQuery(this).show(); jQuery(this).parent().addClass("active")`: to remove the active class from the unselected color and add it to the selected one.
* `jQuery("div[data-id]").removeClass("active"); jQuery("div[data-id='" + jQuery(this).attr("href").replace("#", "") + "']").addClass("active")`: to remove and add the active class to all the elements that have value of the data-id attribute as the name of the color. It means that when you click on a color, all the corresponding information of that variation such as price, size, status, and image gallery will be displayed.
* `jQuery('.slider-single').slick('refresh')` and `jQuery('.slider-nav').slick('refresh')`: to refresh both sliders to load new images.

### Declaring the js and css files

Now, add code inside the function `custom_enqueue_files()` in the `plugin.php` file in the case you use the 3rd party plugin as I’m using. In the case you want to insert code directly into the theme file, use the `functions.php` file.

```php
            wp_enqueue_style('slick', plugin_dir_url( __FILE__ ).'/assets/css/slick.css');
	wp_enqueue_style('slick-theme', plugin_dir_url( __FILE__ ).'/assets/css/slick-theme.css');

	wp_enqueue_script('custom', plugin_dir_url( __FILE__ ).'/assets/js/custom.js', ['jquery']);
	wp_enqueue_script('slick-min', plugin_dir_url( __FILE__ ).'/assets/js/slick.min.js', ['jquery']);
	wp_enqueue_script('script', plugin_dir_url( __FILE__ ).'/assets/js/script.js', ['jquery']);
```

Now, the product images have already turned into a slider, but we cannot see all the information of each variation in the right place.

![The product images turn into a slider](https://imgur.elightup.com/QR1FF2Z.gif)

## 5. Styling the product page

Go to the view of Meta Box, add some code into the **CSS** tab of the view.

![Add some code into the css tab](https://imgur.elightup.com/UR1Fdjh.png)

You can refer to all of it on [Github](https://github.com/wpmetabox/tutorials/tree/master/display-product-variations).

Back to a singular product page, it’ll have a new look. When you choose a color, the photo gallery will automatically change according to that color. At the same time, the sizes and prices also change correspondingly.

![The final result](https://imgur.elightup.com/FuWHvCk.gif)
