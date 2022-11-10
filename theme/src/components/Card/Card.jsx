/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link } from 'gatsby';

export const Card = ({ data }) => {
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
          backgroundImage: `url(${data.image.gatsbyImageData.images.fallback.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        altText={'Psu Altoona Logo'}
        onClick={() => console.log('Logo')}
      ></div>
      <div
        sx={{
          py: 3,
        }}
      >
        <Styled.h2 sx={{ p: 0, lineHeight: '26px' }}>
          <Link to={`/${data.slug}`}>{data.cardTitle}</Link>
        </Styled.h2>
        <Styled.h4
          sx={{
            color: '#444444',
            mt: '20px',
            letterSpacing: '.48px',
            lineHeight: '22px',
            textTransform: 'uppercase',
          }}
        >
          {data.cardDescription}
        </Styled.h4>
      </div>
    </div>
  );
};
