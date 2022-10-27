/** @jsx jsx */
import { jsx, Footer, Container, Styled } from 'theme-ui';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import Link from '../link/link';

import localFooterData from './footerData.json';

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

  const social = {};

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
      <footer sx={{ pt: 18, pb: 4 }} data-testid="footer">
        <div sx={{ display: 'flex', flexDirection: 'column' }}>
          <div
            sx={{
              pt: 19,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            {/* Main footer navigation */}

            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div>
                <img src={mapInfo?.html} alt={mapInfo?.title} />
              </div>
              <ul data-testid="subscribe-links">
                {/* Social media icons */}
                {alteredSubscribeLinks.map((link, index) => {
                  // Some items are empty strings, check if valid link.
                  if (link && link?.title !== 'Get News By Email') {
                    return (
                      <li key={`subscribe-${index}`}>
                        <Link
                          sx={{ color: 'lightBluePS' }}
                          to={link.uri}
                          id="footer-social-icon-click"
                        >
                          {social[link?.title]}
                          <span>{link?.title}</span>
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>
              {/* Newsletter */}
              {alteredSubscribeLinks.map((subscribeLink, index) => {
                if (subscribeLink?.displayname === 'Get News By Email') {
                  const newsletterTitle = subscribeLink?.title;
                  const newsletterLink = subscribeLink?.uri;
                  const newsletterText = subscribeLink?.html;
                  return (
                    <React.Fragment key={`subscribeLink-${index}`}>
                      <h3 sx={{ textTransform: 'uppercase' }}>
                        {newsletterTitle} //
                      </h3>
                      <Button
                        sx={{ color: 'white' }}
                        variant={'outlined'}
                        text={'subscribe >'}
                        href={newsletterLink}
                      ></Button>
                    </React.Fragment>
                  );
                }
              })}
            </div>
            {navLinks.map((link, index) => {
              const children = link?.Children?.[0]?.Children;
              return (
                <div sx={{ pb: 18 }} key={`column-${index}`}>
                  <h3 sx={{ m: 0, textTransform: 'uppercase' }}>
                    {link?.Type}
                  </h3>
                  <ul>
                    {children.map((navItem, index) => {
                      return (
                        <li sx={{ py: 2 }} key={`item-${index}`}>
                          <Link
                            sx={{ color: 'lightBluePS' }}
                            to={navItem?.uri}
                            id="footer-menu-item-click"
                          >
                            {navItem?.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Contact Links */}
          <div>
            {/* TODO: API footer logo currently 404s - manually set the same as WWW site */}
            <Link to="/">
              <img
                src="https://www.psu.edu/components/img/psu-mark-footer.png"
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
            }}
          >
            <div sx={{ display: 'flex' }}>
              <ul sx={{ display: 'flex' }}>
                <li
                  sx={{ color: 'lightBluePS', pr: 3 }}
                  id="footer-menu-item-click"
                >
                  {address?.html}
                </li>
                <li>
                  <Link
                    sx={{
                      fontWeight: 700,
                      px: 3,
                      borderLeft: '1px solid #1e407c',
                    }}
                    to={`tel:${telephone?.html}`}
                    id="footer-menu-item-click"
                  >
                    {telephone?.html}
                  </Link>
                </li>
                <li>
                  <Link
                    sx={{
                      fontWeight: 700,
                      px: 3,
                      borderLeft: '1px solid #1e407c',
                    }}
                    to={contactUs?.uri}
                    id="footer-menu-item-click"
                  >
                    {contactUs?.title}
                  </Link>
                </li>
              </ul>
            </div>
            <div sx={{ display: 'flex', flexDirection: 'column', pt: 19 }}>
              {/* Legal links */}
              <ul
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  pb: 2,
                }}
              >
                {legalLinks.map((link, index) => (
                  <li key={`card-${index}`}>
                    <Link
                      sx={{
                        px: 3,
                        borderLeft: '1px solid #1e407c',
                        color: 'lightBluePS',
                      }}
                      to={link?.uri}
                      id="footer-menu-item-click"
                    >
                      {link?.displayname}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Copyright */}
              <div sx={{ display: 'flex', flexDirection: 'row' }}>
                <ul
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    pt: 2,
                    borderTop: '1px dashed #1e407c',
                    width: '100%',
                  }}
                >
                  <li>
                    <Link
                      sx={{
                        color: 'lightBluePS',
                        pr: 3,
                        borderRight: '1px solid #1e407c',
                        color: 'lightBluePS',
                      }}
                      to={copyright?.uri}
                      id="footer-menu-item-click"
                    >
                      {copyright?.displayname} &copy; {new Date().getFullYear()}{' '}
                    </Link>
                  </li>
                  <li sx={{ pl: 3 }}>
                    <img
                      src={weArePenn?.html}
                      alt={weArePenn?.title}
                      loading="lazy"
                      sx={{ width: '220px' }}
                    />
                  </li>
                </ul>
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
