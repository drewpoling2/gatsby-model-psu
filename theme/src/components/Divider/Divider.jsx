/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';

export const Divider = ({ props }) => {
  return (
    <div
      style={{
        height: '70px',
      }}
      sx={{ borderLeft: 'dotted' }}
    ></div>
  );
};
