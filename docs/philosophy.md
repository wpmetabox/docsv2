---
title: Philosophy
---

## Plugins-As-Libraries

Meta Box is created as a library to help WordPress users work with custom post types and custom fields easier. As a library, it has some uniqueness:

- It is very lightweight and contains only what is really needed.
- It can be [used in other themes or plugins](/bundling/) to provide the functionality needed for the themes or plugins.
- Extra functionality is provided by extensions, which can be installed as libraries as well.

:::warning No admin menu?

Because Meta Box is a library, the **free version** has no admin pages for configuration or settings. Instead, it provides an API that you can use to speed up the process of creating meta boxes and custom fields. Developers need to [use code](/creating-fields-with-code/) to create custom fields.

For normal users and beginners, we recommend using the [Meta Box Lite](https://metabox.io/lite/), which includes a UI to build custom fields inside WordPress. If you are a premium user, you can use the [Meta Box AIO](https://metabox.io/aio/), which includes all the extensions and a UI to build custom fields inside WordPress.
:::

## Modular

Meta Box is modular, which means each functionality is separated into an extension. Each extension is a WordPress plugin and can be installed and used independently or together. Extensions can also be used as libraries and you can [bundle them](/bundling/) in your themes or plugins.

The modularity keeps all the extensions as minimal as possible and keeps Meta Box not bloated.

:::tip

If you are afraid of a long plugin list, use our Meta Box AIO or MB Core, which are available for premium users. They contain all extensions in one plugin and you can enable or disable each extension easily. This shortens the plugin list while still providing all the needed functionality.

:::

## Performance

Performance is our top priority. Everything in Meta Box is considered carefully to perform well on large sites with hundreds of thousands of records. Because of this, we try hard to optimize code and follow WordPress coding standards as well as best coding practices.

Meta Box is lightweight, fast, clean, and will always stay that way.

## Flexibility

Built for both developers and normal WordPress users, we offer a powerful set of options to build and customize WordPress sites with custom post types and custom fields. People have choices to work with Meta Box via code or UI, from the back end to the front end, with or without other plugins like page builders.

Everything in Meta Box can be customized with a comprehensive list of [actions](/category/actions/) and [filters](/category/filters/). Developers can also extend Meta Box to [create new field types](/creating-new-field-types/), build [plugins and awesome stuff](https://github.com/wpmetabox/awesome-meta-box).
