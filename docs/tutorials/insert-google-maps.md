---
title: Inserting Google Maps to a website using custom fields
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

You **should insert a map to your website** to provide your physical store address to help customers reach it more quickly and easily.

Normally, there are 2 popular ways to add a map to show the locations: It’s embedding Google Maps scripts directly, and another way is using a plugin. However, they both do not work in the case that you are having a listing page site with a long list of different stores, and each one needs to have its own map. Then, **the custom fields with Meta Box come handy** in this way.

## Video version

<LiteYouTubeEmbed id='y2DeORtmAew'/>

## Preparation

Assume that your website has a lot of listings as restaurants, and each one has its own location.

![Your website has a lot of listings as restaurants](https://i.imgur.com/jBwuAl8.png)

You should store the location in the post of each restaurant, using a custom field. Then, use the **Map** field from Meta Box, and code to display the location on the frontend. You can **add code directly to the theme file**, but it might not be optimal in some cases. And, we **highly recommend using MB Views from Meta Box** instead.

So, we need these tools for this practice.

* [Meta Box plugin](https://wordpress.org/plugins/meta-box/) to have a framework for creating custom fields, and a template for displaying the map on the frontend;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to create custom fields visually;
* [MB Views](https://metabox.io/plugins/mb-views/): to create the template easily in the event that you don’t want to add code directly to the theme.

## 1. Creating custom fields to fill in address

I will add two custom fields, one for entering an address, and one for displaying the location on a map. We will display this map on the frontend later.

Now, go to **Meta Box** > **Custom Fields**, and create them.

![Go to Meta Box > Custom Fields, and create fields](https://i.imgur.com/KH3KFN0.png)

First, choose the **Text** field for saving the address.

![Choose the Text field for saving address.](https://i.imgur.com/XleJ5xy.png)

Next, create another field to have the map. Meta Box provides 2 field types for maps. They are **Google Maps** and **Open Street Maps**.

![Meta Box provides 2 field types for maps.](https://i.imgur.com/rKhVxoF.png)

If you want to use the **Google Maps** field, you should follow [Google’s instructions to get the API key](https://developers.google.com/maps/documentation/javascript/get-api-key) and insert it into the place as shown as below.

![Insert the IPA key into the box](https://i.imgur.com/UBR4DH8.png)

Otherwise, if you do not have the key, you can use the **Open Street Maps** field. It requests no key to use. Remember to add the ID of the **Address** field to connect this map to it. If you forgot it, the map cannot work.

![Remember to add the ID of the Address field to connect this map to it](https://i.imgur.com/LG0eC05.png)

After you’ve done with two custom fields, move to the **Settings** tab, set **Location** as **Post type**, and choose the post type as the listing you want to apply these fields to.

![Set the location as the post type of the listing you want to apply these fields to.](https://i.imgur.com/aH2R9aa.png)

Then, you will see the two created fields in the post editor.

![You will see the two created fields in the post editor.](https://i.imgur.com/RFSUwhN.png)

Just enter the address to check how they work. When you enter any character into the field, it will suggest some related locations to choose from. You can choose one, and then the location markup on the map will move to the place exactly as the address is.

![When choosing any address, the location markup on the map will move to the place exactly as the address is.](https://i.imgur.com/ZGScci9.gif)

I added some restaurants along with their own locations, for example, to see the result clearer at the end.

![Some restaurants along with their own locations](https://i.imgur.com/bE0018T.png)

## 2. Displaying maps on the frontend

We have just created the map on the backend already, so it’s time to bring it to the frontend. As I said before, you can **add code to the theme file** or use **MB Views** for it. Since I recommend the **MB Views**, I’ll talk about it first.

### 2.1 Method 1: Using MB Views

When using **MB Views**, there’ll be a button to add the map to the template without touching any code. It’s so convenient, especially for those who are not familiar with code. 

![When using MB Views, there’ll be a button to add the map to the template without touching any code.](https://i.imgur.com/Pv44lzb.png)

Go to **Meta Box** > **Views**, and create a new template.

![Create a new template.](https://i.imgur.com/HYM6Piw.png)

Click on the mentioned button, and a list of fields will display to choose from. So, choose the one we use for the map.

![Choose the field we use for the map](https://i.imgur.com/16hDr8D.png)

For the output of the map, Meta Box also provides some options. 

![Set the output of the map](https://i.imgur.com/3UZwbWL.png)

There will be a line of code for the map auto-generated into the template, as you can see in the image below.

![A line of code for the map auto generated into the template](https://i.imgur.com/HXCXCH7.png)

You don't need to do anything else.

Just move to the **Settings** section of the view, set the **Type** as **Singular**, choose the **Location** as the post type where you want the map display.

![In the Settings section of the view, set the Type as Singular, choose the Location as the post type where you want the map display.](https://i.imgur.com/SwMQSF8.png)

As well, you can choose a suitable position for the map on the page.

![Choose a suitable position for the map on the page](https://i.imgur.com/89xmR77.png)

You will see the map displayed on the single post page. The map is not static, you absolutely can interact with the map by zooming in and zooming out.

![The interactive map displayed on the single post page](https://i.imgur.com/8SpCehR.gif)

When you go to another post, the map displays as well, but with a different location.

![In another post, the map displays as well, but with a different location.](https://i.imgur.com/UU6zoQv.png)

So, we have done with MB Views.

Now, let’s see another way to display the map using code.

### 2.2 Method 2: Adding code to the theme file

In the case that you don’t have the **MB Views** in your pocket, you also can use **PHP** to add code to the theme file directly.

Head over to the **functions.php** file, and add these lines of codes.

```css
function add_google_map() {
    $args = array(
        'zoom' => 14,
        'marker' => true,
    );
    $map = rwmb_meta( 'map', $args );
    echo $map;
}
add_action( 'estar_entry_content_after', 'add_google_map' );
```

![Add code to the functions.php file for displaying the map](https://i.imgur.com/nr8E1in.png)

Let’s go through it in more detail.

```css
$args = array(
        'zoom' => 14,
        'marker' => true,
    );
```

This part is to regulate the attributes that we want to use for the map, including:

* `'zoom' => 14,`:to allow you to zoom in and zoom out.
* `'marker' => true,`: to turn on a marker. It will be used to highlight the location on the map so that you can see it clearly.

You can also add more attributes as you go.

```css
$map = rwmb_meta( 'map', $args );
```

Next, I use the `rwmb_meta` function to get the data from the custom field that has the ID as map. The returned value is the latitude and longitude of the location that we saved in the field. Then, the code below helps to display the map from those returned values.

```css
echo $map;
```

The last line is to stipulate where the map appears.

```css
add_action( 'estar_entry_content_after', 'add_google_map' );
```

I'm using the `'estar_entry_content_after'` hook to show the map after the content section of the posts. It is a hook of the Estar theme, so if you have a different theme or use it in other places, just look for the suitable one.

That’s all for the code we use for the map.

Since you visit any single post page, you’ll see the map. The result is the same as we did with **MB Views**. There is also a marker. It’s on the location exactly as I saved in the field. I can zoom in and zoom out the map as well.

![The map display on a single post page](https://i.imgur.com/8SpCehR.gif)

When I go to another post, I’ll see the map along with another location.

![In another post, I’ll see the map along with the location](https://i.imgur.com/UU6zoQv.png)

So, everything on the map is going well.




