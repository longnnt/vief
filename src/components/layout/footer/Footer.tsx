import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const Links = [
  "Trang chủ",
  "Chính sách",
  "Sự kiện",
  "Doanh nghiệp",
  "Thư viện",
  "Về chúng tôi",
  "Liên Hệ",
];

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontSize="20px" fontWeight={"600"}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box bg="#F2F3F7">
      <Stack py={"64px"} px={"18%"}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={"64px"}
          color="#394160"
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
      </Stack>
    </Box>
  );
};
export default Footer;
