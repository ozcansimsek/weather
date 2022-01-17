import { Box, Grid, styled, Theme, Typography } from "@mui/material";
import {
  convertMeterPerSecondToLocalSpeedUnit,
  convertTimeToDaytime,
  convertToLocalTemperatureUnit,
  convertWindDegreesToDirection,
  determineMoonPhase,
  determineUvIndex,
} from "helpers";
import { AllWeatherData, Daily } from "types";

const Item = styled(Box)(({ theme }: { theme: Theme }) => ({
  ...theme.typography.body2,
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(1),
  color: theme.palette.text.primary,
}));

const DailyTabContent = ({
  data,
  index,
  allWeatherData,
}: {
  data: Daily;
  index: number;
  allWeatherData: AllWeatherData;
}) => {
  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <Typography variant="body2">Weather </Typography>
            <Typography variant="body2">
              {allWeatherData?.current.weather[0].description
                .charAt(0)
                .toUpperCase()}
              {allWeatherData?.current.weather[0].description.slice(1)}
            </Typography>
          </Item>

          <Item>
            <Typography variant="body2">Dew point</Typography>
            <Typography variant="body2">
              {convertToLocalTemperatureUnit(data.dew_point)}
            </Typography>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <Typography variant="body2">Dew point</Typography>
            <Typography variant="body2">
              {convertToLocalTemperatureUnit(data.dew_point)}
            </Typography>
          </Item>
          <Item>
            <Typography variant="body2">Humidity</Typography>
            <Typography variant="body2">{data.humidity}%</Typography>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <Typography variant="body2">Clouds</Typography>
            <Typography variant="body2">{data.clouds}%</Typography>
          </Item>

          <Item>
            <Typography variant="body2">Moon</Typography>
            <Typography variant="body2">
              {determineMoonPhase(data.moon_phase)}
            </Typography>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <Typography variant="body2">Moonrise</Typography>
            <Typography variant="body2">
              {convertTimeToDaytime(data.moonrise, allWeatherData.timezone)}
            </Typography>
          </Item>

          <Item>
            <Typography variant="body2">Moonset</Typography>
            <Typography variant="body2">
              {convertTimeToDaytime(data.moonset, allWeatherData.timezone)}
            </Typography>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <Typography variant="body2">Precipitation</Typography>
            <Typography variant="body2">
              {(data.pop * 100).toFixed()}%
            </Typography>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <Typography variant="body2">Pressure</Typography>
            <Typography variant="body2">{data.pressure}</Typography>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <Typography variant="body2">Rain</Typography>
            <Typography variant="body2">
              {data.rain ? (data.rain * 10).toFixed() + "mm" : "0"}
            </Typography>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <Typography variant="body2">Sunrise</Typography>
            <Typography variant="body2">
              {convertTimeToDaytime(data.sunrise, allWeatherData.timezone)}
            </Typography>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <Typography variant="body2">Sunset</Typography>
            <Typography variant="body2">
              {convertTimeToDaytime(data.sunset, allWeatherData.timezone)}
            </Typography>
          </Item>
        </Grid>

        {Object.entries(data.temp).map(([partOfTheDay, temperature]) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={partOfTheDay}>
              <Item>
                <Typography variant="body2">
                  {partOfTheDay.slice(0, 1).toUpperCase()}
                  {partOfTheDay.slice(1)}
                </Typography>
                <Typography variant="body2">
                  {convertToLocalTemperatureUnit(temperature)}
                </Typography>
              </Item>
            </Grid>
          );
        })}

        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <Typography variant="body2">UV Index</Typography>
            <Typography variant="body2">
              {data.uvi}
              {data.uvi ? ` (${determineUvIndex(data.uvi)})` : ""}
            </Typography>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <Typography variant="body2">Wind</Typography>
            <Typography variant="body2">
              {convertMeterPerSecondToLocalSpeedUnit(data.wind_speed)}{" "}
              {convertWindDegreesToDirection(data.wind_deg)}
            </Typography>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <Typography variant="body2">Wind Gusts</Typography>
            <Typography variant="body2">
              {convertMeterPerSecondToLocalSpeedUnit(data.wind_gust)}{" "}
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DailyTabContent;
