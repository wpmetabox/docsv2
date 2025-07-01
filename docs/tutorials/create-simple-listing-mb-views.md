---
title: Creating a simple listing - Using MB Views
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Continuing our series on [how to create simple listing](https://docs.metabox.io/tutorials/create-simple-listing-meta-box-bricks/), where we've explored the way to build custom post listings using various page builders, this sixth part introduces a new approach only with Meta Box. It’s using **MB Views**.

This is my example with a list of restaurants:

![Example of listing along with filter.](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/Untitled%20Project-min.gif)
 
## Video version

<LiteYouTubeEmbed id='_-hQ68Ku-Jc' />

## Preparation

We will divide the page into 2 sections: one to display the products along with their information, and one for filters.

![The page is divided into 2 part: products and filters](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/two-parts-of-page.png)

Each product (restaurant) will be saved in a post of a custom post type. The product’s name and image are the title and feature images of the post. Other information, such as status, address, and logo, will be saved in separate custom fields.

For the filters, it’s based on the voucher information that is created with custom taxonomy. Each one is a term of that taxonomy. When you click on a voucher, the corresponding restaurants will be shown.

So, we highly recommend you install [**Meta Box AIO**](https://metabox.io/aio/) to have a framework for creating a custom post type, custom taxonomy, and custom fields. As well as, it provides all of the extensions from Meta Box, which help you to have advanced features: 

* [MB Custom Post Types and Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create a custom post type and custom taxonomies for products.
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create the custom field visually and efficiently. You can test the new interface of MB Builder [here](https://metabox.io/mb-builder-5-0-0-rc1/).
* [MB Views](https://metabox.io/plugins/mb-views/): to create a template for displaying product information and creating a filter.

Let’s go step-by-step.

## 1. Creating a custom post type

Right on the Meta Box dashboard, click on the **Create post type** button.

![Click on the Create post type button](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/create-post-type.png)

After publishing, there will be a new menu here. It’s your post type.

![The created custom post type](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/post-type-on-menu.png)

## 2. Creating a custom taxonomy

As I said, we’ll have a filter on the page based on a taxonomy. I will divide the vouchers into some discount levels, and each one of them will be a term of the taxonomy. So let’s move on to create them.

Go to **Meta Box** > **Taxonomies**, and create a new one.

![Go to Meta Box > Taxonomies, and create a new taxonomy](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/create-taxonomy.png)

In the **Advanced** section, enable the **Show admin column** option if you want to show them as an admin column. This setting is available when you have the MB Admin Columns extension. I did not mention it at the beginning because it’s optional.

![Enable the Show admin column option](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/show-admin-column.png)

Next, in the **Post Types** tab, choose the post type that you’ve just created. In my case, it’s the restaurant.

![Choose the post type to apply the taxonomy to.](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/choose-post-type.png)

Now, you can add some terms to your product’s taxonomy.

![Terms of taxonomy](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/create-terms.png)

## 3. Creating custom fields for product information

Besides the name and image, we need some extra information for the product. In my case, I need to store the address, logo, and the opening status. 

Click on the **Create custom fields** button in the dashboard to create a new field group for the product.

![Click on the Create custom fields button in the dashboard to create a new field group](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/create-custom-fields.png)

These are some fields I created:

![Some fields as example](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/field.png)

There’s no special setting for them. You can freely create more fields to store information for products as you want with [40+ field types](https://docs.metabox.io/fields/) provided by Meta Box.

After having all the fields you need, move to the **Settings** tab, choose **Location** as **Post type**, and select your post type to apply these fields to it.

![Set location for the field group.](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/field-location.png)

Now, when you add a new product, on the post editor screen, you can see the custom fields and a box to set the taxonomy.

![Fields and taxonomy in the post editor](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/post-editor.png)

Just add some information for your products.

You can easily view the voucher information in this column.

![The term is displayed as a column](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/taxonomy-in-column.png)

## 4. Displaying products on a listing page

We’ll show all the restaurants on a separate page. So, let’s create the page first.

Go to **Pages** and add a new one.

![Create a new page](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/create-page.png)

I leave it blank since the page content will be dynamically displayed with MB Views.

Now, go ahead to **Meta Box** > **Views**, and create a new view.

![Go ahead to Meta Box > Views, and create a new view.](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/create-view.png)

In the **Template** tab, you can use this button to insert fields or add code directly. I use both these ways.

First, add this code:

```
{% set args = { post_type: 'restaurant', posts_per_page: -1, orderby: 'date', order: 'DESC' } %}
{% set posts = mb.get_posts(args) %}
{% for post in posts %}

{% endfor %}
```

![Add code to get posts](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/get-posts.png)

**In there**:

* `{% set args = { post_type: 'restaurant', posts_per_page: -1, orderby: 'date', order: 'DESC' } %}`: is to declare that we’ll get posts from the `restaurant` post type.
* `mb.get_posts()`:  is a Meta Box function to get the posts.
* `{% for post in posts %}...{% endfor %}`: is a loop we use to get all the posts, since there are various restaurants.

Inside the loop, we’ll get data for each product.

First, to get the terms, add this code:

```
{% set vouchers = mb.get_the_terms(post.ID, 'voucher') %}
{% if vouchers %}
    {% for voucher in vouchers %}
        {{ voucher.name }} <br/>
    {% endfor %}
{% endif %}
```

![Add code to get terms](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/get-terms.png)

In the above code, I use `mb.get_the_terms()` to get the term. We also have more than one term, so there is a nested loop to get and display the name of the term in the case that the restaurant has a voucher.

To get and display the remaining information, use the button I mentioned before to insert fields from the right panel.

When you click to insert one field, for example, the post title for the product name, a generated code will be added to the **Template** tab.

![The generated code will be added to the Template tab when inserting a field.](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/insert-field.png)

The list also includes Meta Box fields. MB Views allows you to choose its size or output for some special fields. Then, we have the code as the image below:

![The template after inserting all the fields](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/template-tab.png)

After inserting all the fields you need, scroll down to the **Settings** section. Set the type of the template as **Singular**, then select your page you created for the product listing.

![Set location for the template](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/view-settings.png)

Now, view the page on the frontend, you can see all the data is displayed, but it may need to be made more beautiful.

![Product information is displayed on the frontend](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/data-display.png)

Back to the template, and add some **`div`** tags and classes, as well as modify the code a little bit.

![Add some div tags and classes, as well as modify the code a little bit.](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/add-div-class.png)

Then, move to the **CSS** tab, and add code for styling.

![Move to the CSS tab to add code for styling.](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/add-css.png)

After that, our page is more eye-catching.

![The page is better](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/better-look.png)

## 5. Adding filters to the page

We’ll use JavaScript to add action for the filter. However, we need to add some code to the created template first.

![Add some code for JavaScript action](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/add-code.png)

**Specifically**:

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://npmcdn.com/isotope-layout@3.0.6/dist/isotope.pkgd.js"></script>
```

These are to declare and load the jQuery and Isocope library we’ll use for filtering and grid layout.

```
<div class="filter-buttons">
    <button data-filter="*" class="filter-tab active">All Restaurants</button>
        {% set terms = mb.get_terms({taxonomy: 'voucher'}) %}
        {% for term in terms %}
        <button data-filter=".{{ term.slug }}" class="filter-tab">{{ term.name }}</button>
        {% endfor %}
    </div>
```

This part is for the button in the filter.

There will be a button for displaying all the restaurants. It has a label as **All Restaurants**.

The remaining buttons are terms of the `voucher` taxonomy along with their slug.

Next, I set the class for each term with this part:

```
{% set vouchers = mb.get_the_terms(post.ID, 'voucher') %}
{% set voucher_classes = '' %}
{% if vouchers is not empty %}
{% set voucher_classes = vouchers|map(v => v.slug)|join(' ') %}
{% endif %}
```

Then, the voucher_classes will be assigned for the slug of the term.

```
<div class="grid-item {{ voucher_classes }}">
```

You should add some CSS to style the filter.

![Add code for styling the filters](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/filter-css.png)

Now, go to the **JavaScript** tab to add some code for the action of filtering.

```
jQuery(document).ready(function ($) {
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    $('.filter-buttons button').on('click', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $('.filter-buttons button').removeClass('active');
        $(this).addClass('active');
    });
});
```

![Add code to the JavaScript tab](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/javascript.png)

**Explanation**:

* `var $grid = $('.grid').isotope({`: is to initialize Isotope, and each item will be specified to the `grid-item` class.
* `layoutMode: 'fitRows'`: is to arrange the items in horizontal rows.
* `$('.filter-buttons button').on('click', function () {`: is to recognize the action when the visitor clicks on a button for filtering through the `filter-buttons` class.
* `data-filter`: is the attribute that value will be retrieved from.

That’s all.

I’ve uploaded all the code to [GitHub](https://github.com/wpmetabox/tutorials/tree/master/create-a-simple-listing-with-mb-views), so you can refer to it.
Now, go to the page on the frontend, and check the filter. It works well.

![The filter works well](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/Untitled%20Project-min.gif)

The code also runs when the product has more than one voucher. That product will be shown in all the terms it has.

![The code also runs when the product has more than one voucher](https://i0.wp.com/images.elightup.com/meta-box/blog/simple-listing-views/expand.gif)

