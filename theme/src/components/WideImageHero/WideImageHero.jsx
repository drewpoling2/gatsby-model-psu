/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import { Button } from '../Button/Button';
import { Stack } from '../Stack/Stack';
import theme from '../../gatsby-plugin-theme-ui';
import { graphql } from 'gatsby';
export const WideImageHero = ({
  headingText,
  imageSrc,
  subTitle = 'feature',
}) => {
  return (
    <Container>
      <div sx={{ width: 4, pb: 4 }}>
        <Flex sx={{ flexDirection: 'column' }}>
          <div
            sx={{
              backgroundImage: () =>
                `linear-gradient(to bottom, ${theme.colors.robinsEggBluePS},  ${theme.colors.bluePS})`,
              width: '100%',
              height: '604px',
              display: 'flex',
              '@media screen and (max-width: 44em)': {
                flexDirection: 'column',
                height: '750px',
              },
              justifyContent: 'flex-end',
              '@media screen and (min-width: 44em)': { position: 'relative' },
            }}
          >
            <div
              sx={{
                backgroundImage: `url(${imageSrc})`,
                backgroundRepeat: 'no-repeat',
                '@media screen and (min-width: 44em)': {
                  position: 'absolute',
                  width: '57%',
                },
                backgroundSize: 'cover',
                height: '100%',
                zIndex: 0,
              }}
              alt={`${imageSrc}`}
            ></div>
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                '@media screen and (max-width: 44em)': { px: 4, pb: 4 },
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
                  fontSize: 3,
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
        </Flex>
      </div>
    </Container>
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
