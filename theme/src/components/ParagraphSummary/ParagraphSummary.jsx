/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Stack } from '../Stack/Stack';
import { graphql } from 'gatsby';

export const ParagraphSummary = ({
  paragraphSummaryAuthor,
  paragraphSummaryText,
  paragraphSummarySubtitle,
}) => {
  return (
    <div sx={{ py: 4, display: 'flex', flexDirection: 'row' }}>
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
          {paragraphSummaryAuthor}
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
          {paragraphSummarySubtitle}
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
        {paragraphSummaryText}
      </p>
    </div>
  );
};

export const query = graphql`
  fragment HomepageParagraphSummaryContent on HomepageParagraphSummary {
    paragraphSummarySubtitle
    paragraphSummaryAuthor
    paragraphSummaryText
    blocktype
  }
`;
