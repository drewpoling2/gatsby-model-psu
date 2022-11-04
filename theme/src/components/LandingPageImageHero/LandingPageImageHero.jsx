/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button } from '../Button/Button';
import { Stack } from '../Stack/Stack';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const LandingPageImageHero = ({
  paragraphText,
  headingText,
  imageSrc,
  subTitle = 'featured',
}) => {
  return (
    <div sx={{ width: 4, pb: 4 }}>
      <Stack variant="col">
        <div
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
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
            <h5
              sx={{
                mb: 3,
                letterSpacing: 0.5,
                fontSize: 11,
                color: 'lightBluePS',
                textTransform: 'uppercase',
              }}
            >
              {subTitle}
            </h5>
            <div
              sx={{ mb: 3, borderBottom: '1px solid white', width: '3.5%' }}
            ></div>
            <h1
              sx={{
                mt: 3,
                mb: 3,
                fontSize: 12,
                color: 'whitePS',
                fontStyle: 'italic',
              }}
            >
              {headingText}
            </h1>

            <p
              sx={{
                variant: 'text.copyP',
                fontSize: 9,
                color: 'whitePS',
                pb: 4,
                m: 0,
              }}
            >
              {paragraphText}
            </p>
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
