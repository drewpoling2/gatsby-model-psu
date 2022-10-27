/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <>
      {dropdown === true ? (
        <div sx={{ zIndex: 10, position: 'absolute', mt: 1 }}>
          <div
            sx={{
              backgroundColor: 'whitePS',
              height: '20px',
              position: 'absolute',
              left: 4,
              width: '20px',
              transform: 'rotate(45deg)',
            }}
          ></div>
          <ul
            sx={{
              backgroundColor: 'whitePS',
              p: 13,
              mt: 2,
              position: 'absolute',
              borderRadius: 10,
              width: 'fit-content',
              whiteSpace: 'nowrap',
              boxShadow: '0 8px 16px 0 rgb(0 0 0 / 20%)',
            }}
          >
            {submenus.map((submenu, index) => (
              <li key={index} sx={{ py: 2, borderBottom: '1px dashed gray' }}>
                <a
                  sx={{
                    color: 'bluishBlackPS',
                    variant: 'text.dropdownMenu',
                    '&:hover': { color: 'bluePS', fontStyle: 'italic' },
                  }}
                  href={submenu.url}
                >
                  {submenu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Dropdown;
