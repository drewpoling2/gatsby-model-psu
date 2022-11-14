/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { graphql } from "gatsby"
import logo from "../../assets/psu-mark.png"
import Layout from "gatsby-theme-theme-ui-psu/src/components/Layout/Layout"
import { Nav } from "gatsby-theme-theme-ui-psu/src/components/Nav/Nav"
import { NewsFooter } from "gatsby-theme-theme-ui-psu/src/components/CustomFooter/NewsFooter"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
export const query = graphql`
  query($slug: String!) {
    quickLink: contentfulHomepageQuickLinksCards(slug: { eq: $slug }) {
      cardTitle
      pageContent {
        raw
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

const MainQuickLinksContent = ({ data: { quickLink } }) => (
  <Container>
    {console.log(quickLink.pageContent.raw)}
    <div sx={{ py: 4, my: 4 }}>
      {documentToReactComponents(
        JSON.parse(quickLink.pageContent.raw, {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
              <img src={node.data.target.fields.file["en-US"].url} />
            ),
          },
        })
      )}
    </div>
  </Container>
)
const QuickLinksTemplatePage = ({ data }) => (
  <Layout
    navChild={<Nav imageSrc={logo} navData={data} />}
    mainChild={<MainQuickLinksContent data={data} />}
    footerChild={<NewsFooter />}
  ></Layout>
)
export default QuickLinksTemplatePage
