import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import DailyTabContent from "./DailyTabContent";
import SwipeableViews from "react-swipeable-views";
import { useState } from "react";
import { convertToLocalTemperatureUnit, getDayName } from "helpers";
import { useAllWeatherDataContext, useSelectedCityContext } from "contexts";
import { Daily } from "types";
import RenderIcon from "components/RenderIcon";

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

const DailyView = () => {
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
          Daily weather in {selectedCity?.name} {selectedCity?.country}
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
        {allWeatherData.daily.map((day: Daily, index: number) => {
          return (
            <Tab
              label={
                <Box display="flex" alignItems="center" flexDirection="column">
                  <Box display="flex" alignItems="center">
                    <RenderIcon
                      icon={day.weather[0].icon}
                      alt={day.weather[0].description}
                      size="small"
                    />
                    <Box>
                      <Typography variant="h6" component="span">
                        {convertToLocalTemperatureUnit(day.temp.max)}
                      </Typography>
                      <Typography variant="body2" component="span">
                        {" " + convertToLocalTemperatureUnit(day.temp.min)}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2">
                    {getDayName(day.dt, allWeatherData.timezone)}
                  </Typography>
                </Box>
              }
              {...a11yProps(index)}
              key={day.dt.toString()}
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
          {allWeatherData.daily.map((day: Daily, index: number) => (
            <TabPanel value={value} index={index} key={"tabPanel" + index}>
              <DailyTabContent
                allWeatherData={allWeatherData}
                data={day}
                key={day.dt.toString()}
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

export default DailyView;
