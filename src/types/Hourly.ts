import { Weather } from "./Weather";

export interface Hourly {
  dt: number; // 1618315200,
  temp: number; // 282.58,
  feels_like: number; // 280.4,
  pressure: number; // 1019,
  humidity: number; //  68,
  dew_point: number; // 276.98,
  uvi: number; // 1.4,
  clouds: number; // 19,
  visibility: number; // 306,
  wind_speed: number; // 4.12,
  wind_deg: number; // 296,
  wind_gust: number; //  7.33,
  weather: Weather[];
  pop: number;
}
