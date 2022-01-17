import { Alerts } from "./Alerts";
import { Current } from "./Current";
import { Daily } from "./Daily";
import { Hourly } from "./Hourly";
import { Minutely } from "./Minutely";

export interface AllWeatherData {
  lat: number; // 33.44,
  lon: number; // -94.04,
  timezone: string; // "America/Chicago",
  timezone_offset: number; // -21600,
  current: Current;
  minutely: Minutely[];
  hourly: Hourly[];
  daily: Daily[];
  alerts: Alerts[];
}
