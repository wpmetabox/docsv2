---
title: Analyzing content in custom fields for SEO - Yoast SEO
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

We will use custom fields to add extra information for the posts / products. It also can be indexed by search engines along with the posts/products content, so we should add them to the content analysis of Yoast SEO to know if it is good for SEO or not.

We’ll use the [MB Yoast SEO Integration](https://metabox.io/plugins/meta-box-yoast-seo/) extension from Meta Box. It supports not only the Text, Textarea, and Wysiwyg fields from Meta Box but also cloneable fields (or repeated fields).

## Video version

<LiteYouTubeEmbed id='hI8rwrz3nyI' />

## Preparation

Make sure that you installed and activated both the **Meta Box** and **Yoast SEO** plugins. You can install Meta Box directly from wordpress.org or download it from [metabox.io](https://metabox.io/).

You also need these extensions of Meta Box:

* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to create custom fields easily.
* [MB Yoast SEO Integration](https://metabox.io/plugins/meta-box-yoast-seo/): to add content of custom fields to Yoast SEO Content Analysis to have a better/correct SEO score.

Now, when you go to a post or page, the content in the custom fields hasn’t been added in the SEO analysis yet. To analyze the content in the custom fields, follow this tutorial.

## 1. Configuring custom fields

Go to **Meta Box > Custom Fields** and create or configure some fields.

![Configure custom fields](https://i.imgur.com/T3t0fpP.png)

Open the field that you want Yoast SEO to analyze its content. Then, move to the **Advanced** tab and add new **Custom settings** like this:

![Add new custom settings](https://i.imgur.com/ptzcLIQ.png)

No matter if the field is cloneable or not, you can add the custom settings as above. It always works.

## 2. Checking the results in Yoast SEO

Before configuring the fields as above, Yoast SEO just analyze the content in the Content field like this:

![check the results in Yoast SEO](https://i.imgur.com/CucAdNM.png)

After completing creating custom settings, you can see the content of the field displayed in the SEO Analysis. For example, Yoast SEO analyzes my content in the description field and displays the information about length, focus keyword, …

![The final result](https://i.imgur.com/v4dOA0l.png)

The rest of your work now is writing SEO-optimized content.
