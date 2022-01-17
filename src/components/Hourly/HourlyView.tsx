import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import { Hourly } from "types/Hourly";
import HourlyTabContent from "./HourlyTabContent";
import SwipeableViews from "react-swipeable-views";
import { useState } from "react";
import RenderIcon from "components/RenderIcon";
import {
  checkIsTodayOrTomorrow,
  convertTimeToHour,
  convertToLocalTemperatureUnit,
} from "helpers";
import { useAllWeatherDataContext, useSelectedCityContext } from "contexts";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const HourlyView = () => {
  const { allWeatherData } = useAllWeatherDataContext();
  const { selectedCity } = useSelectedCityContext();

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return allWeatherData ? (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" align="center" color="text.primary">
          Hourly weather in {selectedCity?.name} {selectedCity?.country}
        </Typography>
      </Grid>

      <Tabs
        value={value}
        variant="scrollable"
        onChange={handleChange}
        sx={{
          bgcolor: "secondary.main",
          color: "primary.contrastText",
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
        TabIndicatorProps={{
          style: { height: 5, backgroundColor: "white" },
        }}
        textColor="inherit"
      >
        {allWeatherData.hourly.map((hour: Hourly, index: number) => {
          return (
            <Tab
              label={
                <Box display="flex" alignItems="center" flexDirection="column">
                  <Box display="flex" alignItems="center">
                    <RenderIcon
                      icon={hour.weather[0].icon}
                      alt={hour.weather[0].description}
                      size="small"
                    />
                    <Typography variant="body1" component="span">
                      {convertToLocalTemperatureUnit(hour.temp)}
                    </Typography>
                  </Box>
                  <Typography variant="body2">
                    {checkIsTodayOrTomorrow(hour.dt, allWeatherData.timezone) +
                      " " +
                      convertTimeToHour(hour.dt, allWeatherData.timezone)}
                  </Typography>
                </Box>
              }
              {...a11yProps(index)}
              key={hour.dt.toString()}
            />
          );
        })}
      </Tabs>

      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        sx={{ bgcolor: "background.paper" }}
      >
        <SwipeableViews
          axis={"x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {allWeatherData.hourly.map((hour: Hourly, index: number) => (
            <TabPanel value={value} index={index} key={"tabPanel" + index}>
              <HourlyTabContent
                allWeatherData={allWeatherData}
                data={hour}
                key={hour.dt.toString()}
                index={index}
              />
            </TabPanel>
          ))}
        </SwipeableViews>
      </Box>
    </Grid>
  ) : (
    <Typography component="span">Could not get weather data.</Typography>
  );
};

export default HourlyView;
