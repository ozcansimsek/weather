import { Box, Grid, styled, Theme, Typography } from "@mui/material";
import RenderIcon from "components/RenderIcon";
import {
  convertToLocalTemperatureUnit,
  convertMeterPerSecondToBeaufort,
  convertMeterPerSecondToLocalSpeedUnit,
  convertWindDegreesToDirection,
  determineUvIndex,
} from "helpers";
import { AllWeatherData, Hourly } from "types";

const Item = styled(Box)(({ theme }: { theme: Theme }) => ({
  ...theme.typography.body2,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(0.25),
  color: theme.palette.text.primary,
}));

const IconAndName = styled(Box)(({ theme }: { theme: Theme }) => ({
  ...theme.typography.body2,
  display: "flex",
  alignItems: "center",
  color: theme.palette.text.primary,
}));

const HourlyTabContent = ({
  data,
  index,
  allWeatherData,
}: {
  data: Hourly;
  index: number;
  allWeatherData: AllWeatherData;
}) => {
  return (
    <Grid container columnSpacing={4}>
      <Grid item xs={12} md={6} flexDirection="row">
        <Item>
          <IconAndName>
            <RenderIcon
              icon={data.weather[0].icon}
              alt={data.weather[0].description}
              size="small"
            />
            <Typography variant="body2">Weather</Typography>
          </IconAndName>

          <Typography variant="body2">
            {data.weather[0].description.charAt(0)
              .toUpperCase()}
            {data.weather[0].description.slice(1)}
          </Typography>
        </Item>
      </Grid>

      <Grid item xs={12} md={6} flexDirection="row">
        <Item>
          <IconAndName>
            <RenderIcon icon="thermometer" alt="thermometer" size="small" />
            <Typography variant="body2">Temperature</Typography>
          </IconAndName>
          <Typography variant="body2">
            {convertToLocalTemperatureUnit(data.temp)}
          </Typography>
        </Item>
      </Grid>

      <Grid item xs={12} md={6} flexDirection="row">
        <Item>
          <IconAndName>
            <RenderIcon icon="raindrops" alt="raindrops" size="small" />
            <Typography variant="body2">Precipitation</Typography>
          </IconAndName>

          <Typography variant="body2">{(data.pop * 100).toFixed()}%</Typography>
        </Item>
      </Grid>

      <Grid item xs={12} md={6} flexDirection="row">
        <Item>
          <IconAndName>
            <RenderIcon icon="cloudy" alt="cloudy" size="small" />
            <Typography variant="body2" alignItems="center">
              Clouds
            </Typography>
          </IconAndName>
          <Typography variant="body2">{data.clouds}%</Typography>
        </Item>
      </Grid>

      <Grid item xs={12} md={6} flexDirection="row">
        <Item>
          <IconAndName>
            <RenderIcon
              icon="thermometer-glass"
              alt="thermometer-glass"
              size="small"
            />
            <Typography variant="body2">Dew point</Typography>
          </IconAndName>
          <Typography variant="body2">
            {convertToLocalTemperatureUnit(data.dew_point)}
          </Typography>
        </Item>
      </Grid>

      <Grid item xs={12} md={6} flexDirection="row">
        <Item>
          <IconAndName>
            <RenderIcon icon="humidity" alt="humidity" size="small" />
            <Typography variant="body2">Humidity</Typography>
          </IconAndName>

          <Typography variant="body2">{data.humidity}%</Typography>
        </Item>
      </Grid>

      <Grid item xs={12} md={6} flexDirection="row">
        <Item>
          <IconAndName>
            <RenderIcon icon="barometer" alt="barometer" size="small" />
            <Typography variant="body2">Pressure</Typography>
          </IconAndName>
          <Typography variant="body2">{data.pressure}</Typography>
        </Item>
      </Grid>

      <Grid item xs={12} md={6} flexDirection="row">
        <Item>
          <IconAndName>
            <RenderIcon
              icon={
                data.uvi >= 1 && data.uvi < 12
                  ? `uv-index-${data.uvi.toFixed()}`
                  : "uv-index"
              }
              alt="uv-index"
              size="small"
            />
            <Typography variant="body2">UV Index</Typography>
          </IconAndName>

          <Typography variant="body2">
            {data.uvi.toFixed()}
            {data.uvi ? ` (${determineUvIndex(data.uvi)})` : ""}
          </Typography>
        </Item>
      </Grid>

      <Grid item xs={12} md={6} flexDirection="row">
        <Item>
          <IconAndName>
            <RenderIcon
              icon={`wind-beaufort-${convertMeterPerSecondToBeaufort(
                data.wind_speed
              )}`}
              alt="wind-beaufort"
              size="small"
            />
            <Typography variant="body2">Wind</Typography>
          </IconAndName>
          <Typography variant="body2">
            {convertMeterPerSecondToLocalSpeedUnit(data.wind_speed)}{" "}
            {convertWindDegreesToDirection(data.wind_deg)}
          </Typography>
        </Item>
      </Grid>

      <Grid item xs={12} md={6} flexDirection="row">
        <Item>
          <IconAndName>
            <RenderIcon
              icon={`wind-beaufort-${convertMeterPerSecondToBeaufort(
                data.wind_gust
              )}`}
              alt="wind-gust-beaufort"
              size="small"
            />
            <Typography variant="body2">Wind Gusts</Typography>
          </IconAndName>
          <Typography variant="body2">
            {convertMeterPerSecondToLocalSpeedUnit(data.wind_gust)}{" "}
          </Typography>
        </Item>
      </Grid>
    </Grid>
  );
};

export default HourlyTabContent;
