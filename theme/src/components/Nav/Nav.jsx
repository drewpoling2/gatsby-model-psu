/** @jsx jsx */
import { Container, jsx, Styled } from 'theme-ui';
import React from 'react';
import theme from '../../gatsby-plugin-theme-ui';
import { Button } from '@bit/button';
import { Divider } from '@bit/divider';
import { Image } from '@bit/image';
import { IconButton } from '@bit/icon-button';
import { HoverDropDown } from '@bit/hover-drop-down';

export const Nav = ({ imageSrc, navData }) => {
  return (
    <div
      sx={{
        variant: 'layout.rowJSB',
        width: 4,
        py: 9,
      }}
    >
      <Container
        sx={{
          variant: 'layout.rowJSB',
        }}
      >
        <div sx={{ variant: 'layout.rowJAC' }}>
          <Image
            altText={'Psu Altoona Logo'}
            src={imageSrc}
            width="180px"
            onClick={() => console.log('Logo')}
          />
        </div>
        <div
          sx={{
            variant: 'layout.rowJAC',
          }}
        >
          <div
            sx={{
              variant: 'layout.col',
              alignItems: 'flex-end',
            }}
          >
            <div
              sx={{
                variant: 'layout.rowJAC',
                mx: 3,
                my: 15,
              }}
            >
              <Button text="vendor application" variant="hotLine" />
              <Button text="contact us" variant="outlinedNav" />
              <Button text="about us" variant="outlinedNav" />
              <Button text="home" variant="outlinedNav" />
            </div>
            <div
              sx={{
                variant: 'layout.row',
              }}
            >
              <HoverDropDown navData={navData} />
            </div>
          </div>

          <Divider />
          <div
            sx={{
              variant: 'layout.rowJAC',
            }}
          >
            <IconButton />
            <Button variant="icon" text="menu" />
          </div>
        </div>
      </Container>
    </div>
  );
};
