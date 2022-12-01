/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import { Button } from '../Button/Button';
import theme from '../../gatsby-plugin-theme-ui';
import { graphql } from 'gatsby';
export const WideImageHero = ({
  headingText,
  imageSrc,
  subTitle = 'feature',
}) => {
  return (
    <Container>
      <div className="w-full" sx={{ pb: 4 }}>
        <div className="flex-col">
          <div
            className="flex-row w-full justify-end"
            sx={{
              backgroundImage: () =>
                `linear-gradient(to bottom, ${theme.colors.paSky},  ${theme.colors.beaverBlue})`,
              height: '604px',
              '@media screen and (max-width: 44em)': {
                flexDirection: 'column',
                height: '750px',
              },
              '@media screen and (min-width: 44em)': { position: 'relative' },
            }}
          >
            <div
              className="bg-cover h-full bg-no-repeat"
              sx={{
                backgroundImage: `url(${imageSrc})`,
                '@media screen and (min-width: 44em)': {
                  position: 'absolute',
                  width: '57%',
                },
                zIndex: 0,
              }}
              alt={`${imageSrc}`}
            ></div>
            <div
              className="flex-col h-full justify-center"
              sx={{
                '@media screen and (max-width: 44em)': { px: 4, pb: 4 },
                pl: 5,
                pr: 7,
              }}
            >
              <h5
                className="uppercase"
                sx={{
                  mb: 3,
                  zIndex: 1,
                  letterSpacing: 0.5,
                  fontSize: 'lg',
                  color: 'paLinkLight',
                }}
              >
                {subTitle}
              </h5>
              <div
                sx={{
                  zIndex: 1,
                  mb: 3,
                  borderBottom: `1px solid ${theme.colors.whiteout}`,
                  width: '3.5%',
                }}
              ></div>
              <h1
                className="italic"
                sx={{
                  mt: 3,
                  mb: 3,
                  zIndex: 1,
                  lineHeight: '70px',
                  letterSpacing: '.35px',
                  fontSize: '10xl',
                  color: 'whiteout',
                }}
              >
                {headingText}
              </h1>
            </div>
          </div>
        </div>
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
