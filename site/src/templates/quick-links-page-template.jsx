import React from "react"
/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { graphql } from "gatsby"
import altoonaLogo from "../../assets/logo.png"
import Layout from "gatsby-theme-theme-ui-example/src/components/Layout/Layout"
import { Nav } from "gatsby-theme-theme-ui-example/src/components/Nav/Nav"
import { NewsFooter } from "gatsby-theme-theme-ui-example/src/components/CustomFooter/NewsFooter"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import { quickLinksTemplate as TemplateComponent } from "gatsby-theme-theme-ui-example/src/templates/quickLinksTemplate"
export const query = graphql`
  query($slug: String!) {
    quickLink: contentfulHomepageQuickLinksCards(slug: { eq: $slug }) {
      cardTitle
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

const MainQuickLinksContent = ({ data: { quickLink } }) => (
  <Container>
    <h1>{quickLink.cardTitle} Page</h1>
    {/* {console.log(quickLink.pageContent)}
    <div sx={{ py: 4 }}>
      {documentToReactComponents(
        JSON.parse(quickLink.pageContent.raw, {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
              <img src={node.data.target.fields.file["en-US"].url} />
            ),
          },
        })
      )}
    </div> */}
    {/* <h1>{quickLink.title}</h1>
    <p>
      Guest: {lesson.author.name} · <a href={lesson.author.twitter}>Twitter</a>
    </p>
    <div>
      {documentToReactComponents(lesson.description.json, {
        renderNode: {
          [BLOCKS.HEADING_2]: (_node, children) => (
            <h2 style={{ color: "red" }}>{children}</h2>
          ),
          [BLOCKS.EMBEDDED_ASSET]: node => (
            <img
              src={`${node.data.target.fields.file["en-US"].url}?w=300&q=90`}
              alt={node.data.target.fields.title["en-US"]}
            />
          ),
        },
      })}
    </div> */}
  </Container>
)
const QuickLinksTemplatePage = ({ data }) => (
  <Layout
    navChild={<Nav imageSrc={altoonaLogo} navData={data} />}
    mainChild={<MainQuickLinksContent data={data} />}
    footerChild={<NewsFooter />}
  ></Layout>
)
export default QuickLinksTemplatePage
