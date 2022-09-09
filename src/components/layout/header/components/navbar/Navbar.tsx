import {
  ROUTE_ABOUT,
  ROUTE_HOME,
} from "@/src/common/constants/routes.constant";
import { useViefRouter } from "@/src/common/hooks/useViefRouter";

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Image,
  Link,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Category } from "../../../interfaces";
import CategoryCompany from "./MenuItem/CategoryCompany";
import CategoryEvent from "./MenuItem/CategoryEvent";
import CategoryLibrary from "./MenuItem/CategoryLibrary";
import CategoryPolicy from "./MenuItem/CategoryPolicy";
import NavbarMenu from "./navbarMenuResponsive/NavBarMenu";

const Navbar = ({
  dataPolicy,
  dataCompany,
  dataEvent,
  dataLibrary,
}: {
  dataPolicy?: Category;
  dataCompany?: Category;
  dataEvent?: Category;
  dataLibrary?: Category;
}) => {
  const router = useViefRouter();
  const handleRouter = (children: any) => {
    router.push(children);
  };
  return (
    <>
      <Box
        w="100%"
        alignItems={"center"}
        position="sticky"
        top={0}
        zIndex="10"
        shadow="xl"
        opacity="95%"
      >
        <Stack bg="white">
          <Flex
            alignSelf={"center"}
            w="full"
            px={{ base: "80px", sm: "20px" }}
            alignItems="center"
            h={{ sm: "66px", base: "96px" }}
            justifyContent={"space-between"}
          >
            <Box>
              <Image src="/fulllogo.png" alt=""></Image>
            </Box>
            <HStack
              display={{ md: "flex", sm: "none" }}
              fontSize="14px"
              fontWeight="500"
              spacing="32px"
              alignItems={"center"}
            >
              <Text
                onClick={() => handleRouter(ROUTE_HOME.en)}
                variant="text14"
                cursor="pointer"
              >
                Trang chủ
              </Text>
              <CategoryPolicy>{dataPolicy}</CategoryPolicy>
              <CategoryEvent>{dataEvent}</CategoryEvent>
              <CategoryCompany>{dataCompany}</CategoryCompany>
              <CategoryLibrary>{dataLibrary}</CategoryLibrary>
              <Text
                onClick={() => handleRouter(ROUTE_ABOUT.en)}
                variant="text14"
                cursor="pointer"
              >
                Về chúng tôi
              </Text>
              <Text
                onClick={() => handleRouter(ROUTE_ABOUT.en)}
                variant="text14"
                cursor="pointer"
              >
                Liên hệ
              </Text>
            </HStack>
            <Flex alignItems={"center"}>
              <Select variant={"unstyled"}>
                <option>VI</option>
                <option>EN</option>
              </Select>
              <ButtonGroup>
                <Link href="/" _hover={{ textDecoration: "none" }}>
                  <Button
                    bg="brand.100"
                    textColor="white"
                    display={{ md: "block", sm: "none" }}
                  >
                    Đăng nhập
                  </Button>
                </Link>
              </ButtonGroup>
              <NavbarMenu />
            </Flex>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};
export default Navbar;
