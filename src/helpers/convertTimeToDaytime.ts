import dayjs from "dayjs";

export const convertTimeToDaytime = (time?: number, timezone?: string) => {
  if (time && timezone) {
    return dayjs(time * 1000)
      .tz(timezone)
      .format("h:mm A");
  }
  return "N/A";
};
