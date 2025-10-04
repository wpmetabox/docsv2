---
title: Field settings
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Each field contains settings to determine where and how data is loaded and saved. All fields share some common settings, but also offer unique settings per field type. There are also settings from extensions which are explained on each extension docs.

Below is the list of common field settings with a brief description. The keys are for reference in code.

<Tabs>

  <TabItem value="general" label="General">

![general settings](https://imgur.elightup.com/MJ3JRiT.png)

Name | Key | Description
--- | --- | ---
Label | `name` | Field label. Optional. If empty, the field input is 100% width.
ID | `id` | Field ID. Required and must be unique. **It will be used as `meta_key` when saving to the database**. Use only numbers, letters, and underscores (and rarely dashes).
Type | `type` | Field type. Required.
Label description | `label_description` | Label description, displayed below the field label. Optional.
Input description | `desc` | Field description, displayed below the field input. Optional.
Default value | `std` | Default value. Optional.
Placeholder | `placeholder` | Placeholder text for the input or select box. Optional.
Required | `required` | Whether the field is required (`true` or `false`). Optional. Default `false`.
Disabled | `disabled` | Whether the field is disabled (`true` or `false`). Optional. Default `false`.
Read only | `readonly` | Whether the field is read only (`true` or `false`). Optional. Default `false`.
Multiple | `multiple`|Does the field have multiple values (like the `select` field)? Optional. Default `false`.
Cloneable | `clone` | Is the field clonable (repeatable)? `true` or `false`. Optional. Default `false`.
Sortable | `sort_clone`|Ability to drag-and-drop reorder clones (`true` or `false`). Optional. Default `false`.
Clone default value | `clone_default`|Clone the default value of fields? `true` or `false` (default).
Clone as multiple | `clone_as_multiple`|Whether to store clone values in multiple rows in the database? Optional. Default `false`.
Max number of clones | `max_clone`|Maximum number of clones. Optional. Default `0` (unlimited).
Min number of clones | `min_clone`|Minimum number of clones. Optional. Default `0`.
Add more text | `add_button`|The text for **Add more** clone button. Optional. Default "+ Add more".
Hide from front end | `hide_from_front`|Whether to hide the field from front-end submission forms. Required the [MB Frontend Submission](https://metabox.io/plugins/mb-frontend-submission/) extension to work.
Hide from REST API | `hide_from_rest`|Whether to hide the field from REST API responses. Required the [MB REST API](https://metabox.io/plugins/mb-rest-api/) extension to work.

  </TabItem>

  <TabItem value="advanced" label="Advanced">

![advanced settings](https://imgur.elightup.com/jX7YDH3.png)

Name | Key | Description
--- | --- | ---
Before | `before` | Custom HTML outputted before field's HTML.
After | `after` | Custom HTML outputted after field's HTML.
Custom CSS class | `class` | Custom CSS class, in case you want to customize the field. Optional.
Custom sanitize callback | `sanitize_callback` | Custom PHP callback for sanitizing field value before saving into the database. Set it to `none` to bypass the sanitization. See [more details](/sanitization/).
Save field value | `save_field` | Whether to save field value. Optional. Default `true`. This option doesn't work in the block editor (Gutenberg).
Custom HTML5 attributes | `attributes` | Custom attributes for inputs. See [more details](/custom-attributes/).
Validation | `validation` | Validation rules for fields. Optional. See [more details](/validation/).
Custom settings | N/A | Custom field settings, useful when you want to add your settings to fields.

  </TabItem>

</Tabs>
