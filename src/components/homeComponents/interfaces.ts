import {
  Fields,
  Lang,
  ImageResponse,
} from "./../../common/interfaces/common.interface";
import { BaseEntities } from "@/src/common/interfaces/common.interface";

export interface BannerTranslate extends BaseEntities {
  lang: Lang;
  title: string;
  subTitle: string;
  shortDesc: string;
}

export interface Banner extends BaseEntities {
  field: Fields;
  link: string;
  translates: BannerTranslate[];
  image: ImageResponse;
  name: string;
}

export interface HomePageProps {
  banners: Banner[];
}
