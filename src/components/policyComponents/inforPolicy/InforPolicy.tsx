import { Pagination } from "@/src/common/components/pagination";
import { useViefRouter } from "@/src/common/hooks/useViefRouter";
import {
  Article,
  Category,
  ListResponse,
} from "@/src/common/interfaces/common.interface";
import { toTotalPage } from "@/src/common/lib/common.lib";
import { getListArticleService } from "@/src/common/services/common.services";
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { PolicyPageProps } from "../interfaces";
import { ArticlePolicyItem } from "../policyDetail/articleItem";

export const InfoPolicy = ({
  articleData,
  categories,
}: Pick<PolicyPageProps, "articleData" | "categories">) => {
  const { locale } = useViefRouter();

  const [selectedCate, setSelectedCate] = useState<Category | null>(
    categories[0] || null
  );
  const [listArticleData, setListArticleData] =
    useState<ListResponse<Article>>(articleData);

  const [currentPage, setCurrentPage] = useState(1);

  async function handlePageChange(page: number) {
    // const listData = await getListArticleService({page, size: 6, })
    setCurrentPage(page);
  }

  return (
    <Stack spacing={{ md: "32px", sm: "16px" }}>
      <Text variant="text28">Thông tin chính sách</Text>

      <HStack spacing={{ md: "32px", sm: "16px" }}>
        {categories.map((cate) => {
          const isSelectedCate = cate.id === selectedCate?.id;
          const btnVariant = isSelectedCate ? "primary" : "";

          return (
            <Button
              key={cate.id}
              variant={btnVariant}
              minW="140px"
              h="43px"
              onClick={() => {
                setSelectedCate(cate);
              }}
            >
              <Text w="full">{cate.name}</Text>
            </Button>
          );
        })}
      </HStack>
      <Box>
        <Stack spacing="32px" alignItems="start" pt={"32px"}>
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
            {listArticleData.data.map((article, index) => {
              return (
                <GridItem key={index}>
                  <ArticlePolicyItem article={article} />
                </GridItem>
              );
            })}
          </Grid>
          <Box display="flex" justifyContent="center" w="full">
            <Pagination
              currentPage={currentPage}
              totalPages={toTotalPage(listArticleData.total, 1)}
              onPageChange={(page) => handlePageChange(page)}
            />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};
