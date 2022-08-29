import { Lang } from "../interfaces/common.interface";

// DECLARE PATH NAME FOR ROUTE
export const ROUTE_HOME: Record<Lang, string> = {
  vi: "/",
  en: "/",
};
export const ROUTE_ABOUT: Record<Lang, string> = {
  vi: "/ve-chung-toi",
  en: "/about",
};
export const ROUTE_ENTERPRISE_STORY: Record<Lang, string> = {
  vi: "/chuyen-doanh-nghiep",
  en: "/enterprise-story",
};
export const ROUTE_ENTERPRISE_ARTICLE_DETAIL: Record<Lang, string> = {
  vi: "/chuyen-doanh-nghiep/bai-viet/:slug",
  en: "/enterprise-story/article/:slug",
};
export const ROUTE_POLICY: Record<Lang, string> = {
  vi: "/chinh-sach",
  en: "/policy",
};
export const ROUTE_EVENT: Record<Lang, string> = {
  vi: "/su-kien",
  en: "/events",
};
export const ROUTE_LIBRARY: Record<Lang, string> = {
  vi: "/thu-vien",
  en: "/library",
};
