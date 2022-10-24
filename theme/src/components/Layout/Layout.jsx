/** @jsx jsx */
import {
  jsx,
  Layout as DefaultLayout,
  Header,
  Footer,
  Main,
  Container,
  Styled,
} from 'theme-ui';
import { Global } from '@emotion/core';

const Layout = ({ navChild, mainChild, footerChild }) => (
  <DefaultLayout
    sx={{ fontFamily: 'body', backgroundColor: 'whiteP', color: 'text' }}
  >
    <Global styles={{ body: { margin: 0 } }} />
    <Header>{navChild}</Header>
    <Main>{mainChild}</Main>
    <Footer>{footerChild}</Footer>
  </DefaultLayout>
);

export default Layout;
