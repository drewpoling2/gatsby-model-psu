/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Card } from '@bit/card';
export const QuickLinks = ({ heading, data, index }) => {
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
        <Card data={data} index={index} key={index} />
      </div>
    </div>
  );
};
