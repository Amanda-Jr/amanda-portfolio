import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#E3D0EA",
      light: '#9b71b2',
      dark: '#3a1636',
      
      
    },
    secondary: {
      main: "#71903d",
      light: '#bed597',
      dark: '#374126',
    },
    
  },

  typography:{
    fontFamily: "Iosevka Charon Mono",  
    //"Pixelify Sans"
  },

});

theme = responsiveFontSizes(theme)

export default theme;
