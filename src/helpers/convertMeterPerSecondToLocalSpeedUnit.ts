export const convertMeterPerSecondToLocalSpeedUnit = (speed?: number) => {
  if (speed) return (speed * 3.6).toFixed() + " km/h";
  else return "N/A";
};
