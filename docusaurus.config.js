// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Meta Box Documentation',
  tagline: 'Everything you need to know to use Meta Box plugins',
  url: 'https://docs.metabox.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'wpmetabox', // Usually your GitHub org/user name.
  projectName: 'docsv2', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'basics',
            position: 'left',
            label: 'Basics',
          },
          {
            type: 'doc',
            docId: 'advanced',
            position: 'left',
            label: 'Advanced',
          },
          {
            type: 'doc',
            docId: 'fields',
            position: 'left',
            label: 'Fields',
          },
          {
            type: 'doc',
            docId: 'extensions',
            position: 'left',
            label: 'Extensions',
          },
          {
            type: 'doc',
            docId: 'references',
            position: 'left',
            label: 'References',
          },
          {
            type: 'doc',
            docId: 'tutorials',
            position: 'left',
            label: 'Tutorials',
          },
        ],
      },
      footer: {
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
        copyright: `Copyright © ${new Date().getFullYear()} Meta Box, a brand of <a href="https://elightup.com">eLightUp</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
