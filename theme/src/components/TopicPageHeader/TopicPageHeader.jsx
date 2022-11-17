/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Stack } from '../Stack/Stack';
import { graphql } from 'gatsby';

export const TopicPageHeader = ({
  topicPageHeaderText,
  topicPageHeaderTitle,
}) => {
  return (
    <div
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        '@media screen and (max-width: 64em)': {
          px: 4,
        },
      }}
    >
      <h1
        sx={{
          borderBottom: '1px solid #314D64',
          fontSize: 10,
          pb: '28px',
          lineHeight: '32px',
          color: 'darkNavyBluePS',
          whiteSpace: 'pre-line',
        }}
      >
        {topicPageHeaderTitle}
      </h1>

      <p
        sx={{
          variant: 'text.copyP',
          fontSize: 3,
          color: 'paragraphGrayPS',
          m: 0,
        }}
      >
        {topicPageHeaderText}
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
