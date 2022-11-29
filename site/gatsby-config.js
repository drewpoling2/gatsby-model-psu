require("dotenv").config()

const gatsbyPreview = process.env.GATSBY_IS_PREVIEW

if (gatsbyPreview && gatsbyPreview === "true") {
  module.exports = {
    plugins: [
      "gatsby-theme-theme-ui-psu",
      "gatsby-plugin-sharp",
      "gatsby-plugin-image",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "content",
          path: "boop",
        },
      },
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: "s892xt1n4anv" || "",
          accessToken: process.env.CONTENTFUL_PREVIEW_API_TOKEN || "",
          host: `preview.contentful.com`,
        },
      },
      `gatsby-plugin-image`,
    ],
  }
} else {
  module.exports = {
    plugins: [
      "gatsby-theme-theme-ui-psu",
      "gatsby-plugin-sharp",
      "gatsby-plugin-image",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "content",
          path: "boop",
        },
      },
      {
        resolve: "gatsby-source-contentful",
        options: {
          spaceId: "s892xt1n4anv" || "",
          accessToken: process.env.CONTENTFUL_API_TOKEN || "",
        },
      },
    ],
  }
}

// const contentfulConfig = {
//   spaceId: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
//   host: process.env.CONTENTFUL_HOST,
//   pageLimit: 1000,
//   environment: process.env.CONTENTFUL_ENV
//     ? process.env.CONTENTFUL_ENV
//     : `master`,
// }
