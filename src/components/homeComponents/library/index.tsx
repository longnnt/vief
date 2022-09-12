import { GridItem, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { LibraryItem } from "./LibraryItem";

const SectionLibrary = () => {
  return (
    <>
      <Stack spacing="32px">
        <Stack spacing="16px">
          <Stack>
            <Text
              variant={{
                md: "text20",
                sm: "text16",
              }}
              borderBottom={"solid 1.5px"}
              width="fit-content"
              _hover={{ textDecoration: "none" }}
            >
              Thư viện
            </Text>
          </Stack>
          <Text variant="text36">Báo cáo về biến đổi khí hậu</Text>
        </Stack>
        <SimpleGrid
          columns={{
            md: 2,
            sm: 1,
          }}
          spacing={"32px"}
        >
          <GridItem>
            <LibraryItem />
          </GridItem>
          <GridItem>
            <LibraryItem />
          </GridItem>
          <GridItem>
            <LibraryItem />
          </GridItem>
          <GridItem>
            <LibraryItem />
          </GridItem>
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default SectionLibrary;
