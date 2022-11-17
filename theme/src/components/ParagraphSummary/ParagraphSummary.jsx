/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import React from 'react';
import { Stack } from '../Stack/Stack';
import { graphql } from 'gatsby';

export const ParagraphSummary = ({
  paragraphSummaryAuthor,
  paragraphSummaryText,
  paragraphSummarySubtitle,
}) => {
  return (
    <Container>
      <div
        sx={{
          py: 4,
          display: 'flex',
          flexDirection: 'row',
          '@media screen and (max-width: 64em)': {
            px: 4,
          },
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            '@media screen and (min-width: 64em)': {
              width: '55%',
            },
          }}
        >
          <h6
            sx={{
              pt: 5,
              pr: 3,
              m: 0,
              whiteSpace: 'nowrap',
              fontSize: 2,
              color: 'bluishBlackPS',
              '@media screen and (max-width: 64em)': {
                display: 'none',
              },
            }}
          >
            {paragraphSummaryAuthor}
          </h6>
          <h5
            sx={{
              textTransform: 'uppercase',
              color: 'mediumGrayPS',
              m: 0,
              fontSize: 2,
              '@media screen and (max-width: 64em)': {
                display: 'none',
              },
            }}
          >
            {paragraphSummarySubtitle}
          </h5>
        </Flex>
        <div sx={{ mb: 3, borderLeft: '4px solid #314D64' }}></div>
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
    </Container>
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
