import { Weather } from "./Weather";

export interface Current {
  dt: number; // 1618317040,
  sunrise: number; // 1618282134,
  sunset: number; // 1618333901,
  temp: number; // 284.07,
  feels_like: number; // 282.84,
  pressure: number; // 1019,
  humidity: number; // 62,
  dew_point: number; // 277.08,
  uvi: number; // 0.89,
  clouds: number; // 0,
  visibility: number; // 10000,
  wind_speed: number; // 6,
  wind_deg: number; // 300,
  weather: Weather[];
  rain: {
    "1h": number; // 0.21
  };
}
