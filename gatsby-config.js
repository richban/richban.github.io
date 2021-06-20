require("dotenv").config({
  path: ".env",
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitleAlt: "Richban",
    siteTitle: "RICHBAN",
    siteHeadline: "Richban | Software Engineer | Data Engineer | ML Engineer",
    siteUrl: "https://richban.tech",
    siteDescription: "Personal site about software engineering",
    siteLanguage: "Eng",
    siteImage: "No site.png",
    author: "richban",
  },
  plugins: [
    {
      resolve: "@lekoarts/gatsby-theme-minimal-blog",
      options: {
        navigation: [
          {
            title: "About",
            slug: "/about",
          },
          {
            title: "Blog",
            slug: "/blog",
          },
        ],
        externalLinks: [
          {
            name: "Github",
            url: "https://www.github.com/richban",
          },
          {
            name: "Wiki",
            url: "https://brain.richban.tech",
          },
          {
            name: "Notion",
            url:
              "https://www.notion.so/richban/Hello-I-m-Richban-5ba8108ce74f441fb2a3b4fbfb7a35f4",
          },
          {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/richbanyi/",
          },
          {
            name: "Twitter",
            url: "https://twitter.com/richban_",
          },
          {
            name: "Instagram",
            url: "https://instagram.com/richban_",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true, // defaults to false
        jsxPragma: "jsx", // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Richban Software Engineer",
        short_name: "richban-minimal-blog",
        description: "Personal site about software engineering",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#6B46C1",
        display: "standalone",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify",
    shouldAnalyseBundle && {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        analyzerMode: "static",
        reportFilename: "_bundle.html",
        openAnalyzer: false,
      },
    },
    {
      resolve: `gatsby-plugin-goatcounter`,
      options: {
        // Either `code` or `selfHostUrl` is required.
        // REQUIRED IF USING HOSTED GOATCOUNTER! https://[my_code].goatcounter.com
        code: "richban",

        // REQUIRED IF USING SELFHOSTED GOATCOUNTER!
        // selfHostUrl: `https://example.com`,

        // ALL following settings are OPTIONAL

        // Avoids sending pageview hits from custom paths
        exclude: [],

        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,

        // Defines where to place the tracking script
        // boolean `true` in the head and `false` in the body
        head: false,

        // Set to true to include a gif to count non-JS users
        pixel: false,

        // Allow requests from local addresses (localhost, 192.168.0.0, etc.)
        // for testing the integration locally.
        // TIP: set up a `Additional Site` in your GoatCounter settings
        // and use its code conditionally when you `allowLocal`, example below
        allowLocal: false,

        // Override the default localStorage key more below
        localStorageKey: "skipgc",

        // Set to boolean true to enable referrer set via URL parameters
        // Like example.com?ref=referrer.com or example.com?utm_source=referrer.com
        // Accepts a function to override the default referrer extraction
        // NOTE: No Babel! The function will be passes as is to your websites <head> section
        // So make sure the function works as intended in all browsers you want to support
        referrer: false,

        // Setting it to boolean true will clean the URL from
        // `?ref` & `?utm_` parameters before sending it to GoatCounter
        // It uses `window.history.replaceState` to clean the URL in the
        // browser address bar as well.
        // This is to prevent ref tracking ending up in your users bookmarks.
        // All parameters other than `ref` and all `utm_` will stay intact
        urlCleanup: false,
      },
    },
  ].filter(Boolean),
};
