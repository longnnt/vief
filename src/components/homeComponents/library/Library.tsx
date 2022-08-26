import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  GridItem,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LibraryItem } from "./LibraryItem";

const Library = () => {
  return (
    <>
      <Stack spacing="32px">
        <Stack spacing="16px">
          <Stack>
            <Breadcrumb
              color="brand.100"
              fontSize="20px"
              fontWeight="600"
              borderBottom={"solid 1.5px"}
              width="fit-content"
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="#" _hover={{ textDecoration: "none" }}>
                  Thư viện
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
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

export default Library;
