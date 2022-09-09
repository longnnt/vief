import { ListResponse } from "./../../common/interfaces/common.interface";
import { toUrlQueryString } from "@/src/common/lib/common.lib";
import { API_EVENTS } from "./../../common/constants/urlAPI";
import { execute } from "@/src/common/lib/request";
import { Lang } from "@/src/common/interfaces/common.interface";
import { Event } from "../section-event/interface";

export async function getArticleEvent(lang: Lang = "vi") {
  try {
    const res = await execute.get<ListResponse<Event>>(
      toUrlQueryString(API_EVENTS),
      {
        headers: { lang },
      }
    );

    return res.data;
  } catch (err) {
    return err;
  }
}
export async function getPastEvent(lang: Lang = "vi") {
  try {
    const res = await execute.get<ListResponse<Event>>(
      toUrlQueryString(API_EVENTS),
      {
        headers: { lang },
      }
    );

    return res.data;
  } catch (err) {
    return err;
  }
}

export async function getDetailUpcomingEvent(lang: Lang = "vi") {
  try {
    const res = await execute.get<ListResponse<Event>>(
      toUrlQueryString(API_EVENTS, { field: "WOOD", timeline: "UPCOMING" }),
      {
        headers: { lang },
      }
    );

    return res.data;
  } catch (err) {
    return err;
  }
}

export async function getDetailPastEvent(lang: Lang = "vi") {
  try {
    const res = await execute.get<ListResponse<Event>>(
      toUrlQueryString(API_EVENTS, { field: "WOOD", timeline: "TOOK_PLACE" }),
      {
        headers: { lang },
      }
    );

    return res.data;
  } catch (err) {
    return err;
  }
}
