---
title: Adding related posts
---

Adding related ports is a common way to keep your visitor stay on your site and help them find more useful content. In this practice, we will find out how to **choose a specific post to be related to another one using custom fields** created with Meta Box.

This is a typical section for related posts as you can see somewhere.

![This is a typical section for related posts](https://i.imgur.com/VtkA5bQ.png)

## Video Version

## Preparation

There are different ways to add related posts but the most popular is using a tool to automatically choose some posts related by keywords, tags, categories, or taxonomies of the current post.  It’s not using custom fields. However, it might be not precise in some cases, especially when you want particularly related posts to be prior on the list. That’s why you should **use custom fields to choose exactly which posts are related** to the current post. 

In this practice, we need these tools:
* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom fields; 
* [MB Views](https://metabox.io/plugins/mb-views/): help us create a template to get and display the related posts on the singular page;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to create the custom fields.

Note that you can install all the above extensions individually or use **Meta Box AIO**.

## 1. Creating custom fields

We’ll use only one field for this practice. Go to **Meta Box** > **Custom Fields** > **Add New** to create it.

![Go to Meta Box > Custom Fields > Add New to create fields](https://i.imgur.com/Xsbr0l7.png)

Add the field in the type of **Post**. This field type allows you to choose a/multiple posts from a regulated post type.

![Add Post field to choose a/multiple posts from a regulated post type](https://i.imgur.com/9zJlC5B.png)

You should configure this field a little bit.

![You should configure Label description, Post types and Field type field.](https://i.imgur.com/0fiGpOG.png)

The **Label description** setting provides you a way to notify users about the field.

In the **Post Types** setting, you should choose the post type that the related posts are. In other words, only the posts from the post type set in this box can be chosen.

In the **Field type** setting, you can choose a kind of selecting field then the created field will inherit its style of displaying and inputting data. To know more about the style of each option in this setting, you can refer to the documentation of each providing field type.

You can turn on the **Multiple** option if you want to allow users to add more than related posts.

![Turn on the Multiple option to allow users to add more than related posts.](https://i.imgur.com/0VcIohi.png)

After configuring all options for the field, move to the **Settings** tab, set **Location** as **Post type**, then choose a post type of the post where you want to show related posts.

![move to the Settings tab, set Location as Post type, then choose a post type of the post where you want to show related posts](https://i.imgur.com/Mq0QoOF.png)

Back to the post editor of your post type, you will see the created field.

![Here is the created field.](https://i.imgur.com/zNfwGac.png)

Now you can click on the field, see the list of posts from the post type you set in the settings of the fields. Just choose some ones from the list.
 
![Choose some posts from the list Related Posts](https://i.imgur.com/gtGL6vB.png)

You also can see that this field has the display following the display of the Select Advanced field type as I set.

## 2. Displaying related posts

To display related posts, we should get the posts that are chosen in the created custom field. Then, get their information and show them on the page.

As I mentioned before, you can use **MB Views** to create a template, or add code to the **theme’s file**. Notice that even when you are using a page builder, you still can use **MB Views** following this guide.

### 2.1. Using MB Views

#### 2.1.1. Getting and displaying data from fields

Go to **Views** in Meta Box and create a new view.

![Go to Views in Meta Box and create a new view.](https://i.imgur.com/R6GiiOF.png)

In the **Template** tab of the view, click on the **Insert Field** button. Look for the created field for related posts.

![Click on the Insert Field button and look for the created field for related posts.](https://i.imgur.com/Wh48Z3W.png)

Select that field and you can choose which information of the post you want to output in the template. Here I choose **Post Thumbnail, Post Title and Post Content** respectively to show the information about related posts on the singular page.

![Choose Post Thumbnail, Post Title and Post Content respectively to show the information about related posts on the singular page.](https://i.imgur.com/98dDUXk.png)

However, you cannot add all of them at once. Each clicking on the field on the list will get only one of them. And, the code with syntax as following will be add to the template:

```
{% for item in post.related_posts %}
    {{ item.ID_of_the_field_that_saves_post_information }}
{% endfor %}
```

It’s to get all the posts that users input into the field. Notice that I set this field to allow adding more than one post into the field.

After adding all the wanted post information, you should re-arrange the code to be like this:

```
{% for item in post.related_posts %}
	<img src="{{ item.thumbnail.thumbnail.url }}" width="{{ item.thumbnail.thumbnail.width }}" height="{{ item.thumbnail.thumbnail.height }}" alt="{{ item.thumbnail.thumbnail.alt }}">
	{{ item.title }}
           {{ item.content }}
{% endfor %}
```

![The code with syntax added to the template](https://i.imgur.com/7YTqm2z.png)

You also can change the code to output the data as you want. I changed this `{{ item.content}}` variable into `{{ mb.wp_trim_words(item.content,20,'...') }}` variable to limit the number of displaying characters.

![Change {{ item.content}} variable into {{ mb.wp_trim_words(item.content,20,'...') }} variable to limit the number of displaying characters.](https://i.imgur.com/iXuP9zR.png)

#### 2.1.2. Setting the Action to Display Posts

After getting all of the information of the posts as you want, go down to the **Settings** section of the view, set the **Type** as **Singular**

![Go down to the Settings section of the view, set the Type as Singular](https://i.imgur.com/aw8dSZe.png)

And choose the location as the singular of your post type.

![Choose the location as the singular of post type.](https://i.imgur.com/NZcsmpK.png)

You can choose one from the provided option in the **Render** for and **Position** section to have the right place as you want.

No, go to a page of a post. You will see the related posts.

![Here is related posts before styling](https://i.imgur.com/nb0p735.png)

#### 2.1.3. Styling

To have a better look for the related posts section on the page, go back to the created template, add some **div** tags and classes for each information.

![Add some div tags and classes for each information to have a better look](https://i.imgur.com/xGBbYm4.png)

You also can add heading, hyperlink, etc. Then, move to the **CSS** tab and add some code.

![Add some code in CSS tab](https://i.imgur.com/44JM83H.png)

And this is the result.

![This is the result of related posts.](https://i.imgur.com/INGfIz9.png)

### 2.2. Using PHP

The created Post field saves the IDs of chosen related posts. It returns an array of values as follows:

```
array (size=3)
    0 => string '36' (length=2)
    1 => string '25' (length=2)
    2 => string '29' (length=2)
```

So, we use the function to get the value of posts in this form:

```
$post_ids = rwmb_meta( $field_id );
foreach ( $post_ids as $post_id ) {
    echo '<p>'. get_the_title( $post_id ). '</p>';
}
```

In there:

`$field_id`: ID of the Post Field which we set

`$post_ids`: The array of post IDs that the Post Field returns

`rwmb_meta( )`: this is a function provided by Meta Box to get data saved in the custom fields;

`foreach ( ) { }`: this is a loop to get all the posts that are saved in the field;

`echo '<p>'. get_the_title( $post_id ). '</p>'`: to display the post title.

We can customize or export data by IDs. It means that you can get any information from the related posts such as title, thumbnail, excerpt to show on your website. I did get just the title in the above code.

Go to the `single.php` or `single-{custom_post_type_slug}.php` file and put the gist in the above form:

![Go to the single.php or single-{custom_post_type_slug}.php file and put some code.](https://i.imgur.com/Anm3MKX.png)

If you want some other information from the post display, just add code inside the loop.

Now, go to the singular page, you will see the title of the posts displayed.

![Title of the posts displayed in the singular page](https://i.imgur.com/L7YOk4t.png)

To style the section of the related posts, you can add some div tag, classes, heading, etc. as to the code in the theme’s file as the same as I did with MB Views.

![Add some div tag, classes, heading, etc. as to the code in the theme’s file](https://i.imgur.com/wGX3r6B.png)

Then add CSS to the single page via Customizer or theme’s file. Then, you will have a new look of the section.

![This is the result of a typical section for related posts](https://i.imgur.com/INGfIz9.png)
