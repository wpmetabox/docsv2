---
title: Randomizing hero image in WordPress - MB Views
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Each site usually has only one hero image. Then, the visitors will see the same image as well as the same tagline and information on the hero section. It may be boring and can not showcase more than one prominent campaign. Having multiple hero sets with different content and displaying them randomly will make your website more interesting. Let’s do it with the help of MB Views from Meta Box.

This is an example.

![The hero sets display randomly with different backgrounds and content](https://imgur.elightup.com/ZY0ErNB.gif)

## Video version

<LiteYouTubeEmbed id='3U5OVjzdZzk' />

## Preparation

Each set of the hero section includes the image as the background, a tagline, and a short description. They are saved in custom fields in a settings page.

So, there are some tools we need to practice in this case:

* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create a settings page and custom fields for the hero section. It’s available on [wordpress.org](https://wordpress.org/plugins/meta-box/);
* [MB Settings Page](https://metabox.io/plugins/mb-settings-page/): to create a settings page to input hero image and other information;
* [MB Views](https://metabox.io/plugins/mb-views/): to get data from custom fields and display them on the homepage as the hero section;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to create custom fields easily.

Let’s start!

## 1. Creating a new settings page

We’ll use a settings page to include all the content of the hero section, including the images.

So, go to **Meta Box** > **Settings Pages** and create a new page.

![Go to Meta Box > Settings Page and create a new one](https://imgur.elightup.com/SEBeDmg.png)

After publishing, you can see a new settings page appear in the Admin Dashboard.

![The created settings page displays in the menu of Admin Dashboard](https://imgur.elightup.com/z0VQ14y.png)

We’ve just initialized the page, so it still is blank.

![The settings page is blank now](https://imgur.elightup.com/tYxP2Yv.png)

In the next step, we’ll create some custom fields for this settings page.

## 2. Creating custom fields

Go to **Meta Box** > **Custom Fields** to create a new field group.

![Go to Meta Box > Custom Fields to create a new field group](https://imgur.elightup.com/O5y5svO.png)

Each set displayed on the hero section will be saved in a clonable group with some subfields inside. So, this is the structure of the fields I created.

|      Name       | Field Type    |       Settings        |
|-----------------|---------------|-----------------------|
|   Hero Image    |   Group       | Cloneable+Collapsible |
|        Image    |  Single image |       Subfield        |
|        Title    |  Textarea     |       Subfield        |
|        Subtitle |  Textarea     |       Subfield        |

![The structure of the fields with a clonable group and subfields](https://imgur.elightup.com/xLaC4Uz.png)

Since we have multiple hero sets, I set the group as cloneable. This is the most pivotal setting in this practice.

![Set the group is cloneable](https://imgur.elightup.com/iSt5u3g.png)

We should set this group to be collapsible to see the content more tidily.

![Set the group to be collapsible to see the content more tidily](https://imgur.elightup.com/qNwqv8U.png)

You also can add the title for the group. The `{#}` is for numbering the sets.

![Add the title for the group.](https://imgur.elightup.com/lDj0WCa.png)

After having all the fields, move to the **Settings** tab, set the **Location** as **Settings Page**, and choose the created settings page to assign custom fields to it.

![Move to the Settings tab, set the Location as Settings Page, and choose the created settings page to apply custom fields to it](https://imgur.elightup.com/zSc6h1l.png)

Go to the created settings page, you can see the custom fields are ready.

![The custom fields are ready on the settings page](https://imgur.elightup.com/qJ6kRrO.png)

Just add the hero image and other content.

Click on the **Add more** button to add another set of the hero image and content.

![Click on the Add more button to add another set of the hero image and content](https://imgur.elightup.com/X8qOC2R.png)

To get and display data, we’ll use MB Views in the next step.

## 3. Creating a template for the hero section

Go to **Meta Box** > **Views** and create a new template.

![Go to Meta Box > Views and create a new view](https://imgur.elightup.com/3ce8Mok.png)

### 3.1. Getting all data from custom fields

To get data from the custom fields, click on the **Insert Field** button, and look for any custom field we want from the list.

![Click on the Insert Field button, and look for the custom field from the list to get the data](https://imgur.elightup.com/wEn7gVb.png)

Since the fields in this case are on a settings page, go to the **Site** tab. You will see the group of fields that we created.

![The group we created in the Site tab](https://imgur.elightup.com/rPKKTwz.png)

Click on it and some lines of code will be generated in the **Template** section.

![Some lines of code will be generated in the Template section when click on the group](https://imgur.elightup.com/Z10lJdh.png)

**In there**:

* `{% set group = attribute( site, 'hero-image' ) %}`: is to get data from the group field which on a settings page with the ID as `hero-image`;
* `{% for clone in group.hero_image %}`: is the loop to get full of the data of the cloneable group that has ID as `hero_image`.

Next, just choose a subfield of the group from the list to insert them into the loop.

![Choose a subfield of the group from the list to insert them into the loop as usual](https://imgur.elightup.com/ocafGp4.gif)

Then, move to the settings of the view. There are some options to choose from. I prefer the default one to set this template in the kind of a shortcode to have the shortcode when publishing.

![Set the view type as a shortcode to have the shortcode embedded in any place](https://imgur.elightup.com/T7Q3e1K.png)

After that, go to the homepage, and embed the shortcode to any place.

![Embed the shortcode to any place in the homepage](https://imgur.elightup.com/7e60Uwb.png)

All the images and content of all sets that I input to the fields are displayed.

![All the images and content of all sets that I input to the fields are displayed](https://imgur.elightup.com/MRbjoTQ.png)

However, we need only one set display at once. So, we should customize the template a little bit more to choose randomly which data will be displayed.

### 3.2. Customizing to random get a set of the hero images

As you may know, normally, the data of a non-clonable group will be an array as follows:

```
[[image => "image"],[title => "title"],[description => "description"]]
```

And with a clonable group, the data will be an array like this:

```
[[[image => "image1"],[title => "title1"],[description => "description1"]],
[[image => "image2"],[title => "title2"],[description => "description2"]],
[[image => "image3"],[title => "title3"],[description => "description3"]]]
```

We need only one of the hero sets for each appearance. So, only one associative array will be obtained. Pay heed that each associative array here has its own order number. We’ll use it to choose which one will be displayed.

Now, I’ll replace the loop to the following line of code to create a variable:

```
{%  set item = random(group.hero_image) %}
```

![Replace the loop to another line of code to create a variable](https://imgur.elightup.com/C74jfvB.png)

**Explanation**:

* `random(group.hero_image)`: this is the function in PHP to randomly choose an item number of the group field. It returns the order number of an associative array;
* `hero_image`: the ID of the group field.

Also, customize the code of the image to change the output of them.

![Customize the code of the image to change the output of them](https://imgur.elightup.com/mWyOHm7.png)

As well as replace the prefix with the name of the created variable. It helps to return only the image which is in the corresponding array.

![Replace the prefix with the name of the created variable](https://imgur.elightup.com/lvf8OUm.png)

Also change the prefix for the title and subtitle.

![Change the prefix for the title and subtitle](https://imgur.elightup.com/APwkpPY.png)

After updating the views, go to the homepage and you will see that only one set of the hero image will be displayed at once.

![Then, only one set of the hero image will be displayed at once](https://imgur.elightup.com/owWY8EH.png)

When we refresh the page, another set will be there instead.

![When we refresh the page, another set will be there instead](https://imgur.elightup.com/xlTOOWU.gif)

There is a point here that I turned the image to its URL since I want it to be the background for this section in the next step.

### 3.3. Styling the hero section

Go back to the view to edit the template once again.

Add some **`div`** tags and classes for the content, as well as turn the image to the background.

![Add some div tags and classes for the content, as well as turn the image to the background](https://imgur.elightup.com/J7x3njR.png)

To style the section, move to the **CSS** tab, add some code.

![To style the section, move to the CSS tab, add some code](https://imgur.elightup.com/on1DXcP.png)

Back to the homepage, there will be a new look of the hero section.

![The new look of the hero section](https://imgur.elightup.com/HMTd8E2.png)

Just refresh the page for several times, you will see the picture changed along with the different titles and subtitles.

![The hero sets display randomly with different backgrounds and content](https://imgur.elightup.com/ZY0ErNB.gif)
