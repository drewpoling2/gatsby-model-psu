/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';
import Dropdown from './Dropdown';

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };
  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {items.navItems ? (
        <>
          <div
            sx={{
              color: 'whitePS',
              mx: 14,
              position: 'relative',
              cursor: 'pointer',
            }}
            type="button"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.name}
          </div>
          <Dropdown submenus={items.navItems} dropdown={dropdown} />
        </>
      ) : (
        <a
          sx={{
            color: 'whitePS',
            mx: 14,
            position: 'relative',
            cursor: 'pointer',
          }}
          href={items.url}
        >
          {items.text}
        </a>
      )}
    </li>
  );
};

export default MenuItems;
