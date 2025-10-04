---
title: Creating a Custom 404 Page in WordPress - P4 - Meta Box + Breakdance
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Let’s explore an interesting way to have **flexible and meaningful content for a custom 404 page** by using custom fields created with **Meta Box** and displaying them with **Breakdance**.

This is a custom 404 page I created as an example. The page may include any kind of content that you think is useful for the visitors.

![An example of a custom 404 page](https://imgur.elightup.com/xRd5V9C.png)

## Video version

<LiteYouTubeEmbed id='Wx92KGAnhDM'/>

## Preparation

To make all the content on your 404 page dynamic and flexible, you should use custom fields to store them. In my case, they are the image, message, and button, as well as the link on the button. Then, you can change any of them to have a new 404 page.

So, these are tools we need in this practice.

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom fields. You can download it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/);
* [MB Settings Page](https://metabox.io/plugins/mb-settings-page/): to create a settings page to input all the information that we want to be on the 404 page;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to create custom fields to save that information visually;
* [MB Group](https://metabox.io/plugins/meta-box-group/) (optional): to have your own structure of fields that fit your page’s content;
* **Breakdance**: to build the page.

Now, let’s go step by step.

## 1. Creating a new settings page

The 404 page is not a specific page as usual, so we’ll use a settings page to include all the content and settings for it.

Go to **Meta Box** > **Settings Pages**, and create a new settings page.

![Go to Meta Box > Settings Pages, and create a new one.](https://imgur.elightup.com/ZVhynn7.png)

For the position of the settings page, you can put it on every place in the menu. We have the **Menu Type** section to set where to access the page. In this practice, I’ll set it as a submenu of the **Settings** menu.

![Set the position of the settings page in the menu](https://imgur.elightup.com/wSES9B9.png)

The page is still blank now since we haven’t added any content to it.

![The 404 page is still blank now](https://imgur.elightup.com/B29WyQr.png)

We’ll do it in the next step.

## 2. Creating custom fields for the 404 page’s content

As I mentioned before, instead of adding any specific content to the 404 page, we’ll use custom fields to have dynamic content for it. These custom fields will be set on the created settings page.

Go to **Meta Box** > **Custom Fields**, and create a new field group.

![Go to Meta Box > Custom Fields, and create a new field group](https://imgur.elightup.com/Yz6IA1P.png)

These are some fields that I’ll create for the page as examples. Simply add more fields if you want to have more content on the page.

![Some typical fields for the 404 page as example](https://imgur.elightup.com/s66upgA.png)

Just add field types one by one corresponding to the kind of content.

For the buttons, I’ll group the label and URL together. So, add a **Group** field for the button.

![Add a Group field for the button](https://imgur.elightup.com/lI1NCyH.png)

Inside the group, add two subfields with the corresponding field type.

![Add the subfields for the label and URL of the button](https://imgur.elightup.com/0JqyIks.png)

In my specific case, I set the group as collapsible and named for the button.

![Set the name of the button](https://imgur.elightup.com/0HEKstR.png)

If you want to add more than one button, make the group cloneable by enabling the corresponding option.

![Set the group is clonable to add more than one button](https://imgur.elightup.com/ZLBCruT.png)

After having all the fields with reasonable settings, move to the **Settings** tab, set the **Location** as **Settings page**, and choose the created settings page to apply the fields to it.

![In the Settings tab, set the Location as Settings page, and choose the created settings page to apply the fields to it.](https://imgur.elightup.com/bveviUt.png)

Now, go to your settings page, and you will see custom fields displayed.

![The custom fields display in the settings page](https://imgur.elightup.com/I2EyGOT.png)

Just input content for the page there.

Next, we’ll get and display these input data on the frontend.

## 3. Creating a template for the 404 page

We’ll get and display the content of the 404 page in a template created with Breakdance.

Navigate to **Breakdance** > **Templates**, and add a new template.

![Go to Breakdance > Templates, and add a new template](https://imgur.elightup.com/h9y0Dul.png)

Breakdance supports a specific template for the 404 page.

![Breakdance supports a specific template for the 404 page](https://imgur.elightup.com/Cbudm9i.png)

Just choose that option. Then, edit it in Breakdance.

![Choose that template and edit it in Breakdance](https://imgur.elightup.com/D4kXFM4.png)

Based on your desired 404 page, just add a new section and choose the suitable structure for it. In my case, I add a **Column** element, and select the two-column layout.

![Add layout for the 404 page as you want](https://imgur.elightup.com/kC09h8j.png)

Next, just add some elements into two columns to get and display data for the 404 page.

Inside the first column, I’ll add an **Image** element.

![Add an Image element](https://imgur.elightup.com/GIgadcD.png)

Since it was saved in the custom field created with Meta Box, click on the dynamic data button to choose where we get data from.

![Click on the dynamic data icon to get data from](https://imgur.elightup.com/3OO3P75.png)

Then, in the appeared pop-up, look for the **Meta Box** section, and choose the name of the field that we save the image.

![Choose the name of the field that we save the image in the Metabox section](https://imgur.elightup.com/5bUbVs2.png)

In the second column, add a **Text** element for the message.

![Add a Text element for the message](https://imgur.elightup.com/QKmlxrq.png)

Also, use the dynamic data button, and select the field for the message.

![Select the field for the message](https://imgur.elightup.com/Qe1hgwm.png)

The last one is the buttons. Their label and URLs are saved in the cloneable group. However, Breakdance hasn’t supported getting that kind of data in the settings page. So, we should use code to get them.

Add a **Code Block** element.

![Add a Code Block element](https://imgur.elightup.com/AOqkIQs.png)

Then, add the following code:

```
<?php
$group = rwmb_meta( 'button', ['object_type' => 'setting'], '404-page' );
foreach ($group  as $value) :
    echo $value['title'];
    echo $value['url'];
endforeach;
?>
```

![Add some code to get and display data from cloneable group in the settings page](https://imgur.elightup.com/FBHtDoa.png)

**Specifically**:

* `$group = rwmb_meta( 'button', ['object_type' => 'setting'], '404-page' );`: is to get data from a group in the settings page through the `rwmb_meta()` function provided by Meta Box.
* `button`: is the ID of the group.
* `404-page`: is the ID of the settings page.
* `foreach ($group  as $value) … endforeach;`: is a loop to list all the items since the group is cloneable. Inside the loop, we’ll use the echo function to display data from two subfields with IDs as `title` and `url`.

That’s done for getting content.

Now, on the frontend, the data of the 404 page is displayed. But, the button is in the text format.

![All of the data displayed but the button is in the text format](https://imgur.elightup.com/Joh1lx7.png)

We need to modify it a little bit to have a better look. So, let’s move to the next step.

## 4. Styling the page

Back to edit the created template with Breakdance, change some settings in the Style tab of each element to have the desired look.

![Change some settings in the Style tab of each element to have the desired look](https://imgur.elightup.com/3KiDq47.png)

In the code block where we display the button, I also add some **`div`** tags and classes. Also, modify it.

![Modify the code a little bit](https://imgur.elightup.com/a9rTZCc.png)

In there, to embed the URL on the label of the button, I modify the code like this:

```
<a class="mb_button" href="<?php echo $value['url'];?>"><?php echo $value['title'];?></a>
```

Finally, use CSS to style the button. You can add the CSS to the Code Block as well. There is no need to create another one.

![Use CSS to style the button](https://imgur.elightup.com/xAtLpir.png)

And, this is the final look of my 404 page.

![The new look of the 404 page after styling](https://imgur.elightup.com/iRIComK.png)

Then you will get a 404 page with beautiful, useful, and flexible content that you can change easily without touching the template anymore.

## 5. Updating the content for the 404 page

Somedays, if you want to update the image, message, or button on this page, just back to the settings page, and change the content in the custom fields. Then, you’ll have a 404 page with the new content.

![Change the content in the custom fields to have a new 404 page](https://imgur.elightup.com/jFMRuGc.gif)

It’s more convenient for management. This is exactly the strength of the dynamic content for the 404 page, as well as any page on your site.

You can change it regularly to find out which content will be most sufficient for your visitors.
