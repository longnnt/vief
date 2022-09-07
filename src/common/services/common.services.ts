import { toUrlQueryString } from "../lib/common.lib";
import { execute } from "../lib/request";
import { LANG, LIST_DATA_RESPONSE } from "./../constants/common.constant";
import { API_ARTICLE, API_CATEGORY } from "./../constants/urlAPI";
import {
  Article,
  ArticleDetail,
  Category,
  Lang,
  ListResponse,
  SearchParams,
} from "./../interfaces/common.interface";

export async function getListArticleService({ lang, ...params }: SearchParams) {
  try {
    const res = await execute.get<ListResponse<Article>>(
      toUrlQueryString(API_ARTICLE, params),
      { headers: { lang: lang || LANG.vi } }
    );
    return res.data;
  } catch (error) {
    return LIST_DATA_RESPONSE;
  }
}

export async function getListCategoryService({
  lang,
  ...params
}: SearchParams) {
  try {
    const res = await execute.get<ListResponse<Category>>(
      toUrlQueryString(API_CATEGORY, params),
      { headers: { lang: lang || LANG.vi } }
    );
    return res.data;
  } catch (error) {
    return LIST_DATA_RESPONSE;
  }
}

export async function getArticleDetailService(slug: string, lang: Lang) {
  try {
    const res = await execute.get<ArticleDetail>(`${API_ARTICLE}/${slug}`, {
      headers: { lang: lang || LANG.vi },
    });
    return res.data;
  } catch (error) {
    return null;
  }
}
