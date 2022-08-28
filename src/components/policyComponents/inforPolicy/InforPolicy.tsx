import {
  Stack,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

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
