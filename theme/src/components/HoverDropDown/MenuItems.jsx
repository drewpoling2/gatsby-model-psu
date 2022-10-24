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
      {items.submenu ? (
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
            {items.title}
          </div>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;
