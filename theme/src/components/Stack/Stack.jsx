/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import React from 'react';
import theme from '../../gatsby-plugin-theme-ui';

const VariantRow = {
  display: 'flex',
  flexDirection: 'row',
};

const VariantColumn = {
  display: 'flex',
  flexDirection: 'column',
};

const variantStacks = {
  row: VariantRow,
  col: VariantColumn,
};

export const Stack = ({ variant = 'row', children }) => {
  const Variant = variantStacks[variant];
  return <div sx={Variant}>{children}</div>;
};
