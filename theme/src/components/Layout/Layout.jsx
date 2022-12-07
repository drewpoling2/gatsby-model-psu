/** @jsx jsx */
import { jsx, Layout as DefaultLayout, Header, Footer, Main } from 'theme-ui';
import { CustomFooter } from '../CustomFooter/CustomFooter';
import { Nav } from '../Nav/Nav';
import { Global } from '@emotion/core';

const Layout = ({
  navChild = Nav,
  mainChild,
  footerChild = CustomFooter,
  children,
}) => (
  <DefaultLayout
    sx={{ fontFamily: 'body', backgroundColor: 'whiteout', color: 'text' }}
  >
    <Global styles={{ body: { margin: 0 } }} />
    <Header>{navChild}</Header>
    <Main>{mainChild}</Main>
    {children}
    <Footer>{footerChild}</Footer>
  </DefaultLayout>
);

export default Layout;
