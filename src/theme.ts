import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#3a1636",
    },
    secondary: {
      main: "#374126",
    },
  },

  typography:{
    fontFamily: "Iosevka Charon Mono",
  },

});

theme = responsiveFontSizes(theme)

export default theme;
