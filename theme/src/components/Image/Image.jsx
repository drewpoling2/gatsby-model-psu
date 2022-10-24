/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import React from 'react';

export const Image = ({ width, height, onClick, altText, src }) => {
  return (
    <div onClick={onClick} sx={{ cursor: 'pointer' }}>
      <img style={{ width: width, height: height }} src={src} alt={altText} />
    </div>
  );
};
