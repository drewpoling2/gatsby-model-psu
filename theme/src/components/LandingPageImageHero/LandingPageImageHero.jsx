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
          alt={`${imageSrc}`}
        >
          <div
            sx={{
              display: 'flex',
              height: '100%',
              alignContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Container
              sx={{
                height: '100%',
                alignItems: 'center',
                display: 'flex',
                py: 5,
                '@media screen and (max-width: 64em)': {
                  py: '2rem',
                },
              }}
            >
              <div
                sx={{
                  mx: '14.375rem',
                  '@media screen and (max-width: 64em)': {
                    mx: 4,
                  },
                }}
              >
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
