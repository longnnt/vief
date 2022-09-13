import { API_DOCUMENT } from "@/src/common/constants/urlAPI";
import { execute } from "@/src/common/lib/request";

export function getListDoccumentService() {
  return execute.get(API_DOCUMENT);
}
