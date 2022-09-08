import {
  ROUTE_ENTERPRISE_STORY,
  ROUTE_POLICY,
} from "../constants/routes.constant";
import { Lang } from "../interfaces/common.interface";
import { BreadcrumbsType } from "./interfaces";

// ---------------------- Enterprise story detail
export const getBreadCrumbEnterpriseDetail: (
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

export const getBreadCrumbPolicyDetail: (Lang: Lang) => BreadcrumbsType[] = (
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
