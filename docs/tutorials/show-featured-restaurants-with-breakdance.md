Showing the featured restaurants - Meta Box + Breakdance

Sometimes you may want to feature some products on your homepage. It's a popular technique to improve conversion by attracting customers to the most irresistible products. So, let’s see how we showcase featured products on a page with Meta Box and Breakdance.

I use the restaurants as an example of the products.


https://i.imgur.com/FOO2VOm.png

Video version

https://youtu.be/zy514AFemEY

Preparation

We will create a section to show the featured products which are chosen manually in the backend. The products are stored in a post type, and each one is a post. The product's information, in this case as the restaurants, may include extra information that is saved in the custom fields.

These are some tools we need for this practice:

Meta Box core plugin: to have a framework for creating a custom post type and custom fields;
MB Custom Post Type: to create a custom post type for the products;
MB Box Builder: to create custom fields to save the products information, as well as the custom field to set the product to be featured or not;
MB Admin Columns (optional): to display the custom fields as an admin column to easily see the information. I use it to show you which products will be featured, so you can easily compare it with the results.
Breakdance: to build the homepage and the section to showcase the products.

1. Creating a new custom post type

Go to Meta Box > Post Types to create a new post type for the products. I meant restaurants in my case.


https://i.imgur.com/e8ryCDS.png

2. Creating custom fields

Go to Meta Box > Custom Fields to create fields to save extra information for the restaurants as usual.


https://i.imgur.com/oUL3R2H.png

Beside some typical fields for demonstration, I have a special field in the Switch type. This special field is to select which restaurant is featured on the homepage.


https://i.imgur.com/kRt66vw.png

This field will display as a button and has two status. The Off status will indicate that you do not want to recommend the restaurant. Otherwise, the On status will let us know that you want to showcase it.


https://i.imgur.com/gmFYSWT.png

I’ll show the values of this field in the admin column to see whether the restaurant is featured or not by turning on the button like in the image below. This setting is available only when you have the MB Admin Columns extension from Meta Box.


https://i.imgur.com/2tvXUEv.png

You can see how it displays on the admin dashboard.


https://i.imgur.com/8fMSfmW.png

After having all the fields, go to the Settings tab > choose Location as Post type > select Restaurant to apply the fields to it.


https://i.imgur.com/AoaYOjE.png

In the post editor, you’ll see the created custom fields. The Switch field is also displayed. You can turn on or turn off the button to choose to feature your product or not.


https://i.imgur.com/VWg9z3w.gif

3. Creating the global block

With Breakdance, you should create a global block to get and display information from a post first, including from the custom fields in that post, then use this global block to display them anywhere on your site.

Go to Breakdance and create a new global block.


https://i.imgur.com/qR1uaPj.png

Remember to set a post for the live preview.


https://i.imgur.com/EzcCqG5.png

My global block is to display the information of each post in a box like this.


https://i.imgur.com/av6oEk5.png

3.1 Setting the condition to get featured posts

First, select the Div element to cover the block.


https://i.imgur.com/TWfHTwa.png

Go to the settings of the Div element, then the Conditions section, add a condition to choose which posts will be displayed.


https://i.imgur.com/6AEPoMT.gif

Choose the Dynamic Data option from the list to set the condition based on the data saved in custom fields.


https://i.imgur.com/CwyNX24.png

This condition will be set based on the value of the created Switch field. So, in the Metabox section, choose the name of the field.


https://i.imgur.com/VqAq30K.png

The Switch field has two statuses: On and Off, corresponding to the value 1 or 0. So, enter 1 into the box because it’s defaulted to the On status. It means that only posts where the Switch field is On status will be get and display information.


https://i.imgur.com/HTiTY4N.png

That’s all for the condition.

3.2 Displaying the products information

Now, add some elements to display information about the restaurant.

Inside the Div, select the Image element to show the restaurant’s image. And click on the icon below to insert dynamic data.


https://i.imgur.com/NyKZwf3.png

Then, choose the Featured Image option from the Post section.


https://i.imgur.com/O3h6Xqc.png

You see that the restaurant’s image is displayed immediately.


https://i.imgur.com/B3Bpna3.png

For the voucher information, choose the Text element. As the voucher is saved in the custom field created by Meta Box, we’ll insert the dynamic data into the Text element. Then, you will see the field name in the Metabox section. Choose it.


https://i.imgur.com/jRIvwkb.gif

To get the restaurant’s name automatically, add the Heading element, and connect it with the title of the post.


https://i.imgur.com/2VMdsDf.png

As a result, the name of the restaurant appears.


https://i.imgur.com/D0DNs0c.png

For the address information, do the same with the voucher. Add a Text element, then insert data from the Address field.


https://i.imgur.com/IenArYL.png

The last information we want to display is the restaurant’s logo. Choose the Image element. The logo is saved in the custom field as well, so we’ll also insert the dynamic data into this element. Then, the logo of the restaurant appears.


https://i.imgur.com/Iv8Z4CS.gif

We have just finished displaying information about a restaurant on the block.

4. Creating the featured section

Let’s edit the homepage with Breakdance to add a new section to the page.

Now, add a Heading element and name the section.


https://i.imgur.com/yv533i7.png

To display the wanted posts from the created global block, we need the Post Loop Builder element.


https://i.imgur.com/b0xzO0f.png

In the Global Block section of the Post Loop Builder settings, choose the name of the global block we’ve just created.


https://i.imgur.com/azTulQ4.png

There is no product or any information display now. So, move to the Query section of the Post Loop Builder element > choose Custom, and edit the query like this.


https://i.imgur.com/7DHiei7.png

In there: In the Source data, it’ll be automatically set as the Post Types, then choose the name of the post type you want to get the post from. I chose Restaurants. You also can change some other settings as you wish, but I keep them as default.

Now, there’re some posts displayed with the layout and information exactly as we set in the created global block.


https://i.imgur.com/NWE1fQC.png

When I change the layout of this section a little bit, I see it's not like what I’m thinking. You can see something weird. There may be some blank blocks in the section.


https://i.imgur.com/q4XGOUm.png

They do not disappear on the frontend. It is simply the place for the posts that didn’t meet our conditions. Although the posts’ information won’t display as the condition regulates, the posts still have their own space.

To remove them, add a Code Block on your homepage, and input some JavaScript to disappear the voids.


https://i.imgur.com/SGJUJbT.png

jQuery('.ee-post').filter(function() {
return jQuery(this).text().trim() == ""
}).remove();

This is how the section looks after removing the voids.

https://i.imgur.com/6eFyxem.png

5. Styling the section

Go back to edit the global block to style the display of the post information. Change the settings of each element to get the wanted look.

Then back to the homepage, you will see all the featured restaurants are displayed as good as you want.


https://i.imgur.com/FOO2VOm.png

Last Words

Let’s try out this simple tutorial and effortlessly showcase your featured products using Meta Box and Breakdance. In the event that you’re using another page builder or just do it without any page builder, just go to our documentation and look for the one that fits your case.

If you like an automated approach for selecting and displaying products based on specific conditions instead of doing it manually, the tut ‘Showing posts with specific criteria - Meta Box + Breakdance’ will give you a hand.

We'd love to see what you create, so don't forget to share your results with us!
