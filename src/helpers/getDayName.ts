import dayjs from "dayjs";

export const getDayName = (time?: number, timezone?: string) => {
  if (time && timezone) {
    return dayjs(time * 1000)
      .tz(timezone)
      .format("dddd");
  }
  return "N/A";
};
