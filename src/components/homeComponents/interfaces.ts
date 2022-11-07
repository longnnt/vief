import { Fields, Lang, ImageResponse, Article, BaseEntities } from "@/src/common/interfaces/common.interface";
import { DocumentItem } from "../libraryComponents/interfaces";
import { Event } from "../section-event/interface";

export interface BannerTranslate extends BaseEntities {
  url: string;
  headTitle: string;
  subTitle: string;
  description: string;
}

export interface Banner {
  // field: Fields;
  // link: string;
  // translates: BannerTranslate[];
  // image: ImageResponse;
  // name: string;
  url: string;
  headTitle: string;
  subTitle: string;
  description: string;
  image: IImageResponse;
}

export interface IImageResponse {
  url: string;
  alt: string;
  title: string;
}

export interface HomePageProps {
  banners: Banner[];
  policy: Article[];
  events: Event[];
  enterprise: Article[];
  documents: DocumentItem[];
}
