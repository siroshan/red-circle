import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: '"Josefin Sans", sans-serif',
    h1: {
      fontFamily: '"DM Serif Display", serif',
      fontWeight: 400,
      textTransform: 'capitalize',
      letterSpacing: '10%',
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
      letterSpacing: '10%',
      fontSize: '24px',
    },
  },
  palette: {
    primary: {
      main: '#85586F',
      light: '#E3B7A0',
    },
  },
  shape: {
    borderRadius: 0,
  },
});

export default theme;
