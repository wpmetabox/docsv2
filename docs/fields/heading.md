---
title: Heading
---

import Screenshots from '@site/src/components/Screenshots';

The heading field creates a simple `<h4>` heading, which has an optional description. It doesn't have any value and is usually used to separate fields into sections for better reading experience.

## Screenshots

<Screenshots name="heading" col1={[
    ['https://imgur.elightup.com/CrDtd5s.png', 'The heading field interface']
]} />

## Settings

This field doesn't have any specific settings.

This is a sample field settings array when creating this field with code:

```php
[
    'type' => 'heading',
    'name' => 'Heading',
    'desc' => 'Optional description',
],
```
