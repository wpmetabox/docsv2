import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SearchBar from '@theme/SearchBar';
import clsx from 'clsx';
import React from 'react';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={ clsx( 'hero hero--primary', styles.heroBanner ) }>
      <div className="container">
        <h1 className="hero__title">{ siteConfig.title }</h1>
        <p className="hero__subtitle">{ siteConfig.tagline }</p>
        <SearchBar />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title=""
      description={ siteConfig.tagline }>
      <HomepageHeader />
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
                <a href='/category/guides/'>View all &rarr;</a>
              </header>
              <ul>
                <li><a href="/creating-fields-with-code/">Creating fields with code</a></li>
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
                <a href='/category/extensions/'>View all &rarr;</a>
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
    </Layout>
  );
}
