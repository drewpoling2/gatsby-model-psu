/** @jsx jsx */
import { jsx, Container, Styled } from "theme-ui"
import React from "react"
import { Image } from "gatsby-theme-theme-ui-example/src/components/Image/Image"
import { LandingPageImageHero } from "gatsby-theme-theme-ui-example/src/components/Hero/LandingPageImageHero"
import { QuickLinks } from "gatsby-theme-theme-ui-example/src/components/QuickLinks/QuickLinks"
import placeHolderImage from "../../assets/diversity-circle-block.jpeg"
import { Stack } from "gatsby-theme-theme-ui-example/src/components/Stack/Stack"
import { RecentPosts } from "gatsby-theme-theme-ui-example/src/components/RecentPosts/RecentPosts"

export const HomeMain = ({ data }) => {
  return (
    <>
      <Container>
        <div sx={{ pt: 0, pb: 5 }}>
          <Stack variant="row">
            <LandingPageImageHero
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
