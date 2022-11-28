import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    white: string,
    yellow: string,
    gold: string,
    gray1: string,
    gray2: string,
    gray3: string,
    blue: string,
    black: string,
    transparent: string,
  }
  interface PaletteOptions {
    white: string,
    yellow: string,
    gold: string,
    gray1: string,
    gray2: string,
    gray3: string,
    blue: string,
    black: string,
    transparent: string,
  }
}

export const theme = createTheme({
  shape: {
    borderRadius: 0,
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  palette: {
    white: '#ffffff',
    yellow: '#ffe400',
    gold: '#fcf3d3',
    gray1: '#f5f5f5',
    gray2: '#d7d7d7',
    gray3: '#a0a0a0',
    blue: '#2297d8',
    black: '#282828',
    transparent: 'transparent',
    primary: {
      main: '#282828',
    },
    secondary: {
      main: '#ffe400',
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Rubik',
    },
    htmlFontSize: 16,
    h1: {
      fontWeight: 700,
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 600,
      lineHeight: 1.1,
    },
    h3: {
      fontWeight: 600,
      lineHeight: 1.1,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 500,
    },
    body2: {
      fontWeight: 500,
    },
  },
});
