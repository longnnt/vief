/* eslint-disable react/react-in-jsx-scope */
import { GetServerSideProps } from "next";
import { Lang } from "../common/interfaces/common.interface";
import { HomePageProps } from "../components/homeComponents/interfaces";
import { getListBannerService } from "../components/homeComponents/services";
import HomePage from "./home";

const Home = ({ banners }: HomePageProps) => {
  return <HomePage banners={banners} />;
};

export const getServerSideProps: GetServerSideProps<HomePageProps> = async ({
  locale,
}) => {
  const bannerRes = await getListBannerService(locale as Lang);
  return {
    props: { banners: bannerRes.data },
  };
};

export default Home;
