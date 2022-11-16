/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { Link } from 'gatsby';

const MenuItems = ({ items }) => {
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
              color: 'whitePS',
              textDecoration: 'none',
              fontSize: '18px',
              letterSpacing: '.16px',
              fontFamily: 'roboto-condensed-regular',
              mx: 14,
              position: 'relative',
              cursor: 'pointer',
            }}
            type="button"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.name}{' '}
            {dropdown === false ? (
              <span sx={{ fontFamily: 'roboto-regular', pl: 1 }}>+</span>
            ) : (
              <span sx={{ fontFamily: 'roboto-regular', pl: 1 }}>--</span>
            )}
          </div>
          <Dropdown submenus={items.navItems} dropdown={dropdown} />
        </>
      ) : (
        <Link
          sx={{
            textDecoration: 'none',
            fontSize: '18px',
            letterSpacing: '.16px',
            fontFamily: 'roboto-condensed-regular',
            color: 'whitePS',
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
