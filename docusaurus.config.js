// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/palenight');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Meta Box Documentation',
  tagline: 'How to use Meta Box to create pro websites on WordPress',
  url: 'https://docs.metabox.io',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'wpmetabox', // Usually your GitHub org/user name.
  projectName: 'docsv2', // Usually your repo name.
  titleDelimiter: '-',

  plugins: [
    './lightbox',
    async function tailwindcss(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/wpmetabox/docsv2/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleTagManager: {
          containerId: 'GTM-KX7MB6',
        },
      },
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
      // hideableSidebar: true,
      // autoCollapseSidebarCategories: true,
      colorMode: {
        respectPrefersColorScheme: true,
      },
      image: 'https://imgur.elightup.com/wnJtgSC.jpg',
      announcementBar: {
        content: '🔥 <b>Black Friday Sale</b> - Save up to 40% on all Meta Box annual plans. <a target="_blank" href="https://metabox.io/black-friday/"><b>Get it now</b></a>!',
        backgroundColor: '#fed7aa',
        textColor: '#7c2d12',
        isCloseable: false,
      },
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'Meta Box Documentation',
          src: 'img/logo.svg',
          srcDark: 'img/logo-white.svg',
          href: 'https://metabox.io'
        },
        items: [
          {
            to: 'category/getting-started',
            position: 'left',
            label: 'Getting Started',
          },
          {
            type: 'doc',
            docId: 'fields',
            position: 'left',
            label: 'Field Types',
          },
          {
            to: 'extensions',
            position: 'left',
            label: 'Extensions',
          },
          {
            to: 'tutorials',
            position: 'left',
            label: 'Tutorials',
          },
          {
            href: 'https://support.metabox.io',
            position: 'right',
            label: 'Support',
          },
          {
            href: 'https://www.facebook.com/groups/metaboxusers',
            position: 'right',
            label: 'Community',
          },
        ],
      },

      prism: {
        theme: {
          ...lightCodeTheme,
          plain: {
            backgroundColor: '#f2f5f8'
          }
        },
        darkTheme: {
          ...darkCodeTheme,
          plain: {
            backgroundColor: '#2c3e50'
          }
        },
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
