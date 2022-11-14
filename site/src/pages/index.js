/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "gatsby-theme-theme-ui-psu/src/components/Layout/Layout"
import { Nav } from "gatsby-theme-theme-ui-psu/src/components/Nav/Nav"
import { HomePageContent } from "../components/HomePageContent"
import { NewsFooter } from "gatsby-theme-theme-ui-psu/src/components/CustomFooter/NewsFooter"
import logo from "../../assets/psu-mark.png"
import { graphql } from "gatsby"

export const query = graphql`
  {
    contentfulHomepage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...QuickLinkGroupContent
        ...HomepageParagraphSummaryContent
        ...HomepageWideImageHeroContent
        ...HomepageLandingPageImageHeroContent
        ...RichTextBlockContent
      }
    }
    allContentfulCtaItem {
      totalCount
      edges {
        node {
          text
          ref {
            ... on ContentfulCustomPage {
              id
              slug
            }
            ... on ContentfulExternalLink {
              id
              href
            }
          }
        }
      }
    }
    contentfulLayoutHeader {
      navItems {
        ... on ContentfulNavItem {
          id
          ref {
            ... on ContentfulCustomPage {
              id
              slug
            }
            ... on ContentfulExternalLink {
              id
              href
            }
          }
          text
        }
        ... on ContentfulNavItemGroup {
          id
          name
          navItems {
            ... on ContentfulNavItem {
              id
              text
              ref {
                ... on ContentfulCustomPage {
                  id
                  slug
                }
                ... on ContentfulExternalLink {
                  id
                  href
                }
              }
            }
          }
        }
      }
    }
  }
`

const index = ({ data }) => (
  <Layout
    navChild={<Nav imageSrc={logo} navData={data} />}
    mainChild={<HomePageContent data={data} />}
    footerChild={<NewsFooter />}
  >
    {console.log(data)}
  </Layout>
)

export default index
