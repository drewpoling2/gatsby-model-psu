/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "gatsby-theme-theme-ui-psu/src/components/Layout/Layout"
import { Nav } from "gatsby-theme-theme-ui-psu/src/components/Nav/Nav"
import { PageContent } from "../components/PageContent"
import { NewsFooter } from "gatsby-theme-theme-ui-psu/src/components/CustomFooter/NewsFooter"
import altoonaLogo from "../../assets/logo.png"
import beaverStadium from "../../assets/beaver-stadium-fireworks_0.jpeg"
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
        ...HomepageQuickLinksContent
        ...HomepageParagraphSummaryContent
        ...HomepageWideImageHeroContent
        ...HomepageLandingPageImageHeroContent
      }
    }
    contentfulHomepageTextContent {
      text {
        raw
      }
      blocktype
    }
    contentfulLayoutHeader {
      navItems {
        id
        ... on ContentfulNavItemGroup {
          id
          name
          navItems {
            text
            href
          }
        }
        ... on ContentfulNavItem {
          id
          text
          href
        }
      }
    }
  }
`

const index = ({ data }) => (
  <Layout
    navChild={<Nav imageSrc={altoonaLogo} navData={data} />}
    mainChild={<PageContent data={data} imageSrc={beaverStadium} />}
    footerChild={<NewsFooter />}
  ></Layout>
)

export default index
