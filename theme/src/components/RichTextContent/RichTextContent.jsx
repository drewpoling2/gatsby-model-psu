/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { graphql } from 'gatsby';
export const RichTextContent = ({ richTextRaw }) => {
  return (
    <div sx={{ py: 4, mx: '160px' }}>
      {documentToReactComponents(
        JSON.parse(richTextRaw, {
          renderNode: {},
        })
      )}
    </div>
  );
};

export const query = graphql`
  fragment RichTextBlockContent on RichTextBlock {
    id
    blocktype
    title
    richText {
      raw
    }
  }
`;
