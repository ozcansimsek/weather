export const convertToLocalTemperatureUnit = (temparature?: number) => {
  const KELVIN = 273.15;
  if (temparature) return Math.round(temparature - KELVIN) + "°C";
  else return "N/A";
};
