import dayjs from "dayjs";

export function formatDate(date: string, format?: string) {
  const dayOfWeek = dayjs(date).day();
  return dayjs(date).format(
    format || `Thứ ${dayOfWeek}, HH:mm, ngày DD/MM/YYYY`
  );
}
export function getLang() {
  return localStorage.getItem("i18nextLng") || "vi";
}
