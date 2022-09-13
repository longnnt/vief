import { Pagination } from "@/src/common/components/pagination";
import { Box, Grid, GridItem, Stack, TabPanel } from "@chakra-ui/react";
import { LibraryPageProps } from "../interfaces";
import { FileItems } from "./item/FileItems";

export const LibTabPanelItem = ({ listItem }: LibraryPageProps) => {
  return (
    <TabPanel padding="0px">
      <Stack spacing="32px" pt={"32px"}>
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
          {listItem?.map((doc, index) => (
            <FileItems docItem={doc} key={index} />
          ))}

          {/* <FileItems />
          <FileItems />
          <FileItems />
          <FileItems />
          <FileItems />
          <FileItems /> */}
        </Grid>
        <Box display="flex" justifyContent="center" w="full">
          <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
        </Box>
      </Stack>
    </TabPanel>
  );
};
