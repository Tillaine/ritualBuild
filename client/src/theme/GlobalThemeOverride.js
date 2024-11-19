import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

// Blue #343E7D
// Gold #D6BA58
// Hat Green #4D3C39

const theme = createTheme({
  palette: {
    primary: {
      main: '#343E7D'
     },
     secondary: {
      main: '#ADD8E6'
     }
    },
  typography: {
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
        h1: {
          fontSize: '3rem',
          color: 'white',
          fontWeight: 900  },
        h2: {
          fontSize: '1.5rem',
          color: 'white',
          fontWeight: 800  },
        h3: {
          fontSize: '1rem',
          color: 'white',
          fontWeight: 700  },
          subtitle1: {
            fontSize: '.75rem',
            color: 'white',
            fontWeight: 700  },
          body1: {
              fontWeight: 600,
            },
      },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
      },
    },
  },
});

 const GlobalThemeOverride = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default GlobalThemeOverride