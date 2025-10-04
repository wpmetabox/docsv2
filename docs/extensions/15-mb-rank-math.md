---
title: MB Rank Math
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

MB Rank Math helps you to add content of custom fields to Rank Math Content Analysis to have better SEO score.

![MB Rank Math Integration](https://imgur.elightup.com/tIyC0u9.jpg)

## Settings

To let Rank Math get a field's content to analyze, add `'rank_math_analysis' => true` to the field:

```php
[
	'name' => 'My custom editor',
	'id'   => 'custom_content',
	'type' => 'wysiwyg',
	'rank_math_analysis' => true,
],
```

The plugin supports all types of fields, such as text, textarea and wysiwyg.

This is the video tutorial:

<LiteYouTubeEmbed id='I3ncHxLxwlM' />
