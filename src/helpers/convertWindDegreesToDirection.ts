const directions = [
  "N",
  "NNE",
  "NE",
  "ENE",
  "E",
  "ESE",
  "SE",
  "SSE",
  "S",
  "SSW",
  "SW",
  "WSW",
  "W",
  "WNW",
  "NW",
  "NNW",
  "N",
];

export const convertWindDegreesToDirection = (degrees?: number) => {
  if (degrees) return directions[(degrees / 22.5).toFixed(0) as any] as string;
  else return "";
};
