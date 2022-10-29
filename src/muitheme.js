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
          fade: "#6b6b6b",
        },
        secondary: {
          main: '#D4990D',
          fade: '#e3b549',
        },
      },
 });