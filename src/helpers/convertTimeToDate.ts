import dayjs from "dayjs";

export const convertTimeToDate = (time?: number, timezone?: string) => {
  if (time && timezone) {
    return dayjs(time * 1000)
      .tz(timezone)
      .format("ddd, MMM D");
  }
  return "N/A";
};
