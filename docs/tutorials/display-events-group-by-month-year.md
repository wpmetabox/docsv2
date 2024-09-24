---
title: Displaying events group by month and year
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

**Grouping events by month and year** is the perfect solution. It not only allows **visitors to easily find and browse events based on their dates**, but it also lets them quickly **locate upcoming activities or review past events in a structured manner**. Let’s dig into how to achieve it with **Meta Box**!

In this practice, I’ll group events in two ways: one by month and another by month and year.

![Group events by month and year with Meta Box](https://i.imgur.com/LjXznGu.gif)

## Video version

<LiteYouTubeEmbed id='_GIp1h-uaTY'/>

## Preparation

In this case, each event will be a post of a custom post type. I’ll create a custom field to store the start date of the event, which we will use to group the events by month and year.

Let’s check which tools are necessary for this practice.

* [The Meta Box plugin](https://wordpress.org/plugins/meta-box/): to have a framework to create a custom post type and a custom field for the events;
* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for the events;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to have a UI on the backend to create the custom field visually.

Now, let’s start!

## Creating a new post type

Go to **Meta Box** > **Post Types** to create a new post type for the events.

![Create a new post type for the events](https://i.imgur.com/qc0y2cw.png)

After publishing, a new menu for your post type will appear.

![A new menu for your post type will appear.](https://i.imgur.com/VGuO5Xd.png)

## Creating a custom field

For each event, we’ll use a custom field to store the start date. This is crucial because we’ll use this date to classify our events by month and year.

If you want to display additional information for each event, you can create more custom fields as needed. However, for this tutorial, we’ll focus solely on the **Start Date** field to organize and group your events according to the mentioned condition.

Now, move to **Meta Box** > **Custom Fields** and create it.

![Move to Meta Box > Custom Fields to create a custom field](https://i.imgur.com/sUv1qrA.png)

For the start of the events, I recommend using the **Date Picker** field type.

![Use the Date Picker field type for the start of the events.](https://i.imgur.com/rYd3JJP.png)

Pay attention that you’ll only see the setting for the field when enabling the [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) extension. Just turn it on to show the date directly on the management dashboard, then you can easily compare it with the result. This feature is optional, so I did not mention it before.

![Turn the setting on to show the date directly on the management dashboard](https://i.imgur.com/XeG9ifO.png)

After creating the needed field, go to the **Settings** tab. Choose **Location** as **Post type**, and select **Event** to apply the field to this post type.

![Set location to apply the field to the Event post type](https://i.imgur.com/9tm6HUq.png)

Now, in the post editor, you will see the created custom field.

![The created custom field in the post editor.](https://i.imgur.com/c6UTwtu.png)

Just simply input data, and enter the start date for the event.

These are some posts that I created for reference. The start date is shown in the admin columns as well.

![Some created posts. The start date is shown in the admin columns as well.](https://i.imgur.com/RFkS2ci.png)

## Displaying events grouped by month and year

There are several kinds of classifications by month and year that you can follow. We should use code to do it all, they will have the same logic and syntax but differ a little bit in details. In this practice, I’ll give the code to do in two ways: group events by month, and another by month and year.

![Group events in two ways: one by month, and another by month and year.](https://i.imgur.com/MoH4QPH.png)

Now, we will go with the first one, group the events by month.

### Displaying events grouped by month

No matter the format you want to display events, we should go to the theme file, and add code as follows.

```css
function sort_month_events() {
    $the_query = new WP_Query( [
        'post_type'      => 'event',
        'posts_per_page' => - 1,
        'meta_key'       => 'start_date',
        'orderby'        => 'meta_value',
        'order'          => 'ASC',
    ] );

    $all_events = [];
    while ( $the_query->have_posts() ) :
        $the_query->the_post();
        $date       = strtotime( get_post_meta( get_the_ID(), 'start_date', true ) ); 
        $month = date( "F Y", $date );
        $all_events[ $month ][] = $the_query->post;
    endwhile;

    $html = '';
    $html.= '<div class="sort-month-events">';
	foreach ( $all_events as $month => $events ) :
		$html.= "<div class='mb-month'>
                            <h3>$month</h3>
                                   <ul>";
			foreach ( $events as $event ) : 
                                        $html.= '<li>';
				$html.= date( "j F Y", strtotime(rwmb_meta('start_date', '', $event->ID)) ) . ' :
				<a href="'.post_permalink( $event->ID ).'">'.$event->post_title.'</a>
			     </li>';
                                   endforeach;
			$html.= '</ul>
                 </div>';
            endforeach;
    $html.= '</div>';
	
    return $html;
}
add_shortcode( 'sort_month', 'sort_month_events' );
```

![Go to the theme file, and add code.](https://i.imgur.com/TA7YU0h.png)

Let’s break down the code:

#### Creating a new function to handle everything

```css
function sort_month_events() {}
```

We declare this new function to handle everything, from querying your events to grouping and displaying them. Just name it in your way.

#### Querying to get events

Within the created function, create a query to get all the events and arrange them chronologically by their start date in ascending order.

```css
$the_query = new WP_Query( [
        'post_type'      => 'event',
        'posts_per_page' => - 1,
        'meta_key'       => 'start_date',
        'orderby'        => 'meta_value',
        'order'          => 'ASC',
] )
```

**Specifically**:

* `'post_type'      => 'event',`: to filter the posts in the **Event** post type;
* `'posts_per_page' => -1`: to get all posts without limiting the number of posts.;
* `'meta_key' => 'start_date', & 'orderby' => 'meta_value',`: to sort the posts based on the Start Date custom field, which we've previously set up;
* `'order' => 'ASC'`: arrange the posts in ascending order, it means the earliest events will appear first.

#### Grouping events by month

After getting all the posts as well as the events in ascending order, create an empty array - `$all_events = [];` to organize the events by their corresponding month and year.

Use the following code to check if the query above returns any posts and do a loop to list all the posts.

```css
while ( $the_query->have_posts() ) :
        $the_query->the_post();
        $date       = strtotime( get_post_meta( get_the_ID(), 'start_date', true ) ); 
        $month = date( "F Y", $date );
        $all_events[ $month ][] = $the_query->post;
endwhile;
```

**In there**:
```css
$date       = strtotime( get_post_meta( get_the_ID(), 'start_date', true ) ); 
$month = date( "F Y", $date );
```
These lines are to get the **Start Date** of the event, then re-format them with the information about the month (`F`) and year (`Y`).

```css
$all_events[ $year ][ $month ][] = $the_query->post;
```
This line is to pass the date as that format along with the posts into the array. Note that the month is now the key `$month`, and the posts passed to the `$all_events = [];` array will be grouped following the mentioned key.

#### Displaying sorted events

This part is just to display the events from that saved in the array. To do that, we use some loop.

```css
$html = '';
$html.= '<div class="sort-month-events">';
    foreach ( $all_events as $month => $events ) :
		    $html.= "<div class='mb-month'>
            <h3>$month</h3>
                <ul>";
			              foreach ( $events as $event ) : 
                        $html.= '<li>';
				                    $html.= date( "j F Y", strtotime(rwmb_meta('start_date', '', $event->ID)) ) . ' :
				                    <a href="'.post_permalink( $event->ID ).'">'.$event->post_title.'</a>
			                  </li>';
                    endforeach;
			       $html.= '</ul>
        </div>';
    endforeach;
$html.= '</div>';
	
return $html;
```
**In there**:

* `foreach ( $all_events as $month => $events ) :` to list all the months included in the array. It means that only the month has events will be listed.
* `foreach ( $events as $event ) :` to list all the events grouped in the month. Note that we saved the events by groups as months in the array already.
* `$html.= date( "j F Y", strtotime(rwmb_meta('start_date', '', $event->ID)) ) . ' :` display the date of the event with the format as day, month, and year (`j F Y)`.
* `<a href="'.post_permalink( $event->ID ).'">'.$event->post_title.'</a>:` to display the post title, means the name of the event, and its link.

#### Creating a shortcode

Pay attention to the last line, we register the shortcode (`sort_month`) that you can use in posts or pages to display the sorted events.

Now, let’s check how the events display. Simply create a new page and add a **Shortcode** block.

![Create a new page, add a shortcode block](https://i.imgur.com/B6N8oMc.png)

Then, insert the created shortcode to the box.

![Insert the created shortcode to the box](https://i.imgur.com/u35UQKD.png)

Go to the frontend, you can see the desired section with groups of events sorted by month.

![The desired section with groups of events sorted by month](https://i.imgur.com/hDPsSCK.png)

Let’s go ahead to display these events in another sorting.

### Displaying events grouped by months within years

Now, I’ll display the event with groups like this.

![Display events grouped by months within years](https://i.imgur.com/WVpvrri.png)

It’s a little bit different from the last one, but still the same logic.

So, back to the theme file, still in the part of the code we added. We’ll add a similar piece of code to it and modify it a little bit to have the wanted result.

```css
function sort_year_events() {
    $the_query = new WP_Query( [
        'post_type'      => 'event',
        'posts_per_page' => - 1,
        'meta_key'       => 'start_date',
        'orderby'        => 'meta_value',
        'order'          => 'ASC',
    ] );
	
    $all_events = [];
    while ( $the_query->have_posts() ) :
        $the_query->the_post();
        $date       = strtotime( get_post_meta( get_the_ID(), 'start_date', true ) ); 
        $month = date( "F Y", $date );
        $year = date( "Y", $date );
        $all_events[ $year ][ $month ][] = $the_query->post;
    endwhile;
	
    $html = '';
    $html.= '<div class="sort-year-events">';
	      foreach ( $all_events as $year => $years ) :
	          $html.= "<div class='mb-year'>
                <h3>$year</h3>";
                foreach ( $years as $month => $events ) :
                    $html.=  "<h6>$month</h6>
                    <ul>";
		                foreach ( $events as $event ) : 
                        $html.= '<li>';
		                        $html.= date( "j F Y", strtotime(rwmb_meta('start_date', '', $event->ID)) ) . ' :
		                        <a href="'.post_permalink( $event->ID ).'">'.$event->post_title.'</a>
						            </li>';
                    endforeach;
		                $html.= '</ul>';
	              endforeach;
            $html.=  '</div>';
        endforeach;
    $html.= '</div>';
	
    return $html;
}
add_shortcode( 'sort_year', 'sort_year_events' );
```

![Add code to the theme file for displaying events grouped by months within years](https://i.imgur.com/CSZRty2.png)

Let’s see the difference!

#### Renaming the function

To avoid confusion, we should rename the function.
```css

function sort_year_events() {}
```

#### Grouping event by year

In addition to grouping events by month, we now also group them by year. So, add this line of code below to extract the year from the event's start date.
```css
$year = date( "Y", $date );
```
We add the `$year` variable to the array as a key so that we can sort the events first by year and then by month within each year.

![Add the $year variable to the array as a key so that we can sort the events first by year and then by month within each year](https://i.imgur.com/9pUzzgi.png)

#### Modifying to display the sorted event

In the section of displaying the events, alter the new name for the div class. You should do it for style later.

![Alter the new name for the div class](https://i.imgur.com/fbaARkU.png)

We need to edit the loop to list the year to cover the old one.

![Modify the loop to list the year to cover the old one](https://i.imgur.com/7p74O50.png)

Then, add another loop to display events grouped by month within each year. Particularly, the following one loops through each month within the current year.
```css
foreach ( $years as $month => $events ) 
```
![Another loop to display events grouped by month within each year](https://i.imgur.com/PG18ob3.png)

#### Changing a shortcode

Don’t forget to change the name of the shortcode that we’ll need to use later.

![Change the name of the shortcode that we’ll need to use later](https://i.imgur.com/Y9DZ0Sa.png)

Back to the page where we want to display the events, add another section. Then add a new **Shortcode** block, fill in the created shortcode.

![Add a new shortcode block, fill in the created shortcode](https://i.imgur.com/DzXFNXY.png)

On the frontend, you can see the events grouped by months within years. And see the difference between the two sections as well.

![The events grouped by months within years before styling](https://i.imgur.com/xkzmsel.gif)

For a clearer view, let’s style these sections.

## Styling the sorted event sections

Now, go to the **Customizer** section. And then, add some CSS to style the section where we display events grouped by month and year.

![Add CSS to Customizer to style the sections](https://i.imgur.com/zyOGrd2.png)

Just remember to follow the div class we added to the theme file in the previous step.

Now, the section is more visual.

![Group events by month and year with Meta Box after styling](https://i.imgur.com/LjXznGu.gif)

If you’re looking to take your event display even further, consider checking out our tutorial on [displaying related events](https://docs.metabox.io/tutorials/display-related-posts-based-on-shared-relationship/). Thanks for reading!
