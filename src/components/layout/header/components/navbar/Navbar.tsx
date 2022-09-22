import {
  ROUTE_ABOUT,
  ROUTE_HOME,
} from "@/src/common/constants/routes.constant";
import { useTranslation } from "@/src/common/hooks/useTranslation";
import { useViefRouter } from "@/src/common/hooks/useViefRouter";

import React, { useEffect, useRef } from "react";

import { Lang } from "@/src/common/interfaces/common.interface";

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
import { NavbarProps } from "../../../interfaces";
import CategoryCompany from "./MenuItem/CategoryCompany";
import CategoryEvent from "./MenuItem/CategoryEvent";
import CategoryLibrary from "./MenuItem/CategoryLibrary";
import CategoryPolicy from "./MenuItem/CategoryPolicy";
import NavbarMenu from "./navbarMenuResponsive/NavBarMenu";
import { useScrollPosition } from "../../../constant";

const Navbar = ({
  dataPolicy,
  dataCompany,
  dataEvent,
  dataLibrary,
}: {
  dataPolicy?: NavbarProps;
  dataCompany?: NavbarProps;
  dataEvent?: NavbarProps;
  dataLibrary?: NavbarProps;
}) => {
  const router = useViefRouter();

  // const scrollPosition = useScrollPosition()
  // const [navbar, setNavbar] = React.useState(false)

  const { t, locale } = useTranslation();

  const handleRouter = (children: any) => {
    router.push(children);
    // setNavbar(true)
  };

  // const handleScroll = () => {
  //   if(window.scrollY >0){
  //     setNavbar(true)
  //     console.log(window.scrollY)
  //   }
  //   else{
  //     setNavbar(false)
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  //   handleScroll()
  // },[])


  const changeLocale = (locale: Lang) => {
    router.push(
      {
        pathname: "router.pathname",
        query: router.query,
      },
      { pathname: router.asPath },
      { locale }
    );
  };

  return (
    <>
      <Box
        w="100%"
        alignItems={"center"}
        position="sticky"
        top={0}
        zIndex="10"
        opacity="95%"
      >
        <Stack bg={"white"}>
          <Flex
            alignSelf={"center"}
            w="full"
            px={{ base: "80px", sm: "20px" }}
            alignItems="center"
            h={{ sm: "66px", base: "80px" }}
            justifyContent={"space-between"}
          >
            <Box h="44px">
              <Image src="/logo-vief.png" alt="" h="full" />
            </Box>
            <HStack
              display={{ md: "flex", sm: "none" }}
              spacing="32px"
              alignItems={"center"}
              fontSize="14px"
              fontWeight="500"
            >
              <Text
                onClick={() => handleRouter(ROUTE_HOME.en)}
                variant="text14"
                fontWeight={router.pathname == "/" ? "600" : "500"}
                // _hover={navbar==true ?{
                //   fontWeight: '600',
                //   lineHeight: '20px',
                // }: {variant: 'text14'}}
                cursor="pointer"
              >
                {t("home")}
              </Text>
              <CategoryPolicy>{dataPolicy}</CategoryPolicy>
              <CategoryEvent>{dataEvent}</CategoryEvent>
              <CategoryCompany>{dataCompany}</CategoryCompany>
              <CategoryLibrary>{dataLibrary}</CategoryLibrary>
              <Text
                onClick={() => handleRouter(ROUTE_ABOUT.en)}
                variant="text14"
                cursor="pointer"
                fontWeight={router.pathname == "/about" ? "600" : "500"}
              >
                Về chúng tôi
              </Text>
            </HStack>
            <Flex alignItems={"center"}>
              <Select
                value={locale}
                variant={"unstyled"}
                onChange={(e) => changeLocale(e.target.value as Lang)}
              >
                <option value="vi">VI</option>
                <option value="en">EN</option>
              </Select>
              <ButtonGroup>
                <Link href="/login" _hover={{ textDecoration: "none" }}>
                  <Button
                    variant="primary"
                    textColor="white"
                    w="128px"
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
