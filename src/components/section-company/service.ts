import { execute } from "@/src/common/lib/request";

export function getArticleCompany() {
  return execute.get("https://fakestoreapi.com/products");
}
