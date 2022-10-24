/** @jsx jsx */
import { jsx, Container, Styled } from "theme-ui"
import React from "react"
import { Image } from "gatsby-theme-theme-ui-example/src/components/Image/Image"
import { ContentBlock } from "gatsby-theme-theme-ui-example/src/components/ContentBlock/ContentBlock"
import { QuickLinks } from "gatsby-theme-theme-ui-example/src/components/QuickLinks/QuickLinks"
import placeHolderImage from "../../assets/resized-bendapudi-abington-cheerleaders_0.jpeg"
import { Stack } from "gatsby-theme-theme-ui-example/src/components/Stack/Stack"
import { RecentPosts } from "gatsby-theme-theme-ui-example/src/components/RecentPosts/RecentPosts"

const contentBlockData = {
  heading: "About Licensing //",
  paragraph:
    "The Office of Licensing Programs partners with the Collegiate Licensing Company (CLC) to administer the University's licensing program. The nation's leading collegiate licensing and marketing representative, CLC assists collegiate licensors in protecting and controlling the use of their logos through trademark licensing.",
}
const quickLinkData = [
  {
    src: placeHolderImage,
    heading: "Vendor Application",
    paragraph:
      "Penn State has established several initiatives to address racism, bias.",
  },
  {
    src: placeHolderImage,
    heading: "IMG College Licensing",
    paragraph:
      "Penn State has established several initiatives to address racism, bias.",
  },
  {
    src: placeHolderImage,
    heading: "Identity Standards",
    paragraph:
      "Penn State has established several initiatives to address racism, bias.",
  },
  {
    src: placeHolderImage,
    heading: "Penn State Athletics",
    paragraph:
      "Penn State has established several initiatives to address racism, bias.",
  },
]

const postData = [
  {
    month: "Oct",
    day: "23",
    description:
      "Exciting new updates to Penn State's visual identity standards that are happening.",
  },
  {
    month: "oct",
    day: "24",
    description:
      "Exciting new updates to Penn State's visual identity standards that are happening.",
  },
  {
    month: "oct",
    day: "25",
    description:
      "Exciting new updates to Penn State's visual identity standards that are happening.",
  },
  {
    month: "oct",
    day: "27",
    description:
      "Exciting new updates to Penn State's visual identity standards that are happening.",
  },
  {
    month: "oct",
    day: "27",
    description:
      "Exciting new updates to Penn State's visual identity standards that are happening.",
  },
  {
    month: "oct",
    day: "27",
    description:
      "Exciting new updates to Penn State's visual identity standards that are happening.",
  },
]

export const HomeMain = ({ imageSrc }) => {
  return (
    <>
      <Container>
        <div sx={{ pt: 5, pb: 5 }}>
          <Stack variant="row">
            <ContentBlock
              headingText={contentBlockData.heading}
              paragraphText={contentBlockData.paragraph}
              imageSrc={imageSrc}
            />
            <RecentPosts
              allPostsLink={"View all >"}
              heading={"Latest"}
              postData={postData}
            />
          </Stack>
        </div>
      </Container>
      <div sx={{ backgroundColor: "lightGrayPS", width: 4 }}>
        <Container>
          <QuickLinks
            heading={"quick links //"}
            quickLinkData={quickLinkData}
          />
        </Container>
      </div>
    </>
  )
}
