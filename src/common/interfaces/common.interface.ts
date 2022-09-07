export interface RouterConfig {
  pathName: string;
  resource: string;
}

export type BooleanNumber = 1 | -1;
export type Types = "POLICY" | "EVENT" | "ENTERPRISE" | "DOCUMENT";
export type Lang = "vi" | "en";
export type Fields = "WOOD";

export interface ListResponse<T> {
  data: T[];
  total: number;
}

export interface ImageResponse {
  id: number;
  key: string;
  type: string;
  url: string;
}

export interface BaseEntities {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  version: number;
}

export interface Category extends BaseEntities {
  type: Types;
  isFeature: BooleanNumber;
  field: Fields;
  path?: string;
  thumbnail: ImageResponse;
  name: string;
}

export interface Article extends BaseEntities {
  thumbnail: ImageResponse;
  title: string;
  slug: string;
  shortDesc: string;
  content: string;
  lang: Lang;
  author: string;
  field: Fields;
  isFeature: BooleanNumber;
  category: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface ArticleDetail extends BaseEntities {
  article: Article;
  category: {
    id: number;
    name: string;
    slug: string;
    shortDesc: string;
  };
}

export interface SearchParams {
  field?: Fields;
  type?: Types;
  isFeature?: BooleanNumber;
  title?: string;
  name?: string;
  page?: number;
  size?: number;
  slugCategory?: string;
  lang?: Lang;
  slug?: Lang;
}
