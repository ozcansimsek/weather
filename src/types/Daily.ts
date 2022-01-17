import { Weather } from "./Weather";

export interface Daily {
  dt: number; // 1618308000,
  sunrise: number; // 1618282134,
  sunset: number; // 1618333901,
  moonrise: number; // 1618284960,
  moonset: number; // 1618339740,
  moon_phase: number; // 0.04,
  temp: {
    day: number; // 279.79,
    min: number; // 275.09,
    max: number; // 284.07,
    night: number; // 275.09,
    eve: number; // 279.21,
    morn: number; // 278.49
  };
  feels_like: {
    day: number; // 277.59,
    night: number; // 276.27,
    eve: number; // 276.49,
    morn: number; // 276.27
  };
  pressure: number; // 1020,
  humidity: number; // 81,
  dew_point: number; // 276.77,
  wind_speed: number; // 3.06,
  wind_deg: number; // 294,
  wind_gust: number;
  weather: Weather[];
  clouds: number; // 56,
  pop: number; // 0.2,
  rain: number; // 0.62,
  uvi: number; // 1.93
}
