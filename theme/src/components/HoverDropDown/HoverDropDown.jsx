/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import MenuItems from './MenuItems';

export const HoverDropDown = ({ navData, column }) => {
  return (
    <nav id="navItems">
      <Flex
        sx={{
          flexDirection: column ? 'column' : 'row',
          alignItems: column ? 'center' : 'none',
          mt: 3,
        }}
      >
        {navData.contentfulLayoutHeader.navItems.map((items, index) => {
          return (
            <MenuItems column={column} items={items} key={index}></MenuItems>
          );
        })}
      </Flex>
    </nav>
  );
};
