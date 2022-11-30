---
title: Inserting Google Maps using custom fields
---

We will use custom fields to allow users to enter an address and mark the location on Google Maps in the back end. Then, this map along with the location markup will be displayed on the single post page.

## 1. Getting the Google Maps API Key

Following these Google’s instructions [here](https://developers.google.com/maps/documentation/javascript/get-api-key) to get the API Key. After completing all those steps, you will have an API Key as the following:

![Get the Google Máp API Key](https://i.imgur.com/nJ7CnDf.png)

Just copy this API Key to use in the next steps.

## 2. Creating custom fields to fill in address

I will add two custom fields, one for entering an address and one for displaying the location on map corresponding to the entered address.

Go to **Meta Box > Custom Fields > Add New**.

![Add new custom field](https://i.imgur.com/N1BBXnq.png)

In the settings of the Map field, you will see the **Google Maps API key** box, just enter the key which we got in the previous step. 

Next, also in the below **Google Maps** box, enter the ID of the Address field. This action will help the Map field obtain the information put in the Address field.

![Enter the ID of the Address field](https://i.imgur.com/nDLJcyO.png)

After creating all the fields, move to the **Settings** tab, choose **Location** as **Post Type** and select Post or Page, or any Post types you want to display the map.

![Set Location for the custom field](https://i.imgur.com/kJ77NyZ.png)

Then, you will see the two created information fields in the post editor. Just enter the address to check.

![2 created information fields in the post editor](https://i.imgur.com/uh6akVu.gif)

## 3. Displaying maps on the frontend

In this post, I use WooCommerce for my product on my website so I need my own WooCommerce hook and place these code to `functions.php` file.

```php
add_action( 'woocommerce_after_single_product', 'add_google_map' );
function add_google_map() {
    $args = array(
        'zoom' => 14,
        'marker' => true,
    );
    $map = rwmb_meta( 'map', $args );
    echo $map;
}
```

:::info

* `‘woocommerce_after_single_product’`: the default function in WooCommerce;
* `'add_google_map'`: the function I’ve created, you can change name as you want;
* `‘map’`:  the ID of the Map field above

:::

If you don’t use WooCommerce, you should add the code below to the file `single-[post-type-name].php`

```php
$args = array(
    'zoom' => 14,
    'marker' => true,
);
echo rwmb_meta( 'map', $args );
```

Note that `map` also is the ID of the Map field.

You can refer to some other parameters [here](https://docs.metabox.io/fields/map/#displaying-the-map) to display maps that fit your website.

Now, you will see the map display on your website.

![The map displays on the frontend](https://i.imgur.com/VWWEt5e.gif)


