/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import theme from '../../gatsby-plugin-theme-ui';

const Dropdown = ({ submenus, dropdown, column }) => {
  return (
    <>
      {dropdown === true ? (
        <div className="absolute" sx={{ zIndex: 100, mt: 1 }}>
          <div
            className="absolute"
            sx={{
              backgroundColor: 'whiteout',
              height: '20px',
              left: 4,
              width: '20px',
              transform: 'rotate(45deg)',
            }}
          ></div>
          <div
            className="absolute"
            sx={{
              zIndex: 101,
              backgroundColor: 'whiteout',
              p: 13,
              mt: 2,
              borderRadius: 10,
              whiteSpace: 'nowrap',
              boxShadow: '0 8px 16px 0 rgb(0 0 0 / 20%)',
            }}
          >
            {submenus.map((submenu, index) => (
              <div
                key={index}
                sx={{
                  py: 2,
                  borderBottom: `1px dashed ${theme.colors.mediumGray}`,
                }}
              >
                <a
                  className="capitalize decoration-none"
                  sx={{
                    color: 'endlessPotential',
                    letterSpacing: 1,
                    '&:hover': { color: 'beaverBlue', fontStyle: 'italic' },
                  }}
                  href={submenu.ref.href}
                >
                  {submenu.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Dropdown;
