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
              <Breadcrumb color="brand.100" fontSize="20px" fontWeight="600">
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Sự kiện</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">Sắp diễn ra</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <Divider borderColor="brand.100"></Divider>
            </Stack>
            <Text fontSize="48px" fontWeight={700} color="brand.200">
              SẮP DIỄN RA
            </Text>
          </Stack>
        </Stack>
      </Center>
    </>
  );
};

export default Events;
