import dayjs from "dayjs";

export const convertTimeToHour = (time?: number, timezone?: string) => {
  if (time && timezone) {
    return dayjs(time * 1000)
      .tz(timezone)
      .format("h A");
  }
  return "N/A";
};
