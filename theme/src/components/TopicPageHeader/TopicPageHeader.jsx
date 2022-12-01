/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { graphql } from 'gatsby';
import theme from '../../gatsby-plugin-theme-ui';

export const TopicPageHeader = ({
  topicPageHeaderText,
  topicPageHeaderTitle,
}) => {
  return (
    <div
      className="flex-col"
      sx={{
        py: 4,
        '@media screen and (max-width: 64em)': {
          px: 4,
        },
      }}
    >
      <h1
        sx={{
          borderBottom: `1px solid ${theme.colors.slate}`,
          fontSize: '6xl',
          pb: '28px',
          lineHeight: '2rem',
          color: 'nittanyNavy',
          whiteSpace: 'pre-line',
        }}
      >
        {topicPageHeaderTitle}
      </h1>

      <p
        sx={{
          fontFamily: 'roboto-regular',
          fontSize: 'lg',
          color: 'oldCoaly',
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
