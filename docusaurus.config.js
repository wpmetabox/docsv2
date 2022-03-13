// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/palenight');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Meta Box Documentation',
  tagline: 'Everything you need to know to use Meta Box plugins to create professional websites on WordPress',
  url: 'https://docs.metabox.io',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'warn',
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
          editUrl: 'https://github.com/wpmetabox/docsv2/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: "/",
      },
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
            to: 'category/fields',
            position: 'left',
            label: 'Field types',
          },
          {
            to: 'category/extensions',
            position: 'left',
            label: 'Extensions',
          },
          {
            to: 'category/advanced',
            position: 'left',
            label: 'Advanced',
          },
          {
            to: 'category/others',
            position: 'left',
            label: 'Others',
          },
          {
            href: 'https://metabox.io/support/',
            position: 'right',
            label: 'Support',
          },
          {
            href: 'https://www.facebook.com/groups/metaboxusers',
            position: 'right',
            className: 'facebook-link'
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
                to: 'extensions/meta-box-builder',
              },
              {
                label: 'Meta Box Group',
                to: 'extensions/meta-box-group',
              },
              {
                label: 'MB Relationships',
                to: 'extensions/mb-relationships',
              },
              {
                label: 'MB Custom Table',
                to: 'extensions/mb-custom-table',
              },
              {
                label: 'MB Custom Post Types',
                to: 'extensions/mb-custom-post-type',
              },
              {
                label: 'MB Frontend Submission',
                to: 'extensions/mb-frontend-submission',
              },
              {
                label: 'Meta Box Conditional Logic',
                to: 'extensions/meta-box-conditional-logic',
              },
            ],
          },
          {
            title: 'Connect With Us',
            items: [
              {
                label: 'Facebook',
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
