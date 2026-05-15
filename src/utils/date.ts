import dayjs from "dayjs";

export const formatDisplayDate = (date: string) => {
  return dayjs(date).format("YYYY/MM/DD");
};

export const formatStorageDate = (date: string | Date) => {
  return dayjs(date).format("YYYY-MM-DD");
};