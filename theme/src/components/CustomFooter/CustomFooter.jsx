/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import theme from '../../gatsby-plugin-theme-ui';
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
export const CustomFooter = ({ apiURL }) => {
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
        <div className="flex-col">
          <div
            className="flex-row justify-between w-full"
            sx={{
              pt: 19,
              '@media screen and (max-width: 64em)': {
                flexDirection: 'column',
                alignItems: 'center',
              },
            }}
          >
            {/* Main footer navigation */}
            <div
              className="flex-col"
              sx={{
                '@media screen and (max-width: 64em)': {
                  alignItems: 'center',
                },
              }}
            >
              <div>
                <img src={mapInfo?.html} alt={mapInfo?.title} />
              </div>
              <div className="inline-flex" data-testid="subscribe-links">
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
                      <h3 className="uppercase" sx={{ fontSize: 'm', mt: 0 }}>
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
              className="flex-row w-full justify-around"
              sx={{
                '@media screen and (max-width: 64em)': {
                  flexWrap: 'wrap',
                  width: '90%',
                  pt: 4,
                  pl: 0,
                },
                pl: 4,
              }}
            >
              {navLinks.map((link, index) => {
                const children = link?.Children?.[0]?.Children;
                return (
                  <div
                    className="flex-col"
                    sx={{ pb: 18 }}
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
          className="flex-row items-center justify-center"
          sx={{
            '@media screen and (max-width: 64em)': {
              flexWrap: 'wrap',
            },
          }}
        >
          {/* Contact Links */}
          <div>
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
            className="flex-col"
            sx={{
              pl: 18,
              pr: 3,
              '@media screen and (max-width: 64em)': {
                flexWrap: 'wrap',
                p: 0,
              },
            }}
          >
            <Flex>
              <Flex
                sx={{
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
                      fontSize: 's',
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
                      color: 'whiteout',
                      borderLeft: `1px solid ${theme.colors.beaverBlue}`,
                    }}
                    to={`tel:${telephone?.html}`}
                    id="footer-menu-item-click"
                  >
                    <span
                      className="decoration-none"
                      sx={{
                        fontFamily: 'roboto-condensed-bold',
                        fontSize: 's',
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
                      color: 'whiteout',
                      borderLeft: `1px solid ${theme.colors.beaverBlue}`,
                    }}
                    to={contactUs?.uri}
                    id="footer-menu-item-click"
                  >
                    <span
                      sx={{
                        fontFamily: 'roboto-condensed-bold',
                        fontSize: 's',
                        letterSpacing: '.2px',
                      }}
                    >
                      {contactUs?.title}
                    </span>
                  </Link>
                </div>
              </Flex>
            </Flex>
            <div className="flex-col" sx={{ pt: 55 }}>
              {/* Legal links */}
              <div
                className="flex-row"
                sx={{
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
                        borderLeft: `1px solid ${theme.colors.beaverBlue}`,
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
                        className="decoration-none"
                        sx={{
                          fontFamily: 'roboto-condensed-regular',
                          fontSize: 's',
                          letterSpacing: '.2px',
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
              <Flex>
                <div
                  className="flex-row w-full"
                  sx={{
                    pt: 2,
                    borderTop: `1px dashed ${theme.colors.beaverBlue}`,
                  }}
                >
                  <div>
                    <Link
                      sx={{
                        pr: 3,
                        borderRight: `1px solid ${theme.colors.beaverBlue}`,
                        color: 'silverGrayPS',
                        textDecoration: 'none',
                        '&:hover': { textDecoration: 'underline' },
                      }}
                      to={copyright?.uri}
                      id="footer-menu-item-click"
                    >
                      <span
                        className="decoration-none"
                        sx={{
                          fontFamily: 'roboto-condensed-regular',
                          fontSize: 's',
                          letterSpacing: '.2px',
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
              </Flex>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
};

CustomFooter.propTypes = {
  apiURL: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
