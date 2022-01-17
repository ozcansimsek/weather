import { Grid, Box, styled, Typography, Paper, Theme } from "@mui/material";
import RenderIcon from "components/RenderIcon";
import { useAllWeatherDataContext, useSelectedCityContext } from "contexts";
import {
  convertMeterPerSecondToBeaufort,
  convertMeterPerSecondToLocalSpeedUnit,
  convertTimeToDaytime,
  convertTimeToLocalDate,
  convertToLocalTemperatureUnit,
  convertWindDegreesToDirection,
  determineUvIndex,
} from "helpers";

const Item = styled(Box)(({ theme }: { theme: Theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const BorderedItem = styled(Box)(({ theme }: { theme: Theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderColor: `${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:last-of-type": {
    border: 0,
  },
  [theme.breakpoints.down("md")]: {
    borderLeft: 0,
    borderBottom: `1px solid ${theme.palette.divider}`,
    "&:last-of-type": {
      border: 0,
    },
    "&:first-of-type": {
      borderTop: `1px solid ${theme.palette.divider}`,
    },
  },
}));

const BorderedGrid = styled(Grid)(({ theme }: { theme: Theme }) => ({
  borderRight: 0,
  [theme.breakpoints.up("md")]: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const IconAndName = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
}));

const CurrentView = () => {
  const { allWeatherData } = useAllWeatherDataContext();
  const { selectedCity } = useSelectedCityContext();

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Item>
          <Typography variant="h6">
            Current weather in {selectedCity?.name}
          </Typography>
        </Item>
      </Grid>

      <Grid item xs={12} md={6}>
        <Item>
          <Typography>
            {convertTimeToLocalDate(
              allWeatherData?.current.dt,
              allWeatherData?.timezone
            )}
            {allWeatherData?.timezone}
          </Typography>
        </Item>
      </Grid>

      <Paper variant="outlined" sx={{ display: "flex", width: "100%" }}>
        <Grid container>
          <BorderedGrid item xs={12} md={6}>
            <Item>
              <Typography variant="h6">
                {allWeatherData?.current.weather[0].description
                  .charAt(0)
                  .toUpperCase()}
                {allWeatherData?.current.weather[0].description.slice(1)}
              </Typography>
            </Item>

            <Item>
              <RenderIcon
                icon={allWeatherData?.current.weather[0].icon}
                alt={allWeatherData?.current.weather[0].description}
                size="large"
              />
            </Item>

            <Item>
              <Typography variant="h2" color="text.primary">
                {convertToLocalTemperatureUnit(allWeatherData?.current.temp)}
              </Typography>
            </Item>
            <Item>
              <Typography variant="h6" component="span">
                Feels like{" "}
                {convertToLocalTemperatureUnit(
                  allWeatherData?.current.feels_like
                )}
              </Typography>
            </Item>

            <Item>
              <IconAndName>
                <RenderIcon icon="humidity" alt="humidity" size="small" />
                <Typography variant="h6" component="span">
                  Humidity {allWeatherData?.current.humidity}%
                </Typography>
              </IconAndName>
            </Item>

            <Item>
              <IconAndName>
                <RenderIcon
                  icon={`wind-beaufort-${convertMeterPerSecondToBeaufort(
                    allWeatherData?.current.wind_speed
                  )}`}
                  alt="wind-beaufort"
                  size="small"
                />
                <Typography variant="h6">
                  Wind{" "}
                  {convertMeterPerSecondToLocalSpeedUnit(
                    allWeatherData?.current.wind_speed
                  )}{" "}
                  {convertWindDegreesToDirection(
                    allWeatherData?.current.wind_deg
                  )}
                </Typography>
              </IconAndName>
            </Item>
          </BorderedGrid>

          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <BorderedItem>
              <Typography variant="h6">
                Pressure {allWeatherData?.current.pressure}
              </Typography>
            </BorderedItem>

            <BorderedItem>
              <Typography variant="h6">
                Sunrise{" "}
                {convertTimeToDaytime(
                  allWeatherData?.current.sunrise,
                  allWeatherData?.timezone
                )}
              </Typography>
            </BorderedItem>
            <BorderedItem>
              <Typography variant="h6">
                Sunset{" "}
                {convertTimeToDaytime(
                  allWeatherData?.current.sunset,
                  allWeatherData?.timezone
                )}
              </Typography>
            </BorderedItem>
            <BorderedItem>
              <Typography variant="h6">
                UV Index {allWeatherData?.current.uvi}
                {allWeatherData?.current.uvi
                  ? ` (${determineUvIndex(allWeatherData?.current.uvi)})`
                  : ""}
              </Typography>
            </BorderedItem>

            <BorderedItem>
              <Typography variant="h6">
                Clouds {allWeatherData?.current.clouds}%
              </Typography>
            </BorderedItem>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default CurrentView;
