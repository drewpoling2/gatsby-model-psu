/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';

const Dropdown = ({ submenus, dropdown, column }) => {
  return (
    <>
      {dropdown === true ? (
        <div sx={{ zIndex: 100, position: 'absolute', mt: 1 }}>
          <div
            sx={{
              backgroundColor: 'whiteout',
              height: '20px',
              position: 'absolute',
              left: 4,
              width: '20px',
              transform: 'rotate(45deg)',
            }}
          ></div>
          <div
            sx={{
              zIndex: 101,
              backgroundColor: 'whiteout',
              p: 13,
              mt: 2,
              position: 'absolute',
              borderRadius: 10,
              whiteSpace: 'nowrap',
              boxShadow: '0 8px 16px 0 rgb(0 0 0 / 20%)',
            }}
          >
            {submenus.map((submenu, index) => (
              <div key={index} sx={{ py: 2, borderBottom: '1px dashed gray' }}>
                <a
                  sx={{
                    color: 'endlessPotential',
                    variant: 'text.dropdownMenu',
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
