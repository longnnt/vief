import { ReactNode } from "react";
import { ArticleItem } from "@/src/common/components/articleItem";
import { Pagination } from "@/src/common/components/pagination";
import { DATA_ARTICLE } from "@/src/components/enterprise-story/constants";
import { Box, Grid, GridItem, Stack, TabPanel } from "@chakra-ui/react";
import { LibraryItem } from "../../homeComponents/library/LibraryItem";
import { FileItems } from "./item/FileItems";

export const LibTabPanelItem = () => {
  return (
    <TabPanel padding="0px">
      <Stack spacing="32px" alignItems="start" pt={"32px"}>
        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)",
            base: "repeat(2, 1fr)",
          }}
          gap={{
            base: 6,
            sm: 4,
          }}
        >
          {/* {DATA_ARTICLE.map((article, index) => {
            return (
              <GridItem key={index}>
                <ArticleItem article={article} />
              </GridItem>
            );
          })} */}
          <FileItems />
          <FileItems />
          <FileItems />
          <FileItems />
          <FileItems />
          <FileItems />
        </Grid>
        <Box display="flex" justifyContent="center" w="full">
          <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
        </Box>
      </Stack>
    </TabPanel>
  );
};
