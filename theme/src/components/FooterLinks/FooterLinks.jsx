/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import React from 'react';
import theme from '../../gatsby-plugin-theme-ui';
import { Stack } from '@bit/stack';

export const FooterLinks = ({ footerLinkData }) => {
  return (
    <Stack variant="col">
      <h3 sx={{ my: 2, textTransform: 'uppercase' }}>Heading</h3>
      {footerLinkData &&
        footerLinkData.map((item, index) => (
          <a
            sx={{
              my: 2,
              color: 'lightBluePS',
              fontWeight: 700,
              '&:hover': { textDecoration: 'underline' },
            }}
            index={index}
            key={index}
          >
            {item.linkName}
          </a>
        ))}
    </Stack>
  );
};
