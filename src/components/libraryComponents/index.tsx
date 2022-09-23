import { WebContainer } from "@/src/common/components/WebContainer";
import {
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { LibraryPageProps } from "./interfaces";
import { LibTabItem } from "./tabItems/LibTabItems";
import { LibTabPanelItem } from "./tabPanelitems/LibTabPanelItem";

const LibraryPage = ({ listItem, categories }: LibraryPageProps) => {
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
        <LibTabPanelItem listItem={listItem} categories={categories} />
      </Stack>
    </WebContainer>
  );
};

export default LibraryPage;
