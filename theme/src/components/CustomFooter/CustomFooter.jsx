/** @jsx jsx */
import { jsx, Footer, Container } from 'theme-ui';
import React from 'react';
import { FooterLinks } from '../FooterLinks/FooterLinks';
import { Image } from '../Image/Image';
import { Stack } from '../Stack/Stack';
import { Button } from '../Button/Button';

export const bottomFooterLinks = [
  { linkName: 'Privacy Statement' },
  { linkName: 'Non Discrimination' },
  { linkName: 'Equal Opportunity' },
  { linkName: 'Accessibility' },
  { linkName: 'Legal Statements' },
];

const FooterLink = ({ variant, text }) => {
  if (variant === 'p') {
    return (
      <>
        <p
          sx={{
            cursor: 'pointer',
            fontWeight: '400',
            px: 2,
            borderRight: '1px solid #314d64',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          {text}
        </p>
      </>
    );
  }

  if (variant === 'h') {
    return (
      <>
        <h3>{text}</h3>
      </>
    );
  }
};

export const CustomFooter = ({ markSrc, footerLinkData, imageSrc }) => {
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
          <Stack variant="col">
            <img
              altText={'Psu Altoona Logo'}
              src={markSrc}
              width="300px"
              sx={{ marginInline: '40px' }}
              onClick={() => console.log('Logo')}
            />
            <h4
              sx={{
                borderTop: '1px dashed #1e407c',
                textTransform: 'uppercase',
              }}
            >
              get updates by email //
            </h4>
            <Button variant="outlined" text="get updates >" />
          </Stack>
          <FooterLinks footerLinkData={footerLinkData} />
          <FooterLinks footerLinkData={footerLinkData} />
          <FooterLinks footerLinkData={footerLinkData} />
          <FooterLinks footerLinkData={footerLinkData} />
        </div>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            altText={'Psu Altoona Logo'}
            src={imageSrc}
            width="200px"
            onClick={() => console.log('Logo')}
          />
          <div
            sx={{
              marginLeft: '72px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <p sx={{ px: 2, borderRight: '1px solid #314d64' }}>
                201 Old Main, University Park, Pennsylvania 16802
              </p>
              <a
                sx={{
                  px: 2,
                  borderRight: '1px solid #314d64',
                  fontWeight: '700',
                }}
              >
                814-865-4700
              </a>
              <a sx={{ px: 2, fontWeight: '700' }}>Contact Us</a>
            </div>
            <div sx={{ mt: 5, mb: 4 }}>
              <div sx={{ display: 'flex', flexDirection: 'row' }}>
                {bottomFooterLinks &&
                  bottomFooterLinks.map((item, index) => {
                    return (
                      <FooterLink
                        variant={'p'}
                        key={index}
                        text={item.linkName}
                      />
                    );
                  })}
              </div>
              <div sx={{ display: 'flex', flexDirection: 'row' }}>
                <p sx={{ px: 2, borderRight: '1px solid #314d64' }}>
                  The Pennsylvania State University © 2022
                </p>
                <p sx={{ px: 2 }}>
                  WE ARE <b>PENN STATE</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Footer>
  );
};
