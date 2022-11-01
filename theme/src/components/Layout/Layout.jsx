/** @jsx jsx */
import { jsx, Layout as DefaultLayout, Header, Footer, Main } from 'theme-ui';
import { Global } from '@emotion/core';

const Layout = ({ navChild, mainChild, footerChild, children }) => (
  <DefaultLayout
    sx={{ fontFamily: 'body', backgroundColor: 'whiteP', color: 'text' }}
  >
    <Global styles={{ body: { margin: 0 } }} />
    <Header>{navChild}</Header>
    <Main>{mainChild}</Main>
    {children}
    <Footer>{footerChild}</Footer>
  </DefaultLayout>
);

export default Layout;
