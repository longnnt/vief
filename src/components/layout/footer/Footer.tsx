import { WebContainer } from "@/src/common/components/WebContainer";
import { Box, Center, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontSize="20px" fontWeight={"600"}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box bg="#F2F3F7" w="100%">
      <Center>
        <WebContainer>
          <SimpleGrid
            py="64px"
            columns={{ base: 3, sm: 2 }}
            spacing={"64px"}
            color="text"
          >
            <Stack align={"flex-start"} spacing="8px">
              <ListHeader>
                Dự án phát triển mạng lưới CIO ngành gỗ và chế biến gỗ
              </ListHeader>
              <Text fontSize="14px" fontWeight={"500"}>
                Điện thoại: 024 2239 7555
              </Text>
              <Text fontSize="14px" fontWeight={"500"}>
                Email: info@vief.vn
              </Text>
            </Stack>

            <Stack align={"flex-start"} spacing="8px">
              <ListHeader>Địa chỉ</ListHeader>
              <Text fontSize="14px" fontWeight={"500"}>
                Điện thoại: 024 2239 7555
              </Text>
              <Text fontSize="14px" fontWeight={"500"}>
                Email: info@vief.vn
              </Text>
              <Text fontSize="14px" fontWeight={"500"}>
                Điện thoại: 024 2239 7555
              </Text>
              <Text fontSize="14px" fontWeight={"500"}>
                Email: info@vief.vn
              </Text>
            </Stack>
            <Stack align={"flex-start"} spacing="8px">
              <ListHeader>Điều hướng</ListHeader>
              <Link href="" fontSize="14px" fontWeight={"500"}>
                Trang chủ
              </Link>
              <Link href="" fontSize="14px" fontWeight={"500"}>
                Chính sách
              </Link>
              <Link href="" fontSize="14px" fontWeight={"500"}>
                Sự kiện
              </Link>
              <Link href="" fontSize="14px" fontWeight={"500"}>
                Doanh nghiệp
              </Link>
              <Link href="" fontSize="14px" fontWeight={"500"}>
                Thư viện
              </Link>
              <Link href="" fontSize="14px" fontWeight={"500"}>
                Về chúng tôi
              </Link>
              <Link href="" fontSize="14px" fontWeight={"500"}>
                Liên hệ
              </Link>
            </Stack>
          </SimpleGrid>
        </WebContainer>
      </Center>
    </Box>
  );
};
export default Footer;
