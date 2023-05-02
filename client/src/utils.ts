import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc)
dayjs.extend(relativeTime)
dayjs.extend(timezone)

export const formatAsRelativeDate = date => {
  return dayjs.tz(date, dayjs.tz.guess()).fromNow(true);
}

export const formatAsMonthDayDate = date => {
  return dayjs.tz(date, dayjs.tz.guess()).format("MMM DD");
}