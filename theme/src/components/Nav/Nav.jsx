/** @jsx jsx */
import { Container, jsx } from 'theme-ui';
import { Button } from '../Button/Button';
import { Divider } from '../Divider/Divider';
import { Image } from '../Image/Image';
import { IconButton } from '../IconButton/IconButton';
import { HoverDropDown } from '../HoverDropDown/HoverDropDown';
import { Link } from 'gatsby';
import React from 'react';
import theme from '../../gatsby-plugin-theme-ui';

export const Nav = ({ imageSrc, navData }) => {
  const items = navData.allContentfulCtaItem.edges;
  return (
    <div
      sx={{
        variant: 'layout.rowJSB',
        width: 4,
        pb: 0,
      }}
    >
      <Container
        sx={{
          variant: 'layout.rowJSB',
        }}
      >
        <div sx={{ variant: 'layout.rowJAC' }}>
          <Link to="/">
            <img
              src={imageSrc}
              sx={{ width: '200px' }}
              alt={'Psu logo'}
              loading="lazy"
            />
          </Link>
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
                pt: 4,
              }}
            >
              {/* using Button here is better but something is wrong with the Button export blocking conditional rendering for variants*/}
              {items.map((item, i) => {
                return i === 0 ? (
                  <Link
                    href={
                      item.node.ref.href
                        ? item.node.ref.href
                        : item.node.ref.slug
                    }
                    sx={{
                      backgroundColor: 'bluishBlackPS',
                      color: 'lightBluePS',
                      width: 5,
                      height: 5,
                      border: '2px solid #000321',
                      px: 13,
                      textDecoration: 'none',
                      py: 1,
                      mx: 1,
                      cursor: 'pointer',
                      variant: 'layout.rowJAC',
                      '&:hover': {
                        border: '2px solid #ffd100',
                        backgroundColor: 'yellowPS',
                        color: 'bluishBlackPS',
                      },
                    }}
                  >
                    <span
                      sx={{
                        variant: 'text.button',
                      }}
                    >
                      {item.node.text}
                    </span>
                  </Link>
                ) : (
                  <Link
                    href={
                      item.node.ref.href
                        ? item.node.ref.href
                        : item.node.ref.slug
                    }
                    sx={{
                      backgroundColor: 'none',
                      color: 'lightBluePS',
                      border: '2px solid #ccf0ff',
                      width: 5,
                      textDecoration: 'none',
                      height: 5,
                      px: 13,
                      py: 1,
                      mx: 1,
                      cursor: 'pointer',
                      variant: 'layout.rowJAC',
                      '&:hover': {
                        border: '2px solid #009CDE',
                        backgroundImage: () =>
                          `linear-gradient(to bottom, ${theme.colors.robinsEggBluePS},  ${theme.colors.bluePS})`,
                        color: 'whitePS',
                      },
                    }}
                  >
                    <span sx={{ variant: 'text.button' }}>
                      {item.node.text}
                    </span>
                  </Link>
                );
              })}
            </div>
            <div
              sx={{
                variant: 'layout.row',
              }}
            >
              <HoverDropDown navData={navData} />
            </div>
          </div>

          {/* this will be added later when the menu modal is added */}
          {/* <Divider />
          <div
            sx={{
              variant: 'layout.rowJAC',
            }}
          >
            <IconButton />
            <Button variant="icon" text="menu" />
          </div> */}
        </div>
      </Container>
    </div>
  );
};
