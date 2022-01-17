import {
  ViewModule as CurrentIcon,
  AccessTime as HourlyIcon,
  Today as DailyIcon,
} from "@mui/icons-material";
import TabWrapper from "./TabWrapper";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import dayjs from "dayjs";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import CurrentView from "components/Current";
import { HourlyView } from "components/Hourly";
import DailyView from "components/Daily";

dayjs.extend(utc);
dayjs.extend(timezone);

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
      {value === index && (
        <Box sx={{ p: 1 }}>
          <TabWrapper>{children}</TabWrapper>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsView() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="Current" icon={<CurrentIcon />} {...a11yProps(0)} />
          <Tab label="Hourly" icon={<HourlyIcon />} {...a11yProps(1)} />
          <Tab label="Daily" icon={<DailyIcon />} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CurrentView />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HourlyView />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DailyView />
      </TabPanel>
    </Box>
  );
}
