export const convertMeterPerSecondToBeaufort = (speed?: number) => {
  let beaufort: number | null;

  if (speed) {
    if (speed >= 32.7) beaufort = 12;
    else if (speed >= 28.5) beaufort = 11;
    else if (speed >= 24.5) beaufort = 10;
    else if (speed >= 20.8) beaufort = 9;
    else if (speed >= 17.2) beaufort = 8;
    else if (speed >= 13.9) beaufort = 7;
    else if (speed >= 10.8) beaufort = 6;
    else if (speed >= 8) beaufort = 5;
    else if (speed >= 5.5) beaufort = 4;
    else if (speed >= 3.4) beaufort = 3;
    else if (speed >= 1.6) beaufort = 2;
    else if (speed >= 0.5) beaufort = 1;
    else if (speed < 0.5) beaufort = 0;
    else beaufort = null;
    return beaufort;
  }
};
