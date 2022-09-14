import { LANG } from "@/src/common/constants/common.constant";
import { Lang, SearchParams } from "@/src/common/interfaces/common.interface";

export const getParamSearchDoccument = ({
  lang = "vi",
  ...params
}: SearchParams): SearchParams => ({
  field: "WOOD",
  page: 1,
  size: 10,
  lang: (lang || LANG.vi) as Lang,
  ...params,
});
