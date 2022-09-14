import { Pagination } from "@/src/common/components/pagination";
import { PAGE_SIZE } from "@/src/common/constants/common.constant";
import { toTotalPage } from "@/src/common/lib/common.lib";
import { Box, Grid, list, Stack, TabPanel } from "@chakra-ui/react";
import { docArrayProps } from "../interfaces";
import { FileItems } from "./item/FileItems";

export const LibTabPanelItem = ({ listItem }: docArrayProps) => {
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
          {listItem?.map((doc, index) => (
            <FileItems docItem={doc} key={index} />
          ))}
        </Grid>
        <Box display="flex" justifyContent="center" w="full">
          <Pagination
            currentPage={1}
            totalPages={toTotalPage(listItem?.length, PAGE_SIZE)}
            onPageChange={() => {}}
          />
        </Box>
      </Stack>
    </TabPanel>
  );
};
