export interface RouterConfig {
  pathName: string;
  resource: string;
}

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
