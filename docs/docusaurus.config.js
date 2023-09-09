const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const url = new URL("https://radio-aktywne.github.io/app-emiarchive");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "emiarchive docs",
  favicon: "favicon.svg?v=1",

  url: `${url.protocol}//${url.host}`,
  baseUrl: url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Use docs on root
          routeBasePath: "/",

          // Use autogenerated sidebar
          sidebarPath: undefined,
        },
        // Disable blog
        blog: false,
        theme: {
          customCss: require.resolve("./custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "emiarchive docs",
        logo: {
          alt: "emiarchive docs logo",
          src: "logo.svg?v=1",
        },
        items: [
          {
            href: "https://github.com/radio-aktywne/app-emiarchive",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
