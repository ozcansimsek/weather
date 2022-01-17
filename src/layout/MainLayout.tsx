import { Container, Grid } from "@mui/material";
import { useEffect } from "react";
import useFetch from "use-http";
import { useAllWeatherDataContext, useSelectedCityContext } from "contexts";
import {
  SetGeoLocationWithDeviceButton,
  SetGeoLocationWithIpButton,
} from "components/buttons";
import { ALL_WEATHER_DATA } from "endpoints";
import SearchBox from "components/CitySearch";
import { TabsView } from "components/TabsComponent";

const MainLayout = ({ children }: { children?: React.ReactElement }) => {
  const { setAllWeatherData } = useAllWeatherDataContext();
  const { selectedCity } = useSelectedCityContext();

  const { get, response } = useFetch(ALL_WEATHER_DATA(selectedCity));

  useEffect(() => {
    async function getAllWeatherData() {
      if (selectedCity) {
        const data = await get();
        if (response.ok) setAllWeatherData(data);
      }
    }
    getAllWeatherData();
  }, [get, response.ok, selectedCity, setAllWeatherData]);

  return (
    <Container
      sx={{
        pt: 4,
        backgroundColor: "rgba(0, 0, 0, 0.02)",
        minHeight: "100vh",
      }}
    >
      {children}

      <Grid container>
        <Grid item xs={12} display="flex" justifyContent="center">
          <SearchBox />
        </Grid>

        <Grid item xs={12} display="flex" justifyContent="center">
          <SetGeoLocationWithDeviceButton />
          <SetGeoLocationWithIpButton />
        </Grid>
        <Grid item xs={12}>
          <TabsView />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainLayout;
