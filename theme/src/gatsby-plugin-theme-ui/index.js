const theme = {
  //built in theme.ui keys
  //docs for implementing theme object by using sx prop >>> https://theme-ui.com/sx-prop
  //to access the sx prop >>> make sure /** @jsx jsx */ import { jsx } from 'theme-ui'; are imported on the component
  //implementation >>> <div sx={{backgroundColor: 'endlessPotential', color: 'whiteout'}}>this div is using the theme colors with the sx prop</div>
  breakpoints: ['40em', '52em', '64em'],

  //if you have to add another index to theme arrays, add it onto the end so it doesn't break the targeting elsewhere
  space: [
    '0rem',
    '0.25rem',
    '0.5rem',
    '1rem',
    '2rem',
    '4rem',
    '8rem',
    '16rem',
    '32rem',
    '1.5rem',
    '3.875rem',
    '11rem',
    '0.375rem',
    '1.875rem',
    '1.25rem',
    '0.125rem',
    '0.625rem',
    '0.313rem',
    '5rem',
    '2.5rem',
    '10rem',
    '18.75rem',
    '2.875rem',
  ], //length 22
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
    body: 'roboto-regular, sans-serif',
    heading: 'roboto-bold, sans-serif',
    monospace: 'Menlo, monospace',
    a: 'roboto-regular',
    robotoBold: 'roboto-bold, sans-serif',
    robotoRegular: 'roboto-regular, sans-serif',
    robotoCondensedBold: 'roboto-condensed-bold, sans-serif',
    robotoCondensedRegular: 'roboto-condensed-regular, sans-serif',
  },
  colors: {
    whiteout: '#fff',
    lionShrineLight: '#f7f2ee',
    lionShrineMaxLight: '#fdfbf5',
    blackPS: '#000',
    creek: '#3eae9e',
    creekLight: '#cfeceb',
    creekMaxLight: '#edf8f7',
    beaverBlue: '#1E407C',
    paLink: '#005fa9',
    paLinkLight: '#ccf0ff',
    paSky: '#009CDE',
    midnightBlue: '#002e69',
    nittanyNavy: '#001E44',
    lightNavyBluePS: '#1b3c76',
    endlessPotential: '#000321',
    grayPS: '#C0C0C0',
    silverGrayPS: '#CCDAE6',
    darkSteelPS: '#455460',
    oldCoaly: '#444444',
    brightKeystone: '#ffd100',
    mediumGray: '#727272',
    background: '#fff',
    oldCoaly: '#444',
    limestone: '#a2aaad',
    limestoneLight: '#E4E5E7',
    limestoneMaxLight: '#f2f2f4',
    slate: '#314d64',
    slateLight: '#ccdae6',
    slateMaxLight: '#eef3f7',
    lionShring: '#b88965',
    lionShrineLight: '#f7f2ee',
    lionShrineMaxLight: '#fdfbf5',
    lionsRoar: '#bf8226',
    lionsRoarLight: '#f9eddc',
    lionsRoarMaxLight: '#fffaf2',
    text: '#000',

    transparent: 'transparent',
  },

  //example >>> <h1 sx={{fontSize: 2}}>h1 using a font size of 16</h1>
  fontSizes: [
    '.75rem',
    '0.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '3rem',
    '4rem',
    '6rem',
    '1.438rem',
    '2.625rem',
    '1.125rem',
    '3.438rem',
    '4.375rem',
    '1.875rem',
  ], //length 14
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
        `linear-gradient(to right, ${theme.colors.nittanyNavy} 0, ${theme.colors.nittanyNavy} 31%, ${theme.colors.lightNavyBluePS} 76%, ${theme.colors.endlessPotential})`,
    },
    Main: { width: 4 },
    Container: { p: 0, maxWidth: 1325 },
    Footer: {
      width: 4,
      backgroundImage: () =>
        `linear-gradient(to bottom, ${theme.colors.midnightBlue}, ${theme.colors.nittanyNavy})`,
      color: 'whiteout',
    },

    //not built in keys
    //to access the sx prop >>> make sure /** @jsx jsx */ import { jsx, Styled } from 'theme-ui'; are imported on the component
    //implementation >>> <Styled.h1>using the styled h1 object</Styled.h1>
    p: {
      color: 'oldCoaly',
      variant: 'text.p',
      fontSize: 4,
      my: 2,
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5,
      color: 'nittanyNavy',
      textTransform: 'uppercase',
      my: 2,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
      fontFamily: 'roboto-slab-var',
      color: 'paLink',
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
