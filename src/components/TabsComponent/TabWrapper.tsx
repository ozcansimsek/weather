import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useAllWeatherDataContext, useSelectedCityContext } from "contexts";

const TabWrapper = ({ children }: { children: React.ReactNode }) => {
  const { allWeatherData } = useAllWeatherDataContext();
  const { selectedCity } = useSelectedCityContext();

  if (allWeatherData && selectedCity) {
    return <>{children}</>;
  } else if (!!selectedCity === true && !!allWeatherData === false) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  } else return <Typography align="center">Please select a city..</Typography>;
};

export default TabWrapper;
