/** @jsx jsx */
import { jsx, Container, Grid } from 'theme-ui';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'gatsby';
import FacebookLogo from './assets/FacebookLogo';
import InstagramLogo from './assets/InstagramLogo';
import LinkedInLogo from './assets/LinkedInLogo';
import TwitterLogo from './assets/TwitterLogo';
import localFooterData from './footerData.json';
import logoMark from './assets/psu-mark.png';
export const NewsFooter = ({ apiURL }) => {
  const [apiData, setApiData] = useState(false);

  useEffect(() => {
    if (!apiData) {
      fetch(apiURL)
        .then((response) => response.json())
        .then((json) => setApiData(json))
        .catch(() => {
          apiURL &&
            console.warn(
              `Couldn’t fetch footer API at ${apiURL}. Using cached local data.`
            );
          setApiData(localFooterData);
        });
    }
  }, [apiData]);

  if (!apiData) {
    return <footer data-testid="footer" />;
  }

  const allLinks = apiData.map((link) => link);
  // All nav information is on the same nested level,
  // so we grab the first four, which represent the top
  // level nav items we want.
  const navLinks = allLinks.filter((link, index) => index < 4);
  // Currently the only way to differentiate between some links is through actual text.
  const subscribeLinks = allLinks.filter(
    (link) => link.Type === 'Subscribe'
  )?.[0]?.Children?.[0]?.Children;

  // Remove links included in API data but not on main WWW site
  const alteredSubscribeLinks = subscribeLinks.filter((link) => {
    if (link.title !== 'YouTube') {
      return link;
    }
  });

  const social = {
    Facebook: <FacebookLogo />,
    Instagram: <InstagramLogo />,
    Twitter: <TwitterLogo />,
    Linkedin: <LinkedInLogo />,
  };

  // Subfooter items
  const subFooter = allLinks.filter((link) => link.Type === 'Sub-Footer')?.[0]
    ?.Children?.[0]?.Children;
  const address = subFooter.filter((link) => link.title === 'Address')?.[0];
  const telephone = subFooter.filter((link) => link.title === 'Telephone')?.[0];
  const contactUs = subFooter.filter(
    (link) => link.title === 'Contact Us'
  )?.[0];
  const legalLinks = subFooter.filter((link, index) => index > 3 && index < 9);
  const copyright = subFooter.filter(
    (link) => link.title === 'Copyright Information'
  )?.[0];

  // Assets
  const assets = allLinks.filter((link) => link.Type === 'Art')?.[0]
    ?.Children?.[0]?.Children;
  const logo = assets.filter(
    (link) => link.title === 'Penn State Footer Mark'
  )?.[0];
  const mapInfo = assets.filter((link) => link.title === 'Penn State Map')?.[0];
  const weArePenn = subFooter.filter(
    (link) => link.title === 'We Are Penn State'
  )?.[0];

  return (
    <Container>
      <footer
        sx={{
          pt: 18,
          '@media screen and (max-width: 64em)': {
            pt: 2,
          },
          pb: 4,
        }}
        data-testid="footer"
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            sx={{
              pt: 19,
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              '@media screen and (max-width: 64em)': {
                flexDirection: 'column',
                width: '100%',
                alignItems: 'center',
              },
            }}
          >
            {/* Main footer navigation */}
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                '@media screen and (max-width: 64em)': {
                  alignItems: 'center',
                },
              }}
            >
              <div>
                <img src={mapInfo?.html} alt={mapInfo?.title} />
              </div>
              <div
                data-testid="subscribe-links"
                sx={{ display: 'inline-flex' }}
              >
                {/* Social media icons */}
                {alteredSubscribeLinks.map((link, index) => {
                  // Some items are empty strings, check if valid link.
                  if (link && link?.title !== 'Get News By Email') {
                    return (
                      <div
                        key={`subscribe-${index}`}
                        sx={{
                          py: 13,
                          borderBottom: '1px dashed #1e407c',
                          mb: 13,
                        }}
                      >
                        <Link
                          sx={{
                            color: 'silverGrayPS',
                            textDecoration: 'none',
                            pr: 3,
                          }}
                          to={link.uri}
                          id="footer-social-icon-click"
                        >
                          {social[link?.title]}
                        </Link>
                      </div>
                    );
                  }
                })}
              </div>
              {/* Newsletter */}
              {alteredSubscribeLinks.map((subscribeLink, index) => {
                if (subscribeLink?.displayname === 'Get News By Email') {
                  const newsletterTitle = subscribeLink?.title;
                  const newsletterLink = subscribeLink?.uri;
                  return (
                    <React.Fragment key={`subscribeLink-${index}`}>
                      <h3
                        sx={{ textTransform: 'uppercase', fontSize: 2, mt: 0 }}
                      >
                        {newsletterTitle} //
                      </h3>
                      <Button
                        variant={'outlined'}
                        text={'subscribe >'}
                        href={newsletterLink}
                      ></Button>
                    </React.Fragment>
                  );
                }
              })}
            </div>
            <div
              sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                '@media screen and (max-width: 64em)': {
                  flexWrap: 'wrap',
                  width: '90%',
                  pt: 4,
                  pl: 0,
                  display: 'flex',
                  justifyContent: 'space-around',
                },
                justifyContent: 'space-around',
                pl: 4,
              }}
            >
              {navLinks.map((link, index) => {
                const children = link?.Children?.[0]?.Children;
                return (
                  <div
                    sx={{ pb: 18, display: 'flex', flexDirection: 'column' }}
                    key={`column-${index}`}
                  >
                    <h3 sx={{ m: 0, textTransform: 'uppercase' }}>
                      {link?.Type}
                    </h3>
                    <div>
                      {children.map((navItem, index) => {
                        return (
                          <div sx={{ py: 2 }} key={`item-${index}`}>
                            <Link
                              sx={{
                                color: 'silverGrayPS',
                                textDecoration: 'none',
                              }}
                              to={navItem?.uri}
                              id="footer-menu-item-click"
                            >
                              <span
                                sx={{
                                  fontFamily: 'roboto-condensed-bold',
                                  letterSpacing: '.2px',
                                  '&:hover': { textDecoration: 'underline' },
                                }}
                              >
                                {navItem?.title}
                              </span>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',

            '@media screen and (max-width: 64em)': {
              flexWrap: 'wrap',
              display: 'flex',
            },
          }}
        >
          {/* Contact Links */}
          <div>
            {/* TODO: API footer logo currently 404s - manually set the same as WWW site */}
            <Link to="/">
              <img
                sx={{
                  width: '170px',
                  '@media screen and (max-width: 64em)': {
                    pb: 4,
                  },
                }}
                src={logoMark}
                alt={logo.title}
                loading="lazy"
              />
            </Link>
          </div>
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              pl: 18,
              pr: 3,
              '@media screen and (max-width: 64em)': {
                flexWrap: 'wrap',
                p: 0,
              },
            }}
          >
            <div
              sx={{
                display: 'flex',
              }}
            >
              <div
                sx={{
                  display: 'flex',
                  '@media screen and (max-width: 64em)': {
                    flexWrap: 'wrap',
                    width: '100%',
                    justifyContent: 'center',
                  },
                }}
              >
                <div
                  sx={{ color: 'silverGrayPS', pr: 3 }}
                  id="footer-menu-item-click"
                >
                  <span
                    sx={{
                      fontFamily: 'roboto-condensed-regular',
                      fontSize: '14px',
                      letterSpacing: '.2px',
                    }}
                  >
                    {address?.html}
                  </span>
                </div>
                <div>
                  <Link
                    sx={{
                      fontWeight: 700,
                      px: 3,
                      textDecoration: 'none',
                      color: 'whitePS',
                      borderLeft: '1px solid #1e407c',
                    }}
                    to={`tel:${telephone?.html}`}
                    id="footer-menu-item-click"
                  >
                    <span
                      sx={{
                        fontFamily: 'roboto-condensed-bold',
                        fontSize: '14px',
                        textDecoration: 'none',
                        letterSpacing: '.2px',
                      }}
                    >
                      {telephone?.html}
                    </span>
                  </Link>
                </div>
                <div>
                  <Link
                    sx={{
                      fontWeight: 700,
                      pl: 3,
                      textDecoration: 'none',
                      color: 'whitePS',
                      borderLeft: '1px solid #1e407c',
                    }}
                    to={contactUs?.uri}
                    id="footer-menu-item-click"
                  >
                    <span
                      sx={{
                        fontFamily: 'roboto-condensed-bold',
                        fontSize: '14px',
                        letterSpacing: '.2px',
                      }}
                    >
                      {contactUs?.title}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div sx={{ display: 'flex', flexDirection: 'column', pt: 55 }}>
              {/* Legal links */}
              <div
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  pb: 2,
                  '@media screen and (max-width: 64em)': {
                    flexWrap: 'wrap',

                    width: '100%',
                    justifyContent: 'center',
                  },
                }}
              >
                {legalLinks.map((link, index) => (
                  <div key={`card-${index}`}>
                    <Link
                      sx={{
                        px: 3,
                        borderLeft: '1px solid #1e407c',
                        ...(index === 0 && {
                          borderLeft: 'none',
                          pl: 0,
                          pr: 3,
                        }),
                        color: 'silverGrayPS',
                        textDecoration: 'none',
                        '&:hover': { textDecoration: 'underline' },
                      }}
                      to={link?.uri}
                      id="footer-menu-item-click"
                    >
                      <span
                        sx={{
                          fontFamily: 'roboto-condensed-regular',
                          fontSize: '14px',
                          letterSpacing: '.2px',
                          textDecoration: 'none',
                        }}
                      >
                        {' '}
                        {link?.displayname}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
              {/* Copyright */}
              <div sx={{ display: 'flex', flexDirection: 'row' }}>
                <div
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    pt: 2,
                    borderTop: '1px dashed #1e407c',
                    width: '100%',
                  }}
                >
                  <div>
                    <Link
                      sx={{
                        pr: 3,
                        borderRight: '1px solid #1e407c',
                        color: 'silverGrayPS',
                        textDecoration: 'none',
                        '&:hover': { textDecoration: 'underline' },
                      }}
                      to={copyright?.uri}
                      id="footer-menu-item-click"
                    >
                      <span
                        sx={{
                          fontFamily: 'roboto-condensed-regular',
                          fontSize: '14px',
                          letterSpacing: '.2px',
                          textDecoration: 'none',
                        }}
                      >
                        {copyright?.displayname} &copy;{' '}
                        {new Date().getFullYear()}{' '}
                      </span>
                    </Link>
                  </div>
                  <div
                    sx={{
                      pl: 3,
                      '@media screen and (max-width: 64em)': {
                        pl: 0,
                      },
                    }}
                  >
                    <img
                      src={weArePenn?.html}
                      alt={weArePenn?.title}
                      loading="lazy"
                      sx={{ width: '170px' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
};

NewsFooter.propTypes = {
  apiURL: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
