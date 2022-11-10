/** @jsx jsx */
import { jsx } from 'theme-ui';
import MenuItems from './MenuItems';

export const HoverDropDown = ({ title, navData }) => {
  return (
    <nav>
      <ul sx={{ variant: 'layout.row', mt: 2 }}>
        {navData.contentfulLayoutHeader.navItems.map((items, index) => {
          return <MenuItems items={items} key={index}></MenuItems>;
        })}
      </ul>
    </nav>
  );
};
