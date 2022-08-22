import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const Research = () => {
  return (
    <>
      <Stack spacing="32px">
        <Stack spacing="16px" textAlign={"right"}>
          <Breadcrumb color="brand.100" fontSize="20px" fontWeight="600">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Chuyện doanh nghiệp</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Nghiên cứu điển hình</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Text
            alignSelf={"flex-end"}
            fontSize="48px"
            fontWeight={700}
            w={"65%"}
            color="brand.200"
          >
            Đề xuất các nhóm giải pháp ngoài lâm nghiệp nhằm giảm phát thải khí
            nhà kính
          </Text>
        </Stack>
      </Stack>
    </>
  );
};

export default Research;
