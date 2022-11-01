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
          backgroundImage: `url(${data.cardImage.file.url})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        altText={'Psu Altoona Logo'}
        onClick={() => console.log('Logo')}
      >
        <h2 sx={{ color: 'whitePS', textTransform: 'uppercase' }}>
          {data.cardTitle}
        </h2>
      </div>
      <div
        sx={{
          py: 3,
        }}
      >
        <Styled.p>
          {documentToReactComponents(JSON.parse(data.cardDescription.raw))}
        </Styled.p>
        <Styled.h4
          sx={{
            color: 'mediumBluePS',
            cursor: 'pointer',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          <Link to={`/${data.slug}`}>{data.cardTitle} &gt;</Link>
        </Styled.h4>
      </div>
    </div>
  );
};
