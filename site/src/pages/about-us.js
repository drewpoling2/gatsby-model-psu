/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import Layout from "gatsby-theme-theme-ui-psu/src/components/Layout/Layout"
import { Nav } from "gatsby-theme-theme-ui-psu/src/components/Nav/Nav"
import { NewsFooter } from "gatsby-theme-theme-ui-psu/src/components/CustomFooter/NewsFooter"
import altoonaLogo from "../../assets/logo.png"
import beaverStadium from "../../assets/beaver-stadium-fireworks_0.jpeg"
import { graphql } from "gatsby"
import { FullWidthImageHero } from "gatsby-theme-theme-ui-psu/src/components/FullWidthImageHero/FullWidthImageHero"

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
    mainChild={
      <Container>
        <FullWidthImageHero
          headingText={"About Us"}
          image={beaverStadium}
          subTitle={"Featured"}
        />
        <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h2>
        <p sx={{ fontSize: 3, pb: 5 }}>
          The Office of Licensing Programs partners with the Collegiate
          Licensing Company (CLC) to administer the University's licensing
          program. The nation's leading collegiate licensing and marketing
          representative, CLC assists collegiate licensors in protecting and
          controlling the use of their logos through trademark licensing. CLC
          processes licensing applications, collects royalties, enforces
          trademarks, and pursues new marketing opportunities on behalf of the
          University. Penn State is a member of the International Collegiate
          Licensing Association (ICLA). The University is also affiliated with
          the Fair Labor Association (FLA) and the Worker Rights Consortium
          (WRC).
        </p>
      </Container>
    }
    footerChild={<NewsFooter />}
  ></Layout>
)

export default index
