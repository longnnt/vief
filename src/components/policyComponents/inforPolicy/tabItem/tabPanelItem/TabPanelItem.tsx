import { Pagination } from "@/src/common/components/pagination";

import { Box, Grid, GridItem, Stack, TabPanel } from "@chakra-ui/react";
import { DATA_ARTICLE } from "../../../constants";
import { ArticlePolicyItem } from "../../../policyDetail/articleItem";

export const TabPanelItem = () => {
  return (
    <TabPanel padding="0px">
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
          {DATA_ARTICLE.map((article, index) => {
            return (
              <GridItem key={index}>
                <ArticlePolicyItem article={article} />
              </GridItem>
            );
          })}
        </Grid>
        <Box display="flex" justifyContent="center" w="full">
          <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
        </Box>
      </Stack>
    </TabPanel>
  );
};
