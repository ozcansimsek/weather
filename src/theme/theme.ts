import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const appTheme = createTheme({
  palette: {
    primary: { main: "#1565c0" },
    secondary: { main: "#546e7a" },
  },
  typography: {
    fontFamily: "Comfortaa, cursive",
  },
});

export const theme = responsiveFontSizes(appTheme);
