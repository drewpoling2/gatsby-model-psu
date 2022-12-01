/** @jsx jsx */
import { Container, jsx, Flex } from 'theme-ui';
import { FiMenu } from 'react-icons/fi';
import { HoverDropDown } from '../HoverDropDown/HoverDropDown';
import { Link } from 'gatsby';
import { Button } from '../Button/Button';
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
        className="w-full relative"
        sx={{
          '@media screen and (min-width: 70em)': {
            display: 'none',
          },
        }}
      >
        <div
          className="flex justify-between items-center"
          sx={{
            my: 3,
            mx: 4,
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
              sx={{ color: 'white', fontSize: '5xl', cursor: 'pointer' }}
              onClick={toggle}
            />
          ) : (
            <FiMenu
              sx={{ color: 'white', fontSize: '5xl', cursor: 'pointer' }}
              onClick={toggle}
            />
          )}
        </div>
        {openMobileNav && (
          <div
            className="flex w-full absolute z-middle"
            sx={{
              backgroundColor: 'white',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              pb: 3,
            }}
          >
            <Container>
              <div className="flex justify-center">
                <div>
                  <Flex
                    sx={{
                      flexDirection: openMobileNav ? 'column' : 'row',
                      alignItems: openMobileNav ? 'center' : 'none',
                      m: 0,
                      borderBottom: `1px dashed ${theme.colors.mediumGray}`,
                      pt: 4,
                      pb: 3,
                      justifyContent: 'center',
                    }}
                  >
                    {/* using Button here is better but something is wrong with the Button export blocking conditional rendering for variants*/}
                    {items.map((item, i) => {
                      return i === 0 ? (
                        <div sx={{ my: 1 }}>
                          <Button
                            id={`nav-cta-${i}`}
                            key={i}
                            to={
                              item.node.ref.href
                                ? `${item.node.ref.href}`
                                : `/${item.node.ref.slug}`
                            }
                            text={item.node.text}
                            variant="hotline"
                          />
                        </div>
                      ) : (
                        <div sx={{ my: 1 }}>
                          <Button
                            id={`nav-cta-${i}`}
                            key={i}
                            to={
                              item.node.ref.href
                                ? `${item.node.ref.href}`
                                : `/${item.node.ref.slug}`
                            }
                            variant={'outlinedNavSecondary'}
                            text={item.node.text}
                          />
                        </div>
                      );
                    })}
                  </Flex>
                  <HoverDropDown column={openMobileNav} navData={navData} />
                </div>
              </div>
            </Container>
          </div>
        )}
      </div>
      {/* desktop */}
      <div
        className="w-full flex-row justify-between"
        sx={{
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
          <div className="flex-row justify-center items-center">
            <Link to="/">
              <img
                src={imageSrc}
                sx={{ width: '200px' }}
                alt={'Psu logo'}
                loading="lazy"
              />
            </Link>
          </div>
          <div className="flex-row justify-center items-center">
            <div
              className="flex-col items-end"
              sx={{
                pb: 2,
              }}
            >
              <div
                className="flex-row justify-center items-center"
                sx={{
                  mx: 3,
                  my: 15,
                  pt: 3,
                }}
              >
                {/* using Button here is better but something is wrong with the Button export blocking conditional rendering for variants*/}
                {items.map((item, i) => {
                  return i === 0 ? (
                    <Button
                      id={`nav-cta-${i}`}
                      key={i}
                      to={
                        item.node.ref.href
                          ? `${item.node.ref.href}`
                          : `/${item.node.ref.slug}`
                      }
                      text={item.node.text}
                      variant="hotline"
                    />
                  ) : (
                    <Button
                      id={`nav-cta-${i}`}
                      key={i}
                      to={
                        item.node.ref.href
                          ? `${item.node.ref.href}`
                          : `/${item.node.ref.slug}`
                      }
                      variant={'outlinedNav'}
                      text={item.node.text}
                    />
                  );
                })}
              </div>
              <div className="flex-row">
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
