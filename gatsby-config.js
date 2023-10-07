require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.leslodgesdepraly.fr",
    title: "gatsby-template",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://leslodgesdepraly.us14.list-manage.com/subscribe/post?u=c10c16c58c8404501b8a2f1f3&amp;id=fb38cb63b8",
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "siteName",
        short_name: "companyName",
        start_url: "/",
        background_color: "#e30613",
        theme_color: "#ff00ff",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },

    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/Layout.jsx"),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/",
      },
    },
  ],
};
