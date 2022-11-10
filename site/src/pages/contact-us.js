/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import Layout from "gatsby-theme-theme-ui-psu/src/components/Layout/Layout"
import { Nav } from "gatsby-theme-theme-ui-psu/src/components/Nav/Nav"
import { PageContent } from "../components/PageContent"
import { NewsFooter } from "gatsby-theme-theme-ui-psu/src/components/CustomFooter/NewsFooter"
import altoonaLogo from "../../assets/logo.png"
import { graphql } from "gatsby"
import { Form } from "gatsby-theme-theme-ui-psu/src/components/Form/Form"
import React from "react"
import { TopicPageHeader } from "gatsby-theme-theme-ui-psu/src/components/TopicPageHeader/TopicPageHeader"
import { QuickLinks } from "gatsby-theme-theme-ui-psu/src/components/QuickLinks/QuickLinks"

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
          }
        }
        ... on ContentfulNavItem {
          id
          text
        }
      }
    }
  }
`

//need to hook this form up to contentful
const index = ({ data }) => (
  <Layout
    navChild={<Nav imageSrc={altoonaLogo} navData={data} />}
    mainChild={
      <Container>
        <div sx={{ py: 10 }}>
          <TopicPageHeader
            topicPageHeaderTitle={"Contact us"}
            topicPageHeaderText={
              "We'd love to hear from you. Use our contact form to send us your thoughts, questions, or comments."
            }
          />
          <Form
            fieldTextOne={"First & Last Name"}
            fieldTextTwo={"Email*"}
            fieldTextThree={"Message"}
          />
        </div>
      </Container>
    }
    footerChild={<NewsFooter />}
  ></Layout>
)

export default index
