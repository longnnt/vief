import { LANG, LIST_DATA_RESPONSE } from "@/src/common/constants/common.constant";
import { ListResponse, RequestCallBack, SearchParams } from "@/src/common/interfaces/common.interface";
import { toUrlQueryString } from "@/src/common/lib/common.lib";
import { execute } from "@/src/common/lib/request";
import { CLIENT_ID, IMG_URL } from "./contants";

export const getListPictureService = () => {
  try {
    return execute.get(IMG_URL + CLIENT_ID);
  } catch (error) {
    return LIST_DATA_RESPONSE;
  }
};

// export async function getListPictureService({
//   lang,
//   onSuccess,
//   onError,
//   ...params
// }: SearchParams & RequestCallBack<ListResponse<UnsplashImg>>) {
//   try {
//     const res = await execute.get<ListResponse<UnsplashImg>>(
//       toUrlQueryString(CLIENT_ID+IMG_URL, params),
//       { headers: { lang: lang || LANG.vi } }
//     );
//     onSuccess && onSuccess(res.data);
//     return res.data;
//   } catch (error) {
//     onError && onError(error);
//     return LIST_DATA_RESPONSE;
//   }
// }
