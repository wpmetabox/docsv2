---
title: Reorder posts/terms
---

It allows you to **drag and drop** posts of a custom post type or terms of a custom taxonomy to rearrange them inside the WordPress admin. This is useful when you need a custom ordering that doesn’t follow the default publish date or alphabetical order.

This feature is added to the [MB Custom Post Types and Custom Taxonomies](https://docs.metabox.io/extensions/mb-custom-post-type/) extension, so it’s completely free.

## Reordering posts of a custom post type

To enable this feature, when creating a custom post type, navigate to the **Features** tab, and simply enable the setting as below: 

![Enable the reorder posts feature](./img/reorder-feature/enable-reorder-posts.png)

If you use code to create the custom post type, just add this code:

```
'order'  => true,
```

After that, on the post type admin screen, there is a new tab named **Re-Order**; just go there to drag and drop posts as the order you want.

![Click on the Re-Order tab to rearrange posts](./img/reorder-feature/reorder-posts.png)

### Hierarchical support

The Reorder posts feature works well with the hierarchical structure (parent-child posts). When reordering, the child posts will follow along with the parent one. It is similar to subfields in a group.

![Hierarchical support](./img/reorder-feature/hierarchical-posts.png)

### Frontend display

The custom ordering is applied automatically on archive pages or anywhere you query those posts.

![Posts on the frontend](./img/reorder-feature/frontend.png)

## Reorder terms of a custom taxonomy

Similar to reordering posts, to enable the Reorder terms feature, go to **Meta Box** > **Taxonomies**, then navigate to the **Features** tab.

![Enable the reorder terms feature](./img/reorder-feature/enable-reorder-terms.png)

Or add this parameter when you create the custom taxonomy:

```
'order'  => true,
```

Then, go to the term screen, click on the **Re-Order** button to drag and drop them as expected, including the **hierarchical terms**.

![Drag and drop terms to reorder](./img/reorder-feature/reorder-hierarchical-terms.png)

In the post editor, the terms are displayed in the order exactly.

![Ordered terms in the post editor](./img/reorder-feature/reorder-hierarchical-terms.png)

