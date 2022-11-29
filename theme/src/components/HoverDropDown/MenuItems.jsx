/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { Link } from 'gatsby';

const MenuItems = ({ items, column }) => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };
  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <div sx={{ pb: 3 }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {items.navItems ? (
        <>
          <div
            sx={{
              color: column ? 'nittanyNavy' : 'white',
              textDecoration: 'none',
              fontSize: column ? 4 : 11,
              mx: column ? 0 : 3,
              letterSpacing: '.16px',
              fontFamily: 'roboto-condensed-regular',
              position: 'relative',
              cursor: 'pointer',
            }}
            type="button"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.name}
            {dropdown === false ? (
              <span
                sx={{ fontFamily: 'roboto-regular', mx: column ? 0 : 1, pl: 1 }}
              >
                +
              </span>
            ) : (
              <span
                sx={{ fontFamily: 'roboto-regular', mx: column ? 0 : 1, pl: 1 }}
              >
                --
              </span>
            )}
          </div>
          <Dropdown
            column={column}
            submenus={items.navItems}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link
          sx={{
            textDecoration: 'none',
            fontSize: column ? 4 : 11,
            letterSpacing: '.16px',
            fontFamily: 'roboto-condensed-regular',
            color: column ? 'nittanyNavy' : 'white',
            mx: 14,
            position: 'relative',
            cursor: 'pointer',
          }}
          href={items.ref.slug ? `/${items.ref.slug}` : `/${items.ref.href}`}
        >
          {items.text}
        </Link>
      )}
    </div>
  );
};

export default MenuItems;
