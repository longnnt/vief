import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Divider,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

const Events = () => {
  return (
    <>
      <Center>
        <Stack>
          <Stack align={"center"}>
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
                    Sự kiện
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#" _hover={{ textDecoration: "none" }}>
                    Sắp diễn ra
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    </>
  );
};

export default Events;
