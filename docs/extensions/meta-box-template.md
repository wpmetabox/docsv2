---
title: Meta Box Template
---

Meta Box Template helps you write configuration for custom fields in the YAML format, which is human-readable and easy to understand.

![meta box template](https://i.imgur.com/UIKF04C.png)

After installing, please go to *Settings &rarr; Meta Box Template* to add the template for custom meta boxes and custom fields.

## Quick sample

Before going into details about using the plugin, let's look at a quick sample to see how it works (screenshot above).

In the plugin settings page, enter the following content written in YAML. This is the settings for a field group. .

```yml
title: Laptop details
post_types: laptop
fields:
  - name: Brand
    type: select
    options:
      hp: HP
      asus: ASUS
      dell: Dell
  - Model
  - name: Images
    type: image_advanced
```

The plugin will parse this content into a PHP array as follows:

```php
[
    'title'      => 'Laptop details',
    'post_types' => 'laptop',
    'fields'     => [
        [
            'name'    => 'Brand',
            'type'    => 'select',
            'options' => [
                'hp'   => 'HP',
                'asus' => 'ASUS',
                'dell' => 'Dell',
            ],
        ],
        'Model',
        [
            'name' => 'Images',
            'type' => 'image_advanced',
        ],
    ],
]
```

This array will be sent to Meta Box and Meta Box will register a field group with this settings array. The result looks like this:

![meta box](https://i.imgur.com/C6W5MtS.png)

Now you understand how the plugin works. It's time to get familiar with YAML syntax.

## YAML syntax

In YAML, we mostly defines arrays with `key: value` pairs as you saw above. YAML has different ways to define simple arrays and associated arrays.

### Simple arrays

Simple arrays are called *sequences* in YAML. They use dashes followed by space (`- `) to define items:

```yml
- Item 1
- Item 2
- Item 3
```

You can also use short syntax like this:

```yml
[Item 1, Item 2, Item 3]
```

Both are equivalent to the following PHP code:

```yml
[ 'Item 1', 'Item 2', 'Item 3' ];
```

### Associated arrays

Associated arrays are called *mappings* in YAML. They use a colon followed by a space (`: `) to define each key/value pair:

```yml
key1: value1
key2: value2
key3: value3
```

alternatively:

```yml
{key1: value1, key2: value2, key3: value3}
```

which is equivalent to this PHP code:

```yml
[
    'key1' => 'value1',
    'key2' => 'value2',
    'key3' => 'value3'
]
```

### Nested arrays

Nested arrays (sequences or mappings) can be defined with 1 or more spaces:

```yml
fields:
  - name: Name
    id: name
    type: text
  - name: Image
    id: image
    type: image_advanced
```

which is equivalent to:

```php
[
    'fields' => [
        [
            'name' => 'Name',
            'id'   => 'name',
            'type' => 'text',
        ],
        [
            'name' => 'Image',
            'id'   => 'image',
            'type' => 'image_advanced',
        ],
    ],
]
```

:::tip

- The number of spaces does not matter. But keep the indentation consistent with the same number of spaces.
- Comments can be added by adding `#` at the beginning of the line.
- YAML accepts all data types string, number, booleans, etc.

:::

For more information about using YAML, the Symfony project wrote a [very good guide](https://symfony.com/doc/current/components/yaml/yaml_format.html) to follow. If you want the full reference, you can read it at [YAML homepage](https://www.yaml.org/spec/1.2/spec.html).

## Creating field groups

Each field group or custom field has a list of the settings which is written in `key: value` pairs (associated arrays). We use YAML mapping for these settings.

:::caution

Please refer to [field group settings](/creating-fields-with-code/) and [field settings](/field-settings/) when defining keys.

:::

**If you register single meta box**, then enter field group settings and its fields like this:

```yml
title: Profile
post_types: customer
fields:
  - name: Title
    id: prefix_title
    type: radio
    options:
      mr: Mr.
      ms: Ms.
  - name: Name
    id: name
    type: text
  - name: DOB
    id: dob
    type: date
    js_options:
      dateFormat: 'd-m-y'
```

**If you need to create multiple field groups**, use this template:

```yml
# First field group.
- title: Profile
  post_types: customer
  fields:
    - name: Title
      id: prefix_title
      type: radio
      options:
        mr: Mr.
        mrs: Mrs.
        ms: Ms.
    - name: Name
      id: name
      type: text
    - name: DOB
      id: prefix_dob
      type: date
      js_options:
        dateFormat: 'd-m-y'

# Second field group.
- title: Job Description
  post_types: [customer, supplier]
  fields:
    - name: Job Title
      id: job_title
      type: select_advanced
      options:
        director: Director
        manager: Marketing Manager
        tech: Technical Supporter
      placeholder: Please select your job title
    - name: Job Description
      id: job_desc
      type: wysiwyg
      options:
        media_buttons: false
        quicktags: false
```

## Config files

The plugin has an option that allows you to read the configuration from a specific file (`.yml`), not only from manual input.

To do that, in the plugin settings page, enter the absolute path to the configuration file (`.yml`). You can put the configuration file in any folder of your website. For convenience, the plugin supports the following path variables that you can used in the file paths:

Name|Description
--|--
`%wp-content%`|Path to `wp-content` directory, without trailing slash
`%plugins%`|Path to `wp-content/plugins` directory, without trailing slash
`%themes%`|Path to `wp-content/themes` directory. Same as [`get_theme_root()`](https://codex.wordpress.org/Function_Reference/get_theme_root) function, without trailing slash
`%template%`|Path to current theme directory. Same as [`get_template_directory()`](https://codex.wordpress.org/Function_Reference/get_template_directory) function, without trailing slash
`%stylesheet%`|Path to current child theme directory. Same as [`get_stylesheet_directory()`](https://codex.wordpress.org/Function_Reference/get_stylesheet_directory) function, without trailing slash

For example, if you put the config files in the theme's `meta-box` folder, then you can enter the following path:

```
%stylesheet%/meta-box/
```

If you put in the `wp-content/meta-box-yml` folder as well, then you can use both locations as follows:

```
%stylesheet%/meta-box/, %wp-content%/meta-box-yml/
```

:::tip

You can put multiple files in multiple folders. The plugin will read and parse them all. This process is real-time, which means if you make any changes, they will affect immediately. This is convenient if you want to keep all your configuration files in one place and put them under version control like Git.

:::