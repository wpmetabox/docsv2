---
title: Creating charts in posts - Using MB Views
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed'; import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Using charts to present information is a vivid and easy-to-understand manner for your audience. Whether you want to display statistics, growth trends, or comparisons among many items, **charts can make your content stand out and attract the attention** of your visitors.

Then, it’s quite easy if you enter data into custom fields and use **MB Views** from Meta Box to bring it to a chart. Let’s see how in this article.

I have a post along with a bar chart as an example here:

![An example of a chart in post](https://i.imgur.com/InoMsca.png)

## Video version

<LiteYouTubeEmbed id='0eZNQ5qUmWI'/>

## Preparation

Let me start by outlining the general concept to provide you with an overview.

First, we’ll use a custom field to regulate the type of chart, such as line, bar, or pie. All the data including items, statistics, and colors will be stored in custom fields as well.

![The type of chart and other data will be stored in custom fields](https://i.imgur.com/Whm6W0G.png)

Using custom fields helps your content be dynamic. So, your chart will not be affected any time you want to update the data.

We will apply all the fields to posts, so that you can add charts to every post or just some of them. Thanks to the field for the type chart, each post will have a chart with its own style.

Then, we use the MB Views with a bit of JavaScript to display the chart on post.

![Use the MB Views with a bit of JavaScript to display the chart on post](https://i.imgur.com/JIzI5K0.png)

So, these are some tools we need to have the charts:

* [Meta Box plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create custom fields and set up a template for displaying chart information. You can download it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/);
* [MB Views](https://metabox.io/plugins/mb-views/): to create a template for displaying the chart;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the back end to create custom fields to save the related information of the chart visually;
* [Meta Box Conditional Logic](https://metabox.io/plugins/meta-box-conditional-logic/): to set the rule for displaying fields for each type of chart;
* [Meta Box Group](https://metabox.io/plugins/meta-box-group/): to group the value of the X-axis and Y-axis in an item;
* [MB Settings Page](https://metabox.io/plugins/mb-settings-page/): to create a settings page including chart data in the case that you want to put the chart on a specific post or page.

If you want to display the chart on posts of a custom post type, you should use [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/) as well to create a new custom post type.

You can install them separately or use **Meta Box AIO** to get them all.

Now, let’s dive into detail step by step.

## 1. Creating custom fields for chart information

For demonstration purposes, I will add the chart to blog posts. So, I create custom fields without further steps. In the case that you want to show the chart on posts in a custom post type, you need to create the custom post type first, and then create custom fields for it.

These are some fields that I created as an example.

![Some fields I created for chart](https://i.imgur.com/BuBwsRV.png)

Go to **Meta Box** > **Custom Fields**, and create a new field group.

![Go to Meta Box > Custom Fields, and create a new field group](https://i.imgur.com/AEepkZS.png)

Then, add custom fields following the below structure and conditions:

|           Name           |             ID             |    Field Type     |                   Settings                    |                                             Condition                                             |
|--------------------------|----------------------------|-------------------|-----------------------------------------------|---------------------------------------------------------------------------------------------------|
|           Type           |           `type`           |       Select      | Options: 1. `line` 2. `bar` 3. `pie`          |                                                                                                   |
|       Chart Title        |       `chart_title`        |       Text        |                                               |                      display only when the `type` field = `line`                                  |
|       Line Color         |       `line_color`         |   Color Picker    |                                               |                                                                                                   |
|       Categories         |        `categories`        |       Group       |                Cloneable                      |                                                                                                   |
|          Key (X)            |       `key_x`           |       Text        |           4 grids                             |                                                                                                   |
|          Value (Y)          |        `value_y`        |       Number      |           4 grids                             |                                                                                                   |
|          Color              |         `color`         |    Color Picker   |           4 grids                             |                       display when the `type` field = `bar` or `pie`                              |

I’ll explain the logic and how they work in detail.

Since there are several types of charts, you should have a field where you can select a style for the chart in each post. Therefore, we’ll add a **Select** field, and input the types with their label and value. The values of the options will be used to set the rule for the fields of the color.

![Add a Select field, and input the types with their label and value.](https://i.imgur.com/QoWqEN9.png)

Next, the field for the chart title basically is text.

![Add a Text field for the chart title](https://i.imgur.com/QVpCt0e.png)

For the chart data, every chart has the same structure of data as the X-axis and Y-axis. But, they have a difference in color options. So I made some conditional logic to specify which fields will be displayed to input data based on the chosen type of the chart.

For the line chart, there is only one line to illustrate the growth trend. So, besides the keys and values of the object, we need to have a field to pick the color for that line. I use a **Color Picker** field for it.

![Use the Color Picker field type for the color of the line](https://i.imgur.com/lKC45E3.png)

This field displays only when the type we chose is **Line**. To set this condition, move to the **Advanced** tab of the field, you’ll see the **Conditional logic** section. It’s available when you have the [Meta Box Conditional Logic](https://metabox.io/plugins/meta-box-conditional-logic/) extension activated.

![Move to the Advanced tab of the field, and find out the Conditional logic section to set the condition](https://i.imgur.com/28snCYF.png)

Based on the rule I said before, we should set the key of the rule as the ID of the select field.
Then, the value should be the value of the line.

![Set the key of the rule as the ID of the select field, and the value should be the value of the line](https://i.imgur.com/JpzwGH3.png)

This means the **Line Color** field displays only when users set the Select field above as the **Line** option. For more details and advanced on setting conditions with MB Conditional Logic, you can refer to [its doc](https://docs.metabox.io/extensions/meta-box-conditional-logic/).

The data will be set in a couple of fields including the X-axis and the Y-axis. As well as, two axes will be in a line since I set the column size for them. This feature is provided by the [Meta Box Columns](https://metabox.io/plugins/meta-box-columns/) extension, which **allows us to set the field’s display in columns**. This is just optional so I didn’t mention it from the beginning.

Thus, add a **Group** field to group them in pairs first.

![Add a Group field for the couple of fields including the X-axis and the Y-axis](https://i.imgur.com/TgRCOGT.png)

Inside this group, add two subfields for the key and value, which also means the X and Y axes.

For the key on the X-axis, the data can be years, time periods, a name, or so on. So, you should use a **Text** field.

![The subfield for the X-axis is Text type](https://i.imgur.com/8nkDw5N.png)

To have the key as columns, we should change the size of their columns in the **Columns** option. Assume that the whole line width will be set as 12 grids, so choose a number from 1 to 12 to indicate the size of the field.

![Change the size of the field in the Columns option](https://i.imgur.com/MZkAeJ5.png)

Data on the Y-axis is simpler. It’s always numerical. So, add a **Number** field for the second subfield. You also can set the column for it similar to the X-axis.

![Add a Number field for the data on the Y-axis](https://i.imgur.com/6HIrH9F.png)

By the way, when the chart is set as another type, there will be another field displayed besides the fields for the X and Y axes. It’s to set the color of each item. So, add another subfield as **Color Picker** for it.

![Add another subfield as Color Picker for the color of each item](https://i.imgur.com/nzFx2Sr.png)

This field displays only when the chart is in the type as pie or bar, so move to the **Advanced** tab and add a condition as well.

The key also is the select field since the rule is based on it. I’ll use the `!=` operation, which means that ‘is not’ or ‘not equal’. Then, enter the value of the line type.

![Set condition for displaying the Color field](https://i.imgur.com/X78bD1e.png)

This condition is that the **Color** field will display whenever the first option is not chosen.

There will be several items, also pairs of statistics on the chart. So, go back to the settings of the group, and set it as cloneable to add more than one pair of data.

![Set group as cloneable to add more than one pai of data](https://i.imgur.com/w1T6R0N.png)

After having all the fields with reasonable settings, move to the **Settings** tab. As I said about purpose, I want to display the charts in posts. So, set the **Location** as **Post** to apply those fields to it. In other cases, you can set it in any post type, or page as well.

![Move to the Settings tab, set the Location as Post to apply those fields to it](https://i.imgur.com/8uBeLj5.png)

Now, in any post editor, you will see the custom fields displayed.

When you set the chart type as Line, the color field will display. Just input data for it.

![In the post editor, the field displayed exactly follow settings and rule](https://i.imgur.com/pPhY057.png)

In another post, when you try another type of chart, you will see that the color field for the line disappears. And the color for each item is displayed instead.

![If the type is bar or pie, the color for each item is displayed instead](https://i.imgur.com/o0zrnsQ.png)

So, the conditions work well.

Now, move on to visualize this data in a chart.

## 2. Getting data of the charts

Head over to **Meta Box** > **Views**, and create a new template for displaying the charts.

![Go to Meta Box > Views, and create a new template for displaying the charts](https://i.imgur.com/iMc0pj7.png)

With MB Views, you can add code to the **Template** tab, or insert fields into it by clicking this button, and choosing any fields on the right sidebar to get data from them.

![You can add code directly in the Template tab or insert fields from the list on the right sidebar](https://i.imgur.com/7ijinlq.png)

First, we should get data from the fields one by one.

![Insert fields one by one](https://i.imgur.com/b04IhyG.gif)

Categories is a cloneable group, so it will automatically generate a loop when you click on it to look for the subfield.

![There’s a loop displayed when we insert the cloneable group](https://i.imgur.com/n40xSKF.png)

Just insert the subfield inside the group to get all the clone data.

![Insert subfields inside the group to get all the clone data](https://i.imgur.com/HGuATl9.png)

The template is now in the simplest version which is just to get data. We will set the format of the chart later.

Move to the settings of this template. Since the chart can be anywhere inside the article, I keep the template as a **Shortcode**, then the writer can put it everywhere in the post.

![Keep the type of the template as shortcode to put it everywhere in the post](https://i.imgur.com/DnJS5ut.png)

After publishing this template, you can see the shortcode is generated. Just copy it.

![Copy the shortcode generated](https://i.imgur.com/wl50f5r.png)

Now, go to any post, and paste the shortcode to any place.

![Paste the shortcode to any place you want](https://i.imgur.com/bOoTHXh.png)

Then, on the frontend, you can see all the data of the chart displayed but just in text.

![All the data of the chart displayed but just in text](https://i.imgur.com/bGAfegc.png)

Let’s move on to convert them all to the chart format.

## 3. Converting data into chart format

This is the principal step of this tutorial. So, keep high attention.

Back to the template that we created for the chart to add some code.

We will use JavaScript to have a beautiful format of the chart, so add this code to declare the JavaScript library.

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
```

![Declare the JavaScript library](https://i.imgur.com/xUYHdnf.png)

Next, we will modify the code a little bit.

### 3.1. Creating variables and transfer values

We should create some variables, and transfer the values from custom fields to those variables.

```
{% set type = post.type.value %}
{% set title = mb.explode(' ',post.chart_title) %}
{% set key = [] %}
{% set value = [] %}
{% set color = [] %}
{% set line_color = post.line_color %}
```

![Create some variables, and transfer the values get from custom fields to those variables.](https://i.imgur.com/lTjZxaw.gif)

The `key`, `value`, and `color` variables are set as empty arrays since they will include the values from the fields in a cloneable group, which is obtained by the loop generated.

Also, we should modify inside the loop to transfer all the values to the arrays.

```
{% for clone in post.categories %}
    {% set key = key|merge([clone.key_x]) %}
    {% set value = value|merge([clone.value_y]) %}
    {% set color = color|merge([clone.color]) %}
{% endfor %}
```

![Modify inside the loop to transfer all the values to the arrays](https://i.imgur.com/cQOHxyB.png)

### 3.2. Assigning values to attributes of HTML tag

Also in the **Template** tab, I add some code as below:

```
<canvas id="myChart"
data-type='{{type}}'
data-title='{{title|json_encode()}}'
data-line-color='{{line_color}}'
data-color='{{color|json_encode()}}'
data-key='{{key|json_encode()}}'
data-value='{{value|json_encode()}}'

style="width:100%;max-width:600px">
</canvas>
```

![Assign values to attributes of canvas element](https://i.imgur.com/oXzmZZE.png)

**Specifically**:

* `canvas`: is an HTML tag to draw images, graphs, animations, and other graphics directly. I use it to have a chart on the webpage.
* `myChart`: is the ID I set for the element that will be the chart. It will be used in the next part of JavaScript.
* `data-X=’{{X|json_encode()}}'`: is to convert the values from the above variables to JSON to use in Javascript. Then assign them to the corresponding attributes.
* `style="width:100%;max-width:600px">`: is to set the size of the area for displaying the chart later. You can change the parameters as you want.

### 3.3. Getting charts using JavaScript

Next, go to the **JavaScript** tab, and add code.

```
var getTimeElement = document.getElementById("myChart");
var title = JSON.parse(getTimeElement.getAttribute("data-title")).join(' ');
var type = getTimeElement.getAttribute("data-type");
var line_color = getTimeElement.getAttribute("data-line-color");
var color = JSON.parse(getTimeElement.getAttribute("data-color"));
var xValues = JSON.parse(getTimeElement.getAttribute("data-key"));
var yValues = JSON.parse(getTimeElement.getAttribute("data-value"));

if (type == 'line') {
    var mb_datasets = [{ borderColor: line_color, data: yValues, fill: false }];
    var mb_legend = false;
} else if (type == 'bar') {
    var mb_datasets = [{ backgroundColor: color, data: yValues, fill: false }];
    var mb_legend = false;
} else {
    var mb_datasets = [{ backgroundColor: color, data: yValues, fill: false }];
    var mb_legend = true;
}

new Chart("myChart", {
    type: type,
    data: {
        labels: xValues,
        datasets: mb_datasets,
    },
    options: {
        legend: { display: mb_legend },
        title: {
            display: true,
            text: title,
        }
    }
});
```

![Go to the JavaScript tab, and add some code](https://i.imgur.com/33Pz6OZ.png)

Let’s break down one by one part:

#### 3.3.1. Getting data from the element and attributes

```
var getTimeElement = document.getElementById("myChart");
var title = JSON.parse(getTimeElement.getAttribute("data-title")).join(' ');
var type = getTimeElement.getAttribute("data-type");
var line_color = getTimeElement.getAttribute("data-line-color");
var color = JSON.parse(getTimeElement.getAttribute("data-color"));
var xValues = JSON.parse(getTimeElement.getAttribute("data-key"));
var yValues = JSON.parse(getTimeElement.getAttribute("data-value"));
```

We get data from the element through the `myChart` ID which we set before.

The remaining lines of code are to get data from the attributes of the canvas element which we assign values in the previous part.

#### 3.3.2. Configuring the data based on chart types

We have many types of charts, and each one displays different data. So, I set a condition to get data based on the chart types.

```
if (type == 'line') {
    var mb_datasets = [{ borderColor: line_color, data: yValues, fill: false }];
    var mb_legend = false;
} else if (type == 'bar') {
    var mb_datasets = [{ backgroundColor: color, data: yValues, fill: false }];
    var mb_legend = false;
} else {
    var mb_datasets = [{ backgroundColor: color, data: yValues, fill: false }];
    var mb_legend = true;
}
```

If the chart type is set as **Line**, the `mb_datasets` variable will get data from the line color, and the Y-axis data, the legend (`mb_legend`) will be off.

Otherwise, if the chart type is pie or bar, the color of each item will be obtained along with the Y-axis data.

Also, the legend is turned on only when the chart type is pie.

#### 3.3.3. Initializing the charts

Initialize the chart based on the element which has ID as `myChart` as well:

```
new Chart("myChart", {
    type: type,
    data: {
        labels: xValues,
        datasets: mb_datasets,
    },
    options: {
        legend: { display: mb_legend },
        title: {
            display: true,
            text: title,
        }
    }
});
```

There are some attributes to set the chart, just assign the corresponding variables to them.

The labels will be the X-axis values, also from the **Key** fields.

The data set will be from the `mb_datasets` variable that we set in the above condition.

For the legend, we turn it on or off based on the type of chart. So, the legend of the chart can display the legend only when the condition is met.

That’s all for code.

After updating the template, go to a post to see how it works.

The chart displayed beautifully based on the statistics and colors I input in custom fields.

![The chart displayed beautifully based on the statistics and colors I input in custom fields](https://i.imgur.com/NjWD99M.png)

In another post, the bar chart and pie chart are also shown beautifully. And, you also can see the legend of the pie chart we set in JavaScript.

![The pie chart also display well along with the legend](https://i.imgur.com/CusYQjH.png)

So, we’ve done creating charts for posts.

## Extra: Creating charts with data saved in a settings page

Not only custom fields in posts, you also can **save data for a chart in a settings page**, then display the chart anywhere on your website. There is not much difference with fields in posts.

Create a new settings page as usual, and change the location of the created fields to the settings page.

![Create a new settings page as usual, and change the location of the created fields to the settings page](https://i.imgur.com/L5643ar.png)

Then, input some data to the field in the settings page as well to have some real statistics on the chart in the result later.

Now, go to the create template for the chart we created previously.

The code to display the chart will be exactly the same as previously. The difference is only in where we get the data. Instead of getting data from fields in posts, we will get data from fields in the settings page.

Insert fields from the settings page to get data from them.

![Insert fields from the settings page to get data from them](https://i.imgur.com/6kaGxaz.gif)

It’s easy to see that the prefix of fields is `site.chart` with the `chart` as the ID of the settings page we created. It’s different from the prefix of fields from posts: `post`.

![The prefix of fields from settings page is site.chart](https://i.imgur.com/h430Wp4.png)

So, just change all the prefixes to be the same with the settings page.

![Change all the prefixes to be the same with the settings page](https://i.imgur.com/wUq7Xsy.png)

About the location of the template, you can keep it as a shortcode, then insert the shortcode anywhere on your website, or can regulate an exact place directly as in the below image:

![You can regulate an exact place directly](https://i.imgur.com/WmiaiLm.png)

Then, on the frontend, the chart will display well.

![The chart displayed well on the frontend](https://i.imgur.com/evIHyMw.png)

If you want to change the type or any data of the chart, go back to the settings page and change the content in the custom fields. The chart will turn into a new one as well.

All the code I use in this tutorial is updated on [GitHub](https://github.com/wpmetabox/tutorials/tree/master/create_chart) for your reference.

You also can explore the power of MB Views in [other tutorials](https://docs.metabox.io/tutorials/mb-views/).
