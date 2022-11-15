/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { graphql } from 'gatsby';
export const RichTextContent = ({ richTextRaw }) => {
  return (
    <Container>
      <div sx={{ py: 4, mx: '230px' }}>
        {documentToReactComponents(
          JSON.parse(richTextRaw, {
            renderNode: {},
          })
        )}
      </div>
    </Container>
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
