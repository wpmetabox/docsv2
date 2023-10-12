---
title: MB Rest API
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

[MB Rest API](https://metabox.io/plugins/mb-rest-api/) helps you get and update custom fields via the WordPress Rest API. It's very helpful if you develop an application that uses WordPress as a back end such as a mobile app, or if you need to integrate WordPress with another system.

The extension works only with custom fields created by Meta Box and extensions. For custom custom fields or fields created by other plugins, please refer to [WordPress documentation](https://developer.wordpress.org/rest-api/).

## Endpoints

For posts, terms, users, and comments, MB Rest API doesn't create new Rest API endpoints. Instead, the plugin **extends the [existing WordPress endpoints](https://developer.wordpress.org/rest-api/reference/) for getting and updating data**.

Any custom field groups added to WordPress data like posts (including all custom post types), users, and categories (including all custom taxonomies), will be available in their respective WP REST API endpoints, namely:

```
/wp/v2/{post-type}
	posts, pages, custom-post-types, etc.
/wp/v2/{post-type}/{post_id}
/wp/v2/{custom-taxonomy}
	categories, tags, custom-taxonomy, etc.
/wp/v2/{custom-taxonomy}/{term_id}
/wp/v2/users
/wp/v2/users/{user_id}
/wp/v2/comments
/wp/v2/comments/{comment_id}
```

**For [settings pages](https://metabox.io/plugins/mb-settings-page/)**, because WordPress doesn't have any endpoints to get and update options, the plugin provides a custom endpoint as follows:

```
/meta-box/v1/settings-page
```

We'll see how to use these endpoints below.

## Request methods

MB Rest API uses standard methods as follows:

- `GET`: for getting Meta Box fields
- `POST`: for updating Meta Box fields and requires you to authenticate to perform the request.

## Getting custom fields for posts

Assuming you have a [custom post type](/custom-post-types/) called "Event" and you [create a field group](/custom-fields/) "Event details" for it like this:

![Event details fields](https://i.imgur.com/xnKMcwg.png)

And then enter the data for an event:

![Enter data for an event](https://i.imgur.com/lrZHeJw.png)

**Instead of creating extra Rest endpoints, which introduce a new API and syntax, MB Rest API extends the [existing WordPress endpoint for posts]((https://developer.wordpress.org/rest-api/reference/posts/#retrieve-a-post)) to add data for Meta Box's fields.**

So if the event post ID is `5837`, then you'll need to make a `GET` request to retrieve post data via the standard WordPress post endpoint: `https://domain.com/wp-json/wp/v2/event/5837`.

Here is a sample cURL request:

```bash
curl https://domain.com/wp-json/wp/v2/event/5837
```

or you can [get the data with JavaScript via the Fetch API](https://metabox.io/send-get-post-request-with-javascript-fetch-api/) like this:

```js
const request = await fetch( 'https://domain.com/wp-json/wp/v2/event/5837' );
const response = await request.json();
console.log( response );
```

:::caution Custom post type rest API support

If you use Rest API for a custom post type, make sure you enable Rest API support for it. You can do that with our [MB Custom Post Types & Custom Taxonomies](/extensions/mb-custom-post-type/) or with code according to the [WordPress docs](https://developer.wordpress.org/rest-api/extending-the-rest-api/adding-rest-api-support-for-custom-content-types/). In this article, we're using the "Event" post type which has Rest API supports, and the Rest API base is `event`.

:::

The response is a JSON string that contains full post details (which come from the default WordPress Rest API response) and **also custom fields from Meta Box**. **The Meta Box fields are available in the `meta_box` key** of the response (which is highlighted in the red rectangle in the screenshot from Insomnia above).

Here is the full JSON response with Meta Box fields highlighted:

```json
{
	"id": 5837,
	"date": "2023-07-10T11:41:57",
	"date_gmt": "2023-07-10T04:41:57",
	"guid": {
		"rendered": "http:\/\/mb.test\/?post_type=event&#038;p=5837"
	},
	"modified": "2023-09-27T09:25:51",
	"modified_gmt": "2023-09-27T02:25:51",
	"slug": "php-day-in-london-july-2023",
	"status": "publish",
	"type": "event",
	"link": "http:\/\/mb.test\/event\/php-day-in-london-july-2023\/",
	"title": {
		"rendered": "PHP Day in London &#8211; July 2023"
	},
	"content": {
		"rendered": "",
		"protected": false
	},
	"featured_media": 0,
	"template": "",
	"topic": [
		85
	],
	// highlight-start
	"meta_box": {
		"vanue": "City of London, Greater London, England, United Kingdom",
		"map": {
			"latitude": "51.5156177",
			"longitude": "-0.0919983",
			"zoom": "14"
		},
		"date": "2023-09-30 08:00",
		"speakers": [
			{
				"name": "Brian Garney",
				"company": "Hometown",
				"work_title": "Developer"
			},
			{
				"name": "Ryan Coords",
				"company": "365Devs",
				"work_title": "CTO"
			}
		],
		"price": "50",
		"buy_ticket_url": "https:\/\/amazon.com\/events\/london\/129.html"
	},
	// highlight-end
	"_links": {
		"self": [
			{
				"href": "http:\/\/mb.test\/wp-json\/wp\/v2\/event\/5837"
			}
		],
		"collection": [
			{
				"href": "http:\/\/mb.test\/wp-json\/wp\/v2\/event"
			}
		],
		"about": [
			{
				"href": "http:\/\/mb.test\/wp-json\/wp\/v2\/types\/event"
			}
		],
		"wp:attachment": [
			{
				"href": "http:\/\/mb.test\/wp-json\/wp\/v2\/media?parent=5837"
			}
		],
		"wp:term": [
			{
				"taxonomy": "topic",
				"embeddable": true,
				"href": "http:\/\/mb.test\/wp-json\/wp\/v2\/topic?post=5837"
			}
		],
		"curies": [
			{
				"name": "wp",
				"href": "https:\/\/api.w.org\/{rel}",
				"templated": true
			}
		]
	}
}
```

If you have multiple field groups for a post, then **all fields are merged into a single key `meta_box`** in the response.

If you're using an API testing app like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/), then you can preview the response in a beautiful format. This is the same request and response created with Insomnia, our favorite API client that we'll use throughout this article (click to enlarge the image):

![Getting posts with Insomnia](https://i0.wp.com/images.elightup.com/meta-box/docs/rest-api/get-post-insomnia.png)

:::success Tip

If you don't have Postman or Insomnia and don't want to use a command line, you can simply open the Rest API URL in your browser (Firefox or Google Chrome). They'll show you the response in JSON. Firefox even automatically formats it beautifully.

:::

:::info Data format

Note that the data returned from the Rest API is auto-formatted. For example, for maps, you'll see an array of latitude, longitude, and zoom as in the example above (not the plain text "latitude,longitude,zoom" as in the database). For other fields, like images and files, you'll get more information for the fields, just like you do with the helper functions [`rwmb_meta`](/functions/rwmb-meta/) or [`rwmb_get_value`](/functions/rwmb-get-value/).

:::

## Updating custom fields for posts

To update custom fields via Rest API, we'll need to perform a `POST` request to the same Rest endpoint. Because `POST` request allows you to change data, you'll need to authenticate your requests, using one of the [available authentication methods](#authentication). In this request, we'll need to pass the data as a JSON encoded object, which contains a key `meta_box` for Meta Box fields:

```json
{
	"meta_box": {
		"field_1": "value_1",
		"field_2": "value_2"
	}
}
```

Below is an example of a `POST` request to update an event using cURL:

```bash
curl --request POST \
	--url http://mb.test/wp-json/wp/v2/event/5837/ \
	--user 'USERNAME:PASSWORD'
	--header 'Content-Type: application/json' \
	--data '{
		"title": "London PHP Day 2023",
		"meta_box": {
			"price": "45",
			"buy_ticket_url": "https://ticketbox.com/e/5837"
		}
	}'
```

If you use JavaScript, you can make a `POST` request with the WordPress [apiFetch](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-api-fetch/) utility:

```js
import apiFetch from '@wordpress/api-fetch';

apiFetch( {
	path: '/wp/v2/event/5837',
	method: 'POST',
	data: {
		title: "London PHP Day 2023",
		meta_box: {
			price: "45",
			buy_ticket_url: "https://ticketbox.com/e/5837"
		}
	},
} ).then( res => console.log( res ) );
```

(Note that you can use [vanilla JavaScript with Fetch API to send a `POST` request](https://metabox.io/send-get-post-request-with-javascript-fetch-api/). In this example, we use the WordPress library for simplicity and clarity.)

Or if you prefer to use an API testing tool like Postman or Insomnia, you can do that as well (click the image to enlarge):

![Updating posts with Insomnia](https://i0.wp.com/images.elightup.com/meta-box/docs/rest-api/update-post-insomnia.png)

The response from the update requests is not important as long as the returned status is `200 OK`. This response is simply the same as retrieving data via `GET`, which can be used to examine the data after updating.

In case you use [a group field](/extensions/meta-box-group/), and you want to update a whole group, you can pass it as a full JSON object like this:

```json
{
	"title": "London PHP Day 2023",
	"meta_box": {
		"price": "45",
		"buy_ticket_url": "https://ticketbox.com/e/5837",
		"speakers": [
			{
				"name": "Brian Garney",
				"company": "eLightUp",
				"work_title": "Developer"
			},
			{
				"name": "Ryan Coords",
				"company": "365Devs",
				"work_title": "CTO"
			}
		]
	}
}
```

## Getting & updating custom fields for terms, users, comments

If you want to get fields' values for other object types like terms or users, simply change the Rest API endpoint. WordPress provides a [full list of endpoint references](https://developer.wordpress.org/rest-api/reference/) that you can take a look at (`1234` is a sample ID):

Posts, pages, and custom post types:

```bash
https://domain.com/wp-json/wp/v2/posts/
https://domain.com/wp-json/wp/v2/posts/1234
https://domain.com/wp-json/wp/v2/pages/
https://domain.com/wp-json/wp/v2/pages/1234
https://domain.com/wp-json/wp/v2/post-type-slug/
https://domain.com/wp-json/wp/v2/post-type-slug/1234
```
Categories, tags, and custom taxonomies:

```bash
https://domain.com/wp-json/wp/v2/categories/
https://domain.com/wp-json/wp/v2/categories/1234
https://domain.com/wp-json/wp/v2/tags/
https://domain.com/wp-json/wp/v2/tags/1234
https://domain.com/wp-json/wp/v2/custom-taxonomy-slug/
https://domain.com/wp-json/wp/v2/custom-taxonomy-slug/1234
```

Users:

```bash
https://domain.com/wp-json/wp/v2/users/
https://domain.com/wp-json/wp/v2/users/1234
```

Comments:

```bash
https://domain.com/wp-json/wp/v2/comments/
https://domain.com/wp-json/wp/v2/comments/1234
```

## Getting settings pages

Unlike posts, terms, or users, WordPress doesn't have any endpoints to get and update options, so the plugin provides a custom endpoint for settings pages as follows:

```
/meta-box/v1/settings-page
```

To get settings page data, simply create a `GET` request to this endpoint with a **required parameter `id`, which is the settings page ID**. Please note that to get settings page data, you need to have a proper capability. See the [authentication](#authentication) section below for details.

Here is an example with cURL:

```bash
curl --request GET \
	--url 'https://domain.com/wp-json/meta-box/v1/settings-page?id=website-settings' \
	--user 'USERNAME:PASSWORD'
```

Or via JavaScript with WordPress [apiFetch](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-api-fetch/) library:

```js
import apiFetch from '@wordpress/api-fetch';

apiFetch( {
	path: '/meta-box/v1/settings-page',
	method: 'GET',
	data: {
		id: "website-settings",
	},
} ).then( res => console.log( res ) );
```

The response is a JSON with all settings page data:

```json
{
	"address": "4812 Jones Avenue, Winston Salem, NC 27108",
	"phone": "+1-336-720-4261",
	"email": "info@jourrapide.com"
}
```

You can also perform the request in Postman or Insomnia like this:

![Get settings page with Insomnia](https://i0.wp.com/images.elightup.com/meta-box/docs/rest-api/get-settings-page-insomnia.png)

## Updating settings pages

To update a settings page, simply make a `POST` request to the settings page's endpoint `/meta-box/v1/settings-page` with data as JSON like this:

```json
{
	"id": "settings-page-id",
	"data": {
		"field_1": "value_1",
		"field_2": "value_2",
	}
}
```

Here is an example with cURL:

```bash
curl --request POST \
	--url http://mb.test/wp-json/meta-box/v1/settings-page \
	--user 'USERNAME:PASSWORD' \
	--header 'Content-Type: application/json' \
	--data '{
		"id": "website-settings",
		"data": {
			"address": "412 Jones Avenue, Winston Salem, NC 27108",
			"phone": "+1-336-720-4621",
			"email": "contact@jourrapide.com"
		}
	}'
```

or via JavaScript with WordPress [apiFetch](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-api-fetch/) library:

```js
import apiFetch from '@wordpress/api-fetch';

apiFetch( {
	path: '/meta-box/v1/settings-page',
	method: 'POST',
	data: {
		id: "website-settings",
		data: {
			address: "412 Jones Avenue, Winston Salem, NC 27108",
			phone: "+1-336-720-4621",
			email: "contact@jourrapide.com"
		}
	},
} ).then( res => console.log( res ) );
```

You can also perform the request in Postman or Insomnia like this:

![Update settings page with Insomnia](https://i0.wp.com/images.elightup.com/meta-box/docs/rest-api/update-settings-page-insomnia.png)

## Authentication

For **posts, terms, users, and comments**, authentication is required when you **update data** via Rest API. The plugin uses the default WordPress authentication methods. This means that if you are building something in the WordPress dashboard, the code will be run in an already logged-in session, and no specific authentication is needed.

If you build something using the REST API endpoints outside a logged-in session (for example a JavaScript application powered by the REST API), you will need to authenticate for any POST requests. Please refer to the [WordPress documentation](https://developer.wordpress.org/rest-api/using-the-rest-api/authentication/) for doing this.

For **settings pages**, authentication is **required for both getting and updating data**. In addition, as the settings page has a parameter `capability`, it requires the current user that is making the request must have that specific capability.

For example, if you create a settings page for users with `manage_options` capability (admins), then when making requests to get and update settings page data, make sure you have the same `manage_options` capability.

## Video tutorial

Here is a quick video tutorial we created to demonstrate how to use Postman to get and update custom fields for posts:

<LiteYouTubeEmbed id='YMjAIZLUeF4' />
