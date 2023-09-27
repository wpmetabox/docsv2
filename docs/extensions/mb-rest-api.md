---
title: MB Rest API
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

MB Rest API helps you retrieve and update custom fields via the WordPress Rest API. It's very helpful if you develop an application that uses WordPress as a back end such as a mobile app. Or you need to integrate WordPress with another system.

The extension works only with custom fields created by Meta Box and extensions. For custom custom fields or fields created by other plugins, please refer to [WordPress documentation](https://developer.wordpress.org/rest-api/).

## Getting custom fields' values with Rest API

After installing and activating MB Rest API, create some custom fields as usual and enter data for them. For example, assuming you have a [custom post type](/custom-post-types/) called "Event" and you [create a field group](/custom-fields/) "Event details" for it like this:

![Event details fields](https://i.imgur.com/xnKMcwg.png)

And then enter the data for an event:

![Enter data for an event](https://i.imgur.com/lrZHeJw.png)

Assuming the event post ID is `5837`, then you'll need to make a `GET` request to retrieve post data via the [standard WordPress Post endpoint](https://developer.wordpress.org/rest-api/reference/posts/#retrieve-a-post). Here is a sample cURL request:

```bash
curl https://domain.com/wp-json/wp/v2/event/5837
```

:::caution Custom post type rest API support

If you use Rest API for a custom post type, make sure you enable Rest API support for it. You can do that with our [MB Custom Post Types & Custom Taxonomies](/extensions/mb-custom-post-type/) or with code according to the [WordPress docs](https://developer.wordpress.org/rest-api/extending-the-rest-api/adding-rest-api-support-for-custom-content-types/). In this article, we're using "Event" post type which has Rest API supports, and the Rest API base is `event`.

:::

When running the cURL command, you'll see the response in JSON like this:

![JSON response from Rest API](https://i.imgur.com/ghgUntK.png)

If you're using an API testing app like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/), then you can preview the response in a beautiful syntax. This is the same request and response created with Insomnia (click to enlarge the image):

![Sending Rest API requests with Insomnia](https://i.imgur.com/1QCuebL.png)

:::success Tip

If you don't have Postman or Insomnia and don't want to use a command line, you can simply open the Rest API URL in your browser (Firefox or Google Chrome). They'll show you the response in JSON. Firefox even automatically formats it beautifully.

:::

In any case, the response is a JSON string that contains full post details (which come from the default WordPress Rest API response) and also custom fields from Meta Box. **The Meta Box fields are available in the `meta_box` key** of the response (which is highlighted in the red rectangle in the screenshot from Insomnia above).

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

If you want to get fields' values for other object types like terms or users, simply change the Rest API endpoint. WordPress provides a [full list of endpoint references](https://developer.wordpress.org/rest-api/reference/) that you can take a look at. Here are some sample endpoints:

```bash
https://yourdomain.com/wp-json/wp/v2/posts/
https://yourdomain.com/wp-json/wp/v2/posts/1234
https://yourdomain.com/wp-json/wp/v2/post-type-slug/
https://yourdomain.com/wp-json/wp/v2/post-type-slug/1234
https://yourdomain.com/wp-json/wp/v2/categories/
https://yourdomain.com/wp-json/wp/v2/categories/1234
https://yourdomain.com/wp-json/wp/v2/users/
https://yourdomain.com/wp-json/wp/v2/users/1234
```

## Updating custom fields' values with Rest API

To update custom fields' values via Rest API, we'll use [standard WordPress endpoints](https://developer.wordpress.org/rest-api/reference/posts/#update-a-post) and add a new key `meta_box` to your `POST` requests. This key should be either an object like:

```json
{
	"meta_box": {
		"field_1": "value_1",
		"field_2": "value_2"
	}
}
```

or a JSON string of this object. The plugin will automatically fetch the fields and update the corresponding custom fields.

For example, to update the event that we use in the examples above, we'll need to create a `POST` request like this:

```bash
curl --request POST \
  --url http://mb.test/wp-json/wp/v2/event/5837/ \
  --header 'Authorization: Basic YWRtaW46Zmx2ZCBiUlhtIDR3Z04gVUxzWCBNbGxXIDJHbGg=' \
  --header 'Content-Type: application/json' \
  --data '{
	"post_title": "London PHP Day 2023",
	"meta_box": {
		"price": "45",
		"buy_ticket_url": "https://ticketbox.com/e/5837"
	}
}'
```

Or if you prefer to use an API testing tool like Postman or Insomnia, you can do that as well (click the image to enlarge):

![Updating custom fields via Rest API with Insomnia](https://i.imgur.com/N05F1TJ.png)

When updating data via Rest API:

- You must authenticate to send `POST` requests. WordPress has a [detailed documentation](https://developer.wordpress.org/rest-api/using-the-rest-api/authentication/) about it.
- The content type of the request is recommended to be `application/json`, so you can send JSON data easily. If you write JavaScript code to send `POST` requests with `fetch` API, please [follow our article](https://metabox.io/send-get-post-request-with-javascript-fetch-api/) on doing that.

The response from the update requests is not important as long as the returned status is `200 OK`. This response is simply the same as retrieving data via `GET`, which can be used to examine the data after updating.

In case you use [a group field](/extensions/meta-box-group/), and you want to update a whole group, you can pass it as a full JSON object like this:

```json
{
	"post_title": "London PHP Day 2023",
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

Similar to getting custom fields' values, if you want to update fields' values for other object types like terms or users, simply change the Rest API endpoint, according to WordPress's [full list of endpoint references](https://developer.wordpress.org/rest-api/reference/).

## Video tutorial

Here is a quick video tutorial we created to demonstrate how to use Postman to get and update custom fields for posts:

<LiteYouTubeEmbed id='YMjAIZLUeF4' />
