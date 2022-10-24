/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import React from 'react';
import theme from '../../gatsby-plugin-theme-ui';
import PropTypes from 'prop-types';
import { Stack } from '../Stack/Stack';

export const Posts = ({ item }) => {
  return (
    <div sx={{ display: 'flex', flexDirection: 'row', py: 2 }}>
      <div sx={{ pr: 3 }}>
        <Stack variant="col">
          <Styled.p sx={{ textTransform: 'uppercase', my: 0 }}>
            {item.month}
          </Styled.p>
          <h2
            sx={{ textTransform: 'uppercase', color: 'darkNavyBluePS', my: 0 }}
          >
            {item.day}
          </h2>
        </Stack>
      </div>
      <Styled.p
        sx={{
          my: 0,
          cursor: 'pointer',
          '&:hover': { textDecoration: 'underline' },
        }}
      >
        {item.description}
      </Styled.p>
    </div>
  );
};
