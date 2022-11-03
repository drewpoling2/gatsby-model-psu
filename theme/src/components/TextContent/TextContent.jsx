/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { graphql } from 'gatsby';
export const TextContent = ({ props }) => {
  return <div>This is the TextContent component</div>;
};
export const query = graphql`
  fragment HomepageTextContentContent on HomepageTextContent {
    id
    text
    title
  }
`;
