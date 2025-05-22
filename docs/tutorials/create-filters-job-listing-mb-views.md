---
title: Creating a coming soon page with countdown - Using MB Views
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

This tutorial will walk you through how to **create a job listing page with advanced filtering** options using the **MB Views** extension from Meta Box - ideal for helping users quickly find the most relevant opportunities.

![Create a job listing page with advanced filtering options using the MB Views.](https://i.imgur.com/2O6nn41.gif)

## Video version

<LiteYouTubeEmbed id='v4Qvsqap7_k'/>

## Preparation

In this tutorial, I’ll create a custom post type and custom fields for job listings, set up a frontend submission form, and use **MB Views** to build a dynamic layout with real-time filtering.

For a smoother setup, I highly recommend using [Meta Box AIO](https://metabox.io/aio/). This premium version bundles **the framework** with all **the necessary extensions**, making it easier to access the advanced features we’ll be using.

These are the extensions we’ll use:

* [MB Custom Post Type](https://metabox.io/plugins/custom-post-type/): to create a custom post type for job listings;
* [MB Builder](https://metabox.io/plugins/meta-box-builder/): to visually create custom fields for job information and storing details;
* [MB Conditional Logic](https://metabox.io/plugins/meta-box-conditional-logic/): to show or hide specific fields based on selected filters;
* [MB Views](https://metabox.io/plugins/mb-views/): to build a template for displaying job listings with real-time filtering;
* [MB Frontend Submission](https://metabox.io/plugins/mb-frontend-submission/): to display custom fields on the frontend as a form;
* [MB Admin Columns](https://metabox.io/plugins/mb-admin-columns/): to display job-related details neatly in the admin panel.

Now, let’s go step by step.

## 1. Creating a custom post type

As we said before, we’ll need to create a custom post type to store job listings.

Go to **Meta Box**, **Post Types** to create a new one.

![Create a custom post type to store job listings.](https://imgur.com/SxhGixW.png)

After publishing, you’ll see the created custom post type.

![The created custom post type](https://i.imgur.com/mo5Cmy1.png)

## 2. Creating custom fields for the job listings

To store job details, we need to create a group of custom fields. This group serves two purposes: **allowing recruiters to submit job posts from the frontend**, and **enabling job seekers to search and filter jobs based on these fields**. It includes important information such as job type, location, required skills, experience level, etc. Feel free to add more fields as needed.

![The example of a field group for job details](https://i.imgur.com/0p9Edc0.png)

Now, go to **Meta Box** > **Custom Fields**, and create a new field group.

![Create a new field group.](https://i.imgur.com/4KfFvsu.png)

Just add fields one by one corresponding to the kind of content.

Start by adding two **Text** fields: one for the job location and one for the company name, so users can enter where the job is based and the hiring company’s name.

![Add two Text fields for the job location and for the company name.](https://i.imgur.com/YhrI3rK.png)

Next, create a **Select** field for users to choose the job type. In this **Choices** section, input the options.

![Create a Select field for users to choose the job type.](https://i.imgur.com/vQa1zRG.png)

Pay heed to the **Show as an admin column** option. It’s available when you activate the **MB Admin Columns** extension. Once checked, there’ll be a column in the dashboard to display job types, making it easier to manage them directly from the backend.

![The Show as an admin column option](https://i.imgur.com/ncPp4sm.png)

In the same way, add another **Select** field for working time. And also fill in the time options.

![Add another Select field for working time.](https://i.imgur.com/njjGRdH.png)

Since I only want this field to appear when the condition is met, I’ll set a rule for it in the **Advanced** tab to configure it. Move to the **Conditional logic** section (available when you have the **MB Conditional Logic** extension), set the key as the job type field ID and the value as the `part_time` option. This ensures the field shows only when the job type is part-time.

![Set the rule so that the field shows only when the job type is part-time.](https://i.imgur.com/V0Hx2iO.png)

Continue by adding other fields for the email, the contact number, and the company’s website.

![Add other fields for the email, the contact number, and the company’s website.](https://i.imgur.com/MRJRHei.png)

And select a **Checkbox List** field for technical skills, allowing users to select required skills for the job. And add a **Radio** field for experience level to specify the required experience. As I want these two fields to appear in the admin column, enable the **Show as an admin column** option as well.

![Add fields for technical skills and experience level.](https://i.imgur.com/ARbRJ3s.png)

Once all fields are configured, move to the **Settings** tab, set the **Location** as **Post type**, and select Job to apply these fields to it.

![Set location to apply these fields to the Job post type.](https://i.imgur.com/cXmx9SH.png)

Now, in your page editor, you will see custom fields displayed.

![In your page editor, you will see custom fields displayed.](https://i.imgur.com/17bQuXI.png)

Simply input values in these fields. You see, when choosing the part-time option, there will be a working time section that appears as we set the condition before.

![When choosing the part-time option, there will be a working time section.](https://i.imgur.com/AKx2Cvy.gif)

These are some posts that I created, for example. The job type, technical skill, and experience level are shown as admin columns as well.

![Some job posts](https://i.imgur.com/sLlySmw.png)

## 3. Creating a template to display job listing 

First, create a new page for the job listing. 

![Create a new page for the job listing.](https://i.imgur.com/isx0iov.png)

In this step, we’ll create a template to display posts on the page - that means all the jobs. For filtering the job, I’ll do it later.

Now, head over to **Meta Box** > **Views**, and create a new template specifically for this purpose.

![Create a new template with MB Views.](https://i.imgur.com/JYLnvnZ.png)

With **MB Views**, you can insert fields into it by clicking the **Insert Field** button and choosing any fields on the right sidebar to get data from them or by adding some lines of code directly to the **Template** tab.

![Insert fields](https://i.imgur.com/AVbkTnC.png)

Start by adding some code below!

```css

{% set args = { post_type: 'job', posts_per_page: -1, orderby: 'date', order: 'ASC' } %}
{% set posts = mb.get_posts(args) %}
{% for post in posts %}

```

![Add code to the template tab.](https://i.imgur.com/geMEc3W.png)

**Explanation**:

`{% set args = { post_type: 'job', posts_per_page: -1, orderby: 'date', order: 'ASC' } %}`: This whole line is used to query and display posts from a specific post type, sorted by publish date. Particularly,

`post_type: 'job'`: get posts from the post type with the job slug;
`posts_per_page: -1`: fetch all posts in that post type. You can change the number to get the expected number of posts;
`orderby: 'date'`: specify the order by publish date;
`order: 'ASC'`: ensure the oldest posts appear first.

Use the `mb.get_posts` function to get the posts.

Since we have multiple posts, use a loop to display all of them.

```
{% for post in posts %}
{% endfor %}

```
For displaying the job's information, just click the **Insert Field** button as I mentioned earlier. And then, insert fields inside the loop. For example, choose **Post title** to show the job title.

![Insert the job title.](https://i.imgur.com/qPcKixn.png)

Now, to show the location, company name, job type, and other details saved in the custom fields created with Meta Box. Find them in the list, then insert the fields as usual. The code will be generated automatically in the template.

![Insert Meta Box fields](https://i.imgur.com/kna4vLh.png)

While inserting, you also can set the output of the field.

After inserting all the fields, move to the **Settings** section to set where this template will appear. Set the **Type** as **Singular**, and choose the location as the page you created earlier for the job listings.

![Choose the location as the job listings page.](https://i.imgur.com/WMk32fv.png)

Finally, set the template’s position.

![Set the template’s position.](https://i.imgur.com/NFuSuNA.png)

On the frontend, you’ll see all the job information displayed.


![All the job information displayed](https://i.imgur.com/yuIwHrF.png)

However, it appears as a basic list without any styling for now. To make it look more visually appealing, we need to apply some styling.

Back to the **Template** tab, add some `div` tags, classes and modify the code for styling.

![Add some div tags, classes and modify the code for styling.](https://i.imgur.com/rF1u3LY.png)

And move to the **CSS** tab to add some lines of code.

```
.mb-container h3 {
    margin-bottom: 15px;
}

.mb-container h3 a {
    color: #b94444;
}

.mb-container {
    margin-top: 25px;
}

.mb-item {
    border-radius: 5px;
    background: #f7f7f78a;
    height: 285px;
    font-size: 16px;
    position: relative;
    float: left;
    width: 24%;
    margin: 5px 5px 10px;
    padding: 10px 15px;
    border: 1px solid #48474733;
    color: #262524;
}
```

![Add some code to the CSS tab.](https://i.imgur.com/Od9Wvou.png)

Now, the job listings look much better. It's time to set up the filtering functionality.

## 4. Adding filters & live search

I’m going to show a mix of filters. You can choose whatever style works best for you. Move the **Template** tab, add some code to display the search box and filter options for the job listings.
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://npmcdn.com/isotope-layout@3.0.6/dist/isotope.pkgd.js"></script>
<div class="mb-filter">
    <div id="filter-search">
        <h4>Search Job</h4>
        <div id="job-search-filter"><input type="text" id="quicksearch" placeholder="Search" /></div>
    </div>

    <div id="job-type-filters" class="button-group">
        <h4>Filter by Job Type</h4>
        {% set job_types = [] %}
        {% for post in posts %}
            {% if post.job_type.label not in job_types %}
                {% set job_types = job_types|merge([post.job_type.label]) %}
            {% endif %}
        {% endfor %}
        <button class="button is-checked" data-filter="*">Show All</button>
        {% for job_type in job_types %}
            <button class="button" data-filter=".{{ job_type|replace({' ': '_'}) }}">{{ job_type }}</button>
        {% endfor %}
    </div>

    <div id="technical-skills-filter">
        <h4>Filter by Technical Skills</h4>
        {% set all_skills = [] %}
        {% for post in posts %}
            {% for skill in post.technical_skills %}
                {% if skill.label not in all_skills %}
                    {% set all_skills = all_skills|merge([skill.label]) %}
                {% endif %}
            {% endfor %}
        {% endfor %}
        {% for skill in all_skills %}
            <label>
                <input type="checkbox" class="technical-skill-checkbox" value="{{ skill|replace({' ': '_'}) }}">
                {{ skill }}
            </label><br>
        {% endfor %}
    </div>

    <div id="experience-level-filter">
        <h4>Filter by Experience Level</h4>
        <select id="experience-level-select">
            <option value="*">Show All</option>
            {% set experience_levels = [] %}
            {% for post in posts %}
                {% if post.experience_level.label not in experience_levels %}
                    {% set experience_levels = experience_levels|merge([post.experience_level.label]) %}
                {% endif %}
            {% endfor %}
            {% for level in experience_levels %}
                <option value=".{{ level|replace({' ': '_'}) }}">{{ level }}</option>
            {% endfor %}
        </select>
    </div>
</div>
```

![Add some code to display the search box and filter options for the job listings ](https://i.imgur.com/pYHuGvz.png)

**Explanation**:

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://npmcdn.com/isotope-layout@3.0.6/dist/isotope.pkgd.js"></script>
```

This first script loads jQuery to handle events and dynamically update the HTML content. The second loads Isotope for dynamic filtering, sorting, and grid layout.

```
<div class="mb-filter">
    <div id="filter-search">
        <h4>Search Job</h4>
        <div id="job-search-filter"><input type="text" id="quicksearch" placeholder="Search" /></div>
    </div>
```
These codes are to create a search box where users can type keywords and filter job listings in real time.

In a real case, we can filter job listings based on different criteria, such as job type, technical skills, and experience level. Here’s how I’ve set it up:

```
<div id="job-type-filters" class="button-group">
        <h4>Filter by Job Type</h4>
        {% set job_types = [] %}
        {% for post in posts %}
            {% if post.job_type.label not in job_types %}
                {% set job_types = job_types|merge([post.job_type.label]) %}
            {% endif %}
        {% endfor %}
        <button class="button is-checked" data-filter="*">Show All</button>
        {% for job_type in job_types %}
            <button class="button" data-filter=".{{ job_type|replace({' ': '_'}) }}">{{ job_type }}</button>
        {% endfor %}
    </div>
```

This section retrieves all job types from the list and displays them as buttons. Each button has the `data-filter` attribute containing a CSS class, which is then used for filtering the job listings with Isotope.

```
 <div id="technical-skills-filter">
        <h4>Filter by Technical Skills</h4>
        {% set all_skills = [] %}
        {% for post in posts %}
            {% for skill in post.technical_skills %}
                {% if skill.label not in all_skills %}
                    {% set all_skills = all_skills|merge([skill.label]) %}
                {% endif %}
            {% endfor %}
        {% endfor %}
        {% for skill in all_skills %}
            <label>
                <input type="checkbox" class="technical-skill-checkbox" value="{{ skill|replace({' ': '_'}) }}">
                {{ skill }}
            </label><br>
        {% endfor %}
    </div>
```

This section retrieves all technical skills and displays them as checkboxes, letting users filter by selected skills.

```
<div id="experience-level-filter">
        <h4>Filter by Experience Level</h4>
        <select id="experience-level-select">
            <option value="*">Show All</option>
            {% set experience_levels = [] %}
            {% for post in posts %}
                {% if post.experience_level.label not in experience_levels %}
                    {% set experience_levels = experience_levels|merge([post.experience_level.label]) %}
                {% endif %}
            {% endfor %}
            {% for level in experience_levels %}
                <option value=".{{ level|replace({' ': '_'}) }}">{{ level }}</option>
            {% endfor %}
        </select>
    </div>
```

This one retrieves all experience levels and displays them in a dropdown so that users can select a level to filter the listings accordingly.

Then, you'll need to add some code in the CSS tab again for styling the search boxes and filters.

```
.button:active,
.button.is-checked {
    background-color: #28F;
}

.button:hover {
    background-color: #8CF;
    text-shadow: 0 1px hsla(0, 0%, 100%, 0.5);
    color: #222;
}

#filter-search {
    margin: 20px 0;
}

#quicksearch {
    width: 300px;
    border: 1px solid #747474;
}

#experience-level-filter,
#job-type-filters,
#filter-search,
#technical-skills-filter {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

#technical-skills-filter label {
    display: flex;
    align-items: center;
    gap: 5px;
}

#technical-skills-filter {
    margin: 20px 0;
}

#technical-skills-filter h4 {
    margin-bottom: 0;
}

#experience-level-filter h4,
#job-type-filters h4,
#filter-search h4 {
    margin-bottom: 0;
    padding-top: 10px;
}
```

![Add some code for styling the search boxes and filters.](https://i.imgur.com/BDWOeT0.png)

Now, the job search and filter boxes are visible, but they are not functional yet.

![The job search boxes are visible, but they are not functional yet.](https://i.imgur.com/hHiudrG.png)

Thus, you need to use JavaScript to make them work.

Go to the **JavaScript** tab, and add the following script.

```
jQuery(function ($) {
    let qsRegex, buttonFilter, dropdownFilter, technicalSkills = [];

    const item = $('.mb-container').isotope({
        itemSelector: '.mb-item',
        layoutMode: 'fitRows',
        filter: function () {
            const $el = $(this);
            return (
                (!qsRegex || $el.text().match(qsRegex)) &&
                (!buttonFilter || $el.is(buttonFilter)) &&
                (!dropdownFilter || $el.is(dropdownFilter)) &&
                (!technicalSkills.length || technicalSkills.some(skill => $el.hasClass(skill)))
            );
        }
    });

    const applyIsotope = () => item.isotope();

    $('#quicksearch').on('keyup', debounce(function () {
        qsRegex = new RegExp($(this).val(), 'gi');
        applyIsotope();
    }, 100));

    function debounce(func, wait) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    $('#job-type-filters').on('click', 'button', function () {
        buttonFilter = $(this).data('filter');
        $('#job-type-filters .is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        applyIsotope();
    });

    $('.technical-skill-checkbox').on('change', function () {
        const value = $(this).val();
        technicalSkills = $(this).is(':checked')
            ? [...technicalSkills, value]
            : technicalSkills.filter(skill => skill !== value);
        applyIsotope();
    });

    $('#experience-level-select').on('change', function () {
        dropdownFilter = $(this).val();
        applyIsotope();
    });

});
```

![Add script to make the filter work.](https://i.imgur.com/OQ9lsdw.png)

**Explanation**:

```
let qsRegex, buttonFilter, dropdownFilter, technicalSkills = [];
```

This part explains the initialization of key variables used for job search filtering, including:

`qsRegex`: store the regular expression for quick search;
`buttonFilter`: hold the value of the job type filter, selected via buttons;
`dropdownFilter`: hold the value selected from a dropdown for filtering jobs based on experience level;
`technicalSkills`: track the skills chosen via checkboxes.

```
const applyIsotope = () => item.isotope();
```

The line of code above activates Isotope to filter and display job items based on the user's search. It checks each item and shows only those that match the filtering conditions.

```
$('#quicksearch').on('keyup', debounce(function () {
        qsRegex = new RegExp($(this).val(), 'gi');
        applyIsotope();
   }, 100));
```

This is declared to re-initialize Isotope JS after any change in the search.

```
function debounce(func, wait) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
}
```

This code handles the event that occurs whenever the user types into the search input. The `debounce` function improves performance by delaying the search until the user stops typing.

The following code sections handle different filtering:

By job type:

```
$('#job-type-filters').on('click', 'button', function () {
        buttonFilter = $(this).data('filter');
        $('#job-type-filters .is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        applyIsotope();
});
```

By technical skills:

```
$('.technical-skill-checkbox').on('change', function () {
        const value = $(this).val();
        technicalSkills = $(this).is(':checked')
            ? [...technicalSkills, value]
            : technicalSkills.filter(skill => skill !== value);
        applyIsotope();
});
```

By experience level:

```
$('#experience-level-select').on('change', function () {
        dropdownFilter = $(this).val();
        applyIsotope();
});
```

Right now, the job search box works, but the filters aren’t functional yet.

![The job search box works, but the filters aren’t functional yet.](https://imgur.com/xLf3pfa.png)

That’s because while the JavaScript for filtering is already set up, the required HTML attributes are still missing. Let’s add them now.

In the **Template** tab, add more code.

```
{% set job_type_class = post.job_type.label|replace({' ': '_'}) %}
{% set skill_classes = post.technical_skills|map(skill => skill.label|replace({' ': '_'}))|join(' ') %}
{% set experience_level_class = post.experience_level.label|replace({' ': '_'}) %}
<div class="mb-item {{ job_type_class }} {{ skill_classes }} {{ experience_level_class }}">
```

![Add more HTML code to make filter work.](https://i.imgur.com/PrEMdBA.png)
 
Explanation:

```
{% set job_type_class = post.job_type.label|replace({' ': '_'}) %}
{% set skill_classes = post.technical_skills|map(skill => skill.label|replace({' ': '_'}))|join(' ') %}
{% set experience_level_class = post.experience_level.label|replace({' ': '_'}) %}
```

This processes the filter values before adding them as CSS classes to each job item.

These CSS classes; `job_type_class`, `skill_classes`, `experience_level_class`; are added to each job item to enable filtering.

All the code we put it on [Github](https://github.com/wpmetabox/tutorials/tree/master/create-filter-job-listing-page) so you can refer to it there.

Now, the job listings are fully functional! When you apply filters or search, the displayed jobs update accordingly.

![Create a job listing page with advanced filtering options.](https://i.imgur.com/xLf3pfa.gif)

## 5. Creating a submit job page

If you want users to submit job listings from the frontend instead of accessing the backend, you can create a **Submit Job** page as follows:

Now, create a new page. Then, add the **Frontend Submission Form** block provided by [MB Frontend Submission](https://metabox.io/plugins/mb-frontend-submission/).

![Add the Frontend Submission Form block.](https://i.imgur.com/KkL4n09.png)

Remember the field group ID I set earlier? Enter this ID into the block settings, and you’ll immediately see the submission form fields appear on the page.

![Enter the field group ID into the block settings.](https://i.imgur.com/ISMw24G.png)

Choose the created post type so that when users fill in a form, there will be a post appearing in that post type.

![Choose the created post type.](https://i.imgur.com/0QPH55M.png)

Switch to the frontend, and you’ll see the **Submit Job** page displaying the form. Users can now enter job details and submit them directly.

![The Submit Job page displays the form.](https://i.imgur.com/TEAlfNI.gif)

## 6. Creating a job manager page

Start by creating a new page where users can view and manage the jobs they’ve submitted after logging in.

Add a **User Dashboard** block, which is provided by the **MB Frontend Submission** extension as well.

![Add a User Dashboard block.](https://i.imgur.com/woFaq07.png)

There are some default blogs. 

![Some default blogs after choosing the User Dashboard block](https://i.imgur.com/fHgeoD8.png)

In the settings section, look for an option to select the **Submit Page**. This sets the page where users submit their job listings.

![Set the page where users submit their job listings.](https://i.imgur.com/jVPHm2Q.png)

Now, with the **Job Manager** page set up, you can edit or delete the job listings as you want.

![The Job Manager page allows you to edit or delete the job listings.](https://i.imgur.com/5J5Jla1.gif)
