import dayjs from "dayjs";

export function formatDateEvent(date: string, format?: string) {
  return dayjs(date)
    .locale("vi")
    .format(format || "dddd, HH:mm ngày DD/MM/YYYY");
}
