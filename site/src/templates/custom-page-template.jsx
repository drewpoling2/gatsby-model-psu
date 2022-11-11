/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { graphql } from "gatsby"
import altoonaLogo from "../../assets/logo.png"
import Layout from "gatsby-theme-theme-ui-psu/src/components/Layout/Layout"
import { Nav } from "gatsby-theme-theme-ui-psu/src/components/Nav/Nav"
import { NewsFooter } from "gatsby-theme-theme-ui-psu/src/components/CustomFooter/NewsFooter"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { TestContent } from "../components/TestContent"
import { BLOCKS } from "@contentful/rich-text-types"

export const query = graphql`
  query($slug: String!) {
    customPage: contentfulCustomPage(slug: { eq: $slug }) {
      title
      blocks: content {
        id
        blocktype
        ...HomepageQuickLinksContent
        ...HomepageParagraphSummaryContent
        ...HomepageWideImageHeroContent
        ...HomepageLandingPageImageHeroContent
      }
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

const MainQuickLinksContent = ({ data: { customPage } }) => (
  <Container>
    {console.log(customPage)}
    <h1>{customPage.title} Page</h1>
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
const CustomPageTemplatePage = ({ data }) => (
  <Layout
    navChild={<Nav imageSrc={altoonaLogo} navData={data} />}
    mainChild={<TestContent data={data} />}
    footerChild={<NewsFooter />}
  ></Layout>
)
export default CustomPageTemplatePage
