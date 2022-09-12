import { BaseEntities } from "@/src/common/interfaces/common.interface";
export interface unsplashImageResponse {
  raw: string;
  full: string;
  regular: string;
  small: string;
  medium: string;
  large: string;
}
interface userRespone {
  name: string;
  username: string;
  profile_image: unsplashImageResponse;
  bio: string;
}

export interface ListImgProps {
  listImg: unsplashImg[];
  listImgThumb: unsplashImg[];
}

export interface unsplashImg extends BaseEntities {
  description: string;
  urls: unsplashImageResponse;
  categories: string;
  likes: string;
  view: string;
  download: string;
  user: userRespone;
}

export type PictureItemProp = {
  itemImg: unsplashImg;
  listImgThumb: unsplashImg[];
};

export type ItemImgMaster = {
  itemImg: unsplashImg;
};

export type ThumbnailItemProp = {
  listImgThumb: unsplashImg[];
};
