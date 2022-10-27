const theme = {
  //built in theme.ui keys
  //docs for implementing theme object by using sx prop >>> https://theme-ui.com/sx-prop
  //to access the sx prop >>> make sure /** @jsx jsx */ import { jsx } from 'theme-ui'; are imported on the component
  //implementation >>> <div sx={{backgroundColor: 'bluishBlackPS', color: 'whitePS'}}>this div is using the theme colors with the sx prop</div>
  breakpoints: ['40em', '52em', '64em'],

  //if you have to add another index to theme arrays, add it onto the end so it doesn't break the targeting elsewhere
  space: [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
    512,
    24,
    62,
    176,
    6,
    30,
    20,
    2,
    10,
    5,
    80,
    40,
  ], //length 19
  sizes: [
    '0%',
    '25%',
    '50%',
    '75%',
    '100%',
    'fit-content',
    'auto',
    '33%',
    '66%',
    '70%',
    '80%',
  ], //9
  fonts: {
    body: 'roboto, sans-serif',
    heading: 'roboto, sans-serif',
    monospace: 'Menlo, monospace',
    a: 'roboto',
  },
  colors: {
    whitePS: '#fff',
    blackPS: '#000',
    bluePS: '#1E407C',
    mediumBluePS: '#005fa9',
    lightBluePS: '#ccf0ff',
    robinsEggBluePS: '#009CDE',
    navyBluePS: '#002e69',
    darkNavyBluePS: '#001E44',
    lightNavyBluePS: '#1b3c76',
    bluishBlackPS: '#000321',
    grayPS: '#C0C0C0',
    darkSteelPS: '#455460',
    paragraphGrayPS: '#444444',
    yellowPS: '#ffd100',
    lightGrayPS: '#F2F2F4',
    background: '#fff',
    text: '#000',
    transparent: 'transparent',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96, 22, 42, 18], //length 11
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.3,
    heading: 1.125,
    copy: 1.5,
  },
  letterSpacing: {
    button: 0.5,
    navDropdown: 1,
  },
  borders: {
    dotted: '2px dotted white',
    solid: '2px solid white',
    defaultButton: '2px solid black',
    outlineButton: '2px solid white',
  },

  //custom variants
  //docs for variants >>> https://theme-ui.com/theme-spec
  //to access the sx prop >>> make sure /** @jsx jsx */ import { jsx } from 'theme-ui'; are imported on the component
  //implementation >>> <div sx={{variant: 'layout.row'}}>this div is using the theme layout.row variant with the sx prop</div>
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    p: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
    italics: {
      fontStyle: 'italic',
    },
    dropdownMenu: {
      textTransform: 'capitalize',
      fontFamily: 'heading',
      fontWeight: 'heading',
      letterSpacing: 'navDropdown',
      textDecoration: 'none',
    },
    button: {
      fontFamily: 'heading',
      textTransform: 'uppercase',
      fontWeight: 'heading',
      fontStyle: 'italic',
      cursor: 'pointer',
      letterSpacing: 'button',
      lineHeight: 'heading',
    },
    copyP: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'copy',
    },
  },
  layout: {
    row: { display: 'flex', flexDirection: 'row' },
    col: { display: 'flex', flexDirection: 'column' },
    rowJ: { display: 'flex', flexDirection: 'row', justifyContent: 'center' },
    rowJSB: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    rowJAC: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    colJ: { display: 'flex', flexDirection: 'row', justifyContent: 'center' },
    colJAC: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    displayNone: {
      display: 'none',
    },
    displayShow: {
      display: 'block',
    },
  },
  buttons: {
    primary: {
      color: 'red',
      bg: 'blue',
      '&:hover': {
        bg: 'text',
      },
      px: 3,
      py: 1,
    },
    secondary: {
      color: 'yellow',
      bg: 'green',
    },
  },
  arrows: {
    navDropdown: {
      color: 'blackPS',
      position: 'absolute',
      height: '20px',
      width: '20px',
    },
  },

  //built in style object
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },

    //built in keys
    //to access the sx prop >>> make sure /** @jsx jsx */ import { jsx, Header } from 'theme-ui'; are imported on the component
    //implementation >>> <Header>using the styled Header object</Header>
    Layout: {},
    Header: {
      backgroundImage: () =>
        `linear-gradient(to right, ${theme.colors.navyBluePS} 0, ${theme.colors.navyBluePS} 31%, ${theme.colors.lightNavyBluePS} 76%, ${theme.colors.bluishBlackPS})`,
    },
    Main: { width: 4 },
    Container: { p: 0, maxWidth: 1325 },
    Footer: {
      width: 4,
      backgroundImage: () =>
        `linear-gradient(to bottom, ${theme.colors.navyBluePS}, ${theme.colors.darkNavyBluePS})`,
      color: 'whitePS',
    },

    //not built in keys
    //to access the sx prop >>> make sure /** @jsx jsx */ import { jsx, Styled } from 'theme-ui'; are imported on the component
    //implementation >>> <Styled.h1>using the styled h1 object</Styled.h1>
    p: {
      color: 'paragraphGrayPS',
      variant: 'text.p',
      fontSize: 2,
      my: 2,
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5,
      color: 'darkNavyBluePS',
      textTransform: 'uppercase',
      my: 2,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
      color: 'mediumBluePS',
      my: 1,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    a: {
      fontFamily: 'a',
      cursor: 'pointer',
    },
  },
};

export default theme;
