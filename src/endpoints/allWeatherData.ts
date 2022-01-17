import { City } from "types/City";

export const ALL_WEATHER_DATA = (selectedCity: City | null) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${selectedCity?.lat}&lon=${selectedCity?.lng}&exclude=&appid=${process.env.REACT_APP_API_KEY}`;
};
