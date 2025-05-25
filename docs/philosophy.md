---
title: Philosophy
---

## Plugins-As-Libraries

Meta Box is created as a library to help WordPress users work with custom post types and custom fields easier. As a library, it has some uniqueness:

- It's very lightweight and contains only what's really needed.
- It can be [used in other themes or plugins](/bundling/) to provide the functionality needed for the themes or plugins.
- Extra functionality is provided by extensions, which can be installed as libraries as well.

:::caution No admin menu?

Because Meta Box is a library, the **free version** doesn't have admin pages for configuration or settings. Instead of that, it provides an API that you can use to speed up the process of creating meta boxes and custom fields. Developers need [use code](/creating-fields-with-code/) to create custom fields.

For normal users and beginners, we recommend using the [Online Generator](https://metabox.io/online-generator/) to build custom fields and generate the needed code to include into your themes or plugins.

**Important**: only the free version doesn't have UI, [premium users](https://metabox.io/pricing/) have powerful and friendly UI to create [custom post types](/custom-post-types/), [custom fields](/custom-fields/) and more.
:::

## Modular

Meta Box is modular, which means each functionality is separated into an extension. Each extension is a WordPress plugin and can be installed and used independently or together. Extensions can also be used as libraries and you can [bundle them](/bundling/) in your themes or plugins.

The modularity keeps Meta Box all the extensions as minimal as possible and keeps Meta Box not bloated.

:::tip

If you're afraid of a long plugin list, you should use our Meta Box AIO or MB Core, which is available for premium users. They contain all extensions in one plugin and you can enable/disable each extension easily. This helps shorten the plugin list while still providing all the needed functionality.

:::

## Performance

Performance is our top priority. Everything in Meta Box is considered carefully to perform well on large sites with hundreds of thousands of records. Because of this, we try so hard to optimize code and follow WordPress coding standards as well as best coding practices.

Meta Box is lightweight, fast, clean, and will always stay that way.

## Flexibility

Built for both developers and normal WordPress users, we offer a powerful set of options to build and customize WordPress sites with custom post types and custom fields. People have choices to work with Meta Box via code or UI, from the back end to the front end, with or without other plugins like page builders.

Everything in Meta Box can be customized with a comprehensive list of [actions](http://localhost:3000/category/actions/) and [filters](http://localhost:3000/category/filters/). Developers can also extend Meta Box to [create new field types](http://localhost:3000/creating-new-field-types/), build [plugins and awesome stuff](https://github.com/wpmetabox/awesome-meta-box).