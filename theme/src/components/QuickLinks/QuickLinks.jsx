/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import React from 'react';
import { Card } from '../Card/Card';
import { graphql } from 'gatsby';
export const QuickLinks = ({ heading, data, index }) => {
  return (
    <Container>
      <div
        sx={{
          py: 4,
          '@media screen and (max-width: 63em)': {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          },
        }}
      >
        <h2
          sx={{
            color: 'darkNavyBluePS',
            textTransform: 'uppercase',
            mt: 0,
          }}
        >
          {heading}
        </h2>
        <div
          sx={{
            mt: 4,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            '@media screen and (max-width: 63em)': {
              width: '100%',
              justifyContent: 'space-evenly',
            },
          }}
        >
          {data.quickLinkList.map((item, index) => {
            return <Card item={item} key={index} index={index}></Card>;
          })}
        </div>
      </div>
    </Container>
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
