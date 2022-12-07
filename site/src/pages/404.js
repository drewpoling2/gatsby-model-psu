import React from "react"
/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import logo from "../../assets/psu-mark.png"
import Layout from "gatsby-theme-theme-ui-psu/src/components/Layout/Layout"
import Link from "gatsby-theme-theme-ui-psu/src/components/link/link"
import { Nav } from "gatsby-theme-theme-ui-psu/src/components/Nav/Nav"
import { CustomFooter } from "gatsby-theme-theme-ui-psu/src/components/CustomFooter/CustomFooter"
import { graphql } from "gatsby"

export const query = graphql`
  {
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

const NotFoundPage = ({ data }) => {
  return (
    <Layout
      navChild={<Nav imageSrc={logo} navData={data} />}
      mainChild={
        <Container>
          <>
            <section>
              <div>
                <div>
                  <div>
                    <h2>Oops! We can&apos;t find that.</h2>
                    <b></b>
                    <p style={{ paddingBottom: "2rem" }}>We recommend:</p>
                    <ul
                      style={{
                        paddingBottom: "1rem",
                        margin: "0",
                        paddingTop: "0",
                      }}
                    >
                      <li
                        style={{ marginBottom: "1.75rem", marginLeft: "2rem" }}
                      >
                        Checking the url
                      </li>
                      <li
                        style={{ marginBottom: "1.75rem", marginLeft: "2rem" }}
                      >
                        Clicking on the back button and trying another link
                      </li>
                      <li
                        style={{ marginBottom: "1.75rem", marginLeft: "2rem" }}
                      >
                        Visiting our <Link href="/">home page</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </>
        </Container>
      }
      footerChild={<CustomFooter />}
    ></Layout>
  )
}

export default NotFoundPage
