import { LANG } from "@/src/common/constants/common.constant";
import { Lang, SearchParams } from "@/src/common/interfaces/common.interface";
import {
  getListArticleService,
  getListCategoryService,
} from "@/src/common/services/common.services";
import { PolicyPage } from "@/src/components/policyComponents";
import { PolicyPageProps } from "@/src/components/policyComponents/interfaces";
import { GetServerSideProps } from "next";
import React from "react";

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
    await getListCategoryService(getParams(4, locale))
  ).data;
  const articleData = await getListArticleService({ ...getParams(1, locale) });
  const latestArticle = await (
    await getListArticleService(getParams(3, locale))
  ).data;
  return {
    props: { articleData, categories, latestArticle },
  };
};

const getParams = (size: number, lang?: string): SearchParams => ({
  field: "WOOD",
  type: "POLICY",
  page: 1,
  size,
  isFeature: 1,
  lang: (lang || LANG.vi) as Lang,
});
export default index;
