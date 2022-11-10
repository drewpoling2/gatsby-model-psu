import React from "react"
import Link from "gatsby-theme-theme-ui-example/src/components/link/link"

const NotFoundPage = () => {
  // if (
  //   process.env.GATSBY_IS_PREVIEW === "true" ||
  //   process.env.NODE_ENV === "development"
  // ) {
  //   return <Preview404 />
  // }
  return (
    <>
      <section>
        <div>
          <div>
            <div>
              <h2>Oops! We can&apos;t find that.</h2>
              <b></b>
              <p style={{ paddingBottom: "2rem" }}>We recommend:</p>
              <ul
                style={{ paddingBottom: "1rem", margin: "0", paddingTop: "0" }}
              >
                <li style={{ marginBottom: "1.75rem", marginLeft: "2rem" }}>
                  Checking the url
                </li>
                <li style={{ marginBottom: "1.75rem", marginLeft: "2rem" }}>
                  Clicking on the back button and trying another link
                </li>
                <li style={{ marginBottom: "1.75rem", marginLeft: "2rem" }}>
                  Visiting our <Link href="/">home page</Link>
                </li>
                <li style={{ marginBottom: "1.75rem", marginLeft: "2rem" }}>
                  Searching our site
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFoundPage
