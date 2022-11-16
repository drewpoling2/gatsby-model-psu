/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config()

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
