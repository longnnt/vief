import {
  BaseEntities,
  Fields,
  Lang,
} from "@/src/common/interfaces/common.interface";

export interface Translate extends BaseEntities {
  lang: Lang;
  shortDesc: string;
}
export interface File {}
export interface Document extends BaseEntities {
  field: Fields;
  translates: Translate;
  shortDesc: string;
}
