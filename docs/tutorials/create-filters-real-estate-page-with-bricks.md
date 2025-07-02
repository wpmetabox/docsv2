---
title: Creating Filters for Real Estate Page - Meta Box + Bricks
--- 
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'; 

If you're building a real estate website and want users to easily filter properties by type, price, area, year built, or status, this blog is for you. I’ll walk you through how to **create a professional-looking property listing** using **Meta Box** and **Bricks Builder**, with filters displayed neatly in the sidebar and results updating instantly based on user selections.

![Create filters for real estate page - Meta Box + Bricks](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/Create-filters-for-real-estate-page-meta-box-bricks.gif)

This method isn’t just for properties; it also works great for other types of content like products, job listings, or services where users need to filter by specific criteria.

It’s quite similar to our previous [job listing tutorial](https://metabox.io/create-filters-job-listing-mb-views/). We’ll still use custom fields and a custom post type to store the property data. But this time, we’ll take advantage of the built-in features of **Bricks** to handle the filtering in a more visual and streamlined way.

Let’s get started!

## Video Version

<LiteYouTubeEmbed id='gGusgklHW7w' />

## Preparation

In this tutorial, I’ll show you how to create a custom post type and custom fields for property listings with **Meta Box**, then use **Bricks** to build a dynamic layout with a real-time filter in the sidebar.

These are the extensions you may want to activate.
* [Meta Box Lite](https://metabox.io/lite/) to have a framework that allows creating custom post types and custom fields;
* **Bricks** is used to build the layout and create a real-time filtering system using query loops and dynamic data.

Now, let’s go step by step.

## 1. Create a Custom Post Type

As we said before, we’ll begin by creating a custom post type to store property listings, and the information of each one will be saved as a post of that post type.

Right on the Meta Box dashboard, click on the **Create post type** button to create a new one.

![Click on the Create post type button](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/Create-post-type.png)

After publishing, it will appear in your dashboard menu.

![The created custom post type](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/created-custom-post-type.png)

## 2. Create a Custom Taxonomy

Before diving in, keep in mind that whether you use a custom taxonomy or custom fields depends on how you want to structure and filter your content. You can choose either one or both; it’s totally up to you. In this case, I’ll use both for more flexibility.

Now, I’ll create a custom taxonomy for the created post type to categorize properties by their types.

Still in the **Meta Box** screen, create a new taxonomy.

![Go to Meta Box > Taxonomies, and create a new taxonomy](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/create-new-taxonomy.png)

In the **Advanced** tab, pay attention to the **Show admin column** setting if you want to show them as an admin column. This setting is available when you have the [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/) extension. I did not mention it at the beginning because it’s optional.

![Enable the Show admin column option](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/Show-admin-column-option.png)

Move to the **Post types** tab, choose the **Property** to assign the custom taxonomy that we’ve created to that post type.

![Choose the post type to apply the taxonomy to.](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/apply-taxonomy-to-post-type.png)

Now, you can add some terms to your product’s taxonomy.

![Terms of taxonomy](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/Terms-taxonomy.png)

## 3. Create Custom Fields for the Property

To store property details, we need to create a group of custom fields. They will cover key information such as property price, area, status, and more. Feel free to add additional fields depending on your needs.

Click on the **Create custom fields** button in the dashboard to create a new field group for the property.

![Click on the Create custom fields button in the dashboard to create a new field group](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/Create-custom-fields.png)

These are some fields I created:

![Some fields as example](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/custom-fields.png)

There’s no special setting for them. You can freely create more fields to store information for products as you want with [40+ field types](https://docs.metabox.io/fields/) provided by **Meta Box**.

For fields that require a selection, such as **Status**, I use the **Select** field type. In the Choices section, I enter the available options, like For sale or For rent.

![For fields that require a selection, use the Select field type.](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/Select-field-%20type.png)

Once all fields are configured, move to the **Settings** tab, set the **Location** as **Post type**, and select **Property** to assign these fields to it.

![Set the location for the field group.](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/Set-location-for-field-group.png)

Now, navigate to your post editor, you’ll see the custom fields displayed, along with the taxonomy section where you can enter the property type.

![Fields and taxonomy in the post editor](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/Fields-taxonomy-in-post-editor.png)

So, just fill in all the information.

These are some posts, for example, that I created. The property type as well as the taxonomy terms also display in the admin dashboard.

![The term is displayed as a column](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/term-displays-column.png)

## 4. Show Properties on the Page

In this step, we’ll display posts on the page - that means all the properties. For filtering, I’ll do it later.

First, create a new page for the property listing.

![Create a new page](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/new-page.png)

Let’s edit the page with **Bricks**.

Add a **Section** element to cover all the page content, then use the available container to insert elements for displaying the property list.

![Add a Section element to cover all the page content](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/Section-element-cover-page-content.png)

Before going further, add a **Heading** element for the page title, then click the **Dynamic Data** icon, choose the **Post title** option from the list. This will automatically display the title of the current page on the frontend.

![Get the page title](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/get-page-title.png)

Move to the container and choose the layout for it. In my case, I’ll use a 2-column layout: one for the filtering and one for the properties.

![Layout for the filtering and the properties](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/two-column-layout.png)

![Choose a 2-column layout: one for the filtering and one for the properties.](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/two-column-layout.png)

You can adjust the width of the two columns as you prefer.

Now, get the properties information into column 2.

We want to display all **Property** posts, so we need to use a query loop. To do that, add a **Div** as the wrapper and enable the **Query loop** button > the **Query** section > choose the created post type you want to get data from.

![Add div to get all posts from the post type](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/Add-div-get-all-posts.png)

Inside this div, add elements to display the property details.

For the image of the property, choose the element that has the same name. Since these are the post’s featured images, click the **Dynamic Data** icon and choose the **Featured Image** option.

![Get the image of the property.](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/Get-property-images.png)

As you can see, the image is displayed in the preview.

![The image is displayed in the preview.](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/images-in-preview.png)

Next, add another **Div** to group some property data together - this will help with styling. Then, choose the **Post Title** element for the property name.

![Get the property name.](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/Get-property-name.png)

To get its status, choose the **Basic Text** element. As this kind of information is saved in the custom field of **Meta Box**, use the **Dynamic data** button. Then, look for the field where we store the status.

![Get the status of properties](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/status-properties.png)

Do similar to get the property’s location and type.

Afterward, I want to display the property area, number of bedrooms, and number of bathrooms along with icons, so choose the **Icon List** element instead of normal text.

![Choose the Icon List element for displaying info with icons.](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/Icon-%20List-element.png)

You can style and pick icons as you like. As this info is saved in custom fields created with **Meta Box** as well, in the **Label** section, we’ll use the **Dynamic Data** and then choose the corresponding fields. For instance, I am getting the area.

![Connect data to get the area of the property](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/Get-property-area.png)

You can add the right unit. Repeat for bedrooms and bathrooms.

Finally, for the price, do the same with other data.

![Get the property price](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/Get-property-price.png)

All the information for the property is now in place.

View the page on the frontend, the property list is showing up. However, it’s still quite basic, so let’s make it more visually appealing.

![The property list is showing up](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/list-property-without-functions.png)

To style it, choose each element and change its settings. Then, the property listings look much better.

![The property listing after styling](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/property-listing-after-styling.png)

It's time to add and set up the filtering functionality.

## 5. Add Filter Functionality for the Real Estate Page

Let’s add some filter functionality so users can search for properties based on type, price, area, construction date, and status. With **Bricks**, filtering has never been easier – it supports filtering by taxonomy and even works perfectly with Meta Box custom fields. Let’s set things up!

In the Bricks settings, enable two options to activate filtering.

![Enable options to activate filtering in Bricks](https://i0.wp.com/i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/activate-filtering-bricks.png)

Then, edit the property page again. 

Name the **div** that wraps your property query - this helps you connect filters later, especially useful if the page has multiple queries. The other divs for styling don’t need names.

![Name the div that wraps your property query](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/name-query.png)

Now, add a new **div** inside the first column to cover all the filters; this will make styling easier later.

You’ll see **Bricks** supports many filter types, as you can see here:

![Bricks supports many filter types](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/filter-types-Bricks.png)

Start creating a search filter. In the **Target query** section, choose the query you created earlier. From now on, the search box will filter results based on that query.

![Create a search filter](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/search-filter.png)

For other filters, the structure is the same:

* Add a title
* Choose the right filter element and connect it to the target query.

For the property type, choose the filter element you prefer. I’ll go with **Filter – Checkbox**, since users may want to select multiple types, and checkboxes are perfect for that. Next, connect this filter to the target query. As the property type is saved in the taxonomy, in the **Source** section, choose the corresponding taxonomy. Then, you see the type filter section shows as a checkbox list based on the filter element you chose.

![Create a filter for the property type.](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/property-type-filter.png)

For the next filters, follow the concept I mentioned earlier. Add a wanted filter for price (Ex: Filter - Range). Connect it to the query as well. Since price is stored in a Meta Box custom field, choose **Custom Field** as the source, then select **Meta Box** and choose the correct field via **Dynamic Data**.

![settings for price filter](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/price-filter-settings.png)

The price filter appears; you can adjust the currency and range display.

![price filter](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/Price-filter-display.png)

You can adjust the currency and range display.

Do the same with the remaining filters.

Next, add a **Reset Filter** element; this clears all selected filters and restores the default view. You can set its action and style it.

![Add a Reset Filter element; this clears all selected filters and restores the default view.](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/Reset-filter.png)

The last one is for showing active filters, which displays which filters are currently applied.

![Active filters](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/active-filter.png)

Now all the filters are visible on the frontend.

![The filters are visible on the frontend.](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/Visible-filters.png)

Go back to the editor and style the filter section to make it look better. Thus, let’s give it a try; it works perfectly! The filters you choose will be listed below the active filters section, and the properties shown will satisfy those conditions.

![Create filters for real estate page - Meta Box + Bricks](https://i0.wp.com/images.elightup.com/meta-box/blog/real-estate-filter/Create-filters-for-real-estate-page-meta-box-bricks.gif)
