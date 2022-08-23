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

const Story = () => {
  return (
    <>
      <Stack direction={"row"} spacing="64px">
        <Stack spacing="32px" w="50%">
          <Breadcrumb color="brand.100" fontSize="20px" fontWeight="600">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Chuyện doanh nghiệp</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Câu chuyện</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Text fontSize="48px" fontWeight={700} color="brand.200">
            IFC phối hợp ngân hàng Việt thúc đẩy dự án bảo vệ môi trường
          </Text>
          <Text textAlign={"justify"} fontSize="14px" fontWeight="500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
            in ornare quam viverra orci sagittis eu volutpat odio facilisis
            mauris sit amet massa vitae tortor condimentum lacinia quis vel eros
            donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue
            lacus
          </Text>
          <Box>
            <Button bg="brand.100" rightIcon={<ArrowForwardIcon />}>
              Xem thêm
            </Button>
          </Box>
        </Stack>
        <Box>
          <Image
            src="/companyIMG.png"
            w="592px"
            h="444px"
            borderRadius={"12px"}
          ></Image>
        </Box>
      </Stack>
    </>
  );
};

export default Story;
