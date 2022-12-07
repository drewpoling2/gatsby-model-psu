/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import Layout from "gatsby-theme-theme-ui-psu/src/components/Layout/Layout"
import { Nav } from "gatsby-theme-theme-ui-psu/src/components/Nav/Nav"
import { CustomFooter } from "gatsby-theme-theme-ui-psu/src/components/CustomFooter/CustomFooter"
import logo from "../../assets/psu-mark.png"
import { graphql } from "gatsby"
import { Form } from "gatsby-theme-theme-ui-psu/src/components/Form/Form"
import React from "react"
import { TopicPageHeader } from "gatsby-theme-theme-ui-psu/src/components/TopicPageHeader/TopicPageHeader"

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

//need to hook this form up to contentful
const contactUsPage = ({ data }) => (
  <Layout
    navChild={<Nav imageSrc={logo} navData={data} />}
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
    footerChild={<CustomFooter />}
  ></Layout>
)

export default contactUsPage
