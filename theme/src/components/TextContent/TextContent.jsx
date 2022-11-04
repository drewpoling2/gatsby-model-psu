/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

export const TextContent = ({ data }) => {
  return (
    <div sx={{ py: 4, mx: '300px' }}>
      {documentToReactComponents(
        JSON.parse(data.contentfulHomepageTextContent.text.raw, {
          renderNode: {},
        })
      )}
    </div>
  );
};
