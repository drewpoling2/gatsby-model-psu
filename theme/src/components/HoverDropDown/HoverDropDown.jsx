/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import theme from '../../gatsby-plugin-theme-ui';
import PropTypes from 'prop-types';
import MenuItems from './MenuItems';

export const HoverDropDown = ({ title, navData }) => {
  return (
    <nav>
      <ul sx={{ variant: 'layout.row', mt: 2 }}>
        {navData.map((items, index) => {
          return <MenuItems items={items} key={index}></MenuItems>;
        })}
      </ul>
    </nav>
  );
};
