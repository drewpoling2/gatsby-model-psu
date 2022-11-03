/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import React from "react"
import { LandingPageImageHero } from "gatsby-theme-theme-ui-example/src/components/LandingPageImageHero/LandingPageImageHero"
import { WideImageHero } from "gatsby-theme-theme-ui-example/src/components/WideImageHero/WideImageHero"
import { Stack } from "gatsby-theme-theme-ui-example/src/components/Stack/Stack"
import { QuickLinks } from "gatsby-theme-theme-ui-example/src/components/QuickLinks/QuickLinks"
import { ParagraphSummary } from "gatsby-theme-theme-ui-example/src/components/ParagraphSummary/ParagraphSummary"

export const HomeMainTest = ({ data }) => {
  const getFieldContentKey = (typeName, index) => `${typeName}-${index}`
  const components = data?.contentfulHomepage?.content?.map((content, i) => {
    const key = getFieldContentKey(content["__typename"], i)
    switch (content["__typename"]) {
      case "ContentfulLandingPageImageHero": {
        return (
          <>
            <LandingPageImageHero
              key={key}
              headingText={content.heading}
              paragraphText={content.LandingPageHeroImageText}
              imageSrc={content.image.file.url}
              subTitle={content.subtitle}
            />
          </>
        )
      }
      case "ContentfulWideImageHero": {
        return (
          <WideImageHero
            key={key}
            headingText={content.heading}
            imageSrc={content.image.file.url}
            subTitle={content.subtitle}
          />
        )
      }
      case "ContentfulQuickLinksCards": {
        return (
          <QuickLinks key={key} data={content} heading={"quick links //"} />
        )
      }
      case "ContentfulParagraphSummary": {
        return (
          <>
            <ParagraphSummary
              paragraphSummaryAuthor={content.paragraphSummaryAuthor}
              paragraphSummaryText={
                content.paragraphSummaryText.paragraphSummaryText
              }
              paragraphSummarySubtitle={content.paragraphSummarySubtitle}
            />
          </>
        )
      }
    }
  })

  return (
    <>
      <Container>
        <div sx={{ pt: 0, pb: 5 }}>
          <Stack variant="col">{components}</Stack>
        </div>
      </Container>
    </>
  )
}
