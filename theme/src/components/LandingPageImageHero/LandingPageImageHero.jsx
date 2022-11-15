/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import { Button } from '../Button/Button';
import { Stack } from '../Stack/Stack';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const LandingPageImageHero = ({
  paragraphText,
  headingText,
  imageSrc,
}) => {
  return (
    <div sx={{ pb: 4 }}>
      <Stack variant="col">
        <div
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
            position: 'relative',
          }}
          sx={{ height: '640px' }}
          altText={`${imageSrc}`}
        >
          <div
            sx={{
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column',
              px: 20,
              bottom: 5,
            }}
          >
            <Container>
              <div sx={{ mx: '300px' }}>
                <h1
                  sx={{
                    mt: 3,
                    mb: 5,
                    fontSize: 13,
                    color: 'bluePS',
                  }}
                >
                  {headingText}
                </h1>
                <div
                  sx={{
                    mb: 3,
                    borderBottom: '5px solid #009CDE',
                    width: '10.5%',
                  }}
                ></div>

                <p
                  sx={{
                    variant: 'text.copyP',
                    fontSize: 14,
                    color: 'paragraphGrayPS',
                    pb: 4,
                    pt: 3,
                    m: 0,
                  }}
                >
                  {paragraphText}
                </p>
              </div>
            </Container>
          </div>
        </div>
      </Stack>
    </div>
  );
};
export const query = graphql`
  fragment HomepageLandingPageImageHeroContent on HomepageLandingPageImageHero {
    id
    heading
    landingPageHeroImageText
    subtitle
    blocktype
    image {
      id
      gatsbyImageData
      alt
    }
  }
`;
