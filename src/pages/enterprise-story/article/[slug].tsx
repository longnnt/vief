import { EnterpriseDetail } from "@/src/components/enterprise-story/components/detail";
import { DATA_ARTICLE } from "@/src/components/enterprise-story/constants";
import { Article } from "@/src/components/enterprise-story/interfaces";
import { GetServerSideProps } from "next";
import React from "react";

type ArticleDetailProps = {
  article: Article;
};
function ArticleDetail({ article }: ArticleDetailProps) {
  return <EnterpriseDetail article={article} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const article = DATA_ARTICLE.find(
    (data) => data.slug === context.params?.slug
  );
  return {
    props: {
      article,
    },
  };
};

export default ArticleDetail;