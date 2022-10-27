/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import React from 'react';
import theme from '../../gatsby-plugin-theme-ui';
import PropTypes from 'prop-types';
import { Stack } from '../Stack/Stack';
import { Card } from '../Card/Card';
import { Link } from 'gatsby';
export const QuickLinks = ({ heading, data }) => {
  return (
    <div sx={{ py: 5 }}>
      <h2 sx={{ color: 'darkNavyBluePS', textTransform: 'uppercase', mt: 0 }}>
        {heading}
      </h2>
      <div
        sx={{
          mt: 4,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {data &&
          data.quickLinks.edges.map((item, index) => (
            <>
              <Card item={item} index={index} key={index} />
            </>
          ))}
      </div>
    </div>
  );
};
