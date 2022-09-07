export const BASE_URL =
  process.env.REACT_APP_API_URL ||
  "http://vief-dev-loadbalancer-2024646.ap-southeast-1.elb.amazonaws.com";

export const GET_POSTS = "https://jsonplaceholder.typicode.com/posts";
export const EDIT_POSTS = "https://jsonplaceholder.typicode/EDIT_POST";

export const POLICY_CATEGORY =
  "client/category?type=POLICY&field=WOOD&isFeature=1";
export const LIBRARY_CATEGORY =
  "client/category?type=DOCUMENT&field=WOOD&isFeature=1";
export const ENTERPRISE_CATEGORY =
  "client/category?type=ENTERPRISE&field=WOOD&isFeature=1";
export const EVENT_CATEGORY =
  "client/category?type=EVENT&field=WOOD&isFeature=1";
export const API_BANNER = "client/banners";
