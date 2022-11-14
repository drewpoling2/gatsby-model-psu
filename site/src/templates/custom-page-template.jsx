/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { graphql } from "gatsby"
import logo from "../../assets/psu-mark.png"
import Layout from "gatsby-theme-theme-ui-psu/src/components/Layout/Layout"
import { Nav } from "gatsby-theme-theme-ui-psu/src/components/Nav/Nav"
import { NewsFooter } from "gatsby-theme-theme-ui-psu/src/components/CustomFooter/NewsFooter"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { CustomPageContent } from "../components/CustomPageContent"
import { BLOCKS } from "@contentful/rich-text-types"

export const query = graphql`
  query($slug: String!) {
    customPage: contentfulCustomPage(slug: { eq: $slug }) {
      title
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

const CustomPageTemplatePage = ({ data }) => (
  <Layout
    navChild={<Nav imageSrc={logo} navData={data} />}
    mainChild={<CustomPageContent data={data} />}
    footerChild={<NewsFooter />}
  ></Layout>
)
export default CustomPageTemplatePage
