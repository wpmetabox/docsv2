---
title: Displaying dynamic banners - MB Views
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Displaying dynamic banners in multiple places on a website with the same content but varying in size and position may not be easy to design. If you are looking at how to create banners without using any page builder, we will share an easy and straightforward tip using **MB Views** that you can follow. Let’s dive in to explore the process of creating banners in detail.

This is an example for the banners that we will create in this practice.

![This is an example for the banners](https://i.imgur.com/Cv31dWC.png)

## Video Version

<LiteYouTubeEmbed id='o3vny6oma0w' />

## Preparation

I’ll create two banners with the same content but varying in size and position. They are not rendered as images. The background, text, color, or any element of the banner are stipulated from the content saved in custom fields. So you can modify the banner context to whatever you want without having to update the layout or develop a new one.

So, in this practice, we need these tools:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom fields;
* [MB Settings Page](https://metabox.io/plugins/mb-settings-page/): to create a settings page to input banner information;
* [MB Views](https://metabox.io/plugins/mb-views/): to create a template for the banner. It’s just optional;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to create custom fields easily.

You can install these extensions individually or just use **Meta Box AIO**.

## 1. Creating a settings page

We’ll use a settings page to include all the content, and other settings of the banner.

Go to **Meta Box** to create a settings page.

![Go to Meta Box to create a settings page](https://i.imgur.com/oGVdL1u.png)

There is no need for special settings for it in this practice.

After publishing, you can see a new settings page named **Banner** appeared.

![A new settings page named as Banner](https://i.imgur.com/ZVDtPLy.png)

It’s blank now, so just move on to create custom fields for this page.

![The settings page for the banner is blank page so far](https://i.imgur.com/HPE9KLQ.png)

## 2. Creating custom fields

Each element for the content of the banner should be put in a separate custom field. These are some fields that I’ll create for the banner.

![There are some fields for banners](https://i.imgur.com/6ThnxTo.png)

The first field is to set to display the banner on the frontend or not. You can turn on or turn off the banner easily thanks to it.

![This field is to set to display the banner on the frontend or not](https://i.imgur.com/IcTPvCD.png)

All the other fields are the content of the banner. They’re just typical ones. You should create fields based on your own requirements for the banner.

Now, move to the Meta Box menu to create fields.

Choose the **Checkbox** type for the first field, which regulates whether to display the banner or not.

![This is the Checkbox type to display the banner or not](https://i.imgur.com/vDwL8HK.png)

For the other fields for the content of the banner, just create them without special settings.

After creating all the fields, move to the **Settings** tab, choose **Location** as **Settings Page**, and select **Banner** to display the created fields to the settings page we use for the banner.

![Move to the Settings tab, choose Location as Settings Page, and select Banner to display the created fields](https://i.imgur.com/IDyqo4O.png)

Now the custom fields are ready on the settings page.

![The custom fields on the settings page](https://i.imgur.com/So1CSTG.png)

Just add content for the banner.

## 3. Creating a template for banner

We’ll create a template and generate a shortcode to easily display the banner anywhere.

There are two ways to do this. 

* **Adding PHP code** into the theme’s file. If you change the theme, the template as well as the shortcode will be missed.

* Using the **MB Views** extension from **Meta Box**. It will ensure it always works. 

We’ll go through to see both of these ways, then you can experience them all.

## 4. Creating a template for banner by adding PHP code to the Theme’s File

### 4.1. Getting data for banner

Go to the **functions.php** file, and add some lines of code.

![Go to the functions.php file, and add some lines of code](https://i.imgur.com/KNbBgJD.png)

**In there:**

```
$settings = get_option( 'banner' );
```

This line is to get data from the page. In there, `'banner'` is the option name of the settings page.

All of these following lines are to get data from the custom fields.

![These lines are to get data from the custom fields](https://i.imgur.com/HKrSvNO.png)

```
wp_get_attachment_image_src( )
```

This function is to get the URL of the image. `'image'` is the ID of the field.

```
$show = $settings['show'];
```

This line is to get the value saved in this field since we have a checkbox field choosing to show or hide the banner.

The `rwmb_meta( )` function is to get the data in text from fields.

![This function to get the data in text from fields](https://i.imgur.com/jMVj36V.png)

These are the ID of the fields.

![These are the ID of the fields](https://i.imgur.com/BjGrh5n.png)

Beside that, `['object_type' => 'setting']` stipulates the object type as a settings page.

These lines is to display the banner by using all the obtained data.

![These lines is to display the banner by using all the obtained data](https://i.imgur.com/KWBESdI.png)

This if `( $show == 1 ) { }` function is the condition to check that you check the box to allow showing the banner or not. If yes, the value saved in the field will be 1.

This is the banner that we will display.

![This is the banner will be displayed](https://i.imgur.com/ADhufMW.png)

I do not display all the obtained data directly. Some of them will be used as HTML attributes to specify how the image or the text will be.

For example, the URL of the image used for the background by this: `background-image: url(' .  $image_attributes[0]  . ' ).`.The color and position also are used in the same way.

### 4.2. Displaying the banner

In the above code, I also created a shortcode for the banner, then we can embed it to any place.

```
add_shortcode( 'banner-shortcode', 'short_code_banner' );
```

`banner-shortcode` is the name of the shortcode.

Go to the editor of any page, just paste the shortcode.

For instance, I add the shortcode to a page content and will display it as full width later.

![Go to the editor of any page, just paste the shortcode](https://i.imgur.com/uPJkkuG.png)

Then you’ll see the banner displayed.

![The banner displayed without styling](https://i.imgur.com/a6dtL5F.png)

To style the banner, we should add some **CSS**.

![Add some CSS for styling](https://i.imgur.com/O0GOGZR.png)

Here is the new look of the banner.

![The new look of the banner](https://i.imgur.com/VIOvKhN.png)

I also will add the banner to the right sidebar. Also use the shortcode.

![Add shortcode to the right sidebar](https://i.imgur.com/zefMSRM.png)

This is how the banner displays.

![This is how the banner displays](https://i.imgur.com/PUYvw5X.png)

You can see that the banners in both places are the same in the content and layout, but different in the size.

With dynamic banners, you can easily change the banner content and layout without spending time designing a new one, as well as place the banner in different areas and make changes of them at the same time.

## 5. Creating a template for banner using MB Views

### 5.1. Creating template and getting data

Go to **Views** to create a new template.

![Go to Views to create a new template](https://i.imgur.com/1H2jWOT.png)

In the **Template** tab, instead of adding code, we will insert fields one by one that we want to get data from.

![In the Template tab, insert fields one by one to get data from](https://i.imgur.com/cuMAk95.png)

Since our fields are on a settings page, in the **Site** section, you will see the list of the fields that we use for the banner.

![The list of the fields that we use for the banner](https://i.imgur.com/NFwW79K.png)

Just click one by one to insert fields to the template.

![Click one by one to insert fields to the template](https://i.imgur.com/4tdj274.png)

After publishing this template, it will automatically generate a shortcode. We’ll use it to display the banner later.

![A shortcode will be automatically generated](https://i.imgur.com/px0i2N8.png)

### 5.2. Displaying the banner content

The same with the method one when we have a shortcode by adding code to the theme file, now we’ll copy the shortcode from the view, then go to a page editor, paste the shortcode to any place.

![Go to a page editor, paste the shortcode to any place](https://i.imgur.com/wRwLrgQ.png)

On the frontend, the data will display in the form like this.

![On the frontend, the data will display in the form](https://i.imgur.com/stIol7H.png)

### 5.3. Beautifying the banner display

Go back to the template to customize it a bit more to regulate how the data should be rendered on the page.

The logic of the code is the same with method 1 with PHP, but different in detailed text.

![Move some lines of code to make it seem shorter and simpler](https://i.imgur.com/l1JAmKX.png)

```
{%  if(site.banner.show) == 1 %}
```

This line is a condition for showing or hiding the banner. It means that if the field with this ID is checked, the stored value will be 1, and then the banner will be allowed to display.

```
style="width: {{ site.banner.width }}
```

This line helps turn data from custom fields to be an attribute to stipulate the style of the banner. In this case, it’s the width of the image `{{ site.banner.width }}` means the field has the ID as **width** in the settings page has the ID as **banner**.

Just update the template, and see the new look of the banner on the page. 

![The new look of the banner on the page](https://i.imgur.com/CLdD9rw.png)

To prettify the banner, go back to the template in the view, add some **CSS**.

![For styling, go back to the template, add some CSS](https://i.imgur.com/0R1SxJq.png)

Now, the banner displays on the frontend at full width with the right layout.

![The banner displays on the frontend at full width with the right layout](https://i.imgur.com/VIOvKhN.png)

### 5.4. Displaying banners on multiple positions.

We have a shortcode of the template for the banner like this.

![This is a shortcode of the template for the banner](https://i.imgur.com/Qv2OVn9.png)

Just add it to multiple places on a page, or even different pages.

![Add shortcode to multiple places on a page](https://i.imgur.com/K8IpxcW.png)

Then you will have the banner in different places.

![The final result of the banner with the same content but different sizes](https://i.imgur.com/PUYvw5X.png)
