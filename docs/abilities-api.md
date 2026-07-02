---
title: Abilities API
---

The Abilities API from Meta Box builds on the [WordPress Abilities API](https://developer.wordpress.org/apis/abilities-api/) to let AI agents - like Claude or Cursor - perform actions on your site's content. To handle the communication, Meta Box uses the official [MCP Adapter plugin](https://github.com/WordPress/mcp-adapter), which translates WordPress abilities into the Model Context Protocol (MCP) that AI agents understand.

Depending on the enabled abilities, AI agents can get, create, update, or delete custom post types, taxonomies, posts, terms, field groups, custom fields, and field values that Meta Box supports.

## Connecting AI agents to WordPress

First, connect WordPress to an AI agent via the [MCP Adapter plugin](https://github.com/WordPress/mcp-adapter). It exposes WordPress as an MCP server that AI agents understand.

### 1. Install MCP Adapter plugin

1. Download the [latest release of MCP Adapter](https://github.com/WordPress/mcp-adapter/releases) from GitHub
2. Go to **Plugins &rarr; Add New &rarr; Upload Plugin**, select ZIP, install & activate

### 2. Generate application password

MCP Adapter uses Application Passwords for authentication (not your account password).

1. Go to **Users &rarr; Profile**
2. Scroll to the **Application Passwords** section
3. Enter name (e.g. "MCP Agent"), click **Add New Application Password**
4. Copy generated password - shown once only

:::warning
An app password grants the same capabilities as the current user. To restrict permissions, create a dedicated WordPress user with an appropriate role (e.g. Editor, Author) first, then generate an application password under that user.
:::

### 3. Configure MCP clients

Configure MCP clients (Claude Desktop, Claude Code, Cursor, etc.) to connect to your WordPress MCP servers using HTTP Transport via proxy. Use `@automattic/mcp-wordpress-remote` to bridge local stdio to remote WordPress HTTP:

```json
{
  "mcpServers": {
    "wordpress-http": {
      "command": "npx",
      "args": [
        "-y",
        "@automattic/mcp-wordpress-remote@latest"
      ],
      "env": {
        "WP_API_URL": "http://your-site.com/wp-json/mcp/mcp-adapter-default-server",
        "LOG_FILE": "/path/to/logs/mcp-adapter.log",
        "WP_API_USERNAME": "your-username",
        "WP_API_PASSWORD": "your-application-password"
      }
    }
  }
}
```

Replace:
- The domain in `WP_API_URL` with your site domain
- `WP_API_USERNAME` with WordPress username
- `WP_API_PASSWORD` with Application Password from Step 2
- `LOG_FILE` with the path where logs are written

For more details, follow the instructions in the [MCP Adapter plugin's GitHub repository](https://github.com/WordPress/mcp-adapter).

## Post type abilities

### Creating and managing custom post types

To create a new custom post type, simply describe the structure you want in natural language. For example:

> *Create a custom post type named Event, set the menu icon to "calendar", enable the "Enable abilities" option in the Features tab, and enable all abilities available under that option.*

![Prompt to create a new custom post type](./img/abilities-api/prompt-cpt.png)

Within seconds, you have the expected post type:

![The created post type](./img/abilities-api/cpt.png)

You can also ask your AI agents to update the post type settings if you want.

### Abilities for posts

To enable abilities for posts of a custom post type, go to the **Features** tab when creating or editing a post type, then turn on **Enable abilities**. They include:

![Enable abilities for posts](./img/abilities-api/cpt-abilities.png)

You can enable or disable each ability independently. Once enabled, compatible AI agents can invoke these abilities through the Abilities API.

For example, after creating an Event Post Type, you can ask the AI agent to generate posts for it:

> *Find 5 latest WordPress events in the world. They're posts of the event post type*

Then, you have 5 posts as expected without creating them manually:

![The created posts by AI agent](./img/abilities-api/posts.png)

## Taxonomy abilities

Abilities API also allows you to create, update, and delete custom taxonomies, as well as manage the terms within them.

![The created posts by AI agent](./img/abilities-api/create-tax.png)

Taxonomy abilities are configured in the same way as post type abilities. 

![Enable abilities for terms](./img/abilities-api/tax-abilities.png)

Then, you can retrieve, create, edit, or delete terms. For example:

![The updated terms by AI agent](./img/abilities-api/terms.png)

## Field group abilities

Field group abilities allow AI agents to manage field groups and custom fields. They are built into Meta Box and are available by default. You don't need to enable them before using them with compatible AI agents.

With these abilities, AI agents can:

* Create field groups
* Update (edit) field groups
* Delete field groups
* Add or remove custom fields
* Update field settings, such as labels, IDs, types, etc.

For instance, to create a field group for the `event` post type, you can use a prompt like this:

“ Create a field group Event Details for the event post type. That field group includes 2 fields:
- Address (type: text, ID: address)
- Date and Time (type: Datetime, ID: datetime)"

And this is the result:

![The updated terms by AI agent](./img/abilities-api/fields.png)

If you're not sure which Custom Fields to add, AI agents can suggest suitable ones based on your requirements.

## Field value abilities

Similar to other objects, with the Abilities API, you can:

* Get field values
* Input data to custom fields
* Edit field values
* Delete field values

This is particularly useful when importing structured data from external sources.

This is an example:

![The filled-in values by AI agent](./img/abilities-api/field-values.png)
