/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link } from 'gatsby';

export const Card = ({ item, index }) => {
  return (
    <div
      className="flex-col"
      sx={{
        width: '305px',
      }}
    >
      <div
        className="flex items-center justfiy-center pointer bg-no-repeat bg-cover bg-center"
        sx={{
          height: '260px',
        }}
        style={{
          backgroundImage: `url(${item.image.gatsbyImageData.images.fallback.src})`,
        }}
        alt={'Psu Altoona Logo'}
        onClick={() => console.log('Logo')}
      ></div>
      <div
        sx={{
          py: 3,
        }}
      >
        <h2 sx={{ my: 2, p: 0, lineHeight: '1.625rem' }}>
          <Link
            id={`quicklink-${index}`}
            sx={{
              fontFamily: 'roboto-slab-var',
              fontSize: 'xl',
              textDecoration: 'none',
            }}
            to={`${item.slug}`}
          >
            {item.cardTitle}
          </Link>
        </h2>
        <h4
          className="uppercase"
          sx={{
            color: 'oldCoaly',
            mt: '1.25rem',
            fontSize: '1.125rem',
            letterSpacing: '.54px',
            lineHeight: '1.25rem',
          }}
        >
          {item.cardDescription}
        </h4>
      </div>
    </div>
  );
};
