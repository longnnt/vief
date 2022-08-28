import { ArticleItem } from "@/src/common/components/articleItem";
import { Pagination } from "@/src/common/components/pagination";
import {
  Box,
  Grid,
  GridItem,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";

import { DATA_ARTICLE } from "../../enterprise-story/constants";
import { TabItem } from "./tabItem/TabItem";
import { TabPanelItem } from "./tabItem/tabPanelItem/TabPanelItem";

export const InforPolicy = () => {
  return (
    <Stack spacing={{ md: "32px", sm: "16px" }}>
      <Text variant="text28">Thông tin chính sách</Text>
      <Tabs variant="unstyled">
        <TabList>
          <TabItem>Quốc tế</TabItem>
          <TabItem>Việt Nam</TabItem>
          <TabItem>Ngành gỗ</TabItem>
          <TabItem>Ngành khác</TabItem>
        </TabList>
        <TabPanels padding={"0px"}>
          <TabPanelItem />
          <TabPanel>two</TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};
