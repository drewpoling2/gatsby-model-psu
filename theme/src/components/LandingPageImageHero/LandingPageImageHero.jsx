/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import { Button } from '../Button/Button';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import theme from '../../gatsby-plugin-theme-ui';
export const LandingPageImageHero = ({
  paragraphText,
  headingText,
  imageSrc,
}) => {
  return (
    <div sx={{ pb: 4 }}>
      <div className="flex-col">
        <div
          className="relative w-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${imageSrc})`,
          }}
          alt={`${imageSrc}`}
        >
          <div className="flex-col h-full content-center">
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
                    fontSize: '10xl',
                    color: 'beaverBlue',
                  }}
                >
                  {headingText}
                </h1>
                <div
                  sx={{
                    mb: 3,
                    borderBottom: `5px solid ${theme.colors.paSky}`,
                    width: '10.5%',
                  }}
                ></div>

                <p
                  sx={{
                    variant: 'text.copyP',
                    fontSize: '4xl',
                    color: 'oldCoaly',
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
      </div>
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
