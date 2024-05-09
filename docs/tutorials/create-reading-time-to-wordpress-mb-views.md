---
title: Creating reading time to your WordPress posts
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Providing a number of reading time will help the visitor know in advance how much time it takes to finish reading the post. Let’s find out how to have this reading time number in each article on your WordPress blog. We’ll use the **MB Views** from **Meta Box**.

This is an example for a number of reading time that we will create in this practice.

![An example for a number of reading time](https://i.imgur.com/NrVqdKG.png)

## Video Version

<LiteYouTubeEmbed id='5bw7wTQ78Xo' />

## Why MB Views?

To have the reading time number on posts, we should **use some code**.

In the meantime, we cannot deny that using a plugin to **add code indirectly brings more advantages than doing it in the theme’s files.**

There are some plugins that can help to add code. But, if you have Meta Box on your site, **MB Views will be the best option to avoid installing too many plugins from diverse authors** on your site.

## Preparation

In this practice, we need the [Meta Box core plugin](https://wordpress.org/plugins/meta-box/) to create custom fields. You can install it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/).

Along with that, we also need the [MB Views](https://metabox.io/plugins/mb-views/) to create a template to display the reading time number.

## 1. Setting an area for displaying the time information

I will create a template to show the time information in the top section of the post. We should put the reading time on the top since it should be noticed before the visitor reads the post.

![The time information in the top section of the post](https://i.imgur.com/NrVqdKG.png)

Go to **Meta Box** > **Views**, and create a new template for setting the position to display timing information.

![Go to Views, and create a new template for displaying time position](https://i.imgur.com/LynEixS.png)

In the **Template** tab, add some lines of code like this:

```
<div class="reading-time">
    <span class="dashicons dashicons-clock"></span>
    <div class="time">
        <span id="time"></span>
    </div> 
</div> 
```

![In the Template tab, add some lines of code](https://i.imgur.com/mHPTNPP.png)

**Explanation:**

```
<span class="dashicons dashicons-clock"></span>
```

This line is to get the time icon. It’s just for decoration.

`id="time"`: is an ID I set for this area. It’ll be used to automatically display the time number after calculating using JavaScript later.

After getting all of the information of the time as you want, move to the **Settings** section of the view, set the **Type** as **Singular**, and choose the name of any post type that we set the author for in **Location**.

![Assign this template to the posts](https://i.imgur.com/7KxiOHn.png)

Pay heed that I choose the option which shown in below picture to set the reading time display right before the post content.

![Set the reading time display right before the post content](https://i.imgur.com/MIHsbNI.png)

Since I added only the icon into this template, there will be only the icon appearing from this template on the posts as well.

![The icon appearing from this template on the posts without the reading time number](https://i.imgur.com/eYULHIZ.png)

To have the reading time number, we need to create another view.

## 2. Calculating the reading time

I’m creating a new template to calculate the reading time based on the number of words in the post content.

Come back to **Meta Box** > **Views** and create a new view.

![Go to Meta Box > Views and create a new view](https://i.imgur.com/SN3NGUm.png)

We should use JavaScript, so move to the **JavaScript** tab and add code.

```
// Get the article text
const articleText = document.querySelector('.entry-content').innerText;
const time = document.getElementById('time');

// Split the text into an array of words
const wordsArray = articleText.split(' ');

// Count the number of words in the array
const wordCount = wordsArray.length;

// Calculate the estimated reading time
const wordsPerMinute = 200;
const readingTime = Math.ceil(wordCount / wordsPerMinute);

// Display the estimated reading time
time.innerHTML = `${readingTime} MIN`;
```

![Add some lines of code in JavaScript](https://i.imgur.com/0U5zq4J.png)

**In there:**

```
const articleText = document.querySelector('.entry-content').innerText;
```

This line of code is to get all the text from the post content.

I also create an object to connect with the ID that we created in the previous view for the reading time.

![An object to connect with the ID that we created for the reading time](https://i.imgur.com/rUxcQrn.png)

```
const wordsArray = articleText.split(' ');
```

This line is to put all the text from the post content to an array.

```
const wordCount = wordsArray.length;
```

This array is to count the words.

```
const wordsPerMinute = 200;
```

This line is to have the reading time, I stipulate a number of words that people usually read in a minute. You definitely can change this 200 number.

```
const readingTime = Math.ceil(wordCount / wordsPerMinute);
```

This line is the formula to calculate the minute.

```
time.innerHTML = `${readingTime} MIN`;
```

This line will help to pass the number that the formula figure out to the section where we set to display the number in the previous view.

![This is where we set to display the reading time number](https://i.imgur.com/BCubaqw.png)

`MIN` is just the text I added to display along with the number as the unit of time.

We’ve done it with JavaScript.

Now, move down to assign this view to the post where I did for the previous view.

Notice that we should choose the position as **‘After the post content’**. The reason is that this script has to get all the post content, so the post content must be loaded first, then the script. If the script runs first, it will get nothing because there is nothing from the post content loaded.

This also is the reason that I have two views to set the reading time: one for displaying area, one for calculating.

![Assign this view to the post](https://i.imgur.com/CH4q7Gl.png)

Now, go to a singular page, you will see the reading time displayed.

![Go to a singular page, the reading time displayed](https://i.imgur.com/E3pS9bX.png)

Go to another post, you also can see that the number has also changed. It means that each post will have its own number of reading time based on its number of words.

![Go to another post, the number has also changed](https://i.imgur.com/3OgVh87.png)

## 3. Styling the section for reading time

If you want to make the reading time display with a better look, go back to one of the views, and add some CSS.

![Add CSS to make the reading time display with a better look](https://i.imgur.com/J8GxkHo.png)

Back to the page on frontend, the new look has been done.

![This is final look of reading time section](https://i.imgur.com/NrVqdKG.png)
