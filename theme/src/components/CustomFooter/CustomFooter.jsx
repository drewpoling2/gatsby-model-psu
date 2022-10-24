/** @jsx jsx */
import { jsx, Footer, Container, Styled } from 'theme-ui';
import React from 'react';
import theme from '../../gatsby-plugin-theme-ui';
import PropTypes from 'prop-types';
import { FooterLinks } from '../FooterLinks/FooterLinks';
import { Image } from '../Image/Image';
import { Stack } from '../Stack/Stack';
export const CustomFooter = ({ imageSrc, footerLinkData }) => {
  return (
    <Footer>
      <Container>
        <div
          sx={{
            pt: 6,
            pb: 5,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Image
            altText={'Psu Altoona Logo'}
            src={imageSrc}
            width="200px"
            onClick={() => console.log('Logo')}
          />
          <FooterLinks footerLinkData={footerLinkData} />
          <FooterLinks footerLinkData={footerLinkData} />
          <FooterLinks footerLinkData={footerLinkData} />
          <FooterLinks footerLinkData={footerLinkData} />
        </div>
      </Container>
    </Footer>
  );
};
