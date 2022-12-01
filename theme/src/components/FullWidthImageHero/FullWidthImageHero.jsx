/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button } from '../Button/Button';
import theme from '../../gatsby-plugin-theme-ui';
import { graphql } from 'gatsby';
export const FullWidthImageHero = ({
  headingText,
  imageSrc,
  subTitle = 'featured',
}) => {
  return (
    <div className="w-full" sx={{ pb: 4 }}>
      <div className="flex-col">
        <div
          className="flex justify-center w-full"
          sx={{
            backgroundImage: () =>
              `linear-gradient(to bottom, ${theme.colors.paSky},  ${theme.colors.beaverBlue})`,
            pb: 4,
            height: '504px',
          }}
        >
          <div
            className="absolute bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${imageSrc})`,
              zIndex: 0,
            }}
            alt={`${imageSrc}`}
          ></div>
          <div
            className="flex-col w-full h-full justify-end"
            sx={{
              pl: 5,
              pr: 8,
            }}
          >
            <h5
              className="uppercase"
              sx={{
                mb: 3,
                zIndex: 1,
                letterSpacing: 0.5,
                fontSize: '1.125rem',
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
