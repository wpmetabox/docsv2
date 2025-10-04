---
title: Creating a coming soon page with countdown - Using MB Views
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

**An effective coming soon page** with a countdown is versatile for launches, offers, or maintenance. It builds anticipation, keeps visitors interested, and should allow easy updates without affecting the design.

In this tutorial, we’ll focus on using a coming soon page to notify visitors during website maintenance using the **MB Views** extension from Meta Box.

![Coming soon page with countdown using MB Views](https://imgur.elightup.com/u6Aho6E.gif)

## Video version

<LiteYouTubeEmbed id='oVdUtmJ3rEE'/>

## Preparation

I’ll show you how to **use custom fields to manage dynamic content** like images, messages, and timers. This way, whenever you need to make updates, you can easily replace the content in the fields, and the page will automatically reflect the changes.

Let’s look for the detailed list of tools we need for this practice.

* [The Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create a settings page and custom fields for the coming soon page content;
* [MB Settings Page](https://metabox.io/plugins/mb-settings-page/): allows you to create a settings page to input all the information that we want to be on the coming soon page;
* [MB Views](https://metabox.io/plugins/mb-views/): helps to create a template for displaying the coming soon page’s content;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to create custom fields visually.

Besides, you can make the most of some other extensions to have your own field structure that fits your page’s content. They may be [Meta Box Tab](https://metabox.io/plugins/meta-box-tabs/), [MB Conditional Logic](https://metabox.io/plugins/meta-box-conditional-logic/), or [MB Group](https://metabox.io/plugins/meta-box-group/), and so on. However, they are just optional.

Let’s start now.

## 1. Creating a settings page

The coming soon page can be a normal page or a settings page as well, and all the content will be included in custom fields. So, I choose to use the settings page for this case.

Go to **Meta Box** > **Settings Pages** and create a new one.

![Go to Meta Box > Settings Pages and create a new page](https://imgur.elightup.com/W2VGf6H.png)

The page is still blank now since we haven’t added any fields to it.

![The coming soon page is still blank now since we haven’t added any fields to it.](https://imgur.elightup.com/HzcLLFv.png)

Let’s move to the next step.

## 2. Creating custom fields for the page content

Instead of directly adding specific content to the page, I'll use custom fields to store all the information.

Go to **Custom Fields** in **Meta Box** and create a new field group.

![Go to Meta Box > Custom Fields and create a new field group](https://imgur.elightup.com/eWLHH5R.png)

Simply create each field one by one.

For the countdown, I recommend using the **Datetime Picker** field to store both the date and the exact time of the launch, ensuring precision and creating urgency for upcoming events.

![Choose Datetime Picker for the countdown](https://imgur.elightup.com/OCehTyg.png)

After creating all the fields, move to the **Settings** tab, set the **Location** as **Settings page**, and choose the created settings page to apply the fields to it.

![In the Settings tab, set the location as the created settings page to apply the fields to it](https://imgur.elightup.com/BHp4Igl.png)

Then, on your settings page, you will see custom fields displayed.

![The custom fields are displayed in the settings page](https://imgur.elightup.com/6UFreog.png)

Just input some content to the fields. They will be used to display on the coming soon page later. Note that the **Time** field is to input the exact date and time when the event takes place. And after that, we’ll use JavaScript to display the countdown.

## 3. Getting all content of the coming soon page

Go to **Meta Box** > **Views** to create a new template for the coming soon page.

![Create a new template for the coming soon page](https://imgur.elightup.com/aMs42t0.png)

With **MB Views**, you can add some lines of code to the box, or insert fields by clicking the **Insert Field** button, then choosing fields on the right sidebar to get data from custom fields.

![You can add code to the box or use the Insert Field button to insert fields](https://imgur.elightup.com/3Arwodt.png)

Since our fields are on a settings page, turn to the **Site** section to see them.

![Turn to the Site section to see fields being on a settings page.](https://imgur.elightup.com/5PgQhU9.png)

First, for the image of the coming soon page, insert the corresponding field. You can choose an image size that fits your page style, as well as its output.

![For the image of the coming soon page, insert the corresponding field.](https://imgur.elightup.com/pTq370r.png)

Next, to display the message and description, choose the right fields one by one.

![Choose the right fields to get the message and description](https://imgur.elightup.com/3TEQxhC.png)

For the timer, insert the **Time** field. And you can choose the right format for it.

![For the timer, insert the Time field.](https://imgur.elightup.com/Sg4mivU.png)

Now, go to the **Settings** section to apply this template for the coming soon page.

For the location of this template, you can choose any page to make it come soon. But in the case the whole website is coming soon, I recommend to set this view as **Code** type, also use the conditional tag to let every visitor who is not logged in see the coming soon page.

![Set type of the template to apply it for the coming soon page](https://imgur.elightup.com/8s7svBM.png)

On the frontend, you’ll see the coming soon page information.

![The coming soon page information](https://imgur.elightup.com/7POWWsP.png)

Now, all the data is in simple text, so you may need to style it a bit. And also, create the countdown, which is a very useful feature for this page. So, let’s move on to the next step.

## 4. Styling the page and creating the countdown

### 4.1 Including some elements

In the created template with **MB Views**, include some **div** tags, classes, and HTML IDs  to make styling easier.

![Include some div tags and classes, and HTML IDs](https://imgur.elightup.com/v7G1zTV.png)

**In there**:

I created a new attribute, `date-time`, to store the value of the **Time** field, so JavaScript can easily use it for a countdown without changing the code later.

These IDs, as shown in the image below, will be used later in JavaScript to create the countdown.

![These IDs will be used later in JavaScript to create the countdown.](https://imgur.elightup.com/YEC3oHU.png)

**Particularly**:

* `main-comingsoon`: is simply for the main container that holds all content related to the coming soon page, including the countdown.
* `run_countdown`: wraps all countdown elements.
* `set_day`, `set_hours`, `set_minutes`, and `set_second`: are used to display the corresponding values for days, hours, minutes, and seconds in the countdown.

After including these elements, the page will have the following structure:

![The coming soon page will turn to a new look after adding div tags, classes, HTML IDs.](https://imgur.elightup.com/YQAWocn.png)

### 4.2 Adding style

In the **CSS** tab of the view, and add some code for styling the page.

![Go to the CSS tab of the view, add some code for styling the page.](https://imgur.elightup.com/KTOZMqO.png)

Then, the page displays with a better look already, but the countdown time does not work yet.

![The coming soon page displays with a better look already, but the countdown time does not work.](https://imgur.elightup.com/B6KfdJs.png)

## 5. Running the countdown

Back to the template, move to the **Javascript** tab, then add code as follows.

![Move to the Javascript tab, then add some code](https://imgur.elightup.com/5Xj2KVo.png)

Let’s go through for more details.

```
var get_date = document.getElementById("main-comingsoon").getAttribute("data-time");
```

This line of code gets the value of the `data-time` attribute that I created earlier.

```
var countDownDate = new Date(get_date).getTime();
```

This one returns a numeric value representing the time for the specified date, calculated in milliseconds.

```
var countdownfunction = setInterval(function () {
```

This is to create the `setInterval` function that runs every second to take an action.

```
var now = new Date().getTime();
```

The line above is to get the current date and time, returning it as a numeric value in milliseconds as well.

```
var distance = countDownDate - now;
```

This calculates the remaining time for the countdown by subtracting the current time from the selected time in the **Time** field.

```
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
```
These lines help to calculate the remaining time in days, hours, minutes, and seconds using the `Math.floor()` function to round down to the nearest whole number.

After calculating the remaining time, this part below assigns the results to the corresponding HTML IDs. For example, the number of days is set in the element with the `set_day` ID, and similarly for hours, minutes, and seconds.

```
document.getElementById("set_day").innerHTML = days;
document.getElementById("set_hours").innerHTML = hours;
document.getElementById("set_minutes").innerHTML = minutes;
document.getElementById("set_second").innerHTML = seconds;
```

Finally, this code checks if the timer has finished. If it has, it stops the countdown and hides the coming soon page, allowing users to access the main site. And vice versa.

```
if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("main-comingsoon").remove();
}
```

From now on, whenever visitors go to my website, they’ll find this page. Once the countdown ends, they’ll be directed to the live website immediately.

![Coming soon page with countdown using MB Views](https://imgur.elightup.com/u6Aho6E.gif)

Someday, when you want to change the content of this page, including the image, message, or time you want to finish maintenance, simply go back to the settings page, change the data saved in the custom fields.

![Change data from custom fields](https://imgur.elightup.com/MPi1PRU.png)

Then, you will have a new page with fresher content, and the countdown  also is automatically working well with the new timestamp.

![A new coming soon page with fresher content](https://imgur.elightup.com/1TEVzNx.gif)

If you've worked with [custom 404 pages](https://docs.metabox.io/tutorials/create-custom-404-page-mb-views/), the process is quite similar. Both use custom fields created with Meta Box to store and update information effortlessly.

