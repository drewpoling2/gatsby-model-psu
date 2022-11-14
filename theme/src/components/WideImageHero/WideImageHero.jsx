/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button } from '../Button/Button';
import { Stack } from '../Stack/Stack';
import theme from '../../gatsby-plugin-theme-ui';
import { graphql } from 'gatsby';
export const WideImageHero = ({
  headingText,
  imageSrc,
  subTitle = 'featured',
}) => {
  return (
    <div sx={{ width: 4, pb: 4 }}>
      <Stack variant="col">
        <div
          sx={{
            backgroundImage: () =>
              `linear-gradient(to bottom, ${theme.colors.robinsEggBluePS},  ${theme.colors.bluePS})`,
            width: '100%',
            height: '604px',
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'relative',
          }}
        >
          <div
            style={{
              backgroundImage: `url(${imageSrc})`,
              backgroundRepeat: 'no-repeat',
              position: 'absolute',
              backgroundSize: 'cover',
              width: '57%',
              height: '100%',
              zIndex: 0,
            }}
            altText={`${imageSrc}`}
          ></div>

          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              pl: 5,
              pr: 7,
              height: '100%',
              justifyContent: 'center',
            }}
          >
            <h5
              sx={{
                mb: 3,
                zIndex: 1,
                letterSpacing: 0.5,
                fontSize: 11,
                color: 'lightBluePS',
                textTransform: 'uppercase',
              }}
            >
              {subTitle}
            </h5>
            <div
              sx={{
                zIndex: 1,
                mb: 3,
                borderBottom: '1px solid white',
                width: '3.5%',
              }}
            ></div>
            <h1
              sx={{
                mt: 3,
                mb: 3,
                zIndex: 1,
                lineHeight: '70px',
                letterSpacing: '.35px',
                fontSize: 13,
                color: 'whitePS',
                fontStyle: 'italic',
              }}
            >
              {headingText}
            </h1>
          </div>
        </div>
      </Stack>
    </div>
  );
};

export const query = graphql`
  fragment HomepageWideImageHeroContent on HomepageWideImageHero {
    id
    heading
    Subtitle
    image {
      id
      gatsbyImageData
      alt
    }
  }
`;
