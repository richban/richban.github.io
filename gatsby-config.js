require("dotenv").config({
  path: ".env",
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitleAlt: "Richban",
    siteTitle: "RICHBAN",
    siteHeadline: "Richban | Software Engineer | Data Engineer | ML Engineer",
    siteUrl: "https://richban.tech",
    siteDescription: "Personal site about software engineering",
    siteLanguage: "Eng",
    siteImage: "No site.png",
    author: "richban"
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
            url: "https://brain.richban.tech"
          },
          {
            name: "Notion",
            url: "https://www.notion.so/richban/Hello-I-m-Richban-5ba8108ce74f441fb2a3b4fbfb7a35f4",
          },
          {
            name: "Twitter",
            url: "https://twitter.com/richban_",
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
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-183551171-2",
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
  ].filter(Boolean),
}
