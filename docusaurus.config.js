// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Meta Box Documentation',
  tagline: 'Everything you need to know to use Meta Box plugins to create professional websites on WordPress',
  url: 'https://docs.metabox.io',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'wpmetabox', // Usually your GitHub org/user name.
  projectName: 'docsv2', // Usually your repo name.
  titleDelimiter: '-',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/wpmetabox/docsv2/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      autoCollapseSidebarCategories: true,
      colorMode: {
        respectPrefersColorScheme: true,
      },
      image: 'https://i.imgur.com/wnJtgSC.jpg',
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'Meta Box Documentation',
          src: 'img/logo.svg',
          srcDark: 'img/logo-white.svg',
        },
        items: [
          {
            to: 'category/getting-started',
            position: 'left',
            label: 'Getting Started',
          },
          {
            to: 'category/basics',
            position: 'left',
            label: 'Basics',
          },
          {
            to: 'category/advanced',
            position: 'left',
            label: 'Advanced',
          },
          {
            to: 'category/fields',
            position: 'left',
            label: 'Fields',
          },
          {
            to: 'category/extensions',
            position: 'left',
            label: 'Extensions',
          },
          {
            to: 'category/references',
            position: 'left',
            label: 'References',
          },
        ],
      },
      footer: {
        logo: {
          src: 'img/logo-white.svg',
        },
        style: 'dark',
        links: [
          {
            title: 'Meta Box',
            items: [
              {
                label: 'Pricing',
                href: 'https://metabox.io/pricing/',
              },
              {
                label: 'Features',
                href: 'https://metabox.io/features/',
              },
              {
                label: 'Testimonials',
                href: 'https://metabox.io/testimonials/',
              },
              {
                label: 'Extensions',
                href: 'https://metabox.io/plugins/',
              },
              {
                label: 'Affiliate',
                href: 'https://metabox.io/affiliate/',
              },
              {
                label: 'FAQ',
                href: 'https://metabox.io/faq/',
              },
              {
                label: 'Changelog',
                href: 'https://metabox.io/changelog/',
              },
              {
                label: 'Contact',
                href: 'https://metabox.io/contact/',
              },
            ],
          },
          {
            title: 'Top Extensions',
            items: [
              {
                label: 'Meta Box Builder',
                href: 'https://metabox.io/plugins/meta-box-builder/',
              },
              {
                label: 'Meta Box Group',
                href: 'https://metabox.io/plugins/meta-box-group/',
              },
              {
                label: 'MB Relationships',
                href: 'https://metabox.io/plugins/mb-relationships/',
              },
              {
                label: 'MB Custom Table',
                href: 'https://metabox.io/plugins/mb-custom-table/',
              },
              {
                label: 'MB Custom Post Types',
                href: 'https://metabox.io/plugins/custom-post-type/',
              },
              {
                label: 'MB Frontend Submission',
                href: 'https://metabox.io/plugins/mb-frontend-submission/',
              },
              {
                label: 'Meta Box Conditional Logic',
                href: 'https://metabox.io/plugins/meta-box-conditional-logic/',
              },
            ],
          },
          {
            title: 'Connect With Us',
            items: [
              {
                label: 'Facebook Group',
                href: 'https://facebook.com/wpmetabox',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/wpmetabox',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/c/MetaBoxWP',
              },
              {
                label: 'Github',
                href: 'https://github.com/wpmetabox',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://metabox.io">Meta Box</a>, a brand of <a href="https://elightup.com">eLightUp</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [ 'php' ],
        defaultLanguage: 'php',
      },
      algolia: {
        appId: 'KYQL1Y1NMH',
        apiKey: '408790cad2f67a05be94ae7b407d7c62',
        indexName: 'metabox',
        searchPagePath: false,
      },
    }),
};

module.exports = config;
