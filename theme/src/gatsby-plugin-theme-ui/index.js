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
    body: 'roboto-regular, system-ui',
    heading: 'roboto-bold, system-ui',
    monospace: 'Menlo, monospace',
    a: 'roboto-regular, system-ui',
    robotoBold: 'roboto-bold, system-ui',
    robotoRegular: 'roboto-regular, system-ui',
    robotoCondensedBold: 'roboto-condensed-bold, system-ui',
    robotoCondensedRegular: 'roboto-condensed-regular, system-ui',
  },

  //example >>> sx={{color: 'whiteout'}} -or- sx={{border: `1px solid ${theme.colors.whiteout}}} (to get colors this way you need to import theme object)
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

  //example >>> <h1 sx={{fontSize: 'lg'}}>h1 using a font size of 1.25rem</h1>
  fontSizes: {
    xs: [
      '0.75rem',
      { lineHeight: '1rem' },

      // '.75rem',
      // '0.875rem',
      // '1rem',
      // '1.25rem',
      // '1.5rem',
      // '2rem',
      // '3rem',
      // '4rem',
      // '6rem',
      // '1.438rem',
      // '2.625rem',
      // '1.125rem',
      // '3.438rem',
      // '4.375rem',
      // '1.875rem',
    ],
    s: ['.875rem', { lineHeight: '1.25rem' }],
    m: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.25rem', { lineHeight: '1.75rem' }],
    xl: ['1.375rem', { lineHeight: '1.875rem' }],
    '2xl': ['1.438rem', { lineHeight: '1.938rem' }],
    '3xl': ['1.5rem', { lineHeight: '2rem' }],
    '4xl': ['1.875rem', { lineHeight: '2.375rem' }],
    '5xl': ['2rem', { lineHeight: '2.5rem' }],
    '6xl': ['2.625rem', { lineHeight: '3.125rem' }],
    '7xl': ['3rem', { lineHeight: '3.5rem' }],
    '8xl': ['3.438rem', { lineHeight: '3.938rem' }],
    '9xl': ['4rem', { lineHeight: '4.5rem' }],
    '10xl': ['4.375rem', { lineHeight: '4.875rem' }],
    '11xl': ['6rem', { lineHeight: '6.5rem' }],
  },
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
    default: {
      backgroundImage: () =>
        `linear-gradient(to bottom, ${theme.colors.paSky},  ${theme.colors.beaverBlue})`,
      color: 'whiteout',
      px: 13,
      py: 2,
      mx: 0,
      '&:hover': {},
    },
    hotline: {
      backgroundColor: 'endlessPotential',
      color: 'paLinkLight',
      border: '2px solid #000321',
      px: 13,
      py: 1,
      mx: 1,
      '&:hover': {
        border: '2px solid #ffd100',
        backgroundColor: 'brightKeystone',
        color: 'endlessPotential',
      },
    },
    outlined: {
      backgroundColor: 'none',
      color: 'whiteout',
      border: 'outlineButton',
      px: 13,
      py: 2,
      my: 2,
      '&:hover': {
        backgroundColor: 'paLinkLight',
        color: 'paLink',
      },
    },
    outlinedNav: {
      backgroundColor: 'none',
      color: 'paLinkLight',
      border: '2px solid #ccf0ff',
      px: 13,
      py: 1,
      mx: 1,
      cursor: 'pointer',
      '&:hover': {
        border: '2px solid #009CDE',
        backgroundImage: () =>
          `linear-gradient(to bottom, ${theme.colors.paSky},  ${theme.colors.beaverBlue})`,
        color: 'whiteout',
      },
    },
    outlinedNavSecondary: {
      backgroundColor: 'none',
      color: 'paLink',
      border: '2px solid #005fa9',
      px: 13,
      py: 1,
      mx: 1,
      cursor: 'pointer',
      '&:hover': {
        border: '2px solid #009CDE',
        backgroundImage: () =>
          `linear-gradient(to bottom, ${theme.colors.paSky},  ${theme.colors.beaverBlue})`,
        color: 'whiteout',
      },
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
