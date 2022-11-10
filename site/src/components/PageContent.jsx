/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { LandingPageImageHero } from "gatsby-theme-theme-ui-psu/src/components/LandingPageImageHero/LandingPageImageHero"
import { WideImageHero } from "gatsby-theme-theme-ui-psu/src/components/WideImageHero/WideImageHero"
import { Stack } from "gatsby-theme-theme-ui-psu/src/components/Stack/Stack"
import { QuickLinks } from "gatsby-theme-theme-ui-psu/src/components/QuickLinks/QuickLinks"
import { ParagraphSummary } from "gatsby-theme-theme-ui-psu/src/components/ParagraphSummary/ParagraphSummary"
import { TextContent } from "gatsby-theme-theme-ui-psu/src/components/TextContent/TextContent"

export const PageContent = ({ data }) => {
  const getFieldContentKey = (typeName, index) => `${typeName}-${index}`
  const components = data?.contentfulHomepage?.blocks?.map((content, i) => {
    const key = getFieldContentKey(content["blocktype"], i)
    switch (content["blocktype"]) {
      case "HomepageLandingPageImageHero": {
        return (
          <LandingPageImageHero
            key={key}
            headingText={content.heading}
            paragraphText={content.landingPageHeroImageText}
            imageSrc={content.image.gatsbyImageData.images.fallback.src}
            subTitle={content.subtitle}
          />
        )
      }
      case "HomepageWideImageHero": {
        return (
          <WideImageHero
            key={key}
            headingText={content.heading}
            imageSrc={content.image.gatsbyImageData.images.fallback.src}
            subTitle={content.subtitle}
          />
        )
      }
      case "HomepageQuickLinksCards": {
        return (
          <QuickLinks key={key} data={content} heading={"quick links //"} />
        )
      }
      case "HomepageParagraphSummary": {
        return (
          <ParagraphSummary
            paragraphSummaryAuthor={content.paragraphSummaryAuthor}
            paragraphSummaryText={content.paragraphSummaryText}
            paragraphSummarySubtitle={content.paragraphSummarySubtitle}
          />
        )
      }
      default: {
        return null
      }
    }
  })

  return (
    <Container>
      <div sx={{ pt: 0, pb: 5 }}>
        <Stack variant="col">{components}</Stack>
        <TextContent data={data}></TextContent>
      </div>
    </Container>
  )
}
