---
title: Displaying before and after images - Using MB Views
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

**Displaying before-and-after images** in an interactive way is a powerful tool for showing transformations. It can let your audience visually compare changes or differences. Just drag between the images then they can see a more dynamic comparison.

Let’s see how we can have it with MB Views from Meta Box.

![Display before-and-after images with MB Views](https://i.imgur.com/KFWd6zk.gif)

## Video version

<LiteYouTubeEmbed id='PhLZDT1mSWY'/>

## Preparation

To start, let's outline the concept:

1. The before and after images, along with their extra content, will be stored in the custom fields created with Meta Box.
2. Then, we’ll display them using the **MB Views** extension from Meta Box as well.
3. For the before-after effect with dragging interaction, we’ll use a little bit of JavaScript.

Using custom fields allows you to set up and update images and content easily without needing to redesign your layout.

So, we need some of the following tools.

* [The Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom fields and set up a template for displaying images. You can download it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/).
* [MB Views](https://metabox.io/plugins/mb-views/): to create a template for displaying before and after images;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to create custom fields to save images and related content visually.

Notice that if you are adding before and after images for posts in a custom post type, you should enable the [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/) extension to have the post type as well.

Now, let’s go step by step.

## 1. Creating custom fields to store the images

I’ll add before-after images for my blog posts, so I’ll create the fields without any further steps.

As I mentioned, you can add the images for posts in a custom post type. Then, you should create the post type first. After that, let’s create custom fields to store the images and related content.

For illustration purposes of this practice only, I’ll set up fields to upload the before and after images, also with a **Text** field to add extra information to the images like this:

![Set up fields to upload the before and after images, also fields to add related content](https://i.imgur.com/QUbhaix.png)

You absolutely can add additional fields for any related details as you want.

Now, go to **Meta Box** > **Custom Fields** and create a new field group.

![Create a new field group](https://i.imgur.com/EXbxnSV.png)

Just add fields one by one corresponding to the kind of content.

For the before image, as well as the after image later, choose the **Single Image** field type.

![For the before image, as well as the after image later, choose the Single Image field type.](https://i.imgur.com/2aSdeHr.png)

After creating all the fields, move to the **Settings** tab, set the **Location** as **Post** to apply the fields to it.

![Set the Location as Post to apply the fields to it](https://i.imgur.com/Z7qarnG.png)

Now, in any post editor, you will see the custom fields displayed.

![The custom fields displayed in the post editor](https://i.imgur.com/vTKtvdV.png)

Just input content there.

## 2. Displaying the images

In this step, we’ll create a template to just display the before and after images along with their related content within a single post. For styling beautifully and adding interactive functions like sliders or overlays for a clear comparison, we’ll cover that in the next part.

Now, head over to **Meta Box** > **Views**, and create a new template specifically for this purpose.

![Create a new template to display the before and after images](https://i.imgur.com/SPHbTfT.png)

With MB Views, you can add some lines of code to the **Template** tab, or insert fields into it by clicking the **Insert Field** button, and choose any fields on the right sidebar to get data from them. It will automatically generate code to the template.

![Insert field into the Template tab](https://i.imgur.com/oPRZ2MM.png)

With the images, you can select a suitable image size to display, as well as the output.

![Select a suitable image size to display, as well as the output for the images](https://i.imgur.com/AWYDSY8.png)

After inserting all the fields into the template, move to the **Settings** section to set the location where we want to display this template. In this case, the concept is that any post which has the before-after images will have them on the post content. So, I set the type of the view as **Singular**, and the location as **Post**.

![Set location as Post to apply the template to it](https://i.imgur.com/Ai2ETyP.png)

And, choose a place in the post.

![Choose a place in the post](https://i.imgur.com/kK2DBGt.png)

Now, on the frontend, you’ll see the before and after images along with their related information. They will be listed one by one.

![The before and after images along with their related information will be listed one by one](https://i.imgur.com/fipKo9q.png)

## 3. Turning the images to slidable

Styling the before and after images is the key to making the comparison stand out. So, I’ll guide you on how to implement an interactive slider, allowing users to drag between the images for a more dynamic and engaging comparison.

Back to the created template with **MB Views**, include some div tags, classes, also HTML ID for each element to make the styling process easier.

![Include some div tags, classes, also HTML ID for each element to make the styling process easier](https://i.imgur.com/f4lY22n.png)

You can notice that these IDs will be used in JavaScript later to make the images interactive.

![The IDs will be used in JavaScript later to make the images interactive.](https://i.imgur.com/C5k6UBL.png)

### 3.1 Creating a middle bar and navigation arrows

Still in the **Template** tab, add the following code to have a middle bar and the arrows.

```
<div id="resizer">
    <div class="mb-icon">
        <div id="triangle-left"></div>
        <div id="triangle-right"></div>
    </div>
</div>
```

![Add code to have a middle bar and the arrows](https://i.imgur.com/erud0lT.png)

### 3.2 Styling the image slider and related content

Next to the **CSS** tab, add these lines of code to beautify the display of before and after images, as well as the content that goes along with them.

```
#triangle-right {
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-left: 8px solid #fff;
    border-bottom: 8px solid transparent;
}

#triangle-left {
    margin-right: 5px;
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-right: 8px solid #fff;
    border-bottom: 8px solid transparent;
}

.mb-icon {
    cursor: pointer;
    background: linear-gradient(62deg, #c93072 5%, #3365c0);
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    position: absolute;
    margin: 0 0 0 -18px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid white;
}

.text-before {
    width: max-content;
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: #fff;
    background: #0c0202;
    padding: 3px 7px;
}

.text-after {
    width: max-content;
    position: absolute;
    bottom: 5px;
    right: 5px;
    color: #fff;
    background: #0c0202;
    padding: 3px 5px;
}

.mb-container img {
    max-width: none;
    width: 100%;
    display: block;
}

#before-after-slider {
    width: 100%;
    position: relative;
    overflow: hidden;
    border: 3px solid white;
}

#after-image {
    display: block
}

#before-image {
    position: absolute;
    height: 100%;
    width: 50%;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 2;
}

#resizer {
    position: absolute;
    display: flex;
    align-items: center;
    z-index: 5;
    top: 0;
    left: 50%;
    height: 100%;
    width: 4px;
    background: white;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
}
```

![Add code to the CSS tab to beautify the display of before and after images, as well as the related content.](https://i.imgur.com/PGNVzyi.png)

### 3.3 Running the slider

Now, include some script to the **JavaScript** tab for the advanced effect of sliders. These are the whole code I use for JavaScript.

```
const slider = document.getElementById('before-after-slider');
const before = document.getElementById('before-image');
const beforeImage = before.getElementsByTagName('img')[0];
const resizer = document.getElementById('resizer');

let active = false;

document.addEventListener("DOMContentLoaded", function () {
    let width = slider.offsetWidth;
    console.log(width);
    beforeImage.style.width = width + 'px';
});

window.addEventListener('resize', function () {
    let width = slider.offsetWidth;
    console.log(width);
    beforeImage.style.width = width + 'px';
})

resizer.addEventListener('mousedown', function () {
    active = true;
    resizer.classList.add('resize');
});

document.body.addEventListener('mouseup', function () {
    active = false;
    resizer.classList.remove('resize');
});

document.body.addEventListener('mouseleave', function () {
    active = false;
    resizer.classList.remove('resize');
});

document.body.addEventListener('mousemove', function (e) {
    if (!active) return;
    let x = e.pageX;
    x -= slider.getBoundingClientRect().left;
    slideIt(x);
    pauseEvent(e);
});

function slideIt(x) {
    let transform = Math.max(0, (Math.min(x, slider.offsetWidth)));
    before.style.width = transform + "px";
    resizer.style.left = transform - 0 + "px";
}

function pauseEvent(e) {
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
}
```

![Include some script to the Javascript tab for the advanced effect of sliders.](https://i.imgur.com/ee5j1JC.png)

Let’s break down one by one part:

#### 3.3.1 Getting elements and creating variables

```
const slider = document.getElementById('before-after-slider');
const before = document.getElementById('before-image');
const beforeImage = before.getElementsByTagName('img')[0];
const resizer = document.getElementById('resizer');
```

These are to get one by one specific elements with the corresponding HTML IDs we added previously.

```
let active = false;
```

This is to keep track of whether the user is currently dragging or not.

#### 3.3.2 Managing middle bar and drag action

Displaying the images based on the slide action actually means redefining the size of one of the images. So, the images will be stacked, and the middle bar also is the limit of one image to display.

We do this code below to adjust the width of the before image to match the width of the cover frame, which also means the frame covers the after image.

```
document.addEventListener("DOMContentLoaded", function () {
    let width = slider.offsetWidth;
    console.log(width);
    beforeImage.style.width = width + 'px';
});
```

When the middle bar is moving, the width of the before image should change following.

```
window.addEventListener('resize', function () {
    let width = slider.offsetWidth;
    console.log(width);
    beforeImage.style.width = width + 'px';
})
```

This following class will be added or removed automatically and conditionally based on the mouse action on the middle bar.

```
resizer.addEventListener('mousedown', function () {
    active = true;
    resizer.classList.add('resize');
});

document.body.addEventListener('mouseup', function () {
    active = false;
    resizer.classList.remove('resize');
});
```

**In there**: `resizer` is the ID we added to the bar previously.

Based on this action, the `resize` class indicates the current position of the middle bar. It also indicates the width of the image should be at the moment.

Next, we should limit the area of action that can be triggered.

```
document.body.addEventListener('mouseleave', function () {
    active = false;
    resizer.classList.remove('resize');
});
```

This one is to stop the dragging if the mouse moves outside the frame area, preventing the dragging action from continuing unintentionally.

```
document.body.addEventListener('mousemove', function (e) {
    if (!active) return;
    let x = e.pageX;
    x -= slider.getBoundingClientRect().left;
    slideIt(x);
    pauseEvent(e);
})
```

This captures the mouse movement event so that the icon and the middle slider move only when the icon is clicked.

Then, alter the width of the before image and the position of the middle bar with the new one based on the calculated distance. So that, when you click the icon and move the mouse, the slider and the width of the before image adjust accordingly.

```
function slideIt(x) {
    let transform = Math.max(0, (Math.min(x, slider.offsetWidth)));
    before.style.width = transform + "px";
    resizer.style.left = transform - 0 + "px";
}
```

#### 3.3.3 Preventing default actions

We use this final part to prevent the default actions of the browser that can be confused with the action on the middle bar. It makes sure that the middle bar moves only when the reader really clicks on it and drags it. Also, the dragging does not affect any other part of the page.

```
function pauseEvent(e) {
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
}
```

That's all for the code. All the code is updated on [Github](https://github.com/wpmetabox/tutorials/tree/master/display-before-after-image) for your reference.

Move on to a post, let's see the final result! When we drag the middle bar, the before image will be shown less or more based on the bar position.


![When we drag the middle bar, the before image will be shown less or more based on the bar position.](https://i.imgur.com/KFWd6zk.gif)

If you're interested in exploring more ways to display images dynamically, you might find this tutorial helpful: [Displaying images from cloneable fields](https://docs.metabox.io/tutorials/display-images-cloneable-fields-mb-views/).
