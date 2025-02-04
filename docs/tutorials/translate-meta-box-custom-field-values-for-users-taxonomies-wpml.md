---
title: Translating Meta Box custom field values for users and taxonomies with WPML
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Having a multilingual website for products, and services is more and more essential in the global economy. And, it’s undeniable that using a translation plugin is an optimal choice to build it.

One in the range of translation plugins, WPML seems like the most popular with a large number of users. You might know that it can help to [translate custom fields created with Meta Box](https://metabox.io/translate-custom-fields-with-wpml/) a long time ago. And now, the integration between the two plugins is more deep so you can also **translate the custom field values easily, especially custom fields for users and taxonomies**. We’ll delve into it in this blog. It is one of the applications of [Meta Box - WPML compatibility](https://docs.metabox.io/integration/meta-box-wpml-integration/).

For demonstration purposes, I’ll translate information about a post-author as you can see below:


![Example of translating custom field values for users](https://i.imgur.com/vbVl6LG.gif)


## Video version

<LiteYouTubeEmbed id='ng4ZYZs6cEw' />

## Preparation

Sometimes you want to store some extra information of users or taxonomies in custom fields created with Meta Box then we can use WPML to translate them. So, these are the tools we need in this practice:

- [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create the custom fields for the users and taxonomies. You can install it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/);
- [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI in the backend to create the custom fields visually;
- [MB Term Meta](https://metabox.io/plugins/mb-term-meta/): to add custom fields to taxonomies;
- [MB User Meta](https://metabox.io/plugins/mb-user-meta/): to add custom fields to a user profile;
- [MB Custom Post Types and Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create a custom post type and custom taxonomy in the case that you don’t use the default;
- **WPML Multilingual CMS** (means WPML core): to create and manage multilingual websites on the WordPress platform easily. It helps translate the basic content of your WordPress such as posts, pages, menus, and notifications;
- **WPML String Translation**: to translate text strings from your theme and plugins on your WordPress, as well as special content in posts, pages, taxonomies, and taglines.

Also, you may want to use other extensions to have the appropriate structure of the custom fields such as [MB Tabs](https://metabox.io/plugins/meta-box-tabs/), [Meta Box Group](https://metabox.io/plugins/meta-box-group/), and [Meta Box Conditional Logic](https://metabox.io/plugins/meta-box-conditional-logic/).

Let’s start now!

## 1. Setting up languages in WPML

Before translating any object with WPML, you need to set up the languages that you want to have on the site.

Go to **WPML** > **Languages** to both the default language and custom languages. Then, click on the **Add/Remove languages** button to add the custom languages for your site.

![Go to WPML > Languages then add the custom languages for your site](https://i.imgur.com/tfetQ39.png)

WPML supports 65 languages which is the most popular in the world. Just check the languages on the list that fit your needs. In this practice, I’ll translate into Italian and Russian for example.

![Choose languages on the list that fit your needs](https://i.imgur.com/HwigBdo.png)

Then, on the admin bar, there are the enabled languages for your site.

![On the admin bar, there are the enabled languages for your site.](https://i.imgur.com/iKZR5Qz.png)

Now, it’s time to move to the main parts of this tutorial.

## 2. Translating custom field values for users

I suppose that you already have some fields for users. You can follow other tutorials to know how to do it with [40+ field types](https://www.youtube.com/watch?v=WWeaM5vIAwM&t=130s) provided by Meta Box in detail. I just created some fields for illustration.

![Add some custom fields for users](https://i.imgur.com/G0bPVbM.png)

I also input data into custom fields for each user.

![The data is input into custom fields for each user](https://i.imgur.com/FUdvsuu.png)

Now, we’ll translate them in the languages which we chose before.

### 2.1. Translating custom user field values

As I mentioned before, besides the basic content, we’ll use the WPML String Translation plugin to translate content in user meta.

Go to **WPML** > **String Translation**. There will be a table that includes all the strings that come from the different themes and plugins on our site.

![Go to WPML, String Translation to translate content in user meta](https://i.imgur.com/LiXSto3.png)

However, the fields created with Meta Box are not in the table automatically, because they haven’t been recognized as strings. By default, WPML can translate only the basic fields of the user such as the name and description. To make the custom ones translatable, we need to **convert them to strings first, and then translate those strings**.

![The fields created with Meta Box are not in the table automatically](https://i.imgur.com/02mNgjS.png)

#### 2.1.1. Converting custom fields to strings

To do it, you should add the following code to the theme’s file:

```
add_filter( 'wpml_translatable_user_meta_fields', function( $fields ) {
    $fields[] = 'author_level';
    return $fields;
} );
```

![Add code to the theme’s file to convert custom fields to strings](https://i.imgur.com/93aHwOJ.png)

**Specifically**:

- `wpml_translatable_user_meta_fields`: is a hook to declare the custom fields for users. It’s provided by the WPML.
- `author_level`: is the ID of the field we want to convert to strings.

You can convert one by one field by adding separate filters. In my case, since I have two fields, the full code as below:

![Convert one by one field by adding separate filters.](https://i.imgur.com/ljOvUY8.png)

Another way, you also can list them all in a line, then assign the fields to an array with the code:

```
add_filter( 'wpml_translatable_user_meta_fields', function( $fields ) {
    $fields = array('author_level','author_job_description');
    return $fields;
} );
```

![Another way is listing field IDs in a line, then assign them to an array](https://i.imgur.com/Qim8Kgi.png)

After that, back to the **String Translation** screen in WPML.

Before searching for any field ID to check if it has been converted to a string or not, you should scroll down to the **More options** section. We’ll regularize the role of the users which we want to translate by checking.

![Regularize the role of the users which we want to translate by checking](https://i.imgur.com/OlP6mtg.png)

Now, the fields are in the table along with their value.

![The fields are in the String table along with their value](https://i.imgur.com/Ki4IURH.png)

It means that the WPML plugin has recognized them as strings already.

#### 2.1.2. Translating the values

Translating custom field values for users becomes a simpler task now. Click on the ‘**+**’ icon below the flag of the language you want to add a translated version for each value. Then, add the translation.

![Click on the ‘+’ icon to add a translated version for each value](https://i.imgur.com/5H8HE2B.gif)

Do it one by one for each value. And, it’s the same with the other fields.

![The fields after adding the translation](https://i.imgur.com/fDnItZg.png)

We have just added translation versions for the values of each field. They are now available in the backend, but not on the frontend. So, the website visitors still can not see them. We should take one more step for that.

### 2.2. Displaying translation versions of custom user field values on the frontend

#### 2.2.1. Getting and displaying the field values

First, we should display the field’s values as the same as when the website has only one language.

You can use any tools or plugins that support displaying content on the frontend. You can refer to [other tutorials](https://docs.metabox.io/tutorials/) to know how.

Since I have the MB Views plugin that is included in the Meta Box package, I’ll use it as a demonstration.

Go to **Meta Box** > **Views**, and create a new view.

![Go to Meta Box > Views, and create a new view for user meta translation](https://i.imgur.com/UQsPXJR.png)

Click on the **Insert Field** button, then choose the field from the dropdown list on the sidebar.

![Click on the Insert Field button to choose the field from the dropdown list on the sidebar](https://i.imgur.com/DCewXWb.png)

Since the fields are for users, you should look for them in the **User** tab. It includes the default fields, and custom fields as well.

![Since the fields are for users, you should look for them in the User tab.](https://i.imgur.com/wMOeFoi.png)

Just select the fields you want to get data as usual.

![Select the fields you want to get data as usual](https://i.imgur.com/vZVmcKN.gif)

Also, set the type, and location of the template, as any place on your website, or save it as a shortcode, then you can embed it in any place as well.

![Set the type, and location of the template](https://i.imgur.com/qHcZi0a.png)

On the frontend, the information saved in the fields is displayed already, but in the original values that correspond to the default language.

![The custom field values is displayed in the default language](https://i.imgur.com/KWDmWAx.png)

You should modify the created template a little bit to make this section more beautiful.

Back to the created view. Add some **`div`** tags, classes, and a heading as in the below image:

![Add some div tags, classes and modify the created template a little bit to make this section more beautiful.](https://i.imgur.com/FTNkZsY.png)

**In there**:

- `get_the_author_meta`: this function is to get the values of the specified fields.
- `author_level`, `author_job_description`: is the ID of the field we want to get the value.
- `author.ID`: is the ID of the author. It is used to specify the current post which we will get the custom field values from.

Also, add **CSS** to style the section.

![Add some CSS to style the section](https://i.imgur.com/FLxsjVm.png)

Back to the page, the section’s style is better.

![The new look of the user section](https://i.imgur.com/KhuXe6m.png)

In the normal case that you have only one language on your site, that’s done to display custom field values at this moment. However, your website is now having more than one language, so you should display all the translation versions of them. Then, when visitors see the page in another language, they also can see the matching language version of the field’s values.

Currently, there is nothing on the page to change the language to another one, so you can not see other translation versions, even when they are already existing.

#### 2.2.2. Adding the language switcher on the page

Go to **WPML** > **Languages** to regulate the location for the language switcher on this page. And, look for the **Menu Language Switcher** section to add a new one.

![In the Languages submenu in WPML, look for the Menu Language Switcher section to add a new language switcher](https://i.imgur.com/nYLZnjJ.png)

Choose a menu of your website that you want the switcher to be on.

![Choose a menu of your website that you want the switcher to be on](https://i.imgur.com/z7aqo89.png)

There are also some other settings for the switcher in the window as well. Just configure it as you want.

Back to the page, the switcher is available on the place you set already.

![The switcher is available on the frontend](https://i.imgur.com/35cYQ42.png)

And, when you change the language on the switcher, the content of the author section is also switched to exactly the translation version that you input in the previous step.

![The content of the author section is also switched to exactly the translation version then we change the language on the switcher.](https://i.imgur.com/vbVl6LG.gif)

### 2.3. Remark

**The switcher displays only the languages the post has the translation version**. Then, there is no way to display the translation of the field values in other languages that the post doesn’t have.

And, even when you do everything following the above instructions, only the users who you regulate in the **More options** section can display the translated information.

There will be no translation for custom field values of the users who are unchecked. The information is kept intact in the original language, although you turn the page to another language. So, make sure you check all the boxes of the user types you want to translate.

## 3. Translating custom field values for a taxonomy

Translating custom field values for taxonomies is quite easier than custom fields of users. I’ll do it with an example as Categories.

![Example of translating custom field values for taxonomies](https://i.imgur.com/4bSAI9k.gif)

I have had some basic custom fields for it. Also, input some data into them for some terms.

![The custom fields and their value as demonstration](https://i.imgur.com/iZKqbbE.png)

In the taxonomy admin page, there are three tabs, since I have three languages for the site. But, there haven’t been any translation versions for Italian and Russian yet.

![There haven’t been any translation versions for Italian and Russian yet](https://i.imgur.com/3y167X8.png)

To translate those values, first, we should make the post, taxonomy, and custom field to be translatable.

### 3.1. Setting up

Go to the **Settings** submenu in **WPML** to set the translation feature for the necessary objects.

![Go to the Settings submenu in WPML to set the translation feature for the necessary objects](https://i.imgur.com/cDNISPt.png)

Move to the **Custom Term Meta Translation** section to enable any term meta to be translatable, including the custom fields. Then, search for the field ID one by one, and choose the **Translate** option.

![Move to the Custom Term Meta Translation section to enable any term meta to be translatable](https://i.imgur.com/zBrVxtg.png)

Next, for the post, scroll down to the **Post Types Translation** section. It is selected to be translatable by default. But if your taxonomy is for any custom post type, just look for that post type and select the translation option.

![In Post Types Translation section, the posts are selected to be translatable by default](https://i.imgur.com/PdZh0Yb.png)

Lastly, go to the **Taxonomies Translation** section to turn on the translation feature for the taxonomy. It also lists all the taxonomies on the site, just choose the one having the custom fields you want to translate.

![Go to the Taxonomies Translation section to turn on the translation feature for the taxonomy](https://i.imgur.com/BrROGid.png)

That’s done for settings.

### 3.2. Translating the fields values

Move to the **Taxonomy Translation** submenu, then select the taxonomy from the drop-down list to translate it.

![Move to the Taxonomy Translation submenu, then select the taxonomy from the drop-down list to translate it](https://i.imgur.com/lkD3F6r.png)

WPML will list all the terms of that taxonomy on the screen, and also provide a column to add translation versions for each language. Click on the “**+**” button to add the translation.

![Click on the “+” button to add the translation](https://i.imgur.com/bpK4ynf.png)

There will be a **Term translation** pop-up. On the screen, not only the custom fields of the taxonomy display to translate, but also all the term information such as name, slug, and description are available. Just input translations for them one by one.

![The custom fields, name, slug, and description are available for adding translation](https://i.imgur.com/j75QI3G.png)

After that, in the taxonomy admin page, the number of translation versions is changed to other ones.

![The number of translation versions is updated](https://i.imgur.com/3mRdhSK.png)

When you click on each tab to see the translation versions, all the value input to the fields are turned to the corresponding language version automatically.

![All the value input to the fields are turned to the corresponding language version automatically.](https://i.imgur.com/S9Nzmx6.png)

### 3.3. Displaying term meta translations on the frontend

Similar to displaying the custom user meta, I’ll use MB Views to display category information on the frontend.

Go to **Meta Box** > **Views**, and create a new view to have a template to display the term meta.

![Go to Meta Box > Views, and create a new view for term meta translation](https://i.imgur.com/IfE6MOu.png)

Then, add some code to the **Template** tab along with some **`div`** tags, and classes.

```
{% set post_id = post.ID  %}
{% set category_detail = mb.get_the_category(post_id) %}
<h2>Categories</h2>
{% for category in category_detail %}
    <div class="mb-category">
        <div class="item">
            {% set meta_title = mb.get_term_meta( category.term_id, 'meta_title', true) %}
            {% set meta_description = mb.get_term_meta( category.term_id, 'meta_description', true) %}

            <div class="mb-taxonomy">{{ category.cat_name }} </div>
            <div class="meta_title"><b>Meta Title:</b> {{ meta_title }}</div>
            <div class="meta_description"><b>Meta Description:</b> {{ meta_description }} </div>
        </div>
    </div>
{% endfor %}
```

![Add some code to the Template tab along with some div tags, and classes](https://i.imgur.com/j6udYj6.png)

Also, you can add some **CSS** to style.

Next, go to a post, the Categories section is displayed with the original language.

![On the frontend, the Categories section is displayed with the original language](https://i.imgur.com/6K9PxJP.png)

Since we have added the language switcher on the menu, we can turn this page to another language. And, the translation version of the term meta is displayed as well.

![The translation version of the term meta is displayed when you change language via the switcher](https://i.imgur.com/4bSAI9k.gif)

### 3.4. Remark

There are two notices for translating custom field values for taxonomy which are quite the same as displaying the value of fields for users:

- We should add the language switcher somewhere on the page.
- The translation of the fields for taxonomy is also available on the page only when the post has the translation for that language.

That’s all.

You can take a look at our [detailed review of the top 4 plugins to translate your site](https://metabox.io/review-translation-plugin/) or [an in-depth comparison between the Polylang plugin vs. Multisite](https://metabox.io/polylang-vs-wordpress-multisite/) to have your own choice. For custom fields of other objects, you can look at the instructions from [our documentation](https://docs.metabox.io/integration/meta-box-wpml-integration/) for more details.
