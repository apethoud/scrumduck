import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc)
dayjs.extend(relativeTime)
dayjs.extend(timezone)

export const formatAsRelativeDateForXUnits = date => {
  return `for ${dayjs.tz(date, dayjs.tz.guess()).fromNow(true)}`;
}

export const formatAsRelativeDateXUnitsAgo = date => {
  return dayjs.tz(date, dayjs.tz.guess()).fromNow();
}

export const formatAsMonthDayDate = date => {
  return dayjs.tz(date, dayjs.tz.guess()).format("MMM DD");
}