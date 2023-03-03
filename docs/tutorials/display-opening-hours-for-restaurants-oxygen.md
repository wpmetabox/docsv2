---
title: Displaying opening hours for restaurants - Meta Box + Oxygen
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

In a website for booking restaurants, there will be a lot of different restaurants. Definitely, each restaurant has its own opening hours and you may want to create a section for the opening time for each one. So, in this next part of the series, we’re going to figure out how to add an opening hours section into the singular page by Meta Box and Oxygen.

This section will be the same as the last ones we created in the [previous tutorial](https://docs.metabox.io/tutorials/display-opening-hours-restaurant-mb-views/).

![Example of opening hours section](https://i.imgur.com/NjSFCse.png)

## Video vesion

<LiteYouTubeEmbed id='Q6xb17yaXag' />

## Preparation

In this case, I want to put the opening hours section for a particular restaurant. And each restaurant including its own information will be displayed on a singular page. So, all the detailed information about the restaurants’ working time will be saved in custom fields stored in the post containing the restaurants’ information.

We’ll display some extra information such as time slots for each day, and we'll use custom fields. So, we need [Meta Box plugin](https://metabox.io/) to have a framework to create them. It’s free on [wordpress.org](https://wordpress.org/plugins/meta-box/). We also need additional Meta Box advanced features, which are accessible in the following extensions:

* [MB Custom Post Type and Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create custom post type named Restaurant to contain custom fields for saving restaurants’ information;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): this premium extension of Meta Box provides an intuitive UI in the back end to create and configure custom fields without using code;
* [Meta Box Group](https://metabox.io/plugins/meta-box-group/): this extension helps to arrange fields into groups;
* [Meta Box Conditional Logic](https://metabox.io/plugins/meta-box-conditional-logic/): this extension allows to create rule to control the display of the fields;
* Oxygen: to build the section. Remember to use the 3.9 version or upper to have the native integration with Meta Box.

## 1. Creating a new custom post type

If you read the previous tutorial in this series, you can skip this step. In the event that you haven’t had a post type yet, just create a new one as usual.

Go to **Meta Box > Post Types**.

![Create a custom post type](https://i.imgur.com/Axbn3XD.png)

## 2. Creating custom fields

This step is the same as what I showed in the prior tutorial about displaying opening hours.

Go to **Meta Box > Custom Fields > Add New** to create a new field group. Then, add custom fields with the structure like this:

|                 Name                 |                  ID                  |    Type     |                                     Options                                     |                                             Condition                                             |
|--------------------------------------|--------------------------------------|-------------|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
|           Choose an option           |           choose_an_option           |   select    | 1. all_days_are_the_same  </br>2. difference_between_weekdays_and_weekend  </br>3. custom |                                                                                                   |
| All days have the same opening hours | all_days_have_the_same_opening_hours |    group    |                                                                                 |         display only when:  the choose_an_option field = the all_days_are_the_same option         |
|        Type of opening hours         |        type_of_opening_hours         |   select    |    1. open_all_day  </br>2. close_all_day  </br>3. by_appointment_only  </br>4. enter_hours    |                                                                                                   |
|          Choose time slots           |          choose_time_slots           |    group    |                                                                                 |            display only when: the type_of_opening_hours field = the enter_hours option            |
|              Start time              |              start_time              | time picker |                                                                                 |                                                                                                   |
|               End time               |               end_time               | time picker |                                                                                 |                                                                                                   |
|               Weekdays               |               weekdays               |    group    |                                                                                 | display only when: the choose_an_opton field = the difference_between_weekdays_and_weekend option |
|        Type of opening hours         |    type_of_opening_hours_**weekdays**    |   select    |    1. open_all_day  </br>2. close_all_day  </br>3. by_appointment_only  </br>4. enter_hours    |                                                                                                   |
|          Choose time slots           |      choose_time_slots_**weekdays**      |    group    |                                                                                 |       display only when: the type_of_opening_hours_weekdays field = the enter_hours option        |
|              Start time              |         start_time_**weekdays**          | time picker |                                                                                 |                                                                                                   |
|               End time               |          end_time_**weekdays**           | time picker |                                                                                 |                                                                                                   |
|               Weekend                |               weekend                |    group    |                                                                                 | display only when: the choose_an_opton field = the difference_between_weekdays_and_weekend option |
|        Type of opening hours         |    type_of_opening_hours_**weekend**     |   select    |    1. open_all_day  </br>2. close_all_day  </br>3. by_appointment_only  </br>4. enter_hours    |                                                                                                   |
|          Choose time slots           |      choose_time_slots_**weekend**       |    group    |                                                                                 |        display only when: the type_of_opening_hours_weekend field = the enter_hours option        |
|              Start time              |          start_time_**weekend**          | time picker |                                                                                 |                                                                                                   |
|               End time               |           end_time_**weekend**           | time picker |                                                                                 |                                                                                                   |
|                Monday                |                monday                |    group    |                                                                                 |                 display only when: the choose_an_option field = the custom option                 |
|        Type of opening hours         |     type_of_opening_hours_**monday**     |   select    |    1. open_all_day  </br>2. close_all_day  </br>3. by_appointment_only  </br>4. enter_hours    |                                                                                                   |
|          Choose time slots           |      choose_time_slots_**weekend**       |    group    |                                                                                 |        display only when: the type_of_opening_hours_monday field = the enter_hours option         |
|              Start time              |          start_time_**weekend**          | time picker |                                                                                 |                                                                                                   |
|               End time               |           end_time_**weekend**           | time picker |                                                                                 |                                                                                                   |
|                  …                   |                  …                   |      …      |                                        …                                        |                                                 …                                                 |
|                Sunday                |                  …                   |      …      |                                        …                                        |                                                 …                                                 |

As you saw in the table above, the first field is a **Select** field and there are 3 options that I filled in the **Choice** box as below.

![Fill the information in the Choice box](https://i.imgur.com/cQKTi1W.png)

These 3 options will be used to set the display rule of other group fields.

To set conditions to groups, for example, with the **All days have the same opening hours** group. Go to the **Advanced** tab, and then set the rule in the **Conditional Logic** section like this:

![Set the rule in the Conditional Logic](https://i.imgur.com/LFwZofk.png)

This rule means this group will be displayed when the **Choose an Option** field is selected as **All days have the same opening hours** option which has the value is **all_days_are_the_same**.

Similarly, if the **Choose an Option** field is chosen as the **Difference between weekdays and weekend** option, all the subfields of the **Weekdays** and **Weekend** group will be displayed. Or if the **Choose an Option** field is selected as the **Custom** option, the group fields for every day in a week will be shown up. That’s the concept of how to create fields.

![Concept of how to create fields](https://i.imgur.com/giCpWKz.png)

![All the subfields of the Weekdays and Weekend group will be displayed](https://i.imgur.com/jnj7F10.png)

In each group field, I also have subfields with the same structure.

The **Type of Opening Hours** field is select field. I have 4 options in the Choice box:

* Open All day;
* Close All day;
* By Appointment Only;
* Enter Hours.

![Fill in the information in the Choice box](https://i.imgur.com/qxDVyAH.png)

The second subfield is a Group field named Choose Time Slots. Inside it, there are two subfields: **Start Time** and **End Time**.

If the restaurant has multiple opening hours, you can choose **Enter Hours** to display the **Start Time** and **End Time** field in the **Choose Time Slots** group. So, I will set the rule for this group like this:

![Set the rule for the group field](https://i.imgur.com/XmK1LWE.png)

In case the restaurant opens in multiple time slots, we’ll need this group to be cloneable. So, I tick this box as below: 

![Set the group to be cloneable](https://i.imgur.com/9JYVLp9.png)

After creating all the fields, go to the **Settings** tab of the field group, choose **Location** as **Post Type**, and select **Restaurant** to apply these fields to this post type.

![Set Location for the created fields](https://i.imgur.com/jpmKrvm.png)

Publish this field group and go to the post editor in **Restaurant**, you will see the custom fields here.

![The created fields appear in the Post editor](https://i.imgur.com/E9vxsR5.gif)

They work exactly like the rule we set.

## 3. Displaying the fields’ value

We’ll display the opening hours section using Oxygen. If you’ve had a template created by Oxygen for the Restaurant singular page, just go and edit it. 

In the event you haven't had one, go to **Oxygen > Template > Add New Template** to create a new one.

![Create a new template](https://i.imgur.com/ESq9hMo.png)

Here, I’ve already had it. So, I just click **Edit with Oxygen**.

Next, add a new **Div** component.

![Add a new Div component](https://i.imgur.com/dZSFZnz.png)

In this practice, it includes some complex conditions to choose which fields will be got the value from. However, Oxygen hasn’t supported logic to choose which field yet, we need to use code in this practice. So, I will add a **Code Block** component.

![Add a Code Block component](https://i.imgur.com/okuDlLE.png)

Then, choose the **PHP&HTML** and you will see a space to add code.

![Choose the PHP&HTML](https://i.imgur.com/7JpbFqf.png)

![There will be a space to add code](https://i.imgur.com/XQMZTC7.png)

The code is quite long, so I put it in my Github [here](https://github.com/wpmetabox/tutorials/blob/master/display-opening-hours-with-Oxygen/template.php). You can refer to it for more details. The code is divided into several parts to get corresponding group data. Because of the same concept in all parts, I’ll explain a typical part to be more clear about the logic.


```php
<?php $options = rwmb_meta( 'choose_an_option' ); ?>
<?php if ( $options == "all_days_are_the_same" ): ?>
    <?php $same_days = rwmb_meta( 'all_days_have_the_same_opening_hours' ); ?>
	<?php $same_days_option = $same_days['type_of_opening_hours']; ?>
	<?php $choose_time_slots = $same_days['choose_time_slots'] ?>
	<?php if ( $same_days_option == "enter_hours" ): ?>
		<?php foreach ( $choose_time_slots as $time_slots ): ?>
			<?php echo $time_slots['start_time'] ?>
			<?php echo $time_slots['end_time'] ?>
		<?php endforeach; ?>
	<?php else: ?>
		<?php 
			$select_field = isset( $same_days['type_of_opening_hours'] ) ? $same_days['type_of_opening_hours'] : '';
			$group_field = rwmb_get_field_settings( 'all_days_have_the_same_opening_hours' );
			foreach ( $group_field['fields'] as $field ) {
				if ( empty( $field['options'] ) ) {
					continue;
				}
		?>
			<?php if($field['options'][$select_field]): ?>
				<?= $field['options'][$select_field]; ?>
			<?php endif; ?>
					<?php
			}
		?>
	<?php endif; ?>
```

Let’s get through each line with me.


```php
<?php $options = rwmb_meta( 'choose_an_option' ); ?>
```


I created a variable to get the value of the field **Choose an Option** which has the **ID** is `choose_an_option`. We will create a condition based on the returned value to decide which fields will be got the value from.

```php
<?php if ( $options == "all_days_are_the_same" ): ?>
    <?php $same_days = rwmb_meta( 'all_days_have_the_same_opening_hours' ); ?>
```

If the returned value is the first option, we will get the value of **All days have the same opening hours** group.

```php
<?php $same_days_option = $same_days['type_of_opening_hours']; ?>
<?php $choose_time_slots = $same_days['choose_time_slots'] ?>
```
I also have 2 following variables that obtain the value of two fields: **Type of Opening Hour** and **Choose Time Slots**. They are the subfields of the **All days have the same opening hours** group.

Since the **Type of Opening Hour** is a **Select** field with some options as the image below, based on the returned value of this field, we’ll get value from the **Choose Time Slots** group or not.
```php
<?php if ( $same_days_option == "enter_hours" ): ?>
	<?php foreach ( $choose_time_slots as $time_slots ): ?>
		<?php echo $time_slots['start_time'] ?>
		<?php echo $time_slots['end_time'] ?>
	<?php endforeach; ?>
```
If the returned value of the **Type of Opening Hour** field is **Enter hours**, we’ll display the value from the **Choose Time Slots** group field with its subfields: **Start Time** and **End Time** fields. Since the **Choose Time Slots** group is cloneable, we have a loop here.
```php
<?php 
	$select_field = isset( $same_days['type_of_opening_hours'] ) ? $same_days['type_of_opening_hours'] : '';
	$group_field = rwmb_get_field_settings( 'all_days_have_the_same_opening_hours' );
	foreach ( $group_field['fields'] as $field ) {
		if ( empty( $field['options'] ) ) {
			continue;
		}
?>
	<?php if($field['options'][$select_field]): ?>
		<?= $field['options'][$select_field]; ?>
	<?php endif; ?>
			<?php
	}
?>
```

For other options in the **Type of opening hours** field, the above is used to display the label of that selected option.

That's the end of the first section, corresponding to the first option of the **Choose an Option** field. 

If separate days have different opening hours, call the values from the remaining groups.
The structure of those groups is the same as the **All days have the same opening hours** group, so just simply follow the same logic in the code.

This section on the page is now displayed like this because this code is for getting data from custom fields only.

![The section of the page will displayed like this](https://i.imgur.com/Ky5uvnC.png)

To have the display with some other texts as the demo, I’ll add some heading, div tags and class for easier styling later. I’ve uploaded the code on [Github](https://github.com/wpmetabox/tutorials/blob/master/display-opening-hours-with-Oxygen/template.php), you can refer to it.

Now, all the time slots with some additional texts are shown in the section already.

![All the time slots with some additional texts are shown](https://i.imgur.com/GAkDggx.png)

However, it doesn’t look as beautiful as I want. So, I will add some CSS to style this section in the next step.

## 4. Styling the section

For styling, you can go back to the Oxygen visual builder and style each component if any.
In this case, I‘ll add some CSS by going to **Manage > Stylesheet** and **Add Stylesheet**.

![Style the Section](https://i.imgur.com/0y9yroz.gif)

This is the CSS that I’ve used:
```css
.container.detail-restaurant .opening-hours {
    max-width: 300px;
    margin: 0 auto;
    width: 100%;
}

 .container.detail-restaurant .opening-hours h2 {
    margin: 0 0 10px;
	text-align: center;
	border: 4px solid rgba(231,57,72,.85);
    border-right: 0;
    border-left: 0;
}

 .container.detail-restaurant .detail-schedule .date-time {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
	align-items: baseline;
}

.container.detail-restaurant .detail-schedule .date-time .hour .starting-hour:after{
    content: '-';
    margin: 0 5px;
}

.container.detail-restaurant .detail-schedule .date-time .hour .time-slot {
    display: flex;
}

.container.detail-restaurant .detail-schedule .date-time .date {
    font-weight: 700;
    font-size: 15px;
}

.container.detail-restaurant .detail-schedule {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
	border-bottom: 4px solid rgba(231,57,72,.85);
    padding-bottom: 10px;
}
```

Let’s see how the opening hour section displays on the frontend. It’s much more beautiful, isn't it?

![The final result](https://i.imgur.com/NjSFCse.png)

To refer to all the code that I used, you can visit here.

