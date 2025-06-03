---
title: Displaying related posts based on a shared relationship using MB Views
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

This time, we’ll display related posts based on a shared relationship using the **MB Views** extension. You can use this approach to show related events by the same artist, products in the same category, or articles by the same author.

We will create a bi-directional relationship between events and artists using another extension from Meta Box - MB Relationships. Then, show events linked to the same artist on a single event page like this.

![Show events linked to the same artist on a single event page](https://i.imgur.com/gCYnR7G.png)

## Video version

<LiteYouTubeEmbed id='Q6pZg3zBKJ0'/>

## Preparation

In this practice, we highly recommend using [Meta Box AlO](https://metabox.io/aio/). This premium version includes **the framework** and **all essential extensions**, giving you quick access to the advanced features we’ll use.

Here are some needed extensions:

* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create custom post types for the events and artists.
* [MB Relationships](https://metabox.io/plugins/mb-relationships/): to create relationships between these post types.
* [MB Views](https://metabox.io/plugins/mb-views/): to create a template for displaying related posts based on a relationship.
* [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/): to display the related events and related artists in the dashboard. It’s just optional.
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have the UI create the relationship in an intuitive way. In addition, if you want to add extra information about the events and artists, you also can use this extension to create custom fields to store that kind of data. In this practice, I don’t use it to create custom fields to make it simpler.

## 1. Creating new custom post types

Go to **Meta Box** > **Post Types** to create a new custom post type for the artists and another one for events.

![Go to Meta Box to create new custom post types for the artists and events.](https://i.imgur.com/iFokCSM.png)

After publishing, you’ll see the created custom post types in the admin dashboard.

![The created custom post types in the admin dashboard](https://i.imgur.com/llIikjc.png)

Now, we can add some posts for each post type.

Then, let's create a relationship between the events and artists.

## 2. Creating the relationship

Go to **Meta Box** > **Relationships** to create the relationships between the Events and Artists post types.

![Create the relationships](https://i.imgur.com/unNtU2B.png)

You can enter all the settings for the relationship and each side of it in the **From** and **To** sections.

![You can enter all the settings for the relationship and each side of it in the From and To sections.](https://i.imgur.com/QPj5TFc.png)

Because we’re setting the relationship between two post types, set the **Object type** as **Post** in both sections.

![Set the Object type as Post in both sections.](https://i.imgur.com/vlRK9Nx.png)

In the **Post type** option, choose the post type you want to create a relationship with. The relationship is bidirectional, so you can put the post types not in order. I set the **Events** in the **From** section, and the rest is **Artists**.

![In the Post type option, choose the post type to create a relationship with](https://i.imgur.com/rB6V3ny.png)

Next, this setting is available when you activate the **MB Admin Columns** extension only.

![The setting enables to show a columns in the dashboard](https://i.imgur.com/4oF5Bjv.png)

Once enabled, columns will appear in the dashboard showing related events and artists.

![Columns will appear in the dashboard showing related events and artists.](https://i.imgur.com/ja5ibTu.png)

In the **Field** tab, you can set the label for the relationship section that shows in the post editor.

![In the Field tab, you can set the label for the relationship section.](https://i.imgur.com/KxQ7w1B.png)

There’ll be a box at the right sidebar to choose **which Artists are related to the current post** in the **Events** post type, and vice versa.

![A section allow you choose which Artists are related to the current post in the Events post type](https://i.imgur.com/f8o8pSf.png)

After publishing, go to a post editor; you can see a section like that allowing you to select several artists.

![Select several artists](https://i.imgur.com/VbKVNKx.gif)

Here is my example of filling out all relationship information for events and artists.

![All relationship information for events and artists](https://i.imgur.com/1mTj4jm.png)

## 3. Showing related posts based on a shared relationship

This is my single event page before this practice.

![Single event page](https://i.imgur.com/rdefRcw.png)

Now, I will add other events that the artist of this event also participates in, like I showed at the beginning. I named this section as Related Events.

Now, head over to **Meta Box** > **Views**, and create a new template specifically for this purpose.

![Create a new template.](https://i0.wp.com/images.elightup.com/meta-box/blog/display-related-posts-shared-relationship-mb-views/create-new-template..png)

With **MB Views**, you can add some lines of code directly to do what you want.

![Add code directly](https://i0.wp.com/images.elightup.com/meta-box/blog/display-related-posts-shared-relationship-mb-views/add-code-directly.png)

Here is my example code:

```
<h2 style="font-weight:bold;">Related Events</h2>
{% set artist_related = { relationship: { id: 'event-to-artist', from: post.ID }, post_type: 'artist' } %}
{% set artists = mb.get_posts(artist_related)|reverse %}
{% set unique_events = [] %}

{% for artist in artists %}
    {% set event_related = { relationship: { id: 'event-to-artist', to: artist.ID }, post_type: 'event' } %}
    {% set events = mb.get_posts(event_related)|reverse %}

    {% for event in events %}
        {% if event.ID not in unique_events and event.ID != post.ID %}
            {% set unique_events = unique_events|merge([event.ID]) %}
            <li><a href="{{ event.url }}">{{ event.post_title }}</a></li>
        {% endif %}
    {% endfor %}

{% endfor %}
```

**Explanation**:

```
<h2 style="font-weight:bold;">Related Events</h2>
```

This line sets the title for the section.

```
{% set artist_related = { relationship: { id: 'event-to-artist', from: post.ID }, post_type: 'artist' } %}
```

We create the `artist_related` variable to query posts of the **Artist** post type that are related to the current post via the relationship ID (`event-to-artist`).

```
{% set artists = mb.get_posts(artist_related)|reverse %}
```

Then, use the Meta Box function (`mb.get_posts`) to retrieve the related artists and apply the `reverse` filter to change their order. And the result is saved into the `artists` variable.

```
{% set unique_events = [] %}
```

This line helps to initialize an empty array, avoiding showing duplicate events later.

Loop through each artist in the list.

```
{% for artist in artists %}
```

Inside the loop, we create a new `event_related` variable to get all events connected to that artist, as you can see in the code below.

```
{% set event_related = { relationship: { id: 'event-to-artist', to: artist.ID }, post_type: 'event' } %}
```

Similarly to how we retrieved the artists earlier, we now use the following code to get the events related to each artist, reverse their order, and store the result in the `events` variable.

```
{% set events = mb.get_posts(event_related)|reverse %}
```

Now, we go deeper into another loop to go through each related event.

```
{% for event in events %}
        {% if event.ID not in unique_events and event.ID != post.ID %}
            {% set unique_events = unique_events|merge([event.ID]) %}
        {% endif %}
{% endfor %}
```

It will check if the event is not the current one and hasn’t already been added to our list. If both conditions are met, this line will help to add the event to the list.

And this line below displays the event as a list item, with a clickable link to the event page and the event’s title.

```
<li><a href="{{ event.url }}">{{ event.post_title }}</a></li>
```

That’s all for the code.

Now, just move to the **Settings** section of the view, set the **Type** as **Singular**, choose the **Location** as the post type where you want the event information displayed.

![Set location to the view.](https://i0.wp.com/images.elightup.com/meta-box/blog/display-related-posts-shared-relationship-mb-views/set-view-location.png)

Go to the frontend, related events appear under each single event post. It also works well when you check on another post.

![There are some posts displayed in the related events section on each single event post](https://i.imgur.com/ldG9pph.gif)
