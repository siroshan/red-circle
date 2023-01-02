import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { light } from '@mui/material/styles/createPalette';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: '"Josefin Sans", sans-serif',
    h1: {
      fontFamily: '"DM Serif Display", serif',
      fontWeight: 400,
      textTransform: 'capitalize',
      fontSize: '48px',
    },
    h4: {
      fontFamily: '"Josefin Sans", sans-serif',
      fontWeight: 400,
      textTransform: 'capitalize',
      fontSize: '32px',
    },
    button: {
      fontFamily: '"Josefin Sans", sans-serif',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '2px',
      fontSize: '24px',
    },
  },
  palette: {
    primary: {
      main: '#edcdbb',
      light: '#ffeddb',
      dark: '#e3b7a0',
    },
    secondary: {
      main: '#643700',
      light: '#85586f',
    },
  },
  shape: {
    borderRadius: 0,
  },
});

export default theme;
