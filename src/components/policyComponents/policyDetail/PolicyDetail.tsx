import { HotNews } from "@/src/common/components/hot-news";
import { Pagination } from "@/src/common/components/pagination";
import { RenderBreadcrumb } from "@/src/common/components/renderBreadcumb";
import { WebContainer } from "@/src/common/components/WebContainer";
import { BREAD_CRUMB_POLICY_DETAIL } from "@/src/common/configs/breadcrumb.configs";
import { Box, Grid, GridItem, Stack, Text, VStack } from "@chakra-ui/react";
import { ArticlePolicyItem } from "./articleItem";

import { DATA_ARTICLE } from "../constants";
import { Article } from "../interfaces";

type PolicyDetailProps = {
  article: Article;
};
function PolicyDetail({ article }: PolicyDetailProps) {
  const { title, content, author } = article;

  return (
    <WebContainer>
      <VStack alignItems="start" mt="32px" spacing="64px" mb="64px">
        <Box>
          <RenderBreadcrumb
            breadcrumbConfigs={BREAD_CRUMB_POLICY_DETAIL("en")}
          />
        </Box>

        <Stack
          flexDir={{
            base: "row",
            sm: "column",
          }}
          justifyContent="space-between"
          alignItems="start"
        >
          <Box
            w={{
              base: "55%",
              sm: "100%",
            }}
          >
            <Text
              variant={{
                base: "text48",
                sm: "text28",
              }}
              color={{
                base: "green.primary",
                sm: "green.primary",
              }}
            >
              {title}
            </Text>
            <Text mt="32px">{content}</Text>
            <Text variant="text14" w="full" textAlign="end">
              {author}
            </Text>
          </Box>

          <Box
            w={{
              base: "35%",
              sm: "100%",
            }}
          >
            <HotNews articles={DATA_ARTICLE} label="TIN LIÊN QUAN" />
          </Box>
        </Stack>

        <VStack spacing="32px" alignItems="start">
          <Text variant="text28">Đọc thêm: Thông tin Chính sách</Text>
          <Grid
            templateColumns={{
              sm: "repeat(2, 1fr)",
              base: "repeat(3, 1fr)",
            }}
            gap={{
              base: 6,
              sm: 4,
            }}
          >
            {DATA_ARTICLE.map((article, index) => {
              return (
                <GridItem key={index}>
                  <ArticlePolicyItem article={article} />
                </GridItem>
              );
            })}
          </Grid>
        </VStack>
        <Box display="flex" justifyContent="center" w="full">
          <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
        </Box>
      </VStack>
    </WebContainer>
  );
}

export { PolicyDetail };
