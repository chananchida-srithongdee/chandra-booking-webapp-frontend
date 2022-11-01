import { createTheme } from '@mui/material/styles';

export const THEME = createTheme({
    typography: {
     "fontFamily": `'Tinos', serif`,
     "fontWeightRegular": 400,
     "fontWeightBold": 700
    },
    palette: {
        primary: {
          main: '#484848',
        },
        primaryfade: {
          main: "#6b6b6b",
        },
        secondary: {
          main: '#D4990D',
        },
        secondaryfade: {
          main: '#e3b549',
        },
        white: {
          main: '#ffffff',
        },
      },
 });