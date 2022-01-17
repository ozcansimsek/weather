import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isTomorrow from "dayjs/plugin/isTomorrow";

dayjs.extend(isToday);
dayjs.extend(isTomorrow);

export const checkIsTodayOrTomorrow = (time?: number, timezone?: string) => {
  if (time) {
    const timeWithTimezone = dayjs(time * 1000).tz(timezone);
    if (timeWithTimezone.isToday()) {
      return "TDY";
    } else if (timeWithTimezone.isTomorrow()) {
      return "TMRW";
    } else return timeWithTimezone.format("ddd");
  }
  return "N/A";
};
