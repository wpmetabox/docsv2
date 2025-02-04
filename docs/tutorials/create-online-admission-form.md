---
title: Creating online admission form for schools
---
instead of submitting hard copies for student information, schools may have online submission forms then students can submit on the website. We’re going to find out how to create that online admission forms in this practice.

Here is the example.

![Example of the online admission form](https://i.imgur.com/lP5a6JZ.png)

![Example of the online admission form](https://i.imgur.com/naAHmt4.png)

![Example of the online admission form](https://i.imgur.com/cHAFehA.png)

## Preparation

Since all the additional information will be saved in different custom fields, we need **[Meta Box](https://metabox.io/)**. It’s free and available on wordpress.org, so you can download it directly.

To have advanced features, we need some of its extensions:

* [MB Custom Post Types and Custom Taxonomies](https://metabox.io/plugins/custom-post-type/): to create custom post type for the student information. Each submission from student will be save in a post;
* [Meta Box Builder](https://metabox.io/plugins/meta-box-builder/): to easily create custom fields to saved extra information about the student information;
* [MB Frontend Submission](https://metabox.io/plugins/mb-frontend-submission/): to create editorial forms so users can submit blog posts on the frontend;
* [MB Views](https://metabox.io/plugins/mb-views/): to create a template to display the admission form;
* [Meta Box Group](https://metabox.io/plugins/meta-box-group/): (optional) to group the fields;
* [Meta Box Columns](https://metabox.io/plugins/meta-box-columns/): (optional) to divide and display the fields into columns with maximum 12 grids;
* [MB Geolocation](https://metabox.io/plugins/meta-box-geolocation/): (optional) to automatically populates location data into the fields with the power of Google Maps/Open Street Maps Geolocation API;
* [Meta Box Conditional Logic](https://metabox.io/plugins/meta-box-conditional-logic/): (optional) to create rules to control the display of the fields.

They’re all in the **Meta Box AIO**. If you haven’t had it, you can download and install each extension individually.

## 1. Creating a new custom post type

Go to **Meta Box > Post Types > Add New** to create a new post type. In my case, the new post type is **Student Info**.

![Create a new custom post type](https://i.imgur.com/7YThrpP.png)

After publishing, you will see a new menu in the **Admin Dashboard**.

![New post type appear in the Admin Dashboard](https://i.imgur.com/hFkGDMI.png)

## 2. Creating custom fields

### Field types

Regularly, an admission form may have a lot of fields for students to fill in, like personal information, address, contacts, family information, choice of major, medicine information, etc. It is up to the management strategies and demands of each school or university.

Here I just add some basic fields like in the above image. Most of those fields are the **Text** or **Number** fields. In some special others, they might be a little different, for example:

<table>
<tbody>
<tr>
<td> Field </td>
<td> Type of field </td>
<td> Content </td>
</tr>
<tr>
<td>1. Personal Information</td>
<td>heading</td>
<td>To divide the content into separate parts to make it clearer</td>
</tr>
<tr>
<td>Nationality</td>
<td>select advanced</td>
<td>Allow students to choose one or more nationalities from a pre-made list</td>
</tr>
<tr>
<td>Photo</td>
<td>image upload</td>
<td>Allow uploading pictures from computer folders, not Media Library of the website</td>
</tr>
<tr>
<td>Maps</td>
<td>Open Street Maps</td>
<td>Point out the exact address of students on the map</td>
</tr>
<tr>
<td>Program Type</td>
<td>radio</td>
<td>Choose one of the studying programs on a list</td>
</tr>
<tr>
<td>Undergraduate Program</td>
<td>checkbox list</td>
<td>Choose one major or more</td>
</tr>
</tbody>
</table>

After adding all of them, you can add a new post in the **Student Info** post type, and you will see they look like this:

![Add a new post in the Student infor post type](https://i.imgur.com/RoqZI5A.png)

If you keep this layout for the fields, each field will be a line on the frontend as the same as you see here. I think it is not appropriate, because people will find it difficult to follow and manipulate.

Thus, I will adjust a little bit by grouping the fields and setting them into columns.

### Creating groups and set columns

Just add a field in the type of group, and add other fields to be its sub-fields.

![Add other fields to be sub-fields](https://i.imgur.com/qvBHLcO.png)

To display fields in columns, just set the number in their settings as above.

Each row to display the fields will be divided into 12 grids. If you want the fields displayed in columns, just change the number in the box to any number up to 12.

![Change the number in the box](https://i.imgur.com/uHZRY2u.png)

Here is the settings for columns of each field:

<table>
<tbody>
<tr>
<td> Field </td>
<td> Field type </td>
<td> Columns </td>
</tr>
<tr>
<td>1. Personal Information</td>
<td>Heading</td>
<td>12</td>
</tr>
<tr>
<td>(no label)</td>
<td>Group</td>
<td>9</td>
</tr>
<tr>
<td> Full Name</td>
<td>Text</td>
<td>4</td>
</tr>
<tr>
<td> Middle Initial</td>
<td>Text</td>
<td>4</td>
</tr>
<tr>
<td> Last Name</td>
<td>Text</td>
<td>4</td>
</tr>
<tr>
<td> Date of Birth</td>
<td>Date</td>
<td>6</td>
</tr>
<tr>
<td> Gender</td>
<td>Radio</td>
<td>6</td>
</tr>
<tr>
<td> Passport ID</td>
<td>Text</td>
<td>6</td>
</tr>
<tr>
<td> Nationality</td>
<td>Select Advanced</td>
<td>6</td>
</tr>
<tr>
<td>Photo</td>
<td>Image Upload</td>
<td>3</td>
</tr>
<tr>
<td>2. Student’s Contact Information</td>
<td>Heading</td>
<td>12</td>
</tr>
<tr>
<td>Email</td>
<td>Email</td>
<td>6</td>
</tr>
<tr>
<td>Phone Number</td>
<td>Text</td>
<td>6</td>
</tr>
<tr>
<td>Address</td>
<td>Text</td>
<td>12</td>
</tr>
<tr>
<td>(no label)</td>
<td>Group</td>
<td>6</td>
</tr>
<tr>
<td> Building</td>
<td>Text</td>
<td>12</td>
</tr>
<tr>
<td> Road</td>
<td>Text</td>
<td>12</td>
</tr>
<tr>
<td> State</td>
<td>Text</td>
<td>12</td>
</tr>
<tr>
<td> Country</td>
<td>Text</td>
<td>12</td>
</tr>
<tr>
<td> Post Code</td>
<td>Number</td>
<td>12</td>
</tr>
<tr>
<td>Maps</td>
<td>Open Street Maps</td>
<td>6</td>
</tr>
<tr>
<td>3. Contact in Emergency Situations</td>
<td>Heading</td>
<td>12</td>
</tr>
<tr>
<td>Full Name</td>
<td>Group</td>
<td>12</td>
</tr>
<tr>
<td>First Name</td>
<td>Text</td>
<td>4</td>
</tr>
<tr>
<td>Middle Initial</td>
<td>Text</td>
<td>4</td>
</tr>
<tr>
<td>Last Name</td>
<td>Text</td>
<td>4</td>
</tr>
<tr>
<td>Address</td>
<td>Text</td>
<td>12</td>
</tr>
<tr>
<td>Email</td>
<td>Email</td>
<td>4</td>
</tr>
<tr>
<td>Phone Number</td>
<td>Text</td>
<td>4</td>
</tr>
<tr>
<td>Country</td>
<td>Text</td>
<td>4</td>
</tr>
<tr>
<td>4. Program/Course Information</td>
<td>Heading</td>
<td>12</td>
</tr>
<tr>
<td>Program Type</td>
<td>Radio</td>
<td>12</td>
</tr>
<tr>
<td>Undergraduate Programs</td>
<td>Checkbox List</td>
<td>12</td>
</tr>
<tr>
<td>Postgraduate Programs</td>
<td>Radio</td>
<td>12</td>
</tr>
<tr>
<td>Master’s Programs</td>
<td>Checkbox List</td>
<td>12</td>
</tr>
<tr>
<td>Graduate Certificates and Diplomas</td>
<td>Checkbox List</td>
<td>12</td>
</tr>
<tr>
<td>PhD Programs</td>
<td>Checkbox List</td>
<td>12</td>
</tr>
</tbody>
</table>


Here are all the fields that I’ve created in groups and sections:

![The created fields](https://i.imgur.com/5pxt1si.png)

![The created fields](https://i.imgur.com/k53GyYj.png)

![The created fields](https://i.imgur.com/ZcJSrtm.png)

![The created fields](https://i.imgur.com/GeQXhlr.png)

### Special settings of custom fields

Besides the fields that have no special settings, there are some fields that you need to focus and set up for them. Let’s see!

**Settings of the Maps field**

To set up the **Maps** field, add the **Open Street Maps** field. Then, you need to fill in the ID of the **Address** field in the **Address** field section. This is compulsory to get the exact location from the Address field and markup on the maps.

![Setting the maps field](https://i.imgur.com/9Ar6cER.png)

To make it work, go to the **Settings tab > Custom Settings > Add New** to enter **geo** as the key and true as the value.

![Enter geo in the settings](https://i.imgur.com/BqKBKbN.png)

**Add options for the fields in the type of selection**

There are some fields in the type of selection where student can choose an option from a provided list, such as: Program Type, Undergraduate Programs, Postgraduate Programs and PhD Programs.

In the **Program Type** field, I fill in several options in the **Choices** box.

![Fill in several options in the Choices box](https://i.imgur.com/LwWapTB.png)

For the **Undergraduate Programs**:

![For the undergraduate programs](https://i.imgur.com/mLqiyvQ.png)

For the **PhD Programs**, do likewise.

![For the PhD programs](https://i.imgur.com/RYBoaDo.png)

Since the **Postgraduate Programs** will have two options, set it as the **Radio** field with two options filled in the **Choices** box.

![Set the Postgraduate programs as Radio](https://i.imgur.com/PYZNfT9.png)

![Setting the fields](https://i.imgur.com/gfk5CEk.png)

**Set conditional logic for the fields in the type of section**

Since there will be many majors and courses in each type of program, I will use **MB Conditional Logic** to set when the fields show up to avoid mess up on the page..

Here, I took the **Program Type** and **Undergraduate Program** fields as an example:

The **Program Type** field has three options with values and labels.To show up only the course of **Undergraduate Programs** chosen by the students, go to the **Undergraduate Programs** field > **Advanced** tab and set conditional logic as below:

![The program type field](https://i.imgur.com/uMmL2B5.png)

**Note that**: `program_type` is the ID of the **Program Type** field while `undergraduate_program` is the corresponding value of the Undergraduate Programs option that we’ve filled in the Choices box of the Program Type.

It means when the students chose the Program Type as **Undergraduate Programs**, all the courses of it will be displayed.

Do likewise with the other fields. You just need to change the values of the options in the **Conditional logic** section.

![Change the values of the options](https://i.imgur.com/894ew2Q.png)

Then the fields will be shown or hide like this:

![The fields will be shown or like](https://i.imgur.com/ZLLWg6v.gif)

After creating all the fields, move to the **Settings** tab. Remember to choose the **Location** as **Post Type** and select the **Student Info** post type to apply these fields to it.

![Set location for the created fields](https://i.imgur.com/dKVysfN.png)

When you publish the field group, notice the **field group ID** since we’ll use it later.

![Notice the field group ID](https://i.imgur.com/LTXAvkp.png)

Now, when creating a new post in the **Student Info** post type, you’ll see all the custom fields:

![Create a new post in the post type](https://i.imgur.com/lO24W6A.gif)

## 3. Displaying the form on the frontend

### Creating a new page

Go to **Pages > Add New** to create a new blank page. Here, I created a page named **Admission Form**.

![Create a new page](https://i.imgur.com/5iH1C4O.png)

When creating the new page, set the featured image for it. This image will be use as the logo of the school.

![Set the featured image for the created new page](https://i.imgur.com/DU57Zdh.png)

Remember to copy the URL of the featured image since we’ll use it to display on the frontend.

### Creating a template for the page

Go to **Meta Box > Views > Add New** to create a new template.

![Create a template for the page]( https://i.imgur.com/7YThrpP.png)

To display the admission form, add this code to the **Template** tab:

```php
<div class="container">
	<div class="form-header">
<!-// Put logo of the university to the header – >
    <img src="http://metabox4.wpengine.com/wp-content/uploads/2022/11/Logo-1.png" style="width: 20%">
    <div class="form-header__right" style="text-align: right">
<! – // Set H1 for page on the header – >
        <h1>University Admission Form</h1>
        <span>Student ID: ________ <i>(For office use only)</i></span>
    </div>
</div>
<!-// Display the field group using shortcode – >
[mb_frontend_form id='university-admission-form']
</div>
```

![Add some code](https://i.imgur.com/vjtEGye.png)

**Explanation**:

*http://metabox4.wpengine.com/wp-content/uploads/2022/11/Logo-1.png*

This is the URL of the featured image of the page which we use for the logo on the page as well.

```
[mb_frontend_form id='university-admission-form']
```

This is the shortcode of the created field group. This shortcode is automatically generated for you thanks to the help of **MB Frontend Submission**.

To get the shortcode of the field group, make sure that you enable **MB Frontend Submission**. Then, go to **Meta Box > Custom Fields** and you will see the **Shortcode** column like this:

![Get the shortcode of the field group](https://i.imgur.com/MgZCv22.png)

This is the full shortcode:

```
[mb_frontend_form id='university-admission-form' post_fields='title,content']
```

But I’ve already deleted the attribute `post_fields='title,content'` since I don’t want to show the Title and Content fields which are the default fields of WordPress.

Finally, scroll down to the **Settings** section, choose the **Type** as **Singular**. Then, set **Location** as **Page** and select the **Admission Form** page.

![Choose type as singular](https://i.imgur.com/phw7hCb.png)

This is how the form looks on the page:

![The form in the frontend](https://i.imgur.com/lP5a6JZ.png)

![The form in the frontend](https://i.imgur.com/naAHmt4.png)

![The form in the frontend](https://i.imgur.com/cHAFehA.png)

To have advanced styling, go to the **CSS** tab of the template and add some CSS code:

![Add some css code for styling](https://i.imgur.com/yaRmTfz.png)

## 4. Setting the page for reviewing

Instead of saying thank you or notifying students for successful submissions, I want to have a reviewing page for students to check student IDs or print the admission form. To do it, we need to create a reviewing page and redirect them to that page.

### Creating a new page

Go to **Pages > Add New** to create a new page called **Review Admission Form**.

![Create a new page](https://i.imgur.com/qRKz6ck.png)

We’ll need a redirect link to redirect students from the admission form page to the reviewing page. To make the link, we add some codes to the `functions.php` file of the theme:

```php
add_filter( 'rwmb_frontend_redirect', function( $redirect, $config ) {
    if ( 'university-admission-form' !== $config['id'] ) {
        return $redirect;
    }
    $redirect = 'https://domain.com/review-admission-form/?student_id=' . $config['post_id'];
    return $redirect;
}, 10, 2 );
```

Explanation:

* `'rwmb_frontend_redirect'`: this hook allows you to change the URL of the page after students submit the form to another page;
* `university-admission-form`: the ID of the field group for the admission form we are using;
* `https://domain.com/review-admission-form/?student_id=' . $config['post_id']`: the structure of the redirect link we will use. You should change the domain to your one here.

At that time, my redirect link will be in this form:

*https://domain.com/review-admission-form/?student_id=12345/*

For example, **12345** is the ID of the post that the student has just entered information into its custom fields.

Next, still in the `functions.php` file, add these codes:

```
function estar_get_method_function( $param ) {
    return isset( $_GET[$param] ) ? $_GET[$param] : '';
}
```
Explanation:

* `estar_get_method_function`: this is the name of the function that I set and `estar` is the theme I’m using. You can set it as you want;

This code will get and return the value of the `student_id` variable from the redirect link. We will need this value right in the next move.

![Add the code to the box](https://i.imgur.com/UjaLREU.png)

### Creating a new template for reviewing page

Go to **Meta Box > Views** to create a new template to redirect to the **Review Admission Form** page.

In the **Template** tab of the view, add this code:

```php
{% set pupil_id = mb.estar_get_method_function( 'student_id' ) %}
{% if pupil_id %}
    <div class="form-header">
        <img src="http://metabox4.wpengine.com/wp-content/uploads/2022/11/Logo-1.png" style="width: 20%">
        <div class="form-header__right" style="text-align: right">
            <h1>University Admission Form</h1>
            <span>Student ID: {{ pupil_id }}</span>
        </div>
    </div>
    [mb_frontend_form id='university-admission-form' post_id="{{pupil_id}}"]
    <div class="form-footer">
        <button onclick="window.print()" class="rwmb-button">Print</button>
    </div>
{% endif %}
```
![Add the code to the template](https://i.imgur.com/EanI08M.png)

**In this code**:

Because each admission form will be saved in a post of the **Student Info** post type. Thus, I have added the `post_id` attribute to the shortcode above, so that only the data from the custom fields of the corresponding post can show up.

Create a `pupil_id` variable to recognize its value automatically thanks to the returned value of the `estar_get_method_function( 'student_id' )` function.

Additionally, I want to have a Print button instead of Submit, so that students can print their admission forms out. Thus, I added that button to the footer of the page. To hide the Submit button, still in the created template, go to the CSS tab and add this code:

```php
.rwmb-form-submit {
    display: none;
}

```
![Add the code to the CSS tab](https://i.imgur.com/JluBCpR.png)

Try a test, after submitting information, the link is changed and the **Student ID** is generated as well:

![The final result](https://i.imgur.com/wHDPc7q.png)


![The final result](https://i.imgur.com/xpkC9s5.png)


![The final result](https://i.imgur.com/Ha9G97T.png)

