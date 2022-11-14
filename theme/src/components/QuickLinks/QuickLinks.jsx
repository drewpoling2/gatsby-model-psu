/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Card } from '../Card/Card';
import { graphql } from 'gatsby';
export const QuickLinks = ({ heading, data, index }) => {
  return (
    <div sx={{ py: 4 }}>
      <h2 sx={{ color: 'darkNavyBluePS', textTransform: 'uppercase', mt: 0 }}>
        {heading}
      </h2>
      <div
        sx={{
          mt: 4,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {data.quickLinkList.map((item, index) => {
          return <Card item={item} key={index} index={index}></Card>;
        })}
      </div>
    </div>
  );
};

export const query = graphql`
  fragment QuickLinkGroupContent on QuickLinkGroup {
    quickLinkList {
      blocktype
      cardTitle
      image {
        gatsbyImageData
        alt
        id
      }
      slug
      cardDescription
    }
    blocktype
    id
  }
`;
