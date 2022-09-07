import { Lang } from "../interfaces/common.interface";

// DECLARE COMMON CONSTANTS
export const LANG: Record<Lang, Lang> = {
  vi: "vi",
  en: "en",
};

export const COMMON = "THIS_IS_COMMON";

export const PICTURE = (version?: string) =>
  "https://source.unsplash.com/user/c_v_r/1600x900" + "?v=" + version;

export const PAGE_SIZE = 10;

export const LIST_DATA_RESPONSE = {
  data: [],
  total: 0,
};
