import dayjs from "dayjs";

export function formatDate(date: string, format?: string) {
  return dayjs(date).format(format || "DD/MM/YYYY HH:mm");
}
export function getLang() {
  return localStorage.getItem("i18nextLng") || "vi";
}

export function timeLeft(timeStart: string) {
  const utc = require("dayjs/plugin/utc");
  dayjs.extend(utc);
  const date1 = dayjs().format("YYYY-MM-DD");
  const date2 = dayjs(`${timeStart}`).format("YYYY-MM-DD");
  return dayjs(`${date2}`).diff(date1, "day");
}
