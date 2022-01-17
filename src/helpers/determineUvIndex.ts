export const determineUvIndex = (uvIndex?: number): string => {
  let uvDescription = "";
  if (uvIndex && uvIndex > 0) {
    if (uvIndex >= 11) {
      uvDescription = "Extreme";
    } else if (uvIndex >= 8) {
      uvDescription = "Very High";
    } else if (uvIndex >= 6) {
      uvDescription = "High";
    } else if (uvIndex >= 3) {
      uvDescription = "Moderate";
    } else if (uvIndex >= 1) {
      uvDescription = "Low";
    } else if (uvIndex < 1) {
      uvDescription = "Very Low";
    } else uvDescription = "N/A";
  }
  return uvDescription;
};
