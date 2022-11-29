/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link } from 'gatsby';

export const Card = ({ item, index }) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '305px',
      }}
    >
      <div
        sx={{
          height: '260px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        style={{
          backgroundImage: `url(${item.image.gatsbyImageData.images.fallback.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        alt={'Psu Altoona Logo'}
        onClick={() => console.log('Logo')}
      ></div>
      <div
        sx={{
          py: 3,
        }}
      >
        <Styled.h2 sx={{ p: 0, lineHeight: '26px' }}>
          <Link
            id={`quicklink-${index}`}
            sx={{
              fontFamily: 'roboto-slab-var',
              fontSize: '22px',
              textDecoration: 'none',
            }}
            to={`${item.slug}`}
          >
            {item.cardTitle}
          </Link>
        </Styled.h2>
        <Styled.h4
          sx={{
            color: '#444444',
            mt: '20px',
            fontSize: '18px',
            letterSpacing: '.54px',
            lineHeight: '22px',
            textTransform: 'uppercase',
          }}
        >
          {item.cardDescription}
        </Styled.h4>
      </div>
    </div>
  );
};
