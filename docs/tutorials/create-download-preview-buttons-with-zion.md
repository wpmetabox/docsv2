---
title: Creating download and preview buttons - Meta Box + Zion
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

Are you running a WordPress website where you share valuable content like educational materials, documentation, product information, portfolios, or other downloadable files? If so, you’ve probably wondered how to make it easier for users to access your content in a way that suits them best. Giving users the option to preview or download files can make their experience much better. In this practice, we’ll create the Download and Preview buttons for e-books using Meta Box and Zion.
Check out the e-book page I made as an example, which includes two buttons:

 ![The e-book page as an example](https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/e-book%20page.png)

## Video version

<LiteYouTubeEmbed id='7NXZkUhxt4c' />

## Preparation

This archive page shows detailed information about the books along with two buttons. The first one is to save the PDF file to your device, and another allows you to view it online.

Each e-book will be a post of a custom post type. The e-book’s image, name, and description are respectively featured images, title, and description of the post. For the PDF file to preview or download, we'll use a custom field provided by Meta Box.

So, we need:
* [Meta Box Lite](https://metabox.io/lite/) to have a framework that allows creating custom post types and custom fields;
* **Zion Builder** and its Pro Version to build the page.

## 1. Creating a custom post type

Go to Meta Box > Post Types to create a new one for the e-book.

https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/post%20type.png 
(Go to Meta Box > Post Types to create a new one for the e-book)

After publishing, the created custom post type will be displayed in the admin dashboard.

(After publishing, the created custom post type will be displayed in the admin dashboard.)

2. Creating custom fields

Go to Meta Box > Custom Fields to create a new field group.


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/custom%20field.png 
(Go to Meta Box > Custom Fields to create a new field group.)

In this practice, I just create one custom field to store the PDF file for the e-book. As usual, you can use File Advanced to select or upload files. However, Zion doesn’t support getting data from it. So, I use File Input to upload a single file.



https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/file%20input.png 
(So, I use File Input to upload a single file.)

I’ll keep this field as the default, then there is no special setting for this field.

If you want to store any extra information about the e-book, just add the corresponding field type and set them as you go.

After that, move to the Settings tab. Set the Location as Post type, and select E-book to apply the field to this post type.


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/setting.png
(Set the location for the field group)

Then, go to the post editor, you will see the created custom field.


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/new%20ebook%20.png 
(Then, go to the post editor, you will see the created custom field.)

Just fill in the information, and click on the Select button to upload a file.


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/select.png 
(Just fill in the information, and click on the Select button to upload a file.)

These are some posts I had.


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/posts.png 
(These are some posts I had.)

3. Displaying e-books on the archive page

3.1. Creating a new page

Create a new archive page for the e-books first. 

Go to Pages > Add New to create a new one as usual.


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/new%20page.png 
(Go to Pages > Add New to create a new one as usual.)

Then, edit the template with Zion.


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/edit%20with%20zion.png 
(Then, edit the template with Zion.)

First, add the Section element to cover all the content of the page.


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/zion.png 
(First, add the Section element to cover all the content of the page.)


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/add%20section.png 
(First, add the Section element to cover all the content of the page.)

To set the layout for posts, add a Column element.


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/add%20column.png 
(To set the layout for posts, add a Column element.)

In the Advanced tab of the Column, enable the Repeater Provider to display all the posts from the wanted post type.


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/repeater%20options.png 
(In the Advanced tab of the Column, enable the Repeater Provider to display all the posts from the wanted post type.)

In the query type section, choose the Query builder, then set the Post type as E-books.


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/query%20builder.png 
(In the query type section, choose the Query builder) 

https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/set%20post%20type%20as%20ebook.png 
(then set the Post type as E-books.)

You should also enable Repeater Consumer to display all the posts in the chosen post type.


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/enable%20repeater.png 
(You should also enable Repeater Consumer to display all the posts in the chosen post type.)

Now, just add some elements to display the e-book information.

3.2. Displaying e-books information

First, add an Image element. 


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/add%20image.png 
(First, add an Image element. )

There will be an icon for using dynamic data that allows us to get data for this element from a source. Click on it and choose the Featured image.


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/featured%20image.gif 
(Click on it and choose the Featured image.)

Next, add a Text element. Use dynamic data and select the Post title.



https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/add%20text%20for%20post%20title.png 
(Next, add a Text element.)
https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/post%20title.gif
(Use dynamic data and select the Post title)

Continue to add a Text element for the description of the e-book. 


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/add%20text%20for%20post%20content.png 
(Continue to add a Text element for the description of the e-book.)

Use dynamic data and select the Post content.


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/use%20dynamic%20data%20for%20post%20content.png 
(Use dynamic data and select the Post content.)

### 3.3. Adding the buttons for download and preview

To have the Download and Preview buttons, we use the Button elements. 


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/add%20download%20button.png 
(To have the Download and Preview buttons, we use the Button elements. )

For the Download button, click on Button text and rename it.


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/button%20text%20download.png 
(For the Download button, click on Button text and rename it.)

To connect the button to the PDF file, move to Link, click on Use dynamic data and choose Meta Box Field. Then you can select the field that you used to store the PDF file.


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/link-download-file.png 
(To connect the button to the PDF file, move to Link, click on Use dynamic data and choose Meta Box Field.)

https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/field%20option%20download.png 
(Then you can select the field that you used to store the PDF file.)

https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/pdf%20upload%20download.png 
(Then you can select the field that you used to store the PDF file.)

Click on the Link Attribute feature. 


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/link%20attributes.png 
(Click on the Link Attribute feature.)

Set the Attribute Key as Download.


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/attribute%20key%20download.png 
(Set the Attribute Key as Download.)

For the preview button, do the same. Also add the Button element.


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/add%20button%20preview.png 
(Also add the Button element.)

https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/button%20text%20preview.png 
(Click Button text and rename)

Set the dynamic link for it as the field we used. However, after that, there is no need to add advanced settings to the button since previewing the attached file is the default function of the button. It means that when visitors click on it, the uploaded file will be shown automatically.


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/link%20preview.png 
(Set the dynamic link for it as the field we used.)

https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/field%20option%20preview.png 
(Edit field options)

https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/pdf%20upload%20preview.png 
(choose PDF Upload)
4. Styling the page

Back to the page editor with Zion. Just change some parameters and settings in the Styling and Advanced tab of each block.


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/styling-and-advanced.png 
(Back to the page editor with Zion. Just change some parameters and settings in the Styling and Advanced tab of each block.)

Finally, we will have a page with a better look.


https://i0.wp.com/images.elightup.com/meta-box/blog/download-preview-buttons-zion/finally.png 
(Finally, we will have a page with a better look.)
