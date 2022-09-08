import { LIST_DATA_RESPONSE } from "@/src/common/constants/common.constant";
import {
  Article,
  Lang,
  ListResponse,
} from "@/src/common/interfaces/common.interface";
import {
  getListArticleService,
  getListCategoryService,
} from "@/src/common/services/common.services";
import { PolicyPage } from "@/src/components/policyComponents";
import { PolicyPageProps } from "@/src/components/policyComponents/interfaces";
import {
  ARTICLE_POLICY_SIZE,
  paramPolicy,
} from "@/src/components/section-policy/constant";
import { GetServerSideProps } from "next";

function index({ articleData, categories, latestArticle }: PolicyPageProps) {
  return (
    <PolicyPage
      articleData={articleData}
      categories={categories}
      latestArticle={latestArticle}
    />
  );
}

export const getServerSideProps: GetServerSideProps<PolicyPageProps> = async ({
  locale,
}) => {
  const categories = await (
    await getListCategoryService(paramPolicy({ size: 4, lang: locale as Lang }))
  ).data;

  let articleData: ListResponse<Article> = LIST_DATA_RESPONSE;

  if (categories.length) {
    articleData = await getListArticleService(
      paramPolicy({
        size: ARTICLE_POLICY_SIZE,
        lang: locale as Lang,
        slugCategory: categories[0].slug,
      })
    );
  }
  const latestArticle = await (
    await getListArticleService(paramPolicy({ size: 3, lang: locale as Lang }))
  ).data;
  return {
    props: { articleData, categories, latestArticle },
  };
};

export default index;
