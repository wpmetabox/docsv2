---
title: Creating a reading progress bar in WordPress posts - Using MB Views
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Today, I’ll use the **MB Views** extension from Meta Box in a real case to **create a simple reading progress bar** in WordPress posts.

## Introducing about the MB Views

MB Views is a powerful tool that helps to create and customize templates. Even though it's all based on code, it is more optimal than using PHP. You can see that clearer in several tutorials that we made before on [our channel](https://www.youtube.com/playlist?list=PLIWLX0sDr8lSUGVubfRMsG6fSN42Lp1bY). You can also see in those tutorials that it is usually **used to get and display data from custom fields created with Meta Box**. But that’s not all the things it can do.

You can also **customize all templates in WordPress with MB Views**, even for post types that don't have Meta Box fields.

This practice will make it clearer.

## Video version

<LiteYouTubeEmbed id='dDwcRLiBUcA'/>

## The reading progress bar

The simple reading progress bar will be shown at the top of the singular page of each blog post, like this:

![A simple reading progress bar is at the top of the singular page of each blog post](https://i.imgur.com/tyIxuN7.gif)

This bar will work as an indicator, letting the visitors know how much they have read and how much is left after all. Then, it may help to improve the user experience.

## Preparation

Let’s find out which tools we need for this practice:

* [Meta Box plugin](https://wordpress.org/plugins/meta-box/): to have a framework to use **MB Views** for creating templates. You can install it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/).
* [MB Views](https://metabox.io/plugins/mb-views/): to create a template for the progress bar without touching the theme's files. You can install it individually or if you have the **Meta Box AIO**, this extension is already included there.

## 1. Displaying the reading progress bar

Go to **Meta Box** > **Views**, and create a new template.

![Go to Meta Box > Views, and create a new template.](https://i.imgur.com/2j37Z2B.png)

In the **Template** tab, I just add some **div** tags to specify the area to display the bar.

```css
<div id="reading-progress-frame">
    <div id="reading-progress-bar"></div>
</div>
```

![In the Template tab, just add some div tags to specify the area to display the bar.](https://i.imgur.com/bimLfjf.png)

**In there**:

* `reading-progress-frame`: This ID is used for the whole area that covers the reading progress bar when it is full.
* `reading-progress-bar`: This ID is used for the bar only.

You can name them whatever you want.

Next, go to the **CSS** tab of the view, I will use the CSS to display the progress bar.

```css
#reading-progress {
    position: fixed;
    width: 100%;
    height: 5px;
    z-index: 99999;
    top: 0;
    left: 0;
}

#reading-progress-fill {
    height: 3px;
    width: 100%;
}

#reading-progress-fill {
    background-color: #ff0000;
}
```

![Add code to the CSS tab](https://i.imgur.com/5nYMqCa.png)

Let’s go through it in more detail:

```css
#reading-progress {
    position: fixed;
    width: 100%;
    height: 5px;
    z-index: 99999;
    top: 0;
    left: 0;
}
```

These lines are to set an area to cover the progress bar.

In particular, these lines of code in this image help determine the position of the bar at the top of the page.

![Some code to help determine the position of the bar at the top of the page.](https://i.imgur.com/vKiFsUM.png)

The code below is to specify the height and width of the progress bar.

```css
#reading-progress-fill {
    height: 3px;
    width: 100%;
}
```

Rather, the width should be based on the real percentage of reading progress. But I set it full width now just for positioning it in the initial.

![Set the bar full width for positioning it in the initial.](https://i.imgur.com/bCBRxIF.png)

For the color of the bar, I set the red color. You should change it to any color that matches your theme. 

```css
background-color: #ff0000;
```

That’s all for the display.

Now, move to the **Settings** section of the view. To apply this template to the singular pages of the blog post, set the **Type** as **Singular**. Then, choose the post type.

![In the Settings section, set location to apply this template to the singular pages of the blog post](https://i.imgur.com/V53PUl8.png)

Normally, you can choose an option for the position, but, in this case, the progress bar is at the top of the page, and I’ve specified its position in the **CSS** section before. So, the template’s setting does not affect the bar position.

![Set the position for the template, it does not affect the bar position](https://i.imgur.com/tygI2n5.png)

Now, go to a post on frontend, you can see the progress bar that we created. It now is all red, no matter whether I scroll the mouse or not.

![Before using Javascript, the progress bar is all red no matter if I scroll the mouse or not.](https://i.imgur.com/3dWRNgd.gif)

To make it work following the scroll, let’s move to the next step.

## 2. Making the reading progress bar run

We should add action to the progress bar using JavaScript to trigger when the readers scroll the page as well as identify how much they did read.

But first, we should change the default width of the bar to be zero. It should start from zero, since the readers do so.

![Change the default width of the bar to be zero](https://i.imgur.com/z06relF.png)

Then, go to the **JavaScript** tab, add the following code.

```css
const readingProgress = document.querySelector('#reading-progress-fill');
document.addEventListener('scroll', function (e) {
    let w = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
    readingProgress.style.setProperty('width', w + '%');
});
```

![Add code to the JavaScript tab](https://i.imgur.com/6dZU5Dv.png)

**In there**:

```css
const readingProgress = document.querySelector('#reading-progress-fill');
```

This is to create a JavaScript object for the progress bar. `#reading-progress-fill` is the ID where we set the bar.

```css
document.addEventListener('scroll', function (e) {: 
```

This is to trigger the event that readers scroll the page.

I set the`w` variable to calculate the percentage of the page that the reader scrolls. You should rename it.

The following formula will do that.

```css
(document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100: 
```

* `document.body.scrollTop || document.documentElement.scrollTop`: the number of the distance in pixels from the top to the place where the reader is.
* `document.documentElement.scrollHeight`: the total height of the page where the readers can scroll, also in pixels.
* `- document.documentElement.clientHeight`: to eliminate the padding on the page.

All these elements in the formula are the HTML DOM elements. You can refer to [this link](https://www.w3schools.com/jsref/dom_obj_all.asp) to learn more about them.

Finally, the result will be converted to percentage.

![The result will be converted to percentage](https://i.imgur.com/kxyKy3w.png)

This line below will force the width of the progress bar to change following the result returned by the w variable.

```css
readingProgress.style.setProperty('width', w + '%');
```

That’s all.

After saving the template, go back to the page on frontend. Now, when we scroll down, the progress bar will appear, and gradually lengthen according to the amount of content read.

![The reading progress bar run after using Javascript](https://i.imgur.com/tyIxuN7.gif)

So we’ve already done it.

If you want to change the speed of change in the bar and make it more smoothly, you can add the code below:

```css
transition: width 300ms ease;
```

![Add code to change the speed of change in the bar and make it more smoothly](https://i.imgur.com/bOLQPg9.png)

Just change the number to get the effect that you expect.
