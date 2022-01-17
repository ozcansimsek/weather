import dayjs from "dayjs";

export const convertTimeToLocalDate = (time?: number, timezone?: string) => {
  if (time && timezone) {
    return dayjs(time * 1000)
      .tz(timezone)
      .format("dddd, MMMM D, h:mm A	");
  }
  return "N/A";
};
