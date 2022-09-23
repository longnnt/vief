import { Lang } from "@/src/common/interfaces/common.interface";
import { About } from "@/src/components/aboutComponents";
import { getParamSearchPicture } from "@/src/components/aboutComponents/contants";
import { ListImgProps } from "@/src/components/aboutComponents/interfaces";
import { getListPictureService } from "@/src/components/aboutComponents/services";
import { GetServerSideProps } from "next";

const AboutPage = ({ listImg, listImgThumb }: ListImgProps) => {
  return <About listImg={listImg} listImgThumb={listImgThumb} />;
};

// export const getServerSideProps: GetServerSideProps<ListImgProps> = async ({locale}) => {
//   // const pictureRes = await getListPicture();
//   const pictureRes = await (
//     await getListPictureService(
//       getParamSearchPicture({ lang: locale as Lang })
//     )
//   )
//   return {
//     props: { listImg: pictureRes.data, listImgThumb: pictureRes.data },
//   };
// };

export const getServerSideProps: GetServerSideProps<ListImgProps> = async () => {
  const pictureRes = await getListPictureService();
  return {
    props: { listImg: pictureRes.data, listImgThumb: pictureRes.data },
  };
};

export default AboutPage;
