import { About } from "@/src/components/aboutComponents";
import { ListImgProps } from "@/src/components/aboutComponents/interfaces";
import { getListPicture } from "@/src/components/aboutComponents/services";
import { GetServerSideProps } from "next";

const AboutPage = ({ listImg, listImgThumb }: ListImgProps) => {
  return <About listImg={listImg} listImgThumb={listImgThumb} />;
};

export const getServerSideProps: GetServerSideProps<
  ListImgProps
> = async () => {
  const pictureRes = await getListPicture();
  return {
    props: { listImg: pictureRes.data, listImgThumb: pictureRes.data },
  };
};
export default AboutPage;
