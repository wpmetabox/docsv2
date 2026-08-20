---
title: Meta Box - WooCommerce integration
sidebar_label: WooCommerce
---

Meta Box works with WooCommerce out of the box. You can add custom fields to product pages and order screens, and display the field values on the frontend.

## Adding custom fields to products

Products are a regular post type (`product`), so you can add custom fields to them the same way you add custom fields to any post type:

```php
add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
    $meta_boxes[] = [
        'title'      => 'Product details',
        // highlight-next-line
        'post_types' => 'product',
        'fields'     => [
            [
                'name' => 'Warranty',
                'id'   => 'warranty',
                'type' => 'number',
            ],
            [
                'name' => 'Size guide',
                'id'   => 'size_guide',
                'type' => 'textarea',
            ],
        ],
    ];

    return $meta_boxes;
} );
```

The meta box then appears on the product edit screen, and the field values are saved as product meta when you save the product.

To display the field values on the frontend, use the [helper functions](/displaying-fields-with-code/) such as [`rwmb_meta()`](/functions/rwmb-meta/) with the product ID:

```php
$product_id = 123;
$warranty   = rwmb_meta( 'warranty', '', $product_id );
$size_guide = rwmb_meta( 'size_guide', '', $product_id );
```

## Adding custom fields to orders

WooCommerce stores orders in different ways depending on the storage mode. Since WooCommerce 8.2, you can enable **High-Performance Order Storage (HPOS)** to store order data in dedicated custom tables instead of the default posts and post meta tables.

Meta Box supports both storage modes. To add custom fields to orders, you register a meta box with the `shop_order` post type:

```php
add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
    $meta_boxes[] = [
        'title'      => 'Order details',
        // highlight-next-line
        'post_types' => 'shop_order',
        'fields'     => [
            [
                'name' => 'Delivery date',
                'id'   => 'delivery_date',
                'type' => 'date',
            ],
            [
                'name' => 'Delivery notes',
                'id'   => 'delivery_notes',
                'type' => 'textarea',
            ],
        ],
    ];

    return $meta_boxes;
} );
```

The meta box then appears on the order edit screen, and the field values are saved when you save the order.

### Support for WooCommerce Subscriptions

Meta Box also supports the [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) extension. You can add custom fields to subscription edit screens by setting `post_types` to `shop_subscription`:

```php
add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
    $meta_boxes[] = [
        'title'      => 'Subscription details',
        // highlight-next-line
        'post_types' => 'shop_subscription',
        'fields'     => [
            [
                'name' => 'Notes',
                'id'   => 'subscription_notes',
                'type' => 'textarea',
            ],
        ],
    ];

    return $meta_boxes;
} );
```

### Displaying order field values

To display the order field values on the frontend, use the [helper functions](/displaying-fields-with-code/) such as [`rwmb_meta()`](/functions/rwmb-meta/) with the order ID:

```php
$order_id = 123;
$date     = rwmb_meta( 'delivery_date', '', $order_id );
$notes    = rwmb_meta( 'delivery_notes', '', $order_id );
```

## High-Performance Order Storage (HPOS)

### Compatibility

Meta Box has a built-in integration with WooCommerce HPOS. When HPOS is enabled, WooCommerce displays orders on a custom screen (`WooCommerce > Orders`) instead of the post editor, and stores order data in the `wc_orders` and `wc_orders_meta` tables instead of `posts` and `postmeta`.

Meta Box detects the HPOS state and does the following automatically:

- Declares compatibility with the HPOS feature to hide the incompatible plugin notice in WooCommerce settings.
- Saves custom field values to the order meta table (`wc_orders_meta`) with the WooCommerce API, so the data is stored correctly in the HPOS tables.

### Using custom tables

MB Custom Table works with order meta boxes as well. You can save custom fields for orders, both in the legacy mode and in HPOS mode.

To do this, set `storage_type` and `table` in the meta box settings. This is the same way you do it for posts:

```php
add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
    $meta_boxes[] = [
        'title'        => 'Order details',
        'post_types'   => 'shop_order',
        // highlight-start
        'storage_type' => 'custom_table',
        'table'        => 'my_order_table',
        // highlight-end
        'fields'       => [
            [
                'name' => 'Delivery date',
                'id'   => 'delivery_date',
                'type' => 'date',
            ],
            [
                'name' => 'Delivery notes',
                'id'   => 'delivery_notes',
                'type' => 'textarea',
            ],
        ],
    ];

    return $meta_boxes;
} );
```

For details on creating custom tables and connecting them to meta boxes, see the [MB Custom Table documentation](/extensions/mb-custom-table/).

### Limitations

With HPOS, custom columns added by [MB Admin Columns](/extensions/mb-admin-columns/) still display on the orders screen. **Searching and sorting orders by custom field values are not supported in HPOS mode.** The meta queries used by these features do not integrate with the HPOS order list screen.
