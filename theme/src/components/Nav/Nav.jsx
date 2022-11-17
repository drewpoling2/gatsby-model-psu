/** @jsx jsx */
import { Container, jsx, Flex } from 'theme-ui';
import { FiMenu } from 'react-icons/fi';
import { HoverDropDown } from '../HoverDropDown/HoverDropDown';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import theme from '../../gatsby-plugin-theme-ui';
import { IoMdClose } from 'react-icons/io';

export const Nav = ({ imageSrc, navData }) => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const toggle = () => {
    setOpenMobileNav(!openMobileNav);
  };
  const items = navData.allContentfulCtaItem.edges;
  return (
    <>
      {/* mobile */}
      <div
        sx={{
          width: '100%',
          position: 'relative',
          '@media screen and (min-width: 70em)': {
            display: 'none',
          },
        }}
      >
        <div
          sx={{
            my: 3,
            mx: 4,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link to="/">
            <img
              src={imageSrc}
              sx={{ width: '200px' }}
              alt={'Psu logo'}
              loading="lazy"
            />
          </Link>
          {openMobileNav ? (
            <IoMdClose
              sx={{ color: 'white', fontSize: 5, cursor: 'pointer' }}
              onClick={toggle}
            />
          ) : (
            <FiMenu
              sx={{ color: 'white', fontSize: 5, cursor: 'pointer' }}
              onClick={toggle}
            />
          )}
        </div>
        {openMobileNav && (
          <Flex
            sx={{
              backgroundColor: 'white',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              pb: 3,
              position: 'absolute',
              width: '100%',
              zIndex: 15,
            }}
          >
            <Container>
              <Flex sx={{ justifyContent: 'center' }}>
                <div>
                  <Flex
                    sx={{
                      flexDirection: openMobileNav ? 'column' : 'row',
                      alignItems: openMobileNav ? 'center' : 'none',
                      mx: 0,
                      my: 0,
                      borderBottom: `1px dashed ${theme.colors.mediumGrayPS}`,
                      pt: 4,
                      pb: 3,
                      justifyContent: 'center',
                    }}
                  >
                    {/* using Button here is better but something is wrong with the Button export blocking conditional rendering for variants*/}
                    {items.map((item, i) => {
                      return i === 0 ? (
                        <Link
                          key={i}
                          href={
                            item.node.ref.href
                              ? `/${item.node.ref.href}`
                              : `/${item.node.ref.slug}`
                          }
                          sx={{
                            backgroundColor: 'bluishBlackPS',
                            color: 'lightBluePS',
                            width: 5,
                            height: 5,
                            my: 1,
                            border: '2px solid #000321',
                            px: 13,
                            textDecoration: 'none',
                            py: 1,
                            fontSize: 3,
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
                          id={`nav-cta ${i}`}
                          key={i}
                          href={
                            item.node.ref.href
                              ? `/${item.node.ref.href}`
                              : `/${item.node.ref.slug}`
                          }
                          sx={{
                            backgroundColor: 'none',
                            color: 'mediumBluePS',
                            border: `2px solid ${theme.colors.mediumBluePS}`,
                            width: 5,
                            textDecoration: 'none',
                            height: 5,
                            fontSize: 3,

                            px: 13,
                            py: 1,
                            my: 1,
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
                  </Flex>
                  <HoverDropDown column={openMobileNav} navData={navData} />
                </div>
              </Flex>
            </Container>
          </Flex>
        )}
      </div>
      {/* desktop */}
      <div
        sx={{
          variant: 'layout.rowJSB',
          width: 4,
          '@media screen and (max-width: 70em)': {
            display: 'none',
          },
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
                pb: 2,
              }}
            >
              <div
                sx={{
                  variant: 'layout.rowJAC',
                  mx: 3,
                  my: 15,
                  pt: 3,
                }}
              >
                {/* using Button here is better but something is wrong with the Button export blocking conditional rendering for variants*/}
                {items.map((item, i) => {
                  return i === 0 ? (
                    <Link
                      key={i}
                      id={`nav-cta-${i}-${
                        item.node.ref.href
                          ? item.node.ref.href
                          : item.node.ref.slug
                      }`}
                      href={
                        item.node.ref.href
                          ? `/${item.node.ref.href}`
                          : `/${item.node.ref.slug}`
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
                      key={i}
                      id={`nav-cta-${i}-${
                        item.node.ref.href
                          ? item.node.ref.href
                          : item.node.ref.slug
                      }`}
                      href={
                        item.node.ref.href
                          ? `/${item.node.ref.href}`
                          : `/${item.node.ref.slug}`
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
    </>
  );
};
