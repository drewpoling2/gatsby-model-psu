/** @jsx jsx */
import { jsx, Container, Styled } from "theme-ui"
import React from "react"
import { Image } from "gatsby-theme-theme-ui-example/src/components/Image/Image"
import { ContentBlock } from "gatsby-theme-theme-ui-example/src/components/ContentBlock/ContentBlock"
import { QuickLinks } from "gatsby-theme-theme-ui-example/src/components/QuickLinks/QuickLinks"
import placeHolderImage from "../../assets/diversity-circle-block.jpeg"
import { Stack } from "gatsby-theme-theme-ui-example/src/components/Stack/Stack"
import { RecentPosts } from "gatsby-theme-theme-ui-example/src/components/RecentPosts/RecentPosts"

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

export const HomeMain = ({ data }) => {
  return (
    <>
      <Container>
        <div sx={{ pt: 0, pb: 5 }}>
          <Stack variant="row">
            {console.log(data)}
            {console.log(data.hero.edges[0].node.heading)}
            <ContentBlock
              headingText={data.hero.edges[0].node.heading}
              paragraphText={data.hero.edges[0].node.text}
              imageSrc={data.hero.edges[0].node.image.file.url}
            />
          </Stack>
        </div>
      </Container>
      <div sx={{ backgroundColor: "lightGrayPS", width: 4 }}>
        <Container>
          <QuickLinks data={data} heading={"quick links //"} />
        </Container>
      </div>
    </>
  )
}
