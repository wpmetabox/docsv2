---
title: Creating YouTube video timestamps on WordPress - MB Views
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

You might know the timestamps feature on YouTube, but how can you have it for videos on your site? Rather than waiting for a complete video to run from zero seconds to the point you are referring to, timestamps enable you to jump to any second of the video directly where a timestamp regulates. You can add timestamps as many as the parts you want to have fast access. Let’s **create YouTube video timestamps using MB Views**!

This is an example I’d like to create today:

![YouTube video timestamps using MB Views](https://imgur.elightup.com/pDBjaKZ.gif)

## Video Version

<LiteYouTubeEmbed id='bkuxDRumUe8' />

## Preparation

In this practice, I assume that each video is saved in a post of a custom post type. To make the timestamps easier, we should save the video URL in a custom field instead of in the content of the post. Then, we will use custom fields created with Meta Box to input timestamps and short descriptions for them.

In this practice, we need these tools:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom fields, and also the custom post type if any;
* [MB Views](https://metabox.io/plugins/mb-views/): to create and style the template for the page without touching the theme files;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to create custom fields.

You can install them individually or use **Meta Box AIO**.

## 1. Creating custom fields

As mentioned, I’ll create a field to input the **ID** of the video. It is a part of the video **URL**, and we just need this for quick and short saving. You can find this **ID** on the **URL** of the video as you can see here.

![the ID on the URL of the video](https://imgur.elightup.com/zowKPBV.png)

The **Timestamp** and **Description** will be grouped in pairs and were set to add more than one timestamp for each video, as follows.

![The Timestamp and Description will be grouped in pairs and were set to add more than one timestamp for each video](https://imgur.elightup.com/eCENMrs.png)

Now, move to the **Meta Box** > **Custom Fields** to create them.

![Go to the Meta Box > Custom Fields to create custom fields](https://imgur.elightup.com/6b8BlZt.png)

Choose the **Text** field for the video **ID**.

![Choose the Text field for the video ID](https://imgur.elightup.com/SErg6B1.png)

Insert a **Group** field for timestamps.

![Insert a Group field for timestamps](https://imgur.elightup.com/Hbrfx5p.png)

We should set it to be **collapsible** since there may be too many timestamps you want to add. Also, turn on the **Cloneable** option to set the group to be cloneable. This helps to add multiple pairs of timestamps and its descriptions.

![Set field to be collapsible and turn on the Cloneable option](https://imgur.elightup.com/RbqvC23.png)

After configuring all the fields, move to the Settings tab. Choose **Location** as **Post type** and select a post type to which you want to assign these fields

![Choose Location as Post type and select a post type to which you want to assign these fields](https://imgur.elightup.com/UvrI2cS.png)

Then, go to the post editor, and you will see the fields displayed.

![The fields displayed](https://imgur.elightup.com/eCENMrs.png)

## 2. Displaying the timestamps

### 2.1. Getting timestamps from custom fields

As I said, I will not add video directly to the post as usual. I will use the **MB Views** to display it, as well as along with the timestamps.

Go to **MB Views** to create a template for it.

![Go to MB Views to create a template](https://imgur.elightup.com/zdFOEsK.png)

As usual, to get data from custom fields, we just go to insert the wanted field from this list.

![Go to insert the wanted field from this list](https://imgur.elightup.com/BvMMHhU.png)

The timestamps are in a cloneable group, so whenever you click to the group, a loop will be generated in the template.

![A loop will be generated in the template when you click to the group](https://imgur.elightup.com/BvMMHhU.png)

Then, insert the subfield inside.

![Insert the subfield inside](https://imgur.elightup.com/EzQzvRT.png)

Insert the **Video ID** field as the same.

![Insert the Video ID field](https://imgur.elightup.com/SvcyHqS.png)

Now, move to the settings of the view, since we will display the timestamps in each post, choose the type as **Singular**.

![Choose the type as Singular](https://imgur.elightup.com/7DXosbL.png)

And choose the post type you want.

![Choose the post type you want](https://imgur.elightup.com/VAGC5DF.png)

Now, go to a post on frontend, and you will see the result. Still there is no video displayed, and all of the timestamps just are text now.

![The result still there is no video displayed, and all of the timestamps just are text now](https://imgur.elightup.com/XHN1G34.png)

So, we should go back to the template and customize the code a bit more to display the video and make the timestamps work as we expected.

### 2.2. Converting data for using JavaScript

We should use JavaScript to display the video from the video **ID**, as well as display timestamps in the clickable style and make them work on the video. That’s why we are going to have an array to store the values and transfer them to a **HTML** tag for using JavaScript later.

Back to the template created with **MB Views**. First, create an array to store the timestamps and descriptions. Add this code at the first line.

``` {% set TimestampsArray = [] %} ```

![Create an array to store the timestamps and descriptions](https://imgur.elightup.com/9puw35k.png)

Then, add these lines of code to pass the value from custom fields to the array.

```
{% set TimestampsArray = TimestampsArray|merge(
  [
    {
      "timestamp": ,
      "description":
    }
   ] ) %}
```

![Add these lines of code to pass the value from custom fields to the array](https://imgur.elightup.com/srxeXyW.png)

` {{clone.timestamp}} ` and ` {{clone.description}} ` are the ones to get data from custom fields. So, move them to the 6th and 7th lines as follows.

![Move {{clone.timestamp}} and {{clone.description}} to the 6th and 7th lines](https://imgur.elightup.com/XdazTng.png)

Also remove the `{{ }}` symbols.

![Remove the {{ }} symbols](https://imgur.elightup.com/cMYuAZa.png)

I also have another array to store the video **ID** along with the timestamps and description.

![Another array to store the video ID along with the timestamps and description](https://imgur.elightup.com/2tgr4xS.png)

```
{%
    set TimestampsObject =
    [
         {"id":  },
         {
            'Timestamps':
         }

    ]
%}
```

Also move ` {{ post.video_id }} ` to assign it to the array.

![Move {{ post.video_id }} to assign it to the array](https://imgur.elightup.com/D0u0xj0.png)

Fill in the name of the first array to the ` Timestamps ` key, then the timestamps and description from it will be get and pass to the new array as well.

![Fill in the name of the first array to the Timestamps key](https://imgur.elightup.com/JRIAg6E.png)

Add the code ` <div id="video_player"></div> `. This is an **HTML ID** that’ll be used to display video using JavaScript later.

![The HTML ID that’ll be used to display video using JavaScript later](https://imgur.elightup.com/aMTiiH6.png)

There’s nothing displayed in the template so far.

To display the timestamps, insert fields from the list on the right sidebar once again.

![Insert fields from the list on the right sidebar](https://imgur.elightup.com/McHBlv8.png)

Add an A tag to the line where we display the timestamps information:

```
<li><a href="javascript:void(0);" onclick="setCurrentTime({{loop.index0}})"> </a></li>
```

![Add an A tag to the line where we display the timestamps information](https://imgur.elightup.com/2sXwb10.png)

` onclick="setCurrentTime({{loop.index0}})" ` is an attribute that helps to trigger the moment someone clicks on the timestamp and its description. It’ll let us know where they want to jump to on the timeline of the player.

![The attribute that helps to trigger the moment someone clicks on the timestamp and its description](https://imgur.elightup.com/xi75xXL.png)

As well as, based on that event, we will force the player to play from the regulated time.

Next, for **JavaScript**, add this line:

```
<div id="Timestamps_ID" data-timestamp='{{TimestampsObject|json_encode()}}'></div>
```

It’s to create an **HTML** tag with the data-timestamp attribute to obtain data from the created array.

![Create an HTML tag with the data-timestamp attribute to obtain data from the created array](https://imgur.elightup.com/DaoZjG1.png)

### 2.3. Adding JavaScript

As mentioned, we use **JavaScript** to display the video, and make the timestamps work on the video as well.

Still in the template created with **MB Views**, move to the **JavaScript** tab.

Add some codes as follows to convert the **JSON** that we created in the template to an array containing **JavaScript** objects named ` TimestampsObjectData `.

![Add some codes to convert the JSON](https://imgur.elightup.com/KlZwC8d.png)

```
var getTimestampsID = document.getElementById("Timestamps_ID");
var TimestampsObjectData = JSON.parse(getTimestampsID.getAttribute("data-timestamp"));
```

We must do this to make the following scripts run.

The next part is to initialize a YouTube player based on **YouTube API**.

![Initialize a YouTube player based on YouTube API](https://imgur.elightup.com/TBRtmPx.png)

```
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
  my_player = new YT.Player('video_player', {
    videoId: TimestampsObjectData[0].id,
    host: 'http://www.youtube.com',
  });
}
```

` video_player ` is the **HTML ID** that I created in the template.

![The HTML ID that I created in the template](https://imgur.elightup.com/IR9jWnM.png)

` videoId: TimestampsObjectData[0].id, ` helps to get the **ID** of the video from the ` TimestampsObjectData array `.

![This codes help get the ID of the video from the TimestampsObjectData array](https://imgur.elightup.com/3vVd43x.png)

` [0].id stipulates ` that only the **ID** will be get.

![The ID will be get](https://imgur.elightup.com/xDildPw.png)

Also in this script, I created ` my_player ` **JavaScript** object converted from the player. This object will help to create a **JavasScript** action to jump to a specific position on the timeline.

![The object will help to create a JavasScript action to jump to a specific position on the timeline](https://imgur.elightup.com/jCxIFW9.png)

Next, we should convert time to seconds using the following lines of code. We usually use 0:00 - 0:30 - 1:13 format for video timing. Then, we should convert it to 0 - 30 - 73 format.

![Convert time to seconds using the following lines of code](https://imgur.elightup.com/ZP32sFd.png)

```
// Converting Time to Seconds
function hmsToSecondsOnly(str) {
  var p = str.split(':'),
    s = 0, m = 1;

  while (p.length > 0) {
    s += m * parseInt(p.pop(), 10);
    m *= 60;
  }

  return s;
}
```

In the template, we had an attribute ` onclick="setCurrentTime({{loop.index0}})" ` to trigger which timestamp the user clicked on. So now, we have some lines to admit that moment and force the player to play from the clicked timestamp.

![The attribute onclick="setCurrentTime({{loop.index0}})" to trigger which timestamp the user clicked on](https://imgur.elightup.com/ZP32sFd.png)

```
function setCurrentTime(slideNum) {
  Timeobject = TimestampsObjectData[1].Timestamps;
  Timeobject = Timeobject.map(function (item) {
    return hmsToSecondsOnly(item.timestamp)
  })
  my_player.seekTo(Timeobject[slideNum]);
}
```

` setCurrentTime(slideNum) ` is the mentioned attribute.

![The mentioned attribute](https://imgur.elightup.com/vORbWDS.png)

` Timeobject = TimestampsObjectData[1].Timestamps; ` is to get data about the timestamps from the ` TimestampsObjectData ` object.

![This code is to get data about the timestamps from the TimestampsObjectData object](https://imgur.elightup.com/ZVlNwQq.png)

The values stored in this array will have the form as [0:00,Intro ; 0:30,Before Getting Started ; 1:13,Create a Custom Post Type]. It includes the timestamps and their descriptions. However, we need the timestamps only for this action. Then, we have the below lines to remove the description.

![The below lines to remove the description](https://imgur.elightup.com/pLVkEmT.png)

As well as the return values will be converted to seconds format. And now, the array will be [0,30,73] format.

![The return values will be converted to seconds format](https://imgur.elightup.com/67zlbu7.png)

From those values in the array, ` [slideNum] ` is from the attribute ` onclick="setCurrentTime({{loop.index0}}) `, and will check it matches to which value in the array. Then, it will find out exactly the position on the timeline of the player that the user wants to jump to.

![[slideNum] is from the attribute onclick="setCurrentTime({{loop.index0}})](https://imgur.elightup.com/skWhrxr.png)

` my_player.seekTo(Timeobject[slideNum]); ` will help to jump to that position.

![Help to jump to that position](https://imgur.elightup.com/WyqPyYS.png)

Now, go to a post on frontend, you will see the video player frame, along with the timestamp. Whenever you click on a timestamp, the player will jump to the corresponding time on the timeline and play.

![The video player frame, along with the timestamp](https://imgur.elightup.com/NGZtYUd.gif)

### 2.4. Styling the page

If you want to change the displaying of the timestamp, back to the template and custom the code one more time. I’m adding some headings, and classes.

![Change the displaying of the timestamp](https://imgur.elightup.com/OBlbAkA.png)

```
<h2>Video Version</h2>
<div class="video-container">
   <div id="video_player"></div>
   <div class="video-timestamp">
      <div id="Timestamps_ID" data-timestamp='{{TimestampsObject|json_encode()}}'></div>
      <strong>Timestamps:</strong>
      <ul>
         {% for clone in post.timestamps %}
            <li><a href="javascript:void(0);" onclick="setCurrentTime({{loop.index0}})"> {{ clone.timestamp }} {{ clone.description }}</a></li>
         {% endfor %}
      </ul>
   </div>
</div>
```

And now, using **CSS** to change the style.

![Using CSS to change the style](https://imgur.elightup.com/IoqZIyg.png)

```
.video-container ul{
    list-style: none;
    padding-left: 0px;
}
.video-container ul li {
    padding:5px 0px;
}
```

Now, go back to the page on the frontend, you’ll see a new look of the page.

![Youtube video timestamps page](https://imgur.elightup.com/S7TGkme.png)


