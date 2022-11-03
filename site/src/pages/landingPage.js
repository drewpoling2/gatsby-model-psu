/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Layout from "gatsby-theme-theme-ui-example/src/components/Layout/Layout"
import { Nav } from "gatsby-theme-theme-ui-example/src/components/Nav/Nav"
import { HomeMainTest } from "../components/HomeMainTest"
import { NewsFooter } from "gatsby-theme-theme-ui-example/src/components/CustomFooter/NewsFooter"
import { testNavData } from "../../navData"
import altoonaLogo from "../../assets/logo.png"
import beaverStadium from "../../assets/beaver-stadium-fireworks_0.jpeg"
import { graphql } from "gatsby"

// export const query = graphql`
//   {
//     contentfulHomepage {
//       blocks: content {
//         ... on ContentfulQuickLinksCards {
//           id
//           cardTitle
//           cardDescription {
//             raw
//           }
//           cardImage {
//             file {
//               url
//               fileName
//             }
//           }
//           slug
//         }
//         ... on ContentfulLandingPageImageHero {
//           id
//           heading
//           image {
//             file {
//               url
//               fileName
//             }
//           }
//           LandingPageHeroImageText
//           subtitle
//         }
//         ... on ContentfulWideImageHero {
//           id
//           heading
//           image {
//             file {
//               url
//               fileName
//             }
//           }
//           subtitle
//         }
//         ... on ContentfulTextContent {
//           id
//           text {
//             raw
//           }
//           title
//         }
//         ... on ContentfulParagraphSummary {
//           id
//           paragraphSummaryText {
//             paragraphSummaryText
//           }
//           paragraphSummarySubtitle
//           paragraphSummaryAuthor
//         }
//       }
//       title
//     }
//   }
// `

export default ({ data }) => (
  <Layout
    navChild={<Nav imageSrc={altoonaLogo} navData={testNavData} />}
    mainChild={<HomeMainTest data={data} imageSrc={beaverStadium} />}
    footerChild={<NewsFooter />}
  ></Layout>
)
