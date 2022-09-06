import { Lang } from "@/src/common/interfaces/common.interface";
import { HomePageProps } from "@/src/components/homeComponents/interfaces";
import { getListBannerService } from "@/src/components/homeComponents/services";
import { GetServerSideProps } from "next";
import Home from "..";

function HomePage({ banners }: HomePageProps) {
  return <Home banners={banners} />;
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async ({
  locale,
}) => {
  const bannerRes = await getListBannerService(locale as Lang);
  return {
    props: { banners: bannerRes.data },
  };
};
export default HomePage;
