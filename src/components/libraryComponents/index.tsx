import { WebContainer } from "@/src/common/components/WebContainer";
import {
  Stack,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { LibraryPageProps } from "./interfaces";
import { LibTabItem } from "./tabItems/LibTabItems";
import { LibTabPanelItem } from "./tabPanelitems/LibTabPanelItem";

const LibraryPage = ({ listItem }: LibraryPageProps) => {
  console.log(listItem);

  return (
    <WebContainer>
      <Stack
        mb={"64px"}
        pt={{ md: "64px", sm: "32px" }}
        spacing={{ md: "64px", sm: "32px" }}
      >
        <Text
          borderBottom={"solid 1.5px"}
          width="fit-content"
          alignSelf="center"
          variant="text20"
        >
          Thư viện
        </Text>
        <Tabs variant="unstyled" w="full">
          <TabList w="full" justifyContent={"center"}>
            <LibTabItem>Quốc tế</LibTabItem>
            <LibTabItem>Việt Nam</LibTabItem>
            <LibTabItem>Ngành gỗ</LibTabItem>
            <LibTabItem>Ngành khác</LibTabItem>
          </TabList>
          <TabPanels padding={"0px"}>
            <LibTabPanelItem listItem={listItem} />
            <TabPanel>two</TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </WebContainer>
  );
};

export default LibraryPage;
