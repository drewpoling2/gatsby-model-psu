/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import React from 'react';
import theme from '../../gatsby-plugin-theme-ui';
import { Stack } from '../Stack/Stack';
import { Image } from '../Image/Image';

export const Card = ({ item }) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #C0C0C0',
        width: '305px',
        borderRadius: 6,
        cursor: 'pointer',
        '&:hover': { boxShadow: '0 8px 16px 0 rgb(0 0 0 / 20%)' },
      }}
    >
      <img
        sx={{
          borderTopRightRadius: 6,
          borderTopLeftRadius: 6,
          height: '260px',
        }}
        altText={'Psu Altoona Logo'}
        onClick={() => console.log('Logo')}
        src={item.src}
      />
      <div
        sx={{
          p: 3,
          backgroundColor: 'whitePS',
          borderBottomRightRadius: 6,
          borderBottomLeftRadius: 6,
        }}
      >
        <Styled.h2>{item.heading}</Styled.h2>
        <Styled.p>{item.paragraph}</Styled.p>
      </div>
    </div>
  );
};
