import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SearchBar from '@theme/SearchBar';
import React from 'react';
import Footer from '../components/Footer';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title=""
      description={ siteConfig.tagline }>
      <header className="hero">
        <div className="container">
          <h1 className="hero__title">Build professional WordPress sites with custom post types and custom fields</h1>
          <p className="hero__subtitle">Quickly create forms and fields for your posts, user profiles, settings pages, and more.</p>
          <div className="hero_cta">
            <Link
              className="button button--primary button--lg"
              to="introduction">
              Get Started
            </Link>
          </div>
          <SearchBar />
          <p className="hero_popular">Popular topics: <a href="/field-settings/">field settings</a>, <a href="/custom-fields/#displaying-fields">displaying fields</a>, <a href='/extensions/mb-blocks/'>blocks</a></p>
        </div>
      </header>
      <main>
        <section className='boxes'>
          <div className="container boxWrapper">
            <div className='box box-start'>
              <header>
                <h2>Getting Started</h2>
                <a href='/category/getting-started/'>View all &rarr;</a>
              </header>
              <ul>
                <li><a href="/introduction/">Why Meta Box?</a></li>
                <li><a href="/installation/">Installation</a></li>
                <li><a href="/custom-post-types/">How to create custom post types?</a></li>
                <li><a href="/custom-fields/">How to create and display custom fields?</a></li>
              </ul>
            </div>
            <div className='box box-fields box-2'>
              <header>
                <h2>Field Types</h2>
                <a href='/fields/'>View all &rarr;</a>
              </header>
              <ul>
                <li><a href="/fields/text/">Text</a></li>
                <li><a href="/fields/textarea/">Textarea</a></li>
                <li><a href="/fields/select/">Select</a></li>
                <li><a href="/fields/checkbox/">Checkbox</a></li>
                <li><a href="/fields/checkbox-list/">Checkbox list</a></li>
                <li><a href="/fields/radio/">Radio</a></li>
                <li><a href="/fields/date/">Date picker</a></li>
                <li><a href="/fields/image-advanced/">Image advanced</a></li>
              </ul>
            </div>
            <div className='box box-developer'>
              <header>
                <h2>Developer Guides</h2>
                <a href='/category/developer-guides/'>View all &rarr;</a>
              </header>
              <ul>
                <li><a href="/creating-fields-with-code/">Creating fields with code</a></li>
                <li><a href="/field-settings/">Field settings</a></li>
                <li><a href="/displaying-fields-with-code/">Displaying fields with code</a></li>
                <li><a href="/creating-new-field-types/">Creating new field types</a></li>
              </ul>
            </div>
            <div className='box box-advanced box-2'>
              <header>
                <h2>Advanced</h2>
                <a href='/category/advanced/'>View all &rarr;</a>
              </header>
              <ul>
                <li><a href="/shortcode/">Shortcode</a></li>
                <li><a href="/cloning-fields/">Cloning fields</a></li>
                <li><a href="/validation/">Validation</a></li>
                <li><a href="/sanitization/">Sanitization</a></li>
                <li><a href="/integration/">Integration</a></li>
                <li><a href="/database/">Database</a></li>
                <li><a href="/custom-attributes/">Custom attributes</a></li>
              </ul>
            </div>
            <div className='box box-extensions'>
              <header>
                <h2>Extensions</h2>
                <a href='/extensions/'>View all &rarr;</a>
              </header>
              <ul>
                <li><a href="/extensions/mb-relationships/">MB Relationships</a></li>
                <li><a href="/extensions/mb-frontend-submission/">MB Frontend Submission</a></li>
                <li><a href="/extensions/mb-settings-page/">MB Settings Page</a></li>
                <li><a href="/extensions/mb-custom-table/">MB Custom Table</a></li>
              </ul>
            </div>
            <div className='box box-references box-2'>
              <header>
                <h2>References</h2>
                <a href='/category/references/'>View all &rarr;</a>
              </header>
              <ul>
                <li><a href="/category/actions/">Actions</a></li>
                <li><a href="/category/filters/">Filters</a></li>
                <li><a href="/category/functions/">Functions</a></li>
                <li><a href="/functions/rwmb-meta/">rwmb_meta()</a></li>
                <li><a href="/functions/rwmb-get-value/">rwmb_get_value()</a></li>
                <li><a href="/functions/rwmb-the-value/">rwmb_the_value()</a></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
	  <Footer />
    </Layout>
  );
}
