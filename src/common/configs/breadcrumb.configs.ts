import {
  ROUTE_ARTICLE_DETAIL,
  ROUTE_ENTERPRISE_STORY,
  ROUTE_POLICY,
} from "../constants/routes.constant";
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

export const BREAD_CRUMB_POLICY_DETAIL: (Lang: Lang) => BreadcrumbsType[] = (
  lang
) => [
  {
    label: "Thông tin chính sách",
    link: ROUTE_POLICY[lang],
  },
  {
    label: "Ngành gỗ",
    link: ROUTE_POLICY[lang],
  },
];

export const BREAD_CRUMB_AR_POLICY_DETAIL: (Lang: Lang) => BreadcrumbsType[] = (
  lang
) => [
  {
    label: "Chính sách",
    link: ROUTE_POLICY[lang],
  },
  {
    label: ":articleName",
    link: "#",
  },
];
