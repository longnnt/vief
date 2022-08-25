import { ROUTE_ENTERPRISE_STORY } from "../constants/routes.constant";
import { Lang } from "../interfaces/common.interface";
import { BreadcrumbsType } from "./interfaces";

// ---------------------- Enterprise story detail
export const BREAD_CRUMB_ENTERPRISE_DETAIL: (
  Lang: Lang
) => BreadcrumbsType[] = (lang) => [
  {
    label: "Chuyện doanh nghiệp",
    link: ROUTE_ENTERPRISE_STORY[lang],
  },
  {
    label: "Ngành gỗ",
    link: ROUTE_ENTERPRISE_STORY[lang],
  },
];
