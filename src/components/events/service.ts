import {
  API_EVENTS,
  API_TOOKPLACE,
  API_UPCOMINGS,
} from "./../../common/constants/urlAPI";
import { execute } from "@/src/common/lib/request";

export function getArticleEvent() {
  return execute.get(API_EVENTS);
}
export function getPastEvent() {
  return execute.get(API_EVENTS);
}
export function getDetailUpcomingEvent() {
  return execute.get(API_UPCOMINGS);
}
export function getDetailPastEvent() {
  return execute.get(API_TOOKPLACE);
}
