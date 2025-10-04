---
title: JSON schema autocomplete simplifies field group creation
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Writing JSON manually for field groups offers flexibility, but it’s easy to make mistakes. **JSON Schema Autocomplete solves that with instant suggestions and validation**.

![JSON Schema autocomplete suggests options as you type.](https://imgur.elightup.com/y7ucROz.png)

## Video version

<LiteYouTubeEmbed id='yN7u6Cc4X2g' />

## What is JSON schema autocomplete?

**JSON Schema** is a standard for defining the structure and expected values of JSON data. It describes what properties are allowed, their data types, whether they’re required, and other constraints.

When you link your JSON file to a JSON Schema, you unlock a powerful autocomplete feature that allows smart editors like VS Code understand the structure of your data and help you write JSON more quickly and accurately, all while offering real-time feedback on your code.

**Particularly**:

* **Autocomplete suggestions for properties**: Smart editors will suggest properties such assuch as "`id`", "`type`", "`name`", etc.
* **Contextual options for each property**: For example, when defining 'type' for a field, it suggests field types supported by Meta Box, such as “`text`”, “`number`”,
“`datetime`”, and more.
* **Error detection**: The editor will flag errors if incorrect data types are used or required properties are missing.

## Why use JSON schema sutocomplete?

JSON Schema autocomplete is more than just a time-saver. It helps you:

* **No need to memorize fields**: Just type a quotation mark (`" "`) and the editor will instantly show a list of valid options.
* **Avoid typos and syntax errors**: If you type something wrong, forget a comma, or miss a required property, the editor will flag it immediately.
* **Write faster**: No more switching tabs to check documentation; everything is right there in your editor.

In fact, [Meta Box has already provided official JSON Schemas](https://github.com/wpmetabox/schema/) for field groups, relationships, and setting pages. This is not commonly found in other custom field plugins, making Meta Box stand out.

Besides, once you create the field group in the JSON file, simply sync it to the database using the [local JSON](https://docs.metabox.io/local-json/#syncing-changes) feature, and then your field group will be set up with the fields and settings you need.

## Experience JSON schema autocomplete in action

To use the JSON Schema Autocomplete feature, you only need to include a `$schema` reference at the top of your `.json` file. Then, the editor will then understand the expected structure, like I mentioned earlier, start suggesting keys, and even highlight errors as you go.

Let’s walk through how to set this up, with an example of a field group for page settings with two fields:

* A Radio field to choose the sidebar position (left or right).
* A Switch field to toggle the sticky header.

Start by creating a file named `mb.json` manually. This is where you'll define your field group and fields using JSON.

![Create a mb.json file manually.](https://imgur.elightup.com/Pth8IZm.png)

Next, include a special line at the top to reference the Meta Box JSON schema:

```
"$schema": "https://schemas.metabox.io/field-group.json"
```

![Include a $schema reference at the top of your mb.json file.](https://imgur.elightup.com/VrkZrR0.png)

This line tells the editor to use the Meta Box JSON Schema for autocomplete and validation.

If you're creating a relationship or settings page, you can easily reference the corresponding schema link since Meta Box has already written schemas for them [here](https://github.com/wpmetabox/schema/).

Now, you'll see how helpful it can be!

Once you want to add some basic information like `title`,` id`, and post types, autocomplete suggests options as you type by listing them in a dropdown.

![Autocomplete suggests options as you type by listing them in a dropdown.](https://imgur.elightup.com/CUtRh9x.png)

Moving to create the fields!

As soon as you define fields inside the `fields` array, autocomplete also works there, helping you choose the correct field type, available options, and more.

![Create fields with autocomplete.](https://imgur.elightup.com/y7ucROz.png)

Even better, if anything is missing or incorrectly formatted, the editor will alert you immediately.

![Get warnings if anything is missing or invalid.](https://imgur.elightup.com/W5sskBp.png)

## Sync JSON file to load field groups

After saving, your JSON file is ready and saved in the correct folder (usually /mb-json/ in your theme), head to the **Meta Box** > **Custom Fields**.

If the file is valid, you’ll see it listed with a **Sync available** status. Just click **Sync**, and your field group will be ready to use, exactly as you defined it.

![Just click Sync, and your field group will be ready to use.](https://imgur.elightup.com/UCwSbWQ.png)

You can also click **Review** to preview the configuration before syncing, in case you want to check for any errors.

Once synced, you’ll see the field group with the same configuration as we created in the JSON file.

![The field group with the same configuration as we created in the json file.](https://imgur.elightup.com/3rNu7MT.png)

If you're curious how this fits into the bigger picture, check out how Meta Box works with [Local JSON](https://metabox.io/local-json/) and [registering blocks via JSON](http://metabox.io/mb-blocks-register-block-using-json-file/). These approaches all share the same goal: bringing more control, reusability, and clarity to your workflow.

By the way, JSON Schema isn’t just for humans; it also powers AI tools like ChatGPT or Cursor to generate field groups from a simple prompt. See how [Meta Box makes custom fields with AI](https://metabox.io/create-custom-fields-with-ai/) easier than ever.

