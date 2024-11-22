---
title: Creating a full-width WordPress dashboard widget
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

As a regular user of some classic WordPress themes, I often felt frustrated by the narrow widget area in the admin dashboard. The limited space made it challenging to manage and customize widgets effectively, slowing down my workflow.

I sought a solution to **expand the widget area to full width** to improve that. After some experimentation, I found a straightforward way to achieve this. Right now, I’m excited to share this customization with you guys, helping you **create a more user-friendly and efficient WordPress admin dashboard**.

![Expand the widget area to full width](https://i.imgur.com/NtkLlSx.png)

## Benefits of customizing full width widget

Customizing the widget area to full width brings several significant advantages:

* Increase display space: Allows for a clearer view of the content, making it more user-friendly.
* More professional admin interface: The expanded layout not only improves functionality but also gives your dashboard a modern and cleaner appearance.
* Improved efficiency: A full-width widget area can reduce the time spent adjusting and fine-tuning widgets, allowing for a more streamlined workflow.

Let's dive into how you can easily implement this customization in your WordPress admin dashboard.

## Easy to customize

To get started, you can see the images below, which illustrate how the narrow widget area can impact your user experience compared to the improved full-width layout. The difference is striking, making it clear why this change is worthwhile.

![The default narrow sidebar widget area can impact your user experience.](https://i.imgur.com/e53k2QK.png)

![The default narrow footer widget area can impact your user experience.](https://i.imgur.com/97lZOlk.png)

Now, simply add the following code to the `functions.php` file of your theme. This code will expand the widget area in the admin dashboard to nearly the full screen width, giving you more space for customization.

```css
function custom_widgets() {
    echo '<style>
        .wp-block[data-type="core/widget-area"] {
            max-width: 90%!important;
        }
        .blocks-widgets-container .editor-styles-wrapper {
            max-width: 100%!important;
        }
    </style>';
}
add_action('admin_enqueue_scripts', 'custom_widgets');
```

![Add code to customize full width widget in WordPress admin](https://i.imgur.com/p6Lk541.png)

**In there**:

```css
.wp-block[data-type="core/widget-area"] {
     max-width: 90%!important;
 }
```

This expands the widget frame to 90% of the screen width.

```css
.blocks-widgets-container .editor-styles-wrapper {
     max-width: 100%!important;
 }
```

This makes the content inside the widget frame take up the full 100% width.

```css
add_action('admin_enqueue_scripts', 'custom_widgets');
```

The `admin_enqueue_scripts` hook is used to insert CSS into the admin page, and the entire line ensures the `custom_widgets` function's CSS is added.

In practice, you could also adjust other factors like padding, margins, or even change the background color of the widget area for more visual customization.

After saving the file, revisit the widget area in your WordPress admin dashboard. You'll notice that the widget section is now expanded, making it easier to customize.

![The full-width sidebar widget](https://i.imgur.com/e53k2QK.png)

![The full-width footer widget](https://i.imgur.com/xQxs2Hp.png)

If you're interested in exploring more ways to optimize your WordPress experience, be sure to check out the resources available on Meta Box with some useful tips, such as [tips for license keys](https://metabox.io/license-key-management-remotely/). These sites offer a wealth of tips and tricks to help you make the most of your WordPress dashboard.
