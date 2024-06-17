---
title: Displaying opening hours for restaurants - Meta Box + Bricks
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

On a website for booking tables for several restaurants, we can show the **daily opening hours** for each one. It helps your customers be more proactive in managing schedules and bookings. It’s a piece of cake to add that information into a single page of each restaurant with the help of **Meta Box** and **Bricks**.

This section is an example:

![The opening hours section on the single page of a restaurant](https://i.imgur.com/HK55zKG.png)

## Video version

<LiteYouTubeEmbed id='mjwLTGE0UKI' />

## Preparation

I assume that each restaurant is a post of a custom post type along with some detailed information. And, the opening time will be saved in custom fields created with Meta Box.

In a real case, it can be the same or different between days of the week. Therefore, besides the custom fields to store timing information, we should set a rule for displaying the fields.

So, we need these tools:
* [Meta Box core plugin](https://wordpress.org/plugins/meta-box/): to have the framework for creating the custom post type and custom fields for the restaurants. You can download it directly from [wordpress.org](https://wordpress.org/plugins/meta-box/);
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create custom post types for restaurants;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have UI in the backend to create the custom fields visually;
* [Meta Box Conditional Logic](https://metabox.io/plugins/meta-box-conditional-logic/): to create the rules for displaying or hiding the fields;
* [Meta Box Group](https://metabox.io/plugins/meta-box-group/): to organize custom fields into the groups for clearer structure;
* **Bricks** to build the opening hour section.

## 1. Creating a new post type

Go to **Meta Box** > **Post Types**, and create a new one for the restaurants.

![Go to Meta Box > Post Types, and create a new one for the restaurants](https://i.imgur.com/VoFhxW5.png)

After publishing, the created custom post type will be displayed in the admin dashboard.

![The created custom post type will be displayed in the admin dashboard.](https://i.imgur.com/1U5DFom.png)

## 2. Creating custom fields

In this step, we will create some custom fields to save the opening hours information, then define when they display as well. I’ll skip the other information about the restaurant, but you may want to have some in your real case.

![Structure of custom fields](https://i.imgur.com/BiANTWA.png)

Go to **Meta Box** > **Custom Fields** > **Add New** to create a new field group.

![Go to Meta Box > Custom Fields > Add New to create a new field group](https://i.imgur.com/luVTkps.png)

Then, add custom fields with the type and condition like this:

|                 Name                 |                  ID                  |    Type     |                                     Options                                     |                                             Condition                                             |
|--------------------------------------|--------------------------------------|-------------|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
|           Choose an option           |           choose_an_option           |   Select    | 1. all_days_are_the_same  2. difference_between_weekdays_and_weekend  3. custom |                                                                                                   |
| All days have the same opening hours | all_days_have_the_same_opening_hours |    Group    |                                                                                 |         display only when:  the `choose_an_option` field = the `all_days_are_the_same` option         |
|        Type of opening hours         |        type_of_opening_hours         |   Select    |    1. open_all_day  2. close_all_day  3. by_appointment_only  4. enter_hours    |                                                                                                   |
|          Choose time slots           |          choose_time_slots           |    Group    |                                                                                 |            display only when: the `type_of_opening_hours` field = the `enter_hours` option            |
|              Start time              |              start_time              | Time Picker |                                                                                 |                                                                                                   |
|               End time               |               end_time               | Time Picker |                                                                                 |                                                                                                   |
|               Weekdays               |               weekdays               |    group    |                                                                                 | display only when: the `choose_an_option` field = the `difference_between_weekdays_and_weekend` option |
|        Type of opening hours         |    type_of_opening_hours_**weekdays**    |   select    |    1. open_all_day  2. close_all_day  3. by_appointment_only  4. enter_hours    |                                                                                                   |
|          Choose time slots           |      choose_time_slots_**weekdays**      |    group    |                                                                                 |       display only when: the `type_of_opening_hours_weekdays` field = the `enter_hours` option        |
|              Start time              |         start_time_**weekdays**          | Time Picker |                                                                                 |                                                                                                   |
|               End time               |          end_time_**weekdays**           | Time Picker |                                                                                 |                                                                                                   |
|               Weekend                |               weekend                |    group    |                                                                                 | display only when: the `choose_an_option` field = the `difference_between_weekdays_and_weekend` option |
|        Type of opening hours         |    type_of_opening_hours_**weekend**     |   select    |    1. open_all_day  2. close_all_day  3. by_appointment_only  4. enter_hours    |                                                                                                   |
|          Choose time slots           |      choose_time_slots_**weekend**       |    group    |                                                                                 |        display only when: the `type_of_opening_hours_weekend` field = the `enter_hours` option        |
|              Start time              |          start_time_**weekend**          | Time Picker |                                                                                 |                                                                                                   |
|               End time               |           end_time_**weekend**           | Time Picker |                                                                                 |                                                                                                   |
|                Monday                |                monday                |    group    |                                                                                 |                 display only when: the `choose_an_option` field = the `custom` option                 |
|        Type of opening hours         |     type_of_opening_hours_**monday**     |   select    |    1. open_all_day  2. close_all_day  3. by_appointment_only  4. enter_hours    |                                                                                                   |
|          Choose time slots           |      choose_time_slots_**monday**       |    group    |                                                                                 |        display only when: the `type_of_opening_hours_monday` field = the `enter_hours` option         |
|              Start time              |          start_time_**monday**          | Time Picker |                                                                                 |                                                                                                   |
|               End time               |           end_time_**monday**           | Time Picker |                                                                                 |                                                                                                   |
|                  …                   |                  …                   |      …      |                                        …                                        |                                                 …                                                 |
|                Sunday                |                  …                   |      …      |                                        …                                        |                                                 …                                                 |


I’ll explain the logic and how they work in detail.

The first field is a **Select** field with 3 options as you can see in the **Choices** box.

![The Select field with 3 options](https://i.imgur.com/4pI2qFf.png)

We have separate values for each option. They will be used to set the rules for the upcoming fields.

When each option is chosen, different fields show up. We’ll use conditional logic to set the rule for displaying those fields.

For example, the **All days have the same opening hours** group display only when users set the Select field above with the first option. To set that rule, go to the **Advanced** tab, add a rule in the **Conditional Logic** section based on the value of the field like this:

![Go to the Advanced tab, add a rule in the Conditional Logic section based on the value of the field](https://i.imgur.com/5Gdu3bt.png)

It means that this group will be displayed when the **Choose an Option** field is selected as the **All days have the same opening hours** option which has the value **all_days_are_the_same**.

Similarly, if the Select field is chosen as the **Difference between weekdays and weekend** option, all the subfields of the **Weekdays** and **Weekend** groups will be displayed. And if the **Choose an Option** field is selected as the **Custom** option, the group fields for every day in a week from Monday to Sunday will be shown up. All of the keys are the same since the rule is based on the Choose an Option field. Also, just change the value to the corresponding option.

![Set the condition for the case that Difference between weekdays and weekend](https://i.imgur.com/QfSct10.png)

![Set the condition for the case that custom time slots](https://i.imgur.com/ILCZ11A.png)

In each group, we also have subfields with the same structure.

The first subfield is the **Type of Opening Hours** field. It is also a **Select** field as well. I have 4 options in the **Choices** box as below:

![Another Select field with 4 options](https://i.imgur.com/K8jd5wW.png)

The second one is a **Group** field for choosing time slots. Note that the day of the corresponding group will be added to this field’s ID to differentiate the fields from other groups. Inside it, there are two subfields for the start time and end time.

![A subgroup to display time slots with two Time Picker fields](https://i.imgur.com/taMr4qD.png)

This **Choose time slots** field displays only when you choose **Type of Opening Hours** as the last option: **Enter hours**. So, we also set the rule for this group as following.

![Set the rule for displaying the time slot: only when the Type of opening hours is Enter hours](https://i.imgur.com/VX6xU1w.png)

The restaurant can have multiple time slots. Thus, enable the cloneable feature for the group in the **General** tab.

![Enable the Clonable option to add more time slots](https://i.imgur.com/uzic9aO.png)

After having all the fields with reasonable settings, move to the **Settings** tab, set the **Location** as **Post type**, and select **Restaurant** to apply these fields to it.

![Move to the Settings tab, set the Location as Post type, and select Restaurant to apply these fields to it](https://i.imgur.com/mRCEzYs.png)

Then, go to the post editor in Restaurant, you will see the custom fields displayed following the rule we set.

![The fields and conditions work well in the post editor](https://i.imgur.com/rwtemHn.gif)

Just input the data. If the conditions weren’t wrong, all the fields would be displayed in the right way. If not, you should go back to the field settings to check the conditions carefully.

## 3. Displaying opening hours

Go to **Bricks** > **Templates**, and edit the template that we use for the single page.

![Go to Bricks > Templates, and edit the template that we use for the single page](https://i.imgur.com/eBUGTjw.png)

Don’t forget to set the preview for the template. First, you should have a separate block for the opening hours section.

![Set the preview for the template and have a separate block for the opening hours section](https://i.imgur.com/52EneQQ.png)

Then, add a heading for it.

![Add a new heading for the section](https://i.imgur.com/IiMaNbk.png)

Now, let’s display the timing information. It’s the main part of this article.

Since Bricks supports **conditions** to display or hide elements based on dynamic data, we will create elements for every field that we created in the previous step, then use conditions to show or hide the data.

No matter which kind of opening time the restaurant has, we still need to call all the data out. Then, based on the case it is, the elements to show the accurate time will display automatically.

### 3.1. For the first case: All days are the same

Add a new block to cover all the elements for this case. Instead of using a block, you can use a Div element, or anything else that can set this section separately.  Since we will have some elements like this in the next part, we should rename it for better management.

![Add a new block for the timing information in the first case](https://i.imgur.com/AmgQsMj.png)

This block displays only when the restaurant opens at the same time everyday, also means that it displays only when the first option in the Select field is chosen. So, we will have a rule for it.

Set that rule by clicking the **Conditions** icon as the below image shows.

![Click on the Conditions icon to set the rule for displaying the block](https://i.imgur.com/d9VUllB.png)

The condition is based on the value saved in a custom field, so it’s a kind of dynamic data from custom fields.  Thus, you should set the condition as **Dynamic data**.

![Set the condition as Dynamic data](https://i.imgur.com/9sXDI9J.png)

Then, set the rule like this:

![Set the rule for the block](https://i.imgur.com/3zwY1Zi.png)

**In there**:

* 1: It’s the ID of the field that the condition is based on. To regulate that the value of the field will be used to compare, you need to add the :value attribute;
* 2: It’s the operation we use to compare. Bricks also provides some other operations, just choose one that makes sense;
* 3: It’s the value of the first option that we had for the Select field.

The whole of this condition means that the block displays only when the **Choose an Option** field is set as the **All days are the same option**.

Now, let’s add some elements inside this block to display the timing information. Since they are all inside the Block element, they also display only when the condition is met.
 
I use the **Basic Text** element for the name of the days. But, I added a **Div** element before it to style easily.

![Use the Basic Text element for the name of the days](https://i.imgur.com/YHtmurs.png)

Next, add a **Div** element for the timing information.

![Add a Div element for the timing information](https://i.imgur.com/Hpvw8Cv.png)

Since the information is in the **All days are the same** group, we’ll enable the query loop for this Div to get data. Choose the **Type** of the query as the group we use.

![Enable the query loop and choose the Type as the group we use](https://i.imgur.com/mjFz19V.png)

There are also some options in the subfields of this group that lead to some different cases. Thus, we need to use the condition once again.

For the first three options (Open All days, Close All days, By Appointment Only), only the value of this field will be displayed in all three cases. So, I will add only one **Basic Text** element for them.

![Add Basic text element to get data for the first three options](https://i.imgur.com/7JN4Lgn.png)

Add dynamic data from the corresponding field to this Basic Text element to get the information saved in the field.

![Add dynamic data from the corresponding field to this element.](https://i.imgur.com/KZCtgqr.png)

Then, add a condition in the kind of dynamic data for it as well. This Basic Text element is displayed only when the **Type of Opening Hours** field is one of the three first options. In the other words, whenever the **Enter hours** option is not chosen, it will be shown. So, click on the **Conditions** icon and add a rule like this:

![Set condition for the elements](https://i.imgur.com/r3e2yWQ.png)

We also choose the field and the operation, also paste the value for comparison.

Otherwise, in the case that the last option is chosen, we have another **Div** element to display the right information.

![Add another Div element for the Enter hours option](https://i.imgur.com/5WdM2rs.png)

We use this element to set a condition to display the time slots since they are displayed only when the last option is chosen. The condition is quite the same as the previous element for the first three options, but I change the operation to equal.

![Set a condition to display the time slots](https://i.imgur.com/mNaNvl3.png)

Inside the Div, add another **Div** element to set the Query since the values we want to get for timing information are in a cloneable group.

![Add another Div element to set the query](https://i.imgur.com/VBrpNAM.png)

![Set the query for the div as the right group](https://i.imgur.com/67G3U2u.png)

Then, add two new **Basic Text** elements, one is for the start time, and one is for the end time inside those Div elements. 

![Add two new Basic Text elements for the start time and end time](https://i.imgur.com/fDT87Fa.png)

We also use dynamic data for them all to get data from custom fields. Since we have some different start time and end time fields in different groups, just make sure you choose the right ones.

![Choose dynamic data for the start time](https://i.imgur.com/Y4uvIH5.png)

![Choose dynamic data for the end time](https://i.imgur.com/0Z40ntZ.png)

That’s done for the first case. Let’s go to the front end to check how the data displays. This is the result when you choose one of the three first options:

(The section on the frontend when the three first options is chosen](https://i.imgur.com/XX0Og4w.png)

If you choose the last one and enter multiple slots, the timing will be displayed exactly.

![The time slots also display exactly on the frontend](https://i.imgur.com/IMDhl7V.png)

So, the data displayed well follows the rule that we set. For a better look of the section, you can style each element a little bit.

![Style the section](https://i.imgur.com/ocSPMvZ.png)

However, it’s not the end. We’ve just displayed data when the first option in the first Select field is chosen. So, what happens when one of the rest is chosen? We haven’t set anything to display data in those cases.

Let’s move on for them now.

### 3.2. For the second case: Difference between Weekdays and Weekend

For the second case that there are different opening times between weekdays and weekends, we will use some elements and conditions which are quite the same with the first case. This, instead of adding new elements to display data, you should duplicate the block for the **All days are the same** case. It helps save time a lot since the logic to display information is exactly the same. In this case, we have a total of two blocks: one is for the weekdays, and one is for the weekend.

Our work now is changing the conditions, dynamic data, and content for each element.

I’ll get data for the Weekdays block first. It displays only when the second option in the field is chosen. So, the condition should be changed to the second option.

![Change the condition for the second case](https://i.imgur.com/I8FUJNF.png)

Also, change the content of the **Basic Text** element to the name of the day.

![Change the content of the Basic Text element to the name of day](https://i.imgur.com/m17aQyO.png)

Next, choose the corresponding group in the query of the **Div** element for the timing info.

![Choose the corresponding group in the query of the Div element for the timing info](https://i.imgur.com/U4U1LiY.png)

The dynamic data for the three options is also modified to the right field’s ID.

![The dynamic data for the three options is also modified](https://i.imgur.com/x08GtFz.png)

We also should change the condition to display or hide for the element as well.

![Change the condition for displaying 1 of 3 options](https://i.imgur.com/t9TOXcj.png)

Do the same with the **Div** element for the time slots including edit the conditions, query and dynamic data.

![Change condition for the time slots](https://i.imgur.com/C4ifpoM.png)

![Change the query](https://i.imgur.com/Hc8Acg7.png)

![Change the dynamic data](https://i.imgur.com/oHr98Qs.png)

For displaying opening time on weekends, also duplicate this element. This section also displays when the second option in this field is chosen, it’s the same with the weekdays. So, there is no need to change the condition.

![The condition for the Weekend block is the same with Weekdays](https://i.imgur.com/loADLLI.png)

But, for the remaining elements, we also need to change the names and fields to the corresponding ones. And, remember to look for the right fields from the one related to the **Weekend** option, both in condition or displaying content.

![Change the names, fields, and conditions for the Weekend option](https://i.imgur.com/5GHxq90.png)

After changing all the information, when you go to the single page on frontend, the data will display correspondingly with the one in the fields.

![On the frontend, he data will display correspondingly with the one in the fields](https://i.imgur.com/Q3yKwAg.png)

And what about the last case?

### 3.3. For the last case: Custom

Actually, it's quite the same with the second case. Instead of dividing days into two kinds as weekdays and weekends, now we will have 7 days from Mon to Sun.

So, just duplicate the block for the Weekend. Also change the name, field ID, option in the condition, as well as the field where we display data.

![Change the name, field ID, option in the condition for the Monday block](https://i.imgur.com/guaD5f2.png)

![Days of the Custom option after change data](https://i.imgur.com/yO6qxZ5.png)

Then, we’ll get the expected result.

![The data displays exactly](https://i.imgur.com/rAWuXsL.png)

That’s done.

You also can style every element to have a better look.

![The section after styling](https://i.imgur.com/HK55zKG.png)

So, from now on, whenever the timing information changes in the backend, this template will also change the data displayed on the page as well. Everything will be automatically thanks to the displaying conditions supported by Bricks.
