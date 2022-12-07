/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import React from 'react';
import { graphql } from 'gatsby';
import theme from '../../gatsby-plugin-theme-ui';

export const ParagraphSummary = ({
  paragraphSummaryAuthor,
  paragraphSummaryText,
  paragraphSummarySubtitle,
}) => {
  return (
    <Container>
      <div
        className="flex-row"
        sx={{
          py: 4,
          '@media screen and (max-width: 64em)': {
            px: 4,
          },
        }}
      >
        <div
          className="flex-col"
          sx={{
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
              fontSize: 'm',
              color: 'endlessPotential',
              '@media screen and (max-width: 64em)': {
                display: 'none',
              },
            }}
          >
            {paragraphSummaryAuthor}
          </h6>
          <h5
            className="uppercase"
            sx={{
              color: 'mediumGray',
              m: 0,
              fontSize: 'm',
              '@media screen and (max-width: 64em)': {
                display: 'none',
              },
            }}
          >
            {paragraphSummarySubtitle}
          </h5>
        </div>
        <div
          sx={{ mb: 3, borderLeft: `4px solid ${theme.colors.slate}` }}
        ></div>
        <p
          className="italic"
          sx={{
            variant: 'text.copyP',
            fontSize: '4xl',
            color: 'slate',
            pt: 3,
            pb: 4,
            pl: 3,
            m: 0,
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
