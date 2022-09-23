import { LANG } from "@/src/common/constants/common.constant";
import { Lang, SearchParams } from "@/src/common/interfaces/common.interface";
import { stringify } from "querystring";
import { FileDownload, Files } from "./interfaces";

export const getParamSearchDocument = ({
  lang = "vi",
  ...params
}: SearchParams): SearchParams => ({
  field: "WOOD",
  isFeature: 1,
  page: 1,
  size: 100,
  lang: (lang || LANG.vi) as Lang,
  ...params,
});

export const DOCCUMENT_SIZE = 6;

export const getParamSearchFile = ({ key }: FileDownload): FileDownload => ({
  key: key,
  fileName: "",
  type: "",
  url: "",
});
