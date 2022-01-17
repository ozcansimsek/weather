import { ThemeProvider } from "@mui/material";
import { AllWeatherDataProvider, SelectedCityProvider } from "contexts";
import { theme } from "theme";
import "./App.css";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SelectedCityProvider>
        <AllWeatherDataProvider>
          <MainLayout />
        </AllWeatherDataProvider>
      </SelectedCityProvider>
    </ThemeProvider>
  );
}

export default App;
