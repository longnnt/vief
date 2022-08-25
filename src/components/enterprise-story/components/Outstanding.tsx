import { ArticleItem } from "@/src/common/components/articleItem";
import { Pagination } from "@/src/common/components/pagination";
import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { DATA_ARTICLE } from "../constants";

function Outstanding() {
  return (
    <VStack spacing="32px" alignItems="start">
      <Text variant="text28">Nghiên cứu nổi bật</Text>
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
              <ArticleItem article={article} />
            </GridItem>
          );
        })}
      </Grid>
      <Box display="flex" justifyContent="center" w="full">
        <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
      </Box>
    </VStack>
  );
}

export { Outstanding };
