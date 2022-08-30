import { DATA_ARTICLE } from "@/src/components/policyComponents/constants";
import { Article } from "@/src/components/policyComponents/interfaces";
import { PolicyDetail } from "@/src/components/policyComponents/policyDetail/PolicyDetail";
import { GetServerSideProps } from "next";
import React from "react";

type ArticleDetailProps = {
  article: Article;
};
function ArticleDetail({ article }: ArticleDetailProps) {
  return <PolicyDetail article={article} />;
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
