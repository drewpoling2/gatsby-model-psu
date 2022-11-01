/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Stack } from '../Stack/Stack';

export const ParagraphSummary = ({ props }) => {
  return (
    <div sx={{ display: 'flex', flexDirection: 'row' }}>
      <Stack variant="col">
        <h6
          sx={{
            pt: 5,
            pr: 3,
            m: 0,
            whiteSpace: 'nowrap',
            fontSize: 2,
            color: 'bluishBlackPS',
          }}
        >
          By Afanasy Ordin-Nashchokin
        </h6>
        <h5
          sx={{
            textTransform: 'uppercase',
            color: 'mediumGrayPS',
            m: 0,
            whiteSpace: 'nowrap',
            fontSize: 2,
          }}
        >
          November 1, 2022
        </h5>
      </Stack>
      <div sx={{ mb: 3, borderLeft: '4px solid #314D64', width: '3.5%' }}></div>{' '}
      <p
        sx={{
          variant: 'text.copyP',
          fontSize: 14,
          color: 'blueGrayPS',
          pt: 3,
          pb: 4,
          pl: 3,
          m: 0,
          fontStyle: 'italic',
        }}
      >
        Within the past decade, beekeepers across the globe have observed
        massive declines in managed honey bee populations. Similar declines have
        been observed in populations of wild bees and other pollinators.
        Understanding what is driving these declines is a vital question for
        researchers, beekeepers, growers, and the public. Several factors are
        being investigated, including habitat loss, climate change, disease, and
        pesticide use.
      </p>
    </div>
  );
};
