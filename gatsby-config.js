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
        showCopyButton: false,
        showLineNumbers: false,
        mdx: false,
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
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.gstatic.com`],
        interval: 300,
        timeout: 30000,
        // If you plan on changing the font you'll also need to adjust the Theme UI config to edit the CSS
        // See: https://github.com/LekoArts/gatsby-themes/tree/main/examples/minimal-blog#changing-your-fonts
        web: [
          {
            name: `IBM Plex Sans`,
            file: `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allPost } }) =>
              allPost.nodes.map((post) => {
                const url = site.siteMetadata.siteUrl + post.slug
                const content = `<p>${post.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`

                return {
                  title: post.title,
                  date: post.date,
                  excerpt: post.excerpt,
                  url,
                  guid: url,
                  custom_elements: [{ "content:encoded": content }],
                }
              }),
            query: `
              {
                allPost(sort: { fields: date, order: DESC }) {
                  nodes {
                    title
                    date(formatString: "MMMM D, YYYY")
                    excerpt
                    slug
                  }
                }
              }
            `,
            output: `rss.xml`,
            title: `Minimal Blog - @lekoarts/gatsby-theme-minimal-blog`,
          },
        ],
      },
    },
    {
        resolve: `gatsby-plugin-mdx`,
        options: {
          lessBabel: true,
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 760,
                quality: 90,
                linkImagesToOriginal: false,
                backgroundColor: `transparent`,
              },
            },
                    {
          resolve: `gatsby-remark-highlight-code`,
        },
          ],
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 960,
                quality: 90,
                linkImagesToOriginal: false,
                backgroundColor: `transparent`,
              },
            },
          ],
        },
      },
  ].filter(Boolean),
};
