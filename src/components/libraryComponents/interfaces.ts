import {
  BaseEntities,
  Fields,
  Lang,
} from "@/src/common/interfaces/common.interface";

export interface Translate extends BaseEntities {
  lang: Lang;
  shortDesc: string;
}
export interface Files {
  id: number;
  key: string;
  type: string;
  url: string;
}
export interface DocumentItem extends BaseEntities {
  field: Fields;
  translates: Translate;
  file: Files;
  shortDesc: string;
}

export interface LibraryPageProps {
  listItem: DocumentItem[];
}

export type docProps = {
  docItem: DocumentItem;
};
