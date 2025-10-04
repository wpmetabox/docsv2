---
title: Configuring homepage using MB Views
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

**Regularly updating the homepage brings fresh content** and helps impress website visitors easier. However, it may take time and effort to change its content. You definitely can avoid it with the help of custom fields created with Meta Box and MB Views. Let’s say goodbye to the hassle of coding in theme files!

I’ve just made a simple page with a carousel for the demo like this. Whenever I want to change the images, texts, and buttons but keep the layout, I **just update content in the custom field, then the homepage’s content also change** following without touching to the code.

![The demo of a homepage with a carousel.](https://imgur.elightup.com/G88TAbH.gif)

## Video version

<LiteYouTubeEmbed id='1hTOwWd3y3M'/>

## Preparation

As I said, we will change content in custom fields, then the homepage content will be changed as well. It means that we must create custom fields corresponding to every content on your homepage. Each element will have its own custom field.

For instance, each slider in my carousel contains some information such as the image, title, description, and button. Instead of adding those contents directly into the code, I will create custom fields for each one of them. Then, just get values from those fields to display the content.

These are some tools we need for this practice:

First, we need the [Meta Box framework](https://wordpress.org/plugins/meta-box/). It’s available on [wordpress.org](https://wordpress.org/plugins/meta-box/). We also need some advanced features from some extensions of **Meta Box**. You can download them individually or use **Meta Box AIO** to have them all.

* [MB Views](https://metabox.io/plugins/mb-views/): to have a template for the page and get content from the custom fields to display on the homepage instead of touching any theme files or accessing the server or host;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): provides a UI to create custom fields to save the content of the homepage.

Finally, I’ll use a pre-built template from [Bootstrap](https://getbootstrap.com/2.3.2/examples/carousel.html). In the event that you are using your own template, you can also follow this practice.

## Creating the homepage

Go to **Pages** > **Add New** to create a new page as usual.

![Create a new page](https://imgur.elightup.com/DzF1s4O.png)

Then, go to the **Settings** menu > **Reading** to set the created page as the homepage.

![Set the created page as the homepage.](https://imgur.elightup.com/2MeNFUs.png)

## Creating template for the homepage

Instead of adding code to the theme files, you can use **MB Views** to create a template. Go to **Meta Box** > **Views** and add a new one.

![Create a new template](https://imgur.elightup.com/EAgllAD.png)

As mentioned before, I will use a pre-build template from **Bootstrap**, so just go to **Bootstrap** and download the template.

![Download the template from Bootstrap.](https://imgur.elightup.com/Ozj83J4.png)

Open the downloaded file, look for the folder of the template you want, copy all the code or a part, then paste it to the **Template** tab on the view. **Note**: In the event that you build the template yourselves, add code to the box as well.

![Paste all the code or a part to the Template tab on the view.](https://imgur.elightup.com/1OFW4MG.png)

You can see that the underlined information in the image below is the content displayed on the page.

![The content displayed on the page](https://imgur.elightup.com/4R2idK7.png)

You can also add CSS and JS code to the **CSS** tab and **JavaScript** tab of the view for styling.

![Add CSS and JS code to the CSS tab and JavaScript tab of the view for styling.](https://imgur.elightup.com/bMp6dms.png)

Finally, scroll down to set the location for this template to apply it to the homepage.

![Set the location for the template](https://imgur.elightup.com/Vf5gGkF.png)

For using Bootstrap template, you should add some lines of code to the theme’s file to declare the online libraries of CSS and JS from **Bootstrap**.

![Add code to the theme’s file to declare the online libraries of CSS from Bootstrap.](https://imgur.elightup.com/ZmK2eFp.png)

![Add code to the theme’s file to declare the online libraries of JS from Bootstrap.](https://imgur.elightup.com/aW0cxcw.png)

This’s how the carousel is on my homepage on the frontend right now.

![The carousel is on my homepage on the frontend](https://imgur.elightup.com/sAXcU47.gif)

The content is now static. Whenever you want to change it, you should go to the view editor and change the text in code. To make it dynamic, let’s move on to the next step.

## Creating custom fields

We should **create custom fields corresponding to the content that we want to have on the page**. Since I created only the carousel, for example, I'll have a group field for it like this.

![A group field saves the homepage information.](https://imgur.elightup.com/3syhIjD.png)

Each slider has its own information with the same structure, so I’ll create subfields inside the group for each kind of information, then make this group cloneable.

![Make the group cloneable](https://imgur.elightup.com/UGukjKf.gif)

Let’s create them.

Go to **Meta Box** and create a group field, and then add some subfields inside the group.

![Add some subfields inside the group](https://imgur.elightup.com/7GbdRmo.png)

Back to the settings of the group, remember to set the group to be cloneable. It will help us add more sliders.

![Set the group to be cloneable](https://imgur.elightup.com/tzbNQi5.png)

That’s all the custom fields that I’m using for this practice. In the real case, you may want to have more content on the homepage, so just add as many fields as you want.

After creating fields, move to the **Settings** tabs, choose **Location** as **Post type**, and select **Page**. Since these fields will be applied to the homepage, go to the **Advanced location rules** options > **Post** and select the name of the homepage.

![Set up the display of the created fields for the homepag](https://imgur.elightup.com/1sFm4Qg.png)

Now, on the homepage editor, you will see the fields. Whenever you click the **Add more** button, you create a new slider for the carousel.

![On the homepage editor, you will see the fields.](https://imgur.elightup.com/cMdzemv.png)

## Customizing the template

Go back to edit the template with **MB Views**.

My carousel now has 3 slides with the same structure of content. So, I have three parts of the code that are quite the same.

![Three parts of the code correspond to 3 sliders](https://imgur.elightup.com/bYkNMDq.png)

When using custom fields, we will use loops to get all the content from the sliders since we save it in a cloneable group. Therefore, just keep the first part and remove the second and third parts.

![Keep the first part and remove the second and third parts](https://imgur.elightup.com/eswPJbO.gif)

Next, just insert fields from the list on the right sidebar to get and display data from those fields. Click on the name of the created cloneable group, and a loop will be generated. Then, move the code of the slide inside the loop.

![Create loop and move the code of the slide inside the loop](https://imgur.elightup.com/2aQcCmw.gif)

Now, replace content of each element with the corresponding field.

![Replace content with the image save in the Single Image field](https://imgur.elightup.com/KwyQIsp.gif)

![Replace the text by inserting data from the corresponding field](https://imgur.elightup.com/ujnrjz3.gif)

We should edit the div tag a little bit.

![Edit the div tag a little bit](https://imgur.elightup.com/gW9tz8F.png)

**In there**:

* `{% if loop.first %}active{% endif %}`: to check if it is the first slider or not. This is to activate the style that we will apply to the slider.
* `{% if loop.first %}text-start{% endif %} {% if loop.last %}text-end{% endif %}`: This code is to check the first slider.

Here is the full code after I modified it:

```css
<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        {% for clone in post.homepage_fields %}
        <div class="carousel-item {% if loop.first %}active{% endif %}">
            <img src="{{ clone.single_image.full.url }}" width="{{ clone.single_image.full.width }}" height="{{ clone.single_image.full.height }}" alt="{{ clone.single_image.full.alt }}">
            <div class="container">
                <div class="carousel-caption  {% if loop.first %}text-start{% endif %} {% if loop.last %}text-end{% endif %}">
                    <h1>{{ clone.title }}</h1>
                    <p>{{ clone.description }}</p>
                    <p><a class="btn btn-lg btn-primary" href="{{ clone.button_link }}">{{ clone.button_text }}</a></p>
                </div>
            </div>
        </div>
        {% endfor %}
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
```

To style the carousel a little bit more, you can add some CSS.

![Add CSS to style the carousel a little bit more](https://imgur.elightup.com/Q7LfgLP.png)

Now, go to the homepage, you will see the content has been changed to the ones that are saved in the custom fields.

![The content has been changed to the ones that are saved in the custom fields](https://imgur.elightup.com/G88TAbH.gif)

From now on, whenever you want to change it, just go to the page in the backend, change the information.

![To change content of the homepage, change the information in the page editor.](https://imgur.elightup.com/MtxiYcs.png)

There is no need to touch the code anymore. And the content on the homepage will be replaced with new ones.

![The content on the homepage will be replaced with new ones](https://imgur.elightup.com/sRzQOS5.png)

In the case that you are using a page builder to build your page, you also can **use custom fields created with Meta Box for dynamic content**. That will help a lot to save time and effort to change the content. Those cases or configuring the homepage using **MB Views** in this practice are much like [creating landing pages](https://docs.metabox.io/tutorials/create-dynamic-landing-page/) using [Meta Box](https://metabox.io/). You can refer to it and give it a try.
