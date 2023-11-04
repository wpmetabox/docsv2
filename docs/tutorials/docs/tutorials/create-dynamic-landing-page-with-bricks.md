---
title: Creating dynamic landing page in WordPress - Meta Box + Bricks
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

If you're struggling and spending too much time creating landing pages for multiple marketing campaigns, even when they have the same content structure, check out this article right away!

We have a comprehensive solution for these cases, named Dynamic Landing Page. All you need to do is create a sample page with content stored in custom fields, and have a template for it with a perfect interface. Then, when having a new campaign, just duplicate the page and change the content in custom fields. You’ll have a new landing page with new messages without touching the template anymore.

I have a tutorial on how to create a dynamic landing page using Meta Box and Elementor that you may have read in a couple of weeks ago. Doing it with Bricks is in a similar way.

I will take a real case from our company as an example. We have another product, Slim SEO. It has Slim SEO Schema and Slim SEO Link Manager, two plugins for two different purposes. Each one has their own landing page. You can see that these pages have the same structure but different content.

![](https://i.imgur.com/Cx6Lp2Y.png)

To have these two versions, we will use a dynamic landing page to minimize the effort.

Video version

https://youtu.be/NZ_rgeK97Fc

Preparation

The mindset will be like this:

Create custom fields to save all the content of the page. Each element will have its own field.
Create a template with Bricks for a sample page. In there: get and display data from fields
Clone the sample page  to a new one for using in a specific campaign.
Change the content in the custom fields, then have a new landing page.

We need the following tools for this practice:

Meta Box core plugin: to have the framework for creating custom fields. It’s free, and available on wordpress.org;
Meta Box Builder: to have a UI on the backend to create the custom fields easily;
MB Testimonials: a ready-to-use solution from Meta Box that helps to create a testimonial section with pre-built layouts;
Meta Box Group and Meta Box Tabs (optional): to organize custom fields into groups or tabs with a clearer structure;
Bricks: to build the page.

1. Creating a new page

Go to Pages > Add New to create a new page as usual.


https://i.imgur.com/U1mWRwS.png

I leave it blank since all the content will be put in the custom fields that I’ll create in the next step.


https://i.imgur.com/EXVm3K3.png

2. Creating custom fields

We will create custom fields for every element on the page and organize them in groups and tabs based on sections on the page.


https://i.imgur.com/vQSKmeK.png

For some kinds of content, you may use cloneable fields or cloneable groups.


https://i.imgur.com/5yBSvii.png

Simply create the fields following your content structure. We have more than 40 field types for almost all kinds of data and layout, so just exploit them best.

Now, go to Meta Box > Custom Fields and create those fields.


https://i.imgur.com/tYbRtw7.png

To create tabs, just add a field with the type as Tab.


https://i.imgur.com/WpilwCU.png

Then, add some fields.


https://i.imgur.com/o8OYYC6.png

All the fields below the Hero Section tab field will be displayed in the tab.

For the menu on the landing page, there will be multiple items on the menu. Each one of them includes the label and its link. So I will create a cloneable group.


https://i.imgur.com/doN5AaP.png

The sub-fields will be used to input the label and URL of each item.


https://i.imgur.com/mgIAaw5.png

The button information will be in a group as well.


https://i.imgur.com/Gm07UT2.png

Next, I add a new Tab field.


https://i.imgur.com/pIM6dKE.png

Whenever you do that, it’s understood that the fields between the first tab field and this new tab field belong to the first one.


https://i.imgur.com/YqKMHFk.png

Continuing to create other custom fields. Just keep in mind the expected structure and create fields to follow it.


https://i.imgur.com/dB8Wt6j.png

For the content in the testimonials section, I’ll use the MB Testimonials extension to build it, so I’ll create only a custom field for title, and another one for description of this section. All other content of this section will be created later.


https://i.imgur.com/bjgKSAl.png

After creating all the fields, move to the Settings tab, set the Location as Post Type, and choose Page. Since we created the fields for the landing page, go to the Advanced location rules section below and choose the name of the page we created in the previous step to apply all the fields to this page.


https://i.imgur.com/6sUGBnl.png

Go to the page editor, you will see all the fields.


https://i.imgur.com/xUoBpks.gif

Just input the content that you want to be on the landing page to the corresponding fields. I did it with some content for example.


https://i.imgur.com/KJWNdax.gif

3. Creating testimonials

There will be a menu here when activating the MB Testimonials solution.


https://i.imgur.com/GZKvIWI.png

Go there and add a new testimonial for your page.

This section is to add content of each feedback from your customers.


https://i.imgur.com/qcwKIDK.png

If you want to add more feedback from another person, just click the Add more button.


https://i.imgur.com/69WuymZ.png

This MB Testimonial solution also provides some pre-built templates that you can opt for.


https://i.imgur.com/2nkzEC1.png

Also can set some parameters for the styling.


https://i.imgur.com/ttD1vbn.png

After publishing, there will be a shortcode automatically generated, just copy it since we will use it on the page.


https://i.imgur.com/Bc0wwbR.png

We had a useful tutorial on how to use the MB Testimonials solution to create and customize the testimonial section. You can watch it for more details.

4. Creating template for the landing page

Go to the page editor and edit it with Bricks.


https://i.imgur.com/2iIKfYg.png

My landing page will have its own header and footer, so I’ll hide these parts.


https://i.imgur.com/oEZSsNJ.png

Go to the Settings section > Page Settings > General , disable the header and footer.


https://i.imgur.com/8S7v9YB.png

The landing page has several sections such as header, hero, feature, pricing and so on.  Thus, we need to select the Section element to cover the information of each section.


https://i.imgur.com/YPRA3xc.png

There is an available container. We’ll add some elements inside this container to display the section information.

4.1 Displaying content from the stand-alone fields

We can add a reasonable element for the content that is from a stand-alone field (which is not in any group). For example, for the logo of the landing page, choose the Image element.


https://i.imgur.com/6DnFe4b.png

Since it is saved in a custom field created with Meta Box, use the Select dynamic data button to get the data form the corresponding field.


https://i.imgur.com/GMuso4d.png


https://i.imgur.com/emrJxLz.png

4.2 Displaying content from the groups

For the content from the groups, you should use a Div element.


https://i.imgur.com/pGpXUkj.png

Take the menu as an example. I have some items for the menu, and they are in a clonable group, so I need to use the query loop for the Div. In the Query section, turn on the button below and choose the type of data source as the group field where I put the menu items.


https://i.imgur.com/wuUMNkj.png

To display the name of those items, add a Basic Text element. Use the Select dynamic data button and choose the right field. The field we should choose is the sub-field of the group that we use for the menu.


https://i.imgur.com/qtdJ7rr.png

Then, all the menu items will display immediately.


https://i.imgur.com/O6dRV7o.png

Each item should be embedded with a specific link. Those links are saved in custom fields as well. So, in the Link to section > add Dynamic Data > choose the field where we save the links.


https://i.imgur.com/h9dZykx.png

So, please notice a rule about getting data from the custom fields.

Firstly, for the content from the stand-alone field, just add a corresponding element, then use the Select dynamic data button to get data from the wanted field.

Secondly, for the content from the groups, you should use a Div element and use the query loop for it to allow getting data from its subfields. Then add a reasonable element inside this Div, and add dynamic data from the wanted subfield.

Please keep in mind that we should follow this rule through all of this step to get full content from custom fields.


https://i.imgur.com/vqh2IgM.png

4.3 Styling something using dynamic data

There is a special thing about the button in the hero section. It has the color background stipulated in a custom field. So, you can add an attribute to regulate this button style.


https://i.imgur.com/l5pYV1K.png

You also can use dynamic values from custom field for this attribute as well.


https://i.imgur.com/Zm2PMik.png

4.4 Displaying the testimonial section

We also have a special section for testimonials. It has the section’s title and description from custom fields, so follow the rule.


https://i.imgur.com/P3e5tv0.png

We created a testimonial with the MB Testimonials solution from Meta Box and copied its shortcode in the previous step. To get data from MB Testimonials, just add a Shortcode element.


https://i.imgur.com/gVuKQ0o.png

Then, paste the shortcode to the box as follows:


https://i.imgur.com/bv7hnbg.png

And this is our landing page on the frontend with all information displayed, including testimonials.


https://i.imgur.com/iqtEfCf.gif

The next work is styling this page.

5. Styling the page

Back to the page editor with Bricks. Then customize each element to style it in your own way.

You may want to add some CSS for advanced styling, it’s up to you.


https://i.imgur.com/YXru4pX.png

This is the new look of my landing page.


https://i.imgur.com/9domRqm.gif

I finished creating a landing page with dynamic content from custom fields. But it is just a sample. It’s not for any specific marketing campaign. To create one for a campaign, let’s go ahead to the next step.

6. Cloning the landing page for specific campaigns

When you have a new marketing campaign, just follow these steps:

Clone the dynamic landing page that we have just created to a new one;
Change the page’s content in custom fields, and you’ll get a new landing page.

To clone the page but keep its layout built with Bricks, we should use a third-party plugin named Duplicate Page. It’s available on repo. Just look for it and install.


https://i.imgur.com/s9Ic1Ob.png

There will be a new option to duplicate the landing page under the page.


https://i.imgur.com/7RXHyF8.png

Just duplicate it to any number of pages you want. I just created two to easily show you the concept.


https://i.imgur.com/KgOJ2z8.png

Next, you should go to Custom Fields in Meta Box, and add location for the field group that we created for the landing page as the new pages.


https://i.imgur.com/MlIdCY3.png

Go to those pages editor, you will see that they inherit all the custom fields including data saved in them.


https://i.imgur.com/vfP3Ixu.png

Just change it to the new one matched with your new campaign.
 
https://i.imgur.com/HSxuwSs.png

Go to the pages on frontend, you will see that you now have different versions of pages. Just different in content but the same layout.


https://i.imgur.com/wqNhzqc.png

Last words

I hope that this way will help you create landing pages for multiple marketing campaigns faster, more conveniently, and more efficiently. If you want to try this with other page builders, follow this tut.

Additionally, you also can apply this way to customize your homepage easily. We also have a tutorial on configuring the homepage regularly without touching code every time. Feel free to check it out!
